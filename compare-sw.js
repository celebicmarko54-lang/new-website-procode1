const en = require('./src/translations/en.json');
const sw = require('./src/translations/sw.json');

function findUntranslated(enObj, swObj, path) {
  path = path || '';
  const results = [];
  for (const key of Object.keys(enObj)) {
    const fullPath = path ? path + '.' + key : key;
    if (typeof enObj[key] === 'object' && enObj[key] !== null) {
      if (!swObj || !swObj[key] || typeof swObj[key] !== 'object') {
        results.push({ path: fullPath, type: 'missing_section', enValue: JSON.stringify(enObj[key]).substring(0, 100) });
      } else {
        results.push(...findUntranslated(enObj[key], swObj[key], fullPath));
      }
    } else {
      if (!swObj || swObj[key] === undefined) {
        results.push({ path: fullPath, type: 'missing', enValue: enObj[key] });
      } else if (swObj[key] === enObj[key]) {
        results.push({ path: fullPath, type: 'untranslated', enValue: enObj[key] });
      }
    }
  }
  return results;
}

const issues = findUntranslated(en, sw);
console.log('Total issues found:', issues.length);
console.log('Missing sections:', issues.filter(i => i.type === 'missing_section').length);
console.log('Missing keys:', issues.filter(i => i.type === 'missing').length);
console.log('Untranslated (same as English):', issues.filter(i => i.type === 'untranslated').length);
console.log('---');
for (const issue of issues) {
  const val = typeof issue.enValue === 'string' ? issue.enValue.substring(0, 120) : issue.enValue;
  console.log(issue.type + ' | ' + issue.path + ' | ' + val);
}
