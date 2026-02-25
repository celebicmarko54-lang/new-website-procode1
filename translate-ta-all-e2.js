var fs = require('fs');
var taPath = './src/translations/ta.json';
var ta = JSON.parse(fs.readFileSync(taPath, 'utf8'));
function set(obj, path, val) {
  var parts = path.split('.');
  var cur = obj;
  for (var i = 0; i < parts.length - 1; i++) {
    if (!cur[parts[i]]) cur[parts[i]] = {};
    if (typeof cur[parts[i]] !== 'object') cur[parts[i]] = {};
    cur = cur[parts[i]];
  }
  cur[parts[parts.length - 1]] = val;
}
var count = 0;
function t(key, val) { set(ta, key, val); count++; }

// === Proper nouns (keep as-is but must set them) ===
t('testimonials.author1', 'Sarah Chen');
t('testimonials.author2', 'Mike Rodriguez');
t('testimonials.author3', 'Emma Wilson');
t('productIntegrations.integrations.aws', 'Amazon Web Services');
t('productMobile.appStore', 'App Store');
t('productMobile.playStore', 'Play Store');
t('productMobile.googlePlay', 'Google Play');
t('productSecurity.badges.soc2', 'SOC 2 Type II');
t('productSecurity.badges.iso', 'ISO 27001');
t('productSecurity.features.sso.title', 'SSO & SAML');
t('enterprisePage.testimonials.testimonial1.author', 'Sarah Chen');
t('enterprisePage.testimonials.testimonial1.company', 'TechCorp');
t('enterprisePage.testimonials.testimonial2.author', 'Michael Torres');
t('enterprisePage.testimonials.testimonial2.company', 'FinanceApp');
t('enterprisePage.testimonials.testimonial3.author', 'Emily Watson');
t('enterprisePage.testimonials.testimonial3.company', 'DesignStudio');
t('enterprisePage.testimonials.testimonial4.author', 'James Kim');
t('enterprisePage.testimonials.testimonial4.company', 'CloudScale');
t('enterprisePage.testimonials.testimonial5.author', 'Anika Larsson');
t('enterprisePage.testimonials.testimonial5.company', 'SecureBank');
t('enterprisePage.testimonials.testimonial6.author', 'Ryan Park');
t('enterprisePage.testimonials.testimonial6.company', 'DataFlow');
t('enterprisePage.form.emailPlaceholder', 'john@company.com');
t('enterprisePage.form.companyPlaceholder', 'Acme Inc.');
t('privacyPage.section11.company', 'AppNode Inc.');
t('termsPage.section16.company', 'AppNode Inc.');
t('learnPage.titleHighlight', 'AppNode');
t('guidesPage.categories.saas', 'SaaS');

// === rulesPage remaining ===
t('rulesPage.rules.fairUse.title', 'நியாயமான பயன்பாடு');
t('rulesPage.rules.fairUse.description', 'தளத்தை நியாயமாகவும் நோக்கத்திற்கேற்பவும் பயன்படுத்துங்கள். பயன்பாட்டு வரம்புகளை மதியுங்கள், வளங்களை துஷ்பிரயோகம் செய்யாதீர்கள்.');
t('rulesPage.rules.fairUse.examples.title', 'எடுத்துக்காட்டுகள்:');
t('rulesPage.rules.fairUse.examples.item1', 'உங்கள் திட்டத்தின் பயன்பாட்டு வரம்புகளுக்குள் இருங்கள்');
t('rulesPage.rules.fairUse.examples.item2', 'அங்கீகரிக்கப்படாத வணிக நோக்கங்களுக்கு தளத்தைப் பயன்படுத்தாதீர்கள்');
t('rulesPage.rules.fairUse.examples.item3', 'தள கட்டுப்பாடுகளை மிறுக்காதீர்கள்');
t('rulesPage.enforcement.warning.title', 'எச்சரிக்கை');
t('rulesPage.enforcement.warning.subtitle', 'முதல் சிறிய மீறல்');
t('rulesPage.enforcement.suspension.title', 'இடைநிறுத்தம்');
t('rulesPage.enforcement.suspension.subtitle', 'மீண்டும் மீண்டும் அல்லது தீவிர மீறல்கள்');
t('rulesPage.enforcement.ban.subtitle', 'கடுமையான அல்லது தொடர்ச்சியான மீறல்கள்');
t('rulesPage.report.title', 'ஏதாவது தவறு தெரிகிறதா?');
t('rulesPage.report.description', 'எங்கள் தள விதிகளை மீறும் உள்ளடக்கம் அல்லது நடத்தையை நீங்கள் கண்டால், தயவுசெய்து புகாரளியுங்கள்.');
t('rulesPage.report.button', 'துஷ்பிரயோகத்தைப் புகாரளி');

