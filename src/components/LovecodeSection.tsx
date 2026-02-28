'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useTranslation } from '@/context/LanguageContext';

// Turbopack workaround: 'language' must exist in scope due to compiled chunk cross-references
// It is defined globally in layout.tsx's head script
// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-var
declare var language: any;

// All available template images
const allTemplates = [
  '/templates/1.1.png',
  '/templates/1.2.png',
  '/templates/1.3.png',
  '/templates/1.4.png',
  '/templates/1.5.png',
  '/templates/1.7.png',
  '/templates/1.8.png',
  '/templates/1.9.png',
  '/templates/1.10.png',
  '/templates/1.11.png',
  '/templates/1.12.png',
  '/templates/1.13.png',
  '/templates/1.14.png',
  '/templates/1.15.png',
  '/templates/1.16.png',
];

// Shuffle array function
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function LovecodeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImages, setCurrentImages] = useState<string[]>(allTemplates);
  const [positions, setPositions] = useState<Array<{ x: number; y: number }>>(() => 
    allTemplates.map(() => ({ x: 0, y: 0 }))
  );
  const [isInView, setIsInView] = useState(false);
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);
  const mouseStopTimeout = useRef<NodeJS.Timeout | null>(null);
  const wasMouseMoving = useRef(false);
  const { language: ctxLanguage } = useTranslation();
  
  // Direct translations for mouse hint
  const mouseHintMap: Record<string, string> = {
    ko: '마우스를 움직여 탐색하세요',
    sw: 'Sogeza kipanya chako kuchunguza',
    ta: 'ஆராய உங்கள் சுட்டியை நகர்த்தவும்',
    hi: 'एक्सप्लोर करने के लिए अपना माउस हिलाएं',
    hr: 'Pomaknite miš za istraživanje',
    en: 'Move your mouse to explore'
  };
  
  const mouseHint = mouseHintMap[ctxLanguage.code] || mouseHintMap.en;

  // Shuffle images only on client after mount to avoid hydration mismatch
  useEffect(() => {
    setCurrentImages(shuffleArray(allTemplates));
  }, []);

  // Smooth snake animation loop
  const animate = useCallback(() => {
    setPositions(prevPositions => {
      const newPositions = [...prevPositions];
      
      // First card follows mouse directly with smooth lerp
      const lerpFactor = 0.15;
      newPositions[0] = {
        x: newPositions[0].x + (mousePos.current.x - newPositions[0].x) * lerpFactor,
        y: newPositions[0].y + (mousePos.current.y - newPositions[0].y) * lerpFactor,
      };
      
      // Each subsequent card follows the one before it
      for (let i = 1; i < newPositions.length; i++) {
        const followFactor = 0.12 - i * 0.005;
        newPositions[i] = {
          x: newPositions[i].x + (newPositions[i - 1].x - newPositions[i].x) * followFactor,
          y: newPositions[i].y + (newPositions[i - 1].y - newPositions[i].y) * followFactor,
        };
      }
      
      return newPositions;
    });
    
    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  // Shuffle images when mouse starts moving again after stopping
  useEffect(() => {
    if (isMouseMoving && !wasMouseMoving.current) {
      setCurrentImages(shuffleArray(allTemplates));
    }
    wasMouseMoving.current = isMouseMoving;
  }, [isMouseMoving]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    mousePos.current = {
      x: e.clientX - rect.left - 80,
      y: e.clientY - rect.top - 60,
    };
    setIsInView(true);
    setIsMouseMoving(true);
    
    // Clear existing timeout
    if (mouseStopTimeout.current) {
      clearTimeout(mouseStopTimeout.current);
    }
    
    // Hide cards after mouse stops moving for 150ms
    mouseStopTimeout.current = setTimeout(() => {
      setIsMouseMoving(false);
    }, 150);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsInView(false);
    setIsMouseMoving(false);
    if (mouseStopTimeout.current) {
      clearTimeout(mouseStopTimeout.current);
    }
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh] flex items-end justify-center overflow-hidden bg-[#f8fafc] dark:bg-[#1A1A1A] transition-colors"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Snake Trail Cards */}
      <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none hidden md:block">
        {currentImages.map((image, index) => {
          const pos = positions[index];
          const scale = Math.max(0.3, 1 - index * 0.04);
          const opacity = (isInView && isMouseMoving) ? Math.max(0.2, 1 - index * 0.05) : 0;
          const zIndex = currentImages.length - index;
          
          return (
            <div
              key={`${image}-${index}`}
              className="absolute w-[200px] h-[140px] rounded-xl overflow-hidden shadow-2xl"
              style={{
                transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
                opacity,
                zIndex,
                transition: 'opacity 0.3s ease-out',
                willChange: 'transform',
              }}
            >
              <img 
                src={image} 
                alt="" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>

      {/* AppNode text with staggered emerge animation */}
      <h2 
        className="relative z-10 text-[20vw] sm:text-[18vw] md:text-[16vw] lg:text-[14vw] tracking-tight whitespace-nowrap select-none flex items-baseline"
      >
        {'AppNode'.split('').map((letter, index) => (
          <span 
            key={index}
            className="animate-emerge-letter font-medium text-gray-900 dark:text-white"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </h2>

      {/* Mouse hint */}
      <div 
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 transition-all duration-500 hidden md:block ${
          isInView ? 'opacity-0' : 'opacity-60'
        }`}
      >
        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-medium tracking-wide">{mouseHint}</p>
      </div>
    </section>
  );
}
