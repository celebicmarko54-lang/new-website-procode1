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

// ===== SUPPORT PAGE (55 keys) =====
t('supportPage.heroTitle', 'நாங்கள் எவ்வாறு உதவ முடியும்?');
t('supportPage.heroSubtitle', 'எங்கள் அறிவுத் தளத்தில் தேடுங்கள் அல்லது கீழே உள்ள வகைகளை உலாவுங்கள்');
t('supportPage.searchPlaceholder', 'உதவியைத் தேடுங்கள்...');
t('supportPage.browseByCategory', 'வகை வாரியாக உலாவுங்கள்');
t('supportPage.popularArticles', 'பிரபலமான கட்டுரைகள்');
t('supportPage.needMoreHelp', 'மேலும் உதவி தேவையா?');
t('supportPage.needMoreHelpDescription', 'நீங்கள் தேடுவது கிடைக்கவில்லையா? எங்கள் ஆதரவுக் குழு உதவ இங்கே உள்ளது.');
t('supportPage.chatWithSupport', 'ஆதரவுடன் அரட்டை');
t('supportPage.emailSupport', 'மின்னஞ்சல் ஆதரவு');
t('supportPage.faq', 'அடிக்கடி கேட்கப்படும் கேள்விகள்');
t('supportPage.stillHaveQuestions', 'இன்னும் கேள்விகள் உள்ளனவா?');
t('supportPage.stillHaveQuestionsDescription', 'நீங்கள் வெற்றி பெற எங்கள் குழு தயாராக உள்ளது. எப்போது வேண்டுமானாலும் தொடர்புகொள்ளுங்கள்.');
t('supportPage.viewGallery', 'கேலரியைக் காண்க');
t('supportPage.joinCommunity', 'சமூகத்தில் சேருங்கள்');
t('supportPage.browseGuides', 'வழிகாட்டிகளை உலாவுங்கள்');
t('supportPage.articles', 'கட்டுரைகள்');
t('supportPage.quickActions.gettingStarted', 'தொடங்குதல்');
t('supportPage.quickActions.pricing', 'விலை நிர்ணயம்');
t('supportPage.quickActions.exportCode', 'குறியீட்டை ஏற்றுமதி செய்');
t('supportPage.quickActions.liveAgent', 'நேரடி ஏஜெண்ட்');
t('supportPage.categories.gettingStarted.name', 'தொடங்குதல்');
t('supportPage.categories.gettingStarted.description', 'AppNode-க்கு புதியவரா? இங்கே தொடங்குங்கள்');
t('supportPage.categories.accountBilling.name', 'கணக்கு & பில்லிங்');
t('supportPage.categories.accountBilling.description', 'உங்கள் சந்தா மற்றும் கட்டணங்களை நிர்வகியுங்கள்');
t('supportPage.categories.buildingApps.name', 'ஆப்கள் உருவாக்குதல்');
t('supportPage.categories.buildingApps.description', 'அற்புதமான ஆப்களை எவ்வாறு உருவாக்குவது என்று கற்றுக்கொள்ளுங்கள்');
t('supportPage.categories.customization.name', 'தனிப்பயனாக்கம்');
t('supportPage.categories.customization.description', 'உங்கள் திட்டங்களை ஸ்டைல் செய்து தனிப்பயனாக்குங்கள்');
t('supportPage.categories.integrations.name', 'ஒருங்கிணைப்புகள்');
t('supportPage.categories.integrations.description', 'மூன்றாம் தரப்பு சேவைகளுடன் இணையுங்கள்');
t('supportPage.categories.troubleshooting.name', 'சிக்கல் தீர்வு');
t('supportPage.categories.troubleshooting.description', 'பொதுவான சிக்கல்கள் மற்றும் பிழைகளை சரிசெய்யுங்கள்');
t('supportPage.popularArticlesList.firstApp', 'உங்கள் முதல் ஆப்பை எவ்வாறு உருவாக்குவது');
t('supportPage.popularArticlesList.promptEngineering', 'ப்ராம்ப்ட் பொறியியலைப் புரிந்துகொள்ளுதல்');
t('supportPage.popularArticlesList.customDomain', 'தனிப்பயன் டொமைனை இணைத்தல்');
t('supportPage.popularArticlesList.exportCode', 'உங்கள் திட்ட குறியீட்டை ஏற்றுமதி செய்தல்');
t('supportPage.popularArticlesList.teamCollab', 'குழு ஒத்துழைப்பு அம்சங்கள்');
t('supportPage.popularArticlesList.apiAuth', 'API அங்கீகார அமைப்பு');
t('supportPage.faqs.whatIsAppNode.question', 'AppNode என்றால் என்ன?');
t('supportPage.faqs.whatIsAppNode.answer', 'AppNode என்பது AI-இயங்கும் தளம், இது இயற்கை மொழி விளக்கங்களைப் பயன்படுத்தி வலை ஆப்ளிகேஷன்களை உருவாக்க உங்களை அனுமதிக்கிறது.');
t('supportPage.faqs.codingExperience.question', 'எனக்கு குறியீட்டு அனுபவம் தேவையா?');
t('supportPage.faqs.codingExperience.answer', 'இல்லை! AppNode அனைவருக்கும் வடிவமைக்கப்பட்டது. குறியீட்டு அறிவு இல்லாமலே தொழில்முறை ஆப்களை உருவாக்கலாம்.');
t('supportPage.faqs.exportCode.question', 'நான் எனது குறியீட்டை ஏற்றுமதி செய்ய முடியுமா?');
t('supportPage.faqs.exportCode.answer', 'ஆம், எப்போது வேண்டுமானாலும் உங்கள் முழுமையான திட்ட குறியீட்டை ஏற்றுமதி செய்யலாம்.');
t('supportPage.faqs.technologies.question', 'AppNode என்ன தொழில்நுட்பங்களைப் பயன்படுத்துகிறது?');
t('supportPage.faqs.technologies.answer', 'AppNode நவீன React/Next.js ஆப்ளிகேஷன்களை Tailwind CSS உடன் உருவாக்குகிறது.');
t('supportPage.faqs.freePlan.question', 'இலவச திட்டம் உள்ளதா?');
t('supportPage.faqs.freePlan.answer', 'ஆம்! ஆப்களை உருவாக்கி நிலைநிறுத்த அனுமதிக்கும் தாராளமான இலவச நிலையை வழங்குகிறோம்.');
t('supportPage.botGreeting', 'வணக்கம்! 👋 நான் AppNode-இன் ஆதரவு உதவியாளர். இன்று நான் உங்களுக்கு எவ்வாறு உதவ முடியும்?');
t('supportPage.liveAgentMessage', 'உங்களை எங்கள் ஆதரவுக் குழுவுடன் இணைக்க மகிழ்ச்சி! support@appnode.com-ல் எங்களை தொடர்புகொள்ளலாம்.');
t('supportPage.fallbackMessage', 'அதற்கு சரியான பதில் எனக்குத் தெரியவில்லை. நேரடி ஏஜெண்டுடன் பேச விரும்புகிறீர்களா?');
t('supportPage.talkToLiveAgent', 'நேரடி ஏஜெண்டுடன் பேசு');
t('supportPage.askSomething', 'ஏதாவது கேளுங்கள்...');
t('supportPage.emailLabel', 'மின்னஞ்சலில் தொடர்புகொள்ளுங்கள்');

