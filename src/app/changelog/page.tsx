'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from '@/context/LanguageContext';

export default function ChangelogPage() {
  const { t, language, mounted } = useTranslation();

  const releases = [
    {
      version: '2.5.0',
      date: t('changelogPage.releases.v250.date'),
      title: t('changelogPage.releases.v250.title'),
      description: t('changelogPage.releases.v250.description'),
      type: 'major',
      changes: [
        { type: 'new', text: t('changelogPage.releases.v250.changes.0') },
        { type: 'new', text: t('changelogPage.releases.v250.changes.1') },
        { type: 'new', text: t('changelogPage.releases.v250.changes.2') },
        { type: 'improved', text: t('changelogPage.releases.v250.changes.3') },
        { type: 'improved', text: t('changelogPage.releases.v250.changes.4') },
        { type: 'fixed', text: t('changelogPage.releases.v250.changes.5') },
      ],
    },
    {
      version: '2.4.2',
      date: t('changelogPage.releases.v242.date'),
      title: t('changelogPage.releases.v242.title'),
      description: t('changelogPage.releases.v242.description'),
      type: 'patch',
      changes: [
        { type: 'improved', text: t('changelogPage.releases.v242.changes.0') },
        { type: 'improved', text: t('changelogPage.releases.v242.changes.1') },
        { type: 'fixed', text: t('changelogPage.releases.v242.changes.2') },
        { type: 'fixed', text: t('changelogPage.releases.v242.changes.3') },
      ],
    },
    {
      version: '2.4.0',
      date: t('changelogPage.releases.v240.date'),
      title: t('changelogPage.releases.v240.title'),
      description: t('changelogPage.releases.v240.description'),
      type: 'minor',
      changes: [
        { type: 'new', text: t('changelogPage.releases.v240.changes.0') },
        { type: 'new', text: t('changelogPage.releases.v240.changes.1') },
        { type: 'new', text: t('changelogPage.releases.v240.changes.2') },
        { type: 'new', text: t('changelogPage.releases.v240.changes.3') },
        { type: 'improved', text: t('changelogPage.releases.v240.changes.4') },
      ],
    },
    {
      version: '2.3.0',
      date: t('changelogPage.releases.v230.date'),
      title: t('changelogPage.releases.v230.title'),
      description: t('changelogPage.releases.v230.description'),
      type: 'minor',
      changes: [
        { type: 'new', text: t('changelogPage.releases.v230.changes.0') },
        { type: 'new', text: t('changelogPage.releases.v230.changes.1') },
        { type: 'new', text: t('changelogPage.releases.v230.changes.2') },
        { type: 'new', text: t('changelogPage.releases.v230.changes.3') },
        { type: 'improved', text: t('changelogPage.releases.v230.changes.4') },
        { type: 'fixed', text: t('changelogPage.releases.v230.changes.5') },
      ],
    },
    {
      version: '2.2.0',
      date: t('changelogPage.releases.v220.date'),
      title: t('changelogPage.releases.v220.title'),
      description: t('changelogPage.releases.v220.description'),
      type: 'minor',
      changes: [
        { type: 'new', text: t('changelogPage.releases.v220.changes.0') },
        { type: 'new', text: t('changelogPage.releases.v220.changes.1') },
        { type: 'new', text: t('changelogPage.releases.v220.changes.2') },
        { type: 'new', text: t('changelogPage.releases.v220.changes.3') },
        { type: 'improved', text: t('changelogPage.releases.v220.changes.4') },
      ],
    },
    {
      version: '2.1.0',
      date: t('changelogPage.releases.v210.date'),
      title: t('changelogPage.releases.v210.title'),
      description: t('changelogPage.releases.v210.description'),
      type: 'minor',
      changes: [
        { type: 'new', text: t('changelogPage.releases.v210.changes.0') },
        { type: 'new', text: t('changelogPage.releases.v210.changes.1') },
        { type: 'new', text: t('changelogPage.releases.v210.changes.2') },
        { type: 'new', text: t('changelogPage.releases.v210.changes.3') },
        { type: 'improved', text: t('changelogPage.releases.v210.changes.4') },
      ],
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'new': return 'bg-green-100 text-green-700';
      case 'improved': return 'bg-blue-100 text-blue-700';
      case 'fixed': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getVersionColor = (type: string) => {
    switch (type) {
      case 'major': return 'bg-gray-900 dark:bg-gray-800';
      case 'minor': return 'bg-gray-700 dark:bg-gray-700';
      case 'patch': return 'bg-gray-500 dark:bg-gray-600';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div key={language.code} className="min-h-screen bg-[#f8fafc] dark:bg-[#1A1A1A] text-gray-900 dark:text-white transition-colors">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-6 mb-12">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full text-sm font-medium mb-4">
              {t('changelogPage.badge')}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t('changelogPage.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('changelogPage.subtitle')}
            </p>
          </div>
        </div>

        {/* Subscribe to Updates */}
        <div className="max-w-4xl mx-auto px-6 mb-12">
          <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-2xl border border-gray-200 dark:border-2 dark:border-gray-800 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{t('changelogPage.stayUpToDate')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t('changelogPage.getNotified')}</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder={t('changelogPage.emailPlaceholder')}
                className="flex-1 sm:w-64 px-4 py-2 border border-gray-200 dark:border-2 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-400 focus:border-transparent bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white"
              />
              <button className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:opacity-90 transition-all font-medium">
                {t('changelogPage.subscribeButton')}
              </button>
            </div>
          </div>
        </div>

        {/* Releases Timeline */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {releases.map((release, index) => (
              <div key={release.version} className="relative">
                {/* Timeline line */}
                {index !== releases.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 -mb-8"></div>
                )}
                
                <div className="flex gap-6">
                  {/* Version badge */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full ${getVersionColor(release.type)} flex items-center justify-center text-white font-bold text-sm`}>
                    {release.version.split('.')[0]}.{release.version.split('.')[1]}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white dark:bg-[#1A1A1A] rounded-xl border border-gray-200 dark:border-2 dark:border-gray-800 p-6 hover:shadow-lg transition-all">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-sm font-mono text-gray-500 dark:text-gray-400">v{release.version}</span>
                      <span className="text-sm text-gray-400 dark:text-gray-500">{release.date}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{release.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{release.description}</p>
                    
                    <div className="space-y-2">
                      {release.changes.map((change, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className={`text-xs font-medium px-2 py-0.5 rounded ${getTypeColor(change.type)} capitalize`}>
                            {t(`changelogPage.changeTypes.${change.type}`)}
                          </span>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{change.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-6 py-3 bg-white dark:bg-[#1A1A1A] text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-2 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all font-medium">
              {t('changelogPage.viewOlder')}
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
