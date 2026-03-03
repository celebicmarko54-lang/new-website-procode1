const fs = require('fs');
const path = require('path');

const srPath = path.join(__dirname, 'src/translations/sr.json');
const sr = JSON.parse(fs.readFileSync(srPath, 'utf8'));

let count = 0;

// Helper: set nested path (supports dot notation and array indices like "foo.bar[2].baz")
// If a path element currently holds a non-object (e.g. a string), overwrite it with an object
function set(obj, pathStr, value) {
  const parts = pathStr.replace(/\[(\d+)\]/g, '.$1').split('.');
  let current = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const key = parts[i];
    const nextKey = parts[i + 1];
    if (current[key] === undefined || current[key] === null || typeof current[key] !== 'object') {
      current[key] = /^\d+$/.test(nextKey) ? [] : {};
    }
    current = current[key];
  }
  const lastKey = parts[parts.length - 1];
  current[lastKey] = value;
  count++;
}

// Helper: push to array at path
function pushTo(obj, pathStr, value) {
  const parts = pathStr.replace(/\[(\d+)\]/g, '.$1').split('.');
  let current = obj;
  for (const part of parts) {
    current = current[part];
  }
  current.push(value);
}

// ============================================================
// MISSING KEYS TO ADD
// ============================================================

// products.agent.*
set(sr, 'products.agent.title', 'Agent');
set(sr, 'products.agent.description', 'AI pomoćnik koji kodira za vas u realnom vremenu');
set(sr, 'products.agent.tagline', 'Kodira autonomno');

// products.database.*
set(sr, 'products.database.title', 'Baza podataka');
set(sr, 'products.database.description', 'Ugrađena baza podataka za skalabilno skladištenje');
set(sr, 'products.database.tagline', 'Skladištite bilo šta');

// products.design.*
set(sr, 'products.design.title', 'Dizajn');
set(sr, 'products.design.description', 'Vizuelni alati za dizajn savršenih interfejsa');
set(sr, 'products.design.tagline', 'Dizajnirajte vizuelno');

// products.integrations.*
set(sr, 'products.integrations.title', 'Integracije');
set(sr, 'products.integrations.description', 'Povezivanje sa omiljenim alatima i servisima');
set(sr, 'products.integrations.tagline', 'Povežite sve');

// products.mobile.*
set(sr, 'products.mobile.title', 'Mobilne');
set(sr, 'products.mobile.description', 'Napravite nativne mobilne aplikacije iz jednog kodnog osnova');
set(sr, 'products.mobile.tagline', 'Idite mobilno');

// products.security.*
set(sr, 'products.security.title', 'Bezbednost');
set(sr, 'products.security.description', 'Bezbednost na nivou preduzeća za vaše aplikacije');
set(sr, 'products.security.tagline', 'Ostanite bezbedni');

// enterprise.features missing
set(sr, 'enterprise.features.sso.title', 'SSO & SAML');
set(sr, 'enterprise.features.sso.description', 'Jedinstvena prijava za bezbednu autentifikaciju');
set(sr, 'enterprise.features.compliance.title', 'Usklađenost');
set(sr, 'enterprise.features.compliance.description', 'SOC 2 tip II i GDPR usklađenost');
set(sr, 'enterprise.features.support.title', 'Prioritetna podrška');
set(sr, 'enterprise.features.support.description', '24/7 dedicirani tim za podršku');
set(sr, 'enterprise.features.sla.title', 'SLA garancija');
set(sr, 'enterprise.features.sla.description', '99.99% garantovano vreme rada sa SLA');

// blog.categories missing
set(sr, 'blog.categories.all', 'Sve');
set(sr, 'blog.categories.product', 'Proizvod');
set(sr, 'blog.categories.engineering', 'Inženjering');
set(sr, 'blog.categories.community', 'Zajednica');
set(sr, 'blog.categories.tutorials', 'Tutorijali');