// supportPage.knowledgeBase is an array - set directly
if (!ta.supportPage) ta.supportPage = {};
ta.supportPage.knowledgeBase = [
  {"keywords":["what is appnode","about appnode","appnode"],"answer":"AppNode என்பது AI-இயங்கும் மேம்பாட்டு தளம், இது இயற்கை மொழியில் விவரிப்பதன் மூலம் முழு-ஸ்டாக் வலை ஆப்களை உருவாக்க உங்களை அனுமதிக்கிறது."},
  {"keywords":["pricing","cost","price","free"],"answer":"AppNode 2 இலவச உருவாக்கங்களுடன் இலவச நிலையை வழங்குகிறது. கூடுதல் கிரெடிட்களை எங்கள் விலை நிர்ணயப் பக்கத்தில் வாங்கலாம்."},
  {"keywords":["export","download","code"],"answer":"ஆம்! உங்கள் முழுமையான திட்ட குறியீட்டை எப்போது வேண்டுமானாலும் ஏற்றுமதி செய்யலாம். திட்ட அமைப்புகளுக்குச் சென்று 'குறியீட்டை ஏற்றுமதி செய்' கிளிக் செய்யுங்கள்."},
  {"keywords":["deploy","publish","hosting"],"answer":"AppNode உள்ளமைக்கப்பட்ட ஹோஸ்டிங் மற்றும் ஒரே கிளிக் நிலைநிறுத்தத்தை வழங்குகிறது. SSL சான்றிதழ்கள் மற்றும் தனிப்பயன் டொமைன்கள் ஆதரிக்கப்படுகின்றன."},
  {"keywords":["team","collaborate","share"],"answer":"ஆம், AppNode குழு ஒத்துழைப்பை ஆதரிக்கிறது. குழு உறுப்பினர்களை அழைக்கலாம் மற்றும் திட்டங்களில் நிகழ்நேரத்தில் ஒத்துழைக்கலாம்."}
]; count++;

// ===== DOCS PAGE =====
t('docsPage.searchPlaceholder', 'ஆவணங்களில் தேடுங்கள்...');
t('docsPage.welcomeTitle', 'AppNode-க்கு வரவேற்கிறோம்');
t('docsPage.welcomeDescription', 'AppNode என்பது AI-இயங்கும் மேம்பாட்டு தளம், இது இயற்கை மொழி விளக்கங்களைப் பயன்படுத்தி முழு-ஸ்டாக் வலை ஆப்களை உருவாக்க உங்களை அனுமதிக்கிறது.');
t('docsPage.whatYouCanBuild', 'நீங்கள் என்ன உருவாக்கலாம்');
t('docsPage.howItWorks', 'இது எவ்வாறு செயல்படுகிறது');
t('docsPage.howItWorksDescription', 'உங்கள் திட்டத்தை சாதாரண மொழியில் விவரியுங்கள். எங்கள் AI புரிந்துகொண்டு முழு ஆப்ளிகேஷனை உருவாக்குகிறது.');
t('docsPage.gettingStarted', 'தொடங்குதல்');
t('docsPage.gettingStartedDescription', 'உங்கள் முதல் ஆப்பை உருவாக்கத் தயாரா? நிமிடங்களில் எவ்வாறு தொடங்குவது என்பது இங்கே.');
t('docsPage.startBuildingFree', 'இலவசமாக உருவாக்கத் தொடங்கு');
t('docsPage.viewQuickstartGuide', 'விரைவு தொடக்க வழிகாட்டியைக் காண்க');
t('docsPage.copyPage', 'பக்கத்தை நகலெடு');

