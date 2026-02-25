var fs = require('fs');
var path = require('path');

var enPath = path.join(__dirname, 'src', 'translations', 'en.json');
var taPath = path.join(__dirname, 'src', 'translations', 'ta.json');

var enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
var taData = JSON.parse(fs.readFileSync(taPath, 'utf8'));

function setNestedValue(obj, keyPath, value) {
  var keys = keyPath.split('.');
  var current = obj;
  for (var i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]] || typeof current[keys[i]] !== 'object') {
      current[keys[i]] = {};
    }
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
}

var count = 0;

function apply(keyPath, value) {
  setNestedValue(taData, keyPath, value);
  count++;
}

// ── common section ──
apply('common.switchToLightMode', 'ஒளி பயன்முறைக்கு மாறு');
apply('common.switchToDarkMode', 'இருள் பயன்முறைக்கு மாறு');
apply('common.addAttachments', 'இணைப்புகளைச் சேர்');
apply('common.addImage', 'படத்தைச் சேர்');
apply('common.moveMouseToExplore', 'ஆராய சுட்டியை நகர்த்துங்கள்');

// ── homePage section ──
apply('homePage.videoSection.badge', 'எப்படி வேலை செய்கிறது');
apply('homePage.videoSection.title', 'AppNode செயலில் பாருங்கள்');
apply('homePage.videoSection.subtitle', 'டெவலப்பர்கள் நிமிடங்களில் உற்பத்தி-தயார் ஆப்களை எவ்வாறு உருவாக்குகிறார்கள் என்பதைப் பாருங்கள் இயற்கை மொழியைப் பயன்படுத்தி.');

// ── features section ──
apply('features.subtitle', 'AppNode உங்கள் கனவு ஆப்ளிகேஷன்களை உருவாக்க, வெளியிட மற்றும் அளவிட தேவையான அனைத்து கருவிகளையும் அம்சங்களையும் வழங்குகிறது.');
apply('features.aiPowered.description', 'உங்கள் யோசனையை இயற்கை மொழியில் விவரிக்கவும், AI நிமிடங்களில் உங்கள் முழு ஆப்ளிகேஷனையும் உருவாக்குவதைக் கண்காணியுங்கள்.');
apply('features.visualBuilder.description', 'கூறுகளை இழுத்து விடுங்கள், தளவமைப்புகளைத் தனிப்பயனாக்குங்கள், குறியீடு இல்லாமல் அழகான இடைமுகங்களை வடிவமையுங்கள்.');
apply('features.instantDeploy.description', 'ஒரே கிளிக்கில் உங்கள் ஆப்ளிகேஷன்களை வெளியிடுங்கள். சர்வர் கட்டமைப்பு அல்லது DevOps அறிவு தேவையில்லை.');
apply('features.database.description', 'தானியங்கி ஸ்கீமா உருவாக்கம் மற்றும் உறவு மேலாண்மையுடன் சக்திவாய்ந்த தரவுத்தள ஒருங்கிணைப்பு.');
apply('features.auth.description', 'பெட்டியிலிருந்தே பாதுகாப்பான பயனர் அங்கீகாரம். சமூக உள்நுழைவு, JWT மற்றும் பல காரணி அங்கீகாரத்திற்கான ஆதரவு.');
apply('features.api.title', 'API ஒருங்கிணைப்பு');
apply('features.api.description', 'எங்கள் காட்சி இணைப்பியுடன் எந்த API-யுடனும் இணையுங்கள். OpenAPI விவரக்குறிப்புகளை இறக்குமதி செய்து தானாகவே API கிளையண்ட்களை உருவாக்குங்கள்.');
apply('features.responsive.description', 'உங்கள் ஆப்கள் எந்த சாதனத்திலும் அருமையாகத் தெரியும். தானியங்கி பதிலளிக்கக்கூடிய தளவமைப்புகளும் சோதனைக் கருவிகளும்.');
apply('features.collaboration.description', 'உங்கள் குழுவுடன் நிகழ்நேரத்தில் இணைந்து பணியாற்றுங்கள். மாற்றங்களை உடனடியாகக் காணுங்கள்.');