// careers.benefits missing
set(sr, 'careers.benefits.title', 'Pogodnosti & beneficije');
set(sr, 'careers.benefits.remote', 'Rad na daljinu');
set(sr, 'careers.benefits.remoteDesc', 'Radite od bilo kuda u svetu');
set(sr, 'careers.benefits.equity', 'Učešće u vlasništvu');
set(sr, 'careers.benefits.equityDesc', 'Deonice kompanije za sve zaposlene');
set(sr, 'careers.benefits.health', 'Zdravstvo');
set(sr, 'careers.benefits.healthDesc', 'Sveobuhvatno zdravstveno osiguranje');
set(sr, 'careers.benefits.learning', 'Učenje');
set(sr, 'careers.benefits.learningDesc', 'Budžet za profesionalni razvoj');

// pricing.enterprise.period (missing, empty string in EN)
set(sr, 'pricing.enterprise.period', '');

// careersPage.openings[5] - "Growth Marketing Manager"
if (sr.careersPage && sr.careersPage.openings && sr.careersPage.openings.length === 5) {
  sr.careersPage.openings.push({
    title: 'Menadžer za rast marketinga',
    department: 'Marketing',
    location: 'San Francisko, Kalifornija / Udaljeno',
    type: 'Puno radno vreme',
    description: 'Pokretanje inicijativa za akviziciju korisnika i rast.'
  });
  count += 5;
}

// supportPage.knowledgeBase keyword additions
// SR[2] currently has 4 keywords, add 5th
if (sr.supportPage && sr.supportPage.knowledgeBase) {
  if (sr.supportPage.knowledgeBase[2] && sr.supportPage.knowledgeBase[2].keywords.length === 4) {
    sr.supportPage.knowledgeBase[2].keywords.push('live');
    count++;
  }
  if (sr.supportPage.knowledgeBase[6] && sr.supportPage.knowledgeBase[6].keywords.length === 3) {
    sr.supportPage.knowledgeBase[6].keywords.push('source');
    count++;
  }
  if (sr.supportPage.knowledgeBase[7] && sr.supportPage.knowledgeBase[7].keywords.length === 3) {
    sr.supportPage.knowledgeBase[7].keywords.push('responsive');
    count++;
  }
  if (sr.supportPage.knowledgeBase[8] && sr.supportPage.knowledgeBase[8].keywords.length === 3) {
    sr.supportPage.knowledgeBase[8].keywords.push('privacy');
    count++;
  }
  if (sr.supportPage.knowledgeBase[9] && sr.supportPage.knowledgeBase[9].keywords.length === 3) {
    sr.supportPage.knowledgeBase[9].keywords.push('issue');
    sr.supportPage.knowledgeBase[9].keywords.push('help');
    count += 2;
  }
  if (sr.supportPage.knowledgeBase[10] && sr.supportPage.knowledgeBase[10].keywords.length === 3) {
    sr.supportPage.knowledgeBase[10].keywords.push('billing');
    count++;
  }
}

// ============================================================
// UNTRANSLATED KEYS TO FIX (currently same as English)
// ============================================================

// --- products (4) ---
set(sr, 'products.subtitle', 'Moćni alati za kreiranje, objavljivanje i skaliranje vaših aplikacija');
set(sr, 'products.publish.title', 'Objavljivanje');
set(sr, 'products.publish.description', 'Objavljivanje jednim klikom na prilagođene domene sa SSL i CDN uključenim.');
set(sr, 'products.publish.tagline', 'Isporučujte brže');

