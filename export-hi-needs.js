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
const skipPatterns = /^(ISO|SOC|TLS|AES|SSL|GDPR|CCPA|HIPAA|DDoS|CDN|API|MFA|bcrypt|SDK|SLA|AAA|DNS|HTTPS|CI\/CD|Tab|React|Next|Vue|Svelte|Astro|Vanilla|SQLite|Postgres|Mongo|Redis|Supabase|Stripe|OpenAI|Vercel|GitHub|Resend|Cloudflare|Twilio|Auth0|Algolia|Shopify|Notion|Okta|Azure|Slack|PayPal|TechCorp|FinanceApp|DesignStudio|CloudScale|SecureBank|DataFlow|SaaS|AppNode|@|http|\.com)/i;

let needs = {};
for (let key of enKeys) {
  let hiVal = getValue(hi, key);
  let enVal = getValue(en, key);
  if (hiVal === undefined) {
    needs[key] = enVal;
  } else if (typeof hiVal === 'string' && typeof enVal === 'string' && hiVal === enVal && !skipPatterns.test(enVal) && enVal.length > 2) {
    needs[key] = enVal;
  }
}

fs.writeFileSync('/tmp/hi-needs.json', JSON.stringify(needs, null, 2), 'utf8');
console.log('Exported', Object.keys(needs).length, 'keys needing Hindi translation');
