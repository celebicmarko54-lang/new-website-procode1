const fs = require('fs');
const hi = JSON.parse(fs.readFileSync('./src/translations/hi.json', 'utf8'));

// 1. careersPage.openings - add missing 6th item
hi.careersPage.openings.push({
  "title": "ग्रोथ मार्केटिंग मैनेजर",
  "department": "मार्केटिंग",
  "location": "सैन फ्रांसिस्को, CA / रिमोट",
  "type": "फुल-टाइम",
  "description": "उपयोगकर्ता अधिग्रहण और विकास पहलों को संचालित करें।"
});

// 2. careersPage.benefits - add missing 7th and 8th items
hi.careersPage.benefits.push({
  "icon": "💻",
  "title": "उपकरण",
  "description": "नवीनतम MacBook और आपकी पसंद का गियर"
});
hi.careersPage.benefits.push({
  "icon": "🎉",
  "title": "टीम रिट्रीट",
  "description": "वार्षिक कंपनी-व्यापी सभाएँ"
});

// 3. termsPage.section3.items - add missing 7th and 8th items
hi.termsPage.section3.items.push(
  "बेहतर सुविधाओं (जैसे, प्राथमिकता प्रोसेसिंग, उच्च उपयोग सीमा) के साथ सशुल्क सब्सक्रिप्शन टियर।",
  "कम्प्यूटेशनल संसाधनों, API कॉल, या स्टोरेज के लिए उपयोग-आधारित बिलिंग।"
);

// 4. termsPage.section4.items - add missing 5th, 6th, 7th items
hi.termsPage.section4.items.push(
  "AI आउटपुट अनजाने में तृतीय-पक्ष बौद्धिक संपदा को शामिल या उससे मिलता-जुलता हो सकता है, और आप AI आउटपुट के उपयोग से उत्पन्न बौद्धिक संपदा उल्लंघन दावों के सभी जोखिम स्वीकार करते हैं।",
  "AI सिस्टम आपके इनपुट के आधार पर अप्रत्याशित या अवांछनीय परिणाम उत्पन्न कर सकते हैं, और हम किसी भी हानिकारक, आपत्तिजनक, या अनुचित सामग्री के लिए जिम्मेदार नहीं हैं।",
  "AI आउटपुट का उपयोग करते समय आपको सभी लागू कानूनों का पालन करना होगा, जिसमें निर्यात नियंत्रण, डेटा सुरक्षा नियम, और उद्योग-विशिष्ट मानक (जैसे, स्वास्थ्य डेटा के लिए HIPAA) शामिल हैं।"
);

// 5. termsPage.section5.licenseItems - add missing 3rd and 4th items
hi.termsPage.section5.licenseItems.push(
  "विश्लेषणात्मक उद्देश्यों के लिए उपयोगकर्ता सामग्री को गुमनाम, एकत्रित, या डी-आइडेंटिफाई करना, जिसमें हमारे AI सिस्टम, मॉडल, एल्गोरिदम और सेवाओं को प्रशिक्षित, फाइन-ट्यून या सुधारना शामिल है।",
  "कानूनी दायित्वों का पालन करना, सम्मन का जवाब देना, या हमारे अधिकारों को लागू करना।"
);

// 6. termsPage.section6.items - add missing 7th-11th items
hi.termsPage.section6.items.push(
  "दुरुपयोगपूर्ण उद्देश्यों के लिए कई अकाउंट बनाना, अकाउंट निर्माण को स्वचालित करना, या बिना अनुमति के सेवाओं के साथ इंटरैक्ट करने के लिए बॉट/स्क्रिप्ट का उपयोग करना।",
  "ऐसी सामग्री अपलोड या जेनरेट करना जो अवैध, अश्लील, मानहानिकारक, उत्पीड़क, धमकी भरी, भेदभावपूर्ण, घृणित हो, या हिंसा, आतंकवाद, या दूसरों को नुकसान को बढ़ावा देती हो।",
  "सेवाओं में हस्तक्षेप करना, बाधा डालना, या ओवरलोड करना, जिसमें सेवा से इनकार हमले, स्पैमिंग, या अत्यधिक संसाधन खपत शामिल है।",
  "उच्च-जोखिम गतिविधियों के लिए सेवाओं का उपयोग करना, जैसे रोजगार, क्रेडिट, आवास, या कानूनी संदर्भों में मानवीय निगरानी के बिना स्वचालित निर्णय लेना।",
  "अमेरिकी निर्यात नियंत्रण कानूनों (जैसे, EAR, ITAR) के उल्लंघन में सेवाओं या AI आउटपुट का निर्यात या पुनर्निर्यात करना।"
);

// 7. termsPage.section7.items - add missing 4th item
hi.termsPage.section7.items.push(
  "भुगतान विफलताओं के कारण किसी भी ओवरड्राफ्ट, अपर्याप्त धन, या अन्य शुल्कों की जिम्मेदारी स्वीकार करें।"
);

// 8. termsPage.section9.items - trim to 3 (EN has 3)
hi.termsPage.section9.items = hi.termsPage.section9.items.slice(0, 3);

