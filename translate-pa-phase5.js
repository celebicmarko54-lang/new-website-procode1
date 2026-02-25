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

const translations = {
  // SUPPORT PAGE
  "supportPage.badge": "ਸਹਾਇਤਾ ਕੇਂਦਰ",
  "supportPage.title": "ਅਸੀਂ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦੇ ਹਾਂ?",
  "supportPage.subtitle": "ਸਵਾਲ ਲੱਭੋ ਜਾਂ ਸਾਡੀ ਸਹਾਇਤਾ ਟੀਮ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
  "supportPage.searchPlaceholder": "ਕੋਈ ਸਵਾਲ ਪੁੱਛੋ ਜਾਂ ਵਿਸ਼ਾ ਖੋਜੋ...",
  "supportPage.categories.gettingStarted": "ਸ਼ੁਰੂ ਕਰਨਾ",
  "supportPage.categories.gettingStartedDesc": "ਮੂਲ ਗੱਲਾਂ ਅਤੇ ਆਪਣੀ ਪਹਿਲੀ ਐਪ ਬਣਾਉਣਾ ਸਿੱਖੋ",
  "supportPage.categories.billing": "ਬਿਲਿੰਗ ਅਤੇ ਯੋਜਨਾਵਾਂ",
  "supportPage.categories.billingDesc": "ਭੁਗਤਾਨ, ਸਬਸਕ੍ਰਿਪਸ਼ਨ ਅਤੇ ਕ੍ਰੈਡਿਟ",
  "supportPage.categories.technical": "ਤਕਨੀਕੀ ਸਹਾਇਤਾ",
  "supportPage.categories.technicalDesc": "ਬੱਗ, ਗਲਤੀਆਂ ਅਤੇ ਤਕਨੀਕੀ ਸਮੱਸਿਆਵਾਂ",
  "supportPage.categories.account": "ਖਾਤਾ ਪ੍ਰਬੰਧਨ",
  "supportPage.categories.accountDesc": "ਖਾਤਾ ਸੈਟਿੰਗਾਂ ਅਤੇ ਸੁਰੱਖਿਆ",
  "supportPage.categories.features": "ਫੀਚਰ ਬੇਨਤੀਆਂ",
  "supportPage.categories.featuresDesc": "ਨਵੇਂ ਫੀਚਰ ਸੁਝਾਓ ਅਤੇ ਫੀਡਬੈਕ ਦਿਓ",
  "supportPage.categories.deployment": "ਡਿਪਲੌਇਮੈਂਟ",
  "supportPage.categories.deploymentDesc": "ਆਪਣੀ ਐਪ ਲਾਂਚ ਅਤੇ ਹੋਸਟ ਕਰਨਾ",
  "supportPage.faq.title": "ਅਕਸਰ ਪੁੱਛੇ ਜਾਣ ਵਾਲੇ ਸਵਾਲ",
  "supportPage.faq.q1": "AppNode ਕੀ ਹੈ?",
  "supportPage.faq.q2": "ਕੀਮਤ ਕਿੰਨੀ ਹੈ?",
  "supportPage.faq.q3": "ਕੀ ਮੈਂ ਆਪਣਾ ਕੋਡ ਐਕਸਪੋਰਟ ਕਰ ਸਕਦਾ/ਸਕਦੀ ਹਾਂ?",
  "supportPage.faq.q4": "ਕੀ ਮੈਨੂੰ ਕੋਡਿੰਗ ਦਾ ਤਜਰਬਾ ਚਾਹੀਦਾ ਹੈ?",
  "supportPage.faq.q5": "ਕਿਹੜੀ ਤਕਨਾਲੋਜੀ ਸਟੈਕ ਵਰਤੀ ਜਾਂਦੀ ਹੈ?",
  "supportPage.faq.q6": "ਕੀ ਮੈਂ ਆਪਣੀ ਐਪ ਡਿਪਲੌਇ ਕਰ ਸਕਦਾ/ਸਕਦੀ ਹਾਂ?",
  "supportPage.faq.q7": "ਕੀ ਕਸਟਮ ਡੋਮੇਨ ਸਹਿਯੋਗੀ ਹਨ?",
  "supportPage.faq.q8": "ਕੀ ਟੀਮ ਸਹਿਯੋਗ ਉਪਲਬਧ ਹੈ?",
  "supportPage.faq.q9": "ਕੀ ਕੋਈ API ਹੈ?",
  "supportPage.faq.q10": "ਮੈਂ ਆਪਣਾ ਖਾਤਾ ਕਿਵੇਂ ਮਿਟਾਵਾਂ?",
  "supportPage.faq.q11": "ਮੈਂ ਪਾਸਵਰਡ ਕਿਵੇਂ ਰੀਸੈੱਟ ਕਰਾਂ?",
  "supportPage.faq.q12": "ਮੈਂ ਬੱਗ ਕਿਵੇਂ ਰਿਪੋਰਟ ਕਰਾਂ?",
  "supportPage.faq.q13": "ਬਿਲਿੰਗ ਬਾਰੇ ਕੀ?",
  "supportPage.faq.q14": "ਕੀ ਕੋਈ ਸਵਾਗਤ ਸੁਨੇਹਾ ਹੈ?",
  "supportPage.chatbot.placeholder": "ਆਪਣਾ ਸੁਨੇਹਾ ਟਾਈਪ ਕਰੋ...",
  "supportPage.chatbot.title": "ਲਾਈਵ ਚੈਟ ਸਹਾਇਤਾ",
  "supportPage.chatbot.online": "ਔਨਲਾਈਨ",
  "supportPage.chatbot.initialMessage": "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! 👋 ਮੈਂ ਤੁਹਾਡਾ AI ਸਹਾਇਕ ਹਾਂ। ਮੈਂ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?",
  "supportPage.contact.title": "ਅਜੇ ਵੀ ਮਦਦ ਚਾਹੀਦੀ ਹੈ?",
  "supportPage.contact.subtitle": "ਸਾਡੀ ਸਹਾਇਤਾ ਟੀਮ ਮਦਦ ਲਈ ਇੱਥੇ ਹੈ",
  "supportPage.contact.email": "ਸਾਨੂੰ ਈਮੇਲ ਕਰੋ",
  "supportPage.contact.emailDesc": "ਸਾਨੂੰ ਲਾਈਨ ਛੱਡੋ ਅਤੇ ਅਸੀਂ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰਾਂਗੇ",
  "supportPage.contact.discord": "Discord ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ",
  "supportPage.contact.discordDesc": "ਸਾਡੀ ਕਮਿਊਨਿਟੀ ਨਾਲ ਗੱਲ ਕਰੋ",
  "supportPage.contact.twitter": "ਸਾਨੂੰ ਟਵੀਟ ਕਰੋ",
  "supportPage.contact.twitterDesc": "ਸੋਸ਼ਲ ਮੀਡੀਆ 'ਤੇ ਸਾਡੇ ਨਾਲ ਜੁੜੋ",
  "supportPage.botGreeting": "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! 👋 ਮੈਂ AppNode ਸਹਾਇਕ ਹਾਂ। ਮੈਂ ਤੁਹਾਡੇ ਕਿਸੇ ਵੀ ਸਵਾਲ ਦਾ ਜਵਾਬ ਦੇਣ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ।",
  "supportPage.liveAgentMessage": "ਮੈਂ ਤੁਹਾਨੂੰ ਲਾਈਵ ਏਜੰਟ ਨਾਲ ਜੋੜ ਰਿਹਾ ਹਾਂ। ਕਿਰਪਾ ਕਰਕੇ ਉਡੀਕ ਕਰੋ...",
  "supportPage.fallbackMessage": "ਮੈਂ ਪੂਰੀ ਤਰ੍ਹਾਂ ਯਕੀਨੀ ਨਹੀਂ ਹਾਂ। ਕੀ ਤੁਸੀਂ ਲਾਈਵ ਏਜੰਟ ਨਾਲ ਗੱਲ ਕਰਨਾ ਚਾਹੋਗੇ?",
  "supportPage.talkToLiveAgent": "ਲਾਈਵ ਏਜੰਟ ਨਾਲ ਗੱਲ ਕਰੋ",
  "supportPage.askSomething": "ਕੁਝ ਪੁੱਛੋ...",
  "supportPage.emailLabel": "ਈਮੇਲ",
  "supportPage.faqAnswers.appnode": "AppNode ਇੱਕ AI-ਸੰਚਾਲਿਤ ਪਲੇਟਫਾਰਮ ਹੈ ਜੋ ਤੁਹਾਨੂੰ ਕੁਦਰਤੀ ਭਾਸ਼ਾ ਵਰਣਨ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਐਪਲੀਕੇਸ਼ਨਾਂ ਬਣਾਉਣ ਦਿੰਦਾ ਹੈ।",
  "supportPage.faqAnswers.pricing": "AppNode 2 ਮੁਫ਼ਤ ਜਨਰੇਸ਼ਨਾਂ ਨਾਲ ਸ਼ੁਰੂ ਕਰਨ ਅਤੇ ਫਿਰ ਕ੍ਰੈਡਿਟ ਪੈਕ ਜਾਂ Pro ਸਬਸਕ੍ਰਿਪਸ਼ਨ ਨਾਲ ਵਧਾਉਣ ਲਈ ਮੁਫ਼ਤ ਹੈ।",
  "supportPage.faqAnswers.export": "ਹਾਂ! ਤੁਸੀਂ ਕਿਸੇ ਵੀ ਸਮੇਂ ਆਪਣਾ ਪੂਰਾ ਸੋਰਸ ਕੋਡ ਐਕਸਪੋਰਟ ਕਰ ਸਕਦੇ ਹੋ।",
  "supportPage.faqAnswers.coding": "ਨਹੀਂ! AppNode ਕੋਡਿੰਗ ਅਤੇ ਗ਼ੈਰ-ਕੋਡਿੰਗ ਯੂਜ਼ਰਾਂ ਦੋਵਾਂ ਲਈ ਬਣਾਇਆ ਗਿਆ ਹੈ।",
  "supportPage.faqAnswers.techStack": "AppNode React, Next.js ਅਤੇ ਆਧੁਨਿਕ ਵੈੱਬ ਤਕਨਾਲੋਜੀਆਂ ਨਾਲ ਐਪਸ ਬਣਾਉਂਦਾ ਹੈ।",
  "supportPage.faqAnswers.deploy": "ਹਾਂ! ਤੁਸੀਂ ਇੱਕ ਕਲਿੱਕ ਨਾਲ ਡਿਪਲੌਇ ਕਰ ਸਕਦੇ ਹੋ ਜਾਂ ਆਪਣਾ ਕੋਡ ਐਕਸਪੋਰਟ ਕਰ ਸਕਦੇ ਹੋ।",
  "supportPage.faqAnswers.customDomain": "ਹਾਂ, Pro ਯੋਜਨਾ ਵਿੱਚ ਕਸਟਮ ਡੋਮੇਨ ਸ਼ਾਮਲ ਹਨ।",
  "supportPage.faqAnswers.team": "ਹਾਂ! AppNode ਰੀਅਲ-ਟਾਈਮ ਟੀਮ ਸਹਿਯੋਗ ਦਾ ਸਮਰਥਨ ਕਰਦਾ ਹੈ।",
  "supportPage.faqAnswers.api": "ਹਾਂ, AppNode ਡਿਵੈਲਪਰ API ਪਹੁੰਚ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।",
  "supportPage.faqAnswers.deleteAccount": "ਸੈਟਿੰਗਾਂ > ਖਾਤਾ > ਖਾਤਾ ਮਿਟਾਓ 'ਤੇ ਜਾਓ।",
  "supportPage.faqAnswers.password": "ਲੌਗਿਨ ਪੇਜ 'ਤੇ 'ਪਾਸਵਰਡ ਭੁੱਲ ਗਏ?' 'ਤੇ ਕਲਿੱਕ ਕਰੋ।",
  "supportPage.faqAnswers.bug": "support@appnode.ai 'ਤੇ ਬੱਗ ਰਿਪੋਰਟ ਕਰੋ।",
  "supportPage.faqAnswers.billing": "ਸਾਰੇ ਬਿਲਿੰਗ ਸਵਾਲ billing@appnode.ai 'ਤੇ ਭੇਜੋ।",
  "supportPage.faqAnswers.greeting": "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਅੱਜ ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?",

  // DOCS PAGE
  "docsPage.badge": "ਦਸਤਾਵੇਜ਼",
  "docsPage.title": "ਦਸਤਾਵੇਜ਼",
  "docsPage.subtitle": "AppNode ਸਿੱਖਣ ਅਤੇ ਬਣਾਉਣ ਲਈ ਤੁਹਾਡੀ ਗਾਈਡ",
  "docsPage.searchPlaceholder": "ਦਸਤਾਵੇਜ਼ ਖੋਜੋ...",
  "docsPage.categories.gettingStarted": "ਸ਼ੁਰੂ ਕਰਨਾ",
  "docsPage.categories.gettingStartedDesc": "ਮੂਲ ਗੱਲਾਂ ਸਿੱਖੋ ਅਤੇ ਆਪਣੀ ਪਹਿਲੀ ਐਪ ਬਣਾਓ",
  "docsPage.categories.coreFeatures": "ਮੁੱਖ ਫੀਚਰ",
  "docsPage.categories.coreFeaturesDesc": "AppNode ਦੀਆਂ ਸਾਰੀਆਂ ਸ਼ਕਤੀਸ਼ਾਲੀ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਖੋਜੋ",
  "docsPage.categories.deployment": "ਡਿਪਲੌਇਮੈਂਟ",
  "docsPage.categories.deploymentDesc": "ਆਪਣੀਆਂ ਐਪਲੀਕੇਸ਼ਨਾਂ ਲਾਈਵ ਕਰੋ",
  "docsPage.categories.apiReference": "API ਹਵਾਲਾ",

  // BLOG PAGE
  "blogPage.badge": "ਬਲਾਗ",
  "blogPage.title": "ਨਵੀਨਤਮ ਅੱਪਡੇਟ",
  "blogPage.subtitle": "AppNode ਟੀਮ ਤੋਂ ਖ਼ਬਰਾਂ, ਟਿਊਟੋਰੀਅਲ ਅਤੇ ਇਨਸਾਈਟਸ",
  "blogPage.searchPlaceholder": "ਬਲਾਗ ਵਿੱਚ ਖੋਜੋ...",
  "blogPage.featured": "ਫੀਚਰਡ",
  "blogPage.readArticle": "ਲੇਖ ਪੜ੍ਹੋ",
  "blogPage.readMore": "ਹੋਰ ਪੜ੍ਹੋ",
  "blogPage.categories.all": "ਸਭ",
  "blogPage.categories.updates": "ਅੱਪਡੇਟ",
  "blogPage.categories.tutorials": "ਟਿਊਟੋਰੀਅਲ",
  "blogPage.categories.engineering": "ਇੰਜੀਨੀਅਰਿੰਗ",
  "blogPage.categories.community": "ਕਮਿਊਨਿਟੀ",
  "blogPage.posts.post1.title": "AppNode Agent ਪੇਸ਼: AI ਨਾਲ 10 ਗੁਣਾ ਤੇਜ਼ ਐਪਸ ਬਣਾਓ",
  "blogPage.posts.post1.excerpt": "ਅਸੀਂ AppNode Agent ਦੀ ਘੋਸ਼ਣਾ ਕਰਕੇ ਖੁਸ਼ ਹਾਂ, ਸਾਡਾ ਸਭ ਤੋਂ ਆਧੁਨਿਕ AI ਡਿਵੈਲਪਮੈਂਟ ਅਸਿਸਟੈਂਟ।",
  "blogPage.posts.post1.category": "ਅੱਪਡੇਟ",
  "blogPage.posts.post1.readTime": "5 ਮਿੰਟ ਪੜ੍ਹੋ",
  "blogPage.posts.post2.title": "AppNode ਨਾਲ ਪੂਰੀ-ਸਟੈਕ ਐਪ ਬਣਾਉਣਾ",
  "blogPage.posts.post2.excerpt": "ਵਿਆਪਕ ਕਦਮ-ਦਰ-ਕਦਮ ਗਾਈਡ।",
  "blogPage.posts.post2.category": "ਟਿਊਟੋਰੀਅਲ",
  "blogPage.posts.post2.readTime": "8 ਮਿੰਟ ਪੜ੍ਹੋ",
  "blogPage.posts.post3.title": "AI ਨੋ-ਕੋਡ ਦਾ ਭਵਿੱਖ",
  "blogPage.posts.post3.excerpt": "ਅਸੀਂ ਕਿਵੇਂ ਸੋਚਦੇ ਹਾਂ ਕਿ AI ਸਾਫਟਵੇਅਰ ਡਿਵੈਲਪਮੈਂਟ ਨੂੰ ਬਦਲੇਗਾ।",
  "blogPage.posts.post3.category": "ਇੰਜੀਨੀਅਰਿੰਗ",
  "blogPage.posts.post3.readTime": "6 ਮਿੰਟ ਪੜ੍ਹੋ",
  "blogPage.posts.post4.title": "ਕਮਿਊਨਿਟੀ ਸਪੌਟਲਾਈਟ: ਚੋਟੀ ਦੇ ਪ੍ਰੋਜੈਕਟ",
  "blogPage.posts.post4.excerpt": "ਸਾਡੀ ਕਮਿਊਨਿਟੀ ਦੇ ਸ਼ਾਨਦਾਰ ਪ੍ਰੋਜੈਕਟ ਦੇਖੋ।",
  "blogPage.posts.post4.category": "ਕਮਿਊਨਿਟੀ",
  "blogPage.posts.post4.readTime": "4 ਮਿੰਟ ਪੜ੍ਹੋ",
  "blogPage.posts.post5.title": "ਐਡਵਾਂਸਡ ਡੇਟਾਬੇਸ ਪੈਟਰਨ",
  "blogPage.posts.post5.excerpt": "ਆਪਣੀਆਂ AppNode ਐਪਸ ਲਈ ਐਡਵਾਂਸਡ ਡੇਟਾਬੇਸ ਤਕਨੀਕਾਂ ਸਿੱਖੋ।",
  "blogPage.posts.post5.category": "ਟਿਊਟੋਰੀਅਲ",
  "blogPage.posts.post5.readTime": "7 ਮਿੰਟ ਪੜ੍ਹੋ",
  "blogPage.posts.post6.title": "AppNode 2.0: ਨਵਾਂ ਕੀ ਹੈ",
  "blogPage.posts.post6.excerpt": "ਨਵੀਆਂ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਅਤੇ ਸੁਧਾਰ ਖੋਜੋ।",
  "blogPage.posts.post6.category": "ਅੱਪਡੇਟ",
  "blogPage.posts.post6.readTime": "5 ਮਿੰਟ ਪੜ੍ਹੋ",
  "blogPage.newsletter.title": "ਅੱਪਡੇਟ ਰਹੋ",
  "blogPage.newsletter.subtitle": "ਨਵੀਨਤਮ ਖ਼ਬਰਾਂ ਅਤੇ ਟਿਊਟੋਰੀਅਲ ਆਪਣੇ ਇਨਬਾਕਸ ਵਿੱਚ ਪ੍ਰਾਪਤ ਕਰੋ।",
  "blogPage.newsletter.placeholder": "ਆਪਣਾ ਈਮੇਲ ਦਰਜ ਕਰੋ",
  "blogPage.newsletter.subscribe": "ਸਬਸਕ੍ਰਾਈਬ ਕਰੋ",
  "blogPage.newsletter.privacy": "ਅਸੀਂ ਤੁਹਾਡੀ ਗੋਪਨੀਯਤਾ ਦਾ ਸਤਿਕਾਰ ਕਰਦੇ ਹਾਂ। ਕਿਸੇ ਵੀ ਸਮੇਂ ਅਨਸਬਸਕ੍ਰਾਈਬ ਕਰੋ।",

  // CAREERS PAGE
  "careersPage.badge": "ਨੌਕਰੀਆਂ",
  "careersPage.title": "ਸ਼ਾਮਲ ਹੋਵੋ AppNode ਟੀਮ",
  "careersPage.subtitle": "ਸਾਫਟਵੇਅਰ ਡਿਵੈਲਪਮੈਂਟ ਦਾ ਭਵਿੱਖ ਬਣਾਉਣ ਵਿੱਚ ਸਾਡੀ ਮਦਦ ਕਰੋ।",
  "careersPage.viewOpenings": "ਖੁੱਲ੍ਹੀਆਂ ਅਸਾਮੀਆਂ ਦੇਖੋ",
  "careersPage.valuesTitle": "ਸਾਡੀਆਂ ਕਦਰਾਂ-ਕੀਮਤਾਂ",
  "careersPage.valuesSubtitle": "ਉਹ ਸਿਧਾਂਤ ਜੋ ਸਾਡੇ ਕੰਮ ਅਤੇ ਸੱਭਿਆਚਾਰ ਦੀ ਅਗਵਾਈ ਕਰਦੇ ਹਨ।",
  "careersPage.openingsTitle": "ਖੁੱਲ੍ਹੀਆਂ ਅਸਾਮੀਆਂ",
  "careersPage.applyNow": "ਹੁਣ ਅਰਜ਼ੀ ਦਿਓ",
  "careersPage.benefitsTitle": "ਫਾਇਦੇ ਅਤੇ ਸਹੂਲਤਾਂ",
  "careersPage.benefitsSubtitle": "ਅਸੀਂ ਆਪਣੀ ਟੀਮ ਦੀ ਦੇਖਭਾਲ ਕਰਦੇ ਹਾਂ",
  "careersPage.ctaTitle": "ਕੁਝ ਦਿਲਚਸਪ ਨਹੀਂ ਲੱਭਿਆ?",
  "careersPage.ctaDescription": "ਅਸੀਂ ਹਮੇਸ਼ਾ ਪ੍ਰਤਿਭਾਸ਼ਾਲੀ ਲੋਕਾਂ ਨਾਲ ਜੁੜਨਾ ਪਸੰਦ ਕਰਦੇ ਹਾਂ। ਸਾਨੂੰ ਆਪਣੀ ਜਾਣ-ਪਛਾਣ ਭੇਜੋ।",

  // COMMUNITY PAGE
  "communityPage.badge": "ਕਮਿਊਨਿਟੀ",
  "communityPage.title": "ਬਿਲਡਰ ਕਮਿਊਨਿਟੀ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ",
  "communityPage.subtitle": "ਦੁਨੀਆ ਭਰ ਦੇ ਡਿਵੈਲਪਰਾਂ ਅਤੇ ਸਿਰਜਣਹਾਰਾਂ ਨਾਲ ਜੁੜੋ, ਸਿੱਖੋ ਅਤੇ ਸ਼ੇਅਰ ਕਰੋ।",
  "communityPage.stats.members": "ਮੈਂਬਰ",
  "communityPage.stats.projectsShared": "ਸ਼ੇਅਰ ਕੀਤੇ ਪ੍ਰੋਜੈਕਟ",
  "communityPage.stats.messagesPerDay": "ਪ੍ਰਤੀ ਦਿਨ ਸੁਨੇਹੇ",
  "communityPage.stats.countries": "ਦੇਸ਼",
  "communityPage.channels.general": "ਆਮ",
  "communityPage.channels.generalDesc": "ਆਮ ਚਰਚਾ ਅਤੇ ਜਾਣ-ਪਛਾਣ",
  "communityPage.channels.showAndTell": "ਦਿਖਾਓ ਅਤੇ ਦੱਸੋ",
  "communityPage.channels.showAndTellDesc": "ਆਪਣੇ ਪ੍ਰੋਜੈਕਟ ਅਤੇ ਬਣਾਵਟ ਸ਼ੇਅਰ ਕਰੋ",
  "communityPage.channels.helpSupport": "ਮਦਦ ਅਤੇ ਸਹਾਇਤਾ",
  "communityPage.channels.helpSupportDesc": "ਕਮਿਊਨਿਟੀ ਤੋਂ ਮਦਦ ਲਵੋ",
  "communityPage.channels.featureRequests": "ਫੀਚਰ ਬੇਨਤੀਆਂ",
  "communityPage.channels.featureRequestsDesc": "ਨਵੇਂ ਫੀਚਰ ਸੁਝਾਓ ਅਤੇ ਵੋਟ ਕਰੋ",
  "communityPage.joinDiscord": "Discord ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ",

  // GALLERY PAGE
  "galleryPage.title": "ਪ੍ਰੋਜੈਕਟ ਗੈਲਰੀ",
  "galleryPage.subtitle": "ਸਾਡੀ ਕਮਿਊਨਿਟੀ ਦੁਆਰਾ AppNode ਨਾਲ ਬਣਾਏ ਸ਼ਾਨਦਾਰ ਪ੍ਰੋਜੈਕਟ ਖੋਜੋ",
  "galleryPage.categories.all": "ਸਭ",
  "galleryPage.categories.aiApps": "AI ਐਪਸ",
  "galleryPage.categories.websites": "ਵੈੱਬਸਾਈਟਾਂ",
  "galleryPage.categories.businessApps": "ਕਾਰੋਬਾਰੀ ਐਪਸ",
  "galleryPage.categories.personalSoftware": "ਨਿੱਜੀ ਸਾਫਟਵੇਅਰ",
  "galleryPage.categories.games": "ਗੇਮਾਂ",
  "galleryPage.viewProject": "ਪ੍ਰੋਜੈਕਟ ਦੇਖੋ",
  "galleryPage.likes": "ਪਸੰਦ",
  "galleryPage.views": "ਵਿਊਜ਼",
  "galleryPage.projects.project1.title": "AI ਚੈਟ ਬੌਟ",
  "galleryPage.projects.project1.description": "ਬੁੱਧੀਮਾਨ ਗਾਹਕ ਸੇਵਾ ਬੌਟ",
  "galleryPage.projects.project1.author": "ਸਾਰਾ ਚੇਨ",
  "galleryPage.projects.project2.title": "ਈ-ਕਾਮਰਸ ਸਟੋਰ",
  "galleryPage.projects.project2.description": "ਪੂਰਾ-ਫੀਚਰਡ ਔਨਲਾਈਨ ਸਟੋਰ",
  "galleryPage.projects.project2.author": "ਮਾਈਕ ਰੋਡਰੀਗੇਜ਼",
  "galleryPage.projects.project3.title": "ਪ੍ਰੋਜੈਕਟ ਡੈਸ਼ਬੋਰਡ",
  "galleryPage.projects.project3.description": "ਟੀਮ ਪ੍ਰੋਜੈਕਟ ਮੈਨੇਜਮੈਂਟ ਟੂਲ",
  "galleryPage.projects.project3.author": "ਏਮਾ ਵਿਲਸਨ",
  "galleryPage.projects.project4.title": "ਫਿਟਨੈਸ ਟ੍ਰੈਕਰ",
  "galleryPage.projects.project4.description": "ਨਿੱਜੀ ਸਿਹਤ ਅਤੇ ਫਿਟਨੈਸ ਐਪ",
  "galleryPage.projects.project4.author": "ਅਲੈਕਸ ਕਿਮ",
  "galleryPage.projects.project5.title": "ਰੈਸਿਪੀ ਫਾਈਂਡਰ",
  "galleryPage.projects.project5.description": "AI-ਸੰਚਾਲਿਤ ਰੈਸਿਪੀ ਸੁਝਾਅ",
  "galleryPage.projects.project5.author": "ਲੀਜ਼ਾ ਪਾਰਕ",
  "galleryPage.projects.project6.title": "ਮੌਸਮ ਐਪ",
  "galleryPage.projects.project6.description": "ਰੀਅਲ-ਟਾਈਮ ਮੌਸਮ ਜਾਣਕਾਰੀ",
  "galleryPage.projects.project6.author": "ਟੌਮ ਬ੍ਰਾਊਨ",
  "galleryPage.projects.project7.title": "ਟਾਸਕ ਮੈਨੇਜਰ",
  "galleryPage.projects.project7.description": "ਸਮਾਰਟ ਕੰਮ ਪ੍ਰਬੰਧਨ ਐਪ",
  "galleryPage.projects.project7.author": "ਮਾਇਆ ਜਾਨਸਨ",
  "galleryPage.projects.project8.title": "ਪੋਰਟਫੋਲੀਓ ਸਾਈਟ",
  "galleryPage.projects.project8.description": "ਆਧੁਨਿਕ ਡਿਵੈਲਪਰ ਪੋਰਟਫੋਲੀਓ",
  "galleryPage.projects.project8.author": "ਜੇਮਸ ਲੀ",
  "galleryPage.projects.project9.title": "ਸਪੇਸ ਸ਼ੂਟਰ",
  "galleryPage.projects.project9.description": "ਕਲਾਸਿਕ ਆਰਕੇਡ-ਸਟਾਈਲ ਗੇਮ",
  "galleryPage.projects.project9.author": "ਕ੍ਰਿਸ ਮਾਰਟਿਨ",
  "galleryPage.projects.project10.title": "ਸੋਸ਼ਲ ਫੀਡ",
  "galleryPage.projects.project10.description": "ਸੋਸ਼ਲ ਮੀਡੀਆ ਫੀਡ ਐਗ੍ਰੀਗੇਟਰ",
  "galleryPage.projects.project10.author": "ਅੰਨਾ ਮੂਲਰ",
  "galleryPage.projects.project11.title": "ਬਜਟ ਪਲੈਨਰ",
  "galleryPage.projects.project11.description": "ਨਿੱਜੀ ਵਿੱਤ ਮੈਨੇਜਰ",
  "galleryPage.projects.project11.author": "ਡੇਵਿਡ ਲੀ",
  "galleryPage.projects.project12.title": "ਕੁਇਜ਼ ਐਪ",
  "galleryPage.projects.project12.description": "ਇੰਟਰਐਕਟਿਵ ਟ੍ਰਾਈਵੀਆ ਗੇਮ",
  "galleryPage.projects.project12.author": "ਸੋਫੀ ਡੁਬੋਆ",

  // SOLUTIONS PAGE
  "solutionsPage.badge": "ਹੱਲ",
  "solutionsPage.title": "ਤੁਹਾਡੇ ਕੰਮ ਦੇ ਤਰੀਕੇ ਲਈ ਬਣਾਇਆ",
  "solutionsPage.subtitle": "ਚਾਹੇ ਤੁਸੀਂ ਬਾਨੀ ਹੋ, ਡਿਜ਼ਾਈਨਰ, ਜਾਂ ਮਾਰਕੀਟਰ, AppNode ਤੁਹਾਡੇ ਵਰਕਫਲੋ ਅਨੁਸਾਰ ਢਲਦਾ ਹੈ।",
  "solutionsPage.founders.tagline": "ਤੇਜ਼ੀ ਨਾਲ ਲਾਂਚ ਕਰੋ, ਸਮਝਦਾਰੀ ਨਾਲ ਸੁਧਾਰੋ",
  "solutionsPage.founders.description": "ਆਪਣੇ ਵਿਜ਼ਨ ਨੂੰ ਦਿਨਾਂ ਵਿੱਚ ਕੰਮ ਕਰਦੀਆਂ ਪ੍ਰੋਡਕਟਸ ਵਿੱਚ ਬਦਲੋ, ਮਹੀਨਿਆਂ ਵਿੱਚ ਨਹੀਂ।",
  "solutionsPage.designers.tagline": "ਡਿਜ਼ਾਈਨ ਤੋਂ ਪ੍ਰੋਡਕਸ਼ਨ ਮਿੰਟਾਂ ਵਿੱਚ",
  "solutionsPage.designers.description": "ਡਿਜ਼ਾਈਨ ਅਤੇ ਡਿਵੈਲਪਮੈਂਟ ਵਿਚਕਾਰ ਅੰਤਰ ਖ਼ਤਮ ਕਰੋ।",
  "solutionsPage.marketers.tagline": "ਲੈਂਡਿੰਗ ਪੇਜ਼ ਅਤੇ ਕੈਂਪੇਨ ਤੇਜ਼ੀ ਨਾਲ",
};

