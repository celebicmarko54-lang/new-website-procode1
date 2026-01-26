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
              <Link href="#" className="px-6 py-3 bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 text-white font-medium rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                {t('productMobile.appStore')}
              </Link>
              <Link href="#" className="px-6 py-3 bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 text-white font-medium rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                {t('productMobile.playStore')}
              </Link>
            </div>
          </div>
        </section>

        {/* Phone Mockup */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-72 h-[580px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-gray-800 rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl"></div>
                  
                  {/* Screen Content */}
                  <div className="pt-8 px-4 h-full bg-[#f8fafc] dark:bg-black">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">my-app</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-gray-500">Live</span>
                      </div>
                    </div>
                    
                    {/* Code Editor */}
                    <div className="bg-gray-900 rounded-lg p-3 text-xs font-mono mb-4">
                      <div className="text-purple-400">function</div>
                      <div className="text-cyan-400 ml-2">greet(name) {'{'}</div>
                      <div className="text-gray-400 ml-4">return `Hello, ${'{name}'}!`</div>
                      <div className="text-cyan-400 ml-2">{'}'}</div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button className="py-2 bg-cyan-500 text-white rounded-lg text-xs font-medium">
                        Run
                      </button>
                      <button className="py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg text-xs font-medium">
                        Deploy
                      </button>
                    </div>
                    
                    {/* Output */}
                    <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                      <div className="text-xs text-gray-500 mb-1">Output</div>
                      <div className="text-sm text-green-600 dark:text-green-400">Hello, World!</div>
                    </div>
                  </div>
                </div>
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
                icon: '✏️',
                title: t('productMobile.features.codeEditor.title'),
                description: t('productMobile.features.codeEditor.description')
              },
              {
                icon: '🚀',
                title: t('productMobile.features.oneTapDeploy.title'),
                description: t('productMobile.features.oneTapDeploy.description')
              },
              {
                icon: '🔄',
                title: t('productMobile.features.realTimeSync.title'),
                description: t('productMobile.features.realTimeSync.description')
              },
              {
                icon: '🤖',
                title: t('productMobile.features.aiAssistant.title'),
                description: t('productMobile.features.aiAssistant.description')
              },
              {
                icon: '📊',
                title: t('productMobile.features.liveAnalytics.title'),
                description: t('productMobile.features.liveAnalytics.description')
              },
              {
                icon: '👥',
                title: t('productMobile.features.teamCollaboration.title'),
                description: t('productMobile.features.teamCollaboration.description')
              }
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                <div className="text-3xl mb-4">{feature.icon}</div>
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
            <Link href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 text-white font-medium rounded-lg transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              {t('productMobile.downloadIOS')}
            </Link>
            <Link href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 text-white font-medium rounded-lg transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              {t('productMobile.downloadAndroid')}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
