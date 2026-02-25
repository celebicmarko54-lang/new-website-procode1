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

// === STATUS PAGE ===
t["statusPage.subtitle"] = "Hali ya wakati halisi na taarifa za upatikanaji kwa huduma za AppNode";
t["statusPage.allOperational"] = "Mifumo Yote Inafanya Kazi";
t["statusPage.uptimeTitle"] = "Upatikanaji - Siku 7 Zilizopita";
t["statusPage.servicesTitle"] = "Huduma";
t["statusPage.incidentsTitle"] = "Matukio ya Hivi Karibuni";
t["statusPage.subscribeTitle"] = "Pata Masasisho ya Hali";
t["statusPage.subscribeSubtitle"] = "Jiandikishe kupokea arifa kuhusu hali ya mfumo na matukio";
t["statusPage.subscribeButton"] = "Jiandikishe";

// === SECURITY PAGE ===
t["securityPage.badge"] = "Usalama wa Kiwango cha Biashara";
t["securityPage.titleSuffix"] = "Kwanza";
t["securityPage.subtitle"] = "Usalama wa data yako ni kipaumbele chetu cha juu. Jifunze kuhusu hatua tunazochukua kulinda taarifa zako.";
t["securityPage.featuresTitle"] = "Vipengele vya Usalama";
t["securityPage.practicesTitle"] = "Mazoea Yetu ya Usalama";
t["securityPage.bugBountyTitle"] = "Programu ya Tuzo ya Hitilafu";
t["securityPage.bugBountyDescription"] = "Tusaidie kuboresha usalama na upate tuzo kwa kufichua udhaifu kwa uwajibikaji.";
t["securityPage.reportTitle"] = "Ripoti Tatizo la Usalama";
t["securityPage.reportDescription"] = "Ikiwa unaamini umepata udhaifu wa usalama katika AppNode, tafadhali uripoti kwa timu yetu ya usalama mara moja.";
t["securityPage.whitepaper"] = "Karatasi ya Usalama";
t["securityPage.features.0.title"] = "Usimbaji wa Kupumzika na Kusafiri";
t["securityPage.features.0.description"] = "Data yote imesimbwa kwa kutumia usimbaji wa AES-256 wakati wa kupumzika na TLS 1.3 kwa data inayosafiri.";
t["securityPage.features.1.title"] = "SOC 2 Aina II Imethibitishwa";
t["securityPage.features.1.description"] = "Tunadumisha utiifu wa SOC 2 Aina II, unaothibitishwa na wakaguzi wa kujitegemea wa nje.";
t["securityPage.features.2.title"] = "Uthibitishaji wa Hatua Mbili";
t["securityPage.features.2.description"] = "Linda akaunti yako na 2FA kwa kutumia programu za kuthibitisha au funguo za usalama za maunzi.";
t["securityPage.features.3.title"] = "SSO na SAML";
t["securityPage.features.3.description"] = "Kuingia moja kwa moja kwa kiwango cha biashara na msaada wa SAML 2.0 na watoa huduma wa OAuth.";
t["securityPage.features.4.title"] = "Kumbukumbu za Ukaguzi";
t["securityPage.features.4.description"] = "Kumbukumbu kamili za ukaguzi kwa shughuli zote za akaunti na mabadiliko.";
t["securityPage.features.5.title"] = "Ukaguzi wa Udhaifu";
t["securityPage.features.5.description"] = "Ukaguzi otomatiki endelevu wa usalama na upimaji wa mara kwa mara wa kupenya.";
t["securityPage.features.6.title"] = "Nakala Rudufu ya Data";
t["securityPage.features.6.description"] = "Nakala rudufu za kiotomatiki za kila siku zenye uwezo wa kurejesha wa wakati maalum.";
t["securityPage.features.7.title"] = "Jibu la Matukio";
t["securityPage.features.7.description"] = "Ufuatiliaji wa usalama wa masaa 24/7 na taratibu za haraka za kujibu matukio.";
t["securityPage.certifications.0.description"] = "Usalama, Upatikanaji na Usiri";
t["securityPage.certifications.1.description"] = "Utiifu wa Ulinzi wa Data wa EU";
t["securityPage.certifications.2.description"] = "Sheria ya Haki za Faragha ya California";
t["securityPage.certifications.3.description"] = "Usimamizi wa Usalama wa Taarifa";
t["securityPage.practices.0.title"] = "Maendeleo Salama";
t["securityPage.practices.0.items.0"] = "Ukaguzi wa msimbo kwa mabadiliko yote";
t["securityPage.practices.0.items.1"] = "Upimaji otomatiki wa usalama katika CI/CD";
t["securityPage.practices.0.items.2"] = "Ukaguzi wa udhaifu wa utegemezi";
t["securityPage.practices.0.items.3"] = "Mafunzo ya mara kwa mara ya usalama kwa waendelezaji";
t["securityPage.practices.1.title"] = "Usalama wa Miundombinu";
t["securityPage.practices.1.items.0"] = "Miundombinu ya wingu kwenye AWS/GCP";
t["securityPage.practices.1.items.1"] = "Mgawanyo wa mtandao na ngome";
t["securityPage.practices.1.items.2"] = "Ulinzi na kupunguza DDoS";
t["securityPage.practices.1.items.3"] = "Mifumo ya ugundaji wa uvamizi";
t["securityPage.practices.2.title"] = "Udhibiti wa Ufikiaji";
t["securityPage.practices.2.items.0"] = "Udhibiti wa ufikiaji kulingana na jukumu (RBAC)";
t["securityPage.practices.2.items.1"] = "Kanuni ya ufikiaji mdogo zaidi";
t["securityPage.practices.2.items.2"] = "Ukaguzi wa mara kwa mara wa ufikiaji";
t["securityPage.practices.2.items.3"] = "Usimamizi salama wa stakabadhi";

