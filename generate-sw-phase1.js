const fs = require('fs');
const path = require('path');

const en = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/translations/en.json'), 'utf8'));
const sw = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/translations/sw.json'), 'utf8'));

function deepClone(obj) { return JSON.parse(JSON.stringify(obj)); }

function setByPath(obj, pathStr, value) {
  const keys = pathStr.split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) current[keys[i]] = {};
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
}

// Start with English as base, then overlay existing Swahili translations
const result = deepClone(en);

function applyExistingTranslations(target, source, enRef, pathStr) {
  if (!source || typeof source !== 'object') return;
  for (const key of Object.keys(source)) {
    const fullPath = pathStr ? pathStr + '.' + key : key;
    if (Array.isArray(source[key])) {
      // For arrays, check if different from English
      if (JSON.stringify(source[key]) !== JSON.stringify(enRef?.[key])) {
        setByPath(target, fullPath, source[key]);
      }
    } else if (typeof source[key] === 'object' && source[key] !== null) {
      applyExistingTranslations(target, source[key], enRef?.[key], fullPath);
    } else {
      // Only apply if different from English
      if (source[key] !== enRef?.[key]) {
        setByPath(target, fullPath, source[key]);
      }
    }
  }
}

applyExistingTranslations(result, sw, en, '');

// Now apply comprehensive Swahili translations for ALL untranslated strings
const t = {};

// === COMMON ===
t["common.switchToLightMode"] = "Badilisha hali ya mwanga";
t["common.switchToDarkMode"] = "Badilisha hali ya giza";
t["common.addAttachments"] = "Ongeza viambatisho";
t["common.addImage"] = "Ongeza picha";
t["common.moveMouseToExplore"] = "Sogeza kipanya chako kuchunguza";

// === HOMEPAGE VIDEO SECTION ===
t["homePage.videoSection.badge"] = "Jinsi Inavyofanya Kazi";
t["homePage.videoSection.title"] = "Tazama AppNode Ikifanya Kazi";
t["homePage.videoSection.subtitle"] = "Tazama jinsi waendelezaji wanavyojenga programu zilizo tayari kwa uzalishaji kwa dakika kwa kutumia lugha ya kawaida.";

// === FEATURES ===
t["features.subtitle"] = "AppNode hutoa zana na vipengele vyote unavyohitaji kuunda programu zenye nguvu bila kuandika msimbo.";
t["features.aiPowered.description"] = "Elezea wazo lako kwa lugha ya kawaida na utazame AI ikijenga programu yako kwa wakati halisi.";
t["features.visualBuilder.description"] = "Buruta na udondoshe vipengele, binafsisha mpangilio, na ubuni miingiliano nzuri bila msimbo.";
t["features.instantDeploy.description"] = "Sambaza programu zako kwa kubofya moja. Hakuna usanidi wa seva unaohitajika.";
t["features.database.description"] = "Ujumuishaji wenye nguvu wa hifadhidata na uzalishaji wa schema kiotomatiki na usawazishaji wa wakati halisi.";
t["features.auth.description"] = "Uthibitishaji salama wa mtumiaji tayari. Msaada kwa kuingia kwa mitandao ya kijamii na SSO.";
t["features.api.title"] = "Ujumuishaji wa API";
t["features.api.description"] = "Unganisha na API yoyote kwa kiunganishi chetu cha kuona. Agiza vipimo vya OpenAPI papo hapo.";
t["features.responsive.description"] = "Programu zako zinaonekana vizuri kwenye kifaa chochote. Mpangilio unaojibika kiotomatiki na hakiki.";
t["features.collaboration.description"] = "Fanya kazi pamoja na timu yako kwa wakati halisi. Ona mabadiliko yanapotokea.";

// === BUILD ANYTHING ===
t["buildAnything.webApps.description"] = "Programu kamili za wavuti zenye uthibitishaji, hifadhidata, na API.";
t["buildAnything.mobileApps.description"] = "Uzoefu wa asili wa simu kwa iOS na Android kutoka kwa msimbo mmoja.";
t["buildAnything.dashboards.description"] = "Taswira ya data na dashibodi za uchambuzi zenye masasisho ya wakati halisi.";
t["buildAnything.ecommerce.description"] = "Maduka ya mtandaoni yenye malipo, hesabu ya bidhaa, na usimamizi wa maagizo.";
t["buildAnything.internal.description"] = "Paneli maalum za utawala, CRM, na zana za otomatiki za mtiririko wa kazi.";
t["buildAnything.marketplace.description"] = "Majukwaa ya pande mbili yanayounganisha wanunuzi na wauzaji.";
t["buildAnything.categories.saasplatform"] = "Jukwaa la SaaS";
t["buildAnything.categories.gamingportal"] = "Lango la Michezo";
t["buildAnything.categories.mapsnavigation"] = "Ramani na Urambazaji";
t["buildAnything.categories.fashionstore"] = "Duka la Mitindo";
t["buildAnything.categories.stylecollection"] = "Mkusanyiko wa Mtindo";
t["buildAnything.categories.beautyproducts"] = "Bidhaa za Urembo";
t["buildAnything.categories.fitnesstracker"] = "Kifuatiliaji cha Mazoezi";
t["buildAnything.categories.luxuryfragrance"] = "Manukato ya Anasa";
t["buildAnything.categories.beautystore"] = "Duka la Urembo";
t["buildAnything.categories.streamingplatform"] = "Jukwaa la Utiririshaji";
t["buildAnything.categories.gaminggearstore"] = "Duka la Vifaa vya Michezo";
t["buildAnything.categories.gamingstore"] = "Duka la Michezo";
t["buildAnything.categories.synthesizer"] = "Synthesizer";
t["buildAnything.categories.projectroadmap"] = "Ramani ya Mradi";
t["buildAnything.categories.analyticsdashboard"] = "Dashibodi ya Uchambuzi";

