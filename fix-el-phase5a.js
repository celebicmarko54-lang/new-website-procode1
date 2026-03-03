const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'translations', 'el.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Helper: set nested value using dot notation with array bracket support
// e.g. "learnPage.tutorials.gettingStarted.steps[0]" => data.learnPage.tutorials.gettingStarted.steps[0]
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

let count = 0;
function t(key, value) {
  set(data, key, value);
  count++;
}

// ============================================================
// learnPage — 136 entries
// ============================================================

// Top-level
t('learnPage.badge', 'Δωρεάν Εκπαιδευτική Πλατφόρμα');
t('learnPage.titleStart', 'Μάθε να Δημιουργείς με');
t('learnPage.titleHighlight', 'AppNode');
t('learnPage.subtitle', 'Δωρεάν μαθήματα, οδηγοί και πρακτικά έργα για να σε βοηθήσουν να κατακτήσεις την ανάπτυξη εφαρμογών με AI. Από αρχάριο σε ειδικό με τον δικό σου ρυθμό.');
t('learnPage.startLearningFree', 'Ξεκίνα να Μαθαίνεις Δωρεάν');
t('learnPage.browseCourses', 'Περιήγηση στα Μαθήματα');

// Stats
t('learnPage.stats.freeCourses', 'Δωρεάν Μαθήματα');
t('learnPage.stats.students', 'Μαθητές');
t('learnPage.stats.averageRating', 'Μέση Βαθμολογία');
t('learnPage.stats.communitySupport', 'Υποστήριξη Κοινότητας');

// Learning paths
t('learnPage.chooseLearningPath', 'Επίλεξε τη Διαδρομή Μάθησής σου');
t('learnPage.chooseLearningPathDesc', 'Επιμελημένα μαθήματα σχεδιασμένα για τους συγκεκριμένους στόχους και το επίπεδο δεξιοτήτων σου.');
t('learnPage.popularCourses', 'Δημοφιλή Μαθήματα');
t('learnPage.popularCoursesDesc', 'Ξεκίνα με τα πιο δημοφιλή μαθήματά μας, επιλεγμένα από την κοινότητά μας.');
t('learnPage.startCourse', 'Έναρξη Μαθήματος');
t('learnPage.viewAllCourses', 'Προβολή Όλων των Μαθημάτων');

// Levels
t('learnPage.levels.beginner', 'Αρχάριο');
t('learnPage.levels.intermediate', 'Μεσαίο');
t('learnPage.levels.advanced', 'Προχωρημένο');
t('learnPage.lessons', 'μαθήματα');
t('learnPage.min', 'λεπτά');

// Course: Getting Started
t('learnPage.courses.gettingStarted.title', 'Ξεκινώντας με το AppNode');
t('learnPage.courses.gettingStarted.description', 'Μάθε τα βασικά της δημιουργίας εφαρμογών με AI. Ιδανικό για απόλυτους αρχάριους.');

// Course: Building Dashboard
t('learnPage.courses.buildingDashboard.title', 'Δημιουργία του Πρώτου σου Dashboard');
t('learnPage.courses.buildingDashboard.description', 'Δημιούργησε ένα πλήρες dashboard αναλυτικών δεδομένων από το μηδέν με δεδομένα σε πραγματικό χρόνο.');

// Course: Advanced Prompting
t('learnPage.courses.advancedPrompting.title', 'Προχωρημένες Τεχνικές Prompting');
t('learnPage.courses.advancedPrompting.description', 'Κατάκτησε την τέχνη της συγγραφής αποτελεσματικών prompts που παράγουν ακριβώς αυτό που χρειάζεσαι.');

// Course: E-commerce
t('learnPage.courses.ecommerce.title', 'Masterclass Ηλεκτρονικού Καταστήματος');
t('learnPage.courses.ecommerce.description', 'Δημιούργησε ένα πλήρως λειτουργικό ηλεκτρονικό κατάστημα με πληρωμές, απόθεμα και παραγγελίες.');

// Course: Custom Components
t('learnPage.courses.customComponents.title', 'Προσαρμοσμένα Components & Styling');
t('learnPage.courses.customComponents.description', 'Δημιούργησε επαναχρησιμοποιήσιμα components με προσαρμοσμένα θέματα που ταιριάζουν στη μάρκα σου.');

