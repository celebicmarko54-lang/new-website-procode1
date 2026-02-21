const en = require('./src/translations/en.json');
const tr = require('./src/translations/tr.json');

function getNestedValue(obj, path) {
  const keys = path.split('.');
  let result = obj;
  
  for (const key of keys) {
    if (result && typeof result === 'object') {
      if (key in result) {
        result = result[key];
      } else {
        console.log('  Key not found:', key, 'in keys:', Object.keys(result).slice(0, 5));
        return path;
      }
    } else {
      console.log('  Not object:', typeof result);
      return path;
    }
  }
  return typeof result === 'string' ? result : path;
}

console.log('=== Testing English translations ===');
console.log('nav.products:', getNestedValue(en, 'nav.products'));
console.log('common.switchToDarkMode:', getNestedValue(en, 'common.switchToDarkMode'));
console.log('homePage.videoSection.title:', getNestedValue(en, 'homePage.videoSection.title'));

console.log('\n=== Testing Turkish translations ===');
console.log('nav.products:', getNestedValue(tr, 'nav.products'));
console.log('common.switchToDarkMode:', getNestedValue(tr, 'common.switchToDarkMode'));
console.log('homePage.videoSection.title:', getNestedValue(tr, 'homePage.videoSection.title'));