// === CHANGELOG PAGE ===
t["changelogPage.badge"] = "Masasisho";
t["changelogPage.title"] = "Rekodi ya Mabadiliko";
t["changelogPage.subtitle"] = "Masasisho yote ya hivi karibuni, maboresho, na marekebisho kwa AppNode";
t["changelogPage.stayUpToDate"] = "Kaa na habari za hivi karibuni";
t["changelogPage.getNotified"] = "Pokea arifa tunapotoa vipengele vipya";
t["changelogPage.subscribeButton"] = "Jiandikishe";
t["changelogPage.viewOlder"] = "Tazama toleo za zamani";
t["changelogPage.changeTypes.new"] = "Mpya";
t["changelogPage.changeTypes.improved"] = "Imeboreshwa";
t["changelogPage.changeTypes.fixed"] = "Imerekebishwa";
t["changelogPage.releases.v250.date"] = "Novemba 28, 2025";
t["changelogPage.releases.v250.title"] = "Mitindo Mahiri na Mpangilio Otomatiki";
t["changelogPage.releases.v250.description"] = "Kuanzisha muundo unaotumia AI unaoundia kiotomatiki miundo nzuri na thabiti kwa programu zako.";
t["changelogPage.releases.v250.changes.0"] = "Mitindo Mahiri: AI inatumia kiotomatiki muundo thabiti kwenye programu yako yote";
t["changelogPage.releases.v250.changes.1"] = "Mpangilio Otomatiki: Mpangilio wa akili unaojibika unaobadilika kulingana na maudhui";
t["changelogPage.releases.v250.changes.2"] = "Mapendekezo ya mandhari: Chagua kutoka mandhari 20+ zilizoundwa kitaalamu";
t["changelogPage.releases.v250.changes.3"] = "Uzalishaji wa haraka wa msimbo na maagizo yaliyoboreshwa";
t["changelogPage.releases.v250.changes.4"] = "Msaada bora wa TypeScript kwenye msimbo unaozalishwa";
t["changelogPage.releases.v250.changes.5"] = "Matatizo ya mpangilio kwenye vifaa vya simu yamerekebishwa";
t["changelogPage.releases.v242.date"] = "Novemba 15, 2025";
t["changelogPage.releases.v242.title"] = "Maboresho ya Utendaji";
t["changelogPage.releases.v242.description"] = "Uboreshaji mkubwa wa utendaji na marekebisho ya hitilafu.";
t["changelogPage.releases.v242.changes.0"] = "Nyakati za kupakia mradi haraka kwa 50%";
t["changelogPage.releases.v242.changes.1"] = "Matumizi ya kumbukumbu yamepunguzwa kwenye kihariri";
t["changelogPage.releases.v242.changes.2"] = "Imerekebisha uhamishaji wa msimbo unaoshindwa kwa miradi mikubwa";
t["changelogPage.releases.v242.changes.3"] = "Matatizo ya uthibitishaji na watoa huduma wa nje yamerekebishwa";
t["changelogPage.releases.v240.date"] = "Novemba 1, 2025";
t["changelogPage.releases.v240.title"] = "Ushirikiano wa Timu";
t["changelogPage.releases.v240.description"] = "Fanya kazi pamoja na timu yako kwa wakati halisi.";
t["changelogPage.releases.v240.changes.0"] = "Ushirikiano wa wakati halisi: Watumiaji wengi wanaweza kuhariri kwa wakati mmoja";
t["changelogPage.releases.v240.changes.1"] = "Maeneo ya kazi ya timu yenye ruhusa kulingana na jukumu";
t["changelogPage.releases.v240.changes.2"] = "Maoni na mrejesho kwenye vipengele";
t["changelogPage.releases.v240.changes.3"] = "Historia ya toleo yenye utendaji wa kurejesha";
t["changelogPage.releases.v240.changes.4"] = "Utatuzi bora wa migogoro kwa uhariri wa wakati mmoja";
t["changelogPage.releases.v230.date"] = "Oktoba 15, 2025";
t["changelogPage.releases.v230.title"] = "Ujumuishaji wa Hifadhidata";
t["changelogPage.releases.v230.description"] = "Unganisha programu zako na hifadhidata kwa urahisi.";
t["changelogPage.releases.v230.changes.0"] = "Ujumuishaji wa Supabase kwa hifadhidata za PostgreSQL";
t["changelogPage.releases.v230.changes.1"] = "Muundo wa kuona wa schema ya hifadhidata";
t["changelogPage.releases.v230.changes.2"] = "Operesheni zilizozalishwa kiotomatiki za CRUD";
t["changelogPage.releases.v230.changes.3"] = "Usajili wa data wa wakati halisi";
t["changelogPage.releases.v230.changes.4"] = "Ushughulikiaji bora wa miunganisho ya hifadhidata";
t["changelogPage.releases.v230.changes.5"] = "Matatizo ya kupata data kwenye mijengo ya uzalishaji yamerekebishwa";
t["changelogPage.releases.v220.date"] = "Septemba 28, 2025";
t["changelogPage.releases.v220.title"] = "Maktaba ya Vipengele";
t["changelogPage.releases.v220.description"] = "Maktaba iliyopanuliwa ya vipengele yenye vipengele 100+ vipya.";
t["changelogPage.releases.v220.changes.0"] = "Vipengele 100+ vipya vilivyojengwa tayari";
t["changelogPage.releases.v220.changes.1"] = "Vipengele vya chati na taswira ya data";
t["changelogPage.releases.v220.changes.2"] = "Kijenzi cha fomu yenye uthibitishaji";
t["changelogPage.releases.v220.changes.3"] = "Maktaba ya mapendekezo ya uhuishaji";
t["changelogPage.releases.v220.changes.4"] = "Utafutaji na uchujaji wa vipengele";
t["changelogPage.releases.v210.date"] = "Septemba 10, 2025";
t["changelogPage.releases.v210.title"] = "Uthibitishaji Umefanywa Rahisi";
t["changelogPage.releases.v210.description"] = "Ongeza uthibitishaji wa mtumiaji kwenye programu zako kwa sekunde.";
t["changelogPage.releases.v210.changes.0"] = "Usanidi wa uthibitishaji wa kubofya moja";
t["changelogPage.releases.v210.changes.1"] = "Watoa huduma wa kuingia kwa mitandao ya kijamii (Google, GitHub, n.k.)";
t["changelogPage.releases.v210.changes.2"] = "Dashibodi ya usimamizi wa watumiaji";
t["changelogPage.releases.v210.changes.3"] = "Mtiririko wa kuweka upya nenosiri";
t["changelogPage.releases.v210.changes.4"] = "Maboresho ya usalama kwa tokeni za uthibitishaji";

