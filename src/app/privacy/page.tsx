'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from '@/context/LanguageContext';

export default function PrivacyPolicyPage() {
  const { t, tArray } = useTranslation();

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#1A1A1A] transition-colors">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-2 dark:border-gray-800 rounded-full text-sm font-medium mb-4">
              {t('privacyPage.badge')}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t('privacyPage.title')}</h1>
            <p className="text-gray-500 dark:text-gray-400">{t('privacyPage.lastUpdated')}</p>
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            {/* Intro */}
            <section className="mb-10">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('privacyPage.intro.p1')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('privacyPage.intro.p2')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('privacyPage.intro.p3')}
              </p>
            </section>

            {/* 1. Information We Collect */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('privacyPage.section1.title')}</h2>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('privacyPage.section1.s1Title')}</h3>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-6">
                {tArray('privacyPage.section1.s1Items').map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item.replace(/^([^:]+):/, '<strong>$1:</strong>') }} />
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('privacyPage.section1.s2Title')}</h3>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-6">
                {tArray('privacyPage.section1.s2Items').map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item.replace(/^([^:]+):/, '<strong>$1:</strong>') }} />
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('privacyPage.section1.s3Title')}</h3>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                {tArray('privacyPage.section1.s3Items').map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('privacyPage.section1.s3Note')}
              </p>
            </section>

            {/* 2. How We Use Your Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('privacyPage.section2.title')}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('privacyPage.section2.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                {tArray('privacyPage.section2.items').map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                <strong>{t('privacyPage.section2.marketing')}</strong>
              </p>
            </section>

            {/* 3. AI Model Training & Improvement */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('privacyPage.section3.title')}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('privacyPage.section3.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                {tArray('privacyPage.section3.items').map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item.replace(/^([^:]+):/, '<strong>$1:</strong>') }} />
                ))}
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('privacyPage.section3.note')}
              </p>
            </section>

            {/* 4. Sharing & Disclosure of Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('privacyPage.section4.title')}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                <strong>{t('privacyPage.section4.noSell')}</strong>
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('privacyPage.section4.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                {tArray('privacyPage.section4.items').map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item.replace(/^([^:]+):/, '<strong>$1:</strong>') }} />
                ))}
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                <strong>{t('privacyPage.section4.international')}</strong>
              </p>
            </section>

            {/* 5. Data Retention */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('privacyPage.section5.title')}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('privacyPage.section5.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                {tArray('privacyPage.section5.items').map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item.replace(/^([^:]+):?→?/, '<strong>$1</strong>') }} />
                ))}
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('privacyPage.section5.note')}
              </p>
            </section>

            {/* 6. Your Privacy Rights */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('privacyPage.section6.title')}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('privacyPage.section6.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                {tArray('privacyPage.section6.items').map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item.replace(/^([^:]+):/, '<strong>$1:</strong>') }} />
                ))}
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('privacyPage.section6.california')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                <strong>{t('privacyPage.section6.submit')}</strong>
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('privacyPage.section6.response')}
              </p>
            </section>

            {/* 7. Data Security */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('privacyPage.section7.title')}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('privacyPage.section7.p1')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('privacyPage.section7.p2')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('privacyPage.section7.p3')}
              </p>
            </section>

            {/* 8. Cookies & Tracking Technologies */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('privacyPage.section8.title')}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('privacyPage.section8.content')}
              </p>
            </section>

            {/* 9. Children's Privacy */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('privacyPage.section9.title')}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('privacyPage.section9.content')}
              </p>
            </section>

            {/* 10. Third-Party Links & Integrations */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('privacyPage.section10.title')}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('privacyPage.section10.content')}
              </p>
            </section>

            {/* 11. Contact Us */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('privacyPage.section11.title')}</h2>
              <div className="mt-4 p-4 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 font-medium">{t('privacyPage.section11.company')}</p>
                <p className="text-gray-600 dark:text-gray-400">{t('privacyPage.section11.privacyEmail')}</p>
                <p className="text-gray-600 dark:text-gray-400">{t('privacyPage.section11.generalEmail')}</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
