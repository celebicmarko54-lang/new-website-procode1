var fs = require('fs');
var hi = JSON.parse(fs.readFileSync('./src/translations/hi.json', 'utf8'));

function setDeep(obj, path, value) {
  var parts = path.split('.');
  var current = obj;
  for (var i = 0; i < parts.length - 1; i++) {
    if (!current[parts[i]] || typeof current[parts[i]] !== 'object' || Array.isArray(current[parts[i]])) {
      current[parts[i]] = {};
    }
    current = current[parts[i]];
  }
  current[parts[parts.length - 1]] = value;
}

// 1. supportPage.knowledgeBase
setDeep(hi, 'supportPage.knowledgeBase', [
  {
    keywords: ["what is appnode", "about appnode", "appnode"],
    answer: "AppNode एक AI-संचालित प्लेटफ़ॉर्म है जो आपको प्राकृतिक भाषा प्रॉम्प्ट के ज़रिए फुल-स्टैक वेब एप्लिकेशन बनाने देता है। बस बताएं कि आप क्या बनाना चाहते हैं, और हमारा AI आपके लिए कोड, डिज़ाइन और कार्यक्षमता तैयार करेगा।"
  },
  {
    keywords: ["pricing", "cost", "price", "free", "plan"],
    answer: "AppNode शुरू करने के लिए एक उदार मुफ़्त योजना प्रदान करता है। हमारी मूल्य निर्धारण में शामिल हैं: मुफ़्त योजना (3 प्रोजेक्ट, बेसिक AI सुविधाएँ), Pro योजना ($20/माह असीमित प्रोजेक्ट और उन्नत AI के लिए), और Team योजना ($49/माह सहयोग सुविधाओं के लिए)। अधिक जानकारी के लिए हमारा मूल्य निर्धारण पृष्ठ देखें।"
  },
  {
    keywords: ["deploy", "deployment", "publish", "hosting", "live"],
    answer: "AppNode के साथ डिप्लॉय करना आसान है! अपने प्रोजेक्ट एडिटर में \"Deploy\" बटन पर क्लिक करें, और आपका ऐप कुछ ही सेकंड में एक अद्वितीय URL के साथ लाइव हो जाएगा। Pro उपयोगकर्ता कस्टम डोमेन कनेक्ट कर सकते हैं। हम आपके लिए सारा होस्टिंग इंफ्रास्ट्रक्चर संभालते हैं।"
  },
  {
    keywords: ["ai", "artificial intelligence", "generate", "prompt"],
    answer: "हमारा AI आपके द्वारा बनाई जाने वाली चीज़ों के प्राकृतिक भाषा विवरण समझता है। आप सुविधाओं, लेआउट, कार्यक्षमता और यहाँ तक कि जटिल लॉजिक का वर्णन कर सकते हैं। AI साफ़, प्रोडक्शन-रेडी कोड तैयार करता है जिसे आप और अनुकूलित कर सकते हैं।"
  },
  {
    keywords: ["database", "data", "storage", "backend"],
    answer: "AppNode में बिल्ट-इन डेटाबेस सपोर्ट शामिल है। आप टेबल बना सकते हैं, रिलेशनशिप परिभाषित कर सकते हैं, और हमारे विज़ुअल इंटरफ़ेस के ज़रिए डेटा प्रबंधित कर सकते हैं। हम डेवलपमेंट के लिए SQLite और प्रोडक्शन के लिए PostgreSQL का समर्थन करते हैं।"
  },
  {
    keywords: ["team", "collaborate", "collaboration", "share"],
    answer: "हमारी Teams योजना रियल-टाइम सहयोग का समर्थन करती है। कई टीम सदस्य एक ही प्रोजेक्ट पर एक साथ काम कर सकते हैं। सुविधाओं में भूमिका-आधारित पहुँच, साझा कार्यक्षेत्र, टीम चैट और केंद्रीकृत बिलिंग शामिल हैं।"
  },
  {
    keywords: ["export", "download", "code", "source"],
    answer: "हाँ! आप किसी भी समय अपना पूरा सोर्स कोड एक्सपोर्ट कर सकते हैं। AppNode साफ़ React/Next.js कोड तैयार करता है जिसे आप स्वतंत्र रूप से चला सकते हैं। Pro उपयोगकर्ताओं को सहज वर्शन कंट्रोल के लिए GitHub इंटीग्रेशन मिलता है।"
  },
  {
    keywords: ["mobile", "ios", "android", "responsive"],
    answer: "AppNode से बने सभी ऐप डिफ़ॉल्ट रूप से रिस्पॉन्सिव होते हैं। हम iOS और Android के लिए नेटिव मोबाइल ऐप डेवलपमेंट सुविधाओं पर भी काम कर रहे हैं, जल्द आ रहा है!"
  },
  {
    keywords: ["security", "secure", "safe", "privacy"],
    answer: "सुरक्षा हमारी सर्वोच्च प्राथमिकता है। हम उद्योग-मानक एन्क्रिप्शन, SOC 2 Type II प्रमाणित इंफ्रास्ट्रक्चर और नियमित सुरक्षा ऑडिट का उपयोग करते हैं। आपका कोड और डेटा हमेशा सुरक्षित रहता है।"
  },
  {
    keywords: ["bug", "error", "problem", "issue", "help"],
    answer: "अगर आपको समस्या आ रही है, तो पहले पेज रिफ़्रेश करने का प्रयास करें। किसी भी चल रही घटना के लिए हमारा स्टेटस पेज देखें। आप यहाँ अपनी विशिष्ट समस्या का भी वर्णन कर सकते हैं, और मैं मदद करने की कोशिश करूँगा, या आपको हमारी सपोर्ट टीम से जोड़ूँगा।"
  },
  {
    keywords: ["cancel", "subscription", "refund", "billing"],
    answer: "आप किसी भी समय अपनी अकाउंट सेटिंग्स से अपनी सब्सक्रिप्शन रद्द कर सकते हैं। बिलिंग अवधि के अंत तक आपकी पहुँच जारी रहती है। रिफ़ंड के लिए, कृपया support@appnode.com पर हमारी सपोर्ट टीम से संपर्क करें।"
  },
  {
    keywords: ["api", "integration", "connect", "webhook"],
    answer: "AppNode Stripe, OpenAI, Twilio और अन्य लोकप्रिय सेवाओं के साथ इंटीग्रेशन का समर्थन करता है। आप बाहरी सेवाओं से कनेक्ट करने के लिए हमारे API का भी उपयोग कर सकते हैं। उपलब्ध इंटीग्रेशन के लिए हमारा डॉक्यूमेंटेशन देखें।"
  },
  {
    keywords: ["custom domain", "domain", "url"],
    answer: "Pro और Team योजना के उपयोगकर्ता अपने डिप्लॉय किए गए ऐप्स में कस्टम डोमेन कनेक्ट कर सकते हैं। अपना कस्टम डोमेन जोड़ने और कॉन्फ़िगर करने के लिए अपनी प्रोजेक्ट सेटिंग्स > Domains पर जाएँ। DNS कॉन्फ़िगरेशन निर्देश प्रदान किए जाते हैं।"
  }
]);

