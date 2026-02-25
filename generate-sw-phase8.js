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

// === REPORT PAGE - Navigation & Sections ===
t["reportPage.searchPlaceholder"] = "Tafuta nyaraka...";
t["reportPage.copyPage"] = "Nakili ukurasa";
t["reportPage.sections.gettingStarted"] = "Kuanza";
t["reportPage.sections.trustSafety"] = "Uaminifu na Usalama";
t["reportPage.sections.tutorials"] = "Mafunzo";
t["reportPage.sections.teamsEnterprise"] = "Timu na Biashara";
t["reportPage.sections.changelog"] = "Kumbukumbu ya Mabadiliko";

// === REPORT PAGE - Items ===
t["reportPage.items.introduction"] = "Utangulizi";
t["reportPage.items.quickstart"] = "Miongozo ya Haraka";
t["reportPage.items.createAi"] = "Unda na AI";
t["reportPage.items.buildScratch"] = "Jenga Kutoka Mwanzo";
t["reportPage.items.importGithub"] = "Agiza kutoka GitHub";
t["reportPage.items.trustOverview"] = "Muhtasari";
t["reportPage.items.reportingAbuse"] = "Kuripoti Unyanyasaji";
t["reportPage.items.copyrightClaims"] = "Madai ya Hakimiliki";
t["reportPage.items.securityOverview"] = "Muhtasari wa Usalama";
t["reportPage.items.dataProtection"] = "Ulinzi wa Data";
t["reportPage.items.generateCode"] = "Jinsi ya Kuzalisha Msimbo";
t["reportPage.items.firstApp"] = "Kujenga Programu Yako ya Kwanza";
t["reportPage.items.databases"] = "Kujenga na Hifadhidata";
t["reportPage.items.deploying"] = "Kusambaza Programu Yako";
t["reportPage.items.teamsOverview"] = "Muhtasari wa Timu";
t["reportPage.items.enterpriseFeatures"] = "Vipengele vya Biashara";
t["reportPage.items.collaboration"] = "Ushirikiano";
t["reportPage.items.recentUpdates"] = "Masasisho ya Hivi Karibuni";
t["reportPage.items.roadmap"] = "Ramani ya Njia";

// === REPORT PAGE - Welcome Content ===
t["reportPage.content.welcomeTitle"] = "Karibu AppNode";
t["reportPage.content.welcomeDescription"] = "AppNode ni jukwaa la maendeleo linalotumia AI linaloruhusu kujenga programu kamili za wavuti kwa kuelezea unachotaka.";
t["reportPage.content.whatYouCanBuild"] = "Unaweza Kujenga Nini";
t["reportPage.content.whatYouCanBuildItems.fullStack"] = "Programu kamili za wavuti zenye hifadhidata";
t["reportPage.content.whatYouCanBuildItems.landingPages"] = "Kurasa za kutua na tovuti za masoko";
t["reportPage.content.whatYouCanBuildItems.dashboards"] = "Dashibodi na paneli za msimamizi";
t["reportPage.content.whatYouCanBuildItems.ecommerce"] = "Maduka ya biashara mtandaoni na kanda";
t["reportPage.content.whatYouCanBuildItems.saas"] = "Bidhaa za SaaS na zana za ndani";
t["reportPage.content.howItWorks"] = "Jinsi Inavyofanya Kazi";
t["reportPage.content.howItWorksDescription"] = "Elezea tu mradi wako kwa lugha ya kawaida. AI yetu inaelewa mahitaji yako, inazalisha mpango kamili, na kuandika msimbo wa uzalishaji.";
t["reportPage.content.steps.describe"] = "Elezea";
t["reportPage.content.steps.describeText"] = "Mwambie AI unachotaka kujenga";
t["reportPage.content.steps.generate"] = "Zalisha";
t["reportPage.content.steps.generateText"] = "AI inaandika msimbo tayari kwa uzalishaji";
t["reportPage.content.steps.preview"] = "Hakiki";
t["reportPage.content.steps.previewText"] = "Angalia programu yako hai mara moja";
t["reportPage.content.steps.deploy"] = "Sambaza";
t["reportPage.content.steps.deployText"] = "Usambazaji wa kubofya moja kwa uzalishaji";

