const en = require('./src/translations/en.json');
const el = require('./src/translations/el.json');

function getKeys(obj, prefix) {
  prefix = prefix || '';
  var keys = [];
  for (var key in obj) {
    var fullKey = prefix ? prefix + '.' + key : key;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      keys = keys.concat(getKeys(obj[key], fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

var enKeys = getKeys(en);
var elKeys = getKeys(el);

var missingInEl = enKeys.filter(function(k) { return !elKeys.includes(k); });
var extraInEl = elKeys.filter(function(k) { return !enKeys.includes(k); });

console.log('EN keys:', enKeys.length);
console.log('EL keys:', elKeys.length);
console.log('Missing in EL (' + missingInEl.length + '):');
missingInEl.forEach(function(k) { console.log('  ' + k); });
console.log('Extra in EL (' + extraInEl.length + '):');
extraInEl.forEach(function(k) { console.log('  ' + k); });

// Also check for keys that exist in EL but have English text (untranslated)
function getValue(obj, path) {
  var parts = path.split('.');
  var current = obj;
  for (var i = 0; i < parts.length; i++) {
    if (current === undefined || current === null) return undefined;
    current = current[parts[i]];
  }
  return current;
}

console.log('\nKeys with same value in EN and EL (possibly untranslated):');
var same = 0;
elKeys.forEach(function(k) {
  var enVal = getValue(en, k);
  var elVal = getValue(el, k);
  if (enVal && elVal && enVal === elVal && typeof enVal === 'string' && enVal.length > 3) {
    console.log('  ' + k + ': "' + enVal + '"');
    same++;
  }
});
console.log('Total possibly untranslated: ' + same);
