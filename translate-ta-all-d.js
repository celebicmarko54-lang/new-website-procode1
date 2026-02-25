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

// ===== PROPER NOUNS (keep as-is but need to be set) =====
t('testimonials.author1', 'Sarah Chen');
t('testimonials.author2', 'Mike Rodriguez');
t('testimonials.author3', 'Emma Wilson');
t('productIntegrations.integrations.aws', 'Amazon Web Services');
t('productMobile.appStore', 'App Store');
t('productMobile.playStore', 'Play Store');
t('productMobile.googlePlay', 'Google Play');
t('productSecurity.featuresTitle', 'பாதுகாப்பு அம்சங்கள்');
t('productSecurity.badges.soc2', 'SOC 2 Type II');
t('productSecurity.badges.iso', 'ISO 27001');
t('productSecurity.features.sso.title', 'SSO & SAML');
t('enterprisePage.badge', 'நிறுவனம்');
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

// ===== USE CASES RAPID PROTOTYPING (remaining) =====
t('useCasesRapidPrototyping.benefitsTitle', 'விரைவு முன்மாதிரி ஏன் முக்கியம்');
t('useCasesRapidPrototyping.ctaTitle', 'இன்றே முன்மாதிரி செய்யத் தொடங்குங்கள்');
t('useCasesRapidPrototyping.ctaSubtitle', 'உங்கள் யோசனைகளை நிமிடங்களில் வேலை செய்யும் முன்மாதிரிகளாக மாற்றுங்கள், மாதங்களில் அல்ல.');

// ===== PRIVACY PAGE =====
t('privacyPage.lastUpdated', 'கடைசியாகப் புதுப்பிக்கப்பட்டது: டிசம்பர் 1, 2025');
t('privacyPage.intro.p1', 'AppNode Inc. ("AppNode", "நாங்கள்", "எங்களை", அல்லது "எங்கள்") உங்கள் தனியுரிமையைப் பாதுகாப்பதில் உறுதிபூண்டுள்ளது.');
t('privacyPage.intro.p2', 'சேவைகளைப் பயன்படுத்துவதன் மூலம், இந்தக் கொள்கையில் விவரிக்கப்பட்ட நடைமுறைகளுக்கு நீங்கள் ஒப்புக்கொள்கிறீர்கள்.');
t('privacyPage.intro.p3', 'நாங்கள் இந்த தனியுரிமைக் கொள்கையை அவ்வப்போது புதுப்பிக்கலாம். மாற்றங்கள் இருந்தால் உங்களுக்குத் தெரிவிப்போம்.');
t('privacyPage.section1.title', '1. நாங்கள் சேகரிக்கும் தகவல்கள்');
t('privacyPage.section1.s1Title', '1.1 நீங்கள் நேரடியாக வழங்கும் தகவல்கள்');
t('privacyPage.section1.s2Title', '1.2 தானியல்பாக சேகரிக்கப்படும் தகவல்கள்');
t('privacyPage.section1.s3Title', '1.3 AI-குறிப்பிட்ட தரவு (உள்ளீடுகள் & வெளியீடுகள்)');
t('privacyPage.section1.s3Note', 'நாங்கள் வேண்டுமென்றே முக்கிய தனிப்பட்ட தரவை (சுகாதாரம், நிதி) சேகரிப்பதில்லை.');
t('privacyPage.section2.title', '2. உங்கள் தகவல்களை நாங்கள் எவ்வாறு பயன்படுத்துகிறோம்');
t('privacyPage.section2.intro', 'உங்கள் தகவல்களை நாங்கள் பயன்படுத்துவது:');
t('privacyPage.section2.marketing', 'சந்தைப்படுத்தல்: AppNode அம்சங்கள் பற்றிய விளம்பர மின்னஞ்சல்களை அனுப்பலாம்.');
t('privacyPage.section3.title', '3. AI மாதிரி பயிற்சி & மேம்பாடு (முக்கிய பிரிவு)');
t('privacyPage.section3.intro', 'இயல்பாக, AI மாதிரிகளைப் பயிற்சிக்க உங்கள் தனிப்பட்ட ப்ராம்ப்ட்கள், உள்ளீடுகள், வெளியீடுகளைப் பயன்படுத்துவதில்லை.');
t('privacyPage.section3.note', 'இது சிறந்த நடைமுறைகளுடன் (எ.கா., Cursor/Anthropic-பாணி கொள்கைகள்) ஒத்துப்போகிறது.');
t('privacyPage.section4.title', '4. தகவல் பகிர்வு & வெளிப்படுத்தல்');
t('privacyPage.section4.noSell', 'உங்கள் தனிப்பட்ட தகவல்களை நாங்கள் விற்பனை செய்வதில்லை.');
t('privacyPage.section4.intro', 'நாங்கள் தரவைப் பகிர்வது:');
t('privacyPage.section4.international', 'சர்வதேச பரிமாற்றங்கள்: தரவு முதன்மையாக US-இல் சேமிக்கப்படுகிறது.');
t('privacyPage.section5.title', '5. தரவு தக்கவைப்பு');
t('privacyPage.section5.intro', 'தேவையான காலம் மட்டுமே உங்கள் தரவை நாங்கள் தக்கவைக்கிறோம்:');
t('privacyPage.section5.note', 'எப்போது வேண்டுமானாலும் நீக்கலைக் கோரலாம் (கீழே உரிமைகளைப் பார்க்கவும்).');
t('privacyPage.section6.title', '6. உங்கள் தனியுரிமை உரிமைகள்');
t('privacyPage.section6.intro', 'உங்கள் இருப்பிடத்தைப் பொறுத்து (EU/EEA/UK-க்கு GDPR போன்ற சட்டங்கள்), நீங்கள் குறிப்பிட்ட உரிமைகளைக் கொண்டிருக்கலாம்.');
t('privacyPage.section6.california', 'கலிஃபோர்னியா குடியிருப்பாளர்களுக்கு: "எனது தனிப்பட்ட தகவல்களை விற்காதீர்கள் அல்லது பகிராதீர்கள்" விருப்பம் கிடைக்கிறது.');
t('privacyPage.section6.submit', 'கோரிக்கைகளை சமர்ப்பியுங்கள்: privacy@appnode.ai');
t('privacyPage.section6.response', '30–45 நாட்களுக்குள் பதிலளிப்போம் (சட்டத்தின்படி நீட்டிக்கக்கூடியது). சரிபார்ப்பு தேவைப்படலாம்.');
t('privacyPage.section7.title', '7. தரவு பாதுகாப்பு');
t('privacyPage.section7.p1', 'தொழில்துறை-தரமான நடவடிக்கைகளைப் பயன்படுத்துகிறோம்: மறையாக்கம் (TLS 1.3, ஓய்வில் AES-256), அணுகல் கட்டுப்பாடுகள்.');
t('privacyPage.section7.p2', 'எனினும், எந்த அமைப்பும் 100% பாதுகாப்பானது அல்ல. முழுமையான பாதுகாப்பை உத்தரவாதம் செய்ய இயலாது.');
t('privacyPage.section7.p3', 'மீறல் ஏற்பட்டால்: பாதிக்கப்பட்ட பயனர்கள் மற்றும் அதிகாரிகளுக்கு 72 மணி நேரத்திற்குள் தெரிவிப்போம்.');
t('privacyPage.section8.title', '8. குக்கீகள் & கண்காணிப்பு தொழில்நுட்பங்கள்');
t('privacyPage.section8.content', 'அத்தியாவசிய குக்கீகள் (செயல்பாட்டிற்கு), பகுப்பாய்வு மற்றும் சந்தைப்படுத்தல் குக்கீகளைப் பயன்படுத்துகிறோம்.');
t('privacyPage.section9.title', '9. குழந்தைகளின் தனியுரிமை');
t('privacyPage.section9.content', 'சேவைகள் 16 வயதுக்குட்பட்ட (சில நாடுகளில் 13) குழந்தைகளுக்கு இயக்கப்படவில்லை.');
t('privacyPage.section10.title', '10. மூன்றாம் தரப்பு இணைப்புகள் & ஒருங்கிணைப்புகள்');
t('privacyPage.section10.content', 'சேவைகள் மூன்றாம் தரப்புகளுக்கு (எ.கா., GitHub ஒருங்கிணைப்பு) இணைக்கலாம். அவற்றின் தனியுரிமைக் கொள்கைகளுக்கு நாங்கள் பொறுப்பல்ல.');
t('privacyPage.section11.title', '11. எங்களைத் தொடர்புகொள்ளுங்கள்');
t('privacyPage.section11.company', 'AppNode Inc.');
t('privacyPage.section11.privacyEmail', 'மின்னஞ்சல்: privacy@appnode.ai (தனியுரிமை கோரிக்கைகளுக்கு)');
t('privacyPage.section11.generalEmail', 'பொது: contact@appnode.ai');