// === TESTIMONIALS ===
t["testimonials.subtitle"] = "Jiunge na maelfu ya waendelezaji, wabunifu, na wajasiriamali wanaojenga na AppNode.";
t["testimonials.quote1"] = "AppNode ilibadilisha kabisa jinsi tunavyotengeneza mfano. Kilichokuwa kinachukua wiki sasa kinachukua masaa.";
t["testimonials.role1"] = "Meneja wa Bidhaa katika TechCorp";
t["testimonials.quote2"] = "Nilijenga MVP nzima ya kampuni yangu kwa kutumia AppNode. AI inaelewa hasa ninachohitaji.";
t["testimonials.role2"] = "Mwanzilishi wa StartupX";
t["testimonials.quote3"] = "Kama mbunifu, sasa naweza kuleta miundo yangu hai bila kusubiri waendelezaji.";
t["testimonials.role3"] = "Mbunifu Mkuu katika DesignStudio";

// === CTA ===
t["cta.subtitle"] = "Anza kuunda programu yako leo. Hakuna kadi ya mkopo inayohitajika.";
t["cta.description"] = "Jiunge na maelfu ya wabunifu ambao tayari wanajenga mustakabali na AppNode. Anza bure, hakuna kadi ya mkopo inayohitajika.";
t["cta.successMessage"] = "Angalia barua pepe yako kuanza!";
t["cta.newFeatures"] = "Mitindo Mahiri na Mpangilio Otomatiki";
t["cta.trustedBy"] = "Inaaminika na timu katika";

// === FOOTER ===
t["footer.documentation"] = "Nyaraka";

// === PRODUCTS ===
t["products.subtitle"] = "Zana zenye nguvu za kujenga, kusambaza, na kupanua programu zako";
t["products.agent.description"] = "AI ya akili inayoelewa mahitaji yako na kujenga programu kiotomatiki.";
t["products.agent.tagline"] = "Jenga kwa lugha ya kawaida";
t["products.database.description"] = "Hifadhidata salama inayopanuka yenye usawazishaji wa wakati halisi na nakala rudufu kiotomatiki.";
t["products.database.tagline"] = "Data yako, ikisimamiwa";
t["products.design.description"] = "Zana za muundo wa kuona kuunda miingiliano ya kupendeza bila msimbo.";
t["products.design.tagline"] = "Buni kwa uzuri";
t["products.integrations.description"] = "Unganisha na huduma na API elfu kwa viunganishi vilivyojengwa tayari.";
t["products.integrations.tagline"] = "Unganisha kila kitu";
t["products.mobile.description"] = "Jenga programu za asili za simu kwa iOS na Android kutoka kwa mradi mmoja.";
t["products.mobile.tagline"] = "Nenda simu";
t["products.publish.description"] = "Usambazaji wa kubofya moja kwa vikoa maalum na SSL na CDN ikijumuishwa.";
t["products.publish.tagline"] = "Tuma haraka";
t["products.security.description"] = "Usalama wa kiwango cha biashara na utiifu wa SOC 2 na msaada wa SSO.";
t["products.security.tagline"] = "Kaa salama";

// === PRODUCT AGENT ===
t["productAgent.title"] = "Kutana na AppNode";
t["productAgent.subtitle"] = "Mwenza wako wa kuandika msimbo wa AI anayeandika msimbo ulio tayari kwa uzalishaji, anauboresha unapobadilisha, na anakaa pembeni unapojenga. Elezea unachotaka, na Agent atakuletea.";
t["productAgent.startBuilding"] = "Anza Kujenga Bure";
t["productAgent.howItWorks"] = "Jinsi Agent Inavyofanya Kazi";
t["productAgent.demo.you"] = "Wewe";
t["productAgent.demo.prompt"] = "Unda dashibodi yenye uchambuzi wa watumiaji, chati, na data ya wakati halisi";
t["productAgent.demo.response"] = "Nitaunda dashibodi kamili ya uchambuzi kwako...";
t["productAgent.demo.writing"] = "Agent inaandika msimbo...";
t["productAgent.demo.creating"] = "Inaunda vipengele, inasanidi upakuaji wa data...";
t["productAgent.step1.title"] = "Elezea Maono Yako";
t["productAgent.step1.description"] = "Mwambie Agent unachotaka kujenga kwa Kiswahili rahisi. Hakuna haja ya istilahi za kiufundi - elezea tu programu yako kama unavyomwambia mwenzako.";
t["productAgent.step2.title"] = "Tazama Ikijenga";
t["productAgent.step2.description"] = "Agent inaandika msimbo ulio tayari kwa uzalishaji kwa wakati halisi. Ona faili zikiundwa, vipengele vikipangwa, na programu yako ikichukua umbo.";
t["productAgent.step3.title"] = "Rudia na Boresha";
t["productAgent.step3.description"] = "Si sahihi kabisa? Mwambie tu Agent nini cha kubadilisha. Inaelewa muktadha na kufanya marekebisho mahiri huku ikihifadhi kinachofanya kazi.";
t["productAgent.autonomous.title"] = "Ujenzi wa Muda Mrefu wa Kiotomatiki";
t["productAgent.autonomous.description"] = "Agent haiandiki vipande tu - inaweza kujenga programu nzima kiotomatiki. Sanidi muundo mgumu wa mradi, tekeleza vipengele katika faili nyingi, na ushughulikie utegemezi kiotomatiki.";
t["productAgent.autonomous.item1"] = "Programu za full-stack";
t["productAgent.autonomous.item2"] = "Urekebishaji wa faili nyingi";
t["productAgent.autonomous.item3"] = "Uzalishaji wa majaribio";
t["productAgent.autonomous.item4"] = "Uandishi wa nyaraka";
t["productAgent.autonomous.item5"] = "Kurekebisha hitilafu na utatuzi";
t["productAgent.stats.filesCreated"] = "Faili zilizoundwa";
t["productAgent.stats.linesOfCode"] = "Mistari ya msimbo";
t["productAgent.stats.buildTime"] = "Muda wa ujenzi";
t["productAgent.cta.title"] = "Uko tayari kujenga na AI?";
t["productAgent.cta.subtitle"] = "Anza kujenga mradi wako ujao na AppNode Agent leo. Bure kuanza, hakuna kadi ya mkopo inayohitajika.";

