const en = require('./src/translations/en.json');
const hi = require('./src/translations/hi.json');

function compareArrays(obj1, obj2, path) {
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) {
      console.log('LENGTH MISMATCH:', path, 'EN:', obj1.length, 'HI:', obj2.length);
    }
    // Also check nested arrays in array items
    const min = Math.min(obj1.length, obj2.length);
    for (let i = 0; i < min; i++) {
      if (typeof obj1[i] === 'object' && obj1[i] !== null) {
        compareArrays(obj1[i], obj2[i], path + '[' + i + ']');
      }
    }
  } else if (typeof obj1 === 'object' && obj1 !== null && typeof obj2 === 'object' && obj2 !== null) {
    for (const k of Object.keys(obj1)) {
      if (obj2[k] !== undefined) {
        compareArrays(obj1[k], obj2[k], path + '.' + k);
      }
    }
  }
}

compareArrays(en, hi, '');
