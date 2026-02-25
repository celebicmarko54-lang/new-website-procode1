const fs = require('fs');
const pa = require('./src/translations/pa.json');

function setVal(obj, path, val) {
  const parts = path.split('.');
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (!cur[parts[i]] || typeof cur[parts[i]] !== 'object') cur[parts[i]] = {};
    cur = cur[parts[i]];
  }
  cur[parts[parts.length - 1]] = val;
}

let count = 0;

const translations = {
  // enterprisePage (67)
  "enterprisePage.badge": "ਐਂਟਰਪ੍ਰਾਈਜ਼ ਹੱਲ",
  "enterprisePage.title": "ਐਂਟਰਪ੍ਰਾਈਜ਼ ਲਈ ਬਣਾਇਆ",
  "enterprisePage.subtitle": "ਐਂਟਰਪ੍ਰਾਈਜ਼-ਗ੍ਰੇਡ ਸੁਰੱਖਿਆ, ਤਾਮੀਲ ਅਤੇ ਸਮਰਪਿਤ ਸਹਾਇਤਾ ਨਾਲ ਆਪਣੀ ਸੰਸਥਾ ਨੂੰ ਤਾਕਤ ਦਿਓ।",
  "enterprisePage.contactSales": "ਵਿਕਰੀ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
  "enterprisePage.bookDemo": "ਡੈਮੋ ਬੁੱਕ ਕਰੋ",
  "enterprisePage.trustedTitle": "ਅਗਾਂਹਵਧੂ ਕੰਪਨੀਆਂ ਦੁਆਰਾ ਭਰੋਸੇਯੋਗ",
  "enterprisePage.trustedSubtitle": "ਦੁਨੀਆ ਭਰ ਦੀਆਂ ਸੰਸਥਾਵਾਂ ਭਰੋਸੇਯੋਗ ਐਪਲੀਕੇਸ਼ਨਾਂ ਬਣਾਉਣ ਲਈ AppNode 'ਤੇ ਭਰੋਸਾ ਕਰਦੀਆਂ ਹਨ।",
  "enterprisePage.stats.activeEnterprises": "ਸਰਗਰਮ ਐਂਟਰਪ੍ਰਾਈਜ਼",
  "enterprisePage.stats.uptime": "ਅੱਪਟਾਈਮ SLA",
  "enterprisePage.stats.supportResponse": "ਸਹਾਇਤਾ ਜਵਾਬ",
  "enterprisePage.stats.dataCenters": "ਡੇਟਾ ਸੈਂਟਰ",
  "enterprisePage.securityTitle": "ਐਂਟਰਪ੍ਰਾਈਜ਼-ਗ੍ਰੇਡ ਸੁਰੱਖਿਆ",
  "enterprisePage.securitySubtitle": "ਤੁਹਾਡੇ ਡੇਟਾ ਅਤੇ ਐਪਲੀਕੇਸ਼ਨਾਂ ਲਈ ਵਿਆਪਕ ਸੁਰੱਖਿਆ।",
  "enterprisePage.security.soc2.title": "SOC 2 Type II",
  "enterprisePage.security.soc2.description": "ਘੱਟੋ-ਘੱਟ ਸਲਾਨਾ ਆਡਿਟ ਕੀਤੇ ਤੀਜੀ ਧਿਰ ਦੇ ਆਡਿਟ ਨਾਲ ਪ੍ਰਮਾਣਿਤ ਤਾਮੀਲ।",
  "enterprisePage.security.encryption.title": "ਐਂਡ-ਟੂ-ਐਂਡ ਇੰਕ੍ਰਿਪਸ਼ਨ",
  "enterprisePage.security.encryption.description": "AES-256 ਇੰਕ੍ਰਿਪਸ਼ਨ ਨਾਲ ਰੈਸਟ ਅਤੇ ਟ੍ਰਾਂਜ਼ਿਟ ਵਿੱਚ ਡੇਟਾ।",
  "enterprisePage.security.sso.title": "SSO ਇੰਟੀਗ੍ਰੇਸ਼ਨ",
  "enterprisePage.security.sso.description": "Okta, Azure AD, Google Workspace ਅਤੇ ਹੋਰ ਨਾਲ SAML SSO।",
  "enterprisePage.security.rbac.title": "ਭੂਮਿਕਾ-ਅਧਾਰਿਤ ਪਹੁੰਚ",
  "enterprisePage.security.rbac.description": "ਸੰਗਠਨਾਤਮਕ ਲੋੜਾਂ ਅਨੁਸਾਰ ਬਾਰੀਕ ਅਨੁਮਤੀ ਕੰਟਰੋਲ।",
  "enterprisePage.security.audit.title": "ਆਡਿਟ ਲੌਗ",
  "enterprisePage.security.audit.description": "ਤਾਮੀਲ ਰਿਪੋਰਟਿੰਗ ਲਈ ਵਿਸਤ੍ਰਿਤ ਗਤੀਵਿਧੀ ਲੌਗ।",
  "enterprisePage.security.privateCloud.title": "ਪ੍ਰਾਈਵੇਟ ਕਲਾਊਡ",
  "enterprisePage.security.privateCloud.description": "ਆਪਣੇ ਡੈਡੀਕੇਟਿਡ ਇਨਫ੍ਰਾਸਟ੍ਰਕਚਰ 'ਤੇ ਡਿਪਲੌਇ ਕਰੋ।",
  "enterprisePage.featuresTitle": "ਐਂਟਰਪ੍ਰਾਈਜ਼ ਫੀਚਰ",
  "enterprisePage.featuresSubtitle": "ਐਂਟਰਪ੍ਰਾਈਜ਼ ਲੋੜਾਂ ਲਈ ਬਣਾਈ ਗਈ ਸ਼ਕਤੀਸ਼ਾਲੀ ਸਮਰੱਥਾਵਾਂ।",
  "enterprisePage.features.teamManagement.title": "ਟੀਮ ਪ੍ਰਬੰਧਨ",
  "enterprisePage.features.teamManagement.description": "ਟੀਮ ਮੈਂਬਰਾਂ, ਭੂਮਿਕਾਵਾਂ ਅਤੇ ਅਨੁਮਤੀਆਂ ਨੂੰ ਕੇਂਦਰੀ ਤੌਰ 'ਤੇ ਪ੍ਰਬੰਧਿਤ ਕਰੋ।",
  "enterprisePage.features.customBranding.title": "ਕਸਟਮ ਬ੍ਰਾਂਡਿੰਗ",
  "enterprisePage.features.customBranding.description": "ਐਪਸ ਅਤੇ ਪੋਰਟਲ 'ਤੇ ਆਪਣੀ ਬ੍ਰਾਂਡ ਪਛਾਣ ਲਾਗੂ ਕਰੋ।",
  "enterprisePage.features.prioritySupport.title": "ਤਰਜੀਹੀ ਸਹਾਇਤਾ",
  "enterprisePage.features.prioritySupport.description": "ਸਮਰਪਿਤ ਅਕਾਊਂਟ ਮੈਨੇਜਰ ਨਾਲ 24/7 ਸਹਾਇਤਾ।",
  "enterprisePage.features.advancedAnalytics.title": "ਐਡਵਾਂਸਡ ਐਨਾਲਿਟਿਕਸ",
  "enterprisePage.features.advancedAnalytics.description": "ਡੂੰਘੀਆਂ ਇਨਸਾਈਟਸ ਅਤੇ ਕਸਟਮ ਰਿਪੋਰਟਿੰਗ ਡੈਸ਼ਬੋਰਡ।",
  "enterprisePage.features.apiAccess.title": "API ਪਹੁੰਚ",
  "enterprisePage.features.apiAccess.description": "ਆਪਣੇ ਵਰਕਫਲੋ ਵਿੱਚ ਇੰਟੀਗ੍ਰੇਟ ਕਰਨ ਲਈ ਪੂਰੀ API ਪਹੁੰਚ।",
  "enterprisePage.features.sla.title": "SLA ਗਾਰੰਟੀ",
  "enterprisePage.features.sla.description": "ਅੱਪਟਾਈਮ ਅਤੇ ਜਵਾਬ ਸਮੇਂ ਲਈ ਗਾਰੰਟੀਸ਼ੁਦਾ SLAs।",
  "enterprisePage.testimonialsTitle": "ਐਂਟਰਪ੍ਰਾਈਜ਼ ਕਲਾਇੰਟ ਕੀ ਕਹਿੰਦੇ ਹਨ",
  "enterprisePage.testimonialsSubtitle": "ਦੁਨੀਆ ਭਰ ਦੀਆਂ ਸੰਸਥਾਵਾਂ ਦੁਆਰਾ ਭਰੋਸੇਯੋਗ",
  "enterprisePage.testimonials.t1.quote": "AppNode ਨੇ ਸਾਡੇ ਡਿਵੈਲਪਮੈਂਟ ਸਮੇਂ ਨੂੰ 60% ਘਟਾ ਦਿੱਤਾ ਜਦੋਂ ਕਿ ਸੁਰੱਖਿਆ ਮਿਆਰ ਬਣਾਏ ਰੱਖੇ ਜੋ ਸਾਡੀ ਤਾਮੀਲ ਟੀਮ ਨੂੰ ਲੋੜ ਹੈ।",
  "enterprisePage.testimonials.t1.author": "ਸਾਰਾ ਜਾਨਸਨ",
  "enterprisePage.testimonials.t1.role": "CTO, TechCorp ਇੰਕ.",
  "enterprisePage.testimonials.t2.quote": "ਐਂਟਰਪ੍ਰਾਈਜ਼ ਫੀਚਰ ਬਿਲਕੁਲ ਉਹੀ ਹਨ ਜੋ ਸਾਨੂੰ ਚਾਹੀਦੇ ਸਨ। SSO ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਸਹਿਜ ਸੀ।",
  "enterprisePage.testimonials.t2.author": "ਮਾਈਕਲ ਚੇਨ",
  "enterprisePage.testimonials.t2.role": "ਇੰਜੀਨੀਅਰਿੰਗ VP, DataFlow",
  "enterprisePage.testimonials.t3.quote": "ਸਮਰਪਿਤ ਸਹਾਇਤਾ ਟੀਮ ਸ਼ਾਨਦਾਰ ਰਹੀ ਹੈ। ਉਹਨਾਂ ਨੇ ਸਾਡੇ ਮਾਈਗ੍ਰੇਸ਼ਨ ਪ੍ਰਕਿਰਿਆ ਵਿੱਚ ਸੱਚਮੁੱਚ ਮਦਦ ਕੀਤੀ।",
  "enterprisePage.testimonials.t3.author": "ਐਮਿਲੀ ਡੇਵਿਸ",
  "enterprisePage.testimonials.t3.role": "CTO, CloudScale",
  "enterprisePage.cta.title": "ਐਂਟਰਪ੍ਰਾਈਜ਼ ਨਾਲ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਤਿਆਰ?",
  "enterprisePage.cta.subtitle": "ਸਾਡੀ ਟੀਮ ਨਾਲ ਗੱਲ ਕਰੋ ਅਤੇ ਇੱਕ ਅਨੁਕੂਲ ਯੋਜਨਾ ਪ੍ਰਾਪਤ ਕਰੋ।",
  "enterprisePage.cta.contactSales": "ਵਿਕਰੀ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
  "enterprisePage.cta.learnMore": "ਹੋਰ ਜਾਣੋ",
  "enterprisePage.form.title": "ਐਂਟਰਪ੍ਰਾਈਜ਼ ਰਜਿਸਟ੍ਰੇਸ਼ਨ",
  "enterprisePage.form.subtitle": "ਆਪਣੀ ਜਾਣਕਾਰੀ ਭਰੋ ਅਤੇ ਸਾਡੀ ਟੀਮ 24 ਘੰਟਿਆਂ ਵਿੱਚ ਸੰਪਰਕ ਕਰੇਗੀ।",
  "enterprisePage.form.firstName": "ਪਹਿਲਾ ਨਾਮ",
  "enterprisePage.form.lastName": "ਆਖਰੀ ਨਾਮ",
  "enterprisePage.form.email": "ਕੰਮ ਦਾ ਈਮੇਲ",
  "enterprisePage.form.company": "ਕੰਪਨੀ ਦਾ ਨਾਮ",
  "enterprisePage.form.teamSize": "ਟੀਮ ਦਾ ਆਕਾਰ",
  "enterprisePage.form.message": "ਸੁਨੇਹਾ",
  "enterprisePage.form.submit": "ਜਮ੍ਹਾਂ ਕਰੋ",
  "enterprisePage.form.teamSizes.small": "1-10 ਕਰਮਚਾਰੀ",
  "enterprisePage.form.teamSizes.medium": "11-50 ਕਰਮਚਾਰੀ",
  "enterprisePage.form.teamSizes.large": "51-200 ਕਰਮਚਾਰੀ",
  "enterprisePage.form.teamSizes.xlarge": "201-1000 ਕਰਮਚਾਰੀ",
  "enterprisePage.form.teamSizes.enterprise": "1000+ ਕਰਮਚਾਰੀ",

  // auth (36)
  "auth.welcome": "ਵਾਪਸੀ 'ਤੇ ਜੀ ਆਇਆਂ ਨੂੰ",
  "auth.loginSubtitle": "ਆਪਣੇ AppNode ਖਾਤੇ ਵਿੱਚ ਲੌਗ ਇਨ ਕਰੋ",
  "auth.email": "ਈਮੇਲ ਪਤਾ",
  "auth.password": "ਪਾਸਵਰਡ",
  "auth.confirmPassword": "ਪਾਸਵਰਡ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
  "auth.forgotPassword": "ਪਾਸਵਰਡ ਭੁੱਲ ਗਏ?",
  "auth.login": "ਲੌਗ ਇਨ",
  "auth.loginWith": "ਨਾਲ ਲੌਗ ਇਨ ਕਰੋ",
  "auth.orContinueWith": "ਜਾਂ ਨਾਲ ਜਾਰੀ ਰੱਖੋ",
  "auth.noAccount": "ਖਾਤਾ ਨਹੀਂ ਹੈ?",
  "auth.signUp": "ਸਾਈਨ ਅੱਪ",
  "auth.hasAccount": "ਪਹਿਲਾਂ ਤੋਂ ਖਾਤਾ ਹੈ?",
  "auth.createAccount": "ਆਪਣਾ ਖਾਤਾ ਬਣਾਓ",
  "auth.signupSubtitle": "ਅੱਜ ਹੀ AppNode ਨਾਲ ਬਣਾਉਣਾ ਸ਼ੁਰੂ ਕਰੋ",
  "auth.fullName": "ਪੂਰਾ ਨਾਮ",
  "auth.agreeToTerms": "ਸੇਵਾ ਦੀਆਂ ਸ਼ਰਤਾਂ ਨਾਲ ਸਹਿਮਤ ਹਾਂ",
  "auth.signupButton": "ਖਾਤਾ ਬਣਾਓ",
  "auth.passwordStrength.weak": "ਕਮਜ਼ੋਰ",
  "auth.passwordStrength.medium": "ਮੱਧਮ",
  "auth.passwordStrength.strong": "ਮਜ਼ਬੂਤ",
  "auth.termsText": "ਖਾਤਾ ਬਣਾ ਕੇ, ਤੁਸੀਂ ਸਾਡੀਆਂ ਸੇਵਾ ਦੀਆਂ ਸ਼ਰਤਾਂ ਅਤੇ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਨਾਲ ਸਹਿਮਤ ਹੁੰਦੇ ਹੋ",
  "auth.startBuilding": "ਅੱਜ ਹੀ ਬਣਾਉਣਾ ਸ਼ੁਰੂ ਕਰੋ",
  "auth.freeGenerations": "ਸ਼ੁਰੂ ਕਰਨ ਲਈ 2 ਮੁਫ਼ਤ ਜਨਰੇਸ਼ਨ",
  "auth.noCreditCard": "ਕ੍ਰੈਡਿਟ ਕਾਰਡ ਦੀ ਲੋੜ ਨਹੀਂ",
  "auth.fullAccess": "ਸਾਰੇ ਟੈਂਪਲੇਟਾਂ ਤੱਕ ਪੂਰੀ ਪਹੁੰਚ",
  "auth.step1": "ਖਾਤਾ",
  "auth.step2": "ਪ੍ਰੋਫਾਈਲ",
  "auth.step3": "ਤਿਆਰ",
  "auth.next": "ਅਗਲਾ",
  "auth.back": "ਪਿੱਛੇ",
  "auth.getStarted": "ਸ਼ੁਰੂ ਕਰੋ",
  "auth.almostThere": "ਲਗਭਗ ਪੂਰਾ!",
  "auth.completeProfile": "ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਆਪਣੀ ਪ੍ਰੋਫਾਈਲ ਪੂਰੀ ਕਰੋ",
  "auth.loginButton": "ਲੌਗ ਇਨ ਕਰੋ",

  // docs (7)
  "docs.title": "ਦਸਤਾਵੇਜ਼",
  "docs.subtitle": "ਹਰ ਚੀਜ਼ ਸਿੱਖੋ ਜੋ ਤੁਹਾਨੂੰ ਜਾਣਨ ਦੀ ਲੋੜ ਹੈ",
  "docs.searchPlaceholder": "ਦਸਤਾਵੇਜ਼ ਖੋਜੋ...",
  "docs.gettingStarted": "ਸ਼ੁਰੂ ਕਰਨਾ",
  "docs.apiReference": "API ਹਵਾਲਾ",
  "docs.tutorials": "ਟਿਊਟੋਰੀਅਲ",
  "docs.changelog": "ਤਬਦੀਲੀ ਲੌਗ",

  // blog (6)
  "blog.title": "ਬਲਾਗ",
  "blog.subtitle": "ਨਵੀਨਤਮ ਖ਼ਬਰਾਂ, ਟਿਊਟੋਰੀਅਲ ਅਤੇ ਅੱਪਡੇਟ",
  "blog.readMore": "ਹੋਰ ਪੜ੍ਹੋ",
  "blog.featured": "ਫੀਚਰਡ",
  "blog.allPosts": "ਸਾਰੀਆਂ ਪੋਸਟਾਂ",
  "blog.categories.all": "ਸਭ",

  // careers (14)
  "careers.title": "ਨੌਕਰੀਆਂ",
  "careers.subtitle": "ਸਾਡੇ ਨਾਲ ਭਵਿੱਖ ਬਣਾਓ",
  "careers.openPositions": "ਖੁੱਲ੍ਹੀਆਂ ਅਸਾਮੀਆਂ",
  "careers.noPositions": "ਇਸ ਸਮੇਂ ਕੋਈ ਅਸਾਮੀ ਉਪਲਬਧ ਨਹੀਂ",
  "careers.benefits.title": "ਫਾਇਦੇ",
  "careers.benefits.remote": "ਰਿਮੋਟ-ਫਸਟ ਕੰਮ",
  "careers.benefits.equity": "ਇਕੁਇਟੀ ਤਨਖ਼ਾਹ",
  "careers.benefits.health": "ਸਿਹਤ ਬੀਮਾ",
  "careers.benefits.learning": "ਸਿੱਖਣ ਦਾ ਬਜਟ",
  "careers.benefits.vacation": "ਅਸੀਮਤ PTO",
  "careers.benefits.equipment": "ਉਪਕਰਨ ਭੱਤਾ",
  "careers.department": "ਵਿਭਾਗ",
  "careers.location": "ਸਥਾਨ",
  "careers.type": "ਕਿਸਮ",

  // community (5)
  "community.title": "ਕਮਿਊਨਿਟੀ",
  "community.subtitle": "ਜੁੜੋ, ਸਿੱਖੋ ਅਤੇ ਹੋਰ ਬਿਲਡਰਾਂ ਨਾਲ ਮਿਲ ਕੇ ਬਣਾਓ",
  "community.joinDiscord": "Discord ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ",
  "community.forum": "ਫੋਰਮ",
  "community.contribute": "ਯੋਗਦਾਨ ਦਿਓ",

  // support (5)
  "support.title": "ਸਹਾਇਤਾ",
  "support.subtitle": "ਅਸੀਂ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦੇ ਹਾਂ?",
  "support.searchPlaceholder": "ਮਦਦ ਖੋਜੋ...",
  "support.contactUs": "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
  "support.faq": "ਅਕਸਰ ਪੁੱਛੇ ਜਾਣ ਵਾਲੇ ਸਵਾਲ",

  // legal (6)
  "legal.privacy": "ਗੋਪਨੀਯਤਾ",
  "legal.terms": "ਸ਼ਰਤਾਂ",
  "legal.cookies": "ਕੂਕੀਜ਼",
  "legal.rules": "ਨਿਯਮ",
  "legal.lastUpdated": "ਆਖਰੀ ਅੱਪਡੇਟ",
  "legal.effectiveDate": "ਪ੍ਰਭਾਵੀ ਤਾਰੀਖ",

  // status (5)
  "status.title": "ਸਿਸਟਮ ਸਥਿਤੀ",
  "status.operational": "ਚਾਲੂ",
  "status.degraded": "ਘਟੀ ਕਾਰਗੁਜ਼ਾਰੀ",
  "status.down": "ਬੰਦ",
  "status.allOperational": "ਸਾਰੇ ਸਿਸਟਮ ਚਾਲੂ ਹਨ",

  // errors (5)
  "errors.notFound": "ਪੇਜ ਨਹੀਂ ਮਿਲਿਆ",
  "errors.serverError": "ਸਰਵਰ ਗਲਤੀ",
  "errors.unauthorized": "ਅਣਅਧਿਕਾਰਤ",
  "errors.goHome": "ਹੋਮ 'ਤੇ ਜਾਓ",
  "errors.tryAgain": "ਫੇਰ ਕੋਸ਼ਿਸ਼ ਕਰੋ"
};

for (const [key, val] of Object.entries(translations)) {
  setVal(pa, key, val);
  count++;
}

fs.writeFileSync('./src/translations/pa.json', JSON.stringify(pa, null, 2), 'utf8');
console.log(`Phase 4 complete: ${count} keys translated`);
