const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'translations', 'el.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Helper: set nested value using dot notation with array bracket support
// e.g. "securityPage.features[0].title" => data.securityPage.features[0].title
function set(obj, keyPath, value) {
  const parts = keyPath.replace(/\[(\d+)\]/g, '.$1').split('.');
  let current = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const k = /^\d+$/.test(parts[i]) ? Number(parts[i]) : parts[i];
    if (current[k] === undefined) {
      current[k] = /^\d+$/.test(parts[i + 1]) ? [] : {};
    }
    current = current[k];
  }
  const last = /^\d+$/.test(parts[parts.length - 1]) ? Number(parts[parts.length - 1]) : parts[parts.length - 1];
  current[last] = value;
}

// ============================================================
// rulesPage — 50 entries
// ============================================================
set(data, 'rulesPage.badge', 'Οδηγίες Κοινότητας');
set(data, 'rulesPage.title', 'Κανόνες Πλατφόρμας');
set(data, 'rulesPage.subtitle', 'Η κοινότητά μας ευδοκιμεί όταν όλοι ακολουθούν αυτές τις οδηγίες. Μαζί, δημιουργούμε ένα θετικό και παραγωγικό περιβάλλον.');

// Respect and Kindness
set(data, 'rulesPage.rules.respectAndKindness.title', 'Σεβασμός και Ευγένεια');
set(data, 'rulesPage.rules.respectAndKindness.description', 'Αντιμετωπίστε όλα τα μέλη της κοινότητας με σεβασμό. Η παρενόχληση, το μίσος, οι διακρίσεις ή οι προσωπικές επιθέσεις οποιουδήποτε είδους δεν γίνονται ανεκτές.');
set(data, 'rulesPage.rules.respectAndKindness.examples.title', 'Παραδείγματα:');
set(data, 'rulesPage.rules.respectAndKindness.examples.item1', 'Να είστε βοηθητικοί και εποικοδομητικοί στα σχόλιά σας');
set(data, 'rulesPage.rules.respectAndKindness.examples.item2', 'Αποφύγετε προκλητική ή εχθρική γλώσσα');
set(data, 'rulesPage.rules.respectAndKindness.examples.item3', 'Σεβαστείτε τις διαφορές σε απόψεις και εμπειρία');

// Original Content
set(data, 'rulesPage.rules.originalContent.title', 'Πρωτότυπο Περιεχόμενο');
set(data, 'rulesPage.rules.originalContent.description', 'Δημιουργήστε και μοιραστείτε πρωτότυπο έργο. Σεβαστείτε τα δικαιώματα πνευματικής ιδιοκτησίας και αναφέρετε τις πηγές σας όταν χρησιμοποιείτε έργα άλλων.');
set(data, 'rulesPage.rules.originalContent.examples.title', 'Παραδείγματα:');
set(data, 'rulesPage.rules.originalContent.examples.item1', 'Μοιραστείτε μόνο περιεχόμενο για το οποίο έχετε δικαιώματα');
set(data, 'rulesPage.rules.originalContent.examples.item2', 'Αναφέρετε τους αρχικούς δημιουργούς όταν εμπνέεστε από το έργο τους');
set(data, 'rulesPage.rules.originalContent.examples.item3', 'Μην αντιγράφετε ή λογοκλοπείτε έργα άλλων χρηστών');

// Safe Content
set(data, 'rulesPage.rules.safeContent.title', 'Ασφαλές Περιεχόμενο');
set(data, 'rulesPage.rules.safeContent.description', 'Διατηρήστε την πλατφόρμα ασφαλή για όλους. Μη δημιουργείτε, μοιράζεστε ή προωθείτε επιβλαβές, παράνομο ή ακατάλληλο περιεχόμενο.');
set(data, 'rulesPage.rules.safeContent.examples.title', 'Παραδείγματα:');
set(data, 'rulesPage.rules.safeContent.examples.item1', 'Χωρίς ρητό, βίαιο ή ενοχλητικό περιεχόμενο');
set(data, 'rulesPage.rules.safeContent.examples.item2', 'Χωρίς προώθηση παράνομων δραστηριοτήτων');
set(data, 'rulesPage.rules.safeContent.examples.item3', 'Χωρίς περιεχόμενο που μπορεί να βλάψει ή να θέσει σε κίνδυνο άλλους');

