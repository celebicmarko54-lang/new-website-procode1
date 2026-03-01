const en = JSON.parse(require('fs').readFileSync('src/translations/en.json','utf8'));
const ro = JSON.parse(require('fs').readFileSync('src/translations/ro.json','utf8'));

function flat(obj, prefix) {
  prefix = prefix || '';
  var r = {};
  for (var k of Object.keys(obj)) {
    var p = prefix ? prefix + '.' + k : k;
    var v = obj[k];
    if (Array.isArray(v)) {
      v.forEach(function(item, i) {
        if (typeof item === 'object' && item !== null) {
          Object.assign(r, flat(item, p + '[' + i + ']'));
        } else {
          r[p + '[' + i + ']'] = item;
        }
      });
    } else if (typeof v === 'object' && v !== null) {
      Object.assign(r, flat(v, p));
    } else {
      r[p] = v;
    }
  }
  return r;
}

const enF = flat(en);
const roF = flat(ro);
const sections = {};
for (var k of Object.keys(enF)) {
  var roV = roF[k];
  if (roV === undefined || roV === enF[k]) {
    var sec = k.split('.')[0].split('[')[0];
    sections[sec] = (sections[sec] || 0) + 1;
  }
}
var sorted = Object.entries(sections).sort(function(a,b){ return b[1]-a[1]; });
for (var entry of sorted) {
  console.log(entry[0] + ': ' + entry[1]);
}
