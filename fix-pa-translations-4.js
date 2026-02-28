// Phase 4: solutionsPage, privacyPage, cookiesPage, learnPage, guidesPage
var fs = require('fs');
var pa = JSON.parse(fs.readFileSync('./src/translations/pa.json', 'utf8'));

function setValue(obj, path, value) {
  var parts = path.split('.');
  var current = obj;
  for (var i = 0; i < parts.length - 1; i++) {
    if (!current[parts[i]] || typeof current[parts[i]] !== 'object') {
      current[parts[i]] = {};
    }
    current = current[parts[i]];
  }
  current[parts[parts.length - 1]] = value;
}

var translations = {
  // solutionsPage
  "solutionsPage.titleStart": "ਤੁਸੀਂ ਕਿਵੇਂ ਕੰਮ ਕਰਦੇ ਹੋ ਉਸ ਲਈ ਬਣਾਇਆ",
  "solutionsPage.titleEnd": "ਕੰਮ",
  "solutionsPage.ctaTitle": "ਪੱਕਾ ਨਹੀਂ ਕਿ ਕਿਹੜਾ ਹੱਲ ਫਿੱਟ ਹੈ?",
  "solutionsPage.startBuildingFree": "ਮੁਫ਼ਤ ਬਣਾਉਣਾ ਸ਼ੁਰੂ ਕਰੋ",
  "solutionsPage.talkToSales": "ਵਿਕਰੀ ਨਾਲ ਗੱਲ ਕਰੋ",

  // privacyPage
  "privacyPage.section1.title": "1. ਜਾਣਕਾਰੀ ਜੋ ਅਸੀਂ ਇਕੱਠੀ ਕਰਦੇ ਹਾਂ",
  "privacyPage.section1.s1Title": "1.1 ਜਾਣਕਾਰੀ ਜੋ ਤੁਸੀਂ ਸਿੱਧੇ ਦਿੰਦੇ ਹੋ",
  "privacyPage.section1.s2Title": "1.2 ਆਟੋਮੈਟਿਕਲੀ ਇਕੱਠੀ ਕੀਤੀ ਜਾਣਕਾਰੀ",
  "privacyPage.section1.s3Title": "1.3 AI-ਵਿਸ਼ੇਸ਼ ਡਾਟਾ (ਇੰਪੁੱਟ ਅਤੇ ਆਊਟਪੁੱਟ)",
  "privacyPage.section1.s3Note": "ਅਸੀਂ ਜਾਣਬੁੱਝ ਕੇ ਸੰਵੇਦਨਸ਼ੀਲ ਨਿੱਜੀ ਡਾਟਾ (ਸਿਹਤ, ਨਸਲ, ਧਰਮ, ਆਦਿ) ਇਕੱਠਾ ਨਹੀਂ ਕਰਦੇ ਜਦੋਂ ਤੱਕ ਤੁਸੀਂ ਆਪਣੀ ਮਰਜ਼ੀ ਨਾਲ ਇਸਨੂੰ ਪ੍ਰੌਂਪਟਸ ਵਿੱਚ ਸ਼ਾਮਲ ਨਹੀਂ ਕਰਦੇ — ਉਸ ਸਥਿਤੀ ਵਿੱਚ ਤੁਸੀਂ ਜ਼ਿੰਮੇਵਾਰੀ ਲੈਂਦੇ ਹੋ।",
  "privacyPage.section2.title": "2. ਅਸੀਂ ਤੁਹਾਡੀ ਜਾਣਕਾਰੀ ਕਿਵੇਂ ਵਰਤਦੇ ਹਾਂ",
  "privacyPage.section2.intro": "ਅਸੀਂ ਤੁਹਾਡੀ ਜਾਣਕਾਰੀ ਇਸ ਲਈ ਵਰਤਦੇ ਹਾਂ:",
  "privacyPage.section3.title": "3. AI ਮਾਡਲ ਸਿਖਲਾਈ ਅਤੇ ਸੁਧਾਰ (ਮਹੱਤਵਪੂਰਨ ਭਾਗ)",
  "privacyPage.section3.intro": "ਡਿਫੌਲਟ ਰੂਪ ਵਿੱਚ, ਅਸੀਂ ਤੁਹਾਡੇ ਨਿੱਜੀ ਪ੍ਰੌਂਪਟ, ਇੰਪੁੱਟ, ਆਊਟਪੁੱਟ, ਜਾਂ ਯੂਜ਼ਰ ਸਮੱਗਰੀ ਦੀ ਵਰਤੋਂ ਸਾਡੇ ਬੁਨਿਆਦੀ AI ਮਾਡਲਾਂ ਨੂੰ ਸਿਖਲਾਈ ਦੇਣ ਲਈ ਨਹੀਂ ਕਰਦੇ ਜਦੋਂ ਤੱਕ ਤੁਸੀਂ ਖਾਤਾ ਸੈਟਿੰਗਾਂ ਰਾਹੀਂ ਸਪੱਸ਼ਟ ਤੌਰ 'ਤੇ ਆਪਟ-ਇਨ ਨਹੀਂ ਕਰਦੇ।",
  "privacyPage.section3.note": "ਇਹ ਵਧੀਆ ਅਭਿਆਸਾਂ ਨਾਲ ਮੇਲ ਖਾਂਦਾ ਹੈ ਅਤੇ GDPR ਉਦੇਸ਼ ਸੀਮਤਤਾ ਅਤੇ EU AI ਐਕਟ ਪਾਰਦਰਸ਼ਤਾ ਦੀ ਪਾਲਣਾ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",
  "privacyPage.section4.title": "4. ਜਾਣਕਾਰੀ ਦਾ ਸਾਂਝਾ ਅਤੇ ਖੁਲਾਸਾ",
  "privacyPage.section4.noSell": "ਅਸੀਂ ਤੁਹਾਡੀ ਨਿੱਜੀ ਜਾਣਕਾਰੀ ਨਹੀਂ ਵੇਚਦੇ।",
  "privacyPage.section4.intro": "ਅਸੀਂ ਡਾਟਾ ਸਿਰਫ਼ ਇਸ ਸਥਿਤੀ ਵਿੱਚ ਸਾਂਝਾ ਕਰਦੇ ਹਾਂ:",
  "privacyPage.section4.international": "ਅੰਤਰਰਾਸ਼ਟਰੀ ਤਬਾਦਲੇ: ਡਾਟਾ ਮੁੱਖ ਤੌਰ 'ਤੇ ਅਮਰੀਕਾ ਵਿੱਚ ਸਟੋਰ ਕੀਤਾ ਜਾਂਦਾ ਹੈ। EU/EEA/UK ਯੂਜ਼ਰਾਂ ਲਈ: ਅਸੀਂ ਸਟੈਂਡਰਡ ਕੰਟ੍ਰੈਕਚੁਅਲ ਕਲਾਜ਼ (SCCs) ਜਾਂ EU-US ਡਾਟਾ ਪ੍ਰਾਈਵੇਸੀ ਫਰੇਮਵਰਕ 'ਤੇ ਨਿਰਭਰ ਕਰਦੇ ਹਾਂ।",
  "privacyPage.section5.title": "5. ਡਾਟਾ ਧਾਰਨ",
  "privacyPage.section5.intro": "ਅਸੀਂ ਤੁਹਾਡਾ ਡਾਟਾ ਸਿਰਫ਼ ਲੋੜ ਮੁਤਾਬਕ ਰੱਖਦੇ ਹਾਂ:",
  "privacyPage.section5.note": "ਤੁਸੀਂ ਕਿਸੇ ਵੀ ਸਮੇਂ ਡਿਲੀਟ ਕਰਨ ਦੀ ਬੇਨਤੀ ਕਰ ਸਕਦੇ ਹੋ (ਹੇਠਾਂ ਅਧਿਕਾਰ ਵੇਖੋ)।",
  "privacyPage.section6.title": "6. ਤੁਹਾਡੇ ਗੋਪਨੀਯਤਾ ਅਧਿਕਾਰ",
  "privacyPage.section6.intro": "ਤੁਹਾਡੀ ਸਥਿਤੀ ਦੇ ਆਧਾਰ 'ਤੇ (EU/EEA/UK ਲਈ GDPR, ਕੈਲੀਫੋਰਨੀਆ ਲਈ CCPA/CPRA, ਆਦਿ):",
  "privacyPage.section6.california": "ਕੈਲੀਫੋਰਨੀਆ ਦੇ ਨਿਵਾਸੀਆਂ ਲਈ: ਸਾਡੀ ਸਾਈਟ 'ਤੇ \"ਮੇਰੀ ਨਿੱਜੀ ਜਾਣਕਾਰੀ ਨਾ ਵੇਚੋ ਜਾਂ ਸਾਂਝੀ ਨਾ ਕਰੋ\" ਲਿੰਕ (ਹਾਲਾਂਕਿ ਅਸੀਂ ਵੇਚਦੇ ਨਹੀਂ)।",
  "privacyPage.section6.response": "ਅਸੀਂ 30-45 ਦਿਨਾਂ ਦੇ ਅੰਦਰ ਜਵਾਬ ਦਿੰਦੇ ਹਾਂ (ਕਾਨੂੰਨ ਅਨੁਸਾਰ ਵਧਾਇਆ ਜਾ ਸਕਦਾ ਹੈ)। ਤਸਦੀਕ ਲੋੜੀਂਦੀ ਹੈ। ਅਧਿਕਾਰਾਂ ਦੀ ਵਰਤੋਂ ਲਈ ਕੋਈ ਵਿਤਕਰਾ ਨਹੀਂ।",
  "privacyPage.section7.title": "7. ਡਾਟਾ ਸੁਰੱਖਿਆ",
  "privacyPage.section7.p1": "ਅਸੀਂ ਉਦਯੋਗ-ਮਿਆਰੀ ਉਪਾਅ ਵਰਤਦੇ ਹਾਂ: ਐਨਕ੍ਰਿਪਸ਼ਨ (TLS 1.3, ਆਰਾਮ ਵਿੱਚ AES-256), ਪਹੁੰਚ ਕੰਟਰੋਲ, ਨਿਯਮਤ ਆਡਿਟ, ਪੈਨੀਟ੍ਰੇਸ਼ਨ ਟੈਸਟਿੰਗ।",
  "privacyPage.section7.p2": "ਹਾਲਾਂਕਿ, ਕੋਈ ਵੀ ਸਿਸਟਮ 100% ਸੁਰੱਖਿਅਤ ਨਹੀਂ ਹੈ। ਅਸੀਂ ਪੂਰੀ ਸੁਰੱਖਿਆ ਦੀ ਗਾਰੰਟੀ ਨਹੀਂ ਦੇ ਸਕਦੇ — ਤੁਸੀਂ ਸੇਵਾਵਾਂ ਦੀ ਵਰਤੋਂ ਆਪਣੇ ਜੋਖਮ 'ਤੇ ਕਰਦੇ ਹੋ।",
  "privacyPage.section7.p3": "ਉਲੰਘਣਾ ਦੀ ਸਥਿਤੀ ਵਿੱਚ: ਅਸੀਂ ਪ੍ਰਭਾਵਿਤ ਯੂਜ਼ਰਾਂ ਅਤੇ ਅਧਿਕਾਰੀਆਂ ਨੂੰ ਕਾਨੂੰਨ ਅਨੁਸਾਰ ਸੂਚਿਤ ਕਰਦੇ ਹਾਂ (ਜਿਵੇਂ GDPR 72 ਘੰਟੇ)।",
  "privacyPage.section8.title": "8. ਕੂਕੀਜ਼ ਅਤੇ ਟ੍ਰੈਕਿੰਗ ਤਕਨੀਕਾਂ",
  "privacyPage.section8.content": "ਅਸੀਂ ਜ਼ਰੂਰੀ ਕੂਕੀਜ਼ (ਕਾਰਜਸ਼ੀਲਤਾ ਲਈ), ਵਿਸ਼ਲੇਸ਼ਣ, ਅਤੇ ਪ੍ਰਦਰਸ਼ਨ ਕੂਕੀਜ਼ ਵਰਤਦੇ ਹਾਂ। ਤੁਸੀਂ ਬ੍ਰਾਊਜ਼ਰ ਸੈਟਿੰਗਾਂ ਜਾਂ ਸਾਡੇ ਕੂਕੀ ਬੈਨਰ ਰਾਹੀਂ ਪ੍ਰਬੰਧਿਤ ਕਰ ਸਕਦੇ ਹੋ।",
  "privacyPage.section9.title": "9. ਬੱਚਿਆਂ ਦੀ ਗੋਪਨੀਯਤਾ",
  "privacyPage.section9.content": "ਸੇਵਾਵਾਂ 16 ਸਾਲ ਤੋਂ ਘੱਟ (ਕੁਝ ਅਧਿਕਾਰ ਖੇਤਰਾਂ ਵਿੱਚ 13) ਦੇ ਬੱਚਿਆਂ ਲਈ ਨਹੀਂ ਹਨ। ਅਸੀਂ ਜਾਣਬੁੱਝ ਕੇ ਬੱਚਿਆਂ ਤੋਂ ਡਾਟਾ ਇਕੱਠਾ ਨਹੀਂ ਕਰਦੇ। ਪਤਾ ਲੱਗਣ 'ਤੇ ਅਸੀਂ ਤੁਰੰਤ ਡਿਲੀਟ ਕਰਦੇ ਹਾਂ।",
  "privacyPage.section10.title": "10. ਤੀਜੀ-ਧਿਰ ਦੇ ਲਿੰਕ ਅਤੇ ਇੰਟੀਗ੍ਰੇਸ਼ਨਾਂ",
  "privacyPage.section11.title": "11. ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",

  // cookiesPage
  "cookiesPage.subtitle": "ਆਪਣੀਆਂ ਕੂਕੀ ਤਰਜੀਹਾਂ ਪ੍ਰਬੰਧਿਤ ਕਰੋ। ਅਸੀਂ ਤੁਹਾਡੇ ਬ੍ਰਾਊਜ਼ਿੰਗ ਅਨੁਭਵ ਨੂੰ ਵਧਾਉਣ, ਵਿਅਕਤੀਗਤ ਸਮੱਗਰੀ ਪੇਸ਼ ਕਰਨ, ਅਤੇ ਸਾਡੇ ਟ੍ਰੈਫਿਕ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਨ ਲਈ ਕੂਕੀਜ਼ ਵਰਤਦੇ ਹਾਂ।",
  "cookiesPage.required": "ਲੋੜੀਂਦੀ",
  "cookiesPage.saveSuccess": "ਕੂਕੀ ਤਰਜੀਹਾਂ ਸਫਲਤਾਪੂਰਵਕ ਸੇਵ ਹੋ ਗਈਆਂ!",
  "cookiesPage.savePreferences": "ਤਰਜੀਹਾਂ ਸੇਵ ਕਰੋ",
  "cookiesPage.acceptAll": "ਸਭ ਸਵੀਕਾਰ ਕਰੋ",
  "cookiesPage.aboutTitle": "ਸਾਡੀਆਂ ਕੂਕੀਜ਼ ਬਾਰੇ",
  "cookiesPage.aboutDescription": "ਕੂਕੀਜ਼ ਛੋਟੀਆਂ ਟੈਕਸਟ ਫਾਈਲਾਂ ਹਨ ਜੋ ਸਾਡੀ ਵੈੱਬਸਾਈਟ 'ਤੇ ਆਉਣ 'ਤੇ ਤੁਹਾਡੀ ਡਿਵਾਈਸ 'ਤੇ ਸਟੋਰ ਹੁੰਦੀਆਂ ਹਨ। ਇਹ ਸਾਨੂੰ ਤੁਹਾਡੀਆਂ ਤਰਜੀਹਾਂ ਯਾਦ ਰੱਖ ਕੇ ਅਤੇ ਤੁਹਾਡੀ ਵਰਤੋਂ ਨੂੰ ਸਮਝ ਕੇ ਬਿਹਤਰ ਅਨੁਭਵ ਦੇਣ ਵਿੱਚ ਮਦਦ ਕਰਦੀਆਂ ਹਨ।",
  "cookiesPage.moreInfo": "ਅਸੀਂ ਕੂਕੀਜ਼ ਅਤੇ ਤੁਹਾਡੇ ਨਿੱਜੀ ਡਾਟਾ ਨੂੰ ਕਿਵੇਂ ਵਰਤਦੇ ਹਾਂ ਇਸ ਬਾਰੇ ਹੋਰ ਜਾਣਕਾਰੀ ਲਈ, ਕਿਰਪਾ ਕਰਕੇ ਸਾਡੀ ਪੜ੍ਹੋ",
  "cookiesPage.privacyPolicyLink": "ਗੋਪਨੀਯਤਾ ਨੀਤੀ",
  "cookiesPage.essential.title": "ਜ਼ਰੂਰੀ ਕੂਕੀਜ਼",
  "cookiesPage.essential.description": "ਇਹ ਕੂਕੀਜ਼ ਵੈੱਬਸਾਈਟ ਦੇ ਸਹੀ ਕੰਮ ਕਰਨ ਲਈ ਜ਼ਰੂਰੀ ਹਨ। ਇਹ ਸੁਰੱਖਿਆ, ਨੈੱਟਵਰਕ ਪ੍ਰਬੰਧਨ, ਅਤੇ ਪਹੁੰਚਯੋਗਤਾ ਵਰਗੀ ਮੁੱਖ ਕਾਰਜਸ਼ੀਲਤਾ ਨੂੰ ਸਮਰੱਥ ਬਣਾਉਂਦੀਆਂ ਹਨ।",
  "cookiesPage.analytics.title": "ਵਿਸ਼ਲੇਸ਼ਣ ਕੂਕੀਜ਼",
  "cookiesPage.analytics.description": "ਇਹ ਕੂਕੀਜ਼ ਸਾਨੂੰ ਸਮਝਣ ਵਿੱਚ ਮਦਦ ਕਰਦੀਆਂ ਹਨ ਕਿ ਵਿਜ਼ਿਟਰ ਸਾਡੀ ਵੈੱਬਸਾਈਟ ਨਾਲ ਕਿਵੇਂ ਇੰਟਰੈਕਟ ਕਰਦੇ ਹਨ। ਇਹ ਸਾਡੀਆਂ ਸੇਵਾਵਾਂ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",
  "cookiesPage.marketing.title": "ਮਾਰਕੀਟਿੰਗ ਕੂਕੀਜ਼",
  "cookiesPage.marketing.description": "ਇਹ ਕੂਕੀਜ਼ ਵੈੱਬਸਾਈਟਾਂ 'ਤੇ ਵਿਜ਼ਿਟਰਾਂ ਨੂੰ ਟ੍ਰੈਕ ਕਰਨ ਲਈ ਵਰਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ। ਇਹ ਵਿਅਕਤੀਗਤ ਯੂਜ਼ਰ ਲਈ ਢੁਕਵੇਂ ਅਤੇ ਆਕਰਸ਼ਕ ਇਸ਼ਤਿਹਾਰ ਦਿਖਾਉਣ ਲਈ ਵਰਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ।",
  "cookiesPage.personalization.title": "ਨਿੱਜੀਕਰਨ ਕੂਕੀਜ਼",
  "cookiesPage.personalization.description": "ਇਹ ਕੂਕੀਜ਼ ਸਾਨੂੰ ਤੁਹਾਡੀਆਂ ਤਰਜੀਹਾਂ ਯਾਦ ਰੱਖਣ ਅਤੇ ਵਧੀਆ, ਨਿੱਜੀ ਫੀਚਰ ਪ੍ਰਦਾਨ ਕਰਨ ਦਿੰਦੀਆਂ ਹਨ।",

  // learnPage
  "learnPage.badge": "ਮੁਫ਼ਤ ਸਿੱਖਣ ਪਲੇਟਫਾਰਮ",
  "learnPage.titleStart": "ਨਾਲ ਬਣਾਉਣਾ ਸਿੱਖੋ",
  "learnPage.subtitle": "ਮੁਫ਼ਤ ਕੋਰਸ, ਟਿਊਟੋਰੀਅਲ, ਅਤੇ ਹੱਥੀਂ ਪ੍ਰੋਜੈਕਟ ਜੋ AI-ਸੰਚਾਲਿਤ ਐਪ ਡਿਵੈਲਪਮੈਂਟ ਵਿੱਚ ਮਾਹਰ ਬਣਨ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਨ।",
  "learnPage.startLearningFree": "ਮੁਫ਼ਤ ਸਿੱਖਣਾ ਸ਼ੁਰੂ ਕਰੋ",
  "learnPage.browseCourses": "ਕੋਰਸ ਬ੍ਰਾਊਜ਼ ਕਰੋ",
  "learnPage.stats.freeCourses": "ਮੁਫ਼ਤ ਕੋਰਸ",
  "learnPage.stats.students": "ਵਿਦਿਆਰਥੀ",
  "learnPage.stats.averageRating": "ਔਸਤ ਰੇਟਿੰਗ",
  "learnPage.stats.communitySupport": "ਕਮਿਊਨਿਟੀ ਸਹਾਇਤਾ",
  "learnPage.chooseLearningPath": "ਆਪਣਾ ਸਿੱਖਣ ਦਾ ਰਸਤਾ ਚੁਣੋ",
  "learnPage.chooseLearningPathDesc": "ਤੁਹਾਡੇ ਖਾਸ ਟੀਚਿਆਂ ਅਤੇ ਹੁਨਰ ਪੱਧਰ ਲਈ ਤਿਆਰ ਕੀਤੇ ਕੋਰਸ।",
  "learnPage.popularCourses": "ਪ੍ਰਸਿੱਧ ਕੋਰਸ",
  "learnPage.popularCoursesDesc": "ਸਾਡੇ ਕਮਿਊਨਿਟੀ ਦੁਆਰਾ ਚੁਣੇ ਸਭ ਤੋਂ ਪ੍ਰਸਿੱਧ ਕੋਰਸਾਂ ਨਾਲ ਸ਼ੁਰੂ ਕਰੋ।",
  "learnPage.startCourse": "ਕੋਰਸ ਸ਼ੁਰੂ ਕਰੋ",
  "learnPage.viewAllCourses": "ਸਾਰੇ ਕੋਰਸ ਵੇਖੋ",
  "learnPage.cta.title": "ਅੱਜ ਹੀ ਆਪਣੀ ਸਿੱਖਣ ਦੀ ਯਾਤਰਾ ਸ਼ੁਰੂ ਕਰੋ",
  "learnPage.cta.createFreeAccount": "ਮੁਫ਼ਤ ਖਾਤਾ ਬਣਾਓ",
  "learnPage.cta.browseGuides": "ਗਾਈਡ ਬ੍ਰਾਊਜ਼ ਕਰੋ",
  "learnPage.levels.beginner": "ਸ਼ੁਰੂਆਤੀ",
  "learnPage.levels.intermediate": "ਮੱਧਮ",
  "learnPage.levels.advanced": "ਐਡਵਾਂਸਡ",
  "learnPage.lessons": "ਪਾਠ",
  "learnPage.courses.gettingStarted.description": "AI ਨਾਲ ਐਪਸ ਬਣਾਉਣ ਦੀਆਂ ਮੁੱਢਲੀਆਂ ਗੱਲਾਂ ਸਿੱਖੋ। ਬਿਲਕੁਲ ਸ਼ੁਰੂਆਤ ਕਰਨ ਵਾਲਿਆਂ ਲਈ ਸੰਪੂਰਨ।",
  "learnPage.courses.buildingDashboard.title": "ਆਪਣਾ ਪਹਿਲਾ ਡੈਸ਼ਬੋਰਡ ਬਣਾਉਣਾ",
  "learnPage.courses.buildingDashboard.description": "ਰੀਅਲ-ਟਾਈਮ ਡਾਟਾ ਨਾਲ ਸ਼ੁਰੂ ਤੋਂ ਪੂਰਾ ਵਿਸ਼ਲੇਸ਼ਣ ਡੈਸ਼ਬੋਰਡ ਬਣਾਓ।",
  "learnPage.courses.advancedPrompting.title": "ਐਡਵਾਂਸਡ ਪ੍ਰੌਂਪਟਿੰਗ ਤਕਨੀਕਾਂ",
  "learnPage.courses.advancedPrompting.description": "ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਪ੍ਰੌਂਪਟ ਲਿਖਣ ਦੀ ਕਲਾ ਵਿੱਚ ਮੁਹਾਰਤ ਹਾਸਲ ਕਰੋ ਜੋ ਬਿਲਕੁਲ ਉਹੀ ਬਣਾਉਂਦੇ ਹਨ ਜੋ ਤੁਹਾਨੂੰ ਚਾਹੀਦਾ ਹੈ।",
  "learnPage.courses.ecommerce.title": "ਈ-ਕਾਮਰਸ ਸਟੋਰ ਮਾਸਟਰਕਲਾਸ",
  "learnPage.courses.ecommerce.description": "ਭੁਗਤਾਨ, ਇਨਵੈਂਟਰੀ, ਅਤੇ ਆਰਡਰ ਨਾਲ ਪੂਰੀ ਤਰ੍ਹਾਂ ਕਾਰਜਸ਼ੀਲ ਔਨਲਾਈਨ ਸਟੋਰ ਬਣਾਓ।",
  "learnPage.courses.customComponents.title": "ਕਸਟਮ ਕੰਪੋਨੈਂਟਸ ਅਤੇ ਸਟਾਈਲਿੰਗ",
  "learnPage.courses.customComponents.description": "ਕਸਟਮ ਥੀਮ ਨਾਲ ਮੁੜ ਵਰਤੋਂ ਯੋਗ ਕੰਪੋਨੈਂਟਸ ਬਣਾਓ ਜੋ ਤੁਹਾਡੇ ਬ੍ਰਾਂਡ ਨਾਲ ਮੇਲ ਖਾਂਦੇ ਹਨ।",
  "learnPage.courses.deploying.title": "ਪ੍ਰੋਡਕਸ਼ਨ ਵਿੱਚ ਡਿਪਲੌਇ ਕਰਨਾ",
  "learnPage.courses.deploying.description": "ਕਸਟਮ ਡੋਮੇਨ ਅਤੇ SSL ਸਰਟੀਫਿਕੇਟ ਨਾਲ ਆਪਣੀ ਐਪ ਦੁਨੀਆ ਲਈ ਲਾਂਚ ਕਰੋ।",
  "learnPage.courses.mobileFirst.title": "ਮੋਬਾਈਲ-ਫਰਸਟ ਐਪਸ ਬਣਾਉਣਾ",
  "learnPage.courses.mobileFirst.description": "ਜਵਾਬਦੇਹ ਐਪਲੀਕੇਸ਼ਨਾਂ ਡਿਜ਼ਾਈਨ ਕਰੋ ਜੋ ਕਿਸੇ ਵੀ ਡਿਵਾਈਸ 'ਤੇ ਸੁੰਦਰ ਕੰਮ ਕਰਦੀਆਂ ਹਨ।",
  "learnPage.courses.apiIntegration.title": "API ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਜ਼ਰੂਰੀ ਗੱਲਾਂ",
  "learnPage.courses.apiIntegration.description": "ਆਪਣੀ ਐਪ ਨੂੰ ਬਾਹਰੀ ਸੇਵਾਵਾਂ, ਡੇਟਾਬੇਸ, ਅਤੇ ਤੀਜੀ-ਧਿਰ ਦੀਆਂ APIs ਨਾਲ ਜੋੜੋ।",
  "learnPage.courses.authSecurity.title": "ਪ੍ਰਮਾਣੀਕਰਨ ਅਤੇ ਸੁਰੱਖਿਆ",
  "learnPage.courses.authSecurity.description": "ਸੁਰੱਖਿਅਤ ਯੂਜ਼ਰ ਪ੍ਰਮਾਣੀਕਰਨ ਲਾਗੂ ਕਰੋ ਅਤੇ ਆਪਣੀ ਐਪਲੀਕੇਸ਼ਨ ਨੂੰ ਸੁਰੱਖਿਅਤ ਕਰੋ।",
  "learnPage.modal.overview": "ਸੰਖੇਪ ਜਾਣਕਾਰੀ",
  "learnPage.modal.howToDoIt": "ਇਹ ਕਿਵੇਂ ਕਰੀਏ",
  "learnPage.modal.proTips": "ਪ੍ਰੋ ਸੁਝਾਅ",
  "learnPage.modal.gotIt": "ਸਮਝ ਗਏ!",
  "learnPage.tutorials.buildingDashboard.overview": "ਚਾਰਟ, ਮੈਟ੍ਰਿਕਸ, ਅਤੇ ਰੀਅਲ-ਟਾਈਮ ਡਾਟਾ ਨਾਲ ਪੇਸ਼ੇਵਰ ਵਿਸ਼ਲੇਸ਼ਣ ਡੈਸ਼ਬੋਰਡ ਬਣਾਉਣਾ ਸਿੱਖੋ।",
  "learnPage.tutorials.ecommerce.overview": "ਉਤਪਾਦ ਕੈਟਾਲੌਗ, ਕਾਰਟ, ਅਤੇ ਚੈੱਕਆਊਟ ਨਾਲ ਪੂਰਾ ਈ-ਕਾਮਰਸ ਹੱਲ ਬਣਾਓ।",
  "learnPage.tutorials.customComponents.overview": "ਕਸਟਮ ਸਟਾਈਲਿੰਗ ਨਾਲ ਇਕਸਾਰ, ਮੁੜ ਵਰਤੋਂ ਯੋਗ ਕੰਪੋਨੈਂਟਸ ਬਣਾਉਣਾ ਸਿੱਖੋ।",
  "learnPage.tutorials.deploying.overview": "ਭਰੋਸੇ ਨਾਲ ਆਪਣੀਆਂ ਐਪਲੀਕੇਸ਼ਨਾਂ ਨੂੰ ਪ੍ਰੋਡਕਸ਼ਨ ਵਿੱਚ ਡਿਪਲੌਇ ਕਰਨਾ ਸਿੱਖੋ।",
  "learnPage.tutorials.mobileFirst.overview": "ਸਾਰੀਆਂ ਡਿਵਾਈਸਾਂ 'ਤੇ ਕੰਮ ਕਰਨ ਵਾਲੀਆਂ ਜਵਾਬਦੇਹ, ਮੋਬਾਈਲ-ਫਰਸਟ ਐਪਲੀਕੇਸ਼ਨਾਂ ਬਣਾਓ।",
  "learnPage.tutorials.apiIntegration.overview": "ਬਾਹਰੀ APIs ਅਤੇ ਸੇਵਾਵਾਂ ਨੂੰ ਆਪਣੀਆਂ ਐਪਲੀਕੇਸ਼ਨਾਂ ਵਿੱਚ ਇੰਟੀਗ੍ਰੇਟ ਕਰਨਾ ਸਿੱਖੋ।",
  "learnPage.tutorials.authSecurity.overview": "ਸੁਰੱਖਿਅਤ ਪ੍ਰਮਾਣੀਕਰਨ ਲਾਗੂ ਕਰੋ ਅਤੇ ਆਪਣੀ ਐਪਲੀਕੇਸ਼ਨ ਨੂੰ ਖਤਰਿਆਂ ਤੋਂ ਬਚਾਓ।",

  // guidesPage
  "guidesPage.badge": "ਡੂੰਘੇ ਟਿਊਟੋਰੀਅਲ",
  "guidesPage.titleStart": "ਡਿਵੈਲਪਰ",
  "guidesPage.titleHighlight": "ਗਾਈਡ",
  "guidesPage.subtitle": "ਸ਼ਾਨਦਾਰ ਐਪਲੀਕੇਸ਼ਨਾਂ ਬਣਾਉਣ ਲਈ ਡੂੰਘੇ ਟਿਊਟੋਰੀਅਲ ਅਤੇ ਵਧੀਆ ਅਭਿਆਸ। ਸ਼ੁਰੂਆਤੀ ਤੋਂ ਐਡਵਾਂਸਡ ਤੱਕ, ਅਸੀਂ ਤੁਹਾਨੂੰ ਕਵਰ ਕੀਤਾ ਹੈ।",
  "guidesPage.featuredGuide": "ਫੀਚਰਡ ਗਾਈਡ",
  "guidesPage.allGuides": "ਸਾਰੀਆਂ ਗਾਈਡ",
  "guidesPage.readGuide": "ਗਾਈਡ ਪੜ੍ਹੋ",
  "guidesPage.cta.title": "ਬਣਾਉਣਾ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਤਿਆਰ ਹੋ?",
  "guidesPage.cta.subtitle": "ਜੋ ਸਿੱਖਿਆ ਹੈ ਉਸਨੂੰ ਅਮਲ ਵਿੱਚ ਲਿਆਓ। ਅੱਜ ਹੀ ਆਪਣੀ ਪਹਿਲੀ ਐਪ ਬਣਾਓ।",
  "guidesPage.cta.getStartedFree": "ਮੁਫ਼ਤ ਸ਼ੁਰੂ ਕਰੋ",
  "guidesPage.cta.browseTemplates": "ਟੈਂਪਲੇਟ ਬ੍ਰਾਊਜ਼ ਕਰੋ",
  "guidesPage.modal.overview": "ਸੰਖੇਪ ਜਾਣਕਾਰੀ",
  "guidesPage.modal.howToDoIt": "ਇਹ ਕਿਵੇਂ ਕਰੀਏ",
  "guidesPage.modal.proTips": "ਪ੍ਰੋ ਸੁਝਾਅ",
  "guidesPage.modal.gotIt": "ਸਮਝ ਗਏ!",
  "guidesPage.categories.saas": "SaaS",
  "guidesPage.categories.ecommerce": "ਈ-ਕਾਮਰਸ",
  "guidesPage.categories.design": "ਡਿਜ਼ਾਈਨ",
  "guidesPage.categories.security": "ਸੁਰੱਖਿਆ",
  "guidesPage.categories.backend": "ਬੈਕਐਂਡ",
  "guidesPage.categories.performance": "ਪ੍ਰਦਰਸ਼ਨ",
  "guidesPage.minRead": "ਮਿੰਟ ਪੜ੍ਹੋ",
  "guidesPage.guides.saasApps.title": "SaaS ਐਪਸ ਬਣਾਉਣ ਦੀ ਪੂਰੀ ਗਾਈਡ",
  "guidesPage.guides.saasApps.overview": "ਯੂਜ਼ਰ ਪ੍ਰਮਾਣੀਕਰਨ, ਸਬਸਕ੍ਰਿਪਸ਼ਨ ਬਿਲਿੰਗ, ਅਤੇ ਮਲਟੀ-ਟੈਨੈਂਟ ਆਰਕੀਟੈਕਚਰ ਸਮੇਤ ਸ਼ੁਰੂ ਤੋਂ ਪੂਰੀ SaaS ਐਪ ਬਣਾਉਣਾ ਸਿੱਖੋ।",
  "guidesPage.guides.ecommerce.title": "ਈ-ਕਾਮਰਸ ਵਧੀਆ ਅਭਿਆਸ",
  "guidesPage.guides.ecommerce.description": "ਭੁਗਤਾਨ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਨਾਲ ਉੱਚ-ਕਨਵਰਟਿੰਗ ਔਨਲਾਈਨ ਸਟੋਰ ਬਣਾਉਣਾ ਸਿੱਖੋ",
  "guidesPage.guides.ecommerce.overview": "ਉਤਪਾਦ ਕੈਟਾਲੌਗ, ਸ਼ਾਪਿੰਗ ਕਾਰਟ, ਅਤੇ ਸੁਰੱਖਿਅਤ ਚੈੱਕਆਊਟ ਨਾਲ ਉੱਚ-ਕਨਵਰਟਿੰਗ ਈ-ਕਾਮਰਸ ਸਟੋਰ ਬਣਾਓ।",
  "guidesPage.guides.dashboard.title": "ਡੈਸ਼ਬੋਰਡ ਡਿਜ਼ਾਈਨ ਵਿੱਚ ਮਾਹਰ ਬਣੋ",
  "guidesPage.guides.dashboard.description": "ਸੁੰਦਰ ਅਤੇ ਕਾਰਜਸ਼ੀਲ ਵਿਸ਼ਲੇਸ਼ਣ ਡੈਸ਼ਬੋਰਡ ਬਣਾਓ ਜੋ ਯੂਜ਼ਰ ਪਸੰਦ ਕਰਦੇ ਹਨ",
  "guidesPage.guides.dashboard.overview": "ਸਪੱਸ਼ਟ ਡਾਟਾ ਵਿਜ਼ੂਅਲਾਈਜ਼ੇਸ਼ਨ ਅਤੇ ਸਹਿਜ ਲੇਆਉਟ ਨਾਲ ਪੇਸ਼ੇਵਰ ਵਿਸ਼ਲੇਸ਼ਣ ਡੈਸ਼ਬੋਰਡ ਡਿਜ਼ਾਈਨ ਕਰੋ।",
  "guidesPage.guides.authentication.title": "ਪ੍ਰਮਾਣੀਕਰਨ ਅਤੇ ਸੁਰੱਖਿਆ",
  "guidesPage.guides.authentication.description": "ਸੁਰੱਖਿਅਤ ਯੂਜ਼ਰ ਪ੍ਰਮਾਣੀਕਰਨ ਲਾਗੂ ਕਰੋ ਅਤੇ ਆਪਣੀਆਂ ਐਪਲੀਕੇਸ਼ਨਾਂ ਨੂੰ ਸੁਰੱਖਿਅਤ ਕਰੋ",
  "guidesPage.guides.authentication.overview": "ਆਪਣੇ ਯੂਜ਼ਰਾਂ ਅਤੇ ਡਾਟਾ ਨੂੰ ਸੁਰੱਖਿਅਤ ਕਰਨ ਲਈ ਮਜ਼ਬੂਤ ਪ੍ਰਮਾਣੀਕਰਨ ਅਤੇ ਸੁਰੱਖਿਆ ਵਧੀਆ ਅਭਿਆਸ ਲਾਗੂ ਕਰੋ।",
  "guidesPage.guides.database.title": "ਡੇਟਾਬੇਸ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਗਾਈਡ",
  "guidesPage.guides.database.description": "ਆਪਣੀ ਐਪ ਨੂੰ ਡੇਟਾਬੇਸ ਨਾਲ ਜੋੜੋ ਅਤੇ ਡਾਟਾ ਨੂੰ ਕੁਸ਼ਲਤਾ ਨਾਲ ਪ੍ਰਬੰਧਿਤ ਕਰੋ",
  "guidesPage.guides.database.overview": "ਆਪਣੀ ਐਪਲੀਕੇਸ਼ਨ ਨੂੰ ਡੇਟਾਬੇਸ ਨਾਲ ਜੋੜਨਾ ਅਤੇ ਕੁਸ਼ਲ ਡਾਟਾ ਪ੍ਰਬੰਧਨ ਲਾਗੂ ਕਰਨਾ ਸਿੱਖੋ।",
  "guidesPage.guides.responsive.title": "ਜਵਾਬਦੇਹ ਡਿਜ਼ਾਈਨ ਪੈਟਰਨ",
  "guidesPage.guides.responsive.description": "ਮੋਬਾਈਲ-ਫਰਸਟ ਡਿਜ਼ਾਈਨ ਨਾਲ ਆਪਣੀਆਂ ਐਪਸ ਨੂੰ ਸਾਰੀਆਂ ਡਿਵਾਈਸਾਂ 'ਤੇ ਸ਼ਾਨਦਾਰ ਬਣਾਓ",
  "guidesPage.guides.responsive.overview": "ਸਾਰੇ ਸਕ੍ਰੀਨ ਆਕਾਰਾਂ 'ਤੇ ਸੁੰਦਰਤਾ ਨਾਲ ਕੰਮ ਕਰਨ ਵਾਲੇ ਜਵਾਬਦੇਹ ਡਿਜ਼ਾਈਨ ਬਣਾਓ।",
  "guidesPage.guides.api.title": "API ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਮਾਸਟਰਕਲਾਸ",
  "guidesPage.guides.api.description": "ਤੀਜੀ-ਧਿਰ ਸੇਵਾਵਾਂ ਅਤੇ APIs ਨਾਲ ਸਹਿਜ ਤੌਰ 'ਤੇ ਜੁੜੋ",
  "guidesPage.guides.api.overview": "ਬਾਹਰੀ APIs ਅਤੇ ਤੀਜੀ-ਧਿਰ ਸੇਵਾਵਾਂ ਨੂੰ ਆਪਣੀਆਂ ਐਪਲੀਕੇਸ਼ਨਾਂ ਵਿੱਚ ਇੰਟੀਗ੍ਰੇਟ ਕਰਨਾ ਸਿੱਖੋ।",
  "guidesPage.guides.performance.title": "ਪ੍ਰਦਰਸ਼ਨ ਅਨੁਕੂਲਨ",
  "guidesPage.guides.performance.description": "ਬਿਹਤਰ ਯੂਜ਼ਰ ਅਨੁਭਵ ਅਤੇ SEO ਲਈ ਆਪਣੀਆਂ ਐਪਸ ਨੂੰ ਤੇਜ਼ ਕਰੋ",
  "guidesPage.guides.performance.overview": "ਗਤੀ, ਬਿਹਤਰ ਯੂਜ਼ਰ ਅਨੁਭਵ, ਅਤੇ ਸੁਧਰੀ SEO ਲਈ ਆਪਣੀ ਐਪਲੀਕੇਸ਼ਨ ਨੂੰ ਅਨੁਕੂਲ ਬਣਾਓ।"
};

var count = 0;
for (var key in translations) {
  setValue(pa, key, translations[key]);
  count++;
}

fs.writeFileSync('./src/translations/pa.json', JSON.stringify(pa, null, 2), 'utf8');
console.log('Phase 4 complete: Updated ' + count + ' translations');