// No Spam or Manipulation
set(data, 'rulesPage.rules.noSpam.title', 'Χωρίς Spam ή Χειραγώγηση');
set(data, 'rulesPage.rules.noSpam.description', 'Μην εμπλέκεστε σε spam, χειραγώγηση ή παραπλανητικές πρακτικές. Διατηρήστε την πλατφόρμα αυθεντική και αξιόπιστη.');
set(data, 'rulesPage.rules.noSpam.examples.title', 'Παραδείγματα:');
set(data, 'rulesPage.rules.noSpam.examples.item1', 'Χωρίς αυτοματοποιημένες ή μαζικές ενέργειες για τεχνητή αύξηση προβολής');
set(data, 'rulesPage.rules.noSpam.examples.item2', 'Χωρίς ψεύτικους λογαριασμούς ή πλαστοπροσωπία');
set(data, 'rulesPage.rules.noSpam.examples.item3', 'Χωρίς παραπλανητικό ή απατηλό περιεχόμενο');

// Secure Practices
set(data, 'rulesPage.rules.securePractices.title', 'Ασφαλείς Πρακτικές');
set(data, 'rulesPage.rules.securePractices.description', 'Ακολουθήστε τις βέλτιστες πρακτικές ασφάλειας. Μην επιχειρήσετε ποτέ να εκμεταλλευτείτε, να παραβιάσετε ή να θέσετε σε κίνδυνο την πλατφόρμα ή άλλους χρήστες.');
set(data, 'rulesPage.rules.securePractices.examples.title', 'Παραδείγματα:');
set(data, 'rulesPage.rules.securePractices.examples.item1', 'Μην επιχειρήσετε πρόσβαση στους λογαριασμούς άλλων');
set(data, 'rulesPage.rules.securePractices.examples.item2', 'Αναφέρετε τις ευπάθειες ασφάλειας υπεύθυνα');
set(data, 'rulesPage.rules.securePractices.examples.item3', 'Μη μοιράζεστε ποτέ κακόβουλο κώδικα ή συνδέσμους phishing');

// Fair Use
set(data, 'rulesPage.rules.fairUse.title', 'Δίκαιη Χρήση');
set(data, 'rulesPage.rules.fairUse.description', 'Χρησιμοποιήστε την πλατφόρμα δίκαια και όπως προβλέπεται. Σεβαστείτε τα όρια χρήσης και μην καταχράζεστε τις υπηρεσίες μας.');
set(data, 'rulesPage.rules.fairUse.examples.title', 'Παραδείγματα:');
set(data, 'rulesPage.rules.fairUse.examples.item1', 'Παραμείνετε εντός των ορίων χρήσης του πλάνου σας');
set(data, 'rulesPage.rules.fairUse.examples.item2', 'Μη χρησιμοποιείτε την πλατφόρμα για μη εξουσιοδοτημένους εμπορικούς σκοπούς');
set(data, 'rulesPage.rules.fairUse.examples.item3', 'Μην παρακάμπτετε τους περιορισμούς της πλατφόρμας');