// ===== TERMS PAGE =====
t('termsPage.lastUpdated', 'கடைசியாகப் புதுப்பிக்கப்பட்டது: டிசம்பர் 1, 2025');
t('termsPage.intro.p1', 'இந்த சேவை விதிமுறைகள் ("விதிமுறைகள்") AppNode Inc. வழங்கும் தளம் மற்றும் சேவைகளை அணுகுவதையும் பயன்படுத்துவதையும் நிர்வகிக்கின்றன.');
t('termsPage.intro.p2', 'சேவைகளை அணுகுவதன் மூலம், பதிவு செய்வதன் மூலம் அல்லது எந்த வகையிலும் பயன்படுத்துவதன் மூலம், இந்த விதிமுறைகளை ஏற்கிறீர்கள்.');
t('termsPage.intro.p3', 'இந்த விதிமுறைகள் உங்களுக்கும் AppNode Inc.-க்கும் இடையே சட்டப்பூர்வ ஒப்பந்தத்தை உருவாக்குகின்றன.');
t('termsPage.intro.p4', 'இந்த விதிமுறைகளை எப்போது வேண்டுமானாலும் மாற்றும் உரிமையை நாங்கள் கொண்டுள்ளோம்.');
t('termsPage.section1.title', '1. தகுதி மற்றும் கட்டுப்பாடுகள்');
t('termsPage.section1.intro', 'சேவைகளைப் பயன்படுத்த, நீங்கள்:');
t('termsPage.section1.minor', 'நீங்கள் 18 வயதுக்குட்பட்டவராக இருந்தால், பெற்றோர் அல்லது பாதுகாவலரின் ஒப்புதல் தேவை.');
t('termsPage.section1.suspended', 'முன்பு இடைநிறுத்தப்பட்டிருந்தால் சேவைகளைப் பயன்படுத்தாமல் இருக்க ஒப்புக்கொள்கிறீர்கள்.');
t('termsPage.section2.title', '2. கணக்கு பதிவு, பாதுகாப்பு மற்றும் பொறுப்புகள்');
t('termsPage.section2.intro', 'சேவைகளின் சில அம்சங்களை அணுக, கணக்கை உருவாக்க வேண்டும்.');
t('termsPage.section2.reserve', 'பதிவை மறுக்க, இடைநிறுத்த அல்லது நிறுத்தும் உரிமையை நாங்கள் கொண்டுள்ளோம்.');
t('termsPage.section2.acknowledge', 'அங்கீகரிக்கப்படாத அணுகலினால் ஏற்படும் எந்த இழப்பிற்கும் நாங்கள் பொறுப்பல்ல என்பதை ஒப்புக்கொள்கிறீர்கள்.');
t('termsPage.section3.title', '3. சேவைகளின் விளக்கம்');
t('termsPage.section3.intro', 'சேவைகள் AI-இயங்கும் கருவிகளை உள்ளடக்கியது, பயனர்கள் குறியீட்டை உருவாக்க அனுமதிக்கிறது.');
t('termsPage.section3.evolve', 'சேவைகள் காலப்போக்கில் மாறலாம், மேலும் அம்சங்களை மாற்ற உரிமை உள்ளது.');
t('termsPage.section3.thirdParty', 'சில அம்சங்களுக்கு மூன்றாம் தரப்பு சேவைகளுடன் ஒருங்கிணைப்பு தேவைப்படலாம்.');
t('termsPage.section4.title', '4. AI-உருவாக்கப்பட்ட வெளியீடு மறுப்பு மற்றும் அபாயங்கள்');
t('termsPage.section4.intro', 'சேவைகள் செயற்கை நுண்ணறிவு மாதிரிகள் மற்றும் வழிமுறைகளை நம்பியுள்ளன.');
t('termsPage.section4.acknowledge', 'நீங்கள் வெளிப்படையாக ஒப்புக்கொண்டு ஏற்கிறீர்கள்:');
t('termsPage.section4.disclaimer', 'AI-உருவாக்கப்பட்ட வெளியீட்டின் பயன்பாட்டிலிருந்து ஏற்படும் சேதங்கள், இழப்புகள் அனைத்திற்கும் AppNode பொறுப்பை மறுக்கிறது.');
t('termsPage.section5.title', '5. பயனர் உள்ளடக்கம், தரவு மற்றும் உரிமங்கள்');
t('termsPage.section5.definition', '"பயனர் உள்ளடக்கம்" என்பது நீங்கள் சமர்ப்பிக்கும் ப்ராம்ப்ட்கள், தரவு, குறியீடு, உரை, படங்கள் போன்றவை.');
t('termsPage.section5.ownership', 'உரிமை: உங்கள் பயனர் உள்ளடக்கத்தில் அனைத்து உரிமைகளையும் நீங்கள் தக்கவைக்கிறீர்கள்.');
t('termsPage.section5.licenseIntro', 'AppNode-க்கான உரிமம்: பயனர் உள்ளடக்கத்தை சமர்ப்பிப்பதன் மூலம், சேவைகளை வழங்க AppNode-க்கு உரிமம் வழங்குகிறீர்கள்.');
t('termsPage.section5.represent', 'தேவையான உரிமைகள் உங்களிடம் உள்ளன என்று உத்தரவாதம் அளிக்கிறீர்கள்.');
t('termsPage.section5.noSell', 'உங்கள் பயனர் உள்ளடக்கத்தை மூன்றாம் தரப்பினருக்கு விற்பனை செய்வதில்லை.');
t('termsPage.section5.dataProcessing', 'தரவு செயலாக்கம்: பயனர் உள்ளடக்கத்தின் செயலாக்கம் எங்கள் தனியுரிமைக் கொள்கையால் நிர்வகிக்கப்படுகிறது.');
t('termsPage.section6.title', '6. ஏற்புடைய பயன்பாட்டுக் கொள்கை');
t('termsPage.section6.intro', 'சட்டபூர்வ நோக்கங்களுக்கு மட்டுமே சேவைகளைப் பயன்படுத்த ஒப்புக்கொள்கிறீர்கள்.');
t('termsPage.section6.monitor', 'சேவைகளின் உங்கள் பயன்பாட்டை கண்காணிக்கலாம், மதிப்பாய்வு செய்யலாம் அல்லது பகுப்பாய்வு செய்யலாம்.');
t('termsPage.section7.title', '7. சந்தாக்கள், பில்லிங், கட்டணங்கள் மற்றும் பணம் செலுத்தல்');
t('termsPage.section7.intro', 'சில சேவைகளுக்கு கட்டண சந்தா ("சந்தா") தேவை.');
t('termsPage.section7.fees', 'கட்டணங்கள் நிலையான சந்தா செலவுகள், பயன்பாட்டு அடிப்படையிலான கட்டணங்களை உள்ளடக்கலாம்.');
t('termsPage.section7.failure', 'கட்டணம் செலுத்தத் தவறினால் இடைநிறுத்தம் அல்லது நிறுத்தம் ஏற்படலாம்.');
t('termsPage.section7.refunds', 'திரும்பப்பணம்: சட்டத்தால் தேவைப்படும் நிலையில் தவிர அனைத்து கட்டணங்களும் திரும்பப்பெற முடியாதவை.');
t('termsPage.section7.processors', 'மூன்றாம் தரப்பு கட்டண செயலிகளைப் (எ.கா., Stripe) பயன்படுத்துகிறோம்.');
t('termsPage.section8.title', '8. வீத வரம்புகள், ஒதுக்கீடுகள் மற்றும் வள பயன்பாடு');
t('termsPage.section8.intro', 'நியாயமான பயன்பாடு மற்றும் கணினி நிலைத்தன்மையை உறுதிசெய்ய, வீத வரம்புகளை விதிக்கலாம்.');
t('termsPage.section8.noLiability', 'வரம்புகளை அமலாக்குவதால் ஏற்படும் இழப்புகளுக்கு நாங்கள் பொறுப்பல்ல.');
t('termsPage.section9.title', '9. அறிவுசார் சொத்துரிமைகள்');
t('termsPage.section9.ownership', 'சேவைகளில் அனைத்து உரிமைகள், பட்டம் மற்றும் நலன்கள் AppNode-க்கு சொந்தமானவை.');
t('termsPage.section9.license', 'வரையறுக்கப்பட்ட, பிரத்யேகமற்ற, மாற்ற முடியாத உரிமம் உங்களுக்கு வழங்கப்படுகிறது.');
t('termsPage.section9.agreeNot', 'நீங்கள் செய்யாமல் இருக்க ஒப்புக்கொள்கிறீர்கள்:');
t('termsPage.section9.feedback', 'நீங்கள் வழங்கும் கருத்துகள், ஆலோசனைகள் அல்லது யோசனைகள் AppNode-க்கு சொந்தமாகும்.');
t('termsPage.section10.title', '10. ரகசியத்தன்மை');
t('termsPage.section10.content', 'AppNode-ஆல் வெளிப்படுத்தப்படும் பொது அல்லாத தகவல்களை ரகசியமாக வைக்க ஒப்புக்கொள்கிறீர்கள்.');
t('termsPage.section11.title', '11. மறுப்புகள் மற்றும் பொறுப்பு வரம்புகள்');
t('termsPage.section11.asIs', 'சேவைகள் "உள்ளது உள்ளபடி" மற்றும் "கிடைக்கும் போது" வழங்கப்படுகின்றன, எந்த உத்தரவாதமும் இல்லாமல்.');
t('termsPage.section11.noWarranties', 'சேவைகள் தடையின்றி, பாதுகாப்பாக அல்லது பிழையின்றி இருக்கும் என்று APPNODE எந்த உத்தரவாதமும் அளிக்காது.');
t('termsPage.section11.limitation', 'சட்டத்தால் அனுமதிக்கப்பட்ட அதிகபட்ச அளவிற்கு, APPNODE-இன் மொத்த பொறுப்பு 12 மாதங்களில் செலுத்திய கட்டணங்களை மிகாது.');
t('termsPage.section11.exclusion', 'எந்த சூழ்நிலையிலும் APPNODE மறைமுக, தற்செயல், சிறப்பு அல்லது விளைவான சேதங்களுக்கு பொறுப்பாகாது.');
t('termsPage.section12.title', '12. இழப்பீடு');
t('termsPage.section12.content', 'AppNode-ஐ இழப்பீடு செய்ய, பாதுகாக்க மற்றும் தீங்கிலிருந்து காப்பாற்ற ஒப்புக்கொள்கிறீர்கள்.');
t('termsPage.section13.title', '13. நிறுத்தம்');
t('termsPage.section13.byYou', 'கணக்கு அமைப்புகளில் வழிமுறைகளைப் பின்பற்றி எப்போது வேண்டுமானாலும் கணக்கை நிறுத்தலாம்.');
t('termsPage.section13.byUs', 'உடனடியாக, அறிவிப்போடு அல்லது இல்லாமல், உங்கள் கணக்கை இடைநிறுத்தலாம் அல்லது நிறுத்தலாம்.');
t('termsPage.section13.effect', 'நிறுத்தத்தின் போது: (a) சேவைகளுக்கான உங்கள் அணுகல் நிறுத்தப்படும்.');
t('termsPage.section14.title', '14. ஆளும் சட்டம் மற்றும் தகராறு தீர்வு');
t('termsPage.section14.law', 'இந்த விதிமுறைகள் டெலாவேர் மாகாணத்தின் சட்டங்களின்படி நிர்வகிக்கப்படும்.');
t('termsPage.section14.arbitration', 'இந்த விதிமுறைகளிலிருந்து எழும் எந்த தகராறும் நடுவர் தீர்ப்பின் மூலம் தீர்க்கப்படும்.');
t('termsPage.section14.classWaiver', 'நீங்களும் APPNODE-ம் ஜூரி விசாரணை மற்றும் வகுப்பு நடவடிக்கை உரிமையை தள்ளுபடி செய்ய ஒப்புக்கொள்கிறீர்கள்.');
t('termsPage.section15.title', '15. பலவகை');
t('termsPage.section15.entireAgreement', 'இந்த விதிமுறைகள், தனியுரிமைக் கொள்கையுடன் சேர்ந்து, முழுமையான ஒப்பந்தத்தை உருவாக்குகின்றன.');
t('termsPage.section15.severability', 'ஏதேனும் விதி அமல்படுத்த இயலாததாகக் கண்டறியப்பட்டால், மீதமுள்ள விதிகள் நிலைத்திருக்கும்.');
t('termsPage.section15.waiver', 'எந்த விதியையும் அமல்படுத்தத் தவறினால் அது தள்ளுபடியாகாது.');
t('termsPage.section15.assignment', 'எங்கள் முன் எழுத்துப்பூர்வ ஒப்புதலின்றி இந்த விதிமுறைகளை மாற்ற முடியாது.');
t('termsPage.section16.title', '16. தொடர்புத் தகவல்');
t('termsPage.section16.company', 'AppNode Inc.');
t('termsPage.section16.supportEmail', 'மின்னஞ்சல்: support@appnode.ai');
t('termsPage.section16.legalEmail', 'சட்டம்: legal@appnode.ai');

