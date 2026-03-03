const fs = require('fs');
const path = require('path');

const enPath = path.join(__dirname, 'src/translations/en.json');
const srPath = path.join(__dirname, 'src/translations/sr.json');

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const sr = JSON.parse(fs.readFileSync(srPath, 'utf8'));

// Helper to set a nested value using dot/bracket path notation
function set(obj, pathStr, value) {
  const keys = pathStr.replace(/\[(\d+)\]/g, '.$1').split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!(key in current)) {
      current[key] = /^\d+$/.test(keys[i + 1]) ? [] : {};
    }
    current = current[key];
  }
  current[keys[keys.length - 1]] = value;
}

// Helper to get a nested value using dot/bracket path notation
function get(obj, pathStr) {
  const keys = pathStr.replace(/\[(\d+)\]/g, '.$1').split('.');
  let current = obj;
  for (const key of keys) {
    if (current == null || !(key in current)) return undefined;
    current = current[key];
  }
  return current;
}

let count = 0;

function applyTranslation(pathStr, value) {
  set(sr, pathStr, value);
  count++;
}

// ============================================================
// rulesPage translations (50 entries)
// ============================================================
applyTranslation('rulesPage.badge', 'Smernice zajednice');
applyTranslation('rulesPage.title', 'Pravila platforme');
applyTranslation('rulesPage.subtitle', 'Naša zajednica napreduje kada se svi pridržavaju ovih smernica. Zajedno stvaramo pozitivno i produktivno okruženje.');

// rules.respectAndKindness
applyTranslation('rulesPage.rules.respectAndKindness.title', 'Poštovanje i ljubaznost');
applyTranslation('rulesPage.rules.respectAndKindness.description', 'Postupajte sa poštovanjem prema svim članovima zajednice. Uznemiravanje, govor mržnje, diskriminacija ili lični napadi bilo koje vrste nisu dozvoljeni.');
applyTranslation('rulesPage.rules.respectAndKindness.examples.title', 'Primeri:');
applyTranslation('rulesPage.rules.respectAndKindness.examples.item1', 'Budite korisni i konstruktivni u povratnim informacijama');
applyTranslation('rulesPage.rules.respectAndKindness.examples.item2', 'Izbegavajte zapaljiv ili neprijateljski jezik');
applyTranslation('rulesPage.rules.respectAndKindness.examples.item3', 'Poštujte razlike u mišljenju i iskustvu');

// rules.originalContent
applyTranslation('rulesPage.rules.originalContent.title', 'Originalan sadržaj');
applyTranslation('rulesPage.rules.originalContent.description', 'Kreirajte i delite originalan rad. Poštujte prava intelektualne svojine i navedite odgovarajuće zasluge kada koristite tuđi rad.');
applyTranslation('rulesPage.rules.originalContent.examples.title', 'Primeri:');
applyTranslation('rulesPage.rules.originalContent.examples.item1', 'Delite samo sadržaj na koji imate pravo');
applyTranslation('rulesPage.rules.originalContent.examples.item2', 'Navedite originalne autore kada ste inspirisani njihovim radom');
applyTranslation('rulesPage.rules.originalContent.examples.item3', 'Ne kopirajte i ne plagirajte projekte drugih korisnika');

// rules.safeContent
applyTranslation('rulesPage.rules.safeContent.title', 'Bezbedan sadržaj');
applyTranslation('rulesPage.rules.safeContent.description', 'Održavajte platformu bezbednom za sve. Ne kreirajte, delite ili promovišite štetan, nezakonit ili neprikladan sadržaj.');
applyTranslation('rulesPage.rules.safeContent.examples.title', 'Primeri:');
applyTranslation('rulesPage.rules.safeContent.examples.item1', 'Bez eksplicitnog, nasilnog ili uznemirujućeg sadržaja');
applyTranslation('rulesPage.rules.safeContent.examples.item2', 'Bez promovisanja nezakonitih aktivnosti');
applyTranslation('rulesPage.rules.safeContent.examples.item3', 'Bez sadržaja koji bi mogao naneti štetu ili ugroziti druge');

