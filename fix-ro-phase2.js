const fs = require('fs');
const ro = JSON.parse(fs.readFileSync('src/translations/ro.json', 'utf8'));

function set(obj, path, val) {
  const parts = path.replace(/\[(\d+)\]/g, '.$1').split('.');
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const k = isNaN(parts[i]) ? parts[i] : Number(parts[i]);
    if (cur[k] === undefined) cur[k] = isNaN(parts[i+1]) ? {} : [];
    cur = cur[k];
  }
  const last = isNaN(parts[parts.length - 1]) ? parts[parts.length - 1] : Number(parts[parts.length - 1]);
  cur[last] = val;
}

const t = {
  // Fix teamsPage.activity array (was created as object, need array)
  // Will be handled by recreating

  // ===== common (5) =====
  "common.switchToLightMode": "Comutati la modul luminos",
  "common.switchToDarkMode": "Comutati la modul intunecat",
  "common.addAttachments": "Adaugati atasamente",
  "common.addImage": "Adaugati imagine",
  "common.moveMouseToExplore": "Miscati mouse-ul pentru a explora",

  // ===== homePage (3) =====
  "homePage.videoSection.badge": "Cum functioneaza",
  "homePage.videoSection.title": "Vedeti AppNode in actiune",
  "homePage.videoSection.subtitle": "Urmariti cum dezvoltatorii construiesc aplicatii gata de productie in cateva minute folosind limbajul natural.",

  // ===== nav (2) =====
  "nav.enterprise": "Enterprise",
  "nav.blog": "Blog",

  // ===== hero (2) =====
  "hero.placeholder": "Descrieti aplicatia pe care doriti sa o construiti...",
  "hero.pressEnter": "Apasati Enter pentru a trimite",

  // ===== features (12) =====
  "features.subtitle": "AppNode ofera toate instrumentele si functiile necesare pentru a crea aplicatii puternice fara a scrie cod.",
  "features.aiPowered.description": "Descrieti ideea in limbaj natural si urmariti cum AI-ul va construieste aplicatia in timp real.",
  "features.visualBuilder.description": "Trageti si plasati componente, personalizati layout-uri si proiectati interfete frumoase fara cod.",
  "features.instantDeploy.description": "Implementati aplicatiile cu un singur clic. Nu este necesara configurarea serverului.",
  "features.database.description": "Integrare puternica de baze de date cu generare automata a schemei si sincronizare in timp real.",
  "features.auth.description": "Autentificare securizata a utilizatorilor din start. Suport pentru autentificari sociale si SSO.",
  "features.api.title": "Integrare API",
  "features.api.description": "Conectati-va la orice API cu conectorul nostru vizual. Importati specificatii OpenAPI instant.",
  "features.responsive.title": "Design responsiv",
  "features.responsive.description": "Aplicatiile dvs. arata excelent pe orice dispozitiv. Layout-uri responsive automate si previzualizari.",
  "features.collaboration.title": "Colaborare in timp real",
  "features.collaboration.description": "Lucrati impreuna cu echipa in timp real. Vedeti schimbarile pe masura ce se intampla.",

  // ===== buildAnything (27) =====
  "buildAnything.subtitle": "Incepeti sa construiti. Incepeti sa castigati. Astazi.",
  "buildAnything.exploreAll": "Explorati toate sabloanele",
  "buildAnything.webApps.description": "Aplicatii web complete cu autentificare, baze de date si API-uri.",
  "buildAnything.mobileApps.description": "Experiente mobile native pentru iOS si Android dintr-o singura baza de cod.",
  "buildAnything.dashboards.title": "Panouri de control",
  "buildAnything.dashboards.description": "Panouri de vizualizare a datelor si analitice cu actualizari in timp real.",
  "buildAnything.ecommerce.title": "E-commerce",
  "buildAnything.ecommerce.description": "Magazine online cu plati, inventar si gestionarea comenzilor.",
  "buildAnything.internal.title": "Instrumente interne",
  "buildAnything.internal.description": "Panouri de administrare personalizate, CRM-uri si instrumente de automatizare a fluxurilor de lucru.",
  "buildAnything.marketplace.title": "Piete online",
  "buildAnything.marketplace.description": "Platforme bilaterale care conecteaza cumparatori si vanzatori.",
  "buildAnything.categories.saasplatform": "Platforma SaaS",
  "buildAnything.categories.gamingportal": "Portal de jocuri",
  "buildAnything.categories.mapsnavigation": "Harti si navigatie",
  "buildAnything.categories.fashionstore": "Magazin de moda",
  "buildAnything.categories.stylecollection": "Colectie de stil",
  "buildAnything.categories.beautyproducts": "Produse de frumusete",
  "buildAnything.categories.fitnesstracker": "Tracker de fitness",
  "buildAnything.categories.luxuryfragrance": "Parfum de lux",
  "buildAnything.categories.beautystore": "Magazin de frumusete",
  "buildAnything.categories.streamingplatform": "Platforma de streaming",
  "buildAnything.categories.gaminggearstore": "Magazin echipamente gaming",
  "buildAnything.categories.gamingstore": "Magazin de jocuri",
  "buildAnything.categories.synthesizer": "Sintetizator",
  "buildAnything.categories.projectroadmap": "Foaie de parcurs proiect",
  "buildAnything.categories.analyticsdashboard": "Panou de analitice",

  // ===== testimonials (16) =====
  "testimonials.badge": "Testimoniale",
  "testimonials.title": "Iubit de creatori din intreaga lume",
  "testimonials.subtitle": "Alaturati-va miilor de dezvoltatori, designeri si antreprenori care construiesc cu AppNode.",
  "testimonials.quote1": "AppNode a transformat complet modul in care prototipam. Ce obisnuia sa dureze saptamani acum dureaza ore.",
  "testimonials.author1": "Sarah Chen",
  "testimonials.role1": "Manager de produs la TechCorp",
  "testimonials.quote2": "Am construit intregul MVP al startup-ului meu folosind AppNode. AI-ul intelege exact ce am nevoie.",
  "testimonials.author2": "Mike Rodriguez",
  "testimonials.role2": "Fondator al StartupX",
  "testimonials.quote3": "Ca designer, acum pot aduce design-urile la viata fara sa astept dezvoltatorii.",
  "testimonials.author3": "Emma Wilson",
  "testimonials.role3": "Designer senior la DesignStudio",
  "testimonials.stats.activeUsers": "Utilizatori activi",
  "testimonials.stats.projectsCreated": "Proiecte create",
  "testimonials.stats.countries": "Tari",
  "testimonials.stats.averageRating": "Evaluare medie",

  // ===== cta (9) =====
  "cta.title": "Gata sa construiti ceva",
  "cta.titleHighlight": "uimitor?",
  "cta.subtitle": "Incepeti sa va creati aplicatia astazi. Nu este nevoie de card de credit.",
  "cta.description": "Alaturati-va miilor de creatori care construiesc deja viitorul cu AppNode. Incepeti gratuit, fara card de credit.",
  "cta.button": "Incepeti sa construiti gratuit",
  "cta.emailPlaceholder": "Introduceti emailul dvs.",
  "cta.successMessage": "Verificati emailul pentru a incepe!",
  "cta.newFeatures": "Stiluri inteligente si layout-uri automate",
  "cta.trustedBy": "De incredere pentru echipele de la",

  // ===== footer (12) =====
  "footer.enterprise": "Enterprise",
  "footer.learn": "Invata",
  "footer.guides": "Ghiduri",
  "footer.videos": "Videoclipuri",
  "footer.blog": "Blog",
  "footer.cookieSettings": "Setari cookie",
  "footer.platformRules": "Reguli platformei",
  "footer.documentation": "Documentatie",
  "footer.reportAbuse": "Raportati abuz",
  "footer.madeWith": "Realizat cu",
  "footer.tagline": "Construiti aplicatii gata de productie cu AI",
  "footer.connectWithUs": "Conectati-va cu noi",

  // ===== products (21) =====
  "products.subtitle": "Instrumente puternice pentru a construi, implementa si scala aplicatiile dvs.",
  "products.agent.title": "Agent AI",
  "products.agent.description": "AI inteligent care intelege cerintele dvs. si construieste aplicatii automat.",
  "products.agent.tagline": "Construiti cu limbaj natural",
  "products.database.title": "Baza de date",
  "products.database.description": "Baza de date scalabila, securizata, cu sincronizare in timp real si backup-uri automate.",
  "products.database.tagline": "Datele dvs., gestionate",
  "products.design.title": "Studio de design",
  "products.design.description": "Instrumente de design vizual pentru a crea interfete uimitoare fara cod.",
  "products.design.tagline": "Proiectati frumos",
  "products.integrations.title": "Integrari",
  "products.integrations.description": "Conectati-va la mii de servicii si API-uri cu conectori preconfigurati.",
  "products.integrations.tagline": "Conectati totul",
  "products.mobile.title": "Mobil",
  "products.mobile.description": "Construiti aplicatii mobile native pentru iOS si Android dintr-un singur proiect.",
  "products.mobile.tagline": "Treceti pe mobil",
  "products.publish.title": "Publicare",
  "products.publish.description": "Implementare cu un clic pe domenii personalizate cu SSL si CDN incluse.",
  "products.publish.tagline": "Livrati mai rapid",
  "products.security.description": "Securitate de nivel enterprise cu conformitate SOC 2 si suport SSO.",
  "products.security.tagline": "Ramaneti in siguranta",

  // ===== blog (7) =====
  "blog.title": "Blog",
  "blog.subtitle": "Stiri, actualizari si informatii de la echipa AppNode",
  "blog.readTime": "min de citit",
  "blog.categories.all": "Toate",
  "blog.categories.product": "Produs",
  "blog.categories.engineering": "Inginerie",
  "blog.categories.tutorials": "Tutoriale",

  // ===== careers (14) =====
  "careers.title": "Alaturati-va echipei noastre",
  "careers.subtitle": "Ajutati-ne sa modelam viitorul dezvoltarii de aplicatii",
  "careers.openPositions": "Pozitii deschise",
  "careers.benefits.title": "De ce AppNode?",
  "careers.benefits.remote": "Remote in primul rand",
  "careers.benefits.remoteDesc": "Lucrati de oriunde din lume",
  "careers.benefits.equity": "Actiuni",
  "careers.benefits.equityDesc": "Impartasiti succesul nostru",
  "careers.benefits.health": "Beneficii de sanatate",
  "careers.benefits.healthDesc": "Acoperire completa pentru dvs. si familia dvs.",
  "careers.benefits.learning": "Buget de invatare",
  "careers.benefits.learningDesc": "Investiti in cresterea dvs.",
  "careers.noPositions": "Nicio pozitie deschisa momentan. Reveniti in curand!",
  "careers.applyNow": "Aplicati acum",

  // ===== community (5) =====
  "community.subtitle": "Conectati-va cu constructorii AppNode din intreaga lume",
  "community.discord": "Alaturati-va Discord-ului nostru",
  "community.forum": "Forum comunitate",
  "community.showcase": "Vitrina de proiecte",
  "community.events": "Evenimente viitoare",

  // ===== support (5) =====
  "support.subtitle": "Suntem aici sa va ajutam",
  "support.helpCenter": "Centru de ajutor",
  "support.contactUs": "Contactati-ne",
  "support.status": "Starea sistemului",
  "support.faq": "Intrebari frecvente",

  // ===== legal (4) =====
  "legal.terms.lastUpdated": "Ultima actualizare",
  "legal.privacy.lastUpdated": "Ultima actualizare",
  "legal.cookies.title": "Politica de cookie-uri",
  "legal.cookies.lastUpdated": "Ultima actualizare",

  // ===== status (5) =====
  "status.title": "Starea sistemului",
  "status.operational": "Toate sistemele operationale",
  "status.degraded": "Performanta degradata",
  "status.outage": "Intrerupere de serviciu",
  "status.maintenance": "In mentenanta",

  // ===== errors (5) =====
  "errors.404.description": "Pagina pe care o cautati nu exista.",
  "errors.404.backHome": "Inapoi acasa",
  "errors.500.title": "Ceva a mers prost",
  "errors.500.description": "Lucram la remedierea problemei. Va rugam sa incercati din nou mai tarziu.",
  "errors.500.retry": "Incercati din nou",

  // ===== enterprise (15) =====
  "enterprise.title": "AppNode pentru Enterprise",
  "enterprise.subtitle": "Imputerniciti organizatia dvs. cu dezvoltare de aplicatii securizata si scalabila",
  "enterprise.features.security.title": "Securitate Enterprise",
  "enterprise.features.security.description": "Certificat SOC 2 Tip II cu criptare avansata si controale de acces.",
  "enterprise.features.sso.title": "Autentificare unica",
  "enterprise.features.sso.description": "Integrati cu furnizorul dvs. de identitate existent. Suport SAML si OIDC.",
  "enterprise.features.compliance.title": "Conformitate",
  "enterprise.features.compliance.description": "Conformitate GDPR, HIPAA si specifica industriei integrata.",
  "enterprise.features.support.title": "Suport dedicat",
  "enterprise.features.support.description": "Suport prioritar 24/7 cu gestionare dedicata a contului.",
  "enterprise.features.sla.title": "Garantie SLA",
  "enterprise.features.sla.description": "SLA de 99,99% disponibilitate cu infrastructura de nivel enterprise.",
  "enterprise.features.onpremise.title": "On-Premise",
  "enterprise.features.onpremise.description": "Implementati in propriul cloud sau mediu on-premise.",
  "enterprise.cta": "Contactati vanzarile",

  // ===== solutions (7) =====
  "solutions.subtitle": "Solutii adaptate pentru fiecare industrie si caz de utilizare",
  "solutions.startup.title": "Pentru startup-uri",
  "solutions.startup.description": "Miscati-va rapid si construiti MVP-ul in zile, nu luni.",
  "solutions.enterprise.title": "Pentru Enterprise",
  "solutions.enterprise.description": "Scalati securizat cu conformitate, SSO si suport dedicat.",
  "solutions.agencies.title": "Pentru agentii",
  "solutions.agencies.description": "Livrati proiectele clientilor mai rapid cu solutii white-label.",

  // ===== useCases (7) =====
  "useCases.subtitle": "Vedeti cum echipele folosesc AppNode",
  "useCases.rapidPrototyping.title": "Prototipare rapida",
  "useCases.rapidPrototyping.description": "Validati ideile rapid cu prototipuri functionale in ore.",
  "useCases.businessApps.title": "Aplicatii de afaceri",
  "useCases.businessApps.description": "Construiti CRM-uri, ERP-uri si instrumente de automatizare personalizate.",
  "useCases.mobileApps.title": "Aplicatii mobile",
  "useCases.mobileApps.description": "Creati experiente mobile native fara expertiza in dezvoltare mobila.",

  // ===== docs (7) =====
  "docs.title": "Documentatie",
  "docs.subtitle": "Tot ce aveti nevoie pentru a construi cu AppNode",
  "docs.gettingStarted": "Primii pasi",
  "docs.tutorials": "Tutoriale",
  "docs.apiReference": "Referinta API",
  "docs.examples": "Exemple",
  "docs.searchPlaceholder": "Cautati in documentatie...",

  // ===== solutionsWeb3 (3) =====
  "solutionsWeb3.badge": "Solutii Web3",
  "solutionsWeb3.title": "Construiti pentru Web3",
  "solutionsWeb3.subtitle": "Creati aplicatii descentralizate cu integrare blockchain",

  // ===== auth (36) =====
  "auth.login.subtitle": "Conectati-va la contul AppNode",
  "auth.login.email": "Adresa de email",
  "auth.login.password": "Parola",
  "auth.login.forgotPassword": "Ati uitat parola?",
  "auth.login.noAccount": "Nu aveti un cont?",
  "auth.login.signUpLink": "Inregistrati-va",
  "auth.login.invalidCredentials": "Email sau parola invalida",
  "auth.login.loggingIn": "Se conecteaza...",
  "auth.login.orContinueWith": "Sau continuati cu",
  "auth.login.decorativeTitle": "Construiti orice.",
  "auth.login.decorativeSubtitle": "Mai rapid ca niciodata.",
  "auth.login.decorativeDescription": "Cel mai simplu mod din lume de a construi aplicatii cu AI.",
  "auth.signup.title": "Creati-va contul",
  "auth.signup.subtitle": "Incepeti sa construiti cu AppNode astazi",
  "auth.signup.name": "Nume complet",
  "auth.signup.email": "Adresa de email",
  "auth.signup.password": "Parola",
  "auth.signup.confirmPassword": "Confirmati parola",
  "auth.signup.hasAccount": "Aveti deja un cont?",
  "auth.signup.loginLink": "Conectati-va",
  "auth.signup.terms": "Prin inregistrare, sunteti de acord cu Termenii de utilizare si Politica de confidentialitate.",
  "auth.signup.decorativeTitle": "Incepeti sa construiti astazi",
  "auth.signup.decorativeDescription": "Creati contul gratuit si incepeti sa construiti aplicatii uimitoare cu AI in cateva minute.",
  "auth.signup.step2Title": "Personalizati-va profilul",
  "auth.signup.step2Subtitle": "Alegeti o culoare de avatar care va reprezinta",
  "auth.signup.step3Title": "Spuneti-ne despre dvs.",
  "auth.signup.step3Subtitle": "Acest lucru ne ajuta sa va personalizam experienta",
  "auth.signup.roleQuestion": "Care va descrie cel mai bine rolul?",
  "auth.signup.company": "Numele companiei",
  "auth.signup.creatingAccount": "Se creeaza contul...",
  "auth.signup.createAccount": "Creati cont",
  "auth.features.aiPowered": "Dezvoltare alimentata de AI",
  "auth.features.shipFast": "Livrati in minute, nu luni",
  "auth.features.freeGenerations": "2 generari gratuite pentru a incepe",
  "auth.features.noCreditCard": "Nu este nevoie de card de credit",
  "auth.features.fullAccess": "Acces complet la toate sabloanele",
};

for (const [path, val] of Object.entries(t)) {
  set(ro, path, val);
}

// Fix teamsPage.activity - recreate as proper array
if (ro.teamsPage && ro.teamsPage.activity) {
  ro.teamsPage.activity = [
    { user: "Alex", action: "a trimis in main", time: "acum 2m" },
    { user: "Blake", action: "a implementat in prod", time: "acum 15m" },
    { user: "Casey", action: "a revizuit PR #42", time: "acum 1h" }
  ];
}

fs.writeFileSync('src/translations/ro.json', JSON.stringify(ro, null, 2), 'utf8');
console.log('Phase 2: Small/medium sections translated + teamsPage.activity fixed. Done.');