// === REPORT PAGE - Quickstart ===
t["reportPage.content.quickstartTitle"] = "Miongozo ya Haraka";
t["reportPage.content.quickstartDescription"] = "Anza na kuendesha na AppNode kwa dakika. Chagua njia yako kulingana na jinsi unavyotaka kuanza kujenga.";
t["reportPage.content.chooseStartingPoint"] = "Chagua Hatua Yako ya Kuanzia";
t["reportPage.content.examplePrompts"] = "Maagizo ya Mfano ya Kujaribu";
t["reportPage.content.createWithAiTitle"] = "Unda na AI";
t["reportPage.content.createWithAiDescription"] = "Njia ya haraka zaidi ya kujenga. Elezea tu unachotaka kwa lugha ya kawaida na utazame AI ikunda programu yako kamili.";
t["reportPage.content.stepByStepGuide"] = "Mwongozo wa Hatua kwa Hatua";
t["reportPage.content.startNewProject"] = "Anza Mradi Mpya";
t["reportPage.content.startNewProjectDesc"] = "Bofya 'Unda Mpya' kutoka kwenye dashibodi yako au ukurasa wa nyumbani";
t["reportPage.content.describeYourIdea"] = "Elezea Wazo Lako";
t["reportPage.content.describeYourIdeaDesc"] = "Andika maelezo ya kina ya unachotaka kujenga. Kadri muktadha unavyokuwa zaidi, ndivyo matokeo yanavyokuwa bora.";
t["reportPage.content.reviewBlueprint"] = "Kagua Mpango";
t["reportPage.content.reviewBlueprintDesc"] = "AI inazalisha mpango wa mradi wenye vipengele, muundo, na usanifu. Unaweza kuuboresha.";
t["reportPage.content.watchItBuild"] = "Angalia Ikijengwa";
t["reportPage.content.watchItBuildDesc"] = "AI inaandika msimbo kwa kila kipengele. Angalia faili zikionekana kwa wakati halisi na hakiki hai.";
t["reportPage.content.testIterate"] = "Pima na Rudia";
t["reportPage.content.testIterateDesc"] = "Jaribu programu yako kwenye hakiki. Uliza AI ifanye mabadiliko au iongeze vipengele.";
t["reportPage.content.deployStep"] = "Sambaza";
t["reportPage.content.deployStepDesc"] = "Ukiwa tayari, sambaza kwa kubofya moja kupata URL hai.";
t["reportPage.content.tipsForBetterResults"] = "Vidokezo kwa Matokeo Bora";
t["reportPage.content.tipSpecific"] = "Kuwa maalum:";
t["reportPage.content.tipSpecificDesc"] = "Badala ya 'tengeneza tovuti', sema 'unda tovuti ya kanda yenye mandhari ya giza, matunzio ya miradi, na fomu ya mawasiliano'";
t["reportPage.content.tipFeatures"] = "Elezea vipengele:";
t["reportPage.content.tipFeaturesDesc"] = "Orodhesha vipengele muhimu unavyohitaji — uthibitishaji, hifadhidata, upakuaji wa faili, n.k.";
t["reportPage.content.tipDesign"] = "Taja mapendeleo ya muundo:";
t["reportPage.content.tipDesignDesc"] = "Rangi, mtindo (mdogo, ujasiri, mchezaji), na mapendeleo ya mpangilio husaidia AI kulingana na maono yako";
t["reportPage.content.tipIterate"] = "Rudia:";
t["reportPage.content.tipIterateDesc"] = "Anza rahisi, kisha uliza AI iongeze vipengele zaidi hatua kwa hatua";

// === REPORT PAGE - Build from Scratch ===
t["reportPage.content.buildFromScratchTitle"] = "Jenga Kutoka Mwanzo";
t["reportPage.content.buildFromScratchDesc"] = "Anza na turubai tupu na udhibiti kamili. Inafaa kwa waendelezaji wanaotaka kuunda muundo wa mradi wao huku wakitumia AI.";
t["reportPage.content.chooseTemplate"] = "Chagua Templeti Yako";
t["reportPage.content.chooseTemplateDesc"] = "Chagua templeti ya msingi kuanzia. Kila templeti inakuja imesanidiwa na mfumo, zana za ujenzi, na utegemezi.";
t["reportPage.content.workspaceFeatures"] = "Vipengele vya Nafasi ya Kazi";
t["reportPage.content.codeEditor"] = "Kihariri cha Msimbo:";
t["reportPage.content.codeEditorDesc"] = "Kihariri chenye vipengele kamili na uangazaji wa sintaksia, ukamilishaji otomatiki, na uhariri wa faili nyingi";
t["reportPage.content.fileExplorer"] = "Kivinjari cha Faili:";
t["reportPage.content.fileExplorerDesc"] = "Rambaza na simamia faili na folda za mradi wako";
t["reportPage.content.terminal"] = "Terminali:";
t["reportPage.content.terminalDesc"] = "Endesha amri, sakinisha pakiti, na simamia mazingira yako";
t["reportPage.content.livePreview"] = "Hakiki Hai:";
t["reportPage.content.livePreviewDesc"] = "Angalia mabadiliko mara moja unapoandika msimbo";
t["reportPage.content.aiChat"] = "Mazungumzo ya AI:";
t["reportPage.content.aiChatDesc"] = "Uliza msaada, zalisha vipande vya msimbo, au tatua hitilafu";
t["reportPage.content.versionControl"] = "Udhibiti wa Toleo:";
t["reportPage.content.versionControlDesc"] = "Ujumuishaji wa git uliojengwa ndani kufuatilia mabadiliko";

