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

var needsTranslation = [];
var enKeys = Object.keys(enFlat);
for (var i = 0; i < enKeys.length; i++) {
  var key = enKeys[i];
  if (!(key in taFlat)) {
    needsTranslation.push({ key: key, value: enFlat[key], type: 'missing' });
  }
  if (key in taFlat && taFlat[key] === enFlat[key] && typeof enFlat[key] === 'string' && enFlat[key].length > 3) {
    needsTranslation.push({ key: key, value: enFlat[key], type: 'untranslated' });
  }
}

var sections = {};
needsTranslation.forEach(function(item) {
  var section = item.key.split('.')[0];
  if (!sections[section]) sections[section] = [];
  sections[section].push(item);
});

Object.keys(sections).sort().forEach(function(section) {
  console.log(section + ': ' + sections[section].length + ' items');
});
console.log('');
console.log('Total items needing translation:', needsTranslation.length);
