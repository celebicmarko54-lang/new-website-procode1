const fs = require('fs');
const path = require('path');

const PA_PATH = path.join(__dirname, 'src', 'translations', 'pa.json');

function setVal(obj, path, val) {
  const parts = path.split('.');
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (!cur[parts[i]] || typeof cur[parts[i]] !== 'object') cur[parts[i]] = {};
    cur = cur[parts[i]];
  }
  cur[parts[parts.length - 1]] = val;
}

const pa = JSON.parse(fs.readFileSync(PA_PATH, 'utf8'));

let count = 0;

const translations = {
  // ─── STATUS PAGE (20 keys) ───
  "statusPage.title": "ਸਿਸਟਮ ਸਥਿਤੀ",
  "statusPage.subtitle": "AppNode ਸੇਵਾਵਾਂ ਲਈ ਰੀਅਲ-ਟਾਈਮ ਸਥਿਤੀ ਅਤੇ ਅੱਪਟਾਈਮ ਜਾਣਕਾਰੀ",
  "statusPage.allOperational": "ਸਾਰੇ ਸਿਸਟਮ ਕੰਮ ਕਰ ਰਹੇ ਹਨ",
  "statusPage.uptimeTitle": "ਅੱਪਟਾਈਮ - ਪਿਛਲੇ 7 ਦਿਨ",
  "statusPage.servicesTitle": "ਸੇਵਾਵਾਂ",
  "statusPage.incidentsTitle": "ਹਾਲੀਆ ਘਟਨਾਵਾਂ",
  "statusPage.subscribeTitle": "ਸਥਿਤੀ ਅੱਪਡੇਟ ਪ੍ਰਾਪਤ ਕਰੋ",
  "statusPage.subscribeSubtitle": "ਸਿਸਟਮ ਸਥਿਤੀ ਅਤੇ ਘਟਨਾਵਾਂ ਬਾਰੇ ਸੂਚਨਾਵਾਂ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਸਬਸਕ੍ਰਾਈਬ ਕਰੋ",
  "statusPage.emailPlaceholder": "ਆਪਣੀ ਈਮੇਲ ਦਰਜ ਕਰੋ",
  "statusPage.subscribeButton": "ਸਬਸਕ੍ਰਾਈਬ ਕਰੋ",
  "statusPage.operational": "ਕੰਮ ਕਰ ਰਿਹਾ ਹੈ",
  "statusPage.degraded": "ਘਟੀ ਹੋਈ ਪਰਫਾਰਮੈਂਸ",
  "statusPage.outage": "ਵੱਡੀ ਰੁਕਾਵਟ",
  "statusPage.resolved": "ਹੱਲ ਹੋ ਗਿਆ",
  "statusPage.completed": "ਮੁਕੰਮਲ",
  "statusPage.duration": "ਸਮਾਂ:",
  "statusPage.uptime": "ਅੱਪਟਾਈਮ",

  // ─── SECURITY PAGE (12 keys) ───
  "securityPage.badge": "ਐਂਟਰਪ੍ਰਾਈਜ਼-ਗ੍ਰੇਡ ਸੁਰੱਖਿਆ",
  "securityPage.titleHighlight": "ਸੁਰੱਖਿਆ",
  "securityPage.titleSuffix": "ਪਹਿਲਾਂ",
  "securityPage.subtitle": "ਤੁਹਾਡੇ ਡੇਟਾ ਦੀ ਸੁਰੱਖਿਆ ਸਾਡੀ ਪਹਿਲੀ ਤਰਜੀਹ ਹੈ। ਜਾਣੋ ਅਸੀਂ ਤੁਹਾਡੀ ਜਾਣਕਾਰੀ ਨੂੰ ਸੁਰੱਖਿਅਤ ਰੱਖਣ ਲਈ ਕੀ ਕਦਮ ਚੁੱਕਦੇ ਹਾਂ।",
  "securityPage.featuresTitle": "ਸੁਰੱਖਿਆ ਫੀਚਰ",
  "securityPage.practicesTitle": "ਸਾਡੇ ਸੁਰੱਖਿਆ ਅਭਿਆਸ",
  "securityPage.bugBountyTitle": "ਬੱਗ ਬਾਊਂਟੀ ਪ੍ਰੋਗਰਾਮ",
  "securityPage.bugBountyDescription": "ਸੁਰੱਖਿਆ ਵਿੱਚ ਸੁਧਾਰ ਕਰਨ ਵਿੱਚ ਸਾਡੀ ਮਦਦ ਕਰੋ ਅਤੇ ਜ਼ਿੰਮੇਵਾਰੀ ਨਾਲ ਕਮਜ਼ੋਰੀਆਂ ਦੱਸਣ ਲਈ ਇਨਾਮ ਕਮਾਓ।",
  "securityPage.reportTitle": "ਸੁਰੱਖਿਆ ਸਮੱਸਿਆ ਦੀ ਰਿਪੋਰਟ ਕਰੋ",
  "securityPage.reportDescription": "ਜੇ ਤੁਹਾਨੂੰ ਲੱਗਦਾ ਹੈ ਕਿ ਤੁਸੀਂ AppNode ਵਿੱਚ ਸੁਰੱਖਿਆ ਕਮਜ਼ੋਰੀ ਲੱਭੀ ਹੈ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ ਤੁਰੰਤ ਸਾਡੀ ਸੁਰੱਖਿਆ ਟੀਮ ਨੂੰ ਰਿਪੋਰਟ ਕਰੋ।",
  "securityPage.whitepaper": "ਸੁਰੱਖਿਆ ਵ੍ਹਾਈਟਪੇਪਰ",

  // ─── CHANGELOG PAGE (9 scalar keys) ───
  "changelogPage.badge": "ਅੱਪਡੇਟਸ",
  "changelogPage.title": "ਚੇਂਜਲੌਗ",
  "changelogPage.subtitle": "AppNode ਦੇ ਸਾਰੇ ਨਵੀਨਤਮ ਅੱਪਡੇਟ, ਸੁਧਾਰ ਅਤੇ ਫਿਕਸ",
  "changelogPage.stayUpToDate": "ਅੱਪ ਟੂ ਡੇਟ ਰਹੋ",
  "changelogPage.getNotified": "ਨਵੇਂ ਫੀਚਰ ਰਿਲੀਜ਼ ਹੋਣ 'ਤੇ ਸੂਚਨਾ ਪ੍ਰਾਪਤ ਕਰੋ",
  "changelogPage.emailPlaceholder": "ਆਪਣੀ ਈਮੇਲ ਦਰਜ ਕਰੋ",
  "changelogPage.subscribeButton": "ਸਬਸਕ੍ਰਾਈਬ ਕਰੋ",
  "changelogPage.viewOlder": "ਪੁਰਾਣੀਆਂ ਰਿਲੀਜ਼ਾਂ ਦੇਖੋ",
  "changelogPage.changeTypes.new": "ਨਵਾਂ",
  "changelogPage.changeTypes.improved": "ਸੁਧਾਰਿਆ",
  "changelogPage.changeTypes.fixed": "ਠੀਕ ਕੀਤਾ",

  // ─── DASHBOARD PAGE (5 keys) ───
  "dashboardPage.welcome": "ਜੀ ਆਇਆਂ ਨੂੰ",
  "dashboardPage.loggedInAs": "ਤੁਸੀਂ ਲੌਗ ਇਨ ਹੋ",
  "dashboardPage.comingSoon": "ਜਲਦੀ ਆ ਰਿਹਾ ਹੈ",
  "dashboardPage.buildingMagic": "ਅਸੀਂ ਤੁਹਾਡੇ ਲਈ ਕੁਝ ਜਾਦੂਈ ਬਣਾ ਰਹੇ ਹਾਂ",
  "dashboardPage.signOut": "ਸਾਈਨ ਆਊਟ",

  // ─── SETTINGS PAGE (27 keys) ───
  "settingsPage.title": "ਸੈਟਿੰਗਾਂ",
  "settingsPage.generalSettings": "ਆਮ ਸੈਟਿੰਗਾਂ",
  "settingsPage.language": "ਭਾਸ਼ਾ",
  "settingsPage.timezone": "ਸਮਾਂ ਖੇਤਰ",
  "settingsPage.darkMode": "ਡਾਰਕ ਮੋਡ",
  "settingsPage.darkModeDesc": "ਪੂਰੀ ਐਪ ਵਿੱਚ ਡਾਰਕ ਥੀਮ ਵਰਤੋ",
  "settingsPage.notificationPreferences": "ਸੂਚਨਾ ਤਰਜੀਹਾਂ",
  "settingsPage.emailNotifications": "ਈਮੇਲ ਸੂਚਨਾਵਾਂ",
  "settingsPage.emailNotificationsDesc": "ਈਮੇਲ ਰਾਹੀਂ ਪ੍ਰੋਜੈਕਟ ਅੱਪਡੇਟ ਪ੍ਰਾਪਤ ਕਰੋ",
  "settingsPage.pushNotifications": "ਪੁਸ਼ ਸੂਚਨਾਵਾਂ",
  "settingsPage.pushNotificationsDesc": "ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਪੁਸ਼ ਸੂਚਨਾਵਾਂ ਪ੍ਰਾਪਤ ਕਰੋ",
  "settingsPage.marketingEmails": "ਮਾਰਕੀਟਿੰਗ ਈਮੇਲਾਂ",
  "settingsPage.marketingEmailsDesc": "ਸੁਝਾਅ, ਅੱਪਡੇਟ ਅਤੇ ਪੇਸ਼ਕਸ਼ਾਂ ਪ੍ਰਾਪਤ ਕਰੋ",
  "settingsPage.securitySettings": "ਸੁਰੱਖਿਆ ਸੈਟਿੰਗਾਂ",
  "settingsPage.password": "ਪਾਸਵਰਡ",
  "settingsPage.passwordLastChanged": "ਆਖਰੀ ਵਾਰ 30 ਦਿਨ ਪਹਿਲਾਂ ਬਦਲਿਆ",
  "settingsPage.changePassword": "ਪਾਸਵਰਡ ਬਦਲੋ",
  "settingsPage.twoFactorAuth": "ਦੋ-ਪੜਾਅ ਪ੍ਰਮਾਣੀਕਰਨ",
  "settingsPage.twoFactorAuthDesc": "ਸੁਰੱਖਿਆ ਦੀ ਵਾਧੂ ਪਰਤ ਜੋੜੋ",
  "settingsPage.enable2FA": "2FA ਚਾਲੂ ਕਰੋ",
  "settingsPage.activeSessions": "ਸਰਗਰਮ ਸੈਸ਼ਨ",
  "settingsPage.activeSessionsDesc": "ਆਪਣੇ ਸਰਗਰਮ ਸੈਸ਼ਨ ਪ੍ਰਬੰਧਿਤ ਕਰੋ",
  "settingsPage.viewSessions": "ਸੈਸ਼ਨ ਦੇਖੋ",
  "settingsPage.dangerZone": "ਖ਼ਤਰਨਾਕ ਖੇਤਰ",
  "settingsPage.deleteAccount": "ਖਾਤਾ ਮਿਟਾਓ",
  "settingsPage.deleteAccountDesc": "ਆਪਣਾ ਖਾਤਾ ਅਤੇ ਸਾਰਾ ਡੇਟਾ ਪੱਕੇ ਤੌਰ 'ਤੇ ਮਿਟਾਓ",
  "settingsPage.deleteAccountConfirm": "ਖਾਤਾ ਮਿਟਾਉਣਾ ਹੈ?",
  "settingsPage.deleteAccountWarning": "ਇਹ ਕਾਰਵਾਈ ਵਾਪਸ ਨਹੀਂ ਕੀਤੀ ਜਾ ਸਕਦੀ। ਤੁਹਾਡਾ ਸਾਰਾ ਡੇਟਾ ਪੱਕੇ ਤੌਰ 'ਤੇ ਮਿਟਾ ਦਿੱਤਾ ਜਾਵੇਗਾ।",

  // ─── PROFILE PAGE (11 keys) ───
  "profilePage.title": "ਪ੍ਰੋਫਾਈਲ",
  "profilePage.editProfile": "ਪ੍ਰੋਫਾਈਲ ਸੰਪਾਦਿਤ ਕਰੋ",
  "profilePage.fullName": "ਪੂਰਾ ਨਾਮ",
  "profilePage.email": "ਈਮੇਲ",
  "profilePage.role": "ਭੂਮਿਕਾ",
  "profilePage.company": "ਕੰਪਨੀ",
  "profilePage.companyOptional": "ਕੰਪਨੀ (ਵਿਕਲਪਿਕ)",
  "profilePage.companyPlaceholder": "ਤੁਹਾਡੀ ਕੰਪਨੀ ਦਾ ਨਾਮ",
  "profilePage.avatarColor": "ਅਵਤਾਰ ਰੰਗ",
  "profilePage.memberSince": "ਮੈਂਬਰ ਤੋਂ",
  "profilePage.notSpecified": "ਨਿਰਧਾਰਿਤ ਨਹੀਂ",
  "profilePage.saveChanges": "ਤਬਦੀਲੀਆਂ ਸੁਰੱਖਿਅਤ ਕਰੋ",
  "profilePage.saving": "ਸੁਰੱਖਿਅਤ ਹੋ ਰਿਹਾ ਹੈ...",

  // ─── BILLING PAGE (19 scalar keys) ───
  "billingPage.title": "ਬਿਲਿੰਗ",
  "billingPage.currentPlan": "ਮੌਜੂਦਾ ਯੋਜਨਾ",
  "billingPage.upgradeToUnlock": "ਹੋਰ ਫੀਚਰ ਅਨਲੌਕ ਕਰਨ ਲਈ ਅੱਪਗ੍ਰੇਡ ਕਰੋ",
  "billingPage.planRenews": "ਤੁਹਾਡੀ ਯੋਜਨਾ 1 ਦਸੰਬਰ 2025 ਨੂੰ ਨਵਿਆਈ ਜਾਂਦੀ ਹੈ",
  "billingPage.freePlan": "ਮੁਫ਼ਤ ਯੋਜਨਾ",
  "billingPage.active": "ਸਰਗਰਮ",
  "billingPage.availablePlans": "ਉਪਲਬਧ ਯੋਜਨਾਵਾਂ",
  "billingPage.mostPopular": "ਸਭ ਤੋਂ ਪ੍ਰਸਿੱਧ",
  "billingPage.currentPlanLabel": "ਮੌਜੂਦਾ ਯੋਜਨਾ",
  "billingPage.upgrade": "ਅੱਪਗ੍ਰੇਡ ਕਰੋ",
  "billingPage.downgrade": "ਡਾਊਨਗ੍ਰੇਡ ਕਰੋ",
  "billingPage.paymentMethod": "ਭੁਗਤਾਨ ਵਿਧੀ",
  "billingPage.noPaymentRequired": "ਮੁਫ਼ਤ ਯੋਜਨਾ ਲਈ ਕੋਈ ਭੁਗਤਾਨ ਵਿਧੀ ਦੀ ਲੋੜ ਨਹੀਂ।",
  "billingPage.edit": "ਸੰਪਾਦਿਤ ਕਰੋ",
  "billingPage.billingHistory": "ਬਿਲਿੰਗ ਇਤਿਹਾਸ",
  "billingPage.upgradeToTitle": "ਅੱਪਗ੍ਰੇਡ ਕਰੋ",
  "billingPage.upgradeAccessMessage": "ਤੁਹਾਨੂੰ ਸਾਰੇ",
  "billingPage.featuresImmediately": "ਫੀਚਰ ਤੁਰੰਤ ਮਿਲ ਜਾਣਗੇ।",
  "billingPage.confirmUpgrade": "ਅੱਪਗ੍ਰੇਡ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",

  // ─── TEAMS PAGE (16 scalar keys) ───
  "teamsPage.badge": "ਟੀਮ ਸਹਿਯੋਗ",
  "teamsPage.titleStart": "ਨਾਲ ਮਿਲ ਕੇ ਬਣਾਓ",
  "teamsPage.titleHighlight": "ਟੀਮਾਂ",
  "teamsPage.subtitle": "AppNode ਦੀ ਤਾਕਤ ਆਪਣੀ ਪੂਰੀ ਟੀਮ ਤੱਕ ਲੈ ਕੇ ਆਓ। ਰੀਅਲ-ਟਾਈਮ ਵਿੱਚ ਸਹਿਯੋਗ ਕਰੋ, ਪ੍ਰੋਜੈਕਟ ਸਾਂਝੇ ਕਰੋ ਅਤੇ ਮਿਲ ਕੇ ਤੇਜ਼ੀ ਨਾਲ ਸ਼ਿਪ ਕਰੋ।",
  "teamsPage.startTeamTrial": "ਟੀਮ ਟ੍ਰਾਇਲ ਸ਼ੁਰੂ ਕਰੋ",
  "teamsPage.enterpriseOptions": "ਐਂਟਰਪ੍ਰਾਈਜ਼ ਵਿਕਲਪ",
  "teamsPage.teamWorkspace": "ਟੀਮ ਵਰਕਸਪੇਸ",
  "teamsPage.online": "ਔਨਲਾਈਨ",
  "teamsPage.teamProjects": "ਟੀਮ ਪ੍ਰੋਜੈਕਟ",
  "teamsPage.activityTitle": "ਗਤੀਵਿਧੀ",
  "teamsPage.teamFeatures": "ਟੀਮ ਫੀਚਰ",
  "teamsPage.startFreeTeamTrial": "ਮੁਫ਼ਤ ਟੀਮ ਟ੍ਰਾਇਲ ਸ਼ੁਰੂ ਕਰੋ",
  "teamsPage.pricing.title": "ਟੀਮਾਂ ਦੀ ਕੀਮਤ",
  "teamsPage.pricing.subtitle": "ਹਰ ਆਕਾਰ ਦੀਆਂ ਟੀਮਾਂ ਲਈ ਸਧਾਰਨ, ਪਾਰਦਰਸ਼ੀ ਕੀਮਤ।",
  "teamsPage.pricing.billedAnnually": "ਸਾਲਾਨਾ ਬਿਲ ਕੀਤਾ ਜਾਂਦਾ ਹੈ",
  "teamsPage.pricing.perUserMonth": "ਪ੍ਰਤੀ ਯੂਜ਼ਰ/ਮਹੀਨਾ",
  "teamsPage.cta.title": "ਮਿਲ ਕੇ ਬਣਾਉਣ ਲਈ ਤਿਆਰ?",
  "teamsPage.cta.subtitle": "ਆਪਣੀ ਟੀਮ ਨੂੰ AppNode 'ਤੇ ਲਿਆਓ ਅਤੇ ਪਹਿਲਾਂ ਨਾਲੋਂ ਤੇਜ਼ ਸ਼ਿਪ ਕਰੋ।",

  // ─── VIDEOS PAGE (15 keys) ───
  "videosPage.badge": "ਵੀਡੀਓ ਸਿੱਖਿਆ",
  "videosPage.titleStart": "ਇਹ ਕਿਵੇਂ",
  "videosPage.titleHighlight": "ਕੰਮ ਕਰਦਾ ਹੈ",
  "videosPage.subtitle": "ਸਾਡੇ ਵਿਆਪਕ ਵੀਡੀਓ ਟਿਊਟੋਰੀਅਲਾਂ ਨਾਲ AppNode ਬਾਰੇ ਸਭ ਕੁਝ ਸਿੱਖੋ। ਤੁਹਾਡੇ ਪਹਿਲੇ ਪ੍ਰੋਜੈਕਟ ਤੋਂ Cloudflare, Vercel ਜਾਂ GitHub 'ਤੇ ਡਿਪਲੌਇ ਕਰਨ ਤੱਕ।",
  "videosPage.featured": "ਫੀਚਰਡ",
  "videosPage.playlists": "ਪਲੇਅਲਿਸਟਾਂ",
  "videosPage.viewAll": "ਸਭ ਦੇਖੋ",
  "videosPage.views": "ਵਿਊਜ਼",
  "videosPage.featuredVideo.title": "ਪੂਰਾ AppNode ਟਿਊਟੋਰੀਅਲ: ਜ਼ੀਰੋ ਤੋਂ ਡਿਪਲੌਇਡ ਐਪ ਤੱਕ",
  "videosPage.featuredVideo.description": "AppNode ਨਾਲ ਆਪਣੀ ਪਹਿਲੀ ਐਪਲੀਕੇਸ਼ਨ ਬਣਾਉਣ ਅਤੇ ਡਿਪਲੌਇ ਕਰਨ ਦੀ ਅੰਤਿਮ ਗਾਈਡ। ਖਾਤਾ ਸੈੱਟਅੱਪ ਤੋਂ Cloudflare, Vercel ਜਾਂ GitHub Pages 'ਤੇ ਲਾਈਵ ਡਿਪਲੌਇਮੈਂਟ ਤੱਕ ਸਭ ਕੁਝ ਸਿੱਖੋ।",
  "videosPage.cta.title": "ਬਣਾਉਣਾ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਤਿਆਰ?",
  "videosPage.cta.subtitle": "ਹਜ਼ਾਰਾਂ ਸਿਰਜਕਾਂ ਨਾਲ ਜੁੜੋ ਜੋ AppNode ਨਾਲ ਸ਼ਾਨਦਾਰ ਐਪਲੀਕੇਸ਼ਨਾਂ ਬਣਾ ਰਹੇ ਹਨ।",
  "videosPage.cta.startBuildingFree": "ਮੁਫ਼ਤ ਬਣਾਉਣਾ ਸ਼ੁਰੂ ਕਰੋ",
  "videosPage.cta.browseCourses": "ਕੋਰਸ ਬ੍ਰਾਊਜ਼ ਕਰੋ",
  "videosPage.cta.subscribeYouTube": "YouTube 'ਤੇ ਸਬਸਕ੍ਰਾਈਬ ਕਰੋ",
};

