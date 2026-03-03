const fs = require('fs');
const el = JSON.parse(fs.readFileSync('src/translations/el.json', 'utf8'));

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
  // === learnPublishPage (40) ===
  "learnPublishPage.badge": "Δημοσίευση",
  "learnPublishPage.title": "Δημοσιεύστε στο Διαδίκτυο",
  "learnPublishPage.subtitle": "Μεταφέρετε τα έργα σας στον κόσμο - από ανάπτυξη σε παραγωγή",
  "learnPublishPage.steps.title": "Βήματα Ανάπτυξης",
  "learnPublishPage.steps.subtitle": "Ακολουθήστε αυτά τα βήματα για να δημοσιεύσετε την εφαρμογή σας",
  "learnPublishPage.steps.items[0].title": "Κατασκευή και Δοκιμή",
  "learnPublishPage.steps.items[0].description": "Βεβαιωθείτε ότι η εφαρμογή σας λειτουργεί τοπικά μπρος από τη δημοσίευση.",
  "learnPublishPage.steps.items[1].title": "Σύνδεση Domain",
  "learnPublishPage.steps.items[1].description": "Αντιστοιχίστε ένα προσαρμοσμένο domain ή χρησιμοποιήστε ένα δωρεάν υποdomain .appnode.app.",
  "learnPublishPage.steps.items[2].title": "Διαμόρφωση Ρυθμίσεων",
  "learnPublishPage.steps.items[2].description": "Ρυθμίστε μεταβλητές περιβάλλοντος, SSL και ρυθμίσεις κατασκευής.",
  "learnPublishPage.steps.items[3].title": "Ανάπτυξη",
  "learnPublishPage.steps.items[3].description": "Πατήστε deploy και η εφαρμογή σας θα είναι ζωντανή σε δευτερόλεπτα.",
  "learnPublishPage.features.title": "Δυνατότητες Ανάπτυξης",
  "learnPublishPage.features.subtitle": "Όλα όσα χρειάζεστε για αναπτύξεις παγκόσμιας κλάσης",
  "learnPublishPage.features.items[0].title": "Auto-Scaling",
  "learnPublishPage.features.items[0].description": "Η εφαρμογή σας κλιμακώνεται αυτόματα με βάση την κίνηση.",
  "learnPublishPage.features.items[1].title": "Παγκόσμιο CDN",
  "learnPublishPage.features.items[1].description": "Περιεχόμενο που σερβίρεται από edge locations κοντά στους χρήστες σας.",
  "learnPublishPage.features.items[2].title": "SSL/HTTPS",
  "learnPublishPage.features.items[2].description": "Δωρεάν πιστοποιητικά SSL για κάθε domain αυτόματα.",
  "learnPublishPage.features.items[3].title": "Instant Rollbacks",
  "learnPublishPage.features.items[3].description": "Επαναφέρετε σε οποιαδήποτε προηγούμενη ανάπτυξη με ένα κλικ.",
  "learnPublishPage.features.items[4].title": "Προεπισκοπήσεις Ανάπτυξης",
  "learnPublishPage.features.items[4].description": "Κάθε κλάδος λαμβάνει τη δική του URL προεπισκόπησης.",
  "learnPublishPage.features.items[5].title": "Αναλυτικά",
  "learnPublishPage.features.items[5].description": "Παρακολουθήστε απόδοση, κίνηση και σφάλματα σε πραγματικό χρόνο.",
  "learnPublishPage.tips.title": "Συμβουλές Ανάπτυξης",
  "learnPublishPage.tips.items[0].title": "Χρησιμοποιήστε Μεταβλητές Περιβάλλοντος",
  "learnPublishPage.tips.items[0].description": "Μην κωδικοποιείτε μυστικά - χρησιμοποιήστε τον ενσωματωμένο διαχειριστή μυστικών.",
  "learnPublishPage.tips.items[1].title": "Βελτιστοποιήστε Εικόνες",
  "learnPublishPage.tips.items[1].description": "Χρησιμοποιήστε μορφές επόμενης γενιάς και lazy loading για ταχύτερη φόρτωση.",
  "learnPublishPage.tips.items[2].title": "Ενεργοποιήστε Caching",
  "learnPublishPage.tips.items[2].description": "Ρυθμίστε cache headers για να μειώσετε τους χρόνους απόκρισης.",
  "learnPublishPage.tips.items[3].title": "Παρακολουθήστε την Απόδοση",
  "learnPublishPage.tips.items[3].description": "Χρησιμοποιήστε ενσωματωμένα αναλυτικά για να εντοπίσετε σημεία συμφόρησης.",
  "learnPublishPage.cta.title": "Έτοιμοι να Δημοσιεύσετε;",
  "learnPublishPage.cta.subtitle": "Αναπτύξτε την πρώτη σας εφαρμογή σε δευτερόλεπτα. Δεν χρειάζεται πιστωτική κάρτα.",
  "learnPublishPage.cta.startButton": "Ξεκινήστε Δωρεάν",
  "learnPublishPage.cta.docsButton": "Διαβάστε τα Docs",

  // === securityReportPage (37) ===
  "securityReportPage.badge": "Ασφάλεια",
  "securityReportPage.title": "Αναφορά Ευπάθειας Ασφαλείας",
  "securityReportPage.subtitle": "Βοηθήστε μας να κρατήσουμε το AppNode ασφαλές αναφέροντας ευπάθειες ασφαλείας",
  "securityReportPage.bugBounty": "Πρόγραμμα Bug Bounty: Κερδίστε έως $10.000 για κρίσιμες ευπάθειες",
  "securityReportPage.severityLabel": "Σοβαρότητα",
  "securityReportPage.severityCritical": "Κρίσιμη",
  "securityReportPage.severityHigh": "Υψηλή",
  "securityReportPage.severityMedium": "Μέτρια",
  "securityReportPage.severityLow": "Χαμηλή",
  "securityReportPage.descriptionLabel": "Περιγραφή Ευπάθειας",
  "securityReportPage.descriptionHint": "Παρέχετε λεπτομερή περιγραφή της ευπάθειας",
  "securityReportPage.descriptionPlaceholder": "Περιγράψτε την ευπάθεια...",
  "securityReportPage.stepsLabel": "Βήματα Αναπαραγωγής",
  "securityReportPage.stepsHint": "Παρέχετε αναλυτικά βήματα αναπαραγωγής",
  "securityReportPage.stepsPlaceholder": "1. Μεταβείτε σε...\n2. Κάντε κλικ σε...\n3. Παρατηρήστε ότι...",
  "securityReportPage.emailLabel": "Email Επικοινωνίας",
  "securityReportPage.emailHint": "Θα επικοινωνήσουμε μαζί σας μέσω αυτού του email",
  "securityReportPage.emailPlaceholder": "security@example.com",
  "securityReportPage.submitButton": "Υποβολή Αναφοράς",
  "securityReportPage.submitted.title": "Η Αναφορά Υποβλήθηκε",
  "securityReportPage.submitted.message": "Ευχαριστούμε για την αναφορά. Η ομάδα ασφαλείας μας θα εξετάσει την αναφορά σας εντός 24 ωρών.",
  "securityReportPage.submitted.another": "Υποβολή Νέας Αναφοράς",
  "securityReportPage.guidelines.title": "Κατευθυντήριες Γραμμές",
  "securityReportPage.guidelines.items[0]": "Μην εκμεταλλεύεστε ευπάθειες πέρα από τη δοκιμή proof-of-concept",
  "securityReportPage.guidelines.items[1]": "Μην αποκτάτε πρόσβαση σε δεδομένα άλλων χρηστών",
  "securityReportPage.guidelines.items[2]": "Μην χρησιμοποιείτε αυτόματα εργαλεία σάρωσης στο production",
  "securityReportPage.guidelines.items[3]": "Παρέχετε λεπτομερή βήματα αναπαραγωγής",
  "securityReportPage.guidelines.items[4]": "Δώστε μας εύλογο χρόνο για να ανταποκριθούμε",
  "securityReportPage.contactNote": "Για επείγοντα ζητήματα ασφαλείας, επικοινωνήστε στο security@appnode.ai",

  // === useCasesMobileApps (7) ===
  "useCasesMobileApps.keyFeaturesList[0]": "Εγγενή στοιχεία UI κινητών",
  "useCasesMobileApps.keyFeaturesList[1]": "Push notifications",
  "useCasesMobileApps.keyFeaturesList[2]": "Πρόσβαση API συσκευής",
  "useCasesMobileApps.keyFeaturesList[3]": "Λειτουργία εκτός σύνδεσης",
  "useCasesMobileApps.keyFeaturesList[4]": "Κατασκευή App store",
  "useCasesMobileApps.keyFeaturesList[5]": "Δοκιμαστικό πλαίσιο",
  "useCasesMobileApps.keyFeaturesList[6]": "Εργαλεία απόδοσης",

  // === useCasesRapidPrototyping (20) ===
  "useCasesRapidPrototyping.traditionalSteps[0]": "Σχεδίαση wireframes",
  "useCasesRapidPrototyping.traditionalSteps[1]": "Γράψτε κώδικα frontend",
  "useCasesRapidPrototyping.traditionalSteps[2]": "Κατασκευή backend API",
  "useCasesRapidPrototyping.traditionalSteps[3]": "Ρύθμιση βάσης δεδομένων",
  "useCasesRapidPrototyping.traditionalSteps[4]": "Συλλογή σχολίων",
  "useCasesRapidPrototyping.traditionalSteps[5]": "Επανασχεδίαση & επανάληψη",
  "useCasesRapidPrototyping.traditionalSteps[6]": "Εβδομάδες ανάπτυξης",
  "useCasesRapidPrototyping.traditionalSteps[7]": "Αποτέλεσμα: Αργή & δαπανηρή",
  "useCasesRapidPrototyping.appnodeSteps[0]": "Περιγράψτε την ιδέα σας",
  "useCasesRapidPrototyping.appnodeSteps[1]": "Το AI δημιουργεί πρωτότυπο",
  "useCasesRapidPrototyping.appnodeSteps[2]": "Τελειοποιήστε διαδραστικά",
  "useCasesRapidPrototyping.appnodeSteps[3]": "Αμέσως σε παραγωγή",
  "useCasesRapidPrototyping.appnodeSteps[4]": "Σε λεπτά, όχι εβδομάδες",
  "useCasesRapidPrototyping.appnodeSteps[5]": "Αποτέλεσμα: Γρήγορο & αποδοτικό",

  // === useCases.rapidPrototyping benefitsList ===
  "useCases.rapidPrototyping.benefitsList[0]": "Δημιουργία πρωτοτύπων σε λεπτά",
  "useCases.rapidPrototyping.benefitsList[1]": "Ζωντανές αλλαγές σε πραγματικό χρόνο",
  "useCases.rapidPrototyping.benefitsList[2]": "Ενσωματωμένη αξιολόγηση χρηστών",
  "useCases.rapidPrototyping.benefitsList[3]": "Εξαγωγή σε κώδικα παραγωγής",
  "useCases.rapidPrototyping.benefitsList[4]": "Ανάπτυξη με ένα κλικ",
  "useCases.rapidPrototyping.benefitsList[5]": "Αυτόματα responsive layouts",
  "useCases.rapidPrototyping.benefitsList[6]": "Ενσωμάτωση με υπάρχοντα APIs",
  "useCases.rapidPrototyping.benefitsList[7]": "Ιστορικό εκδόσεων & rollback",
};

for (const [path, val] of Object.entries(t)) {
  set(el, path, val);
}

fs.writeFileSync('src/translations/el.json', JSON.stringify(el, null, 2), 'utf8');
console.log('Phase 1d: learnPublish, securityReport, useCases. Done.');