// Enforcement
set(data, 'rulesPage.enforcement.title', 'Επιβολή');
set(data, 'rulesPage.enforcement.description', 'Οι παραβάσεις αυτών των κανόνων μπορεί να οδηγήσουν σε αφαίρεση περιεχομένου, προειδοποίηση λογαριασμού, προσωρινή αναστολή ή μόνιμο αποκλεισμό ανάλογα με τη σοβαρότητα και τη συχνότητα των παραβάσεων. Εξετάζουμε όλες τις αναφορές και λαμβάνουμε τα κατάλληλα μέτρα.');
set(data, 'rulesPage.enforcement.warning.title', 'Προειδοποίηση');
set(data, 'rulesPage.enforcement.warning.subtitle', 'Πρώτη μικρή παράβαση');
set(data, 'rulesPage.enforcement.suspension.title', 'Αναστολή');
set(data, 'rulesPage.enforcement.suspension.subtitle', 'Επαναλαμβανόμενες ή σοβαρές παραβάσεις');
set(data, 'rulesPage.enforcement.ban.title', 'Αποκλεισμός');
set(data, 'rulesPage.enforcement.ban.subtitle', 'Σοβαρές ή επίμονες παραβάσεις');

// Report
set(data, 'rulesPage.report.title', 'Βλέπετε Κάτι Λάθος;');
set(data, 'rulesPage.report.description', 'Εάν αντιμετωπίσετε περιεχόμενο ή συμπεριφορά που παραβιάζει τους κανόνες της πλατφόρμας μας, παρακαλούμε αναφέρετέ το ώστε να μπορέσουμε να δράσουμε.');
set(data, 'rulesPage.report.button', 'Αναφορά Κατάχρησης');

// ============================================================
// securityPage — 51 entries
// ============================================================

// Features (8 items × 3 fields = 24)
set(data, 'securityPage.features[0].icon', '🔐');
set(data, 'securityPage.features[0].title', 'Κρυπτογράφηση σε Αποθήκευση & Μεταφορά');
set(data, 'securityPage.features[0].description', 'Όλα τα δεδομένα κρυπτογραφούνται με AES-256 σε αποθήκευση και TLS 1.3 για δεδομένα σε μεταφορά.');

set(data, 'securityPage.features[1].icon', '🛡️');
set(data, 'securityPage.features[1].title', 'Πιστοποίηση SOC 2 Type II');
set(data, 'securityPage.features[1].description', 'Διατηρούμε συμμόρφωση SOC 2 Type II, επαληθευμένη από ανεξάρτητους ελεγκτές τρίτων.');

set(data, 'securityPage.features[2].icon', '🔒');
set(data, 'securityPage.features[2].title', 'Αυθεντικοποίηση Δύο Παραγόντων');
set(data, 'securityPage.features[2].description', 'Ασφαλίστε τον λογαριασμό σας με 2FA χρησιμοποιώντας εφαρμογές αυθεντικοποίησης ή κλειδιά ασφαλείας υλικού.');

set(data, 'securityPage.features[3].icon', '🌐');
set(data, 'securityPage.features[3].title', 'SSO & SAML');
set(data, 'securityPage.features[3].description', 'Ενιαία σύνδεση επιχειρησιακού επιπέδου με υποστήριξη SAML 2.0 και παρόχων OAuth.');

set(data, 'securityPage.features[4].icon', '📝');
set(data, 'securityPage.features[4].title', 'Αρχεία Καταγραφής Ελέγχου');
set(data, 'securityPage.features[4].description', 'Ολοκληρωμένα αρχεία καταγραφής ελέγχου για όλες τις δραστηριότητες και αλλαγές λογαριασμού.');

set(data, 'securityPage.features[5].icon', '🔍');
set(data, 'securityPage.features[5].title', 'Σάρωση Ευπαθειών');
set(data, 'securityPage.features[5].description', 'Συνεχής αυτοματοποιημένη σάρωση ασφάλειας και τακτικές δοκιμές διείσδυσης.');

set(data, 'securityPage.features[6].icon', '💾');
set(data, 'securityPage.features[6].title', 'Αντίγραφα Ασφαλείας Δεδομένων');
set(data, 'securityPage.features[6].description', 'Αυτοματοποιημένα καθημερινά αντίγραφα ασφαλείας με δυνατότητα ανάκτησης σε συγκεκριμένο χρονικό σημείο.');