// ===== BLOG PAGE =====
t('blogPage.badge', 'நுண்ணறிவுகள் & புதுப்பிப்புகள்');
t('blogPage.subtitle', 'AppNode குழுவிடமிருந்து நுண்ணறிவுகள், பயிற்சிகள் மற்றும் புதுப்பிப்புகள். தகவலறிந்திருங்கள்.');
t('blogPage.searchPlaceholder', 'வலைப்பதிவில் தேடுங்கள்...');
t('blogPage.noPostsFound', 'உங்கள் தேடலுக்குப் பொருந்தும் பதிவுகள் இல்லை.');
t('blogPage.latestPosts', 'சமீபத்திய பதிவுகள்');
t('blogPage.loadMorePosts', 'மேலும் பதிவுகளை ஏற்று');
t('blogPage.subscribeTitle', 'எங்கள் செய்திமடலுக்கு குழுசேருங்கள்');
t('blogPage.subscribeDescription', 'சமீபத்திய கட்டுரைகள், பயிற்சிகள் மற்றும் தயாரிப்பு புதுப்பிப்புகளை உங்கள் இன்பாக்ஸ்-இல் பெறுங்கள்.');
t('blogPage.emailPlaceholder', 'உங்கள் மின்னஞ்சலை உள்ளிடுங்கள்');
t('blogPage.subscribe', 'குழுசேர்');
t('blogPage.ctaTitle', 'ஏதாவது உருவாக்கத் தயாரா?');
t('blogPage.ctaDescription', 'AppNode உடன் உங்கள் யோசனைகளை யதார்த்தமாக மாற்றுங்கள். இன்றே இலவசமாக உருவாக்கத் தொடங்குங்கள்.');
t('blogPage.getStartedFree', 'இலவசமாகத் தொடங்கு');
t('blogPage.browseCourses', 'பாடங்களை உலாவுங்கள்');
t('blogPage.categories.featured', 'சிறப்பு');
t('blogPage.categories.product', 'தயாரிப்பு');
t('blogPage.categories.engineering', 'பொறியியல்');
t('blogPage.categories.community', 'சமூகம்');
t('blogPage.categories.tips', 'குறிப்புகள்');
t('blogPage.categories.news', 'செய்திகள்');
t('blogPage.posts.featured.title', 'AppNode ஏஜெண்ட் அறிமுகம்: AI உடன் 10 மடங்கு வேகமாக ஆப்களை உருவாக்குங்கள்');
t('blogPage.posts.featured.excerpt', 'எங்கள் மிகவும் மேம்பட்ட AI குறியீட்டு உதவியாளரான AppNode ஏஜெண்ட்-ஐ அறிவிப்பதில் மகிழ்ச்சி.');
t('blogPage.posts.supabase.title', 'AppNode + Supabase உடன் உற்பத்தி ஆப்களை உருவாக்குதல்');
t('blogPage.posts.supabase.excerpt', 'சக்திவாய்ந்த பின்புல அம்சங்களுக்கு உங்கள் AppNode திட்டங்களை Supabase உடன் எவ்வாறு இணைப்பது என்று கற்றுக்கொள்ளுங்கள்.');
t('blogPage.posts.smartStyles.title', 'ஸ்மார்ட் ஸ்டைல்கள்: உங்கள் ஆப்களுக்கான AI-இயங்கும் வடிவமைப்பு முறைமை');
t('blogPage.posts.smartStyles.excerpt', 'தானியங்காக சீரான பிராண்டிங் உருவாக்கும் எங்கள் புதிய அம்சமான ஸ்மார்ட் ஸ்டைல்களை அறிமுகப்படுத்துகிறோம்.');
t('blogPage.posts.security.title', 'AppNode AI-உருவாக்கப்பட்ட குறியீட்டை எவ்வாறு பாதுகாக்கிறது');
t('blogPage.posts.security.excerpt', 'நிலையான பகுப்பாய்வு மற்றும் நிகழ்நேர கண்காணிப்பை இணைக்கும் எங்கள் கலப்பு அணுகுமுறையின் ஆழமான பார்வை.');
t('blogPage.posts.prompting.title', 'சிறந்த AI-உருவாக்கப்பட்ட ஆப்களுக்கான 10 ப்ராம்ப்டிங் குறிப்புகள்');
t('blogPage.posts.prompting.excerpt', 'இந்த நடைமுறை ப்ராம்ப்டிங் நுட்பங்களுடன் வைப் குறியீட்டுக் கலையில் தேர்ச்சி பெறுங்கள்.');
t('blogPage.posts.spotlight.title', 'சமூக ஸ்பாட்லைட்: இந்த மாதம் உருவாக்கப்பட்ட ஆப்கள்');
t('blogPage.posts.spotlight.excerpt', 'எங்கள் சமூகத்தால் உருவாக்கப்பட்ட நம்பமுடியாத ஆப்ளிகேஷன்களைக் காட்டுகிறோம்.');
t('blogPage.posts.collaboration.title', 'நிகழ்நேர ஒத்துழைப்பு: இணைந்து உருவாக்குங்கள், வேகமாக அனுப்புங்கள்');
t('blogPage.posts.collaboration.excerpt', 'பல குழு உறுப்பினர்கள் இப்போது ஒரே திட்டத்தை ஒரே நேரத்தில் திருத்தலாம்.');
t('blogPage.posts.caseStudy.title', 'பூஜ்ஜியத்திலிருந்து உற்பத்திக்கு ஒரே நாளில்: ஒரு வழக்கு ஆய்வு');
t('blogPage.posts.caseStudy.excerpt', 'ஒரு தனி நிறுவனர் AppNode பயன்படுத்தி ஒரே நாளில் முழுமையான SaaS ஆப்ளிகேஷனை எவ்வாறு உருவாக்கி வெளியிட்டார்.');
t('blogPage.posts.architecture.title', 'AppNode-இன் கூறு கட்டமைப்பைப் புரிந்துகொள்ளுதல்');
t('blogPage.posts.architecture.excerpt', 'AppNode உருவாக்கப்பட்ட ஆப்ளிகேஷன்களை எவ்வாறு கட்டமைக்கிறது என்பதன் தொழில்நுட்ப ஆழமான பார்வை.');
t('blogPage.posts.mobile.title', 'AppNode-இல் மொபைல் ஆப்கள்: iOS மற்றும் Android விரைவில்');
t('blogPage.posts.mobile.excerpt', 'நேட்டிவ் மொபைல் அனுபவங்களில் பணிபுரிகிறோம், எங்கிருந்தும் உருவாக்கலாம்.');
t('blogPage.posts.enterprise.title', 'நிறுவனத்திற்கான AppNode: பாதுகாப்பு, இணக்கம் மற்றும் அளவு');
t('blogPage.posts.enterprise.excerpt', 'SSO, தணிக்கை பதிவுகள் உள்ளிட்ட நிறுவன-தர அம்சங்களை அறிவிக்கிறோம்.');
t('blogPage.posts.future.title', 'நோ-கோட்-இன் எதிர்காலம்: நாங்கள் எங்கு செல்கிறோம்');
t('blogPage.posts.future.excerpt', 'அடுத்த தலைமுறை மென்பொருள் மேம்பாட்டிற்கான எங்கள் பார்வை.');
t('blogPage.posts.performance.title', 'AppNode ஆப்களுக்கான செயல்திறன் மேம்படுத்தல் வழிகாட்டி');
t('blogPage.posts.performance.excerpt', 'வேகமான, பதிலளிக்கக்கூடிய ஆப்ளிகேஷன்களை உருவாக்குவதற்கான சிறந்த நடைமுறைகள்.');

