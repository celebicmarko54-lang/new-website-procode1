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

// === REMAINING SMALL ITEMS ===
// Names/brands stay as-is (they're already correct)
// testimonials authors stay as-is

// === SUPPORT PAGE ===
t["supportPage.heroTitle"] = "Tunawezaje kukusaidia?";
t["supportPage.heroSubtitle"] = "Tafuta katika msingi wetu wa maarifa au vinjari kategoria hapa chini";
t["supportPage.searchPlaceholder"] = "Tafuta msaada...";
t["supportPage.browseByCategory"] = "Vinjari kwa Kategoria";
t["supportPage.popularArticles"] = "Makala Maarufu";
t["supportPage.needMoreHelp"] = "Unahitaji msaada zaidi?";
t["supportPage.needMoreHelpDescription"] = "Huwezi kupata unachotafuta? Timu yetu ya msaada iko hapa kukusaidia.";
t["supportPage.chatWithSupport"] = "Zungumza na Msaada";
t["supportPage.emailSupport"] = "Msaada wa Barua Pepe";
t["supportPage.faq"] = "Maswali Yanayoulizwa Mara kwa Mara";
t["supportPage.stillHaveQuestions"] = "Bado Una Maswali?";
t["supportPage.stillHaveQuestionsDescription"] = "Timu yetu iko tayari kukusaidia kufanikiwa. Wasiliana wakati wowote.";
t["supportPage.viewGallery"] = "Tazama Matunzio";
t["supportPage.joinCommunity"] = "Jiunge na Jumuiya";
t["supportPage.browseGuides"] = "Vinjari Miongozo";
t["supportPage.articles"] = "makala";
t["supportPage.quickActions.gettingStarted"] = "Kuanza";
t["supportPage.quickActions.pricing"] = "Bei";
t["supportPage.quickActions.exportCode"] = "Hamisha Msimbo";
t["supportPage.quickActions.liveAgent"] = "Wakala wa Moja kwa Moja";
t["supportPage.categories.gettingStarted.name"] = "Kuanza";
t["supportPage.categories.gettingStarted.description"] = "Mpya kwa AppNode? Anza hapa";
t["supportPage.categories.accountBilling.name"] = "Akaunti na Malipo";
t["supportPage.categories.accountBilling.description"] = "Simamia usajili na malipo yako";
t["supportPage.categories.buildingApps.name"] = "Kujenga Programu";
t["supportPage.categories.buildingApps.description"] = "Jifunze jinsi ya kuunda programu za kushangaza";
t["supportPage.categories.customization.name"] = "Ubinafsishaji";
t["supportPage.categories.customization.description"] = "Weka mtindo na ubinafsishe miradi yako";
t["supportPage.categories.integrations.name"] = "Ujumuishaji";
t["supportPage.categories.integrations.description"] = "Unganisha na huduma za watu wengine";
t["supportPage.categories.troubleshooting.name"] = "Utatuzi wa Matatizo";
t["supportPage.categories.troubleshooting.description"] = "Rekebisha matatizo na hitilafu za kawaida";
t["supportPage.popularArticlesList.firstApp"] = "Jinsi ya kuunda programu yako ya kwanza";
t["supportPage.popularArticlesList.promptEngineering"] = "Kuelewa uhandisi wa maagizo";
t["supportPage.popularArticlesList.customDomain"] = "Kuunganisha kikoa maalum";
t["supportPage.popularArticlesList.exportCode"] = "Kuhamisha msimbo wa mradi wako";
t["supportPage.popularArticlesList.teamCollab"] = "Vipengele vya ushirikiano wa timu";
t["supportPage.popularArticlesList.apiAuth"] = "Usanidi wa uthibitishaji wa API";
t["supportPage.faqs.whatIsAppNode.question"] = "AppNode ni nini?";
t["supportPage.faqs.whatIsAppNode.answer"] = "AppNode ni jukwaa linaloendeshwa na AI linalokuruhusu kujenga programu za wavuti kwa kuelezea tu unachotaka kwa lugha ya kawaida.";
t["supportPage.faqs.codingExperience.question"] = "Je, ninahitaji uzoefu wa kuandika msimbo?";
t["supportPage.faqs.codingExperience.answer"] = "Hapana! AppNode imeundwa kwa kila mtu. Unaweza kuunda programu za kitaalamu bila kuandika msimbo wowote.";
t["supportPage.faqs.exportCode.question"] = "Je, ninaweza kuhamisha msimbo wangu?";
t["supportPage.faqs.exportCode.answer"] = "Ndiyo, unaweza kuhamisha msimbo kamili wa mradi wako wakati wowote. Unamiliki kila kitu unachokiunda.";
t["supportPage.faqs.technologies.question"] = "AppNode inatumia teknolojia gani?";
t["supportPage.faqs.technologies.answer"] = "AppNode inazalisha programu za kisasa za React/Next.js zenye muundo wa Tailwind CSS.";
t["supportPage.faqs.freePlan.question"] = "Je, kuna mpango wa bure?";
t["supportPage.faqs.freePlan.answer"] = "Ndiyo! Tunatoa kiwango cha bure kinachokuruhusu kujenga na kusambaza programu bila malipo.";
t["support.faq"] = "Maswali";

