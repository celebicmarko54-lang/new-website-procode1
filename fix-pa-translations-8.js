// Phase 8: Missing array/object keys that need full Punjabi translation
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

// supportPage.knowledgeBase - array of FAQ objects
setValue(pa, 'supportPage.knowledgeBase', [
  {"keywords":["what is appnode","about appnode","appnode"],"answer":"AppNode ਇੱਕ AI-ਸੰਚਾਲਿਤ ਪਲੇਟਫਾਰਮ ਹੈ ਜੋ ਤੁਹਾਨੂੰ ਕੁਦਰਤੀ ਭਾਸ਼ਾ ਪ੍ਰੌਂਪਟਾਂ ਰਾਹੀਂ ਫੁੱਲ-ਸਟੈਕ ਵੈੱਬ ਐਪਲੀਕੇਸ਼ਨਾਂ ਬਣਾਉਣ ਦਿੰਦਾ ਹੈ। ਬੱਸ ਦੱਸੋ ਤੁਸੀਂ ਕੀ ਬਣਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ, ਅਤੇ ਸਾਡੀ AI ਤੁਹਾਡੇ ਲਈ ਕੋਡ, ਡਿਜ਼ਾਈਨ, ਅਤੇ ਕਾਰਜਕੁਸ਼ਲਤਾ ਜਨਰੇਟ ਕਰੇਗੀ।"},
  {"keywords":["pricing","cost","price","free","plan"],"answer":"AppNode ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਉਦਾਰ ਮੁਫ਼ਤ ਯੋਜਨਾ ਪੇਸ਼ ਕਰਦਾ ਹੈ। ਸਾਡੀ ਕੀਮਤ ਵਿੱਚ ਸ਼ਾਮਲ ਹਨ: ਮੁਫ਼ਤ ਯੋਜਨਾ (3 ਪ੍ਰੋਜੈਕਟ, ਬੁਨਿਆਦੀ AI ਫੀਚਰਸ), ਪ੍ਰੋ ਯੋਜਨਾ ($20/ਮਹੀਨਾ ਅਸੀਮਤ ਪ੍ਰੋਜੈਕਟ ਅਤੇ ਐਡਵਾਂਸਡ AI ਲਈ), ਅਤੇ ਟੀਮ ਯੋਜਨਾ ($49/ਮਹੀਨਾ ਸਹਿਯੋਗ ਫੀਚਰਸ ਲਈ)। ਵਧੇਰੇ ਜਾਣਕਾਰੀ ਲਈ ਸਾਡਾ ਕੀਮਤ ਪੇਜ ਵੇਖੋ।"},
  {"keywords":["deploy","deployment","publish","hosting","live"],"answer":"AppNode ਨਾਲ ਡਿਪਲੌਇ ਕਰਨਾ ਸਧਾਰਨ ਹੈ! ਆਪਣੇ ਪ੍ਰੋਜੈਕਟ ਐਡੀਟਰ ਵਿੱਚ \"ਡਿਪਲੌਇ\" ਬਟਨ 'ਤੇ ਕਲਿੱਕ ਕਰੋ, ਅਤੇ ਤੁਹਾਡੀ ਐਪ ਇੱਕ ਵਿਲੱਖਣ URL ਨਾਲ ਸਕਿੰਟਾਂ ਵਿੱਚ ਲਾਈਵ ਹੋ ਜਾਵੇਗੀ। ਪ੍ਰੋ ਯੂਜ਼ਰ ਕਸਟਮ ਡੋਮੇਨ ਜੋੜ ਸਕਦੇ ਹਨ। ਅਸੀਂ ਸਾਰਾ ਹੋਸਟਿੰਗ ਢਾਂਚਾ ਸੰਭਾਲਦੇ ਹਾਂ।"},
  {"keywords":["ai","artificial intelligence","generate","prompt"],"answer":"ਸਾਡੀ AI ਕੁਦਰਤੀ ਭਾਸ਼ਾ ਦੇ ਵਰਣਨ ਸਮਝਦੀ ਹੈ ਕਿ ਤੁਸੀਂ ਕੀ ਬਣਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ। ਤੁਸੀਂ ਫੀਚਰਜ਼, ਲੇਆਉਟ, ਕਾਰਜਕੁਸ਼ਲਤਾ, ਅਤੇ ਗੁੰਝਲਦਾਰ ਲੌਜਿਕ ਵੀ ਦੱਸ ਸਕਦੇ ਹੋ। AI ਸਾਫ਼, ਉਤਪਾਦਨ-ਯੋਗ ਕੋਡ ਜਨਰੇਟ ਕਰਦੀ ਹੈ ਜੋ ਤੁਸੀਂ ਹੋਰ ਅਨੁਕੂਲ ਕਰ ਸਕਦੇ ਹੋ।"},
  {"keywords":["database","data","storage","backend"],"answer":"AppNode ਵਿੱਚ ਬਿਲਟ-ਇਨ ਡੇਟਾਬੇਸ ਸਹਾਇਤਾ ਸ਼ਾਮਲ ਹੈ। ਤੁਸੀਂ ਸਾਡੇ ਵਿਜ਼ੂਅਲ ਇੰਟਰਫੇਸ ਰਾਹੀਂ ਟੇਬਲ ਬਣਾ ਸਕਦੇ ਹੋ, ਸੰਬੰਧ ਪਰਿਭਾਸ਼ਿਤ ਕਰ ਸਕਦੇ ਹੋ, ਅਤੇ ਡਾਟਾ ਪ੍ਰਬੰਧਿਤ ਕਰ ਸਕਦੇ ਹੋ। ਅਸੀਂ ਵਿਕਾਸ ਲਈ SQLite ਅਤੇ ਉਤਪਾਦਨ ਲਈ PostgreSQL ਤੱਕ ਸਕੇਲ ਕਰਨ ਦੀ ਸਹਾਇਤਾ ਕਰਦੇ ਹਾਂ।"},
  {"keywords":["team","collaborate","collaboration","share"],"answer":"ਸਾਡੀ ਟੀਮਜ਼ ਯੋਜਨਾ ਰੀਅਲ-ਟਾਈਮ ਸਹਿਯੋਗ ਦੀ ਸਹਾਇਤਾ ਕਰਦੀ ਹੈ। ਕਈ ਟੀਮ ਮੈਂਬਰ ਇੱਕੋ ਪ੍ਰੋਜੈਕਟ 'ਤੇ ਇੱਕੋ ਸਮੇਂ ਕੰਮ ਕਰ ਸਕਦੇ ਹਨ। ਫੀਚਰਸ ਵਿੱਚ ਸ਼ਾਮਲ ਹਨ ਭੂਮਿਕਾ-ਅਧਾਰਿਤ ਪਹੁੰਚ, ਸਾਂਝੇ ਵਰਕਸਪੇਸ, ਟੀਮ ਚੈਟ, ਅਤੇ ਏਕੀਕ੍ਰਿਤ ਬਿਲਿੰਗ।"},
  {"keywords":["export","download","code","source"],"answer":"ਹਾਂ! ਤੁਸੀਂ ਕਿਸੇ ਵੀ ਸਮੇਂ ਆਪਣਾ ਪੂਰਾ ਸੋਰਸ ਕੋਡ ਐਕਸਪੋਰਟ ਕਰ ਸਕਦੇ ਹੋ। AppNode ਸਾਫ਼ React/Next.js ਕੋਡ ਜਨਰੇਟ ਕਰਦਾ ਹੈ ਜੋ ਤੁਸੀਂ ਸੁਤੰਤਰ ਤੌਰ 'ਤੇ ਚਲਾ ਸਕਦੇ ਹੋ। ਪ੍ਰੋ ਯੂਜ਼ਰਾਂ ਨੂੰ ਸਹਿਜ ਵਰਜ਼ਨ ਕੰਟਰੋਲ ਲਈ GitHub ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਮਿਲਦੀ ਹੈ।"},
  {"keywords":["mobile","ios","android","responsive"],"answer":"AppNode ਨਾਲ ਬਣੀਆਂ ਸਾਰੀਆਂ ਐਪਸ ਡਿਫਾਲਟ ਤੌਰ 'ਤੇ ਰਿਸਪਾਂਸਿਵ ਹਨ। ਅਸੀਂ iOS ਅਤੇ Android ਲਈ ਨੇਟਿਵ ਮੋਬਾਈਲ ਐਪ ਵਿਕਾਸ ਫੀਚਰਸ 'ਤੇ ਵੀ ਕੰਮ ਕਰ ਰਹੇ ਹਾਂ, ਜਲਦੀ ਆ ਰਿਹਾ ਹੈ!"},
  {"keywords":["security","secure","safe","privacy"],"answer":"ਸੁਰੱਖਿਆ ਸਾਡੀ ਪਹਿਲੀ ਤਰਜੀਹ ਹੈ। ਅਸੀਂ ਉਦਯੋਗ-ਮਿਆਰੀ ਐਨਕ੍ਰਿਪਸ਼ਨ, SOC 2 Type II ਪ੍ਰਮਾਣਿਤ ਢਾਂਚਾ, ਅਤੇ ਨਿਯਮਤ ਸੁਰੱਖਿਆ ਆਡਿਟ ਵਰਤਦੇ ਹਾਂ। ਤੁਹਾਡਾ ਕੋਡ ਅਤੇ ਡਾਟਾ ਹਮੇਸ਼ਾ ਸੁਰੱਖਿਅਤ ਹੈ।"},
  {"keywords":["bug","error","problem","issue","help"],"answer":"ਜੇਕਰ ਤੁਹਾਨੂੰ ਸਮੱਸਿਆਵਾਂ ਆ ਰਹੀਆਂ ਹਨ, ਤਾਂ ਪਹਿਲਾਂ ਪੇਜ ਰਿਫ੍ਰੈਸ਼ ਕਰੋ। ਕਿਸੇ ਵੀ ਚੱਲ ਰਹੀ ਘਟਨਾ ਲਈ ਸਾਡਾ ਸਟੇਟਸ ਪੇਜ ਵੇਖੋ। ਤੁਸੀਂ ਇੱਥੇ ਆਪਣੀ ਖ਼ਾਸ ਸਮੱਸਿਆ ਵੀ ਦੱਸ ਸਕਦੇ ਹੋ, ਅਤੇ ਮੈਂ ਮਦਦ ਕਰਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰਾਂਗਾ, ਜਾਂ ਤੁਹਾਨੂੰ ਸਾਡੀ ਸਹਾਇਤਾ ਟੀਮ ਨਾਲ ਜੋੜਾਂਗਾ।"},
  {"keywords":["cancel","subscription","refund","billing"],"answer":"ਤੁਸੀਂ ਆਪਣੀ ਸਬਸਕ੍ਰਿਪਸ਼ਨ ਕਿਸੇ ਵੀ ਸਮੇਂ ਆਪਣੇ ਖਾਤਾ ਸੈਟਿੰਗਾਂ ਤੋਂ ਰੱਦ ਕਰ ਸਕਦੇ ਹੋ। ਤੁਹਾਡੀ ਪਹੁੰਚ ਬਿਲਿੰਗ ਮਿਆਦ ਦੇ ਅੰਤ ਤੱਕ ਜਾਰੀ ਰਹੇਗੀ। ਰਿਫੰਡ ਲਈ, ਕਿਰਪਾ ਕਰਕੇ support@appnode.com 'ਤੇ ਸਾਡੀ ਸਹਾਇਤਾ ਟੀਮ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।"},
  {"keywords":["api","integration","connect","webhook"],"answer":"AppNode Stripe, OpenAI, Twilio, ਅਤੇ ਹੋਰ ਪ੍ਰਸਿੱਧ ਸੇਵਾਵਾਂ ਨਾਲ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਦੀ ਸਹਾਇਤਾ ਕਰਦਾ ਹੈ। ਤੁਸੀਂ ਬਾਹਰੀ ਸੇਵਾਵਾਂ ਨਾਲ ਜੋੜਨ ਲਈ ਸਾਡੀ API ਵੀ ਵਰਤ ਸਕਦੇ ਹੋ। ਉਪਲਬਧ ਇੰਟੀਗ੍ਰੇਸ਼ਨਾਂ ਲਈ ਸਾਡੀ ਡਾਕੂਮੈਂਟੇਸ਼ਨ ਵੇਖੋ।"},
  {"keywords":["custom domain","domain","url"],"answer":"ਪ੍ਰੋ ਅਤੇ ਟੀਮ ਯੋਜਨਾ ਯੂਜ਼ਰ ਆਪਣੀਆਂ ਡਿਪਲੌਇ ਕੀਤੀਆਂ ਐਪਸ ਨਾਲ ਕਸਟਮ ਡੋਮੇਨ ਜੋੜ ਸਕਦੇ ਹਨ। ਆਪਣੇ ਪ੍ਰੋਜੈਕਟ ਸੈਟਿੰਗਾਂ > ਡੋਮੇਨ 'ਤੇ ਜਾਓ ਅਪਣਾ ਕਸਟਮ ਡੋਮੇਨ ਜੋੜਨ ਅਤੇ ਕੌਂਫਿਗਰ ਕਰਨ ਲਈ। DNS ਕੌਂਫਿਗਰੇਸ਼ਨ ਨਿਰਦੇਸ਼ ਦਿੱਤੇ ਗਏ ਹਨ।"}
]);

