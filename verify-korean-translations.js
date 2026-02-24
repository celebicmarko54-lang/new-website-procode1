#!/usr/bin/env node
/**
 * Comprehensive Korean translation verification script
 * Checks ALL translation keys used in the app against ko.json
 */

const fs = require('fs');
const path = require('path');

const ko = require('./src/translations/ko.json');
const en = require('./src/translations/en.json');

function getNestedValue(obj, keyPath) {
  const keys = keyPath.split('.');
  let current = obj;
  for (const key of keys) {
    if (current && typeof current === 'object') {
      if (Array.isArray(current)) {
        const idx = parseInt(key, 10);
        if (!isNaN(idx) && idx >= 0 && idx < current.length) {
          current = current[idx];
        } else {
          return undefined;
        }
      } else if (key in current) {
        current = current[key];
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  }
  return current;
}

// Extract all t('...') and tArray('...') keys from source files
function extractKeysFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const keys = new Set();
  
  // Match t('key') and t("key") and t(`key`)
  const regex = /\bt\(\s*['"`]([^'"`\${}]+)['"`]\s*\)/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    keys.add(match[1]);
  }
  
  // Match tArray('key') and tArray("key")
  const arrayRegex = /\btArray\(\s*['"`]([^'"`\${}]+)['"`]\s*\)/g;
  while ((match = arrayRegex.exec(content)) !== null) {
    keys.add(match[1]);
  }
  
  return keys;
}

// Recursively find all .tsx and .ts files
function findSourceFiles(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
      files.push(...findSourceFiles(fullPath));
    } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) && !entry.name.endsWith('.d.ts')) {
      files.push(fullPath);
    }
  }
  return files;
}

// Dynamic key expansions
const dynamicExpansions = {
  // Enterprise features
  'enterprisePage.features': ['security', 'collaboration', 'performance', 'support', 'integrations', 'analytics'].flatMap(k => 
    [`enterprisePage.features.${k}.title`, `enterprisePage.features.${k}.description`]
  ),
  // Enterprise testimonials
  'enterprisePage.testimonials': ['testimonial1', 'testimonial2', 'testimonial3', 'testimonial4', 'testimonial5', 'testimonial6'].flatMap(k =>
    [`enterprisePage.testimonials.${k}.quote`, `enterprisePage.testimonials.${k}.author`, `enterprisePage.testimonials.${k}.role`, `enterprisePage.testimonials.${k}.company`]
  ),
  // Gallery projects
  'galleryPage.projects': ['ecommerceAI', 'customerSupportAI', 'aiContentWriter', 'aiImageGenerator', 'textToSpeechAI', 'dataAnalyticsAI', 'aiVideoCreator', 'aiCodeAssistant', 'travelBlog', 'designStudio', 'businessWebsite', 'artMagazine', 'fashionBlog', 'productLanding', 'fragranceStore', 'restaurantSite', 'crmDashboard', 'orderDashboard', 'projectDashboard', 'webAnalytics', 'salesAnalytics', 'analyticsDashboard', 'performanceDashboard', 'businessAnalytics', 'wellnessMeditation', 'personalFinance', 'lifeOSProductivity', 'digitalJournal', 'personalDashboard', 'taskDashboard', 'financeDashboard', 'dailyPlanner', 'cyberRunner', 'mysticForest', 'spaceOdyssey', 'neonCity', 'cellEvolution', 'detectiveDashboard', 'partyGames', 'driftRush'].map(k => `galleryPage.projects.${k}`),
  // Guides
  'guidesPage.guides': ['saasApps', 'ecommerce', 'dashboard', 'authentication', 'database', 'responsive', 'api', 'performance'].flatMap(k =>
    [`guidesPage.guides.${k}.title`, `guidesPage.guides.${k}.description`, `guidesPage.guides.${k}.overview`]
  ),
  // Guide categories
  'guidesPage.categories': ['all', 'saas', 'ecommerce', 'design', 'security', 'backend', 'performance'].map(k => `guidesPage.categories.${k}`),
  // Learn levels
  'learnPage.levels': ['beginner', 'intermediate', 'advanced'].map(k => `learnPage.levels.${k}`),
  // Changelog change types
  'changelogPage.changeTypes': ['new', 'improved', 'fixed'].map(k => `changelogPage.changeTypes.${k}`),
  // Business apps use cases
  'useCasesBusinessApps.useCases': ['dashboards', 'workflowAutomation', 'adminPanels', 'crmTools', 'inventorySystems', 'formsSurveys'].flatMap(k =>
    [`useCasesBusinessApps.useCases.${k}.title`, `useCasesBusinessApps.useCases.${k}.description`]
  ),
  // Gallery categories
  'galleryPage.categories': ['aiApps', 'websites', 'businessApps', 'personalSoftware', 'games'].map(k => `galleryPage.categories.${k}`),
};

// Collect all keys
const srcDir = path.join(__dirname, 'src');
const sourceFiles = findSourceFiles(srcDir);
const allKeys = new Set();

for (const file of sourceFiles) {
  const keys = extractKeysFromFile(file);
  for (const key of keys) {
    allKeys.add(key);
  }
}

// Add dynamic expansion keys
for (const expansionKeys of Object.values(dynamicExpansions)) {
  for (const key of expansionKeys) {
    allKeys.add(key);
  }
}

// Check each key against ko.json
const missing = [];
const englishOnly = [];
const present = [];

for (const key of [...allKeys].sort()) {
  const koValue = getNestedValue(ko, key);
  const enValue = getNestedValue(en, key);
  
  if (koValue === undefined) {
    if (enValue !== undefined) {
      missing.push({ key, enValue: typeof enValue === 'string' ? enValue.substring(0, 60) : typeof enValue });
    }
    // If neither has it, it might be a dynamic key we can't resolve
  } else if (typeof koValue === 'string' && typeof enValue === 'string' && koValue === enValue && !/^[A-Z]{1,5}$/.test(koValue)) {
    // Same as English and not an abbreviation (like "AI") — might be untranslated
    englishOnly.push({ key, value: koValue.substring(0, 60) });
  } else {
    present.push(key);
  }
}

console.log(`\n=== Korean Translation Verification ===`);
console.log(`Total unique keys found in source: ${allKeys.size}`);
console.log(`Present in ko.json: ${present.length}`);
console.log(`Missing from ko.json: ${missing.length}`);
console.log(`Possibly untranslated (same as English): ${englishOnly.length}`);

if (missing.length > 0) {
  console.log(`\n--- MISSING KEYS (${missing.length}) ---`);
  for (const { key, enValue } of missing.slice(0, 50)) {
    console.log(`  ${key}  →  EN: "${enValue}"`);
  }
  if (missing.length > 50) {
    console.log(`  ... and ${missing.length - 50} more`);
  }
}

if (englishOnly.length > 0) {
  console.log(`\n--- POSSIBLY UNTRANSLATED (${englishOnly.length}) ---`);
  for (const { key, value } of englishOnly.slice(0, 30)) {
    console.log(`  ${key}  →  "${value}"`);
  }
  if (englishOnly.length > 30) {
    console.log(`  ... and ${englishOnly.length - 30} more`);
  }
}

if (missing.length === 0 && englishOnly.length === 0) {
  console.log(`\n✅ All translation keys have Korean translations!`);
}

process.exit(missing.length > 0 ? 1 : 0);
