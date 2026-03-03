const en = require('./src/translations/en.json');
const sr = require('./src/translations/sr.json');

// Dump all missing key paths with their EN values
const missing = [];

function walk(enObj, srObj, path = '') {
  for (const k in enObj) {
    const p = path ? path + '.' + k : k;
    const enVal = enObj[k];
    if (typeof enVal === 'string') {
      if (!srObj || srObj[k] === undefined || srObj[k] === null) {
        missing.push({ path: p, value: enVal });
      }
    } else if (Array.isArray(enVal)) {
      if (!srObj || !Array.isArray(srObj[k])) {
        missing.push({ path: p, value: 'ARRAY:' + JSON.stringify(enVal).substring(0, 500) });
      } else {
        enVal.forEach((item, i) => {
          if (typeof item === 'string') {
            if (!srObj[k][i]) missing.push({ path: p+'['+i+']', value: item });
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
missing.forEach(m => console.log(m.path + ' ||| ' + m.value));
