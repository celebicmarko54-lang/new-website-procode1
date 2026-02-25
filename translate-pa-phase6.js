const fs = require('fs');
const path = require('path');

const PA_PATH = path.join(__dirname, 'src', 'translations', 'pa.json');

function setVal(obj, path, val) {
  const parts = path.split('.');
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (!cur[parts[i]] || typeof cur[parts[i]] !== 'object') cur[parts[i]] = {};
    cur = cur[parts[i]];
  }
  cur[parts[parts.length - 1]] = val;
}

const pa = JSON.parse(fs.readFileSync(PA_PATH, 'utf8'));

let count = 0;

const translations = {
  // ─── SOLUTIONS WEB3 (3) ───
  "solutionsWeb3.badge": "ਮਲਟੀ-ਚੇਨ ਈਕੋਸਿਸਟਮ",
  "solutionsWeb3.title": "ਕਿਸੇ ਵੀ ਬਲਾਕਚੇਨ 'ਤੇ ਕੁਝ ਵੀ ਬਣਾਓ",
  "solutionsWeb3.subtitle": "ਪਹਿਲਾਂ ਨਾਲੋਂ ਤੇਜ਼",

  // ─── USE CASES BUSINESS APPS (24) ───
  "useCasesBusinessApps.badge": "ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ",
  "useCasesBusinessApps.title": "ਕਾਰੋਬਾਰੀ ਐਪਸ 10 ਗੁਣਾ ਤੇਜ਼ ਬਣਾਓ",
  "useCasesBusinessApps.subtitle": "ਡੈਸ਼ਬੋਰਡ ਤੋਂ ਅੰਦਰੂਨੀ ਟੂਲਾਂ ਤੱਕ, ਕਾਰੋਬਾਰੀ ਐਪਲੀਕੇਸ਼ਨਾਂ ਬਣਾਓ ਜੋ ਤੁਹਾਡੀ ਟੀਮ ਨੂੰ ਚਾਹੀਦੀਆਂ ਹਨ।",
  "useCasesBusinessApps.startBuilding": "ਬਣਾਉਣਾ ਸ਼ੁਰੂ ਕਰੋ",
  "useCasesBusinessApps.viewExamples": "ਉਦਾਹਰਣਾਂ ਦੇਖੋ",
  "useCasesBusinessApps.weightedComparison": "ਭਾਰਿਤ ਤੁਲਨਾ",
  "useCasesBusinessApps.weightedGrowth": "ਵਿਕਾਸ",
  "useCasesBusinessApps.examples.dashboard.title": "ਸੇਲਜ਼ ਡੈਸ਼ਬੋਰਡ",
  "useCasesBusinessApps.examples.dashboard.growth": "24%",
  "useCasesBusinessApps.examples.crm.title": "ਗਾਹਕ CRM",
  "useCasesBusinessApps.examples.crm.growth": "18%",
  "useCasesBusinessApps.examples.inventory.title": "ਇਨਵੈਂਟਰੀ ਸਿਸਟਮ",
  "useCasesBusinessApps.examples.inventory.growth": "32%",
  "useCasesBusinessApps.examples.hr.title": "HR ਪੋਰਟਲ",
  "useCasesBusinessApps.examples.hr.growth": "15%",
  "useCasesBusinessApps.benefits.title": "ਫ਼ਾਇਦੇ",
  "useCasesBusinessApps.benefits.rapid": "ਤੇਜ਼ ਡਿਵੈਲਪਮੈਂਟ",
  "useCasesBusinessApps.benefits.rapidDesc": "ਰਵਾਇਤੀ ਡਿਵੈਲਪਮੈਂਟ ਨਾਲੋਂ 10 ਗੁਣਾ ਤੇਜ਼ ਬਣਾਓ।",
  "useCasesBusinessApps.benefits.scalable": "ਸਕੇਲੇਬਲ",
  "useCasesBusinessApps.benefits.scalableDesc": "ਤੁਹਾਡੇ ਕਾਰੋਬਾਰ ਨਾਲ ਵਧੋ।",
  "useCasesBusinessApps.benefits.secure": "ਸੁਰੱਖਿਅਤ",
  "useCasesBusinessApps.benefits.secureDesc": "ਐਂਟਰਪ੍ਰਾਈਜ਼-ਗ੍ਰੇਡ ਸੁਰੱਖਿਆ ਬਿਲਟ-ਇਨ।",
  "useCasesBusinessApps.cta.title": "ਆਪਣੀ ਕਾਰੋਬਾਰੀ ਐਪ ਬਣਾਉਣ ਲਈ ਤਿਆਰ?",
  "useCasesBusinessApps.cta.subtitle": "ਅੱਜ ਹੀ ਮੁਫ਼ਤ ਸ਼ੁਰੂ ਕਰੋ।",

  // ─── USE CASES MOBILE APPS (25) ───
  "useCasesMobileApps.badge": "ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ",
  "useCasesMobileApps.title": "ਮੋਬਾਈਲ ਐਪਸ ਬਣਾਓ ਤੇਜ਼ੀ ਨਾਲ",
  "useCasesMobileApps.subtitle": "ਇੱਕ ਸਿੰਗਲ ਕੋਡਬੇਸ ਤੋਂ ਕਰਾਸ-ਪਲੇਟਫਾਰਮ ਮੋਬਾਈਲ ਅਨੁਭਵ ਬਣਾਓ।",
  "useCasesMobileApps.startBuilding": "ਬਣਾਉਣਾ ਸ਼ੁਰੂ ਕਰੋ",
  "useCasesMobileApps.viewExamples": "ਉਦਾਹਰਣਾਂ ਦੇਖੋ",
  "useCasesMobileApps.demo.title": "AppNode ਮੋਬਾਈਲ ਪ੍ਰੀਵਿਊ",
  "useCasesMobileApps.demo.description": "ਦੇਖੋ ਮੋਬਾਈਲ ਐਪ ਰੀਅਲ-ਟਾਈਮ ਵਿੱਚ ਕਿਵੇਂ ਬਣਦੀ ਹੈ",
  "useCasesMobileApps.features.title": "ਮੋਬਾਈਲ ਫੀਚਰ",
  "useCasesMobileApps.features.crossPlatform.title": "ਕਰਾਸ-ਪਲੇਟਫਾਰਮ",
  "useCasesMobileApps.features.crossPlatform.description": "iOS ਅਤੇ Android ਲਈ ਇੱਕ ਕੋਡਬੇਸ ਤੋਂ ਬਣਾਓ।",
  "useCasesMobileApps.features.nativePerformance.title": "ਨੇਟਿਵ ਪਰਫਾਰਮੈਂਸ",
  "useCasesMobileApps.features.nativePerformance.description": "ਨੇਟਿਵ ਕੰਪੋਨੈਂਟ ਅਤੇ ਅਨੁਕੂਲ ਪਰਫਾਰਮੈਂਸ।",
  "useCasesMobileApps.features.offlineSupport.title": "ਆਫ਼ਲਾਈਨ ਸਪੋਰਟ",
  "useCasesMobileApps.features.offlineSupport.description": "ਬਿਲਟ-ਇਨ ਆਫ਼ਲਾਈਨ ਸਪੋਰਟ ਅਤੇ ਡੇਟਾ ਸਿੰਕ।",
  "useCasesMobileApps.features.pushNotifications.title": "ਪੁਸ਼ ਨੋਟੀਫਿਕੇਸ਼ਨ",
  "useCasesMobileApps.features.pushNotifications.description": "ਬਿਲਟ-ਇਨ ਪੁਸ਼ ਨੋਟੀਫਿਕੇਸ਼ਨ ਸਪੋਰਟ।",
  "useCasesMobileApps.cta.title": "ਆਪਣੀ ਮੋਬਾਈਲ ਐਪ ਬਣਾਉਣ ਲਈ ਤਿਆਰ?",
  "useCasesMobileApps.cta.subtitle": "ਅੱਜ ਹੀ ਮੁਫ਼ਤ ਸ਼ੁਰੂ ਕਰੋ ਅਤੇ ਮਿੰਟਾਂ ਵਿੱਚ ਆਪਣੀ ਮੋਬਾਈਲ ਐਪ ਡਿਪਲੌਇ ਕਰੋ।",
  "useCasesMobileApps.demo.chatMessages": "ਗੱਲਬਾਤ",
  "useCasesMobileApps.demo.inputPlaceholder": "ਸੁਨੇਹਾ ਟਾਈਪ ਕਰੋ...",
  "useCasesMobileApps.demo.status": "ਔਨਲਾਈਨ",
  "useCasesMobileApps.demo.contact": "ਐਲੀਸ਼ੀਆ",
  "useCasesMobileApps.demo.time": "12:30 PM",
  "useCasesMobileApps.demo.batteryLevel": "85%",
  "useCasesMobileApps.demo.signal": "5G",

  // ─── USE CASES RAPID PROTOTYPING (10 setVal keys) ───
  "useCasesRapidPrototyping.badge": "ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ",
  "useCasesRapidPrototyping.title": "ਵਿਚਾਰ ਤੋਂ ਪ੍ਰੋਟੋਟਾਈਪ ਮਿੰਟਾਂ ਵਿੱਚ",
  "useCasesRapidPrototyping.subtitle": "ਤੇਜ਼ੀ ਨਾਲ ਵਿਚਾਰਾਂ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ। ਕੰਮ ਕਰਦੇ ਪ੍ਰੋਟੋਟਾਈਪ ਬਣਾਓ ਜੋ ਅਸਲੀ ਦਿਖਦੇ ਅਤੇ ਮਹਿਸੂਸ ਹੁੰਦੇ ਹਨ।",
  "useCasesRapidPrototyping.startPrototyping": "ਪ੍ਰੋਟੋਟਾਈਪਿੰਗ ਸ਼ੁਰੂ ਕਰੋ",
  "useCasesRapidPrototyping.viewExamples": "ਉਦਾਹਰਣਾਂ ਦੇਖੋ",
  "useCasesRapidPrototyping.comparisonTitle": "ਰਵਾਇਤੀ ਬਨਾਮ AppNode",
  "useCasesRapidPrototyping.traditional.title": "ਰਵਾਇਤੀ ਪ੍ਰੋਟੋਟਾਈਪਿੰਗ",
  "useCasesRapidPrototyping.appnode.title": "AppNode ਪ੍ਰੋਟੋਟਾਈਪਿੰਗ",
  "useCasesRapidPrototyping.cta.title": "ਤੇਜ਼ੀ ਨਾਲ ਪ੍ਰੋਟੋਟਾਈਪ ਕਰਨ ਲਈ ਤਿਆਰ?",
  "useCasesRapidPrototyping.cta.subtitle": "ਮੁਫ਼ਤ ਸ਼ੁਰੂ ਕਰੋ ਅਤੇ ਮਿੰਟਾਂ ਵਿੱਚ ਆਪਣਾ ਪਹਿਲਾ ਪ੍ਰੋਟੋਟਾਈਪ ਬਣਾਓ।",

  // ─── PRIVACY PAGE (40) ───
  "privacyPage.badge": "ਕਾਨੂੰਨੀ",
  "privacyPage.title": "ਗੋਪਨੀਯਤਾ ਨੀਤੀ",
  "privacyPage.lastUpdated": "ਆਖਰੀ ਅੱਪਡੇਟ: 1 ਦਸੰਬਰ 2025",
  "privacyPage.intro": "AppNode ('ਅਸੀਂ', 'ਸਾਡਾ') ਤੁਹਾਡੀ ਗੋਪਨੀਯਤਾ ਨੂੰ ਗੰਭੀਰਤਾ ਨਾਲ ਲੈਂਦਾ ਹੈ। ਇਹ ਨੀਤੀ ਦੱਸਦੀ ਹੈ ਕਿ ਅਸੀਂ ਤੁਹਾਡੀ ਨਿੱਜੀ ਜਾਣਕਾਰੀ ਕਿਵੇਂ ਇਕੱਤਰ, ਵਰਤਦੇ ਅਤੇ ਸੁਰੱਖਿਅਤ ਕਰਦੇ ਹਾਂ।",
  "privacyPage.sections.collection.title": "ਜਾਣਕਾਰੀ ਜੋ ਅਸੀਂ ਇਕੱਤਰ ਕਰਦੇ ਹਾਂ",
  "privacyPage.sections.collection.desc": "ਅਸੀਂ ਤੁਹਾਡੇ ਤੋਂ ਸਿੱਧੀ ਅਤੇ ਆਟੋਮੈਟਿਕ ਜਾਣਕਾਰੀ ਇਕੱਤਰ ਕਰਦੇ ਹਾਂ।",
  "privacyPage.sections.collection.items.item1": "ਖਾਤੇ ਦੀ ਜਾਣਕਾਰੀ (ਨਾਮ, ਈਮੇਲ, ਪਾਸਵਰਡ)",
  "privacyPage.sections.collection.items.item2": "ਵਰਤੋਂ ਦਾ ਡੇਟਾ ਅਤੇ ਐਨਾਲਿਟਿਕਸ",
  "privacyPage.sections.collection.items.item3": "ਡਿਵਾਈਸ ਅਤੇ ਬ੍ਰਾਊਜ਼ਰ ਜਾਣਕਾਰੀ",
  "privacyPage.sections.collection.items.item4": "ਕੂਕੀਜ਼ ਅਤੇ ਟ੍ਰੈਕਿੰਗ ਤਕਨਾਲੋਜੀਆਂ",
  "privacyPage.sections.collection.items.item5": "ਭੁਗਤਾਨ ਜਾਣਕਾਰੀ (ਤੀਜੀ ਧਿਰ ਦੁਆਰਾ ਪ੍ਰੋਸੈਸ)",
  "privacyPage.sections.usage.title": "ਅਸੀਂ ਤੁਹਾਡੀ ਜਾਣਕਾਰੀ ਕਿਵੇਂ ਵਰਤਦੇ ਹਾਂ",
  "privacyPage.sections.usage.desc": "ਅਸੀਂ ਤੁਹਾਡੀ ਜਾਣਕਾਰੀ ਇਹਨਾਂ ਲਈ ਵਰਤਦੇ ਹਾਂ:",
  "privacyPage.sections.usage.items.item1": "ਸਾਡੀਆਂ ਸੇਵਾਵਾਂ ਪ੍ਰਦਾਨ ਅਤੇ ਬਿਹਤਰ ਬਣਾਉਣਾ",
  "privacyPage.sections.usage.items.item2": "ਤੁਹਾਡਾ ਅਨੁਭਵ ਨਿੱਜੀ ਬਣਾਉਣਾ",
  "privacyPage.sections.usage.items.item3": "ਤੁਹਾਡੇ ਨਾਲ ਸੰਚਾਰ ਕਰਨਾ",
  "privacyPage.sections.usage.items.item4": "ਵਰਤੋਂ ਦੇ ਪੈਟਰਨ ਅਤੇ ਰੁਝਾਨ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਨਾ",
  "privacyPage.sections.usage.items.item5": "ਸੁਰੱਖਿਆ ਖ਼ਤਰਿਆਂ ਦਾ ਪਤਾ ਲਗਾਉਣਾ ਅਤੇ ਰੋਕਣਾ",
  "privacyPage.sections.sharing.title": "ਜਾਣਕਾਰੀ ਸਾਂਝੀ ਕਰਨਾ",
  "privacyPage.sections.sharing.desc": "ਅਸੀਂ ਤੁਹਾਡੀ ਜਾਣਕਾਰੀ ਨਹੀਂ ਵੇਚਦੇ। ਅਸੀਂ ਸਿਰਫ਼ ਇਹਨਾਂ ਨੂੰ ਸਾਂਝਾ ਕਰ ਸਕਦੇ ਹਾਂ:",
  "privacyPage.sections.sharing.items.item1": "ਸੇਵਾ ਪ੍ਰਦਾਤਾ ਅਤੇ ਭਾਈਵਾਲ",
  "privacyPage.sections.sharing.items.item2": "ਕਾਨੂੰਨੀ ਲੋੜਾਂ ਅਤੇ ਲਾਗੂ ਕਰਨ",
  "privacyPage.sections.sharing.items.item3": "ਤੁਹਾਡੀ ਸਹਿਮਤੀ ਨਾਲ",
  "privacyPage.sections.rights.title": "ਤੁਹਾਡੇ ਅਧਿਕਾਰ",
  "privacyPage.sections.rights.desc": "ਤੁਹਾਡੇ ਕੋਲ ਆਪਣੀ ਜਾਣਕਾਰੀ ਬਾਰੇ ਹੱਕ ਹਨ:",
  "privacyPage.sections.rights.items.item1": "ਆਪਣੇ ਡੇਟਾ ਤੱਕ ਪਹੁੰਚ ਅਤੇ ਡਾਊਨਲੋਡ ਕਰਨਾ",
  "privacyPage.sections.rights.items.item2": "ਅਸ਼ੁੱਧੀਆਂ ਸੁਧਾਰਨਾ",
  "privacyPage.sections.rights.items.item3": "ਮਿਟਾਉਣ ਦੀ ਬੇਨਤੀ",
  "privacyPage.sections.rights.items.item4": "ਮਾਰਕੀਟਿੰਗ ਸੰਚਾਰ ਤੋਂ ਬਾਹਰ ਨਿਕਲਣਾ",
  "privacyPage.sections.security.title": "ਡੇਟਾ ਸੁਰੱਖਿਆ",
  "privacyPage.sections.security.desc": "ਅਸੀਂ ਤੁਹਾਡੀ ਜਾਣਕਾਰੀ ਸੁਰੱਖਿਅਤ ਕਰਨ ਲਈ ਉਦਯੋਗ-ਮਿਆਰੀ ਸੁਰੱਖਿਆ ਉਪਾਅ ਲਾਗੂ ਕਰਦੇ ਹਾਂ।",
  "privacyPage.sections.security.items.item1": "ਟ੍ਰਾਂਜ਼ਿਟ ਅਤੇ ਰੈਸਟ ਵਿੱਚ ਇੰਕ੍ਰਿਪਸ਼ਨ",
  "privacyPage.sections.security.items.item2": "ਨਿਯਮਿਤ ਸੁਰੱਖਿਆ ਆਡਿਟ",
  "privacyPage.sections.security.items.item3": "ਸੁਰੱਖਿਅਤ ਡੇਟਾ ਸੈਂਟਰ ਅਤੇ ਬੈਕਅੱਪ",
  "privacyPage.sections.cookies.title": "ਕੂਕੀਜ਼",
  "privacyPage.sections.cookies.desc": "ਅਸੀਂ ਤੁਹਾਡੇ ਅਨੁਭਵ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਣ ਲਈ ਕੂਕੀਜ਼ ਵਰਤਦੇ ਹਾਂ। ਤੁਸੀਂ ਆਪਣੀ ਕੂਕੀ ਤਰਜੀਹਾਂ ਪ੍ਰਬੰਧਿਤ ਕਰ ਸਕਦੇ ਹੋ।",
  "privacyPage.sections.changes.title": "ਇਸ ਨੀਤੀ ਵਿੱਚ ਤਬਦੀਲੀਆਂ",
  "privacyPage.sections.changes.desc": "ਅਸੀਂ ਸਮੇਂ-ਸਮੇਂ 'ਤੇ ਇਸ ਨੀਤੀ ਨੂੰ ਅੱਪਡੇਟ ਕਰ ਸਕਦੇ ਹਾਂ। ਅਸੀਂ ਕਿਸੇ ਵੀ ਅਹਿਮ ਤਬਦੀਲੀ ਬਾਰੇ ਤੁਹਾਨੂੰ ਸੂਚਿਤ ਕਰਾਂਗੇ।",
  "privacyPage.sections.contact.title": "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
  "privacyPage.sections.contact.desc": "ਗੋਪਨੀਯਤਾ ਬਾਰੇ ਸਵਾਲ? ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।",

  // ─── TERMS PAGE (23) ───
  "termsPage.badge": "ਕਾਨੂੰਨੀ",
  "termsPage.title": "ਸੇਵਾ ਦੀਆਂ ਸ਼ਰਤਾਂ",
  "termsPage.lastUpdated": "ਆਖਰੀ ਅੱਪਡੇਟ: 1 ਦਸੰਬਰ 2025",
  "termsPage.sections.acceptance.title": "ਸ਼ਰਤਾਂ ਦੀ ਸਵੀਕ੍ਰਿਤੀ",
  "termsPage.sections.acceptance.content": "AppNode ਦੀ ਵਰਤੋਂ ਕਰਕੇ, ਤੁਸੀਂ ਇਹਨਾਂ ਸ਼ਰਤਾਂ ਨਾਲ ਸਹਿਮਤ ਹੁੰਦੇ ਹੋ।",
  "termsPage.sections.accounts.title": "ਯੂਜ਼ਰ ਖਾਤੇ",
  "termsPage.sections.accounts.content": "ਤੁਸੀਂ ਆਪਣੇ ਖਾਤੇ ਲਈ ਸਹੀ ਜਾਣਕਾਰੀ ਬਣਾਈ ਰੱਖਣ ਅਤੇ ਆਪਣੇ ਖਾਤੇ ਦੀ ਸੁਰੱਖਿਆ ਯਕੀਨੀ ਬਣਾਉਣ ਲਈ ਜ਼ਿੰਮੇਵਾਰ ਹੋ।",
  "termsPage.sections.services.title": "ਸੇਵਾ ਦਾ ਵਰਣਨ",
  "termsPage.sections.services.content": "AppNode ਇੱਕ AI-ਸੰਚਾਲਿਤ ਐਪਲੀਕੇਸ਼ਨ ਡਿਵੈਲਪਮੈਂਟ ਪਲੇਟਫਾਰਮ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।",
  "termsPage.sections.payment.title": "ਭੁਗਤਾਨ ਸ਼ਰਤਾਂ",
  "termsPage.sections.payment.content": "ਅਦਾਇਗੀ ਯੋਜਨਾਵਾਂ ਚੁਣੇ ਹੋਏ ਬਿਲਿੰਗ ਚੱਕਰ 'ਤੇ ਬਿਲ ਕੀਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ।",
  "termsPage.sections.ip.title": "ਬੌਧਿਕ ਸੰਪਤੀ",
  "termsPage.sections.ip.content": "ਤੁਸੀਂ ਆਪਣੀ ਬਣਾਈ ਸਮੱਗਰੀ ਦੀ ਮਲਕੀਅਤ ਰੱਖਦੇ ਹੋ। AppNode ਦਾ ਪਲੇਟਫਾਰਮ, ਬ੍ਰਾਂਡਿੰਗ ਅਤੇ ਟੈਕਨੋਲੋਜੀ ਸਾਡੀ ਸੰਪਤੀ ਹੈ।",
  "termsPage.sections.acceptable.title": "ਸਵੀਕਾਰਯੋਗ ਵਰਤੋਂ",
  "termsPage.sections.acceptable.content": "ਤੁਸੀਂ ਪਲੇਟਫਾਰਮ ਨੂੰ ਗ਼ੈਰ-ਕਾਨੂੰਨੀ ਮਕਸਦ ਲਈ, ਦੂਜਿਆਂ ਨੂੰ ਨੁਕਸਾਨ ਪਹੁੰਚਾਉਣ, ਜਾਂ ਸਾਡੀਆਂ ਨੀਤੀਆਂ ਦੀ ਉਲੰਘਣਾ ਲਈ ਨਹੀਂ ਵਰਤ ਸਕਦੇ।",
  "termsPage.sections.termination.title": "ਖ਼ਤਮ ਕਰਨਾ",
  "termsPage.sections.termination.content": "ਸ਼ਰਤਾਂ ਦੀ ਉਲੰਘਣਾ ਲਈ ਅਸੀਂ ਖਾਤੇ ਮੁਅੱਤਲ ਜਾਂ ਬੰਦ ਕਰ ਸਕਦੇ ਹਾਂ। ਤੁਸੀਂ ਕਿਸੇ ਵੀ ਸਮੇਂ ਖ਼ਤਮ ਕਰ ਸਕਦੇ ਹੋ।",
  "termsPage.sections.liability.title": "ਜ਼ਿੰਮੇਵਾਰੀ ਦੀ ਸੀਮਾ",
  "termsPage.sections.liability.content": "AppNode ਕਿਸੇ ਵੀ ਅਸਿੱਧੇ, ਦੁਰਘਟਨਾ ਜਾਂ ਨਤੀਜੇ ਵਾਲੇ ਨੁਕਸਾਨ ਲਈ ਜ਼ਿੰਮੇਵਾਰ ਨਹੀਂ ਹੋਵੇਗਾ।",
  "termsPage.sections.changes.title": "ਸ਼ਰਤਾਂ ਵਿੱਚ ਤਬਦੀਲੀਆਂ",
  "termsPage.sections.changes.content": "ਅਸੀਂ ਇਹ ਸ਼ਰਤਾਂ ਸੋਧ ਸਕਦੇ ਹਾਂ। ਜਾਰੀ ਵਰਤੋਂ ਸਵੀਕ੍ਰਿਤੀ ਮੰਨੀ ਜਾਵੇਗੀ।",
  "termsPage.sections.contact.title": "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
  "termsPage.sections.contact.content": "ਸਵਾਲ ਹਨ? legal@appnode.ai 'ਤੇ ਸੰਪਰਕ ਕਰੋ।",

  // ─── COOKIES PAGE (18) ───
  "cookiesPage.badge": "ਕਾਨੂੰਨੀ",
  "cookiesPage.title": "ਕੂਕੀ ਨੀਤੀ",
  "cookiesPage.lastUpdated": "ਆਖਰੀ ਅੱਪਡੇਟ: 1 ਦਸੰਬਰ 2025",
  "cookiesPage.intro": "ਇਹ ਨੀਤੀ ਦੱਸਦੀ ਹੈ ਕਿ AppNode ਤੁਹਾਡੇ ਅਨੁਭਵ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਣ ਲਈ ਕੂਕੀਜ਼ ਅਤੇ ਸਮਾਨ ਤਕਨਾਲੋਜੀਆਂ ਕਿਵੇਂ ਵਰਤਦਾ ਹੈ।",
  "cookiesPage.sections.what.title": "ਕੂਕੀਜ਼ ਕੀ ਹਨ",
  "cookiesPage.sections.what.desc": "ਕੂਕੀਜ਼ ਛੋਟੀਆਂ ਟੈਕਸਟ ਫਾਈਲਾਂ ਹਨ ਜੋ ਤੁਹਾਡੇ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਸਟੋਰ ਹੁੰਦੀਆਂ ਹਨ।",
  "cookiesPage.sections.essential.title": "ਜ਼ਰੂਰੀ ਕੂਕੀਜ਼",
  "cookiesPage.sections.essential.desc": "ਮੂਲ ਕਾਰਜਸ਼ੀਲਤਾ ਲਈ ਲੋੜੀਂਦੀਆਂ, ਬੰਦ ਨਹੀਂ ਕੀਤੀਆਂ ਜਾ ਸਕਦੀਆਂ।",
  "cookiesPage.sections.analytics.title": "ਐਨਾਲਿਟਿਕਸ ਕੂਕੀਜ਼",
  "cookiesPage.sections.analytics.desc": "ਸਾਇਟ ਦੀ ਵਰਤੋਂ ਸਮਝਣ ਵਿੱਚ ਮਦਦ ਕਰਦੀਆਂ ਹਨ।",
  "cookiesPage.sections.functional.title": "ਕਾਰਜਸ਼ੀਲ ਕੂਕੀਜ਼",
  "cookiesPage.sections.functional.desc": "ਵਧੀਆ ਫੀਚਰ ਅਤੇ ਨਿੱਜੀ ਬਣਾਉਣ ਲਈ ਵਰਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ।",
  "cookiesPage.sections.marketing.title": "ਮਾਰਕੀਟਿੰਗ ਕੂਕੀਜ਼",
  "cookiesPage.sections.marketing.desc": "ਢੁਕਵੇਂ ਇਸ਼ਤਿਹਾਰ ਦਿਖਾਉਣ ਲਈ ਵਰਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ।",
  "cookiesPage.sections.manage.title": "ਆਪਣੀਆਂ ਕੂਕੀ ਤਰਜੀਹਾਂ ਪ੍ਰਬੰਧਿਤ ਕਰੋ",
  "cookiesPage.sections.manage.desc": "ਤੁਸੀਂ ਆਪਣੀ ਬ੍ਰਾਊਜ਼ਰ ਸੈਟਿੰਗਾਂ ਰਾਹੀਂ ਕੂਕੀ ਤਰਜੀਹਾਂ ਕੰਟਰੋਲ ਕਰ ਸਕਦੇ ਹੋ।",
  "cookiesPage.sections.contact.title": "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
  "cookiesPage.sections.contact.desc": "ਕੂਕੀਜ਼ ਬਾਰੇ ਸਵਾਲ? privacy@appnode.ai 'ਤੇ ਸੰਪਰਕ ਕਰੋ।",
};