// affiliatesPage.benefits.items
setValue(pa, 'affiliatesPage.benefits.items', [
  {"title":"30% ਕਮਿਸ਼ਨ","description":"ਤੁਹਾਡੇ ਹਰ ਰੈਫ਼ਰ ਕੀਤੇ ਗਾਹਕ 'ਤੇ ਪਹਿਲੇ 12 ਮਹੀਨਿਆਂ ਲਈ 30% ਆਵਰਤੀ ਕਮਿਸ਼ਨ ਕਮਾਓ।"},
  {"title":"90-ਦਿਨ ਕੂਕੀ","description":"ਵਧੀ ਕੂਕੀ ਵਿੰਡੋ ਮਤਲਬ ਤੁਹਾਨੂੰ ਕ੍ਰੈਡਿਟ ਮਿਲਦਾ ਹੈ ਭਾਵੇਂ ਉਹ ਬਾਅਦ ਵਿੱਚ ਸਾਈਨ ਅੱਪ ਕਰਨ।"},
  {"title":"ਰੀਅਲ-ਟਾਈਮ ਡੈਸ਼ਬੋਰਡ","description":"ਸਾਡੇ ਐਫੀਲੀਏਟ ਡੈਸ਼ਬੋਰਡ ਨਾਲ ਕਲਿੱਕ, ਕਨਵਰਜ਼ਨ, ਅਤੇ ਕਮਾਈ ਰੀਅਲ-ਟਾਈਮ ਵਿੱਚ ਟ੍ਰੈਕ ਕਰੋ।"},
  {"title":"ਮਾਸਿਕ ਭੁਗਤਾਨ","description":"ਹਰ ਮਹੀਨੇ PayPal ਜਾਂ ਬੈਂਕ ਟ੍ਰਾਂਸਫ਼ਰ ਰਾਹੀਂ ਭੁਗਤਾਨ ਪ੍ਰਾਪਤ ਕਰੋ। $50 ਘੱਟੋ-ਘੱਟ ਸੀਮਾ।"}
]);

