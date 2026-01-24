'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      name: 'Getting Started',
      articles: 12,
      description: 'New to λforge? Start here',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      name: 'Account & Billing',
      articles: 8,
      description: 'Manage your subscription and payments',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      name: 'Building Apps',
      articles: 24,
      description: 'Learn how to create amazing apps',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      name: 'Customization',
      articles: 15,
      description: 'Style and personalize your projects',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      name: 'Integrations',
      articles: 10,
      description: 'Connect with third-party services',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: 'Troubleshooting',
      articles: 18,
      description: 'Fix common issues and errors',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  const popularArticles = [
    { title: 'How to create your first app', views: '15.2K' },
    { title: 'Understanding prompt engineering', views: '12.8K' },
    { title: 'Connecting a custom domain', views: '9.5K' },
    { title: 'Exporting your project code', views: '8.7K' },
    { title: 'Team collaboration features', views: '7.3K' },
    { title: 'API authentication setup', views: '6.9K' },
  ];

  const faqs = [
    {
      question: 'What is λforge?',
      answer: 'λforge is an AI-powered platform that lets you build web applications by simply describing what you want in natural language.',
    },
    {
      question: 'Do I need coding experience?',
      answer: 'No! λforge is designed for everyone. You can create professional apps without writing any code.',
    },
    {
      question: 'Can I export my code?',
      answer: 'Yes, you can export your complete project code at any time. You own everything you create.',
    },
    {
      question: 'What technologies does λforge use?',
      answer: 'λforge generates modern React/Next.js applications with Tailwind CSS styling.',
    },
    {
      question: 'Is there a free plan?',
      answer: 'Yes! We offer a generous free tier that lets you build and deploy apps at no cost.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Search */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How can we help?
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Search our knowledge base or browse categories below
          </p>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for help..."
              className="w-full px-6 py-4 rounded-2xl text-gray-900 text-lg border border-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 focus:border-gray-300 shadow-lg"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-white rounded-xl hover:opacity-90 transition-all" style={{ background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)' }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-100 p-6 hover:border-gray-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-gray-100 to-gray-100 rounded-2xl flex items-center justify-center text-gray-600 mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-1 group-hover:text-gray-700 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                <span className="text-xs text-gray-400">{category.articles} articles</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles & Contact */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Popular Articles */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Popular Articles</h2>
              <div className="space-y-1">
                {popularArticles.map((article, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0 cursor-pointer group"
                  >
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors font-medium">
                      {article.title}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {article.views}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
              <h2 className="text-xl font-bold mb-4">Need more help?</h2>
              <p className="text-gray-300 mb-8">
                Can&apos;t find what you&apos;re looking for? Our support team is here to help.
              </p>
              <div className="space-y-4">
                <button className="w-full px-4 py-4 hover:opacity-90 rounded-xl font-semibold transition-all flex items-center justify-center gap-3 text-white" style={{ background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)' }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Chat with Support
                </button>
                <button className="w-full px-4 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-semibold transition-colors flex items-center justify-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-300 transition-all"
              >
                <summary className="px-6 py-5 cursor-pointer font-semibold text-gray-900 hover:text-gray-700 transition-colors flex items-center justify-between">
                  {faq.question}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#1f2937] to-[#374151]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto">
            Our team is ready to help you succeed. Reach out anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/community"
              className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg"
            >
              Join Community
            </Link>
            <Link
              href="/guides"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              Browse Guides
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
