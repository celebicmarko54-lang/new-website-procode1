const fs = require('fs');
const path = require('path');

const srPath = path.join(__dirname, 'src/translations/sr.json');
const sr = JSON.parse(fs.readFileSync(srPath, 'utf8'));

let addedCount = 0;

function set(obj, dotPath, value) {
  const keys = dotPath.split('.');
  let cur = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!(keys[i] in cur) || typeof cur[keys[i]] !== 'object' || cur[keys[i]] === null) {
      cur[keys[i]] = {};
    }
    cur = cur[keys[i]];
  }
  const last = keys[keys.length - 1];
  const existed = last in cur;
  cur[last] = value;
  if (!existed) {
    addedCount++;
    console.log(`  + ${dotPath}`);
  } else {
    console.log(`  ~ ${dotPath} (overwritten)`);
  }
}

// ─── productMobile ──────────────────────────────────────────
console.log('\n[productMobile]');
set(sr, 'productMobile.comingSoonOn', 'Ускоро на');
set(sr, 'productMobile.googlePlay', 'Google Play');
set(sr, 'productMobile.soonBadge', 'УСКОРО');
set(sr, 'productMobile.comingSoonTitle', 'Мобилне апликације ускоро');
set(sr, 'productMobile.comingSoonDescription', 'Наше мобилне апликације су тренутно у развоју. У међувремену, наши корисници могу приступити AppNode-у са било ког уређаја - десктоп, таблет или телефон - преко претраживача и одмах прегледати како њихове апликације изгледају на различитим величинама екрана.');
set(sr, 'productMobile.tabletPreview', 'Преглед на таблету');
set(sr, 'productMobile.phonePreview', 'Преглед на телефону');
set(sr, 'productMobile.tryAppNodeNow', 'Испробајте AppNode сада');

// ─── useCases.rapidPrototyping.benefitsList ─────────────────
console.log('\n[useCases.rapidPrototyping.benefitsList]');
set(sr, 'useCases.rapidPrototyping.benefitsList', [
  { title: 'Уштедите новац', description: 'Потврдите идеје пре него што инвестирате у потпуни развој' },
  { title: 'Уштедите време', description: 'Направите прототипове за сате уместо недеља' },
  { title: 'Смањите ризик', description: 'Тестирајте са корисницима рано да избегнете скупе промене' },
  { title: 'Ускладите тимове', description: 'Дајте свима опипљиву визију око које се могу окупити' }
]);

// ─── supportPage ────────────────────────────────────────────
console.log('\n[supportPage]');
set(sr, 'supportPage.botGreeting', 'Здраво! 👋 Ја сам AppNode-ов асистент подршке. Како вам могу помоћи данас?');
set(sr, 'supportPage.liveAgentMessage', 'Радо ћу вас повезати са нашим тимом подршке! Можете нас контактирати на support@appnode.com или кликните дугме испод за покретање ћаскања уживо током радног времена (9:00 - 18:00 EST).');
set(sr, 'supportPage.fallbackMessage', 'Нисам сигуран да имам прави одговор на то. Да ли бисте желели да разговарате са агентом уживо?');
set(sr, 'supportPage.talkToLiveAgent', 'Разговарајте са агентом уживо');
set(sr, 'supportPage.askSomething', 'Питајте нешто...');
set(sr, 'supportPage.emailLabel', 'Пошаљите нам имејл на');
set(sr, 'supportPage.knowledgeBase', [
  { keywords: ['what is appnode', 'about appnode', 'appnode'], answer: 'AppNode је платформа покретана вештачком интелигенцијом која вам омогућава да правите пуне веб апликације кроз упите на природном језику. Једноставно опишите шта желите да направите, а наша AI ће генерисати код, дизајн и функционалност за вас.' },
  { keywords: ['pricing', 'cost', 'price', 'free', 'plan'], answer: 'AppNode нуди щедар бесплатан план за почетак. Наше цене укључују: Бесплатан план (3 пројекта, основне AI функције), Pro план ($20/месечно за неограничене пројекте) и Enterprise планове за веће тимове.' },
  { keywords: ['export', 'code', 'download', 'source'], answer: 'Да! Можете извести комплетан код свог пројекта у било ком тренутку. Ви сте власник свега што направите на AppNode-у.' },
  { keywords: ['coding', 'no code', 'beginner', 'experience'], answer: 'Искуство у програмирању није потребно! AppNode је дизајниран за све - од потпуних почетника до искусних програмера.' },
  { keywords: ['tech', 'stack', 'react', 'next'], answer: 'AppNode генерише модерне React/Next.js апликације са Tailwind CSS стилизовањем.' },
  { keywords: ['deploy', 'publish', 'host', 'live'], answer: 'Можете покренути своју апликацију једним кликом! AppNode обезбеђује бесплатан хостинг за ваше пројекте.' },
  { keywords: ['domain', 'custom domain', 'url'], answer: 'Да, можете повезати свој прилагођени домен са било којим AppNode пројектом!' },
  { keywords: ['team', 'collaborate', 'collaboration'], answer: 'AppNode подржава тимску сарадњу! Можете позвати чланове тима у своје пројекте.' },
  { keywords: ['api', 'integration', 'connect'], answer: 'AppNode подржава интеграције са популарним сервисима и API-јима.' },
  { keywords: ['delete', 'account', 'remove'], answer: 'Можете обрисати свој налог из Подешавања > Налог > Обриши налог.' },
  { keywords: ['password', 'reset', 'forgot'], answer: 'Да бисте ресетовали лозинку, кликните \'Заборављена лозинка\' на страници за пријаву.' },
  { keywords: ['bug', 'issue', 'problem', 'error'], answer: 'Жао ми је што имате проблема. Можете ли описати шта се дешава детаљније?' },
  { keywords: ['billing', 'refund', 'charge', 'payment'], answer: 'За питања о наплати контактирајте наш тим на contact@appnode.ai.' },
  { keywords: ['hello', 'hi', 'hey', 'greetings'], answer: 'Здраво! 👋 Добродошли у AppNode подршку. Како вам могу помоћи данас?' },
  { keywords: ['thanks', 'thank you', 'thx'], answer: 'Нема на чему! Да ли вам могу још нешто помоћи? 😊' },
  { keywords: ['bye', 'goodbye', 'see you'], answer: 'Хвала што сте ћаскали са нама! Ако имате још питања у будућности, слободно нас контактирајте. Пријатан дан! 👋' }
]);