// ===== CAREERS PAGE =====
t('careersPage.title', 'இணையுங்கள்');
t('careersPage.titleEnd', 'குழு');
t('careersPage.subtitle', 'மென்பொருள் மேம்பாட்டின் எதிர்காலத்தை உருவாக்க உதவுங்கள். திறமையான நபர்களைத் தேடுகிறோம்.');
t('careersPage.viewOpenPositions', 'காலி பணியிடங்களைக் காண்க');
t('careersPage.ourValues', 'எங்கள் மதிப்புகள்');
t('careersPage.whyJoinUs', 'ஏன் எங்களுடன் சேர வேண்டும்');
t('careersPage.benefitsAndPerks', 'பலன்கள் & சலுகைகள்');
t('careersPage.openPositions', 'காலி பணியிடங்கள்');
t('careersPage.applyNow', 'இப்போது விண்ணப்பியுங்கள்');
t('careersPage.dontSeeAFit', 'சரியான பொருத்தம் தெரியவில்லையா?');
t('careersPage.dontSeeAFitDescription', 'நாங்கள் எப்போதும் திறமையான நபர்களைத் தேடுகிறோம். உங்கள் விண்ணப்பத்தை அனுப்புங்கள்.');
t('careersPage.sendGeneralApplication', 'பொது விண்ணப்பத்தை அனுப்புங்கள்');

if (!ta.careersPage) ta.careersPage = {};
ta.careersPage.openings = [
  {"title":"மூத்த முழு ஸ்டாக் பொறியாளர்","department":"பொறியியல்","location":"தொலைநிலை","type":"முழு நேரம்","description":"சக்திவாய்ந்த வலை ஆப்ளிகேஷன்களை உருவாக்கி அளவிட எங்கள் பொறியியல் குழுவில் சேருங்கள்."},
  {"title":"AI/ML பொறியாளர்","department":"AI","location":"தொலைநிலை","type":"முழு நேரம்","description":"எங்கள் AI-இயங்கும் குறியீடு உருவாக்கம் மற்றும் இயற்கை மொழி செயலாக்க அமைப்புகளில் பணிபுரியுங்கள்."},
  {"title":"மூத்த தயாரிப்பு வடிவமைப்பாளர்","department":"வடிவமைப்பு","location":"தொலைநிலை","type":"முழு நேரம்","description":"கோடிக்கணக்கான டெவலப்பர்கள் பயன்படுத்தும் உள்ளுணர்வு, அழகான இடைமுகங்களை வடிவமையுங்கள்."},
  {"title":"DevOps பொறியாளர்","department":"உள்கட்டமைப்பு","location":"தொலைநிலை","type":"முழு நேரம்","description":"எங்கள் கிளவுட் உள்கட்டமைப்பை உருவாக்கி பராமரிக்கவும் மற்றும் CI/CD பைப்லைன்களை நிர்வகிக்கவும்."},
  {"title":"தொழில்நுட்ப எழுத்தாளர்","department":"தயாரிப்பு","location":"தொலைநிலை","type":"ஒப்பந்தம்","description":"டெவலப்பர்கள் AppNode-ஐ கற்றுக்கொள்ளவும் பயன்படுத்தவும் உதவும் ஆவணங்கள் மற்றும் பயிற்சிகளை உருவாக்குங்கள்."}
]; count++;

ta.careersPage.benefits = [
  {"icon":"💰","title":"போட்டி சம்பளம்","description":"சிறந்த சந்தை-தர இழப்பீடு தொகுப்புகள்"},
  {"icon":"🏥","title":"சுகாதார காப்பீடு","description":"உங்களுக்கும் உங்கள் குடும்பத்திற்கும் விரிவான மருத்துவ, பல் மற்றும் கண் காப்பீடு"},
  {"icon":"📈","title":"பங்கு விருப்பங்கள்","description":"பங்கு விருப்பங்கள் மூலம் எங்கள் வெற்றியில் பங்கு பெறுங்கள்"},
  {"icon":"🎓","title":"கற்றல் படி","description":"கான்பரன்ஸ்கள், பாடங்கள் மற்றும் புத்தகங்களுக்கான வருடாந்திர படி"},
  {"icon":"🏖️","title":"வரம்பற்ற விடுமுறை","description":"நீங்கள் தேவையான நேரத்தை ஓய்வெடுத்து புத்துணர்வு பெறுங்கள்"},
  {"icon":"💻","title":"உபகரண பட்ஜெட்","description":"நீங்கள் விரும்பும் கருவிகள் மற்றும் உபகரணங்களுக்கான பட்ஜெட்"}
]; count++;

