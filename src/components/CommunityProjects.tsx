'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

// Stock images from Unsplash for website/app screenshots
const stockImages = [
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1522542550221-31fd8575f5a2?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1559028006-319714a013d5?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop',
];

const CARD_COUNT = 18;
const TRAIL_DELAY = 80;

interface CardPosition {
  x: number;
  y: number;
  opacity: number;
  scale: number;
  zIndex: number;
}

export default function CommunityProjects() {
  const [isVisible, setIsVisible] = useState(false);
  const [textAnimated, setTextAnimated] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cardPositions, setCardPositions] = useState<CardPosition[]>(
    Array(CARD_COUNT).fill({ x: 0, y: 0, opacity: 0, scale: 0.2, zIndex: 1 })
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseHistory = useRef<{ x: number; y: number; time: number }[]>([]);
  const animationRef = useRef<number | null>(null);

  // Scroll detection for text animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setTextAnimated(true), 100);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const updateCardPositions = useCallback(() => {
    if (!isHovering) {
      setCardPositions(prev =>
        prev.map(card => ({
          ...card,
          opacity: Math.max(0, card.opacity - 0.05),
          scale: Math.max(0.2, card.scale - 0.02),
        }))
      );
      animationRef.current = requestAnimationFrame(updateCardPositions);
      return;
    }

    const now = Date.now();
    const history = mouseHistory.current;

    setCardPositions(prev =>
      prev.map((_, index) => {
        const targetTime = now - index * TRAIL_DELAY;

        let targetPos = history[0] || { x: 0, y: 0 };
        for (let i = history.length - 1; i >= 0; i--) {
          if (history[i].time <= targetTime) {
            targetPos = history[i];
            break;
          }
        }

        const angle = (index / CARD_COUNT) * Math.PI * 2;
        const spreadRadius = 20 + index * 8;
        const offsetX = Math.cos(angle) * spreadRadius;
        const offsetY = Math.sin(angle) * spreadRadius;

        return {
          x: targetPos.x + offsetX - 80,
          y: targetPos.y + offsetY - 60,
          opacity: 1,
          scale: 0.7 + (CARD_COUNT - index) * 0.02,
          zIndex: CARD_COUNT - index,
        };
      })
    );

    mouseHistory.current = history.filter(h => now - h.time < 2000);
    animationRef.current = requestAnimationFrame(updateCardPositions);
  }, [isHovering]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseHistory.current.push({ x, y, time: Date.now() });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    animationRef.current = requestAnimationFrame(updateCardPositions);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [updateCardPositions]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[600px] overflow-hidden rounded-xl cursor-none"
      style={{ background: '#0a0a0a' }}
    >
      {/* Trailing image cards */}
      <div className="absolute inset-0 z-10">
        {cardPositions.map((pos, index) => (
          <div
            key={index}
            className="absolute w-[160px] h-[120px] rounded-xl overflow-hidden shadow-2xl pointer-events-none"
            style={{
              transform: `translate(${pos.x}px, ${pos.y}px) scale(${pos.scale})`,
              opacity: pos.opacity,
              zIndex: pos.zIndex,
              transition: 'transform 0.15s ease-out, opacity 0.2s ease',
            }}
          >
            <img
              src={stockImages[index % stockImages.length]}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Large Background Brand Text with Jump Animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-20">
        <h2
          className={`text-[16vw] md:text-[14vw] lg:text-[12vw] font-black tracking-tight whitespace-nowrap transition-all duration-700 ease-out ${
            textAnimated
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-20 scale-90'
          }`}
          style={{
            background: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e53 25%, #ff6b6b 50%, #ee5a5a 75%, #ff6b6b 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 0 80px rgba(255, 107, 107, 0.5)',
            filter: 'drop-shadow(0 0 60px rgba(255, 107, 107, 0.4))',
          }}
        >
          Lovecode.dev
        </h2>
      </div>

      {/* Noise/Grain Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-overlay z-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Instruction hint */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ${
          isHovering ? 'opacity-0' : isVisible ? 'opacity-60' : 'opacity-0'
        }`}
      >
        <p className="text-white/60 text-sm font-medium tracking-wide">
          Move your mouse to explore
        </p>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-red-500/30 z-30" />
      <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-orange-500/30 z-30" />
      <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-orange-500/30 z-30" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-red-500/30 z-30" />
    </div>
  );
}
