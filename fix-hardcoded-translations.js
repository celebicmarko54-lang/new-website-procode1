const fs = require('fs');
const path = require('path');

function setByPath(obj, pathStr, value) {
  const keys = pathStr.split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) current[keys[i]] = {};
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
}

// Read both JSON files
const enPath = path.join(__dirname, 'src/translations/en.json');
const swPath = path.join(__dirname, 'src/translations/sw.json');
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const sw = JSON.parse(fs.readFileSync(swPath, 'utf8'));

// ============ CAREERS PAGE ============
const careersData = {
  en: {
    'careersPage.openings': [
      { title: 'Senior Full Stack Engineer', department: 'Engineering', location: 'San Francisco, CA / Remote', type: 'Full-time', description: 'Build and scale our AI-powered development platform.' },
      { title: 'Machine Learning Engineer', department: 'AI', location: 'San Francisco, CA / Remote', type: 'Full-time', description: 'Develop and improve our AI code generation models.' },
      { title: 'Product Designer', department: 'Design', location: 'Remote', type: 'Full-time', description: 'Design intuitive experiences for our platform.' },
      { title: 'Developer Advocate', department: 'Developer Relations', location: 'Remote', type: 'Full-time', description: 'Build community and create educational content.' },
      { title: 'Technical Writer', department: 'Documentation', location: 'Remote', type: 'Full-time', description: 'Create world-class documentation and tutorials.' },
      { title: 'Growth Marketing Manager', department: 'Marketing', location: 'San Francisco, CA / Remote', type: 'Full-time', description: 'Drive user acquisition and growth initiatives.' },
    ],
    'careersPage.benefits': [
      { icon: '💰', title: 'Competitive Salary', description: 'Top-of-market compensation packages' },
      { icon: '📈', title: 'Equity', description: 'Ownership stake in the company' },
      { icon: '🏥', title: 'Health & Wellness', description: 'Comprehensive medical, dental, and vision' },
      { icon: '🏠', title: 'Remote First', description: 'Work from anywhere in the world' },
      { icon: '🌴', title: 'Unlimited PTO', description: 'Take the time you need to recharge' },
      { icon: '📚', title: 'Learning Budget', description: '$2,000 annual learning stipend' },
      { icon: '💻', title: 'Equipment', description: 'Latest MacBook and gear of your choice' },
      { icon: '🎉', title: 'Team Retreats', description: 'Annual company-wide gatherings' },
    ],
    'careersPage.companyValues': [
      { emoji: '🚀', title: 'Move Fast', description: 'We ship quickly and iterate based on feedback' },
      { emoji: '🎯', title: 'User Obsessed', description: 'Every decision starts with the user' },
      { emoji: '🔓', title: 'Default Open', description: 'Transparency in everything we do' },
      { emoji: '🤝', title: 'One Team', description: 'We succeed and fail together' },
    ],
  },
  sw: {
    'careersPage.openings': [
      { title: 'Mhandisi Mkuu wa Full Stack', department: 'Uhandisi', location: 'San Francisco, CA / Mbali', type: 'Wakati Kamili', description: 'Jenga na upanue jukwaa letu la maendeleo linalotumia AI.' },
      { title: 'Mhandisi wa Kujifunza kwa Mashine', department: 'AI', location: 'San Francisco, CA / Mbali', type: 'Wakati Kamili', description: 'Tengeneza na uboreshe mifumo yetu ya kuzalisha msimbo kwa AI.' },
      { title: 'Mbuni wa Bidhaa', department: 'Muundo', location: 'Mbali', type: 'Wakati Kamili', description: 'Buni uzoefu unaoeleweka kwa jukwaa letu.' },
      { title: 'Mtetezi wa Wasanidi', department: 'Uhusiano wa Wasanidi', location: 'Mbali', type: 'Wakati Kamili', description: 'Jenga jumuiya na uunde maudhui ya kielimu.' },
      { title: 'Mwandishi wa Kiufundi', department: 'Nyaraka', location: 'Mbali', type: 'Wakati Kamili', description: 'Unda nyaraka na mafunzo ya kiwango cha juu.' },
      { title: 'Meneja wa Masoko ya Ukuaji', department: 'Masoko', location: 'San Francisco, CA / Mbali', type: 'Wakati Kamili', description: 'Endesha upataji wa watumiaji na mipango ya ukuaji.' },
    ],
    'careersPage.benefits': [
      { icon: '💰', title: 'Mshahara wa Ushindani', description: 'Vifurushi vya fidia vya kiwango cha juu sokoni' },
      { icon: '📈', title: 'Hisa', description: 'Sehemu ya umiliki katika kampuni' },
      { icon: '🏥', title: 'Afya na Ustawi', description: 'Bima kamili ya matibabu, meno, na macho' },
      { icon: '🏠', title: 'Mbali Kwanza', description: 'Fanya kazi kutoka popote ulimwenguni' },
      { icon: '🌴', title: 'PTO Isiyo na Kikomo', description: 'Chukua muda unaohitaji kupumzika' },
      { icon: '📚', title: 'Bajeti ya Kujifunza', description: 'Posho ya kujifunza ya $2,000 kwa mwaka' },
      { icon: '💻', title: 'Vifaa', description: 'MacBook mpya na vifaa unavyochagua' },
      { icon: '🎉', title: 'Makusanyiko ya Timu', description: 'Makusanyiko ya kampuni nzima kila mwaka' },
    ],
    'careersPage.companyValues': [
      { emoji: '🚀', title: 'Songa Haraka', description: 'Tunatuma haraka na kurekebisha kulingana na maoni' },
      { emoji: '🎯', title: 'Tunapenda Watumiaji', description: 'Kila uamuzi unaanza na mtumiaji' },
      { emoji: '🔓', title: 'Uwazi kwa Chaguo-msingi', description: 'Uwazi katika kila tunachofanya' },
      { emoji: '🤝', title: 'Timu Moja', description: 'Tunafanikiwa na kushindwa pamoja' },
    ],
  }
};

