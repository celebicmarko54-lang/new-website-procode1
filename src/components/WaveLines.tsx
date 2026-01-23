'use client';

import { useEffect, useRef } from 'react';

export default function WaveLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Lines with tapered effect - narrow on left, wide on right (very slow)
    const lines = [
      { color: '#E91E8C', amplitude: 80, frequency: 0.003, speed: 0.0008, yOffset: 0.5, minThickness: 0.5, maxThickness: 6 },
      { color: '#9B59B6', amplitude: 60, frequency: 0.004, speed: 0.001, yOffset: 0.52, minThickness: 0.5, maxThickness: 5 },
      { color: '#E91E8C', amplitude: 100, frequency: 0.002, speed: 0.0006, yOffset: 0.48, minThickness: 0.3, maxThickness: 4, opacity: 0.6 },
      { color: '#C084FC', amplitude: 70, frequency: 0.0035, speed: 0.0009, yOffset: 0.54, minThickness: 0.3, maxThickness: 5 },
      { color: '#F472B6', amplitude: 50, frequency: 0.005, speed: 0.0012, yOffset: 0.46, minThickness: 0.2, maxThickness: 3, opacity: 0.5 },
      { color: '#A855F7', amplitude: 90, frequency: 0.0025, speed: 0.0007, yOffset: 0.56, minThickness: 0.2, maxThickness: 3.5, opacity: 0.4 },
    ];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      lines.forEach((line) => {
        ctx.strokeStyle = line.color;
        ctx.globalAlpha = line.opacity || 1;
        ctx.lineCap = 'round';

        const baseY = canvas.height * line.yOffset;
        const segmentWidth = 4;

        // Draw line segment by segment with varying thickness
        for (let x = 0; x <= canvas.width - segmentWidth; x += segmentWidth) {
          // Calculate thickness based on x position (narrow left, wide right)
          const progress = x / canvas.width;
          const thickness = line.minThickness + (line.maxThickness - line.minThickness) * progress;
          
          ctx.beginPath();
          ctx.lineWidth = thickness;

          const y1 = baseY + 
            Math.sin(x * line.frequency + time * line.speed) * line.amplitude +
            Math.sin(x * line.frequency * 0.5 + time * line.speed * 1.5) * (line.amplitude * 0.3);
          
          const x2 = x + segmentWidth;
          const y2 = baseY + 
            Math.sin(x2 * line.frequency + time * line.speed) * line.amplitude +
            Math.sin(x2 * line.frequency * 0.5 + time * line.speed * 1.5) * (line.amplitude * 0.3);

          ctx.moveTo(x, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      });

      ctx.globalAlpha = 1;
      time++;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
}
