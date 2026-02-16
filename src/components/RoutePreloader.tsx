'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Prefetch all main routes after initial page load for instant navigation
const ROUTES_TO_PREFETCH = [
  '/about',
  '/pricing',
  '/gallery',
  '/docs',
  '/blog',
  '/changelog',
  '/enterprise',
  '/products/agent',
  '/products/database',
  '/products/publish',
  '/products/security',
  '/products/integrations',
  '/products/mobile',
  '/login',
  '/signup',
  '/support',
  '/careers',
  '/solutions',
  '/usecases/business-apps',
  '/usecases/mobile-apps',
  '/usecases/rapid-prototyping',
];

export default function RoutePreloader() {
  const router = useRouter();

  useEffect(() => {
    // Use requestIdleCallback to prefetch routes when browser is idle
    const prefetchRoutes = () => {
      let index = 0;
      const prefetchNext = () => {
        if (index < ROUTES_TO_PREFETCH.length) {
          router.prefetch(ROUTES_TO_PREFETCH[index]);
          index++;
          // Stagger prefetches to avoid overwhelming the network
          if ('requestIdleCallback' in window) {
            (window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(prefetchNext);
          } else {
            setTimeout(prefetchNext, 100);
          }
        }
      };
      prefetchNext();
    };

    // Start prefetching after a short delay to let the main content load first
    const timer = setTimeout(prefetchRoutes, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return null;
}