// ============ SOLUTIONS PAGE ============
const solutionsData = {
  en: {
    'solutionsPage.solutionCards': [
      {
        title: 'For Founders', subtitle: 'Launch faster, iterate smarter',
        description: 'Turn your vision into a working product in days, not months. AppNode\'s AI-powered platform lets you build, test, and launch without a technical co-founder.',
        features: ['Launch MVPs in days', 'Rapid prototyping', 'Integrated analytics', 'One-click deployment'],
        testimonialQuote: 'We built our entire MVP in 2 weeks with AppNode. What would have cost us $50K in development was done for a fraction of the cost.',
        testimonialAuthor: 'Jason Park', testimonialRole: 'Founder, TechStartup'
      },
      {
        title: 'For Designers', subtitle: 'Design to production in minutes',
        description: 'Bridge the gap between design and development. Import your designs and watch them transform into pixel-perfect, responsive applications.',
        features: ['Figma import', 'Design-to-code', 'Component library', 'Responsive layouts'],
        testimonialQuote: 'As a designer, I can now ship my own ideas without waiting for engineering. It\'s incredibly empowering.',
        testimonialAuthor: 'Emma Chen', testimonialRole: 'Lead Designer, DesignCo'
      },
      {
        title: 'For Marketers', subtitle: 'Build landing pages that convert',
        description: 'Create stunning landing pages, microsites, and marketing tools without coding. A/B test, iterate, and optimize at the speed of thought.',
        features: ['Landing page builder', 'A/B testing', 'SEO tools', 'Analytics dashboard'],
        testimonialQuote: 'We\'ve increased our conversion rate by 40% since switching to AppNode for our landing pages.',
        testimonialAuthor: 'Michael Torres', testimonialRole: 'Head of Growth, ScaleUp'
      },
      {
        title: 'Prototyping', subtitle: 'From idea to prototype in minutes',
        description: 'The fastest way to validate ideas. Build interactive prototypes that look and feel like real applications, powered by AI.',
        features: ['AI-assisted building', 'Interactive previews', 'Share & collaborate', 'Export code'],
        testimonialQuote: 'AppNode replaced our entire prototyping workflow. We can test ideas in hours instead of weeks.',
        testimonialAuthor: 'Lisa Wang', testimonialRole: 'Product Lead, InnovateCo'
      }
    ]
  },
  sw: {
    'solutionsPage.solutionCards': [
      {
        title: 'Kwa Waanzilishi', subtitle: 'Zindua haraka, rekebisha kwa busara',
        description: 'Geuza maono yako kuwa bidhaa inayofanya kazi kwa siku, si miezi. Jukwaa la AppNode linalotumia AI linakuwezesha kujenga, kujaribu, na kuzindua bila mshiriki wa kiufundi.',
        features: ['Zindua MVP kwa siku', 'Uundaji wa haraka wa mfano', 'Uchambuzi uliojumuishwa', 'Usambazaji kwa kubofya moja'],
        testimonialQuote: 'Tulijenga MVP yetu yote kwa wiki 2 na AppNode. Kinachoweza kutugharimu $50K katika maendeleo kilifanywa kwa sehemu ndogo ya gharama.',
        testimonialAuthor: 'Jason Park', testimonialRole: 'Mwanzilishi, TechStartup'
      },
      {
        title: 'Kwa Wabunifu', subtitle: 'Muundo hadi uzalishaji kwa dakika',
        description: 'Funga pengo kati ya muundo na maendeleo. Ingiza miundo yako na uone ikibadilika kuwa programu zinazokamilika kwa pikseli, zinazobadilika.',
        features: ['Ingiza Figma', 'Muundo-hadi-msimbo', 'Maktaba ya vipengele', 'Mpangilio unaobadilika'],
        testimonialQuote: 'Kama mbunifu, sasa naweza kutuma mawazo yangu mwenyewe bila kusubiri timu ya uhandisi. Ni jambo la kushangaza.',
        testimonialAuthor: 'Emma Chen', testimonialRole: 'Mbunifu Mkuu, DesignCo'
      },
      {
        title: 'Kwa Wauzaji', subtitle: 'Jenga kurasa zinazobadilisha',
        description: 'Unda kurasa nzuri za kutua, tovuti ndogo, na zana za masoko bila kuandika msimbo. Jaribu A/B, rekebisha, na uboreshe kwa kasi ya mawazo.',
        features: ['Mjenzi wa kurasa za kutua', 'Majaribio ya A/B', 'Zana za SEO', 'Dashibodi ya uchambuzi'],
        testimonialQuote: 'Tumeongeza kiwango chetu cha kubadilisha kwa 40% tangu tuanze kutumia AppNode kwa kurasa zetu za kutua.',
        testimonialAuthor: 'Michael Torres', testimonialRole: 'Mkuu wa Ukuaji, ScaleUp'
      },
      {
        title: 'Uundaji wa Mfano', subtitle: 'Kutoka wazo hadi mfano kwa dakika',
        description: 'Njia ya haraka zaidi ya kuthibitisha mawazo. Jenga mifano ya maingiliano inayoonekana na kuhisi kama programu halisi, inayoendeshwa na AI.',
        features: ['Ujenzi unaosaidiwa na AI', 'Onyesho za maingiliano', 'Shiriki na ushirikiane', 'Hamisha msimbo'],
        testimonialQuote: 'AppNode ilibadilisha mchakato wetu wote wa uundaji. Tunaweza kujaribu mawazo kwa masaa badala ya wiki.',
        testimonialAuthor: 'Lisa Wang', testimonialRole: 'Kiongozi wa Bidhaa, InnovateCo'
      }
    ]
  }
};