// affiliatesPage.tiers.items
setValue(pa, 'affiliatesPage.tiers.items', [
  {"name":"ਸਟਾਰਟਰ","perks":["ਬੁਨਿਆਦੀ ਡੈਸ਼ਬੋਰਡ","ਈਮੇਲ ਸਹਾਇਤਾ","ਮਿਆਰੀ ਲਿੰਕ"]},
  {"name":"ਪ੍ਰੋ","perks":["ਐਡਵਾਂਸਡ ਵਿਸ਼ਲੇਸ਼ਣ","ਤਰਜੀਹੀ ਸਹਾਇਤਾ","ਕਸਟਮ ਲਿੰਕ","ਪ੍ਰਮੋਸ਼ਨਲ ਸਮੱਗਰੀ"]},
  {"name":"ਐਲੀਟ","perks":["ਸਮਰਪਿਤ ਮੈਨੇਜਰ","ਸਹਿ-ਮਾਰਕੀਟਿੰਗ","ਅਰਲੀ ਐਕਸੈਸ","ਕਸਟਮ ਮੁਹਿੰਮਾਂ"]}
]);

// affiliatesPage.howItWorks.steps
setValue(pa, 'affiliatesPage.howItWorks.steps', [
  {"title":"1. ਸਾਈਨ ਅੱਪ ਕਰੋ","description":"ਆਪਣਾ ਮੁਫ਼ਤ ਐਫੀਲੀਏਟ ਖਾਤਾ ਬਣਾਓ ਅਤੇ ਆਪਣਾ ਵਿਲੱਖਣ ਰੈਫ਼ਰਲ ਲਿੰਕ ਪ੍ਰਾਪਤ ਕਰੋ।"},
  {"title":"2. ਸਾਂਝਾ ਕਰੋ","description":"ਆਪਣਾ ਲਿੰਕ ਆਪਣੇ ਦਰਸ਼ਕਾਂ, ਫੌਲੋਅਰਜ਼, ਜਾਂ ਭਾਈਚਾਰੇ ਨਾਲ ਸਾਂਝਾ ਕਰੋ।"},
  {"title":"3. ਕਮਾਓ","description":"ਹਰ ਭੁਗਤਾਨ ਕਰਨ ਵਾਲੇ ਗਾਹਕ ਲਈ ਹਰ ਮਹੀਨੇ ਆਵਰਤੀ ਕਮਿਸ਼ਨ ਕਮਾਓ।"}
]);