// === affiliatesPage remaining ===
t('affiliatesPage.emailPlaceholder', 'உங்கள் மின்னஞ்சலை உள்ளிடவும்');
t('affiliatesPage.joinButton', 'இப்போது சேருங்கள்');
t('affiliatesPage.alertMessage', 'விண்ணப்பம் சமர்ப்பிக்கப்பட்டது! அடுத்த படிகளுக்கு உங்கள் மின்னஞ்சலைச் சரிபாருங்கள்.');
t('affiliatesPage.benefits.title', 'எங்கள் நிரலில் ஏன் சேர வேண்டும்?');
// affiliatesPage.benefits.items is an array
if (!ta.affiliatesPage) ta.affiliatesPage = {};
ta.affiliatesPage.benefits = ta.affiliatesPage.benefits || {};
ta.affiliatesPage.benefits.items = [
  {"title":"30% கமிஷன்","description":"ஒவ்வொரு பரிந்துரையிலும் 30% மீண்டும் மீண்டும் கமிஷன் சம்பாதியுங்கள்."},
  {"title":"60 நாள் குக்கீ","description":"எங்கள் 60 நாள் குக்கீ காலத்தில் மாற்றங்களைப் பிடியுங்கள்."},
  {"title":"நிகழ்நேர கண்காணிப்பு","description":"உங்கள் செயல்திறனையும் வருவாயையும் நிகழ்நேரத்தில் கண்காணியுங்கள்."},
  {"title":"பிரத்யேக ஆதரவு","description":"எங்கள் அஃபிலியேட் குழுவிடமிருந்து முன்னுரிமை ஆதரவைப் பெறுங்கள்."}
];
count++;
t('affiliatesPage.tiers.title', 'கமிஷன் நிலைகள்');
t('affiliatesPage.tiers.subtitle', 'நீங்கள் அதிகமாகப் பரிந்துரைக்க, அதிகமாகச் சம்பாதிப்பீர்கள். உங்கள் நெட்வொர்க் வளரும்போது அதிக கமிஷன் விகிதங்களைத் திறக்கவும்.');
t('affiliatesPage.tiers.referralsPerMonth', 'மாதாந்திர பரிந்துரைகள்');
t('affiliatesPage.tiers.recurringCommission', 'மீண்டும் மீண்டும் கமிஷன்');
ta.affiliatesPage.tiers = ta.affiliatesPage.tiers || {};
ta.affiliatesPage.tiers.items = [
  {"name":"ஸ்டார்ட்டர்","perks":["அடிப்படை டாஷ்போர்டு","மின்னஞ்சல் ஆதரவு","நிலையான இணைப்புகள்"]},
  {"name":"சில்வர்","perks":["மேம்பட்ட பகுப்பாய்வு","முன்னுரிமை ஆதரவு","தனிப்பயன் இணைப்புகள்"]},
  {"name":"கோல்ட்","perks":["பிரீமியம் பகுப்பாய்வு","பிரத்யேக மேலாளர்","இணை-பிராண்டிங்"]},
  {"name":"பிளாட்டினம்","perks":["முழு API அணுகல்","தனிப்பயன் ஒப்பந்தங்கள்","VIP ஆதரவு"]}
];
count++;
ta.affiliatesPage.howItWorks = ta.affiliatesPage.howItWorks || {};
ta.affiliatesPage.howItWorks.steps = [
  {"title":"1. பதிவு செய்யுங்கள்","description":"உங்கள் இலவச அஃபிலியேட் கணக்கை உருவாக்கி தனித்துவ பரிந்துரை இணைப்பைப் பெறுங்கள்."},
  {"title":"2. பகிருங்கள்","description":"உங்கள் பார்வையாளர்கள், வாசகர்கள் அல்லது சமூகத்துடன் AppNode-ஐ ஊக்குவிக்கவும்."},
  {"title":"3. சம்பாதியுங்கள்","description":"ஒவ்வொரு வெற்றிகரமான பரிந்துரைக்கும் மீண்டும் மீண்டும் கமிஷன் சம்பாதியுங்கள்."}
];
count++;
t('affiliatesPage.stats.title', 'அஃபிலியேட் வெற்றி');
t('affiliatesPage.stats.paidToAffiliates', 'அஃபிலியேட்களுக்கு செலுத்தியது');
t('affiliatesPage.stats.activeAffiliates', 'செயலில் உள்ள அஃபிலியேட்கள்');
t('affiliatesPage.stats.avgMonthlyEarnings', 'சராசரி மாத வருவாய்');
t('affiliatesPage.stats.avgPayoutTime', 'சராசரி கொடுப்பனவு நேரம்');