// === PRODUCT DATABASE ===
t["productDatabase.badge"] = "Usimamizi wa Data";
t["productDatabase.title"] = "Iliyojengwa Ndani";
t["productDatabase.titleHighlight"] = "Hifadhidata";
t["productDatabase.subtitle"] = "Hifadhi na usimamie data yako bila usanidi wowote. AppNode hutoa hifadhidata yenye nguvu, inayopanuka tayari tangu siku ya kwanza.";
t["productDatabase.getStarted"] = "Anza Bure";
t["productDatabase.readDocs"] = "Soma Nyaraka";
t["productDatabase.stats.uptime"] = "SLA ya Upatikanaji";
t["productDatabase.stats.latency"] = "Ucheleweshaji wa hoja";
t["productDatabase.stats.scalability"] = "Upanuzi";
t["productDatabase.stats.configuration"] = "Usanidi";
t["productDatabase.cta.title"] = "Anza kuhifadhi data leo";
t["productDatabase.cta.subtitle"] = "Jenga programu zinazoendeshwa na data bila maumivu ya miundombinu.";

// === PRODUCT DESIGN ===
t["productDesign.badge"] = "Maendeleo ya Kuona";
t["productDesign.title"] = "Buni kwa";
t["productDesign.titleHighlight"] = "Usahihi";
t["productDesign.subtitle"] = "Vidhibiti vya kina ili programu yako ilingane na maono yako. Agiza miundo yako au jumuisha mfumo wako wa muundo, rekebisha katika kihariri cha kuona cha moja kwa moja, na utume mara moja.";
t["productDesign.tryDesignTools"] = "Jaribu Zana za Muundo";
t["productDesign.visualEditor"] = "Kihariri cha Kuona";
t["productDesign.components"] = "Vipengele";
t["productDesign.properties"] = "Sifa";
t["productDesign.width"] = "Upana";
t["productDesign.background"] = "Mandhari";
t["productDesign.borderRadius"] = "Radius ya Mpaka";
t["productDesign.featuresTitle"] = "Vipengele vya Muundo";
t["productDesign.startDesigning"] = "Anza Kubuni";
t["productDesign.features.liveEditor.title"] = "Kihariri cha Kuona cha Moja kwa Moja";
t["productDesign.features.liveEditor.description"] = "Hariri vipengele kwa kuona na hakiki ya wakati halisi. Unachokiona ndicho hasa watumiaji wanapata.";
t["productDesign.features.designSystem.title"] = "Uagizaji wa Mfumo wa Muundo";
t["productDesign.features.designSystem.description"] = "Agiza miundo yako iliyopo ya Figma au miongozo ya chapa na uitumie mara moja.";
t["productDesign.features.componentLibrary.title"] = "Maktaba ya Vipengele";
t["productDesign.features.componentLibrary.description"] = "Fikia maktaba tajiri ya vipengele vilivyojengwa tayari, vinavyobinafsishika vinavyofuata mazoea bora.";
t["productDesign.features.responsive.title"] = "Vidhibiti vya Kujibika";
t["productDesign.features.responsive.description"] = "Buni kwa ukubwa wote wa skrini na vidhibiti vya sehemu za kuvunja na hakiki ya simu.";
t["productDesign.features.pixelPerfect.title"] = "Uhariri Sahihi wa Pikseli";
t["productDesign.features.pixelPerfect.description"] = "Rekebisha nafasi, maandishi, na rangi kwa vidhibiti vya usahihi.";
t["productDesign.features.instantDeploy.title"] = "Sambaza Papo Hapo";
t["productDesign.features.instantDeploy.description"] = "Tuma miundo yako mara moja. Hakuna hatua za ujenzi, hakuna usanidi wa usambazaji unaohitajika.";
t["productDesign.cta.title"] = "Buni programu nzuri haraka zaidi";
t["productDesign.cta.subtitle"] = "Geuza maono yako ya muundo kuwa ukweli na zana zenye nguvu za kuona za AppNode.";