let count = 0;
for (const [key, val] of Object.entries(translations)) {
  setVal(pa, key, val);
  count++;
}

// CAREERS PAGE - arrays (direct assignment)
if (!pa.careersPage) pa.careersPage = {};

pa.careersPage.openings = [
  { title: "ਸੀਨੀਅਰ ਫੁੱਲਸਟੈਕ ਇੰਜੀਨੀਅਰ", department: "ਇੰਜੀਨੀਅਰਿੰਗ", location: "ਰਿਮੋਟ", type: "ਪੂਰਾ ਸਮਾਂ", description: "ਸਾਡੇ ਮੁੱਖ ਪਲੇਟਫਾਰਮ ਅਤੇ AI ਫੀਚਰ ਬਣਾਓ।" },
  { title: "ਪ੍ਰੋਡਕਟ ਡਿਜ਼ਾਈਨਰ", department: "ਡਿਜ਼ਾਈਨ", location: "ਰਿਮੋਟ", type: "ਪੂਰਾ ਸਮਾਂ", description: "ਸੁੰਦਰ, ਅਨੁਭਵੀ ਇੰਟਰਫੇਸ ਡਿਜ਼ਾਈਨ ਕਰੋ।" },
  { title: "DevOps ਇੰਜੀਨੀਅਰ", department: "ਇੰਫ੍ਰਾਸਟ੍ਰਕਚਰ", location: "ਰਿਮੋਟ", type: "ਪੂਰਾ ਸਮਾਂ", description: "ਸਾਡੇ ਕਲਾਊਡ ਇਨਫ੍ਰਾ ਨੂੰ ਸਕੇਲ ਅਤੇ ਅਨੁਕੂਲ ਬਣਾਓ।" },
  { title: "AI/ML ਇੰਜੀਨੀਅਰ", department: "AI", location: "ਰਿਮੋਟ", type: "ਪੂਰਾ ਸਮਾਂ", description: "ਸਾਡੇ AI ਕੋਡ ਜਨਰੇਸ਼ਨ ਮਾਡਲ ਅੱਗੇ ਵਧਾਓ।" }
];
count += 4;