// Course: Deploying
t('learnPage.courses.deploying.title', 'Ανάπτυξη σε Παραγωγή');
t('learnPage.courses.deploying.description', 'Κυκλοφόρησε την εφαρμογή σου στον κόσμο με προσαρμοσμένα domains και πιστοποιητικά SSL.');

// Course: Mobile-First
t('learnPage.courses.mobileFirst.title', 'Δημιουργία Mobile-First Εφαρμογών');
t('learnPage.courses.mobileFirst.description', 'Σχεδίασε responsive εφαρμογές που λειτουργούν τέλεια σε οποιαδήποτε συσκευή.');

// Course: API Integration
t('learnPage.courses.apiIntegration.title', 'Βασικά API Integration');
t('learnPage.courses.apiIntegration.description', 'Σύνδεσε την εφαρμογή σου με εξωτερικές υπηρεσίες, βάσεις δεδομένων και APIs τρίτων.');

// Course: Auth & Security
t('learnPage.courses.authSecurity.title', 'Αυθεντικοποίηση & Ασφάλεια');
t('learnPage.courses.authSecurity.description', 'Υλοποίησε ασφαλή αυθεντικοποίηση χρηστών και προστάτεψε την εφαρμογή σου.');

// Modal
t('learnPage.modal.overview', 'Επισκόπηση');
t('learnPage.modal.howToDoIt', 'Πώς να το κάνεις');
t('learnPage.modal.proTips', 'Επαγγελματικές Συμβουλές');
t('learnPage.modal.gotIt', 'Κατάλαβα!');

// ============================================================
// Tutorials: Getting Started
// ============================================================
t('learnPage.tutorials.gettingStarted.overview', 'Ξεκίνα με το AppNode μαθαίνοντας τα βασικά της ανάπτυξης εφαρμογών με AI.');
t('learnPage.tutorials.gettingStarted.steps[0]', 'Εγγράψου για δωρεάν λογαριασμό AppNode στο appnode.ai');
t('learnPage.tutorials.gettingStarted.steps[1]', 'Πλοηγήσου στον πίνακα ελέγχου και κάνε κλικ στο «Νέο Έργο»');
t('learnPage.tutorials.gettingStarted.steps[2]', 'Περίγραψε την ιδέα της εφαρμογής σου στη διεπαφή συνομιλίας');
t('learnPage.tutorials.gettingStarted.steps[3]', 'Εξέτασε τον παραγόμενο κώδικα και κάνε προσαρμογές');
t('learnPage.tutorials.gettingStarted.steps[4]', 'Ανέπτυξε την εφαρμογή σου με ένα κλικ');
t('learnPage.tutorials.gettingStarted.tips[0]', 'Να είσαι συγκεκριμένος όταν περιγράφεις τις απαιτήσεις της εφαρμογής σου');
t('learnPage.tutorials.gettingStarted.tips[1]', 'Ξεκίνα με απλά έργα για να μάθεις τη ροή εργασίας');
t('learnPage.tutorials.gettingStarted.tips[2]', 'Χρησιμοποίησε τη λειτουργία προεπισκόπησης για να δοκιμάσεις αλλαγές αμέσως');

