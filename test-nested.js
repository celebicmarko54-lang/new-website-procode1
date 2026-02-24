const ko = require('./src/translations/ko.json');
const en = require('./src/translations/en.json');

function getNestedValue(obj, path) {
  const keys = path.split('.');
  let result = obj;
  for (const key of keys) {
    if (result && typeof result === 'object') {
      if (Array.isArray(result)) {
        const index = parseInt(key, 10);
        if (!isNaN(index) && index >= 0 && index < result.length) {
          result = result[index];
        } else {
          return path;
        }
      } else if (key in result) {
        result = result[key];
      } else {
        return path;
      }
    } else {
      return path;
    }
  }
  return typeof result === 'string' ? result : path;
}

console.log('=== Testing getNestedValue on ko.json ===');
console.log('blogPage.searchPlaceholder:', getNestedValue(ko, 'blogPage.searchPlaceholder'));
console.log('blogPage.posts.featured.title:', getNestedValue(ko, 'blogPage.posts.featured.title'));
console.log('blogPage.categories.all:', getNestedValue(ko, 'blogPage.categories.all'));
console.log('blogPage.categories.featured:', getNestedValue(ko, 'blogPage.categories.featured'));
console.log();
console.log('=== Testing getNestedValue on en.json ===');
console.log('blogPage.posts.featured.title:', getNestedValue(en, 'blogPage.posts.featured.title'));
console.log();
console.log('=== ko.blogPage keys:', Object.keys(ko.blogPage));
console.log('=== ko.blogPage.posts type:', typeof ko.blogPage.posts);
console.log('=== ko.blogPage.posts keys:', Object.keys(ko.blogPage.posts));
console.log('=== ko.blogPage.posts.featured type:', typeof ko.blogPage.posts.featured);
console.log('=== ko.blogPage.posts.featured keys:', Object.keys(ko.blogPage.posts.featured));