// === connectionsPage remaining ===
t('connectionsPage.requestTitle', 'வேறு ஒருங்கிணைப்பு தேவையா?');
t('connectionsPage.requestButton', 'ஒருங்கிணைப்பைக் கோருங்கள்');
t('connectionsPage.categories.payments', 'கட்டணங்கள்');
t('connectionsPage.categories.ai', 'AI');
t('connectionsPage.categories.hosting', 'ஹோஸ்டிங்');
t('connectionsPage.categories.authentication', 'அங்கீகாரம்');
t('connectionsPage.categories.search', 'தேடல்');
t('connectionsPage.categories.ecommerce', 'மின்-வணிகம்');
t('connectionsPage.categories.productivity', 'உற்பத்தித்திறன்');
// connectionsPage.connections is a big array - read en value and translate
ta.connectionsPage = ta.connectionsPage || {};
ta.connectionsPage.connections = [
  {"name":"Supabase","description":"Postgres தரவுத்தளத்துடன் திறந்த மூல Firebase மாற்று","category":"database"},
  {"name":"Stripe","description":"ஆன்லைன் கட்டண செயலாக்கம் மற்றும் சந்தா மேலாண்மை","category":"payments"},
  {"name":"GitHub","description":"பதிப்பு கட்டுப்பாடு மற்றும் கூட்டு மேம்பாடு","category":"development"},
  {"name":"Vercel","description":"ஒரு கிளிக்கில் நிலைநிறுத்தம் மற்றும் ஹோஸ்டிங்","category":"hosting"},
  {"name":"OpenAI","description":"AI மாடல்கள் மற்றும் GPT ஒருங்கிணைப்பு","category":"ai"},
  {"name":"Auth0","description":"பாதுகாப்பான அங்கீகாரம் மற்றும் அங்கீகரிப்பு","category":"authentication"},
  {"name":"Algolia","description":"வேகமான, தொடர்புடைய தேடல் அனுபவங்கள்","category":"search"},
  {"name":"Shopify","description":"மின்-வணிகம் மற்றும் ஆன்லைன் கடை ஒருங்கிணைப்பு","category":"ecommerce"},
  {"name":"Slack","description":"குழு செய்தியிடல் மற்றும் அறிவிப்புகள்","category":"communication"},
  {"name":"Notion","description":"ஆவணங்கள் மற்றும் திட்ட மேலாண்மை","category":"productivity"},
  {"name":"AWS","description":"கிளவுட் உள்கட்டமைப்பு மற்றும் சேவைகள்","category":"hosting"},
  {"name":"Firebase","description":"Google-இன் ஆப் மேம்பாட்டு தளம்","category":"database"},
  {"name":"Twilio","description":"தகவல் தொடர்பு API-கள் - SMS, குரல் மற்றும் மின்னஞ்சல்","category":"communication"},
  {"name":"MongoDB","description":"நெகிழ்வான NoSQL தரவுத்தள தீர்வு","category":"database"},
  {"name":"Cloudflare","description":"CDN, பாதுகாப்பு மற்றும் செயல்திறன்","category":"hosting"},
  {"name":"Google Analytics","description":"வலை பகுப்பாய்வு மற்றும் பயனர் நடத்தை கண்காணிப்பு","category":"analytics"}
];
count++;

