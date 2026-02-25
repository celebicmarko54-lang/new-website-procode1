var fs = require('fs');
var taPath = './src/translations/ta.json';
var ta = JSON.parse(fs.readFileSync(taPath, 'utf8'));

function set(obj, path, val) {
  var parts = path.split('.');
  var cur = obj;
  for (var i = 0; i < parts.length - 1; i++) {
    if (!cur[parts[i]]) cur[parts[i]] = {};
    cur = cur[parts[i]];
  }
  cur[parts[parts.length - 1]] = val;
}

// ── pricing section (32 items) ──
set(ta, 'pricing.title', 'உங்கள் திட்டத்தைத் தேர்வு செய்யுங்கள்');
set(ta, 'pricing.subtitle', 'இலவசமாகத் தொடங்கி, பிரீமியத்திற்கு மேம்படுத்துங்கள்');
set(ta, 'pricing.monthly', 'மாதாந்திர');
set(ta, 'pricing.annual', 'ஆண்டு');
set(ta, 'pricing.save', 'சேமிக்கவும்');
set(ta, 'pricing.free.name', 'இலவசம்');
set(ta, 'pricing.free.price', '$0');
set(ta, 'pricing.free.period', '/மாதம்');
set(ta, 'pricing.free.description', 'தனிநபர் திட்டங்களுக்கு ஏற்றது');
set(ta, 'pricing.free.features.f1', '5 திட்டங்கள் வரை');
set(ta, 'pricing.free.features.f2', 'சமூக ஆதரவு');
set(ta, 'pricing.free.features.f3', 'அடிப்படை AI உதவி');
set(ta, 'pricing.free.features.f4', '1GB சேமிப்பிடம்');
set(ta, 'pricing.free.cta', 'இலவசமாகத் தொடங்கு');
set(ta, 'pricing.pro.name', 'புரோ');
set(ta, 'pricing.pro.price', '$19');
set(ta, 'pricing.pro.period', '/மாதம்');
set(ta, 'pricing.pro.description', 'தொழில்முனைவோர் மற்றும் டெவலப்பர்களுக்கு');
set(ta, 'pricing.pro.features.f1', 'வரம்பற்ற திட்டங்கள்');
set(ta, 'pricing.pro.features.f2', 'முன்னுரிமை ஆதரவு');
set(ta, 'pricing.pro.features.f3', 'மேம்பட்ட AI அம்சங்கள்');
set(ta, 'pricing.pro.features.f4', '50GB சேமிப்பிடம்');
set(ta, 'pricing.pro.features.f5', 'தனிப்பயன் டொமைன்');
set(ta, 'pricing.pro.features.f6', 'பகுப்பாய்வு');
set(ta, 'pricing.pro.cta', 'புரோவுடன் தொடங்கு');
set(ta, 'pricing.pro.popular', 'மிகவும் பிரபலம்');
set(ta, 'pricing.enterprise.name', 'நிறுவனம்');
set(ta, 'pricing.enterprise.price', 'தனிப்பயன்');
set(ta, 'pricing.enterprise.description', 'பெரிய குழுக்கள் மற்றும் அமைப்புகளுக்கு');
set(ta, 'pricing.enterprise.features.f1', 'அனைத்து புரோ அம்சங்கள்');
set(ta, 'pricing.enterprise.features.f2', 'அர்ப்பணிக்கப்பட்ட ஆதரவு');
set(ta, 'pricing.enterprise.features.f3', 'தனிப்பயன் ஒருங்கிணைப்புகள்');
set(ta, 'pricing.enterprise.features.f4', 'SLA உத்தரவாதம்');
set(ta, 'pricing.enterprise.features.f5', 'குழு மேலாண்மை');
set(ta, 'pricing.enterprise.cta', 'விற்பனையைத் தொடர்புகொள்ளுங்கள்');