// === DOCS PAGE ===
t["docsPage.searchPlaceholder"] = "Tafuta nyaraka...";
t["docsPage.welcomeTitle"] = "Karibu AppNode";
t["docsPage.welcomeDescription"] = "AppNode ni jukwaa la maendeleo linaloendeshwa na AI linalokuruhusu kujenga programu kamili za wavuti kwa kuelezea tu unachotaka.";
t["docsPage.whatYouCanBuild"] = "Unachoweza Kujenga";
t["docsPage.howItWorks"] = "Jinsi Inavyofanya Kazi";
t["docsPage.howItWorksDescription"] = "Elezea tu mradi wako kwa lugha ya kawaida. AI yetu inaelewa mahitaji yako, inazalisha mpango kamili, na kujenga programu yako.";
t["docsPage.gettingStarted"] = "Kuanza";
t["docsPage.gettingStartedDescription"] = "Uko tayari kujenga programu yako ya kwanza? Hivi ndivyo unavyoanza kwa hatua chache:";
t["docsPage.startBuildingFree"] = "Anza Kujenga Bure";
t["docsPage.viewQuickstartGuide"] = "Tazama Mwongozo wa Haraka";
t["docsPage.copyPage"] = "Nakili ukurasa";

// === BLOG PAGE ===
t["blogPage.badge"] = "Maarifa na Masasisho";
t["blogPage.subtitle"] = "Maarifa, mafunzo, na masasisho kutoka kwa timu ya AppNode. Kaa mbele na mambo mapya katika maendeleo yanayoendeshwa na AI.";
t["blogPage.searchPlaceholder"] = "Tafuta blogu...";
t["blogPage.noPostsFound"] = "Hakuna machapisho yaliyopatikana yanayolingana na vigezo vyako.";
t["blogPage.latestPosts"] = "Machapisho ya Hivi Karibuni";
t["blogPage.loadMorePosts"] = "Pakia Machapisho Zaidi";
t["blogPage.subscribeTitle"] = "Jiandikishe kwa Jarida Letu";
t["blogPage.subscribeDescription"] = "Pata makala, mafunzo, na masasisho ya bidhaa mpya moja kwa moja kwenye sanduku lako la barua pepe.";
t["blogPage.subscribe"] = "Jiandikishe";
t["blogPage.ctaTitle"] = "Uko Tayari Kujenga Kitu?";
t["blogPage.ctaDescription"] = "Geuza mawazo yako kuwa ukweli na AppNode. Anza kujenga leo.";
t["blogPage.getStartedFree"] = "Anza Bure";
t["blogPage.browseCourses"] = "Vinjari Kozi";
t["blogPage.categories.all"] = "Zote";
t["blogPage.categories.featured"] = "Pendwa";
t["blogPage.categories.ai"] = "AI";
t["blogPage.categories.product"] = "Bidhaa";
t["blogPage.categories.engineering"] = "Uhandisi";
t["blogPage.categories.community"] = "Jumuiya";
t["blogPage.categories.tips"] = "Vidokezo";
t["blogPage.categories.news"] = "Habari";
t["blogPage.posts.featured.title"] = "Kuanzisha AppNode Agent: Jenga Programu Haraka Mara 10 na AI";
t["blogPage.posts.featured.excerpt"] = "Tunafurahi kutangaza AppNode Agent, msaidizi wetu wa maendeleo wa AI wa hali ya juu. Inaelewa maono yako, inazalisha...";
t["blogPage.posts.supabase.title"] = "Kujenga Programu za Uzalishaji na AppNode + Supabase";
t["blogPage.posts.supabase.excerpt"] = "Jifunze jinsi ya kuunganisha miradi yako ya AppNode na Supabase kwa utendaji wenye nguvu wa hifadhidata.";
t["blogPage.posts.smartStyles.title"] = "Mitindo Mahiri: Mfumo wa Muundo Unaotumia AI kwa Programu Zako";
t["blogPage.posts.smartStyles.excerpt"] = "Kuanzisha Mitindo Mahiri, kipengele chetu kipya kinachounda miundo nzuri na thabiti kiotomatiki.";
t["blogPage.posts.security.title"] = "Jinsi AppNode Inavyolinda Msimbo Unaozalishwa na AI";
t["blogPage.posts.security.excerpt"] = "Uchunguzi wa kina wa mbinu yetu ya mseto inayochanganya uchambuzi tuli na ufikiriaji unaotumia LLM.";
t["blogPage.posts.prompting.title"] = "Vidokezo 10 vya Maagizo kwa Programu Bora Zinazozalishwa na AI";
t["blogPage.posts.prompting.excerpt"] = "Boresha sanaa ya kuandika msimbo kwa mbinu hizi za vitendo za maagizo.";
t["blogPage.posts.spotlight.title"] = "Mwanga wa Jumuiya: Programu Zilizojengwa Mwezi Huu";
t["blogPage.posts.spotlight.excerpt"] = "Kuonyesha programu za kushangaza zilizojengwa na jumuiya yetu.";
t["blogPage.posts.collaboration.title"] = "Ushirikiano wa Wakati Halisi: Jenga Pamoja, Tuma Haraka";
t["blogPage.posts.collaboration.excerpt"] = "Wanachama wengi wa timu sasa wanaweza kuhariri mradi huo huo kwa wakati mmoja.";
t["blogPage.posts.caseStudy.title"] = "Kutoka Sifuri hadi Uzalishaji kwa Siku Moja: Uchunguzi wa Kisa";
t["blogPage.posts.caseStudy.excerpt"] = "Jinsi mwanzilishi peke yake alivyojenga na kuzindua programu kamili ya SaaS kwa kutumia AppNode.";
t["blogPage.posts.architecture.title"] = "Kuelewa Usanifu wa Vipengele vya AppNode";
t["blogPage.posts.architecture.excerpt"] = "Uchunguzi wa kina wa kiufundi wa jinsi AppNode inavyopanga msimbo unaozalishwa.";
t["blogPage.posts.mobile.title"] = "Programu za Simu kwenye AppNode: iOS na Android Zinakuja Hivi Karibuni";
t["blogPage.posts.mobile.excerpt"] = "Tunafanya kazi kwenye uzoefu wa asili wa simu ili uweze kujenga programu bila kujifunza Swift au Kotlin.";
t["blogPage.posts.enterprise.title"] = "AppNode kwa Biashara: Usalama, Utiifu, na Upanuzi";
t["blogPage.posts.enterprise.excerpt"] = "Kutangaza vipengele vya kiwango cha biashara ikiwemo SSO, kumbukumbu za ukaguzi, na msaada maalum.";
t["blogPage.posts.future.title"] = "Mustakabali wa Bila-Msimbo: Tunakokwenda";
t["blogPage.posts.future.excerpt"] = "Maono yetu ya kizazi kijacho cha maendeleo ya programu.";
t["blogPage.posts.performance.title"] = "Mwongozo wa Kuboresha Utendaji kwa Programu za AppNode";
t["blogPage.posts.performance.excerpt"] = "Mazoea bora ya kujenga programu za haraka na zinazojibika.";

