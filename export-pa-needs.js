var en = require('./src/translations/en.json');
var pa = require('./src/translations/pa.json');
var fs = require('fs');

function getKeys(obj, prefix) {
  prefix = prefix || '';
  var keys = [];
  for (var i = 0; i < Object.keys(obj).length; i++) {
    var key = Object.keys(obj)[i];
    var path = prefix ? prefix + '.' + key : key;
    var val = obj[key];
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      keys = keys.concat(getKeys(val, path));
    }
    if (typeof val !== 'object' || val === null || Array.isArray(val)) {
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
var paSet = {};
paKeys.forEach(function(k) { paSet[k] = true; });
var enSet = {};
enKeys.forEach(function(k) { enSet[k] = true; });

var skipPatterns = ['http', 'www.', '@', '.com', '.ai', 'AppNode', 'GitHub', 'Discord', 'Twitter', 'LinkedIn', 'YouTube', 'Google', 'Apple', 'Microsoft', 'Stripe', 'PayPal'];

var result = {};

enKeys.forEach(function(k) {
  if (!paSet[k]) {
    var val = getValue(en, k);
    if (typeof val === 'string') {
      result[k] = val;
    }
  }
});

paKeys.forEach(function(k) {
  if (enSet[k]) {
    var enVal = getValue(en, k);
    var paVal = getValue(pa, k);
    if (typeof enVal === 'string' && typeof paVal === 'string' && enVal === paVal && enVal.length > 3) {
      var skip = false;
      for (var i = 0; i < skipPatterns.length; i++) {
        if (enVal.indexOf(skipPatterns[i]) !== -1) { skip = true; break; }
      }
      if (!skip) result[k] = enVal;
    }
  }
});

fs.writeFileSync('/tmp/pa-needs-translation.json', JSON.stringify(result, null, 2));
console.log('Total keys needing translation: ' + Object.keys(result).length);
