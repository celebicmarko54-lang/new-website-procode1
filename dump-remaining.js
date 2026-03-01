const fs = require('fs');
const en = JSON.parse(fs.readFileSync('src/translations/en.json', 'utf8'));
const bg = JSON.parse(fs.readFileSync('src/translations/bg.json', 'utf8'));

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
const bf = flat(bg);
const lines = [];
for (const k in ef) {
  if (bf[k] === ef[k] && typeof ef[k] === 'string') {
    lines.push(k + '|||' + ef[k]);
  }
}
fs.writeFileSync('/tmp/bg-remaining.txt', lines.join('\n'));
console.log('Wrote ' + lines.length + ' entries');