pa.careersPage.benefits = [
  { icon: "💰", title: "ਮੁਕਾਬਲੇਬਾਜ਼ ਤਨਖ਼ਾਹ", description: "ਉਹ ਤਨਖ਼ਾਹ ਜੋ ਤੁਹਾਡੇ ਯੋਗ ਹੈ" },
  { icon: "🏠", title: "ਰਿਮੋਟ ਫਸਟ", description: "ਦੁਨੀਆ ਵਿੱਚ ਕਿਤੇ ਵੀ ਕੰਮ ਕਰੋ" },
  { icon: "📈", title: "ਇਕੁਇਟੀ", description: "ਸਾਡੀ ਸਫ਼ਲਤਾ ਵਿੱਚ ਹਿੱਸਾ ਲਓ" },
  { icon: "🏥", title: "ਸਿਹਤ ਬੀਮਾ", description: "ਵਿਆਪਕ ਕਵਰੇਜ" },
  { icon: "📚", title: "ਸਿੱਖਣ ਦਾ ਬਜਟ", description: "ਕੋਰਸ, ਕਾਨਫ਼ਰੰਸ, ਕਿਤਾਬਾਂ" },
  { icon: "🌴", title: "ਅਸੀਮਤ PTO", description: "ਜਦੋਂ ਚਾਹੋ ਆਰਾਮ ਕਰੋ" }
];
count += 6;