// === DASHBOARD PAGE ===
t["dashboardPage.welcome"] = "Karibu";
t["dashboardPage.loggedInAs"] = "Umeingia kama";
t["dashboardPage.comingSoon"] = "INAKUJA HIVI KARIBUNI";
t["dashboardPage.buildingMagic"] = "Tunakujengea kitu cha ajabu";
t["dashboardPage.signOut"] = "Toka";

// === SETTINGS PAGE ===
t["settingsPage.generalSettings"] = "Mipangilio ya Jumla";
t["settingsPage.timezone"] = "Saa za Eneo";
t["settingsPage.darkMode"] = "Hali ya Giza";
t["settingsPage.darkModeDesc"] = "Tumia mandhari ya giza kwenye programu nzima";
t["settingsPage.notificationPreferences"] = "Mapendekezo ya Arifa";
t["settingsPage.emailNotifications"] = "Arifa za Barua Pepe";
t["settingsPage.emailNotificationsDesc"] = "Pokea masasisho ya mradi kupitia barua pepe";
t["settingsPage.pushNotifications"] = "Arifa za Kusukuma";
t["settingsPage.pushNotificationsDesc"] = "Pokea arifa za kusukuma kwenye kivinjari";
t["settingsPage.marketingEmails"] = "Barua Pepe za Uuzaji";
t["settingsPage.marketingEmailsDesc"] = "Pokea vidokezo, masasisho, na ofa";
t["settingsPage.securitySettings"] = "Mipangilio ya Usalama";
t["settingsPage.passwordLastChanged"] = "Ilibadilishwa mwisho siku 30 zilizopita";
t["settingsPage.changePassword"] = "Badilisha Nenosiri";
t["settingsPage.twoFactorAuth"] = "Uthibitishaji wa Hatua Mbili";
t["settingsPage.twoFactorAuthDesc"] = "Ongeza safu ya ziada ya usalama";
t["settingsPage.enable2FA"] = "Wezesha 2FA";
t["settingsPage.activeSessions"] = "Vikao Hai";
t["settingsPage.activeSessionsDesc"] = "Simamia vikao vyako hai";
t["settingsPage.viewSessions"] = "Tazama Vikao";
t["settingsPage.dangerZone"] = "Kanda ya Hatari";
t["settingsPage.deleteAccount"] = "Futa Akaunti";
t["settingsPage.deleteAccountDesc"] = "Futa akaunti yako na data yote milele";
t["settingsPage.deleteAccountConfirm"] = "Futa Akaunti?";
t["settingsPage.deleteAccountWarning"] = "Kitendo hiki hakiwezi kutenduliwa. Data yako yote itafutwa milele.";

