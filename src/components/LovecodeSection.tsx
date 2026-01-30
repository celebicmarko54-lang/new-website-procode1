'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

// All available template images
const allTemplates = [
  '/templates/2.jpg',
  '/templates/3.jpg',
  '/templates/4.jpg',
  '/templates/5.jpg',
  '/templates/6.jpg',
  '/templates/7.jpg',
  '/templates/8.jpg',
  '/templates/9.jpg',
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
  const [currentImages, setCurrentImages] = useState<string[]>(() => shuffleArray(allTemplates));
  const [positions, setPositions] = useState<Array<{ x: number; y: number }>>(() => 
    allTemplates.map(() => ({ x: 0, y: 0 }))
  );
  const [isInView, setIsInView] = useState(false);
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);
  const mouseStopTimeout = useRef<NodeJS.Timeout | null>(null);
  const wasMouseMoving = useRef(false);

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
      className="relative w-full h-[35vh] md:h-[40vh] flex items-end justify-center overflow-hidden bg-[#f8fafc] dark:bg-black transition-colors"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Snake Trail Cards */}
      <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
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
        className="relative z-10 text-[18vw] md:text-[16vw] lg:text-[14vw] tracking-tight whitespace-nowrap select-none flex items-baseline"
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
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 transition-all duration-500 ${
          isInView ? 'opacity-0' : 'opacity-60'
        }`}
      >
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium tracking-wide">Move your mouse to explore</p>
      </div>
    </section>
  );
}