// 2. careersPage.openings
setDeep(hi, 'careersPage.openings', [
  {
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "पूर्णकालिक",
    description: "हमारे AI-संचालित डेवलपमेंट प्लेटफ़ॉर्म का निर्माण और स्केलिंग करें।"
  },
  {
    title: "Machine Learning Engineer",
    department: "AI",
    location: "San Francisco, CA / Remote",
    type: "पूर्णकालिक",
    description: "हमारे AI कोड जनरेशन मॉडल विकसित और सुधारें।"
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "पूर्णकालिक",
    description: "हमारे प्लेटफ़ॉर्म के लिए सहज अनुभव डिज़ाइन करें।"
  },
  {
    title: "Developer Advocate",
    department: "Developer Relations",
    location: "Remote",
    type: "पूर्णकालिक",
    description: "समुदाय बनाएं और शैक्षिक सामग्री तैयार करें।"
  },
  {
    title: "Technical Writer",
    department: "Documentation",
    location: "Remote",
    type: "पूर्णकालिक",
    description: "विश्व-स्तरीय डॉक्यूमेंटेशन और ट्यूटोरियल बनाएं।"
  },
  {
    title: "Growth Marketing Manager",
    department: "Marketing",
    location: "San Francisco, CA / Remote",
    type: "पूर्णकालिक",
    description: "उपयोगकर्ता अधिग्रहण और ग्रोथ पहल को आगे बढ़ाएं।"
  }
]);