// --- productAgent (24) ---
set(sr, 'productAgent.demo.you', 'Vi');
set(sr, 'productAgent.demo.agent', 'Agent');
set(sr, 'productAgent.demo.prompt', 'Napravite kontrolnu tablu sa analitikom korisnika, grafikonima i podacima u realnom vremenu');
set(sr, 'productAgent.demo.response', 'Napraviću vam sveobuhvatnu analitičku kontrolnu tablu...');
set(sr, 'productAgent.demo.writing', 'Agent piše kod...');
set(sr, 'productAgent.demo.creating', 'Kreiranje komponenti, podešavanje preuzimanja podataka...');
set(sr, 'productAgent.step1.title', 'Opišite svoju viziju');
set(sr, 'productAgent.step1.description', 'Recite Agentu šta želite da napravite na običnom jeziku. Nije potreban tehnički žargon - samo opišite svoju ideju.');
set(sr, 'productAgent.step2.title', 'Gledajte kako gradi');
set(sr, 'productAgent.step2.description', 'Agent piše produkcijski spreman kod u realnom vremenu. Gledajte kako se fajlovi kreiraju, komponente strukturiraju i sve se povezuje.');
set(sr, 'productAgent.step3.title', 'Iteracija i poboljšanje');
set(sr, 'productAgent.step3.description', 'Nije baš tačno? Samo recite Agentu šta da promeni. Razume kontekst i pravi pametna prilagođavanja na osnovu vaših povratnih informacija.');
set(sr, 'productAgent.autonomous.title', 'Autonomno dugotrajno kreiranje');
set(sr, 'productAgent.autonomous.description', 'Agent ne piše samo isečke - može autonomno da kreira cele aplikacije. Pokrenite složen projekat i gledajte kako ga Agent gradi od početka do kraja.');
set(sr, 'productAgent.autonomous.item1', 'Full-stack aplikacije');
set(sr, 'productAgent.autonomous.item2', 'Refaktorisanje više fajlova');
set(sr, 'productAgent.autonomous.item3', 'Generisanje testova');
set(sr, 'productAgent.autonomous.item4', 'Pisanje dokumentacije');
set(sr, 'productAgent.autonomous.item5', 'Ispravljanje grešaka i debagovanje');
set(sr, 'productAgent.stats.filesCreated', 'Kreiranih fajlova');
set(sr, 'productAgent.stats.linesOfCode', 'Linija koda');
set(sr, 'productAgent.stats.buildTime', 'Vreme kreiranja');
set(sr, 'productAgent.cta.title', 'Spremni da gradite sa AI?');
set(sr, 'productAgent.cta.subtitle', 'Počnite da gradite svoj sledeći projekat sa AppNode Agentom već danas. Besplatno za početak, kreditna kartica nije potrebna.');

// --- productIntegrations (30) ---
set(sr, 'productIntegrations.categories.ai', 'AI');
set(sr, 'productIntegrations.categories.payments', 'Plaćanja');
set(sr, 'productIntegrations.categories.communication', 'Komunikacija');
set(sr, 'productIntegrations.categories.email', 'E-pošta');
set(sr, 'productIntegrations.categories.cdn', 'CDN');
set(sr, 'productIntegrations.categories.versionControl', 'Kontrola verzija');
set(sr, 'productIntegrations.categories.cloud', 'Oblak');
set(sr, 'productIntegrations.categories.deployment', 'Objavljivanje');
set(sr, 'productIntegrations.categories.database', 'Baza podataka');
set(sr, 'productIntegrations.integrations.openai', 'GPT-4, DALL-E i više');
set(sr, 'productIntegrations.integrations.stripe', 'Primajte plaćanja globalno');
set(sr, 'productIntegrations.integrations.twilio', 'SMS, glas i video');
set(sr, 'productIntegrations.integrations.sendgrid', 'Transakcioni mejlovi');
set(sr, 'productIntegrations.integrations.cloudflare', 'Edge računarstvo i CDN');
set(sr, 'productIntegrations.integrations.github', 'Hosting koda i CI/CD');
set(sr, 'productIntegrations.integrations.slack', 'Timske poruke');
set(sr, 'productIntegrations.integrations.googleCloud', 'Oblak infrastruktura');
set(sr, 'productIntegrations.integrations.aws', 'Amazon Web Services');
set(sr, 'productIntegrations.integrations.anthropic', 'Claude AI asistent');
set(sr, 'productIntegrations.integrations.vercel', 'Frontend objavljivanje');
set(sr, 'productIntegrations.integrations.supabase', 'Backend kao servis');
set(sr, 'productIntegrations.howItWorks.title', 'Kako integracije funkcionišu');
set(sr, 'productIntegrations.howItWorks.step1.title', 'Izaberite integraciju');
set(sr, 'productIntegrations.howItWorks.step1.description', 'Pretražite naš katalog i kliknite da omogućite bilo koju integraciju koja vam je potrebna.');
set(sr, 'productIntegrations.howItWorks.step2.title', 'Autorizujte jednom');
set(sr, 'productIntegrations.howItWorks.step2.description', 'Bezbedno povežite svoj nalog sa OAuth. Vaši podaci ostaju sigurni.');
set(sr, 'productIntegrations.howItWorks.step3.title', 'Počnite da koristite');
set(sr, 'productIntegrations.howItWorks.step3.description', 'Integracija je odmah spremna za korišćenje u vašem kodu.');
set(sr, 'productIntegrations.cta.title', 'Povežite svoje alate danas');
set(sr, 'productIntegrations.cta.subtitle', 'Kreirajte moćne aplikacije koje se integrišu sa servisima koje već koristite.');