// Apply all setVal translations
for (const [key, val] of Object.entries(translations)) {
  setVal(pa, key, val);
  count++;
}

// ─── STATUS PAGE: Array assignments ───
pa.statusPage = pa.statusPage || {};
pa.statusPage.services = [
  { name: "API", status: "ਕੰਮ ਕਰ ਰਿਹਾ ਹੈ" },
  { name: "ਵੈੱਬ ਐਪਲੀਕੇਸ਼ਨ", status: "ਕੰਮ ਕਰ ਰਿਹਾ ਹੈ" },
  { name: "ਕੋਡ ਜਨਰੇਸ਼ਨ", status: "ਕੰਮ ਕਰ ਰਿਹਾ ਹੈ" },
  { name: "ਡਿਪਲੌਇਮੈਂਟ ਸੇਵਾਵਾਂ", status: "ਕੰਮ ਕਰ ਰਿਹਾ ਹੈ" },
  { name: "ਡੇਟਾਬੇਸ ਕਨੈਕਸ਼ਨ", status: "ਕੰਮ ਕਰ ਰਿਹਾ ਹੈ" },
  { name: "ਪ੍ਰਮਾਣੀਕਰਨ", status: "ਕੰਮ ਕਰ ਰਿਹਾ ਹੈ" },
  { name: "CDN ਅਤੇ ਐਸੇਟਸ", status: "ਕੰਮ ਕਰ ਰਿਹਾ ਹੈ" },
  { name: "ਰੀਅਲ-ਟਾਈਮ ਸਹਿਯੋਗ", status: "ਕੰਮ ਕਰ ਰਿਹਾ ਹੈ" }
];
count++;