// ============================================================
// Tutorials: Building Dashboard
// ============================================================
t('learnPage.tutorials.buildingDashboard.overview', 'Μάθε να δημιουργείς επαγγελματικά dashboard αναλυτικών δεδομένων με γραφήματα, μετρικές και δεδομένα σε πραγματικό χρόνο.');
t('learnPage.tutorials.buildingDashboard.steps[0]', 'Ξεκίνα ένα νέο έργο και περίγραψε τις ανάγκες του dashboard σου');
t('learnPage.tutorials.buildingDashboard.steps[1]', 'Πρόσθεσε components γραφημάτων (ράβδων, γραμμών, πίτας)');
t('learnPage.tutorials.buildingDashboard.steps[2]', 'Σύνδεσε με την πηγή δεδομένων σου ή χρησιμοποίησε δείγματα δεδομένων');
t('learnPage.tutorials.buildingDashboard.steps[3]', 'Προσάρμοσε τα χρώματα και τις διατάξεις ώστε να ταιριάζουν στη μάρκα σου');
t('learnPage.tutorials.buildingDashboard.steps[4]', 'Πρόσθεσε διαδραστικά φίλτρα και επιλογείς ημερομηνιών');
t('learnPage.tutorials.buildingDashboard.steps[5]', 'Δοκίμασε τη responsive συμπεριφορά σε διαφορετικά μεγέθη οθόνης');
t('learnPage.tutorials.buildingDashboard.steps[6]', 'Ανέπτυξε και μοιράσου με την ομάδα σου');
t('learnPage.tutorials.buildingDashboard.tips[0]', 'Ομαδοποίησε τις σχετικές μετρικές μαζί');
t('learnPage.tutorials.buildingDashboard.tips[1]', 'Χρησιμοποίησε συνεπή χρωματική κωδικοποίηση για τις κατηγορίες δεδομένων');
t('learnPage.tutorials.buildingDashboard.tips[2]', 'Κράτησε τις πιο σημαντικές μετρικές στην κορυφή');

// ============================================================
// Tutorials: Advanced Prompting
// ============================================================
t('learnPage.tutorials.advancedPrompting.overview', 'Κατάκτησε τη μηχανική prompts για να πάρεις καλύτερα αποτελέσματα από το AppNode AI.');
t('learnPage.tutorials.advancedPrompting.steps[0]', 'Κατανόησε την ανατομία ενός καλού prompt');
t('learnPage.tutorials.advancedPrompting.steps[1]', 'Χρησιμοποίησε συγκεκριμένες τεχνικές απαιτήσεις στα prompts σου');
t('learnPage.tutorials.advancedPrompting.steps[2]', 'Μάθε να επαναλαμβάνεις και να βελτιώνεις με βάση την έξοδο');
t('learnPage.tutorials.advancedPrompting.steps[3]', 'Συνδύασε πολλαπλά χαρακτηριστικά σε ένα μόνο prompt');
t('learnPage.tutorials.advancedPrompting.steps[4]', 'Χρησιμοποίησε παραδείγματα αναφοράς για να καθοδηγήσεις το AI');
t('learnPage.tutorials.advancedPrompting.tips[0]', 'Πάντα να καθορίζεις το tech stack που θέλεις');
t('learnPage.tutorials.advancedPrompting.tips[1]', 'Συμπερίλαβε απαιτήσεις προσβασιμότητας');
t('learnPage.tutorials.advancedPrompting.tips[2]', 'Ανάφερε τις ανάγκες responsive σχεδιασμού εξαρχής');

// ============================================================
// Tutorials: E-commerce
// ============================================================
t('learnPage.tutorials.ecommerce.overview', 'Δημιούργησε μια πλήρη λύση ηλεκτρονικού εμπορίου με κατάλογο προϊόντων, καλάθι και ολοκλήρωση αγοράς.');
t('learnPage.tutorials.ecommerce.steps[0]', 'Ρύθμισε τον κατάλογο προϊόντων με κατηγορίες');
t('learnPage.tutorials.ecommerce.steps[1]', 'Δημιούργησε τη λειτουργικότητα του καλαθιού αγορών');
t('learnPage.tutorials.ecommerce.steps[2]', 'Ενσωμάτωσε το Stripe για πληρωμές');
t('learnPage.tutorials.ecommerce.steps[3]', 'Δημιούργησε σύστημα διαχείρισης παραγγελιών');
t('learnPage.tutorials.ecommerce.steps[4]', 'Πρόσθεσε παρακολούθηση αποθέματος');
t('learnPage.tutorials.ecommerce.steps[5]', 'Ρύθμισε ειδοποιήσεις μέσω email');
t('learnPage.tutorials.ecommerce.steps[6]', 'Υλοποίησε λογαριασμούς χρηστών και ιστορικό παραγγελιών');
t('learnPage.tutorials.ecommerce.tips[0]', 'Ξεκίνα πρώτα με έναν απλό κατάλογο προϊόντων');
t('learnPage.tutorials.ecommerce.tips[1]', 'Δοκίμασε τη ροή ολοκλήρωσης αγοράς διεξοδικά');
t('learnPage.tutorials.ecommerce.tips[2]', 'Χρησιμοποίησε δοκιμαστικά στοιχεία πληρωμής κατά την ανάπτυξη');

