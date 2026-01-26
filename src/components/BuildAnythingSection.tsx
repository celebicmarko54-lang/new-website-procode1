'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/context/LanguageContext';

interface CategoryCard {
  nameKey: string;
  icon: React.ReactNode;
  gradient: string;
  image: string;
}

const categories: CategoryCard[] = [
  {
    name: 'Landing page',
    gradient: 'from-gray-800 to-gray-900',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" />
      </svg>
    ),
    image: '/templates/2.jpg'
  },
  {
    name: 'Dashboard',
    gradient: 'from-gray-700 to-gray-800',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 3h8v10H3V3zm0 12h8v6H3v-6zm10-12h8v6h-8V3zm0 8h8v10h-8V11z"/>
      </svg>
    ),
    image: '/templates/3.jpg'
  },
  {
    name: 'Mobile',
    gradient: 'from-slate-500 to-slate-700',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <rect x="5" y="1" width="14" height="22" rx="3" />
        <circle cx="12" cy="19" r="1.5" fill="black" />
      </svg>
    ),
    image: '/templates/4.jpg'
  },
  {
    name: 'Portfolio',
    gradient: 'from-cyan-500 to-blue-600',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
    image: '/templates/5.jpg'
  },
  {
    name: 'E-commerce',
    gradient: 'from-emerald-500 to-teal-600',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45A2 2 0 007 16h12v-2H7l1.1-2h7.45a2 2 0 001.75-1.03l3.58-6.49A1 1 0 0020 3H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
      </svg>
    ),
    image: '/templates/6.jpg'
  },
  {
    name: 'Productivity',
    gradient: 'from-amber-500 to-orange-600',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    ),
    image: '/templates/7.jpg'
  },
  {
    name: 'Internal tool',
    gradient: 'from-gray-600 to-gray-700',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
      </svg>
    ),
    image: '/templates/8.jpg'
  },
  {
    name: 'Community & Social',
    gradient: 'from-blue-500 to-indigo-600',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    ),
    image: '/templates/9.jpg'
  },
  {
    name: 'Business & Finance',
    gradient: 'from-green-500 to-emerald-600',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
      </svg>
    ),
    image: '/templates/2.jpg'
  },
  {
    name: 'CRM',
    gradient: 'from-blue-600 to-indigo-700',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
      </svg>
    ),
    image: '/templates/3.jpg'
  },
  {
    name: 'Lifestyle',
    gradient: 'from-gray-800 to-gray-900',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    ),
    image: '/templates/4.jpg'
  },
  {
    name: 'Entertainment',
    gradient: 'from-gray-700 to-gray-800',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
      </svg>
    ),
    image: '/templates/5.jpg'
  },
  {
    name: 'Health & Wellness',
    gradient: 'from-teal-500 to-emerald-600',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
      </svg>
    ),
    image: '/templates/6.jpg'
  },
  {
    name: 'Education',
    gradient: 'from-indigo-500 to-blue-600',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
      </svg>
    ),
    image: '/templates/7.jpg'
  },
  {
    name: 'Real Estate',
    gradient: 'from-orange-500 to-red-600',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
    ),
    image: '/templates/8.jpg'
  },
  {
    name: 'Travel',
    gradient: 'from-sky-500 to-blue-600',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
      </svg>
    ),
    image: '/templates/9.jpg'
  },
  {
    name: 'Food & Restaurant',
    gradient: 'from-orange-500 to-amber-600',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
      </svg>
    ),
    image: '/templates/2.jpg'
  },
  {
    name: 'AI & Tech',
    gradient: 'from-cyan-400 to-blue-600',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12z"/>
      </svg>
    ),
    image: '/templates/3.jpg'
  },
];

export default function BuildAnythingSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const { t } = useTranslation();

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
    <section className="py-24 overflow-hidden bg-[#f8fafc] dark:bg-black transition-colors">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 pl-12 md:pl-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
          {t('buildAnything.title')}
        </h2>
      </div>

      {/* Scrolling cards */}
      <div 
        ref={scrollRef}
        className="overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 2%, black 98%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 2%, black 98%, transparent)'
        }}
      >
        <div className="flex gap-5 px-6" style={{ width: 'max-content' }}>
          {/* Double the cards for seamless loop */}
          {[...categories, ...categories].map((category, index) => (
            <a
              key={`${category.name}-${index}`}
              href="#"
              className="group relative w-[280px] flex-shrink-0"
            >
              {/* Card */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 dark:bg-black border border-white/10 dark:border-gray-800 transition-all duration-300 group-hover:border-white/30 group-hover:scale-[1.02] shadow-xl">
                {/* Header with icon and name */}
                <div className="absolute top-0 left-0 right-0 z-20 p-4 flex items-center gap-3 bg-gradient-to-b from-black/60 to-transparent">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white shadow-lg`}>
                    {category.icon}
                  </div>
                  <span className="text-white font-medium drop-shadow-lg">{category.name}</span>
                </div>

                {/* Image */}
                <div className="h-[320px] relative">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="280px"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom scrollbar indicator */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-1 bg-gray-200 dark:bg-black rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-gradient-to-r from-gray-400 to-gray-300 dark:from-gray-500 dark:to-gray-600 rounded-full" />
          </div>
        </div>
      </div>

      {/* See all link */}
      <div className="max-w-7xl mx-auto px-6 mt-8 flex justify-end">
        <a 
          href="/templates" 
          className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group"
        >
          <span>{t('buildAnything.exploreAll')}</span>
          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
