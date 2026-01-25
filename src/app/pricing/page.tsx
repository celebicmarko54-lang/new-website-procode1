'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const creditPackages = [
  {
    credits: 10,
    price: '$4.99',
    perCredit: '$0.50 per credit',
    popular: false,
  },
  {
    credits: 50,
    price: '$19.99',
    perCredit: '$0.40 per credit',
    popular: true,
  },
  {
    credits: 100,
    price: '$34.99',
    perCredit: '$0.35 per credit',
    popular: false,
  },
  {
    credits: 500,
    price: '$149.99',
    perCredit: '$0.30 per credit',
    popular: false,
  },
];

const freeFeatures = [
  '2 free app generations',
  'Full access to all templates',
  'Live preview and deployment',
  'Export to GitHub',
];

const faqs = [
  {
    question: 'What can I do with credits?',
    answer: 'Each credit allows you to generate one complete app. You can use credits to create web apps, mobile apps, landing pages, and more using our AI-powered builder.',
  },
  {
    question: 'Do credits expire?',
    answer: 'No! Your purchased credits never expire. Use them whenever you want, at your own pace.',
  },
  {
    question: 'Can I get a refund?',
    answer: 'Yes, we offer a 30-day money-back guarantee for unused credits. Contact our support team for assistance.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express) and PayPal.',
  },
  {
    question: 'How does the free tier work?',
    answer: 'Every new user gets 2 free generations to try AppNode. No credit card required to get started!',
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-black transition-colors">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 mb-6">
            <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Pricing</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Simple Credit-Based Pricing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Pay only for what you use. No subscriptions, no hidden fees.
          </p>

          {/* Credit Info */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 shadow-sm">
            <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">1 credit = 1 generation</span>
          </div>
        </div>
      </section>

      {/* Free Tier Section */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Free Tier</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Get started without a credit card</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {freeFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Buy Credits Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Buy Credits</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {creditPackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-6 ${
                  pkg.popular
                    ? 'bg-white dark:bg-[#0a0a0a] border-2 border-gray-900 dark:border-white shadow-xl'
                    : 'bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-xs font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{pkg.credits} Credits</h3>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{pkg.price}</div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{pkg.perCredit}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">{pkg.credits} credits</p>
                
                <button className={`w-full py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2 ${
                  pkg.popular
                    ? 'bg-black dark:bg-white text-white dark:text-black hover:opacity-90 shadow-lg'
                    : 'bg-black dark:bg-white text-white dark:text-black hover:opacity-90'
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-400">Everything you need to know about our pricing</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-[#f8fafc] dark:bg-black">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                >
                  <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} 
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
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to get started?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Start building with 2 free generations.</p>
          <Link 
            href="/signup"
            className="inline-flex px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full hover:opacity-90 transition-all shadow-lg"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