// 9. statusPage.services - add missing 7th and 8th items
hi.statusPage.services.push(
  { "name": "CDN और एसेट्स", "status": "चालू" },
  { "name": "रीयल-टाइम सहयोग", "status": "चालू" }
);

// 10. changelogPage.releases.v250.changes - add missing 6th item
hi.changelogPage.releases.v250.changes.push("मोबाइल डिवाइसों पर लेआउट समस्याएँ ठीक की गईं");

// 11. changelogPage.releases.v242.changes - trim to 4 (EN has 4)
hi.changelogPage.releases.v242.changes = hi.changelogPage.releases.v242.changes.slice(0, 4);

// 12. changelogPage.releases.v230.changes - add missing 6th item
hi.changelogPage.releases.v230.changes.push("प्रोडक्शन बिल्ड में डेटा फ़ेचिंग समस्याएँ ठीक की गईं");

// 13. solutionsPage.solutionCards - trim to 4 (EN has 4)
hi.solutionsPage.solutionCards = hi.solutionsPage.solutionCards.slice(0, 4);

// 14. teamsPage.pricing.features - trim to 7 (EN has 7)
hi.teamsPage.pricing.features = hi.teamsPage.pricing.features.slice(0, 7);

// 15. learnPage.tutorials.buildingDashboard.steps - add missing 2
hi.learnPage.tutorials.buildingDashboard.steps.push(
  "विभिन्न स्क्रीन आकारों पर रिस्पॉन्सिवनेस का परीक्षण करें",
  "डिप्लॉय करें और अपनी टीम के साथ साझा करें"
);

// 16. learnPage.tutorials.advancedPrompting.steps - add missing 1
hi.learnPage.tutorials.advancedPrompting.steps.push(
  "AI को गाइड करने के लिए संदर्भ उदाहरणों का उपयोग करें"
);

// 17. learnPage.tutorials.ecommerce.steps - add missing 2
hi.learnPage.tutorials.ecommerce.steps.push(
  "ईमेल नोटिफ़िकेशन सेटअप करें",
  "उपयोगकर्ता अकाउंट और ऑर्डर इतिहास लागू करें"
);

// 18. learnPage.tutorials.customComponents.steps - add missing 1
hi.learnPage.tutorials.customComponents.steps.push(
  "अपने कंपोनेंट्स का दस्तावेज़ीकरण करें"
);

// 19. learnPage.tutorials.mobileFirst.steps - add missing 1
hi.learnPage.tutorials.mobileFirst.steps.push(
  "मोबाइल नेटवर्क के लिए प्रदर्शन ऑप्टिमाइज़ करें"
);

// 20. learnPage.tutorials.apiIntegration.steps - add missing 1
hi.learnPage.tutorials.apiIntegration.steps.push(
  "प्रदर्शन के लिए API रिस्पॉन्स कैश करें"
);

// 21. learnPage.tutorials.authSecurity.steps - add missing 1
hi.learnPage.tutorials.authSecurity.steps.push(
  "रोल-आधारित एक्सेस कंट्रोल सेटअप करें"
);

// 22. guidesPage.guides.saasApps.steps - add missing 2
hi.guidesPage.guides.saasApps.steps.push(
  "प्रमुख इवेंट्स के लिए ईमेल नोटिफ़िकेशन सेटअप करें",
  "मॉनिटरिंग के साथ प्रोडक्शन में डिप्लॉय करें"
);

// 23. guidesPage.guides.ecommerce.steps - add missing 1
hi.guidesPage.guides.ecommerce.steps.push(
  "ग्राहक समीक्षाएँ और रेटिंग लागू करें"
);

// 24. guidesPage.guides.dashboard.steps - add missing 1
hi.guidesPage.guides.dashboard.steps.push(
  "विभिन्न स्क्रीन आकारों के लिए ऑप्टिमाइज़ करें"
);

// 25. guidesPage.guides.authentication.steps - add missing 1
hi.guidesPage.guides.authentication.steps.push(
  "ब्रूट फ़ोर्स हमलों को रोकने के लिए रेट लिमिटिंग जोड़ें"
);

// 26. guidesPage.guides.database.steps - add missing 1
hi.guidesPage.guides.database.steps.push(
  "स्कीमा परिवर्तनों के लिए डेटाबेस माइग्रेशन सेटअप करें"
);

// 27. guidesPage.guides.responsive.steps - add missing 1
hi.guidesPage.guides.responsive.steps.push(
  "पिक्सेल के बजाय सापेक्ष इकाइयों (rem, %, vh/vw) का उपयोग करें"
);

// 28. guidesPage.guides.api.steps - add missing 1
hi.guidesPage.guides.api.steps.push(
  "प्रदर्शन सुधारने के लिए रिस्पॉन्स कैश करें"
);

// 29. guidesPage.guides.performance.steps - add missing 1
hi.guidesPage.guides.performance.steps.push(
  "स्टैटिक एसेट्स के लिए CDN उपयोग करें"
);

fs.writeFileSync('./src/translations/hi.json', JSON.stringify(hi, null, 2), 'utf8');
console.log('All array mismatches fixed!');
