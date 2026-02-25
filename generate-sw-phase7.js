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

// === SECURITY REPORT PAGE ===
t["securityReportPage.badge"] = "Usalama";
t["securityReportPage.title"] = "Ripoti Wasiwasi wa Usalama";
t["securityReportPage.subtitle"] = "Umegundua udhaifu wa usalama? Tunathamini ufichuzi wa kuwajibika na tutafanya kazi nawe kushughulikia suala hilo.";
t["securityReportPage.bugBounty.title"] = "Programu ya Zawadi za Hitilafu";
t["securityReportPage.bugBounty.description"] = "Tunatoa zawadi kwa ripoti halali za usalama. Kiasi cha zawadi kinategemea ukali na athari. Udhaifu muhimu unaweza kupata hadi $10,000.";
t["securityReportPage.severityLabel"] = "Kiwango cha Ukali";
t["securityReportPage.severity.critical.label"] = "Muhimu Sana";
t["securityReportPage.severity.critical.description"] = "Kuathiriwa kamili kwa mfumo, uvunjaji wa data";
t["securityReportPage.severity.high.label"] = "Juu";
t["securityReportPage.severity.high.description"] = "Athari kubwa ya usalama";
t["securityReportPage.severity.medium.label"] = "Kati";
t["securityReportPage.severity.medium.description"] = "Athari ndogo ya usalama";
t["securityReportPage.severity.low.label"] = "Chini";
t["securityReportPage.severity.low.description"] = "Athari ndogo sana ya usalama";
t["securityReportPage.descriptionLabel"] = "Maelezo ya Udhaifu";
t["securityReportPage.descriptionHint"] = "Eleza udhaifu kwa undani. Jumuisha sehemu au kipengele kilichoathiriwa.";
t["securityReportPage.descriptionPlaceholder"] = "Eleza udhaifu wa usalama...";
t["securityReportPage.stepsLabel"] = "Hatua za Kurudia";
t["securityReportPage.stepsHint"] = "Toa hatua wazi za kurudia udhaifu.";
t["securityReportPage.stepsPlaceholder"] = "1. Nenda kwenye...";
t["securityReportPage.emailLabel"] = "Barua Pepe Yako";
t["securityReportPage.emailHint"] = "Inahitajika ili tuweze kufuatilia na kuratibu ufichuzi.";
t["securityReportPage.emailPlaceholder"] = "mtafiti-usalama@mfano.com";
t["securityReportPage.submitButton"] = "Wasilisha Ripoti ya Usalama";
t["securityReportPage.submitted.title"] = "Ripoti Imepokelewa";
t["securityReportPage.submitted.description"] = "Asante kwa kufichua kwa uwajibikaji wasiwasi huu wa usalama. Timu yetu ya usalama imearifiwa na itakagua ripoti yako.";
t["securityReportPage.submitted.responseTime"] = "Muda Unaotarajiwa wa Majibu:";
t["securityReportPage.submitted.critical"] = "Muhimu Sana: Ndani ya saa 24";
t["securityReportPage.submitted.high"] = "Juu: Ndani ya saa 48";
t["securityReportPage.submitted.mediumLow"] = "Kati/Chini: Ndani ya siku 5 za kazi";
t["securityReportPage.submitted.returnHome"] = "Rudi Nyumbani";
t["securityReportPage.guidelines.title"] = "Miongozo ya Ufichuzi wa Kuwajibika";
t["securityReportPage.guidelines.items.0"] = "Usifikie, kubadilisha, au kufuta data inayomilikiwa na watumiaji wengine.";
t["securityReportPage.guidelines.items.1"] = "Usifanye mashambulizi ya kukataa huduma au kudhoofisha huduma zetu.";
t["securityReportPage.guidelines.items.2"] = "Turuhusu muda wa kutosha kurekebisha suala kabla ya ufichuzi wa umma.";
t["securityReportPage.guidelines.items.3"] = "Pima tu dhidi ya akaunti unazomiliki au una ruhusa ya kufikia.";
t["securityReportPage.contactNote"] = "Kwa masuala ya dharura ya usalama, unaweza pia kutufikia kwa";

