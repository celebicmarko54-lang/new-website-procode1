const en = require('./src/translations/en.json');
const ko = require('./src/translations/ko.json');

function getAllKeys(obj, prefix) {
  prefix = prefix || '';
  var keys = [];
  for (var key of Object.keys(obj)) {
    var val = obj[key];
    var fullKey = prefix ? prefix + '.' + key : key;
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      keys = keys.concat(getAllKeys(val, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

function getVal(obj, path) {
  var parts = path.split('.');
  var cur = obj;
  for (var p of parts) {
    if (cur === undefined || cur === null) return undefined;
    cur = cur[p];
  }
  return cur;
}

var enKeys = getAllKeys(en);
var koKeys = getAllKeys(ko);

var missingInKo = enKeys.filter(function(k) { return !koKeys.includes(k); });
var extraInKo = koKeys.filter(function(k) { return !enKeys.includes(k); });

// Find untranslated (same value as English)
var untranslated = enKeys.filter(function(k) {
  var enVal = getVal(en, k);
  var koVal = getVal(ko, k);
  return koVal !== undefined && enVal === koVal && typeof enVal === 'string' && enVal.length > 3;
});

console.log('=== MISSING IN KOREAN (exist in EN but not KO) ===');
missingInKo.forEach(function(k) { console.log(k + ' => ' + getVal(en, k)); });
console.log('\nTotal missing:', missingInKo.length);

console.log('\n=== EXTRA IN KOREAN (exist in KO but not EN) ===');
extraInKo.forEach(function(k) { console.log(k + ' => ' + getVal(ko, k)); });
console.log('\nTotal extra:', extraInKo.length);

console.log('\n=== UNTRANSLATED (same as English) ===');
untranslated.forEach(function(k) { console.log(k + ' => ' + getVal(ko, k)); });
console.log('\nTotal untranslated:', untranslated.length);
