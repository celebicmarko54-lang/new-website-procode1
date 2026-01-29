'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useTranslation } from '@/context/LanguageContext';

export default function MobilePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-black text-gray-900 dark:text-white">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              {t('productMobile.badge')}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              {t('productMobile.title')} <span className="text-cyan-500">{t('productMobile.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              {t('productMobile.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className="px-8 py-4 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-medium rounded-lg text-lg">
                📱 Coming Soon
              </span>
            </div>
          </div>
        </section>

        {/* Coming Soon Explanation */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white dark:bg-[#0a0a0a] rounded-2xl border border-gray-200 dark:border-gray-800 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Mobile Apps Coming Soon</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Our mobile apps are currently in development. In the meantime, our users can access AppNode from any device - desktop, tablet, or phone - through the browser and instantly preview how their applications look on different screen sizes.
            </p>
            
            {/* Device Preview Mockups */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
              {/* Tablet Mockup */}
              <div className="relative">
                <div className="w-64 h-[380px] bg-gray-900 rounded-[2rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-[#f8fafc] dark:bg-gray-800 rounded-[1.5rem] overflow-hidden relative">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                    <div className="pt-6 px-3 h-full">
                      <div className="flex items-center justify-between mb-3">
                        <div className="h-4 w-16 bg-gray-300 dark:bg-gray-600 rounded"></div>
                        <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                      </div>
                      <div className="h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl mb-3"></div>
                      <div className="space-y-2">
                        <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                        <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                        <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 font-medium">Tablet Preview</p>
              </div>
              
              {/* Phone Mockup */}
              <div className="relative">
                <div className="w-48 h-[380px] bg-gray-900 rounded-[2.5rem] p-2.5 shadow-2xl">
                  <div className="w-full h-full bg-[#f8fafc] dark:bg-gray-800 rounded-[2rem] overflow-hidden relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-b-xl"></div>
                    <div className="pt-8 px-3 h-full">
                      <div className="flex items-center justify-between mb-3">
                        <div className="h-3 w-12 bg-gray-300 dark:bg-gray-600 rounded"></div>
                        <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                      </div>
                      <div className="h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg mb-3"></div>
                      <div className="space-y-2">
                        <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                        <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                        <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 font-medium">Phone Preview</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">{t('productMobile.featuresTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                ),
                gradient: 'from-violet-500 to-purple-600',
                title: t('productMobile.features.codeEditor.title'),
                description: t('productMobile.features.codeEditor.description')
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                gradient: 'from-cyan-500 to-blue-600',
                title: t('productMobile.features.oneTapDeploy.title'),
                description: t('productMobile.features.oneTapDeploy.description')
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
                gradient: 'from-emerald-500 to-teal-600',
                title: t('productMobile.features.realTimeSync.title'),
                description: t('productMobile.features.realTimeSync.description')
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                gradient: 'from-pink-500 to-rose-600',
                title: t('productMobile.features.aiAssistant.title'),
                description: t('productMobile.features.aiAssistant.description')
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                gradient: 'from-orange-500 to-amber-600',
                title: t('productMobile.features.liveAnalytics.title'),
                description: t('productMobile.features.liveAnalytics.description')
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                gradient: 'from-indigo-500 to-blue-600',
                title: t('productMobile.features.teamCollaboration.title'),
                description: t('productMobile.features.teamCollaboration.description')
              }
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 text-white shadow-lg`}>{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('productMobile.cta.title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            {t('productMobile.cta.subtitle')}
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/signup" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 text-white font-medium rounded-lg transition-colors">
              Try AppNode Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