// === securityReportPage remaining ===
t('securityReportPage.bugBounty.title', 'பக் பவுன்டி நிரல்');
t('securityReportPage.bugBounty.description', 'செல்லுபடியாகும் பாதுகாப்பு அறிக்கைகளுக்கு வெகுமதிகள் வழங்குகிறோம். பவுன்டி தொகைகள் தீவிரத்தன்மை மற்றும் தாக்கத்தைப் பொறுத்தது.');
t('securityReportPage.severityLabel', 'தீவிரத்தன்மை நிலை');
t('securityReportPage.severity.critical.label', 'முக்கியம்');
t('securityReportPage.severity.critical.description', 'முழு அமைப்பு சமரசம், தரவு மீறல்');
t('securityReportPage.severity.high.label', 'உயர்');
t('securityReportPage.severity.high.description', 'குறிப்பிடத்தக்க பாதுகாப்பு தாக்கம்');
t('securityReportPage.severity.medium.label', 'நடுத்தரம்');
t('securityReportPage.severity.medium.description', 'வரையறுக்கப்பட்ட பாதுகாப்பு தாக்கம்');
t('securityReportPage.severity.low.label', 'குறைவு');
t('securityReportPage.severity.low.description', 'குறைந்தபட்ச பாதுகாப்பு தாக்கம்');
t('securityReportPage.descriptionLabel', 'பாதிப்பு விவரிப்பு');
t('securityReportPage.descriptionHint', 'பாதிப்பை விரிவாக விவரிக்கவும். பாதிக்கப்பட்ட கூறு அல்லது அம்சத்தைச் சேர்க்கவும்.');
t('securityReportPage.descriptionPlaceholder', 'பாதுகாப்பு பாதிப்பை விவரிக்கவும்...');
t('securityReportPage.stepsLabel', 'மறுஉருவாக்கச் படிகள்');
t('securityReportPage.stepsHint', 'பாதிப்பை மறுஉருவாக்க தெளிவான படிகளை வழங்கவும்.');
t('securityReportPage.stepsPlaceholder', '1. செல்லவும்...\n2. கிளிக் செய்யவும்...\n3. கவனிக்கவும்...');
t('securityReportPage.emailLabel', 'உங்கள் மின்னஞ்சல்');
t('securityReportPage.emailHint', 'தொடர் நடவடிக்கை மற்றும் வெளிப்படுத்தல் ஒருங்கிணைப்புக்கு அவசியம்.');
t('securityReportPage.emailPlaceholder', 'security-researcher@example.com');
t('securityReportPage.submitButton', 'பாதுகாப்பு அறிக்கையைச் சமர்ப்பி');
t('securityReportPage.submitted.title', 'அறிக்கை பெறப்பட்டது');
t('securityReportPage.submitted.description', 'இந்த பாதுகாப்பு கவலையைப் பொறுப்பாக வெளிப்படுத்தியதற்கு நன்றி. எங்கள் பாதுகாப்பு குழு ஆய்வு செய்யும்.');
t('securityReportPage.submitted.responseTime', 'எதிர்பார்க்கப்படும் பதில் நேரம்:');
t('securityReportPage.submitted.critical', 'முக்கியம்: 24 மணி நேரத்திற்குள்');
t('securityReportPage.submitted.high', 'உயர்: 48 மணி நேரத்திற்குள்');
t('securityReportPage.submitted.mediumLow', 'நடுத்தரம்/குறைவு: 5 வணிக நாட்களுக்குள்');
t('securityReportPage.submitted.returnHome', 'முகப்புக்குத் திரும்பு');
t('securityReportPage.guidelines.title', 'பொறுப்பான வெளிப்படுத்தல் வழிகாட்டுதல்கள்');
ta.securityReportPage = ta.securityReportPage || {};
ta.securityReportPage.guidelines = ta.securityReportPage.guidelines || {};
ta.securityReportPage.guidelines.items = [
  "மற்ற பயனர்களின் தரவை அணுகவோ, மாற்றவோ அல்லது நீக்கவோ செய்யாதீர்கள்.",
  "சுரண்டலை நிரூபிக்க தீங்கான செயல்களைச் செய்யாதீர்கள்.",
  "கண்டுபிடிப்புகளை பொது வெளிப்படுத்தலுக்கு முன் எங்களுக்கு நியாயமான நேரம் கொடுங்கள்.",
  "பாதிப்புகளை நன்கு வரையறுக்கப்பட்ட மறுஉருவாக்கப் படிகளுடன் சமர்ப்பியுங்கள்.",
  "நீங்கள் வெளிப்படுத்தும் பாதிப்புகளை மற்றவர்களுக்கு வெளிப்படுத்தாதீர்கள்."
];
count++;
t('securityReportPage.contactNote', 'அவசர பாதுகாப்பு விஷயங்களுக்கு, நீங்கள் எங்களை இங்கும் தொடர்பு கொள்ளலாம்');