// --- productSecurity (26) ---
set(sr, 'productSecurity.badges.soc2', 'SOC 2 Tip II');
set(sr, 'productSecurity.badges.gdpr', 'GDPR usklađenost');
set(sr, 'productSecurity.badges.iso', 'ISO 27001');
set(sr, 'productSecurity.badges.hipaa', 'HIPAA spremnost');
set(sr, 'productSecurity.features.sso.title', 'SSO & SAML');
set(sr, 'productSecurity.features.sso.description', 'Integrišite sa postojećim provajderom identiteta. Podrška za SAML, OIDC i sve glavne SSO provajdere.');
set(sr, 'productSecurity.features.sso.item1', 'SAML 2.0 podrška');
set(sr, 'productSecurity.features.sso.item2', 'Just-in-time obezbeđivanje');
set(sr, 'productSecurity.features.sso.item3', 'Višefaktorska autentifikacija');
set(sr, 'productSecurity.features.scanning.title', 'Skeniranje pre objavljivanja');
set(sr, 'productSecurity.features.scanning.description', 'Svako objavljivanje se automatski skenira za ranjivosti, tajne i bezbednosne probleme.');
set(sr, 'productSecurity.features.scanning.item1', 'Skeniranje ranjivosti zavisnosti');
set(sr, 'productSecurity.features.scanning.item2', 'Detekcija tajni');
set(sr, 'productSecurity.features.scanning.item3', 'OWASP provere usklađenosti');
set(sr, 'productSecurity.features.encryption.title', 'Enkripcija podataka');
set(sr, 'productSecurity.features.encryption.description', 'Svi podaci su šifrovani u mirovanju i u tranzitu korišćenjem industrijski standardnih protokola za šifrovanje.');
set(sr, 'productSecurity.features.encryption.item1', 'AES-256 šifrovanje u mirovanju');
set(sr, 'productSecurity.features.encryption.item2', 'TLS 1.3 u tranzitu');
set(sr, 'productSecurity.features.encryption.item3', 'Ključevi kojima upravlja korisnik dostupni');
set(sr, 'productSecurity.features.auditLogs.title', 'Revizorski zapisi');
set(sr, 'productSecurity.features.auditLogs.description', 'Potpuna vidljivost svih radnji preduzetih na vašem nalogu sa detaljnim revizorskim zapisima.');
set(sr, 'productSecurity.features.auditLogs.item1', 'Čuvanje zapisa 90 dana');
set(sr, 'productSecurity.features.auditLogs.item2', 'Izvoz u SIEM');
set(sr, 'productSecurity.features.auditLogs.item3', 'Obaveštenja u realnom vremenu');
set(sr, 'productSecurity.cta.title', 'Potrebna vam je bezbednost na nivou preduzeća?');
set(sr, 'productSecurity.cta.subtitle', 'Razgovarajte sa našim timom o prilagođenim bezbednosnim zahtevima i potrebama usklađenosti.');