pa.statusPage.incidents = [
  { date: "25 ਨਵੰਬਰ 2025", title: "API ਜਵਾਬ ਸਮਾਂ ਵਧਿਆ", status: "ਹੱਲ ਹੋ ਗਿਆ", duration: "23 ਮਿੰਟ", description: "ਡੇਟਾਬੇਸ ਕਨੈਕਸ਼ਨ ਪੂਲ ਸਮੱਸਿਆ ਕਾਰਨ API ਜਵਾਬ ਸਮਾਂ ਵਧਿਆ। ਕਨੈਕਸ਼ਨ ਪੂਲ ਵਧਾ ਕੇ ਅਤੇ ਕਿਊਰੀ ਪੈਟਰਨ ਅਨੁਕੂਲ ਕਰਕੇ ਸਮੱਸਿਆ ਹੱਲ ਕੀਤੀ ਗਈ।" },
  { date: "18 ਨਵੰਬਰ 2025", title: "ਡਿਪਲੌਇਮੈਂਟ ਸੇਵਾ ਘਟੀ", status: "ਹੱਲ ਹੋ ਗਿਆ", duration: "45 ਮਿੰਟ", description: "ਕਤਾਰ ਦੀ ਗਹਿਰਾਈ ਵਧਣ ਕਾਰਨ ਕੁਝ ਡਿਪਲੌਇਮੈਂਟਾਂ ਵਿੱਚ ਦੇਰੀ ਹੋਈ। ਭਵਿੱਖ ਵਿੱਚ ਇਹ ਰੋਕਣ ਲਈ ਆਟੋ-ਸਕੇਲਿੰਗ ਲਾਗੂ ਕੀਤੀ ਗਈ।" },
  { date: "10 ਨਵੰਬਰ 2025", title: "ਨਿਯਤ ਮੇਨਟੀਨੈਂਸ", status: "ਮੁਕੰਮਲ", duration: "2 ਘੰਟੇ", description: "ਡੇਟਾਬੇਸ ਮਾਈਗ੍ਰੇਸ਼ਨ ਅਤੇ ਬੁਨਿਆਦੀ ਢਾਂਚੇ ਦੇ ਅੱਪਗ੍ਰੇਡ ਲਈ ਯੋਜਨਾਬੱਧ ਮੇਨਟੀਨੈਂਸ ਵਿੰਡੋ। ਸਾਰੀਆਂ ਸੇਵਾਵਾਂ ਸਮੇਂ ਅਨੁਸਾਰ ਬਹਾਲ ਕੀਤੀਆਂ ਗਈਆਂ।" }
];
count++;

