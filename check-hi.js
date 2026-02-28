const fs = require('fs');
const en = JSON.parse(fs.readFileSync('./src/translations/en.json','utf8'));
const hi = JSON.parse(fs.readFileSync('./src/translations/hi.json','utf8'));

function getLeafKeys(obj, prefix) {
  let keys = [];
  for (let k in obj) {
    let path = prefix ? prefix + '.' + k : k;
    if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {
      keys = keys.concat(getLeafKeys(obj[k], path));
    } else {
      keys.push(path);
    }
  }
  return keys;
}

function getValue(obj, path) {
  let parts = path.split('.');
  let c = obj;
  for (let p of parts) {
    if (!c || typeof c !== 'object') return undefined;
    c = c[p];
  }
  return c;
}

const enKeys = getLeafKeys(en, '');
const hiKeys = getLeafKeys(hi, '');
let missing = [];
let untranslated = [];
const skipPatterns = /^(ISO|SOC|TLS|AES|SSL|GDPR|CCPA|HIPAA|DDoS|CDN|API|MFA|bcrypt|SDK|SLA|AAA|DNS|HTTPS|CI\/CD|Tab|React|Next|Vue|Svelte|Astro|Vanilla|SQLite|Postgres|Mongo|Redis|Supabase|Stripe|OpenAI|Vercel|GitHub|Resend|Cloudflare|Twilio|Auth0|Algolia|Shopify|Notion|Okta|Azure|Slack|PayPal|TechCorp|FinanceApp|DesignStudio|CloudScale|SecureBank|DataFlow|SaaS|AppNode|@|http|\.com)/i;

for (let key of enKeys) {
  let hiVal = getValue(hi, key);
  if (hiVal === undefined) {
    missing.push(key);
    continue;
  }
  if (typeof hiVal === 'string' && typeof getValue(en, key) === 'string') {
    let enVal = getValue(en, key);
    if (hiVal === enVal && !skipPatterns.test(enVal) && enVal.length > 2) {
      untranslated.push(key);
    }
  }
}

console.log('EN keys:', enKeys.length);
console.log('HI keys:', hiKeys.length);
console.log('Missing in HI:', missing.length);
if (missing.length > 0) {
  missing.forEach(function(k) { console.log('  MISSING:', k, '=', JSON.stringify(getValue(en, k)).substring(0, 120)); });
}
console.log('Untranslated (same as EN):', untranslated.length);
if (untranslated.length > 0) {
  untranslated.forEach(function(k) { console.log('  UNTRANSLATED:', k, '=', JSON.stringify(getValue(en, k)).substring(0, 120)); });
}
