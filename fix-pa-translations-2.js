// Phase 2: Translate untranslated productPublish, productSecurity, solutions, pricing, enterprise keys
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
  // productIntegrations
  "productIntegrations.integrations.aws": "ਐਮਾਜ਼ੋਨ ਵੈੱਬ ਸਰਵਿਸਿਜ਼",

  // productPublish
  "productPublish.deployNow": "ਹੁਣੇ ਡਿਪਲੌਇ ਕਰੋ",
  "productPublish.startDeploying": "ਡਿਪਲੌਇ ਕਰਨਾ ਸ਼ੁਰੂ ਕਰੋ",
  "productPublish.features.ssl.title": "ਆਟੋਮੈਟਿਕ SSL",
  "productPublish.features.ssl.description": "ਹਰ ਡਿਪਲੌਇਮੈਂਟ ਨੂੰ ਮੁਫ਼ਤ SSL ਸਰਟੀਫਿਕੇਟ ਮਿਲਦਾ ਹੈ।",
  "productPublish.features.cdn.title": "ਗਲੋਬਲ CDN",
  "productPublish.features.cdn.description": "ਤੁਹਾਡੀ ਐਪ 34+ ਐਜ ਲੋਕੇਸ਼ਨਾਂ ਤੋਂ ਸਰਵ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।",

  // productSecurity
  "productSecurity.enterpriseSolutions": "ਐਂਟਰਪ੍ਰਾਈਜ਼ ਹੱਲ",
  "productSecurity.badges.soc2": "SOC 2 ਟਾਈਪ II",
  "productSecurity.badges.gdpr": "GDPR ਅਨੁਕੂਲ",
  "productSecurity.badges.iso": "ISO 27001",
  "productSecurity.badges.hipaa": "HIPAA ਤਿਆਰ",
  "productSecurity.features.sso.item1": "SAML 2.0 ਸਹਾਇਤਾ",
  "productSecurity.features.sso.item2": "ਜਸਟ-ਇਨ-ਟਾਈਮ ਪ੍ਰੋਵਿਜ਼ਨਿੰਗ",
  "productSecurity.features.sso.item3": "ਮਲਟੀ-ਫੈਕਟਰ ਪ੍ਰਮਾਣੀਕਰਨ",
  "productSecurity.features.scanning.item1": "ਨਿਰਭਰਤਾ ਕਮਜ਼ੋਰੀ ਸਕੈਨਿੰਗ",
  "productSecurity.features.scanning.item2": "ਗੁਪਤ ਖੋਜ",
  "productSecurity.features.scanning.item3": "OWASP ਅਨੁਕੂਲਤਾ ਜਾਂਚ",
  "productSecurity.features.encryption.item1": "ਆਰਾਮ ਵਿੱਚ AES-256 ਐਨਕ੍ਰਿਪਸ਼ਨ",
  "productSecurity.features.encryption.item2": "ਟ੍ਰਾਂਜ਼ਿਟ ਵਿੱਚ TLS 1.3",
  "productSecurity.features.encryption.item3": "ਗਾਹਕ-ਪ੍ਰਬੰਧਿਤ ਕੁੰਜੀਆਂ ਉਪਲਬਧ",
  "productSecurity.features.auditLogs.title": "ਆਡਿਟ ਲੌਗ",
  "productSecurity.features.auditLogs.description": "ਵਿਸਤ੍ਰਿਤ ਆਡਿਟ ਲੌਗ ਨਾਲ ਤੁਹਾਡੇ ਖਾਤੇ 'ਤੇ ਕੀਤੀਆਂ ਸਾਰੀਆਂ ਕਾਰਵਾਈਆਂ ਦੀ ਪੂਰੀ ਦਿੱਖ।",
  "productSecurity.features.auditLogs.item1": "90-ਦਿਨ ਲੌਗ ਰੱਖਣ",
  "productSecurity.features.auditLogs.item2": "SIEM ਵਿੱਚ ਐਕਸਪੋਰਟ ਕਰੋ",
  "productSecurity.features.auditLogs.item3": "ਰੀਅਲ-ਟਾਈਮ ਅਲਰਟ",

  // solutions
  "solutions.subtitle": "ਹਰ ਉਦਯੋਗ ਅਤੇ ਵਰਤੋਂ ਦੇ ਮਾਮਲੇ ਲਈ ਅਨੁਕੂਲਿਤ ਹੱਲ",
  "solutions.startup.title": "ਸਟਾਰਟਅੱਪ ਲਈ",
  "solutions.startup.description": "ਤੇਜ਼ੀ ਨਾਲ ਅੱਗੇ ਵਧੋ ਅਤੇ ਆਪਣਾ MVP ਦਿਨਾਂ ਵਿੱਚ ਬਣਾਓ, ਮਹੀਨਿਆਂ ਵਿੱਚ ਨਹੀਂ।",
  "solutions.enterprise.title": "ਐਂਟਰਪ੍ਰਾਈਜ਼ ਲਈ",
  "solutions.agencies.title": "ਏਜੰਸੀਆਂ ਲਈ",
  "solutions.agencies.description": "ਵ੍ਹਾਈਟ-ਲੇਬਲ ਹੱਲਾਂ ਨਾਲ ਕਲਾਇੰਟ ਪ੍ਰੋਜੈਕਟ ਤੇਜ਼ੀ ਨਾਲ ਡਿਲੀਵਰ ਕਰੋ।",

  // pricing
  "pricing.creditInfo": "1 ਕ੍ਰੈਡਿਟ = 1 ਜਨਰੇਸ਼ਨ",
  "pricing.freeTier.title": "ਮੁਫ਼ਤ ਪੱਧਰ",
  "pricing.freeTier.subtitle": "ਕ੍ਰੈਡਿਟ ਕਾਰਡ ਤੋਂ ਬਿਨਾਂ ਸ਼ੁਰੂ ਕਰੋ",
  "pricing.buyCredits": "ਕ੍ਰੈਡਿਟ ਖਰੀਦੋ",
  "pricing.mostPopular": "ਸਭ ਤੋਂ ਪ੍ਰਸਿੱਧ",
  "pricing.credits": "ਕ੍ਰੈਡਿਟ",
  "pricing.perCredit": "ਪ੍ਰਤੀ ਕ੍ਰੈਡਿਟ",
  "pricing.buyNow": "ਹੁਣੇ ਖਰੀਦੋ",
  "pricing.faq.subtitle": "ਸਾਡੀ ਕੀਮਤ ਬਾਰੇ ਤੁਹਾਨੂੰ ਲੋੜੀਂਦੀ ਹਰ ਚੀਜ਼",
  "pricing.faq.q1": "ਮੈਂ ਕ੍ਰੈਡਿਟ ਨਾਲ ਕੀ ਕਰ ਸਕਦਾ ਹਾਂ?",
  "pricing.faq.a1": "ਹਰ ਕ੍ਰੈਡਿਟ ਤੁਹਾਨੂੰ ਇੱਕ ਪੂਰੀ ਐਪ ਜਨਰੇਟ ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦਾ ਹੈ। ਤੁਸੀਂ ਕ੍ਰੈਡਿਟ ਦੀ ਵਰਤੋਂ ਵੈੱਬ ਐਪਸ, ਮੋਬਾਈਲ ਐਪਸ, ਲੈਂਡਿੰਗ ਪੇਜ, ਅਤੇ ਹੋਰ ਬਣਾਉਣ ਲਈ ਕਰ ਸਕਦੇ ਹੋ।",
  "pricing.faq.q2": "ਕੀ ਕ੍ਰੈਡਿਟ ਦੀ ਮਿਆਦ ਖਤਮ ਹੁੰਦੀ ਹੈ?",
  "pricing.faq.a2": "ਨਹੀਂ! ਤੁਹਾਡੇ ਖਰੀਦੇ ਕ੍ਰੈਡਿਟ ਕਦੇ ਖਤਮ ਨਹੀਂ ਹੁੰਦੇ। ਜਦੋਂ ਚਾਹੋ ਵਰਤੋ, ਆਪਣੀ ਰਫ਼ਤਾਰ ਨਾਲ।",
  "pricing.faq.q3": "ਕੀ ਮੈਨੂੰ ਰਿਫੰਡ ਮਿਲ ਸਕਦਾ ਹੈ?",
  "pricing.faq.a3": "ਹਾਂ, ਅਸੀਂ ਅਣਵਰਤੇ ਕ੍ਰੈਡਿਟ ਲਈ 30-ਦਿਨ ਦੀ ਮਨੀ-ਬੈਕ ਗਾਰੰਟੀ ਦਿੰਦੇ ਹਾਂ। ਸਹਾਇਤਾ ਲਈ ਸਾਡੀ ਸਹਾਇਤਾ ਟੀਮ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।",
  "pricing.faq.q4": "ਤੁਸੀਂ ਕਿਹੜੇ ਭੁਗਤਾਨ ਤਰੀਕੇ ਸਵੀਕਾਰ ਕਰਦੇ ਹੋ?",
  "pricing.faq.q5": "ਮੁਫ਼ਤ ਪੱਧਰ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ?",
  "pricing.readyToStart": "ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਤਿਆਰ ਹੋ?",
  "pricing.startWith": "2 ਮੁਫ਼ਤ ਜਨਰੇਸ਼ਨਾਂ ਨਾਲ ਬਣਾਉਣਾ ਸ਼ੁਰੂ ਕਰੋ।",
  "pricing.getStartedFree": "ਮੁਫ਼ਤ ਸ਼ੁਰੂ ਕਰੋ",

  // enterprise
  "enterprise.features.security.title": "ਐਂਟਰਪ੍ਰਾਈਜ਼ ਸੁਰੱਖਿਆ",
  "enterprise.features.security.description": "ਐਡਵਾਂਸਡ ਐਨਕ੍ਰਿਪਸ਼ਨ ਅਤੇ ਪਹੁੰਚ ਕੰਟਰੋਲ ਨਾਲ SOC 2 ਟਾਈਪ II ਪ੍ਰਮਾਣਿਤ।",
  "enterprise.features.sla.title": "SLA ਗਾਰੰਟੀ",
  "enterprise.features.sla.description": "ਐਂਟਰਪ੍ਰਾਈਜ਼-ਗ੍ਰੇਡ ਢਾਂਚੇ ਨਾਲ 99.99% ਅੱਪਟਾਈਮ SLA।",
  "enterprise.features.onpremise.title": "ਆਨ-ਪ੍ਰੈਮਿਸ",
  "enterprise.features.onpremise.description": "ਆਪਣੇ ਖੁਦ ਦੇ ਕਲਾਊਡ ਜਾਂ ਆਨ-ਪ੍ਰੈਮਿਸ ਵਾਤਾਵਰਨ ਵਿੱਚ ਡਿਪਲੌਇ ਕਰੋ।",
  "enterprise.cta": "ਵਿਕਰੀ ਨਾਲ ਗੱਲ ਕਰੋ",

  // enterprisePage
  "enterprisePage.titleHighlight": "ਐਂਟਰਪ੍ਰਾਈਜ਼-ਗ੍ਰੇਡ",
  "enterprisePage.titleEnd": "ਫੀਚਰਸ",
  "enterprisePage.viewPricing": "ਕੀਮਤ ਵੇਖੋ",
  "enterprisePage.trustedBy": "ਮੋਹਰੀ ਕੰਪਨੀਆਂ ਦੁਆਰਾ ਭਰੋਸੇਯੋਗ",
  "enterprisePage.contactTitle": "ਸੰਪਰਕ ਕਰੋ",
  "enterprisePage.contactSubtitle": "ਸਾਨੂੰ ਆਪਣੀ ਟੀਮ ਬਾਰੇ ਦੱਸੋ ਅਤੇ ਅਸੀਂ 24 ਘੰਟਿਆਂ ਦੇ ਅੰਦਰ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰਾਂਗੇ।",
  "enterprisePage.thankYou": "ਧੰਨਵਾਦ!",
  "enterprisePage.thankYouMessage": "ਸਾਨੂੰ ਤੁਹਾਡਾ ਸੁਨੇਹਾ ਮਿਲ ਗਿਆ ਹੈ ਅਤੇ ਅਸੀਂ ਜਲਦੀ ਸੰਪਰਕ ਕਰਾਂਗੇ।",
  "enterprisePage.features.security.title": "ਐਂਟਰਪ੍ਰਾਈਜ਼-ਗ੍ਰੇਡ ਸੁਰੱਖਿਆ",
  "enterprisePage.features.security.description": "ਤੁਹਾਡੇ ਡਾਟਾ ਨੂੰ ਸੁਰੱਖਿਅਤ ਰੱਖਣ ਲਈ SSO, SAML, ਅਤੇ ਐਡਵਾਂਸਡ ਪਹੁੰਚ ਕੰਟਰੋਲ ਨਾਲ SOC 2 ਟਾਈਪ II ਪ੍ਰਮਾਣਿਤ।",
  "enterprisePage.features.collaboration.title": "ਟੀਮ ਸਹਿਯੋਗ",
  "enterprisePage.features.collaboration.description": "ਅਸੀਮਤ ਟੀਮ ਮੈਂਬਰ, ਸਾਂਝੇ ਵਰਕਸਪੇਸ, ਅਤੇ ਰੀਅਲ-ਟਾਈਮ ਸਹਿਯੋਗ ਫੀਚਰਸ।",
  "enterprisePage.features.performance.title": "ਤਰਜੀਹੀ ਪ੍ਰਦਰਸ਼ਨ",
  "enterprisePage.features.performance.description": "ਗਾਰੰਟੀਸ਼ੁਦਾ ਅੱਪਟਾਈਮ SLA ਅਤੇ ਤੇਜ਼ ਬਿਲਡ ਸਮੇਂ ਨਾਲ ਸਮਰਪਿਤ ਢਾਂਚਾ।",
  "enterprisePage.features.support.title": "ਸਮਰਪਿਤ ਸਹਾਇਤਾ",
  "enterprisePage.features.support.description": "ਸਮਰਪਿਤ ਗਾਹਕ ਸਫਲਤਾ ਮੈਨੇਜਰ ਅਤੇ ਔਨਬੋਰਡਿੰਗ ਨਾਲ 24/7 ਤਰਜੀਹੀ ਸਹਾਇਤਾ।",
  "enterprisePage.features.integrations.title": "ਕਸਟਮ ਇੰਟੀਗ੍ਰੇਸ਼ਨਾਂ",
  "enterprisePage.features.integrations.description": "API ਪਹੁੰਚ, ਕਸਟਮ ਵੈੱਬਹੁੱਕ, ਅਤੇ ਤੁਹਾਡੇ ਮੌਜੂਦਾ ਟੂਲ ਅਤੇ ਵਰਕਫਲੋ ਨਾਲ ਇੰਟੀਗ੍ਰੇਸ਼ਨਾਂ।",
  "enterprisePage.features.analytics.title": "ਐਡਵਾਂਸਡ ਵਿਸ਼ਲੇਸ਼ਣ",
  "enterprisePage.features.analytics.description": "ਤੁਹਾਡੀ ਸੰਸਥਾ ਲਈ ਵਿਸਤ੍ਰਿਤ ਵਰਤੋਂ ਵਿਸ਼ਲੇਸ਼ਣ, ਆਡਿਟ ਲੌਗ, ਅਤੇ ਅਨੁਕੂਲਤਾ ਰਿਪੋਰਟਿੰਗ।",
  "enterprisePage.testimonials.testimonial1.author": "ਸਾਰਾ ਚੇਨ",
  "enterprisePage.testimonials.testimonial1.role": "ਇੰਜੀਨੀਅਰਿੰਗ ਦੀ VP",
  "enterprisePage.testimonials.testimonial1.company": "TechCorp",
  "enterprisePage.testimonials.testimonial2.quote": "ਐਂਟਰਪ੍ਰਾਈਜ਼ ਫੀਚਰਸ ਸਾਨੂੰ ਲੋੜੀਂਦੀ ਸੁਰੱਖਿਆ ਅਤੇ ਕੰਟਰੋਲ ਦਿੰਦੇ ਹਨ ਜਦੋਂ ਕਿ ਡਿਵੈਲਪਰ ਅਨੁਭਵ ਨੂੰ ਸਰਲ ਰੱਖਦੇ ਹਨ।",
  "enterprisePage.testimonials.testimonial2.author": "ਮਾਈਕਲ ਟੋਰੇਸ",
  "enterprisePage.testimonials.testimonial2.company": "FinanceApp",
  "enterprisePage.testimonials.testimonial3.quote": "ਸਾਡੀ ਡਿਜ਼ਾਈਨ ਟੀਮ ਹੁਣ ਇੰਜੀਨੀਅਰਿੰਗ ਸਰੋਤਾਂ ਦੀ ਉਡੀਕ ਕੀਤੇ ਬਿਨਾਂ ਪ੍ਰੋਡਕਸ਼ਨ-ਰੈਡੀ ਐਪਸ ਦਾ ਪ੍ਰੋਟੋਟਾਈਪ ਅਤੇ ਸ਼ਿਪ ਕਰ ਸਕਦੀ ਹੈ।",
  "enterprisePage.testimonials.testimonial3.author": "ਐਮਿਲੀ ਵਾਟਸਨ",
  "enterprisePage.testimonials.testimonial3.role": "ਡਿਜ਼ਾਈਨ ਦੀ ਮੁਖੀ",
  "enterprisePage.testimonials.testimonial3.company": "DesignStudio",
  "enterprisePage.testimonials.testimonial4.author": "ਜੇਮਜ਼ ਕਿਮ",
  "enterprisePage.testimonials.testimonial4.role": "ਓਪਰੇਸ਼ਨ ਡਾਇਰੈਕਟਰ",
  "enterprisePage.testimonials.testimonial4.company": "CloudScale",
  "enterprisePage.testimonials.testimonial5.quote": "SSO ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਅਤੇ ਆਡਿਟ ਲੌਗ ਬਿਲਕੁਲ ਉਹੀ ਸਨ ਜੋ ਸਾਡੀ ਅਨੁਕੂਲਤਾ ਟੀਮ ਨੂੰ ਚਾਹੀਦੇ ਸਨ। ਔਨਬੋਰਡਿੰਗ ਸਹਿਜ ਸੀ।",
  "enterprisePage.testimonials.testimonial5.author": "ਅਨਿਕਾ ਲਾਰਸਨ",
  "enterprisePage.testimonials.testimonial5.role": "ਮੁੱਖ ਸੁਰੱਖਿਆ ਅਧਿਕਾਰੀ",
  "enterprisePage.testimonials.testimonial5.company": "SecureBank",
  "enterprisePage.testimonials.testimonial6.author": "ਰਾਇਨ ਪਾਰਕ",
  "enterprisePage.testimonials.testimonial6.role": "ਇੰਜੀਨੀਅਰਿੰਗ ਮੈਨੇਜਰ",
  "enterprisePage.testimonials.testimonial6.company": "DataFlow",
  "enterprisePage.form.fullName": "ਪੂਰਾ ਨਾਮ",
  "enterprisePage.form.namePlaceholder": "ਜੌਨ ਸਮਿਥ",
  "enterprisePage.form.workEmail": "ਕੰਮ ਦੀ ਈਮੇਲ",
  "enterprisePage.form.companyPlaceholder": "ਐਕਮੀ ਇੰਕ.",
  "enterprisePage.form.selectTeamSize": "ਟੀਮ ਦਾ ਆਕਾਰ ਚੁਣੋ",
  "enterprisePage.form.teamSize1": "1-10 ਕਰਮਚਾਰੀ",
  "enterprisePage.form.teamSize2": "11-50 ਕਰਮਚਾਰੀ",
  "enterprisePage.form.teamSize3": "51-200 ਕਰਮਚਾਰੀ",
  "enterprisePage.form.teamSize4": "201-500 ਕਰਮਚਾਰੀ",
  "enterprisePage.form.teamSize5": "500+ ਕਰਮਚਾਰੀ",
  "enterprisePage.form.messagePlaceholder": "ਸਾਨੂੰ ਆਪਣੇ ਵਰਤੋਂ ਦੇ ਮਾਮਲੇ ਅਤੇ ਲੋੜਾਂ ਬਾਰੇ ਦੱਸੋ...",
  "enterprisePage.form.sending": "ਭੇਜਿਆ ਜਾ ਰਿਹਾ ਹੈ...",
  "enterprisePage.trustedByText": "ਦੁਨੀਆ ਭਰ ਦੀਆਂ ਮੋਹਰੀ ਟੀਮਾਂ ਅਤੇ ਕੰਪਨੀਆਂ ਦੁਆਰਾ ਭਰੋਸੇਯੋਗ",

  // errors
  "errors.404.description": "ਜੋ ਪੰਨਾ ਤੁਸੀਂ ਲੱਭ ਰਹੇ ਹੋ ਉਹ ਮੌਜੂਦ ਨਹੀਂ ਹੈ।",
  "errors.404.backHome": "ਘਰ ਵਾਪਸ ਜਾਓ",
  "errors.500.title": "ਕੁਝ ਗਲਤ ਹੋ ਗਿਆ",
  "errors.500.description": "ਅਸੀਂ ਇਸਨੂੰ ਠੀਕ ਕਰਨ 'ਤੇ ਕੰਮ ਕਰ ਰਹੇ ਹਾਂ। ਕਿਰਪਾ ਕਰਕੇ ਬਾਅਦ ਵਿੱਚ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
  "errors.500.retry": "ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ",

  // docs
  "docs.examples": "ਉਦਾਹਰਨਾਂ",

  // blog
  "blog.readTime": "ਮਿੰਟ ਪੜ੍ਹੋ",
  "blog.categories.product": "ਉਤਪਾਦ",
  "blog.categories.engineering": "ਇੰਜੀਨੀਅਰਿੰਗ",
  "blog.categories.tutorials": "ਟਿਊਟੋਰੀਅਲ",

  // careers
  "careers.benefits.remoteDesc": "ਦੁਨੀਆ ਵਿੱਚ ਕਿਤੋਂ ਵੀ ਕੰਮ ਕਰੋ",
  "careers.benefits.equityDesc": "ਸਾਡੀ ਸਫਲਤਾ ਵਿੱਚ ਹਿੱਸਾ ਲਓ",
  "careers.benefits.healthDesc": "ਤੁਹਾਡੇ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਲਈ ਵਿਆਪਕ ਕਵਰੇਜ",
  "careers.benefits.learningDesc": "ਆਪਣੇ ਵਿਕਾਸ ਵਿੱਚ ਨਿਵੇਸ਼ ਕਰੋ",
  "careers.applyNow": "ਹੁਣੇ ਅਰਜ਼ੀ ਦਿਓ",

  // community
  "community.showcase": "ਪ੍ਰੋਜੈਕਟ ਸ਼ੋਅਕੇਸ",
  "community.events": "ਆਉਣ ਵਾਲੇ ਇਵੈਂਟ",

  // support
  "support.helpCenter": "ਮਦਦ ਕੇਂਦਰ",
  "support.status": "ਸਿਸਟਮ ਸਥਿਤੀ",

  // status
  "status.outage": "ਸੇਵਾ ਬੰਦ",
  "status.maintenance": "ਮੇਨਟੇਨੈਂਸ ਅਧੀਨ"
};

var count = 0;
for (var key in translations) {
  setValue(pa, key, translations[key]);
  count++;
}

fs.writeFileSync('./src/translations/pa.json', JSON.stringify(pa, null, 2), 'utf8');
console.log('Phase 2 complete: Updated ' + count + ' translations');
