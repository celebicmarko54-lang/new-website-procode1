// Comprehensive Tamil Translation Script
// Translates ALL remaining English strings in ta.json to Tamil
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

// ===== COMMON =====
t('common.switchToLightMode', 'ஒளி பயன்முறைக்கு மாறு');
t('common.switchToDarkMode', 'இருள் பயன்முறைக்கு மாறு');
t('common.addAttachments', 'இணைப்புகளைச் சேர்');
t('common.addImage', 'படத்தைச் சேர்');
t('common.moveMouseToExplore', 'ஆராய சுட்டியை நகர்த்துங்கள்');

// ===== HOMEPAGE =====
t('homePage.videoSection.badge', 'எப்படி வேலை செய்கிறது');
t('homePage.videoSection.title', 'AppNode செயலில் பாருங்கள்');
t('homePage.videoSection.subtitle', 'டெவலப்பர்கள் நிமிடங்களில் உற்பத்தி-தயார் ஆப்களை எவ்வாறு உருவாக்குகிறார்கள் என்பதைப் பாருங்கள் இயற்கை மொழியைப் பயன்படுத்தி.');

// ===== FEATURES =====
t('features.subtitle', 'AppNode உங்கள் கனவு ஆப்ளிகேஷன்களை உருவாக்க, வெளியிட மற்றும் அளவிட தேவையான அனைத்து கருவிகளையும் அம்சங்களையும் வழங்குகிறது.');
t('features.aiPowered.description', 'உங்கள் யோசனையை இயற்கை மொழியில் விவரிக்கவும், AI நிமிடங்களில் உங்கள் முழு ஆப்ளிகேஷனையும் உருவாக்குவதைக் கண்காணியுங்கள்.');
t('features.visualBuilder.description', 'கூறுகளை இழுத்து விடுங்கள், தளவமைப்புகளைத் தனிப்பயனாக்குங்கள், குறியீடு இல்லாமல் அழகான இடைமுகங்களை வடிவமையுங்கள்.');
t('features.instantDeploy.description', 'ஒரே கிளிக்கில் உங்கள் ஆப்ளிகேஷன்களை வெளியிடுங்கள். சர்வர் கட்டமைப்பு அல்லது DevOps அறிவு தேவையில்லை.');
t('features.database.description', 'தானியங்கி ஸ்கீமா உருவாக்கம் மற்றும் உறவு மேலாண்மையுடன் சக்திவாய்ந்த தரவுத்தள ஒருங்கிணைப்பு.');
t('features.auth.description', 'பெட்டியிலிருந்தே பாதுகாப்பான பயனர் அங்கீகாரம். சமூக உள்நுழைவு, JWT மற்றும் பல காரணி அங்கீகாரத்திற்கான ஆதரவு.');
t('features.api.title', 'API ஒருங்கிணைப்பு');
t('features.api.description', 'எங்கள் காட்சி இணைப்பியுடன் எந்த API-யுடனும் இணையுங்கள். OpenAPI விவரக்குறிப்புகளை இறக்குமதி செய்யுங்கள்.');
t('features.responsive.description', 'உங்கள் ஆப்கள் எந்த சாதனத்திலும் அருமையாகத் தெரியும். தானியங்கி பதிலளிக்கக்கூடிய தளவமைப்புகள்.');
t('features.collaboration.description', 'உங்கள் குழுவுடன் நிகழ்நேரத்தில் இணைந்து பணியாற்றுங்கள். மாற்றங்களை உடனடியாகக் காணுங்கள்.');