set(data, 'securityPage.features[7].icon', '🚨');
set(data, 'securityPage.features[7].title', 'Αντιμετώπιση Περιστατικών');
set(data, 'securityPage.features[7].description', 'Παρακολούθηση ασφάλειας 24/7 με ταχείες διαδικασίες αντιμετώπισης περιστατικών.');

// Certifications (4 items × 3 fields = 12)
set(data, 'securityPage.certifications[0].name', 'SOC 2 Type II');
set(data, 'securityPage.certifications[0].icon', '✓');
set(data, 'securityPage.certifications[0].description', 'Ασφάλεια, Διαθεσιμότητα & Εμπιστευτικότητα');

set(data, 'securityPage.certifications[1].name', 'GDPR');
set(data, 'securityPage.certifications[1].icon', '✓');
set(data, 'securityPage.certifications[1].description', 'Συμμόρφωση Προστασίας Δεδομένων ΕΕ');

set(data, 'securityPage.certifications[2].name', 'CCPA');
set(data, 'securityPage.certifications[2].icon', '✓');
set(data, 'securityPage.certifications[2].description', 'Νόμος Δικαιωμάτων Απορρήτου Καλιφόρνιας');

set(data, 'securityPage.certifications[3].name', 'ISO 27001');
set(data, 'securityPage.certifications[3].icon', '✓');
set(data, 'securityPage.certifications[3].description', 'Διαχείριση Ασφάλειας Πληροφοριών');

// Practices (3 groups × 5 fields = 15)
set(data, 'securityPage.practices[0].title', 'Ασφαλής Ανάπτυξη');
set(data, 'securityPage.practices[0].items[0]', 'Αξιολογήσεις κώδικα για όλες τις αλλαγές');
set(data, 'securityPage.practices[0].items[1]', 'Αυτοματοποιημένες δοκιμές ασφάλειας στο CI/CD');
set(data, 'securityPage.practices[0].items[2]', 'Σάρωση ευπαθειών εξαρτήσεων');
set(data, 'securityPage.practices[0].items[3]', 'Τακτική εκπαίδευση ασφάλειας για προγραμματιστές');

set(data, 'securityPage.practices[1].title', 'Ασφάλεια Υποδομής');
set(data, 'securityPage.practices[1].items[0]', 'Υποδομή cloud σε AWS/GCP');
set(data, 'securityPage.practices[1].items[1]', 'Τμηματοποίηση δικτύου και τείχη προστασίας');
set(data, 'securityPage.practices[1].items[2]', 'Προστασία και μετριασμός DDoS');
set(data, 'securityPage.practices[1].items[3]', 'Συστήματα ανίχνευσης εισβολών');

set(data, 'securityPage.practices[2].title', 'Έλεγχος Πρόσβασης');
set(data, 'securityPage.practices[2].items[0]', 'Έλεγχος πρόσβασης βάσει ρόλων (RBAC)');
set(data, 'securityPage.practices[2].items[1]', 'Αρχή ελάχιστων δικαιωμάτων');
set(data, 'securityPage.practices[2].items[2]', 'Τακτικοί έλεγχοι πρόσβασης');
set(data, 'securityPage.practices[2].items[3]', 'Ασφαλής διαχείριση διαπιστευτηρίων');

// ============================================================
// changelogPage — 60 entries
// ============================================================
set(data, 'changelogPage.badge', 'Ενημερώσεις');
set(data, 'changelogPage.title', 'Ιστορικό Αλλαγών');
set(data, 'changelogPage.subtitle', 'Όλες οι τελευταίες ενημερώσεις, βελτιώσεις και διορθώσεις στο AppNode');
set(data, 'changelogPage.stayUpToDate', 'Μείνετε ενημερωμένοι');
set(data, 'changelogPage.getNotified', 'Λάβετε ειδοποίηση όταν κυκλοφορούμε νέες λειτουργίες');
set(data, 'changelogPage.emailPlaceholder', 'Εισάγετε το email σας');
set(data, 'changelogPage.subscribeButton', 'Εγγραφή');
set(data, 'changelogPage.viewOlder', 'Προβολή παλαιότερων εκδόσεων');