ta.careersPage.companyValues = [
  {"emoji":"🚀","title":"வேகமாகச் செல்லுங்கள்","description":"நாங்கள் விரைவாக அனுப்பி வேகமாக மீண்டும் செய்கிறோம். வேகம் தரத்தின் விலையில் வராது."},
  {"emoji":"🎯","title":"பயனர் முதலில்","description":"ஒவ்வொரு முடிவும் எங்கள் பயனர்களை சிறப்பாக சேவிக்கிறதா என்பதிலிருந்து தொடங்குகிறது."},
  {"emoji":"🤝","title":"ஒருவருக்கொருவர் நம்பிக்கை","description":"வெளிப்படைத்தன்மை மற்றும் நம்பிக்கையின் மீது நாங்கள் அடிப்படையிடுகிறோம்."},
  {"emoji":"💡","title":"எப்போதும் கற்றுக்கொள்ளுங்கள்","description":"ஆர்வம் எங்கள் புதுமையை இயக்குகிறது. நாங்கள் கற்றுக்கொள்ள முதலீடு செய்கிறோம்."}
]; count++;

// ===== COMMUNITY PAGE =====
t('communityPage.exploreThe', 'ஆராயுங்கள்');
t('communityPage.subtitle', 'உத்வேகமான திட்டங்களைக் கண்டறியுங்கள், படைப்பாளர்களுடன் இணையுங்கள் மற்றும் உங்கள் படைப்புகளைப் பகிருங்கள்.');
t('communityPage.searchPlaceholder', 'திட்டங்கள், டெம்ப்ளேட்கள் மற்றும் படைப்பாளர்களைத் தேடுங்கள்...');
t('communityPage.projectsCreated', 'உருவாக்கப்பட்ட திட்டங்கள்');
t('communityPage.activeBuilders', 'செயலில் உள்ள உருவாக்குநர்கள்');
t('communityPage.monthlyVisitors', 'மாதாந்திர பார்வையாளர்கள்');
t('communityPage.loadMoreProjects', 'மேலும் திட்டங்களை ஏற்று');
t('communityPage.topContributors', 'சிறந்த பங்களிப்பாளர்கள்');
t('communityPage.viewAll', 'அனைத்தையும் காண்க');
t('communityPage.recentDiscussions', 'சமீபத்திய விவாதங்கள்');
t('communityPage.joinDiscussion', 'விவாதத்தில் சேருங்கள்');
t('communityPage.joinOurDiscord', 'எங்கள் Discord-இல் சேருங்கள்');
t('communityPage.discordDescription', '5,000+ உருவாக்குநர்களுடன் இணையுங்கள், உதவி பெறுங்கள் மற்றும் உங்கள் திட்டங்களைப் பகிருங்கள்.');
t('communityPage.joinDiscordButton', 'Discord-இல் சேருங்கள்');
t('communityPage.ctaTitle', 'உங்கள் படைப்பைப் பகிரத் தயாரா?');
t('communityPage.ctaDescription', 'அற்புதமான ஒன்றை உருவாக்கி சமூகத்திற்குக் காட்டுங்கள்.');

// ===== GALLERY PAGE =====
t('galleryPage.title', 'திட்ட கேலரி');
t('galleryPage.subtitle', 'எங்கள் சமூகத்தால் AppNode உடன் உருவாக்கப்பட்ட அற்புதமான திட்டங்களைக் கண்டறியுங்கள்.');
t('galleryPage.startWithIdea', 'ஒரு யோசனையுடன் தொடங்குங்கள்');
t('galleryPage.seeAll', 'அனைத்தையும் காண்க');
t('galleryPage.view', 'காண்க');
t('galleryPage.builtWith', 'AppNode உடன் உருவாக்கப்பட்டது');
t('galleryPage.builtWithBy', 'AppNode உடன் உருவாக்கியவர்');
t('galleryPage.comingSoon', 'விரைவில் வருகிறது');
t('galleryPage.shareTitle', 'உங்கள் படைப்பைப் பகிருங்கள்');
t('galleryPage.shareSubtitle', 'AppNode உடன் ஏதாவது அருமையாக உருவாக்கினீர்களா? கேலரிக்கு சமர்ப்பியுங்கள்.');
t('galleryPage.submitProject', 'உங்கள் திட்டத்தை சமர்ப்பியுங்கள்');
t('galleryPage.categories.aiApps', 'AI ஆப்கள்');
t('galleryPage.categories.websites', 'வலைத்தளங்கள்');
t('galleryPage.categories.businessApps', 'வணிக ஆப்கள்');
t('galleryPage.categories.personalSoftware', 'தனிப்பட்ட மென்பொருள்');
t('galleryPage.categories.games', 'விளையாட்டுகள்');
t('galleryPage.projects.ecommerceAI', 'மின்-வணிக AI');
t('galleryPage.projects.customerSupportAI', 'வாடிக்கையாளர் ஆதரவு AI');
t('galleryPage.projects.aiContentWriter', 'AI உள்ளடக்க எழுத்தாளர்');
t('galleryPage.projects.aiImageGenerator', 'AI படம் உருவாக்கி');
t('galleryPage.projects.textToSpeechAI', 'உரையிலிருந்து பேச்சு AI');
t('galleryPage.projects.dataAnalyticsAI', 'தரவு பகுப்பாய்வு AI');
t('galleryPage.projects.aiVideoCreator', 'AI வீடியோ உருவாக்கி');
t('galleryPage.projects.aiCodeAssistant', 'AI குறியீடு உதவியாளர்');
t('galleryPage.projects.travelBlog', 'பயண வலைப்பதிவு');
t('galleryPage.projects.designStudio', 'வடிவமைப்பு ஸ்டுடியோ');
t('galleryPage.projects.businessWebsite', 'வணிக வலைத்தளம்');
t('galleryPage.projects.artMagazine', 'கலை இதழ்');
t('galleryPage.projects.fashionBlog', 'ஃபேஷன் வலைப்பதிவு');
t('galleryPage.projects.productLanding', 'தயாரிப்பு லேண்டிங்');
t('galleryPage.projects.fragranceStore', 'வாசனை கடை');
t('galleryPage.projects.restaurantSite', 'உணவகத் தளம்');
t('galleryPage.projects.crmDashboard', 'CRM டாஷ்போர்டு');
t('galleryPage.projects.orderDashboard', 'ஆர்டர் டாஷ்போர்டு');
t('galleryPage.projects.projectDashboard', 'திட்ட டாஷ்போர்டு');
t('galleryPage.projects.webAnalytics', 'வலை பகுப்பாய்வு');
t('galleryPage.projects.salesAnalytics', 'விற்பனை பகுப்பாய்வு');
t('galleryPage.projects.analyticsDashboard', 'பகுப்பாய்வு டாஷ்போர்டு');
t('galleryPage.projects.performanceDashboard', 'செயல்திறன் டாஷ்போர்டு');
t('galleryPage.projects.businessAnalytics', 'வணிக பகுப்பாய்வு');
t('galleryPage.projects.wellnessMeditation', 'ஆரோக்கியம் & தியானம்');
t('galleryPage.projects.personalFinance', 'தனிநபர் நிதி');
t('galleryPage.projects.lifeOSProductivity', 'LifeOS உற்பத்தித்திறன்');
t('galleryPage.projects.digitalJournal', 'டிஜிட்டல் நாட்குறிப்பு');
t('galleryPage.projects.personalDashboard', 'தனிப்பட்ட டாஷ்போர்டு');
t('galleryPage.projects.taskDashboard', 'பணி டாஷ்போர்டு');
t('galleryPage.projects.financeDashboard', 'நிதி டாஷ்போர்டு');
t('galleryPage.projects.dailyPlanner', 'தினசரி திட்டமிடல்');
t('galleryPage.projects.cyberRunner', 'சைபர் ரன்னர்');
t('galleryPage.projects.mysticForest', 'மர்ம காடு');
t('galleryPage.projects.spaceOdyssey', 'விண்வெளி ஒடிஸி');
t('galleryPage.projects.neonCity', 'நியான் நகரம்');
t('galleryPage.projects.cellEvolution', 'செல் பரிணாமம்');
t('galleryPage.projects.detectiveDashboard', 'துப்பறிவாளர் டாஷ்போர்டு');
t('galleryPage.projects.partyGames', 'விருந்து விளையாட்டுகள்');
t('galleryPage.projects.driftRush', 'டிரிஃப்ட் ரஷ்');