// ===== COOKIES PAGE =====
t('cookiesPage.badge', 'தனியுரிமை');
t('cookiesPage.title', 'குக்கீ அமைப்புகள்');
t('cookiesPage.subtitle', 'உங்கள் குக்கீ விருப்பங்களை நிர்வகியுங்கள். உங்கள் அனுபவத்தை மேம்படுத்த குக்கீகளைப் பயன்படுத்துகிறோம்.');
t('cookiesPage.required', 'தேவையானது');
t('cookiesPage.saveSuccess', 'குக்கீ விருப்பங்கள் வெற்றிகரமாக சேமிக்கப்பட்டன!');
t('cookiesPage.savePreferences', 'விருப்பங்களைச் சேமி');
t('cookiesPage.acceptAll', 'அனைத்தையும் ஏற்கவும்');
t('cookiesPage.aboutTitle', 'எங்கள் குக்கீகளைப் பற்றி');
t('cookiesPage.aboutDescription', 'குக்கீகள் உங்கள் சாதனத்தில் சேமிக்கப்படும் சிறிய உரை கோப்புகள்.');
t('cookiesPage.moreInfo', 'குக்கீகள் மற்றும் உங்கள் தனிப்பட்ட தகவல்களைப் பற்றி மேலும் தகவலுக்கு, எங்கள் தனியுரிமைக் கொள்கையைப் பார்க்கவும்.');
t('cookiesPage.essential.title', 'அத்தியாவசிய குக்கீகள்');
t('cookiesPage.essential.description', 'வலைத்தளம் சரியாக செயல்பட இந்த குக்கீகள் அவசியம்.');
t('cookiesPage.analytics.title', 'பகுப்பாய்வு குக்கீகள்');
t('cookiesPage.analytics.description', 'பார்வையாளர்கள் வலைத்தளத்துடன் எவ்வாறு தொடர்பு கொள்கிறார்கள் என்பதைப் புரிந்துகொள்ள இந்த குக்கீகள் உதவுகின்றன.');
t('cookiesPage.marketing.title', 'சந்தைப்படுத்தல் குக்கீகள்');
t('cookiesPage.marketing.description', 'வலைத்தளங்கள் முழுவதும் பார்வையாளர்களைக் கண்காணிக்க இந்த குக்கீகள் பயன்படுத்தப்படுகின்றன.');
t('cookiesPage.personalization.title', 'தனிப்பயனாக்க குக்கீகள்');
t('cookiesPage.personalization.description', 'உங்கள் விருப்பங்களை நினைவில் வைத்துக்கொள்ளவும், தனிப்பயனாக்கப்பட்ட அனுபவத்தை வழங்கவும் இந்த குக்கீகள் அனுமதிக்கின்றன.');