// rules.noSpam
applyTranslation('rulesPage.rules.noSpam.title', 'Bez spama i manipulacije');
applyTranslation('rulesPage.rules.noSpam.description', 'Ne upuštajte se u spam, manipulaciju ili obmanjujuće prakse. Održavajte platformu autentičnom i pouzdanom.');
applyTranslation('rulesPage.rules.noSpam.examples.title', 'Primeri:');
applyTranslation('rulesPage.rules.noSpam.examples.item1', 'Bez automatizovanih ili masovnih radnji za veštačko povećanje vidljivosti');
applyTranslation('rulesPage.rules.noSpam.examples.item2', 'Bez lažnih naloga ili lažnog predstavljanja');
applyTranslation('rulesPage.rules.noSpam.examples.item3', 'Bez obmanjujućeg ili varljivog sadržaja');

// rules.securePractices
applyTranslation('rulesPage.rules.securePractices.title', 'Bezbedne prakse');
applyTranslation('rulesPage.rules.securePractices.description', 'Pridržavajte se najboljih bezbednosnih praksi. Nikada ne pokušavajte da iskoristite, hakujete ili kompromitujete platformu ili druge korisnike.');
applyTranslation('rulesPage.rules.securePractices.examples.title', 'Primeri:');
applyTranslation('rulesPage.rules.securePractices.examples.item1', 'Ne pokušavajte da pristupite tuđim nalozima');
applyTranslation('rulesPage.rules.securePractices.examples.item2', 'Prijavite bezbednosne ranjivosti odgovorno');
applyTranslation('rulesPage.rules.securePractices.examples.item3', 'Nikada ne delite zlonamerni kod ili phishing linkove');

// rules.fairUse
applyTranslation('rulesPage.rules.fairUse.title', 'Fer korišćenje');
applyTranslation('rulesPage.rules.fairUse.description', 'Koristite platformu fer i kako je predviđeno. Poštujte ograničenja korišćenja i ne zloupotrebljavajte naše usluge.');
applyTranslation('rulesPage.rules.fairUse.examples.title', 'Primeri:');
applyTranslation('rulesPage.rules.fairUse.examples.item1', 'Držite se ograničenja korišćenja vašeg plana');
applyTranslation('rulesPage.rules.fairUse.examples.item2', 'Ne koristite platformu za neovlašćene komercijalne svrhe');
applyTranslation('rulesPage.rules.fairUse.examples.item3', 'Ne zaobilazite ograničenja platforme');

// enforcement
applyTranslation('rulesPage.enforcement.title', 'Sprovođenje');
applyTranslation('rulesPage.enforcement.description', 'Kršenje ovih pravila može rezultirati uklanjanjem sadržaja, upozorenjem naloga, privremenom suspenzijom ili trajnom zabranom u zavisnosti od ozbiljnosti i učestalosti kršenja. Pregledamo sve prijave i preduzimamo odgovarajuće mere.');
applyTranslation('rulesPage.enforcement.warning.title', 'Upozorenje');
applyTranslation('rulesPage.enforcement.warning.subtitle', 'Prvo manje kršenje');
applyTranslation('rulesPage.enforcement.suspension.title', 'Suspenzija');
applyTranslation('rulesPage.enforcement.suspension.subtitle', 'Ponovljena ili ozbiljna kršenja');
applyTranslation('rulesPage.enforcement.ban.title', 'Zabrana');
applyTranslation('rulesPage.enforcement.ban.subtitle', 'Teška ili uporna kršenja');

// report
applyTranslation('rulesPage.report.title', 'Vidite nešto pogrešno?');
applyTranslation('rulesPage.report.description', 'Ako naiđete na sadržaj ili ponašanje koje krši pravila naše platforme, molimo vas da to prijavite kako bismo mogli da preduzmemo mere.');
applyTranslation('rulesPage.report.button', 'Prijavi zloupotrebu');