// === CAREERS PAGE ===
t["careersPage.title"] = "Jiunge na";
t["careersPage.titleEnd"] = "Timu";
t["careersPage.subtitle"] = "Tusaidie kujenga mustakabali wa maendeleo ya programu. Tunatafuta watu wenye shauku ya kujiunga na dhamira yetu.";
t["careersPage.viewOpenPositions"] = "Tazama Nafasi Wazi";
t["careersPage.ourValues"] = "Maadili Yetu";
t["careersPage.whyJoinUs"] = "Kwa Nini Ujiunge Nasi";
t["careersPage.benefitsAndPerks"] = "Faida na Marupurupu";
t["careersPage.openPositions"] = "Nafasi Wazi";
t["careersPage.applyNow"] = "Omba Sasa";
t["careersPage.dontSeeAFit"] = "Huoni inayokufaa?";
t["careersPage.dontSeeAFitDescription"] = "Tunawatafuta watu wenye talanta daima. Tutumie CV yako na tutakukumbuka.";
t["careersPage.sendGeneralApplication"] = "Tuma Maombi ya Jumla";

// === COMMUNITY PAGE ===
t["communityPage.exploreThe"] = "Chunguza";
t["communityPage.subtitle"] = "Gundua miradi inayohamasisha, unganika na wabunifu, na ushiriki kazi yako na maelfu ya wajenzi.";
t["communityPage.searchPlaceholder"] = "Tafuta miradi, violezo, na wabunifu...";
t["communityPage.activeBuilders"] = "Wajenzi Hai";
t["communityPage.monthlyVisitors"] = "Wageni wa Kila Mwezi";
t["communityPage.loadMoreProjects"] = "Pakia Miradi Zaidi";
t["communityPage.topContributors"] = "Wachangiaji Bora";
t["communityPage.viewAll"] = "Tazama Yote";
t["communityPage.recentDiscussions"] = "Majadiliano ya Hivi Karibuni";
t["communityPage.joinDiscussion"] = "Jiunge na Majadiliano";
t["communityPage.joinOurDiscord"] = "Jiunge na Discord yetu";
t["communityPage.discordDescription"] = "Unganika na wajenzi 5,000+, pata msaada, na ushiriki miradi yako.";
t["communityPage.joinDiscordButton"] = "Jiunge na Discord";
t["communityPage.ctaTitle"] = "Uko tayari kushiriki uumbaji wako?";
t["communityPage.ctaDescription"] = "Jenga kitu cha kushangaza na ukionyeshe kwa jumuiya.";