// ===== STATUS PAGE =====
t('statusPage.title', 'கணினி நிலை');
t('statusPage.subtitle', 'AppNode சேவைகளுக்கான நிகழ்நேர நிலை மற்றும் இயங்கு நேர தகவல்');
t('statusPage.allOperational', 'அனைத்து அமைப்புகளும் இயங்குகின்றன');
t('statusPage.uptimeTitle', 'இயங்கு நேரம் - கடந்த 7 நாட்கள்');
t('statusPage.servicesTitle', 'சேவைகள்');
t('statusPage.incidentsTitle', 'சமீபத்திய சம்பவங்கள்');
t('statusPage.subscribeTitle', 'நிலை புதுப்பிப்புகளைப் பெறுங்கள்');
t('statusPage.subscribeSubtitle', 'கணினி நிலை மற்றும் சம்பவங்கள் பற்றிய அறிவிப்புகளைப் பெற குழுசேருங்கள்.');
t('statusPage.emailPlaceholder', 'உங்கள் மின்னஞ்சலை உள்ளிடுங்கள்');
t('statusPage.subscribeButton', 'குழுசேர்');
if (!ta.statusPage) ta.statusPage = {};
ta.statusPage.services = [
  {"name":"API","status":"operational"},
  {"name":"வலை ஆப்ளிகேஷன்","status":"operational"},
  {"name":"தரவுத்தளம்","status":"operational"},
  {"name":"AI இயந்திரம்","status":"operational"},
  {"name":"CDN","status":"operational"}
]; count++;
ta.statusPage.incidents = [
  {"date":"நவம்பர் 25, 2025","title":"உயர்ந்த API பதிலளிப்பு நேரங்கள்","description":"தற்காலிகமாக அதிகரித்த API பதிலளிப்பு நேரங்களை அனுபவித்தோம். சிக்கல் அடையாளம் காணப்பட்டு தீர்க்கப்பட்டது.","status":"resolved"},
  {"date":"நவம்பர் 20, 2025","title":"திட்டமிடப்பட்ட பராமரிப்பு","description":"உள்கட்டமைப்பு மேம்படுத்தல்களுக்கான திட்டமிடப்பட்ட பராமரிப்பு சாளரம்.","status":"completed"}
]; count++;
ta.statusPage.uptimeDays = ["திங்", "செவ்", "புத", "வியா", "வெள்", "சனி", "ஞாயி"]; count++;
t('statusPage.operational', 'இயங்குகிறது');
t('statusPage.degraded', 'குறைந்த செயல்திறன்');
t('statusPage.outage', 'பெரிய நிறுத்தம்');