// === PRODUCT INTEGRATIONS ===
t["productIntegrations.badge"] = "Unganisha Kila Kitu";
t["productIntegrations.title"] = "Zenye Nguvu";
t["productIntegrations.titleHighlight"] = "Ujumuishaji";
t["productIntegrations.subtitle"] = "Unganisha na zana na huduma zako unazopenda bila usanidi wowote. Ujumuishaji wa AppNode unaunganishwa kwa usafi na usalama.";
t["productIntegrations.browseAll"] = "Vinjari Ujumuishaji Wote";
t["productIntegrations.popularIntegrations"] = "Ujumuishaji Maarufu";
t["productIntegrations.getStarted"] = "Anza Bure";
t["productIntegrations.categories.ai"] = "AI";
t["productIntegrations.categories.payments"] = "Malipo";
t["productIntegrations.categories.communication"] = "Mawasiliano";
t["productIntegrations.categories.email"] = "Barua Pepe";
t["productIntegrations.categories.cdn"] = "CDN";
t["productIntegrations.categories.versionControl"] = "Udhibiti wa Toleo";
t["productIntegrations.categories.cloud"] = "Wingu";
t["productIntegrations.categories.deployment"] = "Usambazaji";
t["productIntegrations.categories.database"] = "Hifadhidata";
t["productIntegrations.integrations.openai"] = "GPT-4, DALL-E, na zaidi";
t["productIntegrations.integrations.stripe"] = "Pokea malipo duniani kote";
t["productIntegrations.integrations.twilio"] = "SMS, sauti, na video";
t["productIntegrations.integrations.sendgrid"] = "Barua pepe za miamala";
t["productIntegrations.integrations.cloudflare"] = "Kompyuta ya ukingo na CDN";
t["productIntegrations.integrations.github"] = "Uhifadhi wa msimbo na CI/CD";
t["productIntegrations.integrations.slack"] = "Ujumbe wa timu";
t["productIntegrations.integrations.googleCloud"] = "Miundombinu ya wingu";
t["productIntegrations.integrations.aws"] = "Huduma za Wavuti za Amazon";
t["productIntegrations.integrations.anthropic"] = "Msaidizi wa AI Claude";
t["productIntegrations.integrations.vercel"] = "Usambazaji wa frontend";
t["productIntegrations.integrations.supabase"] = "Backend kama huduma";
t["productIntegrations.howItWorks.title"] = "Jinsi Ujumuishaji Unavyofanya Kazi";
t["productIntegrations.howItWorks.step1.title"] = "Chagua Ujumuishaji";
t["productIntegrations.howItWorks.step1.description"] = "Vinjari katalogi yetu na ubofye kuwezesha ujumuishaji wowote unaohitaji.";
t["productIntegrations.howItWorks.step2.title"] = "Idhinisha Mara Moja";
t["productIntegrations.howItWorks.step2.description"] = "Unganisha akaunti yako kwa usalama na OAuth. Stakabadhi zako zinabaki salama.";
t["productIntegrations.howItWorks.step3.title"] = "Anza Kutumia";
t["productIntegrations.howItWorks.step3.description"] = "Ujumuishaji uko tayari kutumika kwenye msimbo wako mara moja.";
t["productIntegrations.cta.title"] = "Unganisha zana zako leo";
t["productIntegrations.cta.subtitle"] = "Jenga programu zenye nguvu zinazojumuisha na huduma unazotumia tayari.";

// === PRODUCT MOBILE ===
t["productMobile.badge"] = "Jenga Popote";
t["productMobile.title"] = "AppNode kwa";
t["productMobile.titleHighlight"] = "Simu";
t["productMobile.subtitle"] = "Jenga, hariri, na sambaza programu zako kutoka popote. Nguvu kamili ya AppNode mfukoni mwako, iliyoboreshwa kwa iOS na Android.";
t["productMobile.appStore"] = "App Store";
t["productMobile.playStore"] = "Play Store";
t["productMobile.live"] = "Hai";
t["productMobile.run"] = "Endesha";
t["productMobile.deploy"] = "Sambaza";
t["productMobile.output"] = "Matokeo";
t["productMobile.featuresTitle"] = "Nguvu Kamili, Popote";
t["productMobile.downloadIOS"] = "Pakua kwa iOS";
t["productMobile.downloadAndroid"] = "Pakua kwa Android";
t["productMobile.features.codeEditor.title"] = "Kihariri Kamili cha Msimbo";
t["productMobile.features.codeEditor.description"] = "Kihariri kamili cha msimbo chenye uangazaji wa sintaksia, kukamilisha kiotomatiki, na msaada wa faili nyingi.";
t["productMobile.features.oneTapDeploy.title"] = "Sambaza kwa Kubofya Moja";
t["productMobile.features.oneTapDeploy.description"] = "Sambaza mabadiliko yako mara moja kutoka kwa simu yako. Tazama programu yako ikienda hai kwa sekunde.";
t["productMobile.features.realTimeSync.title"] = "Usawazishaji wa Wakati Halisi";
t["productMobile.features.realTimeSync.description"] = "Miradi yako inasawazishwa kwenye vifaa vyote. Anza kwenye kompyuta, endelea kwenye simu.";
t["productMobile.features.aiAssistant.title"] = "Msaidizi wa AI";
t["productMobile.features.aiAssistant.description"] = "Pata msaada wa AI kuandika msimbo, hata kwenye simu. Ingizo la sauti linaungwa mkono.";
t["productMobile.features.liveAnalytics.title"] = "Uchambuzi wa Moja kwa Moja";
t["productMobile.features.liveAnalytics.description"] = "Fuatilia utendaji wa programu yako, hitilafu, na vipimo vya watumiaji popote.";
t["productMobile.features.teamCollaboration.title"] = "Ushirikiano wa Timu";
t["productMobile.features.teamCollaboration.description"] = "Kagua PR, toa maoni kuhusu msimbo, na ushirikiane na timu yako kutoka popote.";
t["productMobile.cta.title"] = "Andika msimbo kutoka popote";
t["productMobile.cta.subtitle"] = "Pakua AppNode ya simu na upeleke mtiririko wako wa maendeleo popote uendapo.";

// === PRODUCT PUBLISH ===
t["productPublish.badge"] = "Usambazaji";
t["productPublish.title"] = "Papo Hapo";
t["productPublish.titleHighlight"] = "Chapisha";
t["productPublish.subtitle"] = "Sambaza programu zako kwa kubofya moja. Pata kikoa maalum, vyeti vya SSL, na CDN ya kimataifa kiotomatiki.";
t["productPublish.deployNow"] = "Sambaza Sasa";
t["productPublish.featuresTitle"] = "Kila Kitu Unachohitaji Kutuma";
t["productPublish.startDeploying"] = "Anza Kusambaza";
t["productPublish.features.oneClick.title"] = "Sambaza kwa Kubofya Moja";
t["productPublish.features.oneClick.description"] = "Sambaza moja kwa moja kutoka kwa kihariri chako.";
t["productPublish.features.customDomains.title"] = "Vikoa Maalum";
t["productPublish.features.customDomains.description"] = "Unganisha kikoa chako au tumia kikoa chetu kidogo.";
t["productPublish.features.ssl.title"] = "SSL ya Kiotomatiki";
t["productPublish.features.ssl.description"] = "Kila usambazaji unapata cheti cha SSL bure.";
t["productPublish.features.cdn.title"] = "CDN ya Kimataifa";
t["productPublish.features.cdn.description"] = "Programu yako inahudumiwa kutoka maeneo 34+ ya ukingo.";
t["productPublish.features.analytics.title"] = "Uchambuzi Uliojengwa Ndani";
t["productPublish.features.analytics.description"] = "Fuatilia wageni na vipimo vya utendaji.";
t["productPublish.features.rollbacks.title"] = "Kurudisha Papo Hapo";
t["productPublish.features.rollbacks.description"] = "Rudi kwenye usambazaji wowote uliopita.";
t["productPublish.cta.title"] = "Tuma programu yako leo";
t["productPublish.cta.subtitle"] = "Toka kwenye wazo hadi uzalishaji kwa dakika, si siku.";

