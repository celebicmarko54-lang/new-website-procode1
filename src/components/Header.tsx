'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';
import { useTranslation } from '@/context/LanguageContext';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { t, language } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8fafc]/95 dark:bg-[#1A1A1A]/95 backdrop-blur-sm border-b border-gray-200/50 dark:border-b-2 dark:border-gray-800/50">
      <div className="w-full px-[7.5%]">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-4 lg:gap-8">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/templates/AppNodelogo.png" 
                alt="AppNode Logo" 
                width={90} 
                height={90}
                className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] dark:invert dark:brightness-100"
                priority
                fetchPriority="high"
              />
              <span className="text-lg sm:text-xl text-gray-900 dark:text-white tracking-tight font-medium hidden xs:inline">
                AppNode
              </span>
            </Link>

            {/* Main Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1">
                  {t('nav.products')}
                  <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'products' && (
                  <div className="absolute top-full left-0 mt-1 w-48 rounded-lg bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-2 dark:border-gray-800 shadow-lg py-1 animate-fade-in">
                    <Link href="/products/agent" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#111] hover:text-gray-900 dark:hover:text-white">{t('products.agent.title')}</Link>
                    <Link href="/products/database" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#111] hover:text-gray-900 dark:hover:text-white">{t('products.database.title')}</Link>
                    <Link href="/products/publish" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#111] hover:text-gray-900 dark:hover:text-white">{t('products.publish.title')}</Link>
                    <Link href="/products/security" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#111] hover:text-gray-900 dark:hover:text-white">{t('products.security.title')}</Link>
                    <Link href="/products/integrations" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#111] hover:text-gray-900 dark:hover:text-white">{t('products.integrations.title')}</Link>
                    <Link href="/products/mobile" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#111] hover:text-gray-900 dark:hover:text-white">{t('products.mobile.title')}</Link>
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
                  {t('solutions.title')}
                  <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'forwork' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'forwork' && (
                  <div className="absolute top-full left-0 mt-1 w-64 rounded-lg bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-2 dark:border-gray-800 shadow-lg py-2 animate-fade-in">
                    <Link href="/enterprise" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#111] hover:text-gray-900 dark:hover:text-white">
                      <span className="font-medium">{t('nav.enterprise')}</span>
                      <span className="block text-xs text-gray-400">{t('solutions.enterprise.description')}</span>
                    </Link>
                    <div className="border-t border-gray-200 dark:border-t-2 dark:border-gray-700 my-2 mx-4"></div>
                    <div className="px-4 py-1 text-xs font-medium text-gray-400 uppercase">{t('useCases.title')}</div>
                    <Link href="/usecases/business-apps" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#111] hover:text-gray-900 dark:hover:text-white">{t('useCases.businessApps.title')}</Link>
                    <Link href="/usecases/mobile-apps" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#111] hover:text-gray-900 dark:hover:text-white">{t('useCases.mobileApps.title')}</Link>
                    <Link href="/usecases/rapid-prototyping" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#111] hover:text-gray-900 dark:hover:text-white">{t('useCases.rapidPrototyping.title')}</Link>
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
                  {t('footer.resources')}
                  <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'resources' && (
                  <div className="absolute top-full left-0 mt-1 w-48 rounded-lg bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-2 dark:border-gray-800 shadow-lg py-1 animate-fade-in">
                    <Link href="/docs" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#111] hover:text-gray-900 dark:hover:text-white">{t('docs.title')}</Link>
                    <Link href="/gallery" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#111] hover:text-gray-900 dark:hover:text-white">{t('community.showcase')}</Link>
                    <Link href="/blog" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#111] hover:text-gray-900 dark:hover:text-white">{t('nav.blog')}</Link>
                    <Link href="/changelog" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#111] hover:text-gray-900 dark:hover:text-white">{t('changelogPage.title')}</Link>
                  </div>
                )}
              </div>

              <Link href="/pricing" className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                {t('nav.pricing')}
              </Link>
            </nav>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            {/* Language Selector - Hidden on mobile */}
            <div className="hidden sm:block">
              <LanguageSelector />
            </div>
            
            {/* Theme Toggle - Hidden on mobile */}
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            
            {/* Log in Button - Hidden on mobile */}
            <Link 
              href="/login"
              className="hidden sm:flex h-7 px-3 items-center text-xs font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {t('common.logIn')}
            </Link>
            
            {/* Get Started Button - Hidden on mobile */}
            <Link 
              href="/signup"
              className="hidden sm:flex h-7 px-3 items-center text-xs font-medium text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-md transition-colors"
            >
              {t('common.getStarted')}
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
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
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-t-2 dark:border-gray-700 animate-fade-in max-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="flex flex-col gap-2 px-2">
              {/* Auth buttons for mobile */}
              <div className="flex gap-2 mb-4">
                <Link href="/login" className="flex-1 text-center px-4 py-2 text-sm text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-2 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  {t('common.logIn')}
                </Link>
                <Link href="/signup" className="flex-1 text-center px-4 py-2 text-sm text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100">
                  {t('common.getStarted')}
                </Link>
              </div>
              <div className="px-3 py-2 text-xs font-medium text-gray-400 uppercase">{t('nav.products')}</div>
              <Link href="/products/agent" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">{t('products.agent.title')}</Link>
              <Link href="/products/database" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">{t('products.database.title')}</Link>
              <Link href="/products/publish" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">{t('products.publish.title')}</Link>
              <Link href="/products/security" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">{t('products.security.title')}</Link>
              <Link href="/products/integrations" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">{t('products.integrations.title')}</Link>
              <Link href="/products/mobile" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">{t('products.mobile.title')}</Link>
              <div className="border-t border-gray-200 dark:border-t-2 dark:border-gray-700 my-2"></div>
              <div className="px-3 py-2 text-xs font-medium text-gray-400 uppercase">{t('solutions.title')}</div>
              <Link href="/enterprise" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">
                <span className="font-medium">{t('nav.enterprise')}</span>
                <span className="block text-xs text-gray-400">{t('solutions.enterprise.description')}</span>
              </Link>
              <div className="px-3 py-1 text-xs font-medium text-gray-400 uppercase">{t('useCases.title')}</div>
              <Link href="/usecases/business-apps" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">{t('useCases.businessApps.title')}</Link>
              <Link href="/usecases/mobile-apps" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">{t('useCases.mobileApps.title')}</Link>
              <Link href="/usecases/rapid-prototyping" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">{t('useCases.rapidPrototyping.title')}</Link>
              <div className="border-t border-gray-200 dark:border-t-2 dark:border-gray-700 my-2"></div>
              <div className="px-3 py-2 text-xs font-medium text-gray-400 uppercase">{t('footer.resources')}</div>
              <Link href="/docs" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">{t('docs.title')}</Link>
              <Link href="/gallery" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">{t('community.showcase')}</Link>
              <Link href="/blog" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">{t('nav.blog')}</Link>
              <Link href="/changelog" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">{t('changelogPage.title')}</Link>
              <div className="border-t border-gray-200 dark:border-t-2 dark:border-gray-700 my-2"></div>
              <Link href="/pricing" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg">{t('nav.pricing')}</Link>
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