// ============ TEAMS PAGE ============
const teamsData = {
  en: {
    'teamsPage.features': [
      { title: 'Real-time Collaboration', description: 'Work on the same project simultaneously. See cursors, edits, and changes in real-time.' },
      { title: 'Role-based Access', description: 'Control who can view, edit, and deploy with granular permissions.' },
      { title: 'Shared Workspaces', description: 'Organize projects, templates, and resources in shared team spaces.' },
      { title: 'Built-in Chat', description: 'Communicate with your team directly within the editor context.' },
      { title: 'Team Analytics', description: 'Track productivity, deployment frequency, and project health.' },
      { title: 'Centralized Billing', description: 'Manage all team subscriptions and usage from a single dashboard.' },
    ],
    'teamsPage.activity': [
      { user: 'Alex', action: 'pushed to main', time: '2m ago' },
      { user: 'Blake', action: 'deployed to prod', time: '15m ago' },
      { user: 'Casey', action: 'reviewed PR #42', time: '1h ago' },
    ]
  },
  sw: {
    'teamsPage.features': [
      { title: 'Ushirikiano wa Wakati Halisi', description: 'Fanya kazi kwenye mradi mmoja wakati huo huo. Tazama vishale, mabadiliko, na marekebisho kwa wakati halisi.' },
      { title: 'Ufikiaji kwa Majukumu', description: 'Dhibiti nani anaweza kuona, kuhariri, na kusambaza kwa ruhusa za kina.' },
      { title: 'Maeneo ya Kazi Yanayoshirikiwa', description: 'Panga miradi, violezo, na rasilimali katika maeneo ya timu yanayoshirikiwa.' },
      { title: 'Mazungumzo Yaliyojengwa', description: 'Wasiliana na timu yako moja kwa moja ndani ya muktadha wa kihariri.' },
      { title: 'Uchambuzi wa Timu', description: 'Fuatilia tija, mzunguko wa usambazaji, na afya ya mradi.' },
      { title: 'Ulipiaji wa Kati', description: 'Simamia usajili wote wa timu na matumizi kutoka dashibodi moja.' },
    ],
    'teamsPage.activity': [
      { user: 'Alex', action: 'amesukuma kwa main', time: 'dakika 2 zilizopita' },
      { user: 'Blake', action: 'amesambaza kwa prod', time: 'dakika 15 zilizopita' },
      { user: 'Casey', action: 'amekagua PR #42', time: 'saa 1 iliyopita' },
    ]
  }
};

