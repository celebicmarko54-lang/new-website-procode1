const en = require('./src/translations/en.json');
const hr = require('./src/translations/hr.json');
const fs = require('fs');

const missingTopLevel = ['affiliatesPage','connectionsPage','securityReportPage','learnPublishPage','blockchainSection','signupPage','docsSearchModal'];

function findUntranslated(enObj, hrObj, path) {
  const results = [];
  for (const key of Object.keys(enObj)) {
    const p = path ? path + '.' + key : key;
    const topLevel = p.split('.')[0].split('[')[0];
    if (missingTopLevel.includes(topLevel)) continue;
    
    if (typeof enObj[key] === 'object' && !Array.isArray(enObj[key])) {
      if (hrObj && hrObj[key]) {
        results.push(...findUntranslated(enObj[key], hrObj[key], p));
      } else {
        // entire sub-object missing
        results.push(...findUntranslated(enObj[key], {}, p));
      }
    } else if (Array.isArray(enObj[key])) {
      if (hrObj && hrObj[key] && Array.isArray(hrObj[key])) {
        for (let i = 0; i < enObj[key].length; i++) {
          if (i < hrObj[key].length) {
            if (typeof enObj[key][i] === 'object') {
              results.push(...findUntranslated(enObj[key][i], hrObj[key][i], p + '[' + i + ']'));
            } else if (enObj[key][i] === hrObj[key][i]) {
              results.push({ path: p + '[' + i + ']', en: enObj[key][i] });
            }
          } else {
            results.push({ path: p + '[' + i + ']', en: enObj[key][i] });
          }
        }
      } else {
        // array missing in HR
        for (let i = 0; i < enObj[key].length; i++) {
          if (typeof enObj[key][i] === 'object') {
            results.push(...findUntranslated(enObj[key][i], {}, p + '[' + i + ']'));
          } else {
            results.push({ path: p + '[' + i + ']', en: enObj[key][i] });
          }
        }
      }
    } else {
      if (!hrObj || hrObj[key] === undefined || hrObj[key] === enObj[key]) {
        results.push({ path: p, en: enObj[key] });
      }
    }
  }
  return results;
}

const untranslated = findUntranslated(en, hr, '');

// Group by top-level section
const grouped = {};
untranslated.forEach(u => {
  const section = u.path.split('.')[0].split('[')[0];
  if (!grouped[section]) grouped[section] = [];
  grouped[section].push(u);
});

let output = '';
for (const [section, items] of Object.entries(grouped)) {
  output += '\n=== ' + section + ' (' + items.length + ') ===\n';
  items.forEach(i => {
    output += i.path + ' :: ' + JSON.stringify(i.en) + '\n';
  });
}

fs.writeFileSync('hr-untranslated.txt', output);
console.log('Total untranslated strings (excl missing top-level):', untranslated.length);
console.log('Written to hr-untranslated.txt');
