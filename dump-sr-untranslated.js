const en = require('./src/translations/en.json');
const sr = require('./src/translations/sr.json');

function getStrings(obj, prefix = '') {
  const result = {};
  for (const [k, v] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${k}` : k;
    if (typeof v === 'string') result[path] = v;
    else if (Array.isArray(v)) {
      v.forEach((item, i) => {
        if (typeof item === 'string') result[`${path}[${i}]`] = item;
        else if (typeof item === 'object' && item !== null) {
          Object.assign(result, getStrings(item, `${path}[${i}]`));
        }
      });
    } else if (typeof v === 'object' && v !== null) {
      Object.assign(result, getStrings(v, path));
    }
  }
  return result;
}

const enStr = getStrings(en);
const srStr = getStrings(sr);
const missing = Object.keys(enStr).filter(k => !(k in srStr));
const untranslated = Object.keys(enStr).filter(k => k in srStr && srStr[k] === enStr[k] && !/^[\d$€£¥₹💰📈🏥🛡️✨🎮📊🔧⚡🌐📱🤖💻🔒📡🏢🎯🚀✅❌⚠️]/.test(enStr[k]) && enStr[k].length > 1 && !/^(API|PDF|SSL|SSO|SOC|SAML|OAuth|HTTP|HTTPS|URL|SDK|CLI|IDE|CSS|HTML|JSON|XML|YAML|WebSocket|GraphQL|REST|CRUD|JWT|DNS|CDN|CI\/CD|DevOps|GitHub|Docker|Kubernetes|AWS|Azure|GCP|Firebase|Supabase|Stripe|Vercel|Netlify|MongoDB|PostgreSQL|MySQL|Redis|Node\.js|React|Vue|Angular|Next\.js|Svelte|TypeScript|JavaScript|Python|Go|Rust|Java|PHP|Swift|Kotlin|Ruby|C\+\+|Flutter|Tailwind|Bootstrap|Figma|Slack|Discord|Notion|Zapier|Twilio|SendGrid|AppNode|OpenAI|GPT|LLM|NLP|ML|DDoS|XSS|CSRF|GDPR|CCPA|HIPAA|PCI DSS|AES|RSA|TLS|SHA|HMAC|bcrypt|scrypt|Argon2|PBKDF2|ECDSA|Ed25519|ChaCha20|Poly1305|AEAD|HKDF|X25519|P-256|P-384|P-521|secp256k1|Curve25519)$/.test(enStr[k].trim()));

// Group by top-level section
const sections = {};
[...missing, ...untranslated].forEach(k => {
  const sec = k.split('.')[0].split('[')[0];
  if (!sections[sec]) sections[sec] = { missing: [], untranslated: [] };
  if (missing.includes(k)) sections[sec].missing.push(k);
  else sections[sec].untranslated.push(k);
});

Object.entries(sections).sort((a,b) => (b[1].missing.length + b[1].untranslated.length) - (a[1].missing.length + a[1].untranslated.length)).forEach(([sec, data]) => {
  console.log(`\n=== ${sec} (${data.missing.length}M + ${data.untranslated.length}U = ${data.missing.length + data.untranslated.length}) ===`);
});