// connectionsPage.connections
setValue(pa, 'connectionsPage.connections', [
  {"name":"Supabase","description":"PostgreSQL ਡੇਟਾਬੇਸ ਨਾਲ ਓਪਨ ਸੋਰਸ Firebase ਵਿਕਲਪ"},
  {"name":"Stripe","description":"ਭੁਗਤਾਨ ਪ੍ਰੋਸੈਸਿੰਗ ਅਤੇ ਸਬਸਕ੍ਰਿਪਸ਼ਨ ਪ੍ਰਬੰਧਨ"},
  {"name":"OpenAI","description":"ਆਪਣੀਆਂ ਐਪਲੀਕੇਸ਼ਨਾਂ ਵਿੱਚ AI ਸਮਰੱਥਾਵਾਂ ਜੋੜੋ"},
  {"name":"Vercel","description":"ਆਪਣੀਆਂ ਐਪਲੀਕੇਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਪੱਧਰ 'ਤੇ ਡਿਪਲੌਇ ਅਤੇ ਹੋਸਟ ਕਰੋ"},
  {"name":"GitHub","description":"ਵਰਜ਼ਨ ਕੰਟਰੋਲ ਅਤੇ ਕੋਡ ਸਹਿਯੋਗ"},
  {"name":"Resend","description":"ਡਿਵੈਲਪਰਾਂ ਲਈ ਈਮੇਲ API"},
  {"name":"Cloudflare","description":"CDN, ਸੁਰੱਖਿਆ, ਅਤੇ ਪ੍ਰਦਰਸ਼ਨ ਅਨੁਕੂਲਨ"},
  {"name":"Twilio","description":"SMS, ਵੌਇਸ, ਅਤੇ ਮੈਸੇਜਿੰਗ APIs"},
  {"name":"Auth0","description":"ਪ੍ਰਮਾਣੀਕਰਨ ਅਤੇ ਅਧਿਕਾਰ ਪਲੇਟਫਾਰਮ"},
  {"name":"Algolia","description":"ਖੋਜ ਅਤੇ ਖੋਜ ਪਲੇਟਫਾਰਮ"},
  {"name":"Shopify","description":"ਈ-ਕਾਮਰਸ ਪਲੇਟਫਾਰਮ ਇੰਟੀਗ੍ਰੇਸ਼ਨ"},
  {"name":"Notion","description":"Notion ਡੇਟਾਬੇਸ ਅਤੇ ਪੇਜਾਂ ਨਾਲ ਜੋੜੋ"}
]);