// ============================================================
// Tutorials: Custom Components
// ============================================================
t('learnPage.tutorials.customComponents.overview', 'Μάθε να δημιουργείς συνεπή, επαναχρησιμοποιήσιμα components με προσαρμοσμένο styling.');
t('learnPage.tutorials.customComponents.steps[0]', 'Όρισε τα χρώματα και την τυπογραφία της μάρκας σου');
t('learnPage.tutorials.customComponents.steps[1]', 'Δημιούργησε μια δομή βιβλιοθήκης components');
t('learnPage.tutorials.customComponents.steps[2]', 'Δημιούργησε επαναχρησιμοποιήσιμα components κουμπιών, πεδίων εισαγωγής και καρτών');
t('learnPage.tutorials.customComponents.steps[3]', 'Υλοποίησε υποστήριξη dark mode');
t('learnPage.tutorials.customComponents.steps[4]', 'Πρόσθεσε κινήσεις και μεταβάσεις');
t('learnPage.tutorials.customComponents.steps[5]', 'Τεκμηρίωσε τα components σου');
t('learnPage.tutorials.customComponents.tips[0]', 'Χρησιμοποίησε μεταβλητές CSS για θεματοποίηση');
t('learnPage.tutorials.customComponents.tips[1]', 'Κράτησε τα components μικρά και εστιασμένα');
t('learnPage.tutorials.customComponents.tips[2]', 'Δοκίμασε τα components μεμονωμένα');

// ============================================================
// Tutorials: Deploying
// ============================================================
t('learnPage.tutorials.deploying.overview', 'Μάθε να αναπτύσσεις τις εφαρμογές σου σε παραγωγή με σιγουριά.');
t('learnPage.tutorials.deploying.steps[0]', 'Προετοίμασε την εφαρμογή σου για παραγωγή');
t('learnPage.tutorials.deploying.steps[1]', 'Επίλεξε πάροχο φιλοξενίας');
t('learnPage.tutorials.deploying.steps[2]', 'Ρύθμισε τις μεταβλητές περιβάλλοντος');
t('learnPage.tutorials.deploying.steps[3]', 'Ρύθμισε προσαρμοσμένα domains');
t('learnPage.tutorials.deploying.steps[4]', 'Ενεργοποίησε πιστοποιητικά SSL');
t('learnPage.tutorials.deploying.tips[0]', 'Πάντα να δοκιμάζεις πρώτα σε περιβάλλον staging');
t('learnPage.tutorials.deploying.tips[1]', 'Ρύθμισε παρακολούθηση και ειδοποιήσεις');
t('learnPage.tutorials.deploying.tips[2]', 'Κράτησε τις εξαρτήσεις σου ενημερωμένες');

// ============================================================
// Tutorials: Mobile-First
// ============================================================
t('learnPage.tutorials.mobileFirst.overview', 'Δημιούργησε responsive, mobile-first εφαρμογές που λειτουργούν σε όλες τις συσκευές.');
t('learnPage.tutorials.mobileFirst.steps[0]', 'Κατανόησε τις αρχές σχεδιασμού mobile-first');
t('learnPage.tutorials.mobileFirst.steps[1]', 'Χρησιμοποίησε responsive breakpoints αποτελεσματικά');
t('learnPage.tutorials.mobileFirst.steps[2]', 'Βελτιστοποίησε τις αλληλεπιδράσεις αφής');
t('learnPage.tutorials.mobileFirst.steps[3]', 'Χειρίσου τους διαφορετικούς προσανατολισμούς οθόνης');
t('learnPage.tutorials.mobileFirst.steps[4]', 'Δοκίμασε σε πραγματικές συσκευές');
t('learnPage.tutorials.mobileFirst.steps[5]', 'Βελτιστοποίησε την απόδοση για δίκτυα κινητών');
t('learnPage.tutorials.mobileFirst.tips[0]', 'Σχεδίασε πρώτα για τη μικρότερη οθόνη');
t('learnPage.tutorials.mobileFirst.tips[1]', 'Χρησιμοποίησε σχετικές μονάδες (rem, %) αντί για pixels');
t('learnPage.tutorials.mobileFirst.tips[2]', 'Δοκίμασε με περιορισμένες συνθήκες δικτύου');