// ── buildAnything section ──
apply('buildAnything.subtitle', 'உருவாக்கத் தொடங்குங்கள். சம்பாதிக்கத் தொடங்குங்கள். இன்றே.');
apply('buildAnything.exploreAll', 'அனைத்து டெம்ப்ளேட்களையும் ஆராயுங்கள்');
apply('buildAnything.webApps.description', 'அங்கீகாரம், தரவுத்தளங்கள் மற்றும் API-களுடன் முழு அம்ச வலை ஆப்கள்.');
apply('buildAnything.mobileApps.description', 'ஒரே குறியீட்டு தளத்திலிருந்து iOS மற்றும் Android-க்கான நேட்டிவ் மொபைல் அனுபவங்கள்.');
apply('buildAnything.dashboards.description', 'நிகழ்நேர புதுப்பிப்புகளுடன் தரவு காட்சிப்படுத்தல் மற்றும் பகுப்பாய்வு டாஷ்போர்டுகள்.');
apply('buildAnything.ecommerce.title', 'மின்-வணிகம்');
apply('buildAnything.ecommerce.description', 'கட்டணம், சரக்கு மற்றும் ஆர்டர் மேலாண்மையுடன் ஆன்லைன் கடைகள்.');
apply('buildAnything.internal.title', 'உள் கருவிகள்');
apply('buildAnything.internal.description', 'தனிப்பயன் நிர்வாக பேனல்கள், CRM-கள் மற்றும் பணிப்பாய்வு தானியங்கி கருவிகள்.');
apply('buildAnything.marketplace.title', 'சந்தைத்தளங்கள்');
apply('buildAnything.marketplace.description', 'வாங்குபவர்களையும் விற்பவர்களையும் இணைக்கும் இருதரப்பு தளங்கள்.');
apply('buildAnything.categories.saasplatform', 'SaaS தளம்');
apply('buildAnything.categories.gamingportal', 'கேமிங் போர்டல்');
apply('buildAnything.categories.mapsnavigation', 'வரைபடங்கள் & வழிசெலுத்தல்');
apply('buildAnything.categories.fashionstore', 'ஃபேஷன் கடை');
apply('buildAnything.categories.stylecollection', 'ஸ்டைல் தொகுப்பு');
apply('buildAnything.categories.beautyproducts', 'அழகு பொருட்கள்');
apply('buildAnything.categories.fitnesstracker', 'உடற்பயிற்சி கண்காணிப்பான்');
apply('buildAnything.categories.luxuryfragrance', 'ஆடம்பர வாசனை');
apply('buildAnything.categories.beautystore', 'அழகு கடை');
apply('buildAnything.categories.streamingplatform', 'ஸ்ட்ரீமிங் தளம்');
apply('buildAnything.categories.gaminggearstore', 'கேமிங் கியர் கடை');
apply('buildAnything.categories.gamingstore', 'கேமிங் கடை');
apply('buildAnything.categories.synthesizer', 'சின்தசைசர்');
apply('buildAnything.categories.projectroadmap', 'திட்ட வரைபடம்');
apply('buildAnything.categories.analyticsdashboard', 'பகுப்பாய்வு டாஷ்போர்டு');

