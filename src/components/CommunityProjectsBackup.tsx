'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the brutal scene to avoid SSR issues
const BrutalScene = dynamic(() => import('./BrutalScene'), { 
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-black flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
    </div>
  )
});

const glitchTexts = [
  "ENTER THE VOID",
  "CREATE CHAOS",
  "BUILD BRUTALITY",
  "CODE DESTRUCTION",
  "UNLEASH POWER",
  "BREAK LIMITS",
];

const projects = [
  { id: 1, name: 'NEURAL FORGE', likes: 8923, status: 'LIVE' },
  { id: 2, name: 'VOID ENGINE', likes: 7156, status: 'BUILDING' },
  { id: 3, name: 'DARK MATTER', likes: 6834, status: 'LIVE' },
  { id: 4, name: 'CHAOS SYNC', likes: 5421, status: 'LIVE' },
  { id: 5, name: 'QUANTUM LEAP', likes: 4892, status: 'BUILDING' },
  { id: 6, name: 'CYBER PULSE', likes: 4567, status: 'LIVE' },
];

export default function CommunityProjectsBackup() {
  const [glitchText, setGlitchText] = useState(glitchTexts[0]);
  const [isGlitching, setIsGlitching] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [stats, setStats] = useState({ projects: 0, builders: 0, lines: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => {
        setGlitchText(glitchTexts[Math.floor(Math.random() * glitchTexts.length)]);
        setIsGlitching(false);
      }, 150);
    }, 3000);
    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    const targetStats = { projects: 12847, builders: 48923, lines: 847 };
    const duration = 2000;
    const steps = 60;
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setStats({
        projects: Math.floor(targetStats.projects * easeOut),
        builders: Math.floor(targetStats.builders * easeOut),
        lines: Math.floor(targetStats.lines * easeOut),
      });
      if (currentStep >= steps) clearInterval(interval);
    }, duration / steps);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-[600px] overflow-hidden rounded-xl border border-gray-800/50"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #000000 100%)' }}
    >
      <div className="absolute inset-0">
        <BrutalScene />
      </div>
      <div 
        className="absolute inset-0 pointer-events-none z-10 opacity-20"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
        }}
      />
      <div className="relative z-20 p-8">
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-400 text-xs font-mono tracking-widest">COMMUNITY ACTIVE</span>
            </div>
          </div>
          <h2 
            className={`text-5xl md:text-6xl font-black tracking-tighter mb-2 transition-all duration-100
              ${isGlitching ? 'translate-x-1 text-cyan-400' : 'text-white'}`}
            style={{
              textShadow: isGlitching 
                ? '-3px 0 #ff0040, 3px 0 #00ffff, 0 0 20px rgba(255,0,64,0.5)' 
                : '0 0 40px rgba(255,255,255,0.1)',
            }}
          >
            {glitchText}
          </h2>
          <p className="text-gray-500 font-mono text-sm">[ BRUTAL CREATIONS FROM THE COMMUNITY ]</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-4xl mx-auto mb-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative cursor-pointer transition-all duration-300 ${
                hoveredProject === project.id ? 'scale-105 z-10' : 'scale-100'
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div 
                className={`absolute -inset-0.5 rounded-lg transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: 'linear-gradient(45deg, #ff0040, #00ffff, #ff0040)',
                  filter: 'blur(4px)',
                }}
              />
              <div className="relative bg-black/80 backdrop-blur-sm border border-gray-800 rounded-lg p-4 h-24 flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono
                    ${project.status === 'LIVE' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      project.status === 'LIVE' ? 'bg-green-400' : 'bg-yellow-400'
                    } animate-pulse`} />
                    {project.status}
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <span className="text-[10px] font-mono">{project.likes.toLocaleString()}</span>
                  </div>
                </div>
                <h3 className="text-white font-bold tracking-wide group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="relative bg-black/60 backdrop-blur-md border border-gray-800 rounded-lg p-4">
            <div className="relative flex items-center justify-around">
              <div className="text-center">
                <p className="text-3xl font-black text-white font-mono tracking-tighter">
                  {stats.projects.toLocaleString()}
                </p>
                <p className="text-[10px] text-gray-500 font-mono tracking-widest mt-1">PROJECTS</p>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-red-500/50 to-transparent" />
              <div className="text-center">
                <p className="text-3xl font-black text-white font-mono tracking-tighter">
                  {stats.builders.toLocaleString()}
                </p>
                <p className="text-[10px] text-gray-500 font-mono tracking-widest mt-1">BUILDERS</p>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent" />
              <div className="text-center">
                <p className="text-3xl font-black text-white font-mono tracking-tighter">
                  {stats.lines.toLocaleString()}M
                </p>
                <p className="text-[10px] text-gray-500 font-mono tracking-widest mt-1">LINES OF CODE</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="group relative px-8 py-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 opacity-80 group-hover:opacity-100 transition-opacity blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500" />
            <span className="relative text-white font-black tracking-widest text-sm flex items-center gap-2">
              EXPLORE CHAOS
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-red-500/30 z-30" />
      <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-cyan-500/30 z-30" />
      <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-cyan-500/30 z-30" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-red-500/30 z-30" />
    </div>
  );
}
