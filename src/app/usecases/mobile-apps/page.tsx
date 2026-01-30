'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useTranslation } from '@/context/LanguageContext';

export default function MobileAppsPage() {
  const { t } = useTranslation();

  const features = [
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      titleKey: 'useCasesMobileApps.features.nativePerformance.title',
      descriptionKey: 'useCasesMobileApps.features.nativePerformance.description',
      gradient: 'from-cyan-500 to-blue-600'
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      titleKey: 'useCasesMobileApps.features.pushNotifications.title',
      descriptionKey: 'useCasesMobileApps.features.pushNotifications.description',
      gradient: 'from-purple-500 to-pink-600'
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      titleKey: 'useCasesMobileApps.features.locationServices.title',
      descriptionKey: 'useCasesMobileApps.features.locationServices.description',
      gradient: 'from-green-500 to-emerald-600'
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      titleKey: 'useCasesMobileApps.features.cameraMedia.title',
      descriptionKey: 'useCasesMobileApps.features.cameraMedia.description',
      gradient: 'from-orange-500 to-red-600'
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      titleKey: 'useCasesMobileApps.features.offlineSupport.title',
      descriptionKey: 'useCasesMobileApps.features.offlineSupport.description',
      gradient: 'from-indigo-500 to-purple-600'
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      titleKey: 'useCasesMobileApps.features.crossPlatform.title',
      descriptionKey: 'useCasesMobileApps.features.crossPlatform.description',
      gradient: 'from-teal-500 to-cyan-600'
    },
  ];
  
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-black text-gray-900 dark:text-white transition-colors">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                {t('useCasesMobileApps.badge')}
                <span className="px-2 py-0.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-xs font-bold animate-pulse">Coming Soon</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
                {t('useCasesMobileApps.titleStart')}{' '}
                <span className="text-gray-900 dark:text-white">
                  {t('useCasesMobileApps.titleHighlight')}
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {t('useCasesMobileApps.subtitle')}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link 
                  href="/signup" 
                  className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-medium rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-xl shadow-gray-900/20 dark:shadow-white/10"
                >
                  {t('common.startBuilding')}
                </Link>
                <Link 
                  href="/gallery" 
                  className="px-8 py-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  {t('useCasesMobileApps.seeExamples')}
                </Link>
              </div>
            </div>
            
            {/* Phone Mockup - Enhanced */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-[3rem] blur-3xl scale-110" />
                
                {/* Phone frame */}
                <div className="relative w-72 h-[580px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border border-gray-700">
                  {/* Screen */}
                  <div className="w-full h-full bg-white dark:bg-gray-800 rounded-[2.5rem] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-gray-900 rounded-b-2xl z-10" />
                    
                    {/* Screen content */}
                    <div className="pt-10 p-5 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded-lg" />
                        <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full" />
                      </div>
                      
                      {/* Hero card */}
                      <div className="h-36 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-5 flex items-end p-4">
                        <div className="text-white">
                          <div className="text-xs opacity-80 mb-1">Welcome back</div>
                          <div className="font-semibold">Dashboard</div>
                        </div>
                      </div>
                      
                      {/* List items */}
                      <div className="space-y-3 flex-1">
                        <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                          <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center">
                            <div className="w-5 h-5 bg-cyan-500 rounded" />
                          </div>
                          <div className="flex-1">
                            <div className="h-3 w-24 bg-gray-300 dark:bg-gray-600 rounded mb-1" />
                            <div className="h-2 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                          <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                            <div className="w-5 h-5 bg-purple-500 rounded" />
                          </div>
                          <div className="flex-1">
                            <div className="h-3 w-20 bg-gray-300 dark:bg-gray-600 rounded mb-1" />
                            <div className="h-2 w-12 bg-gray-200 dark:bg-gray-700 rounded" />
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                          <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                            <div className="w-5 h-5 bg-green-500 rounded" />
                          </div>
                          <div className="flex-1">
                            <div className="h-3 w-28 bg-gray-300 dark:bg-gray-600 rounded mb-1" />
                            <div className="h-2 w-14 bg-gray-200 dark:bg-gray-700 rounded" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Bottom CTA */}
                      <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-medium text-sm">
                        Get Started
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -right-8 top-20 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-xl border border-gray-200 dark:border-gray-700 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">iOS Ready</span>
                  </div>
                </div>
                
                <div className="absolute -left-8 bottom-32 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-xl border border-gray-200 dark:border-gray-700 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Android Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">{t('useCasesMobileApps.featuresTitle')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need to create professional mobile applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className="group p-6 bg-white dark:bg-[#0a0a0a] rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t(feature.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Platform Support */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">One Codebase, All Platforms</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  Build once and deploy to iOS and Android. AppNode generates optimized, native code for each platform automatically.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <span className="font-medium text-gray-700 dark:text-gray-300">iOS</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700">
                    <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.523 15.341c-.5 0-.909.406-.909.909 0 .5.409.909.909.909.5 0 .909-.409.909-.909a.909.909 0 0 0-.909-.909zm-11.046 0c-.5 0-.909.406-.909.909 0 .5.409.909.909.909.5 0 .909-.409.909-.909a.909.909 0 0 0-.909-.909zm11.319-5.659l1.931-3.342a.4.4 0 0 0-.146-.546.4.4 0 0 0-.546.146l-1.956 3.387a11.588 11.588 0 0 0-4.551-.918 11.591 11.591 0 0 0-4.551.918L5.021 5.94a.4.4 0 0 0-.546-.146.4.4 0 0 0-.146.546l1.931 3.342C3.273 11.319 1.364 14.252 1 17.682h22c-.364-3.43-2.273-6.363-5.204-7.999z"/>
                    </svg>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Android</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Web</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-4">
                {/* Mini phone mockups */}
                <div className="w-32 h-56 bg-gray-900 rounded-2xl p-1.5 shadow-xl transform -rotate-6">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl" />
                </div>
                <div className="w-32 h-56 bg-gray-900 rounded-2xl p-1.5 shadow-xl transform rotate-6">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">{t('useCasesMobileApps.ctaTitle')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {t('useCasesMobileApps.ctaSubtitle')}
          </p>
          <Link 
            href="/signup" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-medium rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-xl shadow-gray-900/20 dark:shadow-white/10 text-lg"
          >
            {t('common.getStarted')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
