const ko = require('./src/translations/ko.json');
const en = require('./src/translations/en.json');

function flattenObject(obj, prefix, stringMap, arrayMap) {
  if (obj === null || obj === undefined) return;
  
  if (typeof obj === 'string') {
    stringMap.set(prefix, obj);
    return;
  }
  
  if (Array.isArray(obj)) {
    if (obj.every(item => typeof item === 'string')) {
      arrayMap.set(prefix, obj);
    }
    obj.forEach((item, index) => {
      flattenObject(item, prefix ? `${prefix}.${index}` : `${index}`, stringMap, arrayMap);
    });
    return;
  }
  
  if (typeof obj === 'object') {
    const entries = Object.entries(obj);
    for (const [key, value] of entries) {
      flattenObject(value, prefix ? `${prefix}.${key}` : key, stringMap, arrayMap);
    }
  }
}

const stringMap = new Map();
const arrayMap = new Map();
flattenObject(ko, '', stringMap, arrayMap);

console.log('Total flattened string keys:', stringMap.size);
console.log();
console.log('blogPage.searchPlaceholder:', stringMap.get('blogPage.searchPlaceholder'));
console.log('blogPage.posts.featured.title:', stringMap.get('blogPage.posts.featured.title'));
console.log('blogPage.categories.all:', stringMap.get('blogPage.categories.all'));
console.log('blogPage.categories.featured:', stringMap.get('blogPage.categories.featured'));
console.log('blogPage.posts.supabase.title:', stringMap.get('blogPage.posts.supabase.title'));
console.log();

// Check all blogPage keys
const blogKeys = [];
for (const [key, value] of stringMap) {
  if (key.startsWith('blogPage.posts')) {
    blogKeys.push(key);
  }
}
console.log('blogPage.posts keys count:', blogKeys.length);
console.log('First 5 blogPage.posts keys:', blogKeys.slice(0, 5));