// securityReportPage.guidelines.items
setValue(pa, 'securityReportPage.guidelines.items', [
  "ਦੂਜੇ ਯੂਜ਼ਰਾਂ ਦੇ ਡਾਟਾ ਨੂੰ ਐਕਸੈਸ, ਸੋਧ, ਜਾਂ ਡਿਲੀਟ ਨਾ ਕਰੋ।",
  "ਸੇਵਾ ਤੋਂ ਇਨਕਾਰ ਹਮਲੇ ਨਾ ਕਰੋ ਜਾਂ ਸਾਡੀਆਂ ਸੇਵਾਵਾਂ ਨੂੰ ਖ਼ਰਾਬ ਨਾ ਕਰੋ।",
  "ਜਨਤਕ ਖੁਲਾਸੇ ਤੋਂ ਪਹਿਲਾਂ ਸਾਨੂੰ ਸਮੱਸਿਆ ਠੀਕ ਕਰਨ ਲਈ ਵਾਜਬ ਸਮਾਂ ਦਿਓ।",
  "ਸਿਰਫ਼ ਉਹ ਖਾਤੇ ਟੈਸਟ ਕਰੋ ਜੋ ਤੁਹਾਡੇ ਹਨ ਜਾਂ ਜਿਨ੍ਹਾਂ ਤੱਕ ਪਹੁੰਚ ਦੀ ਤੁਹਾਨੂੰ ਇਜਾਜ਼ਤ ਹੈ।"
]);