// === GALLERY PAGE ===
t["galleryPage.title"] = "Matunzio ya Miradi";
t["galleryPage.subtitle"] = "Gundua miradi ya kushangaza iliyojengwa na AppNode na jumuiya yetu";
t["galleryPage.startWithIdea"] = "Anza na wazo";
t["galleryPage.seeAll"] = "Tazama yote";
t["galleryPage.view"] = "Tazama";
t["galleryPage.builtWith"] = "Imejengwa na AppNode";
t["galleryPage.builtWithBy"] = "Imejengwa na AppNode na";
t["galleryPage.comingSoon"] = "Inakuja hivi karibuni";
t["galleryPage.shareTitle"] = "Shiriki Uumbaji Wako";
t["galleryPage.shareSubtitle"] = "Umejenga kitu kizuri na AppNode? Kiwasilishe kwenye matunzio na uwahamasishe wengine.";
t["galleryPage.submitProject"] = "Wasilisha Mradi Wako";
t["galleryPage.categories.all"] = "Zote";
t["galleryPage.categories.aiApps"] = "Programu za AI";
t["galleryPage.categories.websites"] = "Tovuti";
t["galleryPage.categories.businessApps"] = "Programu za Biashara";
t["galleryPage.categories.personalSoftware"] = "Programu Binafsi";
t["galleryPage.categories.games"] = "Michezo";
// Gallery project names - translate descriptive ones
t["galleryPage.projects.ecommerceAI"] = "AI ya Biashara Mtandaoni";
t["galleryPage.projects.customerSupportAI"] = "AI ya Msaada wa Wateja";
t["galleryPage.projects.aiContentWriter"] = "Mwandishi wa Maudhui ya AI";
t["galleryPage.projects.aiImageGenerator"] = "Kizalisha Picha cha AI";
t["galleryPage.projects.textToSpeechAI"] = "AI ya Maandishi hadi Sauti";
t["galleryPage.projects.dataAnalyticsAI"] = "AI ya Uchambuzi wa Data";
t["galleryPage.projects.aiVideoCreator"] = "Muundaji wa Video ya AI";
t["galleryPage.projects.aiCodeAssistant"] = "Msaidizi wa Msimbo wa AI";
t["galleryPage.projects.travelBlog"] = "Blogu ya Usafiri";
t["galleryPage.projects.designStudio"] = "Studio ya Muundo";
t["galleryPage.projects.businessWebsite"] = "Tovuti ya Biashara";
t["galleryPage.projects.artMagazine"] = "Jarida la Sanaa";
t["galleryPage.projects.fashionBlog"] = "Blogu ya Mitindo";
t["galleryPage.projects.productLanding"] = "Ukurasa wa Bidhaa";
t["galleryPage.projects.fragranceStore"] = "Duka la Manukato";
t["galleryPage.projects.restaurantSite"] = "Tovuti ya Mkahawa";
t["galleryPage.projects.crmDashboard"] = "Dashibodi ya CRM";
t["galleryPage.projects.orderDashboard"] = "Dashibodi ya Maagizo";
t["galleryPage.projects.projectDashboard"] = "Dashibodi ya Mradi";
t["galleryPage.projects.webAnalytics"] = "Uchambuzi wa Wavuti";
t["galleryPage.projects.salesAnalytics"] = "Uchambuzi wa Mauzo";
t["galleryPage.projects.analyticsDashboard"] = "Dashibodi ya Uchambuzi";
t["galleryPage.projects.performanceDashboard"] = "Dashibodi ya Utendaji";
t["galleryPage.projects.businessAnalytics"] = "Uchambuzi wa Biashara";
t["galleryPage.projects.wellnessMeditation"] = "Ustawi na Kutafakari";
t["galleryPage.projects.personalFinance"] = "Fedha Binafsi";
t["galleryPage.projects.lifeOSProductivity"] = "Tija ya LifeOS";
t["galleryPage.projects.digitalJournal"] = "Jarida la Kidijitali";
t["galleryPage.projects.personalDashboard"] = "Dashibodi Binafsi";
t["galleryPage.projects.taskDashboard"] = "Dashibodi ya Kazi";
t["galleryPage.projects.financeDashboard"] = "Dashibodi ya Fedha";
t["galleryPage.projects.dailyPlanner"] = "Mpangilio wa Kila Siku";
t["galleryPage.projects.cyberRunner"] = "Mkimbiaji wa Mtandao";
t["galleryPage.projects.mysticForest"] = "Msitu wa Ajabu";
t["galleryPage.projects.spaceOdyssey"] = "Safari ya Anga";
t["galleryPage.projects.neonCity"] = "Jiji la Neon";
t["galleryPage.projects.cellEvolution"] = "Mageuzi ya Seli";
t["galleryPage.projects.detectiveDashboard"] = "Dashibodi ya Mpelelezi";
t["galleryPage.projects.partyGames"] = "Michezo ya Sherehe";
t["galleryPage.projects.driftRush"] = "Mbio za Drift";

