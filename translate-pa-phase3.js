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
  // productMobile (35 keys)
  "productMobile.badge": "ਚਲਦੇ-ਫਿਰਦੇ ਬਣਾਓ",
  "productMobile.title": "AppNode",
  "productMobile.titleHighlight": "ਮੋਬਾਈਲ ਲਈ",
  "productMobile.subtitle": "ਕਿਤੇ ਵੀ ਆਪਣੀਆਂ ਐਪਸ ਬਣਾਓ, ਸੰਪਾਦਿਤ ਕਰੋ ਅਤੇ ਡਿਪਲੌਇ ਕਰੋ। ਤੁਹਾਡੀ ਜੇਬ ਵਿੱਚ AppNode ਦੀ ਪੂਰੀ ਤਾਕਤ।",
  "productMobile.appStore": "ਐਪ ਸਟੋਰ",
  "productMobile.playStore": "ਪਲੇ ਸਟੋਰ",
  "productMobile.live": "ਲਾਈਵ",
  "productMobile.run": "ਚਲਾਓ",
  "productMobile.deploy": "ਡਿਪਲੌਇ",
  "productMobile.output": "ਆਊਟਪੁੱਟ",
  "productMobile.featuresTitle": "ਪੂਰੀ ਤਾਕਤ, ਕਿਤੇ ਵੀ",
  "productMobile.downloadIOS": "iOS ਲਈ ਡਾਊਨਲੋਡ",
  "productMobile.downloadAndroid": "Android ਲਈ ਡਾਊਨਲੋਡ",
  "productMobile.features.codeEditor.title": "ਪੂਰਾ ਕੋਡ ਐਡੀਟਰ",
  "productMobile.features.codeEditor.description": "ਸਿੰਟੈਕਸ ਹਾਈਲਾਈਟਿੰਗ, ਆਟੋਕੰਪਲੀਟ ਅਤੇ ਮਲਟੀ-ਫਾਈਲ ਸਪੋਰਟ ਨਾਲ ਪੂਰਾ ਕੋਡ ਐਡੀਟਰ।",
  "productMobile.features.oneTapDeploy.title": "ਇੱਕ-ਟੈਪ ਡਿਪਲੌਇ",
  "productMobile.features.oneTapDeploy.description": "ਆਪਣੇ ਫ਼ੋਨ ਤੋਂ ਤੁਰੰਤ ਤਬਦੀਲੀਆਂ ਡਿਪਲੌਇ ਕਰੋ। ਸਕਿੰਟਾਂ ਵਿੱਚ ਐਪ ਲਾਈਵ ਦੇਖੋ।",
  "productMobile.features.realTimeSync.title": "ਰੀਅਲ-ਟਾਈਮ ਸਿੰਕ",
  "productMobile.features.realTimeSync.description": "ਤੁਹਾਡੇ ਪ੍ਰੋਜੈਕਟ ਸਾਰੀਆਂ ਡਿਵਾਈਸਾਂ ਵਿੱਚ ਸਿੰਕ ਹੁੰਦੇ ਹਨ। ਡੈਸਕਟਾਪ 'ਤੇ ਸ਼ੁਰੂ ਕਰੋ, ਮੋਬਾਈਲ 'ਤੇ ਜਾਰੀ ਰੱਖੋ।",
  "productMobile.features.aiAssistant.title": "AI ਅਸਿਸਟੈਂਟ",
  "productMobile.features.aiAssistant.description": "ਮੋਬਾਈਲ 'ਤੇ ਵੀ ਕੋਡ ਲਿਖਣ ਵਿੱਚ AI ਮਦਦ ਲਵੋ। ਵਾਇਸ ਇਨਪੁਟ ਸਮਰਥਿਤ।",
  "productMobile.features.liveAnalytics.title": "ਲਾਈਵ ਐਨਾਲਿਟਿਕਸ",
  "productMobile.features.liveAnalytics.description": "ਤੁਰਦੇ-ਫਿਰਦੇ ਆਪਣੀ ਐਪ ਦੀ ਪਰਫਾਰਮੈਂਸ, ਗਲਤੀਆਂ ਅਤੇ ਯੂਜ਼ਰ ਮੈਟ੍ਰਿਕਸ ਮਾਨੀਟਰ ਕਰੋ।",
  "productMobile.features.teamCollaboration.title": "ਟੀਮ ਸਹਿਯੋਗ",
  "productMobile.features.teamCollaboration.description": "PRs ਰਿਵਿਊ ਕਰੋ, ਕੋਡ 'ਤੇ ਟਿੱਪਣੀ ਕਰੋ ਅਤੇ ਕਿਤੇ ਵੀ ਆਪਣੀ ਟੀਮ ਨਾਲ ਸਹਿਯੋਗ ਕਰੋ।",
  "productMobile.cta.title": "ਕਿਤੇ ਵੀ ਕੋਡ ਕਰੋ",
  "productMobile.cta.subtitle": "AppNode ਮੋਬਾਈਲ ਡਾਊਨਲੋਡ ਕਰੋ ਅਤੇ ਆਪਣੇ ਡਿਵੈਲਪਮੈਂਟ ਵਰਕਫਲੋ ਨੂੰ ਨਾਲ ਲੈ ਜਾਓ।",
  "productMobile.comingSoonOn": "ਜਲਦ ਆ ਰਿਹਾ ਹੈ",
  "productMobile.googlePlay": "ਗੂਗਲ ਪਲੇ",
  "productMobile.soonBadge": "ਜਲਦ",
  "productMobile.comingSoonTitle": "ਮੋਬਾਈਲ ਐਪਸ ਜਲਦ ਆ ਰਹੀਆਂ ਹਨ",
  "productMobile.comingSoonDescription": "ਸਾਡੀਆਂ ਮੋਬਾਈਲ ਐਪਸ ਫਿਲਹਾਲ ਤਿਆਰੀ ਵਿੱਚ ਹਨ। ਇਸ ਦੌਰਾਨ, ਸਾਡੇ ਯੂਜ਼ਰ ਕਿਸੇ ਵੀ ਡਿਵਾਈਸ ਤੋਂ ਬ੍ਰਾਊਜ਼ਰ ਰਾਹੀਂ AppNode ਤੱਕ ਪਹੁੰਚ ਕਰ ਸਕਦੇ ਹਨ।",
  "productMobile.tabletPreview": "ਟੈਬਲੇਟ ਪ੍ਰੀਵਿਊ",
  "productMobile.phonePreview": "ਫ਼ੋਨ ਪ੍ਰੀਵਿਊ",
  "productMobile.tryAppNodeNow": "ਹੁਣ AppNode ਅਜ਼ਮਾਓ",

  // productPublish (21 keys)
  "productPublish.badge": "ਡਿਪਲੌਇਮੈਂਟ",
  "productPublish.title": "ਤੁਰੰਤ ਪਬਲਿਸ਼ ਕਰੋ",
  "productPublish.titleHighlight": "ਤੁਰੰਤ",
  "productPublish.subtitle": "ਇੱਕ ਕਲਿੱਕ ਨਾਲ ਆਪਣੀਆਂ ਐਪਸ ਡਿਪਲੌਇ ਕਰੋ। ਕਸਟਮ ਡੋਮੇਨ, SSL ਸਰਟੀਫਿਕੇਟ ਅਤੇ CDN ਪ੍ਰਾਪਤ ਕਰੋ।",
  "productPublish.deploy": "ਹੁਣ ਡਿਪਲੌਇ ਕਰੋ",
  "productPublish.learnMore": "ਹੋਰ ਜਾਣੋ",
  "productPublish.featuresTitle": "ਸ਼ਿਪ ਕਰਨ ਲਈ ਸਭ ਕੁਝ",
  "productPublish.features.oneClick.title": "ਇੱਕ-ਕਲਿੱਕ ਡਿਪਲੌਇ",
  "productPublish.features.oneClick.description": "ਆਪਣੇ ਐਡੀਟਰ ਤੋਂ ਸਿੱਧੇ ਡਿਪਲੌਇ ਕਰੋ।",
  "productPublish.features.customDomains.title": "ਕਸਟਮ ਡੋਮੇਨ",
  "productPublish.features.customDomains.description": "ਆਪਣਾ ਡੋਮੇਨ ਜੋੜੋ ਜਾਂ ਸਾਡਾ ਸਬਡੋਮੇਨ ਵਰਤੋ।",
  "productPublish.features.autoSSL.title": "ਆਟੋਮੈਟਿਕ SSL",
  "productPublish.features.autoSSL.description": "ਹਰ ਡਿਪਲੌਇਮੈਂਟ ਨੂੰ ਮੁਫ਼ਤ SSL ਸਰਟੀਫਿਕੇਟ ਮਿਲਦਾ ਹੈ।",
  "productPublish.features.globalCDN.title": "ਗਲੋਬਲ CDN",
  "productPublish.features.globalCDN.description": "ਦੁਨੀਆ ਭਰ ਵਿੱਚ ਤੇਜ਼ ਲੋਡਿੰਗ ਲਈ CDN ਦੁਆਰਾ ਕੰਟੈਂਟ ਡਿਲੀਵਰੀ।",
  "productPublish.features.analytics.title": "ਐਨਾਲਿਟਿਕਸ",
  "productPublish.features.analytics.description": "ਵਸੀਟਰ ਅਤੇ ਪਰਫਾਰਮੈਂਸ ਟ੍ਰੈਕ ਕਰੋ।",
  "productPublish.features.rollbacks.title": "ਤੁਰੰਤ ਰੋਲਬੈਕ",
  "productPublish.features.rollbacks.description": "ਕਿਸੇ ਵੀ ਪਿਛਲੇ ਵਰਜ਼ਨ 'ਤੇ ਤੁਰੰਤ ਵਾਪਸ ਜਾਓ।",
  "productPublish.cta.title": "ਅੱਜ ਹੀ ਆਪਣੀ ਐਪ ਡਿਪਲੌਇ ਕਰੋ",
  "productPublish.cta.subtitle": "ਇੱਕ ਕਲਿੱਕ ਨਾਲ ਆਪਣੀ ਐਪ ਪ੍ਰੋਡਕਸ਼ਨ ਵਿੱਚ ਲੈ ਜਾਓ।",

  // productSecurity (23 keys)
  "productSecurity.badge": "ਐਂਟਰਪ੍ਰਾਈਜ਼ ਸੁਰੱਖਿਆ",
  "productSecurity.title": "ਸੁਰੱਖਿਆ ਪਹਿਲਾਂ",
  "productSecurity.titleHighlight": "ਪਹਿਲਾਂ",
  "productSecurity.subtitle": "ਭਰੋਸੇ ਨਾਲ ਬਣਾਓ। AppNode ਐਂਟਰਪ੍ਰਾਈਜ਼ ਗ੍ਰੇਡ ਸੁਰੱਖਿਆ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ ਤਾਂ ਜੋ ਤੁਹਾਡਾ ਡੇਟਾ ਸੁਰੱਖਿਅਤ ਰਹੇ।",
  "productSecurity.enterpriseSolution": "ਐਂਟਰਪ੍ਰਾਈਜ਼ ਹੱਲ",
  "productSecurity.securityReport": "ਸੁਰੱਖਿਆ ਰਿਪੋਰਟ",
  "productSecurity.gdpr": "GDPR ਮੁਤਾਬਕ",
  "productSecurity.hipaa": "HIPAA ਤਿਆਰ",
  "productSecurity.featuresTitle": "ਸੁਰੱਖਿਆ ਫੀਚਰ",
  "productSecurity.features.encryption.title": "ਐਂਡ-ਟੂ-ਐਂਡ ਇੰਕ੍ਰਿਪਸ਼ਨ",
  "productSecurity.features.encryption.description": "ਤੁਹਾਡਾ ਸਾਰਾ ਡੇਟਾ ਟ੍ਰਾਂਜ਼ਿਟ ਅਤੇ ਰੈਸਟ ਵਿੱਚ ਐਂਕ੍ਰਿਪਟ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।",
  "productSecurity.features.sso.title": "SSO ਇੰਟੀਗ੍ਰੇਸ਼ਨ",
  "productSecurity.features.sso.description": "SAML ਅਤੇ OAuth ਨਾਲ ਸਿੰਗਲ ਸਾਈਨ-ਆਨ ਸਪੋਰਟ।",
  "productSecurity.features.audit.title": "ਆਡਿਟ ਲੌਗ",
  "productSecurity.features.audit.description": "ਤੁਹਾਡੀ ਸੰਸਥਾ ਵਿੱਚ ਸਾਰੀਆਂ ਕਾਰਵਾਈਆਂ ਟ੍ਰੈਕ ਕਰੋ।",
  "productSecurity.features.rbac.title": "ਭੂਮਿਕਾ-ਅਧਾਰਿਤ ਪਹੁੰਚ",
  "productSecurity.features.rbac.description": "ਟੀਮ ਮੈਂਬਰਾਂ ਲਈ ਫਾਈਨ ਕੰਟਰੋਲ ਅਤੇ ਅਨੁਮਤੀਆਂ।",
  "productSecurity.features.sandbox.title": "ਸੈਂਡਬਾਕਸ ਅਲੱਗ",
  "productSecurity.features.sandbox.description": "ਹਰ ਪ੍ਰੋਜੈਕਟ ਇੱਕ ਅਲੱਗ, ਸੁਰੱਖਿਅਤ ਸੈਂਡਬਾਕਸ ਵਿੱਚ ਚਲਦਾ ਹੈ।",
  "productSecurity.features.scanning.title": "ਕਮਜ਼ੋਰੀ ਸਕੈਨਿੰਗ",
  "productSecurity.features.scanning.description": "ਡਿਪੈਂਡੈਂਸੀ ਅਤੇ ਕੋਡ ਦੀ ਆਟੋਮੈਟਿਕ ਸੁਰੱਖਿਆ ਸਕੈਨਿੰਗ।",
  "productSecurity.cta.title": "ਅੱਜ ਹੀ ਸੁਰੱਖਿਅਤ ਤਰੀਕੇ ਨਾਲ ਬਣਾਓ",
  "productSecurity.cta.subtitle": "AppNode ਦੀ ਐਂਟਰਪ੍ਰਾਈਜ਼-ਗ੍ਰੇਡ ਸੁਰੱਖਿਆ ਨਾਲ ਆਪਣੀਆਂ ਐਪਲੀਕੇਸ਼ਨਾਂ ਅਤੇ ਡੇਟਾ ਦੀ ਰੱਖਿਆ ਕਰੋ।",

  // solutions (7 keys)
  "solutions.founders.title": "ਬਾਨੀਆਂ ਲਈ",
  "solutions.founders.description": "ਤੇਜ਼ੀ ਨਾਲ ਲਾਂਚ ਕਰੋ, ਸਮਝਦਾਰੀ ਨਾਲ ਸੁਧਾਰੋ",
  "solutions.designers.title": "ਡਿਜ਼ਾਈਨਰਾਂ ਲਈ",
  "solutions.designers.description": "ਡਿਜ਼ਾਈਨ ਤੋਂ ਪ੍ਰੋਡਕਸ਼ਨ ਮਿੰਟਾਂ ਵਿੱਚ",
  "solutions.marketers.title": "ਮਾਰਕੀਟਰਾਂ ਲਈ",
  "solutions.marketers.description": "ਲੈਂਡਿੰਗ ਪੇਜ਼ ਅਤੇ ਕੈਂਪੇਨ ਤੇਜ਼ੀ ਨਾਲ",
  "solutions.enterprise.description": "ਤਾਮੀਲ, SSO ਅਤੇ ਸਮਰਪਿਤ ਸਹਾਇਤਾ ਨਾਲ ਸੁਰੱਖਿਅਤ ਤਰੀਕੇ ਨਾਲ ਸਕੇਲ ਕਰੋ।",

  // useCases (7 keys)
  "useCases.businessApps.title": "ਕਾਰੋਬਾਰੀ ਐਪਲੀਕੇਸ਼ਨਾਂ",
  "useCases.businessApps.description": "ਸ਼ਕਤੀਸ਼ਾਲੀ ਅੰਦਰੂਨੀ ਟੂਲ ਅਤੇ ਡੈਸ਼ਬੋਰਡ ਬਣਾਓ।",
  "useCases.mobileApps.title": "ਮੋਬਾਈਲ ਐਪਲੀਕੇਸ਼ਨਾਂ",
  "useCases.mobileApps.description": "ਕਰਾਸ-ਪਲੇਟਫਾਰਮ ਮੋਬਾਈਲ ਅਨੁਭਵ ਬਣਾਓ।",
  "useCases.rapidPrototyping.title": "ਤੇਜ਼ ਪ੍ਰੋਟੋਟਾਈਪਿੰਗ",
  "useCases.rapidPrototyping.description": "ਮਿੰਟਾਂ ਵਿੱਚ ਵਿਚਾਰ ਤੋਂ ਪ੍ਰੋਟੋਟਾਈਪ",
  "useCases.rapidPrototyping.benefitsList": "ਤੇਜ਼ ਅਜ਼ਮਾਇਸ਼,ਰੀਅਲ-ਟਾਈਮ ਸਹਿਯੋਗ,ਇੱਕ-ਕਲਿੱਕ ਸ਼ੇਅਰਿੰਗ,ਤੁਰੰਤ ਫੀਡਬੈਕ",

  // pricing (35 keys)
  "pricing.badge": "ਸਧਾਰਨ, ਪਾਰਦਰਸ਼ੀ",
  "pricing.title": "ਕੀਮਤਾਂ",
  "pricing.subtitle": "ਮੁਫ਼ਤ ਸ਼ੁਰੂ ਕਰੋ। ਵਧਣ 'ਤੇ ਅੱਪਗ੍ਰੇਡ ਕਰੋ।",
  "pricing.monthly": "ਮਹੀਨਾਵਾਰ",
  "pricing.yearly": "ਸਾਲਾਨਾ",
  "pricing.free.name": "ਮੁਫ਼ਤ ਟੀਅਰ",
  "pricing.free.price": "$0",
  "pricing.free.period": "/ਮਹੀਨਾ",
  "pricing.free.description": "ਵਿਅਕਤੀਆਂ ਅਤੇ ਛੋਟੇ ਪ੍ਰੋਜੈਕਟਾਂ ਲਈ ਸੰਪੂਰਨ।",
  "pricing.free.features.feature1": "ਸ਼ੁਰੂ ਕਰਨ ਲਈ 2 ਮੁਫ਼ਤ ਜਨਰੇਸ਼ਨ",
  "pricing.free.features.feature2": "ਕੋਡ ਐਕਸਪੋਰਟ",
  "pricing.free.features.feature3": "ਕਮਿਊਨਿਟੀ ਸਪੋਰਟ",
  "pricing.free.features.feature4": "ਮੂਲ ਟੈਂਪਲੇਟ",
  "pricing.free.cta": "ਮੁਫ਼ਤ ਸ਼ੁਰੂ ਕਰੋ",
  "pricing.pro.name": "ਪ੍ਰੋ",
  "pricing.pro.price": "$29",
  "pricing.pro.period": "/ਮਹੀਨਾ",
  "pricing.pro.description": "ਪੇਸ਼ੇਵਰਾਂ ਅਤੇ ਵਧ ਰਹੀਆਂ ਟੀਮਾਂ ਲਈ।",
  "pricing.pro.features.feature1": "ਅਸੀਮਤ ਜਨਰੇਸ਼ਨ",
  "pricing.pro.features.feature2": "ਤਰਜੀਹੀ ਸਪੋਰਟ",
  "pricing.pro.features.feature3": "ਕਸਟਮ ਡੋਮੇਨ",
  "pricing.pro.features.feature4": "ਟੀਮ ਸਹਿਯੋਗ",
  "pricing.pro.features.feature5": "ਐਡਵਾਂਸਡ ਐਨਾਲਿਟਿਕਸ",
  "pricing.pro.cta": "ਪ੍ਰੋ ਨਾਲ ਸ਼ੁਰੂ ਕਰੋ",
  "pricing.enterprise.name": "ਐਂਟਰਪ੍ਰਾਈਜ਼",
  "pricing.enterprise.price": "ਕਸਟਮ",
  "pricing.enterprise.description": "ਵੱਡੀਆਂ ਸੰਸਥਾਵਾਂ ਲਈ ਤਿਆਰ।",
  "pricing.enterprise.features.feature1": "ਸਭ ਕੁਝ ਪ੍ਰੋ ਵਿੱਚ, ਅਤੇ",
  "pricing.enterprise.features.feature2": "SSO ਇੰਟੀਗ੍ਰੇਸ਼ਨ",
  "pricing.enterprise.features.feature3": "ਸਮਰਪਿਤ ਸਹਾਇਤਾ",
  "pricing.enterprise.features.feature4": "ਕਸਟਮ ਕੰਟ੍ਰੈਕਟ",
  "pricing.enterprise.features.feature5": "SLA ਗਾਰੰਟੀ",
  "pricing.enterprise.cta": "ਵਿਕਰੀ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
  "pricing.faq.title": "ਅਕਸਰ ਪੁੱਛੇ ਜਾਣ ਵਾਲੇ ਸਵਾਲ",
  "pricing.creditPacks.title": "ਕ੍ਰੈਡਿਟ ਖਰੀਦੋ",

  // enterprise (14 keys)
  "enterprise.badge": "ਐਂਟਰਪ੍ਰਾਈਜ਼",
  "enterprise.title": "ਸਕੇਲ 'ਤੇ ਬਣਾਓ",
  "enterprise.subtitle": "ਐਂਟਰਪ੍ਰਾਈਜ਼-ਗ੍ਰੇਡ ਸੁਰੱਖਿਆ, ਤਾਮੀਲ ਅਤੇ ਸਮਰਪਿਤ ਸਹਾਇਤਾ।",
  "enterprise.features.sso.title": "SSO ਅਤੇ SAML",
  "enterprise.features.sso.description": "ਆਪਣੇ ਆਈਡੈਂਟਿਟੀ ਪ੍ਰੋਵਾਈਡਰ ਨਾਲ ਜੁੜੋ",
  "enterprise.features.compliance.title": "ਤਾਮੀਲ",
  "enterprise.features.compliance.description": "SOC 2 Type II ਅਤੇ GDPR ਮੁਤਾਬਕ",
  "enterprise.features.support.title": "ਸਮਰਪਿਤ ਸਹਾਇਤਾ",
  "enterprise.features.support.description": "ਤਰਜੀਹੀ ਸਮਰਪਿਤ ਅਕਾਊਂਟ ਮੈਨੇਜਰ",
  "enterprise.features.deployment.title": "ਕਸਟਮ ਡਿਪਲੌਇਮੈਂਟ",
  "enterprise.features.deployment.description": "ਆਪਣੇ ਇਨਫ੍ਰਾ 'ਤੇ ਤੈਨਾਤ ਕਰੋ",
  "enterprise.contactSales": "ਵਿਕਰੀ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
  "enterprise.bookDemo": "ਡੈਮੋ ਬੁੱਕ ਕਰੋ",
  "enterprise.trustedBy": "ਭਰੋਸੇਯੋਗ ਕੰਪਨੀਆਂ"
};

for (const [key, val] of Object.entries(translations)) {
  setVal(pa, key, val);
  count++;
}

fs.writeFileSync('./src/translations/pa.json', JSON.stringify(pa, null, 2), 'utf8');
console.log(`Phase 3 complete: ${count} keys translated`);
