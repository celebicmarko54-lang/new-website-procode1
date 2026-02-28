var fs = require('fs');
var pa = JSON.parse(fs.readFileSync('./src/translations/hi.json', 'utf8'));

function setValue(obj, path, value) {
  var parts = path.split('.');
  var current = obj;
  for (var i = 0; i < parts.length - 1; i++) {
    if (!current[parts[i]] || typeof current[parts[i]] !== 'object') {
      current[parts[i]] = {};
    }
    current = current[parts[i]];
  }
  current[parts[parts.length - 1]] = value;
}

var translations = {
  "buildAnything.categories.saasplatform": "SaaS प्लेटफ़ॉर्म",
  "testimonials.quote1": "AppNode ने हमारे प्रोटोटाइपिंग के तरीके को पूरी तरह बदल दिया। जो पहले हफ्तों लगता था अब घंटों में हो जाता है।",
  "productIntegrations.categories.ai": "AI",
  "productIntegrations.categories.cdn": "CDN",
  "productMobile.title": "AppNode मोबाइल के लिए",
  "productSecurity.badges.gdpr": "GDPR अनुपालित",
  "productSecurity.badges.hipaa": "HIPAA तैयार",
  "productSecurity.features.encryption.item1": "AES-256 रेस्ट पर एन्क्रिप्शन",
  "productSecurity.features.encryption.item2": "TLS 1.3 ट्रांज़िट में",
  "pricing.enterprise.period": "",
  "enterprise.title": "एंटरप्राइज़ के लिए AppNode",
  "enterprise.features.compliance.description": "GDPR, HIPAA, और उद्योग-विशिष्ट अनुपालन अंतर्निहित।",
  "enterprise.features.sla.title": "SLA गारंटी",
  "enterprisePage.features.integrations.description": "API एक्सेस, कस्टम वेबहुक, और आपके मौजूदा टूल्स और वर्कफ़्लो के साथ इंटीग्रेशन।",
  "enterprisePage.testimonials.testimonial1.quote": "AppNode ने हमारी टीम के आंतरिक टूल बनाने के तरीके को बदल दिया है। जो पहले हफ्तों लगता था अब घंटों में होता है।",
  "enterprisePage.testimonials.testimonial2.role": "CTO",
  "enterprisePage.testimonials.testimonial6.quote": "AppNode की API लचीलेपन ने हमें अपने सभी मौजूदा टूल्स को कनेक्ट करने की अनुमति दी। हमारी टीम की उत्पादकता दोगुनी हो गई।",
  "enterprisePage.form.companyPlaceholder": "Acme Inc.",
  "docs.apiReference": "API रेफ़रेंस",
  "supportPage.popularArticlesList.apiAuth": "API प्रमाणीकरण सेटअप",
  "supportPage.faqs.whatIsAppNode.answer": "AppNode एक AI-संचालित प्लेटफ़ॉर्म है जो आपको बस यह बताकर वेब एप्लिकेशन बनाने देता है कि आप क्या बनाना चाहते हैं। हमारा AI आपके विवरण को काम करने वाले एप्लिकेशन में बदल देता है।",
  "supportPage.faqs.technologies.answer": "AppNode Tailwind CSS स्टाइलिंग के साथ आधुनिक React/Next.js एप्लिकेशन जनरेट करता है।",
  "docsPage.welcomeDescription": "AppNode एक AI-संचालित विकास प्लेटफ़ॉर्म है जो आपको बस यह बताकर पूर्ण वेब एप्लिकेशन बनाने देता है कि आप क्या चाहते हैं। यह डॉक्यूमेंटेशन आपको शुरू करने और AppNode में महारत हासिल करने में मदद करेगा।",
  "blogPage.categories.ai": "AI",
  "blogPage.posts.enterprise.title": "एंटरप्राइज़ के लिए AppNode: सुरक्षा, अनुपालन, और स्केल",
  "useCasesRapidPrototyping.appnode.title": "AppNode प्रोटोटाइपिंग",
  "privacyPage.intro.p1": "AppNode Inc. (\"AppNode\", \"हम\", \"हमें\", या \"हमारा\") आपकी गोपनीयता की रक्षा के लिए प्रतिबद्ध है। यह गोपनीयता नीति बताती है कि हम आपकी जानकारी कैसे एकत्र, उपयोग, प्रकट और सुरक्षित करते हैं।",
  "privacyPage.section11.company": "AppNode Inc.",
  "termsPage.section4.disclaimer": "AppNode AI आउटपुट के आपके उपयोग या निर्भरता से उत्पन्न किसी भी क्षति, हानि, या दावों के लिए सभी देयता अस्वीकार करता है। आप AI आउटपुट के अपने उपयोग के लिए पूरी तरह जिम्मेदार हैं।",
  "termsPage.section11.noWarranties": "APPNODE कोई वारंटी नहीं देता कि सेवाएं निर्बाध, त्रुटि-मुक्त, सुरक्षित, या वायरस या हानिकारक घटकों से मुक्त होंगी।",
  "termsPage.section16.company": "AppNode Inc.",
  "learnPage.titleHighlight": "AppNode",
  "learnPage.courses.apiIntegration.title": "API इंटीग्रेशन मूल बातें",
  "guidesPage.guides.api.title": "API इंटीग्रेशन मास्टरक्लास",
  "reportPage.content.welcomeDescription": "AppNode एक AI-संचालित विकास प्लेटफ़ॉर्म है जो आपको बस यह बताकर पूर्ण वेब एप्लिकेशन बनाने देता है कि आप क्या चाहते हैं।",
  "reportPage.content.whatYouCanBuildItems.saas": "SaaS उत्पाद और आंतरिक टूल्स",
  "reportPage.content.descriptionOfServicesDesc": "AppNode एक AI-संचालित विकास प्लेटफ़ॉर्म प्रदान करता है जो उपयोगकर्ताओं को कुदरती भाषा प्रॉम्प्ट के माध्यम से वेबसाइट, एप्लिकेशन, और डिजिटल सामग्री बनाने में सक्षम बनाता है।",
  "reportPage.content.encryptionInTransitDesc": "सभी कनेक्शनों के लिए TLS 1.3",
  "reportPage.content.ddosProtection": "DDoS सुरक्षा",
  "reportPage.content.roadmapItem5": "API मार्केटप्लेस",
  "aboutPage.subtitle": "AppNode सॉफ्टवेयर विकास को लोकतांत्रिक बनाने के मिशन पर है। हम मानते हैं कि हर किसी को अपने विचारों को वास्तविकता में बदलने की शक्ति होनी चाहिए।",
  "aboutPage.ourStory.p1": "AppNode की शुरुआत एक साधारण अवलोकन से हुई: सॉफ्टवेयर बनाना बहुत कठिन है। बहुत सारे शानदार विचार कभी साकार नहीं होते क्योंकि तकनीकी अवरोध बहुत ऊंचा है।",
  "connectionsPage.categories.ai": "AI",
  "securityReportPage.emailPlaceholder": "security-researcher@example.com"
};

var count = 0;
for (var key in translations) {
  setValue(pa, key, translations[key]);
  count++;
}

fs.writeFileSync('./src/translations/hi.json', JSON.stringify(pa, null, 2), 'utf8');
console.log('Final fix complete: Updated ' + count + ' translations');