set(data, 'changelogPage.changeTypes.new', 'Νέο');
set(data, 'changelogPage.changeTypes.improved', 'Βελτιωμένο');
set(data, 'changelogPage.changeTypes.fixed', 'Διορθωμένο');

// v2.5.0 — Smart Styles & Auto Layouts (9 entries)
set(data, 'changelogPage.releases.v250.date', '28 Νοεμβρίου 2025');
set(data, 'changelogPage.releases.v250.title', 'Έξυπνα Στυλ & Αυτόματες Διατάξεις');
set(data, 'changelogPage.releases.v250.description', 'Παρουσιάζουμε τη στυλιστική με τεχνητή νοημοσύνη που δημιουργεί αυτόματα όμορφα, συνεπή σχέδια για τις εφαρμογές σας.');
set(data, 'changelogPage.releases.v250.changes[0]', 'Έξυπνα Στυλ: Η AI εφαρμόζει αυτόματα συνεπή στυλ σε ολόκληρη την εφαρμογή σας');
set(data, 'changelogPage.releases.v250.changes[1]', 'Αυτόματες Διατάξεις: Ευφυείς αποκρίσιμες διατάξεις που προσαρμόζονται στο περιεχόμενο');
set(data, 'changelogPage.releases.v250.changes[2]', 'Προεπιλογές θεμάτων: Επιλέξτε από 20+ επαγγελματικά σχεδιασμένα θέματα');
set(data, 'changelogPage.releases.v250.changes[3]', 'Ταχύτερη δημιουργία κώδικα με βελτιστοποιημένες εντολές');
set(data, 'changelogPage.releases.v250.changes[4]', 'Καλύτερη υποστήριξη TypeScript στον παραγόμενο κώδικα');
set(data, 'changelogPage.releases.v250.changes[5]', 'Διόρθωση προβλημάτων διάταξης σε κινητές συσκευές');

// v2.4.2 — Performance Improvements (7 entries)
set(data, 'changelogPage.releases.v242.date', '15 Νοεμβρίου 2025');
set(data, 'changelogPage.releases.v242.title', 'Βελτιώσεις Απόδοσης');
set(data, 'changelogPage.releases.v242.description', 'Σημαντικές βελτιστοποιήσεις απόδοσης και διορθώσεις σφαλμάτων.');
set(data, 'changelogPage.releases.v242.changes[0]', '50% ταχύτεροι χρόνοι φόρτωσης έργων');
set(data, 'changelogPage.releases.v242.changes[1]', 'Μειωμένη χρήση μνήμης στον επεξεργαστή');
set(data, 'changelogPage.releases.v242.changes[2]', 'Διόρθωση αποτυχίας εξαγωγής κώδικα για μεγάλα έργα');
set(data, 'changelogPage.releases.v242.changes[3]', 'Διόρθωση προβλημάτων αυθεντικοποίησης με παρόχους τρίτων');

// v2.4.0 — Team Collaboration (8 entries)
set(data, 'changelogPage.releases.v240.date', '1 Νοεμβρίου 2025');
set(data, 'changelogPage.releases.v240.title', 'Ομαδική Συνεργασία');
set(data, 'changelogPage.releases.v240.description', 'Συνεργαστείτε με την ομάδα σας σε πραγματικό χρόνο.');
set(data, 'changelogPage.releases.v240.changes[0]', 'Συνεργασία σε πραγματικό χρόνο: Πολλοί χρήστες μπορούν να επεξεργάζονται ταυτόχρονα');
set(data, 'changelogPage.releases.v240.changes[1]', 'Ομαδικοί χώροι εργασίας με δικαιώματα βάσει ρόλων');
set(data, 'changelogPage.releases.v240.changes[2]', 'Σχόλια και ανατροφοδότηση σε στοιχεία');
set(data, 'changelogPage.releases.v240.changes[3]', 'Ιστορικό εκδόσεων με δυνατότητα επαναφοράς');
set(data, 'changelogPage.releases.v240.changes[4]', 'Καλύτερη επίλυση συγκρούσεων για ταυτόχρονες επεξεργασίες');

