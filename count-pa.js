const en = require('./src/translations/en.json');
const pa = require('./src/translations/pa.json');

function getLeafKeys(obj, prefix = '') {
  let keys = [];
  for (const k in obj) {
    const path = prefix ? `${prefix}.${k}` : k;
    if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {
      keys = keys.concat(getLeafKeys(obj[k], path));
    } else {
      keys.push(path);
    }
  }
  return keys;
}

function getVal(obj, path) {
  const parts = path.split('.');
  let cur = obj;
  for (const p of parts) {
    if (cur === undefined || cur === null || typeof cur !== 'object') return undefined;
    cur = cur[p];
  }
  return cur;
}

const enKeys = getLeafKeys(en);
let stillEnglish = 0;
let missing = 0;
const stillEnglishKeys = [];
const missingKeys = [];

for (const key of enKeys) {
  const enVal = getVal(en, key);
  const paVal = getVal(pa, key);
  if (paVal === undefined) {
    missing++;
    missingKeys.push(key);
  } else if (typeof enVal === 'string' && typeof paVal === 'string' && enVal === paVal && enVal.length > 2) {
    stillEnglish++;
    stillEnglishKeys.push({ key, val: enVal });
  }
}

console.log(`EN total leaf keys: ${enKeys.length}`);
console.log(`TOTAL STILL ENGLISH: ${stillEnglish}`);
console.log(`TOTAL MISSING: ${missing}`);
console.log(`TOTAL GAPS: ${stillEnglish + missing}`);
console.log('\n--- STILL ENGLISH (first 30) ---');
stillEnglishKeys.slice(0, 30).forEach(({ key, val }) => console.log(`  ${key}: "${val}"`));
if (stillEnglishKeys.length > 30) console.log(`  ... and ${stillEnglishKeys.length - 30} more`);
console.log('\n--- MISSING (first 30) ---');
missingKeys.slice(0, 30).forEach(k => console.log(`  ${k}`));
if (missingKeys.length > 30) console.log(`  ... and ${missingKeys.length - 30} more`);
