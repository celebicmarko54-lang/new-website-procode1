const fs = require('fs');
const bg = JSON.parse(fs.readFileSync('src/translations/bg.json', 'utf8'));

// Fix useCasesRapidPrototyping - steps need to be objects with step/time, not strings
bg.useCasesRapidPrototyping.traditional.steps = [
  { step: "Каркаси", time: "2-3 дни" },
  { step: "Дизайн макети", time: "1-2 седмици" },
  { step: "Предаване на разработчик", time: "1-2 дни" },
  { step: "Изграждане на прототип", time: "2-4 седмици" },
  { step: "Тестване и итерация", time: "1-2 седмици" }
];
bg.useCasesRapidPrototyping.appnode.steps = [
  { step: "Опишете идеята си", time: "5 минути" },
  { step: "AI генерира прототип", time: "2-10 минути" },
  { step: "Персонализирайте и усъвършенствайте", time: "30-60 минути" },
  { step: "Споделете със заинтересованите страни", time: "1 минута" },
  { step: "Итерирайте въз основа на обратна връзка", time: "15-30 минути" }
];

// Fix careersPage benefits - add icons
const benefitIcons = ["💰", "📈", "🏥", "🏠", "🌴", "📚", "💻", "🎉"];
bg.careersPage.benefits.forEach((b, i) => { b.icon = benefitIcons[i]; });

// Fix careersPage companyValues - add emojis
const valueEmojis = ["🚀", "🎯", "🔓", "🤝"];
bg.careersPage.companyValues.forEach((v, i) => { v.emoji = valueEmojis[i]; });

// Fix supportPage knowledgeBase - add missing keywords
bg.supportPage.knowledgeBase[1].keywords.push("план");
bg.supportPage.knowledgeBase[2].keywords.push("на живо");
bg.supportPage.knowledgeBase[3].keywords.push("prompt");
bg.supportPage.knowledgeBase[4].keywords.push("бекенд");
bg.supportPage.knowledgeBase[5].keywords.push("споделяне");
bg.supportPage.knowledgeBase[10].keywords.push("фактуриране");

// Fix statusPage incidents - add duration
bg.statusPage.incidents[0].duration = "23 минути";
bg.statusPage.incidents[1].duration = "45 минути";
bg.statusPage.incidents[2].duration = "2 часа";

// Fix teamsPage activity
bg.teamsPage.activity = [
  { user: "Alex", action: "публикува в main", time: "преди 2мин" },
  { user: "Blake", action: "внедри в prod", time: "преди 15мин" },
  { user: "Casey", action: "прегледа PR #42", time: "преди 1ч" }
];

// Fix connectionsPage - connections array has 11 items but EN has 12 (Notion missing at index 11)
if (bg.connectionsPage.connections.length === 11) {
  // already has Notion, check
} else if (bg.connectionsPage.connections.length < 12) {
  // Check if last is Notion
  const last = bg.connectionsPage.connections[bg.connectionsPage.connections.length - 1];
  if (last.name !== "Notion") {
    bg.connectionsPage.connections.push({ name: "Notion", description: "Свържете се с бази данни и страници в Notion" });
  }
}

fs.writeFileSync('src/translations/bg.json', JSON.stringify(bg, null, 2), 'utf8');
console.log('Phase 3: Structural fixes done. bg.json saved.');
