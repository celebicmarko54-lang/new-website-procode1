'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/context/LanguageContext';

// Category translation map
const categoryTranslations: Record<string, Record<string, string>> = {
  sw: {
    title: 'Jenga Programu Yoyote Bila Vikwazo',
    subtitle: 'Anza kujenga. Anza kupata mapato. Leo.',
    saasplatform: 'Jukwaa la SaaS',
    gamingportal: 'Lango la Michezo',
    mapsnavigation: 'Ramani na Urambazaji',
    fashionstore: 'Duka la Mitindo',
    stylecollection: 'Mkusanyiko wa Mitindo',
    beautyproducts: 'Bidhaa za Urembo',
    fitnesstracker: 'Kifuatiliaji cha Mazoezi',
    luxuryfragrance: 'Manukato ya Kifahari',
    beautystore: 'Duka la Urembo',
    streamingplatform: 'Jukwaa la Utiririshaji',
    gaminggearstore: 'Duka la Vifaa vya Michezo',
    gamingstore: 'Duka la Michezo',
    synthesizer: 'Synthesizer',
    projectroadmap: 'Ramani ya Mradi',
    analyticsdashboard: 'Dashibodi ya Uchambuzi'
  },
  ko: {
    title: '제한 없이 모든 애플리케이션 빌드',
    subtitle: '빌드를 시작하세요. 수익을 시작하세요. 오늘.',
    saasplatform: 'SaaS 플랫폼',
    gamingportal: '게임 포털',
    mapsnavigation: '지도 & 내비게이션',
    fashionstore: '패션 스토어',
    stylecollection: '스타일 컬렉션',
    beautyproducts: '뷰티 제품',
    fitnesstracker: '피트니스 트래커',
    luxuryfragrance: '럭셔리 향수',
    beautystore: '뷰티 스토어',
    streamingplatform: '스트리밍 플랫폼',
    gaminggearstore: '게임 기어 스토어',
    gamingstore: '게임 스토어',
    synthesizer: '신디사이저',
    projectroadmap: '프로젝트 로드맵',
    analyticsdashboard: '분석 대시보드'
  },
  ta: {
    title: 'வரம்புகள் இல்லாமல் எந்த பயன்பாட்டையும் உருவாக்குங்கள்',
    subtitle: 'உருவாக்கத் தொடங்குங்கள். சம்பாதிக்கத் தொடங்குங்கள். இன்றே.',
    saasplatform: 'SaaS தளம்',
    gamingportal: 'கேமிங் போர்டல்',
    mapsnavigation: 'வரைபடங்கள் & வழிசெலுத்தல்',
    fashionstore: 'ஃபேஷன் கடை',
    stylecollection: 'பாணி தொகுப்பு',
    beautyproducts: 'அழகு பொருட்கள்',
    fitnesstracker: 'ஃபிட்னஸ் டிராக்கர்',
    luxuryfragrance: 'சொகுசு நறுமணம்',
    beautystore: 'அழகு கடை',
    streamingplatform: 'ஸ்ட்ரீமிங் தளம்',
    gaminggearstore: 'கேமிங் கியர் கடை',
    gamingstore: 'கேமிங் கடை',
    synthesizer: 'சின்தசைசர்',
    projectroadmap: 'திட்ட வரைபடம்',
    analyticsdashboard: 'பகுப்பாய்வு டாஷ்போர்டு'
  },
  hi: {
    title: 'बिना सीमा के कोई भी एप्लिकेशन बनाएं',
    subtitle: 'बनाना शुरू करें। कमाना शुरू करें। आज।',
    saasplatform: 'SaaS प्लेटफ़ॉर्म',
    gamingportal: 'गेमिंग पोर्टल',
    mapsnavigation: 'मैप्स और नेविगेशन',
    fashionstore: 'फ़ैशन स्टोर',
    stylecollection: 'स्टाइल कलेक्शन',
    beautyproducts: 'ब्यूटी प्रोडक्ट्स',
    fitnesstracker: 'फ़िटनेस ट्रैकर',
    luxuryfragrance: 'लग्ज़री फ़्रेगरेंस',
    beautystore: 'ब्यूटी स्टोर',
    streamingplatform: 'स्ट्रीमिंग प्लेटफ़ॉर्म',
    gaminggearstore: 'गेमिंग गियर स्टोर',
    gamingstore: 'गेमिंग स्टोर',
    synthesizer: 'सिंथेसाइज़र',
    projectroadmap: 'प्रोजेक्ट रोडमैप',
    analyticsdashboard: 'एनालिटिक्स डैशबोर्ड'
  },
  hr: {
    title: 'Izradite bilo koju aplikaciju bez ograničenja',
    subtitle: 'Počnite graditi. Počnite zarađivati. Danas.',
    saasplatform: 'SaaS platforma',
    gamingportal: 'Gaming portal',
    mapsnavigation: 'Karte i navigacija',
    fashionstore: 'Modna trgovina',
    stylecollection: 'Kolekcija stilova',
    beautyproducts: 'Kozmetički proizvodi',
    fitnesstracker: 'Fitness praćenje',
    luxuryfragrance: 'Luksuzni parfem',
    beautystore: 'Kozmetička trgovina',
    streamingplatform: 'Streaming platforma',
    gaminggearstore: 'Trgovina gaming opreme',
    gamingstore: 'Gaming trgovina',
    synthesizer: 'Sintesajzer',
    projectroadmap: 'Plan projekta',
    analyticsdashboard: 'Analitička nadzorna ploča'
  },
  bg: {
    title: 'Създайте всяко приложение без ограничения',
    subtitle: 'Започнете да създавате. Започнете да печелите. Днес.',
    saasplatform: 'SaaS платформа',
    gamingportal: 'Гейминг портал',
    mapsnavigation: 'Карти и навигация',
    fashionstore: 'Магазин за мода',
    stylecollection: 'Колекция от стилове',
    beautyproducts: 'Козметични продукти',
    fitnesstracker: 'Фитнес тракер',
    luxuryfragrance: 'Луксозен парфюм',
    beautystore: 'Козметичен магазин',
    streamingplatform: 'Стрийминг платформа',
    gaminggearstore: 'Магазин за гейминг аксесоари',
    gamingstore: 'Гейминг магазин',
    synthesizer: 'Синтезатор',
    projectroadmap: 'Пътна карта на проекта',
    analyticsdashboard: 'Аналитично табло'
  },
  ro: {
    title: 'Construiti orice aplicatie fara limite',
    subtitle: 'Incepeti sa construiti. Incepeti sa castigati. Astazi.',
    saasplatform: 'Platforma SaaS',
    gamingportal: 'Portal de gaming',
    mapsnavigation: 'Harti si navigatie',
    fashionstore: 'Magazin de moda',
    stylecollection: 'Colectia de stiluri',
    beautyproducts: 'Produse de frumusete',
    fitnesstracker: 'Urmarire fitness',
    luxuryfragrance: 'Parfum de lux',
    beautystore: 'Magazin de cosmetice',
    streamingplatform: 'Platforma de streaming',
    gaminggearstore: 'Magazin de echipamente gaming',
    gamingstore: 'Magazin de gaming',
    synthesizer: 'Sintetizator',
    projectroadmap: 'Foaia de parcurs a proiectului',
    analyticsdashboard: 'Panou de analitice'
  },
  el: {
    title: 'Δημιουργήστε Οποιαδήποτε Εφαρμογή Χωρίς Όρια',
    subtitle: 'Ξεκινήστε να χτίζετε. Ξεκινήστε να κερδίζετε. Σήμερα.',
    saasplatform: 'Πλατφόρμα SaaS',
    gamingportal: 'Πύλη Gaming',
    mapsnavigation: 'Χάρτες & Πλοήγηση',
    fashionstore: 'Κατάστημα Μόδας',
    stylecollection: 'Συλλογή Στυλ',
    beautyproducts: 'Προϊόντα Ομορφιάς',
    fitnesstracker: 'Παρακολούθηση Φυσικής Κατάστασης',
    luxuryfragrance: 'Πολυτελές Άρωμα',
    beautystore: 'Κατάστημα Ομορφιάς',
    streamingplatform: 'Πλατφόρμα Streaming',
    gaminggearstore: 'Κατάστημα Gaming Εξοπλισμού',
    gamingstore: 'Κατάστημα Gaming',
    synthesizer: 'Συνθεσάιζερ',
    projectroadmap: 'Οδικός Χάρτης Έργου',
    analyticsdashboard: 'Πίνακας Αναλυτικών'
  },
  sr: {
    title: 'Napravite bilo koju aplikaciju bez ograničenja',
    subtitle: 'Počnite da gradite. Počnite da zarađujete. Danas.',
    saasplatform: 'SaaS platforma',
    gamingportal: 'Gaming portal',
    mapsnavigation: 'Mape i navigacija',
    fashionstore: 'Prodavnica mode',
    stylecollection: 'Kolekcija stila',
    beautyproducts: 'Proizvodi lepote',
    fitnesstracker: 'Praćenje fitnesa',
    luxuryfragrance: 'Luksuzni parfem',
    beautystore: 'Prodavnica lepote',
    streamingplatform: 'Streaming platforma',
    gaminggearstore: 'Prodavnica gaming opreme',
    gamingstore: 'Gaming prodavnica',
    synthesizer: 'Sintisajzer',
    projectroadmap: 'Plan projekta',
    analyticsdashboard: 'Analitički panel'
  },
  en: {
    title: 'Build Any Application Without Limits',
    subtitle: 'Start building. Start earning. Today.',
    saasplatform: 'SaaS Platform',
    gamingportal: 'Gaming Portal',
    mapsnavigation: 'Maps & Navigation',
    fashionstore: 'Fashion Store',
    stylecollection: 'Style Collection',
    beautyproducts: 'Beauty Products',
    fitnesstracker: 'Fitness Tracker',
    luxuryfragrance: 'Luxury Fragrance',
    beautystore: 'Beauty Store',
    streamingplatform: 'Streaming Platform',
    gaminggearstore: 'Gaming Gear Store',
    gamingstore: 'Gaming Store',
    synthesizer: 'Synthesizer',
    projectroadmap: 'Project Roadmap',
    analyticsdashboard: 'Analytics Dashboard'
  }
};

