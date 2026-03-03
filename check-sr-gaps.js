const en = require('./src/translations/en.json');
const sr = require('./src/translations/sr.json');

let missing = 0, untranslated = 0, translated = 0, total = 0;
const missingPaths = [], untranslatedPaths = [];

function walk(enObj, srObj, path = '') {
  for (const k in enObj) {
    const p = path ? path + '.' + k : k;
    const enVal = enObj[k];
    if (typeof enVal === 'string') {
      total++;
      if (!srObj || srObj[k] === undefined || srObj[k] === null) {
        missing++;
        missingPaths.push(p);
      } else if (srObj[k] === enVal) {
        untranslated++;
        untranslatedPaths.push(p + ' = ' + String(enVal).substring(0, 60));
      } else {
        translated++;
      }
    } else if (Array.isArray(enVal)) {
      if (!srObj || !Array.isArray(srObj[k])) {
        // count strings in array
        const c = JSON.stringify(enVal).split('"').length;
        missing += Math.floor(c/2);
        total += Math.floor(c/2);
        missingPaths.push(p + ' (array missing)');
      } else {
        enVal.forEach((item, i) => {
          if (typeof item === 'string') {
            total++;
            if (!srObj[k][i]) { missing++; missingPaths.push(p+'['+i+']'); }
            else if (srObj[k][i] === item) { untranslated++; untranslatedPaths.push(p+'['+i+'] = '+item.substring(0,60)); }
            else translated++;
          } else if (typeof item === 'object' && item !== null) {
            walk(item, srObj[k] && srObj[k][i] ? srObj[k][i] : null, p+'['+i+']');
          }
        });
      }
    } else if (typeof enVal === 'object' && enVal !== null) {
      walk(enVal, srObj ? srObj[k] : null, p);
    }
  }
}

walk(en, sr);
console.log('Total EN strings:', total);
console.log('Missing in SR:', missing);
console.log('Untranslated (same as EN):', untranslated);
console.log('Properly translated:', translated);
console.log('Coverage:', (translated/total*100).toFixed(1) + '%');
console.log('\n--- MISSING KEYS (first 50) ---');
missingPaths.slice(0, 50).forEach(p => console.log(p));
if (missingPaths.length > 50) console.log('... and', missingPaths.length - 50, 'more');
console.log('\n--- UNTRANSLATED (first 80) ---');
untranslatedPaths.slice(0, 80).forEach(p => console.log(p));
if (untranslatedPaths.length > 80) console.log('... and', untranslatedPaths.length - 80, 'more');
