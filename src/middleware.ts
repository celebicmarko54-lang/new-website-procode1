import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rate limiting store (in-memory, resets on restart — sufficient for edge/serverless)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 100; // max requests per window per IP

// Paths that should never be publicly accessible
const BLOCKED_PATHS = [
  '/.env',
  '/.env.local',
  '/.env.production',
  '/.env.development',
  '/.git',
  '/.gitignore',
  '/package.json',
  '/package-lock.json',
  '/tsconfig.json',
  '/next.config.ts',
  '/next.config.js',
  '/node_modules',
  '/src',
  '/.next',
  '/postcss.config',
  '/eslint.config',
  '/playwright.config',
  '/wp-admin',
  '/wp-login',
  '/xmlrpc.php',
  '/phpmyadmin',
  '/admin',
  '/.htaccess',
  '/.htpasswd',
  '/server-status',
  '/debug',
  '/_debug',
];

// Suspicious patterns in URLs (path traversal, injection attempts)
const SUSPICIOUS_PATTERNS = [
  /\.\.\//,                    // Path traversal
  /<script/i,                  // XSS attempt
  /union\s+select/i,           // SQL injection
  /\beval\s*\(/i,              // Code injection
  /javascript:/i,              // JS protocol
  /on(error|load|click)\s*=/i, // Event handler injection
  /%00/,                       // Null byte injection
  /\x00/,                      // Null byte
];

function getClientIP(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    '127.0.0.1'
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// Clean up old entries periodically (prevent memory leak)
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap) {
    if (now > entry.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, 60 * 1000);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const url = request.url;
  const ip = getClientIP(request);

  // 1. Rate limiting
  if (isRateLimited(ip)) {
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'Retry-After': '60',
        'Content-Type': 'text/plain',
      },
    });
  }

  // 2. Block access to sensitive files/paths
  const lowerPath = pathname.toLowerCase();
  for (const blocked of BLOCKED_PATHS) {
    if (lowerPath === blocked || lowerPath.startsWith(blocked + '/')) {
      return new NextResponse('Not Found', { status: 404 });
    }
  }

  // 3. Block files by extension that should never be served
  if (/\.(env|git|sql|bak|log|sh|py|php|asp|jsp|cgi|ini|conf|yml|yaml|toml|lock)$/i.test(pathname)) {
    return new NextResponse('Not Found', { status: 404 });
  }

  // 4. Detect suspicious URL patterns
  for (const pattern of SUSPICIOUS_PATTERNS) {
    if (pattern.test(decodeURIComponent(url))) {
      return new NextResponse('Bad Request', { status: 400 });
    }
  }

  // 5. Block oversized URLs (buffer overflow attempts)
  if (url.length > 8192) {
    return new NextResponse('URI Too Long', { status: 414 });
  }

  // 6. Block requests with suspicious user agents
  const userAgent = request.headers.get('user-agent') || '';
  const maliciousAgents = /sqlmap|nikto|nmap|dirbuster|gobuster|masscan|nuclei|wpscan|havij/i;
  if (maliciousAgents.test(userAgent)) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  // Continue with the request
  const response = NextResponse.next();

  // Add security headers that complement next.config headers
  response.headers.set('X-Robots-Tag', 'index, follow');
  response.headers.set('X-Permitted-Cross-Domain-Policies', 'none');
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  response.headers.set('Cross-Origin-Resource-Policy', 'same-origin');
  response.headers.set('Cross-Origin-Embedder-Policy', 'credentialless');

  return response;
}

// Run middleware on all routes EXCEPT static files and Next.js internals
export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     * - public folder static assets (images, videos, svgs)
     */
    '/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|mp4|woff|woff2|ico)$).*)',
  ],
};