// faqAnswers
set(sr, 'supportPage.faqAnswers.appnode', 'AppNode је платформа покретана вештачком интелигенцијом која вам омогућава да правите веб апликације једноставним описивањем онога што желите на природном језику. Искуство у програмирању није потребно!');
set(sr, 'supportPage.faqAnswers.pricing', 'Нудимо щедар бесплатан ниво који вам омогућава да правите и објављујете апликације бесплатно. Наш Pro план почиње од $19/месечно са неограниченим пројектима, а Enterprise планови су доступни за веће тимове. Посетите нашу страницу са ценама за потпуне детаље!');
set(sr, 'supportPage.faqAnswers.export', 'Да! Можете извести комплетан код свог пројекта у било ком тренутку. Ви сте власник свега што направите на AppNode-у. Само идите на подешавања пројекта и кликните \'Извези код\' да преузмете комплетан изворни код.');
set(sr, 'supportPage.faqAnswers.coding', 'Искуство у програмирању није потребно! AppNode је дизајниран за све - од потпуних почетника до искусних програмера. Једноставно опишите шта желите да направите на обичном језику, а наша AI ће генерисати код за вас.');
set(sr, 'supportPage.faqAnswers.techStack', 'AppNode генерише модерне React/Next.js апликације са Tailwind CSS стилизовањем. Ваше апликације су направљене са кодом спремним за продукцију према најбољим праксама.');
set(sr, 'supportPage.faqAnswers.deploy', 'Можете покренути своју апликацију једним кликом! AppNode обезбеђује бесплатан хостинг за ваше пројекте. Када буде покренута, добићете URL за дељење. Такође можете повезати прилагођени домен.');
set(sr, 'supportPage.faqAnswers.customDomain', 'Да, можете повезати свој прилагођени домен са било којим AppNode пројектом! Идите на подешавања пројекта, кликните \'Домени\' и пратите упутства за додавање домена. DNS промене обично трају 24-48 сати.');
set(sr, 'supportPage.faqAnswers.team', 'AppNode подржава тимску сарадњу! Можете позвати чланове тима у своје пројекте, поставити различите нивое дозвола и радити заједно у реалном времену. Тимске функције су доступне на Pro и Enterprise плановима.');
set(sr, 'supportPage.faqAnswers.api', 'AppNode подржава интеграције са популарним сервисима и API-јима. Можете повезати базе података, провајдере аутентификације, платне системе и још много тога. Проверите нашу документацију о интеграцијама за комплетну листу.');
set(sr, 'supportPage.faqAnswers.deleteAccount', 'Можете обрисати свој налог из Подешавања > Налог > Обриши налог. Имајте на уму да је ова радња неповратна и сви ваши пројекти ће бити трајно уклоњени. Размислите о извозу кода прво.');
set(sr, 'supportPage.faqAnswers.password', 'Да бисте ресетовали лозинку, кликните \'Заборављена лозинка\' на страници за пријаву и унесите свој имејл. Добићете линк за ресетовање у року од неколико минута. Проверите фолдер за нежељену пошту ако га не видите.');
set(sr, 'supportPage.faqAnswers.bug', 'Жао ми је што имате проблема. Можете ли описати шта се дешава детаљније? Уобичајена решења укључују: брисање кеша претраживача, покушај са другим претраживачем или освежавање странице. Ако проблем и даље постоји, могу вас повезати са агентом уживо.');
set(sr, 'supportPage.faqAnswers.billing', 'За питања о наплати или захтеве за поврат, контактирајте наш тим за наплату на contact@appnode.ai. Нудимо гаранцију поврата новца у року од 14 дана на свим плаћеним плановима.');
set(sr, 'supportPage.faqAnswers.greeting', 'Здраво! 👋 Добродошли у AppNode подршку. Како вам могу помоћи данас? Слободно ме питајте било шта о нашој платформи!');
set(sr, 'supportPage.faqAnswers.thanks', 'Нема на чему! Да ли вам могу још нешто помоћи? 😊');
set(sr, 'supportPage.faqAnswers.goodbye', 'Хвала што сте ћаскали са нама! Ако имате још питања у будућности, не оклевајте да нас контактирате. Пријатан дан! 👋');

// quickActionMessages
set(sr, 'supportPage.quickActionMessages.gettingStartedMsg', 'Како да почнем са AppNode-ом?');
set(sr, 'supportPage.quickActionMessages.pricingMsg', 'Које су опције за цене?');
set(sr, 'supportPage.quickActionMessages.exportCodeMsg', 'Могу ли да извезем свој код?');
set(sr, 'supportPage.quickActionMessages.liveAgentMsg', 'Желео бих да разговарам са агентом уживо');

