const fs = require('fs');

const file = 'src/translations/el.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

// Helper to set nested paths including array notation like [0]
function set(obj, path, value) {
  const parts = path.replace(/\[(\d+)\]/g, '.$1').split('.');
  let current = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const key = parts[i];
    const nextKey = parts[i + 1];
    if (!(key in current) || typeof current[key] !== 'object' || current[key] === null) {
      current[key] = /^\d+$/.test(nextKey) ? [] : {};
    }
    current = current[key];
  }
  const lastKey = parts[parts.length - 1];
  current[/^\d+$/.test(lastKey) ? parseInt(lastKey) : lastKey] = value;
}

const translations = {
  // Top-level
  "guidesPage.badge": "Εκτενείς Οδηγοί",
  "guidesPage.titleStart": "Οδηγοί",
  "guidesPage.titleHighlight": "Προγραμματιστή",
  "guidesPage.subtitle": "Εις βάθος οδηγοί και βέλτιστες πρακτικές για τη δημιουργία εκπληκτικών εφαρμογών. Από αρχάριους έως προχωρημένους, σας καλύπτουμε.",
  "guidesPage.featuredGuide": "Προτεινόμενος Οδηγός",
  "guidesPage.allGuides": "Όλοι οι Οδηγοί",
  "guidesPage.readGuide": "Διαβάστε τον Οδηγό",

  // Modal
  "guidesPage.modal.overview": "Επισκόπηση",
  "guidesPage.modal.howToDoIt": "Πώς να το κάνετε",
  "guidesPage.modal.proTips": "Επαγγελματικές Συμβουλές",
  "guidesPage.modal.gotIt": "Κατάλαβα!",

  // Categories
  "guidesPage.categories.all": "Όλα",
  "guidesPage.categories.saas": "SaaS",
  "guidesPage.categories.ecommerce": "Ηλεκτρονικό Εμπόριο",
  "guidesPage.categories.design": "Σχεδιασμός",
  "guidesPage.categories.security": "Ασφάλεια",
  "guidesPage.categories.backend": "Backend",
  "guidesPage.categories.performance": "Απόδοση",

  "guidesPage.minRead": "λεπτά ανάγνωσης",

  // --- SaaS Apps Guide ---
  "guidesPage.guides.saasApps.title": "Πλήρης Οδηγός Δημιουργίας Εφαρμογών SaaS",
  "guidesPage.guides.saasApps.description": "Όλα όσα πρέπει να γνωρίζετε για τη δημιουργία εφαρμογών software-as-a-service με το AppNode",
  "guidesPage.guides.saasApps.overview": "Μάθετε να δημιουργείτε μια ολοκληρωμένη εφαρμογή SaaS από το μηδέν, συμπεριλαμβανομένης της αυθεντικοποίησης χρηστών, της χρέωσης συνδρομών και της αρχιτεκτονικής πολλαπλών μισθωτών.",
  "guidesPage.guides.saasApps.steps[0]": "Ρυθμίστε το έργο σας με αυθεντικοποίηση (σύνδεση, εγγραφή, επαναφορά κωδικού)",
  "guidesPage.guides.saasApps.steps[1]": "Δημιουργήστε μια διάταξη πίνακα ελέγχου με πλοήγηση και ρυθμίσεις χρήστη",
  "guidesPage.guides.saasApps.steps[2]": "Υλοποιήστε χρέωση συνδρομών με ενσωμάτωση Stripe",
  "guidesPage.guides.saasApps.steps[3]": "Δημιουργήστε απομόνωση δεδομένων πολλαπλών μισθωτών για διαφορετικούς λογαριασμούς πελατών",
  "guidesPage.guides.saasApps.steps[4]": "Προσθέστε έλεγχο πρόσβασης βάσει ρόλων για τα μέλη της ομάδας",
  "guidesPage.guides.saasApps.steps[5]": "Ρυθμίστε ειδοποιήσεις email για σημαντικά συμβάντα",
  "guidesPage.guides.saasApps.steps[6]": "Ανάπτυξη σε παραγωγή με παρακολούθηση",
  "guidesPage.guides.saasApps.tips[0]": "Ξεκινήστε με ένα απλό MVP και βελτιώστε βάσει σχολίων χρηστών",
  "guidesPage.guides.saasApps.tips[1]": "Χρησιμοποιήστε μεταβλητές περιβάλλοντος για όλα τα κλειδιά API και τα μυστικά",
  "guidesPage.guides.saasApps.tips[2]": "Υλοποιήστε σωστή διαχείριση σφαλμάτων από την αρχή",

  // --- E-commerce Guide ---
  "guidesPage.guides.ecommerce.title": "Βέλτιστες Πρακτικές Ηλεκτρονικού Εμπορίου",
  "guidesPage.guides.ecommerce.description": "Μάθετε πώς να δημιουργείτε ηλεκτρονικά καταστήματα υψηλής μετατροπής με ενσωμάτωση πληρωμών",
  "guidesPage.guides.ecommerce.overview": "Δημιουργήστε ένα ηλεκτρονικό κατάστημα υψηλής μετατροπής με κατάλογο προϊόντων, καλάθι αγορών και ασφαλή ολοκλήρωση αγοράς.",
  "guidesPage.guides.ecommerce.steps[0]": "Σχεδιάστε έναν ελκυστικό κατάλογο προϊόντων με κατηγορίες και φίλτρα",
  "guidesPage.guides.ecommerce.steps[1]": "Δημιουργήστε ένα μόνιμο καλάθι αγορών με τοπική αποθήκευση",
  "guidesPage.guides.ecommerce.steps[2]": "Ενσωματώστε Stripe ή PayPal για πληρωμές",
  "guidesPage.guides.ecommerce.steps[3]": "Δημιουργήστε σελίδες επιβεβαίωσης και παρακολούθησης παραγγελιών",
  "guidesPage.guides.ecommerce.steps[4]": "Ρυθμίστε τη διαχείριση αποθέματος",
  "guidesPage.guides.ecommerce.steps[5]": "Υλοποιήστε αξιολογήσεις και βαθμολογίες πελατών",
  "guidesPage.guides.ecommerce.tips[0]": "Χρησιμοποιήστε εικόνες προϊόντων υψηλής ποιότητας",
  "guidesPage.guides.ecommerce.tips[1]": "Κρατήστε τη διαδικασία ολοκλήρωσης αγοράς απλή (μέγιστο 3 βήματα)",
  "guidesPage.guides.ecommerce.tips[2]": "Εμφανίστε σήματα εμπιστοσύνης και εικονίδια ασφαλών πληρωμών",

  // --- Dashboard Guide ---
  "guidesPage.guides.dashboard.title": "Εξειδίκευση στο Σχεδιασμό Πίνακα Ελέγχου",
  "guidesPage.guides.dashboard.description": "Δημιουργήστε όμορφους και λειτουργικούς πίνακες ελέγχου αναλυτικών που αγαπούν οι χρήστες",
  "guidesPage.guides.dashboard.overview": "Σχεδιάστε επαγγελματικούς πίνακες ελέγχου αναλυτικών με σαφή οπτικοποίηση δεδομένων και διαισθητικές διατάξεις.",
  "guidesPage.guides.dashboard.steps[0]": "Καθορίστε τις βασικές μετρικές που πρέπει να βλέπουν οι χρήστες σας",
  "guidesPage.guides.dashboard.steps[1]": "Δημιουργήστε ένα wireframe με σωστή οπτική ιεραρχία",
  "guidesPage.guides.dashboard.steps[2]": "Επιλέξτε κατάλληλους τύπους γραφημάτων για κάθε τύπο δεδομένων",
  "guidesPage.guides.dashboard.steps[3]": "Υλοποιήστε διαδραστικά φίλτρα και εύρη ημερομηνιών",
  "guidesPage.guides.dashboard.steps[4]": "Προσθέστε λειτουργικότητα εξαγωγής δεδομένων",
  "guidesPage.guides.dashboard.steps[5]": "Βελτιστοποιήστε για διαφορετικά μεγέθη οθόνης",
  "guidesPage.guides.dashboard.tips[0]": "Τοποθετήστε τις πιο σημαντικές μετρικές στην κορυφή",
  "guidesPage.guides.dashboard.tips[1]": "Χρησιμοποιήστε συνεπή χρωματική κωδικοποίηση σε όλα τα γραφήματα",
  "guidesPage.guides.dashboard.tips[2]": "Αποφύγετε τον συνωστισμό - λιγότερα είναι περισσότερα",

  // --- Authentication Guide ---
  "guidesPage.guides.authentication.title": "Αυθεντικοποίηση & Ασφάλεια",
  "guidesPage.guides.authentication.description": "Υλοποιήστε ασφαλή αυθεντικοποίηση χρηστών και προστατέψτε τις εφαρμογές σας",
  "guidesPage.guides.authentication.overview": "Υλοποιήστε ισχυρή αυθεντικοποίηση και βέλτιστες πρακτικές ασφαλείας για την προστασία των χρηστών και των δεδομένων σας.",
  "guidesPage.guides.authentication.steps[0]": "Ρυθμίστε ασφαλή εγγραφή χρηστών με επαλήθευση email",
  "guidesPage.guides.authentication.steps[1]": "Υλοποιήστε κατακερματισμό κωδικών πρόσβασης με bcrypt ή παρόμοιο",
  "guidesPage.guides.authentication.steps[2]": "Προσθέστε κοινωνική σύνδεση OAuth (Google, GitHub)",
  "guidesPage.guides.authentication.steps[3]": "Δημιουργήστε προστατευμένες διαδρομές και middleware",
  "guidesPage.guides.authentication.steps[4]": "Υλοποιήστε διαχείριση συνεδριών με ασφαλή cookies",
  "guidesPage.guides.authentication.steps[5]": "Προσθέστε περιορισμό ρυθμού για αποτροπή επιθέσεων brute force",
  "guidesPage.guides.authentication.tips[0]": "Ποτέ μην αποθηκεύετε κωδικούς πρόσβασης σε απλό κείμενο",
  "guidesPage.guides.authentication.tips[1]": "Χρησιμοποιήστε HTTPS για όλες τις συνδέσεις",
  "guidesPage.guides.authentication.tips[2]": "Υλοποιήστε σωστές πολιτικές CORS",

  // --- Database Guide ---
  "guidesPage.guides.database.title": "Οδηγός Ενσωμάτωσης Βάσεων Δεδομένων",
  "guidesPage.guides.database.description": "Συνδέστε την εφαρμογή σας με βάσεις δεδομένων και διαχειριστείτε δεδομένα αποδοτικά",
  "guidesPage.guides.database.overview": "Μάθετε να συνδέετε την εφαρμογή σας με βάσεις δεδομένων και να υλοποιείτε αποδοτική διαχείριση δεδομένων.",
  "guidesPage.guides.database.steps[0]": "Επιλέξτε τη σωστή βάση δεδομένων (SQL vs NoSQL)",
  "guidesPage.guides.database.steps[1]": "Ρυθμίστε τη σύνδεση βάσης δεδομένων με μεταβλητές περιβάλλοντος",
  "guidesPage.guides.database.steps[2]": "Σχεδιάστε το σχήμα δεδομένων και τις σχέσεις σας",
  "guidesPage.guides.database.steps[3]": "Υλοποιήστε λειτουργίες CRUD (Δημιουργία, Ανάγνωση, Ενημέρωση, Διαγραφή)",
  "guidesPage.guides.database.steps[4]": "Προσθέστε επικύρωση δεδομένων πριν τις λειτουργίες βάσης δεδομένων",
  "guidesPage.guides.database.steps[5]": "Ρυθμίστε μετεγκαταστάσεις βάσης δεδομένων για αλλαγές σχήματος",
  "guidesPage.guides.database.tips[0]": "Χρησιμοποιείτε πάντα παραμετροποιημένα ερωτήματα για αποτροπή SQL injection",
  "guidesPage.guides.database.tips[1]": "Δημιουργήστε ευρετήρια σε στήλες που ερωτώνται συχνά",
  "guidesPage.guides.database.tips[2]": "Δημιουργήστε αντίγραφα ασφαλείας των δεδομένων σας τακτικά",

  // --- Responsive Design Guide ---
  "guidesPage.guides.responsive.title": "Πρότυπα Responsive Σχεδιασμού",
  "guidesPage.guides.responsive.description": "Κάντε τις εφαρμογές σας να φαίνονται υπέροχες σε όλες τις συσκευές με σχεδιασμό mobile-first",
  "guidesPage.guides.responsive.overview": "Δημιουργήστε responsive σχεδιασμούς που λειτουργούν όμορφα σε όλα τα μεγέθη οθόνης.",
  "guidesPage.guides.responsive.steps[0]": "Ξεκινήστε με προσέγγιση CSS mobile-first",
  "guidesPage.guides.responsive.steps[1]": "Χρησιμοποιήστε ευέλικτες διατάξεις πλέγματος (CSS Grid, Flexbox)",
  "guidesPage.guides.responsive.steps[2]": "Υλοποιήστε responsive breakpoints (sm, md, lg, xl)",
  "guidesPage.guides.responsive.steps[3]": "Βελτιστοποιήστε εικόνες για διαφορετικές πυκνότητες οθόνης",
  "guidesPage.guides.responsive.steps[4]": "Δοκιμάστε αλληλεπιδράσεις αφής σε κινητές συσκευές",
  "guidesPage.guides.responsive.steps[5]": "Χρησιμοποιήστε σχετικές μονάδες (rem, %, vh/vw) αντί για pixels",
  "guidesPage.guides.responsive.tips[0]": "Δοκιμάστε σε πραγματικές συσκευές, όχι μόνο σε εργαλεία ανάπτυξης browser",
  "guidesPage.guides.responsive.tips[1]": "Λάβετε υπόψη φιλικούς στον αντίχειρα στόχους αφής στο κινητό",
  "guidesPage.guides.responsive.tips[2]": "Δώστε προτεραιότητα στο περιεχόμενο για μικρότερες οθόνες",

  // --- API Guide ---
  "guidesPage.guides.api.title": "Masterclass Ενσωμάτωσης API",
  "guidesPage.guides.api.description": "Συνδεθείτε με υπηρεσίες τρίτων και API απρόσκοπτα",
  "guidesPage.guides.api.overview": "Μάθετε να ενσωματώνετε εξωτερικά API και υπηρεσίες τρίτων στις εφαρμογές σας.",
  "guidesPage.guides.api.steps[0]": "Κατανοήστε τα βασικά του REST API (endpoints, μέθοδοι)",
  "guidesPage.guides.api.steps[1]": "Ρυθμίστε αυθεντικοποίηση API (κλειδιά API, OAuth tokens)",
  "guidesPage.guides.api.steps[2]": "Πραγματοποιήστε αιτήματα HTTP (GET, POST, PUT, DELETE)",
  "guidesPage.guides.api.steps[3]": "Διαχειριστείτε τις απαντήσεις και τα σφάλματα API με χάρη",
  "guidesPage.guides.api.steps[4]": "Υλοποιήστε λογική επανάληψης για αποτυχημένα αιτήματα",
  "guidesPage.guides.api.steps[5]": "Αποθηκεύστε απαντήσεις στην cache για βελτίωση απόδοσης",
  "guidesPage.guides.api.tips[0]": "Αποθηκεύστε τα κλειδιά API σε μεταβλητές περιβάλλοντος",
  "guidesPage.guides.api.tips[1]": "Διαχειριστείτε τον περιορισμό ρυθμού με εκθετική υποχώρηση",
  "guidesPage.guides.api.tips[2]": "Καταγράψτε τις κλήσεις API για εντοπισμό σφαλμάτων",

  // --- Performance Guide ---
  "guidesPage.guides.performance.title": "Βελτιστοποίηση Απόδοσης",
  "guidesPage.guides.performance.description": "Επιταχύνετε τις εφαρμογές σας για καλύτερη εμπειρία χρήστη και SEO",
  "guidesPage.guides.performance.overview": "Βελτιστοποιήστε την εφαρμογή σας για ταχύτητα, καλύτερη εμπειρία χρήστη και βελτιωμένο SEO.",
  "guidesPage.guides.performance.steps[0]": "Αναλύστε την τρέχουσα απόδοση με το Lighthouse",
  "guidesPage.guides.performance.steps[1]": "Βελτιστοποιήστε και συμπιέστε εικόνες (μορφή WebP, lazy loading)",
  "guidesPage.guides.performance.steps[2]": "Ελαχιστοποιήστε τα πακέτα JavaScript και CSS",
  "guidesPage.guides.performance.steps[3]": "Υλοποιήστε code splitting και lazy loading",
  "guidesPage.guides.performance.steps[4]": "Ρυθμίστε σωστές κεφαλίδες caching",
  "guidesPage.guides.performance.steps[5]": "Χρησιμοποιήστε CDN για στατικά αρχεία",
  "guidesPage.guides.performance.tips[0]": "Στοχεύστε σε αρχικό φόρτωμα σελίδας < 3 δευτερόλεπτα",
  "guidesPage.guides.performance.tips[1]": "Χρησιμοποιήστε προϋπολογισμούς απόδοσης για παρακολούθηση παλινδρομήσεων",
  "guidesPage.guides.performance.tips[2]": "Παρακολουθήστε τα Core Web Vitals τακτικά",

  // --- CTA ---
  "guidesPage.cta.title": "Έτοιμοι να Ξεκινήσετε τη Δημιουργία;",
  "guidesPage.cta.subtitle": "Εφαρμόστε αυτά που μάθατε στην πράξη. Δημιουργήστε την πρώτη σας εφαρμογή σήμερα.",
  "guidesPage.cta.getStartedFree": "Ξεκινήστε Δωρεάν",
  "guidesPage.cta.browseTemplates": "Περιήγηση Προτύπων",
};

let count = 0;
for (const [path, value] of Object.entries(translations)) {
  set(data, path, value);
  count++;
}

fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n', 'utf8');
console.log(`Done! Set ${count} Greek translations for guidesPage.`);