// ===== SOLUTIONS PAGE =====
t('solutionsPage.titleStart', 'எவ்வாறு என்பதற்காக உருவாக்கப்பட்டது');
t('solutionsPage.titleEnd', 'வேலை செய்கிறது');
t('solutionsPage.ctaTitle', 'எந்த தீர்வு பொருத்தமானது என்று தெரியவில்லையா?');
t('solutionsPage.ctaSubtitle', 'இலவசமாக உருவாக்கத் தொடங்கி AppNode உங்கள் வணிகத்தை எவ்வாறு மாற்ற முடியும் என்பதைக் கண்டறியுங்கள்.');
t('solutionsPage.startBuildingFree', 'இலவசமாக உருவாக்கத் தொடங்கு');
t('solutionsPage.talkToSales', 'விற்பனையுடன் பேசு');
if (!ta.solutionsPage) ta.solutionsPage = {};
ta.solutionsPage.solutionCards = [
  {"title":"நிறுவனர்களுக்கு","subtitle":"வேகமாக வெளியிடுங்கள், வேகமாக மீண்டும் செய்யுங்கள்","description":"உங்கள் MVP-ஐ நாட்களில் உருவாக்கி, பயனர் கருத்துடன் விரைவாக மீண்டும் செய்யுங்கள்.","icon":"rocket","features":["நிமிடங்களில் MVP","AI-இயங்கும் உருவாக்கம்","உடனடி நிலைநிறுத்தம்"]},
  {"title":"குழுக்களுக்கு","subtitle":"வேகமாக ஒத்துழையுங்கள்,賢குச் செய்யுங்கள்","description":"நிகழ்நேர ஒத்துழைப்பு கருவிகளுடன் உங்கள் குழுவை மேம்படுத்துங்கள்.","icon":"users","features":["குழு பணியிடங்கள்","நிகழ்நேர திருத்தம்","பதிப்பு கட்டுப்பாடு"]},
  {"title":"நிறுவனத்திற்கு","subtitle":"அளவிடுங்கள், பாதுகாப்பு மற்றும் ஆதரவு","description":"நிறுவன-தர பாதுகாப்பு மற்றும் அர்ப்பணிக்கப்பட்ட ஆதரவு.","icon":"building","features":["SSO & SAML","தணிக்கை பதிவுகள்","அர்ப்பணிக்கப்பட்ட ஆதரவு"]}
]; count++;

t('solutionsWeb3.badge', 'Web3 தீர்வுகள்');

