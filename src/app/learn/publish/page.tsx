'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useTranslation } from '@/context/LanguageContext';

export default function LearnPublishPage() {
  const { t, language } = useTranslation();

  const stepIcons = [
    <svg key="s0" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>,
    <svg key="s1" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>,
    <svg key="s2" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>,
    <svg key="s3" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>,
  ];

  const stepNumbers = ['01', '02', '03', '04'];
  const featureIcons = ['🚀', '🌐', '🔒', '⚡', '↩️', '📊'];

  return (
    <div key={language.code} className="min-h-screen bg-[#f8fafc] dark:bg-[#1A1A1A] text-gray-900 dark:text-white transition-colors">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-2 dark:border-gray-800 mb-6">
              <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('learnPublishPage.badge')}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
              {t('learnPublishPage.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              {t('learnPublishPage.subtitle')}
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('learnPublishPage.steps.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('learnPublishPage.steps.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[0, 1, 2, 3].map((index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-200 dark:border-2 dark:border-gray-800 p-8 hover:border-gray-300 dark:hover:border-gray-700 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gray-900 dark:bg-white rounded-2xl flex items-center justify-center text-white dark:text-gray-900">
                      {stepIcons[index]}
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-gray-400 dark:text-gray-600">STEP {stepNumbers[index]}</span>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-1 mb-3">{t(`learnPublishPage.steps.items.${index}.title`)}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{t(`learnPublishPage.steps.items.${index}.description`)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('learnPublishPage.features.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('learnPublishPage.features.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-200 dark:border-2 dark:border-gray-800 p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-all"
              >
                <div className="text-4xl mb-4">{featureIcons[index]}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t(`learnPublishPage.features.items.${index}.title`)}</h3>
                <p className="text-gray-600 dark:text-gray-400">{t(`learnPublishPage.features.items.${index}.description`)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gray-900 dark:bg-white rounded-3xl p-8 md:p-12 text-white dark:text-gray-900">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{t('learnPublishPage.tips.title')}</h2>
            <ul className="space-y-4">
              {[0, 1, 2, 3].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 dark:text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90 dark:text-gray-700"><strong className="text-white dark:text-gray-900">{t(`learnPublishPage.tips.items.${i}.bold`)}</strong> {t(`learnPublishPage.tips.items.${i}.text`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('learnPublishPage.cta.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            {t('learnPublishPage.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/signup" 
              className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg"
            >
              {t('learnPublishPage.cta.startButton')}
            </Link>
            <Link 
              href="/docs" 
              className="px-8 py-4 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-2 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              {t('learnPublishPage.cta.docsButton')}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
