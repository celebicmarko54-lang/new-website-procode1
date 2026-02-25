const fs = require('fs');
const path = require('path');

const sw = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/translations/sw.json'), 'utf8'));

function setByPath(obj, pathStr, value) {
  const keys = pathStr.split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) current[keys[i]] = {};
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
}

const t = {};

// === LEARN PAGE ===
t["learnPage.badge"] = "Jukwaa la Bure la Kujifunza";
t["learnPage.titleStart"] = "Jifunze Kujenga na";
t["learnPage.titleHighlight"] = "AppNode";
t["learnPage.subtitle"] = "Kozi za bure, mafunzo, na miradi ya vitendo kukusaidia kubobea maendeleo ya programu yanayotumia AI. Kutoka mwanafunzi hadi mtaalamu.";
t["learnPage.startLearningFree"] = "Anza Kujifunza Bure";
t["learnPage.browseCourses"] = "Vinjari Kozi";
t["learnPage.stats.freeCourses"] = "Kozi za Bure";
t["learnPage.stats.students"] = "Wanafunzi";
t["learnPage.stats.communitySupport"] = "Msaada wa Jumuiya";
t["learnPage.chooseLearningPath"] = "Chagua Njia Yako ya Kujifunza";
t["learnPage.chooseLearningPathDesc"] = "Kozi zilizochaguliwa zilizoundwa kwa malengo na kiwango chako maalum cha ujuzi.";
t["learnPage.popularCourses"] = "Kozi Maarufu";
t["learnPage.popularCoursesDesc"] = "Anza na kozi zetu maarufu zaidi, zilizochaguliwa na jumuiya yetu.";
t["learnPage.startCourse"] = "Anza Kozi";
t["learnPage.viewAllCourses"] = "Tazama Kozi Zote";
t["learnPage.levels.beginner"] = "Mwanafunzi";
t["learnPage.levels.intermediate"] = "Kati";
t["learnPage.levels.advanced"] = "Mtaalamu";
t["learnPage.lessons"] = "masomo";
t["learnPage.min"] = "dak";
t["learnPage.courses.gettingStarted.title"] = "Kuanza na AppNode";
t["learnPage.courses.gettingStarted.description"] = "Jifunze misingi ya kuunda programu na AI. Kamili kwa wanaoanza kabisa.";
t["learnPage.courses.buildingDashboard.title"] = "Kujenga Dashibodi Yako ya Kwanza";
t["learnPage.courses.buildingDashboard.description"] = "Unda dashibodi kamili ya uchambuzi kutoka mwanzo na data ya wakati halisi.";
t["learnPage.courses.advancedPrompting.title"] = "Mbinu za Hali ya Juu za Maagizo";
t["learnPage.courses.advancedPrompting.description"] = "Boresha sanaa ya kuandika maagizo mazuri yanayozalisha hasa unachohitaji.";
t["learnPage.courses.ecommerce.title"] = "Darasa Kuu la Duka la Mtandaoni";
t["learnPage.courses.ecommerce.description"] = "Jenga duka kamili la mtandaoni lenye malipo, hesabu ya bidhaa, na maagizo.";
t["learnPage.courses.customComponents.title"] = "Vipengele Maalum na Muundo";
t["learnPage.courses.customComponents.description"] = "Unda vipengele vinavyoweza kutumika tena na mandhari maalum yanayolingana na chapa yako.";
t["learnPage.courses.deploying.title"] = "Kusambaza kwa Uzalishaji";
t["learnPage.courses.deploying.description"] = "Zindua programu yako kwa ulimwengu na vikoa maalum na vyeti vya SSL.";
t["learnPage.courses.mobileFirst.title"] = "Kujenga Programu za Simu Kwanza";
t["learnPage.courses.mobileFirst.description"] = "Buni programu zinazojibika zinazofanya kazi kwa uzuri kwenye kifaa chochote.";
t["learnPage.courses.apiIntegration.title"] = "Misingi ya Ujumuishaji wa API";
t["learnPage.courses.apiIntegration.description"] = "Unganisha programu yako na huduma za nje, hifadhidata, na API za watu wengine.";
t["learnPage.courses.authSecurity.title"] = "Uthibitishaji na Usalama";
t["learnPage.courses.authSecurity.description"] = "Tekeleza uthibitishaji salama wa mtumiaji na ulinde programu yako.";
t["learnPage.modal.overview"] = "Muhtasari";
t["learnPage.modal.howToDoIt"] = "Jinsi ya kufanya";
t["learnPage.modal.proTips"] = "Vidokezo vya Wataalamu";
t["learnPage.modal.gotIt"] = "Nimeelewa!";
t["learnPage.tutorials.gettingStarted.overview"] = "Anza na AppNode kwa kujifunza misingi ya maendeleo ya programu yanayotumia AI.";
t["learnPage.tutorials.gettingStarted.steps.0"] = "Jiandikishe kwa akaunti ya bure ya AppNode kwenye appnode.ai";
t["learnPage.tutorials.gettingStarted.steps.1"] = "Nenda kwenye dashibodi na ubofye 'Mradi Mpya'";
t["learnPage.tutorials.gettingStarted.steps.2"] = "Elezea wazo lako la programu kwenye miingiliano ya mazungumzo";
t["learnPage.tutorials.gettingStarted.steps.3"] = "Kagua msimbo uliozalishwa na ufanye marekebisho";
t["learnPage.tutorials.gettingStarted.steps.4"] = "Sambaza programu yako kwa kubofya moja";
t["learnPage.tutorials.gettingStarted.tips.0"] = "Kuwa maalum unapoelezea mahitaji ya programu yako";
t["learnPage.tutorials.gettingStarted.tips.1"] = "Anza na miradi rahisi kujifunza mtiririko wa kazi";
t["learnPage.tutorials.gettingStarted.tips.2"] = "Tumia kipengele cha hakiki kupima mabadiliko papo hapo";
t["learnPage.tutorials.buildingDashboard.overview"] = "Jifunze kujenga dashibodi za kitaalamu za uchambuzi na chati, vipimo, na data ya wakati halisi.";
t["learnPage.tutorials.buildingDashboard.steps.0"] = "Anza mradi mpya na ueleze mahitaji ya dashibodi yako";
t["learnPage.tutorials.buildingDashboard.steps.1"] = "Ongeza vipengele vya chati (chati ya baa, mstari, mkeki)";
t["learnPage.tutorials.buildingDashboard.steps.2"] = "Unganisha na chanzo chako cha data au tumia data ya mfano";
t["learnPage.tutorials.buildingDashboard.steps.3"] = "Binafsisha rangi na mpangilio kulingana na chapa yako";
t["learnPage.tutorials.buildingDashboard.steps.4"] = "Ongeza vichujio vinavyoingiliana na vichaguzi vya tarehe";
t["learnPage.tutorials.buildingDashboard.steps.5"] = "Pima kujibika kwenye ukubwa tofauti wa skrini";
t["learnPage.tutorials.buildingDashboard.steps.6"] = "Sambaza na ushiriki na timu yako";
t["learnPage.tutorials.buildingDashboard.tips.0"] = "Weka vipimo vinavyohusiana pamoja";
t["learnPage.tutorials.buildingDashboard.tips.1"] = "Tumia uwekaji thabiti wa rangi kwa kategoria za data";
t["learnPage.tutorials.buildingDashboard.tips.2"] = "Weka vipimo muhimu zaidi juu";
t["learnPage.tutorials.advancedPrompting.overview"] = "Boresha uhandisi wa maagizo kupata matokeo bora kutoka kwa AI ya AppNode.";
t["learnPage.tutorials.advancedPrompting.steps.0"] = "Elewa muundo wa agizo zuri";
t["learnPage.tutorials.advancedPrompting.steps.1"] = "Tumia mahitaji maalum ya kiufundi katika maagizo yako";
t["learnPage.tutorials.advancedPrompting.steps.2"] = "Jifunze kurudia na kuboresha kulingana na matokeo";
t["learnPage.tutorials.advancedPrompting.steps.3"] = "Changanya vipengele vingi katika maagizo moja";
t["learnPage.tutorials.advancedPrompting.steps.4"] = "Tumia mifano ya kumbukumbu kuongoza AI";
t["learnPage.tutorials.advancedPrompting.tips.0"] = "Daima eleza teknolojia unayoitaka";
t["learnPage.tutorials.advancedPrompting.tips.1"] = "Jumuisha mahitaji ya ufikaji";
t["learnPage.tutorials.advancedPrompting.tips.2"] = "Taja mahitaji ya muundo unaojibika mapema";
t["learnPage.tutorials.ecommerce.overview"] = "Unda suluhisho kamili la biashara mtandaoni na katalogi ya bidhaa, kikapu, na malipo.";
t["learnPage.tutorials.ecommerce.steps.0"] = "Sanidi katalogi ya bidhaa yenye kategoria";
t["learnPage.tutorials.ecommerce.steps.1"] = "Jenga utendaji wa kikapu cha ununuzi";
t["learnPage.tutorials.ecommerce.steps.2"] = "Jumuisha Stripe kwa malipo";
t["learnPage.tutorials.ecommerce.steps.3"] = "Unda mfumo wa usimamizi wa maagizo";
t["learnPage.tutorials.ecommerce.steps.4"] = "Ongeza ufuatiliaji wa hesabu ya bidhaa";
t["learnPage.tutorials.ecommerce.steps.5"] = "Sanidi arifa za barua pepe";
t["learnPage.tutorials.ecommerce.steps.6"] = "Tekeleza akaunti za watumiaji na historia ya maagizo";
t["learnPage.tutorials.ecommerce.tips.0"] = "Anza na katalogi rahisi ya bidhaa kwanza";
t["learnPage.tutorials.ecommerce.tips.1"] = "Pima mtiririko wa malipo kwa undani";
t["learnPage.tutorials.ecommerce.tips.2"] = "Tumia stakabadhi za malipo ya majaribio wakati wa maendeleo";
t["learnPage.tutorials.customComponents.overview"] = "Jifunze kuunda vipengele thabiti, vinavyoweza kutumika tena na muundo maalum.";
t["learnPage.tutorials.customComponents.steps.0"] = "Fafanua rangi za chapa yako na maandishi";
t["learnPage.tutorials.customComponents.steps.1"] = "Unda muundo wa maktaba ya vipengele";
t["learnPage.tutorials.customComponents.steps.2"] = "Jenga vipengele vinavyoweza kutumika tena vya kitufe, ingizo, na kadi";
t["learnPage.tutorials.customComponents.steps.3"] = "Tekeleza msaada wa hali ya giza";
t["learnPage.tutorials.customComponents.steps.4"] = "Ongeza uhuishaji na mabadiliko";
t["learnPage.tutorials.customComponents.steps.5"] = "Andika nyaraka za vipengele vyako";
t["learnPage.tutorials.customComponents.tips.0"] = "Tumia vigezo vya CSS kwa mandhari";
t["learnPage.tutorials.customComponents.tips.1"] = "Weka vipengele vidogo na vilivyolenga";
t["learnPage.tutorials.customComponents.tips.2"] = "Pima vipengele kwa kujitegemea";
t["learnPage.tutorials.deploying.overview"] = "Jifunze kusambaza programu zako kwa uzalishaji kwa ujasiri.";
t["learnPage.tutorials.deploying.steps.0"] = "Tayarisha programu yako kwa uzalishaji";
t["learnPage.tutorials.deploying.steps.1"] = "Chagua mtoa huduma wa uhifadhi";
t["learnPage.tutorials.deploying.steps.2"] = "Sanidi vigezo vya mazingira";
t["learnPage.tutorials.deploying.steps.3"] = "Sanidi vikoa maalum";
t["learnPage.tutorials.deploying.steps.4"] = "Wezesha vyeti vya SSL";
t["learnPage.tutorials.deploying.tips.0"] = "Pima daima kwenye mazingira ya majaribio kwanza";
t["learnPage.tutorials.deploying.tips.1"] = "Sanidi ufuatiliaji na tahadhari";
t["learnPage.tutorials.deploying.tips.2"] = "Weka utegemezi wako kusasishwa";
t["learnPage.tutorials.mobileFirst.overview"] = "Unda programu zinazojibika, za simu kwanza zinazofanya kazi kwenye vifaa vyote.";
t["learnPage.tutorials.mobileFirst.steps.0"] = "Elewa kanuni za muundo wa simu kwanza";
t["learnPage.tutorials.mobileFirst.steps.1"] = "Tumia sehemu za kuvunja kwa ufanisi";
t["learnPage.tutorials.mobileFirst.steps.2"] = "Boresha miingiliano ya kugusa";
t["learnPage.tutorials.mobileFirst.steps.3"] = "Shughulikia muelekeo tofauti wa skrini";
t["learnPage.tutorials.mobileFirst.steps.4"] = "Pima kwenye vifaa halisi";
t["learnPage.tutorials.mobileFirst.steps.5"] = "Boresha utendaji kwa mitandao ya simu";
t["learnPage.tutorials.mobileFirst.tips.0"] = "Buni kwa skrini ndogo zaidi kwanza";
t["learnPage.tutorials.mobileFirst.tips.1"] = "Tumia vitenzi vya jamaa (rem, %) badala ya pikseli";
t["learnPage.tutorials.mobileFirst.tips.2"] = "Pima na hali za mtandao uliopunguzwa";
t["learnPage.tutorials.apiIntegration.overview"] = "Jifunze kuunganisha API na huduma za nje kwenye programu zako.";
t["learnPage.tutorials.apiIntegration.steps.0"] = "Elewa misingi ya API ya REST";
t["learnPage.tutorials.apiIntegration.steps.1"] = "Shughulikia uthibitishaji wa API (funguo za API, OAuth)";
t["learnPage.tutorials.apiIntegration.steps.2"] = "Fanya ombi za GET, POST, PUT, DELETE";
t["learnPage.tutorials.apiIntegration.steps.3"] = "Shughulikia hitilafu na hali za ukingo";
t["learnPage.tutorials.apiIntegration.steps.4"] = "Tekeleza vikomo vya kiwango";
t["learnPage.tutorials.apiIntegration.steps.5"] = "Hifadhi majibu ya API kwa utendaji";
t["learnPage.tutorials.apiIntegration.tips.0"] = "Daima shughulikia hitilafu za API kwa ustadi";
t["learnPage.tutorials.apiIntegration.tips.1"] = "Tumia vigezo vya mazingira kwa funguo za API";
t["learnPage.tutorials.apiIntegration.tips.2"] = "Tekeleza mantiki ya kujaribu tena kwa ombi zilizoshindwa";
t["learnPage.tutorials.authSecurity.overview"] = "Tekeleza uthibitishaji salama na ulinde programu yako kutoka kwa vitisho.";
t["learnPage.tutorials.authSecurity.steps.0"] = "Sanidi usajili wa mtumiaji na kuingia";
t["learnPage.tutorials.authSecurity.steps.1"] = "Tekeleza uhifadhi wa nenosiri";
t["learnPage.tutorials.authSecurity.steps.2"] = "Ongeza uthibitishaji wa hatua mbili";
t["learnPage.tutorials.authSecurity.steps.3"] = "Shughulikia usimamizi wa vikao";
t["learnPage.tutorials.authSecurity.steps.4"] = "Linda dhidi ya mashambulizi ya kawaida (XSS, CSRF)";
t["learnPage.tutorials.authSecurity.steps.5"] = "Sanidi udhibiti wa ufikiaji kulingana na jukumu";
t["learnPage.tutorials.authSecurity.tips.0"] = "Usihifadhi nenosiri kwa maandishi wazi";
t["learnPage.tutorials.authSecurity.tips.1"] = "Tumia HTTPS kila mahali";
t["learnPage.tutorials.authSecurity.tips.2"] = "Kagua mazoea yako ya usalama mara kwa mara";
t["learnPage.cta.title"] = "Anza Safari Yako ya Kujifunza Leo";
t["learnPage.cta.subtitle"] = "Jiunge na wanafunzi zaidi ya 100,000 ambao wamebadilisha ujuzi wao na AppNode. Kozi zote ni za bure kabisa.";
t["learnPage.cta.createFreeAccount"] = "Unda Akaunti ya Bure";
t["learnPage.cta.browseGuides"] = "Vinjari Miongozo";