// learnPublishPage.steps.items
setValue(pa, 'learnPublishPage.steps.items', [
  {"title":"ਆਪਣੀ ਐਪ ਦੱਸੋ","description":"AppNode ਨੂੰ ਦੱਸੋ ਕਿ ਤੁਸੀਂ ਕੀ ਬਣਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ। ਆਪਣੀ ਐਪ ਦੇ ਫੀਚਰਸ, ਡਿਜ਼ਾਈਨ, ਅਤੇ ਕਾਰਜਕੁਸ਼ਲਤਾ ਦੱਸਣ ਲਈ ਕੁਦਰਤੀ ਭਾਸ਼ਾ ਵਰਤੋ। ਜਿੰਨਾ ਖ਼ਾਸ, ਉੱਨਾ ਵਧੀਆ ਨਤੀਜਾ।"},
  {"title":"ਬਣਦੇ ਦੇਖੋ","description":"AppNode ਦੀ AI ਤੁਹਾਡੀ ਐਪਲੀਕੇਸ਼ਨ ਰੀਅਲ-ਟਾਈਮ ਵਿੱਚ ਜਨਰੇਟ ਕਰਦੀ ਹੈ। ਤੁਸੀਂ ਕੋਡ ਲਿਖੇ ਜਾਂਦੇ ਅਤੇ ਤੁਰੰਤ ਪ੍ਰੀਵਿਊ ਨਾਲ ਐਪ ਬਣਦੀ ਦੇਖੋਗੇ। ਬੱਸ ਕਹਿ ਕੇ ਬਦਲਾਅ ਕਰੋ।"},
  {"title":"ਪ੍ਰੀਵਿਊ ਅਤੇ ਸੁਧਾਰ","description":"ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਸਿੱਧੇ ਆਪਣੀ ਐਪ ਟੈਸਟ ਕਰੋ। ਡੈਸਕਟਾਪ, ਟੈਬਲੈਟ, ਅਤੇ ਮੋਬਾਈਲ 'ਤੇ ਦੇਖੋ। ਬਦਲਾਅ ਮੰਗੋ, ਫੀਚਰ ਜੋੜੋ, ਜਾਂ ਸਟਾਈਲ ਅਡਜਸਟ ਕਰੋ ਜਦੋਂ ਤੱਕ ਸੰਪੂਰਨ ਨਾ ਹੋਵੇ।"},
  {"title":"ਤੁਰੰਤ ਡਿਪਲੌਇ","description":"ਜਦੋਂ ਤੁਸੀਂ ਤਿਆਰ ਹੋ, ਇੱਕ ਕਲਿੱਕ ਨਾਲ ਆਪਣੀ ਐਪ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰੋ। ਕਸਟਮ ਡੋਮੇਨ, SSL ਸਰਟੀਫਿਕੇਟ, ਅਤੇ ਗਲੋਬਲ CDN ਆਪਣੇ ਆਪ ਮਿਲ ਜਾਂਦੇ ਹਨ। ਤੁਹਾਡੀ ਐਪ ਸਕਿੰਟਾਂ ਵਿੱਚ ਲਾਈਵ ਹੈ।"}
]);