// === SOLUTIONS PAGE ===
t["solutionsPage.titleStart"] = "Imejengwa kwa jinsi";
t["solutionsPage.titleHighlight"] = "unavyo";
t["solutionsPage.titleEnd"] = "fanya kazi";
t["solutionsPage.subtitle"] = "Iwe wewe ni mwanzilishi, mbunifu, au mtangazaji, AppNode inabadilika kulingana na mtiririko wako wa kazi na kukusaidia kutuma haraka.";
t["solutionsPage.ctaTitle"] = "Huna uhakika suluhisho lipi linafaa?";
t["solutionsPage.ctaSubtitle"] = "Anza kujenga bure na ugundue jinsi AppNode inavyoweza kubadilisha mtiririko wako wa kazi.";
t["solutionsPage.startBuildingFree"] = "Anza Kujenga Bure";
t["solutionsPage.talkToSales"] = "Zungumza na Mauzo";
t["solutionsWeb3.badge"] = "Suluhisho za Web3";
t["solutionsWeb3.title"] = "Jenga kwa Web3";
t["solutionsWeb3.subtitle"] = "Unda programu zisizo na kati na ujumuishaji wa blockchain";

// === USE CASES ===
t["useCasesBusinessApps.badge"] = "Matumizi";
t["useCasesBusinessApps.titleStart"] = "Jenga Programu za Biashara";
t["useCasesBusinessApps.titleHighlight"] = "Haraka Mara 10";
t["useCasesBusinessApps.subtitle"] = "Kutoka dashibodi hadi zana za ndani, jenga programu za biashara timu yako inahitaji bila kusubiri rasilimali za uhandisi.";
t["useCasesBusinessApps.seeExamples"] = "Tazama Mifano";
t["useCasesBusinessApps.mockup.salesDashboard"] = "Dashibodi ya Mauzo";
t["useCasesBusinessApps.mockup.revenue"] = "Mapato";
t["useCasesBusinessApps.mockup.customers"] = "Wateja";
t["useCasesBusinessApps.mockup.retention"] = "Uhifadhi";
t["useCasesBusinessApps.whatYouCanBuild"] = "Unachoweza Kujenga";
t["useCasesBusinessApps.useCases.dashboards.description"] = "Dashibodi za KPI, mitazamo ya uchambuzi, na zana za ripoti";
t["useCasesBusinessApps.useCases.workflowAutomation.title"] = "Otomatiki ya Mtiririko wa Kazi";
t["useCasesBusinessApps.useCases.workflowAutomation.description"] = "Otomatisha kazi zinazojirudia na michakato ya idhini";
t["useCasesBusinessApps.useCases.adminPanels.title"] = "Paneli za Utawala";
t["useCasesBusinessApps.useCases.adminPanels.description"] = "Miingiliano maalum ya utawala kwa data na mifumo yako";
t["useCasesBusinessApps.useCases.crmTools.title"] = "Zana za CRM";
t["useCasesBusinessApps.useCases.crmTools.description"] = "Mifumo ya usimamizi wa wateja na ufuatiliaji wa mauzo";
t["useCasesBusinessApps.useCases.inventorySystems.title"] = "Mifumo ya Hesabu ya Bidhaa";
t["useCasesBusinessApps.useCases.inventorySystems.description"] = "Fuatilia hifadhi, maagizo, na data ya mnyororo wa ugavi";
t["useCasesBusinessApps.useCases.formsSurveys.title"] = "Fomu na Uchunguzi";
t["useCasesBusinessApps.useCases.formsSurveys.description"] = "Zana za ukusanyaji wa data na mifumo ya maoni";
t["useCasesBusinessApps.ctaTitle"] = "Jenga programu yako ya biashara leo";
t["useCasesBusinessApps.ctaSubtitle"] = "Hakuna timu ya uhandisi inayohitajika. Anza kujenga kwa dakika.";