// === REPORT PAGE - Import GitHub ===
t["reportPage.content.importGithubTitle"] = "Agiza kutoka GitHub";
t["reportPage.content.importGithubDesc"] = "Leta miradi yako iliyopo kwenye AppNode. Agiza hifadhi yoyote ya umma au ya faragha na uiimarishe na maendeleo yanayotumia AI.";
t["reportPage.content.howToImport"] = "Jinsi ya Kuagiza";
t["reportPage.content.connectGithub"] = "Unganisha GitHub";
t["reportPage.content.connectGithubDesc"] = "Idhinisha AppNode kufikia akaunti yako ya GitHub kwa uagizaji usio na mshono";
t["reportPage.content.selectRepository"] = "Chagua Hifadhi";
t["reportPage.content.selectRepositoryDesc"] = "Chagua kutoka kwenye hifadhi zako au ubandike URL yoyote ya hifadhi ya umma";
t["reportPage.content.configureSettings"] = "Sanidi Mipangilio";
t["reportPage.content.configureSettingsDesc"] = "Chagua tawi, weka vigezo vya mazingira, na usanidi mipangilio ya ujenzi";
t["reportPage.content.importBuild"] = "Agiza na Ujenga";
t["reportPage.content.importBuildDesc"] = "Tunanakili hifadhi yako, tunasakinisha utegemezi, na kuanza seva ya maendeleo";
t["reportPage.content.whatHappensAfterImport"] = "Nini Kinatokea Baada ya Kuagiza";
t["reportPage.content.afterImport1"] = "Msimbo wako unanakiliwa kwenye nafasi mpya ya kazi ya AppNode";
t["reportPage.content.afterImport2"] = "Utegemezi unasakinishwa kiotomatiki";
t["reportPage.content.afterImport3"] = "Seva ya maendeleo inaanza na hakiki hai";
t["reportPage.content.afterImport4"] = "AI inachambua msimbo wako kutoa msaada wa muktadha";
t["reportPage.content.afterImport5"] = "Mabadiliko yanaweza kusukumwa tena kwenye GitHub au kusafirishwa";
t["reportPage.content.privateRepoNote"] = "Kumbuka:";
t["reportPage.content.privateRepoNoteDesc"] = "Kwa hifadhi za faragha, utahitaji kuidhinisha ufikiaji wa GitHub. Tunaomba ruhusa ndogo tu zinazohitajika kunakili.";
t["reportPage.content.minutes"] = "dakika";
t["reportPage.content.minute"] = "dakika";
t["reportPage.content.bestForBeginners"] = "Bora kwa wanaoanza — elezea wazo lako na uache AI iijenge";
t["reportPage.content.blankCanvas"] = "Anza na turubai tupu na udhibiti kamili";
t["reportPage.content.bringExisting"] = "Leta mradi wako uliopo na uuimarishe na AI";
t["reportPage.content.useTemplate"] = "Tumia Templeti";
t["reportPage.content.useTemplateDesc"] = "Anza kutoka templeti iliyojengwa tayari na uibinafsishe";
t["reportPage.content.examplePrompt1"] = "\"Unda orodha ya kazi na buruta na uache na hali ya giza\"";
t["reportPage.content.examplePrompt2"] = "\"Jenga programu rahisi ya kuchora na ukubwa na rangi tofauti za brashi\"";
t["reportPage.content.examplePrompt3"] = "\"Tengeneza mchezo wa kadi za kumbukumbu na emojis\"";
t["reportPage.content.examplePrompt4"] = "\"Unda kifuatilizi cha matumizi na chati na kategoria\"";

// === REPORT PAGE - Templates ===
t["reportPage.content.reactVite"] = "React + Vite";
t["reportPage.content.reactViteDesc"] = "Usanidi wa kisasa wa React wenye kasi";
t["reportPage.content.nextjs"] = "Next.js";
t["reportPage.content.nextjsDesc"] = "Mfumo kamili wa React";
t["reportPage.content.vue3"] = "Vue 3";
t["reportPage.content.vue3Desc"] = "Mfumo unaoendelea wa JavaScript";
t["reportPage.content.svelte"] = "Svelte";
t["reportPage.content.svelteDesc"] = "Mfumo wa wakati wa kukusanya";
t["reportPage.content.astro"] = "Astro";
t["reportPage.content.astroDesc"] = "Tovuti zinazolenga maudhui";
t["reportPage.content.vanillaJs"] = "Vanilla JS";
t["reportPage.content.vanillaJsDesc"] = "Hakuna mfumo, JavaScript safi";

// === REPORT PAGE - Trust & Safety ===
t["reportPage.content.trustOverviewTitle"] = "Uaminifu na Usalama katika AppNode";
t["reportPage.content.trustOverviewDesc"] = "Tumejitolea kudumisha jukwaa salama na la kuaminika kwa watumiaji wote. Timu yetu ya Uaminifu na Usalama inafanya kazi masaa 24/7.";
t["reportPage.content.ourCommitment"] = "Ahadi Yetu";
t["reportPage.content.commitment1"] = "Ufuatiliaji wa masaa 24/7 wa shughuli za jukwaa";
t["reportPage.content.commitment2"] = "Majibu ya haraka kwa ripoti za unyanyasaji";
t["reportPage.content.commitment3"] = "Sera wazi za utekelezaji";
t["reportPage.content.commitment4"] = "Ukaguzi na masasisho ya mara kwa mara ya usalama";
t["reportPage.content.howWeKeepYouSafe"] = "Jinsi Tunavyokuhifadhi Salama";
t["reportPage.content.howWeKeepYouSafeDesc"] = "Mbinu yetu ya tabaka nyingi ya usalama inajumuisha mifumo ya kugundua kiotomatiki, michakato ya mapitio ya binadamu, na kuripoti kwa jumuiya.";
t["reportPage.content.automatedDetection"] = "Ugunduzi Otomatiki";
t["reportPage.content.automatedDetectionDesc"] = "Mifumo inayotumia AI inagundua maudhui hatari";
t["reportPage.content.humanReview"] = "Mapitio ya Binadamu";
t["reportPage.content.humanReviewDesc"] = "Timu ya wataalamu inakagua maudhui yaliyobandikwa";
t["reportPage.content.userReports"] = "Ripoti za Watumiaji";
t["reportPage.content.userReportsDesc"] = "Jumuiya inasaidia kutambua matatizo";
t["reportPage.content.swiftAction"] = "Hatua za Haraka";
t["reportPage.content.swiftActionDesc"] = "Majibu ya haraka kwa ukiukaji";