// ── footer section ──
apply('footer.buildApps', 'AI மூலம் உற்பத்தி-தயார் ஆப்களை உருவாக்குங்கள்');
apply('footer.company', 'நிறுவனம்');
apply('footer.about', 'எங்களைப் பற்றி');
apply('footer.enterprise', 'நிறுவனம்');
apply('footer.security', 'பாதுகாப்பு');
apply('footer.pricing', 'விலை நிர்ணயம்');
apply('footer.resources', 'வளங்கள்');
apply('footer.legal', 'சட்டம்');
apply('footer.connectWithUs', 'எங்களுடன் இணையுங்கள்');
apply('footer.copyright', 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை');

// ── testimonials section ──
apply('testimonials.title', 'டெவலப்பர்கள் AppNode-ஐ விரும்புகிறார்கள்');
apply('testimonials.subtitle', 'உலகெங்கிலும் உள்ள டெவலப்பர்கள் AppNode மூலம் அற்புதமான ஆப்ளிகேஷன்களை உருவாக்குகிறார்கள்');
apply('testimonials.roles.fullstack', 'ஃபுல்ஸ்டாக் டெவலப்பர்');
apply('testimonials.roles.startup', 'ஸ்டார்ட்அப் நிறுவனர்');
apply('testimonials.roles.freelance', 'ஃப்ரீலான்ஸ் டெவலப்பர்');
apply('testimonials.roles.techlead', 'டெக் லீட்');
apply('testimonials.quotes.q1', 'AppNode எங்கள் முன்மாதிரி செயல்முறையை வாரங்களிலிருந்து மணிநேரமாக மாற்றியது. AI-இயங்கும் குறியீடு உருவாக்கம் நம்பமுடியாத அளவிற்கு துல்லியமானது.');
apply('testimonials.quotes.q2', 'ஒரு ஸ்டார்ட்அப் நிறுவனராக, AppNode நான் MVP-களை மிக வேகமாக சோதிக்க அனுமதிக்கிறது. இது எனக்குப் போட்டி நிலையை அளிக்கிறது.');
apply('testimonials.quotes.q3', 'ஃப்ரீலான்ஸர்களுக்கான சிறந்த கருவி. நான் அதிக திட்டங்களை வேகமாக வழங்குகிறேன், எனது கிளையண்ட்கள் முடிவுகளை விரும்புகிறார்கள்.');
apply('testimonials.quotes.q4', 'தரத்தை பாதிக்காமல் எங்கள் குழுவின் வேகத்தை இரட்டிப்பாக்கியது. ஒத்துழைப்பு அம்சங்கள் சிறப்பானவை.');
apply('testimonials.names.n1', 'சாரா ஜான்சன்');
apply('testimonials.names.n2', 'அலெக்ஸ் சென்');
apply('testimonials.names.n3', 'மைக் வில்சன்');
apply('testimonials.names.n4', 'எமிலி ராட்ரிகஸ்');
apply('testimonials.companies.c1', 'டெக்கார்ப்');
apply('testimonials.companies.c2', 'லாஞ்ச்லேப்ஸ்');

// ── cta section ──
apply('cta.title', 'உருவாக்கத் தொடங்கத் தயாரா?');
apply('cta.subtitle', 'இலவசமாக AppNode-உடன் உருவாக்கத் தொடங்குங்கள். கிரெடிட் கார்டு தேவையில்லை.');
apply('cta.startFree', 'இலவச கணக்கைத் தொடங்கு');
apply('cta.talkToSales', 'விற்பனையுடன் பேசு');
apply('cta.noCreditCard', 'கிரெடிட் கார்டு தேவையில்லை');
apply('cta.cancelAnytime', 'எப்போது வேண்டுமானாலும் ரத்து செய்யலாம்');
apply('cta.freeForever', 'என்றும் இலவச திட்டம்');
apply('cta.noSetup', 'அமைப்பு தேவையில்லை');
apply('cta.badge', 'இன்றே இலவசமாகத் தொடங்குங்கள்');

// ── blockchainSection ──
apply('blockchainSection.title', 'வெப்3 & பிளாக்செயின் ஒருங்கிணைப்பு');
apply('blockchainSection.subtitle', 'உள்ளமைக்கப்பட்ட பிளாக்செயின் ஆதரவுடன் பரவலாக்கப்பட்ட ஆப்ளிகேஷன்களை உருவாக்குங்கள்');
apply('blockchainSection.feature1.title', 'ஸ்மார்ட் ஒப்பந்தங்கள்');
apply('blockchainSection.feature1.description', 'நேரடியாக உங்கள் ஆப்-இல் ஸ்மார்ட் ஒப்பந்தங்களை வெளியிட்டு தொடர்பு கொள்ளுங்கள்');
apply('blockchainSection.feature2.title', 'வாலட் ஒருங்கிணைப்பு');
apply('blockchainSection.feature2.description', 'MetaMask, WalletConnect மற்றும் பிற வழங்குநர்களை ஆதரிக்கிறது');
apply('blockchainSection.feature3.title', 'NFT ஆதரவு');
apply('blockchainSection.feature3.description', 'உள்ளமைக்கப்பட்ட கருவிகளுடன் NFT-களை உருவாக்கி, நிர்வகிக்கவும் மற்றும் காண்பிக்கவும்');
apply('blockchainSection.feature4.title', 'டோக்கன் கேட்வே');
apply('blockchainSection.feature4.description', 'டோக்கன் அடிப்படையிலான அணுகல் கட்டுப்பாடு மற்றும் கட்டண ஒருங்கிணைப்பு');
apply('blockchainSection.exploreDApps', 'dApps ஐ ஆராயுங்கள்');

// ── community section ──
apply('community.title', 'உலகளாவிய சமூகத்தில் சேருங்கள்');
apply('community.subtitle', 'டெவலப்பர்கள் சமூகத்தின் ஒரு பகுதியாகுங்கள்');
apply('community.joinDiscord', 'Discord-இல் சேருங்கள்');
apply('community.viewGitHub', 'GitHub-ல் காணுங்கள்');
apply('community.stats.developers', 'செயலில் உள்ள டெவலப்பர்கள்');

// ── Write the updated file ──
fs.writeFileSync(taPath, JSON.stringify(taData, null, 2) + '\n', 'utf8');

console.log('Tamil translation update complete.');
console.log('Total translations applied: ' + count);
console.log('File written to: ' + taPath);