// ============================================================
// securityPage translations (61 entries)
// ============================================================
applyTranslation('securityPage.badge', 'Bezbednost poslovnog nivoa');
applyTranslation('securityPage.titleSuffix', 'na prvom mestu');
applyTranslation('securityPage.subtitle', 'Bezbednost vaših podataka je naš glavni prioritet. Saznajte o merama koje preduzimamo da bismo zaštitili vaše informacije.');
applyTranslation('securityPage.featuresTitle', 'Bezbednosne funkcije');
applyTranslation('securityPage.practicesTitle', 'Naše bezbednosne prakse');
applyTranslation('securityPage.bugBountyTitle', 'Program za pronalaženje grešaka');
applyTranslation('securityPage.bugBountyDescription', 'Pomozite nam da poboljšamo bezbednost i zaradite nagrade za odgovorno prijavljivanje ranjivosti.');
applyTranslation('securityPage.reportTitle', 'Prijavite bezbednosni problem');
applyTranslation('securityPage.reportDescription', 'Ako verujete da ste pronašli bezbednosnu ranjivost u AppNode-u, molimo vas da je odmah prijavite našem bezbednosnom timu.');
applyTranslation('securityPage.whitepaper', 'Bezbednosni dokument');

// securityPage.features (icons stay, titles and descriptions translated)
applyTranslation('securityPage.features[0].icon', '🔐');
applyTranslation('securityPage.features[0].title', 'Šifrovanje u mirovanju i prenosu');
applyTranslation('securityPage.features[0].description', 'Svi podaci su šifrovani korišćenjem AES-256 šifrovanja u mirovanju i TLS 1.3 za podatke u prenosu.');

applyTranslation('securityPage.features[1].icon', '🛡️');
applyTranslation('securityPage.features[1].title', 'SOC 2 Type II sertifikovan');
applyTranslation('securityPage.features[1].description', 'Održavamo usklađenost sa SOC 2 Type II, potvrđenu od strane nezavisnih revizora.');

applyTranslation('securityPage.features[2].icon', '🔒');
applyTranslation('securityPage.features[2].title', 'Dvofaktorska autentifikacija');
applyTranslation('securityPage.features[2].description', 'Zaštitite svoj nalog pomoću 2FA koristeći aplikacije za autentifikaciju ili hardverske bezbednosne ključeve.');

applyTranslation('securityPage.features[3].icon', '🌐');
applyTranslation('securityPage.features[3].title', 'SSO i SAML');
applyTranslation('securityPage.features[3].description', 'Jedinstvena prijava poslovnog nivoa sa podrškom za SAML 2.0 i OAuth provajdere.');

applyTranslation('securityPage.features[4].icon', '📝');
applyTranslation('securityPage.features[4].title', 'Revizorski zapisi');
applyTranslation('securityPage.features[4].description', 'Sveobuhvatni revizorski zapisi za sve aktivnosti i promene na nalogu.');

applyTranslation('securityPage.features[5].icon', '🔍');
applyTranslation('securityPage.features[5].title', 'Skeniranje ranjivosti');
applyTranslation('securityPage.features[5].description', 'Kontinuirano automatsko bezbednosno skeniranje i redovno testiranje prodora.');

applyTranslation('securityPage.features[6].icon', '💾');
applyTranslation('securityPage.features[6].title', 'Rezervna kopija podataka');
applyTranslation('securityPage.features[6].description', 'Automatske dnevne rezervne kopije sa mogućnostima oporavka u određenom trenutku.');

applyTranslation('securityPage.features[7].icon', '🚨');
applyTranslation('securityPage.features[7].title', 'Odgovor na incidente');
applyTranslation('securityPage.features[7].description', 'Bezbednosni nadzor 24/7 sa brzim procedurama za odgovor na incidente.');

