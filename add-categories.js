const fs = require('fs');
const path = require('path');

const newCategories = {
  "saasplatform": "SaaS Platform",
  "gamingportal": "Gaming Portal",
  "mapsnavigation": "Maps & Navigation",
  "fashionstore": "Fashion Store",
  "stylecollection": "Style Collection",
  "beautyproducts": "Beauty Products",
  "fitnesstracker": "Fitness Tracker",
  "luxuryfragrance": "Luxury Fragrance",
  "beautystore": "Beauty Store",
  "streamingplatform": "Streaming Platform",
  "gaminggearstore": "Gaming Gear Store",
  "gamingstore": "Gaming Store",
  "synthesizer": "Synthesizer",
  "projectroadmap": "Project Roadmap",
  "analyticsdashboard": "Analytics Dashboard"
};

const koreanCategories = {
  "saasplatform": "SaaS 플랫폼",
  "gamingportal": "게임 포털",
  "mapsnavigation": "지도 & 내비게이션",
  "fashionstore": "패션 스토어",
  "stylecollection": "스타일 컬렉션",
  "beautyproducts": "뷰티 제품",
  "fitnesstracker": "피트니스 트래커",
  "luxuryfragrance": "럭셔리 향수",
  "beautystore": "뷰티 스토어",
  "streamingplatform": "스트리밍 플랫폼",
  "gaminggearstore": "게임 기어 스토어",
  "gamingstore": "게임 스토어",
  "synthesizer": "신디사이저",
  "projectroadmap": "프로젝트 로드맵",
  "analyticsdashboard": "분석 대시보드"
};

const translationsDir = './src/translations';

// Update en.json
const enPath = path.join(translationsDir, 'en.json');
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
en.buildAnything.categories = newCategories;
fs.writeFileSync(enPath, JSON.stringify(en, null, 2) + '\n');
console.log('Updated en.json with categories');

// Update ko.json
const koPath = path.join(translationsDir, 'ko.json');
const ko = JSON.parse(fs.readFileSync(koPath, 'utf8'));
ko.buildAnything.categories = koreanCategories;
fs.writeFileSync(koPath, JSON.stringify(ko, null, 2) + '\n');
console.log('Updated ko.json with categories');

// For other languages, add English as fallback
const files = fs.readdirSync(translationsDir).filter(f => f.endsWith('.json') && f !== 'en.json' && f !== 'ko.json');
for (const file of files) {
  const filePath = path.join(translationsDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  if (!data.buildAnything.categories) {
    data.buildAnything.categories = newCategories;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
    console.log('Added categories to', file);
  }
}

console.log('Done!');
