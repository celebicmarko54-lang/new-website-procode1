const fs = require('fs');
const path = require('path');

function setByPath(obj, pathStr, value) {
  const keys = pathStr.split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) current[keys[i]] = {};
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
}

const enPath = path.join(__dirname, 'src/translations/en.json');
const swPath = path.join(__dirname, 'src/translations/sw.json');
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const sw = JSON.parse(fs.readFileSync(swPath, 'utf8'));

// Teams pricing features
setByPath(en, 'teamsPage.pricing.features', [
  'Everything in Core',
  '$40/mo in usage credits included',
  '50 Viewer seats',
  'Centralized billing',
  'Role-based access control',
  'Private deployments',
  'Priority support'
]);
setByPath(sw, 'teamsPage.pricing.features', [
  'Kila kitu katika Core',
  'Mikopo ya matumizi ya $40/mwezi imejumuishwa',
  'Viti 50 vya Watazamaji',
  'Ulipiaji wa kati',
  'Udhibiti wa ufikiaji kwa majukumu',
  'Usambazaji wa kibinafsi',
  'Msaada wa kipaumbele'
]);

// Teams pricing per user text
setByPath(en, 'teamsPage.pricing.perUserMonth', 'per user/month');
setByPath(sw, 'teamsPage.pricing.perUserMonth', 'kwa mtumiaji/mwezi');

// Support page knowledge base
setByPath(en, 'supportPage.knowledgeBase', [
  { keywords: ['what is appnode', 'about appnode', 'appnode'], answer: 'AppNode is an AI-powered platform that lets you build full-stack web applications through natural language prompts. Simply describe what you want to build, and our AI will generate the code, design, and functionality for you.' },
  { keywords: ['pricing', 'cost', 'price', 'free', 'plan'], answer: 'AppNode offers a generous free plan to get started. Our pricing includes: Free Plan (3 projects, basic AI features), Pro Plan ($20/month for unlimited projects and advanced AI), and Team Plan ($49/month for collaboration features). Visit our pricing page for more details.' },
  { keywords: ['deploy', 'deployment', 'publish', 'hosting', 'live'], answer: 'Deploying with AppNode is simple! Click the "Deploy" button in your project editor, and your app will be live in seconds with a unique URL. Pro users can connect custom domains. We handle all the hosting infrastructure for you.' },
  { keywords: ['ai', 'artificial intelligence', 'generate', 'prompt'], answer: 'Our AI understands natural language descriptions of what you want to build. You can describe features, layouts, functionality, and even complex logic. The AI generates clean, production-ready code that you can further customize.' },
  { keywords: ['database', 'data', 'storage', 'backend'], answer: 'AppNode includes built-in database support. You can create tables, define relationships, and manage data through our visual interface. We support SQLite for development and can scale to PostgreSQL for production.' },
  { keywords: ['team', 'collaborate', 'collaboration', 'share'], answer: 'Our Teams plan supports real-time collaboration. Multiple team members can work on the same project simultaneously. Features include role-based access, shared workspaces, team chat, and centralized billing.' },
  { keywords: ['export', 'download', 'code', 'source'], answer: 'Yes! You can export your full source code at any time. AppNode generates clean React/Next.js code that you can run independently. Pro users get access to GitHub integration for seamless version control.' },
  { keywords: ['mobile', 'ios', 'android', 'responsive'], answer: 'All apps built with AppNode are responsive by default. We\'re also working on native mobile app development features for iOS and Android, coming soon!' },
  { keywords: ['security', 'secure', 'safe', 'privacy'], answer: 'Security is our top priority. We use industry-standard encryption, SOC 2 Type II certified infrastructure, and regular security audits. Your code and data are always protected.' },
  { keywords: ['bug', 'error', 'problem', 'issue', 'help'], answer: 'If you\'re experiencing issues, try refreshing the page first. Check our status page for any ongoing incidents. You can also describe your specific issue here, and I\'ll try to help, or connect you with our support team.' },
  { keywords: ['cancel', 'subscription', 'refund', 'billing'], answer: 'You can cancel your subscription at any time from your account settings. Your access continues until the end of the billing period. For refunds, please contact our support team at support@appnode.com.' },
  { keywords: ['api', 'integration', 'connect', 'webhook'], answer: 'AppNode supports integrations with popular services like Stripe, OpenAI, Twilio, and more. You can also use our API to connect with external services. Check our documentation for available integrations.' },
  { keywords: ['custom domain', 'domain', 'url'], answer: 'Pro and Team plan users can connect custom domains to their deployed apps. Go to your project settings > Domains to add and configure your custom domain. DNS configuration instructions are provided.' }
]);

