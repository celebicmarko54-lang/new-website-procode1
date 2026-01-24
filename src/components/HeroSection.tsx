'use client';

import { useState } from 'react';

export default function HeroSection() {
  const [prompt, setPrompt] = useState('');

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
      className="relative w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8 overflow-hidden bg-[#f8fafc] dark:bg-[#0a0a0a] transition-colors"
      style={{ minHeight: '45vh' }}
    >
      {/* Heading */}
      <div className="relative z-10 text-center" style={{ marginTop: '6vh' }}>
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
          What will you build?
        </h1>
      </div>

      {/* Chat Input Box */}
      <div className="relative z-10 w-full max-w-[50rem] mx-auto mt-6">
        <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200/80 dark:border-gray-700 overflow-hidden">
          {/* Top bar with lightning icon and Ready badge */}
          <div className="px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-gray-400 dark:text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 dark:bg-emerald-900/30 rounded-full">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">Ready</span>
            </div>
          </div>

          {/* Input Area */}
          <div className="px-4 py-4">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Describe what you want to build..."
              rows={3}
              className="w-full bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-base focus:outline-none resize-none"
            />
          </div>

          {/* Bottom bar */}
          <div className="px-4 py-2.5 flex items-center justify-between border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2">
              {/* Attachment button */}
              <button className="p-1.5 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {/* Image button */}
              <button className="p-1.5 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </button>
              <span className="text-sm text-gray-400 dark:text-gray-500 ml-1">Press Enter to send</span>
            </div>
            {/* Generate button */}
            <button 
              onClick={handleSubmit}
              disabled={!prompt.trim()}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                prompt.trim() 
                  ? 'bg-gray-800 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-100' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
              }`}
            >
              Generate
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all text-sm text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Connect a Repo
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all text-sm text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5z" fill="#F24E1E"/>
              <path d="M12 2h3.5a3.5 3.5 0 010 7H12V2z" fill="#FF7262"/>
              <path d="M12 12.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z" fill="#1ABCFE"/>
              <path d="M5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 01-7 0z" fill="#0ACF83"/>
              <path d="M5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z" fill="#A259FF"/>
            </svg>
            Figma Import
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all text-sm text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
            MCP Servers
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all text-sm text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
              <line x1="12" y1="22" x2="12" y2="15.5"/>
              <polyline points="22 8.5 12 15.5 2 8.5"/>
              <polyline points="2 15.5 12 8.5 22 15.5"/>
              <line x1="12" y1="2" x2="12" y2="8.5"/>
            </svg>
            Get Extension
          </button>
        </div>
      </div>
    </section>
  );
}
