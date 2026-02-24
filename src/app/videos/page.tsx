'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from '@/context/LanguageContext';

export default function VideosPage() {
  const { t, language} = useTranslation();
  
  const featuredVideo = {
    title: t('videosPage.featuredVideo.title'),
    description: t('videosPage.featuredVideo.description'),
    duration: '45:30',
    views: '156K',
  };

  return (
    <div key={language.code} className="min-h-screen bg-[#f8fafc] dark:bg-[#1A1A1A]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-2 dark:border-gray-700 mb-8">
            <svg className="w-4 h-4 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('videosPage.badge')}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            {t('videosPage.titleStart')}
            <span className="block text-gray-900 dark:text-white">
              {t('videosPage.titleHighlight')}
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            {t('videosPage.subtitle')}
          </p>
        </div>
      </section>

      {/* Featured Video */}
      <section className="px-6 pb-32">
        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            {/* Video Container */}
            <div className="relative aspect-video bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
              {/* Video Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                {/* Play Button */}
                <button className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group">
                  <svg className="w-10 h-10 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                
                {/* Duration Badge */}
                <div className="absolute bottom-6 right-6 px-3 py-1.5 bg-black/70 text-white text-sm font-medium rounded-lg">
                  {featuredVideo.duration}
                </div>
                
                {/* Views Badge */}
                <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 bg-black/70 text-white text-sm font-medium rounded-lg">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {featuredVideo.views} {t('videosPage.views')}
                </div>
              </div>
            </div>
            
            {/* Video Info */}
            <div className="mt-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {featuredVideo.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {featuredVideo.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-black dark:bg-[#1A1A1A] border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('videosPage.cta.title')}
          </h2>
          <p className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto">
            {t('videosPage.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg"
            >
              {t('videosPage.cta.startBuildingFree')}
            </Link>
            <Link
              href="/learn"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              {t('videosPage.cta.browseCourses')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