// ============================================================
// Tutorials: API Integration
// ============================================================
t('learnPage.tutorials.apiIntegration.overview', 'Μάθε να ενσωματώνεις εξωτερικά APIs και υπηρεσίες στις εφαρμογές σου.');
t('learnPage.tutorials.apiIntegration.steps[0]', 'Κατανόησε τα βασικά του REST API');
t('learnPage.tutorials.apiIntegration.steps[1]', 'Χειρίσου την αυθεντικοποίηση API (API keys, OAuth)');
t('learnPage.tutorials.apiIntegration.steps[2]', 'Πραγματοποίησε αιτήματα GET, POST, PUT, DELETE');
t('learnPage.tutorials.apiIntegration.steps[3]', 'Χειρίσου σφάλματα και ακραίες περιπτώσεις');
t('learnPage.tutorials.apiIntegration.steps[4]', 'Υλοποίησε περιορισμό ρυθμού αιτημάτων');
t('learnPage.tutorials.apiIntegration.steps[5]', 'Αποθήκευσε προσωρινά τις απαντήσεις API για απόδοση');
t('learnPage.tutorials.apiIntegration.tips[0]', 'Πάντα να χειρίζεσαι τα σφάλματα API με χάρη');
t('learnPage.tutorials.apiIntegration.tips[1]', 'Χρησιμοποίησε μεταβλητές περιβάλλοντος για τα API keys');
t('learnPage.tutorials.apiIntegration.tips[2]', 'Υλοποίησε λογική επανάληψης για αποτυχημένα αιτήματα');

// ============================================================
// Tutorials: Auth & Security
// ============================================================
t('learnPage.tutorials.authSecurity.overview', 'Υλοποίησε ασφαλή αυθεντικοποίηση και προστάτεψε την εφαρμογή σου από απειλές.');
t('learnPage.tutorials.authSecurity.steps[0]', 'Ρύθμισε εγγραφή και σύνδεση χρηστών');
t('learnPage.tutorials.authSecurity.steps[1]', 'Υλοποίησε κατακερματισμό κωδικών πρόσβασης');
t('learnPage.tutorials.authSecurity.steps[2]', 'Πρόσθεσε αυθεντικοποίηση δύο παραγόντων');
t('learnPage.tutorials.authSecurity.steps[3]', 'Χειρίσου τη διαχείριση συνεδριών');
t('learnPage.tutorials.authSecurity.steps[4]', 'Προστατέψου από συνήθεις επιθέσεις (XSS, CSRF)');
t('learnPage.tutorials.authSecurity.steps[5]', 'Ρύθμισε έλεγχο πρόσβασης βάσει ρόλων');
t('learnPage.tutorials.authSecurity.tips[0]', 'Ποτέ μην αποθηκεύεις κωδικούς πρόσβασης σε απλό κείμενο');
t('learnPage.tutorials.authSecurity.tips[1]', 'Χρησιμοποίησε HTTPS παντού');
t('learnPage.tutorials.authSecurity.tips[2]', 'Έλεγχε τακτικά τις πρακτικές ασφαλείας σου');

// ============================================================
// CTA section
// ============================================================
t('learnPage.cta.title', 'Ξεκίνα το Ταξίδι Μάθησής σου Σήμερα');
t('learnPage.cta.subtitle', 'Γίνε μέλος μιας κοινότητας πάνω από 100.000 μαθητών που μεταμόρφωσαν τις δεξιότητές τους με το AppNode. Όλα τα μαθήματα είναι εντελώς δωρεάν.');
t('learnPage.cta.createFreeAccount', 'Δημιουργία Δωρεάν Λογαριασμού');
t('learnPage.cta.browseGuides', 'Περιήγηση στους Οδηγούς');

// Write back
fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
console.log(`Done! Translated ${count} learnPage entries in el.json`);
