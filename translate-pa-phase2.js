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

const pa = JSON.parse(fs.readFileSync(PA_PATH, 'utf-8'));

const translations = {
  // ── products section (21 keys) ──
  'products.subtitle': 'ਤੁਹਾਡੀਆਂ ਐਪਲੀਕੇਸ਼ਨਾਂ ਬਣਾਉਣ, ਡਿਪਲੌਇ ਅਤੇ ਸਕੇਲ ਕਰਨ ਲਈ ਸ਼ਕਤੀਸ਼ਾਲੀ ਟੂਲ',
  'products.agent.title': 'AI ਏਜੰਟ',
  'products.agent.description': 'ਬੁੱਧੀਮਾਨ AI ਜੋ ਤੁਹਾਡੀਆਂ ਲੋੜਾਂ ਸਮਝਦਾ ਹੈ ਅਤੇ ਆਟੋਮੈਟਿਕ ਐਪਲੀਕੇਸ਼ਨਾਂ ਬਣਾਉਂਦਾ ਹੈ।',
  'products.agent.tagline': 'ਕੁਦਰਤੀ ਭਾਸ਼ਾ ਨਾਲ ਬਣਾਓ',
  'products.database.title': 'ਡੇਟਾਬੇਸ',
  'products.database.description': 'ਰੀਅਲ-ਟਾਈਮ ਸਿੰਕ ਅਤੇ ਆਟੋਮੈਟਿਕ ਬੈਕਅੱਪ ਨਾਲ ਸਕੇਲੇਬਲ, ਸੁਰੱਖਿਅਤ ਡੇਟਾਬੇਸ।',
  'products.database.tagline': 'ਤੁਹਾਡਾ ਡੇਟਾ, ਪ੍ਰਬੰਧਿਤ',
  'products.design.title': 'ਡਿਜ਼ਾਈਨ ਸਟੂਡੀਓ',
  'products.design.description': 'ਬਿਨਾਂ ਕੋਡ ਦੇ ਸ਼ਾਨਦਾਰ ਇੰਟਰਫੇਸ ਬਣਾਉਣ ਲਈ ਵਿਜ਼ੂਅਲ ਡਿਜ਼ਾਈਨ ਟੂਲ।',
  'products.design.tagline': 'ਸੁੰਦਰ ਡਿਜ਼ਾਈਨ ਕਰੋ',
  'products.integrations.title': 'ਇੰਟੀਗ੍ਰੇਸ਼ਨਜ਼',
  'products.integrations.description': 'ਪ੍ਰੀ-ਬਿਲਟ ਕਨੈਕਟਰਾਂ ਨਾਲ ਹਜ਼ਾਰਾਂ ਸੇਵਾਵਾਂ ਅਤੇ APIs ਨਾਲ ਜੁੜੋ।',
  'products.integrations.tagline': 'ਸਭ ਕੁਝ ਜੋੜੋ',
  'products.mobile.title': 'ਮੋਬਾਈਲ',
  'products.mobile.description': 'ਇੱਕ ਸਿੰਗਲ ਪ੍ਰੋਜੈਕਟ ਤੋਂ iOS ਅਤੇ Android ਲਈ ਨੇਟਿਵ ਮੋਬਾਈਲ ਐਪਸ ਬਣਾਓ।',
  'products.mobile.tagline': "ਮੋਬਾਈਲ 'ਤੇ ਜਾਓ",
  'products.publish.title': 'ਪਬਲਿਸ਼',
  'products.publish.description': "SSL ਅਤੇ CDN ਸਮੇਤ ਕਸਟਮ ਡੋਮੇਨਾਂ 'ਤੇ ਇੱਕ-ਕਲਿੱਕ ਡਿਪਲੌਇਮੈਂਟ।",
  'products.publish.tagline': 'ਤੇਜ਼ੀ ਨਾਲ ਸ਼ਿਪ ਕਰੋ',
  'products.security.description': 'SOC 2 ਮੁਤਾਬਕ ਅਤੇ SSO ਸਮਰਥਨ ਨਾਲ ਐਂਟਰਪ੍ਰਾਈਜ਼-ਗ੍ਰੇਡ ਸੁਰੱਖਿਆ।',
  'products.security.tagline': 'ਸੁਰੱਖਿਅਤ ਰਹੋ',

  // ── productAgent (30 keys) ──
  'productAgent.badge': 'AI-ਸੰਚਾਲਿਤ ਡਿਵੈਲਪਮੈਂਟ',
  'productAgent.title': 'ਮਿਲੋ AppNode',
  'productAgent.titleHighlight': 'ਏਜੰਟ',
  'productAgent.subtitle': 'ਤੁਹਾਡਾ AI ਕੋਡਿੰਗ ਸਾਥੀ ਜੋ ਪ੍ਰੋਡਕਸ਼ਨ-ਰੈਡੀ ਕੋਡ ਲਿਖਦਾ ਹੈ, ਪੂਰੀਆਂ ਐਪਲੀਕੇਸ਼ਨਾਂ ਬਣਾਉਂਦਾ ਹੈ, ਅਤੇ ਤੁਹਾਡੇ ਵਰਕਫਲੋ ਨੂੰ ਤੇਜ਼ ਕਰਦਾ ਹੈ।',
  'productAgent.startBuilding': 'ਮੁਫ਼ਤ ਬਣਾਉਣਾ ਸ਼ੁਰੂ ਕਰੋ',
  'productAgent.howItWorks': 'ਏਜੰਟ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ',
  'productAgent.demo.you': 'ਤੁਸੀਂ',
  'productAgent.demo.agent': 'ਏਜੰਟ',
  'productAgent.demo.prompt': 'ਯੂਜ਼ਰ ਐਨਾਲਿਟਿਕਸ, ਚਾਰਟ ਅਤੇ ਰੀਅਲ-ਟਾਈਮ ਡੇਟਾ ਨਾਲ ਡੈਸ਼ਬੋਰਡ ਬਣਾਓ',
  'productAgent.demo.response': 'ਮੈਂ ਤੁਹਾਡੇ ਲਈ ਇੱਕ ਵਿਆਪਕ ਐਨਾਲਿਟਿਕਸ ਡੈਸ਼ਬੋਰਡ ਬਣਾਵਾਂਗਾ...',
  'productAgent.demo.writing': 'ਏਜੰਟ ਕੋਡ ਲਿਖ ਰਿਹਾ ਹੈ...',
  'productAgent.demo.creating': 'ਕੰਪੋਨੈਂਟ ਬਣਾ ਰਿਹਾ ਹੈ, ਡੇਟਾ ਫੈਚਿੰਗ ਸੈੱਟ ਅੱਪ ਕਰ ਰਿਹਾ ਹੈ...',
  'productAgent.step1.title': 'ਆਪਣਾ ਵਿਜ਼ਨ ਦੱਸੋ',
  'productAgent.step1.description': 'ਏਜੰਟ ਨੂੰ ਸਾਦੀ ਭਾਸ਼ਾ ਵਿੱਚ ਦੱਸੋ ਕਿ ਤੁਸੀਂ ਕੀ ਬਣਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ। ਤਕਨੀਕੀ ਭਾਸ਼ਾ ਦੀ ਲੋੜ ਨਹੀਂ।',
  'productAgent.step2.title': 'ਬਣਦਾ ਦੇਖੋ',
  'productAgent.step2.description': 'ਏਜੰਟ ਰੀਅਲ-ਟਾਈਮ ਵਿੱਚ ਪ੍ਰੋਡਕਸ਼ਨ-ਰੈਡੀ ਕੋਡ ਲਿਖਦਾ ਹੈ। ਫਾਈਲਾਂ ਬਣਦੀਆਂ ਅਤੇ ਕੰਪੋਨੈਂਟ ਅਸੈਂਬਲ ਹੁੰਦੇ ਦੇਖੋ।',
  'productAgent.step3.title': 'ਦੁਹਰਾਓ ਅਤੇ ਸੁਧਾਰੋ',
  'productAgent.step3.description': 'ਬਿਲਕੁਲ ਸਹੀ ਨਹੀਂ? ਏਜੰਟ ਨੂੰ ਦੱਸੋ ਕੀ ਬਦਲਣਾ ਹੈ। ਇਹ ਸੰਦਰਭ ਸਮਝਦਾ ਹੈ ਅਤੇ ਸਹੀ ਤਬਦੀਲੀਆਂ ਕਰਦਾ ਹੈ।',
  'productAgent.autonomous.title': 'ਆਟੋਨੋਮਸ ਲੰਬੇ ਬਿਲਡ',
  'productAgent.autonomous.description': 'ਏਜੰਟ ਸਿਰਫ਼ ਸਨਿੱਪਟ ਨਹੀਂ ਲਿਖਦਾ - ਇਹ ਪੂਰੀਆਂ ਐਪਲੀਕੇਸ਼ਨਾਂ ਆਟੋਨੋਮਸ ਤਰੀਕੇ ਨਾਲ ਬਣਾ ਸਕਦਾ ਹੈ।',
  'productAgent.autonomous.item1': 'ਫੁੱਲ-ਸਟੈਕ ਐਪਲੀਕੇਸ਼ਨਾਂ',
  'productAgent.autonomous.item2': 'ਮਲਟੀ-ਫਾਈਲ ਰੀਫੈਕਟਰਿੰਗ',
  'productAgent.autonomous.item3': 'ਟੈਸਟ ਜਨਰੇਸ਼ਨ',
  'productAgent.autonomous.item4': 'ਦਸਤਾਵੇਜ਼ ਲਿਖਣਾ',
  'productAgent.autonomous.item5': 'ਬੱਗ ਫਿਕਸਿੰਗ ਅਤੇ ਡੀਬੱਗਿੰਗ',
  'productAgent.stats.filesCreated': 'ਫਾਈਲਾਂ ਬਣਾਈਆਂ',
  'productAgent.stats.linesOfCode': 'ਕੋਡ ਦੀਆਂ ਲਾਈਨਾਂ',
  'productAgent.stats.buildTime': 'ਬਿਲਡ ਸਮਾਂ',
  'productAgent.cta.title': 'AI ਨਾਲ ਬਣਾਉਣ ਲਈ ਤਿਆਰ ਹੋ?',
  'productAgent.cta.subtitle': 'ਅੱਜ ਹੀ AppNode ਏਜੰਟ ਨਾਲ ਆਪਣਾ ਅਗਲਾ ਪ੍ਰੋਜੈਕਟ ਬਣਾਉਣਾ ਸ਼ੁਰੂ ਕਰੋ। ਮੁਫ਼ਤ ਸ਼ੁਰੂ, ਕ੍ਰੈਡਿਟ ਕਾਰਡ ਦੀ ਲੋੜ ਨਹੀਂ।',

  // ── productDatabase (12 keys) ──
  'productDatabase.badge': 'ਡੇਟਾ ਪ੍ਰਬੰਧਨ',
  'productDatabase.title': 'ਬਿਲਟ-ਇਨ',
  'productDatabase.titleHighlight': 'ਡੇਟਾਬੇਸ',
  'productDatabase.subtitle': 'ਬਿਨਾਂ ਕਿਸੇ ਸੈੱਟਅੱਪ ਦੇ ਆਪਣਾ ਡੇਟਾ ਸਟੋਰ ਅਤੇ ਪ੍ਰਬੰਧਿਤ ਕਰੋ। AppNode ਤੁਹਾਨੂੰ ਸ਼ਕਤੀਸ਼ਾਲੀ, ਸਕੇਲੇਬਲ ਡੇਟਾਬੇਸ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।',
  'productDatabase.getStarted': 'ਮੁਫ਼ਤ ਸ਼ੁਰੂ ਕਰੋ',
  'productDatabase.readDocs': 'ਦਸਤਾਵੇਜ਼ ਪੜ੍ਹੋ',
  'productDatabase.stats.uptime': 'ਅੱਪਟਾਈਮ SLA',
  'productDatabase.stats.latency': 'ਕਿਊਰੀ ਲੇਟੈਂਸੀ',
  'productDatabase.stats.scalability': 'ਸਕੇਲੇਬਿਲਟੀ',
  'productDatabase.stats.configuration': 'ਕੌਂਫਿਗਰੇਸ਼ਨ',
  'productDatabase.cta.title': 'ਅੱਜ ਹੀ ਡੇਟਾ ਸਟੋਰ ਕਰਨਾ ਸ਼ੁਰੂ ਕਰੋ',
  'productDatabase.cta.subtitle': 'ਇਨਫ੍ਰਾਸਟ੍ਰਕਚਰ ਦੀ ਪਰੇਸ਼ਾਨੀ ਤੋਂ ਬਿਨਾਂ ਡੇਟਾ-ਅਧਾਰਿਤ ਐਪਲੀਕੇਸ਼ਨਾਂ ਬਣਾਓ।',

  // ── productDesign (27 keys) ──
  'productDesign.badge': 'ਵਿਜ਼ੂਅਲ ਡਿਵੈਲਪਮੈਂਟ',
  'productDesign.title': 'ਡਿਜ਼ਾਈਨ ਕਰੋ',
  'productDesign.titleHighlight': 'ਸ਼ੁੱਧਤਾ ਨਾਲ',
  'productDesign.subtitle': 'ਬਾਰੀਕ ਕੰਟਰੋਲ ਤਾਂ ਜੋ ਤੁਹਾਡੀ ਐਪ ਤੁਹਾਡੇ ਵਿਜ਼ਨ ਨਾਲ ਮੇਲ ਖਾਵੇ। ਆਪਣੇ ਡਿਜ਼ਾਈਨ ਇੰਪੋਰਟ ਕਰੋ ਜਾਂ ਇੰਟੀਗ੍ਰੇਟ ਕਰੋ।',
  'productDesign.tryDesignTools': 'ਡਿਜ਼ਾਈਨ ਟੂਲ ਅਜ਼ਮਾਓ',
  'productDesign.visualEditor': 'ਵਿਜ਼ੂਅਲ ਐਡੀਟਰ',
  'productDesign.components': 'ਕੰਪੋਨੈਂਟ',
  'productDesign.properties': 'ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ',
  'productDesign.width': 'ਚੌੜਾਈ',
  'productDesign.background': 'ਬੈਕਗ੍ਰਾਊਂਡ',
  'productDesign.borderRadius': 'ਬਾਰਡਰ ਰੇਡੀਅਸ',
  'productDesign.featuresTitle': 'ਡਿਜ਼ਾਈਨ ਫੀਚਰ',
  'productDesign.startDesigning': 'ਡਿਜ਼ਾਈਨ ਕਰਨਾ ਸ਼ੁਰੂ ਕਰੋ',
  'productDesign.features.liveEditor.title': 'ਲਾਈਵ ਵਿਜ਼ੂਅਲ ਐਡੀਟਰ',
  'productDesign.features.liveEditor.description': 'ਰੀਅਲ-ਟਾਈਮ ਪ੍ਰੀਵਿਊ ਨਾਲ ਕੰਪੋਨੈਂਟ ਵਿਜ਼ੂਅਲੀ ਸੰਪਾਦਿਤ ਕਰੋ। ਜੋ ਤੁਸੀਂ ਦੇਖਦੇ ਹੋ ਬਿਲਕੁਲ ਉਹੀ ਯੂਜ਼ਰ ਦੇਖਦੇ ਹਨ।',
  'productDesign.features.designSystem.title': 'ਡਿਜ਼ਾਈਨ ਸਿਸਟਮ ਇੰਪੋਰਟ',
  'productDesign.features.designSystem.description': 'ਆਪਣੇ ਮੌਜੂਦਾ Figma ਡਿਜ਼ਾਈਨ ਜਾਂ ਬ੍ਰਾਂਡ ਗਾਈਡਲਾਈਨਜ਼ ਇੰਪੋਰਟ ਕਰੋ ਅਤੇ ਤੁਰੰਤ ਲਾਗੂ ਕਰੋ।',
  'productDesign.features.componentLibrary.title': 'ਕੰਪੋਨੈਂਟ ਲਾਇਬ੍ਰੇਰੀ',
  'productDesign.features.componentLibrary.description': 'ਬੈਸਟ ਪ੍ਰੈਕਟਿਸਿਜ਼ ਦੀ ਪਾਲਣਾ ਕਰਨ ਵਾਲੇ ਪ੍ਰੀ-ਬਿਲਟ, ਕਸਟਮਾਈਜ਼ੇਬਲ ਕੰਪੋਨੈਂਟ ਦੀ ਅਮੀਰ ਲਾਇਬ੍ਰੇਰੀ ਤੱਕ ਪਹੁੰਚੋ।',
  'productDesign.features.responsive.title': 'ਰਿਸਪੌਂਸਿਵ ਕੰਟਰੋਲ',
  'productDesign.features.responsive.description': 'ਸਹਿਜ ਬ੍ਰੇਕਪੁਆਇੰਟ ਕੰਟਰੋਲ ਅਤੇ ਮੋਬਾਈਲ ਪ੍ਰੀਵਿਊ ਨਾਲ ਸਾਰੇ ਸਕ੍ਰੀਨ ਸਾਈਜ਼ ਲਈ ਡਿਜ਼ਾਈਨ ਕਰੋ।',
  'productDesign.features.pixelPerfect.title': 'ਪਿਕਸਲ-ਪਰਫੈਕਟ ਐਡੀਟਿੰਗ',
  'productDesign.features.pixelPerfect.description': 'ਪ੍ਰੀਸੀਜ਼ਨ ਕੰਟਰੋਲ ਨਾਲ ਸਪੇਸਿੰਗ, ਟਾਈਪੋਗ੍ਰਾਫੀ ਅਤੇ ਰੰਗ ਫਾਈਨ-ਟਿਊਨ ਕਰੋ।',
  'productDesign.features.instantDeploy.title': 'ਤੁਰੰਤ ਡਿਪਲੌਇ',
  'productDesign.features.instantDeploy.description': 'ਆਪਣੇ ਡਿਜ਼ਾਈਨ ਤੁਰੰਤ ਸ਼ਿਪ ਕਰੋ। ਕੋਈ ਬਿਲਡ ਸਟੈਪ, ਕੋਈ ਡਿਪਲੌਇਮੈਂਟ ਕੌਂਫਿਗਰੇਸ਼ਨ ਲੋੜੀਂਦੀ ਨਹੀਂ।',
  'productDesign.cta.title': 'ਸੁੰਦਰ ਐਪਸ ਤੇਜ਼ੀ ਨਾਲ ਡਿਜ਼ਾਈਨ ਕਰੋ',
  'productDesign.cta.subtitle': 'AppNode ਦੇ ਸ਼ਕਤੀਸ਼ਾਲੀ ਵਿਜ਼ੂਅਲ ਟੂਲਾਂ ਨਾਲ ਆਪਣੇ ਡਿਜ਼ਾਈਨ ਵਿਜ਼ਨ ਨੂੰ ਹਕੀਕਤ ਵਿੱਚ ਬਦਲੋ।',

  // ── productIntegrations (36 keys) ──
  'productIntegrations.badge': 'ਸਭ ਕੁਝ ਜੋੜੋ',
  'productIntegrations.title': 'ਸ਼ਕਤੀਸ਼ਾਲੀ',
  'productIntegrations.titleHighlight': 'ਇੰਟੀਗ੍ਰੇਸ਼ਨਜ਼',
  'productIntegrations.subtitle': 'ਜ਼ੀਰੋ ਕੌਂਫਿਗਰੇਸ਼ਨ ਨਾਲ ਆਪਣੇ ਮਨਪਸੰਦ ਟੂਲ ਅਤੇ ਸੇਵਾਵਾਂ ਨਾਲ ਜੁੜੋ।',
  'productIntegrations.browseAll': 'ਸਾਰੇ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਦੇਖੋ',
  'productIntegrations.popularIntegrations': 'ਪ੍ਰਸਿੱਧ ਇੰਟੀਗ੍ਰੇਸ਼ਨ',
  'productIntegrations.getStarted': 'ਮੁਫ਼ਤ ਸ਼ੁਰੂ ਕਰੋ',
  'productIntegrations.categories.payments': 'ਭੁਗਤਾਨ',
  'productIntegrations.categories.communication': 'ਸੰਚਾਰ',
  'productIntegrations.categories.email': 'ਈਮੇਲ',
  'productIntegrations.categories.cdn': 'CDN',
  'productIntegrations.categories.versionControl': 'ਵਰਜ਼ਨ ਕੰਟਰੋਲ',
  'productIntegrations.categories.cloud': 'ਕਲਾਊਡ',
  'productIntegrations.categories.deployment': 'ਡਿਪਲੌਇਮੈਂਟ',
  'productIntegrations.categories.database': 'ਡੇਟਾਬੇਸ',
  'productIntegrations.integrations.openai': 'GPT-4, DALL-E, ਅਤੇ ਹੋਰ',
  'productIntegrations.integrations.stripe': 'ਵਿਸ਼ਵ ਭਰ ਵਿੱਚ ਭੁਗਤਾਨ ਸਵੀਕਾਰ ਕਰੋ',
  'productIntegrations.integrations.twilio': 'SMS, ਵਾਇਸ ਅਤੇ ਵੀਡੀਓ',
  'productIntegrations.integrations.sendgrid': 'ਟ੍ਰਾਂਜ਼ੈਕਸ਼ਨਲ ਈਮੇਲ',
  'productIntegrations.integrations.cloudflare': 'ਐਜ ਕੰਪਿਊਟਿੰਗ ਅਤੇ CDN',
  'productIntegrations.integrations.github': 'ਕੋਡ ਹੋਸਟਿੰਗ ਅਤੇ CI/CD',
  'productIntegrations.integrations.slack': 'ਟੀਮ ਮੈਸੇਜਿੰਗ',
  'productIntegrations.integrations.googleCloud': 'ਕਲਾਊਡ ਇਨਫ੍ਰਾਸਟ੍ਰਕਚਰ',
  'productIntegrations.integrations.aws': 'Amazon Web Services',
  'productIntegrations.integrations.anthropic': 'Claude AI ਅਸਿਸਟੈਂਟ',
  'productIntegrations.integrations.vercel': 'ਫਰੰਟਐਂਡ ਡਿਪਲੌਇਮੈਂਟ',
  'productIntegrations.integrations.supabase': 'ਬੈਕਐਂਡ ਐਜ਼ ਏ ਸਰਵਿਸ',
  'productIntegrations.howItWorks.title': 'ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਕਿਵੇਂ ਕੰਮ ਕਰਦੇ ਹਨ',
  'productIntegrations.howItWorks.step1.title': 'ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਚੁਣੋ',
  'productIntegrations.howItWorks.step1.description': 'ਸਾਡੀ ਕੈਟਾਲਾਗ ਬ੍ਰਾਊਜ਼ ਕਰੋ ਅਤੇ ਕਿਸੇ ਵੀ ਲੋੜੀਂਦੇ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਨੂੰ ਐਨੇਬਲ ਕਰੋ।',
  'productIntegrations.howItWorks.step2.title': 'ਇੱਕ ਵਾਰ ਅਧਿਕਾਰਤ ਕਰੋ',
  'productIntegrations.howItWorks.step2.description': 'OAuth ਨਾਲ ਸੁਰੱਖਿਅਤ ਤਰੀਕੇ ਨਾਲ ਆਪਣਾ ਖਾਤਾ ਜੋੜੋ। ਤੁਹਾਡੇ ਕ੍ਰੈਡੈਂਸ਼ੀਅਲ ਸੁਰੱਖਿਅਤ ਰਹਿੰਦੇ ਹਨ।',
  'productIntegrations.howItWorks.step3.title': 'ਵਰਤਣਾ ਸ਼ੁਰੂ ਕਰੋ',
  'productIntegrations.howItWorks.step3.description': 'ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਤੁਰੰਤ ਤੁਹਾਡੇ ਕੋਡ ਵਿੱਚ ਵਰਤਣ ਲਈ ਤਿਆਰ ਹੈ।',
  'productIntegrations.cta.title': 'ਅੱਜ ਹੀ ਆਪਣੇ ਟੂਲ ਜੋੜੋ',
  'productIntegrations.cta.subtitle': 'ਸ਼ਕਤੀਸ਼ਾਲੀ ਐਪਸ ਬਣਾਓ ਜੋ ਤੁਹਾਡੀਆਂ ਪਹਿਲਾਂ ਤੋਂ ਵਰਤੀਆਂ ਸੇਵਾਵਾਂ ਨਾਲ ਇੰਟੀਗ੍ਰੇਟ ਹੁੰਦੀਆਂ ਹਨ।',
};

let count = 0;
for (const [key, val] of Object.entries(translations)) {
  setVal(pa, key, val);
  count++;
}

fs.writeFileSync(PA_PATH, JSON.stringify(pa, null, 2) + '\n', 'utf-8');
console.log(`Phase 2 complete: ${count} keys translated in pa.json`);
