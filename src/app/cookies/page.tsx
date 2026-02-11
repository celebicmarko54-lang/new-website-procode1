'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from '@/context/LanguageContext';

export default function CookieSettingsPage() {
  const { t } = useTranslation();

  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false,
    personalization: true,
  });

  const handleToggle = (key: keyof typeof preferences) => {
    if (key === 'essential') return; // Essential cookies can't be disabled
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSavePreferences = () => {
    // Save preferences logic here
    alert(t('cookiesPage.saveSuccess'));
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#1A1A1A]">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-block px-4 py-2 bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium mb-4">
              {t('cookiesPage.badge')}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t('cookiesPage.title')}</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('cookiesPage.subtitle')}
            </p>
          </div>

          {/* Cookie Categories */}
          <div className="space-y-6 mb-12">
            {/* Essential Cookies */}
            <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-100 dark:border-2 dark:border-gray-800 p-6 hover:border-gray-300 dark:hover:border-gray-600 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-gray-100 to-gray-100 dark:from-gray-900 dark:to-gray-900 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('cookiesPage.essential.title')}</h3>
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs rounded-full">{t('cookiesPage.required')}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {t('cookiesPage.essential.description')}
                  </p>
                </div>
                <div className="ml-6">
                  <button
                    disabled
                    className="w-14 h-8 bg-gray-900 rounded-full relative cursor-not-allowed opacity-75"
                  >
                    <span className="absolute right-1 top-1 w-6 h-6 bg-white rounded-full shadow-sm" />
                  </button>
                </div>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-100 dark:border-2 dark:border-gray-800 p-6 hover:border-gray-300 dark:hover:border-gray-600 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-gray-100 to-gray-100 dark:from-gray-900 dark:to-gray-900 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('cookiesPage.analytics.title')}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {t('cookiesPage.analytics.description')}
                  </p>
                </div>
                <div className="ml-6">
                  <button
                    onClick={() => handleToggle('analytics')}
                    className={`w-14 h-8 rounded-full relative transition-colors ${
                      preferences.analytics ? 'bg-gray-900' : 'bg-gray-200'
                    }`}
                  >
                    <span 
                      className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-sm transition-all ${
                        preferences.analytics ? 'right-1' : 'left-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-100 dark:border-2 dark:border-gray-800 p-6 hover:border-gray-300 dark:hover:border-gray-600 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-gray-100 to-gray-100 dark:from-gray-900 dark:to-gray-900 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('cookiesPage.marketing.title')}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {t('cookiesPage.marketing.description')}
                  </p>
                </div>
                <div className="ml-6">
                  <button
                    onClick={() => handleToggle('marketing')}
                    className={`w-14 h-8 rounded-full relative transition-colors ${
                      preferences.marketing ? 'bg-gray-900' : 'bg-gray-200'
                    }`}
                  >
                    <span 
                      className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-sm transition-all ${
                        preferences.marketing ? 'right-1' : 'left-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Personalization Cookies */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-2 dark:border-gray-800 p-6 hover:border-gray-300 dark:hover:border-gray-600 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-gray-100 to-gray-100 dark:from-gray-900 dark:to-gray-900 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('cookiesPage.personalization.title')}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {t('cookiesPage.personalization.description')}
                  </p>
                </div>
                <div className="ml-6">
                  <button
                    onClick={() => handleToggle('personalization')}
                    className={`w-14 h-8 rounded-full relative transition-colors ${
                      preferences.personalization ? 'bg-gray-900' : 'bg-gray-200'
                    }`}
                  >
                    <span 
                      className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-sm transition-all ${
                        preferences.personalization ? 'right-1' : 'left-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleSavePreferences}
              className="px-8 py-4 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg"
              style={{ background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)' }}
            >
              {t('cookiesPage.savePreferences')}
            </button>
            <button
              onClick={() => setPreferences({ essential: true, analytics: true, marketing: true, personalization: true })}
              className="px-8 py-4 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-white transition-all"
            >
              {t('cookiesPage.acceptAll')}
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-gray-50 dark:bg-[#1A1A1A] rounded-2xl p-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t('cookiesPage.aboutTitle')}</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              {t('cookiesPage.aboutDescription')}
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {t('cookiesPage.moreInfo')}{' '}
              <a href="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium">{t('cookiesPage.privacyPolicyLink')}</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