// === REPORT PAGE - Reporting Abuse ===
t["reportPage.content.reportingAbuseTitle"] = "Kuripoti Unyanyasaji";
t["reportPage.content.reportingAbuseDesc"] = "Ukikutana na maudhui au tabia inayokiuka sera zetu, tafadhali iripoti mara moja. Tunashughulikia ripoti zote kwa uzito.";
t["reportPage.content.howToReport"] = "Jinsi ya Kuripoti";
t["reportPage.content.howToReport1"] = "Bofya kitufe cha 'Ripoti' kwenye mradi wowote au wasifu wa mtumiaji";
t["reportPage.content.howToReport2"] = "Tutumie barua pepe moja kwa moja kwa contact@appnode.ai";
t["reportPage.content.howToReport3"] = "Tumia fomu ya mawasiliano katika mipangilio ya akaunti yako";
t["reportPage.content.whatWeInvestigate"] = "Tunachochunguza";
t["reportPage.content.investigate1"] = "Unyanyasaji au vitisho";
t["reportPage.content.investigate2"] = "Programu hasidi au msimbo mbaya";
t["reportPage.content.investigate3"] = "Ukiukaji wa hakimiliki";
t["reportPage.content.investigate4"] = "Barua taka au majaribio ya hadaa";
t["reportPage.content.investigate5"] = "Maudhui haramu";

// === REPORT PAGE - Copyright Claims ===
t["reportPage.content.copyrightClaimsTitle"] = "Madai ya Hakimiliki";
t["reportPage.content.copyrightClaimsDesc"] = "Tunaheshimu haki za miliki ya akili na tunajibu haraka kwa madai halali ya hakimiliki.";
t["reportPage.content.filingClaim"] = "Kuwasilisha Dai";
t["reportPage.content.filingClaimDesc"] = "Kuwasilisha notisi ya DMCA ya kuondoa, tafadhali tumia barua pepe contact@appnode.ai na:";
t["reportPage.content.claimItem1"] = "Utambulisho wa kazi yenye hakimiliki";
t["reportPage.content.claimItem2"] = "URL ya maudhui yanayokiuka";
t["reportPage.content.claimItem3"] = "Maelezo yako ya mawasiliano";
t["reportPage.content.claimItem4"] = "Tamko la imani njema";
t["reportPage.content.claimItem5"] = "Sahihi yako ya kimwili au ya kielektroniki";