// v2.3.0 — Database Integration (9 entries)
set(data, 'changelogPage.releases.v230.date', '15 Οκτωβρίου 2025');
set(data, 'changelogPage.releases.v230.title', 'Ενσωμάτωση Βάσης Δεδομένων');
set(data, 'changelogPage.releases.v230.description', 'Συνδέστε τις εφαρμογές σας με βάσεις δεδομένων εύκολα.');
set(data, 'changelogPage.releases.v230.changes[0]', 'Ενσωμάτωση Supabase για βάσεις δεδομένων PostgreSQL');
set(data, 'changelogPage.releases.v230.changes[1]', 'Οπτικός σχεδιαστής σχήματος βάσης δεδομένων');
set(data, 'changelogPage.releases.v230.changes[2]', 'Αυτόματα δημιουργημένες λειτουργίες CRUD');
set(data, 'changelogPage.releases.v230.changes[3]', 'Συνδρομές δεδομένων σε πραγματικό χρόνο');
set(data, 'changelogPage.releases.v230.changes[4]', 'Καλύτερη διαχείριση συνδέσεων βάσης δεδομένων');
set(data, 'changelogPage.releases.v230.changes[5]', 'Διόρθωση προβλημάτων ανάκτησης δεδομένων σε production builds');

// v2.2.0 — Component Library (8 entries)
set(data, 'changelogPage.releases.v220.date', '28 Σεπτεμβρίου 2025');
set(data, 'changelogPage.releases.v220.title', 'Βιβλιοθήκη Στοιχείων');
set(data, 'changelogPage.releases.v220.description', 'Διευρυμένη βιβλιοθήκη στοιχείων με 100+ νέα στοιχεία.');
set(data, 'changelogPage.releases.v220.changes[0]', '100+ νέα προκατασκευασμένα στοιχεία');
set(data, 'changelogPage.releases.v220.changes[1]', 'Στοιχεία γραφημάτων και οπτικοποίησης δεδομένων');
set(data, 'changelogPage.releases.v220.changes[2]', 'Δημιουργός φορμών με επικύρωση');
set(data, 'changelogPage.releases.v220.changes[3]', 'Βιβλιοθήκη προεπιλογών κίνησης');
set(data, 'changelogPage.releases.v220.changes[4]', 'Αναζήτηση και φιλτράρισμα στοιχείων');

// v2.1.0 — Authentication Made Easy (8 entries)
set(data, 'changelogPage.releases.v210.date', '10 Σεπτεμβρίου 2025');
set(data, 'changelogPage.releases.v210.title', 'Εύκολη Αυθεντικοποίηση');
set(data, 'changelogPage.releases.v210.description', 'Προσθέστε αυθεντικοποίηση χρηστών στις εφαρμογές σας σε δευτερόλεπτα.');
set(data, 'changelogPage.releases.v210.changes[0]', 'Ρύθμιση αυθεντικοποίησης με ένα κλικ');
set(data, 'changelogPage.releases.v210.changes[1]', 'Πάροχοι κοινωνικής σύνδεσης (Google, GitHub, κ.λπ.)');
set(data, 'changelogPage.releases.v210.changes[2]', 'Πίνακας ελέγχου διαχείρισης χρηστών');
set(data, 'changelogPage.releases.v210.changes[3]', 'Ροές επαναφοράς κωδικού πρόσβασης');
set(data, 'changelogPage.releases.v210.changes[4]', 'Βελτιώσεις ασφάλειας για tokens αυθεντικοποίησης');

// Write back
fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');

console.log('✅ fix-el-phase4.js completed successfully');
console.log('   Sections translated:');
console.log('   - rulesPage: 50 entries');
console.log('   - securityPage: 51 entries');
console.log('   - changelogPage: 60 entries');
console.log('   Total: 161 entries translated to Greek');
