'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function GuidesPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const guides = [
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
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-50 to-gray-50 border border-gray-300 mb-8">
            <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-sm font-medium text-gray-700">In-Depth Tutorials</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Developer
            <span className="block bg-clip-text text-transparent" style={{ background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)', WebkitBackgroundClip: 'text' }}>
              Guides
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            In-depth tutorials and best practices for building amazing applications. 
            From beginner to advanced, we&apos;ve got you covered.
          </p>
        </div>
      </section>

      {/* Featured Guide */}
      {featuredGuide && (
        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-[#1f2937] to-[#374151] rounded-3xl p-8 md:p-12 text-white cursor-pointer hover:shadow-2xl transition-all duration-300 group">
              <div className="flex flex-col md:flex-row items-start justify-between gap-8">
                <div className="flex-1">
                  <span className="inline-block px-4 py-1.5 bg-white/20 rounded-full text-sm font-medium mb-6">
                    ⭐ Featured Guide
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
                    ? 'text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-gray-200 hover:border-gray-300'
                }`}
                style={activeCategory === category.name ? { background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)' } : {}}
              >
                {category.name}
                <span className={`ml-2 text-xs ${activeCategory === category.name ? 'text-gray-300' : 'text-gray-400'}`}>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGuides.filter(g => !g.featured).map((guide, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-100 p-6 hover:border-gray-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-gray-100 to-gray-100 rounded-2xl flex items-center justify-center text-gray-900 mb-6 group-hover:scale-110 transition-transform">
                  {guide.icon}
                </div>
                <span className="text-xs font-medium text-gray-900 bg-gray-50 px-3 py-1 rounded-full">
                  {guide.category}
                </span>
                <h3 className="font-semibold text-gray-900 text-lg mt-4 mb-2 group-hover:text-gray-900 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{guide.readTime}</span>
                  <span className="text-gray-900 font-medium text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read Guide
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
      <section className="py-24 px-6 bg-gradient-to-r from-[#1f2937] to-[#374151]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto">
            Put what you&apos;ve learned into practice. Create your first app today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg"
            >
              Get Started Free
            </Link>
            <Link
              href="/templates"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              Browse Templates
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
