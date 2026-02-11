'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useTranslation } from '@/context/LanguageContext';

export default function LearnPublishPage() {
  const { t } = useTranslation();

  const steps = [
    {
      number: '01',
      title: 'Describe Your App',
      description: 'Start by telling AppNode what you want to build. Use natural language to describe your app\'s features, design, and functionality. The more specific you are, the better the result.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Watch It Build',
      description: 'AppNode\'s AI generates your application in real-time. You\'ll see the code being written and your app taking shape with instant previews. Make changes by simply asking for them.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Preview & Iterate',
      description: 'Test your app directly in the browser. See how it looks on desktop, tablet, and mobile. Request changes, add features, or adjust styling until it\'s perfect.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Deploy Instantly',
      description: 'When you\'re ready, publish your app with one click. Get a custom domain, SSL certificate, and global CDN automatically. Your app is live in seconds.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
    },
  ];

  const features = [
    {
      title: 'One-Click Deployment',
      description: 'No complex setup or configuration. Just click deploy and your app is live.',
      icon: '🚀',
    },
    {
      title: 'Custom Domains',
      description: 'Connect your own domain or use our free subdomain for instant publishing.',
      icon: '🌐',
    },
    {
      title: 'SSL Certificates',
      description: 'Automatic HTTPS for all your apps. Security comes standard.',
      icon: '🔒',
    },
    {
      title: 'Global CDN',
      description: 'Your app is served from edge locations worldwide for blazing fast speeds.',
      icon: '⚡',
    },
    {
      title: 'Instant Rollbacks',
      description: 'Made a mistake? Roll back to any previous version with one click.',
      icon: '↩️',
    },
    {
      title: 'Built-in Analytics',
      description: 'Track visitors, page views, and performance metrics out of the box.',
      icon: '📊',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#1A1A1A] text-gray-900 dark:text-white transition-colors">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-2 dark:border-gray-800 mb-6">
              <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">How It Works</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
              Build & Publish with AppNode
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Learn how to use AppNode's AI-powered code generator to create and deploy applications. 
              From idea to live website in minutes, not months.
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Four Simple Steps
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Creating and publishing your app has never been easier. Follow these steps to go from idea to live application.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-200 dark:border-2 dark:border-gray-800 p-8 hover:border-gray-300 dark:hover:border-gray-700 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gray-900 dark:bg-white rounded-2xl flex items-center justify-center text-white dark:text-gray-900">
                      {step.icon}
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-gray-400 dark:text-gray-600">STEP {step.number}</span>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-1 mb-3">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Deployment Features
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need to publish professional applications is included out of the box.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-200 dark:border-2 dark:border-gray-800 p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gray-900 dark:bg-white rounded-3xl p-8 md:p-12 text-white dark:text-gray-900">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Tips for Best Results</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-400 dark:text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/90 dark:text-gray-700"><strong className="text-white dark:text-gray-900">Be specific:</strong> Describe colors, layouts, and functionality you want</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-400 dark:text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/90 dark:text-gray-700"><strong className="text-white dark:text-gray-900">Start simple:</strong> Begin with core features, then add more over time</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-400 dark:text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/90 dark:text-gray-700"><strong className="text-white dark:text-gray-900">Use references:</strong> Share examples of apps or websites you like</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-400 dark:text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/90 dark:text-gray-700"><strong className="text-white dark:text-gray-900">Test on all devices:</strong> Check desktop, tablet, and mobile views</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Build?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Start creating your application today. No coding experience required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/signup" 
              className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg"
            >
              Start Building Free
            </Link>
            <Link 
              href="/docs" 
              className="px-8 py-4 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-2 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              View Documentation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
