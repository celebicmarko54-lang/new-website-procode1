'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from '@/context/LanguageContext';

export default function ConnectionsPage() {
  const { t, language } = useTranslation();

  const connectionsMeta = [
    { icon: '🔥', categoryKey: 'database', status: 'available' },
    { icon: '💳', categoryKey: 'payments', status: 'available' },
    { icon: '🤖', categoryKey: 'ai', status: 'available' },
    { icon: '▲', categoryKey: 'hosting', status: 'available' },
    { icon: '🐙', categoryKey: 'development', status: 'available' },
    { icon: '✉️', categoryKey: 'communication', status: 'available' },
    { icon: '☁️', categoryKey: 'infrastructure', status: 'available' },
    { icon: '📱', categoryKey: 'communication', status: 'available' },
    { icon: '🔐', categoryKey: 'authentication', status: 'available' },
    { icon: '🔍', categoryKey: 'search', status: 'coming-soon' },
    { icon: '🛍️', categoryKey: 'ecommerce', status: 'coming-soon' },
    { icon: '📝', categoryKey: 'productivity', status: 'coming-soon' },
  ];

  const categoryKeys = ['all', 'database', 'payments', 'ai', 'hosting', 'development', 'communication', 'authentication'];

  return (
    <div key={language.code} className="min-h-screen bg-white dark:bg-[#1A1A1A]">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-gray-50 text-gray-900 rounded-full text-sm font-medium mb-4">
              {t('connectionsPage.badge')}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              {t('connectionsPage.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('connectionsPage.subtitle')}
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categoryKeys.map((catKey) => (
              <button
                key={catKey}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-[#1A1A1A] text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-2 dark:border-gray-800 transition-all"
              >
                {t(`connectionsPage.categories.${catKey}`)}
              </button>
            ))}
          </div>
        </div>

        {/* Connections Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {connectionsMeta.map((meta, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-[#1A1A1A] rounded-xl border border-gray-200 dark:border-2 dark:border-gray-800 p-6 hover:shadow-lg transition-all cursor-pointer group ${
                  meta.status === 'coming-soon' ? 'opacity-75' : 'hover:border-orange-200'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{meta.icon}</span>
                  {meta.status === 'coming-soon' && (
                    <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
                      {t('connectionsPage.comingSoon')}
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-1 group-hover:text-orange-600 transition-colors">
                  {t(`connectionsPage.connections.${index}.name`)}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{t(`connectionsPage.connections.${index}.description`)}</p>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                  {t(`connectionsPage.categories.${meta.categoryKey}`)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Request Integration */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">{t('connectionsPage.requestTitle')}</h2>
            <p className="text-gray-300 mb-6">
              {t('connectionsPage.requestDescription')}
            </p>
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-medium transition-colors">
              {t('connectionsPage.requestButton')}
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
