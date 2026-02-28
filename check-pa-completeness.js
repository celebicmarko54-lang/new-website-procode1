const en = require('./src/translations/en.json');
const pa = require('./src/translations/pa.json');

function getKeys(obj, prefix) {
  prefix = prefix || '';
  var keys = [];
  var objKeys = Object.keys(obj);
  for (var i = 0; i < objKeys.length; i++) {
    var key = objKeys[i];
    var path = prefix ? prefix + '.' + key : key;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      keys = keys.concat(getKeys(obj[key], path));
    } else {
      keys.push(path);
    }
  }
  return keys;
}

function getValue(obj, path) {
  var parts = path.split('.');
  var current = obj;
  for (var i = 0; i < parts.length; i++) {
    if (current === undefined || current === null) return undefined;
    current = current[parts[i]];
  }
  return current;
}

var enKeys = getKeys(en);
var paKeys = getKeys(pa);
var enSet = {};
enKeys.forEach(function(k) { enSet[k] = true; });
var paSet = {};
paKeys.forEach(function(k) { paSet[k] = true; });

var missingInPa = enKeys.filter(function(k) { return !paSet[k]; });
var extraInPa = paKeys.filter(function(k) { return !enSet[k]; });

// Find untranslated (PA value same as EN value and it's not a brand name/URL)
var untranslated = [];
var skipPatterns = ['http', 'www.', '@', '.com', '.ai', 'AppNode', 'GitHub', 'Discord', 'Twitter', 'LinkedIn', 'YouTube', 'Google', 'Apple', 'Microsoft', 'Stripe', 'PayPal'];
paKeys.forEach(function(k) {
  if (enSet[k]) {
    var enVal = getValue(en, k);
    var paVal = getValue(pa, k);
    if (typeof enVal === 'string' && typeof paVal === 'string' && enVal === paVal && enVal.length > 3) {
      var skip = false;
      for (var i = 0; i < skipPatterns.length; i++) {
        if (enVal.indexOf(skipPatterns[i]) !== -1) { skip = true; break; }
      }
      if (!skip) untranslated.push(k);
    }
  }
});

console.log('EN keys: ' + enKeys.length);
console.log('PA keys: ' + paKeys.length);
console.log('Missing in PA: ' + missingInPa.length);
if (missingInPa.length > 0) {
  missingInPa.forEach(function(k) {
    console.log('  MISSING: ' + k + ' = ' + JSON.stringify(getValue(en, k)));
  });
}
console.log('Extra in PA: ' + extraInPa.length);
console.log('Untranslated (same as EN): ' + untranslated.length);
if (untranslated.length > 0) {
  untranslated.forEach(function(k) {
    console.log('  UNTRANSLATED: ' + k + ' = ' + JSON.stringify(getValue(en, k)));
  });
}