// === REPORT PAGE - Terms in docs ===
t["reportPage.content.termsLastUpdated"] = "Ilisasishwa mwisho: Januari 2025";
t["reportPage.content.termsIntro"] = "Masharti haya ya Huduma (\"Masharti\") yanasimamia ufikiaji wako na matumizi ya huduma, tovuti, na programu za AppNode (\"Huduma\").";
t["reportPage.content.acceptanceOfTerms"] = "1. Kukubali Masharti";
t["reportPage.content.acceptanceOfTermsDesc"] = "Kwa kufikia au kutumia Huduma zetu, unakubali kufungwa na Masharti haya na Sera yetu ya Faragha. Ikiwa hukubali, usitumie Huduma.";
t["reportPage.content.descriptionOfServices"] = "2. Maelezo ya Huduma";
t["reportPage.content.descriptionOfServicesDesc"] = "AppNode hutoa jukwaa la maendeleo linalotumia AI linalowezesha watumiaji kujenga tovuti, programu, na bidhaa za kidijitali.";
t["reportPage.content.userAccounts"] = "3. Akaunti za Watumiaji";
t["reportPage.content.userAccountsDesc"] = "Kutumia vipengele fulani, lazima uunde akaunti. Unakubali:";
t["reportPage.content.userAccount1"] = "Kutoa taarifa sahihi na kamili";
t["reportPage.content.userAccount2"] = "Kudumisha usalama wa stakabadhi za akaunti yako";
t["reportPage.content.userAccount3"] = "Kukubali wajibu wa shughuli zote chini ya akaunti yako";
t["reportPage.content.userAccount4"] = "Kutuarifu mara moja kuhusu matumizi yoyote yasiyoidhinishwa";
t["reportPage.content.acceptableUse"] = "4. Matumizi Yanayokubalika";
t["reportPage.content.acceptableUseDesc"] = "Unakubali kutotumia Huduma zetu:";
t["reportPage.content.acceptableUse1"] = "Kukiuka sheria au kanuni zinazotumika";
t["reportPage.content.acceptableUse2"] = "Kukiuka haki za miliki ya akili";
t["reportPage.content.acceptableUse3"] = "Kusambaza programu hasidi, barua taka, au maudhui hatari";
t["reportPage.content.acceptableUse4"] = "Kunyanyasa, kutishia, au kudhuru wengine";
t["reportPage.content.acceptableUse5"] = "Kujaribu kupata ufikiaji usioidhinishwa wa mifumo yetu";
t["reportPage.content.acceptableUse6"] = "Kutumia Huduma zetu kwa madhumuni yoyote haramu au yasiyoidhinishwa";
t["reportPage.content.intellectualProperty"] = "5. Miliki ya Akili";
t["reportPage.content.intellectualPropertyDesc"] = "Unabaki mmiliki wa maudhui unayounda kwa kutumia Huduma zetu. Kwa kutumia Huduma zetu, unatupa leseni ndogo.";
t["reportPage.content.termination"] = "6. Kusitishwa";
t["reportPage.content.terminationDesc"] = "Tunahifadhi haki ya kusimamisha au kusitisha akaunti yako kwa ukiukaji wa Masharti haya au kwa sababu yoyote nyingine.";
t["reportPage.content.disclaimers"] = "7. Kanusho";
t["reportPage.content.disclaimersDesc"] = "HUDUMA ZETU ZINATOLEWA \"KAMA ZILIVYO\" BILA DHAMANA YA AINA YOYOTE, IWE WAZI AU INAYODHANIWA. HATUHAKIKISHI KUWA HUDUMA ZITAFANYA KAZI BILA HITILAFU.";
t["reportPage.content.termsContact"] = "8. Mawasiliano";
t["reportPage.content.termsContactDesc"] = "Kwa maswali kuhusu Masharti haya, wasiliana nasi kwa contact@appnode.ai";

// === REPORT PAGE - Privacy in docs ===
t["reportPage.content.privacyLastUpdated"] = "Ilisasishwa mwisho: Januari 2025";
t["reportPage.content.privacyIntro"] = "Sera hii ya Faragha inaelezea jinsi AppNode inavyokusanya, kutumia, na kushiriki taarifa kukuhusu unapotumia huduma zetu.";
t["reportPage.content.infoWeCollect"] = "Taarifa Tunazokusanya";
t["reportPage.content.infoCollect1"] = "Taarifa za akaunti (barua pepe, jina, wasifu)";
t["reportPage.content.infoCollect2"] = "Data ya matumizi (vipengele vilivyotumika, miradi iliyoundwa)";
t["reportPage.content.infoCollect3"] = "Taarifa za kifaa (kivinjari, OS, anwani ya IP)";
t["reportPage.content.infoCollect4"] = "Taarifa za malipo (zinashughulikiwa na watoa huduma salama)";
t["reportPage.content.howWeUseInfo"] = "Jinsi Tunavyotumia Taarifa Zako";
t["reportPage.content.useInfo1"] = "Kutoa na kuboresha huduma zetu";
t["reportPage.content.useInfo2"] = "Kushughulikia miamala na kutuma taarifa zinazohusiana";
t["reportPage.content.useInfo3"] = "Kutuma notisi za kiufundi na ujumbe wa msaada";
t["reportPage.content.useInfo4"] = "Kujibu maoni na maswali yako";
t["reportPage.content.privacyContact"] = "Mawasiliano";
t["reportPage.content.privacyContactDesc"] = "Kwa maswali yanayohusiana na faragha, wasiliana nasi kwa contact@appnode.ai";

// === REPORT PAGE - Platform Rules ===
t["reportPage.content.platformRulesDesc"] = "Sheria hizi husaidia kudumisha mazingira salama na yenye tija kwa watumiaji wote wa AppNode.";
t["reportPage.content.prohibitedContent"] = "Maudhui Yaliyokatazwa";
t["reportPage.content.prohibited1"] = "Programu hasidi, virusi, au msimbo mbaya";
t["reportPage.content.prohibited2"] = "Tovuti za hadaa au ulaghai";
t["reportPage.content.prohibited3"] = "Maudhui yanayotangaza vurugu au chuki";
t["reportPage.content.prohibited4"] = "Bidhaa au huduma haramu";
t["reportPage.content.prohibited5"] = "Nyenzo zinazokiuka hakimiliki";
t["reportPage.content.accountRules"] = "Sheria za Akaunti";
t["reportPage.content.accountRule1"] = "Akaunti moja kwa mtu";
t["reportPage.content.accountRule2"] = "Hakuna kushiriki stakabadhi za akaunti";
t["reportPage.content.accountRule3"] = "Hakuna kujifanya kuwa watu wengine";
t["reportPage.content.accountRule4"] = "Hakuna uundaji wa akaunti kiotomatiki";

