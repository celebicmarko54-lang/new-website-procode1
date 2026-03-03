const en = require('./src/translations/en.json');
const el = require('./src/translations/el.json');

let missing = 0, untranslated = 0, translated = 0, total = 0;
const missingBySection = {}, untranslatedBySection = {};
const allMissing = [], allUntranslated = [];

function walk(enObj, elObj, path = '') {
  for (const key of Object.keys(enObj)) {
    const fullPath = path ? `${path}.${key}` : key;
    const enVal = enObj[key];
    const elVal = elObj ? elObj[key] : undefined;
    if (typeof enVal === 'object' && enVal !== null && !Array.isArray(enVal)) {
      walk(enVal, typeof elVal === 'object' && elVal !== null ? elVal : {}, fullPath);
    } else if (Array.isArray(enVal)) {
      for (let i = 0; i < enVal.length; i++) {
        const ep = `${fullPath}[${i}]`;
        if (typeof enVal[i] === 'object' && enVal[i] !== null) {
          walk(enVal[i], Array.isArray(elVal) && elVal[i] ? elVal[i] : {}, ep);
        } else {
          total++;
          const ev = Array.isArray(elVal) ? elVal[i] : undefined;
          const section = fullPath.split('.')[0];
          if (ev === undefined) {
            missing++;
            missingBySection[section] = (missingBySection[section] || 0) + 1;
            allMissing.push(`  ${ep} => ${enVal[i]}`);
          } else if (ev === enVal[i]) {
            untranslated++;
            untranslatedBySection[section] = (untranslatedBySection[section] || 0) + 1;
            allUntranslated.push(`  ${ep} => ${enVal[i]}`);
          } else {
            translated++;
          }
        }
      }
    } else {
      total++;
      const section = fullPath.split('.')[0];
      if (elVal === undefined) {
        missing++;
        missingBySection[section] = (missingBySection[section] || 0) + 1;
        allMissing.push(`  ${fullPath} => ${enVal}`);
      } else if (elVal === enVal) {
        untranslated++;
        untranslatedBySection[section] = (untranslatedBySection[section] || 0) + 1;
        allUntranslated.push(`  ${fullPath} => ${enVal}`);
      } else {
        translated++;
      }
    }
  }
}

walk(en, el);
console.log(`Total EN strings: ${total}`);
console.log(`Missing in EL: ${missing}`);
console.log(`Untranslated (same as EN): ${untranslated}`);
console.log(`Properly translated: ${translated}`);
console.log(`\n=== MISSING BY SECTION ===`);
for (const [s, c] of Object.entries(missingBySection).sort((a, b) => b[1] - a[1])) console.log(`${s}: ${c} missing`);
console.log(`\n=== UNTRANSLATED BY SECTION ===`);
for (const [s, c] of Object.entries(untranslatedBySection).sort((a, b) => b[1] - a[1])) console.log(`${s}: ${c} untranslated`);
console.log(`\n=== ALL MISSING KEYS ===`);
allMissing.forEach(m => console.log(m));
console.log(`\n=== ALL UNTRANSLATED ===`);
allUntranslated.forEach(u => console.log(u));