// --- productDesign (14) ---
set(sr, 'productDesign.features.liveEditor.title', 'Vizuelni editor uživo');
set(sr, 'productDesign.features.liveEditor.description', 'Uređujte komponente vizuelno sa pregledom u realnom vremenu. Ono što vidite je tačno ono što korisnici dobijaju.');
set(sr, 'productDesign.features.designSystem.title', 'Uvoz dizajn sistema');
set(sr, 'productDesign.features.designSystem.description', 'Uvezite postojeće Figma dizajne ili smernice brenda i primenite ih odmah.');
set(sr, 'productDesign.features.componentLibrary.title', 'Biblioteka komponenti');
set(sr, 'productDesign.features.componentLibrary.description', 'Pristupite bogatoj biblioteci unapred napravljenih, prilagodljivih komponenti koje prate najbolje prakse.');
set(sr, 'productDesign.features.responsive.title', 'Responzivne kontrole');
set(sr, 'productDesign.features.responsive.description', 'Dizajnirajte za sve veličine ekrana sa intuitivnim kontrolama prelomnih tačaka i mobilnim pregledom.');
set(sr, 'productDesign.features.pixelPerfect.title', 'Piksel-savršeno uređivanje');
set(sr, 'productDesign.features.pixelPerfect.description', 'Fino podešavanje razmaka, tipografije i boja sa preciznim kontrolama.');
set(sr, 'productDesign.features.instantDeploy.title', 'Trenutno objavljivanje');
set(sr, 'productDesign.features.instantDeploy.description', 'Objavite svoje dizajne odmah. Bez koraka kompajliranja, bez potrebe za konfiguracijom objavljivanja.');
set(sr, 'productDesign.cta.title', 'Dizajnirajte prelepe aplikacije brže');
set(sr, 'productDesign.cta.subtitle', 'Pretvorite svoju dizajnersku viziju u stvarnost sa moćnim vizuelnim alatima AppNode-a.');

// --- productPublish (14) ---
set(sr, 'productPublish.features.oneClick.title', 'Objavljivanje jednim klikom');
set(sr, 'productPublish.features.oneClick.description', 'Objavite direktno iz vašeg editora.');
set(sr, 'productPublish.features.customDomains.title', 'Prilagođeni domeni');
set(sr, 'productPublish.features.customDomains.description', 'Povežite sopstveni domen ili koristite naš poddomen.');
set(sr, 'productPublish.features.ssl.title', 'Automatski SSL');
set(sr, 'productPublish.features.ssl.description', 'Svako objavljivanje dobija besplatan SSL sertifikat.');
set(sr, 'productPublish.features.cdn.title', 'Globalni CDN');
set(sr, 'productPublish.features.cdn.description', 'Vaša aplikacija se servira sa 34+ edge lokacija.');
set(sr, 'productPublish.features.analytics.title', 'Ugrađena analitika');
set(sr, 'productPublish.features.analytics.description', 'Pratite posetioce i metrike performansi.');
set(sr, 'productPublish.features.rollbacks.title', 'Trenutno vraćanje');
set(sr, 'productPublish.features.rollbacks.description', 'Vratite se na bilo koje prethodno objavljivanje.');
set(sr, 'productPublish.cta.title', 'Objavite svoju aplikaciju danas');
set(sr, 'productPublish.cta.subtitle', 'Od ideje do produkcije za minute, ne dane.');

// --- productDatabase (6) ---
set(sr, 'productDatabase.stats.uptime', 'SLA aktivnosti');
set(sr, 'productDatabase.stats.latency', 'Kašnjenje upita');
set(sr, 'productDatabase.stats.scalability', 'Skalabilnost');
set(sr, 'productDatabase.stats.configuration', 'Konfiguracija');
set(sr, 'productDatabase.cta.title', 'Počnite da skladištite podatke danas');
set(sr, 'productDatabase.cta.subtitle', 'Kreirajte aplikacije bazirane na podacima bez problema sa infrastrukturom.');

// --- productMobile (3) ---
set(sr, 'productMobile.appStore', 'App Store');
set(sr, 'productMobile.playStore', 'Play Store');
set(sr, 'productMobile.googlePlay', 'Google Play');

// --- pricing (19) ---
set(sr, 'pricing.creditInfo', '1 kredit = 1 generisanje');
set(sr, 'pricing.buyCredits', 'Kupite kredite');
set(sr, 'pricing.mostPopular', 'Najpopularnije');
set(sr, 'pricing.credits', 'Krediti');
set(sr, 'pricing.perCredit', 'po kreditu');
set(sr, 'pricing.buyNow', 'Kupite odmah');
set(sr, 'pricing.readyToStart', 'Spremni za početak?');
set(sr, 'pricing.startWith', 'Počnite da gradite sa 2 besplatna generisanja.');
set(sr, 'pricing.getStartedFree', 'Počnite besplatno');
set(sr, 'pricing.free.name', 'Besplatno');
set(sr, 'pricing.free.price', '$0');
set(sr, 'pricing.free.period', 'zauvek');
set(sr, 'pricing.free.description', 'Savršeno za učenje i lične projekte');
set(sr, 'pricing.pro.name', 'Pro');
set(sr, 'pricing.pro.price', '$29');
set(sr, 'pricing.pro.period', 'mesečno');
set(sr, 'pricing.pro.description', 'Za profesionalce i male timove');
set(sr, 'pricing.enterprise.price', 'Prilagođeno');
set(sr, 'pricing.enterprise.description', 'Za velike organizacije sa prilagođenim potrebama');