// ── aboutPage section (38 items) ──
set(ta, 'aboutPage.title', 'AppNode பற்றி');
set(ta, 'aboutPage.subtitle', 'AI-இயங்கும் ஆப் உருவாக்கத்தின் எதிர்காலத்தை உருவாக்குகிறோம்');
set(ta, 'aboutPage.mission.title', 'எங்கள் நோக்கம்');
set(ta, 'aboutPage.mission.description', 'ஒவ்வொருவரும் சக்திவாய்ந்த ஆப்ளிகேஷன்களை உருவாக்குவதை AI-இயங்கும் கருவிகள் மூலம் ஜனநாயகப்படுத்துவது.');
set(ta, 'aboutPage.story.title', 'எங்கள் கதை');
set(ta, 'aboutPage.story.p1', 'AppNode 2024-ல் ஒரு எளிய பார்வையுடன் நிறுவப்பட்டது: ஆப் உருவாக்கத்தை அனைவருக்கும் அணுகக்கூடியதாக ஆக்குவது.');
set(ta, 'aboutPage.story.p2', 'இன்று, உலகெங்கிலும் உள்ள ஆயிரக்கணக்கான டெவலப்பர்கள் AppNode-ஐ நம்புகிறார்கள்.');
set(ta, 'aboutPage.team.title', 'எங்கள் குழு');
set(ta, 'aboutPage.team.subtitle', 'எங்கள் அனுபவமிக்க தலைமைக் குழுவை சந்தியுங்கள்');
set(ta, 'aboutPage.team.member1.name', 'டேவிட் பார்க்');
set(ta, 'aboutPage.team.member1.role', 'தலைமை நிர்வாக அதிகாரி & நிறுவனர்');
set(ta, 'aboutPage.team.member1.bio', 'முன்னாள் Google பொறியாளர், AI மற்றும் டெவலப்பர் கருவிகளில் 10+ ஆண்டுகள் அனுபவம்.');
set(ta, 'aboutPage.team.member2.name', 'சாரா கிம்');
set(ta, 'aboutPage.team.member2.role', 'தலைமை தொழில்நுட்ப அதிகாரி');
set(ta, 'aboutPage.team.member2.bio', 'AI ஆராய்ச்சியாளர், முன்னாள் OpenAI, இயந்திர கற்றல் மற்றும் NLP நிபுணர்.');
set(ta, 'aboutPage.team.member3.name', 'ஜேம்ஸ் வில்சன்');
set(ta, 'aboutPage.team.member3.role', 'வடிவமைப்புத் தலைவர்');
set(ta, 'aboutPage.team.member3.bio', 'அவார்டு வென்ற UX வடிவமைப்பாளர், முன்னாள் Apple மற்றும் Figma.');
set(ta, 'aboutPage.team.member4.name', 'எமிலி சாங்');
set(ta, 'aboutPage.team.member4.role', 'பொறியியல் VP');
set(ta, 'aboutPage.team.member4.bio', 'முழு-ஸ்டாக் மேதை, 50+ வெற்றிகரமான தயாரிப்புகளை அளவிட்டவர்.');
set(ta, 'aboutPage.values.title', 'எங்கள் மதிப்புகள்');
set(ta, 'aboutPage.values.subtitle', 'நாங்கள் நம்பும் கொள்கைகள்');
set(ta, 'aboutPage.values.innovation.title', 'புதுமை');
set(ta, 'aboutPage.values.innovation.description', 'நாங்கள் எப்போதும் சாத்தியமானவற்றின் எல்லைகளை மீறுகிறோம்.');
set(ta, 'aboutPage.values.community.title', 'சமூகம்');
set(ta, 'aboutPage.values.community.description', 'நாங்கள் உருவாக்குவதில் சமூகத்தை முதலில் வைக்கிறோம்.');
set(ta, 'aboutPage.values.quality.title', 'தரம்');
set(ta, 'aboutPage.values.quality.description', 'நாங்கள் செய்யும் எல்லாவற்றிலும் சிறந்ததை நாடுகிறோம்.');
set(ta, 'aboutPage.values.transparency.title', 'வெளிப்படைத்தன்மை');
set(ta, 'aboutPage.values.transparency.description', 'நேர்மையும் திறந்த தகவல்தொடர்பும் எங்கள் அடிப்படை.');
set(ta, 'aboutPage.stats.title', 'எண்களில் AppNode');
set(ta, 'aboutPage.stats.developers', 'டெவலப்பர்கள்');
set(ta, 'aboutPage.stats.apps', 'உருவாக்கப்பட்ட ஆப்கள்');
set(ta, 'aboutPage.stats.countries', 'நாடுகள்');
set(ta, 'aboutPage.stats.uptime', 'இயங்கு நேரம்');
set(ta, 'aboutPage.joinUs.title', 'எங்களுடன் இணையுங்கள்');
set(ta, 'aboutPage.joinUs.description', 'நாங்கள் எப்போதும் திறமையான மக்களைத் தேடுகிறோம்.');
set(ta, 'aboutPage.joinUs.cta', 'வழிமுறைகளைக் காணுங்கள்');