// securityPage.certifications (names are standards/brands - keep; icons keep; descriptions translate)
applyTranslation('securityPage.certifications[0].name', 'SOC 2 Type II');
applyTranslation('securityPage.certifications[0].icon', '✓');
applyTranslation('securityPage.certifications[0].description', 'Bezbednost, dostupnost i poverljivost');

applyTranslation('securityPage.certifications[1].name', 'GDPR');
applyTranslation('securityPage.certifications[1].icon', '✓');
applyTranslation('securityPage.certifications[1].description', 'Usklađenost sa zaštitom podataka EU');

applyTranslation('securityPage.certifications[2].name', 'CCPA');
applyTranslation('securityPage.certifications[2].icon', '✓');
applyTranslation('securityPage.certifications[2].description', 'Kalifornijski zakon o pravu na privatnost');

applyTranslation('securityPage.certifications[3].name', 'ISO 27001');
applyTranslation('securityPage.certifications[3].icon', '✓');
applyTranslation('securityPage.certifications[3].description', 'Upravljanje bezbednošću informacija');

// securityPage.practices
applyTranslation('securityPage.practices[0].title', 'Bezbedan razvoj');
applyTranslation('securityPage.practices[0].items[0]', 'Pregledi koda za sve promene');
applyTranslation('securityPage.practices[0].items[1]', 'Automatsko bezbednosno testiranje u CI/CD');
applyTranslation('securityPage.practices[0].items[2]', 'Skeniranje ranjivosti zavisnosti');
applyTranslation('securityPage.practices[0].items[3]', 'Redovna bezbednosna obuka za programere');

applyTranslation('securityPage.practices[1].title', 'Bezbednost infrastrukture');
applyTranslation('securityPage.practices[1].items[0]', 'Cloud infrastruktura na AWS/GCP');
applyTranslation('securityPage.practices[1].items[1]', 'Segmentacija mreže i zaštitni zidovi');
applyTranslation('securityPage.practices[1].items[2]', 'DDoS zaštita i ublažavanje');
applyTranslation('securityPage.practices[1].items[3]', 'Sistemi za detekciju upada');

applyTranslation('securityPage.practices[2].title', 'Kontrola pristupa');
applyTranslation('securityPage.practices[2].items[0]', 'Kontrola pristupa zasnovana na ulogama (RBAC)');
applyTranslation('securityPage.practices[2].items[1]', 'Princip najmanje privilegije');
applyTranslation('securityPage.practices[2].items[2]', 'Redovne revizije pristupa');
applyTranslation('securityPage.practices[2].items[3]', 'Bezbedno upravljanje akreditivima');

// ============================================================
// changelogPage translations (60 entries)
// ============================================================
applyTranslation('changelogPage.badge', 'Ažuriranja');
applyTranslation('changelogPage.title', 'Dnevnik promena');
applyTranslation('changelogPage.subtitle', 'Sva najnovija ažuriranja, poboljšanja i ispravke za AppNode');
applyTranslation('changelogPage.stayUpToDate', 'Budite u toku');
applyTranslation('changelogPage.getNotified', 'Budite obavešteni kada objavimo nove funkcije');
applyTranslation('changelogPage.emailPlaceholder', 'Unesite vaš email');
applyTranslation('changelogPage.subscribeButton', 'Pretplatite se');
applyTranslation('changelogPage.viewOlder', 'Pogledajte starija izdanja');
applyTranslation('changelogPage.changeTypes.new', 'Novo');
applyTranslation('changelogPage.changeTypes.improved', 'Poboljšano');
applyTranslation('changelogPage.changeTypes.fixed', 'Ispravljeno');

