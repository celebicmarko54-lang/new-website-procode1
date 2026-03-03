const fs = require('fs');

const file = 'src/translations/el.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

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

const entries = [
  // Frameworks
  ["reportPage.content.reactVite", "React + Vite"],
  ["reportPage.content.reactViteDesc", "Γρήγορη, σύγχρονη εγκατάσταση React"],
  ["reportPage.content.nextjs", "Next.js"],
  ["reportPage.content.nextjsDesc", "Full-stack πλαίσιο εργασίας React"],
  ["reportPage.content.vue3", "Vue 3"],
  ["reportPage.content.vue3Desc", "Προοδευτικό πλαίσιο εργασίας JavaScript"],
  ["reportPage.content.svelte", "Svelte"],
  ["reportPage.content.svelteDesc", "Πλαίσιο εργασίας χρόνου μεταγλώττισης"],
  ["reportPage.content.astro", "Astro"],
  ["reportPage.content.astroDesc", "Ιστοσελίδες εστιασμένες στο περιεχόμενο"],
  ["reportPage.content.vanillaJs", "Vanilla JS"],
  ["reportPage.content.vanillaJsDesc", "Χωρίς πλαίσιο εργασίας, καθαρή JavaScript"],

  // Trust & Safety
  ["reportPage.content.trustOverviewTitle", "Εμπιστοσύνη & Ασφάλεια στο AppNode"],
  ["reportPage.content.trustOverviewDesc", "Δεσμευόμαστε να διατηρούμε μια ασφαλή, αξιόπιστη πλατφόρμα για όλους τους χρήστες. Η ομάδα Εμπιστοσύνης & Ασφάλειας εργάζεται όλο το εικοσιτετράωρο για να διασφαλίσει ότι το AppNode παραμένει ένας χώρος όπου οι δημιουργοί μπορούν να χτίζουν χωρίς φόβο."],
  ["reportPage.content.ourCommitment", "Η Δέσμευσή μας"],
  ["reportPage.content.commitment1", "Παρακολούθηση δραστηριότητας πλατφόρμας 24/7"],
  ["reportPage.content.commitment2", "Ταχεία απόκριση σε αναφορές κατάχρησης"],
  ["reportPage.content.commitment3", "Διαφανείς πολιτικές επιβολής"],
  ["reportPage.content.commitment4", "Τακτικοί έλεγχοι ασφαλείας και ενημερώσεις"],
  ["reportPage.content.howWeKeepYouSafe", "Πώς Σας Προστατεύουμε"],
  ["reportPage.content.howWeKeepYouSafeDesc", "Η πολυεπίπεδη προσέγγισή μας στην ασφάλεια περιλαμβάνει αυτοματοποιημένα συστήματα ανίχνευσης, διαδικασίες ανθρώπινης αξιολόγησης και εργαλεία αναφοράς από την κοινότητα. Βελτιώνουμε συνεχώς τα συστήματά μας με βάση τις αναδυόμενες απειλές και τα σχόλια των χρηστών."],
  ["reportPage.content.automatedDetection", "Αυτοματοποιημένη Ανίχνευση"],
  ["reportPage.content.automatedDetectionDesc", "Συστήματα τεχνητής νοημοσύνης εντοπίζουν επιβλαβές περιεχόμενο"],
  ["reportPage.content.humanReview", "Ανθρώπινη Αξιολόγηση"],
  ["reportPage.content.humanReviewDesc", "Ειδική ομάδα αξιολογεί το επισημασμένο περιεχόμενο"],
  ["reportPage.content.userReports", "Αναφορές Χρηστών"],
  ["reportPage.content.userReportsDesc", "Η κοινότητα βοηθά στον εντοπισμό προβλημάτων"],
  ["reportPage.content.swiftAction", "Ταχεία Δράση"],
  ["reportPage.content.swiftActionDesc", "Γρήγορη απόκριση σε παραβιάσεις"],

  // Reporting Abuse
  ["reportPage.content.reportingAbuseTitle", "Αναφορά Κατάχρησης"],
  ["reportPage.content.reportingAbuseDesc", "Εάν συναντήσετε περιεχόμενο ή συμπεριφορά που παραβιάζει τις πολιτικές μας, παρακαλούμε αναφέρετέ το αμέσως. Λαμβάνουμε σοβαρά υπόψη όλες τις αναφορές και τις διερευνούμε άμεσα."],
  ["reportPage.content.howToReport", "Πώς να Αναφέρετε"],
  ["reportPage.content.howToReport1", "Κάντε κλικ στο κουμπί \"Αναφορά\" σε οποιοδήποτε έργο ή προφίλ χρήστη"],
  ["reportPage.content.howToReport2", "Στείλτε μας email απευθείας στο contact@appnode.ai"],
  ["reportPage.content.howToReport3", "Χρησιμοποιήστε τη φόρμα επικοινωνίας στις ρυθμίσεις του λογαριασμού σας"],
  ["reportPage.content.whatWeInvestigate", "Τι Διερευνούμε"],
  ["reportPage.content.investigate1", "Παρενόχληση ή απειλές"],
  ["reportPage.content.investigate2", "Κακόβουλο λογισμικό ή επιβλαβής κώδικας"],
  ["reportPage.content.investigate3", "Παραβίαση πνευματικών δικαιωμάτων"],
  ["reportPage.content.investigate4", "Spam ή απόπειρες phishing"],
  ["reportPage.content.investigate5", "Παράνομο περιεχόμενο"],

  // Copyright Claims
  ["reportPage.content.copyrightClaimsTitle", "Αξιώσεις Πνευματικών Δικαιωμάτων"],
  ["reportPage.content.copyrightClaimsDesc", "Σεβόμαστε τα δικαιώματα πνευματικής ιδιοκτησίας και ανταποκρινόμαστε άμεσα σε έγκυρες αξιώσεις πνευματικών δικαιωμάτων."],
  ["reportPage.content.filingClaim", "Υποβολή Αξίωσης"],
  ["reportPage.content.filingClaimDesc", "Για να υποβάλετε ειδοποίηση αφαίρεσης DMCA, στείλτε email στο contact@appnode.ai με:"],
  ["reportPage.content.claimItem1", "Ταυτοποίηση του προστατευόμενου έργου"],
  ["reportPage.content.claimItem2", "URL του παραβατικού περιεχομένου"],
  ["reportPage.content.claimItem3", "Τα στοιχεία επικοινωνίας σας"],
  ["reportPage.content.claimItem4", "Δήλωση καλής πίστης"],
  ["reportPage.content.claimItem5", "Η φυσική ή ηλεκτρονική σας υπογραφή"],

  // Terms of Service
  ["reportPage.content.termsLastUpdated", "Τελευταία ενημέρωση: Ιανουάριος 2025"],
  ["reportPage.content.termsIntro", "Αυτοί οι Όροι Χρήσης («Όροι») διέπουν την πρόσβασή σας και τη χρήση των υπηρεσιών, ιστοσελίδων και εφαρμογών του AppNode («Υπηρεσίες»). Χρησιμοποιώντας τις Υπηρεσίες μας, συμφωνείτε να δεσμεύεστε από αυτούς τους Όρους."],
  ["reportPage.content.acceptanceOfTerms", "1. Αποδοχή Όρων"],
  ["reportPage.content.acceptanceOfTermsDesc", "Με την πρόσβαση ή τη χρήση των Υπηρεσιών μας, συμφωνείτε να δεσμεύεστε από αυτούς τους Όρους και την Πολιτική Απορρήτου μας. Εάν δεν συμφωνείτε με αυτούς τους Όρους, δεν μπορείτε να αποκτήσετε πρόσβαση ή να χρησιμοποιήσετε τις Υπηρεσίες μας."],
  ["reportPage.content.descriptionOfServices", "2. Περιγραφή Υπηρεσιών"],
  ["reportPage.content.descriptionOfServicesDesc", "Το AppNode παρέχει μια πλατφόρμα ανάπτυξης με τεχνητή νοημοσύνη που επιτρέπει στους χρήστες να δημιουργούν ιστοσελίδες, εφαρμογές και ψηφιακά προϊόντα. Οι Υπηρεσίες μας περιλαμβάνουν δημιουργία κώδικα, φιλοξενία, εργαλεία συνεργασίας και σχετικές λειτουργίες."],
  ["reportPage.content.userAccounts", "3. Λογαριασμοί Χρηστών"],
  ["reportPage.content.userAccountsDesc", "Για τη χρήση ορισμένων λειτουργιών, πρέπει να δημιουργήσετε λογαριασμό. Συμφωνείτε να:"],
  ["reportPage.content.userAccount1", "Παρέχετε ακριβείς και πλήρεις πληροφορίες"],
  ["reportPage.content.userAccount2", "Διατηρείτε την ασφάλεια των διαπιστευτηρίων του λογαριασμού σας"],
  ["reportPage.content.userAccount3", "Αποδέχεστε την ευθύνη για όλες τις δραστηριότητες στον λογαριασμό σας"],
  ["reportPage.content.userAccount4", "Μας ειδοποιείτε αμέσως για οποιαδήποτε μη εξουσιοδοτημένη χρήση"],
  ["reportPage.content.acceptableUse", "4. Αποδεκτή Χρήση"],
  ["reportPage.content.acceptableUseDesc", "Συμφωνείτε να μην χρησιμοποιείτε τις Υπηρεσίες μας για:"],
  ["reportPage.content.acceptableUse1", "Παραβίαση εφαρμοστέων νόμων ή κανονισμών"],
  ["reportPage.content.acceptableUse2", "Προσβολή δικαιωμάτων πνευματικής ιδιοκτησίας"],
  ["reportPage.content.acceptableUse3", "Διανομή κακόβουλου λογισμικού, spam ή επιβλαβούς περιεχομένου"],
  ["reportPage.content.acceptableUse4", "Παρενόχληση, απειλές ή βλάβη σε άλλους"],
  ["reportPage.content.acceptableUse5", "Απόπειρα μη εξουσιοδοτημένης πρόσβασης στα συστήματά μας"],
  ["reportPage.content.acceptableUse6", "Χρήση των Υπηρεσιών μας για οποιονδήποτε παράνομο ή μη εξουσιοδοτημένο σκοπό"],
  ["reportPage.content.intellectualProperty", "5. Πνευματική Ιδιοκτησία"],
  ["reportPage.content.intellectualPropertyDesc", "Διατηρείτε την ιδιοκτησία του περιεχομένου που δημιουργείτε χρησιμοποιώντας τις Υπηρεσίες μας. Χρησιμοποιώντας τις Υπηρεσίες μας, μας χορηγείτε μια περιορισμένη άδεια για φιλοξενία, εμφάνιση και διανομή του περιεχομένου σας, όπως απαιτείται για την παροχή των Υπηρεσιών."],
  ["reportPage.content.termination", "6. Τερματισμός"],
  ["reportPage.content.terminationDesc", "Διατηρούμε το δικαίωμα να αναστείλουμε ή να τερματίσουμε τον λογαριασμό σας για παραβιάσεις αυτών των Όρων ή για οποιονδήποτε άλλο λόγο κατά την κρίση μας. Μπορείτε επίσης να τερματίσετε τον λογαριασμό σας ανά πάσα στιγμή."],
  ["reportPage.content.disclaimers", "7. Αποποιήσεις Ευθύνης"],
  ["reportPage.content.disclaimersDesc", "ΟΙ ΥΠΗΡΕΣΙΕΣ ΜΑΣ ΠΑΡΕΧΟΝΤΑΙ «ΩΣ ΕΧΟΥΝ» ΧΩΡΙΣ ΕΓΓΥΗΣΕΙΣ ΟΠΟΙΟΥΔΗΠΟΤΕ ΕΙΔΟΥΣ, ΡΗΤΕΣ Ή ΣΙΩΠΗΡΕΣ. ΔΕΝ ΕΓΓΥΟΜΑΣΤΕ ΟΤΙ ΟΙ ΥΠΗΡΕΣΙΕΣ ΜΑΣ ΘΑ ΕΙΝΑΙ ΑΔΙΑΛΕΙΠΤΕΣ, ΑΣΦΑΛΕΙΣ Ή ΧΩΡΙΣ ΣΦΑΛΜΑΤΑ."],
  ["reportPage.content.termsContact", "8. Επικοινωνία"],
  ["reportPage.content.termsContactDesc", "Για ερωτήσεις σχετικά με αυτούς τους Όρους, επικοινωνήστε μαζί μας στο contact@appnode.ai"],

  // Privacy Policy
  ["reportPage.content.privacyLastUpdated", "Τελευταία ενημέρωση: Ιανουάριος 2025"],
  ["reportPage.content.privacyIntro", "Αυτή η Πολιτική Απορρήτου περιγράφει πώς το AppNode συλλέγει, χρησιμοποιεί και μοιράζεται πληροφορίες σχετικά με εσάς όταν χρησιμοποιείτε τις υπηρεσίες μας."],
  ["reportPage.content.infoWeCollect", "Πληροφορίες που Συλλέγουμε"],
  ["reportPage.content.infoCollect1", "Πληροφορίες λογαριασμού (email, όνομα, προφίλ)"],
  ["reportPage.content.infoCollect2", "Δεδομένα χρήσης (λειτουργίες που χρησιμοποιήθηκαν, έργα που δημιουργήθηκαν)"],
  ["reportPage.content.infoCollect3", "Πληροφορίες συσκευής (πρόγραμμα περιήγησης, λειτουργικό σύστημα, διεύθυνση IP)"],
  ["reportPage.content.infoCollect4", "Πληροφορίες πληρωμής (επεξεργάζονται από ασφαλείς παρόχους)"],
  ["reportPage.content.howWeUseInfo", "Πώς Χρησιμοποιούμε τις Πληροφορίες σας"],
  ["reportPage.content.useInfo1", "Παροχή και βελτίωση των υπηρεσιών μας"],
  ["reportPage.content.useInfo2", "Επεξεργασία συναλλαγών και αποστολή σχετικών πληροφοριών"],
  ["reportPage.content.useInfo3", "Αποστολή τεχνικών ειδοποιήσεων και μηνυμάτων υποστήριξης"],
  ["reportPage.content.useInfo4", "Απάντηση στα σχόλια και τις ερωτήσεις σας"],
  ["reportPage.content.privacyContact", "Επικοινωνία"],
  ["reportPage.content.privacyContactDesc", "Για ερωτήσεις σχετικά με το απόρρητο, επικοινωνήστε μαζί μας στο contact@appnode.ai"],

  // Platform Rules
  ["reportPage.content.platformRulesTitle", "Κανόνες Πλατφόρμας"],
  ["reportPage.content.platformRulesDesc", "Αυτοί οι κανόνες βοηθούν στη διατήρηση ενός ασφαλούς και παραγωγικού περιβάλλοντος για όλους τους χρήστες του AppNode."],
  ["reportPage.content.prohibitedContent", "Απαγορευμένο Περιεχόμενο"],
  ["reportPage.content.prohibited1", "Κακόβουλο λογισμικό, ιοί ή επιβλαβής κώδικας"],
  ["reportPage.content.prohibited2", "Ιστοσελίδες phishing ή απάτης"],
  ["reportPage.content.prohibited3", "Περιεχόμενο που προωθεί τη βία ή το μίσος"],
  ["reportPage.content.prohibited4", "Παράνομα αγαθά ή υπηρεσίες"],
  ["reportPage.content.prohibited5", "Υλικό που παραβιάζει πνευματικά δικαιώματα"],
  ["reportPage.content.accountRules", "Κανόνες Λογαριασμού"],
  ["reportPage.content.accountRule1", "Ένας λογαριασμός ανά άτομο"],
  ["reportPage.content.accountRule2", "Απαγόρευση κοινοχρησίας διαπιστευτηρίων λογαριασμού"],
  ["reportPage.content.accountRule3", "Απαγόρευση πλαστοπροσωπίας"],
  ["reportPage.content.accountRule4", "Απαγόρευση αυτοματοποιημένης δημιουργίας λογαριασμών"],

  // Security
  ["reportPage.content.securityOverviewTitle", "Ασφάλεια στο AppNode"],
  ["reportPage.content.securityOverviewDesc", "Η ασφάλεια είναι θεμελιώδης σε ό,τι χτίζουμε. Εφαρμόζουμε κορυφαίες πρακτικές του κλάδου για την προστασία των δεδομένων σας, των έργων σας και των χρηστών σας."],
  ["reportPage.content.infrastructureSecurity", "Ασφάλεια Υποδομής"],
  ["reportPage.content.encryptionAtRest", "Κρυπτογράφηση σε Αδράνεια"],
  ["reportPage.content.encryptionAtRestDesc", "Όλα τα δεδομένα κρυπτογραφημένα με AES-256"],
  ["reportPage.content.encryptionInTransit", "Κρυπτογράφηση κατά τη Μεταφορά"],
  ["reportPage.content.encryptionInTransitDesc", "TLS 1.3 για όλες τις συνδέσεις"],
  ["reportPage.content.isolatedEnvironments", "Απομονωμένα Περιβάλλοντα"],
  ["reportPage.content.isolatedEnvironmentsDesc", "Απομονωμένη εκτέλεση για όλα τα έργα"],
  ["reportPage.content.ddosProtection", "Προστασία DDoS"],
  ["reportPage.content.ddosProtectionDesc", "Αντιμετώπιση επιθέσεων επιχειρηματικού επιπέδου"],
  ["reportPage.content.applicationSecurity", "Ασφάλεια Εφαρμογών"],
  ["reportPage.content.appSecurity1", "Τακτικές δοκιμές διείσδυσης από τρίτες εταιρείες"],
  ["reportPage.content.appSecurity2", "Αυτοματοποιημένη σάρωση ευπαθειών στο CI/CD pipeline"],
  ["reportPage.content.appSecurity3", "Πρακτικές ασφαλούς κύκλου ζωής ανάπτυξης (SDL)"],
  ["reportPage.content.appSecurity4", "Απαιτήσεις αξιολόγησης κώδικα για όλες τις αλλαγές"],
  ["reportPage.content.appSecurity5", "Πρόγραμμα bug bounty για υπεύθυνη αποκάλυψη"],
  ["reportPage.content.accountSecurity", "Ασφάλεια Λογαριασμού"],
  ["reportPage.content.accountSec1", "Υποστήριξη ελέγχου ταυτότητας πολλαπλών παραγόντων (MFA)"],
  ["reportPage.content.accountSec2", "Διαχείριση συνεδριών και παρακολούθηση συσκευών"],
  ["reportPage.content.accountSec3", "Ανίχνευση ύποπτης δραστηριότητας και ειδοποιήσεις"],
  ["reportPage.content.accountSec4", "Ασφαλείς απαιτήσεις κωδικού πρόσβασης με κατακερματισμό bcrypt"],
  ["reportPage.content.compliance", "Συμμόρφωση"],
  ["reportPage.content.complianceDesc", "Διατηρούμε συμμόρφωση με τα πρότυπα και τους κανονισμούς του κλάδου:"],
  ["reportPage.content.reportVulnerability", "Αναφορά Ευπάθειας"],
  ["reportPage.content.reportVulnerabilityDesc", "Βρήκατε πρόβλημα ασφαλείας; Αναφέρετέ το υπεύθυνα στο contact@appnode.ai. Εκτιμούμε τη βοήθειά σας στη διατήρηση της ασφάλειας του AppNode και προσφέρουμε ανταμοιβές για έγκυρες αναφορές."],

  // Data Protection
  ["reportPage.content.dataProtectionTitle", "Προστασία Δεδομένων"],
  ["reportPage.content.dataProtectionDesc", "Λαμβάνουμε σοβαρά υπόψη την προστασία δεδομένων. Ο κώδικάς σας, τα έργα σας και οι προσωπικές σας πληροφορίες προστατεύονται με πολλαπλά επίπεδα προστασίας."],
  ["reportPage.content.yourDataRights", "Τα Δικαιώματα Δεδομένων σας"],
  ["reportPage.content.dataRight1", "Πρόσβαση στα προσωπικά σας δεδομένα"],
  ["reportPage.content.dataRight2", "Εξαγωγή των έργων σας ανά πάσα στιγμή"],
  ["reportPage.content.dataRight3", "Αίτημα διαγραφής του λογαριασμού σας"],
  ["reportPage.content.dataRight4", "Εξαίρεση από επικοινωνίες μάρκετινγκ"],
  ["reportPage.content.dataRetention", "Διατήρηση Δεδομένων"],
  ["reportPage.content.dataRetentionDesc", "Διατηρούμε τα δεδομένα σας μόνο όσο είναι απαραίτητο για την παροχή των υπηρεσιών μας. Όταν διαγράφετε τον λογαριασμό σας, τα δεδομένα σας αφαιρούνται οριστικά εντός 30 ημερών."],
];

let count = 0;
for (const [path, val] of entries) {
  set(data, path, val);
  count++;
}

fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
console.log(`Set ${count} Greek translations for reportPage entries.`);
