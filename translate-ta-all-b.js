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

// ===== TESTIMONIALS =====
t('testimonials.badge', 'சான்றுகள்');
t('testimonials.quote1', 'AppNode நாங்கள் முன்மாதிரி செய்யும் விதத்தை முற்றிலும் மாற்றியது. வாரங்கள் எடுத்தது இப்போது மணிநேரங்களில் நடக்கிறது.');
t('testimonials.author1', 'Sarah Chen');
t('testimonials.role1', 'TechCorp-இல் தயாரிப்பு மேலாளர்');
t('testimonials.quote2', 'எனது முழு ஸ்டார்ட்அப் MVP-ஐயும் AppNode பயன்படுத்தி உருவாக்கினேன். AI நான் என்ன விரும்புகிறேன் என்பதை சரியாகப் புரிந்துகொள்கிறது.');
t('testimonials.author2', 'Mike Rodriguez');
t('testimonials.role2', 'StartupX நிறுவனர்');
t('testimonials.quote3', 'ஒரு வடிவமைப்பாளராக, டெவலப்பர்களுக்காகக் காத்திருக்காமல் எனது வடிவமைப்புகளை உயிர்ப்பிக்க முடிகிறது.');
t('testimonials.author3', 'Emma Wilson');
t('testimonials.role3', 'DesignStudio-இல் மூத்த வடிவமைப்பாளர்');
t('testimonials.stats.activeUsers', 'செயலில் உள்ள பயனர்கள்');
t('testimonials.stats.projectsCreated', 'உருவாக்கப்பட்ட திட்டங்கள்');
t('testimonials.stats.countries', 'நாடுகள்');
t('testimonials.stats.averageRating', 'சராசரி மதிப்பீடு');

// ===== CTA (remaining) =====
t('cta.titleHighlight', 'அற்புதமானதை?');
t('cta.description', 'ஆயிரக்கணக்கான படைப்பாளர்களுடன் இணையுங்கள். AppNode உடன் இலவசமாகத் தொடங்குங்கள், கிரெடிட் கார்டு தேவையில்லை.');
t('cta.button', 'இலவசமாக உருவாக்கத் தொடங்கு');
t('cta.emailPlaceholder', 'உங்கள் மின்னஞ்சலை உள்ளிடுங்கள்');
t('cta.successMessage', 'தொடங்க உங்கள் மின்னஞ்சலைச் சரிபாருங்கள்!');
t('cta.newFeatures', 'ஸ்மார்ட் ஸ்டைல்கள் & தானியங்கி தளவமைப்புகள்');
t('cta.trustedBy', 'குழுக்களால் நம்பப்படுகிறது');

// ===== FOOTER (remaining) =====
t('footer.learn', 'கற்றுக்கொள்');
t('footer.guides', 'வழிகாட்டிகள்');
t('footer.videos', 'வீடியோக்கள்');
t('footer.cookieSettings', 'குக்கீ அமைப்புகள்');
t('footer.platformRules', 'தள விதிகள்');
t('footer.documentation', 'ஆவணங்கள்');
t('footer.reportAbuse', 'துஷ்பிரயோகத்தைப் புகாரளி');
t('footer.madeWith', 'உருவாக்கப்பட்டது');
t('footer.tagline', 'AI மூலம் உற்பத்தி-தயார் ஆப்களை உருவாக்குங்கள்');

// ===== PRODUCTS (taglines) =====
t('products.agent.tagline', 'இயற்கை மொழியுடன் உருவாக்குங்கள்');
t('products.database.tagline', 'உங்கள் தரவு, நிர்வகிக்கப்பட்டது');
t('products.design.tagline', 'அழகாக வடிவமையுங்கள்');
t('products.integrations.tagline', 'எல்லாவற்றையும் இணையுங்கள்');
t('products.mobile.tagline', 'மொபைலுக்குச் செல்');
t('products.publish.tagline', 'வேகமாக அனுப்புங்கள்');
t('products.security.tagline', 'பாதுகாப்பாக இருங்கள்');

// ===== PRODUCT AGENT =====
t('productAgent.title', 'AppNode-ஐ சந்தியுங்கள்');
t('productAgent.titleHighlight', 'ஏஜெண்ட்');
t('productAgent.subtitle', 'உற்பத்தி-தயார் குறியீட்டை எழுதி, நீங்கள் செல்லும்போது மேம்படுத்தும் உங்கள் AI குறியீட்டு தோழர்.');
t('productAgent.startBuilding', 'இலவசமாக உருவாக்கத் தொடங்கு');
t('productAgent.howItWorks', 'ஏஜெண்ட் எவ்வாறு செயல்படுகிறது');
t('productAgent.demo.agent', 'ஏஜெண்ட்');
t('productAgent.demo.prompt', 'பயனர் பகுப்பாய்வு, சார்ட்கள் மற்றும் நிகழ்நேர தரவுகளுடன் ஒரு டாஷ்போர்டை உருவாக்குங்கள்');
t('productAgent.demo.response', 'உங்களுக்கு ஒரு விரிவான பகுப்பாய்வு டாஷ்போர்டை உருவாக்குகிறேன்...');
t('productAgent.demo.writing', 'ஏஜெண்ட் குறியீட்டை எழுதுகிறது...');
t('productAgent.demo.creating', 'கூறுகளை உருவாக்குகிறது, தரவு பெறுதலை அமைக்கிறது...');
t('productAgent.step1.title', 'உங்கள் பார்வையை விவரியுங்கள்');
t('productAgent.step1.description', 'நீங்கள் என்ன உருவாக்க விரும்புகிறீர்கள் என்பதை சாதாரண தமிழில் ஏஜெண்டிடம் சொல்லுங்கள். தொழில்நுட்ப சொற்கள் தேவையில்லை.');
t('productAgent.step2.title', 'உருவாக்குவதைப் பாருங்கள்');
t('productAgent.step2.description', 'ஏஜெண்ட் நிகழ்நேரத்தில் உற்பத்தி-தயார் குறியீட்டை எழுதுகிறது. கோப்புகள் உருவாக்கப்படுவதைக் காணுங்கள்.');
t('productAgent.step3.title', 'மீண்டும் செய்து மேம்படுத்துங்கள்');
t('productAgent.step3.description', 'சரியாக இல்லையா? என்ன மாற்ற வேண்டும் என்று ஏஜெண்டிடம் சொல்லுங்கள். அது சூழலைப் புரிந்துகொள்கிறது.');
t('productAgent.autonomous.title', 'தன்னியக்க நீண்ட உருவாக்கங்கள்');
t('productAgent.autonomous.description', 'ஏஜெண்ட் துணுக்குகளை மட்டும் எழுதாது - முழு ஆப்ளிகேஷன்களையும் தன்னியக்கமாக உருவாக்க முடியும்.');
t('productAgent.autonomous.item1', 'முழு-ஸ்டாக் ஆப்ளிகேஷன்கள்');
t('productAgent.autonomous.item2', 'பல-கோப்பு மறுசீரமைப்பு');
t('productAgent.autonomous.item3', 'சோதனை உருவாக்கம்');
t('productAgent.autonomous.item4', 'ஆவணம் எழுதுதல்');
t('productAgent.autonomous.item5', 'பிழை சரிசெய்தல் & பிழைத்திருத்தம்');
t('productAgent.stats.filesCreated', 'உருவாக்கப்பட்ட கோப்புகள்');
t('productAgent.stats.linesOfCode', 'குறியீட்டு வரிகள்');
t('productAgent.stats.buildTime', 'உருவாக்க நேரம்');
t('productAgent.cta.title', 'AI உடன் உருவாக்கத் தயாரா?');
t('productAgent.cta.subtitle', 'இன்றே AppNode ஏஜெண்ட் உடன் உங்கள் அடுத்த திட்டத்தை உருவாக்கத் தொடங்குங்கள். இலவசமாகத் தொடங்கலாம், கிரெடிட் கார்டு தேவையில்லை.');