// === REPORT PAGE - Security ===
t["reportPage.content.securityOverviewTitle"] = "Usalama katika AppNode";
t["reportPage.content.securityOverviewDesc"] = "Usalama ni msingi wa kila kitu tunachojenga. Tunatekeleza mbinu zinazoongoza tasnia kulinda data yako na miradi yako.";
t["reportPage.content.infrastructureSecurity"] = "Usalama wa Miundombinu";
t["reportPage.content.encryptionAtRest"] = "Usimbuaji wa Data Iliyohifadhiwa";
t["reportPage.content.encryptionAtRestDesc"] = "Data yote imesimbwa kwa AES-256";
t["reportPage.content.encryptionInTransit"] = "Usimbuaji wa Data Inayosafirishwa";
t["reportPage.content.encryptionInTransitDesc"] = "TLS 1.3 kwa maunganisho yote";
t["reportPage.content.isolatedEnvironments"] = "Mazingira Yaliyotengwa";
t["reportPage.content.isolatedEnvironmentsDesc"] = "Utekelezaji uliotengwa kwa miradi yote";
t["reportPage.content.ddosProtection"] = "Ulinzi wa DDoS";
t["reportPage.content.ddosProtectionDesc"] = "Upunguzaji wa mashambulizi wa kiwango cha biashara";
t["reportPage.content.applicationSecurity"] = "Usalama wa Programu";
t["reportPage.content.appSecurity1"] = "Upimaji wa mara kwa mara wa kupenya na kampuni za nje";
t["reportPage.content.appSecurity2"] = "Uchunguzi otomatiki wa udhaifu katika CI/CD";
t["reportPage.content.appSecurity3"] = "Mbinu za mzunguko wa maendeleo salama (SDL)";
t["reportPage.content.appSecurity4"] = "Mahitaji ya mapitio ya msimbo kwa mabadiliko yote";
t["reportPage.content.appSecurity5"] = "Programu ya zawadi za hitilafu kwa ufichuzi wa kuwajibika";
t["reportPage.content.accountSecurity"] = "Usalama wa Akaunti";
t["reportPage.content.accountSec1"] = "Msaada wa uthibitishaji wa hatua nyingi (MFA)";
t["reportPage.content.accountSec2"] = "Usimamizi wa vikao na ufuatiliaji wa vifaa";
t["reportPage.content.accountSec3"] = "Ugunduzi wa shughuli za tuhuma na tahadhari";
t["reportPage.content.accountSec4"] = "Mahitaji ya nenosiri salama na uhifadhi wa bcrypt";
t["reportPage.content.compliance"] = "Kufuata Sheria";
t["reportPage.content.complianceDesc"] = "Tunadumisha kufuata viwango na kanuni za tasnia:";
t["reportPage.content.reportVulnerability"] = "Ripoti Udhaifu";
t["reportPage.content.reportVulnerabilityDesc"] = "Umegundua suala la usalama? Tafadhali liripoti kwa uwajibikaji kwa contact@appnode.ai. Tunathamini msaada wako katika kuhifadhi AppNode kuwa salama.";
t["reportPage.content.dataProtectionTitle"] = "Ulinzi wa Data";
t["reportPage.content.dataProtectionDesc"] = "Tunashughulikia ulinzi wa data kwa uzito. Msimbo wako, miradi yako, na taarifa zako binafsi zinalindwa na tabaka nyingi za usalama.";
t["reportPage.content.yourDataRights"] = "Haki Zako za Data";
t["reportPage.content.dataRight1"] = "Fikia data yako binafsi";
t["reportPage.content.dataRight2"] = "Hamisha miradi yako wakati wowote";
t["reportPage.content.dataRight3"] = "Omba kufutwa kwa akaunti yako";
t["reportPage.content.dataRight4"] = "Jiondoe kwenye mawasiliano ya masoko";
t["reportPage.content.dataRetention"] = "Uhifadhi wa Data";
t["reportPage.content.dataRetentionDesc"] = "Tunahifadhi data yako tu kwa muda unaohitajika kutoa huduma zetu. Unapofuta akaunti yako, data yako inafutwa kabisa.";

