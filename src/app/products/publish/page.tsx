'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useTranslation } from '@/context/LanguageContext';

export default function PublishPage() {
  const { t, language} = useTranslation();

  const features = [
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      title: t('productPublish.features.oneClick.title'), 
      description: t('productPublish.features.oneClick.description')
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: t('productPublish.features.customDomains.title'), 
      description: t('productPublish.features.customDomains.description')
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: t('productPublish.features.ssl.title'), 
      description: t('productPublish.features.ssl.description')
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: t('productPublish.features.cdn.title'), 
      description: t('productPublish.features.cdn.description')
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: t('productPublish.features.analytics.title'), 
      description: t('productPublish.features.analytics.description')
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: t('productPublish.features.rollbacks.title'), 
      description: t('productPublish.features.rollbacks.description')
    }
  ];

  return (
    <div key={language.code} className="min-h-screen bg-[#f8fafc] dark:bg-[#1A1A1A] text-gray-900 dark:text-white transition-colors">
      <Header />
      <main className="pt-24 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-[#1A1A1A] border border-gray-200 dark:border-2 dark:border-gray-800 mb-6">
              <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('productPublish.badge')}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
              {t('productPublish.titleHighlight')} {t('productPublish.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              {t('productPublish.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/signup" className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg">{t('productPublish.deployNow')}</Link>
              <Link href="/learn/publish" className="px-8 py-4 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-2 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">{t('common.learnMore')}</Link>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">{t('productPublish.featuresTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="p-6 bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-200 dark:border-2 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all hover:shadow-lg group">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-2 dark:border-gray-800 rounded-xl flex items-center justify-center mb-4 text-gray-600 dark:text-gray-400 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="p-8 bg-white dark:bg-[#1A1A1A] rounded-3xl border border-gray-200 dark:border-2 dark:border-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{t('productPublish.cta.title')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">{t('productPublish.cta.subtitle')}</p>
            <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg text-lg">
              {t('productPublish.startDeploying')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
