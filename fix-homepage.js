const fs = require('fs');
const path = require('path');

const translationsDir = './src/translations';
const en = JSON.parse(fs.readFileSync(path.join(translationsDir, 'en.json'), 'utf8'));

const files = fs.readdirSync(translationsDir).filter(f => f.endsWith('.json') && f !== 'en.json');

function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    if (!(key in target)) {
      target[key] = source[key];
      console.log(`  Added missing key: ${key}`);
    } else if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
      deepMerge(target[key], source[key]);
    }
  }
}

for (const file of files) {
  const filePath = path.join(translationsDir, file);
  console.log(`Processing ${file}...`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  deepMerge(data, en);
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
}

console.log('Done!');
