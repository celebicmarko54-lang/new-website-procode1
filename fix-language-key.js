const fs = require('fs');
const path = require('path');

// All page files that use useTranslation
const pageFiles = [
  'src/app/affiliates/page.tsx',
  'src/app/billing/page.tsx',
  'src/app/blog/page.tsx',
  'src/app/careers/page.tsx',
  'src/app/changelog/page.tsx',
  'src/app/connections/page.tsx',
  'src/app/cookies/page.tsx',
  'src/app/dashboard/page.tsx',
  'src/app/docs/page.tsx',
  'src/app/enterprise/page.tsx',
  'src/app/gallery/page.tsx',
  'src/app/guides/page.tsx',
  'src/app/learn/page.tsx',
  'src/app/learn/publish/page.tsx',
  'src/app/login/page.tsx',
  'src/app/pricing/page.tsx',
  'src/app/privacy/page.tsx',
  'src/app/products/agent/page.tsx',
  'src/app/products/database/page.tsx',
  'src/app/products/integrations/page.tsx',
  'src/app/products/mobile/page.tsx',
  'src/app/products/publish/page.tsx',
  'src/app/products/security/page.tsx',
  'src/app/profile/page.tsx',
  'src/app/rules/page.tsx',
  'src/app/security/page.tsx',
  'src/app/settings/page.tsx',
  'src/app/signup/page.tsx',
  'src/app/solutions/page.tsx',
  'src/app/solutions/web3/page.tsx',
  'src/app/status/page.tsx',
  'src/app/support/page.tsx',
  'src/app/teams/page.tsx',
  'src/app/terms/page.tsx',
  'src/app/usecases/business-apps/page.tsx',
  'src/app/usecases/mobile-apps/page.tsx',
  'src/app/usecases/rapid-prototyping/page.tsx',
  'src/app/videos/page.tsx',
];

let modified = 0;
let skipped = 0;
let errors = [];

for (const relPath of pageFiles) {
  const filePath = path.join(__dirname, relPath);
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // Step 1: Add 'language' to useTranslation destructuring if not already present
    if (content.includes('useTranslation')) {
      // Check if language is already destructured
      const hookMatch = content.match(/const\s*\{([^}]*)\}\s*=\s*useTranslation\(\)/);
      if (hookMatch) {
        const destructured = hookMatch[1];
        if (!destructured.includes('language')) {
          // Add language to destructuring
          const newDestructured = destructured.trimEnd() + ', language';
          content = content.replace(
            hookMatch[0],
            `const {${newDestructured}} = useTranslation()`
          );
          changed = true;
        }
      }
    }

    // Step 2: Add key={language.code} to the first root div in return statement
    // Find the return ( followed by the first <div
    if (!content.includes('key={language.code}')) {
      // Match the return statement's first div
      // Pattern: return (\n    <div className="
      const returnDivMatch = content.match(/(return\s*\(\s*\n\s*<div\s+)(className=)/);
      if (returnDivMatch) {
        content = content.replace(
          returnDivMatch[0],
          returnDivMatch[1] + 'key={language.code} ' + returnDivMatch[2]
        );
        changed = true;
      } else {
        // Try alternative pattern: return ( <div without newline
        const altMatch = content.match(/(return\s*\(\s*<div\s+)(className=)/);
        if (altMatch) {
          content = content.replace(
            altMatch[0],
            altMatch[1] + 'key={language.code} ' + altMatch[2]
          );
          changed = true;
        }
      }
    }

    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      modified++;
      console.log(`✅ Modified: ${relPath}`);
    } else {
      skipped++;
      console.log(`⏭️  Skipped (already fixed): ${relPath}`);
    }
  } catch (err) {
    errors.push({ file: relPath, error: err.message });
    console.log(`❌ Error: ${relPath} - ${err.message}`);
  }
}

console.log(`\n📊 Summary: ${modified} modified, ${skipped} skipped, ${errors.length} errors`);
if (errors.length > 0) {
  console.log('Errors:', errors);
}