// chatUi
set(sr, 'supportPage.chatUi.noDescription', 'Додатни опис није дат');
set(sr, 'supportPage.chatUi.confirmationMsg', '✅ Ваш разговор је послат нашем тиму подршке на contact@appnode.ai. Јавићемо вам се што је пре могуће! Типично време одговора: У року од 24 сата (често много брже током радног времена).');
set(sr, 'supportPage.chatUi.namePlaceholder', 'Ваше име');
set(sr, 'supportPage.chatUi.emailPlaceholder', 'Ваша имејл адреса');
set(sr, 'supportPage.chatUi.problemPlaceholder', 'Опишите свој проблем или питање...');
set(sr, 'supportPage.chatUi.chatPlaceholder', 'Откуцајте своју поруку...');
set(sr, 'supportPage.chatUi.sendToSupportTeam', 'Пошаљите тиму подршке');
set(sr, 'supportPage.chatUi.conversationWillBeSent', 'Ваш разговор ће бити послат на contact@appnode.ai');
set(sr, 'supportPage.chatUi.chatTitle', 'AppNode подршка');
set(sr, 'supportPage.chatUi.online', 'На мрежи');
set(sr, 'supportPage.chatUi.liveAgentConnected', 'Агент уживо повезан');
set(sr, 'supportPage.chatUi.quickQuestions', 'Брза питања:');

// supportPage search
set(sr, 'supportPage.searchNoResults', 'Нема резултата за');
set(sr, 'supportPage.searchCategories', 'Категорије');
set(sr, 'supportPage.searchViews', 'прегледа');
set(sr, 'supportPage.searchHelpTopics', 'Теме помоћи');

// ─── careersPage ────────────────────────────────────────────
console.log('\n[careersPage]');
set(sr, 'careersPage.openings', [
  { title: 'Виши Full Stack инжењер', department: 'Инжењеринг', location: 'Сан Франциско, Калифорнија / Удаљено', type: 'Пуно радно време', description: 'Градите и скалирајте нашу платформу за развој покретану AI-јем.' },
  { title: 'Инжењер машинског учења', department: 'AI', location: 'Сан Франциско, Калифорнија / Удаљено', type: 'Пуно радно време', description: 'Развијајте и побољшавајте наше AI моделе за генерисање кода.' },
  { title: 'Дизајнер производа', department: 'Дизајн', location: 'Удаљено', type: 'Пуно радно време', description: 'Дизајнирајте интуитивна искуства за нашу растућу корисничку базу.' },
  { title: 'DevOps инжењер', department: 'Инфраструктура', location: 'Удаљено', type: 'Пуно радно време', description: 'Управљајте и оптимизујте нашу облак инфраструктуру.' },
  { title: 'Менаџер садржаја', department: 'Маркетинг', location: 'Удаљено', type: 'Пуно радно време', description: 'Креирајте привлачан садржај за нашу заједницу програмера.' }
]);

set(sr, 'careersPage.benefits', [
  { icon: '💰', title: 'Конкурентна плата', description: 'Пакети компензације на врху тржишта' },
  { icon: '📈', title: 'Удео у власништву', description: 'Власнички удео у компанији' },
  { icon: '🏥', title: 'Здравље и добробит', description: 'Комплетно медицинско, стоматолошко и офталмолошко осигурање' },
  { icon: '🏠', title: 'Рад на даљину', description: 'Радите са било ког места на свету' },
  { icon: '🌴', title: 'Неограничено слободно време', description: 'Узмите време које вам је потребно за одмор' },
  { icon: '📚', title: 'Буџет за учење', description: 'Годишњи буџет за курсеве и конференције' }
]);

set(sr, 'careersPage.companyValues', [
  { emoji: '🚀', title: 'Брзо напредуј', description: 'Брзо испоручујемо и итерирамо на основу повратних информација' },
  { emoji: '🎯', title: 'Опседнути корисницима', description: 'Свака одлука почиње од корисника' },
  { emoji: '🔓', title: 'Подразумевано отворени', description: 'Транспарентност у свему што радимо' },
  { emoji: '🤝', title: 'Један тим', description: 'Заједно успевамо и падамо' }
]);

// ─── solutionsPage.solutionCards ────────────────────────────
console.log('\n[solutionsPage.solutionCards]');
set(sr, 'solutionsPage.solutionCards', [
  {
    title: 'За оснивače',
    subtitle: 'Покрените брже, итерирајте паметније',
    description: 'Претворите своју визију у радни производ за дане, не месеце. AppNode-ова платформа покретана AI-јем вам омогућава да градите, тестирате и покрећете без техничког суоснивача.',
    features: ['Покрените MVP за дане', 'Брзо прототиповање', 'Интегрисана аналитика', 'Покретање једним кликом'],
    testimonialQuote: 'Направили смо цео MVP за 2 недеље са AppNode-ом. Оно што би нас коштало $50.000 у развоју урађено је за делић цене.',
    testimonialAuthor: 'Alex Chen',
    testimonialRole: 'Оснивач, LaunchPad'
  },
  {
    title: 'За програмере',
    subtitle: 'Кодирајте паметније, не теже',
    description: 'Убрзајте свој развојни процес са AI-подршком. AppNode се бави шаблонским кодом док ви се фокусирате на оно што вашу апликацију чини јединственом.',
    features: ['AI генерисање кода', 'Git интеграција', 'API конектори', 'Тестирање једним кликом'],
    testimonialQuote: 'AppNode ми штеди сате сваког дана. AI разуме шта покушавам да направим и генерише чист, код спреман за продукцију.',
    testimonialAuthor: 'Sarah Kim',
    testimonialRole: 'Виши програмер, TechFlow'
  },
  {
    title: 'За дизајнере',
    subtitle: 'Дизајнирајте, градите, покрените',
    description: 'Претворите своје дизајне у функционалне апликације без писања иједног реда кода. Перфектан пиксел са потпуном интерактивношћу.',
    features: ['Визуелни конструктор', 'Компоненте спремне за дизајн', 'Респонзивни прегледи', 'Извоз у код'],
    testimonialQuote: 'Као дизајнер, коначно могу да оживим своје дизајне без чекања на ресурсе програмера. Променило је правила игре.',
    testimonialAuthor: 'Emma Rodriguez',
    testimonialRole: 'Директор дизајна, CreativeHub'
  },
  {
    title: 'За тимове',
    subtitle: 'Градите заједно, покржете брже',
    description: 'Сарађујте неометано са својим тимом. Дељене радне просторе, контрола верзија и алати за комуникацију у реалном времену.',
    features: ['Сарадња у реалном времену', 'Контрола приступа', 'Тимска аналитика', 'Дељени шаблони'],
    testimonialQuote: 'Наш тим ради 3 пута брже откад смо усвојили AppNode. Функције сарадње су неприметне.',
    testimonialAuthor: 'David Park',
    testimonialRole: 'CTO, ScaleUp Inc'
  }
]);

