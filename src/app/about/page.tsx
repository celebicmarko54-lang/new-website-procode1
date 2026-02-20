'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useTranslation } from '@/context/LanguageContext';

export default function AboutPage() {
  const { t } = useTranslation();

  const stats = [
    { number: '100K+', label: t('aboutPage.stats.developers') },
    { number: '500K+', label: t('aboutPage.stats.appsBuilt') },
    { number: '50+', label: t('aboutPage.stats.countries') },
    { number: '99.9%', label: t('aboutPage.stats.uptime') },
  ];


  const values = [
    { 
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      title: t('aboutPage.values.innovationFirst.title'), 
      description: t('aboutPage.values.innovationFirst.description')
    },
    { 
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      title: t('aboutPage.values.developerFocused.title'), 
      description: t('aboutPage.values.developerFocused.description')
    },
    { 
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
      title: t('aboutPage.values.simplicityMatters.title'), 
      description: t('aboutPage.values.simplicityMatters.description')
    },
    { 
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: t('aboutPage.values.quality.title'), 
      description: t('aboutPage.values.quality.description')
    },
    { 
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
      title: t('aboutPage.values.transparency.title'), 
      description: t('aboutPage.values.transparency.description')
    },
    { 
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
      title: t('aboutPage.values.communityDriven.title'), 
      description: t('aboutPage.values.communityDriven.description')
    },
  ];

  const milestones = [
    { year: t('aboutPage.journey.milestone1.year'), title: t('aboutPage.journey.milestone1.title'), description: t('aboutPage.journey.milestone1.description') },
    { year: t('aboutPage.journey.milestone2.year'), title: t('aboutPage.journey.milestone2.title'), description: t('aboutPage.journey.milestone2.description') },
    { year: t('aboutPage.journey.milestone3.year'), title: t('aboutPage.journey.milestone3.title'), description: t('aboutPage.journey.milestone3.description') },
    { year: t('aboutPage.journey.milestone4.year'), title: t('aboutPage.journey.milestone4.title'), description: t('aboutPage.journey.milestone4.description') },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#1A1A1A] text-gray-900 dark:text-white transition-colors">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-2 dark:border-gray-800 mb-6">
              <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('aboutPage.badge')}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
              {t('aboutPage.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              {t('aboutPage.subtitle')}
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-200 dark:border-2 dark:border-gray-800 p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Story Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">{t('aboutPage.ourStory.title')}</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>{t('aboutPage.ourStory.p1')}</p>
                <p>{t('aboutPage.ourStory.p2')}</p>
                <p>{t('aboutPage.ourStory.p3')}</p>
                <p>{t('aboutPage.ourStory.p4')}</p>
              </div>
            </div>
            <div className="bg-black dark:bg-white rounded-3xl p-8 md:p-12 text-white dark:text-black">
              <div className="text-6xl mb-6">💡</div>
              <blockquote className="text-2xl md:text-3xl font-medium mb-6">
                {t('aboutPage.ourStory.quote')}
              </blockquote>
              <p className="text-white/70 dark:text-black/70">{t('aboutPage.ourStory.quoteAttribution')}</p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('aboutPage.values.title')}</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('aboutPage.values.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-200 dark:border-2 dark:border-gray-800 p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('aboutPage.journey.title')}</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('aboutPage.journey.subtitle')}
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-200 dark:bg-gray-800 hidden md:block"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-200 dark:border-2 dark:border-gray-800 p-6">
                      <span className="inline-block px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold rounded-full mb-3">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 bg-black dark:bg-white rounded-full z-10 flex-shrink-0"></div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('aboutPage.cta.title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            {t('aboutPage.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/login" className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:opacity-90 transition-all shadow-lg">
              {t('aboutPage.cta.logIn')}
            </Link>
            <Link href="/signup" className="px-8 py-4 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-2 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-full hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
              {t('aboutPage.cta.getStarted')}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
