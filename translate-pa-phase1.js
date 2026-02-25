const fs = require('fs');
const path = require('path');

const paPath = path.join(__dirname, 'src', 'translations', 'pa.json');
const data = JSON.parse(fs.readFileSync(paPath, 'utf8'));

function setVal(obj, path, val) {
  const parts = path.split('.');
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (!cur[parts[i]] || typeof cur[parts[i]] !== 'object') cur[parts[i]] = {};
    cur = cur[parts[i]];
  }
  cur[parts[parts.length - 1]] = val;
}

const translations = {
  "common.switchToLightMode": "ਲਾਈਟ ਮੋਡ 'ਤੇ ਜਾਓ",
  "common.switchToDarkMode": "ਡਾਰਕ ਮੋਡ 'ਤੇ ਜਾਓ",
  "common.addAttachments": "ਅਟੈਚਮੈਂਟ ਜੋੜੋ",
  "common.addImage": "ਤਸਵੀਰ ਜੋੜੋ",
  "common.moveMouseToExplore": "ਖੋਜਣ ਲਈ ਮਾਊਸ ਹਿਲਾਓ",

  "homePage.videoSection.badge": "ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ",
  "homePage.videoSection.title": "AppNode ਨੂੰ ਐਕਸ਼ਨ ਵਿੱਚ ਦੇਖੋ",
  "homePage.videoSection.subtitle": "ਦੇਖੋ ਕਿਵੇਂ ਡਿਵੈਲਪਰ ਕੁਦਰਤੀ ਭਾਸ਼ਾ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਮਿੰਟਾਂ ਵਿੱਚ ਪ੍ਰੋਡਕਸ਼ਨ-ਰੈਡੀ ਐਪਸ ਬਣਾਉਂਦੇ ਹਨ।",

  "hero.placeholder": "ਉਹ ਐਪ ਦੱਸੋ ਜੋ ਤੁਸੀਂ ਬਣਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ...",
  "hero.pressEnter": "ਭੇਜਣ ਲਈ Enter ਦਬਾਓ",

  "features.subtitle": "AppNode ਤੁਹਾਨੂੰ ਸ਼ਕਤੀਸ਼ਾਲੀ ਐਪਲੀਕੇਸ਼ਨਾਂ ਬਣਾਉਣ ਲਈ ਲੋੜੀਂਦੇ ਸਾਰੇ ਟੂਲ ਅਤੇ ਫੀਚਰ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।",
  "features.aiPowered.title": "AI-ਸੰਚਾਲਿਤ ਡਿਵੈਲਪਮੈਂਟ",
  "features.aiPowered.description": "ਆਪਣੇ ਵਿਚਾਰ ਨੂੰ ਕੁਦਰਤੀ ਭਾਸ਼ਾ ਵਿੱਚ ਦੱਸੋ ਅਤੇ ਦੇਖੋ ਕਿਵੇਂ AI ਤੁਹਾਡੀ ਐਪਲੀਕੇਸ਼ਨ ਰੀਅਲ-ਟਾਈਮ ਵਿੱਚ ਬਣਾਉਂਦਾ ਹੈ।",
  "features.visualBuilder.title": "ਵਿਜ਼ੂਅਲ ਬਿਲਡਰ",
  "features.visualBuilder.description": "ਕੰਪੋਨੈਂਟਸ ਨੂੰ ਡਰੈਗ ਅਤੇ ਡਰਾਪ ਕਰੋ, ਲੇਆਉਟ ਕਸਟਮਾਈਜ਼ ਕਰੋ ਅਤੇ ਬਿਨਾਂ ਕੋਡ ਦੇ ਸੁੰਦਰ ਇੰਟਰਫੇਸ ਡਿਜ਼ਾਈਨ ਕਰੋ।",
  "features.instantDeploy.title": "ਤੁਰੰਤ ਡਿਪਲੌਇਮੈਂਟ",
  "features.instantDeploy.description": "ਇੱਕ ਕਲਿੱਕ ਨਾਲ ਆਪਣੀਆਂ ਐਪਲੀਕੇਸ਼ਨਾਂ ਡਿਪਲੌਇ ਕਰੋ। ਕਿਸੇ ਸਰਵਰ ਕੌਂਫਿਗਰੇਸ਼ਨ ਦੀ ਲੋੜ ਨਹੀਂ।",
  "features.database.title": "ਬਿਲਟ-ਇਨ ਡੇਟਾਬੇਸ",
  "features.database.description": "ਆਟੋਮੈਟਿਕ ਸਕੀਮਾ ਜਨਰੇਸ਼ਨ ਅਤੇ ਰੀਅਲ-ਟਾਈਮ ਸਿੰਕ ਨਾਲ ਸ਼ਕਤੀਸ਼ਾਲੀ ਡੇਟਾਬੇਸ ਇੰਟੀਗ੍ਰੇਸ਼ਨ।",
  "features.auth.title": "ਪ੍ਰਮਾਣੀਕਰਨ",
  "features.auth.description": "ਬਾਕਸ ਵਿੱਚੋਂ ਸੁਰੱਖਿਅਤ ਯੂਜ਼ਰ ਪ੍ਰਮਾਣੀਕਰਨ। ਸੋਸ਼ਲ ਲੌਗਿਨ ਅਤੇ SSO ਦਾ ਸਮਰਥਨ।",
  "features.api.title": "API ਇੰਟੀਗ੍ਰੇਸ਼ਨ",
  "features.api.description": "ਸਾਡੇ ਵਿਜ਼ੂਅਲ ਕਨੈਕਟਰ ਨਾਲ ਕਿਸੇ ਵੀ API ਨਾਲ ਜੁੜੋ। OpenAPI ਸਪੈਕਸ ਤੁਰੰਤ ਇੰਪੋਰਟ ਕਰੋ।",
  "features.responsive.title": "ਰਿਸਪੌਂਸਿਵ ਡਿਜ਼ਾਈਨ",
  "features.responsive.description": "ਤੁਹਾਡੀਆਂ ਐਪਸ ਕਿਸੇ ਵੀ ਡਿਵਾਈਸ 'ਤੇ ਵਧੀਆ ਦਿਖਦੀਆਂ ਹਨ। ਆਟੋਮੈਟਿਕ ਰਿਸਪੌਂਸਿਵ ਲੇਆਉਟ ਅਤੇ ਪ੍ਰੀਵਿਊ।",
  "features.collaboration.title": "ਰੀਅਲ-ਟਾਈਮ ਸਹਿਯੋਗ",
  "features.collaboration.description": "ਆਪਣੀ ਟੀਮ ਨਾਲ ਰੀਅਲ-ਟਾਈਮ ਵਿੱਚ ਕੰਮ ਕਰੋ। ਤਬਦੀਲੀਆਂ ਹੁੰਦੀਆਂ ਦੇਖੋ।",

  "buildAnything.title": "ਬਿਨਾਂ ਕਿਸੇ ਸੀਮਾ ਦੇ ਕੋਈ ਵੀ ਐਪਲੀਕੇਸ਼ਨ ਬਣਾਓ",
  "buildAnything.subtitle": "ਬਣਾਉਣਾ ਸ਼ੁਰੂ ਕਰੋ। ਕਮਾਈ ਸ਼ੁਰੂ ਕਰੋ। ਅੱਜ।",
  "buildAnything.exploreAll": "ਸਾਰੇ ਟੈਂਪਲੇਟ ਖੋਜੋ",
  "buildAnything.webApps.title": "ਵੈੱਬ ਐਪਲੀਕੇਸ਼ਨਾਂ",
  "buildAnything.webApps.description": "ਪ੍ਰਮਾਣੀਕਰਨ, ਡੇਟਾਬੇਸ ਅਤੇ APIs ਨਾਲ ਪੂਰੀ-ਫੀਚਰਡ ਵੈੱਬ ਐਪਸ।",
  "buildAnything.mobileApps.title": "ਮੋਬਾਈਲ ਐਪਸ",
  "buildAnything.mobileApps.description": "ਇੱਕ ਸਿੰਗਲ ਕੋਡਬੇਸ ਤੋਂ iOS ਅਤੇ Android ਲਈ ਨੇਟਿਵ ਮੋਬਾਈਲ ਅਨੁਭਵ।",
  "buildAnything.dashboards.title": "ਡੈਸ਼ਬੋਰਡ",
  "buildAnything.dashboards.description": "ਰੀਅਲ-ਟਾਈਮ ਅੱਪਡੇਟਾਂ ਨਾਲ ਡੇਟਾ ਵਿਜ਼ੂਅਲਾਈਜ਼ੇਸ਼ਨ ਅਤੇ ਐਨਾਲਿਟਿਕਸ ਡੈਸ਼ਬੋਰਡ।",
  "buildAnything.ecommerce.title": "ਈ-ਕਾਮਰਸ",
  "buildAnything.ecommerce.description": "ਭੁਗਤਾਨ, ਇਨਵੈਂਟਰੀ ਅਤੇ ਆਰਡਰ ਪ੍ਰਬੰਧਨ ਨਾਲ ਔਨਲਾਈਨ ਸਟੋਰ।",
  "buildAnything.internal.title": "ਅੰਦਰੂਨੀ ਟੂਲ",
  "buildAnything.internal.description": "ਕਸਟਮ ਐਡਮਿਨ ਪੈਨਲ, CRMs ਅਤੇ ਵਰਕਫਲੋ ਆਟੋਮੇਸ਼ਨ ਟੂਲ।",
  "buildAnything.marketplace.title": "ਮਾਰਕੀਟਪਲੇਸ",
  "buildAnything.marketplace.description": "ਖਰੀਦਦਾਰਾਂ ਅਤੇ ਵੇਚਣ ਵਾਲਿਆਂ ਨੂੰ ਜੋੜਨ ਵਾਲੇ ਦੋ-ਪੱਖੀ ਪਲੇਟਫਾਰਮ।",
  "buildAnything.categories.saasplatform": "SaaS ਪਲੇਟਫਾਰਮ",
  "buildAnything.categories.gamingportal": "ਗੇਮਿੰਗ ਪੋਰਟਲ",
  "buildAnything.categories.mapsnavigation": "ਨਕਸ਼ੇ ਅਤੇ ਨੈਵੀਗੇਸ਼ਨ",
  "buildAnything.categories.fashionstore": "ਫੈਸ਼ਨ ਸਟੋਰ",
  "buildAnything.categories.stylecollection": "ਸਟਾਈਲ ਕਲੈਕਸ਼ਨ",
  "buildAnything.categories.beautyproducts": "ਸੁੰਦਰਤਾ ਉਤਪਾਦ",
  "buildAnything.categories.fitnesstracker": "ਫਿਟਨੈਸ ਟ੍ਰੈਕਰ",
  "buildAnything.categories.luxuryfragrance": "ਲਗਜ਼ਰੀ ਖੁਸ਼ਬੂ",
  "buildAnything.categories.beautystore": "ਸੁੰਦਰਤਾ ਸਟੋਰ",
  "buildAnything.categories.streamingplatform": "ਸਟ੍ਰੀਮਿੰਗ ਪਲੇਟਫਾਰਮ",
  "buildAnything.categories.gaminggearstore": "ਗੇਮਿੰਗ ਗੀਅਰ ਸਟੋਰ",
  "buildAnything.categories.gamingstore": "ਗੇਮਿੰਗ ਸਟੋਰ",
  "buildAnything.categories.synthesizer": "ਸਿੰਥੇਸਾਈਜ਼ਰ",
  "buildAnything.categories.projectroadmap": "ਪ੍ਰੋਜੈਕਟ ਰੋਡਮੈਪ",
  "buildAnything.categories.analyticsdashboard": "ਐਨਾਲਿਟਿਕਸ ਡੈਸ਼ਬੋਰਡ",

  "testimonials.badge": "ਪ੍ਰਸ਼ੰਸਾ ਪੱਤਰ",
  "testimonials.title": "ਦੁਨੀਆ ਭਰ ਦੇ ਸਿਰਜਣਹਾਰਾਂ ਦੁਆਰਾ ਪਿਆਰੇ",
  "testimonials.subtitle": "ਹਜ਼ਾਰਾਂ ਡਿਵੈਲਪਰਾਂ, ਡਿਜ਼ਾਈਨਰਾਂ ਅਤੇ ਉੱਦਮੀਆਂ ਨਾਲ ਜੁੜੋ ਜੋ AppNode ਨਾਲ ਬਣਾ ਰਹੇ ਹਨ।",
  "testimonials.quote1": "AppNode ਨੇ ਸਾਡੇ ਪ੍ਰੋਟੋਟਾਈਪ ਬਣਾਉਣ ਦੇ ਤਰੀਕੇ ਨੂੰ ਪੂਰੀ ਤਰ੍ਹਾਂ ਬਦਲ ਦਿੱਤਾ। ਜੋ ਹਫ਼ਤੇ ਲੱਗਦੇ ਸਨ ਹੁਣ ਘੰਟੇ ਲੱਗਦੇ ਹਨ।",
  "testimonials.author1": "ਸਾਰਾ ਚੇਨ",
  "testimonials.role1": "TechCorp ਵਿੱਚ ਪ੍ਰੋਡਕਟ ਮੈਨੇਜਰ",
  "testimonials.quote2": "ਮੈਂ AppNode ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਆਪਣੇ ਪੂਰੇ ਸਟਾਰਟਅੱਪ ਦਾ MVP ਬਣਾਇਆ। AI ਬਿਲਕੁਲ ਸਮਝਦਾ ਹੈ ਕਿ ਮੈਂ ਕੀ ਚਾਹੁੰਦਾ ਹਾਂ।",
  "testimonials.author2": "ਮਾਈਕ ਰੋਡਰੀਗੇਜ਼",
  "testimonials.role2": "StartupX ਦੇ ਸੰਸਥਾਪਕ",
  "testimonials.quote3": "ਇੱਕ ਡਿਜ਼ਾਈਨਰ ਹੋਣ ਦੇ ਨਾਤੇ, ਮੈਂ ਹੁਣ ਡਿਵੈਲਪਰਾਂ ਦੀ ਉਡੀਕ ਕੀਤੇ ਬਿਨਾਂ ਆਪਣੇ ਡਿਜ਼ਾਈਨ ਸਾਕਾਰ ਕਰ ਸਕਦੀ ਹਾਂ।",
  "testimonials.author3": "ਏਮਾ ਵਿਲਸਨ",
  "testimonials.role3": "DesignStudio ਵਿੱਚ ਸੀਨੀਅਰ ਡਿਜ਼ਾਈਨਰ",
  "testimonials.stats.activeUsers": "ਸਰਗਰਮ ਯੂਜ਼ਰ",
  "testimonials.stats.projectsCreated": "ਬਣਾਏ ਗਏ ਪ੍ਰੋਜੈਕਟ",
  "testimonials.stats.countries": "ਦੇਸ਼",
  "testimonials.stats.averageRating": "ਔਸਤ ਰੇਟਿੰਗ",

  "cta.title": "ਕੁਝ ਬਣਾਉਣ ਲਈ ਤਿਆਰ",
  "cta.titleHighlight": "ਸ਼ਾਨਦਾਰ?",
  "cta.subtitle": "ਅੱਜ ਹੀ ਆਪਣੀ ਐਪ ਬਣਾਉਣਾ ਸ਼ੁਰੂ ਕਰੋ। ਕ੍ਰੈਡਿਟ ਕਾਰਡ ਦੀ ਲੋੜ ਨਹੀਂ।",
  "cta.description": "ਹਜ਼ਾਰਾਂ ਸਿਰਜਣਹਾਰਾਂ ਨਾਲ ਜੁੜੋ ਜੋ ਪਹਿਲਾਂ ਤੋਂ ਹੀ AppNode ਨਾਲ ਭਵਿੱਖ ਬਣਾ ਰਹੇ ਹਨ। ਮੁਫ਼ਤ ਸ਼ੁਰੂ ਕਰੋ, ਕ੍ਰੈਡਿਟ ਕਾਰਡ ਦੀ ਲੋੜ ਨਹੀਂ।",
  "cta.button": "ਮੁਫ਼ਤ ਬਣਾਉਣਾ ਸ਼ੁਰੂ ਕਰੋ",
  "cta.emailPlaceholder": "ਆਪਣਾ ਈਮੇਲ ਦਰਜ ਕਰੋ",
  "cta.successMessage": "ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਆਪਣਾ ਈਮੇਲ ਚੈੱਕ ਕਰੋ!",
  "cta.newFeatures": "ਸਮਾਰਟ ਸਟਾਈਲ ਅਤੇ ਆਟੋ ਲੇਆਉਟ",
  "cta.trustedBy": "ਟੀਮਾਂ ਦੁਆਰਾ ਭਰੋਸੇਯੋਗ",

  "footer.learn": "ਸਿੱਖੋ",
  "footer.guides": "ਗਾਈਡਾਂ",
  "footer.videos": "ਵੀਡੀਓਜ਼",
  "footer.privacyPolicy": "ਗੋਪਨੀਯਤਾ ਨੀਤੀ",
  "footer.cookieSettings": "ਕੂਕੀ ਸੈਟਿੰਗਾਂ",
  "footer.termsOfService": "ਸੇਵਾ ਦੀਆਂ ਸ਼ਰਤਾਂ",
  "footer.platformRules": "ਪਲੇਟਫਾਰਮ ਨਿਯਮ",
  "footer.documentation": "ਦਸਤਾਵੇਜ਼",
  "footer.reportAbuse": "ਦੁਰਵਰਤੋਂ ਦੀ ਰਿਪੋਰਟ ਕਰੋ",
  "footer.allRightsReserved": "ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ",
  "footer.madeWith": "ਨਾਲ ਬਣਾਇਆ",
  "footer.tagline": "AI ਨਾਲ ਪ੍ਰੋਡਕਸ਼ਨ-ਰੈਡੀ ਐਪਸ ਬਣਾਓ",
  "footer.connectWithUs": "ਸਾਡੇ ਨਾਲ ਜੁੜੋ"
};

let count = 0;
for (const [key, val] of Object.entries(translations)) {
  setVal(data, key, val);
  count++;
}

fs.writeFileSync(paPath, JSON.stringify(data, null, 2) + '\n', 'utf8');
console.log(`Phase 1 complete: ${count} keys translated in pa.json`);