interface CategoryCard {
  nameKey: string;
  icon: React.ReactNode | null;
  gradient: string;
  image: string;
}

const categories: CategoryCard[] = [
  {
    nameKey: 'saasplatform',
    gradient: 'from-gray-800 to-gray-900',
    icon: null,
    image: '/templates/1.1.png'
  },
  {
    nameKey: 'gamingportal',
    gradient: 'from-gray-700 to-gray-800',
    icon: null,
    image: '/templates/1.2.png'
  },
  {
    nameKey: 'mapsnavigation',
    gradient: 'from-slate-500 to-slate-700',
    icon: null,
    image: '/templates/1.3.png'
  },
  {
    nameKey: 'fashionstore',
    gradient: 'from-cyan-500 to-blue-600',
    icon: null,
    image: '/templates/1.4.png'
  },
  {
    nameKey: 'stylecollection',
    gradient: 'from-emerald-500 to-teal-600',
    icon: null,
    image: '/templates/1.5.png'
  },
  {
    nameKey: 'beautyproducts',
    gradient: 'from-amber-500 to-orange-600',
    icon: null,
    image: '/templates/1.7.png'
  },
  {
    nameKey: 'fitnesstracker',
    gradient: 'from-gray-600 to-gray-700',
    icon: null,
    image: '/templates/1.8.png'
  },
  {
    nameKey: 'luxuryfragrance',
    gradient: 'from-blue-500 to-indigo-600',
    icon: null,
    image: '/templates/1.9.png'
  },
  {
    nameKey: 'beautystore',
    gradient: 'from-green-500 to-emerald-600',
    icon: null,
    image: '/templates/1.10.png'
  },
  {
    nameKey: 'streamingplatform',
    gradient: 'from-blue-600 to-indigo-700',
    icon: null,
    image: '/templates/1.11.png'
  },
  {
    nameKey: 'gaminggearstore',
    gradient: 'from-gray-800 to-gray-900',
    icon: null,
    image: '/templates/1.12.png'
  },
  {
    nameKey: 'gamingstore',
    gradient: 'from-gray-700 to-gray-800',
    icon: null,
    image: '/templates/1.13.png'
  },
  {
    nameKey: 'synthesizer',
    gradient: 'from-teal-500 to-emerald-600',
    icon: null,
    image: '/templates/1.14.png'
  },
  {
    nameKey: 'projectroadmap',
    gradient: 'from-indigo-500 to-blue-600',
    icon: null,
    image: '/templates/1.15.png'
  },
  {
    nameKey: 'analyticsdashboard',
    gradient: 'from-orange-500 to-red-600',
    icon: null,
    image: '/templates/1.16.png'
  },
];

