'use client';

import { useState } from 'react';
import Link from 'next/link';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8fafc]/95 dark:bg-black/95 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-7xl ml-[15%] mr-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl text-gray-900 dark:text-white tracking-tight font-medium">
                AppNode
              </span>
            </Link>

            {/* Main Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1">
                  Products
                  <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'products' && (
                  <div className="absolute top-full left-0 mt-1 w-48 rounded-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow-lg py-1 animate-fade-in">
                    <Link href="/products/agent" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">Agent</Link>
                    <Link href="/products/design" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">Design</Link>
                    <Link href="/products/database" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">Database</Link>
                    <Link href="/products/publish" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">Publish</Link>
                    <Link href="/products/security" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">Security</Link>
                    <Link href="/products/integrations" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">Integrations</Link>
                    <Link href="/products/mobile" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">Mobile</Link>
                  </div>
                )}
              </div>
              
              {/* For Work Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('forwork')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1">
                  For Work
                  <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'forwork' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'forwork' && (
                  <div className="absolute top-full left-0 mt-1 w-64 rounded-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow-lg py-2 animate-fade-in">
                    <Link href="/teams" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">
                      <span className="font-medium">Teams</span>
                      <span className="block text-xs text-gray-400">Build together with your team</span>
                    </Link>
                    <Link href="/enterprise" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">
                      <span className="font-medium">Enterprise</span>
                      <span className="block text-xs text-gray-400">Enterprise-grade security & controls</span>
                    </Link>
                    <div className="border-t border-gray-200 dark:border-gray-700 my-2 mx-4"></div>
                    <div className="px-4 py-1 text-xs font-medium text-gray-400 uppercase">Use Cases</div>
                    <Link href="/usecases/business-apps" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">Business Apps</Link>
                    <Link href="/usecases/mobile-apps" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">Mobile Apps</Link>
                    <Link href="/usecases/rapid-prototyping" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">Rapid Prototyping</Link>
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1">
                  Resources
                  <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'resources' && (
                  <div className="absolute top-full left-0 mt-1 w-48 rounded-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow-lg py-1 animate-fade-in">
                    <Link href="/docs" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">Documentation</Link>
                    <Link href="/community" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">Community</Link>
                    <Link href="/gallery" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">Gallery</Link>
                    <Link href="/blog" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">Blog</Link>
                    <Link href="/changelog" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">Changelog</Link>
                  </div>
                )}
              </div>

              <Link href="/pricing" className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Pricing
              </Link>
            </nav>
          </div>

          {/* Right Side */}
          <div className="absolute right-[15%] flex items-center gap-2">
            {/* Language Selector */}
            <LanguageSelector />
            
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Log in Button */}
            <Link 
              href="/login"
              className="h-9 px-4 flex items-center text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Log in
            </Link>
            
            {/* Get Started Button */}
            <Link 
              href="/signup"
              className="h-9 px-4 flex items-center text-sm font-medium text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-lg transition-colors"
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
              <div className="px-3 py-2 text-xs font-medium text-gray-400 uppercase">Products</div>
              <Link href="/products/agent" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">Agent</Link>
              <Link href="/products/design" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">Design</Link>
              <Link href="/products/database" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">Database</Link>
              <Link href="/products/publish" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">Publish</Link>
              <Link href="/products/security" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">Security</Link>
              <Link href="/products/integrations" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">Integrations</Link>
              <Link href="/products/mobile" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">Mobile</Link>
              <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
              <div className="px-3 py-2 text-xs font-medium text-gray-400 uppercase">For Work</div>
              <Link href="/teams" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">Teams</Link>
              <Link href="/enterprise" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">Enterprise</Link>
              <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
              <div className="px-3 py-2 text-xs font-medium text-gray-400 uppercase">Resources</div>
              <Link href="/docs" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">Documentation</Link>
              <Link href="/community" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">Community</Link>
              <Link href="/gallery" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">Gallery</Link>
              <Link href="/blog" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">Blog</Link>
              <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
              <Link href="/pricing" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">Pricing</Link>
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