// ===== PRODUCT DATABASE =====
t('productDatabase.badge', 'தரவு மேலாண்மை');
t('productDatabase.title', 'உள்ளமைக்கப்பட்ட');
t('productDatabase.titleHighlight', 'தரவுத்தளம்');
t('productDatabase.subtitle', 'எந்த அமைப்பும் இல்லாமல் உங்கள் தரவை சேமித்து நிர்வகியுங்கள். AppNode சக்திவாய்ந்த, அளவிடக்கூடிய தரவுத்தளத்தை வழங்குகிறது.');
t('productDatabase.getStarted', 'இலவசமாகத் தொடங்கு');
t('productDatabase.readDocs', 'ஆவணங்களைப் படியுங்கள்');
t('productDatabase.stats.uptime', 'இயங்கு நேர SLA');
t('productDatabase.stats.latency', 'வினவல் தாமதம்');
t('productDatabase.stats.scalability', 'அளவிடுதல்');
t('productDatabase.stats.configuration', 'கட்டமைப்பு');
t('productDatabase.cta.title', 'இன்றே தரவை சேமிக்கத் தொடங்குங்கள்');
t('productDatabase.cta.subtitle', 'உள்கட்டமைப்பு தலைவலி இல்லாமல் தரவு-இயக்கப்படும் ஆப்ளிகேஷன்களை உருவாக்குங்கள்.');

// ===== PRODUCT DESIGN =====
t('productDesign.badge', 'காட்சி மேம்பாடு');
t('productDesign.title', 'வடிவமையுங்கள்');
t('productDesign.titleHighlight', 'துல்லியமாக');
t('productDesign.subtitle', 'உங்கள் ஆப் உங்கள் பார்வையுடன் பொருந்த நுணுக்கமான கட்டுப்பாடுகள். உங்கள் வடிவமைப்புகளை இறக்குமதி செய்யுங்கள் அல்லது Figma உடன் ஒருங்கிணையுங்கள்.');
t('productDesign.tryDesignTools', 'வடிவமைப்பு கருவிகளை முயற்சியுங்கள்');
t('productDesign.visualEditor', 'காட்சி எடிட்டர்');
t('productDesign.components', 'கூறுகள்');
t('productDesign.properties', 'பண்புகள்');
t('productDesign.width', 'அகலம்');
t('productDesign.background', 'பின்னணி');
t('productDesign.borderRadius', 'எல்லை வளைவு');
t('productDesign.featuresTitle', 'வடிவமைப்பு அம்சங்கள்');
t('productDesign.startDesigning', 'வடிவமைக்கத் தொடங்குங்கள்');
t('productDesign.features.liveEditor.title', 'நேரடி காட்சி எடிட்டர்');
t('productDesign.features.liveEditor.description', 'நிகழ்நேர முன்னோட்டத்துடன் கூறுகளை காட்சியாகத் திருத்துங்கள். நீங்கள் பார்ப்பது சரியாக பயனர்கள் பார்ப்பதுதான்.');
t('productDesign.features.designSystem.title', 'வடிவமைப்பு முறைமை இறக்குமதி');
t('productDesign.features.designSystem.description', 'உங்கள் ஏற்கனவே உள்ள Figma வடிவமைப்புகள் அல்லது பிராண்ட் வழிகாட்டுதல்களை இறக்குமதி செய்து உடனடியாக பயன்படுத்துங்கள்.');
t('productDesign.features.componentLibrary.title', 'கூறு நூலகம்');
t('productDesign.features.componentLibrary.description', 'சிறந்த நடைமுறைகளைப் பின்பற்றும் முன்-கட்டமைக்கப்பட்ட, தனிப்பயனாக்கக்கூடிய கூறுகளின் பணக்கார நூலகத்தை அணுகுங்கள்.');
t('productDesign.features.responsive.title', 'பதிலளிக்கக்கூடிய கட்டுப்பாடுகள்');
t('productDesign.features.responsive.description', 'உள்ளுணர்வு முறிவுப்புள்ளி கட்டுப்பாடுகள் மற்றும் மொபைல் முன்னோட்டத்துடன் அனைத்து திரை அளவுகளுக்கும் வடிவமையுங்கள்.');
t('productDesign.features.pixelPerfect.title', 'பிக்சல்-சரியான திருத்தம்');
t('productDesign.features.pixelPerfect.description', 'துல்லிய கட்டுப்பாடுகளுடன் இடைவெளி, எழுத்துருவியல் மற்றும் நிறங்களை நுணுக்கமாக சரிசெய்யுங்கள்.');
t('productDesign.features.instantDeploy.title', 'உடனடி நிலைநிறுத்தம்');
t('productDesign.features.instantDeploy.description', 'உங்கள் வடிவமைப்புகளை உடனடியாக அனுப்புங்கள். கட்டமைப்பு படிகள் அல்லது நிலைநிறுத்த கட்டமைப்பு தேவையில்லை.');
t('productDesign.cta.title', 'அழகான ஆப்களை வேகமாக வடிவமையுங்கள்');
t('productDesign.cta.subtitle', 'AppNode-இன் சக்திவாய்ந்த காட்சி கருவிகளுடன் உங்கள் வடிவமைப்பு பார்வையை யதார்த்தமாக மாற்றுங்கள்.');