// learnPublishPage.features.items
setValue(pa, 'learnPublishPage.features.items', [
  {"title":"ਇੱਕ-ਕਲਿੱਕ ਡਿਪਲੌਇਮੈਂਟ","description":"ਕੋਈ ਗੁੰਝਲਦਾਰ ਸੈੱਟਅੱਪ ਜਾਂ ਕੌਂਫਿਗਰੇਸ਼ਨ ਨਹੀਂ। ਬੱਸ ਡਿਪਲੌਇ 'ਤੇ ਕਲਿੱਕ ਕਰੋ ਅਤੇ ਤੁਹਾਡੀ ਐਪ ਲਾਈਵ ਹੈ।"},
  {"title":"ਕਸਟਮ ਡੋਮੇਨ","description":"ਆਪਣਾ ਡੋਮੇਨ ਜੋੜੋ ਜਾਂ ਤੁਰੰਤ ਪ੍ਰਕਾਸ਼ਨ ਲਈ ਸਾਡਾ ਮੁਫ਼ਤ ਸਬਡੋਮੇਨ ਵਰਤੋ।"},
  {"title":"SSL ਸਰਟੀਫਿਕੇਟ","description":"ਤੁਹਾਡੀਆਂ ਸਾਰੀਆਂ ਐਪਸ ਲਈ ਆਟੋਮੈਟਿਕ HTTPS। ਸੁਰੱਖਿਆ ਮਿਆਰੀ ਹੈ।"},
  {"title":"ਗਲੋਬਲ CDN","description":"ਤੁਹਾਡੀ ਐਪ ਤੇਜ਼ ਰਫ਼ਤਾਰ ਲਈ ਦੁਨੀਆ ਭਰ ਦੇ ਐਜ ਲੋਕੇਸ਼ਨਾਂ ਤੋਂ ਸੇਵਾ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।"},
  {"title":"ਤੁਰੰਤ ਰੋਲਬੈਕ","description":"ਗ਼ਲਤੀ ਹੋ ਗਈ? ਇੱਕ ਕਲਿੱਕ ਨਾਲ ਕਿਸੇ ਵੀ ਪਿਛਲੇ ਵਰਜ਼ਨ 'ਤੇ ਵਾਪਸ ਜਾਓ।"},
  {"title":"ਬਿਲਟ-ਇਨ ਵਿਸ਼ਲੇਸ਼ਣ","description":"ਵਿਜ਼ਿਟਰ, ਪੇਜ ਵਿਊ, ਅਤੇ ਪ੍ਰਦਰਸ਼ਨ ਮੈਟ੍ਰਿਕਸ ਬਾਕਸ ਵਿੱਚੋਂ ਟ੍ਰੈਕ ਕਰੋ।"}
]);

