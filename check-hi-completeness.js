var fs = require('fs');
var en = JSON.parse(fs.readFileSync('./src/translations/en.json', 'utf8'));
var hi = JSON.parse(fs.readFileSync('./src/translations/hi.json', 'utf8'));

function getLeafKeys(obj, prefix) {
  prefix = prefix || '';
  var keys = [];
  for (var k in obj) {
    var path = prefix ? prefix + '.' + k : k;
    if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {
      keys = keys.concat(getLeafKeys(obj[k], path));
    } else {
      keys.push(path);
    }
  }
  return keys;
}

function getValue(obj, path) {
  var parts = path.split('.');
  var cur = obj;
  for (var i = 0; i < parts.length; i++) {
    if (!cur || typeof cur !== 'object') return undefined;
    cur = cur[parts[i]];
  }
  return cur;
}

var enKeys = getLeafKeys(en);
var hiKeys = getLeafKeys(hi);
var hiSet = {};
hiKeys.forEach(function(k) { hiSet[k] = true; });

console.log('EN keys:', enKeys.length);
console.log('HI keys:', hiKeys.length);

// Missing
var missing = enKeys.filter(function(k) { return !hiSet[k]; });
console.log('Missing in HI:', missing.length);
missing.forEach(function(k) {
  var v = getValue(en, k);
  var s = typeof v === 'string' ? v.substring(0, 80) : JSON.stringify(v).substring(0, 80);
  console.log('  MISSING: ' + k + ' = ' + s);
});

// Untranslated - same string as English
var skipPatterns = [
  /^ISO \d/,
  /^SOC \d/,
  /^GDPR$/, /^HIPAA$/,
  /^(TechCorp|FinanceApp|DesignStudio|CloudScale|SecureBank|DataFlow)$/,
  /^SaaS$/, /^ENTERPRISE$/,
  /^\$\d/, /^https?:/, /^mailto:/,
  /^[A-Z][a-z]+ [A-Z][a-z]+$/, // Person names
  /^(Supabase|Stripe|OpenAI|Vercel|GitHub|Resend|Cloudflare|Twilio|Auth0|Algolia|Shopify|Notion)$/,
  /^(React \+ Vite|Next\.js|Vue 3|Svelte|Astro|Vanilla JS)$/,
  /^(SQLite|PostgreSQL|MongoDB|Redis)$/,
  /^SSO/, /^john@/, /^support@/,
  /^Backend$/, /^App Store$/, /^Google Play$/,
  /^Amazon Web Services/,
];

var untrans = 0;
var untransList = [];
for (var i = 0; i < enKeys.length; i++) {
  var k = enKeys[i];
  if (hiSet[k]) {
    var ev = getValue(en, k);
    var hv = getValue(hi, k);
    if (typeof ev === 'string' && ev === hv) {
      var shouldSkip = false;
      for (var j = 0; j < skipPatterns.length; j++) {
        if (skipPatterns[j].test(ev)) { shouldSkip = true; break; }
      }
      if (!shouldSkip) {
        untrans++;
        untransList.push(k);
      }
    }
  }
}

console.log('Untranslated (same as EN):', untrans);
untransList.forEach(function(k) {
  console.log('  UNTRANSLATED: ' + k + ' = ' + getValue(en, k).substring(0, 100));
});