// ─── useCasesMobileApps ─────────────────────────────────────
console.log('\n[useCasesMobileApps]');
set(sr, 'useCasesMobileApps.comingSoon', 'Ускоро');
set(sr, 'useCasesMobileApps.welcomeBack', 'Добродошли назад');
set(sr, 'useCasesMobileApps.dashboard', 'Контролна табла');
set(sr, 'useCasesMobileApps.getStarted', 'Започните');
set(sr, 'useCasesMobileApps.featuresSubtitle', 'Све што вам је потребно за креирање професионалних мобилних апликација');
set(sr, 'useCasesMobileApps.iosReady', 'Спремно за iOS');
set(sr, 'useCasesMobileApps.androidReady', 'Спремно за Android');

// ─── useCasesRapidPrototyping ───────────────────────────────
console.log('\n[useCasesRapidPrototyping]');
set(sr, 'useCasesRapidPrototyping.traditional.steps', [
  { step: 'Жичани модели', time: '2-3 дана' },
  { step: 'Дизајн макете', time: '1-2 недеље' },
  { step: 'Предаја програмеру', time: '1-2 дана' },
  { step: 'Изградња прототипа', time: '2-4 недеље' },
  { step: 'Тестирање и итерација', time: '1-2 недеље' }
]);

set(sr, 'useCasesRapidPrototyping.appnode.steps', [
  { step: 'Опишите своју идеју', time: '5 минута' },
  { step: 'AI генерише прототип', time: '2-10 минута' },
  { step: 'Прилагодите и усавршите', time: '30-60 минута' },
  { step: 'Поделите са заинтересованим странама', time: '1 минут' },
  { step: 'Итерирајте на основу повратних информација', time: '15-30 минута' }
]);

// ─── statusPage ─────────────────────────────────────────────
console.log('\n[statusPage]');
set(sr, 'statusPage.services', [
  { name: 'API', status: 'operational' },
  { name: 'Веб апликација', status: 'operational' },
  { name: 'Генерисање кода', status: 'operational' },
  { name: 'Сервиси за покретање', status: 'operational' },
  { name: 'Конекције база података', status: 'operational' },
  { name: 'Аутентификација', status: 'operational' },
  { name: 'CDN и ресурси', status: 'operational' },
  { name: 'Сарадња у реалном времену', status: 'operational' }
]);

set(sr, 'statusPage.incidents', [
  { date: '25. новембар 2025.', title: 'Повишена времена одговора API-ја', status: 'resolved', duration: '23 минута', description: 'Имали смо повишена времена одговора API-ја због проблема са скупом конекција базе података. Проблем је идентификован и решен скалирањем скупа конекција и оптимизовањем образаца упита.' },
  { date: '18. новембар 2025.', title: 'Деградација сервиса за покретање', status: 'resolved', duration: '45 минута', description: 'Нека покретања су имала кашњења због повећаног реда чекања. Додали смо додатне ресурсе за обраду и имплементирали бољу оптимизацију реда.' },
  { date: '10. новембар 2025.', title: 'Планирано одржавање базе података', status: 'resolved', duration: '15 минута', description: 'Планирано одржавање за надоградњу базе података. Сви сервиси су враћени у потпуну функционалност.' }
]);

set(sr, 'statusPage.uptimeDays', ['Пон', 'Уто', 'Сре', 'Чет', 'Пет', 'Суб', 'Нед']);
set(sr, 'statusPage.operational', 'Оперативно');
set(sr, 'statusPage.degraded', 'Смањене перформансе');
set(sr, 'statusPage.outage', 'Велики прекид');
set(sr, 'statusPage.resolved', 'Решено');
set(sr, 'statusPage.completed', 'Завршено');
set(sr, 'statusPage.duration', 'Трајање:');
set(sr, 'statusPage.uptime', 'активност');

// ─── settingsPage.tabs ──────────────────────────────────────
console.log('\n[settingsPage.tabs]');
set(sr, 'settingsPage.tabs', ['Опште', 'Обавештења', 'Безбедност', 'Зона опасности']);

// ─── billingPage ────────────────────────────────────────────
console.log('\n[billingPage]');
set(sr, 'billingPage.plans', [
  { name: 'Бесплатни', price: '$0', period: 'заувек', features: ['3 пројекта', 'Основне AI функције', 'Подршка заједнице', '1GB складиште'] },
  { name: 'Pro', price: '$20', period: 'месечно', features: ['Неограничени пројекти', 'Напредна AI', 'Приоритетна подршка', '10GB складиште', 'Прилагођени домени', 'Тимска сарадња'] },
  { name: 'Тимски', price: '$49', period: 'месечно', features: ['Све из Pro-а', 'Неограничени чланови', 'Административне контроле', '100GB складиште', 'SSO/SAML', 'Посвећена подршка'] }
]);

