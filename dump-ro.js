const fs = require('fs');
const en = JSON.parse(fs.readFileSync('src/translations/en.json', 'utf8'));
const ro = JSON.parse(fs.readFileSync('src/translations/ro.json', 'utf8'));

function flat(obj, prefix) {
  prefix = prefix || '';
  const result = {};
  for (const key in obj) {
    const path = prefix ? prefix + '.' + key : key;
    const val = obj[key];
    if (val && typeof val === 'object' && !Array.isArray(val)) {
      Object.assign(result, flat(val, path));
    } else if (Array.isArray(val)) {
      for (let i = 0; i < val.length; i++) {
        if (val[i] && typeof val[i] === 'object') {
          Object.assign(result, flat(val[i], path + '[' + i + ']'));
        } else {
          result[path + '[' + i + ']'] = val[i];
        }
      }
    } else {
      result[path] = val;
    }
  }
  return result;
}

const ef = flat(en);
const rf = flat(ro);

const missing = [];
const untranslated = [];
for (const k in ef) {
  if (rf[k] === undefined) {
    missing.push(k + '|||' + ef[k]);
  } else if (rf[k] === ef[k] && typeof ef[k] === 'string') {
    untranslated.push(k + '|||' + ef[k]);
  }
}

fs.writeFileSync('/tmp/ro-missing.txt', missing.join('\n'));
fs.writeFileSync('/tmp/ro-untranslated.txt', untranslated.join('\n'));
console.log('Missing: ' + missing.length);
console.log('Untranslated: ' + untranslated.length);