// 3. careersPage.benefits
setDeep(hi, 'careersPage.benefits', [
  { icon: "💰", title: "प्रतिस्पर्धी वेतन", description: "शीर्ष-बाज़ार मुआवज़ा पैकेज" },
  { icon: "📈", title: "इक्विटी", description: "कंपनी में स्वामित्व हिस्सेदारी" },
  { icon: "🏥", title: "स्वास्थ्य और कल्याण", description: "व्यापक चिकित्सा, दंत और दृष्टि बीमा" },
  { icon: "🏠", title: "रिमोट फर्स्ट", description: "दुनिया में कहीं से भी काम करें" },
  { icon: "🌴", title: "असीमित PTO", description: "रिचार्ज करने के लिए आवश्यक समय लें" },
  { icon: "📚", title: "लर्निंग बजट", description: "$2,000 वार्षिक शिक्षा भत्ता" },
  { icon: "💻", title: "उपकरण", description: "नवीनतम MacBook और आपकी पसंद का गियर" },
  { icon: "🎉", title: "टीम रिट्रीट", description: "वार्षिक कंपनी-व्यापी सभाएं" }
]);

// 4. careersPage.companyValues
setDeep(hi, 'careersPage.companyValues', [
  { emoji: "🚀", title: "तेज़ी से आगे बढ़ें", description: "हम जल्दी शिप करते हैं और फीडबैक के आधार पर बदलाव करते हैं" },
  { emoji: "🎯", title: "उपयोगकर्ता केंद्रित", description: "हर निर्णय उपयोगकर्ता से शुरू होता है" },
  { emoji: "🔓", title: "डिफ़ॉल्ट रूप से खुला", description: "हम जो भी करते हैं उसमें पारदर्शिता" },
  { emoji: "🤝", title: "एक टीम", description: "हम साथ में सफल होते हैं और साथ में असफल होते हैं" }
]);