// ============ STATUS PAGE ============
const statusData = {
  en: {
    'statusPage.services': [
      { name: 'API', status: 'operational' },
      { name: 'Web Application', status: 'operational' },
      { name: 'Code Generation', status: 'operational' },
      { name: 'Deployment Services', status: 'operational' },
      { name: 'Database Connections', status: 'operational' },
      { name: 'Authentication', status: 'operational' },
      { name: 'CDN & Assets', status: 'operational' },
      { name: 'Real-time Collaboration', status: 'operational' },
    ],
    'statusPage.incidents': [
      { date: 'November 25, 2025', title: 'Elevated API Response Times', status: 'resolved', duration: '23 minutes', description: 'We experienced elevated API response times due to a database connection pool issue. The issue was identified and resolved by scaling up the connection pool and optimizing query patterns.' },
      { date: 'November 18, 2025', title: 'Deployment Service Degradation', status: 'resolved', duration: '45 minutes', description: 'Some deployments experienced delays due to increased queue depth. We implemented auto-scaling for our deployment pipeline to prevent future occurrences.' },
      { date: 'November 10, 2025', title: 'Scheduled Maintenance', status: 'completed', duration: '2 hours', description: 'Planned maintenance window for database migration and infrastructure upgrades. All services were restored on schedule.' },
    ],
    'statusPage.uptimeDays': ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  sw: {
    'statusPage.services': [
      { name: 'API', status: 'inafanya kazi' },
      { name: 'Programu ya Wavuti', status: 'inafanya kazi' },
      { name: 'Uzalishaji wa Msimbo', status: 'inafanya kazi' },
      { name: 'Huduma za Usambazaji', status: 'inafanya kazi' },
      { name: 'Miunganisho ya Hifadhidata', status: 'inafanya kazi' },
      { name: 'Uthibitishaji', status: 'inafanya kazi' },
      { name: 'CDN na Mali', status: 'inafanya kazi' },
      { name: 'Ushirikiano wa Wakati Halisi', status: 'inafanya kazi' },
    ],
    'statusPage.incidents': [
      { date: 'Novemba 25, 2025', title: 'Nyakati za Juu za Majibu ya API', status: 'imetatuliwa', duration: 'dakika 23', description: 'Tulipata nyakati za juu za majibu ya API kutokana na tatizo la dimbwi la muunganisho wa hifadhidata. Tatizo lilitambuliwa na kutatuliwa kwa kupanua dimbwi la muunganisho na kuboresha mifumo ya hoja.' },
      { date: 'Novemba 18, 2025', title: 'Kudhoofika kwa Huduma ya Usambazaji', status: 'imetatuliwa', duration: 'dakika 45', description: 'Baadhi ya usambazaji ulikuwa na ucheleweshaji kutokana na kina kilichoongezeka cha foleni. Tulitekeleza upanuzi wa kiotomatiki kwa njia yetu ya usambazaji kuzuia matukio ya baadaye.' },
      { date: 'Novemba 10, 2025', title: 'Matengenezo Yaliyopangwa', status: 'imekamilika', duration: 'masaa 2', description: 'Dirisha la matengenezo lililopangwa kwa uhamiaji wa hifadhidata na maboresho ya miundombinu. Huduma zote zilirejeshwa kwa ratiba.' },
    ],
    'statusPage.uptimeDays': ['Jmt', 'Jmn', 'Jmt', 'Alh', 'Iju', 'Jmt', 'Jpi']
  }
};

// ============ SUPPORT PAGE ============
const supportData = {
  en: {
    'supportPage.botGreeting': 'Hi! 👋 I\'m AppNode\'s support assistant. How can I help you today?',
    'supportPage.liveAgentMessage': 'I\'d be happy to connect you with our support team! You can reach us at support@appnode.com or click the button below to start a live chat during business hours (9 AM - 6 PM EST).',
    'supportPage.fallbackMessage': 'I\'m not sure I have the right answer for that. Would you like to talk to a live agent?',
    'supportPage.talkToLiveAgent': 'Talk to Live Agent',
    'supportPage.askSomething': 'Ask something...',
    'supportPage.emailLabel': 'Email us at',
  },
  sw: {
    'supportPage.botGreeting': 'Habari! 👋 Mimi ni msaidizi wa msaada wa AppNode. Nawezaje kukusaidia leo?',
    'supportPage.liveAgentMessage': 'Ningefurahi kukuunganisha na timu yetu ya msaada! Unaweza kutufikia kwa support@appnode.com au bofya kitufe hapa chini kuanza mazungumzo ya moja kwa moja wakati wa saa za kazi (9 AM - 6 PM EST).',
    'supportPage.fallbackMessage': 'Sina uhakika nina jibu sahihi kwa hilo. Ungependa kuzungumza na wakala wa moja kwa moja?',
    'supportPage.talkToLiveAgent': 'Zungumza na Wakala wa Moja kwa Moja',
    'supportPage.askSomething': 'Uliza kitu...',
    'supportPage.emailLabel': 'Tuandikie barua pepe kwa',
  }
};

// ============ SIGNUP PAGE ============
const signupData = {
  en: {
    'signupPage.roles': ['Founder / Entrepreneur', 'Designer', 'Developer', 'Marketer', 'Product Manager', 'Other'],
    'signupPage.passwordsDoNotMatch': 'Passwords do not match',
    'signupPage.passwordTooShort': 'Password must be at least 6 characters',
    'signupPage.emailExists': 'An account with this email already exists',
    'signupPage.selectAvatar': 'Please select an avatar color',
    'signupPage.selectRole': 'Please select your role',
  },
  sw: {
    'signupPage.roles': ['Mwanzilishi / Mjasiriamali', 'Mbunifu', 'Msanidi', 'Muuzaji', 'Meneja wa Bidhaa', 'Nyingine'],
    'signupPage.passwordsDoNotMatch': 'Nywila hazifanani',
    'signupPage.passwordTooShort': 'Nywila lazima iwe na herufi 6 au zaidi',
    'signupPage.emailExists': 'Akaunti yenye barua pepe hii tayari ipo',
    'signupPage.selectAvatar': 'Tafadhali chagua rangi ya avatar',
    'signupPage.selectRole': 'Tafadhali chagua jukumu lako',
  }
};

// ============ BILLING PAGE ============
const billingData = {
  en: {
    'billingPage.plans': [
      { name: 'Free', price: '$0', period: 'forever', features: ['3 projects', 'Basic AI features', 'Community support', '1GB storage'] },
      { name: 'Pro', price: '$20', period: 'per month', features: ['Unlimited projects', 'Advanced AI', 'Priority support', '10GB storage', 'Custom domains', 'Team collaboration'] },
      { name: 'Team', price: '$49', period: 'per month', features: ['Everything in Pro', 'Unlimited members', 'Admin controls', '100GB storage', 'SSO/SAML', 'Dedicated support'] },
    ],
    'billingPage.invoices': [
      { date: 'Nov 1, 2025', amount: '$0.00', status: 'Paid', plan: 'Free' },
      { date: 'Oct 1, 2025', amount: '$0.00', status: 'Paid', plan: 'Free' },
      { date: 'Sep 1, 2025', amount: '$0.00', status: 'Paid', plan: 'Free' },
    ]
  },
  sw: {
    'billingPage.plans': [
      { name: 'Bure', price: '$0', period: 'milele', features: ['Miradi 3', 'Vipengele vya msingi vya AI', 'Msaada wa jumuiya', 'Hifadhi ya 1GB'] },
      { name: 'Pro', price: '$20', period: 'kwa mwezi', features: ['Miradi isiyo na kikomo', 'AI ya hali ya juu', 'Msaada wa kipaumbele', 'Hifadhi ya 10GB', 'Vikoa maalum', 'Ushirikiano wa timu'] },
      { name: 'Timu', price: '$49', period: 'kwa mwezi', features: ['Kila kitu katika Pro', 'Wanachama wasio na kikomo', 'Vidhibiti vya msimamizi', 'Hifadhi ya 100GB', 'SSO/SAML', 'Msaada maalum'] },
    ],
    'billingPage.invoices': [
      { date: 'Nov 1, 2025', amount: '$0.00', status: 'Imelipwa', plan: 'Bure' },
      { date: 'Okt 1, 2025', amount: '$0.00', status: 'Imelipwa', plan: 'Bure' },
      { date: 'Sep 1, 2025', amount: '$0.00', status: 'Imelipwa', plan: 'Bure' },
    ]
  }
};

// ============ SETTINGS PAGE ============
const settingsData = {
  en: {
    'settingsPage.tabs': ['General', 'Notifications', 'Security', 'Danger Zone'],
  },
  sw: {
    'settingsPage.tabs': ['Jumla', 'Arifa', 'Usalama', 'Eneo la Hatari'],
  }
};

// ============ RAPID PROTOTYPING USECASE ============
const rapidPrototypingData = {
  en: {
    'useCases.rapidPrototyping.benefitsList': [
      { title: 'Save Money', description: 'Validate ideas before investing in full development' },
      { title: 'Save Time', description: 'Build prototypes in hours instead of weeks' },
      { title: 'Reduce Risk', description: 'Test with users early to avoid costly pivots' },
      { title: 'Align Teams', description: 'Give everyone a tangible vision to rally around' },
    ]
  },
  sw: {
    'useCases.rapidPrototyping.benefitsList': [
      { title: 'Okoa Pesa', description: 'Thibitisha mawazo kabla ya kuwekeza katika maendeleo kamili' },
      { title: 'Okoa Muda', description: 'Jenga mifano kwa masaa badala ya wiki' },
      { title: 'Punguza Hatari', description: 'Jaribu na watumiaji mapema kuepuka mabadiliko ya gharama kubwa' },
      { title: 'Unganisha Timu', description: 'Wape wote maono yanayogusika ya kujumuika' },
    ]
  }
};

// Apply all data
const allData = [careersData, solutionsData, teamsData, statusData, supportData, signupData, billingData, settingsData, rapidPrototypingData];

let enCount = 0, swCount = 0;

for (const dataset of allData) {
  for (const [key, value] of Object.entries(dataset.en)) {
    setByPath(en, key, value);
    enCount++;
  }
  for (const [key, value] of Object.entries(dataset.sw)) {
    setByPath(sw, key, value);
    swCount++;
  }
}

fs.writeFileSync(enPath, JSON.stringify(en, null, 2) + '\n');
fs.writeFileSync(swPath, JSON.stringify(sw, null, 2) + '\n');

console.log(`Added ${enCount} keys to en.json`);
console.log(`Added ${swCount} keys to sw.json`);
console.log('Done!');
