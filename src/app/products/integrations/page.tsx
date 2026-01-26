'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useTranslation } from '@/context/LanguageContext';

export default function IntegrationsPage() {
  const { t } = useTranslation();
  const integrations = [
    { name: 'OpenAI', category: t('productIntegrations.categories.ai'), icon: '🤖', description: t('productIntegrations.integrations.openai') },
    { name: 'Stripe', category: t('productIntegrations.categories.payments'), icon: '💳', description: t('productIntegrations.integrations.stripe') },
    { name: 'Twilio', category: t('productIntegrations.categories.communication'), icon: '📱', description: t('productIntegrations.integrations.twilio') },
    { name: 'SendGrid', category: t('productIntegrations.categories.email'), icon: '📧', description: t('productIntegrations.integrations.sendgrid') },
    { name: 'Cloudflare', category: t('productIntegrations.categories.cdn'), icon: '☁️', description: t('productIntegrations.integrations.cloudflare') },
    { name: 'GitHub', category: t('productIntegrations.categories.versionControl'), icon: '🐙', description: t('productIntegrations.integrations.github') },
    { name: 'Slack', category: t('productIntegrations.categories.communication'), icon: '💬', description: t('productIntegrations.integrations.slack') },
    { name: 'Google Cloud', category: t('productIntegrations.categories.cloud'), icon: '🌐', description: t('productIntegrations.integrations.googleCloud') },
    { name: 'AWS', category: t('productIntegrations.categories.cloud'), icon: '☁️', description: t('productIntegrations.integrations.aws') },
    { name: 'Anthropic', category: t('productIntegrations.categories.ai'), icon: '🧠', description: t('productIntegrations.integrations.anthropic') },
    { name: 'Vercel', category: t('productIntegrations.categories.deployment'), icon: '▲', description: t('productIntegrations.integrations.vercel') },
    { name: 'Supabase', category: t('productIntegrations.categories.database'), icon: '⚡', description: t('productIntegrations.integrations.supabase') },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-black text-gray-900 dark:text-white transition-colors">
      <Header />
      
      <main className="pt-24 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-black border border-gray-200 dark:border-gray-800 mb-6">
              <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('productIntegrations.badge')}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
              {t('productIntegrations.title')} <span className="text-gray-500 dark:text-gray-400">{t('productIntegrations.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              {t('productIntegrations.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/signup" className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:opacity-90 transition-all shadow-xl shadow-gray-900/20 dark:shadow-none">
                {t('common.startBuilding')}
              </Link>
              <Link href="/docs" className="px-8 py-4 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] text-gray-700 dark:text-gray-300 font-medium rounded-full hover:bg-gray-50 dark:hover:bg-[#151515] transition-colors">
                {t('productIntegrations.browseAll')}
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">{t('productIntegrations.popularIntegrations')}</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {integrations.map((integration, i) => (
              <div key={i} className="p-4 bg-white dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{integration.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{integration.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{integration.category}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{integration.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">{t('productIntegrations.howItWorks.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: t('productIntegrations.howItWorks.step1.title'), desc: t('productIntegrations.howItWorks.step1.description') },
              { step: '2', title: t('productIntegrations.howItWorks.step2.title'), desc: t('productIntegrations.howItWorks.step2.description') },
              { step: '3', title: t('productIntegrations.howItWorks.step3.title'), desc: t('productIntegrations.howItWorks.step3.description') }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{t('productIntegrations.cta.title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">{t('productIntegrations.cta.subtitle')}</p>
          <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:opacity-90 transition-all shadow-xl shadow-gray-900/20 dark:shadow-none text-lg">
            {t('productIntegrations.getStarted')}
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