set(sr, 'billingPage.invoices', [
  { date: '1. нов. 2025.', amount: '$0.00', status: 'Плаћено', plan: 'Бесплатни' },
  { date: '1. окт. 2025.', amount: '$0.00', status: 'Плаћено', plan: 'Бесплатни' },
  { date: '1. сеп. 2025.', amount: '$0.00', status: 'Плаћено', plan: 'Бесплатни' }
]);

// ─── teamsPage ──────────────────────────────────────────────
console.log('\n[teamsPage]');
set(sr, 'teamsPage.activityTitle', 'Активност');
set(sr, 'teamsPage.activity', [
  { user: 'Alex', action: 'послао на main', time: 'пре 2 мин' },
  { user: 'Blake', action: 'покренуо на prod', time: 'пре 15 мин' },
  { user: 'Casey', action: 'прегледао PR #42', time: 'пре 1 сат' }
]);

set(sr, 'teamsPage.pricing.features', [
  'Све из Core-а',
  '$40/мес у кредитима за коришћење',
  '50 места за гледаоце',
  'Централизована наплата',
  'Контрола приступа заснована на улогама',
  'Приватна покретања',
  'Приоритетна подршка'
]);
set(sr, 'teamsPage.pricing.perUserMonth', 'по кориснику/месечно');

set(sr, 'teamsPage.features', [
  { title: 'Сарадња у реалном времену', description: 'Радите на истом пројекту истовремено. Видите курсоре, измене и промене у реалном времену.' },
  { title: 'Приступ заснован на улогама', description: 'Контролишите ко може да гледа, уређује и покреће са детаљним дозволама.' },
  { title: 'Дељени радни простори', description: 'Организујте пројекте, шаблоне и ресурсе у дељеним тимским просторима.' },
  { title: 'Уграђено ћаскање', description: 'Комуницирајте са својим тимом директно у контексту уређивача.' },
  { title: 'Тимска аналитика', description: 'Пратите продуктивност, доприносе и здравље пројекта.' },
  { title: 'Гранање пројекта', description: 'Креирајте гране за експериментисање без утицаја на продукцију.' }
]);

// ─── affiliatesPage ─────────────────────────────────────────
console.log('\n[affiliatesPage]');
sr.affiliatesPage = {};
set(sr, 'affiliatesPage.badge', 'Партнерски програм');
set(sr, 'affiliatesPage.title', 'Зарадите новац делећи AppNode');
set(sr, 'affiliatesPage.subtitle', 'Придружите се нашем партнерском програму и зарадите до 40% понављајуће провизије за сваког клијента кога препоручите.');
set(sr, 'affiliatesPage.emailPlaceholder', 'Унесите свој имејл');
set(sr, 'affiliatesPage.joinButton', 'Придружите се сада');
set(sr, 'affiliatesPage.alertMessage', 'Пријава поднета! Проверите свој имејл за следеће кораке.');
set(sr, 'affiliatesPage.benefits.title', 'Зашто се придружити нашем програму?');
set(sr, 'affiliatesPage.benefits.items', [
  { title: '30% провизије', description: 'Зарадите 30% понављајуće провизије за сваког клијента кога препоручите за првих 12 месеци.' },
  { title: '90-дневни колачић', description: 'Продужени период колачића значи да добијате кредит чак и ако се пријаве касније.' },
  { title: 'Контролна табла у реалном времену', description: 'Пратите кликове, конверзије и зараду у реалном времену на партнерској контролној табли.' },
  { title: 'Месечне исплате', description: 'Добијајте плату сваког месеца путем PayPal-а или банковног трансфера. Минимални праг од $50.' }
]);
set(sr, 'affiliatesPage.tiers.title', 'Нивои провизије');
set(sr, 'affiliatesPage.tiers.subtitle', 'Што више препоручите, више зарађујете. Откључајте више стопе провизије како растете.');
set(sr, 'affiliatesPage.tiers.referralsPerMonth', 'препорука/месечно');
set(sr, 'affiliatesPage.tiers.recurringCommission', 'понављајућа провизија');
set(sr, 'affiliatesPage.tiers.items', [
  { name: 'Почетник', perks: ['Основна контролна табла', 'Подршка путем имејла', 'Стандардни линкови'] },
  { name: 'Pro', perks: ['Напредна аналитика', 'Приоритетна подршка', 'Прилагођени линкови', 'Промотивни материјали'] },
  { name: 'Елита', perks: ['Посвећени менаџер', 'Ко-маркетинг', 'Рани приступ', 'Прилагођене кампање'] }
]);
set(sr, 'affiliatesPage.howItWorks.title', 'Како функционише');
set(sr, 'affiliatesPage.howItWorks.steps', [
  { title: '1. Региструјте се', description: 'Направите бесплатан партнерски налог и добијте свој јединствени линк за препоруку.' },
  { title: '2. Делите', description: 'Поделите свој линк са својом публиком, пратиоцима или заједницом.' },
  { title: '3. Зарадите', description: 'Зарадите понављајућу провизију сваког месеца за сваког клијента који плаћа.' }
]);
set(sr, 'affiliatesPage.stats.title', 'Успех партнера');
set(sr, 'affiliatesPage.stats.paidToAffiliates', 'Исплаћено партнерима');
set(sr, 'affiliatesPage.stats.activeAffiliates', 'Активни партнери');
set(sr, 'affiliatesPage.stats.avgMonthlyEarnings', 'Просечна месечна зарада');
set(sr, 'affiliatesPage.stats.avgPayoutTime', 'Просечно време исплате');

