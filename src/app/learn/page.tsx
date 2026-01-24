'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LearnPage() {
  const courses = [
    {
      title: 'Getting Started with Procode',
      description: 'Learn the basics of creating apps with AI. Perfect for absolute beginners.',
      duration: '15 min',
      level: 'Beginner',
      lessons: 5,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Building Your First Dashboard',
      description: 'Create a complete analytics dashboard from scratch with real-time data.',
      duration: '30 min',
      level: 'Beginner',
      lessons: 8,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Advanced Prompting Techniques',
      description: 'Master the art of writing effective prompts that generate exactly what you need.',
      duration: '25 min',
      level: 'Intermediate',
      lessons: 6,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'E-commerce Store Masterclass',
      description: 'Build a fully functional online store with payments, inventory, and orders.',
      duration: '45 min',
      level: 'Intermediate',
      lessons: 12,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Custom Components & Styling',
      description: 'Create reusable components with custom themes that match your brand.',
      duration: '35 min',
      level: 'Advanced',
      lessons: 9,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: 'Deploying to Production',
      description: 'Launch your app to the world with custom domains and SSL certificates.',
      duration: '20 min',
      level: 'Intermediate',
      lessons: 5,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Building Mobile-First Apps',
      description: 'Design responsive applications that work beautifully on any device.',
      duration: '40 min',
      level: 'Intermediate',
      lessons: 10,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'API Integration Essentials',
      description: 'Connect your app to external services, databases, and third-party APIs.',
      duration: '50 min',
      level: 'Advanced',
      lessons: 14,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Authentication & Security',
      description: 'Implement secure user authentication and protect your application.',
      duration: '35 min',
      level: 'Advanced',
      lessons: 8,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
  ];

  const learningPaths = [
    { 
      name: 'Web Developer', 
      description: 'Build modern web applications from scratch',
      courses: 8, 
      hours: 12,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    { 
      name: 'Product Designer', 
      description: 'Create beautiful, user-friendly interfaces',
      courses: 6, 
      hours: 8,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    { 
      name: 'Entrepreneur', 
      description: 'Launch your MVP and validate ideas fast',
      courses: 5, 
      hours: 6,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    { 
      name: 'Marketer', 
      description: 'Build landing pages and marketing tools',
      courses: 4, 
      hours: 5,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
    },
  ];

  const features = [
    {
      title: 'Interactive Lessons',
      description: 'Learn by doing with hands-on exercises and real projects.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
    },
    {
      title: 'Certificate of Completion',
      description: 'Earn certificates to showcase your new skills.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: 'Community Support',
      description: 'Get help from our community of learners and experts.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Progress Tracking',
      description: 'Track your learning journey and pick up where you left off.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300';
      case 'Intermediate':
        return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300';
      case 'Advanced':
        return 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300';
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-50 to-gray-50 dark:from-gray-800 dark:to-gray-800 border border-gray-300 dark:border-gray-700 mb-8">
            <svg className="w-4 h-4 text-gray-900 dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Free Learning Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Learn to Build with
            <span className="block bg-clip-text text-transparent" style={{ background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)', WebkitBackgroundClip: 'text' }}>
              Procode
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Free courses, tutorials, and hands-on projects to help you master 
            AI-powered app development. Go from beginner to expert at your own pace.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-4 text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg"
              style={{ background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)' }}
            >
              Start Learning Free
            </Link>
            <Link
              href="#courses"
              className="px-8 py-4 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-50 dark:from-gray-900 dark:to-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 dark:text-white">50+</div>
              <div className="text-gray-600 dark:text-gray-400 mt-1">Free Courses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 dark:text-white">100K+</div>
              <div className="text-gray-600 dark:text-gray-400 mt-1">Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 dark:text-white">4.9</div>
              <div className="text-gray-600 dark:text-gray-400 mt-1">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 dark:text-white">24/7</div>
              <div className="text-gray-600 dark:text-gray-400 mt-1">Community Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-gradient-to-r from-gray-100 to-gray-100 dark:from-gray-800 dark:to-gray-800 rounded-2xl flex items-center justify-center text-gray-900 dark:text-gray-100 mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Curated courses designed for your specific goals and skill level.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPaths.map((path, index) => (
              <div
                key={index}
                className="group p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-gray-100 to-gray-100 dark:from-gray-700 dark:to-gray-700 rounded-2xl flex items-center justify-center text-gray-900 dark:text-gray-100 mb-4 group-hover:scale-110 transition-transform">
                  {path.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {path.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{path.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>{path.courses} courses</span>
                  <span>•</span>
                  <span>{path.hours} hours</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section id="courses" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Courses
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Start with our most popular courses, handpicked by our community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-100 dark:from-gray-700 dark:to-gray-700 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-2xl flex items-center justify-center text-gray-900 dark:text-gray-100 group-hover:scale-110 transition-transform">
                    {course.icon}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{course.lessons} lessons</span>
                    <span className="text-gray-900 dark:text-white font-medium text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Start Course
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
            >
              View All Courses
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-50 to-gray-50 dark:from-gray-900 dark:to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <svg className="w-12 h-12 text-gray-400 dark:text-gray-600 mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-white mb-8 leading-relaxed">
            "I went from knowing nothing about coding to building my own startup's MVP in just 3 weeks. 
            The courses are incredibly well-structured and the community is amazing."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-r from-[#1f2937] to-[#374151] rounded-full flex items-center justify-center text-white font-semibold text-lg">
              AK
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900 dark:text-white">Alex Kim</div>
              <div className="text-gray-600 dark:text-gray-400">Founder, TechStart</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#1f2937] to-[#374151]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your Learning Journey Today
          </h2>
          <p className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto">
            Join over 100,000 students who have transformed their skills with Procode. 
            All courses are completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg"
            >
              Create Free Account
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