// ===== PRODUCT INTEGRATIONS =====
t('productIntegrations.badge', 'எல்லாவற்றையும் இணையுங்கள்');
t('productIntegrations.title', 'சக்திவாய்ந்த');
t('productIntegrations.titleHighlight', 'ஒருங்கிணைப்புகள்');
t('productIntegrations.subtitle', 'பூஜ்ஜிய கட்டமைப்புடன் உங்கள் விருப்பமான கருவிகள் மற்றும் சேவைகளுடன் இணையுங்கள். AppNode உடனடியாக ஒருங்கிணைக்கிறது.');
t('productIntegrations.browseAll', 'அனைத்து ஒருங்கிணைப்புகளையும் உலாவுங்கள்');
t('productIntegrations.popularIntegrations', 'பிரபலமான ஒருங்கிணைப்புகள்');
t('productIntegrations.getStarted', 'இலவசமாகத் தொடங்கு');
t('productIntegrations.categories.payments', 'கட்டணங்கள்');
t('productIntegrations.categories.communication', 'தகவல் தொடர்பு');
t('productIntegrations.categories.email', 'மின்னஞ்சல்');
t('productIntegrations.categories.versionControl', 'பதிப்பு கட்டுப்பாடு');
t('productIntegrations.categories.cloud', 'கிளவுட்');
t('productIntegrations.categories.deployment', 'நிலைநிறுத்தம்');
t('productIntegrations.categories.database', 'தரவுத்தளம்');
t('productIntegrations.integrations.openai', 'GPT-4, DALL-E மற்றும் பல');
t('productIntegrations.integrations.stripe', 'உலகளவில் கட்டணங்களை ஏற்கவும்');
t('productIntegrations.integrations.twilio', 'SMS, குரல் மற்றும் வீடியோ');
t('productIntegrations.integrations.sendgrid', 'பரிவர்த்தனை மின்னஞ்சல்கள்');
t('productIntegrations.integrations.cloudflare', 'எட்ஜ் கம்ப்யூட்டிங் மற்றும் CDN');
t('productIntegrations.integrations.github', 'குறியீடு ஹோஸ்டிங் மற்றும் CI/CD');
t('productIntegrations.integrations.slack', 'குழு செய்தியிடல்');
t('productIntegrations.integrations.googleCloud', 'கிளவுட் உள்கட்டமைப்பு');
t('productIntegrations.integrations.aws', 'Amazon Web Services');
t('productIntegrations.integrations.anthropic', 'Claude AI உதவியாளர்');
t('productIntegrations.integrations.vercel', 'முன்பக்க நிலைநிறுத்தம்');
t('productIntegrations.integrations.supabase', 'சேவையாக பின்புலம்');
t('productIntegrations.howItWorks.title', 'ஒருங்கிணைப்புகள் எவ்வாறு செயல்படுகின்றன');
t('productIntegrations.howItWorks.step1.title', 'ஒருங்கிணைப்பைத் தேர்ந்தெடுங்கள்');
t('productIntegrations.howItWorks.step1.description', 'எங்கள் பட்டியலை உலாவி, உங்களுக்குத் தேவையான ஒருங்கிணைப்பை இயக்க கிளிக் செய்யுங்கள்.');
t('productIntegrations.howItWorks.step2.title', 'ஒருமுறை அங்கீகரியுங்கள்');
t('productIntegrations.howItWorks.step2.description', 'OAuth மூலம் உங்கள் கணக்கை பாதுகாப்பாக இணையுங்கள். உங்கள் நற்சான்றிதழ்கள் பாதுகாப்பாக இருக்கும்.');
t('productIntegrations.howItWorks.step3.title', 'பயன்படுத்தத் தொடங்குங்கள்');
t('productIntegrations.howItWorks.step3.description', 'ஒருங்கிணைப்பு உங்கள் குறியீட்டில் உடனடியாகப் பயன்படுத்தத் தயாராக உள்ளது.');
t('productIntegrations.cta.title', 'இன்றே உங்கள் கருவிகளை இணையுங்கள்');
t('productIntegrations.cta.subtitle', 'நீங்கள் ஏற்கனவே பயன்படுத்தும் சேவைகளுடன் ஒருங்கிணைக்கும் சக்திவாய்ந்த ஆப்களை உருவாக்குங்கள்.');