// ─── connectionsPage ────────────────────────────────────────
console.log('\n[connectionsPage]');
sr.connectionsPage = {};
set(sr, 'connectionsPage.badge', 'Интеграције');
set(sr, 'connectionsPage.title', 'Конекције и интеграције');
set(sr, 'connectionsPage.subtitle', 'Побољшајте своје апликације повезивањем са моћним сервисима трећих страна');
set(sr, 'connectionsPage.comingSoon', 'Ускоро');
set(sr, 'connectionsPage.requestTitle', 'Потребна вам је другачија интеграција?');
set(sr, 'connectionsPage.requestDescription', 'Јавите нам које сервисе бисте желели да повежете са AppNode-ом');
set(sr, 'connectionsPage.requestButton', 'Затражите интеграцију');
set(sr, 'connectionsPage.categories.all', 'Све');
set(sr, 'connectionsPage.categories.database', 'База података');
set(sr, 'connectionsPage.categories.payments', 'Плаћања');
set(sr, 'connectionsPage.categories.ai', 'AI');
set(sr, 'connectionsPage.categories.hosting', 'Хостинг');
set(sr, 'connectionsPage.categories.development', 'Развој');
set(sr, 'connectionsPage.categories.communication', 'Комуникација');
set(sr, 'connectionsPage.categories.authentication', 'Аутентификација');
set(sr, 'connectionsPage.categories.search', 'Претрага');
set(sr, 'connectionsPage.categories.ecommerce', 'Е-трговина');
set(sr, 'connectionsPage.categories.productivity', 'Продуктивност');
set(sr, 'connectionsPage.connections', [
  { name: 'Supabase', description: 'Firebase алтернатива отвореног кода са PostgreSQL базом података' },
  { name: 'Stripe', description: 'Обрада плаћања и управљање претплатама' },
  { name: 'OpenAI', description: 'Додајте AI могућности својим апликацијама' },
  { name: 'Vercel', description: 'Покрените и хостујте своје апликације глобално' },
  { name: 'GitHub', description: 'Контрола верзија и сарадња на коду' },
  { name: 'Resend', description: 'API за имејл за програмере' },
  { name: 'Cloudflare', description: 'CDN, безбедност и перформансе' },
  { name: 'Auth0', description: 'Аутентификација и ауторизација' },
  { name: 'Twilio', description: 'Комуникациони API-ји за SMS и глас' },
  { name: 'Algolia', description: 'Претрага и откривање за апликације' },
  { name: 'Firebase', description: 'Google-ова платформа за развој апликација' },
  { name: 'AWS', description: 'Услуге рачунарства у облаку' },
  { name: 'Shopify', description: 'Платформа за е-трговину' },
  { name: 'Notion', description: 'Радни простор за белешке и документе' },
  { name: 'Slack', description: 'Платформа за пословну комуникацију' },
  { name: 'PlanetScale', description: 'Платформа за MySQL компатибилне база података без сервера' }
]);

// ─── securityReportPage ─────────────────────────────────────
console.log('\n[securityReportPage]');
sr.securityReportPage = {};
set(sr, 'securityReportPage.badge', 'Безбедност');
set(sr, 'securityReportPage.title', 'Пријавите безбедносне проблеме');
set(sr, 'securityReportPage.subtitle', 'Пронашли сте безбедносну рањивост? Ценимо одговорно откривање и радићемо са вама на решавању проблема.');
set(sr, 'securityReportPage.bugBounty.title', 'Програм за награде за грешке');
set(sr, 'securityReportPage.bugBounty.description', 'Нудимо награде за валидне безбедносне извештаје. Износи награда зависе од озбиљности и утицаја. Критичне рањивости могу да се квалификују за награде до $5.000.');
set(sr, 'securityReportPage.severityLabel', 'Ниво озбиљности');
set(sr, 'securityReportPage.severity.critical.label', 'Критичан');
set(sr, 'securityReportPage.severity.critical.description', 'Потпун компромис система, цурење података');
set(sr, 'securityReportPage.severity.high.label', 'Висок');
set(sr, 'securityReportPage.severity.high.description', 'Значајан безбедносни утицај');
set(sr, 'securityReportPage.severity.medium.label', 'Средњи');
set(sr, 'securityReportPage.severity.medium.description', 'Ограничен безбедносни утицај');
set(sr, 'securityReportPage.severity.low.label', 'Низак');
set(sr, 'securityReportPage.severity.low.description', 'Минималан безбедносни утицај');
set(sr, 'securityReportPage.descriptionLabel', 'Опис рањивости');
set(sr, 'securityReportPage.descriptionHint', 'Детаљно опишите рањивост. Укључите погођену компоненту или функцију.');
set(sr, 'securityReportPage.descriptionPlaceholder', 'Опишите безбедносну рањивост...');
set(sr, 'securityReportPage.stepsLabel', 'Кораци за репродукцију');
set(sr, 'securityReportPage.stepsHint', 'Наведите јасне кораке за репродукцију рањивости.');
set(sr, 'securityReportPage.stepsPlaceholder', '1. Идите на...\n2. Кликните на...\n3. Приметите да...');
set(sr, 'securityReportPage.emailLabel', 'Ваш имејл');
set(sr, 'securityReportPage.emailHint', 'Потребан за праћење и координацију откривања.');
set(sr, 'securityReportPage.emailPlaceholder', 'security-researcher@example.com');
set(sr, 'securityReportPage.submitButton', 'Пошаљите безбедносни извештај');
set(sr, 'securityReportPage.submitted.title', 'Извештај примљен');
set(sr, 'securityReportPage.submitted.description', 'Хвала за одговорно откривање овог безбедносног проблема. Наш безбедносни тим је обавештен и прегледаће ваш извештај без одлагања.');
set(sr, 'securityReportPage.submitted.responseTime', 'Очекивано време одговора:');
set(sr, 'securityReportPage.submitted.critical', 'Критичан: У року од 24 сата');
set(sr, 'securityReportPage.submitted.high', 'Висок: У року од 48 сати');
set(sr, 'securityReportPage.submitted.mediumLow', 'Средњи/Низак: У року од 5 радних дана');
set(sr, 'securityReportPage.submitted.returnHome', 'Повратак на почетну');
set(sr, 'securityReportPage.guidelines.title', 'Смернице за одговорно откривање');
set(sr, 'securityReportPage.guidelines.items', [
  'Не приступајте, мењајте или бришите податке других корисника.',
  'Не вршите нападе ускраћивањем услуга нити деградирајте наше сервисе.',
  'Дајте нам разумно време да решимо проблем пре јавног откривања.',
  'Тестирајте само на налозима које поседујете или за које имате дозволу.'
]);
set(sr, 'securityReportPage.contactNote', 'За хитна безбедносна питања, можете нас контактирати и на');

