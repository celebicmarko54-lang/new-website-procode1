'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useTranslation } from '@/context/LanguageContext';
import { getTranslationData } from '@/translations/helpers';

export default function RapidPrototypingPage() {
  const { t, language} = useTranslation();

  const benefitsList = (getTranslationData(language.code, 'useCases.rapidPrototyping.benefitsList') as Array<{title: string; description: string}>) || [
    { title: 'Save Money', description: 'Validate ideas before investing in full development' },
    { title: 'Save Time', description: 'Get feedback in hours, not weeks' },
    { title: 'Reduce Risk', description: 'Fail fast and pivot before it costs you' },
    { title: 'Align Teams', description: 'Show, don\'t tell. Get everyone on the same page' },
  ];

  const traditionalSteps = (getTranslationData(language.code, 'useCasesRapidPrototyping.traditional.steps') as Array<{step: string; time: string}>) || [
    { step: 'Wireframes', time: '2-3 days' },
    { step: 'Design mockups', time: '1-2 weeks' },
    { step: 'Developer handoff', time: '1-2 days' },
    { step: 'Build prototype', time: '2-4 weeks' },
    { step: 'Testing & iteration', time: '1-2 weeks' },
  ];

  const appnodeSteps = (getTranslationData(language.code, 'useCasesRapidPrototyping.appnode.steps') as Array<{step: string; time: string}>) || [
    { step: 'Describe your idea', time: '5 minutes' },
    { step: 'AI generates prototype', time: '2-10 minutes' },
    { step: 'Customize & refine', time: '30-60 minutes' },
    { step: 'Share with stakeholders', time: '1 minute' },
    { step: 'Iterate based on feedback', time: '15-30 minutes' },
  ];

  const benefitIcons = [
    <svg key="0" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    <svg key="1" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    <svg key="2" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    <svg key="3" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  ];

  const benefits = benefitsList.map((b, i) => ({
    icon: benefitIcons[i],
    title: b.title,
    description: b.description,
  }));
  
  return (
    <div key={language.code} className="min-h-screen bg-[#f8fafc] dark:bg-[#1A1A1A] text-gray-900 dark:text-white">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-[#1A1A1A] border border-gray-200 dark:border-2 dark:border-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {t('useCasesRapidPrototyping.badge')}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
              {t('useCasesRapidPrototyping.titleStart')} {t('useCasesRapidPrototyping.titleHighlight')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              {t('useCasesRapidPrototyping.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/signup" className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg">
                {t('useCasesRapidPrototyping.startPrototyping')}
              </Link>
              <Link href="/gallery" className="px-8 py-4 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-2 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                {t('useCasesRapidPrototyping.seeExamples')}
              </Link>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">{t('useCasesRapidPrototyping.comparisonTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-100 dark:bg-[#1A1A1A] rounded-xl border border-gray-200 dark:border-2 dark:border-gray-800 opacity-70">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-semibold text-gray-500">{t('useCasesRapidPrototyping.traditional.title')}</h3>
              </div>
              <div className="space-y-3">
                {traditionalSteps.map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-b-2 dark:border-gray-700">
                    <span>{item.step}</span>
                    <span className="text-sm text-gray-500">{item.time}</span>
                  </div>
                ))}
                <div className="pt-2 flex items-center justify-between font-semibold">
                  <span>{t('useCasesRapidPrototyping.totalTime')}</span>
                  <span className="text-red-500">{t('useCasesRapidPrototyping.traditional.totalTime')}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white dark:bg-[#1A1A1A] rounded-xl border-2 border-gray-900 dark:border-white">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="font-semibold text-gray-900 dark:text-white">{t('useCasesRapidPrototyping.appnode.title')}</h3>
              </div>
              <div className="space-y-3">
                {appnodeSteps.map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-b-2 dark:border-gray-800">
                    <span>{item.step}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{item.time}</span>
                  </div>
                ))}
                <div className="pt-2 flex items-center justify-between font-semibold">
                  <span>{t('useCasesRapidPrototyping.totalTime')}</span>
                  <span className="text-green-500">{t('useCasesRapidPrototyping.appnode.totalTime')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">{t('useCasesRapidPrototyping.benefitsTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, i) => (
              <div key={i} className="text-center p-6 bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-200 dark:border-2 dark:border-gray-800">
                <div className="w-14 h-14 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-2 dark:border-gray-800 rounded-xl flex items-center justify-center mx-auto mb-4 text-gray-600 dark:text-gray-400">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="p-8 bg-white dark:bg-[#1A1A1A] rounded-3xl border border-gray-200 dark:border-2 dark:border-gray-800">
            <h2 className="text-3xl font-bold mb-4">{t('useCasesRapidPrototyping.ctaTitle')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              {t('useCasesRapidPrototyping.ctaSubtitle')}
            </p>
            <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg text-lg">
              {t('common.getStarted')}
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
