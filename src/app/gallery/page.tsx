'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { useTranslation } from '@/context/LanguageContext';

// AI Apps projects with actual images
const aiAppsProjects = [
  { id: 1, titleKey: 'ecommerceAI', image: '/templates/AIAPPS1.png', author: 'AppNode Team', categoryKey: 'aiApps' },
  { id: 2, titleKey: 'customerSupportAI', image: '/templates/AIAPPS2.png', author: 'AppNode Team', categoryKey: 'aiApps' },
  { id: 3, titleKey: 'aiContentWriter', image: '/templates/AIAPPS3.png', author: 'AppNode Team', categoryKey: 'aiApps' },
  { id: 4, titleKey: 'aiImageGenerator', image: '/templates/AIAPPS4.png', author: 'AppNode Team', categoryKey: 'aiApps' },
  { id: 5, titleKey: 'textToSpeechAI', image: '/templates/AIAPPRS5.png', author: 'AppNode Team', categoryKey: 'aiApps' },
  { id: 6, titleKey: 'dataAnalyticsAI', image: '/templates/AIAPPPS3.png', author: 'AppNode Team', categoryKey: 'aiApps' },
  { id: 7, titleKey: 'aiVideoCreator', image: '/templates/AIAPPS7.png', author: 'AppNode Team', categoryKey: 'aiApps' },
  { id: 8, titleKey: 'aiCodeAssistant', image: '/templates/AIAPPS8.png', author: 'AppNode Team', categoryKey: 'aiApps' },
];

// Website projects with actual images
const websiteProjects = [
  { id: 9, titleKey: 'travelBlog', image: '/templates/WEBSITE1.png', author: 'AppNode Team', categoryKey: 'websites' },
  { id: 10, titleKey: 'designStudio', image: '/templates/WEBSITE2.png', author: 'AppNode Team', categoryKey: 'websites' },
  { id: 11, titleKey: 'businessWebsite', image: '/templates/WEBSITE3.png', author: 'AppNode Team', categoryKey: 'websites' },
  { id: 12, titleKey: 'artMagazine', image: '/templates/WEBSITE4.png', author: 'AppNode Team', categoryKey: 'websites' },
  { id: 13, titleKey: 'fashionBlog', image: '/templates/WEBSITE5NEW.png', author: 'AppNode Team', categoryKey: 'websites' },
  { id: 14, titleKey: 'productLanding', image: '/templates/WEBSITE6.png', author: 'AppNode Team', categoryKey: 'websites' },
  { id: 15, titleKey: 'fragranceStore', image: '/templates/WEBSITE7.png', author: 'AppNode Team', categoryKey: 'websites' },
  { id: 16, titleKey: 'restaurantSite', image: '/templates/WEBSITE8.png', author: 'AppNode Team', categoryKey: 'websites' },
];

// Business Apps projects with actual images
const businessAppsProjects = [
  { id: 17, titleKey: 'crmDashboard', image: '/templates/biznis1.png', author: 'AppNode Team', categoryKey: 'businessApps' },
  { id: 18, titleKey: 'orderDashboard', image: '/templates/biznis2.png', author: 'AppNode Team', categoryKey: 'businessApps' },
  { id: 19, titleKey: 'projectDashboard', image: '/templates/biznis3.png', author: 'AppNode Team', categoryKey: 'businessApps' },
  { id: 20, titleKey: 'webAnalytics', image: '/templates/Biznis4.png', author: 'AppNode Team', categoryKey: 'businessApps' },
  { id: 21, titleKey: 'salesAnalytics', image: '/templates/biznis5.png', author: 'AppNode Team', categoryKey: 'businessApps' },
  { id: 22, titleKey: 'analyticsDashboard', image: '/templates/Biznis6.png', author: 'AppNode Team', categoryKey: 'businessApps' },
  { id: 23, titleKey: 'performanceDashboard', image: '/templates/biznis7.png', author: 'AppNode Team', categoryKey: 'businessApps' },
  { id: 24, titleKey: 'businessAnalytics', image: '/templates/biznis8.png', author: 'AppNode Team', categoryKey: 'businessApps' },
];