// ===== SECURITY PAGE =====
t('securityPage.badge', 'நிறுவன-தர பாதுகாப்பு');
t('securityPage.titleSuffix', 'முதலில்');
t('securityPage.subtitle', 'உங்கள் தரவு பாதுகாப்பு எங்கள் முதல் முன்னுரிமை. பாதுகாப்பு நடவடிக்கைகள் பற்றி அறிக.');
t('securityPage.featuresTitle', 'பாதுகாப்பு அம்சங்கள்');
t('securityPage.practicesTitle', 'எங்கள் பாதுகாப்பு நடைமுறைகள்');
t('securityPage.bugBountyTitle', 'பக் பவுன்டி திட்டம்');
t('securityPage.bugBountyDescription', 'பொறுப்பான வெளிப்படுத்தலுக்கு வெகுமதிகளைப் பெறுங்கள், பாதுகாப்பை மேம்படுத்த உதவுங்கள்.');
t('securityPage.reportTitle', 'பாதுகாப்பு சிக்கலைப் புகாரளியுங்கள்');
t('securityPage.reportDescription', 'AppNode-இல் பாதுகாப்பு பாதிப்பை கண்டறிந்ததாக நம்பினால், security@appnode.ai-க்கு தெரிவிக்கவும்.');
t('securityPage.whitepaper', 'பாதுகாப்பு வெள்ளை அறிக்கை');