// 5. solutionsPage.solutionCards
setDeep(hi, 'solutionsPage.solutionCards', [
  {
    title: "संस्थापकों के लिए",
    subtitle: "तेज़ी से लॉन्च करें, स्मार्ट तरीके से आगे बढ़ें",
    description: "अपने विज़न को दिनों में काम करने वाले उत्पाद में बदलें, महीनों में नहीं। AppNode का AI-संचालित प्लेटफ़ॉर्म आपको बिना तकनीकी सह-संस्थापक के निर्माण, परीक्षण और लॉन्च करने देता है।",
    features: ["दिनों में MVP लॉन्च करें", "रैपिड प्रोटोटाइपिंग", "एकीकृत एनालिटिक्स", "एक-क्लिक डिप्लॉयमेंट"],
    testimonialQuote: "हमने AppNode के साथ 2 सप्ताह में अपना पूरा MVP बनाया। जिसमें डेवलपमेंट में $50K लगते, वो लागत के एक अंश में हो गया।",
    testimonialAuthor: "Jason Park",
    testimonialRole: "Founder, TechStartup"
  },
  {
    title: "डिज़ाइनरों के लिए",
    subtitle: "मिनटों में डिज़ाइन से प्रोडक्शन तक",
    description: "डिज़ाइन और डेवलपमेंट के बीच की खाई को पाटें। अपने डिज़ाइन इम्पोर्ट करें और उन्हें पिक्सेल-परफ़ेक्ट, रिस्पॉन्सिव एप्लिकेशन में बदलते देखें।",
    features: ["Figma इम्पोर्ट", "डिज़ाइन-से-कोड", "कम्पोनेंट लाइब्रेरी", "रिस्पॉन्सिव लेआउट"],
    testimonialQuote: "एक डिज़ाइनर के रूप में, मैं अब इंजीनियरिंग का इंतज़ार किए बिना अपने विचार शिप कर सकती हूँ। यह अविश्वसनीय रूप से सशक्त है।",
    testimonialAuthor: "Emma Chen",
    testimonialRole: "Lead Designer, DesignCo"
  },
  {
    title: "मार्केटर्स के लिए",
    subtitle: "कन्वर्ट करने वाले लैंडिंग पेज बनाएं",
    description: "बिना कोडिंग के शानदार लैंडिंग पेज, माइक्रोसाइट और मार्केटिंग टूल बनाएं। विचार की गति से A/B टेस्ट करें, बदलाव करें और ऑप्टिमाइज़ करें।",
    features: ["लैंडिंग पेज बिल्डर", "A/B टेस्टिंग", "SEO टूल्स", "एनालिटिक्स डैशबोर्ड"],
    testimonialQuote: "AppNode पर अपने लैंडिंग पेज स्विच करने के बाद से हमने अपनी कन्वर्शन दर 40% बढ़ा दी है।",
    testimonialAuthor: "Michael Torres",
    testimonialRole: "Head of Growth, ScaleUp"
  },
  {
    title: "प्रोटोटाइपिंग",
    subtitle: "मिनटों में विचार से प्रोटोटाइप तक",
    description: "विचारों को मान्य करने का सबसे तेज़ तरीका। AI द्वारा संचालित इंटरैक्टिव प्रोटोटाइप बनाएं जो वास्तविक एप्लिकेशन जैसे दिखते और काम करते हैं।",
    features: ["AI-सहायित निर्माण", "इंटरैक्टिव प्रीव्यू", "शेयर और सहयोग", "कोड एक्सपोर्ट"],
    testimonialQuote: "AppNode ने हमारे पूरे प्रोटोटाइपिंग वर्कफ़्लो को बदल दिया। हम हफ़्तों के बजाय घंटों में विचारों का परीक्षण कर सकते हैं।",
    testimonialAuthor: "Lisa Wang",
    testimonialRole: "Product Lead, InnovateCo"
  }
]);

// 6. statusPage.services
setDeep(hi, 'statusPage.services', [
  { name: "API", status: "चालू" },
  { name: "Web Application", status: "चालू" },
  { name: "Code Generation", status: "चालू" },
  { name: "Deployment Services", status: "चालू" },
  { name: "Database Connections", status: "चालू" },
  { name: "Authentication", status: "चालू" },
  { name: "CDN & Assets", status: "चालू" },
  { name: "Real-time Collaboration", status: "चालू" }
]);

