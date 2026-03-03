const fs = require('fs');
const path = require('path');
const sr = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/translations/sr.json'), 'utf8'));
const en = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/translations/en.json'), 'utf8'));

function set(obj, keyPath, value) {
  const keys = keyPath.split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) current[keys[i]] = {};
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
}

const translations = {
  // common (5)
  "common.switchToLightMode": "Пребаците на светли режим",
  "common.switchToDarkMode": "Пребаците на тамни режим",
  "common.addAttachments": "Додајте прилоге",
  "common.addImage": "Додајте слику",
  "common.moveMouseToExplore": "Померите миш за истраживање",

  // homePage.videoSection (3)
  "homePage.videoSection.badge": "Како функционише",
  "homePage.videoSection.title": "Погледајте AppNode у акцији",
  "homePage.videoSection.subtitle": "Гледајте како програмери праве апликације спремне за продукцију за неколико минута користећи природни језик.",

  // hero (2)
  "hero.placeholder": "Опишите апликацију коју желите да направите...",
  "hero.pressEnter": "Притисните Enter за слање",

  // features (12)
  "features.subtitle": "AppNode пружа све алате и функције које су вам потребне за креирање невероватних апликација",
  "features.aiPowered.description": "Опишите своју идеју на природном језику и гледајте како AI гради вашу апликацију у реалном времену",
  "features.visualBuilder.description": "Превлачите и отпуштајте компоненте, прилагођавајте распореде и дизајнирајте лепа корисничка сучеља визуелно",
  "features.instantDeploy.description": "Покрените своје апликације једним кликом. Без конфигурације сервера потребне",
  "features.database.description": "Моћна интеграција базе података са аутоматским генерисањем шеме и миграцијама",
  "features.auth.description": "Безбедна аутентификација корисника одмах. Подршка за друштвено пријављивање и више",
  "features.api.title": "API интеграција",
  "features.api.description": "Повежите се са било којим API-јем помоћу нашег визуелног конектора. Увезите OpenAPI спецификације",
  "features.responsive.title": "Респонзивни дизајн",
  "features.responsive.description": "Ваше апликације изгледају одлично на сваком уређају. Аутоматски респонзивни распореди",
  "features.collaboration.title": "Сарадња у реалном времену",
  "features.collaboration.description": "Радите заједно са својим тимом у реалном времену. Видите промене како се дешавају",

  // buildAnything (27)
  "buildAnything.subtitle": "Почните да градите. Почните да зарађујете. Данас.",
  "buildAnything.exploreAll": "Истражите све шаблоне",
  "buildAnything.webApps.description": "Потпуне веб апликације са аутентификацијом, базама података и AI интеграцијом",
  "buildAnything.mobileApps.description": "Изворна мобилна искуства за iOS и Android из јединствене базе кода",
  "buildAnything.dashboards.title": "Контролне табле",
  "buildAnything.dashboards.description": "Визуализација података и аналитичке контролне табле са ажурирањем у реалном времену",
  "buildAnything.ecommerce.title": "Е-трговина",
  "buildAnything.ecommerce.description": "Онлајн продавнице са плаћањима, инвентаром и управљањем наруджбинама",
  "buildAnything.internal.title": "Интерни алати",
  "buildAnything.internal.description": "Прилагођени администраторски панели, CRM-ови и алати за аутоматизацију процеса.",
  "buildAnything.marketplace.title": "Тржишта",
  "buildAnything.marketplace.description": "Двостране платформе које повезују купце и продавце.",
  "buildAnything.categories.saasplatform": "SaaS платформа",
  "buildAnything.categories.gamingportal": "Гејминг портал",
  "buildAnything.categories.mapsnavigation": "Мапе и навигација",
  "buildAnything.categories.fashionstore": "Продавница моде",
  "buildAnything.categories.stylecollection": "Колекција стилова",
  "buildAnything.categories.beautyproducts": "Производи за лепоту",
  "buildAnything.categories.fitnesstracker": "Фитнес трекер",
  "buildAnything.categories.luxuryfragrance": "Луксузни парфем",
  "buildAnything.categories.beautystore": "Продавница лепоте",
  "buildAnything.categories.streamingplatform": "Стриминг платформа",
  "buildAnything.categories.gaminggearstore": "Продавница гејминг опреме",
  "buildAnything.categories.gamingstore": "Гејминг продавница",
  "buildAnything.categories.synthesizer": "Синтисајзер",
  "buildAnything.categories.projectroadmap": "План пројекта",
  "buildAnything.categories.analyticsdashboard": "Аналитичка контролна табла",

  // testimonials (16)
  "testimonials.badge": "Сведочанства",
  "testimonials.title": "Вољено од стваралаца широм света",
  "testimonials.subtitle": "Придружите се хиљадама програмера, дизајнера и предузетника који граде са AppNode-ом",
  "testimonials.quote1": "AppNode је потпуно трансформисао начин на који правимо прототипове. Оно што је некада трајало недељама сада се завршава за сате.",
  "testimonials.author1": "Sarah Chen",
  "testimonials.role1": "Менаџер производа у TechCorp",
  "testimonials.quote2": "Направио сам цео MVP свог стартапа користећи AppNode. AI разуме шта покушавам да направим.",
  "testimonials.author2": "Mike Rodriguez",
  "testimonials.role2": "Оснивач StartupX",
  "testimonials.quote3": "Као дизајнер, сада могу да оживим своје дизајне без чекања на ресурсе програмера.",
  "testimonials.author3": "Emma Wilson",
  "testimonials.role3": "Виши дизајнер у DesignStudio",
  "testimonials.stats.activeUsers": "Активни корисници",
  "testimonials.stats.projectsCreated": "Креирани пројекти",
  "testimonials.stats.countries": "Земље",
  "testimonials.stats.averageRating": "Просечна оцена",

  // cta (9)
  "cta.title": "Спремни да направите нешто",
  "cta.titleHighlight": "невероватно?",
  "cta.subtitle": "Почните да креирате своју апликацију данас. Кредитна картица није потребна.",
  "cta.description": "Придружите се хиљадама стваралаца који већ граде будућност",
  "cta.button": "Почните да градите бесплатно",
  "cta.emailPlaceholder": "Унесите свој имејл",
  "cta.successMessage": "Проверите свој имејл да бисте почели!",
  "cta.newFeatures": "Паметни стилови и аутоматски распореди",
  "cta.trustedBy": "Поверење тимова у",

  // footer (10)
  "footer.learn": "Учење",
  "footer.guides": "Водичи",
  "footer.videos": "Видео снимци",
  "footer.cookieSettings": "Подешавања колачића",
  "footer.platformRules": "Правила платформе",
  "footer.documentation": "Документација",
  "footer.connectWithUs": "Повежите се са нама",
  "footer.allRightsReserved": "Сва права задржана",
  "footer.buildReadyApps": "Правите апликације спремне за продукцију са AI",
  "footer.company": "Компанија",

  // errors (5)
  "errors.notFound": "Страница није пронађена",
  "errors.serverError": "Грешка сервера",
  "errors.unauthorized": "Неовлашћен приступ",
  "errors.forbidden": "Забрањено",
  "errors.maintenance": "Одржавање",

  // legal (4)
  "legal.termsOfService": "Услови коришћења",
  "legal.privacyPolicy": "Политика приватности",
  "legal.cookiePolicy": "Политика колачића",
  "legal.acceptAll": "Прихвати све",

  // status (5)
  "status.pageTitle": "Статус система",
  "status.operational": "Сви системи оперативни",
  "status.degraded": "Смањене перформансе",
  "status.downtime": "Прекид услуге",
  "status.lastUpdated": "Последње ажурирање",

  // blog (6)
  "blog.latestPosts": "Најновији чланци",
  "blog.readMore": "Прочитај више",
  "blog.categories": "Категорије",
  "blog.allPosts": "Сви чланци",
  "blog.minuteRead": "мин читања",
  "blog.searchPosts": "Претражите чланке",

  // support (5)
  "support.title": "Подршка",
  "support.searchPlaceholder": "Претражите теме помоћи...",
  "support.contactUs": "Контактирајте нас",
  "support.helpCenter": "Центар за помоћ",
  "support.faq": "Најчешћа питања",

  // community (5)
  "community.title": "Заједница",
  "community.joinDiscussion": "Придружите се дискусији",
  "community.contribute": "Допринесите",
  "community.showcase": "Изложба",
  "community.events": "Догађаји",

  // solutions (7)
  "solutions.title": "Решења",
  "solutions.forStartups": "За стартапове",
  "solutions.forEnterprise": "За предузећа",
  "solutions.forDevelopers": "За програмере",
  "solutions.forDesigners": "За дизајнере",
  "solutions.forEducation": "За образовање",
  "solutions.forAgencies": "За агенције",

  // docs (7)
  "docs.title": "Документација",
  "docs.gettingStarted": "Почетак",
  "docs.tutorials": "Туторијали",
  "docs.apiReference": "API референце",
  "docs.changelog": "Дневник промена",
  "docs.statusPage": "Страница статуса",
  "docs.support": "Подршка",

  // careers (14)
  "careers.title": "Каријере",
  "careers.subtitle": "Придружите се нашем тиму и помозите да обликујемо будућност програмирања",
  "careers.openPositions": "Отворене позиције",
  "careers.department": "Одељење",
  "careers.location": "Локација",
  "careers.type": "Тип",
  "careers.applyNow": "Пријавите се сада",
  "careers.benefits": "Бенефиције",
  "careers.culture": "Култура",
  "careers.values": "Вредности",
  "careers.mission": "Мисија",
  "careers.perks": "Погодности",
  "careers.remote": "Удаљени рад",
  "careers.diversity": "Разноликост",

  // enterprise (15)
  "enterprise.badge": "За предузећа",
  "enterprise.title": "AppNode за предузећа",
  "enterprise.subtitle": "Сигурна, скалабилна и прилагодљива решења за ваш тим",
  "enterprise.features.sso": "SSO и SAML",
  "enterprise.features.audit": "Дневници ревизије",
  "enterprise.features.sla": "99,9% SLA",
  "enterprise.features.support": "Посвећена подршка",
  "enterprise.features.custom": "Прилагођене интеграције",
  "enterprise.features.compliance": "Усклађеност",
  "enterprise.cta": "Контактирајте продају",
  "enterprise.trusted": "Поверење предузећа",
  "enterprise.security": "Безбедност на нивоу предузећа",
  "enterprise.scale": "Неограничено скалирање",
  "enterprise.deploy": "Приватно покретање",
  "enterprise.analytics": "Напредна аналитика",

  // solutionsWeb3 (3)
  "solutionsWeb3.title": "Web3 Решења",
  "solutionsWeb3.subtitle": "Градите децентрализовано",
  "solutionsWeb3.description": "Креирајте dApp-ове, паметне уговоре и Web3 апликације",

  // dashboardPage (5)
  "dashboardPage.welcomeBack": "Добродошли назад",
  "dashboardPage.recentProjects": "Недавни пројекти",
  "dashboardPage.quickActions": "Брзе акције",
  "dashboardPage.analytics": "Аналитика",
  "dashboardPage.settings": "Подешавања",

  // useCases (7)
  "useCases.title": "Случајеви коришћења",
  "useCases.subtitle": "Откријте како AppNode помаже тимовима свих величина",
  "useCases.rapidPrototyping.title": "Брзо прототиповање",
  "useCases.mobileApps.title": "Мобилне апликације",
  "useCases.businessApps.title": "Пословне апликације",
  "useCases.education.title": "Образовање",
  "useCases.ecommerce.title": "Е-трговина",

  // pricing (56)
  "pricing.badge": "Цене",
  "pricing.title": "Једноставне цене засноване на кредитима",
  "pricing.subtitle": "Плаћајте само за оно што користите. Без претплата, без скривених трошкова.",
  "pricing.freeTier.title": "Бесплатан ниво",
  "pricing.freeTier.subtitle": "Почните без кредитне картице",
  "pricing.freeTier.features.freeApps": "2 бесплатне апликације",
  "pricing.freeTier.features.allTemplates": "Потпун приступ свим шаблонима",
  "pricing.freeTier.features.livePreview": "Преглед уживо и развој",
  "pricing.freeTier.features.githubExport": "Извоз у GitHub",
  "pricing.buyCredits.title": "Купите кредите",
  "pricing.buyCredits.popular": "Најпопуларније",
  "pricing.buyCredits.buyNow": "Купите сада",
  "pricing.credits10.amount": "10 кредита",
  "pricing.credits50.amount": "50 кредита",
  "pricing.credits100.amount": "100 кредита",
  "pricing.credits500.amount": "500 кредита",
  "pricing.faq.title": "Најчешћа питања",
  "pricing.faq.subtitle": "Све што треба да знате о нашим ценама",
  "pricing.faq.q1": "Шта могу да радим са кредитима?",
  "pricing.faq.a1": "Кредити се користе за генерисање апликација са AI. Свака генерација апликације или значајна модификација троши кредите на основу сложености.",
  "pricing.faq.q2": "Да ли кредити истичу?",
  "pricing.faq.a2": "Не, купљени кредити никада не истичу. Користите их кад год будете спремни.",
  "pricing.faq.q3": "Могу ли да извезем свој код?",
  "pricing.faq.a3": "Да! Све апликације направљене на AppNode-у могу бити извезене као потпуни Next.js пројекти на GitHub.",
  "pricing.faq.q4": "Да ли постоји бесплатни пробни период?",
  "pricing.faq.a4": "Бесплатан ниво укључује 2 бесплатне апликације да испробате платформу. Кредитна картица није потребна.",
  "pricing.faq.q5": "Шта ако ми затреба више кредита?",
  "pricing.faq.a5": "Можете купити додатне кредите у било ком тренутку. Што више купите одједном, то боља вредност коју добијате.",
  "pricing.faq.q6": "Да ли нудите повраћај новца?",
  "pricing.faq.a6": "Да, нудимо 14-дневну гаранцију поврата новца на све куповине кредита.",
  "pricing.faq.q7": "Шта се дешава са мојим апликацијама ако потрошим кредите?",
  "pricing.faq.a7": "Ваше постојеће апликације продужавају да раде нормално. Кредити су потребни само за генерисање нових или значајне модификације.",
  "pricing.faq.q8": "Да ли нудите попусте за велике количине?",
  "pricing.faq.a8": "Да! Наши пакети од 100 и 500 кредита долазе са значајним попустима. За потребе предузећа, контактирајте наш тим за продају.",
  "pricing.enterprise.title": "Потребе предузећа?",
  "pricing.enterprise.subtitle": "Добијте прилагођено решење за ваш тим",
  "pricing.enterprise.features.unlimitedCredits": "Неограничени кредити",
  "pricing.enterprise.features.prioritySupport": "Приоритетна подршка",
  "pricing.enterprise.features.customIntegrations": "Прилагођене интеграције",
  "pricing.enterprise.features.sla": "SLA за предузећа",
  "pricing.enterprise.features.sso": "SSO и SAML",
  "pricing.enterprise.features.dedicatedManager": "Посвећени менаџер налога",
  "pricing.enterprise.cta": "Контактирајте продају",
  "pricing.comparisonTitle": "Упоредите планове",
  "pricing.comparisonFeature1": "AI генерисање апликација",
  "pricing.comparisonFeature2": "Извоз кода",
  "pricing.comparisonFeature3": "Прилагођени домени",
  "pricing.comparisonFeature4": "Тимска сарадња",
  "pricing.comparisonFeature5": "Приоритетна подршка",
  "pricing.comparisonFeature6": "SSO и SAML",
  "pricing.comparisonFree": "Бесплатни",
  "pricing.comparisonPro": "Pro",
  "pricing.comparisonTeam": "Тимски",
  "pricing.comparisonEnterprise": "За предузећа",
  "pricing.comparisonIncluded": "Укључено",
  "pricing.comparisonNotIncluded": "Није укључено",

  // products (21)
  "products.aiBuilder": "AI конструктор",
  "products.aiBuilder.description": "Описите и градите апликације са AI",
  "products.codeEditor": "Уређивач кода",
  "products.codeEditor.description": "Професионални уређивач кода у облаку",
  "products.design": "Дизајн",
  "products.design.description": "Визуелни алати за дизајн и прототиповање",
  "products.database": "База података",
  "products.database.description": "Уграђена подршка за базе података",
  "products.auth": "Аутентификација",
  "products.auth.description": "Аутентификација и управљање корисницима",
  "products.deploy": "Покретање",
  "products.deploy.description": "Покретање једним кликом и хостинг",
  "products.mobile": "Мобилни",
  "products.mobile.description": "Развој мобилних апликација",
  "products.security": "Безбедност",
  "products.security.description": "Безбедност и усклађеност за предузећа",
  "products.integrations": "Интеграције",
  "products.integrations.description": "Повежите се са сервисима трећих страна",
  "products.collaboration": "Сарадња",
  "products.collaboration.description": "Тимска сарадња у реалном времену",
  "products.agent": "AI агент",
};

let count = 0;
for (const [p, v] of Object.entries(translations)) {
  set(sr, p, v);
  count++;
}

fs.writeFileSync(path.join(__dirname, 'src/translations/sr.json'), JSON.stringify(sr, null, 2), 'utf8');
console.log(`Successfully set ${count} Serbian translations.`);