// ===== PRODUCT MOBILE =====
t('productMobile.badge', 'எங்கிருந்தும் உருவாக்குங்கள்');
t('productMobile.title', 'AppNode');
t('productMobile.titleHighlight', 'மொபைல்');
t('productMobile.subtitle', 'எங்கிருந்தும் உங்கள் ஆப்களை உருவாக்கி, திருத்தி, நிலைநிறுத்துங்கள். AppNode-இன் முழு சக்தி உங்கள் கையில்.');
t('productMobile.appStore', 'App Store');
t('productMobile.playStore', 'Play Store');
t('productMobile.live', 'நேரடி');
t('productMobile.deploy', 'நிலைநிறுத்து');
t('productMobile.output', 'வெளியீடு');
t('productMobile.comingSoonOn', 'விரைவில் வருகிறது');
t('productMobile.googlePlay', 'Google Play');
t('productMobile.soonBadge', 'விரைவில்');
t('productMobile.comingSoonTitle', 'மொபைல் ஆப்கள் விரைவில் வருகின்றன');
t('productMobile.comingSoonDescription', 'எங்கள் மொபைல் ஆப்கள் தற்போது உருவாக்கத்தில் உள்ளன. இதற்கிடையில், எங்கள் பயனர்கள் எந்த மொபைல் உலாவியிலும் AppNode-ஐ அணுகலாம்.');
t('productMobile.tabletPreview', 'டேப்லெட் முன்னோட்டம்');
t('productMobile.phonePreview', 'போன் முன்னோட்டம்');
t('productMobile.tryAppNodeNow', 'இப்போது AppNode-ஐ முயற்சியுங்கள்');
t('productMobile.featuresTitle', 'முழு சக்தி, எங்கிருந்தும்');
t('productMobile.downloadIOS', 'iOS-க்கு பதிவிறக்கம்');
t('productMobile.downloadAndroid', 'Android-க்கு பதிவிறக்கம்');
t('productMobile.features.codeEditor.title', 'முழு குறியீடு எடிட்டர்');
t('productMobile.features.codeEditor.description', 'தொடரியல் முன்னிறுத்தல், தானியங்கி நிறைவு மற்றும் பல-கோப்பு ஆதரவுடன் முழுமையான குறியீடு எடிட்டர்.');
t('productMobile.features.oneTapDeploy.title', 'ஒரு தட்டு நிலைநிறுத்தம்');
t('productMobile.features.oneTapDeploy.description', 'உங்கள் ஃபோனிலிருந்து உடனடியாக நிலைநிறுத்துங்கள். உங்கள் ஆப் நொடிகளில் நேரடியாவதைப் பாருங்கள்.');
t('productMobile.features.realTimeSync.title', 'நிகழ்நேர ஒத்திசைவு');
t('productMobile.features.realTimeSync.description', 'உங்கள் திட்டங்கள் அனைத்து சாதனங்களிலும் ஒத்திசைக்கின்றன. டெஸ்க்டாப்பில் தொடங்கி, மொபைலில் தொடருங்கள்.');
t('productMobile.features.aiAssistant.title', 'AI உதவியாளர்');
t('productMobile.features.aiAssistant.description', 'மொபைலிலும் குறியீடு எழுத AI உதவி பெறுங்கள். குரல் உள்ளீடு ஆதரிக்கப்படுகிறது.');
t('productMobile.features.liveAnalytics.title', 'நேரடி பகுப்பாய்வு');
t('productMobile.features.liveAnalytics.description', 'உங்கள் ஆப் செயல்திறன், பிழைகள் மற்றும் பயனர் அளவீடுகளை எங்கிருந்தும் கண்காணியுங்கள்.');
t('productMobile.features.teamCollaboration.title', 'குழு ஒத்துழைப்பு');
t('productMobile.features.teamCollaboration.description', 'PR-களை மதிப்பாய்வு செய்யுங்கள், குறியீட்டில் கருத்துரையிடுங்கள், எங்கிருந்தும் உங்கள் குழுவுடன் ஒத்துழையுங்கள்.');
t('productMobile.cta.title', 'எங்கிருந்தும் குறியீடிடுங்கள்');
t('productMobile.cta.subtitle', 'AppNode மொபைலைப் பதிவிறக்கி உங்கள் மேம்பாட்டு பணிப்பாய்வை எங்கிருந்தும் எடுத்துச் செல்லுங்கள்.');

// ===== PRODUCT PUBLISH =====
t('productPublish.badge', 'நிலைநிறுத்தம்');
t('productPublish.title', 'உடனடியாக');
t('productPublish.titleHighlight', 'வெளியிடுங்கள்');
t('productPublish.subtitle', 'ஒரே கிளிக்கில் உங்கள் ஆப்களை நிலைநிறுத்துங்கள். தனிப்பயன் டொமைன், SSL சான்றிதழ்கள் மற்றும் உலகளாவிய CDN பெறுங்கள்.');
t('productPublish.deployNow', 'இப்போது நிலைநிறுத்துங்கள்');
t('productPublish.featuresTitle', 'அனுப்ப தேவையான அனைத்தும்');
t('productPublish.startDeploying', 'நிலைநிறுத்தத் தொடங்குங்கள்');
t('productPublish.features.oneClick.title', 'ஒரே கிளிக் நிலைநிறுத்தம்');
t('productPublish.features.oneClick.description', 'உங்கள் எடிட்டரிலிருந்து நேரடியாக நிலைநிறுத்துங்கள்.');
t('productPublish.features.customDomains.title', 'தனிப்பயன் டொமைன்கள்');
t('productPublish.features.customDomains.description', 'உங்கள் சொந்த டொமைனை இணையுங்கள் அல்லது எங்கள் துணை டொமைனைப் பயன்படுத்துங்கள்.');
t('productPublish.features.ssl.title', 'தானியங்கி SSL');
t('productPublish.features.ssl.description', 'ஒவ்வொரு நிலைநிறுத்தத்திற்கும் இலவச SSL சான்றிதழ் கிடைக்கும்.');
t('productPublish.features.cdn.title', 'உலகளாவிய CDN');
t('productPublish.features.cdn.description', 'உங்கள் ஆப் 34+ எட்ஜ் இடங்களிலிருந்து வழங்கப்படுகிறது.');
t('productPublish.features.analytics.title', 'உள்ளமைக்கப்பட்ட பகுப்பாய்வு');
t('productPublish.features.analytics.description', 'பார்வையாளர்கள் மற்றும் செயல்திறன் அளவீடுகளைக் கண்காணியுங்கள்.');
t('productPublish.features.rollbacks.title', 'உடனடி பின்வாங்கல்கள்');
t('productPublish.features.rollbacks.description', 'எந்த முந்தைய நிலைநிறுத்தத்திற்கும் பின்வாங்குங்கள்.');
t('productPublish.cta.title', 'இன்றே உங்கள் ஆப்பை அனுப்புங்கள்');
t('productPublish.cta.subtitle', 'யோசனையிலிருந்து உற்பத்திக்கு நிமிடங்களில், நாட்களில் அல்ல.');