// === PRODUCT SECURITY ===
t["productSecurity.badge"] = "Usalama wa Biashara";
t["productSecurity.titleHighlight"] = "Kwanza";
t["productSecurity.subtitle"] = "Jenga kwa ujasiri. AppNode hutoa usalama wa kiwango cha biashara, ukaguzi kabla ya usambazaji, na chaguo-msingi salama kulinda programu zako.";
t["productSecurity.enterpriseSolutions"] = "Suluhisho za Biashara";
t["productSecurity.securityReport"] = "Ripoti ya Usalama";
t["productSecurity.featuresTitle"] = "Vipengele vya Usalama";
t["productSecurity.badges.soc2"] = "SOC 2 Aina II";
t["productSecurity.badges.gdpr"] = "Inafuata GDPR";
t["productSecurity.badges.iso"] = "ISO 27001";
t["productSecurity.badges.hipaa"] = "HIPAA Tayari";
t["productSecurity.features.sso.title"] = "SSO na SAML";
t["productSecurity.features.sso.description"] = "Jumuisha na mtoa huduma wako wa utambulisho uliopo. Msaada kwa SAML, OIDC, na watoa huduma wote wakuu wa SSO.";
t["productSecurity.features.sso.item1"] = "Msaada wa SAML 2.0";
t["productSecurity.features.sso.item2"] = "Utoaji wa wakati unaofaa";
t["productSecurity.features.sso.item3"] = "Uthibitishaji wa mambo mengi";
t["productSecurity.features.scanning.title"] = "Ukaguzi Kabla ya Usambazaji";
t["productSecurity.features.scanning.description"] = "Kila usambazaji unakaguliwa kiotomatiki kwa udhaifu, siri, na masuala ya usalama.";
t["productSecurity.features.scanning.item1"] = "Ukaguzi wa udhaifu wa utegemezi";
t["productSecurity.features.scanning.item2"] = "Ugundaji wa siri";
t["productSecurity.features.scanning.item3"] = "Ukaguzi wa utiifu wa OWASP";
t["productSecurity.features.encryption.title"] = "Usimbaji wa Data";
t["productSecurity.features.encryption.description"] = "Data yote imesimbwa wakati wa kupumzika na wakati wa kusafiri kwa kutumia itifaki za usimbaji za kiwango cha tasnia.";
t["productSecurity.features.encryption.item1"] = "Usimbaji wa AES-256 wakati wa kupumzika";
t["productSecurity.features.encryption.item2"] = "TLS 1.3 wakati wa kusafiri";
t["productSecurity.features.encryption.item3"] = "Funguo zinazosimamiwa na mteja zinapatikana";
t["productSecurity.features.auditLogs.title"] = "Kumbukumbu za Ukaguzi";
t["productSecurity.features.auditLogs.description"] = "Uwazi kamili wa vitendo vyote vilivyochukuliwa kwenye akaunti yako na kumbukumbu za ukaguzi za kina.";
t["productSecurity.features.auditLogs.item1"] = "Uhifadhi wa kumbukumbu wa siku 90";
t["productSecurity.features.auditLogs.item2"] = "Hamisha kwa SIEM";
t["productSecurity.features.auditLogs.item3"] = "Tahadhari za wakati halisi";
t["productSecurity.cta.title"] = "Unahitaji usalama wa biashara?";
t["productSecurity.cta.subtitle"] = "Ongea na timu yetu kuhusu mahitaji maalum ya usalama na utiifu.";

// === SOLUTIONS ===
t["solutions.subtitle"] = "Suluhisho maalum kwa kila tasnia na matumizi";
t["solutions.startup.title"] = "Kwa Makampuni Mapya";
t["solutions.startup.description"] = "Songa haraka na ujenzi MVP yako kwa siku, si miezi.";
t["solutions.enterprise.title"] = "Kwa Biashara";
t["solutions.enterprise.description"] = "Panua kwa usalama na utiifu, SSO, na msaada maalum.";
t["solutions.agencies.title"] = "Kwa Mashirika";
t["solutions.agencies.description"] = "Toa miradi ya wateja haraka zaidi na suluhisho za chapa nyeupe.";

// === USE CASES ===
t["useCases.subtitle"] = "Ona jinsi timu zinavyotumia AppNode";
t["useCases.rapidPrototyping.title"] = "Utengenezaji wa Haraka wa Mfano";
t["useCases.rapidPrototyping.description"] = "Thibitisha mawazo haraka na mifano inayofanya kazi kwa masaa.";
t["useCases.businessApps.title"] = "Programu za Biashara";
t["useCases.businessApps.description"] = "Jenga CRM maalum, ERP, na zana za otomatiki za mtiririko wa kazi.";
t["useCases.mobileApps.title"] = "Programu za Simu";
t["useCases.mobileApps.description"] = "Unda uzoefu wa asili wa simu bila utaalamu wa maendeleo ya simu.";