// ===== CHANGELOG PAGE =====
t('changelogPage.badge', 'புதுப்பிப்புகள்');
t('changelogPage.title', 'மாற்ற பதிவு');
t('changelogPage.subtitle', 'AppNode-க்கான அனைத்து சமீபத்திய புதுப்பிப்புகள், மேம்பாடுகள் மற்றும் திருத்தங்கள்');
t('changelogPage.stayUpToDate', 'புதுப்பித்த நிலையில் இருங்கள்');
t('changelogPage.getNotified', 'புதிய அம்சங்கள் வெளியிடும்போது அறிவிப்புகளைப் பெறுங்கள்');
t('changelogPage.emailPlaceholder', 'உங்கள் மின்னஞ்சலை உள்ளிடுங்கள்');
t('changelogPage.subscribeButton', 'குழுசேர்');
t('changelogPage.viewOlder', 'பழைய வெளியீடுகளைக் காண்க');
t('changelogPage.changeTypes.improved', 'மேம்படுத்தப்பட்டது');
t('changelogPage.changeTypes.fixed', 'சரிசெய்யப்பட்டது');
t('changelogPage.releases.v250.date', 'நவம்பர் 28, 2025');
t('changelogPage.releases.v250.title', 'ஸ்மார்ட் ஸ்டைல்கள் & தானியங்கி தளவமைப்புகள்');
t('changelogPage.releases.v250.description', 'AI-இயங்கும் ஸ்டைலிங் அறிமுகம், தானியங்காக அழகான, சீரான வடிவமைப்புகளை உருவாக்குகிறது.');
t('changelogPage.releases.v242.date', 'நவம்பர் 15, 2025');
t('changelogPage.releases.v242.title', 'செயல்திறன் மேம்பாடுகள்');
t('changelogPage.releases.v242.description', 'முக்கிய செயல்திறன் மேம்படுத்தல்கள் மற்றும் பிழை சரிசெய்தல்கள்.');
t('changelogPage.releases.v240.date', 'நவம்பர் 1, 2025');
t('changelogPage.releases.v240.title', 'குழு ஒத்துழைப்பு');
t('changelogPage.releases.v240.description', 'உங்கள் குழுவுடன் நிகழ்நேரத்தில் இணைந்து பணியாற்றுங்கள்.');
t('changelogPage.releases.v230.date', 'அக்டோபர் 15, 2025');
t('changelogPage.releases.v230.title', 'தரவுத்தள ஒருங்கிணைப்பு');
t('changelogPage.releases.v230.description', 'எளிதாக உங்கள் ஆப்களை தரவுத்தளங்களுடன் இணையுங்கள்.');
t('changelogPage.releases.v220.date', 'செப்டம்பர் 28, 2025');
t('changelogPage.releases.v220.title', 'கூறு நூலகம்');
t('changelogPage.releases.v220.description', '100+ புதிய கூறுகளுடன் விரிவாக்கப்பட்ட கூறு நூலகம்.');
t('changelogPage.releases.v210.date', 'செப்டம்பர் 10, 2025');
t('changelogPage.releases.v210.title', 'எளிதான அங்கீகாரம்');
t('changelogPage.releases.v210.description', 'நொடிகளில் உங்கள் ஆப்களுக்கு பயனர் அங்கீகாரத்தைச் சேருங்கள்.');