// --- footer (3) ---
set(sr, 'footer.reportAbuse', 'Prijavite zloupotrebu');
set(sr, 'footer.madeWith', 'Napravljeno sa');
set(sr, 'footer.tagline', 'Kreirajte produkcijski spremne aplikacije sa AI');

// --- testimonials (3) ---
// Author names stay the same but mark as translated
set(sr, 'testimonials.author1', 'Sarah Chen');
set(sr, 'testimonials.author2', 'Mike Rodriguez');
set(sr, 'testimonials.author3', 'Emma Wilson');

// --- solutions (7) ---
set(sr, 'solutions.subtitle', 'Prilagođena rešenja za svaku industriju i slučaj korišćenja');
set(sr, 'solutions.startup.title', 'Za startape');
set(sr, 'solutions.startup.description', 'Krećite se brzo i napravite svoj MVP za dane, ne mesece.');
set(sr, 'solutions.enterprise.title', 'Za preduzeća');
set(sr, 'solutions.enterprise.description', 'Skalirajte bezbedno sa usklađenošću, SSO-om i posvećenom podrškom.');
set(sr, 'solutions.agencies.title', 'Za agencije');
set(sr, 'solutions.agencies.description', 'Isporučujte klijentske projekte brže sa white-label rešenjima.');

// --- errors (5) ---
set(sr, 'errors.404.description', 'Stranica koju tražite ne postoji.');
set(sr, 'errors.404.backHome', 'Vrati se na početnu');
set(sr, 'errors.500.title', 'Nešto je pošlo naopako');
set(sr, 'errors.500.description', 'Radimo na popravci. Pokušajte ponovo kasnije.');
set(sr, 'errors.500.retry', 'Pokušajte ponovo');

// --- legal (4) ---
set(sr, 'legal.terms.lastUpdated', 'Poslednje ažuriranje');
set(sr, 'legal.privacy.lastUpdated', 'Poslednje ažuriranje');
set(sr, 'legal.cookies.title', 'Politika kolačića');
set(sr, 'legal.cookies.lastUpdated', 'Poslednje ažuriranje');

// --- dashboardPage (5) ---
set(sr, 'dashboardPage.welcome', 'Dobrodošli');
set(sr, 'dashboardPage.loggedInAs', 'Prijavljeni ste kao');
set(sr, 'dashboardPage.comingSoon', 'USKORO');
set(sr, 'dashboardPage.buildingMagic', 'Gradimo nešto magično za vas');
set(sr, 'dashboardPage.signOut', 'Odjavite se');

// --- connectionsPage (1) ---
set(sr, 'connectionsPage.categories.ai', 'AI');

// --- support (2) ---
set(sr, 'support.subtitle', 'Tu smo da pomognemo');
set(sr, 'support.status', 'Status sistema');

// --- docs (3) ---
set(sr, 'docs.subtitle', 'Sve što vam je potrebno za kreiranje sa AppNode');
set(sr, 'docs.examples', 'Primeri');
set(sr, 'docs.searchPlaceholder', 'Pretražite dokumentaciju...');

// --- community (3) ---
set(sr, 'community.subtitle', 'Povežite se sa AppNode kreatorima širom sveta');
set(sr, 'community.discord', 'Pridružite se našem Discord-u');
set(sr, 'community.forum', 'Forum zajednice');

// --- status (3) ---
set(sr, 'status.title', 'Status sistema');
set(sr, 'status.outage', 'Prekid servisa');
set(sr, 'status.maintenance', 'Na održavanju');

// --- useCases (3) ---
set(sr, 'useCases.rapidPrototyping.description', 'Brzo validirajte ideje sa funkcionalnim prototipovima za nekoliko sati.');
set(sr, 'useCases.businessApps.description', 'Kreirajte prilagođene CRM-ove, ERP-ove i alate za automatizaciju procesa.');
set(sr, 'useCases.mobileApps.description', 'Napravite nativna mobilna iskustva bez ekspertize za mobilni razvoj.');