// === LEARN PUBLISH PAGE ===
t["learnPublishPage.badge"] = "Jinsi Inavyofanya Kazi";
t["learnPublishPage.title"] = "Jenga na Chapisha na AppNode";
t["learnPublishPage.subtitle"] = "Jifunze jinsi ya kutumia kizalishaji cha msimbo kinachotumia AI cha AppNode kuunda na kusambaza programu. Kutoka wazo hadi tovuti hai kwa dakika.";
t["learnPublishPage.steps.title"] = "Hatua Nne Rahisi";
t["learnPublishPage.steps.subtitle"] = "Kuunda na kuchapisha programu yako kamwe hakuwa rahisi hivyo. Fuata hatua hizi kwenda kutoka wazo hadi programu hai.";
t["learnPublishPage.steps.items.0.title"] = "Elezea Programu Yako";
t["learnPublishPage.steps.items.0.description"] = "Anza kwa kumwambia AppNode unachotaka kujenga. Tumia lugha ya kawaida kuelezea vipengele, muundo, na utendaji wa programu yako.";
t["learnPublishPage.steps.items.1.title"] = "Angalia Ikijengwa";
t["learnPublishPage.steps.items.1.description"] = "AI ya AppNode inazalisha programu yako kwa wakati halisi. Utaona msimbo ukiandikwa na programu yako ikichukua sura na hakiki ya papo hapo.";
t["learnPublishPage.steps.items.2.title"] = "Hakiki na Rudia";
t["learnPublishPage.steps.items.2.description"] = "Pima programu yako moja kwa moja kwenye kivinjari. Angalia jinsi inavyoonekana kwenye kompyuta, kibao, na simu. Omba mabadiliko, ongeza vipengele, au rekebisha muundo.";
t["learnPublishPage.steps.items.3.title"] = "Sambaza Papo Hapo";
t["learnPublishPage.steps.items.3.description"] = "Ukiwa tayari, chapisha programu yako kwa kubofya moja. Pata kikoa maalum, cheti cha SSL, na CDN ya kimataifa kiotomatiki.";
t["learnPublishPage.features.title"] = "Vipengele vya Usambazaji";
t["learnPublishPage.features.subtitle"] = "Kila kitu unachohitaji kuchapisha programu za kitaalamu kimejumuishwa.";
t["learnPublishPage.features.items.0.title"] = "Usambazaji kwa Kubofya Moja";
t["learnPublishPage.features.items.0.description"] = "Hakuna usanidi mgumu au usanidi. Bofya tu sambaza na programu yako ni hai.";
t["learnPublishPage.features.items.1.title"] = "Vikoa Maalum";
t["learnPublishPage.features.items.1.description"] = "Unganisha kikoa chako au tumia kikoa kidogo chetu cha bure kwa kuchapisha papo hapo.";
t["learnPublishPage.features.items.2.title"] = "Vyeti vya SSL";
t["learnPublishPage.features.items.2.description"] = "HTTPS otomatiki kwa programu zako zote. Usalama unakuja kwa kawaida.";
t["learnPublishPage.features.items.3.title"] = "CDN ya Kimataifa";
t["learnPublishPage.features.items.3.description"] = "Programu yako inahudumwa kutoka maeneo ya ukingo duniani kote kwa kasi ya ajabu.";
t["learnPublishPage.features.items.4.title"] = "Kurudisha Papo Hapo";
t["learnPublishPage.features.items.4.description"] = "Umekosea? Rudisha toleo lolote la awali kwa kubofya moja.";
t["learnPublishPage.features.items.5.title"] = "Uchambuzi Uliojengwa Ndani";
t["learnPublishPage.features.items.5.description"] = "Fuatilia wageni, kutazamwa kwa kurasa, na vipimo vya utendaji tangu mwanzo.";
t["learnPublishPage.tips.title"] = "Vidokezo kwa Matokeo Bora";
t["learnPublishPage.tips.items.0.bold"] = "Kuwa maalum:";
t["learnPublishPage.tips.items.0.text"] = "Elezea rangi, mpangilio, na utendaji unaotaka";
t["learnPublishPage.tips.items.1.bold"] = "Anza rahisi:";
t["learnPublishPage.tips.items.1.text"] = "Anza na vipengele vya msingi, kisha ongeza zaidi baada ya muda";
t["learnPublishPage.tips.items.2.bold"] = "Tumia rejea:";
t["learnPublishPage.tips.items.2.text"] = "Shiriki mifano ya programu au tovuti unazozipenda";
t["learnPublishPage.tips.items.3.bold"] = "Pima kwenye vifaa vyote:";
t["learnPublishPage.tips.items.3.text"] = "Angalia mwonekano wa kompyuta, kibao, na simu";
t["learnPublishPage.cta.title"] = "Uko Tayari Kujenga?";
t["learnPublishPage.cta.subtitle"] = "Anza kuunda programu yako leo. Hakuna uzoefu wa uandishi wa msimbo unaohitajika.";
t["learnPublishPage.cta.startButton"] = "Anza Kujenga Bure";
t["learnPublishPage.cta.docsButton"] = "Tazama Nyaraka";

