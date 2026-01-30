'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useTranslation } from '@/context/LanguageContext';

export default function AgentPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-black text-gray-900 dark:text-white transition-colors">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-black border border-gray-200 dark:border-gray-800 mb-6">
              <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('productAgent.badge')}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
              {t('productAgent.title')} <span className="text-gray-500 dark:text-gray-400">{t('productAgent.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              {t('productAgent.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/signup" className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:opacity-90 transition-all shadow-xl shadow-gray-900/20 dark:shadow-none">
                {t('productAgent.startBuilding')}
              </Link>
              <Link href="/report" className="px-8 py-4 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] text-gray-700 dark:text-gray-300 font-medium rounded-full hover:bg-gray-50 dark:hover:bg-[#151515] transition-colors">
                {t('common.viewDocs')}
              </Link>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-[#0a0a0a] rounded-2xl p-8 shadow-2xl border border-gray-800">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="space-y-4 font-mono text-sm">
              <div className="flex gap-3">
                <span className="text-gray-400">{t('productAgent.demo.you')}:</span>
                <span className="text-gray-300">{t('productAgent.demo.prompt')}</span>
              </div>
              <div className="flex gap-3">
                <span className="text-green-400">{t('productAgent.demo.agent')}:</span>
                <span className="text-gray-300">{t('productAgent.demo.response')}</span>
              </div>
              <div className="mt-4 p-4 bg-black rounded-lg border border-gray-800">
                <span className="text-gray-500">// dashboard.tsx - {t('productAgent.demo.writing')}</span>
                <div className="mt-2 flex items-center gap-2">
                  <div className="w-2 h-4 bg-gray-400 animate-pulse"></div>
                  <span className="text-gray-400">{t('productAgent.demo.creating')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">{t('productAgent.howItWorks')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
              <div className="w-12 h-12 bg-gray-100 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{t('productAgent.step1.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('productAgent.step1.description')}
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
              <div className="w-12 h-12 bg-gray-100 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{t('productAgent.step2.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('productAgent.step2.description')}
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
              <div className="w-12 h-12 bg-gray-100 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{t('productAgent.step3.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('productAgent.step3.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{t('productAgent.autonomous.title')}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                {t('productAgent.autonomous.description')}
              </p>
              <ul className="space-y-3">
                {[t('productAgent.autonomous.item1'), t('productAgent.autonomous.item2'), t('productAgent.autonomous.item3'), t('productAgent.autonomous.item4'), t('productAgent.autonomous.item5')].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="bg-white dark:bg-black rounded-xl p-4 border border-gray-200 dark:border-gray-800">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t('productAgent.stats.filesCreated')}</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">24</div>
                </div>
                <div className="bg-white dark:bg-black rounded-xl p-4 border border-gray-200 dark:border-gray-800">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t('productAgent.stats.linesOfCode')}</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">3,847</div>
                </div>
                <div className="bg-white dark:bg-black rounded-xl p-4 border border-gray-200 dark:border-gray-800">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t('productAgent.stats.buildTime')}</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">4m 32s</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{t('productAgent.cta.title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            {t('productAgent.cta.subtitle')}
          </p>
          <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:opacity-90 transition-all shadow-xl shadow-gray-900/20 dark:shadow-none text-lg">
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
