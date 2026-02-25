var fs = require('fs');
var en = JSON.parse(fs.readFileSync('src/translations/en.json', 'utf8'));
var ta = JSON.parse(fs.readFileSync('src/translations/ta.json', 'utf8'));

function getKeys(obj, prefix) {
  var result = [];
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    var key = prefix ? prefix + '.' + k : k;
    var val = obj[k];
    if (val && typeof val === 'object' && !Array.isArray(val)) {
      result = result.concat(getKeys(val, key));
    } else {
      result.push(key);
    }
  }
  return result;
}

var enKeys = getKeys(en, '');
var taKeys = getKeys(ta, '');
var taSet = {};
for (var i = 0; i < taKeys.length; i++) taSet[taKeys[i]] = true;

var missing = [];
for (var i = 0; i < enKeys.length; i++) {
  if (!taSet[enKeys[i]]) missing.push(enKeys[i]);
}

function getVal(obj, path) {
  var parts = path.split('.');
  var cur = obj;
  for (var i = 0; i < parts.length; i++) {
    if (cur === undefined || cur === null) return undefined;
    cur = cur[parts[i]];
  }
  return cur;
}

console.log('Missing: ' + missing.length);
for (var i = 0; i < missing.length; i++) {
  var val = getVal(en, missing[i]);
  console.log(missing[i] + ' === ' + JSON.stringify(val));
}