// ===== PRODUCT SECURITY =====
t('productSecurity.badge', 'நிறுவன பாதுகாப்பு');
t('productSecurity.titleHighlight', 'முதலில்');
t('productSecurity.subtitle', 'நம்பிக்கையுடன் உருவாக்குங்கள். AppNode நிறுவன-தர பாதுகாப்பு, முன்-நிலைநிறுத்த ஸ்கேனிங் மற்றும் இணக்கக் கருவிகளை வழங்குகிறது.');
t('productSecurity.enterpriseSolutions', 'நிறுவன தீர்வுகள்');
t('productSecurity.securityReport', 'பாதுகாப்பு அறிக்கை');
t('productSecurity.badges.soc2', 'SOC 2 Type II');
t('productSecurity.badges.gdpr', 'GDPR இணக்கம்');
t('productSecurity.badges.iso', 'ISO 27001');
t('productSecurity.badges.hipaa', 'HIPAA தயார்');
t('productSecurity.features.sso.title', 'SSO & SAML');
t('productSecurity.features.sso.description', 'உங்கள் ஏற்கனவே உள்ள அடையாள வழங்குநருடன் ஒருங்கிணையுங்கள். SAML, OIDC மற்றும் அனைத்து முக்கிய வழங்குநர்களுக்கான ஆதரவு.');
t('productSecurity.features.sso.item1', 'SAML 2.0 ஆதரவு');
t('productSecurity.features.sso.item2', 'சரியான நேரத்தில் வழங்குதல்');
t('productSecurity.features.sso.item3', 'பல காரணி அங்கீகாரம்');
t('productSecurity.features.scanning.title', 'முன்-நிலைநிறுத்த ஸ்கேனிங்');
t('productSecurity.features.scanning.description', 'ஒவ்வொரு நிலைநிறுத்தமும் பாதிப்புகள், ரகசியங்கள் மற்றும் பாதுகாப்பு சிக்கல்களுக்கு தானியங்காக ஸ்கேன் செய்யப்படுகிறது.');
t('productSecurity.features.scanning.item1', 'சார்பு பாதிப்பு ஸ்கேனிங்');
t('productSecurity.features.scanning.item2', 'ரகசிய கண்டறிதல்');
t('productSecurity.features.scanning.item3', 'OWASP இணக்கச் சரிபார்ப்புகள்');
t('productSecurity.features.encryption.title', 'தரவு மறையாக்கம்');
t('productSecurity.features.encryption.description', 'தொழில்துறை-தரமான மறையாக்கத்தைப் பயன்படுத்தி அனைத்து தரவும் ஓய்விலும் போக்குவரத்திலும் மறையாக்கம் செய்யப்படுகிறது.');
t('productSecurity.features.encryption.item1', 'ஓய்வில் AES-256 மறையாக்கம்');
t('productSecurity.features.encryption.item2', 'போக்குவரத்தில் TLS 1.3');
t('productSecurity.features.encryption.item3', 'வாடிக்கையாளர்-நிர்வகிக்கும் விசைகள் கிடைக்கும்');
t('productSecurity.features.auditLogs.title', 'தணிக்கை பதிவுகள்');
t('productSecurity.features.auditLogs.description', 'விரிவான தணிக்கை பதிவுகளுடன் உங்கள் கணக்கில் எடுக்கப்பட்ட அனைத்து நடவடிக்கைகளிலும் முழுமையான தெரிவுநிலை.');
t('productSecurity.features.auditLogs.item1', '90 நாள் பதிவு தக்கவைப்பு');
t('productSecurity.features.auditLogs.item2', 'SIEM-க்கு ஏற்றுமதி');
t('productSecurity.features.auditLogs.item3', 'நிகழ்நேர எச்சரிக்கைகள்');
t('productSecurity.cta.title', 'நிறுவன பாதுகாப்பு தேவையா?');
t('productSecurity.cta.subtitle', 'தனிப்பயன் பாதுகாப்பு தேவைகள் மற்றும் இணக்கத் தேவைகள் குறித்து எங்கள் குழுவிடம் பேசுங்கள்.');

// ===== SOLUTIONS (remaining) =====
t('solutions.startup.title', 'ஸ்டார்ட்அப்களுக்கு');
t('solutions.startup.description', 'வேகமாகச் செல்லுங்கள், நாட்களில் உங்கள் MVP-ஐ உருவாக்குங்கள், மாதங்களில் அல்ல.');
t('solutions.enterprise.title', 'நிறுவனங்களுக்கு');
t('solutions.enterprise.description', 'இணக்கம், SSO மற்றும் அர்ப்பணிக்கப்பட்ட ஆதரவுடன் பாதுகாப்பாக அளவிடுங்கள்.');
t('solutions.agencies.title', 'ஏஜென்சிகளுக்கு');
t('solutions.agencies.description', 'வெள்ளை-முத்திரை தீர்வுகளுடன் வாடிக்கையாளர் திட்டங்களை வேகமாக வழங்குங்கள்.');

// ===== USE CASES =====
t('useCases.subtitle', 'குழுக்கள் AppNode-ஐ எவ்வாறு பயன்படுத்துகின்றன என்பதைப் பாருங்கள்');
t('useCases.rapidPrototyping.title', 'விரைவு முன்மாதிரி');
t('useCases.rapidPrototyping.description', 'மணிநேரங்களில் வேலை செய்யும் முன்மாதிரிகளுடன் யோசனைகளை விரைவாகச் சரிபார்க்கவும்.');
if (!ta.useCases) ta.useCases = {};
if (!ta.useCases.rapidPrototyping) ta.useCases.rapidPrototyping = {};
ta.useCases.rapidPrototyping.benefitsList = [
  {"title":"பணம் சேமியுங்கள்","description":"முழு மேம்பாட்டில் முதலீடு செய்வதற்கு முன் யோசனைகளைச் சரிபார்க்கவும்"},
  {"title":"வேகமாகச் செல்லுங்கள்","description":"வாரங்களில் அல்ல, மணிநேரங்களில் முன்மாதிரிகளை உருவாக்குங்கள்"},
  {"title":"உண்மையான கருத்து","description":"வேலை செய்யும் முன்மாதிரிகளைப் பயன்படுத்தி உண்மையான பயனர்களிடம் சோதிக்கவும்"}
]; count++;
t('useCases.businessApps.title', 'வணிக ஆப்ளிகேஷன்கள்');
t('useCases.businessApps.description', 'தனிப்பயன் CRM-கள், ERP-கள் மற்றும் பணிப்பாய்வு தானியங்கி கருவிகளை உருவாக்குங்கள்.');
t('useCases.mobileApps.title', 'மொபைல் ஆப்ளிகேஷன்கள்');
t('useCases.mobileApps.description', 'மொபைல் மேம்பாட்டு நிபுணத்துவம் இல்லாமல் நேட்டிவ் மொபைல் அனுபவங்களை உருவாக்குங்கள்.');

