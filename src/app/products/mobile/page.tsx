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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium mb-6">
              <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              {t('productMobile.badge')}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
              {t('productMobile.title')} <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#ee5a24]">{t('productMobile.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              {t('productMobile.subtitle')}
            </p>
            {/* App Store Badges - Coming Soon */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
              {/* App Store Badge */}
              <div className="relative group cursor-not-allowed">
                <div className="flex items-center gap-3 px-6 py-3 bg-black dark:bg-white rounded-xl border border-gray-700 dark:border-gray-300 opacity-80">
                  <svg className="w-8 h-8 text-white dark:text-black" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] text-gray-300 dark:text-gray-600 uppercase tracking-wide">Coming Soon on</div>
                    <div className="text-lg font-semibold text-white dark:text-black -mt-1">App Store</div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-emerald-500 text-white text-xs font-bold rounded-full">
                  SOON
                </div>
              </div>
              
              {/* Google Play Badge */}
              <div className="relative group cursor-not-allowed">
                <div className="flex items-center gap-3 px-6 py-3 bg-black dark:bg-white rounded-xl border border-gray-700 dark:border-gray-300 opacity-80">
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z"/>
                    <path fill="#FBBC04" d="M16.247 9.545L5.736 3.476 14.282 12l-14.282 12L5.736 3.476z" transform="rotate(180 9.991 12)"/>
                    <path fill="#4285F4" d="M20.827 10.173l-4.58-2.628-3.455 4.455 3.455 4.455 4.58-2.628a1.006 1.006 0 0 0 0-1.654z"/>
                    <path fill="#34A853" d="M3.609 22.186L14.282 12l2.545 2.917-11.11 6.378a.996.996 0 0 1-.108.891z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] text-gray-300 dark:text-gray-600 uppercase tracking-wide">Coming Soon on</div>
                    <div className="text-lg font-semibold text-white dark:text-black -mt-1">Google Play</div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-emerald-500 text-white text-xs font-bold rounded-full">
                  SOON
                </div>
              </div>
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">{t('productMobile.featuresTitle')}</h2>
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
              <div key={i} className="p-6 bg-white dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl flex items-center justify-center mb-4 text-gray-600 dark:text-gray-400">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{t('productMobile.cta.title')}</h2>
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
