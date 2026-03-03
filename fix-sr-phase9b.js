const fs = require('fs');
const path = require('path');

const srPath = path.join(__dirname, 'src/translations/sr.json');
const sr = JSON.parse(fs.readFileSync(srPath, 'utf8'));

function set(obj, keyPath, value) {
  const parts = keyPath.split('.');
  let current = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (!current[parts[i]]) current[parts[i]] = {};
    current = current[parts[i]];
  }
  current[parts[parts.length - 1]] = value;
}

const translations = {
  // Search and navigation
  "reportPage.searchPlaceholder": "Pretraži dokumentaciju...",
  "reportPage.copyPage": "Kopiraj stranicu",

  // Sections
  "reportPage.sections.gettingStarted": "Početak rada",
  "reportPage.sections.trustSafety": "Poverenje i bezbednost",
  "reportPage.sections.tutorials": "Tutorijali",
  "reportPage.sections.teamsEnterprise": "Timovi i preduzeća",
  "reportPage.sections.changelog": "Evidencija promena",

  // Items - Getting Started
  "reportPage.items.introduction": "Uvod",
  "reportPage.items.quickstart": "Vodiči za brzi početak",
  "reportPage.items.createAi": "Kreirajte pomoću AI",
  "reportPage.items.buildScratch": "Izgradite od nule",
  "reportPage.items.importGithub": "Uvezite sa GitHub-a",

  // Items - Trust & Safety
  "reportPage.items.trustOverview": "Pregled",
  "reportPage.items.reportingAbuse": "Prijavljivanje zloupotrebe",
  "reportPage.items.copyrightClaims": "Zahtevi za autorska prava",
  "reportPage.items.platformRules": "Pravila platforme",
  "reportPage.items.securityOverview": "Pregled bezbednosti",
  "reportPage.items.dataProtection": "Zaštita podataka",

  // Items - Tutorials
  "reportPage.items.generateCode": "Kako generisati kod",
  "reportPage.items.firstApp": "Izgradnja vaše prve aplikacije",
  "reportPage.items.databases": "Izgradnja sa bazama podataka",
  "reportPage.items.deploying": "Objavljivanje vaše aplikacije",

  // Items - Teams & Enterprise
  "reportPage.items.teamsOverview": "Pregled timova",
  "reportPage.items.enterpriseFeatures": "Funkcije za preduzeća",
  "reportPage.items.collaboration": "Saradnja",

  // Items - Changelog
  "reportPage.items.recentUpdates": "Nedavna ažuriranja",
  "reportPage.items.roadmap": "Plan razvoja",

  // Content - Welcome
  "reportPage.content.welcomeTitle": "Dobrodošli na AppNode",
  "reportPage.content.welcomeDescription": "AppNode je razvojna platforma pokretana veštačkom inteligencijom koja vam omogućava da izgradite kompletne veb aplikacije samo opisujući šta želite. Nije potrebno iskustvo u programiranju — deluje kao da imate ceo tim koji radi za vas.",

  // What You Can Build
  "reportPage.content.whatYouCanBuild": "Šta možete izgraditi",
  "reportPage.content.whatYouCanBuildItems.fullStack": "Full-stack veb aplikacije sa bazama podataka",
  "reportPage.content.whatYouCanBuildItems.landingPages": "Landing stranice i marketinške veb stranice",
  "reportPage.content.whatYouCanBuildItems.dashboards": "Kontrolne table i admin paneli",
  "reportPage.content.whatYouCanBuildItems.ecommerce": "E-commerce prodavnice i portfolija",
  "reportPage.content.whatYouCanBuildItems.saas": "SaaS proizvodi i interni alati",

  // Steps
  "reportPage.content.steps.describe": "Opišite",
  "reportPage.content.steps.describeText": "Recite AI šta želite da izgradite",
  "reportPage.content.steps.generate": "Generišite",
  "reportPage.content.steps.generateText": "AI piše kod spreman za produkciju",
  "reportPage.content.steps.preview": "Pregledajte",
  "reportPage.content.steps.previewText": "Pogledajte svoju aplikaciju uživo odmah",
  "reportPage.content.steps.deploy": "Objavite",
  "reportPage.content.steps.deployText": "Objavljivanje u produkciju jednim klikom",

  // Quickstart
  "reportPage.content.quickstartTitle": "Vodiči za brzi početak",
  "reportPage.content.quickstartDescription": "Počnite da koristite AppNode za nekoliko minuta. Izaberite svoj put na osnovu toga kako želite da počnete da gradite.",
  "reportPage.content.stepByStepGuide": "Vodič korak po korak",
  "reportPage.content.startNewProject": "Pokrenite novi projekat",
  "reportPage.content.startNewProjectDesc": "Kliknite na \"Kreiraj novo\" sa vaše kontrolne table ili početne stranice",
  "reportPage.content.reviewBlueprint": "Pregledajte nacrt",
  "reportPage.content.reviewBlueprintDesc": "AI generiše nacrt projekta sa funkcijama, dizajnom i arhitekturom. Možete ga usavršiti.",
  "reportPage.content.watchItBuild": "Gledajte kako se gradi",
  "reportPage.content.watchItBuildDesc": "AI piše kod za svaku komponentu. Gledajte kako se fajlovi pojavljuju u realnom vremenu sa pregledom uživo.",
  "reportPage.content.testIterate": "Testirajte i poboljšajte",
  "reportPage.content.testIterateDesc": "Isprobajte svoju aplikaciju u pregledu. Zamolite AI da izvrši izmene ili doda funkcije.",

  // Tips
  "reportPage.content.tipsForBetterResults": "Saveti za bolje rezultate",
  "reportPage.content.tipSpecific": "Budite konkretni:",
  "reportPage.content.tipSpecificDesc": "Umesto \"napravi veb stranicu\", recite \"kreiraj portfolio veb stranicu sa tamnom temom, galerijom projekata i kontakt formom\"",
  "reportPage.content.tipFeatures": "Opišite funkcije:",
  "reportPage.content.tipFeaturesDesc": "Navedite ključne funkcije koje su vam potrebne — autentifikacija, baza podataka, otpremanje fajlova, itd.",
  "reportPage.content.tipDesign": "Navedite željeni dizajn:",
  "reportPage.content.tipDesignDesc": "Boje, stil (minimalan, upečatljiv, razigran) i željeni raspored pomažu AI da odgovori vašoj viziji",
  "reportPage.content.tipIterate": "Poboljšavajte postepeno:",
  "reportPage.content.tipIterateDesc": "Počnite jednostavno, a zatim zamolite AI da postepeno dodaje više funkcija",

  // Workspace Features
  "reportPage.content.workspaceFeatures": "Funkcije radnog prostora",
  "reportPage.content.terminal": "Terminal:",
  "reportPage.content.terminalDesc": "Pokretanje komandi, instaliranje paketa i upravljanje okruženjem",
  "reportPage.content.livePreview": "Pregled uživo:",
  "reportPage.content.livePreviewDesc": "Vidite promene odmah dok kodirate",
  "reportPage.content.versionControl": "Kontrola verzija:",
  "reportPage.content.versionControlDesc": "Ugrađena git integracija za praćenje promena",

  // Import from GitHub
  "reportPage.content.importGithubTitle": "Uvezite sa GitHub-a",
  "reportPage.content.selectRepository": "Izaberite repozitorijum",
  "reportPage.content.selectRepositoryDesc": "Izaberite iz svojih repozitorijuma ili nalepite URL bilo kog javnog repozitorijuma",
  "reportPage.content.whatHappensAfterImport": "Šta se dešava nakon uvoza",
  "reportPage.content.privateRepoNote": "Napomena:",
  "reportPage.content.privateRepoNoteDesc": "Za privatne repozitorijume, moraćete da autorizujete pristup GitHub-u. Tražimo samo minimalne dozvole potrebne za kloniranje vašeg koda.",
  "reportPage.content.minutes": "minuta",
  "reportPage.content.minute": "minut",

  // Templates
  "reportPage.content.useTemplate": "Koristite šablon",
  "reportPage.content.useTemplateDesc": "Počnite od unapred napravljenog šablona i prilagodite ga",
  "reportPage.content.reactVite": "React + Vite",
  "reportPage.content.reactViteDesc": "Brzo, moderno React podešavanje",
  "reportPage.content.nextjs": "Next.js",
  "reportPage.content.nextjsDesc": "Full-stack React okvir",
  "reportPage.content.vue3": "Vue 3",
  "reportPage.content.vue3Desc": "Progresivni JavaScript okvir",
  "reportPage.content.svelte": "Svelte",
  "reportPage.content.svelteDesc": "Okvir za kompajliranje",
  "reportPage.content.astro": "Astro",
  "reportPage.content.vanillaJs": "Vanilla JS",
  "reportPage.content.vanillaJsDesc": "Bez okvira, čist JavaScript",

  // Trust & Safety
  "reportPage.content.trustOverviewTitle": "Poverenje i bezbednost na AppNode-u",
  "reportPage.content.trustOverviewDesc": "Posvećeni smo održavanju bezbedne i pouzdane platforme za sve korisnike. Naš tim za poverenje i bezbednost radi neprekidno kako bi osigurao da AppNode ostane prostor gde kreatori mogu da grade bez straha.",
  "reportPage.content.ourCommitment": "Naša posvećenost",
  "reportPage.content.userReports": "Prijave korisnika",
  "reportPage.content.userReportsDesc": "Zajednica pomaže u identifikovanju problema",
  "reportPage.content.swiftAction": "Brza akcija",
  "reportPage.content.swiftActionDesc": "Brz odgovor na kršenja",

  // Reporting Abuse
  "reportPage.content.reportingAbuseTitle": "Prijavljivanje zloupotrebe",
  "reportPage.content.reportingAbuseDesc": "Ako naiđete na sadržaj ili ponašanje koje krši naše politike, odmah ga prijavite. Sve prijave shvatamo ozbiljno i brzo ih istražujemo.",
  "reportPage.content.whatWeInvestigate": "Šta istražujemo",
  "reportPage.content.investigate1": "Uznemiravanje ili pretnje",
  "reportPage.content.investigate2": "Malver ili zlonamerni kod",
  "reportPage.content.investigate3": "Kršenje autorskih prava",
  "reportPage.content.investigate4": "Spam ili pokušaji fišinga",
  "reportPage.content.investigate5": "Nezakonit sadržaj",

  // Terms of Service
  "reportPage.content.termsLastUpdated": "Poslednje ažuriranje: januar 2025.",
  "reportPage.content.termsIntro": "Ovi Uslovi korišćenja (\"Uslovi\") regulišu vaš pristup i korišćenje usluga, veb stranica i aplikacija AppNode-a (\"Usluge\"). Korišćenjem naših Usluga, pristajete na ove Uslove.",
  "reportPage.content.userAccounts": "3. Korisnički nalozi",
  "reportPage.content.userAccountsDesc": "Za korišćenje određenih funkcija, morate kreirati nalog. Saglasni ste da:",
  "reportPage.content.userAccount1": "Pružite tačne i potpune informacije",
  "reportPage.content.userAccount2": "Održavate bezbednost podataka za pristup vašem nalogu",
  "reportPage.content.userAccount3": "Prihvatite odgovornost za sve aktivnosti na vašem nalogu",
  "reportPage.content.userAccount4": "Odmah nas obavestite o svakoj neovlašćenoj upotrebi",

  // Intellectual Property & Termination
  "reportPage.content.intellectualProperty": "5. Intelektualna svojina",
  "reportPage.content.intellectualPropertyDesc": "Zadržavate vlasništvo nad sadržajem koji kreirate koristeći naše Usluge. Korišćenjem naših Usluga, dajete nam ograničenu licencu za hostovanje, prikazivanje i distribuciju vašeg sadržaja u meri potrebnoj za pružanje Usluga.",
  "reportPage.content.termination": "6. Raskid",
  "reportPage.content.terminationDesc": "Zadržavamo pravo da suspendujemo ili ukinemo vaš nalog zbog kršenja ovih Uslova ili iz bilo kog drugog razloga po našem nahođenju. Takođe možete ukinuti svoj nalog u bilo kom trenutku.",
  "reportPage.content.termsContact": "8. Kontakt",
  "reportPage.content.termsContactDesc": "Za pitanja o ovim Uslovima, kontaktirajte nas na contact@appnode.ai",

  // Privacy Policy
  "reportPage.content.privacyLastUpdated": "Poslednje ažuriranje: januar 2025.",
  "reportPage.content.privacyIntro": "Ova Politika privatnosti opisuje kako AppNode prikuplja, koristi i deli informacije o vama kada koristite naše usluge.",
  "reportPage.content.infoWeCollect": "Informacije koje prikupljamo",
  "reportPage.content.infoCollect1": "Informacije o nalogu (e-pošta, ime, profil)",
  "reportPage.content.infoCollect2": "Podaci o korišćenju (korišćene funkcije, kreirani projekti)",
  "reportPage.content.infoCollect3": "Informacije o uređaju (pregledač, OS, IP adresa)",
  "reportPage.content.infoCollect4": "Informacije o plaćanju (obrađene od strane bezbednih provajdera)",
  "reportPage.content.useInfo1": "Pružanje i poboljšanje naših usluga",
  "reportPage.content.useInfo2": "Obrada transakcija i slanje povezanih informacija",
  "reportPage.content.useInfo3": "Slanje tehničkih obaveštenja i poruka podrške",
  "reportPage.content.useInfo4": "Odgovaranje na vaše komentare i pitanja",
  "reportPage.content.privacyContact": "Kontakt",
  "reportPage.content.privacyContactDesc": "Za pitanja vezana za privatnost, kontaktirajte nas na contact@appnode.ai",

  // Platform Rules
  "reportPage.content.platformRulesTitle": "Pravila platforme",
  "reportPage.content.platformRulesDesc": "Ova pravila pomažu u održavanju bezbednog i produktivnog okruženja za sve korisnike AppNode-a.",
  "reportPage.content.prohibitedContent": "Zabranjen sadržaj",
  "reportPage.content.prohibited1": "Malver, virusi ili zlonamerni kod",
  "reportPage.content.prohibited2": "Fišing ili prevarantske veb stranice",
  "reportPage.content.prohibited3": "Sadržaj koji promoviše nasilje ili mržnju",
  "reportPage.content.prohibited4": "Nezakonita roba ili usluge",
  "reportPage.content.prohibited5": "Materijal koji krši autorska prava",

  // Security
  "reportPage.content.securityOverviewTitle": "Bezbednost na AppNode-u",
  "reportPage.content.securityOverviewDesc": "Bezbednost je temelj svega što gradimo. Primenjujemo vodeće prakse u industriji kako bismo zaštitili vaše podatke, vaše projekte i vaše korisnike.",
  "reportPage.content.infrastructureSecurity": "Bezbednost infrastrukture",
  "reportPage.content.isolatedEnvironments": "Izolovana okruženja",
  "reportPage.content.isolatedEnvironmentsDesc": "Izolovano izvršavanje za sve projekte",
  "reportPage.content.reportVulnerability": "Prijavite ranjivost",
  "reportPage.content.reportVulnerabilityDesc": "Pronašli ste bezbednosni problem? Molimo prijavite ga odgovorno na contact@appnode.ai. Cenimo vašu pomoć u održavanju bezbednosti AppNode-a i nudimo nagrade za validne prijave.",
  "reportPage.content.yourDataRights": "Vaša prava u vezi sa podacima",

  // Prompt Bar & Databases
  "reportPage.content.usingPromptBar": "Korišćenje trake za upit",
  "reportPage.content.usingPromptBarDesc": "Traka za upit je vaš primarni interfejs za generisanje koda pomoću AI. Unesite opise na prirodnom jeziku za kreiranje komponenti, stranica ili celih funkcionalnosti.",
  "reportPage.content.databasesSqlite": "SQLite",
  "reportPage.content.databasesPostgres": "PostgreSQL",
  "reportPage.content.databasesMongo": "MongoDB",
  "reportPage.content.databasesRedis": "Redis",

  // Teams
  "reportPage.content.teamsTitle": "Pregled timova",
  "reportPage.content.teamsIntro": "Sarađujte sa svojim timom na AppNode-u. Delite projekte, upravljajte dozvolama i gradite zajedno u realnom vremenu.",
  "reportPage.content.teamsFeatures": "Funkcije tima",
  "reportPage.content.teamsShared": "Deljeni projekti",
  "reportPage.content.teamsSharedDesc": "Svi članovi tima mogu pristupiti i doprineti projektima",
  "reportPage.content.teamsRealtime": "Saradnja u realnom vremenu",
  "reportPage.content.teamsRealtimeDesc": "Vidite promene od saradnika odmah",
  "reportPage.content.teamsRole": "Pristup zasnovan na ulogama",
  "reportPage.content.teamsRoleDesc": "Kontrolišite ko može da pregleda, uređuje ili objavljuje",
  "reportPage.content.teamsBilling": "Naplata za tim",
  "reportPage.content.teamsBillingDesc": "Objedinjena naplata za vašu organizaciju",
  "reportPage.content.teamsGettingStarted": "Početak rada sa timovima",
  "reportPage.content.teamsStep1": "Kreirajte tim iz podešavanja kontrolne table",
  "reportPage.content.teamsStep2": "Pozovite članove tima putem e-pošte",
  "reportPage.content.teamsStep3": "Podesite dozvole za svakog člana",
  "reportPage.content.teamsStep4": "Počnite da sarađujete na projektima",

  // Roadmap
  "reportPage.content.roadmapTitle": "Plan razvoja",
  "reportPage.content.roadmapIntro": "Pogledajte na čemu radimo i šta sledi.",
  "reportPage.content.roadmapInProgress": "U toku",
  "reportPage.content.roadmapItem1": "Pregled mobilne aplikacije",
  "reportPage.content.roadmapItem2": "Poboljšani AI modeli",
  "reportPage.content.roadmapItem3": "Tržište dodataka",
  "reportPage.content.roadmapPlanned": "Planirano",
  "reportPage.content.roadmapItem4": "Izrada nativnih mobilnih aplikacija",
  "reportPage.content.roadmapItem5": "API tržište",
  "reportPage.content.roadmapItem6": "Napredna analitička kontrolna tabla",
};

// Apply all translations
let count = 0;
for (const [key, value] of Object.entries(translations)) {
  set(sr, key, value);
  count++;
}

fs.writeFileSync(srPath, JSON.stringify(sr, null, 2) + '\n', 'utf8');

console.log(`Applied ${count} translations.`);

// Verify: check how many reportPage entries are still untranslated
const en = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/translations/en.json'), 'utf8'));
const srNew = JSON.parse(fs.readFileSync(srPath, 'utf8'));

function getStrings(obj, prefix = '') {
  let result = {};
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? prefix + '.' + k : k;
    if (typeof v === 'string') result[key] = v;
    else if (typeof v === 'object' && v !== null) Object.assign(result, getStrings(v, key));
  }
  return result;
}

const enS = getStrings(en);
const srS = getStrings(srNew);

const stillUntranslated = [];
for (const [k, v] of Object.entries(enS)) {
  if (k.startsWith('reportPage.') && srS[k] === v && v.length > 1) {
    stillUntranslated.push(k);
  }
}

console.log(`Remaining untranslated reportPage entries: ${stillUntranslated.length}`);
if (stillUntranslated.length > 0) {
  for (const k of stillUntranslated) {
    console.log('  ' + k + ' = ' + enS[k].substring(0, 80));
  }
}