// === learnPublishPage remaining ===
t('learnPublishPage.title', 'AppNode உடன் உருவாக்கி வெளியிடுங்கள்');
ta.learnPublishPage = ta.learnPublishPage || {};
ta.learnPublishPage.steps = ta.learnPublishPage.steps || {};
t('learnPublishPage.steps.title', 'நான்கு எளிய படிகள்');
t('learnPublishPage.steps.subtitle', 'உங்கள் ஆப்பை உருவாக்கி வெளியிடுவது இதுவரை எளிதாக இருந்ததில்லை. இந்த படிகளைப் பின்பற்றுங்கள்.');
ta.learnPublishPage.steps.items = [
  {"title":"உங்கள் ஆப்பை விவரியுங்கள்","description":"AppNode-க்கு நீங்கள் என்ன உருவாக்க விரும்புகிறீர்கள் என்று சொல்லுங்கள்."},
  {"title":"தனிப்பயனாக்குங்கள்","description":"உங்கள் தேவைகளுக்கேற்ப வடிவமைப்பு, தளவமைப்பு மற்றும் அம்சங்களை மாற்றுங்கள்."},
  {"title":"முன்னோட்டம் & சோதனை","description":"நிலைநிறுத்துவதற்கு முன் உங்கள் ஆப்பை முன்னோட்டமிட்டு சோதியுங்கள்."},
  {"title":"வெளியிடுங்கள்","description":"ஒரு கிளிக்கில் உலகிற்கு உங்கள் ஆப்பை நிலைநிறுத்துங்கள்."}
];
count++;
ta.learnPublishPage.features = ta.learnPublishPage.features || {};
t('learnPublishPage.features.title', 'நிலைநிறுத்த அம்சங்கள்');
t('learnPublishPage.features.subtitle', 'தொழில்முறை ஆப்ளிகேஷன்களை வெளியிடுவதற்கு தேவையான அனைத்தும் உள்ளமைக்கப்பட்டுள்ளது.');
ta.learnPublishPage.features.items = [
  {"title":"ஒரு கிளிக் நிலைநிறுத்தம்","description":"சிக்கலான அமைப்பு அல்லது உள்ளமைவு தேவையில்லை."},
  {"title":"தனிப்பயன் டொமைன்கள்","description":"உங்கள் சொந்த டொமைன் பெயரை இணையுங்கள்."},
  {"title":"SSL சான்றிதழ்கள்","description":"தானியங்கி SSL மறையாக்கம்."},
  {"title":"CDN","description":"உலகளாவிய உள்ளடக்க விநியோக நெட்வொர்க்."}
];
count++;
ta.learnPublishPage.tips = ta.learnPublishPage.tips || {};
t('learnPublishPage.tips.title', 'சிறந்த முடிவுகளுக்கான குறிப்புகள்');
ta.learnPublishPage.tips.items = [
  {"bold":"குறிப்பிட்டதாக இருங்கள்:","text":"நீங்கள் விரும்பும் நிறங்கள், தளவமைப்புகள் மற்றும் செயல்பாட்டை விவரியுங்கள்."},
  {"bold":"மறு செய்யுங்கள்:","text":"AI உடன் உரையாடி உங்கள் வடிவமைப்பை மேம்படுத்துங்கள்."},
  {"bold":"டெம்ப்ளேட்களைப் பயன்படுத்துங்கள்:","text":"விரைவாகத் தொடங்க உருவாக்கத் தயாரான டெம்ப்ளேட்களிலிருந்து தொடங்குங்கள்."},
  {"bold":"சோதியுங்கள்:","text":"வெளியிடுவதற்கு முன் வெவ்வேறு சாதனங்களில் சோதியுங்கள்."}
];
count++;
t('learnPublishPage.cta.startButton', 'இலவசமாக உருவாக்கத் தொடங்கு');
t('learnPublishPage.cta.docsButton', 'ஆவணங்களைக் காண்க');