pa.statusPage.uptimeDays = [
  "ਸੋਮ",
  "ਮੰਗਲ",
  "ਬੁੱਧ",
  "ਵੀਰ",
  "ਸ਼ੁੱਕਰ",
  "ਸ਼ਨੀ",
  "ਐਤ"
];
count++;

// ─── SECURITY PAGE: Array assignments ───
pa.securityPage = pa.securityPage || {};
pa.securityPage.features = [
  { icon: "🔐", title: "ਰੈਸਟ ਅਤੇ ਟ੍ਰਾਂਜ਼ਿਟ ਵਿੱਚ ਇੰਕ੍ਰਿਪਸ਼ਨ", description: "ਸਾਰਾ ਡੇਟਾ AES-256 ਇੰਕ੍ਰਿਪਸ਼ਨ ਨਾਲ ਰੈਸਟ ਵਿੱਚ ਅਤੇ TLS 1.3 ਨਾਲ ਟ੍ਰਾਂਜ਼ਿਟ ਵਿੱਚ ਇੰਕ੍ਰਿਪਟ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।" },
  { icon: "🛡️", title: "SOC 2 Type II ਪ੍ਰਮਾਣਿਤ", description: "ਅਸੀਂ SOC 2 Type II ਪਾਲਣਾ ਬਣਾਈ ਰੱਖਦੇ ਹਾਂ, ਸੁਤੰਤਰ ਤੀਜੀ ਧਿਰ ਆਡੀਟਰਾਂ ਦੁਆਰਾ ਪ੍ਰਮਾਣਿਤ।" },
  { icon: "🔒", title: "ਦੋ-ਪੜਾਅ ਪ੍ਰਮਾਣੀਕਰਨ", description: "ਪ੍ਰਮਾਣੀਕਰਨ ਐਪਾਂ ਜਾਂ ਹਾਰਡਵੇਅਰ ਸੁਰੱਖਿਆ ਕੁੰਜੀਆਂ ਨਾਲ 2FA ਵਰਤ ਕੇ ਆਪਣਾ ਖਾਤਾ ਸੁਰੱਖਿਅਤ ਕਰੋ।" },
  { icon: "🌐", title: "SSO ਅਤੇ SAML", description: "SAML 2.0 ਅਤੇ OAuth ਪ੍ਰੋਵਾਈਡਰਾਂ ਦੇ ਸਮਰਥਨ ਨਾਲ ਐਂਟਰਪ੍ਰਾਈਜ਼-ਗ੍ਰੇਡ ਸਿੰਗਲ ਸਾਈਨ-ਆਨ।" },
  { icon: "📝", title: "ਆਡਿਟ ਲੌਗ", description: "ਸਾਰੀਆਂ ਖਾਤਾ ਗਤੀਵਿਧੀਆਂ ਅਤੇ ਤਬਦੀਲੀਆਂ ਲਈ ਵਿਆਪਕ ਆਡਿਟ ਲੌਗ।" },
  { icon: "🔍", title: "ਕਮਜ਼ੋਰੀ ਸਕੈਨਿੰਗ", description: "ਲਗਾਤਾਰ ਆਟੋਮੈਟਿਕ ਸੁਰੱਖਿਆ ਸਕੈਨਿੰਗ ਅਤੇ ਨਿਯਮਿਤ ਪੈਨੀਟ੍ਰੇਸ਼ਨ ਟੈਸਟਿੰਗ।" },
  { icon: "💾", title: "ਡੇਟਾ ਬੈਕਅੱਪ", description: "ਪੁਆਇੰਟ-ਇਨ-ਟਾਈਮ ਰਿਕਵਰੀ ਸਮਰੱਥਾਵਾਂ ਨਾਲ ਆਟੋਮੈਟਿਕ ਰੋਜ਼ਾਨਾ ਬੈਕਅੱਪ।" },
  { icon: "🚨", title: "ਘਟਨਾ ਜਵਾਬ", description: "ਤੇਜ਼ ਘਟਨਾ ਜਵਾਬ ਪ੍ਰਕਿਰਿਆਵਾਂ ਨਾਲ 24/7 ਸੁਰੱਖਿਆ ਨਿਗਰਾਨੀ।" }
];
count++;

