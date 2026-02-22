'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

const creditPackages = [
  { credits: 10, price: '$4.99', perCredit: '$0.50', popular: false },
  { credits: 50, price: '$19.99', perCredit: '$0.40', popular: true },
  { credits: 100, price: '$34.99', perCredit: '$0.35', popular: false },
  { credits: 500, price: '$149.99', perCredit: '$0.30', popular: false },
];

// Inline translations to bypass bundler cache issues
const pricingTranslations: Record<string, Record<string, string | string[] | Record<string, string>>> = {
  en: {
    badge: 'Pricing',
    title: 'Simple Credit-Based Pricing',
    subtitle: 'Pay only for what you use. No subscriptions, no hidden fees.',
    freeTierTitle: 'Free Tier',
    freeTierSubtitle: 'Get started without a credit card',
    freeTierFeatures: ['2 free app generations', 'Full access to all templates', 'Live preview and deployment', 'Export to GitHub'],
    buyCredits: 'Buy Credits',
    mostPopular: 'Most Popular',
    credits: 'Credits',
    buyNow: 'Buy Now',
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Everything you need to know about our pricing',
    q1: 'What can I do with credits?',
    a1: 'Each credit allows you to generate one complete app. You can use credits to create web apps, mobile apps, landing pages, and more using our AI-powered builder.',
    q2: 'Do credits expire?',
    a2: 'No! Your purchased credits never expire. Use them whenever you want, at your own pace.',
    q3: 'Can I get a refund?',
    a3: 'Yes, we offer a 30-day money-back guarantee for unused credits. Contact our support team for assistance.',
    q4: 'What payment methods do you accept?',
    a4: 'We accept all major credit cards (Visa, Mastercard, American Express) and PayPal.',
    q5: 'How does the free tier work?',
    a5: 'Every new user gets 2 free generations to try AppNode. No credit card required to get started!',
    readyToStart: 'Ready to get started?',
    startWith: 'Start building with 2 free generations.',
    getStartedFree: 'Get Started Free',
  },
  ko: {
    badge: '가격',
    title: '간단한 크레딧 기반 가격',
    subtitle: '사용한 만큼만 결제하세요. 구독료 없음, 숨은 비용 없음.',
    freeTierTitle: '무료 체험',
    freeTierSubtitle: '신용카드 없이 시작하세요',
    freeTierFeatures: ['2회 무료 앱 생성', '모든 템플릿 이용 가능', '실시간 미리보기 및 배포', 'GitHub로 내보내기'],
    buyCredits: '크레딧 구매',
    mostPopular: '가장 인기',
    credits: '크레딧',
    buyNow: '지금 구매',
    faqTitle: '자주 묻는 질문',
    faqSubtitle: '가격에 대해 알아야 할 모든 것',
    q1: '크레딧으로 무엇을 할 수 있나요?',
    a1: '각 크레딧으로 하나의 완전한 앱을 생성할 수 있습니다. 크레딧을 사용하여 AI 기반 빌더로 웹 앱, 모바일 앱, 랜딩 페이지 등을 만들 수 있습니다.',
    q2: '크레딧이 만료되나요?',
    a2: '아니요! 구매한 크레딧은 만료되지 않습니다. 원하는 때에 자유롭게 사용하세요.',
    q3: '환불이 가능한가요?',
    a3: '네, 사용하지 않은 크레딧에 대해 30일 환불 보장을 제공합니다. 지원팀에 문의하세요.',
    q4: '어떤 결제 방법을 사용할 수 있나요?',
    a4: '모든 주요 신용카드(Visa, Mastercard, American Express)와 PayPal을 사용할 수 있습니다.',
    q5: '무료 체험은 어떻게 작동하나요?',
    a5: '모든 신규 사용자는 AppNode를 체험할 수 있는 2회 무료 생성을 받습니다. 시작하는 데 신용카드가 필요하지 않습니다!',
    readyToStart: '시작할 준비가 되셨나요?',
    startWith: '2회 무료 생성으로 빌드를 시작하세요.',
    getStartedFree: '무료로 시작하기',
  }
};

// Helper to get pricing translation
function pt(langCode: string, key: string): string {
  const lang = pricingTranslations[langCode] || pricingTranslations.en;
  const val = lang[key];
  // Debug logging
  if (typeof window !== 'undefined' && key === 'freeTierTitle') {
    console.log('pt debug:', { langCode, key, val, typeofVal: typeof val, langKeys: Object.keys(lang) });
  }
  return typeof val === 'string' ? val : (pricingTranslations.en[key] as string) || key;
}

function ptFeatures(langCode: string): string[] {
  const lang = pricingTranslations[langCode] || pricingTranslations.en;
  return lang.freeTierFeatures as string[];
}

export default function PricingContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Initialize with default, then update on mount
  const [langCode, setLangCode] = useState('en');
  
  // Set language from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('appnode_language');
    if (stored) {
      setLangCode(stored);
    }
  }, []);
  
  // Listen for storage changes
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'appnode_language' && e.newValue) {
        setLangCode(e.newValue);
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);
  
  // Helper to get translation - use inline translations
  const t = (key: string) => pt(langCode, key);
  
  const freeFeatures = useMemo(() => ptFeatures(langCode), [langCode]);

  const faqs = useMemo(() => [
    { question: t('q1'), answer: t('a1') },
    { question: t('q2'), answer: t('a2') },
    { question: t('q3'), answer: t('a3') },
    { question: t('q4'), answer: t('a4') },
    { question: t('q5'), answer: t('a5') },
  ], [langCode]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-2 dark:border-gray-800 mb-4 sm:mb-6">
            <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">{t('badge')}</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight px-2">
            {t('title')}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Free Tier Section */}
      <section className="pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-2 dark:border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">DEBUG: {langCode} - {t('freeTierTitle')}</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">{t('freeTierSubtitle')}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {freeFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Buy Credits Section */}
      <section className="pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">{t('buyCredits')}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {creditPackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-xl sm:rounded-2xl p-3 sm:p-6 ${
                  pkg.popular
                    ? 'bg-white dark:bg-[#1A1A1A] border-2 border-blue-500 shadow-xl'
                    : 'bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-2 dark:border-gray-800'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-blue-500 to-blue-400 text-white text-[10px] sm:text-xs font-semibold rounded-full whitespace-nowrap">
                      {t('mostPopular')}
                    </span>
                  </div>
                )}
                
                <h3 className="text-base sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">{pkg.credits} {t('credits')}</h3>
                <div className="text-xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">{pkg.price}</div>
                
                <button className={`w-full py-2 sm:py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-base ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-blue-500 to-blue-400 text-white hover:opacity-90 shadow-lg'
                    : 'border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10'
                }`}>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="hidden sm:inline">{t('buyNow')}</span>
                  <span className="sm:hidden">{t('buyNow')}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1A1A1A]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">{t('faqTitle')}</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{t('faqSubtitle')}</p>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg sm:rounded-xl overflow-hidden bg-[#f8fafc] dark:bg-[#1A1A1A]">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                >
                  <span className="font-medium text-sm sm:text-base text-gray-900 dark:text-white pr-2">{faq.question}</span>
                  <svg 
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-500 dark:text-gray-400 transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t('readyToStart')}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">{t('startWith')}</p>
          <Link 
            href="/signup"
            className="inline-flex px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full hover:opacity-90 transition-all shadow-lg"
          >
            {t('getStartedFree')}
          </Link>
        </div>
      </section>
    </>
  );
}
