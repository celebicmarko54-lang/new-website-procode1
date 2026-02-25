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
const sections = {};

for (const key of enKeys) {
  const enVal = getVal(en, key);
  const paVal = getVal(pa, key);
  const isMissing = paVal === undefined;
  const isEnglish = !isMissing && typeof enVal === 'string' && typeof paVal === 'string' && enVal === paVal && enVal.length > 2;
  
  if (isMissing || isEnglish) {
    const section = key.split('.')[0];
    if (!sections[section]) sections[section] = { english: [], missing: [] };
    if (isMissing) {
      sections[section].missing.push(key);
    } else {
      sections[section].english.push({ key, val: enVal });
    }
  }
}

for (const [section, data] of Object.entries(sections)) {
  console.log(`\n=== ${section} (${data.english.length} English, ${data.missing.length} missing) ===`);
  if (data.english.length > 0) {
    console.log('  STILL ENGLISH:');
    data.english.forEach(({ key, val }) => {
      const short = val.length > 80 ? val.slice(0, 80) + '...' : val;
      console.log(`    ${key}: "${short}"`);
    });
  }
  if (data.missing.length > 0) {
    console.log('  MISSING:');
    data.missing.forEach(k => console.log(`    ${k}`));
  }
}
