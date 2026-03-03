const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/translations/el.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

function set(obj, path, val) {
  const parts = path.replace(/\[(\d+)\]/g, '.$1').split('.');
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const k = isNaN(parts[i]) ? parts[i] : Number(parts[i]);
    if (cur[k] === undefined) cur[k] = isNaN(parts[i+1]) ? {} : [];
    cur = cur[k];
  }
  const last = isNaN(parts[parts.length-1]) ? parts[parts.length-1] : Number(parts[parts.length-1]);
  cur[last] = val;
}

const translations = [
  // Technology names (keep as-is)
  ["reportPage.content.reactVite", "React + Vite"],
  ["reportPage.content.nextjs", "Next.js"],
  ["reportPage.content.vue3", "Vue 3"],
  ["reportPage.content.svelte", "Svelte"],
  ["reportPage.content.astro", "Astro"],
  ["reportPage.content.vanillaJs", "Vanilla JS"],

  // Generate Code section
  ["reportPage.content.generateCodeTitle", "Πώς να Δημιουργήσετε Κώδικα"],
  ["reportPage.content.generateCodeDesc", "Μάθετε διαφορετικούς τρόπους δημιουργίας κώδικα χρησιμοποιώντας τις δυνατότητες AI του AppNode."],
  ["reportPage.content.usingPromptBar", "Χρήση της Γραμμής Εντολών"],
  ["reportPage.content.usingPromptBarDesc", "Η γραμμή εντολών είναι η κύρια διεπαφή σας για δημιουργία κώδικα με AI. Πληκτρολογήστε περιγραφές σε φυσική γλώσσα για να δημιουργήσετε components, σελίδες ή ολόκληρα χαρακτηριστικά."],
  ["reportPage.content.contextualGeneration", "Δημιουργία Βάσει Πλαισίου"],
  ["reportPage.content.contextualGenerationDesc", "Κάντε δεξί κλικ σε οποιοδήποτε αρχείο ή φάκελο για να δημιουργήσετε κώδικα βάσει πλαισίου. Η AI κατανοεί τη δομή του έργου σας και δημιουργεί συμβατό κώδικα."],
  ["reportPage.content.codeCompletion", "Αυτόματη Συμπλήρωση Κώδικα"],
  ["reportPage.content.codeCompletionDesc", "Καθώς πληκτρολογείτε, η AI προτείνει συμπληρώσεις βάσει του πλαισίου του κώδικά σας. Αποδεχτείτε προτάσεις με το Tab ή συνεχίστε να πληκτρολογείτε για βελτίωση."],

  // First App section
  ["reportPage.content.firstAppTitle", "Δημιουργία της Πρώτης σας Εφαρμογής"],
  ["reportPage.content.firstAppIntro", "Ακολουθήστε αυτόν τον οδηγό βήμα προς βήμα για να δημιουργήσετε την πρώτη σας εφαρμογή με το AppNode."],
  ["reportPage.content.firstAppStep1Title", "Βήμα 1: Ξεκινήστε ένα Νέο Έργο"],
  ["reportPage.content.firstAppStep1Text", "Κάντε κλικ στο «Δημιουργία Νέου» από τον πίνακα ελέγχου σας και επιλέξτε «Δημιουργία με AI» για την ευκολότερη εκκίνηση."],
  ["reportPage.content.firstAppStep2Title", "Βήμα 2: Περιγράψτε την Εφαρμογή σας"],
  ["reportPage.content.firstAppStep2Text", "Δοκιμάστε αυτήν την εντολή: «Δημιούργησε μια απλή εφαρμογή λίστας εργασιών με δυνατότητα προσθήκης, ολοκλήρωσης και διαγραφής εργασιών. Χρησιμοποίησε ένα καθαρό, μινιμαλιστικό σχεδιασμό με ανοιχτόχρωμο θέμα.»"],
  ["reportPage.content.firstAppStep3Title", "Βήμα 3: Παρακολουθήστε τη Δημιουργία"],
  ["reportPage.content.firstAppStep3Text", "Η AI θα δημιουργήσει την εφαρμογή σας σε πραγματικό χρόνο. Θα βλέπετε αρχεία να δημιουργούνται και μια ζωντανή προεπισκόπηση να ενημερώνεται καθώς γράφεται ο κώδικας."],
  ["reportPage.content.firstAppStep4Title", "Βήμα 4: Κάντε Αλλαγές"],
  ["reportPage.content.firstAppStep4Text", "Δοκιμάστε να ζητήσετε: «Πρόσθεσε εναλλαγή σκοτεινής λειτουργίας» ή «Κάνε τις ολοκληρωμένες εργασίες με διαγράμμιση» για να δείτε πώς η AI μπορεί να βελτιώνει την εφαρμογή σας."],

  // Databases section
  ["reportPage.content.databasesTitle", "Δημιουργία με Βάσεις Δεδομένων"],
  ["reportPage.content.databasesIntro", "Μάθετε πώς να προσθέτετε μόνιμη αποθήκευση δεδομένων στις εφαρμογές σας στο AppNode."],
  ["reportPage.content.databasesAvailable", "Διαθέσιμες Βάσεις Δεδομένων"],
  ["reportPage.content.databasesSqlite", "SQLite"],
  ["reportPage.content.databasesSqliteDesc", "Απλή βάση δεδομένων βασισμένη σε αρχείο. Ιδανική για μικρές εφαρμογές."],
  ["reportPage.content.databasesPostgres", "PostgreSQL"],
  ["reportPage.content.databasesPostgresDesc", "Πλήρης σχεσιακή βάση δεδομένων για σύνθετα δεδομένα."],
  ["reportPage.content.databasesMongo", "MongoDB"],
  ["reportPage.content.databasesMongoDesc", "Βάση δεδομένων εγγράφων για ευέλικτα σχήματα."],
  ["reportPage.content.databasesRedis", "Redis"],
  ["reportPage.content.databasesRedisDesc", "Αποθήκευση στη μνήμη για caching και sessions."],
  ["reportPage.content.databasesAdding", "Προσθήκη Βάσης Δεδομένων"],
  ["reportPage.content.databasesAddingText", "Απλά περιγράψτε τις ανάγκες δεδομένων σας: «Χρειάζομαι να αποθηκεύω χρήστες με όνομα, email και φωτογραφία προφίλ» και η AI θα ρυθμίσει το σχήμα βάσης δεδομένων και τις συνδέσεις για εσάς."],

  // Deploying section
  ["reportPage.content.deployingTitle", "Δημοσίευση της Εφαρμογής σας"],
  ["reportPage.content.deployingIntro", "Δημοσιεύστε την εφαρμογή σας με ένα κλικ. Το AppNode διαχειρίζεται τη φιλοξενία, το SSL και την κλιμάκωση αυτόματα."],
  ["reportPage.content.deployingSteps", "Βήματα Δημοσίευσης"],
  ["reportPage.content.deployingStep1", "Κάντε κλικ στο Deploy"],
  ["reportPage.content.deployingStep1Text", "Πατήστε το κουμπί Deploy στον χώρο εργασίας σας"],
  ["reportPage.content.deployingStep2", "Επιλέξτε Domain"],
  ["reportPage.content.deployingStep2Text", "Χρησιμοποιήστε το δωρεάν subdomain μας ή συνδέστε το δικό σας"],
  ["reportPage.content.deployingStep3", "Δημοσίευση"],
  ["reportPage.content.deployingStep3Text", "Η εφαρμογή σας δημοσιεύεται σε δευτερόλεπτα με SSL"],
  ["reportPage.content.deployingCustom", "Προσαρμοσμένα Domains"],
  ["reportPage.content.deployingCustomText", "Συνδέστε το δικό σας domain προσθέτοντας μια εγγραφή CNAME που δείχνει στο AppNode. Τα πιστοποιητικά SSL παρέχονται αυτόματα."],

  // Teams section
  ["reportPage.content.teamsTitle", "Επισκόπηση Ομάδων"],
  ["reportPage.content.teamsIntro", "Συνεργαστείτε με την ομάδα σας στο AppNode. Μοιραστείτε έργα, διαχειριστείτε δικαιώματα και δημιουργήστε μαζί σε πραγματικό χρόνο."],
  ["reportPage.content.teamsFeatures", "Χαρακτηριστικά Ομάδας"],
  ["reportPage.content.teamsShared", "Κοινόχρηστα Έργα"],
  ["reportPage.content.teamsSharedDesc", "Όλα τα μέλη της ομάδας μπορούν να έχουν πρόσβαση και να συνεισφέρουν σε έργα"],
  ["reportPage.content.teamsRealtime", "Συνεργασία σε Πραγματικό Χρόνο"],
  ["reportPage.content.teamsRealtimeDesc", "Δείτε αλλαγές από συνεργάτες αμέσως"],
  ["reportPage.content.teamsRole", "Πρόσβαση Βάσει Ρόλων"],
  ["reportPage.content.teamsRoleDesc", "Ελέγξτε ποιος μπορεί να δει, να επεξεργαστεί ή να δημοσιεύσει"],
  ["reportPage.content.teamsBilling", "Χρέωση Ομάδας"],
  ["reportPage.content.teamsBillingDesc", "Ενοποιημένη χρέωση για τον οργανισμό σας"],
  ["reportPage.content.teamsGettingStarted", "Ξεκινώντας με τις Ομάδες"],
  ["reportPage.content.teamsStep1", "Δημιουργήστε μια ομάδα από τις ρυθμίσεις του πίνακα ελέγχου σας"],
  ["reportPage.content.teamsStep2", "Προσκαλέστε μέλη ομάδας μέσω email"],
  ["reportPage.content.teamsStep3", "Ορίστε δικαιώματα για κάθε μέλος"],
  ["reportPage.content.teamsStep4", "Ξεκινήστε τη συνεργασία σε έργα"],

  // Enterprise section
  ["reportPage.content.enterpriseTitle", "Χαρακτηριστικά Enterprise"],
  ["reportPage.content.enterpriseIntro", "Προηγμένα χαρακτηριστικά για μεγάλους οργανισμούς με σύνθετες απαιτήσεις."],
  ["reportPage.content.enterpriseBenefits", "Οφέλη Enterprise"],
  ["reportPage.content.enterpriseSSO", "Ενσωμάτωση SSO"],
  ["reportPage.content.enterpriseSSODesc", "Συνδεθείτε με τον πάροχο ταυτότητας σας (Okta, Azure AD, κ.λπ.)"],
  ["reportPage.content.enterpriseAudit", "Αρχεία Καταγραφής"],
  ["reportPage.content.enterpriseAuditDesc", "Παρακολουθήστε όλες τις ενέργειες στον οργανισμό σας"],
  ["reportPage.content.enterpriseContracts", "Προσαρμοσμένα Συμβόλαια"],
  ["reportPage.content.enterpriseContractsDesc", "Εξατομικευμένες συμφωνίες και SLAs"],
  ["reportPage.content.enterpriseSupport", "Αποκλειστική Υποστήριξη"],
  ["reportPage.content.enterpriseSupportDesc", "Υποστήριξη προτεραιότητας με αποκλειστικό υπεύθυνο λογαριασμού"],
  ["reportPage.content.enterpriseCloud", "Ιδιωτικό Cloud"],
  ["reportPage.content.enterpriseCloudDesc", "Εκτελέστε το AppNode στη δική σας υποδομή"],
  ["reportPage.content.enterpriseContact", "Επικοινωνήστε στο contact@appnode.ai για να μάθετε περισσότερα."],

  // Collaboration section
  ["reportPage.content.collaborationTitle", "Συνεργασία"],
  ["reportPage.content.collaborationIntro", "Συνεργαστείτε απρόσκοπτα με χαρακτηριστικά συνεργασίας σε πραγματικό χρόνο."],
  ["reportPage.content.collaborationRealtime", "Χαρακτηριστικά Πραγματικού Χρόνου"],
  ["reportPage.content.collaborationItem1", "Δείτε τους δρομείς των συνεργατών σας στον επεξεργαστή"],
  ["reportPage.content.collaborationItem2", "Οι αλλαγές κώδικα συγχρονίζονται αμέσως"],
  ["reportPage.content.collaborationItem3", "Ενσωματωμένα σχόλια και συζητήσεις"],
  ["reportPage.content.collaborationItem4", "Η ροή δραστηριότητας εμφανίζει πρόσφατες αλλαγές"],
  ["reportPage.content.collaborationComm", "Επικοινωνία"],
  ["reportPage.content.collaborationCommText", "Χρησιμοποιήστε την ενσωματωμένη συνομιλία ή συνδέστε τον χώρο εργασίας σας στο Slack για απρόσκοπτη επικοινωνία ομάδας."],

  // Changelog
  ["reportPage.content.changelogText", "Εργαζόμαστε σε κάτι συναρπαστικό. Ελέγξτε ξανά σύντομα για ενημερώσεις σχετικά με τα τελευταία χαρακτηριστικά και βελτιώσεις."],

  // Roadmap section
  ["reportPage.content.roadmapTitle", "Χάρτης Πορείας"],
  ["reportPage.content.roadmapIntro", "Δείτε σε τι εργαζόμαστε και τι έρχεται στη συνέχεια."],
  ["reportPage.content.roadmapInProgress", "Σε Εξέλιξη"],
  ["reportPage.content.roadmapItem1", "Προεπισκόπηση εφαρμογής κινητού"],
  ["reportPage.content.roadmapItem2", "Βελτιωμένα μοντέλα AI"],
  ["reportPage.content.roadmapItem3", "Αγορά plugins"],
  ["reportPage.content.roadmapPlanned", "Προγραμματισμένα"],
  ["reportPage.content.roadmapItem4", "Εργαλείο δημιουργίας εγγενών εφαρμογών κινητού"],
  ["reportPage.content.roadmapItem5", "Αγορά API"],
  ["reportPage.content.roadmapItem6", "Προηγμένος πίνακας αναλυτικών στοιχείων"],
];

let count = 0;
for (const [key, value] of translations) {
  set(data, key, value);
  count++;
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
console.log(`Done! Set ${count} reportPage translations in el.json`);