// ===== DASHBOARD PAGE =====
t('dashboardPage.loggedInAs', 'நீங்கள் உள்நுழைந்துள்ளீர்கள்');
t('dashboardPage.comingSoon', 'விரைவில் வருகிறது');
t('dashboardPage.buildingMagic', 'உங்களுக்கு மாயாஜாலமான ஒன்றை உருவாக்குகிறோம்');
t('dashboardPage.signOut', 'வெளியேறு');

// ===== SETTINGS PAGE =====
t('settingsPage.generalSettings', 'பொது அமைப்புகள்');
t('settingsPage.timezone', 'நேர மண்டலம்');
t('settingsPage.darkMode', 'இருள் பயன்முறை');
t('settingsPage.darkModeDesc', 'ஆப் முழுவதும் இருள் தீம் பயன்படுத்து');
t('settingsPage.notificationPreferences', 'அறிவிப்பு விருப்பங்கள்');
t('settingsPage.emailNotifications', 'மின்னஞ்சல் அறிவிப்புகள்');
t('settingsPage.emailNotificationsDesc', 'மின்னஞ்சல் வழியாக திட்ட புதுப்பிப்புகளைப் பெறுங்கள்');
t('settingsPage.pushNotifications', 'புஷ் அறிவிப்புகள்');
t('settingsPage.pushNotificationsDesc', 'உலாவியில் புஷ் அறிவிப்புகளைப் பெறுங்கள்');
t('settingsPage.marketingEmails', 'சந்தைப்படுத்தல் மின்னஞ்சல்கள்');
t('settingsPage.marketingEmailsDesc', 'குறிப்புகள், புதுப்பிப்புகள் மற்றும் சலுகைகளைப் பெறுங்கள்');
t('settingsPage.securitySettings', 'பாதுகாப்பு அமைப்புகள்');
t('settingsPage.password', 'கடவுச்சொல்');
t('settingsPage.passwordLastChanged', '30 நாட்களுக்கு முன் கடைசியாக மாற்றப்பட்டது');
t('settingsPage.changePassword', 'கடவுச்சொல்லை மாற்று');
t('settingsPage.twoFactorAuth', 'இரு-காரணி அங்கீகாரம்');
t('settingsPage.twoFactorAuthDesc', 'கூடுதல் பாதுகாப்பு அடுக்கைச் சேருங்கள்');
t('settingsPage.enable2FA', '2FA-ஐ இயக்கு');
t('settingsPage.activeSessions', 'செயலில் உள்ள அமர்வுகள்');
t('settingsPage.activeSessionsDesc', 'உங்கள் செயலில் உள்ள அமர்வுகளை நிர்வகியுங்கள்');
t('settingsPage.viewSessions', 'அமர்வுகளைக் காண்க');
t('settingsPage.dangerZone', 'ஆபத்து மண்டலம்');
t('settingsPage.deleteAccount', 'கணக்கை நீக்கு');
t('settingsPage.deleteAccountDesc', 'உங்கள் கணக்கையும் அனைத்து தரவையும் நிரந்தரமாக நீக்கு');
t('settingsPage.deleteAccountConfirm', 'கணக்கை நீக்கவா?');
t('settingsPage.deleteAccountWarning', 'இந்தச் செயலை மீட்க இயலாது. உங்கள் அனைத்து தரவும் நிரந்தரமாக நீக்கப்படும்.');
if (!ta.settingsPage) ta.settingsPage = {};
ta.settingsPage.tabs = ["பொது","அறிவிப்புகள்","பாதுகாப்பு","ஆபத்து மண்டலம்"]; count++;

// ===== PROFILE PAGE =====
t('profilePage.editProfile', 'சுயவிவரத்தைத் திருத்து');
t('profilePage.fullName', 'முழு பெயர்');
t('profilePage.email', 'மின்னஞ்சல்');
t('profilePage.role', 'பங்கு');
t('profilePage.companyOptional', 'நிறுவனம் (விரும்பினால்)');
t('profilePage.companyPlaceholder', 'உங்கள் நிறுவனப் பெயர்');
t('profilePage.avatarColor', 'அவதார் நிறம்');
t('profilePage.memberSince', 'உறுப்பினர் ஆன நாள்');
t('profilePage.notSpecified', 'குறிப்பிடப்படவில்லை');
t('profilePage.saveChanges', 'மாற்றங்களைச் சேமி');
t('profilePage.saving', 'சேமிக்கிறது...');

