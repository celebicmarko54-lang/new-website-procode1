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

// === GUIDES PAGE ===
t["guidesPage.badge"] = "Mafunzo ya Kina";
t["guidesPage.titleStart"] = "Miongozo ya";
t["guidesPage.subtitle"] = "Mafunzo ya kina na mbinu bora za kujenga programu za kushangaza. Kutoka mwanafunzi hadi mtaalamu, tumekushughulikia.";
t["guidesPage.featuredGuide"] = "Mwongozo Uliopendekezwa";
t["guidesPage.allGuides"] = "Miongozo Yote";
t["guidesPage.readGuide"] = "Soma Mwongozo";
t["guidesPage.modal.overview"] = "Muhtasari";
t["guidesPage.modal.howToDoIt"] = "Jinsi ya kufanya";
t["guidesPage.modal.proTips"] = "Vidokezo vya Wataalamu";
t["guidesPage.modal.gotIt"] = "Nimeelewa!";
t["guidesPage.categories.all"] = "Zote";
t["guidesPage.categories.saas"] = "SaaS";
t["guidesPage.categories.ecommerce"] = "Biashara Mtandaoni";
t["guidesPage.categories.design"] = "Muundo";
t["guidesPage.categories.security"] = "Usalama";
t["guidesPage.categories.backend"] = "Seva ya Nyuma";
t["guidesPage.categories.performance"] = "Utendaji";
t["guidesPage.minRead"] = "dak kusoma";
// SaaS guide
t["guidesPage.guides.saasApps.title"] = "Mwongozo Kamili wa Kujenga Programu za SaaS";
t["guidesPage.guides.saasApps.description"] = "Kila unachohitaji kujua kuhusu kuunda programu za huduma kama programu na AppNode";
t["guidesPage.guides.saasApps.overview"] = "Jifunze kujenga programu kamili ya SaaS kutoka mwanzo, ikiwa ni pamoja na uthibitishaji wa mtumiaji, bili za usajili, na usimamizi wa wapangaji wengi.";
t["guidesPage.guides.saasApps.steps.0"] = "Sanidi mradi wako na uthibitishaji (kuingia, kujisajili, kuweka upya nenosiri)";
t["guidesPage.guides.saasApps.steps.1"] = "Unda mpangilio wa dashibodi na urambazaji na mipangilio ya mtumiaji";
t["guidesPage.guides.saasApps.steps.2"] = "Tekeleza bili za usajili na ujumuishaji wa Stripe";
t["guidesPage.guides.saasApps.steps.3"] = "Jenga utenganishaji wa data ya wapangaji wengi kwa akaunti tofauti za wateja";
t["guidesPage.guides.saasApps.steps.4"] = "Ongeza udhibiti wa ufikiaji kulingana na jukumu kwa wanachama wa timu";
t["guidesPage.guides.saasApps.steps.5"] = "Sanidi arifa za barua pepe kwa matukio muhimu";
t["guidesPage.guides.saasApps.steps.6"] = "Sambaza kwa uzalishaji na ufuatiliaji";
t["guidesPage.guides.saasApps.tips.0"] = "Anza na MVP rahisi na urudie kulingana na maoni ya watumiaji";
t["guidesPage.guides.saasApps.tips.1"] = "Tumia vigezo vya mazingira kwa funguo zote za API na siri";
t["guidesPage.guides.saasApps.tips.2"] = "Tekeleza ushughulikiaji sahihi wa hitilafu kutoka mwanzo";
// E-commerce guide
t["guidesPage.guides.ecommerce.title"] = "Mbinu Bora za Biashara Mtandaoni";
t["guidesPage.guides.ecommerce.description"] = "Jifunze jinsi ya kujenga maduka ya mtandaoni yanayovutia na ujumuishaji wa malipo";
t["guidesPage.guides.ecommerce.overview"] = "Unda duka la biashara mtandaoni linalovutia na katalogi ya bidhaa, kikapu cha ununuzi, na malipo salama.";
t["guidesPage.guides.ecommerce.steps.0"] = "Buni katalogi ya kuvutia ya bidhaa yenye kategoria na vichujio";
t["guidesPage.guides.ecommerce.steps.1"] = "Jenga kikapu cha ununuzi kinachoendelea na hifadhi ya ndani";
t["guidesPage.guides.ecommerce.steps.2"] = "Jumuisha Stripe au PayPal kwa malipo";
t["guidesPage.guides.ecommerce.steps.3"] = "Unda kurasa za uthibitisho wa maagizo na ufuatiliaji";
t["guidesPage.guides.ecommerce.steps.4"] = "Sanidi usimamizi wa hesabu ya bidhaa";
t["guidesPage.guides.ecommerce.steps.5"] = "Tekeleza mapitio ya wateja na viwango";
t["guidesPage.guides.ecommerce.tips.0"] = "Tumia picha za ubora wa juu za bidhaa";
t["guidesPage.guides.ecommerce.tips.1"] = "Weka mchakato wa malipo kuwa rahisi (hatua 3 kiwango cha juu)";
t["guidesPage.guides.ecommerce.tips.2"] = "Onyesha alama za uaminifu na aikoni za malipo salama";
// Dashboard guide
t["guidesPage.guides.dashboard.title"] = "Kubobea Muundo wa Dashibodi";
t["guidesPage.guides.dashboard.description"] = "Unda dashibodi nzuri na za utendaji za uchambuzi ambazo watumiaji wanapenda";
t["guidesPage.guides.dashboard.overview"] = "Buni dashibodi za kitaalamu za uchambuzi zenye uonyeshaji wazi wa data na mpangilio wa angavu.";
t["guidesPage.guides.dashboard.steps.0"] = "Eleza vipimo muhimu watumiaji wako wanahitaji kuona";
t["guidesPage.guides.dashboard.steps.1"] = "Unda mchoro wa safu na muundo sahihi wa kuona";
t["guidesPage.guides.dashboard.steps.2"] = "Chagua aina sahihi za chati kwa kila aina ya data";
t["guidesPage.guides.dashboard.steps.3"] = "Tekeleza vichujio vinavyoingiliana na masafa ya tarehe";
t["guidesPage.guides.dashboard.steps.4"] = "Ongeza utendaji wa kuhamisha data";
t["guidesPage.guides.dashboard.steps.5"] = "Boresha kwa ukubwa tofauti wa skrini";
t["guidesPage.guides.dashboard.tips.0"] = "Weka vipimo muhimu zaidi juu";
t["guidesPage.guides.dashboard.tips.1"] = "Tumia uwekaji thabiti wa rangi kwenye chati zote";
t["guidesPage.guides.dashboard.tips.2"] = "Epuka msongamano - kidogo ni bora";
// Authentication guide
t["guidesPage.guides.authentication.title"] = "Uthibitishaji na Usalama";
t["guidesPage.guides.authentication.description"] = "Tekeleza uthibitishaji salama wa mtumiaji na ulinde programu zako";
t["guidesPage.guides.authentication.overview"] = "Tekeleza uthibitishaji imara na mbinu bora za usalama kulinda watumiaji na data yako.";
t["guidesPage.guides.authentication.steps.0"] = "Sanidi usajili salama wa mtumiaji na uthibitisho wa barua pepe";
t["guidesPage.guides.authentication.steps.1"] = "Tekeleza uhifadhi wa nenosiri na bcrypt au sawa";
t["guidesPage.guides.authentication.steps.2"] = "Ongeza kuingia kwa mitandao ya kijamii ya OAuth (Google, GitHub)";
t["guidesPage.guides.authentication.steps.3"] = "Unda njia zilizolindwa na programu ya kati";
t["guidesPage.guides.authentication.steps.4"] = "Tekeleza usimamizi wa vikao na vidakuzi salama";
t["guidesPage.guides.authentication.steps.5"] = "Ongeza vizuizi vya kiwango kuzuia mashambulizi ya nguvu";
t["guidesPage.guides.authentication.tips.0"] = "Usihifadhi nenosiri kwa maandishi wazi";
t["guidesPage.guides.authentication.tips.1"] = "Tumia HTTPS kwa maunganisho yote";
t["guidesPage.guides.authentication.tips.2"] = "Tekeleza sera sahihi za CORS";
// Database guide
t["guidesPage.guides.database.title"] = "Mwongozo wa Ujumuishaji wa Hifadhidata";
t["guidesPage.guides.database.description"] = "Unganisha programu yako na hifadhidata na usimamie data kwa ufanisi";
t["guidesPage.guides.database.overview"] = "Jifunze kuunganisha programu yako na hifadhidata na kutekeleza usimamizi bora wa data.";
t["guidesPage.guides.database.steps.0"] = "Chagua hifadhidata sahihi (SQL dhidi ya NoSQL)";
t["guidesPage.guides.database.steps.1"] = "Sanidi muunganisho wako wa hifadhidata na vigezo vya mazingira";
t["guidesPage.guides.database.steps.2"] = "Buni muundo wako wa data na uhusiano";
t["guidesPage.guides.database.steps.3"] = "Tekeleza operesheni za CRUD (Unda, Soma, Sasisha, Futa)";
t["guidesPage.guides.database.steps.4"] = "Ongeza uthibitishaji wa data kabla ya operesheni za hifadhidata";
t["guidesPage.guides.database.steps.5"] = "Sanidi uhamishaji wa hifadhidata kwa mabadiliko ya muundo";
t["guidesPage.guides.database.tips.0"] = "Daima tumia maswali yaliyo na vigezo kuzuia sindano ya SQL";
t["guidesPage.guides.database.tips.1"] = "Weka faharisi kwenye safu wima zinazoswaliwa mara kwa mara";
t["guidesPage.guides.database.tips.2"] = "Hifadhi nakala ya data yako mara kwa mara";
// Responsive guide
t["guidesPage.guides.responsive.title"] = "Mifumo ya Muundo Unaojibika";
t["guidesPage.guides.responsive.description"] = "Fanya programu zako zionekane vizuri kwenye vifaa vyote na muundo wa simu kwanza";
t["guidesPage.guides.responsive.overview"] = "Unda miundo inayojibika inayofanya kazi kwa uzuri kwenye ukubwa wote wa skrini.";
t["guidesPage.guides.responsive.steps.0"] = "Anza na mbinu ya CSS ya simu kwanza";
t["guidesPage.guides.responsive.steps.1"] = "Tumia mpangilio wa gridi unaonyumbulika (CSS Grid, Flexbox)";
t["guidesPage.guides.responsive.steps.2"] = "Tekeleza sehemu za kuvunja zinazojibika (sm, md, lg, xl)";
t["guidesPage.guides.responsive.steps.3"] = "Boresha picha kwa msongo tofauti wa skrini";
t["guidesPage.guides.responsive.steps.4"] = "Pima miingiliano ya kugusa kwenye vifaa vya simu";
t["guidesPage.guides.responsive.steps.5"] = "Tumia vitenzi vya jamaa (rem, %, vh/vw) badala ya pikseli";
t["guidesPage.guides.responsive.tips.0"] = "Pima kwenye vifaa halisi, sio tu zana za watengenezaji za kivinjari";
t["guidesPage.guides.responsive.tips.1"] = "Zingatia malengo ya kugusa yanayofaa kidole gumba kwenye simu";
t["guidesPage.guides.responsive.tips.2"] = "Kipaumbele maudhui kwa skrini ndogo";
// API guide
t["guidesPage.guides.api.title"] = "Darasa Kuu la Ujumuishaji wa API";
t["guidesPage.guides.api.description"] = "Unganisha na huduma za watu wengine na API kwa urahisi";
t["guidesPage.guides.api.overview"] = "Jifunze kujumuisha API za nje na huduma za watu wengine kwenye programu zako.";
t["guidesPage.guides.api.steps.0"] = "Elewa misingi ya API ya REST (sehemu za mwisho, mbinu)";
t["guidesPage.guides.api.steps.1"] = "Sanidi uthibitishaji wa API (funguo za API, tokeni za OAuth)";
t["guidesPage.guides.api.steps.2"] = "Fanya ombi za HTTP (GET, POST, PUT, DELETE)";
t["guidesPage.guides.api.steps.3"] = "Shughulikia majibu ya API na hitilafu kwa ustadi";
t["guidesPage.guides.api.steps.4"] = "Tekeleza mantiki ya kujaribu tena kwa ombi zilizoshindwa";
t["guidesPage.guides.api.steps.5"] = "Hifadhi majibu ili kuboresha utendaji";
t["guidesPage.guides.api.tips.0"] = "Hifadhi funguo za API katika vigezo vya mazingira";
t["guidesPage.guides.api.tips.1"] = "Shughulikia vizuizi vya kiwango na kuchelewa kwa kielelezo";
t["guidesPage.guides.api.tips.2"] = "Rekodi simu za API kwa utatuzi wa hitilafu";
// Performance guide
t["guidesPage.guides.performance.title"] = "Uboreshaji wa Utendaji";
t["guidesPage.guides.performance.description"] = "Harakisha programu zako kwa uzoefu bora wa mtumiaji na SEO";
t["guidesPage.guides.performance.overview"] = "Boresha programu yako kwa kasi, uzoefu bora wa mtumiaji, na SEO iliyoboreshwa.";
t["guidesPage.guides.performance.steps.0"] = "Changanua utendaji wa sasa na Lighthouse";
t["guidesPage.guides.performance.steps.1"] = "Boresha na punguza picha (muundo wa WebP, upakiaji wa kusubiri)";
t["guidesPage.guides.performance.steps.2"] = "Punguza vifurushi vya JavaScript na CSS";
t["guidesPage.guides.performance.steps.3"] = "Tekeleza ugawanyaji wa msimbo na upakiaji wa kusubiri";
t["guidesPage.guides.performance.steps.4"] = "Sanidi vichwa sahihi vya hifadhi";
t["guidesPage.guides.performance.steps.5"] = "Tumia CDN kwa mali tuli";
t["guidesPage.guides.performance.tips.0"] = "Lenga upakiaji wa kwanza wa ukurasa chini ya sekunde 3";
t["guidesPage.guides.performance.tips.1"] = "Tumia bajeti za utendaji kufuatilia kurudi nyuma";
t["guidesPage.guides.performance.tips.2"] = "Fuatilia Core Web Vitals mara kwa mara";
t["guidesPage.cta.title"] = "Uko Tayari Kuanza Kujenga?";
t["guidesPage.cta.subtitle"] = "Weka ulichojifunza katika mazoezi. Unda programu yako ya kwanza leo.";
t["guidesPage.cta.getStartedFree"] = "Anza Bure";
t["guidesPage.cta.browseTemplates"] = "Vinjari Templeti";

