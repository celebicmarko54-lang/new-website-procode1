'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from '@/context/LanguageContext';

export default function TermsOfServicePage() {
  const { t, tArray, language} = useTranslation();

  return (
    <div key={language.code} className="min-h-screen bg-[#f8fafc] dark:bg-[#1A1A1A] transition-colors">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-2 dark:border-gray-800 rounded-full text-sm font-medium mb-4">
              {t('termsPage.badge')}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t('termsPage.title')}</h1>
            <p className="text-gray-500 dark:text-gray-400">{t('termsPage.lastUpdated')}</p>
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            {/* Intro */}
            <section className="mb-10">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('termsPage.intro.p1')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('termsPage.intro.p2')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('termsPage.intro.p3')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('termsPage.intro.p4')}
              </p>
            </section>

            {/* 1. Eligibility and Restrictions */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('termsPage.section1.title')}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('termsPage.section1.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                {tArray('termsPage.section1.items').map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('termsPage.section1.minor')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('termsPage.section1.suspended')}
              </p>
            </section>

            {/* 2. Account Registration */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('termsPage.section2.title')}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('termsPage.section2.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                {tArray('termsPage.section2.items').map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('termsPage.section2.reserve')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('termsPage.section2.acknowledge')}
              </p>
            </section>

            {/* 3. Description of Services */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('termsPage.section3.title')}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('termsPage.section3.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                {tArray('termsPage.section3.items').map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('termsPage.section3.evolve')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('termsPage.section3.thirdParty')}
              </p>
            </section>

            {/* 4. AI-Generated Output Disclaimer */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('termsPage.section4.title')}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('termsPage.section4.intro')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('termsPage.section4.acknowledge')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                {tArray('termsPage.section4.items').map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('termsPage.section4.disclaimer')}
              </p>
            </section>

            {/* 5. User Content */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('termsPage.section5.title')}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('termsPage.section5.definition')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                <strong>{t('termsPage.section5.ownership')}</strong>
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                <strong>{t('termsPage.section5.licenseIntro')}</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                {tArray('termsPage.section5.licenseItems').map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('termsPage.section5.represent')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('termsPage.section5.noSell')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                <strong>{t('termsPage.section5.dataProcessing')}</strong>
              </p>
            </section>

            {/* 6. Acceptable Use */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('termsPage.section6.title')}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('termsPage.section6.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                {tArray('termsPage.section6.items').map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('termsPage.section6.monitor')}
              </p>
            </section>

            {/* 7. Subscriptions */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('termsPage.section7.title')}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('termsPage.section7.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                {tArray('termsPage.section7.items').map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('termsPage.section7.fees')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('termsPage.section7.failure')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                <strong>{t('termsPage.section7.refunds')}</strong>
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('termsPage.section7.processors')}
              </p>
            </section>

            {/* 8. Rate Limits */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('termsPage.section8.title')}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('termsPage.section8.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                {tArray('termsPage.section8.items').map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('termsPage.section8.noLiability')}
              </p>
            </section>

            {/* 9. Intellectual Property */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('termsPage.section9.title')}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('termsPage.section9.ownership')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('termsPage.section9.license')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('termsPage.section9.agreeNot')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                {tArray('termsPage.section9.items').map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('termsPage.section9.feedback')}
              </p>
            </section>

            {/* 10. Confidentiality */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('termsPage.section10.title')}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('termsPage.section10.content')}
              </p>
            </section>

            {/* 11. Disclaimers */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('termsPage.section11.title')}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 uppercase font-semibold">
                {t('termsPage.section11.asIs')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 uppercase">
                {t('termsPage.section11.noWarranties')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 uppercase">
                {t('termsPage.section11.limitation')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed uppercase">
                {t('termsPage.section11.exclusion')}
              </p>
            </section>

            {/* 12. Indemnification */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('termsPage.section12.title')}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('termsPage.section12.content')}
              </p>
            </section>

            {/* 13. Termination */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('termsPage.section13.title')}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('termsPage.section13.byYou')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('termsPage.section13.byUs')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('termsPage.section13.effect')}
              </p>
            </section>

            {/* 14. Governing Law */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('termsPage.section14.title')}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('termsPage.section14.law')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('termsPage.section14.arbitration')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed uppercase font-semibold">
                {t('termsPage.section14.classWaiver')}
              </p>
            </section>

            {/* 15. Miscellaneous */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('termsPage.section15.title')}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('termsPage.section15.entireAgreement')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('termsPage.section15.severability')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('termsPage.section15.waiver')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('termsPage.section15.assignment')}
              </p>
            </section>

            {/* 16. Contact */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('termsPage.section16.title')}</h2>
              <div className="mt-4 p-4 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 font-medium">{t('termsPage.section16.company')}</p>
                <p className="text-gray-600 dark:text-gray-400">{t('termsPage.section16.supportEmail')}</p>
                <p className="text-gray-600 dark:text-gray-400">{t('termsPage.section16.legalEmail')}</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