pa.securityPage.certifications = [
  { name: "SOC 2 Type II", icon: "✓", description: "ਸੁਰੱਖਿਆ, ਉਪਲਬਧਤਾ ਅਤੇ ਗੋਪਨੀਯਤਾ" },
  { name: "GDPR", icon: "✓", description: "EU ਡੇਟਾ ਸੁਰੱਖਿਆ ਪਾਲਣਾ" },
  { name: "CCPA", icon: "✓", description: "ਕੈਲੀਫੋਰਨੀਆ ਗੋਪਨੀਯਤਾ ਅਧਿਕਾਰ ਐਕਟ" },
  { name: "ISO 27001", icon: "✓", description: "ਜਾਣਕਾਰੀ ਸੁਰੱਖਿਆ ਪ੍ਰਬੰਧਨ" }
];
count++;

pa.securityPage.practices = [
  {
    title: "ਸੁਰੱਖਿਅਤ ਡਿਵੈਲਪਮੈਂਟ",
    items: [
      "ਸਾਰੀਆਂ ਤਬਦੀਲੀਆਂ ਲਈ ਕੋਡ ਸਮੀਖਿਆ",
      "CI/CD ਵਿੱਚ ਆਟੋਮੈਟਿਕ ਸੁਰੱਖਿਆ ਟੈਸਟਿੰਗ",
      "ਨਿਰਭਰਤਾ ਕਮਜ਼ੋਰੀ ਸਕੈਨਿੰਗ",
      "ਡਿਵੈਲਪਰਾਂ ਲਈ ਨਿਯਮਿਤ ਸੁਰੱਖਿਆ ਸਿਖਲਾਈ"
    ]
  },
  {
    title: "ਬੁਨਿਆਦੀ ਢਾਂਚਾ ਸੁਰੱਖਿਆ",
    items: [
      "AWS/GCP 'ਤੇ ਕਲਾਊਡ ਬੁਨਿਆਦੀ ਢਾਂਚਾ",
      "ਨੈੱਟਵਰਕ ਵੰਡ ਅਤੇ ਫਾਇਰਵਾਲ",
      "DDoS ਸੁਰੱਖਿਆ ਅਤੇ ਰੋਕਥਾਮ",
      "ਘੁਸਪੈਠ ਖੋਜ ਪ੍ਰਣਾਲੀਆਂ"
    ]
  },
  {
    title: "ਪਹੁੰਚ ਕੰਟਰੋਲ",
    items: [
      "ਭੂਮਿਕਾ-ਅਧਾਰਿਤ ਪਹੁੰਚ ਕੰਟਰੋਲ (RBAC)",
      "ਘੱਟੋ-ਘੱਟ ਅਧਿਕਾਰ ਦਾ ਸਿਧਾਂਤ",
      "ਨਿਯਮਿਤ ਪਹੁੰਚ ਸਮੀਖਿਆ",
      "ਸੁਰੱਖਿਅਤ ਕ੍ਰੈਡੈਂਸ਼ੀਅਲ ਪ੍ਰਬੰਧਨ"
    ]
  }
];
count++;

