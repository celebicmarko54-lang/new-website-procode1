'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

// Snake trail cards with AGNTIX template images
const snakeCards = [
  { id: 2, image: '/templates/2.jpg' },
  { id: 3, image: '/templates/3.jpg' },
  { id: 4, image: '/templates/4.jpg' },
  { id: 5, image: '/templates/5.jpg' },
  { id: 6, image: '/templates/6.jpg' },
  { id: 7, image: '/templates/7.jpg' },
  { id: 8, image: '/templates/8.jpg' },
  { id: 9, image: '/templates/9.jpg' },
];

export default function LovecodeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<Array<{ x: number; y: number }>>(() => 
    snakeCards.map(() => ({ x: 0, y: 0 }))
  );
  const [isInView, setIsInView] = useState(false);
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);
  const mouseStopTimeout = useRef<NodeJS.Timeout | null>(null);

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
      className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-white"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Snake Trail Cards */}
      <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
        {snakeCards.map((card, index) => {
          const pos = positions[index];
          const scale = Math.max(0.3, 1 - index * 0.04);
          const opacity = (isInView && isMouseMoving) ? Math.max(0.2, 1 - index * 0.05) : 0;
          const zIndex = snakeCards.length - index;
          
          return (
            <div
              key={card.id}
              className="absolute w-[140px] h-[100px] rounded-xl overflow-hidden shadow-2xl"
              style={{
                transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
                opacity,
                zIndex,
                transition: 'opacity 0.3s ease-out',
                willChange: 'transform',
              }}
            >
              <img 
                src={card.image} 
                alt="" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>

      {/* LOVECODE text with staggered emerge animation */}
      <h2 
        className="relative z-10 text-[18vw] md:text-[16vw] lg:text-[14vw] font-black tracking-tight whitespace-nowrap select-none flex"
      >
        {'LOVECODE'.split('').map((letter, index) => (
          <span 
            key={index}
            className="animate-emerge-letter"
            style={{
              background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 60%, #E74C3C 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              animationDelay: `${index * 0.1}s`,
            }}
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
        <p className="text-gray-500 text-sm font-medium tracking-wide">Move your mouse to explore</p>
      </div>
    </section>
  );
}