// === ABOUT PAGE ===
t["aboutPage.badge"] = "Kuhusu Sisi";
t["aboutPage.title"] = "Kuwawezesha wabunifu kujenga chochote";
t["aboutPage.subtitle"] = "AppNode iko kwenye dhamira ya kudemokrasia maendeleo ya programu. Tunaamini kila mtu anapaswa kuwa na uwezo wa kutekeleza mawazo yao.";
t["aboutPage.stats.developers"] = "Waendelezaji";
t["aboutPage.stats.appsBuilt"] = "Programu Zilizojengwa";
t["aboutPage.stats.uptime"] = "Upatikanaji";
t["aboutPage.ourStory.title"] = "Hadithi Yetu";
t["aboutPage.ourStory.p1"] = "AppNode ilianza na uchunguzi rahisi: kujenga programu ni ngumu sana. Mawazo mengi mazuri hayaoni mwanga wa siku kwa sababu ugumu wa kiufundi.";
t["aboutPage.ourStory.p2"] = "Tulianzisha AppNode kubadilisha hilo. Kwa kutumia maendeleo ya hivi karibuni ya AI na muundo wa angavu, tumeunda jukwaa ambapo kila mtu anaweza kujenga.";
t["aboutPage.ourStory.p3"] = "Leo, AppNode inapendwa na waendelezaji duniani kote. Kutoka miradi ya kibinafsi hadi bidhaa za kiwango cha biashara, tunasaidia watu kutekeleza maono yao.";
t["aboutPage.ourStory.p4"] = "Tunaanza tu. Maono yetu ni ulimwengu ambapo uundaji wa teknolojia unafikika kama kuandika barua pepe. Jiunge nasi katika safari hii.";
t["aboutPage.ourStory.quote"] = "\"Njia bora ya kutabiri mustakabali ni kuuunda.\"";
t["aboutPage.ourStory.quoteAttribution"] = "— Kanuni yetu ya kuasisi";
t["aboutPage.values.title"] = "Maadili Yetu";
t["aboutPage.values.subtitle"] = "Kanuni hizi zinaongoza kila kitu tunachofanya katika AppNode.";
t["aboutPage.values.innovationFirst.title"] = "Uvumbuzi Kwanza";
t["aboutPage.values.innovationFirst.description"] = "Tunavuka mipaka na kukumbatia teknolojia ya kisasa kutatua matatizo halisi.";
t["aboutPage.values.developerFocused.title"] = "Mlengo kwa Mtengenezaji";
t["aboutPage.values.developerFocused.description"] = "Kila uamuzi tunaofanya unaanza na watumiaji wetu. Mafanikio yao ni mafanikio yetu.";
t["aboutPage.values.simplicityMatters.title"] = "Urahisi ni Muhimu";
t["aboutPage.values.simplicityMatters.description"] = "Tunachukulia usalama kwa uzito. Data yako na msimbo wako vinalindwa na mazoea bora ya tasnia.";
t["aboutPage.values.quality.title"] = "Obsesheni ya Ubora";
t["aboutPage.values.quality.description"] = "Tunajenga zana zinazowawezeshwa wabunifu kila mahali, bila kujali asili.";
t["aboutPage.values.transparency.title"] = "Uwazi";
t["aboutPage.values.transparency.description"] = "Tunaamini katika mawasiliano wazi na jumuiya yetu na kuwa waaminifu kuhusu ramani yetu ya njia.";
t["aboutPage.values.communityDriven.title"] = "Inayoongozwa na Jumuiya";
t["aboutPage.values.communityDriven.description"] = "Jumuiya yetu inaumba bidhaa yetu. Tunasikiliza, tunajifunza, na tunajenga pamoja.";
t["aboutPage.journey.title"] = "Safari Yetu";
t["aboutPage.journey.subtitle"] = "Kutoka wazo hadi jukwaa la kimataifa.";
t["aboutPage.team.title"] = "Kutana na Timu Yetu";
t["aboutPage.team.subtitle"] = "Inaendeshwa na timu yenye talanta inayopenda dhamira ya AppNode.";
t["aboutPage.team.joinTeam"] = "Jiunge na Timu";
t["aboutPage.team.viewOpenings"] = "Tazama Nafasi Wazi";
t["aboutPage.cta.title"] = "Jenga nasi?";
t["aboutPage.cta.subtitle"] = "Jiunge na mamia ya maelfu ya wabunifu wanaojenga programu za kushangaza na AppNode.";
t["aboutPage.cta.getStartedFree"] = "Anza Bure";
t["aboutPage.cta.contactUs"] = "Wasiliana Nasi";

// Apply
for (const [pathStr, value] of Object.entries(t)) {
  setByPath(sw, pathStr, value);
}

fs.writeFileSync(
  path.join(__dirname, 'src/translations/sw.json'),
  JSON.stringify(sw, null, 2) + '\n'
);

console.log('Phase 5 done! Applied', Object.keys(t).length, 'translations');