// === MOBILE APPS USE CASE ===
t["useCasesMobileApps.badge"] = "Matumizi";
t["useCasesMobileApps.titleStart"] = "Jenga Programu za Simu";
t["useCasesMobileApps.titleHighlight"] = "Bila Msimbo";
t["useCasesMobileApps.subtitle"] = "Unda uzoefu wa ubora wa asili wa simu unaofanya kazi kwenye iOS na Android. Hakuna Swift, Kotlin, au React Native inayohitajika.";
t["useCasesMobileApps.seeExamples"] = "Tazama Mifano";
t["useCasesMobileApps.featuresTitle"] = "Vipengele vya Programu za Simu";
t["useCasesMobileApps.features.nativePerformance.title"] = "Utendaji wa Asili";
t["useCasesMobileApps.features.nativePerformance.description"] = "Programu zinazohisi haraka na kujibika kwenye kifaa chochote";
t["useCasesMobileApps.features.pushNotifications.title"] = "Arifa za Kusukuma";
t["useCasesMobileApps.features.pushNotifications.description"] = "Shirikisha watumiaji na arifa za kusukuma za wakati unaofaa";
t["useCasesMobileApps.features.locationServices.title"] = "Huduma za Eneo";
t["useCasesMobileApps.features.locationServices.description"] = "Jenga vipengele vinavyotambua eneo na GPS";
t["useCasesMobileApps.features.cameraMedia.title"] = "Kamera na Vyombo vya Habari";
t["useCasesMobileApps.features.cameraMedia.description"] = "Fikia kamera, picha, na maktaba za vyombo vya habari";
t["useCasesMobileApps.features.offlineSupport.title"] = "Msaada wa Nje ya Mtandao";
t["useCasesMobileApps.features.offlineSupport.description"] = "Programu zinazofanya kazi hata bila mtandao";
t["useCasesMobileApps.features.crossPlatform.title"] = "Kupita Majukwaa";
t["useCasesMobileApps.features.crossPlatform.description"] = "Msimbo mmoja kwa iOS na Android";
t["useCasesMobileApps.ctaTitle"] = "Jenga programu yako ya simu leo";
t["useCasesMobileApps.ctaSubtitle"] = "Kutoka wazo hadi App Store kwa muda wa rekodi.";