setByPath(sw, 'supportPage.knowledgeBase', [
  { keywords: ['appnode ni nini', 'kuhusu appnode', 'appnode'], answer: 'AppNode ni jukwaa linalotumia AI linakuwezesha kujenga programu za wavuti kamili kupitia maagizo ya lugha ya kawaida. Eleza tu unachotaka kujenga, na AI yetu itazalisha msimbo, muundo, na utendaji kwa ajili yako.' },
  { keywords: ['bei', 'gharama', 'bure', 'mpango'], answer: 'AppNode inatoa mpango wa bure wenye ukarimu kuanza. Bei yetu ni pamoja na: Mpango wa Bure (miradi 3, vipengele vya msingi vya AI), Mpango wa Pro ($20/mwezi kwa miradi isiyo na kikomo na AI ya hali ya juu), na Mpango wa Timu ($49/mwezi kwa vipengele vya ushirikiano). Tembelea ukurasa wetu wa bei kwa maelezo zaidi.' },
  { keywords: ['sambaza', 'usambazaji', 'chapisha', 'mwenyeji', 'hai'], answer: 'Kusambaza na AppNode ni rahisi! Bofya kitufe cha "Sambaza" katika kihariri cha mradi wako, na programu yako itakuwa hai kwa sekunde na URL ya kipekee. Watumiaji wa Pro wanaweza kuunganisha vikoa maalum. Tunashughulikia miundombinu yote ya mwenyeji kwa ajili yako.' },
  { keywords: ['ai', 'akili bandia', 'zalisha', 'agizo'], answer: 'AI yetu inaelewa maelezo ya lugha ya kawaida ya unachotaka kujenga. Unaweza kueleza vipengele, mipangilio, utendaji, na hata mantiki changamano. AI inazalisha msimbo safi, tayari kwa uzalishaji ambao unaweza kubinafsisha zaidi.' },
  { keywords: ['hifadhidata', 'data', 'hifadhi', 'backend'], answer: 'AppNode inajumuisha msaada wa hifadhidata uliojengwa ndani. Unaweza kuunda jedwali, kufafanua uhusiano, na kusimamia data kupitia kiolesura chetu cha kuona. Tunasaidia SQLite kwa maendeleo na tunaweza kupanua hadi PostgreSQL kwa uzalishaji.' },
  { keywords: ['timu', 'shirikiana', 'ushirikiano', 'shiriki'], answer: 'Mpango wetu wa Timu unasaidia ushirikiano wa wakati halisi. Wanachama wengi wa timu wanaweza kufanya kazi kwenye mradi huo huo kwa wakati mmoja. Vipengele vinajumuisha ufikiaji wa kuzingatia majukumu, maeneo ya kazi yanayoshirikiwa, mazungumzo ya timu, na ulipiaji wa kati.' },
  { keywords: ['hamisha', 'pakua', 'msimbo', 'chanzo'], answer: 'Ndio! Unaweza kuhamisha msimbo wako wote wa chanzo wakati wowote. AppNode inazalisha msimbo safi wa React/Next.js ambao unaweza kuendesha kwa uhuru. Watumiaji wa Pro wanapata ufikiaji wa kuunganishwa na GitHub kwa udhibiti wa toleo usio na mshono.' },
  { keywords: ['simu', 'ios', 'android', 'inayobadilika'], answer: 'Programu zote zilizojengwa na AppNode zinabadilika kwa chaguo-msingi. Pia tunafanya kazi kwenye vipengele vya maendeleo ya programu za simu za asili kwa iOS na Android, zitakuja hivi karibuni!' },
  { keywords: ['usalama', 'salama', 'faragha'], answer: 'Usalama ni kipaumbele chetu cha juu. Tunatumia usimbaji fiche wa kiwango cha tasnia, miundombinu iliyoidhinishwa na SOC 2 Aina II, na ukaguzi wa usalama wa mara kwa mara. Msimbo wako na data daima vinalindwa.' },
  { keywords: ['hitilafu', 'kasoro', 'tatizo', 'msaada'], answer: 'Ikiwa unakabiliwa na matatizo, jaribu kusasisha ukurasa kwanza. Angalia ukurasa wetu wa hali kwa matukio yoyote yanayoendelea. Unaweza pia kueleza tatizo lako mahususi hapa, na nitajaribu kusaidia, au kukuunganisha na timu yetu ya msaada.' },
  { keywords: ['futa', 'usajili', 'rejesho', 'ulipiaji'], answer: 'Unaweza kufuta usajili wako wakati wowote kutoka mipangilio ya akaunti yako. Ufikiaji wako unaendelea hadi mwisho wa kipindi cha ulipiaji. Kwa marejesho, tafadhali wasiliana na timu yetu ya msaada kwa support@appnode.com.' },
  { keywords: ['api', 'kuunganisha', 'webhook'], answer: 'AppNode inasaidia ujumuishaji na huduma maarufu kama Stripe, OpenAI, Twilio, na zaidi. Unaweza pia kutumia API yetu kuunganisha na huduma za nje. Angalia nyaraka zetu kwa ujumuishaji unaopatikana.' },
  { keywords: ['kikoa maalum', 'kikoa', 'url'], answer: 'Watumiaji wa Pro na Timu wanaweza kuunganisha vikoa maalum na programu zao zilizosambazwa. Nenda kwenye mipangilio ya mradi wako > Vikoa kuongeza na kusanidi kikoa chako maalum. Maagizo ya usanidi wa DNS yanatolewa.' }
]);

fs.writeFileSync(enPath, JSON.stringify(en, null, 2) + '\n');
fs.writeFileSync(swPath, JSON.stringify(sw, null, 2) + '\n');

console.log('Added teams pricing features and support knowledge base translations');
