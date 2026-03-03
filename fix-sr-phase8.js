const fs = require('fs');
const en = JSON.parse(fs.readFileSync('./src/translations/en.json', 'utf8'));
const sr = JSON.parse(fs.readFileSync('./src/translations/sr.json', 'utf8'));

function getStrings(obj, prefix = '') {
  const result = {};
  for (const [k, v] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${k}` : k;
    if (typeof v === 'string') result[path] = v;
    else if (Array.isArray(v)) {
      v.forEach((item, i) => {
        if (typeof item === 'string') result[`${path}[${i}]`] = item;
        else if (typeof item === 'object' && item !== null) {
          Object.assign(result, getStrings(item, `${path}[${i}]`));
        }
      });
    } else if (typeof v === 'object' && v !== null) {
      Object.assign(result, getStrings(v, path));
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

// Get all EN strings for these sections
const enStrings = getStrings(en);
const srStrings = getStrings(sr);

// Find untranslated
const untranslated = Object.entries(enStrings)
  .filter(([k]) => k.startsWith('termsPage.') || k.startsWith('privacyPage.'))
  .filter(([k, v]) => srStrings[k] === v && v.length > 1);

console.log('Found', untranslated.length, 'untranslated entries');
console.log('  termsPage:', untranslated.filter(([k]) => k.startsWith('termsPage.')).length);
console.log('  privacyPage:', untranslated.filter(([k]) => k.startsWith('privacyPage.')).length);

// ========== COMPREHENSIVE TRANSLATIONS ==========
const translations = {
  // ===== PRIVACY PAGE =====
  'privacyPage.lastUpdated': 'Poslednje ažuriranje: 1. decembar 2025.',

  'privacyPage.intro.p1': 'AppNode Inc. („AppNode", „mi", „nas" ili „naš") posvećen je zaštiti vaše privatnosti. Ova Politika privatnosti objašnjava kako prikupljamo, koristimo, otkrivamo, čuvamo i štitimo vaše lične podatke kada pristupate ili koristite naš veb sajt, mobilne aplikacije, API-je, alate za generisanje koda zasnovane na veštačkoj inteligenciji, platformu i povezane usluge (zajedno, „Usluge").',
  'privacyPage.intro.p2': 'Korišćenjem Usluga pristajete na prakse opisane u ovoj Politici privatnosti. Ako se ne slažete, molimo vas da ne koristite Usluge.',
  'privacyPage.intro.p3': 'Možemo s vremena na vreme ažurirati ovu Politiku privatnosti. O značajnim promenama ćemo vas obavestiti objavljivanjem ažurirane politike ovde i ažuriranjem datuma „Poslednje ažuriranje", i/ili putem e-pošte ako je promena značajna. Vaše dalje korišćenje nakon promena predstavlja prihvatanje.',

  'privacyPage.section1.title': '1. Podaci koje prikupljamo',
  'privacyPage.section1.s1Title': '1.1 Podaci koje direktno pružate',
  'privacyPage.section1.s1Items[0]': 'Podaci o nalogu: ime, e-pošta, lozinka, korisničko ime',
  'privacyPage.section1.s1Items[1]': 'Podaci o profilu: avatar, biografija, željene postavke, podešavanja',
  'privacyPage.section1.s1Items[2]': 'Podaci o plaćanju: podaci za naplatu (bezbedno obrađeni putem nezavisnih provajdera poput Stripe – mi ne čuvamo potpune brojeve kartica)',
  'privacyPage.section1.s1Items[3]': 'Korisnički sadržaj: upiti, unosi, delovi koda, otpremljene datoteke, generisani izlazi koje sačuvate ili delite',
  'privacyPage.section1.s1Items[4]': 'Komunikacije: zahtevi za podršku, e-poruke, povratne informacije, poruke u četu',
  'privacyPage.section1.s2Title': '1.2 Automatski prikupljeni podaci',
  'privacyPage.section1.s2Items[0]': 'Podaci o uređaju i tehnički podaci: IP adresa, tip/verzija pregledača, operativni sistem, ID uređaja, rezolucija ekrana',
  'privacyPage.section1.s2Items[1]': 'Podaci o korišćenju: posećene stranice, korišćene funkcije, provedeno vreme, prosleđeni upiti (metapodaci), evidencija grešaka',
  'privacyPage.section1.s2Items[2]': 'Kolačići i praćenje: ID sesije, analitika (Google Analytics, Mixpanel ili slično), metrike performansi',
  'privacyPage.section1.s3Title': '1.3 Podaci specifični za veštačku inteligenciju (unosi i izlazi)',
  'privacyPage.section1.s3Items[0]': 'Upiti/Unosi koje prosleđujete za generisanje koda, aplikacija, radnih tokova',
  'privacyPage.section1.s3Items[1]': 'Generisani izlazi (kod, tekst itd.)',
  'privacyPage.section1.s3Items[2]': 'Povratne informacije/ocene za izlaze (palac gore/dole, komentari)',
  'privacyPage.section1.s3Note': 'Mi namerno ne prikupljamo osetljive lične podatke (zdravstveni podaci, rasa, religija itd.) osim ako ih dobrovoljno uključite u upite – u tom slučaju vi preuzimate odgovornost.',

  'privacyPage.section2.title': '2. Kako koristimo vaše podatke',
  'privacyPage.section2.intro': 'Vaše podatke koristimo za:',
  'privacyPage.section2.items[0]': 'Pružanje, rad, održavanje i poboljšanje Usluga (uključujući generisanje AI izlaza)',
  'privacyPage.section2.items[1]': 'Obradu pretplata, plaćanja i naplate',
  'privacyPage.section2.items[2]': 'Proveru identiteta naloga i sprečavanje prevara/zloupotreba',
  'privacyPage.section2.items[3]': 'Slanje obaveštenja vezanih za uslugu (ažuriranja, bezbednosna upozorenja, odgovori podrške)',
  'privacyPage.section2.items[4]': 'Analizu trendova korišćenja radi poboljšanja AI modela (samo anonimizovano/agregirano – pogledajte Odeljak 3)',
  'privacyPage.section2.items[5]': 'Personalizaciju iskustva (npr. preporučeni šabloni)',
  'privacyPage.section2.items[6]': 'Usklađenost sa zakonskim obavezama, sprovođenje Uslova korišćenja, zaštitu prava/bezbednosti',
  'privacyPage.section2.marketing': 'Marketing: Možemo vam slati promotivne e-poruke o funkcijama AppNode-a ako se prijavite (možete se odjaviti u bilo kom trenutku).',

  'privacyPage.section3.title': '3. Obuka AI modela i unapređenje (Ključni odeljak)',
  'privacyPage.section3.intro': 'Podrazumevano, mi ne koristimo vaše lične upite, unose, izlaze ili Korisnički sadržaj za obuku ili fino podešavanje naših osnovnih AI modela osim ako se izričito ne prijavite putem podešavanja naloga.',
  'privacyPage.section3.items[0]': 'Prijava za obuku: Možete omogućiti „Dozvolite da moji podaci poboljšaju AppNode AI" u Podešavanja → Privatnost. Ako je omogućeno: anonimizovane/agregirane verzije vaših upita, izlaza i povratnih informacija mogu se koristiti za obuku, fino podešavanje, evaluaciju i poboljšanje naših AI modela i bezbednosnih sistema.',
  'privacyPage.section3.items[1]': 'Odjava / Podrazumevano: Ako nije omogućeno (ili ako ga onemogućite), vaši podaci se nikada ne koriste za obuku modela. I dalje možemo koristiti potpuno anonimizovane, agregirane statistike korišćenja (bez upita/sadržaja) za opšte sistemske poboljšanje.',
  'privacyPage.section3.items[2]': 'Mi ne prodajemo vaše upite, izlaze ili lične podatke trećim stranama za njihovu obuku.',
  'privacyPage.section3.items[3]': 'Ako se prijavite, možete se predomisliti u bilo kom trenutku – prethodni podaci koji su već korišćeni ne mogu se retroaktivno ukloniti iz modela, ali novi podaci neće biti korišćeni.',
  'privacyPage.section3.note': 'Ovo je usklađeno sa najboljim praksama (npr. Cursor/Anthropic stil prijave) i pomaže u usklađenosti sa GDPR ograničenjem svrhe i transparentnošću EU AI akta.',

  'privacyPage.section4.title': '4. Deljenje i otkrivanje podataka',
  'privacyPage.section4.noSell': 'Mi ne prodajemo vaše lične podatke.',
  'privacyPage.section4.intro': 'Podatke delimo samo:',
  'privacyPage.section4.items[0]': 'Sa pružaocima usluga (obrađivačima): cloud hosting (AWS/GCP), procesori plaćanja, alati za analitiku – vezani strogim DPA ugovorima',
  'privacyPage.section4.items[1]': 'Iz pravnih razloga: sudski nalozi, sudske naredbe, zaštita prava/bezbednosti (npr. otkrivanje zloupotreba)',
  'privacyPage.section4.items[2]': 'U poslovnim prenosima: spajanje, akvizicija, prodaja imovine (vaši podaci se prenose pod istom zaštitom)',
  'privacyPage.section4.items[3]': 'Uz vaš pristanak ili po vašem nalogu (npr. deljenje generisanog koda putem javnog linka)',
  'privacyPage.section4.international': 'Međunarodni prenosi: Podaci se primarno čuvaju u SAD. Za korisnike iz EU/EEA/UK: oslanjamo se na Standardne ugovorne klauzule (SCC) ili EU-US okvir za privatnost podataka gde je primenjivo. Crna Gora se usko usklađuje sa GDPR putem nedavne harmonizacije.',

  'privacyPage.section5.title': '5. Čuvanje podataka',
  'privacyPage.section5.intro': 'Vaše podatke čuvamo samo onoliko dugo koliko je potrebno:',
  'privacyPage.section5.items[0]': 'Nalog aktivan → neograničeno (do zahteva za brisanje)',
  'privacyPage.section5.items[1]': 'Upiti/Izlazi: čuvaju se za vaš pristup (osim ako se obrišu); anonimizovani agregati duže za analitiku',
  'privacyPage.section5.items[2]': 'Evidencije/tehnički podaci: do 12–24 meseca za bezbednost/sprečavanje prevara',
  'privacyPage.section5.items[3]': 'Nakon brisanja naloga: podaci se brišu u roku od 30 dana (osim zakonskih rezervnih kopija ili anonimizovanih agregata)',
  'privacyPage.section5.note': 'Možete zatražiti brisanje u bilo kom trenutku (pogledajte Prava u nastavku).',

  'privacyPage.section6.title': '6. Vaša prava na privatnost',
  'privacyPage.section6.intro': 'U zavisnosti od vaše lokacije (GDPR za EU/EEA/UK/ekvivalent za Crnu Goru, CCPA/CPRA za Kaliforniju itd.):',
  'privacyPage.section6.items[0]': 'Pristup: Pogledajte koje podatke imamo',
  'privacyPage.section6.items[1]': 'Ispravka: Ažurirajte netačne podatke',
  'privacyPage.section6.items[2]': 'Brisanje: Obrišite vaše podatke (podložno zakonskim izuzecima)',
  'privacyPage.section6.items[3]': 'Odjava od obrade/prodaje: Uključujući odjavu od obuke',
  'privacyPage.section6.items[4]': 'Ograničenje obrade ili prigovor',
  'privacyPage.section6.items[5]': 'Prenosivost: Primite podatke u strukturiranom formatu',
  'privacyPage.section6.items[6]': 'Povlačenje saglasnosti u bilo kom trenutku (ne utiče na prethodnu obradu)',
  'privacyPage.section6.california': 'Za stanovnike Kalifornije: Link „Ne prodajte i ne delite moje lične podatke" na našem sajtu (iako mi ne prodajemo).',
  'privacyPage.section6.submit': 'Pošaljite zahteve: privacy@appnode.ai',
  'privacyPage.section6.response': 'Odgovaramo u roku od 30–45 dana (produživo po zakonu). Potrebna je verifikacija. Nema diskriminacije za ostvarivanje prava.',

  'privacyPage.section7.title': '7. Bezbednost podataka',
  'privacyPage.section7.p1': 'Koristimo mere u skladu sa industrijskim standardima: enkripcija (TLS 1.3, AES-256 za podatke u mirovanju), kontrole pristupa, redovne revizije, testiranje probojnosti.',
  'privacyPage.section7.p2': 'Međutim, nijedan sistem nije 100% bezbedan. Ne možemo garantovati apsolutnu bezbednost – koristite Usluge na sopstveni rizik.',
  'privacyPage.section7.p3': 'U slučaju povrede podataka: obaveštavamo pogođene korisnike i nadležne organe kako to zakon nalaže (npr. GDPR 72 sata).',

  'privacyPage.section8.title': '8. Kolačići i tehnologije praćenja',
  'privacyPage.section8.content': 'Koristimo esencijalne kolačiće (za funkcionalnost), kolačiće za analitiku i performanse. Možete ih upravljati putem podešavanja pregledača ili našeg banera za kolačiće. Blokiranje može ograničiti funkcionalnost.',

  'privacyPage.section9.title': '9. Privatnost dece',
  'privacyPage.section9.content': 'Usluge nisu namenjene deci mlađoj od 16 godina (ili 13 u nekim jurisdikcijama). Ne prikupljamo svesno podatke od dece. Ako se otkriju, odmah ih brišemo.',

  'privacyPage.section10.title': '10. Linkovi i integracije trećih strana',
  'privacyPage.section10.content': 'Usluge mogu sadržati linkove ka trećim stranama (npr. GitHub integracija). Nismo odgovorni za njihove prakse privatnosti.',

  'privacyPage.section11.title': '11. Kontaktirajte nas',
  'privacyPage.section11.company': 'AppNode Inc.',
  'privacyPage.section11.privacyEmail': 'E-pošta: privacy@appnode.ai (za zahteve o privatnosti)',
  'privacyPage.section11.generalEmail': 'Opšti kontakt: contact@appnode.ai',

  // ===== TERMS PAGE =====
  'termsPage.lastUpdated': 'Poslednje ažuriranje: 1. decembar 2025.',

  'termsPage.intro.p1': 'Ovi Uslovi korišćenja („Uslovi") regulišu vaš pristup i korišćenje AppNode platforme, uključujući ali ne ograničavajući se na njen veb sajt, mobilne aplikacije, API-je, softver, alate veštačke inteligencije, dokumentaciju i sve povezane usluge, funkcije ili sadržaje (zajedno, „Usluge") koje pruža AppNode Inc. („AppNode", „Kompanija", „mi", „nas" ili „naš"). Usluge su dizajnirane da pomognu korisnicima u generisanju veb aplikacija, koda, radnih tokova i drugih digitalnih izlaza putem alata zasnovanih na veštačkoj inteligenciji.',
  'termsPage.intro.p2': 'Pristupanjem, registracijom ili korišćenjem Usluga na bilo koji način, vi (dalje u tekstu „Korisnik", „vi" ili „vaš") pristajete da budete pravno obavezani ovim Uslovima, našom Politikom privatnosti (uključenom putem reference) i svim dodatnim uslovima ili politikama koje možemo povremeno pružiti. Ako se ne slažete sa ovim Uslovima, morate odmah prestati sa svim korišćenjem Usluga i zabranjeno vam je da im pristupate.',
  'termsPage.intro.p3': 'Ovi Uslovi čine obavezujući pravni ugovor između vas i AppNode-a. Ako koristite Usluge u ime organizacije, entiteta ili treće strane (npr. vašeg poslodavca ili klijenta), izjavljujete i garantujete da imate puno ovlašćenje da obavežete tu organizaciju, entitet ili treću stranu ovim Uslovima, a „vi" i „vaš" se odnose na takvu organizaciju, entitet ili treću stranu.',
  'termsPage.intro.p4': 'Zadržavamo pravo da izmenimo ove Uslove u bilo kom trenutku, kako je detaljno opisano u Odeljku 20 u nastavku. Vaše dalje korišćenje Usluga nakon bilo kakvih takvih izmena predstavlja vaše prihvatanje revidiranih Uslova.',

  'termsPage.section1.title': '1. Podobnost i ograničenja',
  'termsPage.section1.intro': 'Da biste koristili Usluge, morate:',
  'termsPage.section1.items[0]': 'Imati najmanje 18 godina ili biti punoletni u vašoj jurisdikciji, u zavisnosti od toga šta je veće.',
  'termsPage.section1.items[1]': 'Ne nalaziti se u, niti biti rezident ili državljanin bilo koje zemlje ili regiona koji podleže sveobuhvatnim američkim sankcijama ili embargima (uključujući ali ne ograničavajući se na Kubu, Iran, Severnu Koreju, Siriju, Krim, Donjecku Narodnu Republiku ili Lugansku Narodnu Republiku), niti na drugi način biti lice ili entitet kome je zabranjeno primanje američkog izvoza prema važećim zakonima o kontroli izvoza.',
  'termsPage.section1.items[2]': 'Ne nalaziti se na bilo kojoj listi zabranjenih ili ograničenih lica američke vlade, uključujući Listu posebno označenih državljana koju vodi Ministarstvo finansija SAD.',
  'termsPage.section1.minor': 'Ako imate manje od 18 godina ili niste punoletni, Usluge možete koristiti samo pod direktnim nadzorom i uz izričitu pisanu saglasnost roditelja ili zakonskog staratelja koji pristaje da bude obavezan ovim Uslovima u vaše ime. Možemo zahtevati dokaz o takvoj saglasnosti u bilo kom trenutku.',
  'termsPage.section1.suspended': 'Saglasni ste da nećete koristiti Usluge ako ste prethodno suspendovani ili isključeni iz Usluga.',

  'termsPage.section2.title': '2. Registracija naloga, bezbednost i odgovornosti',
  'termsPage.section2.intro': 'Da biste pristupili određenim funkcijama Usluga, morate kreirati nalog („Nalog"). Saglasni ste da ćete:',
  'termsPage.section2.items[0]': 'Pružiti tačne, aktuelne i potpune podatke tokom registracije i ažurirati te podatke.',
  'termsPage.section2.items[1]': 'Održavati strogo poverljivim vaše akreditive za Nalog (npr. korisničko ime, lozinka, API ključevi) i ne deliti ih sa bilo kojom trećom stranom.',
  'termsPage.section2.items[2]': 'Biti isključivo odgovorni za sve aktivnosti, radnje i propuste koji se dogode pod vašim Nalogom, bilo da ste ih vi odobrili ili ne.',
  'termsPage.section2.items[3]': 'Odmah nas pismeno obavestiti na support@appnode.ai o svakom neovlašćenom korišćenju, sumnji na povredu ili bezbednosnom incidentu povezanom sa vašim Nalogom.',
  'termsPage.section2.items[4]': 'Koristiti jake, jedinstvene lozinke i omogućiti sve dostupne bezbednosne funkcije (npr. dvofaktorsku autentifikaciju).',
  'termsPage.section2.reserve': 'Zadržavamo pravo da odbijemo registraciju, suspendujemo ili ukinemo vaš Nalog u bilo kom trenutku, sa ili bez obaveštenja, iz bilo kog razloga ili bez razloga, uključujući ali ne ograničavajući se na kršenje ovih Uslova, sumnju na prevaru, bezbednosne rizike, zakonske zahteve ili operativne razloge. Po suspenziji ili ukidanju, morate odmah prestati sa svim korišćenjem Usluga.',
  'termsPage.section2.acknowledge': 'Potvrđujete da nismo odgovorni za bilo kakav gubitak ili štetu nastalu usled vašeg nepoštovanja ovih bezbednosnih obaveza. Možemo, ali nismo obavezni, pratiti aktivnost Naloga u svrhe bezbednosti, usklađenosti ili sprečavanja zloupotrebe.',

  'termsPage.section3.title': '3. Opis Usluga',
  'termsPage.section3.intro': 'Usluge uključuju alate zasnovane na veštačkoj inteligenciji koji omogućavaju korisnicima da generišu, menjaju i postavljaju veb aplikacije, kod, radne tokove, skripte, digitalni sadržaj i povezane izlaze na osnovu upita na prirodnom jeziku ili drugih unosa. Funkcije mogu uključivati, bez ograničenja:',
  'termsPage.section3.items[0]': 'Generisanje i uređivanje koda pokrenutog veštačkom inteligencijom.',
  'termsPage.section3.items[1]': 'Hosting, postavljanje i skaliranje aplikacija.',
  'termsPage.section3.items[2]': 'Alate za saradnju i deljenje.',
  'termsPage.section3.items[3]': 'API-je, integracije sa uslugama trećih strana i dodatke.',
  'termsPage.section3.items[4]': 'Unapred izgrađene šablone, biblioteke i okvire.',
  'termsPage.section3.items[5]': 'Alate za analitiku, otklanjanje grešaka i praćenje performansi.',
  'termsPage.section3.items[6]': 'Plaćene nivoe pretplate sa poboljšanim funkcijama (npr. prioritetna obrada, veći limiti korišćenja).',
  'termsPage.section3.items[7]': 'Naplatu zasnovanu na korišćenju za računarske resurse, API pozive ili skladištenje.',
  'termsPage.section3.evolve': 'Usluge se mogu vremenom razvijati i zadržavamo pravo da dodamo, izmenimo, suspendujemo ili ukinemo bilo koje funkcije, funkcionalnosti ili aspekte Usluga u bilo kom trenutku, bez obaveštenja ili odgovornosti. Ne garantujemo dostupnost, vreme rada ili performanse Usluga, a pristup može biti podložan planiranom održavanju, neplaniranim prekidima ili drugim smetnjama.',
  'termsPage.section3.thirdParty': 'Određene funkcije mogu zahtevati integraciju sa uslugama trećih strana (npr. cloud provajderi, procesori plaćanja), i vi ste odgovorni za usklađenost sa uslovima i politikama tih trećih strana. Nismo odgovorni za bilo kakve probleme koji proizilaze iz takvih integracija.',

  'termsPage.section4.title': '4. Odricanje odgovornosti za AI generisane izlaze i rizici',
  'termsPage.section4.intro': 'Usluge se oslanjaju na modele i algoritme veštačke inteligencije („AI sistemi") za obradu unosa i generisanje izlaza („AI izlazi"), koji mogu uključivati kod, tekst, slike, dizajne ili drugi sadržaj.',
  'termsPage.section4.acknowledge': 'Izričito potvrđujete i saglasni ste da:',
  'termsPage.section4.items[0]': 'AI izlazi se generišu algoritmički i mogu sadržati greške, bagove, ranjivosti, netačnosti, pristrasnosti, halucinacije ili propuste.',
  'termsPage.section4.items[1]': 'AI izlazi nisu namenjeni i ne bi trebalo da se tretiraju kao profesionalni saveti, kod spreman za produkciju ili garantovana rešenja.',
  'termsPage.section4.items[2]': 'AppNode ne daje nikakve izjave ili garancije u pogledu tačnosti, potpunosti, bezbednosti, zakonitosti, pouzdanosti, originalnosti, nepovreda prava ili prikladnosti bilo kojih AI izlaza za bilo koju svrhu.',
  'termsPage.section4.items[3]': 'Vi ste isključivo odgovorni za nezavisnu proveru, testiranje, validaciju, obezbeđivanje i reviziju svih AI izlaza pre bilo kakve upotrebe, postavljanja ili oslanjanja na njih.',
  'termsPage.section4.items[4]': 'AI izlazi mogu nenamerno da uključe ili nalikuju intelektualnoj svojini trećih strana, i vi preuzimate sve rizike od potraživanja za povredu intelektualne svojine koji proizilaze iz vašeg korišćenja AI izlaza.',
  'termsPage.section4.items[5]': 'AI sistemi mogu proizvesti neočekivane ili neželjene rezultate na osnovu vaših unosa, i mi nismo odgovorni za bilo kakav štetan, uvredljiv ili neprimereni sadržaj koji je generisan.',
  'termsPage.section4.items[6]': 'Morate se pridržavati svih važećih zakona prilikom korišćenja AI izlaza, uključujući kontrole izvoza, propise o zaštiti podataka i standarde specifične za industriju (npr. HIPAA za zdravstvene podatke).',
  'termsPage.section4.disclaimer': 'AppNode se odriče svake odgovornosti za bilo kakvu štetu, gubitke ili potraživanja koja proizilaze iz vašeg korišćenja ili oslanjanja na AI izlaze, uključujući ali ne ograničavajući se na direktnu, indirektnu, slučajnu, posledičnu ili kaznenu štetu. Saglasni ste da koristite AI izlaze na sopstveni rizik i odgovornost.',

  'termsPage.section5.title': '5. Korisnički sadržaj, podaci i licence',
  'termsPage.section5.definition': '„Korisnički sadržaj" označava sve upite, podatke, kod, tekst, slike, datoteke ili druge materijale koje otpremate, prosleđujete ili unosite u Usluge.',
  'termsPage.section5.ownership': 'Vlasništvo: Zadržavate sva vlasnička prava nad vašim Korisničkim sadržajem, podložno licencama koje su ovde dodeljene.',
  'termsPage.section5.licenseIntro': 'Licenca za AppNode: Prosleđivanjem Korisničkog sadržaja, dodeljujete AppNode-u trajnu, neopozivu, svetsku, neekskluzivnu, besplatnu, u potpunosti plaćenu, podlicencibilnu i prenosivu licencu za:',
  'termsPage.section5.licenseItems[0]': 'Hostovanje, skladištenje, obradu, reprodukciju, modifikaciju, distribuciju, prikazivanje i izvršavanje Korisničkog sadržaja koliko je potrebno za pružanje, održavanje i poboljšanje Usluga.',
  'termsPage.section5.licenseItems[1]': 'Korišćenje Korisničkog sadržaja za otkrivanje, sprečavanje i ublažavanje zloupotreba, prevara, bezbednosnih pretnji ili kršenja ovih Uslova.',
  'termsPage.section5.licenseItems[2]': 'Anonimizovanje, agregiranje ili deidentifikaciju Korisničkog sadržaja u analitičke svrhe, uključujući obuku, fino podešavanje ili poboljšanje naših AI sistema, modela, algoritama i usluga.',
  'termsPage.section5.licenseItems[3]': 'Usklađenost sa zakonskim obavezama, odgovaranje na sudske naloge ili sprovođenje naših prava.',
  'termsPage.section5.represent': 'Izjavljujete i garantujete da: (i) imate sva potrebna prava, saglasnosti i dozvole za prosleđivanje Korisničkog sadržaja i dodeljivanje gore navedenih licenci; (ii) Korisnički sadržaj ne krši prava trećih strana (npr. intelektualnu svojinu, privatnost); i (iii) Korisnički sadržaj je u skladu sa svim važećim zakonima.',
  'termsPage.section5.noSell': 'Mi ne prodajemo vaš Korisnički sadržaj trećim stranama. Međutim, možemo deliti anonimizovane ili agregirane podatke sa partnerima u svrhe istraživanja ili poboljšanja, pod uslovom da se ne mogu razumno ponovo identifikovati sa vama.',
  'termsPage.section5.dataProcessing': 'Obrada podataka: Naša obrada Korisničkog sadržaja je dodatno regulisana našom Politikom privatnosti. Pristajete na prenos, skladištenje i obradu Korisničkog sadržaja u Sjedinjenim Američkim Državama ili drugim jurisdikcijama gde se nalaze naši serveri ili povezana lica.',

  'termsPage.section6.title': '6. Politika prihvatljive upotrebe',
  'termsPage.section6.intro': 'Saglasni ste da ćete koristiti Usluge samo u zakonite svrhe i u skladu sa ovim Uslovima. Zabranjene aktivnosti uključuju, ali nisu ograničene na:',
  'termsPage.section6.items[0]': 'Kršenje bilo kojih lokalnih, državnih, nacionalnih ili međunarodnih zakona, propisa ili ugovora.',
  'termsPage.section6.items[1]': 'Povredu ili zloupotrebu prava intelektualne svojine, uključujući autorska prava, žigove, patente, poslovne tajne ili prava na publicitet.',
  'termsPage.section6.items[2]': 'Generisanje, distribuciju ili korišćenje Usluga za kreiranje zlonamernog koda, virusa, malvera, ransomvera, špijunskog softvera ili drugog štetnog softvera.',
  'termsPage.section6.items[3]': 'Neovlašćeni pristup, hakovanje, ispitivanje, skeniranje ili iskorišćavanje ranjivosti u Uslugama ili bilo kojim povezanim sistemima.',
  'termsPage.section6.items[4]': 'Pokušaj prikupljanja, ekstrakcije, reverznog inženjeringa, dekompilacije, rastavljanja ili drugog izvlačenja izvornog koda, algoritama ili vlasničkih informacija iz Usluga ili AI sistema.',
  'termsPage.section6.items[5]': 'Zaobilaženje, izbegavanje ili ometanje bilo kojih bezbednosnih mera, ograničenja brzine, kvota korišćenja ili kontrola pristupa.',
  'termsPage.section6.items[6]': 'Kreiranje više Naloga u svrhe zloupotrebe, automatizovanje kreiranja Naloga ili korišćenje botova/skripti za interakciju sa Uslugama bez ovlašćenja.',
  'termsPage.section6.items[7]': 'Otpremanje ili generisanje sadržaja koji je nezakonit, opscen, klevetnički, uznemiravajući, preteći, diskriminatorski, pun mržnje ili promoviše nasilje, terorizam ili štetu po druge.',
  'termsPage.section6.items[8]': 'Ometanje, poremećaj ili preopterećenje Usluga, uključujući napade uskraćivanja usluge, slanje neželjene pošte ili prekomerno korišćenje resursa.',
  'termsPage.section6.items[9]': 'Korišćenje Usluga za visokorizične aktivnosti, kao što je automatsko donošenje odluka u kontekstu zapošljavanja, kreditiranja, stanovanja ili pravnih postupaka, bez ljudskog nadzora.',
  'termsPage.section6.items[10]': 'Izvoz ili ponovni izvoz Usluga ili AI izlaza kojima se krše američki zakoni o kontroli izvoza (npr. EAR, ITAR).',
  'termsPage.section6.monitor': 'Možemo pratiti, pregledati ili analizirati vaše korišćenje Usluga radi sprovođenja ove politike, otkrivanja kršenja ili poboljšanja Usluga. Kršenja mogu rezultirati trenutnom suspenzijom ili ukidanjem vašeg Naloga, bez povraćaja sredstava ili odgovornosti.',

  'termsPage.section7.title': '7. Pretplate, naplata, naknade i plaćanja',
  'termsPage.section7.intro': 'Određene Usluge zahtevaju plaćenu pretplatu („Pretplata"). Pretplatom pristajete da:',
  'termsPage.section7.items[0]': 'Platite sve primenljive naknade, poreze i troškove („Naknade") u američkim dolarima putem načina plaćanja koji navedete.',
  'termsPage.section7.items[1]': 'Ovlastite automatsku periodičnu naplatu za Pretplate, koje se automatski obnavljaju osim ako se ne otkažu najmanje 24 sata pre datuma obnove.',
  'termsPage.section7.items[2]': 'Pružite tačne, potpune i aktuelne podatke za naplatu i blagovremeno ih ažurirate po potrebi.',
  'termsPage.section7.items[3]': 'Prihvatite odgovornost za sve prekoračenja, nedovoljna sredstva ili druge troškove nastale usled neuspelih plaćanja.',
  'termsPage.section7.fees': 'Naknade mogu uključivati fiksne troškove pretplate, troškove zasnovane na korišćenju (npr. po API pozivu, satu proračuna ili GB skladištenja) ili naknade za prekoračenje limita plana. Možemo prilagoditi Naknade u bilo kom trenutku uz obaveštenje, a nastavak korišćenja predstavlja prihvatanje.',
  'termsPage.section7.failure': 'Neplaćanje Naknada može rezultirati suspenzijom ili ukidanjem vašeg Naloga, pri čemu sva neizmirena dugovanja ostaju dospela i plativa.',
  'termsPage.section7.refunds': 'Povraćaj sredstava: Sve Naknade su nepovratne osim ako to zahteva važeći zakon ili je izričito navedeno u posebnoj Politici povraćaja. Delimični povraćaj za neiskorišćene delove Pretplata se ne pruža.',
  'termsPage.section7.processors': 'Koristimo procesore plaćanja trećih strana (npr. Stripe) i nismo odgovorni za njihove radnje, greške ili bezbednosne povrede.',

  'termsPage.section8.title': '8. Ograničenja brzine, kvote i korišćenje resursa',
  'termsPage.section8.intro': 'Kako bismo osigurali pravičnu upotrebu i stabilnost sistema, možemo nametnuti ograničenja brzine, kvote korišćenja, računska ograničenja ili druge kontrole na Usluge (npr. maksimalan broj API zahteva u minuti, ukupne računske kredite mesečno).',
  'termsPage.section8.items[0]': 'Prekoračenje limita može rezultirati usporavanjem, dodatnim Naknadama, suspenzijom ili ukidanjem.',
  'termsPage.section8.items[1]': 'Saglasni ste da nećete pokušavati da zaobiđete ova ograničenja.',
  'termsPage.section8.items[2]': 'Aktivnosti zahtevne po resursima (npr. obrada podataka velikog obima) mogu zahtevati prethodno odobrenje.',
  'termsPage.section8.noLiability': 'Nismo odgovorni za bilo kakve gubitke nastale usled sprovođenja ovih ograničenja.',

  'termsPage.section9.title': '9. Prava intelektualne svojine',
  'termsPage.section9.ownership': 'Sva prava, vlasništvo i interesi u i nad Uslugama, uključujući ali ne ograničavajući se na softver, AI sisteme, modele, algoritme, baze podataka, korisničke interfejse, brendiranje, žigove, logotipe, dokumentaciju i sva poboljšanja ili derivate (zajedno, „AppNode IS"), jesu i ostaju isključivo vlasništvo AppNode-a ili njegovih davalaca licence.',
  'termsPage.section9.license': 'Dobijate ograničenu, neekskluzivnu, neprenosivu, bez prava podlicenciranja, opozivu licencu za pristup i korišćenje Usluga isključivo za vaše interne svrhe, podložno ovim Uslovima. Ova licenca prestaje nakon bilo kakvog kršenja ili prestanka ovih Uslova.',
  'termsPage.section9.agreeNot': 'Saglasni ste da nećete:',
  'termsPage.section9.items[0]': 'Kopirati, menjati, prilagođavati, prevoditi, distribuirati, prodavati, iznajmljivati, davati u zakup ili kreirati izvedena dela od bilo kog AppNode IS.',
  'termsPage.section9.items[1]': 'Uklanjati, menjati ili prikrivati bilo kakva obaveštenja o autorskim pravima, žigovima ili vlasničkim pravima.',
  'termsPage.section9.items[2]': 'Koristiti AppNode IS na način koji može zbuniti potrošače ili implicirati podršku.',
  'termsPage.section9.feedback': 'Sve povratne informacije, sugestije ili ideje koje pružite u vezi sa Uslugama („Povratne informacije") biće vlasništvo AppNode-a, i dodeljujete nam trajnu, neopozivu licencu za korišćenje, ugradnju ili komercijalizaciju takvih Povratnih informacija bez naknade ili navođenja autorstva.',

  'termsPage.section10.title': '10. Poverljivost',
  'termsPage.section10.content': 'Saglasni ste da ćete čuvati kao poverljive sve nejavne informacije koje AppNode otkrije, uključujući ali ne ograničavajući se na tehničke specifikacije, cene, beta funkcije i poslovne strategije. Ova obaveza ostaje na snazi i nakon prestanka ovih Uslova.',

  'termsPage.section11.title': '11. Odricanje od garancija i ograničenje odgovornosti',
  'termsPage.section11.asIs': 'USLUGE SE PRUŽAJU „KAKVE JESU" I „KAKO SU DOSTUPNE", BEZ GARANCIJA BILO KOJE VRSTE, IZRIČITIH ILI PODRAZUMEVANIH, UKLJUČUJUĆI ALI NE OGRANIČAVAJUĆI SE NA GARANCIJE PRODAJNOSTI, PRIKLADNOSTI ZA ODREĐENU SVRHU, NEPOVREDA PRAVA, TAČNOSTI ILI POUZDANOSTI.',
  'termsPage.section11.noWarranties': 'APPNODE NE DAJE GARANCIJE DA ĆE USLUGE BITI NEPREKIDNE, BEZ GREŠAKA, BEZBEDNE ILI SLOBODNE OD VIRUSA ILI ŠTETNIH KOMPONENTI.',
  'termsPage.section11.limitation': 'U MAKSIMALNOJ MERI DOZVOLJENOJ ZAKONOM, UKUPNA ODGOVORNOST APPNODE-A ZA BILO KAKVA POTRAŽIVANJA KOJA PROIZILAZE IZ ILI SU POVEZANA SA OVIM USLOVIMA ILI USLUGAMA NE SME PREMAŠITI VEĆI OD (A) IZNOSA KOJI STE PLATILI APPNODE-U U 12 MESECI KOJI PRETHODE POTRAŽIVANJU, ILI (B) 100 USD.',
  'termsPage.section11.exclusion': 'NI U KOM SLUČAJU APPNODE NEĆE BITI ODGOVORAN ZA BILO KAKVU INDIREKTNU, SLUČAJNU, POSEBNU, POSLEDIČNU ILI KAZNENU ŠTETU, UKLJUČUJUĆI ALI NE OGRANIČAVAJUĆI SE NA GUBITAK DOBITI, PODATAKA, POSLOVNOG UGLEDA ILI KORIŠĆENJA.',

  'termsPage.section12.title': '12. Obeštećenje',
  'termsPage.section12.content': 'Saglasni ste da ćete obeštetiti, braniti i osloboditi odgovornosti AppNode, njegove povezane kompanije, direktore, zaposlene, agente i davaoce licence od i protiv svih potraživanja, obaveza, šteta, gubitaka, troškova ili izdataka (uključujući razumne advokatske honorare) koji proizilaze iz ili su povezani sa: (a) vašim korišćenjem Usluga; (b) vašim Korisničkim sadržajem; (c) vašim kršenjem ovih Uslova; ili (d) vašim kršenjem prava trećih strana.',

  'termsPage.section13.title': '13. Raskid',
  'termsPage.section13.byYou': 'Možete raskinuti svoj Nalog u bilo kom trenutku prateći uputstva u Uslugama ili kontaktiranjem support@appnode.ai.',
  'termsPage.section13.byUs': 'Mi možemo suspendovati ili ukinuti vaš Nalog odmah, sa ili bez obaveštenja, iz bilo kog razloga, uključujući ali ne ograničavajući se na kršenje ovih Uslova, neplaćanje, sumnju na prevaru ili zakonske zahteve.',
  'termsPage.section13.effect': 'Po raskidu: (a) vaš pristup Uslugama prestaje; (b) sve neizmirene Naknade ostaju dospele; (c) licence koje su vam dodeljene prestaju; i (d) odredbe koje po svojoj prirodi treba da ostanu na snazi (npr. obeštećenje, ograničenje odgovornosti, poverljivost) ostaju na snazi.',

  'termsPage.section14.title': '14. Merodavno pravo i rešavanje sporova',
  'termsPage.section14.law': 'Ovi Uslovi se regulišu i tumače u skladu sa zakonima države Delaver, SAD, bez obzira na principe kolizije zakona.',
  'termsPage.section14.arbitration': 'Svaki spor koji nastane iz ili u vezi sa ovim Uslovima rešava se isključivo obavezujućom arbitražom koju administrira Američka arbitražna asocijacija (AAA) prema njenim Pravilima komercijalne arbitraže. Arbitraža se sprovodi u Vilmingtonu, Delaver.',
  'termsPage.section14.classWaiver': 'VI I APPNODE SE SAGLAŠAVATE DA SE ODRIČETE PRAVA NA SUĐENJE PRED POROTOM I UČEŠĆA U KOLEKTIVNIM TUŽBAMA ILI KOLEKTIVNIM ARBITRAŽAMA.',

  'termsPage.section15.title': '15. Razno',
  'termsPage.section15.entireAgreement': 'Ovi Uslovi, zajedno sa Politikom privatnosti i bilo kojim drugim politikama na koje se ovde poziva, čine celokupan ugovor između vas i AppNode-a u vezi sa Uslugama.',
  'termsPage.section15.severability': 'Ako se bilo koja odredba utvrdi kao neizvršiva, preostale odredbe ostaju u punoj snazi i dejstvu.',
  'termsPage.section15.waiver': 'Naše propuštanje da sprovedemo bilo koju odredbu ne predstavlja odricanje od te odredbe.',
  'termsPage.section15.assignment': 'Ne smete ustupiti ili preneti ove Uslove bez naše prethodne pisane saglasnosti. Mi možemo slobodno ustupiti ove Uslove.',

  'termsPage.section16.title': '16. Kontakt podaci',
  'termsPage.section16.company': 'AppNode Inc.',
  'termsPage.section16.supportEmail': 'E-pošta: support@appnode.ai',
  'termsPage.section16.legalEmail': 'Pravni kontakt: legal@appnode.ai',
};

// Apply all translations
let count = 0;
for (const [path, value] of Object.entries(translations)) {
  set(sr, path, value);
  count++;
}

console.log(`\nApplied ${count} translations`);

// Write back
fs.writeFileSync('./src/translations/sr.json', JSON.stringify(sr, null, 2) + '\n', 'utf8');
console.log('Written sr.json');

// Verify
const sr2 = JSON.parse(fs.readFileSync('./src/translations/sr.json', 'utf8'));
const sr2Strings = getStrings(sr2);
const en2Strings = getStrings(en);

const stillUntranslated = Object.entries(en2Strings)
  .filter(([k]) => k.startsWith('termsPage.') || k.startsWith('privacyPage.'))
  .filter(([k, v]) => sr2Strings[k] === v && v.length > 1);

console.log(`\nRemaining untranslated: ${stillUntranslated.length}`);
if (stillUntranslated.length > 0) {
  stillUntranslated.forEach(([k, v]) => console.log('  STILL EN:', k));
}