// ─── CHANGELOG PAGE: releases object ───
pa.changelogPage = pa.changelogPage || {};
pa.changelogPage.releases = {
  v250: {
    date: "28 ਨਵੰਬਰ 2025",
    title: "ਸਮਾਰਟ ਸਟਾਈਲ ਅਤੇ ਆਟੋ ਲੇਆਊਟ",
    description: "AI-ਸੰਚਾਲਿਤ ਸਟਾਈਲਿੰਗ ਪੇਸ਼ ਕਰ ਰਹੇ ਹਾਂ ਜੋ ਤੁਹਾਡੀਆਂ ਐਪਲੀਕੇਸ਼ਨਾਂ ਲਈ ਆਟੋਮੈਟਿਕ ਸੁੰਦਰ, ਇਕਸਾਰ ਡਿਜ਼ਾਈਨ ਬਣਾਉਂਦੀ ਹੈ।",
    changes: [
      "ਸਮਾਰਟ ਸਟਾਈਲ: AI ਤੁਹਾਡੀ ਐਪ ਵਿੱਚ ਇਕਸਾਰ ਸਟਾਈਲਿੰਗ ਆਟੋਮੈਟਿਕ ਲਾਗੂ ਕਰਦਾ ਹੈ",
      "ਆਟੋ ਲੇਆਊਟ: ਸਮੱਗਰੀ ਅਨੁਸਾਰ ਢਲਣ ਵਾਲੇ ਸਮਾਰਟ ਰਿਸਪਾਂਸਿਵ ਲੇਆਊਟ",
      "ਥੀਮ ਪ੍ਰੀਸੈੱਟ: 20+ ਪੇਸ਼ੇਵਰ ਡਿਜ਼ਾਈਨ ਕੀਤੀਆਂ ਥੀਮਾਂ ਵਿੱਚੋਂ ਚੁਣੋ",
      "ਅਨੁਕੂਲ ਪ੍ਰੌਂਪਟਾਂ ਨਾਲ ਤੇਜ਼ ਕੋਡ ਜਨਰੇਸ਼ਨ",
      "ਜਨਰੇਟ ਕੀਤੇ ਕੋਡ ਵਿੱਚ ਬਿਹਤਰ TypeScript ਸਮਰਥਨ",
      "ਮੋਬਾਈਲ ਡਿਵਾਈਸਾਂ 'ਤੇ ਲੇਆਊਟ ਸਮੱਸਿਆਵਾਂ ਠੀਕ ਕੀਤੀਆਂ"
    ]
  },
  v242: {
    date: "15 ਨਵੰਬਰ 2025",
    title: "ਪਰਫਾਰਮੈਂਸ ਸੁਧਾਰ",
    description: "ਵੱਡੇ ਪਰਫਾਰਮੈਂਸ ਅਨੁਕੂਲਨ ਅਤੇ ਬੱਗ ਫਿਕਸ।",
    changes: [
      "50% ਤੇਜ਼ ਪ੍ਰੋਜੈਕਟ ਲੋਡਿੰਗ ਸਮਾਂ",
      "ਐਡੀਟਰ ਵਿੱਚ ਘੱਟ ਮੈਮੋਰੀ ਵਰਤੋਂ",
      "ਵੱਡੇ ਪ੍ਰੋਜੈਕਟਾਂ ਲਈ ਕੋਡ ਐਕਸਪੋਰਟ ਫੇਲ੍ਹ ਹੋਣ ਦੀ ਸਮੱਸਿਆ ਠੀਕ ਕੀਤੀ",
      "ਤੀਜੀ ਧਿਰ ਪ੍ਰੋਵਾਈਡਰਾਂ ਨਾਲ ਪ੍ਰਮਾਣੀਕਰਨ ਸਮੱਸਿਆਵਾਂ ਠੀਕ ਕੀਤੀਆਂ"
    ]
  },
  v240: {
    date: "1 ਨਵੰਬਰ 2025",
    title: "ਟੀਮ ਸਹਿਯੋਗ",
    description: "ਆਪਣੀ ਟੀਮ ਨਾਲ ਰੀਅਲ-ਟਾਈਮ ਵਿੱਚ ਮਿਲ ਕੇ ਕੰਮ ਕਰੋ।",
    changes: [
      "ਰੀਅਲ-ਟਾਈਮ ਸਹਿਯੋਗ: ਕਈ ਯੂਜ਼ਰ ਇੱਕੋ ਸਮੇਂ ਸੰਪਾਦਿਤ ਕਰ ਸਕਦੇ ਹਨ",
      "ਭੂਮਿਕਾ-ਅਧਾਰਿਤ ਅਨੁਮਤੀਆਂ ਨਾਲ ਟੀਮ ਵਰਕਸਪੇਸ",
      "ਕੰਪੋਨੈਂਟਾਂ 'ਤੇ ਟਿੱਪਣੀਆਂ ਅਤੇ ਫੀਡਬੈਕ",
      "ਬਹਾਲੀ ਫੰਕਸ਼ਨੈਲਿਟੀ ਨਾਲ ਸੰਸਕਰਨ ਇਤਿਹਾਸ",
      "ਇੱਕੋ ਸਮੇਂ ਸੰਪਾਦਨ ਲਈ ਬਿਹਤਰ ਟਕਰਾਅ ਹੱਲ"
    ]
  },
  v230: {
    date: "15 ਅਕਤੂਬਰ 2025",
    title: "ਡੇਟਾਬੇਸ ਏਕੀਕਰਨ",
    description: "ਆਪਣੀਆਂ ਐਪਾਂ ਨੂੰ ਡੇਟਾਬੇਸ ਨਾਲ ਆਸਾਨੀ ਨਾਲ ਜੋੜੋ।",
    changes: [
      "PostgreSQL ਡੇਟਾਬੇਸ ਲਈ Supabase ਏਕੀਕਰਨ",
      "ਵਿਜ਼ੁਅਲ ਡੇਟਾਬੇਸ ਸਕੀਮਾ ਡਿਜ਼ਾਈਨਰ",
      "ਆਟੋ-ਜਨਰੇਟ ਕੀਤੇ CRUD ਆਪਰੇਸ਼ਨ",
      "ਰੀਅਲ-ਟਾਈਮ ਡੇਟਾ ਸਬਸਕ੍ਰਿਪਸ਼ਨ",
      "ਡੇਟਾਬੇਸ ਕਨੈਕਸ਼ਨਾਂ ਦੀ ਬਿਹਤਰ ਸੰਭਾਲ",
      "ਪ੍ਰੋਡਕਸ਼ਨ ਬਿਲਡਾਂ ਵਿੱਚ ਡੇਟਾ ਫੈਚਿੰਗ ਸਮੱਸਿਆਵਾਂ ਠੀਕ ਕੀਤੀਆਂ"
    ]
  },
  v220: {
    date: "28 ਸਤੰਬਰ 2025",
    title: "ਕੰਪੋਨੈਂਟ ਲਾਇਬ੍ਰੇਰੀ",
    description: "100+ ਨਵੇਂ ਕੰਪੋਨੈਂਟਾਂ ਨਾਲ ਵਧਾਈ ਗਈ ਕੰਪੋਨੈਂਟ ਲਾਇਬ੍ਰੇਰੀ।",
    changes: [
      "100+ ਨਵੇਂ ਪ੍ਰੀ-ਬਿਲਟ ਕੰਪੋਨੈਂਟ",
      "ਚਾਰਟ ਅਤੇ ਡੇਟਾ ਵਿਜ਼ੁਅਲਾਈਜ਼ੇਸ਼ਨ ਕੰਪੋਨੈਂਟ",
      "ਪ੍ਰਮਾਣਿਕਤਾ ਨਾਲ ਫਾਰਮ ਬਿਲਡਰ",
      "ਐਨੀਮੇਸ਼ਨ ਪ੍ਰੀਸੈੱਟ ਲਾਇਬ੍ਰੇਰੀ",
      "ਕੰਪੋਨੈਂਟ ਖੋਜ ਅਤੇ ਫਿਲਟਰਿੰਗ"
    ]
  },
  v210: {
    date: "10 ਸਤੰਬਰ 2025",
    title: "ਪ੍ਰਮਾਣੀਕਰਨ ਆਸਾਨ ਬਣਾਇਆ",
    description: "ਸਕਿੰਟਾਂ ਵਿੱਚ ਆਪਣੀਆਂ ਐਪਾਂ ਵਿੱਚ ਯੂਜ਼ਰ ਪ੍ਰਮਾਣੀਕਰਨ ਜੋੜੋ।",
    changes: [
      "ਇੱਕ-ਕਲਿੱਕ ਪ੍ਰਮਾਣੀਕਰਨ ਸੈੱਟਅੱਪ",
      "ਸੋਸ਼ਲ ਲੌਗਇਨ ਪ੍ਰੋਵਾਈਡਰ (Google, GitHub ਆਦਿ)",
      "ਯੂਜ਼ਰ ਪ੍ਰਬੰਧਨ ਡੈਸ਼ਬੋਰਡ",
      "ਪਾਸਵਰਡ ਰੀਸੈੱਟ ਫਲੋ",
      "ਆਥ ਟੋਕਨਾਂ ਲਈ ਸੁਰੱਖਿਆ ਸੁਧਾਰ"
    ]
  }
};
count++;