// ===== BILLING PAGE =====
t('billingPage.title', 'பில்லிங்');
t('billingPage.currentPlan', 'தற்போதைய திட்டம்');
t('billingPage.upgradeToUnlock', 'மேலும் அம்சங்களைத் திறக்க மேம்படுத்துங்கள்');
t('billingPage.planRenews', 'உங்கள் திட்டம் டிசம்பர் 1, 2025 அன்று புதுப்பிக்கப்படும்');
t('billingPage.freePlan', 'இலவச திட்டம்');
t('billingPage.active', 'செயலில்');
t('billingPage.availablePlans', 'கிடைக்கும் திட்டங்கள்');
t('billingPage.mostPopular', 'மிகவும் பிரபலம்');
t('billingPage.currentPlanLabel', 'தற்போதைய திட்டம்');
t('billingPage.upgrade', 'மேம்படுத்து');
t('billingPage.downgrade', 'தரமிறக்கு');
t('billingPage.paymentMethod', 'கட்டண முறை');
t('billingPage.noPaymentRequired', 'இலவச திட்டத்திற்கு கட்டண முறை தேவையில்லை.');
t('billingPage.edit', 'திருத்து');
t('billingPage.billingHistory', 'பில்லிங் வரலாறு');
t('billingPage.upgradeToTitle', 'மேம்படுத்து');
t('billingPage.upgradeAccessMessage', 'அனைத்து அம்சங்களுக்கும் அணுகல் கிடைக்கும்');
t('billingPage.featuresImmediately', 'அம்சங்கள் உடனடியாக.');
t('billingPage.confirmUpgrade', 'மேம்படுத்தலை உறுதிப்படுத்து');
if (!ta.billingPage) ta.billingPage = {};
ta.billingPage.plans = [
  {"name":"இலவசம்","price":"$0","period":"என்றும்","features":["5 திட்டங்கள்","சமூக ஆதரவு","அடிப்படை AI","1GB சேமிப்பிடம்"]},
  {"name":"புரோ","price":"$19","period":"/மாதம்","features":["வரம்பற்ற திட்டங்கள்","முன்னுரிமை ஆதரவு","மேம்பட்ட AI","50GB சேமிப்பிடம்","தனிப்பயன் டொமைன்"]},
  {"name":"நிறுவனம்","price":"தனிப்பயன்","period":"","features":["அனைத்தும்","அர்ப்பணிக்கப்பட்ட ஆதரவு","SLA","SSO","தனிப்பயன் ஒருங்கிணைப்புகள்"]}
]; count++;
ta.billingPage.invoices = [
  {"date":"நவம்பர் 1, 2025","amount":"$0.00","status":"செலுத்தப்பட்டது","plan":"இலவசம்"},
  {"date":"அக்டோபர் 1, 2025","amount":"$0.00","status":"செலுத்தப்பட்டது","plan":"இலவசம்"}
]; count++;

// ===== TEAMS PAGE =====
t('teamsPage.badge', 'குழு ஒத்துழைப்பு');
t('teamsPage.titleStart', 'இணைந்து உருவாக்குங்கள்');
t('teamsPage.titleHighlight', 'குழுக்கள்');
t('teamsPage.subtitle', 'AppNode-இன் சக்தியை உங்கள் முழு குழுவிற்கும் கொண்டு வாருங்கள். நிகழ்நேரத்தில் ஒத்துழையுங்கள்.');
t('teamsPage.startTeamTrial', 'குழு சோதனையைத் தொடங்கு');
t('teamsPage.enterpriseOptions', 'நிறுவன விருப்பங்கள்');
t('teamsPage.teamWorkspace', 'குழு பணியிடம்');
t('teamsPage.online', 'ஆன்லைன்');
t('teamsPage.teamProjects', 'குழு திட்டங்கள்');
t('teamsPage.activityTitle', 'செயல்பாடு');
t('teamsPage.teamFeatures', 'குழு அம்சங்கள்');
t('teamsPage.startFreeTeamTrial', 'இலவச குழு சோதனையைத் தொடங்கு');
t('teamsPage.pricing.title', 'குழு விலை நிர்ணயம்');
t('teamsPage.pricing.subtitle', 'அனைத்து அளவிலான குழுக்களுக்கும் எளிய, வெளிப்படையான விலை நிர்ணயம்.');
t('teamsPage.pricing.billedAnnually', 'ஆண்டு கணக்கு');
if (!ta.teamsPage) ta.teamsPage = {};
if (!ta.teamsPage.pricing) ta.teamsPage.pricing = {};
ta.teamsPage.pricing.features = ["Core-இல் உள்ள அனைத்தும்","$40/மாதம் பயன்பாட்டு கிரெடிட்கள் உள்ளடங்கியது","50 திட்ட வரம்பு","குழு ஒத்துழைப்பு","முன்னுரிமை ஆதரவு"]; count++;
t('teamsPage.pricing.perUserMonth', 'ஒரு பயனர்/மாதம்');
t('teamsPage.cta.title', 'இணைந்து உருவாக்கத் தயாரா?');
t('teamsPage.cta.subtitle', 'உங்கள் குழுவை AppNode-இல் இணையுங்கள், முன்னெப்போதையும் விட வேகமாக அனுப்புங்கள்.');
ta.teamsPage.features = [
  {"title":"நிகழ்நேர ஒத்துழைப்பு","description":"ஒரே திட்டத்தில் ஒரே நேரத்தில் பணியாற்றுங்கள், மாற்றங்களை உடனடியாகக் காணுங்கள்."},
  {"title":"குழு பணியிடங்கள்","description":"பகிரப்பட்ட பணியிடங்களில் திட்டங்களை ஒழுங்கமையுங்கள்."},
  {"title":"பங்கு அடிப்படையிலான அணுகல்","description":"அனுமதிகள் மற்றும் பங்குகளுடன் அணுகலை நிர்வகியுங்கள்."},
  {"title":"பதிப்பு வரலாறு","description":"மாற்றங்களைக் கண்காணிக்கவும், ஏதேனும் சிக்கல் இருந்தால் பின்வாங்கவும்."}
]; count++;

fs.writeFileSync(taPath, JSON.stringify(ta, null, 2), 'utf8');
console.log('Phase D complete. Translations applied:', count);