pa.careersPage.companyValues = [
  { icon: "🚀", title: "ਨਵੀਨਤਾ ਪਹਿਲਾਂ", description: "ਅਸੀਂ ਸੀਮਾਵਾਂ ਤੋੜਦੇ ਹਾਂ ਅਤੇ ਨਵੀਨਤਮ ਤਕਨਾਲੋਜੀ ਅਪਣਾਉਂਦੇ ਹਾਂ।" },
  { icon: "👥", title: "ਟੀਮ ਫਸਟ", description: "ਮਿਲ ਕੇ ਅਸੀਂ ਵੱਡਾ ਬਣਾਉਂਦੇ ਹਾਂ।" },
  { icon: "🎯", title: "ਯੂਜ਼ਰ ਕੇਂਦ੍ਰਿਤ", description: "ਹਰ ਫੈਸਲਾ ਸਾਡੇ ਯੂਜ਼ਰਾਂ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ।" },
  { icon: "🌍", title: "ਗਲੋਬਲ ਪ੍ਰਭਾਵ", description: "ਅਸੀਂ ਦੁਨੀਆ ਭਰ ਦੇ ਸਿਰਜਣਹਾਰਾਂ ਨੂੰ ਸ਼ਕਤੀ ਦਿੰਦੇ ਹਾਂ।" }
];
count += 4;

