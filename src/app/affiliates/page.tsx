'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from '@/context/LanguageContext';

export default function AffiliatesPage() {
  const { t, language } = useTranslation();
  const [email, setEmail] = useState('');

  const benefitIcons = [
    <svg key="b0" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg key="b1" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg key="b2" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>,
    <svg key="b3" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>,
  ];

  const tierReferrals = ['1-10', '11-50', '50+'];
  const tierCommissions = ['30%', '35%', '40%'];
  const tierFeatured = [false, true, false];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('affiliatesPage.alertMessage'));
    setEmail('');
  };

  return (
    <div key={language.code} className="min-h-screen bg-white dark:bg-[#1A1A1A]">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-6 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-gray-50 text-gray-900 rounded-full text-sm font-medium mb-4">
              {t('affiliatesPage.badge')}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('affiliatesPage.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              {t('affiliatesPage.subtitle')}
            </p>
            
            {/* Quick Signup Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('affiliatesPage.emailPlaceholder')}
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-4 focus:ring-gray-100 outline-none transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3 text-white font-semibold rounded-xl hover:opacity-90 transition-all whitespace-nowrap"
                style={{ background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)' }}
              >
                {t('affiliatesPage.joinButton')}
              </button>
            </form>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="px-6 mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{t('affiliatesPage.benefits.title')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-100 dark:border-2 dark:border-gray-800 p-6 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-100 to-gray-100 rounded-xl flex items-center justify-center text-gray-900 mb-4">
                    {benefitIcons[index]}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{t(`affiliatesPage.benefits.items.${index}.title`)}</h3>
                  <p className="text-gray-600 text-sm">{t(`affiliatesPage.benefits.items.${index}.description`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commission Tiers */}
        <section className="px-6 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">{t('affiliatesPage.tiers.title')}</h2>
            <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
              {t('affiliatesPage.tiers.subtitle')}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[0, 1, 2].map((index) => {
                const featured = tierFeatured[index];
                const perks: string[] = [];
                for (let i = 0; i < (index === 1 ? 4 : index === 2 ? 4 : 3); i++) {
                  perks.push(t(`affiliatesPage.tiers.items.${index}.perks.${i}`));
                }
                return (
                  <div
                    key={index}
                    className={`rounded-2xl p-6 ${
                      featured
                        ? 'bg-gradient-to-br from-[#1f2937] to-[#374151] text-white ring-4 ring-gray-300'
                        : 'bg-white dark:bg-[#1A1A1A] border border-gray-100 dark:border-2 dark:border-gray-800'
                    }`}
                  >
                    <div className="text-center mb-6">
                      <h3 className={`font-semibold text-lg mb-1 ${featured ? 'text-white' : 'text-gray-900'}`}>
                        {t(`affiliatesPage.tiers.items.${index}.name`)}
                      </h3>
                      <p className={`text-sm ${featured ? 'text-gray-100' : 'text-gray-500'}`}>
                        {tierReferrals[index]} {t('affiliatesPage.tiers.referralsPerMonth')}
                      </p>
                      <div className={`text-4xl font-bold mt-4 ${featured ? 'text-white' : 'text-gray-900'}`}>
                        {tierCommissions[index]}
                      </div>
                      <p className={`text-sm ${featured ? 'text-gray-100' : 'text-gray-500'}`}>
                        {t('affiliatesPage.tiers.recurringCommission')}
                      </p>
                    </div>
                    
                    <ul className="space-y-3">
                      {perks.map((perk, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <svg className={`w-5 h-5 ${featured ? 'text-gray-300' : 'text-gray-900'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className={`text-sm ${featured ? 'text-white' : 'text-gray-600'}`}>{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="px-6 mb-20">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-50 to-gray-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{t('affiliatesPage.howItWorks.title')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                <svg key="s0" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>,
                <svg key="s1" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>,
                <svg key="s2" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>,
              ].map((icon, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-white dark:bg-[#1A1A1A] rounded-2xl flex items-center justify-center text-gray-900 dark:text-white mx-auto mb-4 shadow-sm">
                    {icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t(`affiliatesPage.howItWorks.steps.${i}.title`)}</h3>
                  <p className="text-gray-600 text-sm">
                    {t(`affiliatesPage.howItWorks.steps.${i}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl font-bold text-white text-center mb-8">{t('affiliatesPage.stats.title')}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">$500K+</div>
                  <div className="text-gray-400">{t('affiliatesPage.stats.paidToAffiliates')}</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">2,000+</div>
                  <div className="text-gray-400">{t('affiliatesPage.stats.activeAffiliates')}</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">$250</div>
                  <div className="text-gray-400">{t('affiliatesPage.stats.avgMonthlyEarnings')}</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">48hrs</div>
                  <div className="text-gray-400">{t('affiliatesPage.stats.avgPayoutTime')}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
