const en = require('./src/translations/en.json');
const ta = require('./src/translations/ta.json');

function flatten(obj, prefix) {
  prefix = prefix || '';
  var result = {};
  for (var key of Object.keys(obj)) {
    var fullKey = prefix ? prefix + '.' + key : key;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      Object.assign(result, flatten(obj[key], fullKey));
    } else {
      result[fullKey] = obj[key];
    }
  }
  return result;
}

var enFlat = flatten(en);
var taFlat = flatten(ta);
var enKeys = Object.keys(enFlat);
var taKeys = Object.keys(taFlat);

var missing = 0;
var untranslated = 0;
var missingKeys = [];
var untranslatedKeys = [];

for (var key of enKeys) {
  if (!(key in taFlat)) {
    missing++;
    if (missing <= 30) missingKeys.push(key);
  } else if (taFlat[key] === enFlat[key] && typeof enFlat[key] === 'string' && enFlat[key].length > 3) {
    untranslated++;
    if (untranslated <= 30) untranslatedKeys.push(key + ' => ' + String(enFlat[key]).substring(0, 60));
  }
}

console.log('EN keys:', enKeys.length);
console.log('TA keys:', taKeys.length);
console.log('Missing from TA:', missing);
console.log('Untranslated (same as EN):', untranslated);
console.log('');
if (missingKeys.length > 0) {
  console.log('Sample missing:');
  missingKeys.forEach(function(k) { console.log('  ' + k); });
}
if (untranslatedKeys.length > 0) {
  console.log('Sample untranslated:');
  untranslatedKeys.forEach(function(k) { console.log('  ' + k); });
}
