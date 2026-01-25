'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'AI Apps', 'Websites', 'Business Apps', 'Personal Software', 'Games'];
  
  const projects = [
    { title: 'AI Chat Bot', category: 'AI Apps', author: 'Sarah M.', image: '🤖', description: 'Smart customer support chatbot built with GPT-4' },
    { title: 'Portfolio Site', category: 'Websites', author: 'Alex K.', image: '💼', description: 'Clean minimal portfolio for designers' },
    { title: 'KPI Dashboard', category: 'Business Apps', author: 'James W.', image: '📊', description: 'Real-time business metrics dashboard' },
    { title: 'Habit Tracker', category: 'Personal Software', author: 'Emily R.', image: '✅', description: 'Track daily habits and build streaks' },
    { title: 'Recipe Generator', category: 'AI Apps', author: 'Mike D.', image: '🍳', description: 'AI-powered recipe suggestions from ingredients' },
    { title: 'E-commerce Store', category: 'Business Apps', author: 'Lisa T.', image: '🛒', description: 'Full-featured online store with Stripe' },
    { title: 'Space Invaders', category: 'Games', author: 'Chris B.', image: '👾', description: 'Classic arcade game remake' },
    { title: 'Blog Platform', category: 'Websites', author: 'Jordan P.', image: '📝', description: 'Markdown-powered blogging platform' },
    { title: 'Code Review AI', category: 'AI Apps', author: 'Taylor N.', image: '🔍', description: 'AI that reviews your code for bugs' },
    { title: 'Budget Tracker', category: 'Personal Software', author: 'Sam L.', image: '💰', description: 'Track expenses and savings goals' },
    { title: 'Landing Page', category: 'Websites', author: 'Morgan K.', image: '🚀', description: 'High-converting SaaS landing page' },
    { title: 'CRM System', category: 'Business Apps', author: 'Riley J.', image: '👥', description: 'Customer relationship management tool' },
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-black text-gray-900 dark:text-white">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Gallery
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Explore what the AppNode community is building. Get inspired and start your own project.
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

        {/* Projects Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project, i) => (
              <div key={i} className="group bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                {/* Preview */}
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                
                {/* Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"></div>
                      <span className="text-sm text-gray-500">{project.author}</span>
                    </div>
                    <button className="text-sm text-purple-600 dark:text-purple-400 hover:underline">
                      View →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Submit CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Share Your Creation</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Built something cool with AppNode? Submit it to the gallery and inspire others.
            </p>
            <Link href="/signup" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors">
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
