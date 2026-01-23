'use client';

import { useState } from 'react';
import WaveLines from './WaveLines';

export default function HeroSection() {
  const [prompt, setPrompt] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = () => {
    if (!prompt.trim()) return;
    console.log('Submitting:', prompt);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <section 
      className="relative w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8 overflow-hidden"
      style={{ minHeight: '80vh' }}
    >
      {/* Animated wave lines behind everything */}
      <WaveLines />
      {/* 1. Top: Build something heading - Lovable style */}
      <div className="relative z-10 text-center" style={{ marginTop: '12vh' }}>
        {/* Small announcement tab */}
        <div className="flex items-center justify-center mb-4">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all group"
          >
            <span 
              className="px-2 py-0.5 text-white text-xs font-semibold rounded-full"
              style={{
                background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)',
              }}
            >
              New
            </span>
            <span className="text-sm text-gray-600">Introducing Lovecode AI</span>
            <svg className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 tracking-tight">
          <span>Dream it. </span>
          <span 
            className="font-bold"
            style={{
              background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Ship it.
          </span>
        </h1>
        <p className="mt-3 text-gray-500 text-lg sm:text-xl">
          The #1 AI platform to build production-ready apps in minutes
        </p>
      </div>

      {/* 2. Middle: Chat Input Box */}
      <div className="relative z-10 w-full max-w-3xl mx-auto mt-6">
        {/* Bird standing next to the chat box on the right */}
        <div className="absolute hidden lg:block z-20" style={{ right: '-180px', bottom: '80px' }}>
          {/* Speech bubble cloud - small, above head */}
          <div 
            className="absolute"
            style={{
              top: '-45px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <div className="relative bg-white px-3 py-2 rounded-xl shadow-md border border-gray-100">
              <p className="text-xs font-medium text-gray-700 whitespace-nowrap typewriter-text">
                Make something never faster ✨
              </p>
              {/* Small cloud bubbles pointing to bird */}
              <div 
                className="absolute w-2 h-2 bg-white rounded-full shadow-sm border border-gray-100"
                style={{ bottom: '-6px', left: '50%', transform: 'translateX(-50%)' }}
              />
              <div 
                className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-sm border border-gray-100"
                style={{ bottom: '-12px', left: '50%', transform: 'translateX(-50%)' }}
              />
            </div>
          </div>
          <img 
            src="/bird.png" 
            alt="Lovecode mascot" 
            className="w-32 h-40 xl:w-40 xl:h-48 object-contain"
            style={{
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
            }}
          />
        </div>
        <div className="w-full bg-white rounded-2xl shadow-lg border border-gray-200/80 overflow-hidden">
          {/* Input Area */}
          <div className="p-6 min-h-[120px] relative">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Describe the app you want to create..."
              className="w-full bg-transparent text-gray-900 placeholder-gray-400 text-lg focus:outline-none relative z-10"
            />
          </div>

          {/* Bottom with submit button */}
          <div className="px-6 pb-6 flex justify-end">
            <button 
              onClick={handleSubmit}
              className="p-3 rounded-full text-white hover:shadow-lg hover:scale-105 transition-all"
              style={{
                background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)',
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Templates section */}
        <div className="mt-6 text-center">
          <p className="text-gray-700 font-medium mb-4">⚡ Launch faster with proven blueprints</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all text-sm text-gray-700 hover:border-[#9B59B6]">
              Reporting Dashboard
            </button>
            <button className="px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all text-sm text-gray-700 hover:border-[#9B59B6]">
              Gaming Platform
            </button>
            <button className="px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all text-sm text-gray-700 hover:border-[#E91E8C]">
              Onboarding Portal
            </button>
            <button className="px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all text-sm text-gray-700 hover:border-[#E74C3C]">
              Room Visualizer
            </button>
            <button className="px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all text-sm text-gray-700 hover:border-[#E67E22]">
              Networking App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
