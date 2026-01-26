'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from '@/context/LanguageContext';

const docsSections = [
  {
    title: 'Getting Started',
    items: [
      { name: 'Introduction', href: '/docs', active: true },
      { name: 'Quickstart Guides', href: '/docs/quickstart' },
      { name: 'Create with AI', href: '/docs/create-with-ai' },
      { name: 'Build from Scratch', href: '/docs/build-from-scratch' },
      { name: 'Import from GitHub', href: '/docs/import-github' },
    ],
  },
  {
    title: 'Trust & Safety',
    items: [
      { name: 'Content Policy', href: '/docs/content-policy' },
      { name: 'Community Guidelines', href: '/docs/community-guidelines' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  },
  {
    title: 'Security',
    items: [
      { name: 'Security Overview', href: '/security' },
      { name: 'Data Protection', href: '/docs/data-protection' },
      { name: 'Vulnerability Disclosure', href: '/security-report' },
    ],
  },
  {
    title: 'Tutorials',
    items: [
      { name: 'Building Your First App', href: '/docs/tutorials/first-app' },
      { name: 'Working with APIs', href: '/docs/tutorials/apis' },
      { name: 'Database Integration', href: '/docs/tutorials/databases' },
      { name: 'Authentication', href: '/docs/tutorials/auth' },
    ],
  },
  {
    title: 'Teams & Enterprise',
    items: [
      { name: 'Team Management', href: '/docs/teams' },
      { name: 'SSO Setup', href: '/docs/sso' },
      { name: 'Enterprise Features', href: '/enterprise' },
    ],
  },
  {
    title: 'Changelog',
    items: [
      { name: 'Latest Updates', href: '/changelog' },
    ],
  },
];

export default function DocsPage() {
  const { t } = useTranslation();
  const [expandedSections, setExpandedSections] = useState<string[]>(['Getting Started']);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSection = (title: string) => {
    setExpandedSections(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      
      <div className="pt-14 flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-72 border-r border-gray-200 dark:border-gray-800 h-[calc(100vh-56px)] sticky top-14 overflow-y-auto bg-white dark:bg-black">
          <div className="p-6">
            {/* Search */}
            <div className="relative mb-6">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder={t('docsPage.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">⌘K</span>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              {docsSections.map((section) => (
                <div key={section.title}>
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="flex items-center justify-between w-full px-3 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <span>{section.title}</span>
                    <svg 
                      className={`w-4 h-4 text-gray-400 dark:text-gray-500 transition-transform ${expandedSections.includes(section.title) ? 'rotate-90' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  {expandedSections.includes(section.title) && (
                    <div className="mt-1 ml-3 space-y-1">
                      {section.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                            item.active 
                              ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium' 
                              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
            <span className="text-gray-700 dark:text-gray-300">Getting Started</span>
            <span>/</span>
            <span>Introduction</span>
          </div>

          {/* Content */}
          <article className="prose prose-gray dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t('docsPage.welcomeTitle')}</h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              {t('docsPage.welcomeDescription')}
            </p>

            {/* What You Can Build */}
            <div className="bg-gray-50 dark:bg-[#0a0a0a] rounded-xl p-6 mb-8 border border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('docsPage.whatYouCanBuild')}</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 dark:text-gray-500">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Full-stack web applications with databases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 dark:text-gray-500">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Landing pages and marketing websites</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 dark:text-gray-500">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Dashboards and admin panels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 dark:text-gray-500">•</span>
                  <span className="text-gray-700 dark:text-gray-300">E-commerce stores and portfolios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 dark:text-gray-500">•</span>
                  <span className="text-gray-700 dark:text-gray-300">SaaS products and internal tools</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">{t('docsPage.howItWorks')}</h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              {t('docsPage.howItWorksDescription')}
            </p>

            {/* Steps */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Describe</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Tell AI what you want to build</p>
              </div>
              <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Generate</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">AI writes production-ready code</p>
              </div>
              <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Preview</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">See your app live instantly</p>
              </div>
              <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Deploy</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">One-click deployment to production</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">{t('docsPage.gettingStarted')}</h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('docsPage.gettingStartedDescription')}
            </p>

            <ol className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center text-sm font-medium">1</span>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Sign up for free</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Create your account in seconds. No credit card required.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center text-sm font-medium">2</span>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Describe your app</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Tell us what you want to build in plain English.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center text-sm font-medium">3</span>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Watch it build</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">See your app come to life in real-time.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center text-sm font-medium">4</span>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Deploy with one click</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Share your app with the world instantly.</p>
                </div>
              </li>
            </ol>

            <div className="flex items-center gap-4 mt-12">
              <Link 
                href="/signup"
                className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                {t('docsPage.startBuildingFree')}
              </Link>
              <Link 
                href="/docs/quickstart"
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                {t('docsPage.viewQuickstartGuide')}
              </Link>
            </div>
          </article>

          {/* Copy page button */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <button className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              {t('docsPage.copyPage')}
            </button>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
