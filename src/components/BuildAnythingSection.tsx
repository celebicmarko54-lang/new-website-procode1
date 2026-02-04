'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/context/LanguageContext';

interface CategoryCard {
  nameKey?: string;
  name?: string;
  icon: React.ReactNode | null;
  gradient: string;
  image: string;
}

const categories: CategoryCard[] = [
  {
    name: 'Analytics Dashboard',
    gradient: 'from-gray-800 to-gray-900',
    icon: null,
    image: '/templates/1.1.png'
  },
  {
    name: 'Gaming Portal',
    gradient: 'from-gray-700 to-gray-800',
    icon: null,
    image: '/templates/1.2.png'
  },
  {
    name: 'Maps & Navigation',
    gradient: 'from-slate-500 to-slate-700',
    icon: null,
    image: '/templates/1.3.png'
  },
  {
    name: 'Fashion Store',
    gradient: 'from-cyan-500 to-blue-600',
    icon: null,
    image: '/templates/1.4.png'
  },
  {
    name: 'Beauty & Style',
    gradient: 'from-emerald-500 to-teal-600',
    icon: null,
    image: '/templates/1.5.png'
  },
  {
    name: 'Product Catalog',
    gradient: 'from-amber-500 to-orange-600',
    icon: null,
    image: '/templates/1.7.png'
  },
  {
    name: 'Data Analytics',
    gradient: 'from-gray-600 to-gray-700',
    icon: null,
    image: '/templates/1.8.png'
  },
  {
    name: 'Luxury Fragrance',
    gradient: 'from-blue-500 to-indigo-600',
    icon: null,
    image: '/templates/1.9.png'
  },
  {
    name: 'Furniture Store',
    gradient: 'from-green-500 to-emerald-600',
    icon: null,
    image: '/templates/1.10.png'
  },
  {
    name: 'Tech Dashboard',
    gradient: 'from-blue-600 to-indigo-700',
    icon: null,
    image: '/templates/1.11.png'
  },
  {
    name: 'Tech Setup Blog',
    gradient: 'from-gray-800 to-gray-900',
    icon: null,
    image: '/templates/1.12.png'
  },
  {
    name: 'Entertainment Hub',
    gradient: 'from-gray-700 to-gray-800',
    icon: null,
    image: '/templates/1.13.png'
  },
  {
    name: 'Piano App',
    gradient: 'from-teal-500 to-emerald-600',
    icon: null,
    image: '/templates/1.14.png'
  },
  {
    name: 'Analytics Platform',
    gradient: 'from-indigo-500 to-blue-600',
    icon: null,
    image: '/templates/1.15.png'
  },
  {
    name: 'Sales Dashboard',
    gradient: 'from-orange-500 to-red-600',
    icon: null,
    image: '/templates/1.16.png'
  },
  {
    name: 'Travel Experience',
    gradient: 'from-sky-500 to-blue-600',
    icon: null,
    image: '/templates/1.1.png'
  },
  {
    name: 'Gourmet Kitchen',
    gradient: 'from-orange-500 to-amber-600',
    icon: null,
    image: '/templates/1.2.png'
  },
  {
    name: 'AI Assistant',
    gradient: 'from-cyan-400 to-blue-600',
    icon: null,
    image: '/templates/1.3.png'
  },
];

// Get unique images for preloading
const uniqueImages = [...new Set(categories.map(c => c.image))];

export default function BuildAnythingSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const { t } = useTranslation();

  // Preload all images on mount
  useEffect(() => {
    uniqueImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

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
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
          {t('buildAnything.title')}
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
          {t('buildAnything.subtitle')}
        </p>
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
                {/* Header with name only */}
                <div className="absolute top-0 left-0 right-0 z-20 p-4 bg-gradient-to-b from-black/60 to-transparent">
                  <span className="text-white font-medium drop-shadow-lg">{category.name}</span>
                </div>

                {/* Image */}
                <div className="h-[320px] relative">
                  <Image
                    src={category.image}
                    alt={category.name || ''}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="280px"
                    priority={index < 10}
                    quality={75}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