// === RAPID PROTOTYPING ===
t["useCasesRapidPrototyping.badge"] = "Matumizi";
t["useCasesRapidPrototyping.titleStart"] = "Kutoka Wazo hadi Mfano kwa";
t["useCasesRapidPrototyping.titleHighlight"] = "Dakika";
t["useCasesRapidPrototyping.subtitle"] = "Thibitisha mawazo haraka. Jenga mifano inayofanya kazi inayoonekana na kuhisi kama kitu halisi, bila kuandika mstari mmoja wa msimbo.";
t["useCasesRapidPrototyping.startPrototyping"] = "Anza Kutengeneza Mfano";
t["useCasesRapidPrototyping.seeExamples"] = "Tazama Mifano";
t["useCasesRapidPrototyping.comparisonTitle"] = "Njia ya Kawaida dhidi ya AppNode";
t["useCasesRapidPrototyping.totalTime"] = "Muda wa jumla";
t["useCasesRapidPrototyping.traditional.title"] = "Utengenezaji wa Mfano wa Kawaida";
t["useCasesRapidPrototyping.traditional.totalTime"] = "Wiki 6-10";
t["useCasesRapidPrototyping.appnode.title"] = "Utengenezaji wa Mfano na AppNode";
t["useCasesRapidPrototyping.appnode.totalTime"] = "Masaa 1-2";
t["useCasesRapidPrototyping.benefitsTitle"] = "Kwa Nini Utengenezaji wa Haraka wa Mfano ni Muhimu";
t["useCasesRapidPrototyping.ctaTitle"] = "Anza kutengeneza mfano leo";
t["useCasesRapidPrototyping.ctaSubtitle"] = "Geuza mawazo yako kuwa mifano inayofanya kazi kwa dakika, si miezi.";

// Apply all translations
for (const [pathStr, value] of Object.entries(t)) {
  setByPath(sw, pathStr, value);
}

fs.writeFileSync(
  path.join(__dirname, 'src/translations/sw.json'),
  JSON.stringify(sw, null, 2) + '\n'
);

console.log('Phase 2 done! Applied', Object.keys(t).length, 'translations');