// ===== PRICING (remaining) =====
t('pricing.creditInfo', '1 கிரெடிட் = 1 உருவாக்கம்');
t('pricing.freeTier.title', 'இலவச நிலை');
t('pricing.freeTier.subtitle', 'கிரெடிட் கார்டு இல்லாமல் தொடங்குங்கள்');
t('pricing.buyCredits', 'கிரெடிட்களை வாங்கு');
t('pricing.mostPopular', 'மிகவும் பிரபலம்');
t('pricing.credits', 'கிரெடிட்கள்');
t('pricing.perCredit', 'ஒரு கிரெடிட்டுக்கு');
t('pricing.buyNow', 'இப்போது வாங்கு');
t('pricing.faq.title', 'அடிக்கடி கேட்கப்படும் கேள்விகள்');
t('pricing.faq.subtitle', 'எங்கள் விலை நிர்ணயம் பற்றி நீங்கள் தெரிந்துகொள்ள வேண்டிய அனைத்தும்');
t('pricing.faq.q1', 'கிரெடிட்களுடன் நான் என்ன செய்யலாம்?');
t('pricing.faq.a1', 'ஒவ்வொரு கிரெடிட்டும் ஒரு முழுமையான ஆப்பை உருவாக்க உங்களை அனுமதிக்கிறது. புதிய ஆப்கள் உருவாக்க அல்லது ஏற்கனவே உள்ளவற்றை மீண்டும் உருவாக்க கிரெடிட்களைப் பயன்படுத்தலாம்.');
t('pricing.faq.q2', 'கிரெடிட்கள் காலாவதியாகுமா?');
t('pricing.faq.a2', 'இல்லை! உங்கள் வாங்கிய கிரெடிட்கள் ஒருபோதும் காலாவதியாகாது. நீங்கள் விரும்பும்போது பயன்படுத்துங்கள்.');
t('pricing.faq.q3', 'நான் பணத்தைத் திரும்பப் பெற முடியுமா?');
t('pricing.faq.a3', 'ஆம், பயன்படுத்தாத கிரெடிட்களுக்கு 30 நாள் பணத்திரும்ப உத்தரவாதம் வழங்குகிறோம்.');
t('pricing.faq.q4', 'எந்த கட்டண முறைகளை ஏற்கிறீர்கள்?');
t('pricing.faq.a4', 'அனைத்து முக்கிய கிரெடிட் கார்டுகள் (Visa, Mastercard, American Express) மற்றும் PayPal ஏற்கிறோம்.');
t('pricing.faq.q5', 'இலவச நிலை எவ்வாறு செயல்படுகிறது?');
t('pricing.faq.a5', 'ஒவ்வொரு புதிய பயனருக்கும் AppNode-ஐ முயற்சிக்க 2 இலவச உருவாக்கங்கள் கிடைக்கும். கிரெடிட் கார்டு தேவையில்லை.');
t('pricing.readyToStart', 'தொடங்கத் தயாரா?');
t('pricing.startWith', '2 இலவச உருவாக்கங்களுடன் உருவாக்கத் தொடங்குங்கள்.');
t('pricing.getStartedFree', 'இலவசமாகத் தொடங்கு');

// ===== ENTERPRISE (remaining) =====
t('enterprise.features.security.title', 'நிறுவன பாதுகாப்பு');
t('enterprise.features.security.description', 'மேம்பட்ட மறையாக்கம் மற்றும் அணுகல் கட்டுப்பாடுகளுடன் SOC 2 Type II சான்றிதழ்.');
t('enterprise.features.onpremise.title', 'ஆன்-பிரமிஸ்');
t('enterprise.features.onpremise.description', 'உங்கள் சொந்த கிளவுட் அல்லது ஆன்-பிரமிஸ் சூழலில் நிலைநிறுத்துங்கள்.');