// ── auth section (35 items) ──
set(ta, 'auth.login.title', 'மீண்டும் வரவேற்கிறோம்');
set(ta, 'auth.login.subtitle', 'உங்கள் கணக்கில் உள்நுழையுங்கள்');
set(ta, 'auth.login.email', 'மின்னஞ்சல் முகவரி');
set(ta, 'auth.login.password', 'கடவுச்சொல்');
set(ta, 'auth.login.forgotPassword', 'கடவுச்சொல்லை மறந்துவிட்டீர்களா?');
set(ta, 'auth.login.rememberMe', 'என்னை நினைவில் வை');
set(ta, 'auth.login.submit', 'உள்நுழை');
set(ta, 'auth.login.noAccount', 'கணக்கு இல்லையா?');
set(ta, 'auth.login.signUp', 'பதிவு செய்க');
set(ta, 'auth.login.orContinueWith', 'அல்லது தொடருங்கள்');
set(ta, 'auth.login.continueWithGoogle', 'Google மூலம் தொடரவும்');
set(ta, 'auth.login.continueWithGithub', 'GitHub மூலம் தொடரவும்');
set(ta, 'auth.signup.title', 'இன்றே உருவாக்கத் தொடங்குங்கள்');
set(ta, 'auth.signup.subtitle', 'இலவச கணக்கை உருவாக்குங்கள்');
set(ta, 'auth.signup.name', 'முழு பெயர்');
set(ta, 'auth.signup.email', 'மின்னஞ்சல் முகவரி');
set(ta, 'auth.signup.password', 'கடவுச்சொல்');
set(ta, 'auth.signup.confirmPassword', 'கடவுச்சொல்லை உறுதிப்படுத்து');
set(ta, 'auth.signup.termsAgree', 'நான் சேவை விதிமுறைகள் மற்றும் தனியுரிமைக் கொள்கையை ஒப்புக்கொள்கிறேன்');
set(ta, 'auth.signup.submit', 'கணக்கை உருவாக்கு');
set(ta, 'auth.signup.hasAccount', 'ஏற்கனவே கணக்கு உள்ளதா?');
set(ta, 'auth.signup.logIn', 'உள்நுழை');
set(ta, 'auth.signup.nameRequired', 'பெயர் தேவை');
set(ta, 'auth.signup.emailRequired', 'மின்னஞ்சல் தேவை');
set(ta, 'auth.signup.emailInvalid', 'செல்லுபடியான மின்னஞ்சலை உள்ளிடவும்');
set(ta, 'auth.signup.passwordRequired', 'கடவுச்சொல் தேவை');
set(ta, 'auth.signup.passwordLength', 'கடவுச்சொல் குறைந்தது 8 எழுத்துகள் இருக்க வேண்டும்');
set(ta, 'auth.signup.passwordMatch', 'கடவுச்சொற்கள் பொருந்த வேண்டும்');
set(ta, 'auth.signup.termsRequired', 'விதிமுறைகளை ஒப்புக்கொள்ள வேண்டும்');
set(ta, 'auth.signup.orSignUpWith', 'அல்லது பதிவு செய்யுங்கள்');
set(ta, 'auth.signup.benefit1', 'இலவசமாகத் தொடங்கு - கிரெடிட் கார்டு தேவையில்லை');
set(ta, 'auth.signup.benefit2', 'நிமிடங்களில் ஆப்களை உருவாக்குங்கள்');
set(ta, 'auth.signup.benefit3', 'ஒரே கிளிக்கில் நிலைநிறுத்தம்');
set(ta, 'auth.signup.benefit4', '24/7 சமூக ஆதரவு');
set(ta, 'auth.signup.socialProof', '10,000+ டெவலப்பர்களுடன் இணையுங்கள்');