// === PRICING ===
t["pricing.title"] = "Bei Rahisi ya Mikopo";
t["pricing.subtitle"] = "Lipa tu kwa unachotumia. Hakuna usajili, hakuna ada zilizofichwa.";
t["pricing.creditInfo"] = "Mkopo 1 = uzalishaji 1";
t["pricing.freeTier.title"] = "Kiwango cha Bure";
t["pricing.freeTier.subtitle"] = "Anza bila kadi ya mkopo";
t["pricing.buyCredits"] = "Nunua Mikopo";
t["pricing.mostPopular"] = "Maarufu Zaidi";
t["pricing.credits"] = "Mikopo";
t["pricing.perCredit"] = "kwa mkopo";
t["pricing.buyNow"] = "Nunua Sasa";
t["pricing.faq.title"] = "Maswali Yanayoulizwa Mara kwa Mara";
t["pricing.faq.subtitle"] = "Kila kitu unachohitaji kujua kuhusu bei yetu";
t["pricing.faq.q1"] = "Ninaweza kufanya nini na mikopo?";
t["pricing.faq.a1"] = "Kila mkopo hukuruhusu kuzalisha programu moja kamili. Unaweza kutumia mikopo kuunda programu za wavuti, programu za simu, kurasa za kutua, na zaidi kwa kutumia mjenzi wetu unaotumia AI.";
t["pricing.faq.q2"] = "Je, mikopo inaisha muda?";
t["pricing.faq.a2"] = "Hapana! Mikopo yako uliyonunua haiishi kamwe. Itumie wakati wowote unapotaka, kwa kasi yako mwenyewe.";
t["pricing.faq.q3"] = "Ninaweza kupata urejesho?";
t["pricing.faq.a3"] = "Ndiyo, tunatoa dhamana ya pesa kurudishwa ndani ya siku 30 kwa mikopo ambayo haijatumika. Wasiliana na timu yetu ya msaada kwa msaada.";
t["pricing.faq.q4"] = "Njia gani za malipo mnazokubali?";
t["pricing.faq.a4"] = "Tunakubali kadi zote kuu za mkopo (Visa, Mastercard, American Express) na PayPal.";
t["pricing.faq.q5"] = "Kiwango cha bure kinafanyaje kazi?";
t["pricing.faq.a5"] = "Kila mtumiaji mpya anapata uzalishaji 2 bure kujaribu AppNode. Hakuna kadi ya mkopo inayohitajika kuanza!";
t["pricing.readyToStart"] = "Uko tayari kuanza?";
t["pricing.startWith"] = "Anza kujenga na uzalishaji 2 bure.";
t["pricing.getStartedFree"] = "Anza Bure";
t["pricing.free.name"] = "Bure";
t["pricing.free.period"] = "milele";
t["pricing.free.description"] = "Kamili kwa kujifunza na miradi binafsi";
t["pricing.pro.name"] = "Pro";
t["pricing.pro.period"] = "kwa mwezi";
t["pricing.pro.description"] = "Kwa wataalamu na timu ndogo";
t["pricing.enterprise.period"] = "";
t["pricing.enterprise.description"] = "Kwa mashirika makubwa yenye mahitaji maalum";

// === ENTERPRISE ===
t["enterprise.title"] = "AppNode kwa Biashara";
t["enterprise.subtitle"] = "Wezesha shirika lako na maendeleo salama, yanayopanuka ya programu";
t["enterprise.features.security.title"] = "Usalama wa Biashara";
t["enterprise.features.security.description"] = "Imethibitishwa SOC 2 Aina II na usimbaji wa hali ya juu na vidhibiti vya ufikiaji.";
t["enterprise.features.sso.title"] = "Kuingia Moja";
t["enterprise.features.sso.description"] = "Jumuisha na mtoa huduma wako wa utambulisho uliopo. Msaada wa SAML na OIDC.";
t["enterprise.features.compliance.title"] = "Utiifu";
t["enterprise.features.compliance.description"] = "Utiifu wa GDPR, HIPAA, na tasnia maalum uliojengwa ndani.";
t["enterprise.features.support.title"] = "Msaada Maalum";
t["enterprise.features.support.description"] = "Msaada wa kipaumbele wa masaa 24/7 na usimamizi maalum wa akaunti.";
t["enterprise.features.sla.title"] = "Dhamana ya SLA";
t["enterprise.features.sla.description"] = "SLA ya upatikanaji wa 99.99% na miundombinu ya kiwango cha biashara.";
t["enterprise.features.onpremise.title"] = "Ndani ya Shirika";
t["enterprise.features.onpremise.description"] = "Sambaza katika wingu lako au mazingira ya ndani ya shirika.";
t["enterprise.cta"] = "Ongea na Mauzo";

