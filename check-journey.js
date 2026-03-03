const fs = require('fs');
const path = require('path');

const dir = './src/translations';
const en = JSON.parse(fs.readFileSync(path.join(dir, 'en.json'), 'utf8'));
const journey = en.aboutPage.journey;

const keys = [
  'journey.title', 'journey.subtitle',
  'journey.milestone1.year', 'journey.milestone1.title', 'journey.milestone1.description',
  'journey.milestone2.year', 'journey.milestone2.title', 'journey.milestone2.description',
  'journey.milestone3.year', 'journey.milestone3.title', 'journey.milestone3.description',
  'journey.milestone4.year', 'journey.milestone4.title', 'journey.milestone4.description'
];

function get(obj, dotPath) {
  return dotPath.split('.').reduce((o, k) => o && o[k], obj);
}

const langFiles = fs.readdirSync(dir).filter(f => f.endsWith('.json') && f !== 'en.json');

for (const file of langFiles.sort()) {
  const code = file.replace('.json', '');
  const data = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
  const ap = data.aboutPage;
  if (!ap) { console.log(`\n=== ${code} === NO aboutPage!`); continue; }
  
  const issues = [];
  for (const key of keys) {
    const enVal = get(en.aboutPage, key);
    const trVal = get(ap, key);
    if (!trVal) issues.push(`  MISSING: ${key}`);
    else if (trVal === enVal && !['2025', '2026'].includes(enVal)) issues.push(`  UNTRANSLATED: ${key} = "${trVal.substring(0, 60)}..."`);
  }
  
  if (issues.length > 0) {
    console.log(`\n=== ${code} === ${issues.length} issues`);
    issues.forEach(i => console.log(i));
  } else {
    console.log(`✓ ${code} - OK`);
  }
}