// ===== BUILD ANYTHING =====
t('buildAnything.subtitle', 'உருவாக்கத் தொடங்குங்கள். சம்பாதிக்கத் தொடங்குங்கள். இன்றே.');
t('buildAnything.exploreAll', 'அனைத்து டெம்ப்ளேட்களையும் ஆராயுங்கள்');
t('buildAnything.webApps.description', 'அங்கீகாரம், தரவுத்தளங்கள் மற்றும் API-களுடன் முழு அம்ச வலை ஆப்கள்.');
t('buildAnything.mobileApps.description', 'ஒரே குறியீட்டு தளத்திலிருந்து iOS மற்றும் Android-க்கான நேட்டிவ் மொபைல் அனுபவங்கள்.');
t('buildAnything.dashboards.description', 'நிகழ்நேர புதுப்பிப்புகளுடன் தரவு காட்சிப்படுத்தல் மற்றும் பகுப்பாய்வு டாஷ்போர்டுகள்.');
t('buildAnything.ecommerce.title', 'மின்-வணிகம்');
t('buildAnything.ecommerce.description', 'கட்டணம், சரக்கு மற்றும் ஆர்டர் மேலாண்மையுடன் ஆன்லைன் கடைகள்.');
t('buildAnything.internal.title', 'உள் கருவிகள்');
t('buildAnything.internal.description', 'தனிப்பயன் நிர்வாக பேனல்கள், CRM-கள் மற்றும் பணிப்பாய்வு தானியங்கி கருவிகள்.');
t('buildAnything.marketplace.title', 'சந்தைத்தளங்கள்');
t('buildAnything.marketplace.description', 'வாங்குபவர்களையும் விற்பவர்களையும் இணைக்கும் இருதரப்பு தளங்கள்.');
t('buildAnything.categories.saasplatform', 'SaaS தளம்');
t('buildAnything.categories.gamingportal', 'கேமிங் போர்டல்');
t('buildAnything.categories.mapsnavigation', 'வரைபடங்கள் & வழிசெலுத்தல்');
t('buildAnything.categories.fashionstore', 'ஃபேஷன் கடை');
t('buildAnything.categories.stylecollection', 'ஸ்டைல் தொகுப்பு');
t('buildAnything.categories.beautyproducts', 'அழகு பொருட்கள்');
t('buildAnything.categories.fitnesstracker', 'உடற்பயிற்சி கண்காணிப்பான்');
t('buildAnything.categories.luxuryfragrance', 'ஆடம்பர வாசனை');
t('buildAnything.categories.beautystore', 'அழகு கடை');
t('buildAnything.categories.streamingplatform', 'ஸ்ட்ரீமிங் தளம்');
t('buildAnything.categories.gaminggearstore', 'கேமிங் கியர் கடை');
t('buildAnything.categories.gamingstore', 'கேமிங் கடை');
t('buildAnything.categories.synthesizer', 'சின்தசைசர்');
t('buildAnything.categories.projectroadmap', 'திட்ட வரைபடம்');
t('buildAnything.categories.analyticsdashboard', 'பகுப்பாய்வு டாஷ்போர்டு');

