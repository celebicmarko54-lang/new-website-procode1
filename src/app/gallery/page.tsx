'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTranslation } from '@/context/LanguageContext';

// AI Apps projects with actual images
const aiAppsProjects = [
  { id: 1, title: 'E-commerce AI', image: '/templates/AIAPPS1.png', author: 'AppNode Team', category: 'AI Apps' },
  { id: 2, title: 'Customer Support AI', image: '/templates/AIAPPS2.png', author: 'AppNode Team', category: 'AI Apps' },
  { id: 3, title: 'AI Content Writer', image: '/templates/AIAPPS3.png', author: 'AppNode Team', category: 'AI Apps' },
  { id: 4, title: 'AI Image Generator', image: '/templates/AIAPPS4.png', author: 'AppNode Team', category: 'AI Apps' },
  { id: 5, title: 'Text to Speech AI', image: '/templates/AIAPPRS5.png', author: 'AppNode Team', category: 'AI Apps' },
  { id: 6, title: 'Data Analytics AI', image: '/templates/AIAPPPS3.png', author: 'AppNode Team', category: 'AI Apps' },
  { id: 7, title: 'AI Video Creator', image: '/templates/AIAPPS7.png', author: 'AppNode Team', category: 'AI Apps' },
  { id: 8, title: 'AI Code Assistant', image: '/templates/AIAPPS8.png', author: 'AppNode Team', category: 'AI Apps' },
];

// Website projects with actual images
const websiteProjects = [
  { id: 9, title: 'Travel Blog', image: '/templates/WEBSITE1.png', author: 'AppNode Team', category: 'Websites' },
  { id: 10, title: 'Design Studio', image: '/templates/WEBSITE2.png', author: 'AppNode Team', category: 'Websites' },
  { id: 11, title: 'Business Website', image: '/templates/WEBSITE3.png', author: 'AppNode Team', category: 'Websites' },
  { id: 12, title: 'Art Magazine', image: '/templates/WEBSITE4.png', author: 'AppNode Team', category: 'Websites' },
  { id: 13, title: 'Fashion Blog', image: '/templates/WEBSITE5NEW.png', author: 'AppNode Team', category: 'Websites' },
  { id: 14, title: 'Product Landing', image: '/templates/WEBSITE6.png', author: 'AppNode Team', category: 'Websites' },
  { id: 15, title: 'Fragrance Store', image: '/templates/WEBSITE7.png', author: 'AppNode Team', category: 'Websites' },
  { id: 16, title: 'Restaurant Site', image: '/templates/WEBSITE8.png', author: 'AppNode Team', category: 'Websites' },
];

// Business Apps projects with actual images
const businessAppsProjects = [
  { id: 17, title: 'CRM Dashboard', image: '/templates/biznis1.png', author: 'AppNode Team', category: 'Business Apps' },
  { id: 18, title: 'Order Dashboard', image: '/templates/biznis2.png', author: 'AppNode Team', category: 'Business Apps' },
  { id: 19, title: 'Project Dashboard', image: '/templates/biznis3.png', author: 'AppNode Team', category: 'Business Apps' },
  { id: 20, title: 'Web Analytics', image: '/templates/Biznis4.png', author: 'AppNode Team', category: 'Business Apps' },
  { id: 21, title: 'Sales Analytics', image: '/templates/biznis5.png', author: 'AppNode Team', category: 'Business Apps' },
  { id: 22, title: 'Analytics Dashboard', image: '/templates/Biznis6.png', author: 'AppNode Team', category: 'Business Apps' },
  { id: 23, title: 'Performance Dashboard', image: '/templates/biznis7.png', author: 'AppNode Team', category: 'Business Apps' },
  { id: 24, title: 'Business Analytics', image: '/templates/biznis8.png', author: 'AppNode Team', category: 'Business Apps' },
];

