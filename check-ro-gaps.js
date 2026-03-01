const fs = require('fs');

const en = JSON.parse(fs.readFileSync('src/translations/en.json', 'utf8'));
const ro = JSON.parse(fs.readFileSync('src/translations/ro.json', 'utf8'));

function flatten(obj, prefix = '') {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (Array.isArray(value)) {
      value.forEach((item, i) => {
        if (typeof item === 'object' && item !== null) {
          Object.assign(result, flatten(item, `${path}[${i}]`));
        } else {
          result[`${path}[${i}]`] = item;
        }
      });
    } else if (typeof value === 'object' && value !== null) {
      Object.assign(result, flatten(value, path));
    } else {
      result[path] = value;
    }
  }
  return result;
}

const enFlat = flatten(en);
const roFlat = flatten(ro);

const enKeys = Object.keys(enFlat);
const missing = [];
const untranslated = [];
const translated = [];

for (const key of enKeys) {
  if (!(key in roFlat)) {
    missing.push(key);
  } else if (roFlat[key] === enFlat[key]) {
    untranslated.push(key);
  } else {
    translated.push(key);
  }
}

console.log(`Total EN strings: ${enKeys.length}`);
console.log(`Missing in BG: ${missing.length}`);
console.log(`Untranslated (same as EN): ${untranslated.length}`);
console.log(`Properly translated: ${translated.length}`);

// Group missing by top-level key
const missingBySection = {};
for (const k of missing) {
  const section = k.split('.')[0].split('[')[0];
  if (!missingBySection[section]) missingBySection[section] = [];
  missingBySection[section].push(k);
}

console.log('\n=== MISSING BY SECTION ===');
for (const [section, keys] of Object.entries(missingBySection).sort((a, b) => b[1].length - a[1].length)) {
  console.log(`${section}: ${keys.length} missing`);
}

// Group untranslated by section
const untransBySection = {};
for (const k of untranslated) {
  const section = k.split('.')[0].split('[')[0];
  if (!untransBySection[section]) untransBySection[section] = [];
  untransBySection[section].push(k);
}

console.log('\n=== UNTRANSLATED BY SECTION ===');
for (const [section, keys] of Object.entries(untransBySection).sort((a, b) => b[1].length - a[1].length)) {
  console.log(`${section}: ${keys.length} untranslated`);
}

console.log('\n=== ALL MISSING KEYS ===');
for (const k of missing) {
  console.log(`  ${k} => ${enFlat[k]}`);
}

console.log('\n=== ALL UNTRANSLATED ===');
for (const k of untranslated) {
  console.log(`  ${k} => ${enFlat[k]}`);
}
