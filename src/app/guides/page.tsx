'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from '@/context/LanguageContext';

interface Guide {
  title: string;
  description: string;
  readTime: string;
  category: string;
  featured?: boolean;
  icon: React.ReactNode;
  guideContent: {
    overview: string;
    steps: string[];
    tips: string[];
  };
}

export default function GuidesPage() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);

  const guides: Guide[] = [
    {
      title: 'Complete Guide to Building SaaS Apps',
      description: 'Everything you need to know about creating software-as-a-service applications with AppNode',
      readTime: '15 min read',
      category: 'SaaS',
      featured: true,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      guideContent: {
        overview: 'Learn to build a complete SaaS application from scratch, including user authentication, subscription billing, and multi-tenant architecture.',
        steps: [
          'Set up your project with authentication (login, signup, password reset)',
          'Create a dashboard layout with navigation and user settings',
          'Implement subscription billing with Stripe integration',
          'Build multi-tenant data isolation for different customer accounts',
          'Add role-based access control for team members',
          'Set up email notifications for key events',
          'Deploy to production with monitoring'
        ],
        tips: [
          'Start with a simple MVP and iterate based on user feedback',
          'Use environment variables for all API keys and secrets',
          'Implement proper error handling from the start'
        ]
      }
    },
    {
      title: 'E-commerce Best Practices',
      description: 'Learn how to build high-converting online stores with payment integration',
      readTime: '12 min read',
      category: 'E-commerce',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      guideContent: {
        overview: 'Create a high-converting e-commerce store with product catalog, shopping cart, and secure checkout.',
        steps: [
          'Design an attractive product catalog with categories and filters',
          'Build a persistent shopping cart with local storage',
          'Integrate Stripe or PayPal for payments',
          'Create order confirmation and tracking pages',
          'Set up inventory management',
          'Implement customer reviews and ratings'
        ],
        tips: [
          'Use high-quality product images',
          'Keep the checkout process simple (3 steps max)',
          'Show trust badges and secure payment icons'
        ]
      }
    },
    {
      title: 'Mastering Dashboard Design',
      description: 'Create beautiful and functional analytics dashboards that users love',
      readTime: '10 min read',
      category: 'Design',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      guideContent: {
        overview: 'Design professional analytics dashboards with clear data visualization and intuitive layouts.',
        steps: [
          'Define the key metrics your users need to see',
          'Create a wireframe with proper visual hierarchy',
          'Choose appropriate chart types for each data type',
          'Implement interactive filters and date ranges',
          'Add data export functionality',
          'Optimize for different screen sizes'
        ],
        tips: [
          'Put the most important metrics at the top',
          'Use consistent color coding across all charts',
          'Avoid cluttering - less is more'
        ]
      }
    },
    {
      title: 'Authentication & Security',
      description: 'Implement secure user authentication and protect your applications',
      readTime: '8 min read',
      category: 'Security',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      guideContent: {
        overview: 'Implement robust authentication and security best practices to protect your users and data.',
        steps: [
          'Set up secure user registration with email verification',
          'Implement password hashing with bcrypt or similar',
          'Add OAuth social login (Google, GitHub)',
          'Create protected routes and middleware',
          'Implement session management with secure cookies',
          'Add rate limiting to prevent brute force attacks'
        ],
        tips: [
          'Never store passwords in plain text',
          'Use HTTPS for all connections',
          'Implement proper CORS policies'
        ]
      }
    },
    {
      title: 'Database Integration Guide',
      description: 'Connect your app to databases and manage data efficiently',
      readTime: '14 min read',
      category: 'Backend',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      guideContent: {
        overview: 'Learn to connect your application to databases and implement efficient data management.',
        steps: [
          'Choose the right database (SQL vs NoSQL)',
          'Set up your database connection with environment variables',
          'Design your data schema and relationships',
          'Implement CRUD operations (Create, Read, Update, Delete)',
          'Add data validation before database operations',
          'Set up database migrations for schema changes'
        ],
        tips: [
          'Always use parameterized queries to prevent SQL injection',
          'Index frequently queried columns',
          'Back up your data regularly'
        ]
      }
    },
    {
      title: 'Responsive Design Patterns',
      description: 'Make your apps look great on all devices with mobile-first design',
      readTime: '9 min read',
      category: 'Design',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      guideContent: {
        overview: 'Create responsive designs that work beautifully across all screen sizes.',
        steps: [
          'Start with mobile-first CSS approach',
          'Use flexible grid layouts (CSS Grid, Flexbox)',
          'Implement responsive breakpoints (sm, md, lg, xl)',
          'Optimize images for different screen densities',
          'Test touch interactions on mobile devices',
          'Use relative units (rem, %, vh/vw) instead of pixels'
        ],
        tips: [
          'Test on real devices, not just browser dev tools',
          'Consider thumb-friendly tap targets on mobile',
          'Prioritize content for smaller screens'
        ]
      }
    },
    {
      title: 'API Integration Masterclass',
      description: 'Connect to third-party services and APIs seamlessly',
      readTime: '11 min read',
      category: 'Backend',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      guideContent: {
        overview: 'Learn to integrate external APIs and third-party services into your applications.',
        steps: [
          'Understand REST API fundamentals (endpoints, methods)',
          'Set up API authentication (API keys, OAuth tokens)',
          'Make HTTP requests (GET, POST, PUT, DELETE)',
          'Handle API responses and errors gracefully',
          'Implement retry logic for failed requests',
          'Cache responses to improve performance'
        ],
        tips: [
          'Store API keys in environment variables',
          'Handle rate limiting with exponential backoff',
          'Log API calls for debugging'
        ]
      }
    },
    {
      title: 'Performance Optimization',
      description: 'Speed up your apps for better user experience and SEO',
      readTime: '13 min read',
      category: 'Performance',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      guideContent: {
        overview: 'Optimize your application for speed, better user experience, and improved SEO.',
        steps: [
          'Analyze current performance with Lighthouse',
          'Optimize and compress images (WebP format, lazy loading)',
          'Minimize JavaScript and CSS bundles',
          'Implement code splitting and lazy loading',
          'Set up proper caching headers',
          'Use a CDN for static assets'
        ],
        tips: [
          'Aim for < 3 second initial page load',
          'Use performance budgets to track regressions',
          'Monitor Core Web Vitals regularly'
        ]
      }
    },
  ];

  const categories = [
    { name: 'All', count: 8 },
    { name: 'SaaS', count: 1 },
    { name: 'E-commerce', count: 1 },
    { name: 'Design', count: 2 },
    { name: 'Security', count: 1 },
    { name: 'Backend', count: 2 },
    { name: 'Performance', count: 1 },
  ];

  const filteredGuides = activeCategory === 'All' 
    ? guides 
    : guides.filter(g => g.category === activeCategory);

  const featuredGuide = guides.find(g => g.featured);

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#1A1A1A]">
      <Header />
      
      {/* Guide Modal */}
      {selectedGuide && (
        <div 
          className="fixed inset-0 bg-black/50 dark:bg-[#1A1A1A]/70 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedGuide(null)}
        >
          <div 
            className="bg-white dark:bg-[#1A1A1A] rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-gray-200 dark:border-2 dark:border-gray-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-[#1A1A1A] border-b border-gray-200 dark:border-b-2 dark:border-gray-800 p-6 flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center text-gray-900 dark:text-white">
                  {selectedGuide.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">{selectedGuide.title}</h2>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                      {selectedGuide.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{selectedGuide.readTime}</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setSelectedGuide(null)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Overview */}
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Overview</h3>
                <p className="text-gray-600 dark:text-gray-400">{selectedGuide.guideContent.overview}</p>
              </div>
              
              {/* Steps */}
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">How to do it</h3>
                <ol className="space-y-3">
                  {selectedGuide.guideContent.steps.map((step, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              
              {/* Tips */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Pro Tips
                </h3>
                <ul className="space-y-2">
                  {selectedGuide.guideContent.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                      <svg className="w-4 h-4 text-gray-400 dark:text-gray-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white dark:bg-[#1A1A1A] border-t border-gray-200 dark:border-t-2 dark:border-gray-800 p-6">
              <button 
                onClick={() => setSelectedGuide(null)}
                className="w-full py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-xl hover:opacity-90 transition-colors"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-2 dark:border-gray-700 mb-8">
            <svg className="w-4 h-4 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('guidesPage.badge')}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            {t('guidesPage.titleStart')}
            <span className="block text-gray-900 dark:text-white">
              {t('guidesPage.titleHighlight')}
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            {t('guidesPage.subtitle')}
          </p>
        </div>
      </section>

      {/* Featured Guide */}
      {featuredGuide && (
        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <div 
              onClick={() => setSelectedGuide(featuredGuide)}
              className="bg-black dark:bg-[#1A1A1A] rounded-3xl p-8 md:p-12 text-white cursor-pointer hover:shadow-2xl transition-all duration-300 group border border-gray-800"
            >
              <div className="flex flex-col md:flex-row items-start justify-between gap-8">
                <div className="flex-1">
                  <span className="inline-block px-4 py-1.5 bg-white/20 rounded-full text-sm font-medium mb-6">
                    ⭐ {t('guidesPage.featuredGuide')}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:translate-x-1 transition-transform">{featuredGuide.title}</h2>
                  <p className="text-white/90 text-lg mb-6 max-w-2xl">{featuredGuide.description}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-white/80">{featuredGuide.readTime}</span>
                    <span className="text-sm bg-white/20 px-3 py-1 rounded-full">{featuredGuide.category}</span>
                  </div>
                </div>
                <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center">
                  {featuredGuide.icon}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="px-6 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.name
                    ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg'
                    : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-2 dark:border-gray-700 hover:border-gray-300'
                }`}
              >
                {category.name}
                <span className={`ml-2 text-xs ${activeCategory === category.name ? 'text-gray-300 dark:text-gray-600' : 'text-gray-400'}`}>
                  ({category.count})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">{t('guidesPage.allGuides')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGuides.filter(g => !g.featured).map((guide, index) => (
              <div
                key={index}
                onClick={() => setSelectedGuide(guide)}
                className="group bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-100 dark:border-2 dark:border-gray-800 p-6 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 bg-gray-100 dark:bg-gray-900 rounded-2xl flex items-center justify-center text-gray-900 dark:text-white mb-6 group-hover:scale-110 transition-transform">
                  {guide.icon}
                </div>
                <span className="text-xs font-medium text-gray-900 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-full">
                  {guide.category}
                </span>
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg mt-4 mb-2 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{guide.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-500">{guide.readTime}</span>
                  <span className="text-gray-900 dark:text-white font-medium text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    {t('guidesPage.readGuide')}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-black dark:bg-[#1A1A1A] border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('guidesPage.cta.title')}
          </h2>
          <p className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto">
            {t('guidesPage.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg"
            >
              {t('guidesPage.cta.getStartedFree')}
            </Link>
            <Link
              href="/templates"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              {t('guidesPage.cta.browseTemplates')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