// 7. statusPage.incidents
setDeep(hi, 'statusPage.incidents', [
  {
    date: "25 नवंबर, 2025",
    title: "बढ़ा हुआ API रिस्पॉन्स टाइम",
    status: "resolved",
    duration: "23 मिनट",
    description: "डेटाबेस कनेक्शन पूल समस्या के कारण हमने बढ़ा हुआ API रिस्पॉन्स टाइम अनुभव किया। कनेक्शन पूल को स्केल करके और क्वेरी पैटर्न को ऑप्टिमाइज़ करके समस्या की पहचान और समाधान किया गया।"
  },
  {
    date: "18 नवंबर, 2025",
    title: "डिप्लॉयमेंट सर्विस में गिरावट",
    status: "resolved",
    duration: "45 मिनट",
    description: "बढ़ी हुई क्यू डेप्थ के कारण कुछ डिप्लॉयमेंट में देरी हुई। भविष्य में ऐसी घटनाओं को रोकने के लिए हमने अपनी डिप्लॉयमेंट पाइपलाइन के लिए ऑटो-स्केलिंग लागू किया।"
  },
  {
    date: "10 नवंबर, 2025",
    title: "नियोजित रखरखाव",
    status: "completed",
    duration: "2 घंटे",
    description: "डेटाबेस माइग्रेशन और इंफ्रास्ट्रक्चर अपग्रेड के लिए नियोजित रखरखाव अवधि। सभी सेवाएं समय पर बहाल की गईं।"
  }
]);

// 8. statusPage.uptimeDays
setDeep(hi, 'statusPage.uptimeDays', ["सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि", "रवि"]);

// 9. billingPage.plans
setDeep(hi, 'billingPage.plans', [
  {
    name: "Free",
    price: "$0",
    period: "हमेशा के लिए",
    features: ["3 प्रोजेक्ट", "बेसिक AI सुविधाएँ", "समुदाय सहायता", "1GB स्टोरेज"]
  },
  {
    name: "Pro",
    price: "$20",
    period: "प्रति माह",
    features: ["असीमित प्रोजेक्ट", "उन्नत AI", "प्राथमिकता सहायता", "10GB स्टोरेज", "कस्टम डोमेन", "टीम सहयोग"]
  },
  {
    name: "Team",
    price: "$49",
    period: "प्रति माह",
    features: ["Pro में सब कुछ", "असीमित सदस्य", "एडमिन नियंत्रण", "100GB स्टोरेज", "SSO/SAML", "समर्पित सहायता"]
  }
]);

// 10. billingPage.invoices
setDeep(hi, 'billingPage.invoices', [
  { date: "1 नवंबर, 2025", amount: "$0.00", status: "भुगतान किया", plan: "Free" },
  { date: "1 अक्टूबर, 2025", amount: "$0.00", status: "भुगतान किया", plan: "Free" },
  { date: "1 सितंबर, 2025", amount: "$0.00", status: "भुगतान किया", plan: "Free" }
]);

// 11. teamsPage.pricing.features
setDeep(hi, 'teamsPage.pricing.features', [
  "Core में सब कुछ",
  "$40/माह उपयोग क्रेडिट शामिल",
  "50 Viewer सीटें",
  "केंद्रीकृत बिलिंग",
  "भूमिका-आधारित पहुँच नियंत्रण",
  "निजी डिप्लॉयमेंट",
  "प्राथमिकता सहायता"
]);

// 12. teamsPage.features
setDeep(hi, 'teamsPage.features', [
  { title: "रियल-टाइम सहयोग", description: "एक ही प्रोजेक्ट पर एक साथ काम करें। कर्सर, संपादन और बदलाव रियल-टाइम में देखें।" },
  { title: "भूमिका-आधारित पहुँच", description: "विस्तृत अनुमतियों के साथ नियंत्रित करें कि कौन देख, संपादित और डिप्लॉय कर सकता है।" },
  { title: "साझा कार्यक्षेत्र", description: "साझा टीम स्पेस में प्रोजेक्ट, टेम्पलेट और संसाधन व्यवस्थित करें।" },
  { title: "बिल्ट-इन चैट", description: "एडिटर संदर्भ में सीधे अपनी टीम के साथ संवाद करें।" },
  { title: "टीम एनालिटिक्स", description: "उत्पादकता, डिप्लॉयमेंट फ्रीक्वेंसी और प्रोजेक्ट हेल्थ ट्रैक करें।" },
  { title: "केंद्रीकृत बिलिंग", description: "एक ही डैशबोर्ड से सभी टीम सब्सक्रिप्शन और उपयोग प्रबंधित करें।" }
]);