// === PROFILE PAGE ===
t["profilePage.editProfile"] = "Hariri Wasifu";
t["profilePage.fullName"] = "Jina Kamili";
t["profilePage.email"] = "Barua Pepe";
t["profilePage.role"] = "Jukumu";
t["profilePage.companyOptional"] = "Kampuni (hiari)";
t["profilePage.companyPlaceholder"] = "Jina la kampuni yako";
t["profilePage.avatarColor"] = "Rangi ya Avatar";
t["profilePage.memberSince"] = "Mwanachama Tangu";
t["profilePage.saveChanges"] = "Hifadhi Mabadiliko";
t["profilePage.saving"] = "Inahifadhi...";
t["profilePage.totalProjects"] = "Miradi ya Jumla";

// === BILLING PAGE ===
t["billingPage.currentPlan"] = "Mpango wa Sasa";
t["billingPage.upgradeToUnlock"] = "Pandisha ili kufungua vipengele zaidi";
t["billingPage.planRenews"] = "Mpango wako unasasishwa Des 1, 2025";
t["billingPage.freePlan"] = "Mpango wa Bure";
t["billingPage.active"] = "Hai";
t["billingPage.availablePlans"] = "Mipango Inayopatikana";
t["billingPage.mostPopular"] = "Maarufu Zaidi";
t["billingPage.currentPlanLabel"] = "Mpango wa Sasa";
t["billingPage.upgrade"] = "Pandisha";
t["billingPage.downgrade"] = "Shusha";
t["billingPage.paymentMethod"] = "Njia ya Malipo";
t["billingPage.noPaymentRequired"] = "Hakuna njia ya malipo inayohitajika kwa mpango wa bure.";
t["billingPage.edit"] = "Hariri";
t["billingPage.billingHistory"] = "Historia ya Malipo";
t["billingPage.upgradeToTitle"] = "Pandisha hadi";
t["billingPage.upgradeAccessMessage"] = "Utapata ufikiaji wa vipengele vyote vya";
t["billingPage.featuresImmediately"] = "mara moja.";
t["billingPage.confirmUpgrade"] = "Thibitisha Kupandisha";

