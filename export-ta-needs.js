var fs = require('fs');
var en = require('./src/translations/en.json');
var ta = require('./src/translations/ta.json');

function flatten(obj, prefix) {
  prefix = prefix || '';
  var result = {};
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var fullKey = prefix ? prefix + '.' + key : key;
    var val = obj[key];
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      Object.assign(result, flatten(val, fullKey));
    }
    if (typeof val !== 'object' || Array.isArray(val)) {
      result[fullKey] = val;
    }
  }
  return result;
}

var enFlat = flatten(en);
var taFlat = flatten(ta);
var needs = [];
var enKeys = Object.keys(enFlat);
for (var i = 0; i < enKeys.length; i++) {
  var key = enKeys[i];
  if (!(key in taFlat)) { needs.push(key); }
  if (key in taFlat && taFlat[key] === enFlat[key] && typeof enFlat[key] === 'string' && enFlat[key].length > 3) { needs.push(key); }
}

var out = {};
needs.forEach(function(k) { out[k] = enFlat[k]; });
fs.writeFileSync('ta-needs.json', JSON.stringify(out, null, 2));
console.log('Written ' + needs.length + ' keys to ta-needs.json');