// v2.5.0 - Smart Styles & Auto Layouts
applyTranslation('changelogPage.releases.v250.date', '28. novembar 2025.');
applyTranslation('changelogPage.releases.v250.title', 'Pametni stilovi i automatski rasporedi');
applyTranslation('changelogPage.releases.v250.description', 'Predstavljamo stilizovanje pokretano veštačkom inteligencijom koje automatski kreira prelepe, konzistentne dizajne za vaše aplikacije.');
applyTranslation('changelogPage.releases.v250.changes[0]', 'Pametni stilovi: AI automatski primenjuje konzistentan stil na celoj aplikaciji');
applyTranslation('changelogPage.releases.v250.changes[1]', 'Automatski rasporedi: Inteligentni responzivni rasporedi koji se prilagođavaju sadržaju');
applyTranslation('changelogPage.releases.v250.changes[2]', 'Predlošci tema: Izbor od 20+ profesionalno dizajniranih tema');
applyTranslation('changelogPage.releases.v250.changes[3]', 'Brže generisanje koda sa optimizovanim promptovima');
applyTranslation('changelogPage.releases.v250.changes[4]', 'Bolja TypeScript podrška u generisanom kodu');
applyTranslation('changelogPage.releases.v250.changes[5]', 'Ispravljeni problemi sa rasporedom na mobilnim uređajima');

// v2.4.2 - Performance Improvements
applyTranslation('changelogPage.releases.v242.date', '15. novembar 2025.');
applyTranslation('changelogPage.releases.v242.title', 'Poboljšanje performansi');
applyTranslation('changelogPage.releases.v242.description', 'Velika poboljšanja performansi i ispravke grešaka.');
applyTranslation('changelogPage.releases.v242.changes[0]', '50% brže učitavanje projekata');
applyTranslation('changelogPage.releases.v242.changes[1]', 'Smanjena upotreba memorije u editoru');
applyTranslation('changelogPage.releases.v242.changes[2]', 'Ispravljen izvoz koda koji nije radio za velike projekte');
applyTranslation('changelogPage.releases.v242.changes[3]', 'Ispravljeni problemi sa autentifikacijom kod provajdera trećih strana');

// v2.4.0 - Team Collaboration
applyTranslation('changelogPage.releases.v240.date', '1. novembar 2025.');
applyTranslation('changelogPage.releases.v240.title', 'Timska saradnja');
applyTranslation('changelogPage.releases.v240.description', 'Radite zajedno sa svojim timom u realnom vremenu.');
applyTranslation('changelogPage.releases.v240.changes[0]', 'Saradnja u realnom vremenu: Više korisnika može istovremeno uređivati');
applyTranslation('changelogPage.releases.v240.changes[1]', 'Timski radni prostori sa dozvolama zasnovanim na ulogama');
applyTranslation('changelogPage.releases.v240.changes[2]', 'Komentari i povratne informacije o komponentama');
applyTranslation('changelogPage.releases.v240.changes[3]', 'Istorija verzija sa funkcionalnošću vraćanja');
applyTranslation('changelogPage.releases.v240.changes[4]', 'Bolje rešavanje konflikata za istovremene izmene');

// v2.3.0 - Database Integration
applyTranslation('changelogPage.releases.v230.date', '15. oktobar 2025.');
applyTranslation('changelogPage.releases.v230.title', 'Integracija baze podataka');
applyTranslation('changelogPage.releases.v230.description', 'Povežite svoje aplikacije sa bazama podataka sa lakoćom.');
applyTranslation('changelogPage.releases.v230.changes[0]', 'Supabase integracija za PostgreSQL baze podataka');
applyTranslation('changelogPage.releases.v230.changes[1]', 'Vizuelni dizajner šeme baze podataka');
applyTranslation('changelogPage.releases.v230.changes[2]', 'Automatski generisane CRUD operacije');
applyTranslation('changelogPage.releases.v230.changes[3]', 'Pretplate na podatke u realnom vremenu');
applyTranslation('changelogPage.releases.v230.changes[4]', 'Bolje upravljanje vezama sa bazom podataka');
applyTranslation('changelogPage.releases.v230.changes[5]', 'Ispravljeni problemi sa preuzimanjem podataka u produkcionim verzijama');