// ===== FOOTER =====
t('footer.buildApps', 'AI மூலம் உற்பத்தி-தயார் ஆப்களை உருவாக்குங்கள்');
t('footer.company', 'நிறுவனம்');
t('footer.about', 'எங்களைப் பற்றி');
t('footer.enterprise', 'நிறுவனம்');
t('footer.security', 'பாதுகாப்பு');
t('footer.pricing', 'விலை நிர்ணயம்');
t('footer.resources', 'வளங்கள்');
t('footer.legal', 'சட்டம்');
t('footer.connectWithUs', 'எங்களுடன் இணையுங்கள்');
t('footer.copyright', 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை');

// ===== CTA =====
t('cta.title', 'உருவாக்கத் தொடங்கத் தயாரா?');
t('cta.subtitle', 'இலவசமாக AppNode-உடன் உருவாக்கத் தொடங்குங்கள். கிரெடிட் கார்டு தேவையில்லை.');
t('cta.startFree', 'இலவச கணக்கைத் தொடங்கு');
t('cta.talkToSales', 'விற்பனையுடன் பேசு');
t('cta.noCreditCard', 'கிரெடிட் கார்டு தேவையில்லை');
t('cta.cancelAnytime', 'எப்போது வேண்டுமானாலும் ரத்து செய்யலாம்');
t('cta.freeForever', 'என்றும் இலவச திட்டம்');
t('cta.noSetup', 'அமைப்பு தேவையில்லை');
t('cta.badge', 'இன்றே இலவசமாகத் தொடங்குங்கள்');

// ===== BLOCKCHAIN =====
t('blockchainSection.title', 'வெப்3 & பிளாக்செயின் ஒருங்கிணைப்பு');
t('blockchainSection.subtitle', 'உள்ளமைக்கப்பட்ட பிளாக்செயின் ஆதரவுடன் பரவலாக்கப்பட்ட ஆப்ளிகேஷன்களை உருவாக்குங்கள்');
t('blockchainSection.feature1.title', 'ஸ்மார்ட் ஒப்பந்தங்கள்');
t('blockchainSection.feature1.description', 'நேரடியாக உங்கள் ஆப்-இல் ஸ்மார்ட் ஒப்பந்தங்களை வெளியிட்டு தொடர்பு கொள்ளுங்கள்');
t('blockchainSection.feature2.title', 'வாலட் ஒருங்கிணைப்பு');
t('blockchainSection.feature2.description', 'MetaMask, WalletConnect மற்றும் பிற வழங்குநர்களை ஆதரிக்கிறது');
t('blockchainSection.feature3.title', 'NFT ஆதரவு');
t('blockchainSection.feature3.description', 'உள்ளமைக்கப்பட்ட கருவிகளுடன் NFT-களை உருவாக்கி, நிர்வகிக்கவும் மற்றும் காண்பிக்கவும்');
t('blockchainSection.feature4.title', 'டோக்கன் கேட்வே');
t('blockchainSection.feature4.description', 'டோக்கன் அடிப்படையிலான அணுகல் கட்டுப்பாடு மற்றும் கட்டண ஒருங்கிணைப்பு');
t('blockchainSection.exploreDApps', 'dApps ஐ ஆராயுங்கள்');

// ===== COMMUNITY =====
t('community.title', 'உலகளாவிய சமூகத்தில் சேருங்கள்');
t('community.subtitle', 'டெவலப்பர்கள் சமூகத்தின் ஒரு பகுதியாகுங்கள்');
t('community.joinDiscord', 'Discord-இல் சேருங்கள்');
t('community.viewGitHub', 'GitHub-ல் காணுங்கள்');
t('community.stats.developers', 'செயலில் உள்ள டெவலப்பர்கள்');

// ===== TESTIMONIALS =====
t('testimonials.title', 'டெவலப்பர்கள் AppNode-ஐ விரும்புகிறார்கள்');
t('testimonials.subtitle', 'உலகெங்கிலும் உள்ள டெவலப்பர்கள் AppNode மூலம் அற்புதமான ஆப்ளிகேஷன்களை உருவாக்குகிறார்கள்');
t('testimonials.roles.fullstack', 'ஃபுல்ஸ்டாக் டெவலப்பர்');
t('testimonials.roles.startup', 'ஸ்டார்ட்அப் நிறுவனர்');
t('testimonials.roles.freelance', 'ஃப்ரீலான்ஸ் டெவலப்பர்');
t('testimonials.roles.techlead', 'டெக் லீட்');
t('testimonials.quotes.q1', 'AppNode எங்கள் முன்மாதிரி செயல்முறையை வாரங்களிலிருந்து மணிநேரமாக மாற்றியது. AI-இயங்கும் குறியீடு உருவாக்கம் நம்பமுடியாத அளவிற்கு துல்லியமானது.');
t('testimonials.quotes.q2', 'ஒரு ஸ்டார்ட்அப் நிறுவனராக, AppNode நான் MVP-களை மிக வேகமாக சோதிக்க அனுமதிக்கிறது.');
t('testimonials.quotes.q3', 'ஃப்ரீலான்ஸர்களுக்கான சிறந்த கருவி. நான் அதிக திட்டங்களை வேகமாக வழங்குகிறேன்.');
t('testimonials.quotes.q4', 'தரத்தை பாதிக்காமல் எங்கள் குழுவின் வேகத்தை இரட்டிப்பாக்கியது.');
t('testimonials.names.n1', 'சாரா ஜான்சன்');
t('testimonials.names.n2', 'அலெக்ஸ் சென்');
t('testimonials.names.n3', 'மைக் வில்சன்');
t('testimonials.names.n4', 'எமிலி ராட்ரிகஸ்');
t('testimonials.companies.c1', 'டெக்கார்ப்');
t('testimonials.companies.c2', 'லாஞ்ச்லேப்ஸ்');

// ===== ERRORS =====
t('errors.notFound', 'பக்கம் கிடைக்கவில்லை');
t('errors.serverError', 'சர்வர் பிழை');
t('errors.unauthorized', 'அங்கீகரிக்கப்படவில்லை');
t('errors.forbidden', 'தடைசெய்யப்பட்டது');

// ===== LEGAL =====
t('legal.privacy', 'தனியுரிமைக் கொள்கை');
t('legal.terms', 'சேவை விதிமுறைகள்');
t('legal.cookies', 'குக்கீ கொள்கை');
t('legal.rules', 'தள விதிகள்');
t('legal.lastUpdated', 'கடைசியாகப் புதுப்பிக்கப்பட்டது');
t('legal.tableOfContents', 'உள்ளடக்க அட்டவணை');

// ===== PRICING =====
t('pricing.title', 'உங்கள் திட்டத்தைத் தேர்வு செய்யுங்கள்');
t('pricing.subtitle', 'இலவசமாகத் தொடங்கி, வளரும்போது மேம்படுத்துங்கள்');
t('pricing.monthly', 'மாதாந்திர');
t('pricing.annual', 'ஆண்டு');
t('pricing.save', 'சேமிக்கவும்');
t('pricing.free.name', 'இலவசம்');
t('pricing.free.price', '$0');
t('pricing.free.period', '/மாதம்');
t('pricing.free.description', 'தனிநபர் திட்டங்களுக்கு ஏற்றது');
t('pricing.free.features.f1', '5 திட்டங்கள் வரை');
t('pricing.free.features.f2', 'சமூக ஆதரவு');
t('pricing.free.features.f3', 'அடிப்படை AI உதவி');
t('pricing.free.features.f4', '1GB சேமிப்பிடம்');
t('pricing.free.cta', 'இலவசமாகத் தொடங்கு');
t('pricing.pro.name', 'புரோ');
t('pricing.pro.price', '$19');
t('pricing.pro.period', '/மாதம்');
t('pricing.pro.description', 'தொழில்முனைவோர் மற்றும் டெவலப்பர்களுக்கு');
t('pricing.pro.features.f1', 'வரம்பற்ற திட்டங்கள்');
t('pricing.pro.features.f2', 'முன்னுரிமை ஆதரவு');
t('pricing.pro.features.f3', 'மேம்பட்ட AI அம்சங்கள்');
t('pricing.pro.features.f4', '50GB சேமிப்பிடம்');
t('pricing.pro.features.f5', 'தனிப்பயன் டொமைன்');
t('pricing.pro.features.f6', 'பகுப்பாய்வு');
t('pricing.pro.cta', 'புரோவுடன் தொடங்கு');
t('pricing.pro.popular', 'மிகவும் பிரபலம்');
t('pricing.enterprise.name', 'நிறுவனம்');
t('pricing.enterprise.price', 'தனிப்பயன்');
t('pricing.enterprise.description', 'பெரிய குழுக்கள் மற்றும் அமைப்புகளுக்கு');
t('pricing.enterprise.features.f1', 'அனைத்து புரோ அம்சங்கள்');
t('pricing.enterprise.features.f2', 'அர்ப்பணிக்கப்பட்ட ஆதரவு');
t('pricing.enterprise.features.f3', 'தனிப்பயன் ஒருங்கிணைப்புகள்');
t('pricing.enterprise.features.f4', 'SLA உத்தரவாதம்');
t('pricing.enterprise.features.f5', 'குழு மேலாண்மை');
t('pricing.enterprise.cta', 'விற்பனையைத் தொடர்புகொள்ளுங்கள்');

// ===== AUTH =====
t('auth.login.title', 'மீண்டும் வரவேற்கிறோம்');
t('auth.login.subtitle', 'உங்கள் கணக்கில் உள்நுழையுங்கள்');
t('auth.login.email', 'மின்னஞ்சல் முகவரி');
t('auth.login.password', 'கடவுச்சொல்');
t('auth.login.forgotPassword', 'கடவுச்சொல்லை மறந்துவிட்டீர்களா?');
t('auth.login.rememberMe', 'என்னை நினைவில் வை');
t('auth.login.submit', 'உள்நுழை');
t('auth.login.noAccount', 'கணக்கு இல்லையா?');
t('auth.login.signUp', 'பதிவு செய்க');
t('auth.login.orContinueWith', 'அல்லது தொடருங்கள்');
t('auth.login.continueWithGoogle', 'Google மூலம் தொடரவும்');
t('auth.login.continueWithGithub', 'GitHub மூலம் தொடரவும்');
t('auth.signup.title', 'இன்றே உருவாக்கத் தொடங்குங்கள்');
t('auth.signup.subtitle', 'இலவச கணக்கை உருவாக்குங்கள்');
t('auth.signup.name', 'முழு பெயர்');
t('auth.signup.email', 'மின்னஞ்சல் முகவரி');
t('auth.signup.password', 'கடவுச்சொல்');
t('auth.signup.confirmPassword', 'கடவுச்சொல்லை உறுதிப்படுத்து');
t('auth.signup.termsAgree', 'நான் சேவை விதிமுறைகள் மற்றும் தனியுரிமைக் கொள்கையை ஒப்புக்கொள்கிறேன்');
t('auth.signup.submit', 'கணக்கை உருவாக்கு');
t('auth.signup.hasAccount', 'ஏற்கனவே கணக்கு உள்ளதா?');
t('auth.signup.logIn', 'உள்நுழை');
t('auth.signup.nameRequired', 'பெயர் தேவை');
t('auth.signup.emailRequired', 'மின்னஞ்சல் தேவை');
t('auth.signup.emailInvalid', 'செல்லுபடியான மின்னஞ்சலை உள்ளிடவும்');
t('auth.signup.passwordRequired', 'கடவுச்சொல் தேவை');
t('auth.signup.passwordLength', 'கடவுச்சொல் குறைந்தது 8 எழுத்துகள் இருக்க வேண்டும்');
t('auth.signup.passwordMatch', 'கடவுச்சொற்கள் பொருந்த வேண்டும்');
t('auth.signup.termsRequired', 'விதிமுறைகளை ஒப்புக்கொள்ள வேண்டும்');
t('auth.signup.orSignUpWith', 'அல்லது பதிவு செய்யுங்கள்');
t('auth.signup.benefit1', 'இலவசமாகத் தொடங்கு - கிரெடிட் கார்டு தேவையில்லை');
t('auth.signup.benefit2', 'நிமிடங்களில் ஆப்களை உருவாக்குங்கள்');
t('auth.signup.benefit3', 'ஒரே கிளிக்கில் நிலைநிறுத்தம்');
t('auth.signup.benefit4', '24/7 சமூக ஆதரவு');
t('auth.signup.socialProof', '10,000+ டெவலப்பர்களுடன் இணையுங்கள்');

// ===== ABOUT PAGE =====
t('aboutPage.title', 'AppNode பற்றி');
t('aboutPage.subtitle', 'AI-இயங்கும் ஆப் உருவாக்கத்தின் எதிர்காலத்தை உருவாக்குகிறோம்');
t('aboutPage.mission.title', 'எங்கள் நோக்கம்');
t('aboutPage.mission.description', 'ஒவ்வொருவரும் சக்திவாய்ந்த ஆப்ளிகேஷன்களை உருவாக்குவதை AI-இயங்கும் கருவிகள் மூலம் ஜனநாயகப்படுத்துவது.');
t('aboutPage.story.title', 'எங்கள் கதை');
t('aboutPage.story.p1', 'AppNode 2024-ல் ஒரு எளிய பார்வையுடன் நிறுவப்பட்டது: ஆப் உருவாக்கத்தை அனைவருக்கும் அணுகக்கூடியதாக ஆக்குவது.');
t('aboutPage.story.p2', 'இன்று, உலகெங்கிலும் உள்ள ஆயிரக்கணக்கான டெவலப்பர்கள் AppNode-ஐ நம்புகிறார்கள்.');
t('aboutPage.team.title', 'எங்கள் குழு');
t('aboutPage.team.subtitle', 'எங்கள் அனுபவமிக்க தலைமைக் குழுவை சந்தியுங்கள்');
t('aboutPage.team.member1.name', 'டேவிட் பார்க்');
t('aboutPage.team.member1.role', 'தலைமை நிர்வாக அதிகாரி & நிறுவனர்');
t('aboutPage.team.member1.bio', 'முன்னாள் Google பொறியாளர், AI மற்றும் டெவலப்பர் கருவிகளில் 10+ ஆண்டுகள் அனுபவம்.');
t('aboutPage.team.member2.name', 'சாரா கிம்');
t('aboutPage.team.member2.role', 'தலைமை தொழில்நுட்ப அதிகாரி');
t('aboutPage.team.member2.bio', 'AI ஆராய்ச்சியாளர், முன்னாள் OpenAI, இயந்திர கற்றல் மற்றும் NLP நிபுணர்.');
t('aboutPage.team.member3.name', 'ஜேம்ஸ் வில்சன்');
t('aboutPage.team.member3.role', 'வடிவமைப்புத் தலைவர்');
t('aboutPage.team.member3.bio', 'அவார்டு வென்ற UX வடிவமைப்பாளர், முன்னாள் Apple மற்றும் Figma.');
t('aboutPage.team.member4.name', 'எமிலி சாங்');
t('aboutPage.team.member4.role', 'பொறியியல் VP');
t('aboutPage.team.member4.bio', 'முழு-ஸ்டாக் மேதை, 50+ வெற்றிகரமான தயாரிப்புகளை அளவிட்டவர்.');
t('aboutPage.values.title', 'எங்கள் மதிப்புகள்');
t('aboutPage.values.subtitle', 'நாங்கள் நம்பும் கொள்கைகள்');
t('aboutPage.values.innovation.title', 'புதுமை');
t('aboutPage.values.innovation.description', 'நாங்கள் எப்போதும் சாத்தியமானவற்றின் எல்லைகளை மீறுகிறோம்.');
t('aboutPage.values.community.title', 'சமூகம்');
t('aboutPage.values.community.description', 'நாங்கள் உருவாக்குவதில் சமூகத்தை முதலில் வைக்கிறோம்.');
t('aboutPage.values.quality.title', 'தரம்');
t('aboutPage.values.quality.description', 'நாங்கள் செய்யும் எல்லாவற்றிலும் சிறந்ததை நாடுகிறோம்.');
t('aboutPage.values.transparency.title', 'வெளிப்படைத்தன்மை');
t('aboutPage.values.transparency.description', 'நேர்மையும் திறந்த தகவல்தொடர்பும் எங்கள் அடிப்படை.');
t('aboutPage.stats.title', 'எண்களில் AppNode');
t('aboutPage.stats.developers', 'டெவலப்பர்கள்');
t('aboutPage.stats.apps', 'உருவாக்கப்பட்ட ஆப்கள்');
t('aboutPage.stats.countries', 'நாடுகள்');
t('aboutPage.stats.uptime', 'இயங்கு நேரம்');
t('aboutPage.joinUs.title', 'எங்களுடன் இணையுங்கள்');
t('aboutPage.joinUs.description', 'நாங்கள் எப்போதும் திறமையான மக்களைத் தேடுகிறோம்.');
t('aboutPage.joinUs.cta', 'வேலைவாய்ப்புகளைக் காணுங்கள்');

// ===== ENTERPRISE =====
t('enterprise.title', 'நிறுவன AI மேம்பாட்டுத் தளம்');
t('enterprise.subtitle', 'நிறுவன-தர பாதுகாப்பு, வரம்பற்ற அளவிடுதல் மற்றும் அர்ப்பணிக்கப்பட்ட ஆதரவு');
t('enterprise.cta', 'விற்பனையைத் தொடர்புகொள்ளுங்கள்');
t('enterprise.trustedBy', 'முன்னணி நிறுவனங்களால் நம்பப்படுகிறது');
t('enterprise.features.title', 'நிறுவன அம்சங்கள்');
t('enterprise.features.sso.title', 'SSO & SAML');
t('enterprise.features.sso.description', 'உங்கள் அடையாள வழங்குநருடன் ஒருங்கிணைக்கவும்');
t('enterprise.features.audit.title', 'தணிக்கை பதிவுகள்');
t('enterprise.features.audit.description', 'விரிவான செயல்பாட்டு பதிவும் கண்காணிப்பும்');
t('enterprise.features.compliance.title', 'இணக்கம்');
t('enterprise.features.compliance.description', 'SOC 2, GDPR மற்றும் HIPAA இணக்கத்திற்கான ஆதரவு');
t('enterprise.features.sla.title', 'SLA உத்தரவாதம்');
t('enterprise.features.sla.description', '99.99% இயங்கு நேர உத்தரவாதம் நிதி காப்புறுதியுடன்');
t('enterprise.features.support.title', 'அர்ப்பணிக்கப்பட்ட ஆதரவு');
t('enterprise.features.support.description', '24/7 முன்னுரிமை ஆதரவு அர்ப்பணிக்கப்பட்ட கணக்கு மேலாளருடன்');

// ===== BLOG/DOCS/STATUS/SOLUTIONS/SUPPORT =====
t('blog.title', 'AppNode வலைப்பதிவு');
t('blog.subtitle', 'சமீபத்திய செய்திகள், பயிற்சிகள் மற்றும் நுண்ணறிவுகள்');
t('blog.readMore', 'மேலும் படிக்கவும்');
t('blog.categories', 'வகைகள்');
t('blog.allPosts', 'அனைத்து பதிவுகள்');
t('blog.searchPlaceholder', 'வலைப்பதிவுகளில் தேடுங்கள்...');
t('docs.title', 'ஆவணங்கள்');
t('docs.subtitle', 'AppNode-ஐ கற்றுக்கொள்ள உங்களுக்குத் தேவையான அனைத்தும்');
t('docs.searchPlaceholder', 'ஆவணங்களில் தேடுங்கள்...');
t('docs.gettingStarted', 'தொடங்குதல்');
t('docs.apiReference', 'API குறிப்பு');
t('docs.tutorials', 'பயிற்சிகள்');
t('docs.changelog', 'மாற்ற பதிவு');
t('docs.noResults', 'முடிவுகள் எதுவும் கிடைக்கவில்லை');
t('status.title', 'கணினி நிலை');
t('status.operational', 'அனைத்து அமைப்புகளும் இயங்குகின்றன');
t('status.subtitle', 'நிகழ்நேர நிலை கண்காணிப்பு');
t('status.allOperational', 'அனைத்தும் இயல்பாக இயங்குகின்றன');
t('status.lastUpdated', 'கடைசியாகப் புதுப்பிக்கப்பட்டது');
t('solutions.title', 'தீர்வுகள்');
t('solutions.subtitle', 'உங்கள் தேவைகளுக்கான சரியான கருவிகளைக் கண்டறியுங்கள்');
t('solutions.web3.title', 'Web3 டெவலப்மென்ட்');
t('solutions.web3.subtitle', 'பரவலாக்கப்பட்ட ஆப்களை உருவாக்குங்கள்');
t('solutions.web3.description', 'AppNode-இன் Web3 கருவிகளுடன் பிளாக்செயின் ஆப்ளிகேஷன்களை உருவாக்குங்கள்');
t('solutions.learnMore', 'மேலும் அறிக');
t('solutions.getStarted', 'தொடங்குங்கள்');
t('support.title', 'நாங்கள் உதவ இங்கே இருக்கிறோம்');
t('support.subtitle', 'எந்தக் கேள்விக்கும் எங்கள் ஆதரவுக் குழுவைத் தொடர்புகொள்ளுங்கள்');
t('support.searchPlaceholder', 'உங்கள் கேள்விக்கான பதிலைத் தேடுங்கள்...');
t('support.contactUs', 'எங்களைத் தொடர்புகொள்ளுங்கள்');

// ===== CAREERS =====
t('careers.title', 'AppNode-இல் தொழில்');
t('careers.subtitle', 'ஆப் உருவாக்கத்தின் எதிர்காலத்தை உருவாக்குங்கள்');
t('careers.viewOpenings', 'காலி பணியிடங்களைக் காண்க');
t('careers.benefits.title', 'பலன்கள் & சலுகைகள்');
t('careers.benefits.remote', 'தொலைநிலை பணி');
t('careers.benefits.health', 'சுகாதார காப்பீடு');
t('careers.benefits.equity', 'பங்கு விருப்பங்கள்');
t('careers.benefits.learning', 'கற்றல் படி');
t('careers.benefits.unlimited', 'வரம்பற்ற விடுமுறை');
t('careers.benefits.equipment', 'சிறந்த உபகரணங்கள்');
t('careers.openPositions', 'காலி பணியிடங்கள்');
t('careers.noPositions', 'தற்போது காலி பணியிடங்கள் இல்லை');
t('careers.applyNow', 'இப்போது விண்ணப்பிக்கவும்');
t('careers.location', 'இடம்');

// ===== PRODUCTS =====
t('products.title', 'பொருட்கள்');
t('products.subtitle', 'உங்கள் ஆப்களை உருவாக்க சக்திவாய்ந்த கருவிகள்');
t('products.agent.title', 'AI ஏஜெண்ட்');
t('products.agent.description', 'புத்திசாலி AI ஏஜெண்ட்களை நிமிடங்களில் உருவாக்குங்கள்');
t('products.database.title', 'தரவுத்தளம்');
t('products.database.description', 'பூஜ்ஜிய கட்டமைப்புடன் சக்திவாய்ந்த தரவுத்தளங்கள்');
t('products.integrations.title', 'ஒருங்கிணைப்புகள்');
t('products.integrations.description', 'எந்த சேவையுடனும் API-யுடனும் இணையுங்கள்');
t('products.mobile.title', 'மொபைல்');
t('products.mobile.description', 'நேட்டிவ் மொபைல் ஆப்களை உருவாக்குங்கள்');
t('products.publish.title', 'வெளியிடு');
t('products.publish.description', 'ஒரே கிளிக்கில் வெளியிடுங்கள்');
t('products.security.title', 'பாதுகாப்பு');
t('products.security.description', 'நிறுவன-தர பாதுகாப்பு');
t('products.design.title', 'வடிவமைப்பு');
t('products.design.description', 'அழகான இடைமுகங்களை வடிவமையுங்கள்');
t('products.learnMore', 'மேலும் அறிக');
t('products.getStarted', 'தொடங்குங்கள்');
t('products.features', 'அம்சங்கள்');
t('products.overview', 'மேலோட்டம்');
t('products.documentation', 'ஆவணங்கள்');

// ===== SIGNUP PAGE =====
t('signupPage.title', 'இன்றே உருவாக்கத் தொடங்குங்கள்');
t('signupPage.subtitle', 'நிமிடங்களில் உங்கள் முதல் ஆப்பை உருவாக்குங்கள்');
t('signupPage.cta', 'இலவச கணக்கை உருவாக்குங்கள்');
t('signupPage.benefit1', 'கிரெடிட் கார்டு தேவையில்லை');
t('signupPage.benefit2', 'நிமிடங்களில் அமைக்கவும்');
t('signupPage.benefit3', 'என்றும் இலவச திட்டம்');

// ===== SOLUTIONS PAGE =====
t('solutionsPage.title', 'தொழில்துறை தீர்வுகள்');
t('solutionsPage.subtitle', 'ஒவ்வொரு பயன்பாட்டிற்கும் வடிவமைக்கப்பட்ட சக்திவாய்ந்த கருவிகள்');
t('solutionsPage.web3.title', 'Web3 & பிளாக்செயின்');
t('solutionsPage.web3.description', 'பரவலாக்கப்பட்ட ஆப்ளிகேஷன்களை உருவாக்குங்கள்');
t('solutionsPage.enterprise.title', 'நிறுவன தீர்வுகள்');
t('solutionsPage.enterprise.description', 'பெரிய அளவிலான வணிக ஆப்ளிகேஷன்களை உருவாக்குங்கள்');
t('solutionsPage.startup.title', 'ஸ்டார்ட்அப் கருவிகள்');
t('solutionsPage.startup.description', 'வேகமாக MVP-களை உருவாக்கி சோதிக்கவும்');

// ===== SOLUTIONS WEB3 =====
t('solutionsWeb3.title', 'Web3 டெவலப்மென்ட் தளம்');
t('solutionsWeb3.subtitle', 'உள்ளமைக்கப்பட்ட பிளாக்செயின் ஆதரவுடன் dApps உருவாக்குங்கள்');
t('solutionsWeb3.cta', 'Web3 உருவாக்கத்தைத் தொடங்குங்கள்');

// ===== DASHBOARD =====
t('dashboardPage.title', 'டாஷ்போர்டு');
t('dashboardPage.welcome', 'மீண்டும் வரவேற்கிறோம்');
t('dashboardPage.projects', 'உங்கள் திட்டங்கள்');
t('dashboardPage.createNew', 'புதிய திட்டத்தை உருவாக்கு');
t('dashboardPage.recent', 'சமீபத்திய செயல்பாடு');

fs.writeFileSync(taPath, JSON.stringify(ta, null, 2), 'utf8');
console.log('Phase A complete. Translations applied:', count);