// === REPORT PAGE - Tutorials ===
t["reportPage.content.generateCodeTitle"] = "Jinsi ya Kuzalisha Msimbo";
t["reportPage.content.generateCodeDesc"] = "Jifunze njia tofauti za kuzalisha msimbo kwa kutumia uwezo wa AI wa AppNode.";
t["reportPage.content.usingPromptBar"] = "Kutumia Upau wa Maagizo";
t["reportPage.content.usingPromptBarDesc"] = "Upau wa maagizo ni kiolesura chako kikuu cha kuzalisha msimbo wa AI. Andika maelezo ya lugha ya kawaida kuunda vipengele na ukurasa.";
t["reportPage.content.contextualGeneration"] = "Uzalishaji wa Muktadha";
t["reportPage.content.contextualGenerationDesc"] = "Bofya kulia faili au folda yoyote ili kuzalisha msimbo katika muktadha. AI inaelewa muundo wa mradi wako na kuzalisha msimbo unaooana.";
t["reportPage.content.codeCompletion"] = "Ukamilishaji wa Msimbo";
t["reportPage.content.codeCompletionDesc"] = "Unapoandika, AI inapendekeza ukamilishaji kulingana na muktadha wa msimbo wako. Kubali mapendekezo kwa Tab au endelea kuandika kuboresha.";
t["reportPage.content.firstAppTitle"] = "Kujenga Programu Yako ya Kwanza";
t["reportPage.content.firstAppIntro"] = "Fuata mwongozo huu wa hatua kwa hatua kujenga programu yako ya kwanza na AppNode.";
t["reportPage.content.firstAppStep1Title"] = "Hatua ya 1: Anza Mradi Mpya";
t["reportPage.content.firstAppStep1Text"] = "Bofya 'Unda Mpya' kutoka dashibodi yako na uchague 'Unda na AI' kwa mwanzo rahisi.";
t["reportPage.content.firstAppStep2Title"] = "Hatua ya 2: Elezea Programu Yako";
t["reportPage.content.firstAppStep2Text"] = "Jaribu agizo hili: \"Unda programu rahisi ya orodha ya kazi yenye uwezo wa kuongeza, kukamilisha, na kufuta kazi. Tumia muundo safi na mdogo.\"";
t["reportPage.content.firstAppStep3Title"] = "Hatua ya 3: Angalia Ikijengwa";
t["reportPage.content.firstAppStep3Text"] = "AI itazalisha programu yako kwa wakati halisi. Utaona faili zikiundwa na hakiki hai ikisasishwa msimbo unapoandikwa.";
t["reportPage.content.firstAppStep4Title"] = "Hatua ya 4: Fanya Mabadiliko";
t["reportPage.content.firstAppStep4Text"] = "Jaribu kuuliza: \"Ongeza kubadilisha hali ya giza\" au \"Fanya kazi zilizokamilishwa zipigiwe mstari\" kuona jinsi AI inavyoweza kurudia programu yako.";

// === REPORT PAGE - Databases ===
t["reportPage.content.databasesTitle"] = "Kujenga na Hifadhidata";
t["reportPage.content.databasesIntro"] = "Jifunze jinsi ya kuongeza uhifadhi wa data unaoendelea kwenye programu zako za AppNode.";
t["reportPage.content.databasesAvailable"] = "Hifadhidata Zinazopatikana";
t["reportPage.content.databasesSqlite"] = "SQLite";
t["reportPage.content.databasesSqliteDesc"] = "Hifadhidata rahisi ya faili. Nzuri kwa programu ndogo.";
t["reportPage.content.databasesPostgres"] = "PostgreSQL";
t["reportPage.content.databasesPostgresDesc"] = "Hifadhidata kamili ya uhusiano kwa data ngumu.";
t["reportPage.content.databasesMongo"] = "MongoDB";
t["reportPage.content.databasesMongoDesc"] = "Hifadhidata ya nyaraka kwa miundo inayonyumbulika.";
t["reportPage.content.databasesRedis"] = "Redis";
t["reportPage.content.databasesRedisDesc"] = "Hifadhi ya kumbukumbu kwa akiba na vikao.";
t["reportPage.content.databasesAdding"] = "Kuongeza Hifadhidata";
t["reportPage.content.databasesAddingText"] = "Elezea tu mahitaji yako ya data: \"Nahitaji kuhifadhi watumiaji wenye jina, barua pepe, na picha ya wasifu\" na AI itasanidi hifadhidata.";

// === REPORT PAGE - Deploying ===
t["reportPage.content.deployingTitle"] = "Kusambaza Programu Yako";
t["reportPage.content.deployingIntro"] = "Fanya programu yako kuwa hai kwa kubofya moja. AppNode inashughulikia uhifadhi, SSL, na kuongeza kiwango kiotomatiki.";
t["reportPage.content.deployingSteps"] = "Hatua za Usambazaji";
t["reportPage.content.deployingStep1"] = "Bofya Sambaza";
t["reportPage.content.deployingStep1Text"] = "Bonyeza kitufe cha Sambaza katika nafasi yako ya kazi";
t["reportPage.content.deployingStep2"] = "Chagua Kikoa";
t["reportPage.content.deployingStep2Text"] = "Tumia kikoa kidogo chetu cha bure au unganisha chako";
t["reportPage.content.deployingStep3"] = "Nenda Hai";
t["reportPage.content.deployingStep3Text"] = "Programu yako inasambazwa kwa sekunde na SSL imejumuishwa";
t["reportPage.content.deployingCustom"] = "Vikoa Maalum";
t["reportPage.content.deployingCustomText"] = "Unganisha kikoa chako kwa kuongeza rekodi ya CNAME inayoelekeza AppNode. Vyeti vya SSL vinatolewa kiotomatiki.";