// === RULES PAGE ===
t["rulesPage.badge"] = "Miongozo ya Jumuiya";
t["rulesPage.subtitle"] = "Jumuiya yetu inastawi wakati kila mtu anafuata miongozo hii. Pamoja, tunaunda mazingira chanya na yenye tija.";
t["rulesPage.rules.respectAndKindness.title"] = "Heshima na Upole";
t["rulesPage.rules.respectAndKindness.description"] = "Wagojee wanachama wote wa jumuiya kwa heshima. Unyanyasaji, lugha ya chuki, ubaguzi, au mashambulizi ya kibinafsi ya aina yoyote hayaruhusiwi.";
t["rulesPage.rules.respectAndKindness.examples.title"] = "Mifano:";
t["rulesPage.rules.respectAndKindness.examples.item1"] = "Kuwa msaidizi na ujenzi katika maoni";
t["rulesPage.rules.respectAndKindness.examples.item2"] = "Epuka lugha ya uchochezi au uadui";
t["rulesPage.rules.respectAndKindness.examples.item3"] = "Heshimu tofauti za maoni na uzoefu";
t["rulesPage.rules.originalContent.title"] = "Maudhui Halisi";
t["rulesPage.rules.originalContent.description"] = "Unda na ushiriki kazi halisi. Heshimu haki za miliki ya akili na utoe sithati sahihi unapotumia kazi za wengine.";
t["rulesPage.rules.originalContent.examples.title"] = "Mifano:";
t["rulesPage.rules.originalContent.examples.item1"] = "Shiriki maudhui ambayo una haki zake tu";
t["rulesPage.rules.originalContent.examples.item2"] = "Sithati wabunifu wa asili unapochochewa na kazi yao";
t["rulesPage.rules.originalContent.examples.item3"] = "Usinakili au kuiga miradi ya watumiaji wengine";
t["rulesPage.rules.safeContent.title"] = "Maudhui Salama";
t["rulesPage.rules.safeContent.description"] = "Weka jukwaa kuwa salama kwa kila mtu. Usiunde, kushiriki, au kutangaza maudhui hatari, haramu, au yasiyofaa.";
t["rulesPage.rules.safeContent.examples.title"] = "Mifano:";
t["rulesPage.rules.safeContent.examples.item1"] = "Hakuna maudhui ya wazi, ya vurugu, au yanayosumbua";
t["rulesPage.rules.safeContent.examples.item2"] = "Hakuna utangazaji wa shughuli haramu";
t["rulesPage.rules.safeContent.examples.item3"] = "Hakuna maudhui yanayoweza kudhuru au kuhatarisha wengine";
t["rulesPage.rules.noSpam.title"] = "Hakuna Barua Taka au Udanganyifu";
t["rulesPage.rules.noSpam.description"] = "Usijishughulishe na barua taka, udanganyifu, au mazoea ya udanganyifu. Weka jukwaa kuwa halisi na la kuaminika.";
t["rulesPage.rules.noSpam.examples.title"] = "Mifano:";
t["rulesPage.rules.noSpam.examples.item1"] = "Hakuna vitendo vya kiotomatiki au wingi kuongeza mwonekano bandia";
t["rulesPage.rules.noSpam.examples.item2"] = "Hakuna akaunti bandia au kujifanya kuwa mtu mwingine";
t["rulesPage.rules.noSpam.examples.item3"] = "Hakuna maudhui ya kupotosha au ya udanganyifu";
t["rulesPage.rules.securePractices.title"] = "Mazoea Salama";
t["rulesPage.rules.securePractices.description"] = "Fuata mbinu bora za usalama. Usijaribu kutumia vibaya, kudukulia, au kuathiri jukwaa au watumiaji wengine.";
t["rulesPage.rules.securePractices.examples.title"] = "Mifano:";
t["rulesPage.rules.securePractices.examples.item1"] = "Usijaribu kufikia akaunti za wengine";
t["rulesPage.rules.securePractices.examples.item2"] = "Ripoti udhaifu wa usalama kwa uwajibikaji";
t["rulesPage.rules.securePractices.examples.item3"] = "Usishiriki msimbo hasidi au viungo vya hadaa";
t["rulesPage.rules.fairUse.title"] = "Matumizi ya Haki";
t["rulesPage.rules.fairUse.description"] = "Tumia jukwaa kwa haki na kama ilivyokusudiwa. Heshimu vikomo vya matumizi na usitumie vibaya huduma zetu.";
t["rulesPage.rules.fairUse.examples.title"] = "Mifano:";
t["rulesPage.rules.fairUse.examples.item1"] = "Kaa ndani ya vikomo vya matumizi ya mpango wako";
t["rulesPage.rules.fairUse.examples.item2"] = "Usitumie jukwaa kwa madhumuni haramu ya kibiashara";
t["rulesPage.rules.fairUse.examples.item3"] = "Usizike vikwazo vya jukwaa";
t["rulesPage.enforcement.title"] = "Utekelezaji";
t["rulesPage.enforcement.description"] = "Ukiukaji wa sheria hizi unaweza kusababisha kuondolewa kwa maudhui, onyo za akaunti, kusimamishwa kwa muda, au kupigwa marufuku kabisa kulingana na ukali.";
t["rulesPage.enforcement.warning.title"] = "Onyo";
t["rulesPage.enforcement.warning.subtitle"] = "Ukiukaji wa kwanza mdogo";
t["rulesPage.enforcement.suspension.title"] = "Kusimamishwa";
t["rulesPage.enforcement.suspension.subtitle"] = "Ukiukaji unarudiwa au mbaya";
t["rulesPage.enforcement.ban.title"] = "Kupigwa Marufuku";
t["rulesPage.enforcement.ban.subtitle"] = "Ukiukaji mkali au unaoendelea";
t["rulesPage.report.title"] = "Unaona Kitu Kibaya?";
t["rulesPage.report.description"] = "Ukikutana na maudhui au tabia inayokiuka sheria zetu za jukwaa, tafadhali ripoti ili tuweze kuchukua hatua.";