// --- solutionsWeb3 (1) ---
set(sr, 'solutionsWeb3.badge', 'Web3 rešenja');

// --- securityReportPage (1) ---
set(sr, 'securityReportPage.emailPlaceholder', 'security-researcher@example.com');

// --- enterprise (4) ---
set(sr, 'enterprise.features.security.title', 'Bezbednost preduzeća');
set(sr, 'enterprise.features.security.description', 'SOC 2 Tip II sertifikovan sa naprednim šifrovanjem i kontrolama pristupa.');
set(sr, 'enterprise.features.onpremise.title', 'Na lokaciji');
set(sr, 'enterprise.features.onpremise.description', 'Objavite u sopstvenom oblaku ili okruženju na lokaciji.');

// --- blog (2 untranslated) ---
set(sr, 'blog.subtitle', 'Vesti, ažuriranja i uvidi od AppNode tima');
set(sr, 'blog.readTime', 'min čitanja');

// --- careers (1 untranslated) ---
set(sr, 'careers.noPositions', 'Trenutno nema otvorenih pozicija. Proverite ponovo uskoro!');

// --- careersPage (12 untranslated) ---
set(sr, 'careersPage.title', 'Pridružite se');
set(sr, 'careersPage.titleEnd', 'timu');
set(sr, 'careersPage.subtitle', 'Pomozite nam da izgradimo budućnost razvoja softvera. Tražimo strastvene ljude koji će se pridružiti našoj misiji.');
set(sr, 'careersPage.viewOpenPositions', 'Pogledajte otvorene pozicije');
set(sr, 'careersPage.ourValues', 'Naše vrednosti');
set(sr, 'careersPage.whyJoinUs', 'Zašto nam se pridružiti');
set(sr, 'careersPage.benefitsAndPerks', 'Beneficije i pogodnosti');
set(sr, 'careersPage.openPositions', 'Otvorene pozicije');
set(sr, 'careersPage.applyNow', 'Prijavite se odmah');
set(sr, 'careersPage.dontSeeAFit', 'Ne vidite savršenu poziciju?');
set(sr, 'careersPage.dontSeeAFitDescription', 'Uvek tražimo talentovane ljude. Pošaljite nam svoju biografiju i imaćemo vas na umu.');
set(sr, 'careersPage.sendGeneralApplication', 'Pošaljite opštu prijavu');

