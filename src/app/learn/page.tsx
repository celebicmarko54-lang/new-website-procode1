'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from '@/context/LanguageContext';

interface CourseData {
  titleKey: string;
  descriptionKey: string;
  duration: number;
  levelKey: string;
  lessons: number;
  icon: React.ReactNode;
  tutorialKey: string;
  tutorialContent: {
    overview: string;
    steps: string[];
    tips: string[];
  };
}

export default function LearnPage() {
  const { t, language } = useTranslation();
  const [selectedCourse, setSelectedCourse] = useState<CourseData | null>(null);
  
  const courses: CourseData[] = [
    {
      titleKey: 'learnPage.courses.gettingStarted.title',
      descriptionKey: 'learnPage.courses.gettingStarted.description',
      duration: 15,
      levelKey: 'beginner',
      lessons: 5,
      tutorialKey: 'learnPage.tutorials.gettingStarted',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      tutorialContent: {
        overview: 'Get started with AppNode by learning the fundamentals of AI-powered app development.',
        steps: [
          'Sign up for a free AppNode account at appnode.ai',
          'Navigate to the dashboard and click "New Project"',
          'Describe your app idea in the chat interface',
          'Review the generated code and make adjustments',
          'Deploy your app with one click'
        ],
        tips: [
          'Be specific when describing your app requirements',
          'Start with simple projects to learn the workflow',
          'Use the preview feature to test changes in real-time'
        ]
      }
    },
    {
      titleKey: 'learnPage.courses.buildingDashboard.title',
      descriptionKey: 'learnPage.courses.buildingDashboard.description',
      duration: 30,
      levelKey: 'beginner',
      lessons: 8,
      tutorialKey: 'learnPage.tutorials.buildingDashboard',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      tutorialContent: {
        overview: 'Learn to build professional analytics dashboards with charts, metrics, and real-time data.',
        steps: [
          'Start a new project and describe your dashboard needs',
          'Add chart components (bar, line, pie charts)',
          'Connect to your data source or use sample data',
          'Customize colors and layouts to match your brand',
          'Add interactive filters and date pickers',
          'Test responsiveness on different screen sizes',
          'Deploy and share with your team'
        ],
        tips: [
          'Group related metrics together',
          'Use consistent color coding for data categories',
          'Keep the most important metrics at the top'
        ]
      }
    },
    {
      titleKey: 'learnPage.courses.advancedPrompting.title',
      descriptionKey: 'learnPage.courses.advancedPrompting.description',
      duration: 25,
      levelKey: 'intermediate',
      lessons: 6,
      tutorialKey: 'learnPage.tutorials.advancedPrompting',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      tutorialContent: {
        overview: 'Master prompt engineering to get better results from AppNode AI.',
        steps: [
          'Understand the anatomy of a good prompt',
          'Use specific technical requirements in your prompts',
          'Learn to iterate and refine based on output',
          'Combine multiple features in single prompts',
          'Use reference examples to guide the AI'
        ],
        tips: [
          'Always specify the tech stack you want',
          'Include accessibility requirements',
          'Mention responsive design needs upfront'
        ]
      }
    },
    {
      titleKey: 'learnPage.courses.ecommerce.title',
      descriptionKey: 'learnPage.courses.ecommerce.description',
      duration: 45,
      levelKey: 'intermediate',
      lessons: 12,
      tutorialKey: 'learnPage.tutorials.ecommerce',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      tutorialContent: {
        overview: 'Create a complete e-commerce solution with product catalog, cart, and checkout.',
        steps: [
          'Set up product catalog with categories',
          'Build shopping cart functionality',
          'Integrate Stripe for payments',
          'Create order management system',
          'Add inventory tracking',
          'Set up email notifications',
          'Implement user accounts and order history'
        ],
        tips: [
          'Start with a simple product catalog first',
          'Test the checkout flow thoroughly',
          'Use test payment credentials during development'
        ]
      }
    },
    {
      titleKey: 'learnPage.courses.customComponents.title',
      descriptionKey: 'learnPage.courses.customComponents.description',
      duration: 35,
      levelKey: 'advanced',
      lessons: 9,
      tutorialKey: 'learnPage.tutorials.customComponents',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      tutorialContent: {
        overview: 'Learn to create consistent, reusable components with custom styling.',
        steps: [
          'Define your brand colors and typography',
          'Create a component library structure',
          'Build reusable button, input, and card components',
          'Implement dark mode support',
          'Add animation and transitions',
          'Document your components'
        ],
        tips: [
          'Start with a design system in mind',
          'Use CSS variables for theming',
          'Test components in isolation'
        ]
      }
    },
    {
      titleKey: 'learnPage.courses.deploying.title',
      descriptionKey: 'learnPage.courses.deploying.description',
      duration: 20,
      levelKey: 'intermediate',
      lessons: 5,
      tutorialKey: 'learnPage.tutorials.deploying',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      tutorialContent: {
        overview: 'Deploy your application to production with confidence.',
        steps: [
          'Choose a deployment platform (Vercel, Cloudflare, etc.)',
          'Configure environment variables',
          'Set up your custom domain',
          'Enable SSL certificate',
          'Configure CDN and caching'
        ],
        tips: [
          'Always test in a staging environment first',
          'Set up monitoring and alerts',
          'Keep environment variables secure'
        ]
      }
    },
    {
      titleKey: 'learnPage.courses.mobileFirst.title',
      descriptionKey: 'learnPage.courses.mobileFirst.description',
      duration: 40,
      levelKey: 'intermediate',
      lessons: 10,
      tutorialKey: 'learnPage.tutorials.mobileFirst',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      tutorialContent: {
        overview: 'Create responsive, mobile-first applications that work on all devices.',
        steps: [
          'Understand mobile-first design principles',
          'Use responsive breakpoints effectively',
          'Optimize touch interactions',
          'Handle different screen orientations',
          'Test on real devices',
          'Optimize performance for mobile networks'
        ],
        tips: [
          'Design for the smallest screen first',
          'Use relative units (rem, %) instead of pixels',
          'Test with throttled network conditions'
        ]
      }
    },
    {
      titleKey: 'learnPage.courses.apiIntegration.title',
      descriptionKey: 'learnPage.courses.apiIntegration.description',
      duration: 50,
      levelKey: 'advanced',
      lessons: 14,
      tutorialKey: 'learnPage.tutorials.apiIntegration',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      tutorialContent: {
        overview: 'Learn to integrate external APIs and services into your applications.',
        steps: [
          'Understand REST API fundamentals',
          'Handle API authentication (API keys, OAuth)',
          'Make GET, POST, PUT, DELETE requests',
          'Handle errors and edge cases',
          'Implement rate limiting',
          'Cache API responses for performance'
        ],
        tips: [
          'Always handle API errors gracefully',
          'Use environment variables for API keys',
          'Implement retry logic for failed requests'
        ]
      }
    },
    {
      titleKey: 'learnPage.courses.authSecurity.title',
      descriptionKey: 'learnPage.courses.authSecurity.description',
      duration: 35,
      levelKey: 'advanced',
      lessons: 8,
      tutorialKey: 'learnPage.tutorials.authSecurity',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      tutorialContent: {
        overview: 'Implement robust authentication and security measures in your app.',
        steps: [
          'Set up user registration and login',
          'Implement password hashing and validation',
          'Add social login (Google, GitHub)',
          'Create protected routes',
          'Implement session management',
          'Add two-factor authentication'
        ],
        tips: [
          'Never store plain text passwords',
          'Use HTTPS everywhere',
          'Implement rate limiting on auth endpoints'
        ]
      }
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300';
      case 'intermediate':
        return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300';
      case 'advanced':
        return 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300';
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#1A1A1A]">
      <Header />
      
      {/* Course Modal */}
      {selectedCourse && (
        <div 
          key={`modal-${language.code}`}
          className="fixed inset-0 bg-black/50 dark:bg-[#1A1A1A]/70 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCourse(null)}
        >
          <div 
            className="bg-white dark:bg-[#1A1A1A] rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-gray-200 dark:border-2 dark:border-gray-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-[#1A1A1A] border-b border-gray-200 dark:border-b-2 dark:border-gray-800 p-6 flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center text-gray-900 dark:text-white">
                  {selectedCourse.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">{t(selectedCourse.titleKey)}</h2>
                  <div className="flex items-center gap-3 mt-1">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${getLevelColor(selectedCourse.levelKey)}`}>
                      {t(`learnPage.levels.${selectedCourse.levelKey}`)}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{selectedCourse.duration} {t('learnPage.min')}</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setSelectedCourse(null)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 space-y-6" suppressHydrationWarning>
              {/* Debug info */}
              <div className="text-xs text-red-500">
                DEBUG: language.code = {language.code}, 
                t(learnPage.modal.overview) = {t('learnPage.modal.overview')}
              </div>
              {/* Overview */}
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2" suppressHydrationWarning>
                  {t('learnPage.modal.overview')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400" suppressHydrationWarning>
                  {t(selectedCourse.tutorialKey + '.overview')}
                </p>
              </div>
              
              {/* Steps */}
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{t('learnPage.modal.howToDoIt')}</h3>
                <ol className="space-y-3">
                  {selectedCourse.tutorialContent.steps.map((_, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 pt-0.5">{t(selectedCourse.tutorialKey + '.steps.' + index)}</span>
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
                  {t('learnPage.modal.proTips')}
                </h3>
                <ul className="space-y-2">
                  {selectedCourse.tutorialContent.tips.map((_, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                      <svg className="w-4 h-4 text-gray-400 dark:text-gray-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {t(selectedCourse.tutorialKey + '.tips.' + index)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white dark:bg-[#1A1A1A] border-t border-gray-200 dark:border-t-2 dark:border-gray-800 p-6">
              <button 
                onClick={() => setSelectedCourse(null)}
                className="w-full py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-xl hover:opacity-90 transition-colors"
              >
                {t('learnPage.modal.gotIt')}
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-2 dark:border-gray-700 mb-8">
            <svg className="w-4 h-4 text-gray-900 dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('learnPage.badge')}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            {t('learnPage.titleStart')}
            <span className="block text-gray-900 dark:text-white">
              {t('learnPage.titleHighlight')}
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            {t('learnPage.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg"
            >
              {t('learnPage.startLearningFree')}
            </Link>
            <Link
              href="#courses"
              className="px-8 py-4 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
            >
              {t('learnPage.browseCourses')}
            </Link>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section id="courses" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('learnPage.popularCourses')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('learnPage.popularCoursesDesc')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={`${language.code}-${index}`}
                onClick={() => setSelectedCourse(course)}
                className="group bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-100 dark:border-2 dark:border-gray-800 overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="h-40 bg-gray-100 dark:bg-[#1A1A1A] flex items-center justify-center border-b border-gray-100 dark:border-b-2 dark:border-gray-800">
                  <div className="w-16 h-16 bg-white dark:bg-gray-900 rounded-2xl flex items-center justify-center text-gray-900 dark:text-gray-100 group-hover:scale-110 transition-transform">
                    {course.icon}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${getLevelColor(course.levelKey)}`} suppressHydrationWarning>
                      {t(`learnPage.levels.${course.levelKey}`)}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1" suppressHydrationWarning>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.duration} {t('learnPage.min')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" suppressHydrationWarning>
                    {t(course.titleKey)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4" suppressHydrationWarning>{t(course.descriptionKey)}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400" suppressHydrationWarning>{course.lessons} {t('learnPage.lessons')}</span>
                    <span className="text-gray-900 dark:text-white font-medium text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1" suppressHydrationWarning>
                      {t('learnPage.startCourse')}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-black dark:bg-[#1A1A1A] border-t border-gray-200 dark:border-t-2 dark:border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('learnPage.cta.title')}
          </h2>
          <p className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto">
            {t('learnPage.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg"
            >
              {t('learnPage.cta.createFreeAccount')}
            </Link>
            <Link
              href="/guides"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              {t('learnPage.cta.browseGuides')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
