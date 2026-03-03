const fs = require('fs');
const path = require('path');
const sr = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/translations/sr.json'), 'utf8'));

function set(obj, keyPath, value) {
  const keys = keyPath.split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) current[keys[i]] = {};
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
}

const t = {
  // productIntegrations
  "productIntegrations.badge": "Повежите све",
  "productIntegrations.title": "Моћне",
  "productIntegrations.titleHighlight": "Интеграције",
  "productIntegrations.subtitle": "Повежите се са својим омиљеним алатима и сервисима без конфигурације. AppNode се интегрише са водећим платформама.",
  "productIntegrations.browseAll": "Прегледајте све интеграције",
  "productIntegrations.popularIntegrations": "Популарне интеграције",
  "productIntegrations.getStarted": "Почните бесплатно",

  // productSecurity
  "productSecurity.badge": "Безбедност за предузећа",
  "productSecurity.title": "Безбедност",
  "productSecurity.titleHighlight": "на првом месту",
  "productSecurity.subtitle": "Градите са поверењем. AppNode пружа безбедност на нивоу предузећа, скенирање пре покретања и комплетну заштиту за ваше апликације.",
  "productSecurity.enterpriseSolutions": "Решења за предузећа",
  "productSecurity.securityReport": "Безбедносни извештај",
  "productSecurity.featuresTitle": "Безбедносне функције",

  // productAgent
  "productAgent.badge": "Развој покретан AI-јем",
  "productAgent.title": "Упознајте AppNode",
  "productAgent.titleHighlight": "Агент",
  "productAgent.subtitle": "Ваш AI сапутник за програмирање који пише код спреман за продукцију, унапређује га док итерирате и учи ваше преференце.",
  "productAgent.startBuilding": "Почните да градите бесплатно",
  "productAgent.howItWorks": "Како агент функционише",

  // productDesign
  "productDesign.badge": "Визуелни развој",
  "productDesign.title": "Дизајнирајте са",
  "productDesign.titleHighlight": "прецизношћу",
  "productDesign.subtitle": "Детаљне контроле тако да ваша апликација одговара вашој визији. Увезите своје дизајне или интегришите са алатима за дизајн.",
  "productDesign.tryDesignTools": "Испробајте алате за дизајн",
  "productDesign.visualEditor": "Визуелни уређивач",
  "productDesign.components": "Компоненте",
  "productDesign.properties": "Својства",
  "productDesign.width": "Ширина",
  "productDesign.background": "Позадина",
  "productDesign.borderRadius": "Заобљеност ивица",
  "productDesign.featuresTitle": "Функције дизајна",
  "productDesign.startDesigning": "Почните да дизајнирате",

  // productPublish
  "productPublish.badge": "Покретање",
  "productPublish.title": "Тренутно",
  "productPublish.titleHighlight": "објавите",
  "productPublish.subtitle": "Покрените своје апликације једним кликом. Добијте прилагођени домен, SSL сертификате и глобални CDN.",
  "productPublish.deployNow": "Покрените сада",
  "productPublish.featuresTitle": "Све што вам треба за испоруку",
  "productPublish.startDeploying": "Почните са покретањем",

  // productDatabase
  "productDatabase.badge": "Управљање подацима",
  "productDatabase.title": "Уграђена",
  "productDatabase.titleHighlight": "база података",
  "productDatabase.subtitle": "Чувајте и управљајте својим подацима без икаквих подешавања. AppNode пружа моћну, скалабилну базу података.",
  "productDatabase.getStarted": "Почните бесплатно",
  "productDatabase.readDocs": "Прочитајте документацију",

  // productMobile
  "productMobile.badge": "Градите у покрету",
  "productMobile.title": "AppNode за",
  "productMobile.titleHighlight": "мобилне",
  "productMobile.subtitle": "Градите, уређујте и покрећите своје апликације са било ког места. Потпуна моћ AppNode-а у вашем џепу.",
  "productMobile.appStore": "App Store",
  "productMobile.playStore": "Play Store",
  "productMobile.live": "Уживо",
  "productMobile.run": "Покрени",
  "productMobile.deploy": "Покрени",
  "productMobile.output": "Излаз",
  "productMobile.featuresTitle": "Потпуна моћ, било где",
  "productMobile.downloadIOS": "Преузмите за iOS",
  "productMobile.downloadAndroid": "Преузмите за Android",
  "productMobile.features.codeEditor.title": "Потпуни уређивач кода",
  "productMobile.features.codeEditor.description": "Комплетан уређивач кода са истицањем синтаксе, аутоматским довршавањем и подршком за више језика",
  "productMobile.features.oneTapDeploy.title": "Покретање једним додиром",
  "productMobile.features.oneTapDeploy.description": "Покрените своје промене тренутно са телефона. Гледајте како ваша апликација постаје жива за секунде.",
  "productMobile.features.realTimeSync.title": "Синхронизација у реалном времену",
  "productMobile.features.realTimeSync.description": "Ваши пројекти се синхронизују на свим уређајима. Почните на десктопу, наставите на мобилном.",
  "productMobile.features.aiAssistant.title": "AI асистент",
  "productMobile.features.aiAssistant.description": "Добијте AI помоћ при писању кода, чак и на мобилном. Подржан гласовни унос.",
  "productMobile.features.liveAnalytics.title": "Аналитика уживо",
  "productMobile.features.liveAnalytics.description": "Пратите перформансе своје апликације, грешке и метрике корисника у покрету.",
  "productMobile.features.teamCollaboration.title": "Тимска сарадња",
  "productMobile.features.teamCollaboration.description": "Прегледајте PR-ове, коментаришите код и сарађујте са тимом са било ког места.",
  "productMobile.cta.title": "Кодирајте са било ког места",
  "productMobile.cta.subtitle": "Преузмите AppNode мобилну апликацију и понесите свој развојни процес где год идете.",

  // auth.login
  "auth.login.title": "Добродошли назад",
  "auth.login.subtitle": "Пријавите се на свој AppNode налог",
  "auth.login.email": "Имејл адреса",
  "auth.login.password": "Лозинка",
  "auth.login.forgotPassword": "Заборавили сте лозинку?",
  "auth.login.noAccount": "Немате налог?",
  "auth.login.signUpLink": "Региструјте се",
  "auth.login.invalidCredentials": "Неважећи имејл или лозинка",
  "auth.login.loggingIn": "Пријављивање...",
  "auth.login.orContinueWith": "Или наставите са",
  "auth.login.decorativeTitle": "Направите било шта.",
  "auth.login.decorativeSubtitle": "Брже него икада.",
  "auth.login.decorativeDescription": "Најједноставнији начин на свету да правите апликације са AI.",

  // auth.signup
  "auth.signup.title": "Направите свој налог",
  "auth.signup.subtitle": "Почните да градите са AppNode-ом данас",
  "auth.signup.name": "Пуно име",
  "auth.signup.email": "Имејл адреса",
  "auth.signup.password": "Лозинка",
  "auth.signup.confirmPassword": "Потврдите лозинку",
  "auth.signup.hasAccount": "Већ имате налог?",
  "auth.signup.loginLink": "Пријавите се",
  "auth.signup.terms": "Регистрацијом прихватате наше Услове коришћења и Политику приватности.",
  "auth.signup.decorativeTitle": "Почните да градите данас",
  "auth.signup.decorativeDescription": "Направите бесплатан налог и почните да правите невероватне апликације са AI за неколико минута.",
  "auth.signup.step2Title": "Персонализујте свој профил",
  "auth.signup.step2Subtitle": "Изаберите боју аватара која вас представља",
  "auth.signup.step3Title": "Реците нам о себи",
  "auth.signup.step3Subtitle": "Ово нам помаже да персонализујемо ваше искуство",
  "auth.signup.roleQuestion": "Шта најбоље описује вашу улогу?",
  "auth.signup.company": "Назив компаније",
  "auth.signup.creatingAccount": "Креирање налога...",
  "auth.signup.createAccount": "Направите налог",

  // auth.features
  "auth.features.aiPowered": "Развој покретан AI-јем",
  "auth.features.shipFast": "Испоручите за минуте, не месеце",
  "auth.features.freeGenerations": "2 бесплатне генерације за почетак",
  "auth.features.noCreditCard": "Кредитна картица није потребна",
  "auth.features.fullAccess": "Потпун приступ свим шаблонима",
};

let count = 0;
for (const [p, v] of Object.entries(t)) { set(sr, p, v); count++; }
fs.writeFileSync(path.join(__dirname, 'src/translations/sr.json'), JSON.stringify(sr, null, 2), 'utf8');
console.log('Set', count, 'translations');
