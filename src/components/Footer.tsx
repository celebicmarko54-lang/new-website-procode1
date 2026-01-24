'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useLanguage, languages, Language } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

interface FooterLink {
  name: string;
  href: string;
  external?: boolean;
  action?: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    title: 'Company',
    links: [
      { name: 'Careers', href: '/careers' },
      { name: 'Enterprise', href: '/enterprise' },
      { name: 'Security', href: '/security' },
      { name: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Learn', href: '/learn' },
      { name: 'Guides', href: '/guides' },
      { name: 'Videos', href: '/videos' },
      { name: 'Blog', href: '/blog' },
      { name: 'Support', href: '/support' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy policy', href: '/privacy' },
      { name: 'Cookie settings', href: '/cookies' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Platform rules', href: '/rules' },
      { name: 'Report abuse', href: '/report' },
      { name: 'Report security concerns', href: '/security-report' },
    ],
  },
  {
    title: 'Community',
    links: [
      { name: 'Affiliates', href: '/affiliates' },
    ],
  },
];

// Social media links - displayed separately in a row for easy connection
const socialMediaLinks = [
  { name: 'Discord', href: 'https://discord.gg/lovecode', icon: 'M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z' },
  { name: 'X / Twitter', href: 'https://twitter.com/lovecode', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { name: 'YouTube', href: 'https://youtube.com/@lovecode', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/lovecode', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
];

export default function Footer() {
  const [cookieModalOpen, setCookieModalOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const langDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = (link: { name: string; href: string; action?: string; external?: boolean }) => {
    if (link.action === 'cookies') {
      setCookieModalOpen(true);
      return;
    }
  };

  const handleSelectLanguage = (lang: Language) => {
    setLanguage(lang);
    setLangDropdownOpen(false);
  };

  return (
    <>
      <footer className="w-full relative overflow-hidden">
        {/* Main Footer - Transparent to show gradient */}
        <div className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
            {/* Cloud-like floating container */}
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 lg:p-8 border border-gray-200/80 dark:border-gray-700/80">
              {/* Main Footer Content */}
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Logo Section */}
                <div className="lg:w-44 flex-shrink-0">
                  <h2 className="text-xl text-gray-900 dark:text-white mb-3 tracking-tight">
                    <span className="italic">λ</span><span className="font-medium">forge.dev</span>
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mb-4">
                    Build production-ready apps with AI
                  </p>
                  
                  {/* Language Selector and Theme Toggle */}
                  <div className="flex items-center gap-2">
                    {/* Language Selector Dropdown */}
                    <div ref={langDropdownRef} className="relative">
                      <button 
                        onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        <span className="uppercase font-medium">{language.code}</span>
                        <svg className={`w-2.5 h-2.5 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {langDropdownOpen && (
                        <div className="absolute bottom-full left-0 mb-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-1 z-50 animate-fade-in">
                          {languages.map((lang) => (
                            <button
                              key={lang.code}
                              onClick={() => handleSelectLanguage(lang)}
                              className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                                language.code === lang.code 
                                  ? 'bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white' 
                                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <span className="uppercase text-xs font-semibold text-gray-400 dark:text-gray-500 w-5">{lang.code}</span>
                                <span className="font-medium">{lang.name}</span>
                              </div>
                              {language.code === lang.code && (
                                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {/* Theme Toggle Button */}
                    <button
                      onClick={toggleTheme}
                      className="flex items-center justify-center w-8 h-8 text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all"
                      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                      title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                    >
                      {theme === 'light' ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Footer Links Grid */}
                <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                  {footerLinks.map((section) => (
                    <div key={section.title}>
                      <h3 className="text-xs font-semibold text-gray-900 dark:text-white tracking-wide mb-2 uppercase">
                        {section.title}
                      </h3>
                      <ul className="space-y-1">
                        {section.links.map((link) => (
                          <li key={link.name}>
                            <Link
                              href={link.action ? '#' : link.href}
                              onClick={(e) => {
                                if (link.action) {
                                  e.preventDefault();
                                  handleLinkClick(link);
                                }
                              }}
                              target={link.external ? '_blank' : undefined}
                              rel={link.external ? 'noopener noreferrer' : undefined}
                              className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1"
                            >
                              {link.name}
                              {link.external && (
                                <svg className="w-2.5 h-2.5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media Links Row - Easy to Connect */}
              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                <h3 className="text-xs font-semibold text-gray-900 dark:text-white tracking-wide mb-3 text-center uppercase">
                  Connect with us
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {socialMediaLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all text-sm font-medium"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon}/>
                      </svg>
                      <span>{social.name}</span>
                      <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Bottom section with divider */}
              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    © {new Date().getFullYear()} λforge.dev · All rights reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Settings Modal - Doodle Style */}
      {cookieModalOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4" onClick={() => setCookieModalOpen(false)}>
          <div 
            className="bg-pink-50 rounded-3xl shadow-2xl max-w-lg w-full p-6 relative border-4 border-dashed border-pink-300 transform rotate-1"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative corner doodles */}
            <svg className="absolute -top-3 -left-3 w-8 h-8 text-pink-400" viewBox="0 0 32 32">
              <path d="M16 4 L18 12 L26 14 L18 16 L16 24 L14 16 L6 14 L14 12 Z" fill="currentColor"/>
            </svg>
            <svg className="absolute -bottom-3 -right-3 w-8 h-8 text-purple-400" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="6 4"/>
            </svg>
            
            <div className="flex items-center justify-between mb-4">
              <h3 
                className="text-xl font-bold text-gray-800"
                style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
              >
                🍪 Cookie Settings
              </h3>
              <button 
                onClick={() => setCookieModalOpen(false)}
                className="p-2 hover:bg-pink-100 rounded-full transition-colors border-2 border-dashed border-pink-200"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <p 
              className="text-sm text-gray-600 mb-6"
              style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
            >
              We use cookies to make things awesome! Pick your favorites ✨
            </p>

            <div className="space-y-3">
              <label className="flex items-center justify-between p-4 bg-white rounded-2xl border-2 border-dashed border-gray-200">
                <div>
                  <p className="text-sm font-bold text-gray-800" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>🔒 Essential Cookies</p>
                  <p className="text-xs text-gray-500">The must-haves!</p>
                </div>
                <input type="checkbox" checked disabled className="w-5 h-5 accent-pink-500 rounded" />
              </label>
              
              <label className="flex items-center justify-between p-4 bg-white rounded-2xl border-2 border-dashed border-gray-200 cursor-pointer hover:border-pink-300 hover:bg-pink-50 transition-all">
                <div>
                  <p className="text-sm font-bold text-gray-800" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>📊 Analytics Cookies</p>
                  <p className="text-xs text-gray-500">Help us improve!</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 accent-pink-500 rounded" />
              </label>
              
              <label className="flex items-center justify-between p-4 bg-white rounded-2xl border-2 border-dashed border-gray-200 cursor-pointer hover:border-pink-300 hover:bg-pink-50 transition-all">
                <div>
                  <p className="text-sm font-bold text-gray-800" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>🎯 Marketing Cookies</p>
                  <p className="text-xs text-gray-500">Personalized stuff</p>
                </div>
                <input type="checkbox" className="w-5 h-5 accent-pink-500 rounded" />
              </label>
            </div>

            <div className="flex gap-3 mt-6">
              <button 
                onClick={() => setCookieModalOpen(false)}
                className="flex-1 px-4 py-3 border-2 border-dashed border-gray-300 text-gray-600 rounded-2xl hover:bg-gray-100 transition-all text-sm font-bold transform hover:-rotate-1"
                style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
              >
                Nope, reject all
              </button>
              <button 
                onClick={() => setCookieModalOpen(false)}
                className="flex-1 px-4 py-3 text-white rounded-2xl transition-all text-sm font-bold shadow-lg transform hover:rotate-1"
                style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif', background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)' }}
              >
                Save my picks! ✓
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