// ===== ENTERPRISE PAGE =====
t('enterprisePage.badge', 'ENTERPRISE');
t('enterprisePage.titleHighlight', 'நிறுவன-தர');
t('enterprisePage.titleEnd', 'அம்சங்கள்');
t('enterprisePage.viewPricing', 'விலை நிர்ணயத்தைக் காண்க');
t('enterprisePage.trustedBy', 'முன்னணி நிறுவனங்களால் நம்பப்படுகிறது');
t('enterprisePage.trustedByText', 'உலகளாவிய முன்னணி குழுக்கள் மற்றும் நிறுவனங்களால் நம்பப்படுகிறது');
t('enterprisePage.featuresTitle', 'நிறுவனத்திற்கு தேவையான அனைத்தும்');
t('enterprisePage.featuresSubtitle', 'பாதுகாப்பு, அளவிடுதல் மற்றும் ஆதரவு தேவைப்படும் குழுக்களுக்கான மேம்பட்ட அம்சங்கள்.');
t('enterprisePage.testimonialsTitle', 'நிறுவனக் குழுக்களால் விரும்பப்படுகிறது');
t('enterprisePage.testimonialsSubtitle', 'AppNode Enterprise பற்றி தலைவர்கள் என்ன சொல்கிறார்கள் என்பதைப் பாருங்கள்.');
t('enterprisePage.contactTitle', 'தொடர்புகொள்ளுங்கள்');
t('enterprisePage.contactSubtitle', 'உங்கள் குழுவைப் பற்றி சொல்லுங்கள், 24 மணி நேரத்திற்குள் பதிலளிப்போம்.');
t('enterprisePage.thankYou', 'நன்றி!');
t('enterprisePage.thankYouMessage', 'உங்கள் செய்தியைப் பெற்றோம், விரைவில் தொடர்புகொள்வோம்.');
t('enterprisePage.features.security.title', 'நிறுவன-தர பாதுகாப்பு');
t('enterprisePage.features.security.description', 'SSO, SAML மற்றும் மேம்பட்ட அணுகல் கட்டுப்பாடுகளுடன் SOC 2 Type II சான்றிதழ்.');
t('enterprisePage.features.collaboration.title', 'குழு ஒத்துழைப்பு');
t('enterprisePage.features.collaboration.description', 'வரம்பற்ற குழு உறுப்பினர்கள், பகிரப்பட்ட பணியிடங்கள் மற்றும் நிகழ்நேர ஒத்துழைப்பு அம்சங்கள்.');
t('enterprisePage.features.performance.title', 'முன்னுரிமை செயல்திறன்');
t('enterprisePage.features.performance.description', 'உத்தரவாத இயங்கு நேர SLA-கள் மற்றும் வேகமான உருவாக்க நேரங்களுடன் அர்ப்பணிக்கப்பட்ட உள்கட்டமைப்பு.');
t('enterprisePage.features.support.title', 'அர்ப்பணிக்கப்பட்ட ஆதரவு');
t('enterprisePage.features.support.description', 'அர்ப்பணிக்கப்பட்ட வாடிக்கையாளர் வெற்றி மேலாளர் மற்றும் ஆன்போர்டிங்குடன் 24/7 முன்னுரிமை ஆதரவு.');
t('enterprisePage.features.integrations.title', 'தனிப்பயன் ஒருங்கிணைப்புகள்');
t('enterprisePage.features.integrations.description', 'API அணுகல், தனிப்பயன் வெப்ஹூக்குகள் மற்றும் உங்கள் ஏற்கனவே உள்ள கருவிகள் மற்றும் பணிப்பாய்வுகளுடன் ஒருங்கிணைப்புகள்.');
t('enterprisePage.features.analytics.title', 'மேம்பட்ட பகுப்பாய்வு');
t('enterprisePage.features.analytics.description', 'உங்கள் அமைப்புக்கான விரிவான பயன்பாட்டு பகுப்பாய்வு, தணிக்கை பதிவுகள் மற்றும் இணக்க அறிக்கை.');

t('enterprisePage.testimonials.testimonial1.quote', 'AppNode எங்கள் குழு உள் கருவிகளை உருவாக்கும் விதத்தை மாற்றியது. வாரங்கள் எடுத்தது இப்போது மணிநேரங்களில் நடக்கிறது.');
t('enterprisePage.testimonials.testimonial1.author', 'Sarah Chen');
t('enterprisePage.testimonials.testimonial1.role', 'பொறியியல் VP');
t('enterprisePage.testimonials.testimonial1.company', 'TechCorp');
t('enterprisePage.testimonials.testimonial2.quote', 'நிறுவன அம்சங்கள் எங்களுக்குத் தேவையான பாதுகாப்பு மற்றும் கட்டுப்பாட்டை வழங்குகின்றன, அதே நேரத்தில் குழுவை சுறுசுறுப்பாக வைத்திருக்கின்றன.');
t('enterprisePage.testimonials.testimonial2.author', 'Michael Torres');
t('enterprisePage.testimonials.testimonial2.company', 'FinanceApp');
t('enterprisePage.testimonials.testimonial3.quote', 'எங்கள் வடிவமைப்புக் குழு இப்போது டெவலப்பர்களுக்காகக் காத்திருக்காமல் உற்பத்தி-தயார் ஆப்களை முன்மாதிரி செய்து அனுப்ப முடியும்.');
t('enterprisePage.testimonials.testimonial3.author', 'Emily Watson');
t('enterprisePage.testimonials.testimonial3.role', 'வடிவமைப்புத் தலைவர்');
t('enterprisePage.testimonials.testimonial3.company', 'DesignStudio');
t('enterprisePage.testimonials.testimonial4.quote', 'எங்கள் முழு நிர்வாக பேனலையும் வெறும் 2 வாரங்களில் AppNode-க்கு மாற்றினோம். ROI நம்பமுடியாதது.');
t('enterprisePage.testimonials.testimonial4.author', 'James Kim');
t('enterprisePage.testimonials.testimonial4.role', 'செயல்பாட்டு இயக்குநர்');
t('enterprisePage.testimonials.testimonial4.company', 'CloudScale');
t('enterprisePage.testimonials.testimonial5.quote', 'SSO ஒருங்கிணைப்பு மற்றும் தணிக்கை பதிவுகள் எங்கள் இணக்கக் குழுவிற்கு சரியாகத் தேவையானவை.');
t('enterprisePage.testimonials.testimonial5.author', 'Anika Larsson');
t('enterprisePage.testimonials.testimonial5.role', 'தலைமை பாதுகாப்பு அதிகாரி');
t('enterprisePage.testimonials.testimonial5.company', 'SecureBank');
t('enterprisePage.testimonials.testimonial6.quote', 'AppNode-இன் API நெகிழ்வுத்தன்மை எங்கள் ஏற்கனவே உள்ள அனைத்து கருவிகளையும் இணைக்க அனுமதித்தது.');
t('enterprisePage.testimonials.testimonial6.author', 'Ryan Park');
t('enterprisePage.testimonials.testimonial6.role', 'பொறியியல் மேலாளர்');
t('enterprisePage.testimonials.testimonial6.company', 'DataFlow');

t('enterprisePage.form.fullName', 'முழு பெயர்');
t('enterprisePage.form.namePlaceholder', 'ஜான் ஸ்மித்');
t('enterprisePage.form.workEmail', 'பணி மின்னஞ்சல்');
t('enterprisePage.form.emailPlaceholder', 'john@company.com');
t('enterprisePage.form.companyPlaceholder', 'Acme Inc.');
t('enterprisePage.form.teamSize', 'குழு அளவு');
t('enterprisePage.form.selectTeamSize', 'குழு அளவைத் தேர்ந்தெடுங்கள்');
t('enterprisePage.form.teamSize1', '1-10 ஊழியர்கள்');
t('enterprisePage.form.teamSize2', '11-50 ஊழியர்கள்');
t('enterprisePage.form.teamSize3', '51-200 ஊழியர்கள்');
t('enterprisePage.form.teamSize4', '201-500 ஊழியர்கள்');
t('enterprisePage.form.teamSize5', '500+ ஊழியர்கள்');
t('enterprisePage.form.message', 'நாங்கள் எவ்வாறு உதவ முடியும்?');
t('enterprisePage.form.messagePlaceholder', 'உங்கள் பயன்பாட்டு வழக்கு மற்றும் தேவைகள் பற்றி சொல்லுங்கள்...');
t('enterprisePage.form.sending', 'அனுப்புகிறது...');

