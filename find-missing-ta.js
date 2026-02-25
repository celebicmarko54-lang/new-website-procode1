var fs = require('fs');
var en = JSON.parse(fs.readFileSync('src/translations/en.json', 'utf8'));
var ta = JSON.parse(fs.readFileSync('src/translations/ta.json', 'utf8'));

function flatten(obj, prefix) {
  var result = {};
  for (var k in obj) {
    var key = prefix ? prefix + '.' + k : k;
    if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {
      var nested = flatten(obj[k], key);
      for (var nk in nested) {
        result[nk] = nested[nk];
      }
    } else {
      result[key] = obj[k];
    }
  }
  return result;
}

var enFlat = flatten(en, '');
var taFlat = flatten(ta, '');
var missing = [];
for (var k in enFlat) {
  if (!(k in taFlat)) missing.push(k);
}
console.log('Total EN keys:', Object.keys(enFlat).length);
console.log('Total TA keys:', Object.keys(taFlat).length);
console.log('Missing keys:', missing.length);
console.log('---MISSING---');
missing.forEach(function(k) {
  var v = enFlat[k];
  if (typeof v === 'string') v = v.substring(0, 150);
  else v = JSON.stringify(v).substring(0, 150);
  console.log(k + ' = ' + v);
});
