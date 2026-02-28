// Phase 1: Add all MISSING keys to pa.json (keys that exist in EN but not in PA)
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
  // auth.login
  "auth.login.title": "ਵਾਪਸ ਸੁਆਗਤ ਹੈ",
  "auth.login.subtitle": "ਆਪਣੇ AppNode ਖਾਤੇ ਵਿੱਚ ਸਾਈਨ ਇਨ ਕਰੋ",
  "auth.login.email": "ਈਮੇਲ ਪਤਾ",
  "auth.login.password": "ਪਾਸਵਰਡ",
  "auth.login.forgotPassword": "ਪਾਸਵਰਡ ਭੁੱਲ ਗਏ?",
  "auth.login.noAccount": "ਖਾਤਾ ਨਹੀਂ ਹੈ?",
  "auth.login.signUpLink": "ਸਾਈਨ ਅੱਪ ਕਰੋ",
  "auth.login.invalidCredentials": "ਗਲਤ ਈਮੇਲ ਜਾਂ ਪਾਸਵਰਡ",
  "auth.login.loggingIn": "ਲੌਗ ਇਨ ਹੋ ਰਿਹਾ ਹੈ...",
  "auth.login.orContinueWith": "ਜਾਂ ਇਸ ਨਾਲ ਜਾਰੀ ਰੱਖੋ",
  "auth.login.decorativeTitle": "ਕੁਝ ਵੀ ਬਣਾਓ।",
  "auth.login.decorativeSubtitle": "ਪਹਿਲਾਂ ਨਾਲੋਂ ਤੇਜ਼।",
  "auth.login.decorativeDescription": "AI ਨਾਲ ਐਪਸ ਬਣਾਉਣ ਦਾ ਦੁਨੀਆ ਦਾ ਸਭ ਤੋਂ ਸਰਲ ਤਰੀਕਾ।",

  // auth.signup
  "auth.signup.title": "ਆਪਣਾ ਖਾਤਾ ਬਣਾਓ",
  "auth.signup.name": "ਪੂਰਾ ਨਾਮ",
  "auth.signup.email": "ਈਮੇਲ ਪਤਾ",
  "auth.signup.password": "ਪਾਸਵਰਡ",
  "auth.signup.confirmPassword": "ਪਾਸਵਰਡ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
  "auth.signup.hasAccount": "ਪਹਿਲਾਂ ਹੀ ਖਾਤਾ ਹੈ?",
  "auth.signup.loginLink": "ਲੌਗ ਇਨ ਕਰੋ",
  "auth.signup.terms": "ਸਾਈਨ ਅੱਪ ਕਰਕੇ, ਤੁਸੀਂ ਸਾਡੀਆਂ ਸੇਵਾ ਦੀਆਂ ਸ਼ਰਤਾਂ ਅਤੇ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਨਾਲ ਸਹਿਮਤ ਹੁੰਦੇ ਹੋ।",
  "auth.signup.decorativeTitle": "ਅੱਜ ਹੀ ਬਣਾਉਣਾ ਸ਼ੁਰੂ ਕਰੋ",
  "auth.signup.decorativeDescription": "ਆਪਣਾ ਮੁਫ਼ਤ ਖਾਤਾ ਬਣਾਓ ਅਤੇ ਮਿੰਟਾਂ ਵਿੱਚ AI ਨਾਲ ਸ਼ਾਨਦਾਰ ਐਪਲੀਕੇਸ਼ਨਾਂ ਬਣਾਉਣਾ ਸ਼ੁਰੂ ਕਰੋ।",
  "auth.signup.step2Title": "ਆਪਣੀ ਪ੍ਰੋਫਾਈਲ ਨੂੰ ਨਿੱਜੀ ਬਣਾਓ",
  "auth.signup.step2Subtitle": "ਇੱਕ ਅਵਤਾਰ ਰੰਗ ਚੁਣੋ ਜੋ ਤੁਹਾਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ",
  "auth.signup.step3Title": "ਸਾਨੂੰ ਆਪਣੇ ਬਾਰੇ ਦੱਸੋ",
  "auth.signup.step3Subtitle": "ਇਹ ਸਾਨੂੰ ਤੁਹਾਡੇ ਅਨੁਭਵ ਨੂੰ ਨਿੱਜੀ ਬਣਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ",
  "auth.signup.roleQuestion": "ਤੁਹਾਡੀ ਭੂਮਿਕਾ ਨੂੰ ਸਭ ਤੋਂ ਵਧੀਆ ਕੀ ਦੱਸਦਾ ਹੈ?",
  "auth.signup.company": "ਕੰਪਨੀ ਦਾ ਨਾਮ",
  "auth.signup.creatingAccount": "ਖਾਤਾ ਬਣਾਇਆ ਜਾ ਰਿਹਾ ਹੈ...",
  "auth.signup.createAccount": "ਖਾਤਾ ਬਣਾਓ",
  "auth.features.aiPowered": "AI-ਸੰਚਾਲਿਤ ਡਿਵੈਲਪਮੈਂਟ",
  "auth.features.shipFast": "ਮਿੰਟਾਂ ਵਿੱਚ ਸ਼ਿਪ ਕਰੋ, ਮਹੀਨਿਆਂ ਵਿੱਚ ਨਹੀਂ",
  "auth.features.freeGenerations": "ਸ਼ੁਰੂ ਕਰਨ ਲਈ 2 ਮੁਫ਼ਤ ਜਨਰੇਸ਼ਨਾਂ",
  "auth.features.noCreditCard": "ਕ੍ਰੈਡਿਟ ਕਾਰਡ ਦੀ ਲੋੜ ਨਹੀਂ",
  "auth.features.fullAccess": "ਸਾਰੇ ਟੈਂਪਲੇਟਾਂ ਤੱਕ ਪੂਰੀ ਪਹੁੰਚ",

  // legal
  "legal.terms.title": "ਸੇਵਾ ਦੀਆਂ ਸ਼ਰਤਾਂ",
  "legal.terms.lastUpdated": "ਆਖਰੀ ਅੱਪਡੇਟ",
  "legal.privacy.title": "ਗੋਪਨੀਯਤਾ ਨੀਤੀ",
  "legal.privacy.lastUpdated": "ਆਖਰੀ ਅੱਪਡੇਟ",
  "legal.cookies.title": "ਕੂਕੀ ਨੀਤੀ",
  "legal.cookies.lastUpdated": "ਆਖਰੀ ਅੱਪਡੇਟ",

  // signupPage
  "signupPage.passwordsDoNotMatch": "ਪਾਸਵਰਡ ਮੇਲ ਨਹੀਂ ਖਾਂਦੇ",
  "signupPage.passwordTooShort": "ਪਾਸਵਰਡ ਘੱਟੋ-ਘੱਟ 6 ਅੱਖਰਾਂ ਦਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ",
  "signupPage.emailExists": "ਇਸ ਈਮੇਲ ਨਾਲ ਪਹਿਲਾਂ ਹੀ ਖਾਤਾ ਮੌਜੂਦ ਹੈ",
  "signupPage.selectAvatar": "ਕਿਰਪਾ ਕਰਕੇ ਅਵਤਾਰ ਰੰਗ ਚੁਣੋ",
  "signupPage.selectRole": "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੀ ਭੂਮਿਕਾ ਚੁਣੋ",

  // supportPage (missing keys)
  "supportPage.faq": "ਅਕਸਰ ਪੁੱਛੇ ਜਾਣ ਵਾਲੇ ਸਵਾਲ",
  "supportPage.categories.gettingStarted.name": "ਸ਼ੁਰੂਆਤ ਕਰੋ",
  "supportPage.categories.gettingStarted.description": "AppNode ਵਿੱਚ ਨਵੇਂ ਹੋ? ਇੱਥੋਂ ਸ਼ੁਰੂ ਕਰੋ",
  "supportPage.faqAnswers.thanks": "ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ! ਕੀ ਮੈਂ ਤੁਹਾਡੀ ਕਿਸੇ ਹੋਰ ਚੀਜ਼ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ? 😊",
  "supportPage.faqAnswers.goodbye": "ਸਾਡੇ ਨਾਲ ਗੱਲ ਕਰਨ ਲਈ ਧੰਨਵਾਦ! ਜੇ ਭਵਿੱਖ ਵਿੱਚ ਤੁਹਾਡੇ ਕੋਈ ਹੋਰ ਸਵਾਲ ਹਨ, ਤਾਂ ਸੰਪਰਕ ਕਰਨ ਤੋਂ ਨਾ ਝਿਜਕੋ। ਸ਼ੁਭ ਦਿਨ! 👋",
  "supportPage.quickActionMessages.gettingStartedMsg": "ਮੈਂ AppNode ਨਾਲ ਕਿਵੇਂ ਸ਼ੁਰੂ ਕਰਾਂ?",
  "supportPage.quickActionMessages.pricingMsg": "ਕੀਮਤ ਦੇ ਕੀ ਵਿਕਲਪ ਹਨ?",
  "supportPage.quickActionMessages.exportCodeMsg": "ਕੀ ਮੈਂ ਆਪਣਾ ਕੋਡ ਐਕਸਪੋਰਟ ਕਰ ਸਕਦਾ ਹਾਂ?",
  "supportPage.quickActionMessages.liveAgentMsg": "ਮੈਂ ਇੱਕ ਲਾਈਵ ਏਜੰਟ ਨਾਲ ਗੱਲ ਕਰਨਾ ਚਾਹੁੰਦਾ ਹਾਂ",
  "supportPage.chatUi.noDescription": "ਕੋਈ ਵਾਧੂ ਵੇਰਵਾ ਨਹੀਂ ਦਿੱਤਾ ਗਿਆ",
  "supportPage.chatUi.confirmationMsg": "✅ ਤੁਹਾਡੀ ਗੱਲਬਾਤ ਸਾਡੀ ਸਹਾਇਤਾ ਟੀਮ ਨੂੰ contact@appnode.ai 'ਤੇ ਭੇਜ ਦਿੱਤੀ ਗਈ ਹੈ। ਅਸੀਂ ਜਲਦੀ ਤੋਂ ਜਲਦੀ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰਾਂਗੇ!\n\nਆਮ ਜਵਾਬ ਸਮਾਂ: 24 ਘੰਟਿਆਂ ਦੇ ਅੰਦਰ (ਕਾਰੋਬਾਰੀ ਸਮੇਂ ਦੌਰਾਨ ਅਕਸਰ ਬਹੁਤ ਤੇਜ਼)।",
  "supportPage.chatUi.namePlaceholder": "ਤੁਹਾਡਾ ਨਾਮ",
  "supportPage.chatUi.emailPlaceholder": "ਤੁਹਾਡਾ ਈਮੇਲ ਪਤਾ",
  "supportPage.chatUi.problemPlaceholder": "ਆਪਣੀ ਸਮੱਸਿਆ ਜਾਂ ਸਵਾਲ ਦੱਸੋ...",
  "supportPage.chatUi.chatPlaceholder": "ਆਪਣਾ ਸੁਨੇਹਾ ਟਾਈਪ ਕਰੋ...",
  "supportPage.chatUi.sendToSupportTeam": "ਸਹਾਇਤਾ ਟੀਮ ਨੂੰ ਭੇਜੋ",
  "supportPage.chatUi.conversationWillBeSent": "ਤੁਹਾਡੀ ਗੱਲਬਾਤ contact@appnode.ai ਨੂੰ ਭੇਜੀ ਜਾਵੇਗੀ",
  "supportPage.chatUi.chatTitle": "AppNode ਸਹਾਇਤਾ",
  "supportPage.chatUi.online": "ਆਨਲਾਈਨ",
  "supportPage.chatUi.liveAgentConnected": "ਲਾਈਵ ਏਜੰਟ ਜੁੜਿਆ",
  "supportPage.chatUi.quickQuestions": "ਤੁਰੰਤ ਸਵਾਲ:",
  "supportPage.searchNoResults": "ਲਈ ਕੋਈ ਨਤੀਜੇ ਨਹੀਂ ਮਿਲੇ",
  "supportPage.searchCategories": "ਸ਼੍ਰੇਣੀਆਂ",
  "supportPage.searchViews": "ਦ੍ਰਿਸ਼",
  "supportPage.searchHelpTopics": "ਮਦਦ ਵਿਸ਼ੇ",

  // docsSearchModal
  "docsSearchModal.noResults": "ਕੋਈ ਨਤੀਜੇ ਨਹੀਂ ਮਿਲੇ",
  "docsSearchModal.tryAgain": "ਕੁਝ ਹੋਰ ਖੋਜਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰੋ",
  "docsSearchModal.navigate": "ਨੈਵੀਗੇਟ ਕਰੋ",
  "docsSearchModal.select": "ਚੁਣੋ",
  "docsSearchModal.close": "ਬੰਦ ਕਰੋ",
  "docsSearchModal.searchPlaceholder": "ਦਸਤਾਵੇਜ਼ ਖੋਜੋ...",
  "docsSearchModal.sections.gettingStarted": "ਸ਼ੁਰੂਆਤ ਕਰੋ",
  "docsSearchModal.sections.trustSafety": "ਭਰੋਸਾ ਅਤੇ ਸੁਰੱਖਿਆ",
  "docsSearchModal.sections.legal": "ਕਾਨੂੰਨੀ",
  "docsSearchModal.sections.security": "ਸੁਰੱਖਿਆ",
  "docsSearchModal.sections.tutorials": "ਟਿਊਟੋਰੀਅਲ",
  "docsSearchModal.sections.teamsEnterprise": "ਟੀਮਾਂ ਅਤੇ ਐਂਟਰਪ੍ਰਾਈਜ਼",
  "docsSearchModal.sections.changelog": "ਬਦਲਾਅ ਲੌਗ",
  "docsSearchModal.items.introduction": "ਜਾਣ-ਪਛਾਣ",
  "docsSearchModal.items.quickstartGuides": "ਤੁਰੰਤ ਸ਼ੁਰੂਆਤ ਗਾਈਡ",
  "docsSearchModal.items.createWithAi": "AI ਨਾਲ ਬਣਾਓ",
  "docsSearchModal.items.buildFromScratch": "ਸ਼ੁਰੂ ਤੋਂ ਬਣਾਓ",
  "docsSearchModal.items.importFromGithub": "GitHub ਤੋਂ ਇੰਪੋਰਟ ਕਰੋ",
  "docsSearchModal.items.contentPolicy": "ਸਮੱਗਰੀ ਨੀਤੀ",
  "docsSearchModal.items.communityGuidelines": "ਭਾਈਚਾਰਾ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼",
  "docsSearchModal.items.termsOfService": "ਸੇਵਾ ਦੀਆਂ ਸ਼ਰਤਾਂ",
  "docsSearchModal.items.privacyPolicy": "ਗੋਪਨੀਯਤਾ ਨੀਤੀ",
  "docsSearchModal.items.cookiePolicy": "ਕੂਕੀ ਨੀਤੀ",
  "docsSearchModal.items.securityOverview": "ਸੁਰੱਖਿਆ ਸੰਖੇਪ",
  "docsSearchModal.items.dataProtection": "ਡਾਟਾ ਸੁਰੱਖਿਆ",
  "docsSearchModal.items.vulnerabilityDisclosure": "ਕਮਜ਼ੋਰੀ ਖੁਲਾਸਾ",
  "docsSearchModal.items.buildingFirstApp": "ਆਪਣੀ ਪਹਿਲੀ ਐਪ ਬਣਾਉਣਾ",
  "docsSearchModal.items.workingWithApis": "APIs ਨਾਲ ਕੰਮ ਕਰਨਾ",
  "docsSearchModal.items.databaseIntegration": "ਡੇਟਾਬੇਸ ਇੰਟੀਗ੍ਰੇਸ਼ਨ",
  "docsSearchModal.items.authentication": "ਪ੍ਰਮਾਣੀਕਰਨ",
  "docsSearchModal.items.teamManagement": "ਟੀਮ ਪ੍ਰਬੰਧਨ",
  "docsSearchModal.items.ssoSetup": "SSO ਸੈੱਟਅੱਪ",
  "docsSearchModal.items.enterpriseFeatures": "ਐਂਟਰਪ੍ਰਾਈਜ਼ ਫੀਚਰਸ",
  "docsSearchModal.items.latestUpdates": "ਤਾਜ਼ਾ ਅੱਪਡੇਟ",

  // affiliatesPage
  "affiliatesPage.badge": "ਐਫੀਲੀਏਟ ਪ੍ਰੋਗਰਾਮ",
  "affiliatesPage.title": "AppNode ਸਾਂਝਾ ਕਰਕੇ ਪੈਸੇ ਕਮਾਓ",
  "affiliatesPage.subtitle": "ਸਾਡੇ ਐਫੀਲੀਏਟ ਪ੍ਰੋਗਰਾਮ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ ਅਤੇ ਹਰ ਰੈਫਰ ਕੀਤੇ ਗਾਹਕ ਲਈ 40% ਤੱਕ ਆਵਰਤੀ ਕਮਿਸ਼ਨ ਕਮਾਓ।",
  "affiliatesPage.emailPlaceholder": "ਆਪਣੀ ਈਮੇਲ ਦਾਖਲ ਕਰੋ",
  "affiliatesPage.joinButton": "ਹੁਣੇ ਸ਼ਾਮਲ ਹੋਵੋ",
  "affiliatesPage.alertMessage": "ਅਰਜ਼ੀ ਜਮ੍ਹਾਂ ਹੋ ਗਈ! ਅਗਲੇ ਕਦਮਾਂ ਲਈ ਆਪਣੀ ਈਮੇਲ ਚੈੱਕ ਕਰੋ।",
  "affiliatesPage.benefits.title": "ਸਾਡੇ ਪ੍ਰੋਗਰਾਮ ਵਿੱਚ ਕਿਉਂ ਸ਼ਾਮਲ ਹੋਵੋ?",
  "affiliatesPage.tiers.title": "ਕਮਿਸ਼ਨ ਪੱਧਰ",
  "affiliatesPage.tiers.subtitle": "ਜਿੰਨਾ ਜ਼ਿਆਦਾ ਰੈਫਰ ਕਰੋਗੇ, ਉੰਨਾ ਜ਼ਿਆਦਾ ਕਮਾਓਗੇ। ਜਿਵੇਂ-ਜਿਵੇਂ ਤੁਸੀਂ ਵਧਦੇ ਹੋ, ਉੱਚ ਕਮਿਸ਼ਨ ਦਰਾਂ ਅਨਲੌਕ ਕਰੋ।",
  "affiliatesPage.tiers.referralsPerMonth": "ਰੈਫਰਲ/ਮਹੀਨਾ",
  "affiliatesPage.tiers.recurringCommission": "ਆਵਰਤੀ ਕਮਿਸ਼ਨ",
  "affiliatesPage.howItWorks.title": "ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ",
  "affiliatesPage.stats.title": "ਐਫੀਲੀਏਟ ਸਫਲਤਾ",
  "affiliatesPage.stats.paidToAffiliates": "ਐਫੀਲੀਏਟਸ ਨੂੰ ਭੁਗਤਾਨ",
  "affiliatesPage.stats.activeAffiliates": "ਸਰਗਰਮ ਐਫੀਲੀਏਟਸ",
  "affiliatesPage.stats.avgMonthlyEarnings": "ਔਸਤ ਮਹੀਨਾਵਾਰ ਕਮਾਈ",
  "affiliatesPage.stats.avgPayoutTime": "ਔਸਤ ਭੁਗਤਾਨ ਸਮਾਂ",

  // connectionsPage
  "connectionsPage.badge": "ਇੰਟੀਗ੍ਰੇਸ਼ਨਾਂ",
  "connectionsPage.title": "ਕਨੈਕਸ਼ਨ ਅਤੇ ਇੰਟੀਗ੍ਰੇਸ਼ਨਾਂ",
  "connectionsPage.subtitle": "ਸ਼ਕਤੀਸ਼ਾਲੀ ਤੀਜੀ-ਧਿਰ ਸੇਵਾਵਾਂ ਨਾਲ ਜੁੜ ਕੇ ਆਪਣੀਆਂ ਐਪਸ ਨੂੰ ਸੁਪਰਚਾਰਜ ਕਰੋ",
  "connectionsPage.comingSoon": "ਜਲਦੀ ਆ ਰਿਹਾ ਹੈ",
  "connectionsPage.requestTitle": "ਕੀ ਵੱਖਰੀ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਚਾਹੀਦੀ ਹੈ?",
  "connectionsPage.requestDescription": "ਸਾਨੂੰ ਦੱਸੋ ਕਿ ਤੁਸੀਂ AppNode ਨਾਲ ਕਿਹੜੀਆਂ ਸੇਵਾਵਾਂ ਜੋੜਨਾ ਚਾਹੁੰਦੇ ਹੋ",
  "connectionsPage.requestButton": "ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਦੀ ਬੇਨਤੀ ਕਰੋ",
  "connectionsPage.categories.all": "ਸਭ",
  "connectionsPage.categories.database": "ਡੇਟਾਬੇਸ",
  "connectionsPage.categories.payments": "ਭੁਗਤਾਨ",
  "connectionsPage.categories.ai": "AI",
  "connectionsPage.categories.hosting": "ਹੋਸਟਿੰਗ",
  "connectionsPage.categories.development": "ਡਿਵੈਲਪਮੈਂਟ",
  "connectionsPage.categories.communication": "ਸੰਚਾਰ",
  "connectionsPage.categories.authentication": "ਪ੍ਰਮਾਣੀਕਰਨ",
  "connectionsPage.categories.search": "ਖੋਜ",
  "connectionsPage.categories.ecommerce": "ਈ-ਕਾਮਰਸ",
  "connectionsPage.categories.productivity": "ਉਤਪਾਦਕਤਾ",

  // securityReportPage
  "securityReportPage.badge": "ਸੁਰੱਖਿਆ",
  "securityReportPage.title": "ਸੁਰੱਖਿਆ ਚਿੰਤਾਵਾਂ ਦੀ ਰਿਪੋਰਟ ਕਰੋ",
  "securityReportPage.subtitle": "ਸੁਰੱਖਿਆ ਕਮਜ਼ੋਰੀ ਮਿਲੀ? ਅਸੀਂ ਜ਼ਿੰਮੇਵਾਰ ਖੁਲਾਸੇ ਦੀ ਕਦਰ ਕਰਦੇ ਹਾਂ ਅਤੇ ਮੁੱਦੇ ਨੂੰ ਹੱਲ ਕਰਨ ਲਈ ਤੁਹਾਡੇ ਨਾਲ ਕੰਮ ਕਰਾਂਗੇ।",
  "securityReportPage.bugBounty.title": "ਬੱਗ ਬਾਊਂਟੀ ਪ੍ਰੋਗਰਾਮ",
  "securityReportPage.bugBounty.description": "ਅਸੀਂ ਵੈਧ ਸੁਰੱਖਿਆ ਰਿਪੋਰਟਾਂ ਲਈ ਇਨਾਮ ਦਿੰਦੇ ਹਾਂ। ਬਾਊਂਟੀ ਰਕਮ ਗੰਭੀਰਤਾ ਅਤੇ ਪ੍ਰਭਾਵ 'ਤੇ ਨਿਰਭਰ ਕਰਦੀ ਹੈ। ਗੰਭੀਰ ਕਮਜ਼ੋਰੀਆਂ $5,000 ਤੱਕ ਦੇ ਇਨਾਮ ਲਈ ਯੋਗ ਹੋ ਸਕਦੀਆਂ ਹਨ।",
  "securityReportPage.severityLabel": "ਗੰਭੀਰਤਾ ਦਾ ਪੱਧਰ",
  "securityReportPage.severity.critical.label": "ਨਾਜ਼ੁਕ",
  "securityReportPage.severity.critical.description": "ਪੂਰਾ ਸਿਸਟਮ ਸਮਝੌਤਾ, ਡਾਟਾ ਉਲੰਘਣਾ",
  "securityReportPage.severity.high.label": "ਉੱਚ",
  "securityReportPage.severity.high.description": "ਮਹੱਤਵਪੂਰਨ ਸੁਰੱਖਿਆ ਪ੍ਰਭਾਵ",
  "securityReportPage.severity.medium.label": "ਮੱਧਮ",
  "securityReportPage.severity.medium.description": "ਸੀਮਤ ਸੁਰੱਖਿਆ ਪ੍ਰਭਾਵ",
  "securityReportPage.severity.low.label": "ਘੱਟ",
  "securityReportPage.severity.low.description": "ਘੱਟੋ-ਘੱਟ ਸੁਰੱਖਿਆ ਪ੍ਰਭਾਵ",
  "securityReportPage.descriptionLabel": "ਕਮਜ਼ੋਰੀ ਦਾ ਵੇਰਵਾ",
  "securityReportPage.descriptionHint": "ਕਮਜ਼ੋਰੀ ਦਾ ਵਿਸਤਾਰ ਨਾਲ ਵਰਣਨ ਕਰੋ। ਪ੍ਰਭਾਵਿਤ ਕੰਪੋਨੈਂਟ ਜਾਂ ਫੀਚਰ ਸ਼ਾਮਲ ਕਰੋ।",
  "securityReportPage.descriptionPlaceholder": "ਸੁਰੱਖਿਆ ਕਮਜ਼ੋਰੀ ਦਾ ਵਰਣਨ ਕਰੋ...",
  "securityReportPage.stepsLabel": "ਦੁਬਾਰਾ ਪੈਦਾ ਕਰਨ ਦੇ ਕਦਮ",
  "securityReportPage.stepsHint": "ਕਮਜ਼ੋਰੀ ਨੂੰ ਦੁਬਾਰਾ ਪੈਦਾ ਕਰਨ ਲਈ ਸਪੱਸ਼ਟ ਕਦਮ ਦਿਓ।",
  "securityReportPage.stepsPlaceholder": "1. ਇੱਥੇ ਜਾਓ...\n2. ਇਸ 'ਤੇ ਕਲਿੱਕ ਕਰੋ...\n3. ਦੇਖੋ ਕਿ...",
  "securityReportPage.emailLabel": "ਤੁਹਾਡੀ ਈਮੇਲ",
  "securityReportPage.emailHint": "ਫਾਲੋ ਅੱਪ ਅਤੇ ਖੁਲਾਸੇ ਦੇ ਤਾਲਮੇਲ ਲਈ ਲੋੜੀਂਦੀ ਹੈ।",
  "securityReportPage.emailPlaceholder": "security-researcher@example.com",
  "securityReportPage.submitButton": "ਸੁਰੱਖਿਆ ਰਿਪੋਰਟ ਜਮ੍ਹਾਂ ਕਰੋ",
  "securityReportPage.submitted.title": "ਰਿਪੋਰਟ ਪ੍ਰਾਪਤ ਹੋਈ",
  "securityReportPage.submitted.description": "ਇਸ ਸੁਰੱਖਿਆ ਚਿੰਤਾ ਨੂੰ ਜ਼ਿੰਮੇਵਾਰੀ ਨਾਲ ਖੁਲਾਸਾ ਕਰਨ ਲਈ ਧੰਨਵਾਦ। ਸਾਡੀ ਸੁਰੱਖਿਆ ਟੀਮ ਨੂੰ ਸੂਚਿਤ ਕੀਤਾ ਗਿਆ ਹੈ ਅਤੇ ਤੁਹਾਡੀ ਰਿਪੋਰਟ ਦੀ ਜਲਦੀ ਸਮੀਖਿਆ ਕਰੇਗੀ।",
  "securityReportPage.submitted.responseTime": "ਅਨੁਮਾਨਿਤ ਜਵਾਬ ਸਮਾਂ:",
  "securityReportPage.submitted.critical": "ਨਾਜ਼ੁਕ: 24 ਘੰਟਿਆਂ ਦੇ ਅੰਦਰ",
  "securityReportPage.submitted.high": "ਉੱਚ: 48 ਘੰਟਿਆਂ ਦੇ ਅੰਦਰ",
  "securityReportPage.submitted.mediumLow": "ਮੱਧਮ/ਘੱਟ: 5 ਕਾਰੋਬਾਰੀ ਦਿਨਾਂ ਦੇ ਅੰਦਰ",
  "securityReportPage.submitted.returnHome": "ਘਰ ਵਾਪਸ ਜਾਓ",
  "securityReportPage.guidelines.title": "ਜ਼ਿੰਮੇਵਾਰ ਖੁਲਾਸਾ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼",
  "securityReportPage.contactNote": "ਜ਼ਰੂਰੀ ਸੁਰੱਖਿਆ ਮਾਮਲਿਆਂ ਲਈ, ਤੁਸੀਂ ਸਾਡੇ ਨਾਲ ਇੱਥੇ ਵੀ ਸੰਪਰਕ ਕਰ ਸਕਦੇ ਹੋ",

  // learnPublishPage
  "learnPublishPage.badge": "ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ",
  "learnPublishPage.title": "AppNode ਨਾਲ ਬਣਾਓ ਅਤੇ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰੋ",
  "learnPublishPage.subtitle": "AppNode ਦੇ AI-ਸੰਚਾਲਿਤ ਕੋਡ ਜਨਰੇਟਰ ਨਾਲ ਐਪਲੀਕੇਸ਼ਨਾਂ ਬਣਾਉਣਾ ਅਤੇ ਡਿਪਲੌਇ ਕਰਨਾ ਸਿੱਖੋ। ਵਿਚਾਰ ਤੋਂ ਲਾਈਵ ਵੈੱਬਸਾਈਟ ਮਿੰਟਾਂ ਵਿੱਚ, ਮਹੀਨਿਆਂ ਵਿੱਚ ਨਹੀਂ।",
  "learnPublishPage.steps.title": "ਚਾਰ ਸਧਾਰਨ ਕਦਮ",
  "learnPublishPage.steps.subtitle": "ਆਪਣੀ ਐਪ ਬਣਾਉਣਾ ਅਤੇ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰਨਾ ਪਹਿਲਾਂ ਕਦੇ ਇੰਨਾ ਆਸਾਨ ਨਹੀਂ ਸੀ। ਵਿਚਾਰ ਤੋਂ ਲਾਈਵ ਐਪਲੀਕੇਸ਼ਨ ਤੱਕ ਜਾਣ ਲਈ ਇਹ ਕਦਮ ਫੌਲੋ ਕਰੋ।",
  "learnPublishPage.features.title": "ਡਿਪਲੌਇਮੈਂਟ ਫੀਚਰਸ",
  "learnPublishPage.features.subtitle": "ਪੇਸ਼ੇਵਰ ਐਪਲੀਕੇਸ਼ਨਾਂ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰਨ ਲਈ ਲੋੜੀਂਦੀ ਹਰ ਚੀਜ਼ ਬਾਕਸ ਵਿੱਚ ਸ਼ਾਮਲ ਹੈ।",
  "learnPublishPage.tips.title": "ਵਧੀਆ ਨਤੀਜਿਆਂ ਲਈ ਸੁਝਾਅ",
  "learnPublishPage.cta.title": "ਬਣਾਉਣ ਲਈ ਤਿਆਰ ਹੋ?",
  "learnPublishPage.cta.subtitle": "ਅੱਜ ਹੀ ਆਪਣੀ ਐਪਲੀਕੇਸ਼ਨ ਬਣਾਉਣਾ ਸ਼ੁਰੂ ਕਰੋ। ਕੋਡਿੰਗ ਤਜ਼ਰਬੇ ਦੀ ਲੋੜ ਨਹੀਂ।",
  "learnPublishPage.cta.startButton": "ਮੁਫ਼ਤ ਬਣਾਉਣਾ ਸ਼ੁਰੂ ਕਰੋ",
  "learnPublishPage.cta.docsButton": "ਦਸਤਾਵੇਜ਼ ਵੇਖੋ",

  // blockchainSection
  "blockchainSection.badge": "ਮਲਟੀ-ਚੇਨ ਈਕੋਸਿਸਟਮ",
  "blockchainSection.titleLine1": "ਕਿਸੇ ਵੀ ਚੀਜ਼ ਨੂੰ ਬਣਾਓ",
  "blockchainSection.titleLine2": "ਕਿਸੇ ਵੀ ਬਲਾਕਚੇਨ 'ਤੇ",
  "blockchainSection.titleLine3": "ਪਹਿਲਾਂ ਨਾਲੋਂ ਤੇਜ਼",
  "blockchainSection.description": "Love Code ਪੂਰੇ ਆਨ-ਚੇਨ ਈਕੋਸਿਸਟਮ ਨੂੰ ਬਿਨਾਂ ਕਿਸੇ ਰੁਕਾਵਟ ਦੇ ਅਨਲੌਕ ਕਰਦਾ ਹੈ। L1 ਦੈਂਤਾਂ ਤੋਂ ਲੈ ਕੇ ਨਵੀਨਤਮ L2 ਤੱਕ, ਤੁਹਾਨੂੰ ਕੁਝ ਵੀ ਬਣਾਉਣ ਦੀ ਸ਼ਕਤੀ ਮਿਲਦੀ ਹੈ: ਲੈਂਡਿੰਗ ਪੇਜ, ਮੀਮ ਟੋਕਨ ਪ੍ਰੀਸੇਲ, NFT ਡ੍ਰੌਪ, ਡੈਸ਼ਬੋਰਡ, ਪੂਰੀਆਂ Web3 ਐਪਸ, ਜੋ ਵੀ ਤੁਸੀਂ ਸੋਚੋ।",
  "blockchainSection.descriptionHighlight": "ਕੋਈ ਸੀਮਾ ਨਹੀਂ। ਕੋਈ ਜਟਿਲਤਾ ਨਹੀਂ। ਬੱਸ ਸ਼ੁੱਧ ਸਿਰਜਣਾ।",
  "blockchainSection.bottomText": "ਜੇ ਇਹ ਬਲਾਕਚੇਨ 'ਤੇ ਮੌਜੂਦ ਹੈ, ਤਾਂ ਤੁਸੀਂ ਇਸਨੂੰ ਇੱਥੇ ਬਣਾ ਸਕਦੇ ਹੋ —",
  "blockchainSection.bottomHighlight": "ਆਸਾਨ, ਤੇਜ਼, ਅਤੇ ਪੂਰੀ ਤਰ੍ਹਾਂ ਨਵੇਂ ਪੱਧਰ 'ਤੇ।",
  "blockchainSection.ctaButton": "Web3 'ਤੇ ਬਣਾਉਣਾ ਸ਼ੁਰੂ ਕਰੋ",

  // useCasesMobileApps (missing)
  "useCasesMobileApps.comingSoon": "ਜਲਦੀ ਆ ਰਿਹਾ ਹੈ",
  "useCasesMobileApps.welcomeBack": "ਵਾਪਸ ਸੁਆਗਤ ਹੈ",
  "useCasesMobileApps.dashboard": "ਡੈਸ਼ਬੋਰਡ",
  "useCasesMobileApps.getStarted": "ਸ਼ੁਰੂ ਕਰੋ",
  "useCasesMobileApps.featuresSubtitle": "ਪੇਸ਼ੇਵਰ ਮੋਬਾਈਲ ਐਪਲੀਕੇਸ਼ਨਾਂ ਬਣਾਉਣ ਲਈ ਤੁਹਾਨੂੰ ਲੋੜੀਂਦੀ ਹਰ ਚੀਜ਼",
  "useCasesMobileApps.iosReady": "iOS ਤਿਆਰ",
  "useCasesMobileApps.androidReady": "Android ਤਿਆਰ",

  // privacyPage (missing)
  "privacyPage.intro.p1": "AppNode Inc. (\"AppNode\", \"ਅਸੀਂ\", \"ਸਾਨੂੰ\", ਜਾਂ \"ਸਾਡਾ\") ਤੁਹਾਡੀ ਗੋਪਨੀਯਤਾ ਦੀ ਰੱਖਿਆ ਲਈ ਵਚਨਬੱਧ ਹੈ। ਇਹ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਦੱਸਦੀ ਹੈ ਕਿ ਅਸੀਂ ਤੁਹਾਡੀ ਨਿੱਜੀ ਜਾਣਕਾਰੀ ਨੂੰ ਕਿਵੇਂ ਇਕੱਠਾ, ਵਰਤਦੇ, ਖੁਲਾਸਾ, ਸਟੋਰ ਅਤੇ ਸੁਰੱਖਿਅਤ ਕਰਦੇ ਹਾਂ।",
  "privacyPage.intro.p2": "ਸੇਵਾਵਾਂ ਦੀ ਵਰਤੋਂ ਕਰਕੇ, ਤੁਸੀਂ ਇਸ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਵਿੱਚ ਦੱਸੀਆਂ ਕਾਰਵਾਈਆਂ ਨਾਲ ਸਹਿਮਤੀ ਦਿੰਦੇ ਹੋ। ਜੇ ਤੁਸੀਂ ਸਹਿਮਤ ਨਹੀਂ ਹੋ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ ਸੇਵਾਵਾਂ ਦੀ ਵਰਤੋਂ ਨਾ ਕਰੋ।",
  "privacyPage.intro.p3": "ਅਸੀਂ ਸਮੇਂ-ਸਮੇਂ 'ਤੇ ਇਸ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਨੂੰ ਅੱਪਡੇਟ ਕਰ ਸਕਦੇ ਹਾਂ। ਅਸੀਂ ਤੁਹਾਨੂੰ ਮਹੱਤਵਪੂਰਨ ਤਬਦੀਲੀਆਂ ਬਾਰੇ ਸੂਚਿਤ ਕਰਾਂਗੇ। ਤਬਦੀਲੀਆਂ ਤੋਂ ਬਾਅਦ ਤੁਹਾਡੀ ਨਿਰੰਤਰ ਵਰਤੋਂ ਸਵੀਕ੍ਰਿਤੀ ਮੰਨੀ ਜਾਵੇਗੀ।"
};

var count = 0;
for (var key in translations) {
  setValue(pa, key, translations[key]);
  count++;
}

fs.writeFileSync('./src/translations/pa.json', JSON.stringify(pa, null, 2), 'utf8');
console.log('Phase 1 complete: Added ' + count + ' missing key translations');