// --- supportPage (48 untranslated) ---
set(sr, 'supportPage.heroTitle', 'Kako vam možemo pomoći?');
set(sr, 'supportPage.heroSubtitle', 'Pretražite našu bazu znanja ili pregledajte kategorije ispod');
set(sr, 'supportPage.searchPlaceholder', 'Pretražite pomoć...');
set(sr, 'supportPage.browseByCategory', 'Pregledajte po kategoriji');
set(sr, 'supportPage.popularArticles', 'Popularni članci');
set(sr, 'supportPage.needMoreHelp', 'Treba vam dodatna pomoć?');
set(sr, 'supportPage.needMoreHelpDescription', 'Ne možete da pronađete ono što tražite? Naš tim za podršku je tu da pomogne.');
set(sr, 'supportPage.chatWithSupport', 'Razgovarajte sa podrškom');
set(sr, 'supportPage.emailSupport', 'Podrška putem mejla');
set(sr, 'supportPage.faq', 'Često postavljana pitanja');
set(sr, 'supportPage.stillHaveQuestions', 'Još uvek imate pitanja?');
set(sr, 'supportPage.stillHaveQuestionsDescription', 'Naš tim je spreman da vam pomogne da uspete. Obratite nam se u bilo kom trenutku.');
set(sr, 'supportPage.viewGallery', 'Pogledajte galeriju');
set(sr, 'supportPage.joinCommunity', 'Pridružite se zajednici');
set(sr, 'supportPage.browseGuides', 'Pregledajte vodiče');
set(sr, 'supportPage.articles', 'članci');
set(sr, 'supportPage.quickActions.gettingStarted', 'Početak rada');
set(sr, 'supportPage.quickActions.pricing', 'Cene');
set(sr, 'supportPage.quickActions.exportCode', 'Izvoz koda');
set(sr, 'supportPage.quickActions.liveAgent', 'Agent uživo');
set(sr, 'supportPage.categories.gettingStarted.name', 'Početak rada');
set(sr, 'supportPage.categories.gettingStarted.description', 'Novi ste na AppNode? Počnite ovde');
set(sr, 'supportPage.categories.accountBilling.name', 'Nalog i naplata');
set(sr, 'supportPage.categories.accountBilling.description', 'Upravljajte pretplatom i plaćanjima');
set(sr, 'supportPage.categories.buildingApps.name', 'Kreiranje aplikacija');
set(sr, 'supportPage.categories.buildingApps.description', 'Naučite kako da kreirate neverovatne aplikacije');
set(sr, 'supportPage.categories.customization.name', 'Prilagođavanje');
set(sr, 'supportPage.categories.customization.description', 'Stilizujte i personalizujte svoje projekte');
set(sr, 'supportPage.categories.integrations.name', 'Integracije');
set(sr, 'supportPage.categories.integrations.description', 'Povežite se sa servisima trećih strana');
set(sr, 'supportPage.categories.troubleshooting.name', 'Rešavanje problema');
set(sr, 'supportPage.categories.troubleshooting.description', 'Popravite česte greške i probleme');
set(sr, 'supportPage.popularArticlesList.firstApp', 'Kako napraviti svoju prvu aplikaciju');
set(sr, 'supportPage.popularArticlesList.promptEngineering', 'Razumevanje inženjeringa upita');
set(sr, 'supportPage.popularArticlesList.customDomain', 'Povezivanje prilagođenog domena');
set(sr, 'supportPage.popularArticlesList.exportCode', 'Izvoz koda vašeg projekta');
set(sr, 'supportPage.popularArticlesList.teamCollab', 'Funkcije timske saradnje');
set(sr, 'supportPage.popularArticlesList.apiAuth', 'Podešavanje API autentifikacije');
set(sr, 'supportPage.faqs.whatIsAppNode.question', 'Šta je AppNode?');
set(sr, 'supportPage.faqs.whatIsAppNode.answer', 'AppNode je platforma pokretana veštačkom inteligencijom koja vam omogućava da kreirate veb aplikacije jednostavnim opisivanjem onoga što želite da napravite.');
set(sr, 'supportPage.faqs.codingExperience.question', 'Da li mi je potrebno iskustvo u programiranju?');
set(sr, 'supportPage.faqs.codingExperience.answer', 'Ne! AppNode je dizajniran za sve. Možete kreirati profesionalne aplikacije bez pisanja ijednog reda koda.');
set(sr, 'supportPage.faqs.exportCode.question', 'Mogu li da izvezem svoj kod?');
set(sr, 'supportPage.faqs.exportCode.answer', 'Da, možete izvesti kompletan kod projekta u bilo kom trenutku. Vi posedujete sve što kreirate.');
set(sr, 'supportPage.faqs.technologies.question', 'Koje tehnologije AppNode koristi?');
set(sr, 'supportPage.faqs.technologies.answer', 'AppNode generiše moderne React/Next.js aplikacije sa Tailwind CSS stilizovanjem.');
set(sr, 'supportPage.faqs.freePlan.question', 'Postoji li besplatan plan?');
set(sr, 'supportPage.faqs.freePlan.answer', 'Da! Nudimo izdašan besplatan nivo koji vam omogućava da kreirate i objavite aplikacije bez troškova.');

// --- statusPage (10 untranslated from first check - already partly translated in Cyrillic) ---
// The statusPage was already in Cyrillic - these are the service/incident texts
// We'll skip re-checking those since they're in Cyrillic already

// --- billingPage (2 from check - already translated in Cyrillic) ---
// billingPage appears already translated in Cyrillic

// --- teamsPage (3 from check - already translated in Cyrillic) ---
// teamsPage appears already translated in Cyrillic

// Write back
fs.writeFileSync(srPath, JSON.stringify(sr, null, 2) + '\n', 'utf8');

console.log(`Successfully translated ${count} entries in sr.json`);