// v2.2.0 - Component Library
applyTranslation('changelogPage.releases.v220.date', '28. septembar 2025.');
applyTranslation('changelogPage.releases.v220.title', 'Biblioteka komponenti');
applyTranslation('changelogPage.releases.v220.description', 'Proširena biblioteka komponenti sa 100+ novih komponenti.');
applyTranslation('changelogPage.releases.v220.changes[0]', '100+ novih unapred napravljenih komponenti');
applyTranslation('changelogPage.releases.v220.changes[1]', 'Komponente za grafikone i vizualizaciju podataka');
applyTranslation('changelogPage.releases.v220.changes[2]', 'Kreator obrazaca sa validacijom');
applyTranslation('changelogPage.releases.v220.changes[3]', 'Biblioteka predefinisanih animacija');
applyTranslation('changelogPage.releases.v220.changes[4]', 'Pretraga i filtriranje komponenti');

// v2.1.0 - Authentication Made Easy
applyTranslation('changelogPage.releases.v210.date', '10. septembar 2025.');
applyTranslation('changelogPage.releases.v210.title', 'Autentifikacija na lak način');
applyTranslation('changelogPage.releases.v210.description', 'Dodajte autentifikaciju korisnika u svoje aplikacije za nekoliko sekundi.');
applyTranslation('changelogPage.releases.v210.changes[0]', 'Podešavanje autentifikacije jednim klikom');
applyTranslation('changelogPage.releases.v210.changes[1]', 'Provajderi prijave putem društvenih mreža (Google, GitHub, itd.)');
applyTranslation('changelogPage.releases.v210.changes[2]', 'Kontrolna tabla za upravljanje korisnicima');
applyTranslation('changelogPage.releases.v210.changes[3]', 'Tokovi za resetovanje lozinke');
applyTranslation('changelogPage.releases.v210.changes[4]', 'Bezbednosna poboljšanja za auth tokene');

// ============================================================
// supportPage translations (15 keyword entries)
// ============================================================
applyTranslation('supportPage.knowledgeBase[0].keywords[0]', 'šta je appnode');
applyTranslation('supportPage.knowledgeBase[0].keywords[1]', 'o appnode');
applyTranslation('supportPage.knowledgeBase[0].keywords[2]', 'appnode');
applyTranslation('supportPage.knowledgeBase[1].keywords[0]', 'cene');
applyTranslation('supportPage.knowledgeBase[1].keywords[1]', 'troškovi');
applyTranslation('supportPage.knowledgeBase[1].keywords[2]', 'cena');
applyTranslation('supportPage.knowledgeBase[1].keywords[3]', 'besplatno');
applyTranslation('supportPage.knowledgeBase[1].keywords[4]', 'plan');
applyTranslation('supportPage.knowledgeBase[2].keywords[4]', 'uživo');
applyTranslation('supportPage.knowledgeBase[6].keywords[3]', 'izvorni kod');
applyTranslation('supportPage.knowledgeBase[7].keywords[3]', 'responzivan');
applyTranslation('supportPage.knowledgeBase[8].keywords[3]', 'privatnost');
applyTranslation('supportPage.knowledgeBase[9].keywords[3]', 'problem');
applyTranslation('supportPage.knowledgeBase[9].keywords[4]', 'pomoć');
applyTranslation('supportPage.knowledgeBase[10].keywords[3]', 'naplata');

// ============================================================
// careersPage translations (14 entries - emojis stay, text translated/kept)
// ============================================================
// Department names: "AI" is a tech term, "Marketing" is used as-is in Serbian
applyTranslation('careersPage.openings[1].department', 'AI');
applyTranslation('careersPage.openings[5].department', 'Marketing');