// ─── learnPublishPage ───────────────────────────────────────
console.log('\n[learnPublishPage]');
sr.learnPublishPage = {};
set(sr, 'learnPublishPage.badge', 'Како функционише');
set(sr, 'learnPublishPage.title', 'Градите и објавите са AppNode-ом');
set(sr, 'learnPublishPage.subtitle', 'Научите како да користите AppNode-ов AI генератор кода за креирање и покретање апликација. Од идеје до живе веб странице за минуте, не месеце.');
set(sr, 'learnPublishPage.steps.title', 'Четири једноставна корака');
set(sr, 'learnPublishPage.steps.subtitle', 'Креирање и објављивање ваше апликације никада није било лакше. Пратите ове кораке да пређете од идеје до живе апликације.');
set(sr, 'learnPublishPage.steps.items', [
  { title: 'Опишите своју апликацију', description: 'Почните тако што ћете рећи AppNode-у шта желите да направите. Користите природни језик да опишете функције, дизајн и функционалност ваше апликације. Што сте конкретнији, то бољи резултат.' },
  { title: 'Гледајте како се гради', description: 'AppNode-ов AI генерише вашу апликацију у реалном времену. Видећете како се код пише и ваша апликација добија облик са тренутним прегледима. Правите промене једноставно тражећи их.' },
  { title: 'Прегледајте и итерирајте', description: 'Тестирајте своју апликацију у уграђеном окружењу за преглед. Проверите респонзивност, функционалност и дизајн. Направите прилагођавања описивањем шта желите да промените.' },
  { title: 'Објавите и поделите', description: 'Покрените своју апликацију у свет једним кликом. Добијте тренутну URL адресу, повежите прилагођени домен и поделите своје дело са свима.' }
]);
set(sr, 'learnPublishPage.features.title', 'Функције покретања');
set(sr, 'learnPublishPage.features.subtitle', 'Све што вам је потребно за објављивање професионалних апликација укључено је одмах.');
set(sr, 'learnPublishPage.features.items', [
  { title: 'Покретање једним кликом', description: 'Без сложених подешавања или конфигурације. Само кликните покрени и ваша апликација је жива.' },
  { title: 'Прилагођени домени', description: 'Повежите свој домен или користите наш бесплатан поддомен за тренутно објављивање.' },
  { title: 'SSL сертификати', description: 'Аутоматски HTTPS за све ваше апликације. Безбедност долази стандардно.' },
  { title: 'Глобални CDN', description: 'Ваша апликација се испоручује са edge локација широм света за невероватно брзе перформансе.' },
  { title: 'Тренутно враћање', description: 'Нешто није у реду? Вратите се на претходну верзију тренутно.' },
  { title: 'Аналитика', description: 'Пратите посетиоце, перформансе и употребу помоћу уграђене аналитике.' }
]);
set(sr, 'learnPublishPage.tips.title', 'Савети за најбоље резултате');
set(sr, 'learnPublishPage.tips.items', [
  { bold: 'Будите конкретни:', text: 'Опишите боје, распореде и функционалност коју желите' },
  { bold: 'Почните једноставно:', text: 'Почните са основним функцијама, затим додајте више временом' },
  { bold: 'Користите референце:', text: 'Поделите примере апликација или веб страница које вам се свиђају' },
  { bold: 'Тестирајте на свим уређајима:', text: 'Проверите приказе за десктоп, таблет и мобилни' }
]);
set(sr, 'learnPublishPage.cta.title', 'Спремни за градњу?');
set(sr, 'learnPublishPage.cta.subtitle', 'Почните да креирате своју апликацију данас. Искуство у програмирању није потребно.');
set(sr, 'learnPublishPage.cta.startButton', 'Почните да градите бесплатно');
set(sr, 'learnPublishPage.cta.docsButton', 'Погледајте документацију');