// === blockchainSection remaining ===
t('blockchainSection.titleLine1', 'எந்த பிளாக்செயினிலும்');
t('blockchainSection.titleLine2', 'எதையும் உருவாக்குங்கள்');
t('blockchainSection.titleLine3', 'முன்னெப்போதையும் விட வேகமாக');
t('blockchainSection.description', 'Love Code முழு ஆன்-செயின் சுற்றுச்சூழல் அமைப்பையும் பூஜ்ஜிய உராய்வுடன் திறக்கிறது. L1 இலிருந்து L2 வரை, எல்லா செயின்களிலும்.');
t('blockchainSection.descriptionHighlight', 'வரம்புகள் இல்லை. சிக்கலில்லை. தூய படைப்பு மட்டுமே.');
ta.blockchainSection = ta.blockchainSection || {};
ta.blockchainSection.useCases = [
  "லேண்டிங் பக்கங்கள்","டோக்கன் ப்ரீசேல்ஸ்","NFT ட்ராப்ஸ்","DeFi டாஷ்போர்டுகள்","Web3 ஆப்கள்","DAO கருவிகள்"
];
count++;
ta.blockchainSection.features = [
  {"title":"மின்னல் வேகம்","description":"எந்த செயினிலும் வினாடிகளில் நிலைநிறுத்துங்கள், உள்ளமைவு தேவையில்லை."},
  {"title":"மல்டி-செயின்","description":"Ethereum, Solana, Polygon மற்றும் பல செயின்களை ஆதரிக்கிறது."},
  {"title":"ஸ்மார்ட் ஒப்பந்தங்கள்","description":"நேரடி ஸ்மார்ட் ஒப்பந்த ஒருங்கிணைப்பு மற்றும் சோதனை."},
  {"title":"Web3 அங்கீகாரம்","description":"வாலட் இணைப்பு மற்றும் டோக்கன் கேட்டிங் உள்ளமைக்கப்பட்டுள்ளது."}
];
count++;
t('blockchainSection.bottomText', 'பிளாக்செயினில் இருந்தால் இங்கே உருவாக்கலாம் —');
t('blockchainSection.bottomHighlight', 'எளிதாக, வேகமாக, மற்றும் முற்றிலும் புதிய நிலையில்.');
t('blockchainSection.ctaButton', 'Web3-இல் உருவாக்கத் தொடங்கு');

// === signupPage remaining ===
ta.signupPage = ta.signupPage || {};
ta.signupPage.roles = [
  "நிறுவனர் / தொழில்முனைவர்","வடிவமைப்பாளர்","டெவலப்பர்","சந்தையாளர்","தயாரிப்பு மேலாளர்","மாணவர்"
];
count++;
t('signupPage.passwordsDoNotMatch', 'கடவுச்சொற்கள் பொருந்தவில்லை');
t('signupPage.passwordTooShort', 'கடவுச்சொல் குறைந்தபட்சம் 6 எழுத்துகள் இருக்க வேண்டும்');
t('signupPage.emailExists', 'இந்த மின்னஞ்சலில் ஏற்கனவே கணக்கு உள்ளது');
t('signupPage.selectAvatar', 'அவதார் நிறத்தைத் தேர்ந்தெடுக்கவும்');
t('signupPage.selectRole', 'உங்கள் பங்கைத் தேர்ந்தெடுக்கவும்');

// learnPage coursePaths array
ta.learnPage = ta.learnPage || {};
ta.learnPage.coursePaths = [
  {"title":"ஆரம்பநிலையாளர் பாதை","description":"AI ஆப் உருவாக்கத்தின் அடிப்படைகளிலிருந்து தொடங்குங்கள்.","courses":"8 பாடங்கள்","duration":"4 வாரங்கள்","level":"ஆரம்ப நிலை"},
  {"title":"தொழில்முறை பாதை","description":"மேம்பட்ட நுட்பங்கள் மற்றும் உற்பத்தி-தர ஆப்கள்.","courses":"12 பாடங்கள்","duration":"8 வாரங்கள்","level":"இடைநிலை"},
  {"title":"நிறுவன பாதை","description":"குழு ஒத்துழைப்பு மற்றும் நிறுவன அம்சங்கள்.","courses":"6 பாடங்கள்","duration":"3 வாரங்கள்","level":"மேம்பட்ட நிலை"}
];
count++;

fs.writeFileSync(taPath, JSON.stringify(ta, null, 2), 'utf8');
console.log('Phase E-fix complete. Translations applied:', count);