// Personal Software projects with actual images
const personalSoftwareProjects = [
  { id: 25, titleKey: 'wellnessMeditation', image: '/templates/presonal1.png', author: 'AppNode Team', categoryKey: 'personalSoftware' },
  { id: 26, titleKey: 'personalFinance', image: '/templates/personal2.png', author: 'AppNode Team', categoryKey: 'personalSoftware' },
  { id: 27, titleKey: 'lifeOSProductivity', image: '/templates/personal3.png', author: 'AppNode Team', categoryKey: 'personalSoftware' },
  { id: 28, titleKey: 'digitalJournal', image: '/templates/personal4.png', author: 'AppNode Team', categoryKey: 'personalSoftware' },
  { id: 29, titleKey: 'personalDashboard', image: '/templates/personal5.png', author: 'AppNode Team', categoryKey: 'personalSoftware' },
  { id: 30, titleKey: 'taskDashboard', image: '/templates/personal6.png', author: 'AppNode Team', categoryKey: 'personalSoftware' },
  { id: 31, titleKey: 'financeDashboard', image: '/templates/personal7.png', author: 'AppNode Team', categoryKey: 'personalSoftware' },
  { id: 32, titleKey: 'dailyPlanner', image: '/templates/Personal8.png', author: 'AppNode Team', categoryKey: 'personalSoftware' },
];

// Games projects with actual images
const gamesProjects = [
  { id: 33, titleKey: 'cyberRunner', image: '/templates/GAME1.png', author: 'AppNode Team', categoryKey: 'games' },
  { id: 34, titleKey: 'mysticForest', image: '/templates/GAME2.png', author: 'AppNode Team', categoryKey: 'games' },
  { id: 35, titleKey: 'spaceOdyssey', image: '/templates/GAME3.png', author: 'AppNode Team', categoryKey: 'games' },
  { id: 36, titleKey: 'neonCity', image: '/templates/GAME6.png', author: 'AppNode Team', categoryKey: 'games' },
  { id: 37, titleKey: 'cellEvolution', image: '/templates/GAME7.png', author: 'AppNode Team', categoryKey: 'games' },
  { id: 38, titleKey: 'detectiveDashboard', image: '/templates/GAME HOME1.png', author: 'AppNode Team', categoryKey: 'games' },
  { id: 39, titleKey: 'partyGames', image: '/templates/GAME HOME2.png', author: 'AppNode Team', categoryKey: 'games' },
  { id: 40, titleKey: 'driftRush', image: '/templates/GAME HOME3.png', author: 'AppNode Team', categoryKey: 'games' },
];