// ─── blockchainSection ──────────────────────────────────────
console.log('\n[blockchainSection]');
sr.blockchainSection = {};
set(sr, 'blockchainSection.badge', 'Мулти-чејн екосистем');
set(sr, 'blockchainSection.titleLine1', 'ГРАДИТЕ БИЛО ШТА НА');
set(sr, 'blockchainSection.titleLine2', 'БИЛО КОМ БЛОКЧЕЈНУ');
set(sr, 'blockchainSection.titleLine3', 'БРЖЕ НЕГО ИКАДА РАНИЈЕ');
set(sr, 'blockchainSection.description', 'Love Code откључава цео екосистем на ланцу без тероба. Од L1 гиганата до најновијих L2, добијате моћ да креирате било шта: одредишне странице, претпродаје мем токена, NFT издања, контролне табле, комплетне Web3 апликације, шта год замислите.');
set(sr, 'blockchainSection.descriptionHighlight', 'Без ограничења. Без сложености. Само чисто стварање.');
set(sr, 'blockchainSection.useCases', ['Одредишне странице', 'Претпродаје токена', 'NFT издања', 'DeFi контролне табле', 'Web3 апликације', 'DAO алати', 'Платформе за стејкинг', 'Мем токени']);
set(sr, 'blockchainSection.features', [
  { title: 'Муњевито брзо', description: 'Покрените на било ком ланцу за секунде, не сате' },
  { title: 'Без кода', description: 'Градите сложене dApp-ове природним језиком' },
  { title: 'Тестирано у борби', description: 'Паметни уговори ревидирани и спремни за продукцију' },
  { title: 'Мулти-чејн од почетка', description: 'Једна база кода, сваки блокчејн подржан' }
]);
set(sr, 'blockchainSection.bottomText', 'Ако постоји на блокчејну, можете то направити овде —');
set(sr, 'blockchainSection.bottomHighlight', 'лакше, брже и на потпуно новом нивоу.');
set(sr, 'blockchainSection.ctaButton', 'Почните да градите на Web3');

// ─── signupPage ─────────────────────────────────────────────
console.log('\n[signupPage]');
if (!sr.signupPage) sr.signupPage = {};
set(sr, 'signupPage.roles', ['Оснивач / Предузетник', 'Дизајнер', 'Програмер', 'Маркетар', 'Менаџер производа', 'Остало']);
set(sr, 'signupPage.passwordsDoNotMatch', 'Лозинке се не подударају');
set(sr, 'signupPage.passwordTooShort', 'Лозинка мора имати најмање 6 карактера');
set(sr, 'signupPage.emailExists', 'Налог са овим имејлом већ постоји');
set(sr, 'signupPage.selectAvatar', 'Молимо изаберите боју аватара');
set(sr, 'signupPage.selectRole', 'Молимо изаберите своју улогу');

// ─── docsSearchModal ────────────────────────────────────────
console.log('\n[docsSearchModal]');
sr.docsSearchModal = {};
set(sr, 'docsSearchModal.noResults', 'Нема пронађених резултата');
set(sr, 'docsSearchModal.tryAgain', 'Покушајте да претражите нешто друго');
set(sr, 'docsSearchModal.navigate', 'Навигација');
set(sr, 'docsSearchModal.select', 'Изабери');
set(sr, 'docsSearchModal.close', 'Затвори');
set(sr, 'docsSearchModal.searchPlaceholder', 'Претражите документацију...');
set(sr, 'docsSearchModal.sections.gettingStarted', 'Почетак');
set(sr, 'docsSearchModal.sections.trustSafety', 'Поверење и безбедност');
set(sr, 'docsSearchModal.sections.legal', 'Правно');
set(sr, 'docsSearchModal.sections.security', 'Безбедност');
set(sr, 'docsSearchModal.sections.tutorials', 'Туторијали');
set(sr, 'docsSearchModal.sections.teamsEnterprise', 'Тимови и предузеће');
set(sr, 'docsSearchModal.sections.changelog', 'Дневник промена');
set(sr, 'docsSearchModal.items.introduction', 'Увод');
set(sr, 'docsSearchModal.items.quickstartGuides', 'Водичи за брзи почетак');
set(sr, 'docsSearchModal.items.createWithAi', 'Креирајте са AI');
set(sr, 'docsSearchModal.items.buildFromScratch', 'Градите од нуле');
set(sr, 'docsSearchModal.items.importFromGithub', 'Увезите са GitHub-а');
set(sr, 'docsSearchModal.items.contentPolicy', 'Политика садржаја');
set(sr, 'docsSearchModal.items.communityGuidelines', 'Смернице заједнице');
set(sr, 'docsSearchModal.items.termsOfService', 'Услови коришћења');
set(sr, 'docsSearchModal.items.privacyPolicy', 'Политика приватности');
set(sr, 'docsSearchModal.items.cookiePolicy', 'Политика колачића');
set(sr, 'docsSearchModal.items.securityOverview', 'Преглед безбедности');
set(sr, 'docsSearchModal.items.dataProtection', 'Заштита података');
set(sr, 'docsSearchModal.items.vulnerabilityDisclosure', 'Откривање рањивости');
set(sr, 'docsSearchModal.items.buildingFirstApp', 'Градња прве апликације');
set(sr, 'docsSearchModal.items.workingWithApis', 'Рад са API-јима');
set(sr, 'docsSearchModal.items.databaseIntegration', 'Интеграција базе података');
set(sr, 'docsSearchModal.items.authentication', 'Аутентификација');
set(sr, 'docsSearchModal.items.teamManagement', 'Управљање тимом');
set(sr, 'docsSearchModal.items.ssoSetup', 'Подешавање SSO');
set(sr, 'docsSearchModal.items.enterpriseFeatures', 'Функције за предузеће');
set(sr, 'docsSearchModal.items.latestUpdates', 'Најновија ажурирања');

// ─── Write ──────────────────────────────────────────────────
fs.writeFileSync(srPath, JSON.stringify(sr, null, 2) + '\n', 'utf8');
console.log(`\n✅ Done! Added ${addedCount} new keys to sr.json`);
console.log(`   File size: ${fs.statSync(srPath).size} bytes`);