// === TEAMS PAGE ===
t["teamsPage.badge"] = "Ushirikiano wa Timu";
t["teamsPage.titleStart"] = "Jenga Pamoja na";
t["teamsPage.titleHighlight"] = "Timu";
t["teamsPage.subtitle"] = "Peleka nguvu ya AppNode kwa timu yako nzima. Shirikiana kwa wakati halisi, shiriki miradi, na utume haraka pamoja.";
t["teamsPage.startTeamTrial"] = "Anza Jaribio la Timu";
t["teamsPage.enterpriseOptions"] = "Chaguo za Biashara";
t["teamsPage.teamWorkspace"] = "Eneo la Kazi la Timu";
t["teamsPage.online"] = "mtandaoni";
t["teamsPage.teamProjects"] = "Miradi ya Timu";
t["teamsPage.activity"] = "Shughuli";
t["teamsPage.teamFeatures"] = "Vipengele vya Timu";
t["teamsPage.startFreeTeamTrial"] = "Anza Jaribio la Bure la Timu";
t["teamsPage.pricing.title"] = "Bei ya Timu";
t["teamsPage.pricing.subtitle"] = "Bei rahisi, wazi kwa timu za ukubwa wote.";
t["teamsPage.pricing.billedAnnually"] = "Inalipwa kwa mwaka";
t["teamsPage.cta.title"] = "Uko tayari kujenga pamoja?";
t["teamsPage.cta.subtitle"] = "Peleka timu yako kwenye AppNode na utume haraka kuliko hapo awali.";

// === VIDEOS PAGE ===
t["videosPage.badge"] = "Kujifunza kwa Video";
t["videosPage.titleStart"] = "Jinsi";
t["videosPage.titleHighlight"] = "inavyofanya kazi";
t["videosPage.subtitle"] = "Jifunze kila kitu kuhusu AppNode na mafunzo yetu kamili ya video. Kutoka mradi wako wa kwanza hadi kusambaza kwenye Cloudflare.";
t["videosPage.featured"] = "Pendwa";
t["videosPage.playlists"] = "Orodha za Kucheza";
t["videosPage.viewAll"] = "Tazama yote";
t["videosPage.views"] = "mitazamo";
t["videosPage.featuredVideo.title"] = "Mafunzo Kamili ya AppNode: Kutoka Sifuri hadi Programu Iliyosambazwa";
t["videosPage.featuredVideo.description"] = "Mwongozo kamili wa kujenga na kusambaza programu yako ya kwanza na AppNode. Jifunze kila kitu kutoka usanidi wa akaunti hadi usambazaji.";
t["videosPage.cta.title"] = "Uko Tayari Kuanza Kujenga?";
t["videosPage.cta.subtitle"] = "Jiunge na maelfu ya wabunifu wanaojenga programu za kushangaza na AppNode.";
t["videosPage.cta.startBuildingFree"] = "Anza Kujenga Bure";
t["videosPage.cta.browseCourses"] = "Vinjari Kozi";
t["videosPage.cta.subscribeYouTube"] = "Jiandikishe kwenye YouTube";

// Apply all
for (const [pathStr, value] of Object.entries(t)) {
  setByPath(sw, pathStr, value);
}

fs.writeFileSync(
  path.join(__dirname, 'src/translations/sw.json'),
  JSON.stringify(sw, null, 2) + '\n'
);

console.log('Phase 4 done! Applied', Object.keys(t).length, 'translations');
