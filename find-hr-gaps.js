const en = require('./src/translations/en.json');
const hr = require('./src/translations/hr.json');
const enKeys = Object.keys(en);
const hrKeys = Object.keys(hr);
const missingKeys = enKeys.filter(function(k) { return hrKeys.indexOf(k) === -1; });
console.log('Missing top-level keys:', JSON.stringify(missingKeys));

// Also count untranslated per section
for (const key of hrKeys) {
  if (typeof en[key] !== 'object' || typeof hr[key] !== 'object') continue;
  let untranslated = 0;
  function check(enObj, hrObj) {
    for (const [k, v] of Object.entries(enObj)) {
      if (hrObj[k] === undefined) { untranslated++; continue; }
      if (typeof v === 'string' && v === hrObj[k] && v.length > 3) {
        const ascii = v.replace(/[^a-zA-Z]/g, '').length;
        const total = v.replace(/\s/g, '').length;
        if (total > 0 && ascii/total > 0.7) untranslated++;
      } else if (typeof v === 'object' && v !== null && typeof hrObj[k] === 'object' && hrObj[k] !== null) {
        check(v, hrObj[k]);
      }
    }
  }
  check(en[key], hr[key]);
  if (untranslated > 0) console.log(key + ':', untranslated, 'untranslated');
}