// 13. useCases.rapidPrototyping.benefitsList
setDeep(hi, 'useCases.rapidPrototyping.benefitsList', [
  { title: "पैसे बचाएं", description: "पूर्ण डेवलपमेंट में निवेश करने से पहले विचारों को मान्य करें" },
  { title: "समय बचाएं", description: "हफ़्तों के बजाय घंटों में प्रोटोटाइप बनाएं" },
  { title: "जोखिम कम करें", description: "महंगे पिवट से बचने के लिए जल्दी उपयोगकर्ताओं के साथ परीक्षण करें" },
  { title: "टीमों को संरेखित करें", description: "सभी को एकजुट करने के लिए एक मूर्त दृष्टिकोण दें" }
]);

// 14. useCasesRapidPrototyping.traditional.steps
setDeep(hi, 'useCasesRapidPrototyping.traditional.steps', [
  { step: "वायरफ्रेम", time: "2-3 दिन" },
  { step: "डिज़ाइन मॉकअप", time: "1-2 सप्ताह" },
  { step: "डेवलपर हैंडऑफ", time: "1-2 दिन" },
  { step: "प्रोटोटाइप बनाना", time: "2-4 सप्ताह" },
  { step: "टेस्टिंग और इटरेशन", time: "1-2 सप्ताह" }
]);

// 15. useCasesRapidPrototyping.appnode.steps
setDeep(hi, 'useCasesRapidPrototyping.appnode.steps', [
  { step: "अपना आइडिया बताएं", time: "5 मिनट" },
  { step: "AI प्रोटोटाइप बनाता है", time: "2-10 मिनट" },
  { step: "कस्टमाइज़ और रिफ़ाइन करें", time: "30-60 मिनट" },
  { step: "स्टेकहोल्डर्स के साथ शेयर करें", time: "1 मिनट" },
  { step: "फीडबैक के आधार पर बदलाव करें", time: "15-30 मिनट" }
]);

// 16. affiliatesPage.benefits.items
setDeep(hi, 'affiliatesPage.benefits.items', [
  { title: "30% कमीशन", description: "आपके द्वारा रेफर किए गए हर ग्राहक पर पहले 12 महीनों के लिए 30% आवर्ती कमीशन कमाएं।" },
  { title: "90-दिन कुकी", description: "विस्तारित कुकी विंडो का मतलब है कि अगर वे बाद में साइन अप करते हैं तो भी आपको क्रेडिट मिलता है।" },
  { title: "रियल-टाइम डैशबोर्ड", description: "हमारे एफिलिएट डैशबोर्ड में रियल-टाइम में क्लिक, कन्वर्शन और कमाई ट्रैक करें।" },
  { title: "मासिक भुगतान", description: "PayPal या बैंक ट्रांसफर के माध्यम से हर महीने भुगतान प्राप्त करें। $50 न्यूनतम सीमा।" }
]);

// 17. affiliatesPage.tiers.items
setDeep(hi, 'affiliatesPage.tiers.items', [
  { name: "Starter", perks: ["बेसिक डैशबोर्ड", "ईमेल सहायता", "स्टैंडर्ड लिंक"] },
  { name: "Pro", perks: ["उन्नत एनालिटिक्स", "प्राथमिकता सहायता", "कस्टम लिंक", "प्रमोशनल एसेट्स"] },
  { name: "Elite", perks: ["समर्पित मैनेजर", "को-मार्केटिंग", "अर्ली एक्सेस", "कस्टम अभियान"] }
]);

// 18. affiliatesPage.howItWorks.steps
setDeep(hi, 'affiliatesPage.howItWorks.steps', [
  { title: "1. साइन अप करें", description: "अपना मुफ़्त एफिलिएट अकाउंट बनाएं और अपना अद्वितीय रेफरल लिंक प्राप्त करें।" },
  { title: "2. शेयर करें", description: "अपने दर्शकों, फ़ॉलोअर्स या समुदाय के साथ अपना लिंक शेयर करें।" },
  { title: "3. कमाएं", description: "हर भुगतान करने वाले ग्राहक के लिए हर महीने आवर्ती कमीशन कमाएं।" }
]);