// === ENTERPRISE PAGE ===
t["enterprisePage.badge"] = "BIASHARA";
t["enterprisePage.title"] = "Jenga kwa kiwango na";
t["enterprisePage.titleHighlight"] = "kiwango-cha-biashara";
t["enterprisePage.titleEnd"] = "vipengele";
t["enterprisePage.subtitle"] = "Kila kitu timu yako inahitaji kujenga, kusambaza, na kusimamia programu kwa kiwango. Usalama, utiifu, na msaada uliojengwa kwa biashara.";
t["enterprisePage.viewPricing"] = "Tazama Bei";
t["enterprisePage.trustedBy"] = "INAAMINIKA NA MAKAMPUNI YANAYOONGOZA";
t["enterprisePage.trustedByText"] = "Inaaminika na timu na makampuni yanayoongoza duniani kote";
t["enterprisePage.featuresTitle"] = "Kila kitu unachohitaji kwa biashara";
t["enterprisePage.featuresSubtitle"] = "Vipengele vya hali ya juu vilivyoundwa kwa timu zinazohitaji usalama, upanuzi, na msaada.";
t["enterprisePage.testimonialsTitle"] = "Inapendwa na timu za biashara";
t["enterprisePage.testimonialsSubtitle"] = "Ona viongozi wanasema nini kuhusu AppNode Enterprise.";
t["enterprisePage.contactTitle"] = "Wasiliana nasi";
t["enterprisePage.contactSubtitle"] = "Tuambie kuhusu timu yako na tutawasiliana nawe ndani ya masaa 24.";
t["enterprisePage.thankYou"] = "Asante!";
t["enterprisePage.thankYouMessage"] = "Tumepokea ujumbe wako na tutawasiliana hivi karibuni.";
t["enterprisePage.features.security.title"] = "Usalama wa Kiwango cha Biashara";
t["enterprisePage.features.security.description"] = "Imethibitishwa SOC 2 Aina II na SSO, SAML, na vidhibiti vya hali ya juu vya ufikiaji kulinda data yako.";
t["enterprisePage.features.collaboration.title"] = "Ushirikiano wa Timu";
t["enterprisePage.features.collaboration.description"] = "Wanachama wa timu wasio na kikomo, maeneo ya kazi yanayoshirikiwa, na vipengele vya ushirikiano wa wakati halisi.";
t["enterprisePage.features.performance.title"] = "Utendaji wa Kipaumbele";
t["enterprisePage.features.performance.description"] = "Miundombinu maalum yenye SLA za upatikanaji zilizohakikishwa na nyakati za haraka za ujenzi.";
t["enterprisePage.features.support.title"] = "Msaada Maalum";
t["enterprisePage.features.support.description"] = "Msaada wa kipaumbele wa masaa 24/7 na meneja maalum wa mafanikio ya wateja na mwongozo wa kuanza.";
t["enterprisePage.features.integrations.title"] = "Ujumuishaji Maalum";
t["enterprisePage.features.integrations.description"] = "Ufikiaji wa API, webhooks maalum, na ujumuishaji na zana na mtiririko wa kazi wako uliopo.";
t["enterprisePage.features.analytics.title"] = "Uchambuzi wa Hali ya Juu";
t["enterprisePage.features.analytics.description"] = "Uchambuzi wa kina wa matumizi, kumbukumbu za ukaguzi, na ripoti ya utiifu kwa shirika lako.";
t["enterprisePage.testimonials.testimonial1.quote"] = "AppNode imebadilisha jinsi timu yetu inavyojenga zana za ndani. Kilichokuwa kinachukua wiki sasa kinachukua masaa.";
t["enterprisePage.testimonials.testimonial1.role"] = "VP wa Uhandisi";
t["enterprisePage.testimonials.testimonial2.quote"] = "Vipengele vya biashara vinatupa usalama na udhibiti tunaohitaji huku tukihifadhi uzoefu rahisi wa mtengenezaji.";
t["enterprisePage.testimonials.testimonial3.quote"] = "Timu yetu ya muundo sasa inaweza kutengeneza mfano na kutuma programu zilizo tayari kwa uzalishaji bila kusubiri rasilimali za uhandisi.";
t["enterprisePage.testimonials.testimonial3.role"] = "Mkuu wa Muundo";
t["enterprisePage.testimonials.testimonial4.quote"] = "Tulihamisha paneli yetu nzima ya utawala kwenda AppNode kwa wiki 2 tu. ROI imekuwa ya ajabu kwa timu yetu ya operesheni.";
t["enterprisePage.testimonials.testimonial4.role"] = "Mkurugenzi wa Operesheni";
t["enterprisePage.testimonials.testimonial5.quote"] = "Ujumuishaji wa SSO na kumbukumbu za ukaguzi vilikuwa hasa vile timu yetu ya utiifu ilihitaji. Mwongozo wa kuanza ulikuwa rahisi.";
t["enterprisePage.testimonials.testimonial5.role"] = "Afisa Mkuu wa Usalama";
t["enterprisePage.testimonials.testimonial6.quote"] = "Kubadilika kwa API ya AppNode kulituruhusu kuunganisha zana zetu zote zilizopo. Tija ya timu yetu iliongezeka mara mbili katika mwezi wa kwanza.";
t["enterprisePage.testimonials.testimonial6.role"] = "Meneja wa Uhandisi";
t["enterprisePage.form.fullName"] = "Jina Kamili";
t["enterprisePage.form.workEmail"] = "Barua Pepe ya Kazi";
t["enterprisePage.form.teamSize"] = "Ukubwa wa Timu";
t["enterprisePage.form.selectTeamSize"] = "Chagua ukubwa wa timu";
t["enterprisePage.form.teamSize1"] = "Wafanyakazi 1-10";
t["enterprisePage.form.teamSize2"] = "Wafanyakazi 11-50";
t["enterprisePage.form.teamSize3"] = "Wafanyakazi 51-200";
t["enterprisePage.form.teamSize4"] = "Wafanyakazi 201-500";
t["enterprisePage.form.teamSize5"] = "Wafanyakazi 500+";
t["enterprisePage.form.message"] = "Tunaweza kusaidiaje?";
t["enterprisePage.form.messagePlaceholder"] = "Tuambie kuhusu matumizi na mahitaji yako...";
t["enterprisePage.form.sending"] = "Inatuma...";

