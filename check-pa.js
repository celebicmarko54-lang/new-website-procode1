const en = require('./src/translations/en.json');
const pa = require('./src/translations/pa.json');

const enKeys = Object.keys(en);
const paKeys = Object.keys(pa);

const missing = enKeys.filter(k => !(k in pa));
const extra = paKeys.filter(k => !(k in en));

console.log('EN keys:', enKeys.length);
console.log('PA keys:', paKeys.length);
console.log('Missing in PA:', missing.length);
if (missing.length > 0) {
  console.log('Missing keys:', JSON.stringify(missing, null, 2));
}
console.log('Extra in PA:', extra.length);
if (extra.length > 0) {
  console.log('Extra keys:', JSON.stringify(extra, null, 2));
}

// Check for untranslated values (same as English)
const untranslated = enKeys.filter(k => {
  if (!(k in pa)) return false;
  if (typeof en[k] === 'string' && typeof pa[k] === 'string') {
    return pa[k] === en[k] && en[k].length > 3;
  }
  return false;
});

console.log('Untranslated (same as EN):', untranslated.length);
if (untranslated.length > 0) {
  console.log('Untranslated keys:', JSON.stringify(untranslated.slice(0, 50), null, 2));
}

// Check nested structure - top level sections
console.log('\n--- Top-level sections in EN ---');
for (const k of enKeys) {
  const enType = typeof en[k];
  const paType = typeof pa[k];
  if (enType === 'object' && en[k] !== null) {
    const enSubKeys = Object.keys(en[k]);
    const paSubKeys = pa[k] ? Object.keys(pa[k]) : [];
    const subMissing = enSubKeys.filter(sk => !(sk in (pa[k] || {})));
    if (subMissing.length > 0) {
      console.log(`  ${k}: ${enSubKeys.length} EN sub-keys, ${paSubKeys.length} PA sub-keys, MISSING ${subMissing.length}:`, subMissing.slice(0, 20));
    }
  }
}