// ─── SETTINGS PAGE: tabs array ───
pa.settingsPage = pa.settingsPage || {};
pa.settingsPage.tabs = [
  "ਆਮ",
  "ਸੂਚਨਾਵਾਂ",
  "ਸੁਰੱਖਿਆ",
  "ਖ਼ਤਰਨਾਕ ਖੇਤਰ"
];
count++;

// ─── BILLING PAGE: plans array ───
pa.billingPage = pa.billingPage || {};
pa.billingPage.plans = [
  {
    name: "ਮੁਫ਼ਤ",
    price: "$0",
    period: "ਹਮੇਸ਼ਾ",
    features: [
      "3 ਪ੍ਰੋਜੈਕਟ",
      "ਬੁਨਿਆਦੀ AI ਫੀਚਰ",
      "ਕਮਿਊਨਿਟੀ ਸਪੋਰਟ",
      "1GB ਸਟੋਰੇਜ"
    ]
  },
  {
    name: "ਪ੍ਰੋ",
    price: "$20",
    period: "ਪ੍ਰਤੀ ਮਹੀਨਾ",
    features: [
      "ਅਸੀਮਤ ਪ੍ਰੋਜੈਕਟ",
      "ਐਡਵਾਂਸਡ AI",
      "ਤਰਜੀਹੀ ਸਪੋਰਟ",
      "10GB ਸਟੋਰੇਜ",
      "ਕਸਟਮ ਡੋਮੇਨ",
      "ਟੀਮ ਸਹਿਯੋਗ"
    ]
  },
  {
    name: "ਟੀਮ",
    price: "$49",
    period: "ਪ੍ਰਤੀ ਮਹੀਨਾ",
    features: [
      "ਪ੍ਰੋ ਵਿੱਚ ਸਭ ਕੁਝ",
      "ਅਸੀਮਤ ਮੈਂਬਰ",
      "ਐਡਮਿਨ ਕੰਟਰੋਲ",
      "100GB ਸਟੋਰੇਜ",
      "SSO/SAML",
      "ਸਮਰਪਿਤ ਸਪੋਰਟ"
    ]
  }
];
count++;