// === AUTH ===
t["auth.login.subtitle"] = "Ingia kwenye akaunti yako ya AppNode";
t["auth.login.forgotPassword"] = "Umesahau nenosiri?";
t["auth.login.noAccount"] = "Huna akaunti?";
t["auth.login.signUpLink"] = "Jiandikishe";
t["auth.login.invalidCredentials"] = "Barua pepe au nenosiri si sahihi";
t["auth.login.loggingIn"] = "Inaingia...";
t["auth.login.orContinueWith"] = "Au endelea na";
t["auth.login.decorativeTitle"] = "Jenga chochote.";
t["auth.login.decorativeSubtitle"] = "Haraka kuliko hapo awali.";
t["auth.login.decorativeDescription"] = "Njia rahisi zaidi duniani ya kujenga programu na AI.";
t["auth.signup.subtitle"] = "Anza kujenga na AppNode leo";
t["auth.signup.confirmPassword"] = "Thibitisha nenosiri";
t["auth.signup.hasAccount"] = "Tayari una akaunti?";
t["auth.signup.loginLink"] = "Ingia";
t["auth.signup.terms"] = "Kwa kujiandikisha, unakubali Masharti yetu ya Huduma na Sera ya Faragha.";
t["auth.signup.decorativeTitle"] = "Anza kujenga leo";
t["auth.signup.decorativeDescription"] = "Unda akaunti yako ya bure na uanze kujenga programu za kushangaza na AI kwa dakika.";
t["auth.signup.step2Title"] = "Binafsisha wasifu wako";
t["auth.signup.step2Subtitle"] = "Chagua rangi ya avatar inayokuwakilisha";
t["auth.signup.step3Title"] = "Tuambie kuhusu wewe";
t["auth.signup.step3Subtitle"] = "Hii inatusaidia kubinafsisha uzoefu wako";
t["auth.signup.roleQuestion"] = "Nini kinachokuelezea zaidi jukumu lako?";
t["auth.signup.company"] = "Jina la kampuni";
t["auth.signup.creatingAccount"] = "Inaunda akaunti...";
t["auth.signup.createAccount"] = "Unda akaunti";
t["auth.features.aiPowered"] = "Maendeleo yanayoendeshwa na AI";
t["auth.features.shipFast"] = "Tuma kwa dakika, si miezi";
t["auth.features.freeGenerations"] = "Uzalishaji 2 bure kuanza";
t["auth.features.noCreditCard"] = "Hakuna kadi ya mkopo inayohitajika";
t["auth.features.fullAccess"] = "Ufikiaji kamili wa violezo vyote";

// === DOCS ===
t["docs.subtitle"] = "Kila kitu unachohitaji kujenga na AppNode";
t["docs.gettingStarted"] = "Kuanza";
t["docs.tutorials"] = "Mafunzo";
t["docs.apiReference"] = "Rejea ya API";
t["docs.examples"] = "Mifano";
t["docs.searchPlaceholder"] = "Tafuta nyaraka...";

// === BLOG ===
t["blog.subtitle"] = "Habari, masasisho, na maarifa kutoka kwa timu ya AppNode";
t["blog.readTime"] = "dakika kusoma";
t["blog.categories.all"] = "Zote";
t["blog.categories.product"] = "Bidhaa";
t["blog.categories.engineering"] = "Uhandisi";
t["blog.categories.tutorials"] = "Mafunzo";

// === CAREERS ===
t["careers.title"] = "Jiunge na Timu Yetu";
t["careers.subtitle"] = "Tusaidie kubadilisha mustakabali wa maendeleo ya programu";
t["careers.openPositions"] = "Nafasi Wazi";
t["careers.benefits.title"] = "Kwa Nini AppNode?";
t["careers.benefits.remote"] = "Kazi ya Mbali Kwanza";
t["careers.benefits.remoteDesc"] = "Fanya kazi kutoka popote duniani";
t["careers.benefits.equity"] = "Hisa";
t["careers.benefits.equityDesc"] = "Shiriki katika mafanikio yetu";
t["careers.benefits.health"] = "Faida za Afya";
t["careers.benefits.healthDesc"] = "Bima kamili kwako na familia yako";
t["careers.benefits.learning"] = "Bajeti ya Kujifunza";
t["careers.benefits.learningDesc"] = "Wekeza katika ukuaji wako";
t["careers.noPositions"] = "Hakuna nafasi wazi kwa sasa. Rudi hivi karibuni!";
t["careers.applyNow"] = "Omba Sasa";

// === COMMUNITY ===
t["community.subtitle"] = "Unganika na wajenzi wa AppNode duniani kote";
t["community.discord"] = "Jiunge na Discord yetu";
t["community.forum"] = "Jukwaa la Jumuiya";
t["community.showcase"] = "Maonyesho ya Miradi";
t["community.events"] = "Matukio Yanayokuja";

// === SUPPORT ===
t["support.subtitle"] = "Tuko hapa kusaidia";
t["support.helpCenter"] = "Kituo cha Msaada";
t["support.contactUs"] = "Wasiliana Nasi";

// === LEGAL ===
t["legal.terms.lastUpdated"] = "Ilisasishwa mwisho";
t["legal.privacy.lastUpdated"] = "Ilisasishwa mwisho";
t["legal.cookies.title"] = "Sera ya Kuki";
t["legal.cookies.lastUpdated"] = "Ilisasishwa mwisho";

// === STATUS ===
t["status.operational"] = "Mifumo Yote Inafanya Kazi";
t["status.degraded"] = "Utendaji Uliopungua";
t["status.outage"] = "Usumbufu wa Huduma";
t["status.maintenance"] = "Chini ya Matengenezo";

// === ERRORS ===
t["errors.404.description"] = "Ukurasa unaoutafuta haupo.";
t["errors.500.title"] = "Kitu Kimeenda Vibaya";
t["errors.500.description"] = "Tunafanya kazi kurekebisha hili. Tafadhali jaribu tena baadaye.";
t["errors.500.retry"] = "Jaribu Tena";

// Apply all flat translations
for (const [pathStr, value] of Object.entries(t)) {
  setByPath(result, pathStr, value);
}

// Write the result
fs.writeFileSync(
  path.join(__dirname, 'src/translations/sw.json'),
  JSON.stringify(result, null, 2) + '\n'
);

console.log('Phase 1 translations applied successfully!');
console.log('Checking remaining untranslated strings...');
