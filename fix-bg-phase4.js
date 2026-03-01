const fs = require('fs');
const bg = JSON.parse(fs.readFileSync('src/translations/bg.json', 'utf8'));

function set(obj, path, val) {
  const parts = path.replace(/\[(\d+)\]/g, '.$1').split('.');
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const k = isNaN(parts[i]) ? parts[i] : Number(parts[i]);
    if (cur[k] === undefined) cur[k] = {};
    cur = cur[k];
  }
  const last = isNaN(parts[parts.length - 1]) ? parts[parts.length - 1] : Number(parts[parts.length - 1]);
  cur[last] = val;
}

const translations = {
  // ===== common =====
  "common.switchToLightMode": "Превключи на светъл режим",
  "common.switchToDarkMode": "Превключи на тъмен режим",
  "common.addAttachments": "Добави прикачени файлове",
  "common.addImage": "Добави изображение",
  "common.moveMouseToExplore": "Преместете мишката за разглеждане",

  // ===== homePage =====
  "homePage.videoSection.badge": "Как работи",
  "homePage.videoSection.title": "Вижте AppNode в действие",
  "homePage.videoSection.subtitle": "Вижте как разработчиците създават приложения, готови за продукция, за минути, използвайки естествен език.",

  // ===== hero =====
  "hero.placeholder": "Опишете приложението, което искате да създадете...",
  "hero.pressEnter": "Натиснете Enter за изпращане",

  // ===== features =====
  "features.subtitle": "AppNode предоставя всички инструменти и функции, необходими за създаване на мощни приложения без писане на код.",
  "features.aiPowered.description": "Опишете идеята си на естествен език и наблюдавайте как AI създава вашето приложение в реално време.",
  "features.visualBuilder.description": "Плъзгайте и пускайте компоненти, персонализирайте оформления и проектирайте красиви интерфейси без код.",
  "features.instantDeploy.description": "Внедрете приложенията си с един клик. Не е необходима конфигурация на сървъра.",
  "features.database.description": "Мощна интеграция с бази данни с автоматично генериране на схеми и синхронизация в реално време.",
  "features.auth.description": "Сигурно удостоверяване на потребителите от самото начало. Поддръжка на социални входове и SSO.",
  "features.api.title": "API интеграция",
  "features.api.description": "Свържете се с всяко API чрез нашия визуален конектор. Импортирайте OpenAPI спецификации мигновено.",
  "features.responsive.title": "Адаптивен дизайн",
  "features.responsive.description": "Вашите приложения изглеждат страхотно на всяко устройство. Автоматични адаптивни оформления и визуализации.",
  "features.collaboration.title": "Сътрудничество в реално време",
  "features.collaboration.description": "Работете заедно с екипа си в реално време. Вижте промените, докато се случват.",

  // ===== buildAnything =====
  "buildAnything.subtitle": "Започнете да създавате. Започнете да печелите. Днес.",
  "buildAnything.exploreAll": "Разгледайте всички шаблони",
  "buildAnything.webApps.description": "Пълнофункционални уеб приложения с удостоверяване, бази данни и API-та.",
  "buildAnything.mobileApps.description": "Нативни мобилни изживявания за iOS и Android от една кодова база.",
  "buildAnything.dashboards.title": "Табла",
  "buildAnything.dashboards.description": "Визуализация на данни и аналитични табла с актуализации в реално време.",
  "buildAnything.ecommerce.title": "Е-търговия",
  "buildAnything.ecommerce.description": "Онлайн магазини с плащания, инвентар и управление на поръчки.",
  "buildAnything.internal.title": "Вътрешни инструменти",
  "buildAnything.internal.description": "Персонализирани администраторски панели, CRM системи и инструменти за автоматизация на работния процес.",
  "buildAnything.marketplace.title": "Пазари",
  "buildAnything.marketplace.description": "Двустранни платформи, свързващи купувачи и продавачи.",
  "buildAnything.categories.saasplatform": "SaaS платформа",
  "buildAnything.categories.gamingportal": "Гейминг портал",
  "buildAnything.categories.mapsnavigation": "Карти и навигация",
  "buildAnything.categories.fashionstore": "Магазин за мода",
  "buildAnything.categories.stylecollection": "Колекция от стилове",
  "buildAnything.categories.beautyproducts": "Козметични продукти",
  "buildAnything.categories.fitnesstracker": "Фитнес тракер",
  "buildAnything.categories.luxuryfragrance": "Луксозен парфюм",
  "buildAnything.categories.beautystore": "Козметичен магазин",
  "buildAnything.categories.streamingplatform": "Стрийминг платформа",
  "buildAnything.categories.gaminggearstore": "Магазин за гейминг екипировка",
  "buildAnything.categories.gamingstore": "Гейминг магазин",
  "buildAnything.categories.synthesizer": "Синтезатор",
  "buildAnything.categories.projectroadmap": "Пътна карта на проекта",
  "buildAnything.categories.analyticsdashboard": "Аналитично табло",

  // ===== testimonials =====
  "testimonials.badge": "Отзиви",
  "testimonials.title": "Обичан от създатели по целия свят",
  "testimonials.subtitle": "Присъединете се към хиляди разработчици, дизайнери и предприемачи, които създават с AppNode.",
  "testimonials.quote1": "AppNode напълно промени начина, по който прототипираме. Това, което преди отнемаше седмици, сега отнема часове.",
  "testimonials.author1": "Sarah Chen",
  "testimonials.role1": "Продуктов мениджър в TechCorp",
  "testimonials.quote2": "Създадох целия MVP на моя стартъп с AppNode. AI разбира точно от какво имам нужда.",
  "testimonials.author2": "Mike Rodriguez",
  "testimonials.role2": "Основател на StartupX",
  "testimonials.quote3": "Като дизайнер вече мога да оживя дизайните си, без да чакам разработчици.",
  "testimonials.author3": "Emma Wilson",
  "testimonials.role3": "Старши дизайнер в DesignStudio",
  "testimonials.stats.activeUsers": "Активни потребители",
  "testimonials.stats.projectsCreated": "Създадени проекти",
  "testimonials.stats.countries": "Държави",
  "testimonials.stats.averageRating": "Среден рейтинг",

  // ===== cta =====
  "cta.title": "Готови ли сте да създадете нещо",
  "cta.titleHighlight": "невероятно?",
  "cta.subtitle": "Започнете да създавате приложението си днес. Не е необходима кредитна карта.",
  "cta.description": "Присъединете се към хиляди създатели, които вече изграждат бъдещето с AppNode. Започнете безплатно, без кредитна карта.",
  "cta.button": "Започнете да създавате безплатно",
  "cta.emailPlaceholder": "Въведете вашия имейл",
  "cta.successMessage": "Проверете имейла си, за да започнете!",
  "cta.newFeatures": "Интелигентни стилове и автоматични оформления",
  "cta.trustedBy": "Доверен от екипи в",

  // ===== footer =====
  "footer.learn": "Учене",
  "footer.guides": "Ръководства",
  "footer.videos": "Видеоклипове",
  "footer.cookieSettings": "Настройки за бисквитки",
  "footer.platformRules": "Правила на платформата",
  "footer.documentation": "Документация",
  "footer.reportAbuse": "Докладвай злоупотреба",
  "footer.madeWith": "Направено с",
  "footer.tagline": "Създавайте приложения, готови за продукция, с AI",
  "footer.connectWithUs": "Свържете се с нас",

  // ===== products =====
  "products.subtitle": "Мощни инструменти за създаване, внедряване и мащабиране на вашите приложения",
  "products.agent.title": "AI Агент",
  "products.agent.description": "Интелигентен AI, който разбира вашите изисквания и автоматично създава приложения.",
  "products.agent.tagline": "Създавайте с естествен език",
  "products.database.title": "Бази данни",
  "products.database.description": "Мащабируема, сигурна база данни със синхронизация в реално време и автоматични резервни копия.",
  "products.database.tagline": "Вашите данни, управлявани",
  "products.design.title": "Дизайн студио",
  "products.design.description": "Визуални инструменти за дизайн за създаване на зашеметяващи интерфейси без код.",
  "products.design.tagline": "Дизайнирайте красиво",
  "products.integrations.title": "Интеграции",
  "products.integrations.description": "Свържете се с хиляди услуги и API-та с готови конектори.",
  "products.integrations.tagline": "Свържете всичко",
  "products.mobile.title": "Мобилно",
  "products.mobile.description": "Създавайте нативни мобилни приложения за iOS и Android от един проект.",
  "products.mobile.tagline": "Станете мобилни",
  "products.publish.title": "Публикуване",
  "products.publish.description": "Внедрете с един клик. Персонални домейни и глобален CDN включени.",
  "products.publish.tagline": "Станете глобални",
  "products.security.title": "Сигурност",
  "products.security.description": "Сигурност на корпоративно ниво с криптиране, контрол на достъпа и одити.",
  "products.security.tagline": "Защитени по подразбиране",

  // ===== nav =====
  "nav.blog": "Blog",

  // ===== blog =====
  "blog.readTime": "мин четене",

  // ===== careers =====
  "careers.benefits.remote": "Дистанционна работа",
  "careers.benefits.remoteDesc": "Работете от всяко кътче на света",
  "careers.benefits.equity": "Дялово участие",
  "careers.benefits.equityDesc": "Споделете нашия успех",
  "careers.benefits.health": "Здравни привилегии",
  "careers.benefits.healthDesc": "Цялостно покритие за вас и вашето семейство",
  "careers.benefits.learning": "Бюджет за обучение",
  "careers.benefits.learningDesc": "Инвестирайте в своя растеж",
  "careers.title": "Присъединете се към екипа на AppNode",
  "careers.subtitle": "Изграждаме бъдещето на AI разработката. Присъединете се към нас.",
  "careers.openPositions": "Отворени позиции",
  "careers.openPositionsDesc": "Разгледайте нашите текущи възможности за работа",
  "careers.noPositions": "Няма налични позиции в момента",
  "careers.applyNow": "Кандидатствайте сега",
  "careers.location": "Местоположение",
  "careers.type": "Тип",
  "careers.department": "Отдел",
  "careers.description": "Описание",
  "careers.teamTitle": "Познайте екипа ни",
  "careers.teamSubtitle": "Нашите талантливи хора правят AppNode невероятен",

  // ===== community =====
  "community.showcase": "Изложба на проекти",
  "community.events": "Предстоящи събития",
  "community.joinDiscord": "Присъединете се към Discord",
  "community.joinCommunity": "Присъединете се към общността",

  // ===== support =====
  "support.helpCenter": "Център за помощ",
  "support.status": "Системен статус",

  // ===== errors =====
  "errors.404.description": "Страницата, която търсите, не съществува.",
  "errors.500.title": "Нещо се обърка",
  "errors.500.description": "Работим по отстраняването. Моля, опитайте отново по-късно.",
  "errors.500.retry": "Опитайте отново",

  // ===== status =====
  "status.title": "Системен статус",
  "status.outage": "Прекъсване на услугата",
};

for (const [path, val] of Object.entries(translations)) {
  set(bg, path, val);
}

fs.writeFileSync('src/translations/bg.json', JSON.stringify(bg, null, 2), 'utf8');
console.log('Phase 4: Small sections translated. bg.json saved.');
