'use client';

import { useState } from 'react';
import Link from 'next/link';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8fafc]/95 dark:bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-700/50">
      <div className="max-w-7xl ml-[15%] mr-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl text-gray-900 dark:text-white tracking-tight">
                <span className="italic">λ</span><span className="font-medium">forge.dev</span>
              </span>
            </Link>

            {/* Main Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('solutions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1">
                  Solutions
                  <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'solutions' && (
                  <div className="absolute top-full left-0 mt-1 w-48 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg py-1 animate-fade-in">
                    <Link href="/solutions/founders" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">Startups & MVPs</Link>
                    <Link href="/solutions/designers" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">Creative Teams</Link>
                    <Link href="/solutions/marketers" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">Growth & Marketing</Link>
                    <Link href="/solutions/prototyping" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">Rapid Prototypes</Link>
                    <Link href="/solutions/web3" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">Web3 & Blockchain</Link>
                  </div>
                )}
              </div>
              <Link href="/enterprise" className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Enterprise
              </Link>
              <Link href="/pricing" className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/community" className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Community
              </Link>
            </nav>
          </div>

          {/* Right Side */}
          <div className="absolute right-[15%] flex items-center gap-3">
            {/* Language Selector */}
            <LanguageSelector />
            
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Log in Button */}
            <Link 
              href="/login"
              className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Log in
            </Link>
            
            {/* Get Started Button */}
            <Link 
              href="/signup"
              className="px-4 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-lg transition-colors"
            >
              Get started
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {showMobileMenu ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 animate-fade-in">
            <nav className="flex flex-col gap-2">
              <Link href="/solutions" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">Solutions</Link>
              <Link href="/enterprise" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">Enterprise</Link>
              <Link href="/pricing" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">Pricing</Link>
              <Link href="/community" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">Community</Link>
              <div className="flex items-center gap-2 px-3 py-2">
                <LanguageSelector />
                <ThemeToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
