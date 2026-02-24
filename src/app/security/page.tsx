'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from '@/context/LanguageContext';

export default function SecurityPage() {
  const { t, tArray, language} = useTranslation();

  const securityFeatures = [
    {
      icon: '🔐',
      titleKey: 'securityPage.features.0.title',
      descKey: 'securityPage.features.0.description',
    },
    {
      icon: '🛡️',
      titleKey: 'securityPage.features.1.title',
      descKey: 'securityPage.features.1.description',
    },
    {
      icon: '🔒',
      titleKey: 'securityPage.features.2.title',
      descKey: 'securityPage.features.2.description',
    },
    {
      icon: '🌐',
      titleKey: 'securityPage.features.3.title',
      descKey: 'securityPage.features.3.description',
    },
    {
      icon: '📝',
      titleKey: 'securityPage.features.4.title',
      descKey: 'securityPage.features.4.description',
    },
    {
      icon: '🔍',
      titleKey: 'securityPage.features.5.title',
      descKey: 'securityPage.features.5.description',
    },
    {
      icon: '💾',
      titleKey: 'securityPage.features.6.title',
      descKey: 'securityPage.features.6.description',
    },
    {
      icon: '🚨',
      titleKey: 'securityPage.features.7.title',
      descKey: 'securityPage.features.7.description',
    },
  ];

  const certifications = [
    { nameKey: 'securityPage.certifications.0.name', icon: '✓', descKey: 'securityPage.certifications.0.description' },
    { nameKey: 'securityPage.certifications.1.name', icon: '✓', descKey: 'securityPage.certifications.1.description' },
    { nameKey: 'securityPage.certifications.2.name', icon: '✓', descKey: 'securityPage.certifications.2.description' },
    { nameKey: 'securityPage.certifications.3.name', icon: '✓', descKey: 'securityPage.certifications.3.description' },
  ];

  const practices = [
    {
      titleKey: 'securityPage.practices.0.title',
      itemsKey: 'securityPage.practices.0.items',
    },
    {
      titleKey: 'securityPage.practices.1.title',
      itemsKey: 'securityPage.practices.1.items',
    },
    {
      titleKey: 'securityPage.practices.2.title',
      itemsKey: 'securityPage.practices.2.items',
    },
  ];

  return (
    <div key={language.code} className="min-h-screen bg-[#f8fafc] dark:bg-[#1A1A1A] transition-colors">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-2 dark:border-gray-800 rounded-full mb-6">
              <span className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full"></span>
              <span className="font-medium">{t('securityPage.badge')}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="text-gray-900 dark:text-white">{t('securityPage.titleHighlight')}</span> {t('securityPage.titleSuffix')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('securityPage.subtitle')}
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white dark:bg-[#1A1A1A] rounded-xl border border-gray-200 dark:border-2 dark:border-gray-800 p-6 text-center hover:shadow-lg dark:hover:border-gray-700 transition-all">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-900 dark:text-white text-xl font-bold">{cert.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t(cert.nameKey)}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{t(cert.descKey)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Features */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">{t('securityPage.featuresTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-[#1A1A1A] rounded-xl border border-gray-200 dark:border-2 dark:border-gray-800 p-6 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700 transition-all">
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t(feature.titleKey)}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t(feature.descKey)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Practices */}
        <div className="bg-black dark:bg-[#1A1A1A] border-y border-gray-800 py-16 mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">{t('securityPage.practicesTitle')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {practices.map((practice, index) => (
                <div key={index} className="bg-[#0a0a0a] dark:bg-[#1A1A1A] backdrop-blur rounded-xl p-6 border border-gray-800">
                  <h3 className="font-semibold text-white text-lg mb-4">{t(practice.titleKey)}</h3>
                  <ul className="space-y-3">
                    {tArray(practice.itemsKey).map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                        <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bug Bounty */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gray-900 dark:bg-[#1A1A1A] rounded-2xl p-8 text-white border border-gray-700">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">{t('securityPage.bugBountyTitle')}</h2>
                <p className="text-white/90">
                  {t('securityPage.bugBountyDescription')}
                </p>
              </div>
              <button className="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium flex-shrink-0">
                {t('common.learnMore')}
              </button>
            </div>
          </div>
        </div>

        {/* Security Contact */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-[#1A1A1A] rounded-xl border border-gray-200 dark:border-2 dark:border-gray-800 p-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">{t('securityPage.reportTitle')}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
              {t('securityPage.reportDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:contact@appnode.ai" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@appnode.ai
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-[#1A1A1A] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t('securityPage.whitepaper')}
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