// === BLOCKCHAIN SECTION ===
t["blockchainSection.badge"] = "Mfumo wa Ikolojia wa Minyororo Mingi";
t["blockchainSection.titleLine1"] = "JENGA CHOCHOTE KWENYE";
t["blockchainSection.titleLine2"] = "BLOCKCHAIN YOYOTE";
t["blockchainSection.titleLine3"] = "HARAKA KULIKO HAPO AWALI";
t["blockchainSection.description"] = "Love Code inafungua mfumo mzima wa kwenye mnyororo bila msuguano wowote. Kutoka majitu ya L1 hadi L2 mpya zaidi, unapata nguvu ya kuunda chochote.";
t["blockchainSection.descriptionHighlight"] = "Hakuna vikomo. Hakuna ugumu. Uundaji safi tu.";
t["blockchainSection.useCases.0"] = "Kurasa za Kutua";
t["blockchainSection.useCases.1"] = "Mauzo ya Awali ya Tokeni";
t["blockchainSection.useCases.2"] = "Uzinduzi wa NFT";
t["blockchainSection.useCases.3"] = "Dashibodi za DeFi";
t["blockchainSection.useCases.4"] = "Programu za Web3";
t["blockchainSection.useCases.5"] = "Zana za DAO";
t["blockchainSection.useCases.6"] = "Majukwaa ya Kuweka Hisa";
t["blockchainSection.useCases.7"] = "Tokeni za Meme";
t["blockchainSection.features.0.title"] = "Kasi ya Umeme";
t["blockchainSection.features.0.description"] = "Sambaza kwenye mnyororo wowote kwa sekunde, sio masaa";
t["blockchainSection.features.1.title"] = "Hakuna Msimbo Unaohitajika";
t["blockchainSection.features.1.description"] = "Jenga dApps ngumu kwa lugha ya kawaida";
t["blockchainSection.features.2.title"] = "Imejaribiwa Vitani";
t["blockchainSection.features.2.description"] = "Mikataba mahiri iliyokaguliwa na tayari kwa uzalishaji";
t["blockchainSection.features.3.title"] = "Mnyororo Mingi Asilia";
t["blockchainSection.features.3.description"] = "Misimbo moja, kila blockchain inasaidiwa";
t["blockchainSection.bottomText"] = "Ikiwa ipo kwenye blockchain, unaweza kuijenga hapa —";
t["blockchainSection.bottomHighlight"] = "rahisi zaidi, haraka zaidi, na kwa kiwango kipya kabisa.";
t["blockchainSection.ctaButton"] = "Anza Kujenga kwenye Web3";

