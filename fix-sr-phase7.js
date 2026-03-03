const fs = require('fs');

const en = JSON.parse(fs.readFileSync('./src/translations/en.json', 'utf8'));
const sr = JSON.parse(fs.readFileSync('./src/translations/sr.json', 'utf8'));

function set(obj, path, value) {
  const keys = path.replace(/\[(\d+)\]/g, '.$1').split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (current[keys[i]] === undefined) {
      current[keys[i]] = /^\d+$/.test(keys[i + 1]) ? [] : {};
    }
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
}

const translations = {
  // ==================== LEARN PAGE ====================

  // Hero & Badge
  'learnPage.badge': 'Besplatna platforma za učenje',
  'learnPage.titleStart': 'Naučite da gradite sa',
  'learnPage.titleHighlight': 'AppNode',
  'learnPage.subtitle': 'Besplatni kursevi, tutorijali i praktični projekti koji će vam pomoći da savladate razvoj aplikacija pomoću veštačke inteligencije. Od početnika do eksperta, sopstvenim tempom.',
  'learnPage.startLearningFree': 'Počnite besplatno da učite',
  'learnPage.browseCourses': 'Pregledajte kurseve',

  // Stats
  'learnPage.stats.freeCourses': 'Besplatni kursevi',
  'learnPage.stats.students': 'Studenti',
  'learnPage.stats.averageRating': 'Prosečna ocena',
  'learnPage.stats.communitySupport': 'Podrška zajednice',

  // Learning Path
  'learnPage.chooseLearningPath': 'Izaberite svoj put učenja',
  'learnPage.chooseLearningPathDesc': 'Pažljivo osmišljeni kursevi dizajnirani za vaše specifične ciljeve i nivo veštine.',
  'learnPage.popularCourses': 'Popularni kursevi',
  'learnPage.popularCoursesDesc': 'Počnite sa našim najpopularnijim kursevima, koje je odabrala naša zajednica.',
  'learnPage.startCourse': 'Započni kurs',
  'learnPage.viewAllCourses': 'Pogledaj sve kurseve',

  // Levels
  'learnPage.levels.beginner': 'Početnik',
  'learnPage.levels.intermediate': 'Srednji nivo',
  'learnPage.levels.advanced': 'Napredni',
  'learnPage.lessons': 'lekcije',
  'learnPage.min': 'min',

  // Course: Getting Started
  'learnPage.courses.gettingStarted.title': 'Početak rada sa AppNode',
  'learnPage.courses.gettingStarted.description': 'Naučite osnove kreiranja aplikacija pomoću veštačke inteligencije. Savršeno za apsolutne početnike.',

  // Course: Building Dashboard
  'learnPage.courses.buildingDashboard.title': 'Izgradnja prvog kontrolnog panela',
  'learnPage.courses.buildingDashboard.description': 'Kreirajte kompletan analitički kontrolni panel od nule sa podacima u realnom vremenu.',

  // Course: Advanced Prompting
  'learnPage.courses.advancedPrompting.title': 'Napredne tehnike za pisanje promptova',
  'learnPage.courses.advancedPrompting.description': 'Savladajte veštinu pisanja efikasnih promptova koji generišu upravo ono što vam treba.',

  // Course: E-commerce
  'learnPage.courses.ecommerce.title': 'Majstorski kurs za e-commerce prodavnicu',
  'learnPage.courses.ecommerce.description': 'Izgradite potpuno funkcionalnu onlajn prodavnicu sa plaćanjima, inventarom i porudžbinama.',

  // Course: Custom Components
  'learnPage.courses.customComponents.title': 'Prilagođene komponente i stilizovanje',
  'learnPage.courses.customComponents.description': 'Kreirajte komponente za višekratnu upotrebu sa prilagođenim temama koje odgovaraju vašem brendu.',

  // Course: Deploying
  'learnPage.courses.deploying.title': 'Postavljanje u produkciju',
  'learnPage.courses.deploying.description': 'Pokrenite svoju aplikaciju za ceo svet sa prilagođenim domenima i SSL sertifikatima.',

  // Course: Mobile-First
  'learnPage.courses.mobileFirst.title': 'Izgradnja aplikacija za mobilne uređaje',
  'learnPage.courses.mobileFirst.description': 'Dizajnirajte responzivne aplikacije koje odlično funkcionišu na svakom uređaju.',

  // Course: API Integration
  'learnPage.courses.apiIntegration.title': 'Osnove API integracije',
  'learnPage.courses.apiIntegration.description': 'Povežite svoju aplikaciju sa spoljnim servisima, bazama podataka i API-jima trećih strana.',

  // Course: Auth & Security
  'learnPage.courses.authSecurity.title': 'Autentifikacija i bezbednost',
  'learnPage.courses.authSecurity.description': 'Implementirajte bezbednu autentifikaciju korisnika i zaštitite svoju aplikaciju.',

  // Modal
  'learnPage.modal.overview': 'Pregled',
  'learnPage.modal.howToDoIt': 'Kako se radi',
  'learnPage.modal.proTips': 'Profesionalni saveti',
  'learnPage.modal.gotIt': 'Razumem!',

  // Tutorial: Getting Started
  'learnPage.tutorials.gettingStarted.overview': 'Započnite sa AppNode učenjem osnova razvoja aplikacija pomoću veštačke inteligencije.',
  'learnPage.tutorials.gettingStarted.steps[0]': 'Registrujte se za besplatan AppNode nalog na appnode.ai',
  'learnPage.tutorials.gettingStarted.steps[1]': 'Idite na kontrolni panel i kliknite „Novi projekat"',
  'learnPage.tutorials.gettingStarted.steps[2]': 'Opišite svoju ideju za aplikaciju u interfejsu za ćaskanje',
  'learnPage.tutorials.gettingStarted.steps[3]': 'Pregledajte generisani kod i izvršite prilagođavanja',
  'learnPage.tutorials.gettingStarted.steps[4]': 'Postavite svoju aplikaciju jednim klikom',
  'learnPage.tutorials.gettingStarted.tips[0]': 'Budite precizni kada opisujete zahteve za aplikaciju',
  'learnPage.tutorials.gettingStarted.tips[1]': 'Počnite sa jednostavnim projektima da biste naučili tok rada',
  'learnPage.tutorials.gettingStarted.tips[2]': 'Koristite funkciju pregleda da biste odmah testirali promene',

  // Tutorial: Building Dashboard
  'learnPage.tutorials.buildingDashboard.overview': 'Naučite da pravite profesionalne analitičke kontrolne panele sa grafikonima, metrikama i podacima u realnom vremenu.',
  'learnPage.tutorials.buildingDashboard.steps[0]': 'Započnite novi projekat i opišite potrebe kontrolnog panela',
  'learnPage.tutorials.buildingDashboard.steps[1]': 'Dodajte komponente za grafikone (stubičaste, linijske, kružne grafikone)',
  'learnPage.tutorials.buildingDashboard.steps[2]': 'Povežite se sa izvorom podataka ili koristite ogledne podatke',
  'learnPage.tutorials.buildingDashboard.steps[3]': 'Prilagodite boje i rasporede da odgovaraju vašem brendu',
  'learnPage.tutorials.buildingDashboard.steps[4]': 'Dodajte interaktivne filtere i biračke datuma',
  'learnPage.tutorials.buildingDashboard.steps[5]': 'Testirajte responzivnost na različitim veličinama ekrana',
  'learnPage.tutorials.buildingDashboard.steps[6]': 'Postavite i podelite sa svojim timom',
  'learnPage.tutorials.buildingDashboard.tips[0]': 'Grupisajte povezane metrike zajedno',
  'learnPage.tutorials.buildingDashboard.tips[1]': 'Koristite konzistentno kodiranje bojama za kategorije podataka',
  'learnPage.tutorials.buildingDashboard.tips[2]': 'Držite najvažnije metrike na vrhu',

  // Tutorial: Advanced Prompting
  'learnPage.tutorials.advancedPrompting.overview': 'Savladajte inženjering promptova da biste dobili bolje rezultate od AppNode veštačke inteligencije.',
  'learnPage.tutorials.advancedPrompting.steps[0]': 'Razumite anatomiju dobrog prompta',
  'learnPage.tutorials.advancedPrompting.steps[1]': 'Koristite specifične tehničke zahteve u promptovima',
  'learnPage.tutorials.advancedPrompting.steps[2]': 'Naučite da iterirate i usavršavate na osnovu rezultata',
  'learnPage.tutorials.advancedPrompting.steps[3]': 'Kombinujte više funkcija u jednom promptu',
  'learnPage.tutorials.advancedPrompting.steps[4]': 'Koristite referentne primere za usmeravanje veštačke inteligencije',
  'learnPage.tutorials.advancedPrompting.tips[0]': 'Uvek navedite željeni tehnološki stek',
  'learnPage.tutorials.advancedPrompting.tips[1]': 'Uključite zahteve za pristupačnost',
  'learnPage.tutorials.advancedPrompting.tips[2]': 'Odmah navedite potrebe za responzivni dizajn',

  // Tutorial: E-commerce
  'learnPage.tutorials.ecommerce.overview': 'Kreirajte kompletno e-commerce rešenje sa katalogom proizvoda, korpom i plaćanjem.',
  'learnPage.tutorials.ecommerce.steps[0]': 'Postavite katalog proizvoda sa kategorijama',
  'learnPage.tutorials.ecommerce.steps[1]': 'Izgradite funkcionalnost korpe za kupovinu',
  'learnPage.tutorials.ecommerce.steps[2]': 'Integrisajte Stripe za plaćanja',
  'learnPage.tutorials.ecommerce.steps[3]': 'Kreirajte sistem za upravljanje porudžbinama',
  'learnPage.tutorials.ecommerce.steps[4]': 'Dodajte praćenje inventara',
  'learnPage.tutorials.ecommerce.steps[5]': 'Podesite obaveštenja putem e-pošte',
  'learnPage.tutorials.ecommerce.steps[6]': 'Implementirajte korisničke naloge i istoriju porudžbina',
  'learnPage.tutorials.ecommerce.tips[0]': 'Prvo počnite sa jednostavnim katalogom proizvoda',
  'learnPage.tutorials.ecommerce.tips[1]': 'Temeljno testirajte tok plaćanja',
  'learnPage.tutorials.ecommerce.tips[2]': 'Koristite test podatke za plaćanje tokom razvoja',

  // Tutorial: Custom Components
  'learnPage.tutorials.customComponents.overview': 'Naučite da kreirate konzistentne komponente za višekratnu upotrebu sa prilagođenim stilizovanjem.',
  'learnPage.tutorials.customComponents.steps[0]': 'Definišite boje svog brenda i tipografiju',
  'learnPage.tutorials.customComponents.steps[1]': 'Kreirajte strukturu biblioteke komponenata',
  'learnPage.tutorials.customComponents.steps[2]': 'Izgradite komponente dugmadi, polja za unos i kartica za višekratnu upotrebu',
  'learnPage.tutorials.customComponents.steps[3]': 'Implementirajte podršku za tamni režim',
  'learnPage.tutorials.customComponents.steps[4]': 'Dodajte animacije i prelaze',
  'learnPage.tutorials.customComponents.steps[5]': 'Dokumentujte svoje komponente',
  'learnPage.tutorials.customComponents.tips[0]': 'Koristite CSS promenljive za teme',
  'learnPage.tutorials.customComponents.tips[1]': 'Držite komponente malim i fokusiranim',
  'learnPage.tutorials.customComponents.tips[2]': 'Testirajte komponente izolovano',

  // Tutorial: Deploying
  'learnPage.tutorials.deploying.overview': 'Naučite da postavljate svoje aplikacije u produkciju sa sigurnošću.',
  'learnPage.tutorials.deploying.steps[0]': 'Pripremite svoju aplikaciju za produkciju',
  'learnPage.tutorials.deploying.steps[1]': 'Izaberite provajdera za hosting',
  'learnPage.tutorials.deploying.steps[2]': 'Konfigurišite promenljive okruženja',
  'learnPage.tutorials.deploying.steps[3]': 'Podesite prilagođene domene',
  'learnPage.tutorials.deploying.steps[4]': 'Omogućite SSL sertifikate',
  'learnPage.tutorials.deploying.tips[0]': 'Uvek prvo testirajte u staging okruženju',
  'learnPage.tutorials.deploying.tips[1]': 'Podesite nadgledanje i obaveštenja',
  'learnPage.tutorials.deploying.tips[2]': 'Redovno ažurirajte svoje zavisnosti',

  // Tutorial: Mobile-First
  'learnPage.tutorials.mobileFirst.overview': 'Kreirajte responzivne aplikacije dizajnirane za mobilne uređaje koje funkcionišu na svim uređajima.',
  'learnPage.tutorials.mobileFirst.steps[0]': 'Razumite principe dizajna za mobilne uređaje',
  'learnPage.tutorials.mobileFirst.steps[1]': 'Efikasno koristite responzivne tačke preloma',
  'learnPage.tutorials.mobileFirst.steps[2]': 'Optimizujte interakcije na dodir',
  'learnPage.tutorials.mobileFirst.steps[3]': 'Obradite različite orijentacije ekrana',
  'learnPage.tutorials.mobileFirst.steps[4]': 'Testirajte na pravim uređajima',
  'learnPage.tutorials.mobileFirst.steps[5]': 'Optimizujte performanse za mobilne mreže',
  'learnPage.tutorials.mobileFirst.tips[0]': 'Prvo dizajnirajte za najmanji ekran',
  'learnPage.tutorials.mobileFirst.tips[1]': 'Koristite relativne jedinice (rem, %) umesto piksela',
  'learnPage.tutorials.mobileFirst.tips[2]': 'Testirajte sa ograničenom brzinom mreže',

  // Tutorial: API Integration
  'learnPage.tutorials.apiIntegration.overview': 'Naučite da integrišete spoljne API-je i servise u svoje aplikacije.',
  'learnPage.tutorials.apiIntegration.steps[0]': 'Razumite osnove REST API-ja',
  'learnPage.tutorials.apiIntegration.steps[1]': 'Obradite API autentifikaciju (API ključevi, OAuth)',
  'learnPage.tutorials.apiIntegration.steps[2]': 'Napravite GET, POST, PUT, DELETE zahteve',
  'learnPage.tutorials.apiIntegration.steps[3]': 'Obradite greške i granične slučajeve',
  'learnPage.tutorials.apiIntegration.steps[4]': 'Implementirajte ograničenje broja zahteva',
  'learnPage.tutorials.apiIntegration.steps[5]': 'Keširajte API odgovore za bolje performanse',
  'learnPage.tutorials.apiIntegration.tips[0]': 'Uvek elegantno obrađujte API greške',
  'learnPage.tutorials.apiIntegration.tips[1]': 'Koristite promenljive okruženja za API ključeve',
  'learnPage.tutorials.apiIntegration.tips[2]': 'Implementirajte logiku ponovnog pokušaja za neuspele zahteve',

  // Tutorial: Auth & Security
  'learnPage.tutorials.authSecurity.overview': 'Implementirajte bezbednu autentifikaciju i zaštitite svoju aplikaciju od pretnji.',
  'learnPage.tutorials.authSecurity.steps[0]': 'Podesite registraciju i prijavu korisnika',
  'learnPage.tutorials.authSecurity.steps[1]': 'Implementirajte heširanje lozinki',
  'learnPage.tutorials.authSecurity.steps[2]': 'Dodajte dvofaktorsku autentifikaciju',
  'learnPage.tutorials.authSecurity.steps[3]': 'Upravljajte sesijama',
  'learnPage.tutorials.authSecurity.steps[4]': 'Zaštitite se od uobičajenih napada (XSS, CSRF)',
  'learnPage.tutorials.authSecurity.steps[5]': 'Podesite kontrolu pristupa zasnovanu na ulogama',
  'learnPage.tutorials.authSecurity.tips[0]': 'Nikada ne čuvajte lozinke kao običan tekst',
  'learnPage.tutorials.authSecurity.tips[1]': 'Koristite HTTPS svuda',
  'learnPage.tutorials.authSecurity.tips[2]': 'Redovno proveravajte svoje bezbednosne prakse',

  // CTA
  'learnPage.cta.title': 'Započnite svoje putovanje učenja danas',
  'learnPage.cta.subtitle': 'Pridružite se više od 100.000 studenata koji su transformisali svoje veštine sa AppNode. Svi kursevi su potpuno besplatni.',
  'learnPage.cta.createFreeAccount': 'Kreirajte besplatan nalog',
  'learnPage.cta.browseGuides': 'Pregledajte vodiče',

  // ==================== GUIDES PAGE ====================

  // Hero & Badge
  'guidesPage.badge': 'Detaljni tutorijali',
  'guidesPage.titleStart': 'Razvojni',
  'guidesPage.titleHighlight': 'Vodiči',
  'guidesPage.subtitle': 'Detaljni tutorijali i najbolje prakse za izradu neverovatnih aplikacija. Od početnika do naprednog nivoa, pokrili smo sve.',
  'guidesPage.featuredGuide': 'Istaknuti vodič',
  'guidesPage.allGuides': 'Svi vodiči',
  'guidesPage.readGuide': 'Pročitaj vodič',

  // Modal
  'guidesPage.modal.overview': 'Pregled',
  'guidesPage.modal.howToDoIt': 'Kako se radi',
  'guidesPage.modal.proTips': 'Profesionalni saveti',
  'guidesPage.modal.gotIt': 'Razumem!',

  // Categories
  'guidesPage.categories.all': 'Sve',
  'guidesPage.categories.saas': 'SaaS',
  'guidesPage.categories.ecommerce': 'E-commerce',
  'guidesPage.categories.design': 'Dizajn',
  'guidesPage.categories.security': 'Bezbednost',
  'guidesPage.categories.backend': 'Backend',
  'guidesPage.categories.performance': 'Performanse',
  'guidesPage.minRead': 'min čitanja',

  // Guide: SaaS Apps
  'guidesPage.guides.saasApps.title': 'Kompletan vodič za izradu SaaS aplikacija',
  'guidesPage.guides.saasApps.description': 'Sve što treba da znate o kreiranju SaaS aplikacija pomoću AppNode',
  'guidesPage.guides.saasApps.overview': 'Naučite da izgradite kompletnu SaaS aplikaciju od nule, uključujući autentifikaciju korisnika, pretplatnu naplatu i višekorisničku arhitekturu.',
  'guidesPage.guides.saasApps.steps[0]': 'Podesite projekat sa autentifikacijom (prijava, registracija, resetovanje lozinke)',
  'guidesPage.guides.saasApps.steps[1]': 'Kreirajte raspored kontrolnog panela sa navigacijom i korisničkim podešavanjima',
  'guidesPage.guides.saasApps.steps[2]': 'Implementirajte pretplatnu naplatu sa Stripe integracijom',
  'guidesPage.guides.saasApps.steps[3]': 'Izgradite izolaciju podataka za višekorisničke naloge različitih klijenata',
  'guidesPage.guides.saasApps.steps[4]': 'Dodajte kontrolu pristupa zasnovanu na ulogama za članove tima',
  'guidesPage.guides.saasApps.steps[5]': 'Podesite obaveštenja putem e-pošte za ključne događaje',
  'guidesPage.guides.saasApps.steps[6]': 'Postavite u produkciju sa nadgledanjem',
  'guidesPage.guides.saasApps.tips[0]': 'Počnite sa jednostavnim MVP-jem i unapređujte na osnovu povratnih informacija korisnika',
  'guidesPage.guides.saasApps.tips[1]': 'Koristite promenljive okruženja za sve API ključeve i tajne',
  'guidesPage.guides.saasApps.tips[2]': 'Implementirajte pravilnu obradu grešaka od samog početka',

  // Guide: E-commerce
  'guidesPage.guides.ecommerce.title': 'Najbolje prakse za e-commerce',
  'guidesPage.guides.ecommerce.description': 'Naučite kako da izgradite onlajn prodavnice sa visokom konverzijom i integracijom plaćanja',
  'guidesPage.guides.ecommerce.overview': 'Kreirajte e-commerce prodavnicu sa visokom konverzijom, katalogom proizvoda, korpom za kupovinu i bezbednim plaćanjem.',
  'guidesPage.guides.ecommerce.steps[0]': 'Dizajnirajte atraktivan katalog proizvoda sa kategorijama i filterima',
  'guidesPage.guides.ecommerce.steps[1]': 'Izgradite trajnu korpu za kupovinu koristeći lokalno skladište',
  'guidesPage.guides.ecommerce.steps[2]': 'Integrisajte Stripe ili PayPal za plaćanja',
  'guidesPage.guides.ecommerce.steps[3]': 'Kreirajte stranice za potvrdu i praćenje porudžbina',
  'guidesPage.guides.ecommerce.steps[4]': 'Podesite upravljanje inventarom',
  'guidesPage.guides.ecommerce.steps[5]': 'Implementirajte recenzije i ocene kupaca',
  'guidesPage.guides.ecommerce.tips[0]': 'Koristite slike proizvoda visokog kvaliteta',
  'guidesPage.guides.ecommerce.tips[1]': 'Održavajte proces plaćanja jednostavnim (maksimalno 3 koraka)',
  'guidesPage.guides.ecommerce.tips[2]': 'Prikažite oznake poverenja i ikone bezbednog plaćanja',

  // Guide: Dashboard
  'guidesPage.guides.dashboard.title': 'Savladavanje dizajna kontrolnog panela',
  'guidesPage.guides.dashboard.description': 'Kreirajte prelepe i funkcionalne analitičke kontrolne panele koje korisnici vole',
  'guidesPage.guides.dashboard.overview': 'Dizajnirajte profesionalne analitičke kontrolne panele sa jasnom vizuelizacijom podataka i intuitivnim rasporedima.',
  'guidesPage.guides.dashboard.steps[0]': 'Definišite ključne metrike koje vaši korisnici treba da vide',
  'guidesPage.guides.dashboard.steps[1]': 'Kreirajte wireframe sa pravilnom vizuelnom hijerarhijom',
  'guidesPage.guides.dashboard.steps[2]': 'Izaberite odgovarajuće tipove grafikona za svaki tip podataka',
  'guidesPage.guides.dashboard.steps[3]': 'Implementirajte interaktivne filtere i opsege datuma',
  'guidesPage.guides.dashboard.steps[4]': 'Dodajte funkcionalnost izvoza podataka',
  'guidesPage.guides.dashboard.steps[5]': 'Optimizujte za različite veličine ekrana',
  'guidesPage.guides.dashboard.tips[0]': 'Stavite najvažnije metrike na vrh',
  'guidesPage.guides.dashboard.tips[1]': 'Koristite konzistentno kodiranje bojama na svim grafikonima',
  'guidesPage.guides.dashboard.tips[2]': 'Izbegavajte prenatrpanost – manje je više',

  // Guide: Authentication
  'guidesPage.guides.authentication.title': 'Autentifikacija i bezbednost',
  'guidesPage.guides.authentication.description': 'Implementirajte bezbednu autentifikaciju korisnika i zaštitite svoje aplikacije',
  'guidesPage.guides.authentication.overview': 'Implementirajte robusnu autentifikaciju i najbolje bezbednosne prakse za zaštitu vaših korisnika i podataka.',
  'guidesPage.guides.authentication.steps[0]': 'Podesite bezbednu registraciju korisnika sa verifikacijom e-pošte',
  'guidesPage.guides.authentication.steps[1]': 'Implementirajte heširanje lozinki sa bcrypt ili sličnim',
  'guidesPage.guides.authentication.steps[2]': 'Dodajte OAuth socijalnu prijavu (Google, GitHub)',
  'guidesPage.guides.authentication.steps[3]': 'Kreirajte zaštićene rute i middleware',
  'guidesPage.guides.authentication.steps[4]': 'Implementirajte upravljanje sesijama sa bezbednim kolačićima',
  'guidesPage.guides.authentication.steps[5]': 'Dodajte ograničenje broja zahteva za sprečavanje napada grubom silom',
  'guidesPage.guides.authentication.tips[0]': 'Nikada ne čuvajte lozinke kao običan tekst',
  'guidesPage.guides.authentication.tips[1]': 'Koristite HTTPS za sve konekcije',
  'guidesPage.guides.authentication.tips[2]': 'Implementirajte pravilne CORS politike',

  // Guide: Database
  'guidesPage.guides.database.title': 'Vodič za integraciju baze podataka',
  'guidesPage.guides.database.description': 'Povežite svoju aplikaciju sa bazama podataka i efikasno upravljajte podacima',
  'guidesPage.guides.database.overview': 'Naučite da povežete svoju aplikaciju sa bazama podataka i implementirate efikasno upravljanje podacima.',
  'guidesPage.guides.database.steps[0]': 'Izaberite odgovarajuću bazu podataka (SQL ili NoSQL)',
  'guidesPage.guides.database.steps[1]': 'Podesite konekciju baze podataka sa promenljivim okruženja',
  'guidesPage.guides.database.steps[2]': 'Dizajnirajte šemu podataka i relacije',
  'guidesPage.guides.database.steps[3]': 'Implementirajte CRUD operacije (kreiranje, čitanje, ažuriranje, brisanje)',
  'guidesPage.guides.database.steps[4]': 'Dodajte validaciju podataka pre operacija sa bazom',
  'guidesPage.guides.database.steps[5]': 'Podesite migracije baze podataka za promene šeme',
  'guidesPage.guides.database.tips[0]': 'Uvek koristite parametrizovane upite za sprečavanje SQL injekcije',
  'guidesPage.guides.database.tips[1]': 'Indeksirajte kolone koje se često pretražuju',
  'guidesPage.guides.database.tips[2]': 'Redovno pravite rezervne kopije podataka',

  // Guide: Responsive
  'guidesPage.guides.responsive.title': 'Obrasci responzivnog dizajna',
  'guidesPage.guides.responsive.description': 'Učinite da vaše aplikacije izgledaju odlično na svim uređajima sa dizajnom za mobilne uređaje',
  'guidesPage.guides.responsive.overview': 'Kreirajte responzivne dizajne koji odlično funkcionišu na svim veličinama ekrana.',
  'guidesPage.guides.responsive.steps[0]': 'Počnite sa pristupom CSS za mobilne uređaje',
  'guidesPage.guides.responsive.steps[1]': 'Koristite fleksibilne rasporede mreže (CSS Grid, Flexbox)',
  'guidesPage.guides.responsive.steps[2]': 'Implementirajte responzivne tačke preloma (sm, md, lg, xl)',
  'guidesPage.guides.responsive.steps[3]': 'Optimizujte slike za različite gustine ekrana',
  'guidesPage.guides.responsive.steps[4]': 'Testirajte interakcije na dodir na mobilnim uređajima',
  'guidesPage.guides.responsive.steps[5]': 'Koristite relativne jedinice (rem, %, vh/vw) umesto piksela',
  'guidesPage.guides.responsive.tips[0]': 'Testirajte na pravim uređajima, ne samo u alatima za razvoj u pregledaču',
  'guidesPage.guides.responsive.tips[1]': 'Razmislite o ciljevima dodira prilagođenim palcu na mobilnim uređajima',
  'guidesPage.guides.responsive.tips[2]': 'Prioritizujte sadržaj za manje ekrane',

  // Guide: API
  'guidesPage.guides.api.title': 'Majstorski kurs za API integraciju',
  'guidesPage.guides.api.description': 'Neprimetan način povezivanja sa servisima i API-jima trećih strana',
  'guidesPage.guides.api.overview': 'Naučite da integrišete spoljne API-je i servise trećih strana u svoje aplikacije.',
  'guidesPage.guides.api.steps[0]': 'Razumite osnove REST API-ja (krajnje tačke, metode)',
  'guidesPage.guides.api.steps[1]': 'Podesite API autentifikaciju (API ključevi, OAuth tokeni)',
  'guidesPage.guides.api.steps[2]': 'Napravite HTTP zahteve (GET, POST, PUT, DELETE)',
  'guidesPage.guides.api.steps[3]': 'Pravilno obradite API odgovore i greške',
  'guidesPage.guides.api.steps[4]': 'Implementirajte logiku ponovnog pokušaja za neuspele zahteve',
  'guidesPage.guides.api.steps[5]': 'Keširajte odgovore za poboljšanje performansi',
  'guidesPage.guides.api.tips[0]': 'Čuvajte API ključeve u promenljivim okruženja',
  'guidesPage.guides.api.tips[1]': 'Obradite ograničenje broja zahteva eksponencijalnim povlačenjem',
  'guidesPage.guides.api.tips[2]': 'Evidentirajte API pozive za otklanjanje grešaka',

  // Guide: Performance
  'guidesPage.guides.performance.title': 'Optimizacija performansi',
  'guidesPage.guides.performance.description': 'Ubrzajte svoje aplikacije za bolje korisničko iskustvo i SEO',
  'guidesPage.guides.performance.overview': 'Optimizujte svoju aplikaciju za brzinu, bolje korisničko iskustvo i poboljšani SEO.',
  'guidesPage.guides.performance.steps[0]': 'Analizirajte trenutne performanse pomoću Lighthouse',
  'guidesPage.guides.performance.steps[1]': 'Optimizujte i kompresujte slike (WebP format, odloženo učitavanje)',
  'guidesPage.guides.performance.steps[2]': 'Minimizirajte JavaScript i CSS pakete',
  'guidesPage.guides.performance.steps[3]': 'Implementirajte deljenje koda i odloženo učitavanje',
  'guidesPage.guides.performance.steps[4]': 'Podesite odgovarajuća zaglavlja za keširanje',
  'guidesPage.guides.performance.steps[5]': 'Koristite CDN za statičke resurse',
  'guidesPage.guides.performance.tips[0]': 'Ciljajte na manje od 3 sekunde za početno učitavanje stranice',
  'guidesPage.guides.performance.tips[1]': 'Koristite budžete performansi za praćenje regresija',
  'guidesPage.guides.performance.tips[2]': 'Redovno pratite Core Web Vitals',

  // CTA
  'guidesPage.cta.title': 'Spremni da počnete da gradite?',
  'guidesPage.cta.subtitle': 'Primenite ono što ste naučili u praksi. Kreirajte svoju prvu aplikaciju danas.',
  'guidesPage.cta.getStartedFree': 'Započnite besplatno',
  'guidesPage.cta.browseTemplates': 'Pregledajte šablone',
};

let count = 0;
for (const [path, value] of Object.entries(translations)) {
  set(sr, path, value);
  count++;
}

fs.writeFileSync('./src/translations/sr.json', JSON.stringify(sr, null, 2), 'utf8');
console.log(`Applied ${count} translations to sr.json`);
console.log('  - learnPage entries: ' + Object.keys(translations).filter(k => k.startsWith('learnPage.')).length);
console.log('  - guidesPage entries: ' + Object.keys(translations).filter(k => k.startsWith('guidesPage.')).length);