// ─── BILLING PAGE: invoices array ───
pa.billingPage.invoices = [
  { date: "1 ਨਵੰ 2025", amount: "$0.00", status: "ਭੁਗਤਾਨ ਹੋਇਆ", plan: "ਮੁਫ਼ਤ" },
  { date: "1 ਅਕਤੂ 2025", amount: "$0.00", status: "ਭੁਗਤਾਨ ਹੋਇਆ", plan: "ਮੁਫ਼ਤ" },
  { date: "1 ਸਤੰ 2025", amount: "$0.00", status: "ਭੁਗਤਾਨ ਹੋਇਆ", plan: "ਮੁਫ਼ਤ" }
];
count++;

// ─── TEAMS PAGE: activity array ───
pa.teamsPage = pa.teamsPage || {};
pa.teamsPage.activity = [
  { user: "ਐਲੈਕਸ", action: "main ਵਿੱਚ ਪੁਸ਼ ਕੀਤਾ", time: "2 ਮਿੰਟ ਪਹਿਲਾਂ" },
  { user: "ਬਲੇਕ", action: "prod ਵਿੱਚ ਡਿਪਲੌਇ ਕੀਤਾ", time: "15 ਮਿੰਟ ਪਹਿਲਾਂ" },
  { user: "ਕੇਸੀ", action: "PR #42 ਦੀ ਸਮੀਖਿਆ ਕੀਤੀ", time: "1 ਘੰਟਾ ਪਹਿਲਾਂ" }
];
count++;

// ─── TEAMS PAGE: pricing.features array ───
pa.teamsPage.pricing = pa.teamsPage.pricing || {};
pa.teamsPage.pricing.features = [
  "Core ਵਿੱਚ ਸਭ ਕੁਝ",
  "$40/ਮਹੀਨਾ ਵਰਤੋਂ ਕ੍ਰੈਡਿਟ ਸ਼ਾਮਲ",
  "50 ਦਰਸ਼ਕ ਸੀਟਾਂ",
  "ਕੇਂਦਰੀ ਬਿਲਿੰਗ",
  "ਭੂਮਿਕਾ-ਅਧਾਰਿਤ ਪਹੁੰਚ ਕੰਟਰੋਲ",
  "ਨਿੱਜੀ ਡਿਪਲੌਇਮੈਂਟ",
  "ਤਰਜੀਹੀ ਸਪੋਰਟ"
];
count++;

// ─── TEAMS PAGE: features array ───
pa.teamsPage.features = [
  { title: "ਰੀਅਲ-ਟਾਈਮ ਸਹਿਯੋਗ", description: "ਇੱਕੋ ਪ੍ਰੋਜੈਕਟ 'ਤੇ ਇੱਕੋ ਸਮੇਂ ਕੰਮ ਕਰੋ। ਕਰਸਰ, ਸੰਪਾਦਨ ਅਤੇ ਤਬਦੀਲੀਆਂ ਰੀਅਲ-ਟਾਈਮ ਵਿੱਚ ਦੇਖੋ।" },
  { title: "ਭੂਮਿਕਾ-ਅਧਾਰਿਤ ਪਹੁੰਚ", description: "ਵਿਸਤ੍ਰਿਤ ਅਨੁਮਤੀਆਂ ਨਾਲ ਕੰਟਰੋਲ ਕਰੋ ਕੌਣ ਦੇਖ, ਸੰਪਾਦਿਤ ਅਤੇ ਡਿਪਲੌਇ ਕਰ ਸਕਦਾ ਹੈ।" },
  { title: "ਸਾਂਝੇ ਵਰਕਸਪੇਸ", description: "ਸਾਂਝੇ ਟੀਮ ਸਪੇਸ ਵਿੱਚ ਪ੍ਰੋਜੈਕਟ, ਟੈਂਪਲੇਟ ਅਤੇ ਸਰੋਤ ਵਿਵਸਥਿਤ ਕਰੋ।" },
  { title: "ਬਿਲਟ-ਇਨ ਚੈਟ", description: "ਐਡੀਟਰ ਦੇ ਅੰਦਰ ਸਿੱਧੇ ਆਪਣੀ ਟੀਮ ਨਾਲ ਸੰਚਾਰ ਕਰੋ।" },
  { title: "ਟੀਮ ਐਨਾਲਿਟਿਕਸ", description: "ਉਤਪਾਦਕਤਾ, ਡਿਪਲੌਇਮੈਂਟ ਫ੍ਰੀਕੁਐਂਸੀ ਅਤੇ ਪ੍ਰੋਜੈਕਟ ਸਿਹਤ ਟ੍ਰੈਕ ਕਰੋ।" },
  { title: "ਕੇਂਦਰੀ ਬਿਲਿੰਗ", description: "ਇੱਕ ਡੈਸ਼ਬੋਰਡ ਤੋਂ ਸਾਰੀਆਂ ਟੀਮ ਸਬਸਕ੍ਰਿਪਸ਼ਨਾਂ ਅਤੇ ਵਰਤੋਂ ਪ੍ਰਬੰਧਿਤ ਕਰੋ।" }
];
count++;

fs.writeFileSync(PA_PATH, JSON.stringify(pa, null, 2), 'utf8');

// ─── Print totals per section ───
const sectionCounts = {
  'statusPage (scalar keys)': 17,
  'statusPage (arrays: services, incidents, uptimeDays)': 3,
  'securityPage (scalar keys)': 11,
  'securityPage (arrays: features, certifications, practices)': 3,
  'changelogPage (scalar keys)': 11,
  'changelogPage (releases object)': 1,
  'dashboardPage': 5,
  'settingsPage (scalar keys)': 27,
  'settingsPage (tabs array)': 1,
  'profilePage': 13,
  'billingPage (scalar keys)': 19,
  'billingPage (arrays: plans, invoices)': 2,
  'teamsPage (scalar keys)': 16,
  'teamsPage (arrays: activity, pricing.features, features)': 3,
  'videosPage': 15,
};

console.log(`\nPhase 7 complete: ${count} keys/entries added to pa.json\n`);
console.log('Totals per section:');
let total = 0;
for (const [section, c] of Object.entries(sectionCounts)) {
  console.log(`  ${section}: ${c}`);
  total += c;
}
console.log(`\n  TOTAL: ${total}`);