export default function GalleryPage() {
  const { t, mounted, language } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<typeof aiAppsProjects[0] | null>(null);
  
  const categoryKeys = ['all', 'aiApps', 'websites', 'businessApps', 'personalSoftware', 'games'] as const;

  // Memoized translations that update when language changes
  const categoryLabels = useMemo(() => ({
    all: t('galleryPage.categories.all'),
    aiApps: t('galleryPage.categories.aiApps'),
    websites: t('galleryPage.categories.websites'),
    businessApps: t('galleryPage.categories.businessApps'),
    personalSoftware: t('galleryPage.categories.personalSoftware'),
    games: t('galleryPage.categories.games'),
  }), [t, language.code]);
  
  const galleryTitle = useMemo(() => t('galleryPage.title'), [t, language.code]);
  const gallerySubtitle = useMemo(() => t('galleryPage.subtitle'), [t, language.code]);
  const viewLabel = useMemo(() => t('galleryPage.view'), [t, language.code]);
  const builtWithLabel = useMemo(() => t('galleryPage.builtWith'), [t, language.code]);

  // Show skeleton during SSR
  if (!mounted) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#1A1A1A]">
        <Header />
        <section className="pt-32 pb-8 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">&nbsp;</h1>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
  
  // Filter projects based on active category
  const getFilteredProjects = () => {
    switch (activeCategory) {
      case 'all':
        return [...aiAppsProjects, ...websiteProjects, ...businessAppsProjects, ...personalSoftwareProjects, ...gamesProjects];
      case 'aiApps':
        return aiAppsProjects;
      case 'websites':
        return websiteProjects;
      case 'businessApps':
        return businessAppsProjects;
      case 'personalSoftware':
        return personalSoftwareProjects;
      case 'games':
        return gamesProjects;
      default:
        return [];
    }
  };
  
  const filteredProjects = getFilteredProjects();
  
  // Calculate remaining empty slots - 8 slots for other categories to match AI Apps
  const emptySlotCount = ['all', 'aiApps', 'websites', 'businessApps', 'personalSoftware', 'games'].includes(activeCategory) ? 0 : 8;
  const emptySlots = Array(emptySlotCount).fill(null);

  return (
    <div key={language.code} className="min-h-screen bg-[#f8fafc] dark:bg-[#1A1A1A] text-gray-900 dark:text-white transition-colors">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
              {galleryTitle}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {gallerySubtitle}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categoryKeys.map((catKey) => (
              <button
                key={catKey}
                onClick={() => setActiveCategory(catKey)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === catKey
                    ? 'bg-gray-900 dark:bg-gray-700 text-white dark:text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {categoryLabels[catKey]}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Actual AI Apps Projects */}
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="group bg-white dark:bg-[#1A1A1A] rounded-xl border border-gray-200 dark:border-2 dark:border-gray-800 overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-all hover:shadow-lg"
              >
                {/* Preview Image - Full coverage */}
                <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={t(`galleryPage.projects.${project.titleKey}`)}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    loading={index < 8 ? 'eager' : 'lazy'}
                    quality={70}
                  />
                </div>
                
                {/* Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{t(`galleryPage.projects.${project.titleKey}`)}</h3>
                    <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                      {t(`galleryPage.categories.${project.categoryKey}`)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{builtWithLabel}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{project.author}</span>
                    </div>
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {viewLabel}
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Empty Slots */}
            {emptySlots.map((_, i) => (
              <div 
                key={i} 
                className="group bg-white dark:bg-[#1A1A1A] rounded-xl border border-gray-200 dark:border-2 dark:border-gray-800 overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-all hover:shadow-lg"
              >
                {/* Preview - Empty with pulse animation - same aspect ratio as AI Apps */}
                <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-900 flex items-center justify-center relative overflow-hidden">
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
                    <span className="text-sm text-gray-400 dark:text-gray-600">{t('galleryPage.comingSoon')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Submit CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-2xl border border-gray-200 dark:border-2 dark:border-gray-800 p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{t('galleryPage.shareTitle')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              {t('galleryPage.shareSubtitle')}
            </p>
            <Link href="/signup" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 font-medium rounded-lg transition-colors">
              {t('galleryPage.submitProject')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      {/* Image Preview Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative max-w-6xl w-full max-h-[90vh] bg-white dark:bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Full Quality Image */}
            <div className="relative w-full" style={{ height: 'calc(90vh - 100px)' }}>
              <Image
                src={selectedProject.image}
                alt={t(`galleryPage.projects.${selectedProject.titleKey}`)}
                fill
                sizes="90vw"
                className="object-contain"
                quality={90}
                priority
              />
            </div>
            
            {/* Project Info */}
            <div className="p-6 border-t border-gray-200 dark:border-t-2 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t(`galleryPage.projects.${selectedProject.titleKey}`)}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t('galleryPage.builtWithBy')} {selectedProject.author}</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                  {t(`galleryPage.categories.${selectedProject.categoryKey}`)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