// ===== USE CASES BUSINESS APPS =====
t('useCasesBusinessApps.badge', 'பயன்பாட்டு வழக்கு');
t('useCasesBusinessApps.titleStart', 'வணிக ஆப்களை உருவாக்குங்கள்');
t('useCasesBusinessApps.titleHighlight', '10 மடங்கு வேகமாக');
t('useCasesBusinessApps.subtitle', 'டாஷ்போர்டுகள் முதல் உள் கருவிகள் வரை, உங்கள் நிறுவனத்திற்குத் தேவையான வணிக ஆப்ளிகேஷன்களை உருவாக்குங்கள்.');
t('useCasesBusinessApps.seeExamples', 'எடுத்துக்காட்டுகளைப் பாருங்கள்');
t('useCasesBusinessApps.mockup.salesDashboard', 'விற்பனை டாஷ்போர்டு');
t('useCasesBusinessApps.mockup.revenue', 'வருவாய்');
t('useCasesBusinessApps.mockup.customers', 'வாடிக்கையாளர்கள்');
t('useCasesBusinessApps.mockup.retention', 'தக்கவைப்பு');
t('useCasesBusinessApps.whatYouCanBuild', 'நீங்கள் என்ன உருவாக்கலாம்');
t('useCasesBusinessApps.useCases.dashboards.description', 'KPI டாஷ்போர்டுகள், பகுப்பாய்வு பார்வைகள் மற்றும் அறிக்கை கருவிகள்');
t('useCasesBusinessApps.useCases.workflowAutomation.title', 'பணிப்பாய்வு தானியங்கம்');
t('useCasesBusinessApps.useCases.workflowAutomation.description', 'மீண்டும் மீண்டும் செய்யும் பணிகள் மற்றும் ஒப்புதல் செயல்முறைகளை தானியங்காக செய்யுங்கள்');
t('useCasesBusinessApps.useCases.adminPanels.title', 'நிர்வாக பேனல்கள்');
t('useCasesBusinessApps.useCases.adminPanels.description', 'உங்கள் தரவு மற்றும் அமைப்புகளுக்கான தனிப்பயன் நிர்வாக இடைமுகங்கள்');
t('useCasesBusinessApps.useCases.crmTools.title', 'CRM கருவிகள்');
t('useCasesBusinessApps.useCases.crmTools.description', 'வாடிக்கையாளர் மேலாண்மை மற்றும் விற்பனை கண்காணிப்பு அமைப்புகள்');
t('useCasesBusinessApps.useCases.inventorySystems.title', 'சரக்கு அமைப்புகள்');
t('useCasesBusinessApps.useCases.inventorySystems.description', 'பொருட்கள், ஆர்டர்கள் மற்றும் விநியோக சங்கிலி தரவைக் கண்காணியுங்கள்');
t('useCasesBusinessApps.useCases.formsSurveys.title', 'படிவங்கள் & கருத்துக்கணிப்புகள்');
t('useCasesBusinessApps.useCases.formsSurveys.description', 'தரவு சேகரிப்பு கருவிகள் மற்றும் கருத்து அமைப்புகள்');
t('useCasesBusinessApps.ctaTitle', 'இன்றே உங்கள் வணிக ஆப்பை உருவாக்குங்கள்');
t('useCasesBusinessApps.ctaSubtitle', 'பொறியியல் குழு தேவையில்லை. நிமிடங்களில் உருவாக்கத் தொடங்குங்கள்.');

// ===== USE CASES MOBILE APPS =====
t('useCasesMobileApps.badge', 'பயன்பாட்டு வழக்கு');
t('useCasesMobileApps.titleStart', 'மொபைல் ஆப்களை உருவாக்குங்கள்');
t('useCasesMobileApps.titleHighlight', 'குறியீடு இல்லாமல்');
t('useCasesMobileApps.subtitle', 'iOS மற்றும் Android-இல் செயல்படும் நேட்டிவ்-தர மொபைல் அனுபவங்களை உருவாக்குங்கள்.');
t('useCasesMobileApps.seeExamples', 'எடுத்துக்காட்டுகளைப் பாருங்கள்');
t('useCasesMobileApps.featuresTitle', 'மொபைல் ஆப் அம்சங்கள்');
t('useCasesMobileApps.features.nativePerformance.title', 'நேட்டிவ் செயல்திறன்');
t('useCasesMobileApps.features.nativePerformance.description', 'எந்த சாதனத்திலும் வேகமாகவும் பதிலளிக்கக்கூடியதாகவும் உணரும் ஆப்கள்');
t('useCasesMobileApps.features.pushNotifications.title', 'புஷ் அறிவிப்புகள்');
t('useCasesMobileApps.features.pushNotifications.description', 'சரியான நேரத்தில் புஷ் அறிவிப்புகளுடன் பயனர்களை ஈடுபடுத்துங்கள்');
t('useCasesMobileApps.features.locationServices.title', 'இருப்பிட சேவைகள்');
t('useCasesMobileApps.features.locationServices.description', 'GPS உடன் இருப்பிட-விழிப்புணர்வு அம்சங்களை உருவாக்குங்கள்');
t('useCasesMobileApps.features.cameraMedia.title', 'கேமரா & மீடியா');
t('useCasesMobileApps.features.cameraMedia.description', 'கேமரா, புகைப்படங்கள் மற்றும் மீடியா நூலகங்களை அணுகுங்கள்');
t('useCasesMobileApps.features.offlineSupport.title', 'ஆஃப்லைன் ஆதரவு');
t('useCasesMobileApps.features.offlineSupport.description', 'இணையம் இல்லாமலும் செயல்படும் ஆப்கள்');
t('useCasesMobileApps.features.crossPlatform.title', 'கிராஸ்-பிளாட்ஃபார்ம்');
t('useCasesMobileApps.features.crossPlatform.description', 'iOS மற்றும் Android-க்கு ஒரே குறியீட்டுத் தளம்');
t('useCasesMobileApps.ctaTitle', 'இன்றே உங்கள் மொபைல் ஆப்பை உருவாக்குங்கள்');
t('useCasesMobileApps.ctaSubtitle', 'யோசனையிலிருந்து App Store-க்கு பதிவு நேரத்தில்.');