// === AFFILIATES PAGE ===
t["affiliatesPage.badge"] = "Programu ya Washirika";
t["affiliatesPage.title"] = "Pata Pesa kwa Kushiriki AppNode";
t["affiliatesPage.subtitle"] = "Jiunge na programu yetu ya washirika na upate hadi 40% ya kamisheni inayorudishwa kwa kila mteja unayemshauri.";
t["affiliatesPage.emailPlaceholder"] = "Weka barua pepe yako";
t["affiliatesPage.joinButton"] = "Jiunge Sasa";
t["affiliatesPage.alertMessage"] = "Maombi yamewasilishwa! Angalia barua pepe yako kwa hatua zinazofuata.";
t["affiliatesPage.benefits.title"] = "Kwa Nini Ujiunge na Programu Yetu?";
t["affiliatesPage.benefits.items.0.title"] = "Kamisheni ya 30%";
t["affiliatesPage.benefits.items.0.description"] = "Pata kamisheni ya 30% inayorudishwa kwa kila mteja unayemshauri kwa miezi 12 yao ya kwanza.";
t["affiliatesPage.benefits.items.1.title"] = "Kuki ya Siku 90";
t["affiliatesPage.benefits.items.1.description"] = "Dirisha la kuki lililopanuliwa linamaanisha unapata sifa hata kama wanajisajili baadaye.";
t["affiliatesPage.benefits.items.2.title"] = "Dashibodi ya Wakati Halisi";
t["affiliatesPage.benefits.items.2.description"] = "Fuatilia mibofyo, ubadilishaji, na mapato kwa wakati halisi na dashibodi yetu ya washirika.";
t["affiliatesPage.benefits.items.3.title"] = "Malipo ya Kila Mwezi";
t["affiliatesPage.benefits.items.3.description"] = "Kulipwa kila mwezi kupitia PayPal au uhamisho wa benki. Kiwango cha chini cha $50.";
t["affiliatesPage.tiers.title"] = "Viwango vya Kamisheni";
t["affiliatesPage.tiers.subtitle"] = "Kadri unavyoshauri zaidi, ndivyo unavyopata zaidi. Fungua viwango vya juu vya kamisheni kadri unavyokua.";
t["affiliatesPage.tiers.referralsPerMonth"] = "washauriwa/mwezi";
t["affiliatesPage.tiers.recurringCommission"] = "kamisheni inayorudishwa";
t["affiliatesPage.tiers.items.0.name"] = "Mwanzo";
t["affiliatesPage.tiers.items.0.perks.0"] = "Dashibodi ya msingi";
t["affiliatesPage.tiers.items.0.perks.1"] = "Msaada wa barua pepe";
t["affiliatesPage.tiers.items.0.perks.2"] = "Viungo vya kawaida";
t["affiliatesPage.tiers.items.1.name"] = "Mtaalamu";
t["affiliatesPage.tiers.items.1.perks.0"] = "Uchambuzi wa hali ya juu";
t["affiliatesPage.tiers.items.1.perks.1"] = "Msaada wa kipaumbele";
t["affiliatesPage.tiers.items.1.perks.2"] = "Viungo maalum";
t["affiliatesPage.tiers.items.1.perks.3"] = "Nyenzo za utangazaji";
t["affiliatesPage.tiers.items.2.name"] = "Wataalamu";
t["affiliatesPage.tiers.items.2.perks.0"] = "Msimamizi maalum";
t["affiliatesPage.tiers.items.2.perks.1"] = "Masoko ya pamoja";
t["affiliatesPage.tiers.items.2.perks.2"] = "Ufikiaji wa mapema";
t["affiliatesPage.tiers.items.2.perks.3"] = "Kampeni maalum";
t["affiliatesPage.howItWorks.title"] = "Jinsi Inavyofanya Kazi";
t["affiliatesPage.howItWorks.steps.0.title"] = "1. Jisajili";
t["affiliatesPage.howItWorks.steps.0.description"] = "Unda akaunti yako ya bure ya washirika na upate kiungo chako cha kipekee cha ushauri.";
t["affiliatesPage.howItWorks.steps.1.title"] = "2. Shiriki";
t["affiliatesPage.howItWorks.steps.1.description"] = "Shiriki kiungo chako na hadhira yako, wafuasi, au jumuiya.";
t["affiliatesPage.howItWorks.steps.2.title"] = "3. Pata";
t["affiliatesPage.howItWorks.steps.2.description"] = "Pata kamisheni inayorudishwa kila mwezi kwa kila mteja anayelipia.";
t["affiliatesPage.stats.title"] = "Mafanikio ya Washirika";
t["affiliatesPage.stats.paidToAffiliates"] = "Kumelipwa kwa Washirika";
t["affiliatesPage.stats.activeAffiliates"] = "Washirika Hai";
t["affiliatesPage.stats.avgMonthlyEarnings"] = "Mapato ya Wastani kwa Mwezi";
t["affiliatesPage.stats.avgPayoutTime"] = "Muda wa Wastani wa Malipo";

