// Phase 3: supportPage, useCases, docsPage, blogPage, careersPage, communityPage, galleryPage
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
  // supportPage
  "supportPage.heroTitle": "ਅਸੀਂ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦੇ ਹਾਂ?",
  "supportPage.heroSubtitle": "ਸਾਡੇ ਗਿਆਨ ਅਧਾਰ ਵਿੱਚ ਖੋਜੋ ਜਾਂ ਹੇਠਾਂ ਸ਼੍ਰੇਣੀਆਂ ਬ੍ਰਾਊਜ਼ ਕਰੋ",
  "supportPage.browseByCategory": "ਸ਼੍ਰੇਣੀ ਅਨੁਸਾਰ ਬ੍ਰਾਊਜ਼ ਕਰੋ",
  "supportPage.popularArticles": "ਪ੍ਰਸਿੱਧ ਲੇਖ",
  "supportPage.needMoreHelp": "ਹੋਰ ਮਦਦ ਚਾਹੀਦੀ ਹੈ?",
  "supportPage.needMoreHelpDescription": "ਜੋ ਲੱਭ ਰਹੇ ਹੋ ਨਹੀਂ ਮਿਲ ਰਿਹਾ? ਸਾਡੀ ਸਹਾਇਤਾ ਟੀਮ ਮਦਦ ਲਈ ਤਿਆਰ ਹੈ।",
  "supportPage.chatWithSupport": "ਸਹਾਇਤਾ ਨਾਲ ਚੈਟ ਕਰੋ",
  "supportPage.emailSupport": "ਈਮੇਲ ਸਹਾਇਤਾ",
  "supportPage.stillHaveQuestions": "ਅਜੇ ਵੀ ਸਵਾਲ ਹਨ?",
  "supportPage.stillHaveQuestionsDescription": "ਸਾਡੀ ਟੀਮ ਤੁਹਾਡੀ ਸਫਲਤਾ ਵਿੱਚ ਮਦਦ ਕਰਨ ਲਈ ਤਿਆਰ ਹੈ। ਕਿਸੇ ਵੀ ਸਮੇਂ ਸੰਪਰਕ ਕਰੋ।",
  "supportPage.viewGallery": "ਗੈਲਰੀ ਵੇਖੋ",
  "supportPage.joinCommunity": "ਭਾਈਚਾਰੇ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ",
  "supportPage.browseGuides": "ਗਾਈਡ ਬ੍ਰਾਊਜ਼ ਕਰੋ",
  "supportPage.articles": "ਲੇਖ",
  "supportPage.quickActions.gettingStarted": "ਸ਼ੁਰੂਆਤ ਕਰੋ",
  "supportPage.quickActions.pricing": "ਕੀਮਤ",
  "supportPage.quickActions.exportCode": "ਕੋਡ ਐਕਸਪੋਰਟ ਕਰੋ",
  "supportPage.quickActions.liveAgent": "ਲਾਈਵ ਏਜੰਟ",
  "supportPage.categories.accountBilling.name": "ਖਾਤਾ ਅਤੇ ਬਿਲਿੰਗ",
  "supportPage.categories.accountBilling.description": "ਆਪਣੀ ਸਬਸਕ੍ਰਿਪਸ਼ਨ ਅਤੇ ਭੁਗਤਾਨ ਪ੍ਰਬੰਧਿਤ ਕਰੋ",
  "supportPage.categories.buildingApps.name": "ਐਪਸ ਬਣਾਉਣਾ",
  "supportPage.categories.buildingApps.description": "ਸ਼ਾਨਦਾਰ ਐਪਸ ਬਣਾਉਣਾ ਸਿੱਖੋ",
  "supportPage.categories.customization.name": "ਕਸਟਮਾਈਜ਼ੇਸ਼ਨ",
  "supportPage.categories.customization.description": "ਆਪਣੇ ਪ੍ਰੋਜੈਕਟਾਂ ਨੂੰ ਸਟਾਈਲ ਅਤੇ ਨਿੱਜੀ ਬਣਾਓ",
  "supportPage.categories.integrations.name": "ਇੰਟੀਗ੍ਰੇਸ਼ਨਾਂ",
  "supportPage.categories.integrations.description": "ਤੀਜੀ-ਧਿਰ ਸੇਵਾਵਾਂ ਨਾਲ ਜੁੜੋ",
  "supportPage.categories.troubleshooting.name": "ਸਮੱਸਿਆ ਹੱਲ",
  "supportPage.categories.troubleshooting.description": "ਆਮ ਸਮੱਸਿਆਵਾਂ ਅਤੇ ਗਲਤੀਆਂ ਠੀਕ ਕਰੋ",
  "supportPage.popularArticlesList.firstApp": "ਆਪਣੀ ਪਹਿਲੀ ਐਪ ਕਿਵੇਂ ਬਣਾਈਏ",
  "supportPage.popularArticlesList.promptEngineering": "ਪ੍ਰੌਂਪਟ ਇੰਜੀਨੀਅਰਿੰਗ ਨੂੰ ਸਮਝਣਾ",
  "supportPage.popularArticlesList.customDomain": "ਕਸਟਮ ਡੋਮੇਨ ਜੋੜਨਾ",
  "supportPage.popularArticlesList.exportCode": "ਆਪਣੇ ਪ੍ਰੋਜੈਕਟ ਕੋਡ ਨੂੰ ਐਕਸਪੋਰਟ ਕਰਨਾ",
  "supportPage.popularArticlesList.teamCollab": "ਟੀਮ ਸਹਿਯੋਗ ਫੀਚਰਸ",
  "supportPage.popularArticlesList.apiAuth": "API ਪ੍ਰਮਾਣੀਕਰਨ ਸੈੱਟਅੱਪ",
  "supportPage.faqs.codingExperience.question": "ਕੀ ਮੈਨੂੰ ਕੋਡਿੰਗ ਅਨੁਭਵ ਦੀ ਲੋੜ ਹੈ?",
  "supportPage.faqs.exportCode.question": "ਕੀ ਮੈਂ ਆਪਣਾ ਕੋਡ ਐਕਸਪੋਰਟ ਕਰ ਸਕਦਾ ਹਾਂ?",
  "supportPage.faqs.exportCode.answer": "ਹਾਂ, ਤੁਸੀਂ ਕਿਸੇ ਵੀ ਸਮੇਂ ਆਪਣਾ ਪੂਰਾ ਪ੍ਰੋਜੈਕਟ ਕੋਡ ਐਕਸਪੋਰਟ ਕਰ ਸਕਦੇ ਹੋ। ਤੁਸੀਂ ਜੋ ਵੀ ਬਣਾਉਂਦੇ ਹੋ ਉਸ ਦੇ ਮਾਲਕ ਹੋ।",
  "supportPage.faqs.freePlan.question": "ਕੀ ਕੋਈ ਮੁਫ਼ਤ ਯੋਜਨਾ ਹੈ?",
  "supportPage.faqs.freePlan.answer": "ਹਾਂ! ਅਸੀਂ ਇੱਕ ਵਧੀਆ ਮੁਫ਼ਤ ਪੱਧਰ ਦਿੰਦੇ ਹਾਂ ਜੋ ਤੁਹਾਨੂੰ ਬਿਨਾਂ ਕਿਸੇ ਲਾਗਤ ਦੇ ਐਪਸ ਬਣਾਉਣ ਅਤੇ ਡਿਪਲੌਇ ਕਰਨ ਦਿੰਦਾ ਹੈ।",

  // useCases - Business Apps
  "useCasesBusinessApps.titleStart": "ਵਪਾਰਕ ਐਪਸ ਬਣਾਓ",
  "useCasesBusinessApps.titleHighlight": "10 ਗੁਣਾ ਤੇਜ਼",
  "useCasesBusinessApps.seeExamples": "ਉਦਾਹਰਨਾਂ ਵੇਖੋ",
  "useCasesBusinessApps.mockup.salesDashboard": "ਵਿਕਰੀ ਡੈਸ਼ਬੋਰਡ",
  "useCasesBusinessApps.mockup.revenue": "ਆਮਦਨ",
  "useCasesBusinessApps.mockup.customers": "ਗਾਹਕ",
  "useCasesBusinessApps.mockup.retention": "ਧਾਰਨ",
  "useCasesBusinessApps.whatYouCanBuild": "ਤੁਸੀਂ ਕੀ ਬਣਾ ਸਕਦੇ ਹੋ",
  "useCasesBusinessApps.useCases.dashboards.title": "ਡੈਸ਼ਬੋਰਡ",
  "useCasesBusinessApps.useCases.dashboards.description": "KPI ਡੈਸ਼ਬੋਰਡ, ਵਿਸ਼ਲੇਸ਼ਣ ਦ੍ਰਿਸ਼, ਅਤੇ ਰਿਪੋਰਟਿੰਗ ਟੂਲ",
  "useCasesBusinessApps.useCases.workflowAutomation.title": "ਵਰਕਫਲੋ ਆਟੋਮੇਸ਼ਨ",
  "useCasesBusinessApps.useCases.workflowAutomation.description": "ਦੁਹਰਾਏ ਜਾਣ ਵਾਲੇ ਕੰਮਾਂ ਅਤੇ ਮਨਜ਼ੂਰੀ ਪ੍ਰਕਿਰਿਆਵਾਂ ਨੂੰ ਆਟੋਮੈਟ ਕਰੋ",
  "useCasesBusinessApps.useCases.adminPanels.title": "ਐਡਮਿਨ ਪੈਨਲ",
  "useCasesBusinessApps.useCases.adminPanels.description": "ਤੁਹਾਡੇ ਡਾਟਾ ਅਤੇ ਸਿਸਟਮਾਂ ਲਈ ਕਸਟਮ ਐਡਮਿਨ ਇੰਟਰਫੇਸ",
  "useCasesBusinessApps.useCases.crmTools.title": "CRM ਟੂਲ",
  "useCasesBusinessApps.useCases.crmTools.description": "ਗਾਹਕ ਪ੍ਰਬੰਧਨ ਅਤੇ ਵਿਕਰੀ ਟ੍ਰੈਕਿੰਗ ਸਿਸਟਮ",
  "useCasesBusinessApps.useCases.inventorySystems.title": "ਇਨਵੈਂਟਰੀ ਸਿਸਟਮ",
  "useCasesBusinessApps.useCases.inventorySystems.description": "ਸਟਾਕ, ਆਰਡਰ, ਅਤੇ ਸਪਲਾਈ ਚੇਨ ਡਾਟਾ ਟ੍ਰੈਕ ਕਰੋ",
  "useCasesBusinessApps.useCases.formsSurveys.title": "ਫਾਰਮ ਅਤੇ ਸਰਵੇਖਣ",
  "useCasesBusinessApps.useCases.formsSurveys.description": "ਡਾਟਾ ਇਕੱਠਾ ਕਰਨ ਦੇ ਟੂਲ ਅਤੇ ਫੀਡਬੈਕ ਸਿਸਟਮ",
  "useCasesBusinessApps.ctaTitle": "ਅੱਜ ਹੀ ਆਪਣੀ ਵਪਾਰਕ ਐਪ ਬਣਾਓ",
  "useCasesBusinessApps.ctaSubtitle": "ਕਿਸੇ ਇੰਜੀਨੀਅਰਿੰਗ ਟੀਮ ਦੀ ਲੋੜ ਨਹੀਂ। ਮਿੰਟਾਂ ਵਿੱਚ ਬਣਾਉਣਾ ਸ਼ੁਰੂ ਕਰੋ।",

  // useCases - Mobile Apps
  "useCasesMobileApps.titleStart": "ਮੋਬਾਈਲ ਐਪਸ ਬਣਾਓ",
  "useCasesMobileApps.titleHighlight": "ਕੋਡ ਤੋਂ ਬਿਨਾਂ",
  "useCasesMobileApps.seeExamples": "ਉਦਾਹਰਨਾਂ ਵੇਖੋ",
  "useCasesMobileApps.featuresTitle": "ਮੋਬਾਈਲ ਐਪ ਫੀਚਰਸ",
  "useCasesMobileApps.features.locationServices.title": "ਲੋਕੇਸ਼ਨ ਸੇਵਾਵਾਂ",
  "useCasesMobileApps.features.locationServices.description": "GPS ਨਾਲ ਲੋਕੇਸ਼ਨ-ਅਵੇਅਰ ਫੀਚਰ ਬਣਾਓ",
  "useCasesMobileApps.features.cameraMedia.title": "ਕੈਮਰਾ ਅਤੇ ਮੀਡੀਆ",
  "useCasesMobileApps.features.cameraMedia.description": "ਕੈਮਰਾ, ਫੋਟੋਆਂ, ਅਤੇ ਮੀਡੀਆ ਲਾਇਬ੍ਰੇਰੀਆਂ ਐਕਸੈਸ ਕਰੋ",
  "useCasesMobileApps.ctaTitle": "ਅੱਜ ਹੀ ਆਪਣੀ ਮੋਬਾਈਲ ਐਪ ਬਣਾਓ",
  "useCasesMobileApps.ctaSubtitle": "ਵਿਚਾਰ ਤੋਂ ਐਪ ਸਟੋਰ ਤੱਕ ਰਿਕਾਰਡ ਸਮੇਂ ਵਿੱਚ।",

  // useCases - Rapid Prototyping
  "useCasesRapidPrototyping.titleStart": "ਵਿਚਾਰ ਤੋਂ ਪ੍ਰੋਟੋਟਾਈਪ",
  "useCasesRapidPrototyping.titleHighlight": "ਮਿੰਟਾਂ ਵਿੱਚ",
  "useCasesRapidPrototyping.seeExamples": "ਉਦਾਹਰਨਾਂ ਵੇਖੋ",
  "useCasesRapidPrototyping.totalTime": "ਕੁੱਲ ਸਮਾਂ",
  "useCasesRapidPrototyping.traditional.totalTime": "6-10 ਹਫ਼ਤੇ",
  "useCasesRapidPrototyping.appnode.totalTime": "1-2 ਘੰਟੇ",
  "useCasesRapidPrototyping.benefitsTitle": "ਤੇਜ਼ ਪ੍ਰੋਟੋਟਾਈਪਿੰਗ ਮਹੱਤਵਪੂਰਨ ਕਿਉਂ ਹੈ",
  "useCasesRapidPrototyping.ctaTitle": "ਅੱਜ ਪ੍ਰੋਟੋਟਾਈਪਿੰਗ ਸ਼ੁਰੂ ਕਰੋ",
  "useCasesRapidPrototyping.ctaSubtitle": "ਆਪਣੇ ਵਿਚਾਰਾਂ ਨੂੰ ਮਿੰਟਾਂ ਵਿੱਚ ਕੰਮ ਕਰਨ ਵਾਲੇ ਪ੍ਰੋਟੋਟਾਈਪ ਵਿੱਚ ਬਦਲੋ, ਮਹੀਨਿਆਂ ਵਿੱਚ ਨਹੀਂ।",

  // docsPage
  "docsPage.whatYouCanBuild": "ਤੁਸੀਂ ਕੀ ਬਣਾ ਸਕਦੇ ਹੋ",
  "docsPage.howItWorks": "ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ",
  "docsPage.howItWorksDescription": "ਬੱਸ ਆਪਣੇ ਪ੍ਰੋਜੈਕਟ ਨੂੰ ਸਧਾਰਨ ਭਾਸ਼ਾ ਵਿੱਚ ਦੱਸੋ। ਸਾਡੀ AI ਤੁਹਾਡੀਆਂ ਲੋੜਾਂ ਨੂੰ ਸਮਝਦੀ ਹੈ, ਇੱਕ ਪੂਰਾ ਬਲੂਪ੍ਰਿੰਟ ਬਣਾਉਂਦੀ ਹੈ, ਅਤੇ ਰੀਅਲ-ਟਾਈਮ ਵਿੱਚ ਪ੍ਰੋਡਕਸ਼ਨ-ਰੈਡੀ ਕੋਡ ਬਣਾਉਂਦੀ ਹੈ।",
  "docsPage.gettingStarted": "ਸ਼ੁਰੂਆਤ ਕਰੋ",
  "docsPage.gettingStartedDescription": "ਆਪਣੀ ਪਹਿਲੀ ਐਪ ਬਣਾਉਣ ਲਈ ਤਿਆਰ ਹੋ? ਕੁਝ ਸਧਾਰਨ ਕਦਮਾਂ ਵਿੱਚ ਸ਼ੁਰੂ ਕਰੋ:",
  "docsPage.startBuildingFree": "ਮੁਫ਼ਤ ਬਣਾਉਣਾ ਸ਼ੁਰੂ ਕਰੋ",
  "docsPage.viewQuickstartGuide": "ਤੁਰੰਤ ਸ਼ੁਰੂਆਤ ਗਾਈਡ ਵੇਖੋ",
  "docsPage.copyPage": "ਪੰਨਾ ਕਾਪੀ ਕਰੋ",

  // blogPage
  "blogPage.noPostsFound": "ਤੁਹਾਡੇ ਮਾਪਦੰਡਾਂ ਨਾਲ ਮੇਲ ਖਾਂਦੀਆਂ ਕੋਈ ਪੋਸਟਾਂ ਨਹੀਂ ਮਿਲੀਆਂ।",
  "blogPage.latestPosts": "ਤਾਜ਼ਾ ਪੋਸਟਾਂ",
  "blogPage.loadMorePosts": "ਹੋਰ ਪੋਸਟਾਂ ਲੋਡ ਕਰੋ",
  "blogPage.subscribeTitle": "ਸਾਡੇ ਨਿਊਜ਼ਲੈਟਰ ਦੀ ਗਾਹਕੀ ਲਓ",
  "blogPage.subscribeDescription": "ਨਵੀਨਤਮ ਲੇਖ, ਟਿਊਟੋਰੀਅਲ, ਅਤੇ ਉਤਪਾਦ ਅੱਪਡੇਟ ਸਿੱਧੇ ਤੁਹਾਡੇ ਇਨਬਾਕਸ ਵਿੱਚ ਪ੍ਰਾਪਤ ਕਰੋ।",
  "blogPage.emailPlaceholder": "ਆਪਣੀ ਈਮੇਲ ਦਾਖਲ ਕਰੋ",
  "blogPage.subscribe": "ਗਾਹਕੀ ਲਓ",
  "blogPage.ctaTitle": "ਕੁਝ ਬਣਾਉਣ ਲਈ ਤਿਆਰ ਹੋ?",
  "blogPage.getStartedFree": "ਮੁਫ਼ਤ ਸ਼ੁਰੂ ਕਰੋ",
  "blogPage.browseCourses": "ਕੋਰਸ ਬ੍ਰਾਊਜ਼ ਕਰੋ",
  "blogPage.categories.featured": "ਫੀਚਰਡ",
  "blogPage.categories.product": "ਉਤਪਾਦ",
  "blogPage.categories.tips": "ਸੁਝਾਅ",
  "blogPage.categories.news": "ਖ਼ਬਰਾਂ",
  "blogPage.posts.smartStyles.title": "ਸਮਾਰਟ ਸਟਾਈਲਜ਼: ਤੁਹਾਡੀਆਂ ਐਪਸ ਲਈ AI-ਸੰਚਾਲਿਤ ਡਿਜ਼ਾਈਨ ਸਿਸਟਮ",
  "blogPage.posts.smartStyles.excerpt": "ਸਮਾਰਟ ਸਟਾਈਲਜ਼ ਪੇਸ਼ ਕਰ ਰਹੇ ਹਾਂ, ਸਾਡਾ ਨਵਾਂ ਫੀਚਰ ਜੋ ਆਟੋਮੈਟਿਕਲੀ ਸੁੰਦਰ, ਇਕਸਾਰ ਡਿਜ਼ਾਈਨ ਬਣਾਉਂਦਾ ਹੈ।",
  "blogPage.posts.security.excerpt": "ਸਟੈਟਿਕ ਵਿਸ਼ਲੇਸ਼ਣ ਨੂੰ LLM-ਅਧਾਰਿਤ ਤਰਕ ਨਾਲ ਮਿਲਾਉਂਦੇ ਸਾਡੇ ਹਾਈਬ੍ਰਿਡ ਪਹੁੰਚ ਦੀ ਡੂੰਘੀ ਜਾਣਕਾਰੀ।",
  "blogPage.posts.prompting.title": "ਬਿਹਤਰ AI-ਜਨਰੇਟਿਡ ਐਪਸ ਲਈ 10 ਪ੍ਰੌਂਪਟਿੰਗ ਸੁਝਾਅ",
  "blogPage.posts.prompting.excerpt": "ਇਹਨਾਂ ਵਿਹਾਰਕ ਪ੍ਰੌਂਪਟਿੰਗ ਰਣਨੀਤੀਆਂ ਨਾਲ ਵਾਈਬ ਕੋਡਿੰਗ ਦੀ ਕਲਾ ਵਿੱਚ ਮਾਹਰ ਬਣੋ।",
  "blogPage.posts.spotlight.title": "ਕਮਿਊਨਿਟੀ ਸਪੌਟਲਾਈਟ: ਇਸ ਮਹੀਨੇ ਬਣਾਈਆਂ ਐਪਸ",
  "blogPage.posts.spotlight.excerpt": "ਸਾਡੇ ਭਾਈਚਾਰੇ ਦੁਆਰਾ ਬਣਾਈਆਂ ਸ਼ਾਨਦਾਰ ਐਪਲੀਕੇਸ਼ਨਾਂ ਦਾ ਪ੍ਰਦਰਸ਼ਨ।",
  "blogPage.posts.collaboration.title": "ਰੀਅਲ-ਟਾਈਮ ਸਹਿਯੋਗ: ਮਿਲ ਕੇ ਬਣਾਓ, ਤੇਜ਼ੀ ਨਾਲ ਸ਼ਿਪ ਕਰੋ",
  "blogPage.posts.collaboration.excerpt": "ਕਈ ਟੀਮ ਮੈਂਬਰ ਹੁਣ ਇੱਕੋ ਸਮੇਂ ਇੱਕੋ ਪ੍ਰੋਜੈਕਟ ਨੂੰ ਸੰਪਾਦਿਤ ਕਰ ਸਕਦੇ ਹਨ।",
  "blogPage.posts.caseStudy.title": "ਜ਼ੀਰੋ ਤੋਂ ਪ੍ਰੋਡਕਸ਼ਨ ਇੱਕ ਦਿਨ ਵਿੱਚ: ਇੱਕ ਕੇਸ ਸਟੱਡੀ",
  "blogPage.posts.mobile.excerpt": "ਅਸੀਂ ਨੇਟਿਵ ਮੋਬਾਈਲ ਅਨੁਭਵ 'ਤੇ ਕੰਮ ਕਰ ਰਹੇ ਹਾਂ ਤਾਂ ਜੋ ਤੁਸੀਂ ਬਿਨਾਂ Swift ਜਾਂ Kotlin ਸਿੱਖੇ ਐਪਸ ਬਣਾ ਸਕੋ।",
  "blogPage.posts.enterprise.excerpt": "SSO, ਆਡਿਟ ਲੌਗ, ਅਤੇ ਸਮਰਪਿਤ ਸਹਾਇਤਾ ਸਮੇਤ ਐਂਟਰਪ੍ਰਾਈਜ਼-ਗ੍ਰੇਡ ਫੀਚਰਸ ਦੀ ਘੋਸ਼ਣਾ।",
  "blogPage.posts.future.title": "ਨੋ-ਕੋਡ ਦਾ ਭਵਿੱਖ: ਅਸੀਂ ਕਿੱਥੇ ਜਾ ਰਹੇ ਹਾਂ",
  "blogPage.posts.future.excerpt": "ਸਾਫਟਵੇਅਰ ਡਿਵੈਲਪਮੈਂਟ ਦੀ ਅਗਲੀ ਪੀੜ੍ਹੀ ਲਈ ਸਾਡਾ ਦ੍ਰਿਸ਼ਟੀਕੋਣ।",
  "blogPage.posts.performance.excerpt": "ਤੇਜ਼, ਜਵਾਬਦੇਹ ਐਪਲੀਕੇਸ਼ਨਾਂ ਬਣਾਉਣ ਲਈ ਵਧੀਆ ਅਭਿਆਸ।",

  // careersPage
  "careersPage.titleEnd": "ਟੀਮ",
  "careersPage.viewOpenPositions": "ਖੁੱਲ੍ਹੀਆਂ ਅਸਾਮੀਆਂ ਵੇਖੋ",
  "careersPage.ourValues": "ਸਾਡੀਆਂ ਕਦਰਾਂ-ਕੀਮਤਾਂ",
  "careersPage.whyJoinUs": "ਸਾਡੇ ਨਾਲ ਕਿਉਂ ਜੁੜੋ",
  "careersPage.benefitsAndPerks": "ਲਾਭ ਅਤੇ ਸੁਵਿਧਾਵਾਂ",
  "careersPage.openPositions": "ਖੁੱਲ੍ਹੀਆਂ ਅਸਾਮੀਆਂ",
  "careersPage.dontSeeAFit": "ਸਹੀ ਮੇਲ ਨਹੀਂ ਦਿਖ ਰਿਹਾ?",
  "careersPage.dontSeeAFitDescription": "ਅਸੀਂ ਹਮੇਸ਼ਾ ਪ੍ਰਤਿਭਾਸ਼ਾਲੀ ਲੋਕਾਂ ਦੀ ਭਾਲ ਵਿੱਚ ਹਾਂ। ਸਾਨੂੰ ਆਪਣਾ ਰਿਜ਼ਿਊਮ ਭੇਜੋ ਅਤੇ ਅਸੀਂ ਤੁਹਾਨੂੰ ਯਾਦ ਰੱਖਾਂਗੇ।",
  "careersPage.sendGeneralApplication": "ਆਮ ਅਰਜ਼ੀ ਭੇਜੋ",

  // communityPage
  "communityPage.exploreThe": "ਖੋਜੋ",
  "communityPage.searchPlaceholder": "ਪ੍ਰੋਜੈਕਟ, ਟੈਂਪਲੇਟ, ਅਤੇ ਰਚਨਾਕਾਰ ਖੋਜੋ...",
  "communityPage.projectsCreated": "ਬਣਾਏ ਗਏ ਪ੍ਰੋਜੈਕਟ",
  "communityPage.activeBuilders": "ਸਰਗਰਮ ਬਿਲਡਰ",
  "communityPage.monthlyVisitors": "ਮਾਸਿਕ ਵਿਜ਼ਿਟਰ",
  "communityPage.loadMoreProjects": "ਹੋਰ ਪ੍ਰੋਜੈਕਟ ਲੋਡ ਕਰੋ",
  "communityPage.topContributors": "ਚੋਟੀ ਦੇ ਯੋਗਦਾਨੀ",
  "communityPage.viewAll": "ਸਭ ਵੇਖੋ",
  "communityPage.recentDiscussions": "ਤਾਜ਼ਾ ਚਰਚਾਵਾਂ",
  "communityPage.joinDiscussion": "ਚਰਚਾ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ",
  "communityPage.discordDescription": "5,000+ ਬਿਲਡਰਾਂ ਨਾਲ ਜੁੜੋ, ਮਦਦ ਲਓ, ਅਤੇ ਆਪਣੇ ਪ੍ਰੋਜੈਕਟ ਸਾਂਝੇ ਕਰੋ।",
  "communityPage.ctaTitle": "ਆਪਣੀ ਰਚਨਾ ਸਾਂਝੀ ਕਰਨ ਲਈ ਤਿਆਰ ਹੋ?",
  "communityPage.ctaDescription": "ਕੁਝ ਸ਼ਾਨਦਾਰ ਬਣਾਓ ਅਤੇ ਇਸਨੂੰ ਭਾਈਚਾਰੇ ਨਾਲ ਸਾਂਝਾ ਕਰੋ।",

  // galleryPage
  "galleryPage.startWithIdea": "ਇੱਕ ਵਿਚਾਰ ਨਾਲ ਸ਼ੁਰੂ ਕਰੋ",
  "galleryPage.seeAll": "ਸਭ ਵੇਖੋ",
  "galleryPage.view": "ਵੇਖੋ",
  "galleryPage.comingSoon": "ਜਲਦੀ ਆ ਰਿਹਾ ਹੈ",
  "galleryPage.shareTitle": "ਆਪਣੀ ਰਚਨਾ ਸਾਂਝੀ ਕਰੋ",
  "galleryPage.submitProject": "ਆਪਣਾ ਪ੍ਰੋਜੈਕਟ ਜਮ੍ਹਾਂ ਕਰੋ",
  "galleryPage.projects.ecommerceAI": "ਈ-ਕਾਮਰਸ AI",
  "galleryPage.projects.customerSupportAI": "ਗਾਹਕ ਸਹਾਇਤਾ AI",
  "galleryPage.projects.aiContentWriter": "AI ਸਮੱਗਰੀ ਲੇਖਕ",
  "galleryPage.projects.aiImageGenerator": "AI ਚਿੱਤਰ ਜਨਰੇਟਰ",
  "galleryPage.projects.textToSpeechAI": "ਟੈਕਸਟ ਟੂ ਸਪੀਚ AI",
  "galleryPage.projects.dataAnalyticsAI": "ਡਾਟਾ ਵਿਸ਼ਲੇਸ਼ਣ AI",
  "galleryPage.projects.aiVideoCreator": "AI ਵੀਡੀਓ ਬਣਾਉਣ ਵਾਲਾ",
  "galleryPage.projects.aiCodeAssistant": "AI ਕੋਡ ਸਹਾਇਕ",
  "galleryPage.projects.travelBlog": "ਯਾਤਰਾ ਬਲੌਗ",
  "galleryPage.projects.designStudio": "ਡਿਜ਼ਾਈਨ ਸਟੂਡੀਓ",
  "galleryPage.projects.businessWebsite": "ਵਪਾਰਕ ਵੈੱਬਸਾਈਟ",
  "galleryPage.projects.artMagazine": "ਕਲਾ ਮੈਗਜ਼ੀਨ",
  "galleryPage.projects.fashionBlog": "ਫੈਸ਼ਨ ਬਲੌਗ",
  "galleryPage.projects.productLanding": "ਉਤਪਾਦ ਲੈਂਡਿੰਗ",
  "galleryPage.projects.fragranceStore": "ਖ਼ੁਸ਼ਬੂ ਸਟੋਰ",
  "galleryPage.projects.restaurantSite": "ਰੈਸਟੋਰੈਂਟ ਸਾਈਟ",
  "galleryPage.projects.crmDashboard": "CRM ਡੈਸ਼ਬੋਰਡ",
  "galleryPage.projects.orderDashboard": "ਆਰਡਰ ਡੈਸ਼ਬੋਰਡ",
  "galleryPage.projects.projectDashboard": "ਪ੍ਰੋਜੈਕਟ ਡੈਸ਼ਬੋਰਡ",
  "galleryPage.projects.webAnalytics": "ਵੈੱਬ ਵਿਸ਼ਲੇਸ਼ਣ",
  "galleryPage.projects.salesAnalytics": "ਵਿਕਰੀ ਵਿਸ਼ਲੇਸ਼ਣ",
  "galleryPage.projects.analyticsDashboard": "ਵਿਸ਼ਲੇਸ਼ਣ ਡੈਸ਼ਬੋਰਡ",
  "galleryPage.projects.performanceDashboard": "ਪ੍ਰਦਰਸ਼ਨ ਡੈਸ਼ਬੋਰਡ",
  "galleryPage.projects.businessAnalytics": "ਵਪਾਰਕ ਵਿਸ਼ਲੇਸ਼ਣ",
  "galleryPage.projects.wellnessMeditation": "ਤੰਦਰੁਸਤੀ ਅਤੇ ਧਿਆਨ",
  "galleryPage.projects.personalFinance": "ਨਿੱਜੀ ਵਿੱਤ",
  "galleryPage.projects.lifeOSProductivity": "LifeOS ਉਤਪਾਦਕਤਾ",
  "galleryPage.projects.digitalJournal": "ਡਿਜੀਟਲ ਜਰਨਲ",
  "galleryPage.projects.personalDashboard": "ਨਿੱਜੀ ਡੈਸ਼ਬੋਰਡ",
  "galleryPage.projects.taskDashboard": "ਕੰਮ ਡੈਸ਼ਬੋਰਡ",
  "galleryPage.projects.financeDashboard": "ਵਿੱਤ ਡੈਸ਼ਬੋਰਡ",
  "galleryPage.projects.dailyPlanner": "ਰੋਜ਼ਾਨਾ ਯੋਜਨਾਕਾਰ",
  "galleryPage.projects.cyberRunner": "ਸਾਈਬਰ ਰਨਰ",
  "galleryPage.projects.mysticForest": "ਰਹੱਸਮਈ ਜੰਗਲ",
  "galleryPage.projects.spaceOdyssey": "ਪੁਲਾੜ ਯਾਤਰਾ",
  "galleryPage.projects.neonCity": "ਨੀਓਨ ਸ਼ਹਿਰ",
  "galleryPage.projects.cellEvolution": "ਸੈੱਲ ਵਿਕਾਸ",
  "galleryPage.projects.detectiveDashboard": "ਜਾਸੂਸ ਡੈਸ਼ਬੋਰਡ",
  "galleryPage.projects.partyGames": "ਪਾਰਟੀ ਗੇਮਜ਼",
  "galleryPage.projects.driftRush": "ਡ੍ਰਿਫਟ ਰਸ਼"
};

var count = 0;
for (var key in translations) {
  setValue(pa, key, translations[key]);
  count++;
}

fs.writeFileSync('./src/translations/pa.json', JSON.stringify(pa, null, 2), 'utf8');
console.log('Phase 3 complete: Updated ' + count + ' translations');
