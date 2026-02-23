'use client';

import { useTranslation } from '@/context/LanguageContext';

export default function VideoSection() {
  const { t, language } = useTranslation();
  
  const badge = t('homePage.videoSection.badge');
  const title = t('homePage.videoSection.title');
  const subtitle = t('homePage.videoSection.subtitle');

  return (
    <section key={language.code} className="py-12 sm:py-16 md:py-24 bg-[#f8fafc] dark:bg-[#1A1A1A] transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gray-100 dark:bg-[#1A1A1A] border border-gray-200 dark:border-2 dark:border-gray-800 mb-4 sm:mb-6">
            <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300" suppressHydrationWarning>{badge}</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight" suppressHydrationWarning>
            {title}
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2" suppressHydrationWarning>
            {subtitle}
          </p>
        </div>

        {/* Video Player */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-2 sm:-inset-4 bg-gray-200/50 dark:bg-[#1A1A1A]/50 rounded-2xl sm:rounded-[2.5rem] blur-xl sm:blur-2xl opacity-50"></div>
          
          {/* Video container */}
          <div className="relative bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 dark:border-2 dark:border-gray-700 shadow-2xl">
            <div className="aspect-video w-full">
              <video 
                className="w-full h-full object-cover"
                controls
                muted
                loop
                playsInline
                preload="none"
                poster="/templates/video-poster.jpg"
              >
                <source src="/newintro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