// === REPORT PAGE - Teams ===
t["reportPage.content.teamsTitle"] = "Muhtasari wa Timu";
t["reportPage.content.teamsIntro"] = "Shirikiana na timu yako kwenye AppNode. Shiriki miradi, simamia ruhusa, na ujenga pamoja kwa wakati halisi.";
t["reportPage.content.teamsFeatures"] = "Vipengele vya Timu";
t["reportPage.content.teamsShared"] = "Miradi Iliyoshirikiwa";
t["reportPage.content.teamsSharedDesc"] = "Wanachama wote wa timu wanaweza kufikia na kuchangia miradi";
t["reportPage.content.teamsRealtimeDesc"] = "Angalia mabadiliko kutoka kwa wenzako papo hapo";
t["reportPage.content.teamsRole"] = "Ufikiaji Kulingana na Jukumu";
t["reportPage.content.teamsRoleDesc"] = "Dhibiti ni nani anayeweza kutazama, kuhariri, au kusambaza";
t["reportPage.content.teamsBilling"] = "Bili za Timu";
t["reportPage.content.teamsBillingDesc"] = "Bili zilizounganishwa kwa shirika lako";
t["reportPage.content.teamsGettingStarted"] = "Kuanza na Timu";
t["reportPage.content.teamsStep1"] = "Unda timu kutoka mipangilio ya dashibodi yako";
t["reportPage.content.teamsStep2"] = "Alika wanachama wa timu kupitia barua pepe";
t["reportPage.content.teamsStep3"] = "Weka ruhusa kwa kila mwanachama";
t["reportPage.content.teamsStep4"] = "Anza kushirikiana kwenye miradi";

// === REPORT PAGE - Enterprise ===
t["reportPage.content.enterpriseTitle"] = "Vipengele vya Biashara";
t["reportPage.content.enterpriseIntro"] = "Vipengele vya hali ya juu kwa mashirika makubwa yenye mahitaji magumu.";
t["reportPage.content.enterpriseBenefits"] = "Faida za Biashara";
t["reportPage.content.enterpriseSSO"] = "Ujumuishaji wa SSO";
t["reportPage.content.enterpriseSSODesc"] = "Unganisha na mtoa huduma wako wa utambulisho (Okta, Azure AD, n.k.)";
t["reportPage.content.enterpriseAudit"] = "Kumbukumbu za Ukaguzi";
t["reportPage.content.enterpriseAuditDesc"] = "Fuatilia vitendo vyote katika shirika lako";
t["reportPage.content.enterpriseContracts"] = "Mikataba Maalum";
t["reportPage.content.enterpriseContractsDesc"] = "Makubaliano na SLA zilizobinafsishwa";
t["reportPage.content.enterpriseSupport"] = "Msaada Maalum";
t["reportPage.content.enterpriseSupportDesc"] = "Msaada wa kipaumbele na msimamizi maalum wa akaunti";
t["reportPage.content.enterpriseCloud"] = "Wingu la Faragha";
t["reportPage.content.enterpriseCloudDesc"] = "Endesha AppNode kwenye miundombinu yako mwenyewe";
t["reportPage.content.enterpriseContact"] = "Wasiliana na contact@appnode.ai kwa kujifunza zaidi.";

// === REPORT PAGE - Collaboration ===
t["reportPage.content.collaborationTitle"] = "Ushirikiano";
t["reportPage.content.collaborationIntro"] = "Fanya kazi pamoja kwa urahisi na vipengele vya ushirikiano wa wakati halisi.";
t["reportPage.content.collaborationRealtime"] = "Vipengele vya Wakati Halisi";
t["reportPage.content.collaborationItem1"] = "Angalia vishale vya wenzako kwenye kihariri";
t["reportPage.content.collaborationItem2"] = "Mabadiliko ya msimbo hai yanasawazishwa papo hapo";
t["reportPage.content.collaborationItem3"] = "Maoni na majadiliano yaliyojengwa ndani";
t["reportPage.content.collaborationItem4"] = "Mtiririko wa shughuli unaonyesha mabadiliko ya hivi karibuni";
t["reportPage.content.collaborationComm"] = "Mawasiliano";
t["reportPage.content.collaborationCommText"] = "Tumia mazungumzo yaliyojengwa ndani au unganisha nafasi yako ya kazi ya Slack kwa mawasiliano yasiyopingana ya timu.";

// === REPORT PAGE - Changelog & Roadmap ===
t["reportPage.content.changelogText"] = "Tunafanya kazi kwenye kitu cha kusisimua. Rudi hivi karibuni kwa masasisho kuhusu vipengele na uboreshaji wa hivi karibuni.";
t["reportPage.content.roadmapTitle"] = "Ramani ya Njia";
t["reportPage.content.roadmapIntro"] = "Angalia tunachofanya kazi na kinachokuja.";
t["reportPage.content.roadmapInProgress"] = "Inaendelea";
t["reportPage.content.roadmapItem1"] = "Hakiki ya programu ya simu";
t["reportPage.content.roadmapItem2"] = "Modeli za AI zilizoimarishwa";
t["reportPage.content.roadmapItem3"] = "Soko la programu-jalizi";
t["reportPage.content.roadmapPlanned"] = "Imepangwa";
t["reportPage.content.roadmapItem4"] = "Mjenzi asili wa programu za simu";
t["reportPage.content.roadmapItem5"] = "Soko la API";
t["reportPage.content.roadmapItem6"] = "Dashibodi ya hali ya juu ya uchambuzi";

// Apply
for (const [pathStr, value] of Object.entries(t)) {
  setByPath(sw, pathStr, value);
}

fs.writeFileSync(
  path.join(__dirname, 'src/translations/sw.json'),
  JSON.stringify(sw, null, 2) + '\n'
);

console.log('Phase 8 done! Applied', Object.keys(t).length, 'translations');
