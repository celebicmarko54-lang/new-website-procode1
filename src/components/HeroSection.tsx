'use client';

import { useState } from 'react';
import { useTranslation } from '@/context/LanguageContext';

export default function HeroSection() {
  const [prompt, setPrompt] = useState('');
  const { t } = useTranslation();

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
      className="relative w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8 overflow-hidden bg-[#f8fafc] dark:bg-black transition-colors"
      style={{ minHeight: '45vh' }}
    >
      {/* Heading */}
      <div className="relative z-10 text-center" style={{ marginTop: '6vh' }}>
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
          {t('hero.title')}
        </h1>
      </div>

      {/* Chat Input Box */}
      <div className="relative z-10 w-full max-w-[720px] mx-auto mt-6">
        <form className="w-full bg-white dark:bg-[#0a0a0a] rounded-2xl border border-gray-200 dark:border-[#2a2a2a] overflow-hidden">
          {/* Top bar with lightning icon and Ready badge */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 dark:border-[#1f1f1f]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-[10px] flex items-center justify-center bg-black/5 dark:bg-white/10">
                <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
              <span className="text-xs font-medium">{t('hero.ready')}</span>
            </div>
          </div>

          {/* Input Area */}
          <div className="flex-1 flex flex-col relative p-5 min-h-[100px]">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t('hero.placeholder')}
              rows={3}
              className="w-full resize-none ring-0 z-20 outline-0 bg-transparent text-base leading-relaxed placeholder:text-gray-500 text-[#1a1a1a] dark:text-white focus:outline-none"
            />
          </div>

          {/* Bottom bar */}
          <div className="flex items-center justify-between px-5 py-4 border-t border-gray-200 dark:border-[#1f1f1f]">
            <div className="flex items-center gap-3">
              {/* Attachment button */}
              <button type="button" className="p-2 rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/10 text-gray-500 dark:text-gray-400" title="Add attachments">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                </svg>
              </button>
              {/* Image button */}
              <button type="button" className="p-2 rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/10 text-gray-500 dark:text-gray-400" title="Add image">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </button>
              <span className="text-xs text-gray-500 dark:text-gray-400">{t('hero.pressEnter')}</span>
            </div>
            {/* Generate button */}
            <button 
              type="submit"
              onClick={handleSubmit}
              disabled={!prompt.trim()}
              className="flex items-center gap-2 px-4 py-2 rounded font-medium text-sm transition-all duration-200 disabled:bg-gray-100 disabled:dark:bg-[#1f1f1f] disabled:text-gray-400 disabled:dark:text-gray-500 disabled:cursor-not-allowed enabled:bg-black enabled:dark:bg-white enabled:text-white enabled:dark:text-black enabled:hover:opacity-90"
            >
              {t('common.startBuilding')}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </form>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-1.5 mt-2 justify-center">
          <button className="flex items-center gap-1 px-2 py-1 rounded-md bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] text-gray-700 dark:text-gray-300 text-xs font-medium hover:bg-gray-50 dark:hover:bg-[#151515] transition-colors">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>Connect a Repo</span>
          </button>
          <button className="flex items-center gap-1 px-2 py-1 rounded-md bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] text-gray-700 dark:text-gray-300 text-xs font-medium hover:bg-gray-50 dark:hover:bg-[#151515] transition-colors">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
              <path d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5z" fill="#F24E1E"/>
              <path d="M12 2h3.5a3.5 3.5 0 010 7H12V2z" fill="#FF7262"/>
              <path d="M12 12.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z" fill="#1ABCFE"/>
              <path d="M5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 01-7 0z" fill="#0ACF83"/>
              <path d="M5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z" fill="#A259FF"/>
            </svg>
            <span>Figma Import</span>
          </button>
          <button className="flex items-center gap-1 px-2 py-1 rounded-md bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] text-gray-700 dark:text-gray-300 text-xs font-medium hover:bg-gray-50 dark:hover:bg-[#151515] transition-colors">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
            <span>MCP Servers</span>
          </button>
          <button className="flex items-center gap-1 px-2 py-1 rounded-md bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] text-gray-700 dark:text-gray-300 text-xs font-medium hover:bg-gray-50 dark:hover:bg-[#151515] transition-colors">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
              <line x1="12" y1="22" x2="12" y2="15.5"/>
              <polyline points="22 8.5 12 15.5 2 8.5"/>
              <polyline points="2 15.5 12 8.5 22 15.5"/>
              <line x1="12" y1="2" x2="12" y2="8.5"/>
            </svg>
            <span>Get Extension</span>
          </button>
        </div>
      </div>
    </section>
  );
}