// Personal Software projects with actual images
const personalSoftwareProjects = [
  { id: 25, title: 'Wellness & Meditation', image: '/templates/presonal1.png', author: 'AppNode Team', category: 'Personal Software' },
  { id: 26, title: 'Personal Finance', image: '/templates/personal2.png', author: 'AppNode Team', category: 'Personal Software' },
  { id: 27, title: 'LifeOS Productivity', image: '/templates/personal3.png', author: 'AppNode Team', category: 'Personal Software' },
  { id: 28, title: 'Digital Journal', image: '/templates/personal4.png', author: 'AppNode Team', category: 'Personal Software' },
  { id: 29, title: 'Personal Dashboard', image: '/templates/personal5.png', author: 'AppNode Team', category: 'Personal Software' },
  { id: 30, title: 'Task Dashboard', image: '/templates/personal6.png', author: 'AppNode Team', category: 'Personal Software' },
  { id: 31, title: 'Finance Dashboard', image: '/templates/personal7.png', author: 'AppNode Team', category: 'Personal Software' },
  { id: 32, title: 'Daily Planner', image: '/templates/Personal8.png', author: 'AppNode Team', category: 'Personal Software' },
];

// Games projects with actual images
const gamesProjects = [
  { id: 33, title: 'Cyber Runner', image: '/templates/GAME1.png', author: 'AppNode Team', category: 'Games' },
  { id: 34, title: 'Mystic Forest', image: '/templates/GAME2.png', author: 'AppNode Team', category: 'Games' },
  { id: 35, title: 'Space Odyssey', image: '/templates/GAME3.png', author: 'AppNode Team', category: 'Games' },
  { id: 36, title: 'Neon City', image: '/templates/GAME6.png', author: 'AppNode Team', category: 'Games' },
  { id: 37, title: 'Cell Evolution', image: '/templates/GAME7.png', author: 'AppNode Team', category: 'Games' },
  { id: 38, title: 'Detective Dashboard', image: '/templates/GAME HOME1.png', author: 'AppNode Team', category: 'Games' },
  { id: 39, title: 'Party Games', image: '/templates/GAME HOME2.png', author: 'AppNode Team', category: 'Games' },
  { id: 40, title: 'Drift Rush', image: '/templates/GAME HOME3.png', author: 'AppNode Team', category: 'Games' },
];

// All projects combined for preloading
const allProjects = [...aiAppsProjects, ...websiteProjects, ...businessAppsProjects, ...personalSoftwareProjects, ...gamesProjects];

export default function GalleryPage() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof aiAppsProjects[0] | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const categories = ['All', 'AI Apps', 'Websites', 'Business Apps', 'Personal Software', 'Games'];
  
  // Preload all images on mount
  useEffect(() => {
    const preloadImages = async () => {
      const promises = allProjects.map((project) => {
        return new Promise<void>((resolve) => {
          const img = new window.Image();
          img.src = project.image;
          img.onload = () => resolve();
          img.onerror = () => resolve();
        });
      });
      await Promise.all(promises);
      setImagesLoaded(true);
    };
    preloadImages();
  }, []);
  
  // Filter projects based on active category
  const getFilteredProjects = () => {
    switch (activeCategory) {
      case 'All':
        return [...aiAppsProjects, ...websiteProjects, ...businessAppsProjects, ...personalSoftwareProjects, ...gamesProjects];
      case 'AI Apps':
        return aiAppsProjects;
      case 'Websites':
        return websiteProjects;
      case 'Business Apps':
        return businessAppsProjects;
      case 'Personal Software':
        return personalSoftwareProjects;
      case 'Games':
        return gamesProjects;
      default:
        return [];
    }
  };
  
  const filteredProjects = getFilteredProjects();
  
  // Calculate remaining empty slots - 8 slots for other categories to match AI Apps
  const emptySlotCount = ['All', 'AI Apps', 'Websites', 'Business Apps', 'Personal Software', 'Games'].includes(activeCategory) ? 0 : 8;
  const emptySlots = Array(emptySlotCount).fill(null);

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#1A1A1A] text-gray-900 dark:text-white transition-colors">
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
                    ? 'bg-gray-900 dark:bg-gray-700 text-white dark:text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
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
                    alt={project.title}
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
                    <h3 className="font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                    <span className="text-xs px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Built with AppNode</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{project.author}</span>
                    </div>
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      View
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
                    <span className="text-sm text-gray-400 dark:text-gray-600">Coming soon</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Submit CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-2xl border border-gray-200 dark:border-2 dark:border-gray-800 p-8 md:p-12 text-center">
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
                alt={selectedProject.title}
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
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Built with AppNode by {selectedProject.author}</p>
                </div>
                <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-medium">
                  {selectedProject.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