// 19. connectionsPage.connections
setDeep(hi, 'connectionsPage.connections', [
  { name: "Supabase", description: "PostgreSQL डेटाबेस के साथ ओपन सोर्स Firebase विकल्प" },
  { name: "Stripe", description: "भुगतान प्रसंस्करण और सब्सक्रिप्शन प्रबंधन" },
  { name: "OpenAI", description: "अपने एप्लिकेशन में AI क्षमताएं जोड़ें" },
  { name: "Vercel", description: "अपने एप्लिकेशन को वैश्विक स्तर पर डिप्लॉय और होस्ट करें" },
  { name: "GitHub", description: "वर्शन कंट्रोल और कोड सहयोग" },
  { name: "Resend", description: "डेवलपर्स के लिए ईमेल API" },
  { name: "Cloudflare", description: "CDN, सुरक्षा और प्रदर्शन ऑप्टिमाइज़ेशन" },
  { name: "Twilio", description: "SMS, वॉयस और मैसेजिंग APIs" },
  { name: "Auth0", description: "प्रमाणीकरण और प्राधिकरण प्लेटफ़ॉर्म" },
  { name: "Algolia", description: "खोज और डिस्कवरी प्लेटफ़ॉर्म" },
  { name: "Shopify", description: "ई-कॉमर्स प्लेटफ़ॉर्म इंटीग्रेशन" },
  { name: "Notion", description: "Notion डेटाबेस और पेज से कनेक्ट करें" }
]);

// 20. securityReportPage.guidelines.items
setDeep(hi, 'securityReportPage.guidelines.items', [
  "अन्य उपयोगकर्ताओं के डेटा तक पहुँच, संशोधन या हटाना न करें।",
  "सेवा अस्वीकृति हमले न करें या हमारी सेवाओं को खराब न करें।",
  "सार्वजनिक प्रकटीकरण से पहले हमें समस्या ठीक करने के लिए उचित समय दें।",
  "केवल उन अकाउंट के विरुद्ध परीक्षण करें जो आपके हैं या जिनकी पहुँच की अनुमति है।"
]);

// 21. learnPublishPage.steps.items
setDeep(hi, 'learnPublishPage.steps.items', [
  { title: "अपना ऐप बताएं", description: "AppNode को बताएं कि आप क्या बनाना चाहते हैं। अपने ऐप की सुविधाओं, डिज़ाइन और कार्यक्षमता का वर्णन करने के लिए प्राकृतिक भाषा का उपयोग करें। जितने विस्तृत होंगे, परिणाम उतना बेहतर होगा।" },
  { title: "इसे बनते देखें", description: "AppNode का AI रियल-टाइम में आपका एप्लिकेशन तैयार करता है। आप कोड लिखा जाते और इंस्टेंट प्रीव्यू के साथ अपना ऐप आकार लेते देखेंगे। बस पूछकर बदलाव करें।" },
  { title: "प्रीव्यू और बदलाव करें", description: "अपने ऐप को सीधे ब्राउज़र में टेस्ट करें। देखें कि यह डेस्कटॉप, टैबलेट और मोबाइल पर कैसा दिखता है। बदलाव का अनुरोध करें, सुविधाएं जोड़ें, या स्टाइलिंग समायोजित करें जब तक यह परफ़ेक्ट न हो।" },
  { title: "तुरंत डिप्लॉय करें", description: "जब आप तैयार हों, एक क्लिक में अपना ऐप प्रकाशित करें। स्वचालित रूप से कस्टम डोमेन, SSL प्रमाणपत्र और ग्लोबल CDN प्राप्त करें। आपका ऐप सेकंडों में लाइव है।" }
]);