// === CONNECTIONS PAGE ===
t["connectionsPage.badge"] = "Ujumuishaji";
t["connectionsPage.title"] = "Miunganisho na Ujumuishaji";
t["connectionsPage.subtitle"] = "Imarisha programu zako kwa kuunganisha na huduma zenye nguvu za watu wengine";
t["connectionsPage.comingSoon"] = "Inakuja Hivi Karibuni";
t["connectionsPage.requestTitle"] = "Unahitaji ujumuishaji tofauti?";
t["connectionsPage.requestDescription"] = "Tufahamishe huduma gani ungependa kuunganisha na AppNode";
t["connectionsPage.requestButton"] = "Omba Ujumuishaji";
t["connectionsPage.categories.all"] = "Zote";
t["connectionsPage.categories.database"] = "Hifadhidata";
t["connectionsPage.categories.payments"] = "Malipo";
t["connectionsPage.categories.ai"] = "AI";
t["connectionsPage.categories.hosting"] = "Uhifadhi";
t["connectionsPage.categories.development"] = "Maendeleo";
t["connectionsPage.categories.communication"] = "Mawasiliano";
t["connectionsPage.categories.authentication"] = "Uthibitishaji";
t["connectionsPage.categories.search"] = "Utafutaji";
t["connectionsPage.categories.ecommerce"] = "Biashara Mtandaoni";
t["connectionsPage.categories.productivity"] = "Uzalishaji";
t["connectionsPage.connections.0.name"] = "Supabase";
t["connectionsPage.connections.0.description"] = "Mbadala wa chanzo huria wa Firebase na hifadhidata ya PostgreSQL";
t["connectionsPage.connections.1.name"] = "Stripe";
t["connectionsPage.connections.1.description"] = "Usindikaji wa malipo na usimamizi wa usajili";
t["connectionsPage.connections.2.name"] = "OpenAI";
t["connectionsPage.connections.2.description"] = "Ongeza uwezo wa AI kwenye programu zako";
t["connectionsPage.connections.3.name"] = "Vercel";
t["connectionsPage.connections.3.description"] = "Sambaza na uhifadhi programu zako duniani kote";
t["connectionsPage.connections.4.name"] = "GitHub";
t["connectionsPage.connections.4.description"] = "Udhibiti wa toleo na ushirikiano wa msimbo";
t["connectionsPage.connections.5.name"] = "Resend";
t["connectionsPage.connections.5.description"] = "API ya barua pepe kwa waendelezaji";
t["connectionsPage.connections.6.name"] = "Cloudflare";
t["connectionsPage.connections.6.description"] = "CDN, usalama, na uboreshaji wa utendaji";
t["connectionsPage.connections.7.name"] = "Twilio";
t["connectionsPage.connections.7.description"] = "API za SMS, sauti, na ujumbe";
t["connectionsPage.connections.8.name"] = "Auth0";
t["connectionsPage.connections.8.description"] = "Jukwaa la uthibitishaji na idhini";
t["connectionsPage.connections.9.name"] = "Algolia";
t["connectionsPage.connections.9.description"] = "Jukwaa la utafutaji na ugunduzi";
t["connectionsPage.connections.10.name"] = "Shopify";
t["connectionsPage.connections.10.description"] = "Ujumuishaji wa jukwaa la biashara mtandaoni";
t["connectionsPage.connections.11.name"] = "Notion";
t["connectionsPage.connections.11.description"] = "Unganisha na hifadhidata na kurasa za Notion";

// Apply
for (const [pathStr, value] of Object.entries(t)) {
  setByPath(sw, pathStr, value);
}

fs.writeFileSync(
  path.join(__dirname, 'src/translations/sw.json'),
  JSON.stringify(sw, null, 2) + '\n'
);

console.log('Phase 6 done! Applied', Object.keys(t).length, 'translations');