// ===== AUTH (remaining) =====
t('auth.login.signUpLink', 'பதிவு செய்க');
t('auth.login.invalidCredentials', 'தவறான மின்னஞ்சல் அல்லது கடவுச்சொல்');
t('auth.login.loggingIn', 'உள்நுழைகிறது...');
t('auth.login.decorativeTitle', 'எதையும் உருவாக்குங்கள்.');
t('auth.login.decorativeSubtitle', 'முன்னெப்போதையும் விட வேகமாக.');
t('auth.login.decorativeDescription', 'AI உடன் ஆப்களை உருவாக்க உலகின் எளிய வழி.');
t('auth.signup.loginLink', 'உள்நுழை');
t('auth.signup.terms', 'பதிவு செய்வதன் மூலம், எங்கள் சேவை விதிமுறைகள் மற்றும் தனியுரிமைக் கொள்கையை ஒப்புக்கொள்கிறீர்கள்.');
t('auth.signup.decorativeTitle', 'இன்றே உருவாக்கத் தொடங்குங்கள்');
t('auth.signup.decorativeDescription', 'உங்கள் இலவச கணக்கை உருவாக்கி நிமிடங்களில் AI உடன் அற்புதமான ஆப்ளிகேஷன்களை உருவாக்கத் தொடங்குங்கள்.');
t('auth.signup.step2Title', 'உங்கள் சுயவிவரத்தைத் தனிப்பயனாக்குங்கள்');
t('auth.signup.step2Subtitle', 'உங்களை பிரதிநிதித்துவப்படுத்தும் அவதார் நிறத்தைத் தேர்ந்தெடுங்கள்');
t('auth.signup.step3Title', 'உங்களைப் பற்றி சொல்லுங்கள்');
t('auth.signup.step3Subtitle', 'உங்கள் அனுபவத்தைத் தனிப்பயனாக்க இது உதவுகிறது');
t('auth.signup.roleQuestion', 'உங்கள் பங்கை சிறப்பாக விவரிப்பது எது?');
t('auth.signup.company', 'நிறுவனப் பெயர்');
t('auth.signup.creatingAccount', 'கணக்கை உருவாக்குகிறது...');
t('auth.signup.createAccount', 'கணக்கை உருவாக்கு');
t('auth.features.aiPowered', 'AI-இயங்கும் மேம்பாடு');
t('auth.features.shipFast', 'மாதங்களில் அல்ல, நிமிடங்களில் அனுப்புங்கள்');
t('auth.features.freeGenerations', 'தொடங்க 2 இலவச உருவாக்கங்கள்');
t('auth.features.noCreditCard', 'கிரெடிட் கார்டு தேவையில்லை');
t('auth.features.fullAccess', 'அனைத்து டெம்ப்ளேட்களுக்கும் முழு அணுகல்');

// ===== DOCS (remaining) =====
t('docs.examples', 'எடுத்துக்காட்டுகள்');
t('blog.readTime', 'நிமிட வாசிப்பு');
t('blog.categories.all', 'அனைத்தும்');
t('blog.categories.product', 'தயாரிப்பு');
t('blog.categories.engineering', 'பொறியியல்');
t('blog.categories.community', 'சமூகம்');
t('blog.categories.tutorials', 'பயிற்சிகள்');

// ===== CAREERS (remaining) =====
t('careers.benefits.remoteDesc', 'உலகில் எங்கிருந்தும் வேலை செய்யுங்கள்');
t('careers.benefits.equityDesc', 'எங்கள் வெற்றியில் பங்கு பெறுங்கள்');
t('careers.benefits.healthDesc', 'உங்களுக்கும் உங்கள் குடும்பத்திற்கும் விரிவான காப்பீடு');
t('careers.benefits.learningDesc', 'உங்கள் வளர்ச்சியில் முதலீடு செய்யுங்கள்');

// ===== COMMUNITY =====
t('community.discord', 'எங்கள் Discord-இல் சேருங்கள்');
t('community.forum', 'சமூக மன்றம்');
t('community.showcase', 'திட்ட காட்சி');
t('community.events', 'வரவிருக்கும் நிகழ்வுகள்');

// ===== SUPPORT =====
t('support.helpCenter', 'உதவி மையம்');
t('support.status', 'கணினி நிலை');

// ===== LEGAL =====
t('legal.terms.title', 'சேவை விதிமுறைகள்');
t('legal.terms.lastUpdated', 'கடைசியாகப் புதுப்பிக்கப்பட்டது');
t('legal.privacy.title', 'தனியுரிமைக் கொள்கை');
t('legal.privacy.lastUpdated', 'கடைசியாகப் புதுப்பிக்கப்பட்டது');
t('legal.cookies.title', 'குக்கீ கொள்கை');
t('legal.cookies.lastUpdated', 'கடைசியாகப் புதுப்பிக்கப்பட்டது');

// ===== STATUS =====
t('status.degraded', 'குறைந்த செயல்திறன்');
t('status.outage', 'சேவை நிறுத்தம்');
t('status.maintenance', 'பராமரிப்பில் உள்ளது');

// ===== ERRORS =====
t('errors.404.description', 'நீங்கள் தேடும் பக்கம் இல்லை.');
t('errors.500.title', 'ஏதோ தவறு நேர்ந்தது');
t('errors.500.description', 'இதை சரிசெய்ய பணிபுரிகிறோம். பிறகு மீண்டும் முயற்சிக்கவும்.');
t('errors.500.retry', 'மீண்டும் முயற்சி');

fs.writeFileSync(taPath, JSON.stringify(ta, null, 2), 'utf8');
console.log('Phase B complete. Translations applied:', count);
