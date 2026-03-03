const fs = require('fs');
const path = require('path');

const en = JSON.parse(fs.readFileSync('./src/translations/en.json', 'utf8'));
const sr = JSON.parse(fs.readFileSync('./src/translations/sr.json', 'utf8'));

function getStrings(obj, prefix = '') {
  const result = {};
  for (const [k, v] of Object.entries(obj)) {
    const p = prefix ? `${prefix}.${k}` : k;
    if (typeof v === 'string') result[p] = v;
    else if (Array.isArray(v)) {
      v.forEach((item, i) => {
        if (typeof item === 'string') result[`${p}[${i}]`] = item;
        else if (typeof item === 'object' && item !== null) {
          Object.assign(result, getStrings(item, `${p}[${i}]`));
        }
      });
    } else if (typeof v === 'object' && v !== null) {
      Object.assign(result, getStrings(v, p));
    }
  }
  return result;
}

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

const enStrings = getStrings(en);
const srStrings = getStrings(sr);
const untranslated = Object.entries(enStrings)
  .filter(([k, v]) => k.startsWith('reportPage.') && srStrings[k] === v && v.length > 1)
  .sort((a, b) => a[0].localeCompare(b[0]));

console.log('Total reportPage untranslated:', untranslated.length);
const firstHalf = untranslated.slice(0, Math.ceil(untranslated.length / 2));
console.log('First half count:', firstHalf.length);

