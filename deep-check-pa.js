const en = require('./src/translations/en.json');
const pa = require('./src/translations/pa.json');

// Deep check: for each EN key, check if PA has equivalent nested keys  
function deepCheck(enObj, paObj, path) {
  const issues = [];
  for (const key of Object.keys(enObj)) {
    const fullPath = path ? `${path}.${key}` : key;
    if (!(key in paObj)) {
      issues.push(`MISSING: ${fullPath}`);
    } else if (typeof enObj[key] === 'object' && enObj[key] !== null && !Array.isArray(enObj[key])) {
      if (typeof paObj[key] !== 'object' || paObj[key] === null) {
        issues.push(`TYPE_MISMATCH: ${fullPath} (EN=object, PA=${typeof paObj[key]})`);
      } else {
        issues.push(...deepCheck(enObj[key], paObj[key], fullPath));
      }
    } else if (Array.isArray(enObj[key])) {
      if (!Array.isArray(paObj[key])) {
        issues.push(`TYPE_MISMATCH: ${fullPath} (EN=array, PA=${typeof paObj[key]})`);
      } else if (paObj[key].length !== enObj[key].length) {
        issues.push(`ARRAY_LENGTH: ${fullPath} (EN=${enObj[key].length}, PA=${paObj[key].length})`);
      }
    } else if (typeof enObj[key] === 'string' && typeof paObj[key] === 'string') {
      if (paObj[key] === enObj[key] && enObj[key].length > 3 && !/^[A-Z0-9\s\.\-\_\@\#\$\%]+$/i.test(enObj[key])) {
        issues.push(`UNTRANSLATED: ${fullPath} = "${enObj[key]}"`);
      }
    }
  }
  return issues;
}

const issues = deepCheck(en, pa, '');
console.log(`Total issues: ${issues.length}`);
issues.forEach(i => console.log(i));
