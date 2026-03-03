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
  // common (5)
  "common.switchToLightMode": "Εναλλαγή σε φωτεινή λειτουργία",
  "common.switchToDarkMode": "Εναλλαγή σε σκοτεινή λειτουργία",
  "common.addAttachments": "Προσθήκη συνημμένων",
  "common.addImage": "Προσθήκη εικόνας",
  "common.moveMouseToExplore": "Μετακινήστε το ποντίκι για εξερεύνηση",

  // homePage (3)
  "homePage.videoSection.badge": "Πώς Λειτουργεί",
  "homePage.videoSection.title": "Δείτε το AppNode σε Δράση",
  "homePage.videoSection.subtitle": "Δείτε πώς οι προγραμματιστές δημιουργούν εφαρμογές έτοιμες για παραγωγή σε λεπτά χρησιμοποιώντας φυσική γλώσσα.",

  // buildAnything (15)
  "buildAnything.categories.saasplatform": "Πλατφόρμα SaaS",
  "buildAnything.categories.gamingportal": "Πύλη Gaming",
  "buildAnything.categories.mapsnavigation": "Χάρτες & Πλοήγηση",
  "buildAnything.categories.fashionstore": "Κατάστημα Μόδας",
  "buildAnything.categories.stylecollection": "Συλλογή Στυλ",
  "buildAnything.categories.beautyproducts": "Προϊόντα Ομορφιάς",
  "buildAnything.categories.fitnesstracker": "Παρακολούθηση Φυσικής Κατάστασης",
  "buildAnything.categories.luxuryfragrance": "Πολυτελές Άρωμα",
  "buildAnything.categories.beautystore": "Κατάστημα Ομορφιάς",
  "buildAnything.categories.streamingplatform": "Πλατφόρμα Streaming",
  "buildAnything.categories.gaminggearstore": "Κατάστημα Gaming Εξοπλισμού",
  "buildAnything.categories.gamingstore": "Κατάστημα Gaming",
  "buildAnything.categories.synthesizer": "Συνθεσάιζερ",
  "buildAnything.categories.projectroadmap": "Οδικός Χάρτης Έργου",
  "buildAnything.categories.analyticsdashboard": "Πίνακας Αναλυτικών",

  // footer (1)
  "footer.documentation": "Τεκμηρίωση",

  // productIntegrations (5) - keep brands, translate categories
  "productIntegrations.categories.ai": "AI",
  "productIntegrations.categories.email": "Email",
  "productIntegrations.categories.cdn": "CDN",
  "productIntegrations.categories.cloud": "Cloud",
  "productIntegrations.integrations.aws": "Amazon Web Services",

  // productMobile (3) - brand names stay
  "productMobile.appStore": "App Store",
  "productMobile.playStore": "Play Store",
  "productMobile.googlePlay": "Google Play",

  // productSecurity (3)
  "productSecurity.badges.soc2": "SOC 2 Type II",
  "productSecurity.badges.iso": "ISO 27001",
  "productSecurity.features.sso.title": "SSO & SAML",

  // pricing (3)
  "pricing.pro.name": "Pro",
  "pricing.enterprise.period": "",
  "pricing.enterprise.features[2]": "SSO & SAML",

  // productAgent (2)
  "productAgent.titleHighlight": "Agent",
  "productAgent.demo.agent": "Agent",

  // products (1)
  "products.agent.title": "AI Agent",

  // enterprise (1)
  "enterprise.features.onpremise.title": "On-Premise",

  // enterprisePage (14)
  "enterprisePage.trustedByText": "Αξιόπιστο από κορυφαίες ομάδες και εταιρείες παγκοσμίως",
  "enterprisePage.testimonials.testimonial1.author": "Sarah Chen",
  "enterprisePage.testimonials.testimonial1.company": "TechCorp",
  "enterprisePage.testimonials.testimonial2.author": "Michael Torres",
  "enterprisePage.testimonials.testimonial2.role": "CTO",
  "enterprisePage.testimonials.testimonial2.company": "FinanceApp",
  "enterprisePage.testimonials.testimonial3.author": "Emily Watson",
  "enterprisePage.testimonials.testimonial3.company": "DesignStudio",
  "enterprisePage.testimonials.testimonial4.author": "James Kim",
  "enterprisePage.testimonials.testimonial4.company": "CloudScale",
  "enterprisePage.testimonials.testimonial5.author": "Anika Larsson",
  "enterprisePage.testimonials.testimonial5.company": "SecureBank",
  "enterprisePage.testimonials.testimonial6.author": "Ryan Park",
  "enterprisePage.testimonials.testimonial6.company": "DataFlow",

  // testimonials (3) - names stay
  "testimonials.author1": "Sarah Chen",
  "testimonials.author2": "Mike Rodriguez",
  "testimonials.author3": "Emma Wilson",

  // solutionsPage (5) - names + A/B testing stay
  "solutionsPage.solutionCards[0].testimonialAuthor": "Jason Park",
  "solutionsPage.solutionCards[1].testimonialAuthor": "Emma Chen",
  "solutionsPage.solutionCards[2].features[1]": "A/B testing",
  "solutionsPage.solutionCards[2].testimonialAuthor": "Michael Torres",
  "solutionsPage.solutionCards[3].testimonialAuthor": "Lisa Wang",

  // statusPage (1) - stays
  "statusPage.services[0].name": "API",

  // useCasesRapidPrototyping (1) - stays
  "useCasesRapidPrototyping.traditional.steps[0].step": "Wireframes",

  // signupPage (1) - stays
  "signupPage.roles[3]": "Marketer",

  // securityReportPage (1) - stays
  "securityReportPage.emailPlaceholder": "security-researcher@example.com",

  // blockchainSection (4) - tech terms stay
  "blockchainSection.useCases[0]": "Landing Pages",
  "blockchainSection.useCases[1]": "Token Presales",
  "blockchainSection.useCases[2]": "NFT Drops",
  "blockchainSection.useCases[7]": "Meme Tokens",

  // affiliatesPage (2) - stay
  "affiliatesPage.tiers.items[1].name": "Pro",
  "affiliatesPage.tiers.items[2].name": "Elite",

  // connectionsPage (13) - brand names stay
  "connectionsPage.categories.ai": "AI",
  "connectionsPage.connections[0].name": "Supabase",
  "connectionsPage.connections[1].name": "Stripe",
  "connectionsPage.connections[2].name": "OpenAI",
  "connectionsPage.connections[3].name": "Vercel",
  "connectionsPage.connections[4].name": "GitHub",
  "connectionsPage.connections[5].name": "Resend",
  "connectionsPage.connections[6].name": "Cloudflare",
  "connectionsPage.connections[7].name": "Twilio",
  "connectionsPage.connections[8].name": "Auth0",
  "connectionsPage.connections[9].name": "Algolia",
  "connectionsPage.connections[10].name": "Shopify",
  "connectionsPage.connections[11].name": "Notion",

  // careersPage (13) - emojis + "AI" stay
  "careersPage.openings[1].department": "AI",
  "careersPage.benefits[0].icon": "💰",
  "careersPage.benefits[1].icon": "📈",
  "careersPage.benefits[2].icon": "🏥",
  "careersPage.benefits[3].icon": "🏠",
  "careersPage.benefits[4].icon": "🌴",
  "careersPage.benefits[5].icon": "📚",
  "careersPage.benefits[6].icon": "💻",
  "careersPage.benefits[7].icon": "🎉",
  "careersPage.companyValues[0].emoji": "🚀",
  "careersPage.companyValues[1].emoji": "🎯",
  "careersPage.companyValues[2].emoji": "🔓",
  "careersPage.companyValues[3].emoji": "🤝",

  // dashboardPage (5)
  "dashboardPage.welcome": "Καλώς ήρθατε",
  "dashboardPage.loggedInAs": "Είστε συνδεδεμένοι ως",
  "dashboardPage.comingSoon": "ΣΎΝΤΟΜΑ",
  "dashboardPage.buildingMagic": "Χτίζουμε κάτι μαγικό για εσάς",
  "dashboardPage.signOut": "Αποσύνδεση",

  // profilePage (11)
  "profilePage.editProfile": "Επεξεργασία Προφίλ",
  "profilePage.fullName": "Πλήρες Όνομα",
  "profilePage.email": "Email",
  "profilePage.role": "Ρόλος",
  "profilePage.companyOptional": "Εταιρεία (προαιρετικό)",
  "profilePage.companyPlaceholder": "Το όνομα της εταιρείας σας",
  "profilePage.avatarColor": "Χρώμα Avatar",
  "profilePage.memberSince": "Μέλος Από",
  "profilePage.notSpecified": "Δεν έχει οριστεί",
  "profilePage.saveChanges": "Αποθήκευση Αλλαγών",
  "profilePage.saving": "Αποθήκευση...",

  // settingsPage (26)
  "settingsPage.generalSettings": "Γενικές Ρυθμίσεις",
  "settingsPage.timezone": "Ζώνη Ώρας",
  "settingsPage.darkMode": "Σκοτεινή Λειτουργία",
  "settingsPage.darkModeDesc": "Χρήση σκοτεινού θέματος σε ολόκληρη την εφαρμογή",
  "settingsPage.notificationPreferences": "Προτιμήσεις Ειδοποιήσεων",
  "settingsPage.emailNotifications": "Ειδοποιήσεις Email",
  "settingsPage.emailNotificationsDesc": "Λήψη ενημερώσεων έργου μέσω email",
  "settingsPage.pushNotifications": "Push Ειδοποιήσεις",
  "settingsPage.pushNotificationsDesc": "Λήψη push ειδοποιήσεων στο πρόγραμμα περιήγησης",
  "settingsPage.marketingEmails": "Μάρκετινγκ Emails",
  "settingsPage.marketingEmailsDesc": "Λήψη συμβουλών, ενημερώσεων και προσφορών",
  "settingsPage.securitySettings": "Ρυθμίσεις Ασφάλειας",
  "settingsPage.password": "Κωδικός Πρόσβασης",
  "settingsPage.passwordLastChanged": "Τελευταία αλλαγή πριν 30 μέρες",
  "settingsPage.changePassword": "Αλλαγή Κωδικού",
  "settingsPage.twoFactorAuth": "Έλεγχος Ταυτότητας Δύο Παραγόντων",
  "settingsPage.twoFactorAuthDesc": "Προσθήκη επιπλέον επιπέδου ασφάλειας",
  "settingsPage.enable2FA": "Ενεργοποίηση 2FA",
  "settingsPage.activeSessions": "Ενεργές Συνεδρίες",
  "settingsPage.activeSessionsDesc": "Διαχείριση ενεργών συνεδριών",
  "settingsPage.viewSessions": "Προβολή Συνεδριών",
  "settingsPage.dangerZone": "Ζώνη Κινδύνου",
  "settingsPage.deleteAccount": "Διαγραφή Λογαριασμού",
  "settingsPage.deleteAccountDesc": "Μόνιμη διαγραφή λογαριασμού και όλων των δεδομένων",
  "settingsPage.deleteAccountConfirm": "Διαγραφή Λογαριασμού;",
  "settingsPage.deleteAccountWarning": "Αυτή η ενέργεια δεν μπορεί να αναιρεθεί. Όλα τα δεδομένα σας θα διαγραφούν μόνιμα.",

  // billingPage (24)
  "billingPage.title": "Χρέωση",
  "billingPage.currentPlan": "Τρέχον Πλάνο",
  "billingPage.upgradeToUnlock": "Αναβαθμίστε για περισσότερα χαρακτηριστικά",
  "billingPage.planRenews": "Το πλάνο σας ανανεώνεται την 1η Δεκεμβρίου 2025",
  "billingPage.freePlan": "Δωρεάν Πλάνο",
  "billingPage.active": "Ενεργό",
  "billingPage.availablePlans": "Διαθέσιμα Πλάνα",
  "billingPage.mostPopular": "Πιο Δημοφιλές",
  "billingPage.currentPlanLabel": "Τρέχον Πλάνο",
  "billingPage.upgrade": "Αναβάθμιση",
  "billingPage.downgrade": "Υποβάθμιση",
  "billingPage.paymentMethod": "Μέθοδος Πληρωμής",
  "billingPage.noPaymentRequired": "Δεν απαιτείται μέθοδος πληρωμής για το δωρεάν πλάνο.",
  "billingPage.edit": "Επεξεργασία",
  "billingPage.billingHistory": "Ιστορικό Χρεώσεων",
  "billingPage.upgradeToTitle": "Αναβάθμιση σε",
  "billingPage.upgradeAccessMessage": "Θα αποκτήσετε πρόσβαση σε όλα τα",
  "billingPage.featuresImmediately": "χαρακτηριστικά αμέσως.",
  "billingPage.confirmUpgrade": "Επιβεβαίωση Αναβάθμισης",
  "billingPage.plans[0].price": "$0",
  "billingPage.plans[1].name": "Pro",
  "billingPage.plans[1].price": "$20",
  "billingPage.plans[2].price": "$49",
  "billingPage.plans[2].features[4]": "SSO/SAML",

  // teamsPage (19)
  "teamsPage.badge": "Ομαδική Συνεργασία",
  "teamsPage.titleStart": "Χτίστε Μαζί με",
  "teamsPage.titleHighlight": "Ομάδες",
  "teamsPage.subtitle": "Φέρτε τη δύναμη του AppNode σε ολόκληρη την ομάδα σας. Συνεργαστείτε σε πραγματικό χρόνο, μοιραστείτε έργα και παραδώστε γρηγορότερα.",
  "teamsPage.startTeamTrial": "Ξεκινήστε Δοκιμή Ομάδας",
  "teamsPage.enterpriseOptions": "Επιλογές Enterprise",
  "teamsPage.teamWorkspace": "Χώρος Εργασίας Ομάδας",
  "teamsPage.online": "online",
  "teamsPage.teamProjects": "Έργα Ομάδας",
  "teamsPage.activity[0].user": "Alex",
  "teamsPage.activity[1].user": "Blake",
  "teamsPage.activity[2].user": "Casey",
  "teamsPage.teamFeatures": "Χαρακτηριστικά Ομάδας",
  "teamsPage.startFreeTeamTrial": "Ξεκινήστε Δωρεάν Δοκιμή Ομάδας",
  "teamsPage.pricing.title": "Τιμολόγηση Ομάδων",
  "teamsPage.pricing.subtitle": "Απλή, διαφανής τιμολόγηση για ομάδες κάθε μεγέθους.",
  "teamsPage.pricing.billedAnnually": "Ετήσια χρέωση",
  "teamsPage.cta.title": "Έτοιμοι να χτίσετε μαζί;",
  "teamsPage.cta.subtitle": "Φέρτε την ομάδα σας στο AppNode και παραδώστε γρηγορότερα από ποτέ.",

  // videosPage (15)
  "videosPage.badge": "Εκπαιδευτικό Βίντεο",
  "videosPage.titleStart": "Πώς",
  "videosPage.titleHighlight": "λειτουργεί",
  "videosPage.subtitle": "Μάθετε τα πάντα για το AppNode με τα ολοκληρωμένα βίντεο tutorials μας. Από το πρώτο έργο σας μέχρι ανάπτυξη σε Cloudflare, Vercel ή GitHub.",
  "videosPage.featured": "Προτεινόμενο",
  "videosPage.playlists": "Λίστες αναπαραγωγής",
  "videosPage.viewAll": "Προβολή όλων",
  "videosPage.views": "προβολές",
  "videosPage.featuredVideo.title": "Πλήρες Tutorial AppNode: Από το Μηδέν σε Ανεπτυγμένη Εφαρμογή",
  "videosPage.featuredVideo.description": "Ο απόλυτος οδηγός για δημιουργία και ανάπτυξη της πρώτης σας εφαρμογής με AppNode. Μάθετε τα πάντα από ρύθμιση λογαριασμού μέχρι ζωντανή ανάπτυξη σε Cloudflare, Vercel ή GitHub Pages.",
  "videosPage.cta.title": "Έτοιμοι να Ξεκινήσετε;",
  "videosPage.cta.subtitle": "Εγγραφείτε σε χιλιάδες δημιουργούς που φτιάχνουν εκπληκτικές εφαρμογές με AppNode.",
  "videosPage.cta.startBuildingFree": "Ξεκινήστε Δωρεάν",
  "videosPage.cta.browseCourses": "Εξερεύνηση Μαθημάτων",
  "videosPage.cta.subscribeYouTube": "Εγγραφή στο YouTube",
};

for (const [path, val] of Object.entries(t)) {
  set(el, path, val);
}

fs.writeFileSync('src/translations/el.json', JSON.stringify(el, null, 2), 'utf8');
console.log('Phase 2 done: 200 small/medium section translations');
