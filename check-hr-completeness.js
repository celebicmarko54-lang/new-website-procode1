const en = require('./src/translations/en.json');
const hr = require('./src/translations/hr.json');

// Find missing top-level keys
const enKeys = Object.keys(en);
const hrKeys = Object.keys(hr);
const missingTop = enKeys.filter(k => !hrKeys.includes(k));
console.log('Missing top-level keys in HR:', missingTop);

// Find missing nested keys (scalar only)
function findMissing(enObj, hrObj, path) {
  const missing = [];
  for (const [k, v] of Object.entries(enObj)) {
    const p = path ? path + '.' + k : k;
    if (hrObj[k] === undefined) {
      missing.push(p);
    } else if (typeof v === 'string' && typeof hrObj[k] === 'string' && v === hrObj[k] && v.length > 3) {
      // Same as English — possibly untranslated
      // Skip known intentional ones
      if (!/^(AppNode|AI|CDN|CTO|SSO|SAML|GDPR|HIPAA|SOC|ISO|http|@|Facebook|Instagram|TikTok|X \/ Twitter|GitHub|Discord|LinkedIn|YouTube|Reddit|Google|Stripe|Supabase|Vercel|Netlify|Cloudflare|OpenAI|Resend|Twilio|Auth0|Algolia|Shopify|Notion|Docker|Kubernetes|PostgreSQL|MongoDB|Redis|Firebase|Next\.js|React|Vue|Angular|Svelte|Node\.js|Python|TypeScript|JavaScript|Pro|security-researcher)/.test(v)) {
        // Could be untranslated - check if likely English
        const ascii = v.replace(/[^a-zA-Z]/g, '').length;
        const total = v.replace(/\s/g, '').length;
        if (total > 0 && ascii/total > 0.7) {
          missing.push(p + ' [UNTRANSLATED: ' + v.substring(0, 50) + ']');
        }
      }
    } else if (typeof v === 'object' && v !== null && !Array.isArray(v) && typeof hrObj[k] === 'object' && hrObj[k] !== null && !Array.isArray(hrObj[k])) {
      missing.push(...findMissing(v, hrObj[k], p));
    }
  }
  return missing;
}

const missing = findMissing(en, hr, '');
console.log('\nTotal missing/untranslated paths:', missing.length);
missing.forEach(m => console.log(' -', m));

// Check array length mismatches
function compareArrays(obj1, obj2, path) {
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) {
      console.log('ARRAY MISMATCH:', path, 'EN:', obj1.length, 'HR:', obj2.length);
    }
  } else if (typeof obj1 === 'object' && obj1 !== null && typeof obj2 === 'object' && obj2 !== null) {
    for (const k of Object.keys(obj1)) {
      if (obj2[k] !== undefined) {
        compareArrays(obj1[k], obj2[k], path + '.' + k);
      }
    }
  }
}
console.log('\n=== Array mismatches ===');
compareArrays(en, hr, '');