// Apply all setVal translations
for (const [key, val] of Object.entries(translations)) {
  setVal(pa, key, val);
  count++;
}

// ─── RAPID PROTOTYPING: Direct array assignments ───
pa.useCasesRapidPrototyping = pa.useCasesRapidPrototyping || {};
pa.useCasesRapidPrototyping.traditional = pa.useCasesRapidPrototyping.traditional || {};
pa.useCasesRapidPrototyping.traditional.steps = [
  { name: "ਵਾਇਰਫ੍ਰੇਮ", time: "2-3 ਦਿਨ" },
  { name: "ਡਿਜ਼ਾਈਨ", time: "1-2 ਹਫ਼ਤੇ" },
  { name: "ਡਿਵੈਲਪਮੈਂਟ", time: "2-4 ਹਫ਼ਤੇ" },
  { name: "ਟੈਸਟਿੰਗ", time: "1-2 ਹਫ਼ਤੇ" }
];
count++;

pa.useCasesRapidPrototyping.appnode = pa.useCasesRapidPrototyping.appnode || {};
pa.useCasesRapidPrototyping.appnode.steps = [
  { name: "ਵਰਣਨ ਕਰੋ", time: "2 ਮਿੰਟ" },
  { name: "ਜਨਰੇਟ ਕਰੋ", time: "30 ਸਕਿੰਟ" },
  { name: "ਸੋਧੋ", time: "5 ਮਿੰਟ" },
  { name: "ਡਿਪਲੌਇ ਕਰੋ", time: "1 ਮਿੰਟ" }
];
count++;

fs.writeFileSync(PA_PATH, JSON.stringify(pa, null, 2), 'utf8');

console.log(`Phase 6 complete: ${count} keys/entries added to pa.json`);