// ===== USE CASES RAPID PROTOTYPING =====
t('useCasesRapidPrototyping.badge', 'பயன்பாட்டு வழக்கு');
t('useCasesRapidPrototyping.titleStart', 'யோசனையிலிருந்து முன்மாதிரிக்கு');
t('useCasesRapidPrototyping.titleHighlight', 'நிமிடங்களில்');
t('useCasesRapidPrototyping.subtitle', 'யோசனைகளை வேகமாகச் சரிபார்க்கவும். உண்மையான தயாரிப்புகள் போல் தெரிந்து செயல்படும் வேலை செய்யும் முன்மாதிரிகளை உருவாக்குங்கள்.');
t('useCasesRapidPrototyping.startPrototyping', 'முன்மாதிரி செய்யத் தொடங்கு');
t('useCasesRapidPrototyping.seeExamples', 'எடுத்துக்காட்டுகளைப் பாருங்கள்');
t('useCasesRapidPrototyping.comparisonTitle', 'பாரம்பரியம் vs AppNode');
t('useCasesRapidPrototyping.totalTime', 'மொத்த நேரம்');
t('useCasesRapidPrototyping.traditional.title', 'பாரம்பரிய முன்மாதிரி');
t('useCasesRapidPrototyping.traditional.totalTime', '6-10 வாரங்கள்');
if (!ta.useCasesRapidPrototyping) ta.useCasesRapidPrototyping = {};
if (!ta.useCasesRapidPrototyping.traditional) ta.useCasesRapidPrototyping.traditional = {};
ta.useCasesRapidPrototyping.traditional.steps = [
  {"step":"வயர்ஃப்ரேம்கள்","time":"2-3 நாட்கள்"},
  {"step":"வடிவமைப்பு மாக்அப்கள்","time":"1-2 வாரங்கள்"},
  {"step":"முன்பக்க மேம்பாடு","time":"2-4 வாரங்கள்"},
  {"step":"பின்புல மேம்பாடு","time":"2-4 வாரங்கள்"},
  {"step":"சோதனை & QA","time":"1-2 வாரங்கள்"}
]; count++;

t('useCasesRapidPrototyping.appnode.title', 'AppNode முன்மாதிரி');
t('useCasesRapidPrototyping.appnode.totalTime', '1-2 மணிநேரங்கள்');
if (!ta.useCasesRapidPrototyping.appnode) ta.useCasesRapidPrototyping.appnode = {};
ta.useCasesRapidPrototyping.appnode.steps = [
  {"step":"உங்கள் யோசனையை விவரியுங்கள்","time":"5 நிமிடங்கள்"},
  {"step":"AI உருவாக்கம்","time":"2-5 நிமிடங்கள்"},
  {"step":"மீண்டும் செய்யுங்கள்","time":"30-60 நிமிடங்கள்"},
  {"step":"நிலைநிறுத்துங்கள்","time":"1 நிமிடம்"}
]; count++;

// ===== REMAINING SMALL SECTIONS =====
// testimonials remaining
t('testimonials.companies.c3', 'ஃப்ரீலான்ஸ்');
t('testimonials.companies.c4', 'இன்னோடெக்');

// productIntegrations remaining
t('productIntegrations.cta.badge', 'இன்றே தொடங்குங்கள்');

// productMobile remaining  
t('productMobile.features.title', 'முழு சக்தி, எங்கிருந்தும்');
t('productMobile.cta.badge', 'எப்போதும் எங்கிருந்தும்');
t('productMobile.featuresSubtitle', 'உங்கள் மொபைல் சாதனத்தில் AppNode-இன் முழு சக்தியை அனுபவியுங்கள்.');

// productSecurity remaining
t('productSecurity.title', 'பாதுகாப்பு');
t('productSecurity.features.title', 'பாதுகாப்பு அம்சங்கள்');
t('productSecurity.cta.badge', 'நிறுவன-தயார்');
t('productSecurity.features.overview', 'பாதுகாப்பு மேலோட்டம்');

// signupPage remaining
t('signupPage.feature1', 'AI-இயங்கும் ஆப் உருவாக்கம்');
t('signupPage.feature2', 'வரம்பற்ற திட்டங்கள்');
t('signupPage.feature3', 'ஒரே கிளிக் நிலைநிறுத்தம்');
t('signupPage.feature4', '24/7 சமூக ஆதரவு');
t('signupPage.feature5', 'இலவச SSL சான்றிதழ்கள்');
t('signupPage.feature6', 'தனிப்பயன் டொமைன்கள்');

// dashboardPage remaining
t('dashboardPage.stats', 'புள்ளிவிவரங்கள்');
t('dashboardPage.settings', 'அமைப்புகள்');
t('dashboardPage.help', 'உதவி');
t('dashboardPage.logout', 'வெளியேறு');

// aboutPage remaining
t('aboutPage.investors.title', 'எங்கள் முதலீட்டாளர்கள்');
t('aboutPage.investors.subtitle', 'முன்னணி முதலீட்டாளர்களால் ஆதரிக்கப்படுகிறது');
t('aboutPage.contact.title', 'எங்களைத் தொடர்புகொள்ளுங்கள்');
t('aboutPage.contact.email', 'மின்னஞ்சல்');
t('aboutPage.contact.address', 'முகவரி');

// enterprisePage remaining
t('enterprisePage.features.customBranding.title', 'தனிப்பயன் பிராண்டிங்');
t('enterprisePage.features.customBranding.description', 'உங்கள் நிறுவனத்தின் பிராண்டுடன் பொருந்த AppNode-ஐ தனிப்பயனாக்குங்கள்.');
t('enterprisePage.features.priorityBuilds.title', 'முன்னுரிமை உருவாக்கங்கள்');
t('enterprisePage.features.priorityBuilds.description', 'அர்ப்பணிக்கப்பட்ட வளங்களுடன் வேகமான AI உருவாக்க நேரங்கள்.');
t('enterprisePage.form.submit', 'சமர்ப்பி');
t('enterprisePage.testimonials.testimonial2.role', 'தலைமை தொழில்நுட்ப அதிகாரி');

fs.writeFileSync(taPath, JSON.stringify(ta, null, 2), 'utf8');
console.log('Phase C complete. Translations applied:', count);
