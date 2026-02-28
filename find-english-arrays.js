// Find all arrays in hi.json that still contain English text
var fs = require('fs');
var en = JSON.parse(fs.readFileSync('./src/translations/en.json', 'utf8'));
var hi = JSON.parse(fs.readFileSync('./src/translations/hi.json', 'utf8'));

function findArrays(obj, enObj, prefix) {
  prefix = prefix || '';
  for (var k in obj) {
    var path = prefix ? prefix + '.' + k : k;
    if (Array.isArray(obj[k])) {
      // Check if array has English strings
      var hasEnglish = false;
      obj[k].forEach(function(item) {
        if (typeof item === 'string' && /[a-zA-Z]{3,}/.test(item)) {
          hasEnglish = true;
        } else if (typeof item === 'object' && item !== null) {
          for (var ik in item) {
            if (typeof item[ik] === 'string' && /[a-zA-Z]{4,}/.test(item[ik]) && !/^(AppNode|http|email|@)/.test(item[ik])) {
              hasEnglish = true;
            }
          }
        }
      });
      if (hasEnglish) {
        console.log('ENGLISH ARRAY: ' + path + ' = ' + JSON.stringify(obj[k]).substring(0, 150));
      }
    } else if (typeof obj[k] === 'object' && obj[k] !== null) {
      findArrays(obj[k], enObj ? enObj[k] : undefined, path);
    }
  }
}

findArrays(hi, en);
