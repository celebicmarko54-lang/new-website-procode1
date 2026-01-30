'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from '@/context/LanguageContext';

export default function GalleryPage() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'AI Apps', 'Websites', 'Business Apps', 'Personal Software', 'Games'];
  
  // Empty placeholder slots for user uploads
  const emptySlots = Array(12).fill(null);

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-black text-gray-900 dark:text-white transition-colors">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
              {t('galleryPage.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {t('galleryPage.subtitle')}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid - Empty Slots with Animation */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {emptySlots.map((_, i) => (
              <div 
                key={i} 
                className="group bg-white dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-all hover:shadow-lg"
              >
                {/* Preview - Empty with pulse animation */}
                <div className="aspect-video bg-gray-100 dark:bg-gray-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent animate-shimmer"></div>
                  <div className="w-16 h-16 rounded-xl bg-gray-200 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-gray-400 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>
                
                {/* Info - Empty placeholders */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-5 w-32 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
                    <div className="h-5 w-16 bg-gray-100 dark:bg-gray-900 rounded-full"></div>
                  </div>
                  <div className="h-4 w-full bg-gray-100 dark:bg-gray-900 rounded mb-2 animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                  <div className="h-4 w-2/3 bg-gray-100 dark:bg-gray-900 rounded animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800"></div>
                      <div className="h-3 w-16 bg-gray-200 dark:bg-gray-800 rounded"></div>
                    </div>
                    <span className="text-sm text-gray-400 dark:text-gray-600">Coming soon</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Submit CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gray-50 dark:bg-[#0a0a0a] rounded-2xl border border-gray-200 dark:border-gray-800 p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Share Your Creation</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Built something cool with AppNode? Submit it to the gallery and inspire others.
            </p>
            <Link href="/signup" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 font-medium rounded-lg transition-colors">
              Submit Your Project
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
