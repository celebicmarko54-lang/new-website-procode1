const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'translations', 'el.json');
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
  ["reportPage.searchPlaceholder", "Αναζήτηση εγγράφων..."],
  ["reportPage.copyPage", "Αντιγραφή σελίδας"],
  ["reportPage.sections.gettingStarted", "Ξεκινώντας"],
  ["reportPage.sections.trustSafety", "Εμπιστοσύνη & Ασφάλεια"],
  ["reportPage.sections.tutorials", "Οδηγοί"],
  ["reportPage.sections.teamsEnterprise", "Ομάδες & Επιχειρήσεις"],
  ["reportPage.sections.changelog", "Αρχείο αλλαγών"],
  ["reportPage.items.introduction", "Εισαγωγή"],
  ["reportPage.items.quickstart", "Οδηγοί γρήγορης εκκίνησης"],
  ["reportPage.items.createAi", "Δημιουργία με AI"],
  ["reportPage.items.buildScratch", "Κατασκευή από το μηδέν"],
  ["reportPage.items.importGithub", "Εισαγωγή από GitHub"],
  ["reportPage.items.trustOverview", "Επισκόπηση"],
  ["reportPage.items.reportingAbuse", "Αναφορά κατάχρησης"],
  ["reportPage.items.copyrightClaims", "Αξιώσεις πνευματικών δικαιωμάτων"],
  ["reportPage.items.platformRules", "Κανόνες πλατφόρμας"],
  ["reportPage.items.securityOverview", "Επισκόπηση ασφάλειας"],
  ["reportPage.items.dataProtection", "Προστασία δεδομένων"],
  ["reportPage.items.generateCode", "Πώς να δημιουργήσετε κώδικα"],
  ["reportPage.items.firstApp", "Κατασκευή της πρώτης σας εφαρμογής"],
  ["reportPage.items.databases", "Κατασκευή με βάσεις δεδομένων"],
  ["reportPage.items.deploying", "Ανάπτυξη της εφαρμογής σας"],
  ["reportPage.items.teamsOverview", "Επισκόπηση ομάδων"],
  ["reportPage.items.enterpriseFeatures", "Επιχειρησιακά χαρακτηριστικά"],
  ["reportPage.items.collaboration", "Συνεργασία"],
  ["reportPage.items.recentUpdates", "Πρόσφατες ενημερώσεις"],
  ["reportPage.items.roadmap", "Χάρτης πορείας"],
  ["reportPage.content.welcomeTitle", "Καλώς ήρθατε στο AppNode"],
  ["reportPage.content.welcomeDescription", "Το AppNode είναι μια πλατφόρμα ανάπτυξης με τεχνητή νοημοσύνη που σας επιτρέπει να δημιουργείτε ολοκληρωμένες διαδικτυακές εφαρμογές απλά περιγράφοντας αυτό που θέλετε. Δεν απαιτείται εμπειρία προγραμματισμού — είναι σαν να έχετε μια ολόκληρη ομάδα να δουλεύει για εσάς."],
  ["reportPage.content.whatYouCanBuild", "Τι μπορείτε να δημιουργήσετε"],
  ["reportPage.content.whatYouCanBuildItems.fullStack", "Full-stack διαδικτυακές εφαρμογές με βάσεις δεδομένων"],
  ["reportPage.content.whatYouCanBuildItems.landingPages", "Σελίδες προορισμού και ιστότοποι μάρκετινγκ"],
  ["reportPage.content.whatYouCanBuildItems.dashboards", "Πίνακες ελέγχου και πάνελ διαχείρισης"],
  ["reportPage.content.whatYouCanBuildItems.ecommerce", "Ηλεκτρονικά καταστήματα και portfolios"],
  ["reportPage.content.whatYouCanBuildItems.saas", "Προϊόντα SaaS και εσωτερικά εργαλεία"],
  ["reportPage.content.howItWorks", "Πώς λειτουργεί"],
  ["reportPage.content.howItWorksDescription", "Απλά περιγράψτε το έργο σας σε απλή γλώσσα. Η AI κατανοεί τις απαιτήσεις σας, δημιουργεί ένα πλήρες σχέδιο και γράφει κώδικα έτοιμο για παραγωγή σε πραγματικό χρόνο. Παρακολουθήστε την εφαρμογή σας να ζωντανεύει με άμεσες προεπισκοπήσεις."],
  ["reportPage.content.steps.describe", "Περιγραφή"],
  ["reportPage.content.steps.describeText", "Πείτε στην AI τι θέλετε να δημιουργήσετε"],
  ["reportPage.content.steps.generate", "Δημιουργία"],
  ["reportPage.content.steps.generateText", "Η AI γράφει κώδικα έτοιμο για παραγωγή"],
  ["reportPage.content.steps.preview", "Προεπισκόπηση"],
  ["reportPage.content.steps.previewText", "Δείτε την εφαρμογή σας ζωντανά αμέσως"],
  ["reportPage.content.steps.deploy", "Ανάπτυξη"],
  ["reportPage.content.steps.deployText", "Ανάπτυξη σε παραγωγή με ένα κλικ"],
  ["reportPage.content.quickstartTitle", "Οδηγοί γρήγορης εκκίνησης"],
  ["reportPage.content.quickstartDescription", "Ξεκινήστε με το AppNode σε λίγα λεπτά. Επιλέξτε τη διαδρομή σας ανάλογα με το πώς θέλετε να αρχίσετε να δημιουργείτε."],
  ["reportPage.content.chooseStartingPoint", "Επιλέξτε το σημείο εκκίνησης"],
  ["reportPage.content.examplePrompts", "Παραδείγματα εντολών για δοκιμή"],
  ["reportPage.content.createWithAiTitle", "Δημιουργία με AI"],
  ["reportPage.content.createWithAiDescription", "Ο πιο γρήγορος τρόπος για να δημιουργήσετε. Απλά περιγράψτε τι θέλετε σε απλή γλώσσα και παρακολουθήστε την AI να δημιουργεί την ολοκληρωμένη εφαρμογή σας σε πραγματικό χρόνο."],
  ["reportPage.content.stepByStepGuide", "Οδηγός βήμα προς βήμα"],
  ["reportPage.content.startNewProject", "Ξεκινήστε ένα νέο έργο"],
  ["reportPage.content.startNewProjectDesc", "Κάντε κλικ στο \"Νέα Δημιουργία\" από τον πίνακα ελέγχου ή την αρχική σελίδα"],
  ["reportPage.content.describeYourIdea", "Περιγράψτε την ιδέα σας"],
  ["reportPage.content.describeYourIdeaDesc", "Γράψτε μια λεπτομερή περιγραφή αυτού που θέλετε να δημιουργήσετε. Όσο περισσότερο πλαίσιο, τόσο καλύτερα τα αποτελέσματα."],
  ["reportPage.content.reviewBlueprint", "Ελέγξτε το σχέδιο"],
  ["reportPage.content.reviewBlueprintDesc", "Η AI δημιουργεί ένα σχέδιο έργου με χαρακτηριστικά, σχεδιασμό και αρχιτεκτονική. Μπορείτε να το βελτιώσετε."],
  ["reportPage.content.watchItBuild", "Δείτε τη δημιουργία"],
  ["reportPage.content.watchItBuildDesc", "Η AI γράφει κώδικα για κάθε στοιχείο. Δείτε αρχεία να εμφανίζονται σε πραγματικό χρόνο με ζωντανή προεπισκόπηση."],
  ["reportPage.content.testIterate", "Δοκιμή & Επανάληψη"],
  ["reportPage.content.testIterateDesc", "Δοκιμάστε την εφαρμογή σας στην προεπισκόπηση. Ζητήστε από την AI να κάνει αλλαγές ή να προσθέσει λειτουργίες."],
  ["reportPage.content.deployStep", "Ανάπτυξη"],
  ["reportPage.content.deployStepDesc", "Όταν είστε έτοιμοι, αναπτύξτε με ένα κλικ για να λάβετε ένα ζωντανό URL."],
  ["reportPage.content.tipsForBetterResults", "Συμβουλές για καλύτερα αποτελέσματα"],
  ["reportPage.content.tipSpecific", "Να είστε συγκεκριμένοι:"],
  ["reportPage.content.tipSpecificDesc", "Αντί για \"φτιάξε μια ιστοσελίδα\", πείτε \"δημιούργησε μια ιστοσελίδα portfolio με σκούρο θέμα, γκαλερί έργων και φόρμα επικοινωνίας\""],
  ["reportPage.content.tipFeatures", "Περιγράψτε τα χαρακτηριστικά:"],
  ["reportPage.content.tipFeaturesDesc", "Αναφέρετε τα βασικά χαρακτηριστικά που χρειάζεστε — αυθεντικοποίηση, βάση δεδομένων, ανέβασμα αρχείων κ.λπ."],
  ["reportPage.content.tipDesign", "Αναφέρετε τις σχεδιαστικές προτιμήσεις:"],
  ["reportPage.content.tipDesignDesc", "Χρώματα, στυλ (μινιμαλιστικό, τολμηρό, παιχνιδιάρικο) και προτιμήσεις διάταξης βοηθούν την AI να ταιριάξει το όραμά σας"],
  ["reportPage.content.tipIterate", "Επαναλάβετε:"],
  ["reportPage.content.tipIterateDesc", "Ξεκινήστε απλά και μετά ζητήστε από την AI να προσθέσει περισσότερα χαρακτηριστικά σταδιακά"],
  ["reportPage.content.buildFromScratchTitle", "Κατασκευή από το μηδέν"],
  ["reportPage.content.buildFromScratchDesc", "Ξεκινήστε με κενό καμβά και πλήρη έλεγχο. Ιδανικό για προγραμματιστές που θέλουν να δομήσουν το έργο τους με τον δικό τους τρόπο, αξιοποιώντας παράλληλα τη βοήθεια AI."],
  ["reportPage.content.chooseTemplate", "Επιλέξτε το πρότυπό σας"],
  ["reportPage.content.chooseTemplateDesc", "Επιλέξτε ένα βασικό πρότυπο για να ξεκινήσετε. Κάθε πρότυπο είναι προρυθμισμένο με το framework, τα εργαλεία κατασκευής και τις εξαρτήσεις που χρειάζεστε."],
  ["reportPage.content.workspaceFeatures", "Χαρακτηριστικά χώρου εργασίας"],
  ["reportPage.content.codeEditor", "Επεξεργαστής κώδικα:"],
  ["reportPage.content.codeEditorDesc", "Πλήρης επεξεργαστής με επισήμανση σύνταξης, αυτόματη συμπλήρωση και επεξεργασία πολλαπλών αρχείων"],
  ["reportPage.content.fileExplorer", "Εξερευνητής αρχείων:"],
  ["reportPage.content.fileExplorerDesc", "Πλοηγηθείτε και διαχειριστείτε τα αρχεία και τους φακέλους του έργου σας"],
  ["reportPage.content.terminal", "Τερματικό:"],
  ["reportPage.content.terminalDesc", "Εκτελέστε εντολές, εγκαταστήστε πακέτα και διαχειριστείτε το περιβάλλον σας"],
  ["reportPage.content.livePreview", "Ζωντανή προεπισκόπηση:"],
  ["reportPage.content.livePreviewDesc", "Δείτε τις αλλαγές αμέσως καθώς γράφετε κώδικα"],
  ["reportPage.content.aiChat", "AI Συνομιλία:"],
  ["reportPage.content.aiChatDesc", "Ζητήστε βοήθεια, δημιουργήστε αποσπάσματα κώδικα ή εντοπίστε σφάλματα"],
  ["reportPage.content.versionControl", "Έλεγχος εκδόσεων:"],
  ["reportPage.content.versionControlDesc", "Ενσωματωμένη ενοποίηση git για παρακολούθηση αλλαγών"],
  ["reportPage.content.importGithubTitle", "Εισαγωγή από GitHub"],
  ["reportPage.content.importGithubDesc", "Φέρτε τα υπάρχοντα έργα σας στο AppNode. Εισάγετε οποιοδήποτε δημόσιο ή ιδιωτικό αποθετήριο και ενισχύστε το με εργαλεία ανάπτυξης που υποστηρίζονται από AI."],
  ["reportPage.content.howToImport", "Πώς να κάνετε εισαγωγή"],
  ["reportPage.content.connectGithub", "Σύνδεση GitHub"],
  ["reportPage.content.connectGithubDesc", "Εξουσιοδοτήστε το AppNode να αποκτήσει πρόσβαση στον λογαριασμό σας GitHub για απρόσκοπτες εισαγωγές"],
  ["reportPage.content.selectRepository", "Επιλογή αποθετηρίου"],
  ["reportPage.content.selectRepositoryDesc", "Επιλέξτε από τα αποθετήριά σας ή επικολλήστε οποιοδήποτε δημόσιο URL αποθετηρίου"],
  ["reportPage.content.configureSettings", "Ρύθμιση παραμέτρων"],
  ["reportPage.content.configureSettingsDesc", "Επιλέξτε κλάδο, ορίστε μεταβλητές περιβάλλοντος και ρυθμίστε τις παραμέτρους κατασκευής"],
  ["reportPage.content.importBuild", "Εισαγωγή & Κατασκευή"],
  ["reportPage.content.importBuildDesc", "Κλωνοποιούμε το αποθετήριό σας, εγκαθιστούμε τις εξαρτήσεις και ξεκινάμε τον διακομιστή ανάπτυξης"],
  ["reportPage.content.whatHappensAfterImport", "Τι συμβαίνει μετά την εισαγωγή"],
  ["reportPage.content.afterImport1", "Ο κώδικάς σας κλωνοποιείται σε νέο χώρο εργασίας AppNode"],
  ["reportPage.content.afterImport2", "Οι εξαρτήσεις εγκαθίστανται αυτόματα"],
  ["reportPage.content.afterImport3", "Ο διακομιστής ανάπτυξης ξεκινά με ζωντανή προεπισκόπηση"],
  ["reportPage.content.afterImport4", "Η AI αναλύει τον κώδικά σας για να παρέχει συμφραζόμενη βοήθεια"],
  ["reportPage.content.afterImport5", "Οι αλλαγές μπορούν να προωθηθούν πίσω στο GitHub ή να εξαχθούν"],
  ["reportPage.content.privateRepoNote", "Σημείωση:"],
  ["reportPage.content.privateRepoNoteDesc", "Για ιδιωτικά αποθετήρια, θα χρειαστεί να εξουσιοδοτήσετε πρόσβαση στο GitHub. Ζητάμε μόνο τα ελάχιστα δικαιώματα που απαιτούνται για την κλωνοποίηση του κώδικά σας."],
  ["reportPage.content.minutes", "λεπτά"],
  ["reportPage.content.minute", "λεπτό"],
  ["reportPage.content.bestForBeginners", "Ιδανικό για αρχάριους — περιγράψτε την ιδέα σας και αφήστε την AI να τη δημιουργήσει"],
  ["reportPage.content.blankCanvas", "Ξεκινήστε με κενό καμβά και πλήρη έλεγχο"],
  ["reportPage.content.bringExisting", "Φέρτε το υπάρχον έργο σας και ενισχύστε το με AI"],
  ["reportPage.content.useTemplate", "Χρήση προτύπου"],
  ["reportPage.content.useTemplateDesc", "Ξεκινήστε από ένα προκατασκευασμένο πρότυπο και προσαρμόστε το"],
  ["reportPage.content.examplePrompt1", "\"Δημιούργησε μια λίστα εργασιών με drag and drop και σκούρα λειτουργία\""],
  ["reportPage.content.examplePrompt2", "\"Φτιάξε μια απλή εφαρμογή ζωγραφικής με διαφορετικά μεγέθη πινέλων και χρώματα\""],
  ["reportPage.content.examplePrompt3", "\"Φτιάξε ένα παιχνίδι μνήμης με κάρτες και emojis\""],
  ["reportPage.content.examplePrompt4", "\"Δημιούργησε έναν ανιχνευτή εξόδων με γραφήματα και κατηγορίες\""],
];

let count = 0;
for (const [key, value] of translations) {
  set(data, key, value);
  count++;
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log(`Done! Set ${count} Greek translations for reportPage entries.`);