// === SMALL LEFTOVERS ===
// buildAnything
t["buildAnything.categories.synthesizer"] = "Synthesizer";
// testimonials (names - keep as-is but mark translated)
t["testimonials.author1"] = "Sarah Chen";
t["testimonials.author2"] = "Mike Rodriguez";
t["testimonials.author3"] = "Emma Wilson";
// products (keep product names)
t["products.agent.title"] = "Wakala wa AI";
t["products.database.title"] = "Hifadhidata";
t["products.design.title"] = "Studio ya Muundo";
t["products.integrations.title"] = "Ujumuishaji";
t["products.mobile.title"] = "Simu";
t["products.publish.title"] = "Chapisha";
// productAgent
t["productAgent.titleHighlight"] = "Wakala";
t["productAgent.demo.agent"] = "Wakala";
// productIntegrations
t["productIntegrations.categories.ai"] = "AI";
t["productIntegrations.categories.cdn"] = "CDN";
// productMobile
t["productMobile.appStore"] = "App Store";
t["productMobile.playStore"] = "Play Store";
// productSecurity
t["productSecurity.badges.iso"] = "ISO 27001";
// pricing
t["pricing.free.price"] = "$0";
t["pricing.pro.name"] = "Pro";
t["pricing.pro.price"] = "$29";
t["pricing.enterprise.price"] = "Maalum";
t["pricing.enterprise.period"] = "";
// enterprisePage testimonials (names/companies - keep as-is)
t["enterprisePage.testimonials.testimonial1.author"] = "Sarah Chen";
t["enterprisePage.testimonials.testimonial1.company"] = "TechCorp";
t["enterprisePage.testimonials.testimonial2.author"] = "Michael Torres";
t["enterprisePage.testimonials.testimonial2.role"] = "CTO";
t["enterprisePage.testimonials.testimonial2.company"] = "FinanceApp";
t["enterprisePage.testimonials.testimonial3.author"] = "Emily Watson";
t["enterprisePage.testimonials.testimonial3.company"] = "DesignStudio";
t["enterprisePage.testimonials.testimonial4.author"] = "James Kim";
t["enterprisePage.testimonials.testimonial4.company"] = "CloudScale";
t["enterprisePage.testimonials.testimonial5.author"] = "Anika Larsson";
t["enterprisePage.testimonials.testimonial5.company"] = "SecureBank";
t["enterprisePage.testimonials.testimonial6.author"] = "Ryan Park";
t["enterprisePage.testimonials.testimonial6.company"] = "DataFlow";
t["enterprisePage.form.namePlaceholder"] = "John Smith";
// blogPage
t["blogPage.categories.ai"] = "AI";
// privacyPage
t["privacyPage.section11.company"] = "AppNode Inc.";
// termsPage
t["termsPage.intro.p2"] = "Kwa kufikia, kusajili, au kutumia Huduma kwa njia yoyote, wewe (\"Mtumiaji,\" \"wewe,\" au \"yako\") unakubali kuwa na wajibu wa kisheria";
t["termsPage.section16.company"] = "AppNode Inc.";
// securityPage icons/names (keep as-is)
t["securityPage.features.0.icon"] = "🔐";
t["securityPage.features.1.icon"] = "🛡️";
t["securityPage.features.2.icon"] = "🔒";
t["securityPage.features.3.icon"] = "🌐";
t["securityPage.features.4.icon"] = "📝";
t["securityPage.features.5.icon"] = "🔍";
t["securityPage.features.6.icon"] = "💾";
t["securityPage.features.7.icon"] = "🚨";
t["securityPage.certifications.0.name"] = "SOC 2 Aina II";
t["securityPage.certifications.0.icon"] = "✓";
t["securityPage.certifications.1.name"] = "GDPR";
t["securityPage.certifications.1.icon"] = "✓";
t["securityPage.certifications.2.name"] = "CCPA";
t["securityPage.certifications.2.icon"] = "✓";
t["securityPage.certifications.3.name"] = "ISO 27001";
t["securityPage.certifications.3.icon"] = "✓";
// profilePage
t["profilePage.notSpecified"] = "Haijabainishwa";
// learnPage
t["learnPage.titleHighlight"] = "AppNode";

// Apply
for (const [pathStr, value] of Object.entries(t)) {
  setByPath(sw, pathStr, value);
}

fs.writeFileSync(
  path.join(__dirname, 'src/translations/sw.json'),
  JSON.stringify(sw, null, 2) + '\n'
);

console.log('Phase 7 done! Applied', Object.keys(t).length, 'translations');