export default function BuildAnythingSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const { language } = useTranslation();
  const langCode = language.code;

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPos += speed;
        const maxScroll = scrollContainer.scrollWidth / 2;
        if (scrollPos >= maxScroll) {
          scrollPos = 0;
        }
        scrollContainer.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section className="py-12 sm:py-16 md:py-24 overflow-hidden bg-[#f8fafc] dark:bg-[#1A1A1A] transition-colors">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12 md:mb-16 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 tracking-tight">
          {categoryTranslations[langCode]?.title || categoryTranslations.en.title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 px-2">
          {categoryTranslations[langCode]?.subtitle || categoryTranslations.en.subtitle}
        </p>
      </div>

      {/* Scrolling cards */}
      <div 
        ref={scrollRef}
        className="overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 2%, black 98%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 2%, black 98%, transparent)'
        }}
      >
        <div className="flex gap-3 sm:gap-5 px-4 sm:px-6" style={{ width: 'max-content' }}>
          {/* Double the cards for seamless loop */}
          {[...categories, ...categories].map((category, index) => {
            const langTranslations = categoryTranslations[langCode] || categoryTranslations.en;
            const name = langTranslations[category.nameKey] || category.nameKey;
            return (
            <a
              key={`${category.nameKey}-${index}`}
              href="#"
              className="group relative w-[200px] sm:w-[240px] md:w-[280px] flex-shrink-0"
            >
              {/* Card */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 dark:bg-[#1A1A1A] border border-white/10 dark:border-2 dark:border-gray-800 transition-all duration-300 group-hover:border-white/30 group-hover:scale-[1.02] shadow-xl">
                {/* Header with name only */}
                <div className="absolute top-0 left-0 right-0 z-20 p-3 sm:p-4 bg-gradient-to-b from-black/60 to-transparent">
                  <span className="text-white font-medium drop-shadow-lg text-sm sm:text-base">{name}</span>
                </div>

                {/* Image */}
                <div className="h-[220px] sm:h-[280px] md:h-[320px] relative">
                  <Image
                    src={category.image}
                    alt={name || category.nameKey}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 200px, (max-width: 768px) 240px, 280px"
                    loading={index < 4 ? 'eager' : 'lazy'}
                    quality={70}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </a>
          )})}
        </div>
      </div>
    </section>
  );
}
