const fs = require('fs');
const path = require('path');
const dir = './src/translations';

const langFiles = fs.readdirSync(dir).filter(f => f.endsWith('.json')).sort();

for (const file of langFiles) {
  const code = file.replace('.json', '');
  const data = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
  const j = data.aboutPage?.journey;
  if (!j) { console.log(`${code}: NO journey section`); continue; }
  
  const m1title = j.milestone1?.title || 'MISSING';
  const m2title = j.milestone2?.title || 'MISSING';
  const m3title = j.milestone3?.title || 'MISSING';
  const m4title = j.milestone4?.title || 'MISSING';
  
  // Check if it has the OLD structure (The Idea Is Born) or NEW (Founded / Development Kickoff)
  const hasOldData = m1title === 'The Idea Is Born' || m2title === 'Private Beta' || m3title === 'Public Launch';
  const hasNewEnData = m1title === 'Founded / Development Kickoff';
  
  let status;
  if (hasOldData) status = '❌ OLD ENGLISH DATA';
  else if (hasNewEnData) status = '⚠️ NEW BUT ENGLISH';
  else status = '✓ TRANSLATED';
  
  console.log(`${code}: ${status} | m1="${m1title.substring(0,40)}" m2="${m2title.substring(0,40)}" m3="${m3title.substring(0,40)}" m4="${m4title.substring(0,40)}"`);
}