// SOLUTIONS PAGE - solutionCards array
if (!pa.solutionsPage) pa.solutionsPage = {};

pa.solutionsPage.solutionCards = [
  {
    title: "ਬਾਨੀਆਂ ਲਈ",
    tagline: "ਤੇਜ਼ੀ ਨਾਲ ਲਾਂਚ ਕਰੋ, ਸਮਝਦਾਰੀ ਨਾਲ ਸੁਧਾਰੋ",
    description: "ਆਪਣੇ ਵਿਜ਼ਨ ਨੂੰ ਦਿਨਾਂ ਵਿੱਚ ਕੰਮ ਕਰਦੀਆਂ ਪ੍ਰੋਡਕਟਸ ਵਿੱਚ ਬਦਲੋ, ਮਹੀਨਿਆਂ ਵਿੱਚ ਨਹੀਂ। AppNode ਦਾ AI ਪਲੇਟਫਾਰਮ ਤੁਹਾਨੂੰ ਤਕਨੀਕੀ ਸਹਿ-ਬਾਨੀ ਤੋਂ ਬਿਨਾਂ ਬਣਾਉਣ, ਟੈਸਟ ਕਰਨ ਅਤੇ ਲਾਂਚ ਕਰਨ ਦਿੰਦਾ ਹੈ।",
    features: ["ਦਿਨਾਂ ਵਿੱਚ MVPs ਲਾਂਚ ਕਰੋ", "ਤੇਜ਼ ਪ੍ਰੋਟੋਟਾਈਪਿੰਗ", "ਏਕੀਕ੍ਰਿਤ ਐਨਾਲਿਟਿਕਸ", "ਇੱਕ-ਕਲਿੱਕ ਡਿਪਲੌਇਮੈਂਟ"],
    testimonial: { quote: "ਅਸੀਂ AppNode ਨਾਲ ਆਪਣਾ ਪੂਰਾ MVP 2 ਹਫ਼ਤਿਆਂ ਵਿੱਚ ਬਣਾਇਆ। ਜੋ $50K ਖ਼ਰਚ ਹੋਣਾ ਸੀ ਉਹ ਬਹੁਤ ਘੱਟ ਵਿੱਚ ਹੋ ਗਿਆ।", author: "ਜੇਸਨ ਪਾਰਕ", role: "ਬਾਨੀ, ਟੈੱਕ ਸਟਾਰਟਅੱਪ" },
    learnMore: "ਹੋਰ ਜਾਣੋ",
    link: "/solutions/founders"
  },
  {
    title: "ਡਿਜ਼ਾਈਨਰਾਂ ਲਈ",
    tagline: "ਡਿਜ਼ਾਈਨ ਤੋਂ ਪ੍ਰੋਡਕਸ਼ਨ ਮਿੰਟਾਂ ਵਿੱਚ",
    description: "ਡਿਜ਼ਾਈਨ ਅਤੇ ਡਿਵੈਲਪਮੈਂਟ ਵਿਚਕਾਰ ਅੰਤਰ ਖ਼ਤਮ ਕਰੋ। ਆਪਣੇ ਡਿਜ਼ਾਈਨ ਇੰਪੋਰਟ ਕਰੋ ਅਤੇ ਉਹਨਾਂ ਨੂੰ ਪਿਕਸਲ-ਪਰਫੈਕਟ, ਰਿਸਪੌਂਸਿਵ ਐਪਲੀਕੇਸ਼ਨਾਂ ਵਿੱਚ ਬਦਲਦੇ ਦੇਖੋ।",
    features: ["Figma ਇੰਪੋਰਟ", "ਡਿਜ਼ਾਈਨ ਤੋਂ ਕੋਡ", "ਕੰਪੋਨੈਂਟ ਲਾਇਬ੍ਰੇਰੀ", "ਰਿਸਪੌਂਸਿਵ ਲੇਆਉਟ"],
    testimonial: { quote: "ਇੱਕ ਡਿਜ਼ਾਈਨਰ ਹੋਣ ਦੇ ਨਾਤੇ, ਹੁਣ ਮੈਂ ਇੰਜੀਨੀਅਰਿੰਗ ਦੀ ਉਡੀਕ ਕੀਤੇ ਬਿਨਾਂ ਆਪਣੇ ਵਿਚਾਰ ਸ਼ਿਪ ਕਰ ਸਕਦੀ ਹਾਂ।", author: "ਏਮਾ ਚੇਨ", role: "ਲੀਡ ਡਿਜ਼ਾਈਨਰ, DesignCo" },
    learnMore: "ਹੋਰ ਜਾਣੋ",
    link: "/solutions/designers"
  },
  {
    title: "ਮਾਰਕੀਟਰਾਂ ਲਈ",
    tagline: "ਲੈਂਡਿੰਗ ਪੇਜ਼ ਅਤੇ ਕੈਂਪੇਨ ਤੇਜ਼ੀ ਨਾਲ",
    description: "ਹਰ ਕੈਂਪੇਨ ਲਈ ਲੈਂਡਿੰਗ ਪੇਜ਼ ਅਤੇ ਮਾਰਕੀਟਿੰਗ ਟੂਲ ਬਣਾਓ। ਕੋਡਿੰਗ ਗਿਆਨ ਦੀ ਲੋੜ ਨਹੀਂ।",
    features: ["ਲੈਂਡਿੰਗ ਪੇਜ਼ ਬਿਲਡਰ", "A/B ਟੈਸਟਿੰਗ", "ਐਨਾਲਿਟਿਕਸ ਡੈਸ਼ਬੋਰਡ", "ਲੀਡ ਕੈਪਚਰ ਫਾਰਮ"],
    testimonial: { quote: "ਮੈਂ ਹੁਣ ਡਿਵੈਲਪਰ ਦੀ ਲੋੜ ਤੋਂ ਬਿਨਾਂ ਆਪਣੇ ਲੈਂਡਿੰਗ ਪੇਜ਼ ਲਾਂਚ ਕਰ ਸਕਦੀ ਹਾਂ।", author: "ਰੀਚਲ ਕਿਮ", role: "ਮਾਰਕੀਟਿੰਗ ਡਾਇਰੈਕਟਰ, GrowthCo" },
    learnMore: "ਹੋਰ ਜਾਣੋ",
    link: "/solutions/marketers"
  }
];
count += 3;

fs.writeFileSync(PA_PATH, JSON.stringify(pa, null, 2), 'utf8');

console.log(`Phase 5 complete: ${count} keys/entries added to pa.json`);