// learnPublishPage.tips.items
setValue(pa, 'learnPublishPage.tips.items', [
  {"bold":"ਖ਼ਾਸ ਬਣੋ:","text":"ਤੁਸੀਂ ਜੋ ਰੰਗ, ਲੇਆਉਟ, ਅਤੇ ਕਾਰਜਕੁਸ਼ਲਤਾ ਚਾਹੁੰਦੇ ਹੋ ਦੱਸੋ"},
  {"bold":"ਸਾਦਾ ਸ਼ੁਰੂ ਕਰੋ:","text":"ਮੁੱਖ ਫੀਚਰਸ ਨਾਲ ਸ਼ੁਰੂ ਕਰੋ, ਫਿਰ ਸਮੇਂ ਨਾਲ ਹੋਰ ਜੋੜੋ"},
  {"bold":"ਹਵਾਲੇ ਵਰਤੋ:","text":"ਤੁਹਾਨੂੰ ਪਸੰਦ ਐਪਸ ਜਾਂ ਵੈੱਬਸਾਈਟਾਂ ਦੀਆਂ ਉਦਾਹਰਨਾਂ ਸਾਂਝੀਆਂ ਕਰੋ"},
  {"bold":"ਸਾਰੇ ਡਿਵਾਈਸਾਂ 'ਤੇ ਟੈਸਟ ਕਰੋ:","text":"ਡੈਸਕਟਾਪ, ਟੈਬਲੈਟ, ਅਤੇ ਮੋਬਾਈਲ ਵਿਊ ਵੇਖੋ"}
]);

// blockchainSection.useCases
setValue(pa, 'blockchainSection.useCases', ["ਲੈਂਡਿੰਗ ਪੇਜ","ਟੋਕਨ ਪ੍ਰੀਸੇਲ","NFT ਡ੍ਰੌਪ","DeFi ਡੈਸ਼ਬੋਰਡ","Web3 ਐਪਸ","DAO ਟੂਲ","ਸਟੇਕਿੰਗ ਪਲੇਟਫਾਰਮ","ਮੀਮ ਟੋਕਨ"]);

// blockchainSection.features
setValue(pa, 'blockchainSection.features', [
  {"title":"ਬਿਜਲੀ ਤੇਜ਼","description":"ਕਿਸੇ ਵੀ ਚੇਨ 'ਤੇ ਸਕਿੰਟਾਂ ਵਿੱਚ ਡਿਪਲੌਇ ਕਰੋ, ਘੰਟਿਆਂ ਵਿੱਚ ਨਹੀਂ"},
  {"title":"ਕੋਈ ਕੋਡ ਨਹੀਂ ਚਾਹੀਦਾ","description":"ਕੁਦਰਤੀ ਭਾਸ਼ਾ ਨਾਲ ਗੁੰਝਲਦਾਰ dApps ਬਣਾਓ"},
  {"title":"ਬੈਟਲ ਟੈਸਟਿਡ","description":"ਸਮਾਰਟ ਕੰਟ੍ਰੈਕਟ ਆਡਿਟ ਕੀਤੇ ਅਤੇ ਉਤਪਾਦਨ-ਯੋਗ"},
  {"title":"ਮਲਟੀ-ਚੇਨ ਨੇਟਿਵ","description":"ਇੱਕ ਕੋਡਬੇਸ, ਹਰ ਬਲਾਕਚੇਨ ਸਹਾਇਤਾ"}
]);

// signupPage.roles
setValue(pa, 'signupPage.roles', ["ਸੰਸਥਾਪਕ / ਉੱਦਮੀ","ਡਿਜ਼ਾਈਨਰ","ਡਿਵੈਲਪਰ","ਮਾਰਕੀਟਰ","ਉਤਪਾਦ ਮੈਨੇਜਰ","ਹੋਰ"]);

fs.writeFileSync('./src/translations/pa.json', JSON.stringify(pa, null, 2), 'utf8');
console.log('Phase 8 complete: Added 12 missing array/object translations');