// 22. learnPublishPage.features.items
setDeep(hi, 'learnPublishPage.features.items', [
  { title: "एक-क्लिक डिप्लॉयमेंट", description: "कोई जटिल सेटअप या कॉन्फ़िगरेशन नहीं। बस Deploy पर क्लिक करें और आपका ऐप लाइव है।" },
  { title: "कस्टम डोमेन", description: "अपना खुद का डोमेन कनेक्ट करें या इंस्टेंट पब्लिशिंग के लिए हमारा मुफ़्त सबडोमेन उपयोग करें।" },
  { title: "SSL प्रमाणपत्र", description: "आपके सभी ऐप्स के लिए स्वचालित HTTPS। सुरक्षा मानक के रूप में शामिल है।" },
  { title: "ग्लोबल CDN", description: "आपका ऐप अत्यंत तेज़ स्पीड के लिए दुनिया भर के एज लोकेशन से सर्व किया जाता है।" },
  { title: "इंस्टेंट रोलबैक", description: "गलती हो गई? एक क्लिक में किसी भी पिछले वर्शन पर वापस जाएं।" },
  { title: "बिल्ट-इन एनालिटिक्स", description: "विज़िटर, पेज व्यू और प्रदर्शन मेट्रिक्स को बिना किसी एक्स्ट्रा सेटअप के ट्रैक करें।" }
]);

// 23. learnPublishPage.tips.items
setDeep(hi, 'learnPublishPage.tips.items', [
  { bold: "विशिष्ट रहें:", text: "अपने इच्छित रंग, लेआउट और कार्यक्षमता का वर्णन करें" },
  { bold: "सरल शुरू करें:", text: "मुख्य सुविधाओं से शुरू करें, फिर समय के साथ और जोड़ें" },
  { bold: "संदर्भ उपयोग करें:", text: "उन ऐप्स या वेबसाइटों के उदाहरण शेयर करें जो आपको पसंद हैं" },
  { bold: "सभी डिवाइस पर टेस्ट करें:", text: "डेस्कटॉप, टैबलेट और मोबाइल व्यू चेक करें" }
]);

// 24. blockchainSection.useCases
setDeep(hi, 'blockchainSection.useCases', [
  "लैंडिंग पेज",
  "टोकन प्रीसेल",
  "NFT ड्रॉप्स",
  "DeFi डैशबोर्ड",
  "Web3 ऐप्स",
  "DAO टूल्स",
  "स्टेकिंग प्लेटफ़ॉर्म",
  "मीम टोकन"
]);

// 25. blockchainSection.features
setDeep(hi, 'blockchainSection.features', [
  { title: "बिजली की तेज़ी", description: "किसी भी चेन पर सेकंडों में डिप्लॉय करें, घंटों में नहीं" },
  { title: "कोड की ज़रूरत नहीं", description: "प्राकृतिक भाषा से जटिल dApps बनाएं" },
  { title: "युद्ध-परीक्षित", description: "स्मार्ट कॉन्ट्रैक्ट ऑडिट किए गए और प्रोडक्शन-रेडी" },
  { title: "मल्टी-चेन नेटिव", description: "एक कोडबेस, हर ब्लॉकचेन समर्थित" }
]);

// 26. signupPage.roles
setDeep(hi, 'signupPage.roles', [
  "संस्थापक / उद्यमी",
  "डिज़ाइनर",
  "डेवलपर",
  "मार्केटर",
  "प्रोडक्ट मैनेजर",
  "अन्य"
]);

// 27. settingsPage.tabs
setDeep(hi, 'settingsPage.tabs', ["सामान्य", "सूचनाएँ", "सुरक्षा", "खतरा क्षेत्र"]);

fs.writeFileSync('./src/translations/hi.json', JSON.stringify(hi, null, 2), 'utf8');
console.log('Phase 10 complete: Added all missing array/object keys');
