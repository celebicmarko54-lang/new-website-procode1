const en = require('./src/translations/en.json');
const sr = require('./src/translations/sr.json');

const missing = [], untranslated = [];

function walk(enObj, srObj, path = '') {
  for (const k in enObj) {
    const p = path ? path + '.' + k : k;
    const enVal = enObj[k];
    if (typeof enVal === 'string') {
      if (!srObj || srObj[k] === undefined || srObj[k] === null) {
        missing.push(p);
      } else if (srObj[k] === enVal) {
        untranslated.push(p);
      }
    } else if (Array.isArray(enVal)) {
      if (!srObj || !Array.isArray(srObj[k])) {
        missing.push(p + ' (ARRAY)');
      } else {
        enVal.forEach((item, i) => {
          if (typeof item === 'string') {
            if (!srObj[k][i]) missing.push(p+'['+i+']');
            else if (srObj[k][i] === item) untranslated.push(p+'['+i+']');
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

// Group missing by top-level section
const missBySection = {};
missing.forEach(p => {
  const sec = p.split('.')[0].split('[')[0];
  if (!missBySection[sec]) missBySection[sec] = [];
  missBySection[sec].push(p);
});

const untransBySection = {};
untranslated.forEach(p => {
  const sec = p.split('.')[0].split('[')[0];
  if (!untransBySection[sec]) untransBySection[sec] = [];
  untransBySection[sec].push(p);
});

console.log('=== MISSING BY SECTION ===');
for (const [sec, paths] of Object.entries(missBySection).sort((a,b) => b[1].length - a[1].length)) {
  console.log(sec + ': ' + paths.length);
}
console.log('\n=== UNTRANSLATED BY SECTION ===');
for (const [sec, paths] of Object.entries(untransBySection).sort((a,b) => b[1].length - a[1].length)) {
  console.log(sec + ': ' + paths.length);
}