// ── enterprise section ──
set(ta, 'enterprise.title', 'நிறுவன AI மேம்பாட்டுத் தளம்');
set(ta, 'enterprise.subtitle', 'நிறுவன-தர பாதுகாப்பு, வரம்பற்ற அளவிடுதல் மற்றும் அர்ப்பணிக்கப்பட்ட ஆதரவு');
set(ta, 'enterprise.cta', 'விற்பனையைத் தொடர்புகொள்ளுங்கள்');
set(ta, 'enterprise.trustedBy', 'முன்னணி நிறுவனங்களால் நம்பப்படுகிறது');
set(ta, 'enterprise.features.title', 'நிறுவன அம்சங்கள்');
set(ta, 'enterprise.features.sso.title', 'SSO & SAML');
set(ta, 'enterprise.features.sso.description', 'உங்கள் அடையாள வழங்குநருடன் ஒருங்கிணைக்கவும்');
set(ta, 'enterprise.features.audit.title', 'தணிக்கை பதிவுகள்');
set(ta, 'enterprise.features.audit.description', 'விரிவான செயல்பாட்டு பதிவும் கண்காணிப்பும்');
set(ta, 'enterprise.features.compliance.title', 'இணக்கம்');
set(ta, 'enterprise.features.compliance.description', 'SOC 2, GDPR மற்றும் HIPAA இணக்கத்திற்கான ஆதரவு');
set(ta, 'enterprise.features.sla.title', 'SLA உத்தரவாதம்');
set(ta, 'enterprise.features.sla.description', '99.99% இயங்கு நேர உத்தரவாதம் நிதி காப்புறுதியுடன்');
set(ta, 'enterprise.features.support.title', 'அர்ப்பணிக்கப்பட்ட ஆதரவு');
set(ta, 'enterprise.features.support.description', '24/7 முன்னுரிமை ஆதரவு அர்ப்பணிக்கப்பட்ட கணக்கு மேலாளருடன்');

// ── enterprisePage section ──
set(ta, 'enterprisePage.title', 'நிறுவனத் தீர்வுகள்');
set(ta, 'enterprisePage.subtitle', 'உலகின் மிகவும் கோரும் நிறுவனங்களுக்காக கட்டப்பட்டது');
set(ta, 'enterprisePage.cta.primary', 'விற்பனையைத் தொடர்புகொள்ளுங்கள்');
set(ta, 'enterprisePage.cta.secondary', 'பாதுகாப்பு ஆவணங்கள்');
set(ta, 'enterprisePage.stats.uptime', 'இயங்கு நேரம் SLA');
set(ta, 'enterprisePage.stats.enterprises', 'நிறுவன வாடிக்கையாளர்கள்');
set(ta, 'enterprisePage.stats.support', 'ஆதரவு பதில் நேரம்');
set(ta, 'enterprisePage.stats.datacenters', 'உலகளாவிய தரவு மையங்கள்');

// ── errors section ──
set(ta, 'errors.notFound', 'பக்கம் கிடைக்கவில்லை');
set(ta, 'errors.serverError', 'சர்வர் பிழை');
set(ta, 'errors.unauthorized', 'அங்கீகரிக்கப்படவில்லை');
set(ta, 'errors.forbidden', 'தடைசெய்யப்பட்டது');

// ── legal section ──
set(ta, 'legal.privacy', 'தனியுரிமைக் கொள்கை');
set(ta, 'legal.terms', 'சேவை விதிமுறைகள்');
set(ta, 'legal.cookies', 'குக்கீ கொள்கை');
set(ta, 'legal.rules', 'தள விதிகள்');

// ── blog section ──
set(ta, 'blog.title', 'AppNode வலைப்பதிவு');
set(ta, 'blog.subtitle', 'சமீபத்திய செய்திகள், பயிற்சிகள் மற்றும் நுண்ணறிவுகள்');
set(ta, 'blog.readMore', 'மேலும் படிக்கவும்');
set(ta, 'blog.categories', 'வகைகள்');
set(ta, 'blog.allPosts', 'அனைத்து பதிவுகள்');