// Emoji icons stay the same (universal symbols, not text)
applyTranslation('careersPage.benefits[0].icon', '💰');
applyTranslation('careersPage.benefits[1].icon', '📈');
applyTranslation('careersPage.benefits[2].icon', '🏥');
applyTranslation('careersPage.benefits[3].icon', '🏠');
applyTranslation('careersPage.benefits[4].icon', '🌴');
applyTranslation('careersPage.benefits[5].icon', '📚');
applyTranslation('careersPage.benefits[6].icon', '💻');
applyTranslation('careersPage.benefits[7].icon', '🎉');
applyTranslation('careersPage.companyValues[0].emoji', '🚀');
applyTranslation('careersPage.companyValues[1].emoji', '🎯');
applyTranslation('careersPage.companyValues[2].emoji', '🔓');
applyTranslation('careersPage.companyValues[3].emoji', '🤝');

// ============================================================
// statusPage translations (11 entries - enum values and tech terms)
// ============================================================
// "API" is a tech term - keep as is
applyTranslation('statusPage.services[0].name', 'API');

// Status values are enum keys that map to display strings (statusPage.operational, etc.)
// They must remain as English enum values for the mapping to work
applyTranslation('statusPage.services[0].status', 'operational');
applyTranslation('statusPage.services[1].status', 'operational');
applyTranslation('statusPage.services[2].status', 'operational');
applyTranslation('statusPage.services[3].status', 'operational');
applyTranslation('statusPage.services[4].status', 'operational');
applyTranslation('statusPage.services[5].status', 'operational');
applyTranslation('statusPage.services[6].status', 'operational');
applyTranslation('statusPage.services[7].status', 'operational');

applyTranslation('statusPage.incidents[0].status', 'resolved');
applyTranslation('statusPage.incidents[1].status', 'resolved');

// ============================================================
// Write output
// ============================================================
fs.writeFileSync(srPath, JSON.stringify(sr, null, 2) + '\n', 'utf8');

console.log(`\nfix-sr-phase6.js completed successfully!`);
console.log(`Total entries processed: ${count}`);

// Verify: count remaining untranslated strings in the 6 sections
function findUntranslated(enObj, srObj, pathStr) {
  const results = [];
  if (typeof enObj === 'string' && typeof srObj === 'string') {
    if (enObj === srObj) results.push(pathStr);
    return results;
  }
  if (Array.isArray(enObj) && Array.isArray(srObj)) {
    for (let i = 0; i < enObj.length; i++) {
      if (i < srObj.length) {
        results.push(...findUntranslated(enObj[i], srObj[i], pathStr + '[' + i + ']'));
      }
    }
    return results;
  }
  if (typeof enObj === 'object' && enObj !== null && typeof srObj === 'object' && srObj !== null) {
    for (const k of Object.keys(enObj)) {
      if (k in srObj) {
        results.push(...findUntranslated(enObj[k], srObj[k], pathStr + '.' + k));
      }
    }
  }
  return results;
}

// Read back for verification
const srCheck = JSON.parse(fs.readFileSync(srPath, 'utf8'));
const sections = ['rulesPage', 'securityPage', 'changelogPage', 'supportPage', 'careersPage', 'statusPage'];
let totalRemaining = 0;
for (const sec of sections) {
  const remaining = findUntranslated(en[sec], srCheck[sec], sec);
  const textRemaining = remaining.filter(p => {
    const val = get(en, p);
    // Filter out emojis, icons, and enum values
    return typeof val === 'string' && val.length > 2 && !/^[\p{Emoji}\p{Emoji_Component}✓]+$/u.test(val);
  });
  if (textRemaining.length > 0) {
    console.log(`  ${sec}: ${textRemaining.length} text strings still untranslated`);
    for (const p of textRemaining) {
      console.log(`    ${p} = ${get(en, p)}`);
    }
  } else {
    console.log(`  ${sec}: ✓ all text translated`);
  }
  totalRemaining += textRemaining.length;
}
console.log(`\nTotal text strings still untranslated: ${totalRemaining}`);