const translations = {
  "reportPage.content.acceptableUse": "4. Prihvatljiva upotreba",
  "reportPage.content.acceptableUse1": "Kršite bilo koje važeće zakone ili propise",
  "reportPage.content.acceptableUse2": "Kršite prava intelektualne svojine",
  "reportPage.content.acceptableUse3": "Distribuirate malver, spam ili štetan sadržaj",
  "reportPage.content.acceptableUse4": "Uznemiravate, pretite ili štetite drugima",
  "reportPage.content.acceptableUse5": "Pokušavate da dobijete neovlašćen pristup našim sistemima",
  "reportPage.content.acceptableUse6": "Koristite naše Usluge u bilo koju nezakonitu ili neovlašćenu svrhu",
  "reportPage.content.acceptableUseDesc": "Saglasni ste da nećete koristiti naše Usluge za:",
  "reportPage.content.acceptanceOfTerms": "1. Prihvatanje uslova",
  "reportPage.content.acceptanceOfTermsDesc": "Pristupanjem ili korišćenjem naših Usluga, saglasni ste da vas obavezuju ovi Uslovi i naša Politika privatnosti. Ako se ne slažete sa ovim Uslovima, ne smete pristupati niti koristiti naše Usluge.",
  "reportPage.content.accountRule1": "Jedan nalog po osobi",
  "reportPage.content.accountRule2": "Zabranjeno deljenje pristupnih podataka naloga",
  "reportPage.content.accountRule3": "Zabranjeno lažno predstavljanje",
  "reportPage.content.accountRule4": "Zabranjeno automatsko kreiranje naloga",
  "reportPage.content.accountRules": "Pravila naloga",
  "reportPage.content.accountSec1": "Podrška za višefaktorsku autentifikaciju (MFA)",
  "reportPage.content.accountSec2": "Upravljanje sesijama i praćenje uređaja",
  "reportPage.content.accountSec3": "Otkrivanje sumnjivih aktivnosti i upozorenja",
  "reportPage.content.accountSec4": "Bezbednosni zahtevi za lozinku sa bcrypt heširanjem",
  "reportPage.content.accountSecurity": "Bezbednost naloga",
  "reportPage.content.afterImport1": "Vaš kod se klonira u novi AppNode radni prostor",
  "reportPage.content.afterImport2": "Zavisnosti se automatski instaliraju",
  "reportPage.content.afterImport3": "Razvojni server se pokreće sa pregledom uživo",
  "reportPage.content.afterImport4": "AI analizira vaš kod da bi pružio kontekstualnu pomoć",
  "reportPage.content.afterImport5": "Promene se mogu vratiti na GitHub ili izvesti",
  "reportPage.content.aiChat": "AI ćaskanje:",
  "reportPage.content.aiChatDesc": "Zatražite pomoć, generišite delove koda ili otklanjajte greške",
  "reportPage.content.applicationSecurity": "Bezbednost aplikacije",
  "reportPage.content.appSecurity1": "Redovno penetraciono testiranje od strane nezavisnih firmi",
  "reportPage.content.appSecurity2": "Automatsko skeniranje ranjivosti u CI/CD procesu",
  "reportPage.content.appSecurity3": "Bezbedne prakse životnog ciklusa razvoja (SDL)",
  "reportPage.content.appSecurity4": "Zahtevi za pregled koda za sve promene",
  "reportPage.content.appSecurity5": "Bug bounty program za odgovorno prijavljivanje",
  "reportPage.content.astro": "Astro",
  "reportPage.content.astroDesc": "Sajtovi fokusirani na sadržaj",
  "reportPage.content.automatedDetection": "Automatsko otkrivanje",
  "reportPage.content.automatedDetectionDesc": "Sistemi pokretani veštačkom inteligencijom identifikuju štetan sadržaj",
  "reportPage.content.bestForBeginners": "Najbolje za početnike — opišite svoju ideju i pustite AI da je izgradi",
  "reportPage.content.blankCanvas": "Počnite sa praznim platnom i potpunom kontrolom",
  "reportPage.content.bringExisting": "Prenesite svoj postojeći projekat i unapredite ga pomoću AI",
  "reportPage.content.buildFromScratchDesc": "Počnite sa praznim platnom i potpunom kontrolom. Savršeno za programere koji žele da strukturiraju svoj projekat na svoj način dok i dalje koriste AI pomoć.",
  "reportPage.content.buildFromScratchTitle": "Izgradnja od nule",
  "reportPage.content.changelogText": "Radimo na nečemu uzbudljivom. Vratite se uskoro za novosti o najnovijim funkcijama i poboljšanjima.",
  "reportPage.content.chooseStartingPoint": "Izaberite svoju polaznu tačku",
  "reportPage.content.chooseTemplate": "Izaberite svoj šablon",
  "reportPage.content.chooseTemplateDesc": "Izaberite osnovni šablon za početak. Svaki šablon dolazi unapred konfigurisan sa okvirom, alatima za izgradnju i zavisnostima koje su vam potrebne.",
  "reportPage.content.claimItem1": "Identifikacija zaštićenog autorskog dela",
  "reportPage.content.claimItem2": "URL sadržaja koji krši autorska prava",
  "reportPage.content.claimItem3": "Vaše kontakt informacije",
  "reportPage.content.claimItem4": "Izjava o uverenosti u dobroj nameri",
  "reportPage.content.claimItem5": "Vaš fizički ili elektronski potpis",
  "reportPage.content.codeCompletion": "Dopuna koda",
  "reportPage.content.codeCompletionDesc": "Dok kucate, AI predlaže dopune na osnovu konteksta vašeg koda. Prihvatite predloge pritiskom na Tab ili nastavite da kucate za preciziranje.",
  "reportPage.content.codeEditor": "Uređivač koda:",
  "reportPage.content.codeEditorDesc": "Potpuno opremljen uređivač sa isticanjem sintakse, automatskim dovršavanjem i uređivanjem više datoteka",
  "reportPage.content.collaborationComm": "Komunikacija",
  "reportPage.content.collaborationCommText": "Koristite ugrađeno ćaskanje ili povežite svoj Slack radni prostor za nesmetanu timsku komunikaciju.",
  "reportPage.content.collaborationIntro": "Radite zajedno nesmetano sa funkcijama saradnje u realnom vremenu.",
  "reportPage.content.collaborationItem1": "Vidite kursore saradnika u uređivaču",
  "reportPage.content.collaborationItem2": "Promene koda uživo se sinhronizuju trenutno",
  "reportPage.content.collaborationItem3": "Ugrađeni komentari i diskusije",
  "reportPage.content.collaborationItem4": "Prikaz aktivnosti pokazuje nedavne promene",
  "reportPage.content.collaborationRealtime": "Funkcije u realnom vremenu",
  "reportPage.content.collaborationTitle": "Saradnja",
  "reportPage.content.commitment1": "24/7 praćenje aktivnosti platforme",
  "reportPage.content.commitment2": "Brz odgovor na prijave zloupotrebe",
  "reportPage.content.commitment3": "Transparentne politike sprovođenja",
  "reportPage.content.commitment4": "Redovne bezbednosne revizije i ažuriranja",
  "reportPage.content.compliance": "Usklađenost",
  "reportPage.content.complianceDesc": "Održavamo usklađenost sa industrijskim standardima i propisima:",
  "reportPage.content.configureSettings": "Podesite postavke",
  "reportPage.content.configureSettingsDesc": "Izaberite granu, postavite promenljive okruženja i podesite postavke izgradnje",
  "reportPage.content.connectGithub": "Povežite GitHub",
  "reportPage.content.connectGithubDesc": "Ovlastite AppNode da pristupi vašem GitHub nalogu za nesmetani uvoz",
  "reportPage.content.contextualGeneration": "Kontekstualno generisanje",
  "reportPage.content.contextualGenerationDesc": "Kliknite desnim tasterom na bilo koju datoteku ili fasciklu da generišete kod u kontekstu. AI razume strukturu vašeg projekta i generiše kompatibilan kod.",
  "reportPage.content.copyrightClaimsDesc": "Poštujemo prava intelektualne svojine i brzo odgovaramo na validne zahteve za autorska prava.",
  "reportPage.content.copyrightClaimsTitle": "Zahtevi za autorska prava",
  "reportPage.content.createWithAiDescription": "Najbrži način za izgradnju. Samo opišite šta želite na običnom jeziku i gledajte kako AI kreira vašu kompletnu aplikaciju u realnom vremenu.",
  "reportPage.content.createWithAiTitle": "Kreirajte pomoću AI",
  "reportPage.content.databasesAdding": "Dodavanje baze podataka",
  "reportPage.content.databasesAddingText": "Jednostavno opišite svoje potrebe za podacima: \u201ETrebam da čuvam korisnike sa imenom, email-om i profilnom slikom\u201C i AI će podesiti šemu baze podataka i veze umesto vas.",
  "reportPage.content.databasesAvailable": "Dostupne baze podataka",
  "reportPage.content.databasesIntro": "Naučite kako da dodate trajno skladištenje podataka u vaše AppNode aplikacije.",
  "reportPage.content.databasesMongo": "MongoDB",
  "reportPage.content.databasesMongoDesc": "Dokumentna baza podataka za fleksibilne šeme.",
  "reportPage.content.databasesPostgres": "PostgreSQL",
  "reportPage.content.databasesPostgresDesc": "Potpuno opremljena relaciona baza podataka za složene podatke.",
  "reportPage.content.databasesRedis": "Redis",
  "reportPage.content.databasesRedisDesc": "Skladište u memoriji za keširanje i sesije.",
  "reportPage.content.databasesSqlite": "SQLite",
  "reportPage.content.databasesSqliteDesc": "Jednostavna baza podataka zasnovana na datotekama. Odlična za male aplikacije.",
  "reportPage.content.databasesTitle": "Izgradnja sa bazama podataka",
  "reportPage.content.dataProtectionDesc": "Zaštitu podataka shvatamo ozbiljno. Vaš kod, vaši projekti i vaše lične informacije su zaštićeni višestrukim slojevima zaštite.",
  "reportPage.content.dataProtectionTitle": "Zaštita podataka",
  "reportPage.content.dataRetention": "Čuvanje podataka",
  "reportPage.content.dataRetentionDesc": "Vaše podatke čuvamo samo onoliko koliko je neophodno za pružanje naših usluga. Kada obrišete svoj nalog, vaši podaci se trajno uklanjaju u roku od 30 dana.",
  "reportPage.content.dataRight1": "Pristupite svojim ličnim podacima",
  "reportPage.content.dataRight2": "Izvezite svoje projekte u bilo kom trenutku",
  "reportPage.content.dataRight3": "Zatražite brisanje svog naloga",
  "reportPage.content.dataRight4": "Otkažite marketinške komunikacije",
  "reportPage.content.ddosProtection": "DDoS zaštita",
  "reportPage.content.ddosProtectionDesc": "Ublažavanje napada na nivou preduzeća",
  "reportPage.content.deployingCustom": "Prilagođeni domeni",
  "reportPage.content.deployingCustomText": "Povežite sopstveni domen dodavanjem CNAME zapisa koji upućuje na AppNode. SSL sertifikati se automatski obezbeđuju.",
  "reportPage.content.deployingIntro": "Pokrenite svoju aplikaciju jednim klikom. AppNode automatski upravlja hostingom, SSL-om i skaliranjem.",
  "reportPage.content.deployingStep1": "Kliknite Deploy",
  "reportPage.content.deployingStep1Text": "Pritisnite dugme Deploy u svom radnom prostoru",
  "reportPage.content.deployingStep2": "Izaberite domen",
  "reportPage.content.deployingStep2Text": "Koristite naš besplatni poddomen ili povežite sopstveni",
  "reportPage.content.deployingStep3": "Pokrenite sajt",
  "reportPage.content.deployingStep3Text": "Vaša aplikacija se postavlja za nekoliko sekundi sa uključenim SSL-om",
  "reportPage.content.deployingSteps": "Koraci za postavljanje",
  "reportPage.content.deployingTitle": "Postavljanje vaše aplikacije",
  "reportPage.content.deployStep": "Postavljanje",
  "reportPage.content.deployStepDesc": "Kada budete spremni, postavite jednim klikom da dobijete URL uživo.",
  "reportPage.content.describeYourIdea": "Opišite svoju ideju",
  "reportPage.content.describeYourIdeaDesc": "Napišite detaljan opis onoga što želite da izgradite. Što više konteksta, to bolji rezultati.",
  "reportPage.content.descriptionOfServices": "2. Opis usluga",
  "reportPage.content.descriptionOfServicesDesc": "AppNode pruža razvojnu platformu pokretanu veštačkom inteligencijom koja omogućava korisnicima da grade veb sajtove, aplikacije i digitalne proizvode. Naše Usluge uključuju generisanje koda, hosting, alate za saradnju i povezane funkcije.",
  "reportPage.content.disclaimers": "7. Odricanje od odgovornosti",
  "reportPage.content.disclaimersDesc": "NAŠE USLUGE SE PRUŽAJU \u201EKAKVE JESU\u201C BEZ GARANCIJA BILO KOJE VRSTE, IZRIČITIH ILI PODRAZUMEVANIH. NE GARANTUJEMO DA ĆE NAŠE USLUGE BITI NEPREKIDNE, BEZBEDNE ILI BEZ GREŠAKA.",
  "reportPage.content.encryptionAtRest": "Enkripcija u mirovanju",
  "reportPage.content.encryptionAtRestDesc": "Svi podaci šifrovani sa AES-256",
  "reportPage.content.encryptionInTransit": "Enkripcija u prenosu",
  "reportPage.content.encryptionInTransitDesc": "TLS 1.3 za sve konekcije",
  "reportPage.content.enterpriseAudit": "Revizorski zapisi",
  "reportPage.content.enterpriseAuditDesc": "Pratite sve akcije u vašoj organizaciji",
  "reportPage.content.enterpriseBenefits": "Pogodnosti za preduzeća",
  "reportPage.content.enterpriseCloud": "Privatni cloud",
  "reportPage.content.enterpriseCloudDesc": "Pokrenite AppNode u sopstvenoj infrastrukturi",
  "reportPage.content.enterpriseContact": "Kontaktirajte contact@appnode.ai za više informacija.",
  "reportPage.content.enterpriseContracts": "Prilagođeni ugovori",
  "reportPage.content.enterpriseContractsDesc": "Prilagođeni sporazumi i SLA",
  "reportPage.content.enterpriseIntro": "Napredne funkcije za velike organizacije sa složenim zahtevima.",
  "reportPage.content.enterpriseSSO": "SSO integracija",
  "reportPage.content.enterpriseSSODesc": "Povežite se sa svojim provajderom identiteta (Okta, Azure AD, itd.)",
  "reportPage.content.enterpriseSupport": "Posvećena podrška",
  "reportPage.content.enterpriseSupportDesc": "Prioritetna podrška sa posvećenim menadžerom naloga",
  "reportPage.content.enterpriseTitle": "Funkcije za preduzeća",
  "reportPage.content.examplePrompt1": "\u201EKreiraj listu zadataka sa prevlačenjem i tamnim režimom\u201C",
  "reportPage.content.examplePrompt2": "\u201ENapravi jednostavnu aplikaciju za crtanje sa različitim veličinama četkica i bojama\u201C",
  "reportPage.content.examplePrompt3": "\u201ENapravi igru memorije sa karticama i emojijima\u201C",
  "reportPage.content.examplePrompt4": "\u201EKreiraj praćenje troškova sa grafikonima i kategorijama\u201C",
  "reportPage.content.examplePrompts": "Primeri promptova za isprobavanje",
  "reportPage.content.fileExplorer": "Pretraživač datoteka:",
  "reportPage.content.fileExplorerDesc": "Pregledajte i upravljajte datotekama i fasciklama projekta",
  "reportPage.content.filingClaim": "Podnošenje zahteva",
  "reportPage.content.filingClaimDesc": "Da biste podneli DMCA obaveštenje o uklanjanju, pošaljite email na contact@appnode.ai sa:",
  "reportPage.content.firstAppIntro": "Pratite ovaj vodič korak po korak da izgradite svoju prvu aplikaciju sa AppNode.",
  "reportPage.content.firstAppStep1Text": "Kliknite \u201ECreate New\u201C na kontrolnoj tabli i izaberite \u201ECreate with AI\u201C za najlakši početak.",
  "reportPage.content.firstAppStep1Title": "Korak 1: Pokrenite novi projekat",
  "reportPage.content.firstAppStep2Text": "Isprobajte ovaj prompt: \u201EKreiraj jednostavnu aplikaciju za listu zadataka sa mogućnošću dodavanja, završavanja i brisanja zadataka. Koristi čist, minimalan dizajn sa svetlom temom.\u201C",
  "reportPage.content.firstAppStep2Title": "Korak 2: Opišite svoju aplikaciju",
  "reportPage.content.firstAppStep3Text": "AI će generisati vašu aplikaciju u realnom vremenu. Videćete kako se datoteke kreiraju i pregled uživo se ažurira dok se kod piše.",
  "reportPage.content.firstAppStep3Title": "Korak 3: Gledajte izgradnju",
  "reportPage.content.firstAppStep4Text": "Pokušajte da zatražite: \u201EDodaj prekidač za tamni režim\u201C ili \u201ENapravi da završeni zadaci budu precrtani\u201C da vidite kako AI može da unapređuje vašu aplikaciju.",
  "reportPage.content.firstAppStep4Title": "Korak 4: Napravite promene",
  "reportPage.content.firstAppTitle": "Izgradnja vaše prve aplikacije",
  "reportPage.content.generateCodeDesc": "Naučite različite načine za generisanje koda koristeći AI mogućnosti platforme AppNode.",
  "reportPage.content.generateCodeTitle": "Kako generisati kod",
  "reportPage.content.howItWorks": "Kako funkcioniše",
  "reportPage.content.howItWorksDescription": "Jednostavno opišite svoj projekat na običnom jeziku. Naš AI razume vaše zahteve, generiše kompletnu šemu i gradi kod spreman za produkciju u realnom vremenu. Gledajte kako vaša aplikacija oživljava sa trenutnim pregledima.",
  "reportPage.content.howToImport": "Kako uvesti",
  "reportPage.content.howToReport": "Kako prijaviti",
  "reportPage.content.howToReport1": "Kliknite dugme \u201EPrijavi\u201C na bilo kom projektu ili korisničkom profilu",
  "reportPage.content.howToReport2": "Pošaljite nam email direktno na contact@appnode.ai",
  "reportPage.content.howToReport3": "Koristite kontakt obrazac u podešavanjima naloga",
  "reportPage.content.howWeKeepYouSafe": "Kako vas čuvamo",
  "reportPage.content.howWeKeepYouSafeDesc": "Naš višeslojni pristup bezbednosti uključuje automatizovane sisteme za otkrivanje, procese ljudskog pregleda i alate za prijavljivanje od strane zajednice. Neprekidno unapređujemo naše sisteme na osnovu novih pretnji i povratnih informacija korisnika.",
  "reportPage.content.howWeUseInfo": "Kako koristimo vaše informacije",
  "reportPage.content.humanReview": "Ljudski pregled",
  "reportPage.content.humanReviewDesc": "Stručni tim pregleda prijavljeni sadržaj",
  "reportPage.content.importBuild": "Uvoz i izgradnja",
  "reportPage.content.importBuildDesc": "Kloniramo vaš repozitorijum, instaliramo zavisnosti i pokrećemo razvojni server",
  "reportPage.content.importGithubDesc": "Prenesite svoje postojeće projekte na AppNode. Uvezite bilo koji javni ili privatni repozitorijum i unapredite ga sa razvojnim alatima pokretanim veštačkom inteligencijom."
};

// Verify we have translations for all first-half entries
let applied = 0;
let missing = 0;

for (const [key, enValue] of firstHalf) {
  if (translations[key]) {
    set(sr, key, translations[key]);
    applied++;
  } else {
    console.log('MISSING translation for:', key);
    missing++;
  }
}

console.log(`\nApplied: ${applied}`);
console.log(`Missing: ${missing}`);

fs.writeFileSync('./src/translations/sr.json', JSON.stringify(sr, null, 2) + '\n', 'utf8');
console.log('sr.json updated successfully!');

// Verify
const srNew = JSON.parse(fs.readFileSync('./src/translations/sr.json', 'utf8'));
const srNewStrings = getStrings(srNew);
const stillUntranslated = Object.entries(enStrings)
  .filter(([k, v]) => k.startsWith('reportPage.') && srNewStrings[k] === v && v.length > 1);
console.log(`\nRemaining reportPage untranslated: ${stillUntranslated.length}`);