// ── docs section ──
set(ta, 'docs.title', 'ஆவணங்கள்');
set(ta, 'docs.subtitle', 'AppNode-ஐ கற்றுக்கொள்ள உங்களுக்குத் தேவையான அனைத்தும்');
set(ta, 'docs.searchPlaceholder', 'ஆவணங்களில் தேடுங்கள்...');
set(ta, 'docs.gettingStarted', 'தொடங்குதல்');
set(ta, 'docs.apiReference', 'API குறிப்பு');
set(ta, 'docs.tutorials', 'பயிற்சிகள்');
set(ta, 'docs.changelog', 'மாற்ற பதிவு');
set(ta, 'docs.noResults', 'முடிவுகள் எதுவும் கிடைக்கவில்லை');

// ── status section ──
set(ta, 'status.title', 'கணினி நிலை');
set(ta, 'status.operational', 'அனைத்து அமைப்புகளும் இயங்குகின்றன');
set(ta, 'status.subtitle', 'நிகழ்நேர நிலை கண்காணிப்பு');
set(ta, 'status.allOperational', 'அனைத்தும் இயல்பாக இயங்குகின்றன');
set(ta, 'status.lastUpdated', 'கடைசியாகப் புதுப்பிக்கப்பட்டது');

// ── solutions section ──
set(ta, 'solutions.title', 'தீர்வுகள்');
set(ta, 'solutions.subtitle', 'உங்கள் தேவைகளுக்கான சரியான கருவிகளைக் கண்டறியுங்கள்');
set(ta, 'solutions.web3.title', 'Web3 டெவலப்மென்ட்');
set(ta, 'solutions.web3.subtitle', 'பரவலாக்கப்பட்ட ஆப்களை உருவாக்குங்கள்');
set(ta, 'solutions.web3.description', 'AppNode-இன் Web3 கருவிகளுடன் பிளாக்செயின் ஆப்ளிகேஷன்களை உருவாக்குங்கள்');
set(ta, 'solutions.learnMore', 'மேலும் அறிக');
set(ta, 'solutions.getStarted', 'தொடங்குங்கள்');

// ── support section ──
set(ta, 'support.title', 'நாங்கள் உதவ இங்கே இருக்கிறோம்');
set(ta, 'support.subtitle', 'எந்தக் கேள்விக்கும் எங்கள் ஆதரவுக் குழுவைத் தொடர்புகொள்ளுங்கள்');
set(ta, 'support.searchPlaceholder', 'உங்கள் கேள்விக்கான பதிலைத் தேடுங்கள்...');
set(ta, 'support.contactUs', 'எங்களைத் தொடர்புகொள்ளுங்கள்');

// ── careers section ──
set(ta, 'careers.title', 'AppNode-இல் தொழில்');
set(ta, 'careers.subtitle', 'ஆப் உருவாக்கத்தின் எதிர்காலத்தை உருவாக்குங்கள்');
set(ta, 'careers.viewOpenings', 'காலி பணியிடங்களைக் காண்க');
set(ta, 'careers.benefits.title', 'பலன்கள் & சலுகைகள்');
set(ta, 'careers.benefits.remote', 'தொலைநிலை பணி');
set(ta, 'careers.benefits.health', 'சுகாதார காப்பீடு');
set(ta, 'careers.benefits.equity', 'பங்கு விருப்பங்கள்');
set(ta, 'careers.benefits.learning', 'கற்றல் படி');
set(ta, 'careers.benefits.unlimited', 'வரம்பற்ற விடுமுறை');
set(ta, 'careers.benefits.equipment', 'சிறந்த உபகரணங்கள்');
set(ta, 'careers.openPositions', 'காலி பணியிடங்கள்');
set(ta, 'careers.noPositions', 'தற்போது காலி பணியிடங்கள் இல்லை');
set(ta, 'careers.applyNow', 'இப்போது விண்ணப்பிக்கவும்');
set(ta, 'careers.location', 'இடம்');

fs.writeFileSync(taPath, JSON.stringify(ta, null, 2), 'utf8');
console.log('Phase 2 complete.');
