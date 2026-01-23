'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState('Featured');

  const categories = [
    { name: 'Featured', count: 12 },
    { name: 'Discover', count: 50 },
    { name: 'Internal Tools', count: 8 },
    { name: 'Website', count: 15 },
    { name: 'Personal', count: 10 },
    { name: 'Consumer App', count: 12 },
    { name: 'B2B App', count: 9 },
    { name: 'Prototype', count: 6 },
    { name: 'Standard Web & Mobile', count: 14 },
    { name: 'Business & Startup', count: 11 },
    { name: 'E-Commerce & Service', count: 8 },
    { name: 'Personal & Lifestyle', count: 7 },
    { name: 'Education & Productivity', count: 9 },
    { name: 'Creative & Media', count: 6 },
    { name: 'Gaming & Interactive', count: 5 },
    { name: 'Developer Tools', count: 7 },
    { name: 'AI-Powered', count: 10 },
    { name: 'Web3 & Blockchain', count: 8 },
    { name: 'NFT & Collectibles', count: 5 },
    { name: 'DeFi & Crypto Finance', count: 6 },
    { name: 'DAO & Governance', count: 4 },
    { name: 'Experimental', count: 5 },
    { name: 'Meme & Viral', count: 7 },
    { name: 'Random & Chaos', count: 4 },
    { name: 'Social & Community', count: 9 },
    { name: 'Utilities', count: 8 },
    { name: 'Entertainment & Humor', count: 6 },
  ];

  const templates = [
    // Featured
    { id: 1, name: 'Analytics Pro', category: 'Featured', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', uses: '2.4k', description: 'Complete analytics dashboard with charts and metrics' },
    { id: 2, name: 'ShopifyClone', category: 'Featured', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80', uses: '1.8k', description: 'Full-featured online store with cart and checkout' },
    { id: 3, name: 'DevPortfolio', category: 'Featured', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80', uses: '3.2k', description: 'Modern developer portfolio with project showcase' },
    { id: 4, name: 'StartupLanding', category: 'Featured', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', uses: '4.5k', description: 'High-converting startup landing page' },
    // Internal Tools
    { id: 5, name: 'CRM Suite', category: 'Internal Tools', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80', uses: '1.2k', description: 'Customer relationship management system' },
    { id: 6, name: 'TaskFlow', category: 'Internal Tools', image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80', uses: '2.1k', description: 'Project management app with kanban boards' },
    // Website
    { id: 7, name: 'TechBlog', category: 'Website', image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80', uses: '1.5k', description: 'Clean blog template with markdown support' },
    { id: 8, name: 'PortfolioX', category: 'Website', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', uses: '2.8k', description: 'Creative portfolio for designers and artists' },
    // Personal
    { id: 9, name: 'FitTrack', category: 'Personal', image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80', uses: '1.4k', description: 'Fitness tracking app with workout plans' },
    { id: 10, name: 'HabitLoop', category: 'Personal', image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80', uses: '1.1k', description: 'Daily habit tracker with streaks and goals' },
    // Consumer App
    { id: 11, name: 'SocialHub', category: 'Consumer App', image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f5c370?w=800&q=80', uses: '1.9k', description: 'Social media dashboard and scheduler' },
    { id: 12, name: 'FoodieApp', category: 'Consumer App', image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&q=80', uses: '2.3k', description: 'Recipe sharing and meal planning app' },
    // B2B App
    { id: 13, name: 'SaaSMetrics', category: 'B2B App', image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&q=80', uses: '1.7k', description: 'SaaS metrics and revenue analytics' },
    { id: 14, name: 'InvoiceGen', category: 'B2B App', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80', uses: '1.3k', description: 'Invoice generator for freelancers and agencies' },
    // E-Commerce & Service
    { id: 15, name: 'PropertyPro', category: 'E-Commerce & Service', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80', uses: '2.0k', description: 'Real estate listing and property management' },
    { id: 16, name: 'BookingHub', category: 'E-Commerce & Service', image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80', uses: '1.6k', description: 'Appointment booking for services' },
    // Education & Productivity
    { id: 17, name: 'LearnHub', category: 'Education & Productivity', image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80', uses: '980', description: 'Online learning platform with courses' },
    { id: 18, name: 'NoteFlow', category: 'Education & Productivity', image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80', uses: '2.5k', description: 'Note-taking app with rich text editor' },
    // AI-Powered
    { id: 19, name: 'AIWriter', category: 'AI-Powered', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80', uses: '3.1k', description: 'AI content generation and copywriting' },
    { id: 20, name: 'ChatBot Pro', category: 'AI-Powered', image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80', uses: '2.7k', description: 'Custom AI chatbot builder' },
    // Web3 & Blockchain
    { id: 21, name: 'NFT Gallery', category: 'Web3 & Blockchain', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80', uses: '1.8k', description: 'NFT marketplace and gallery showcase' },
    { id: 22, name: 'DeFi Dashboard', category: 'Web3 & Blockchain', image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80', uses: '1.5k', description: 'DeFi portfolio tracker and analytics' },
    // Social & Community
    { id: 23, name: 'CommunityHub', category: 'Social & Community', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80', uses: '2.2k', description: 'Community forum and discussion platform' },
    { id: 24, name: 'EventMeet', category: 'Social & Community', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', uses: '1.9k', description: 'Event planning and meetup organizer' },
    // Entertainment & Humor
    { id: 25, name: 'MemeGen', category: 'Entertainment & Humor', image: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=800&q=80', uses: '4.2k', description: 'Meme generator with templates' },
    { id: 26, name: 'QuizMaster', category: 'Entertainment & Humor', image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80', uses: '3.0k', description: 'Interactive quiz and trivia games' },
    // Gaming & Interactive
    { id: 27, name: 'GameLobby', category: 'Gaming & Interactive', image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80', uses: '1.6k', description: 'Multiplayer game lobby and matchmaking' },
    { id: 28, name: 'LeaderBoard', category: 'Gaming & Interactive', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80', uses: '1.4k', description: 'Gaming leaderboards and stats' },
    // Developer Tools
    { id: 29, name: 'APITester', category: 'Developer Tools', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80', uses: '2.1k', description: 'API testing and documentation tool' },
    { id: 30, name: 'CodeShare', category: 'Developer Tools', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80', uses: '1.8k', description: 'Code snippet sharing platform' },
  ];

  const filteredTemplates = activeCategory === 'Featured' 
    ? templates.filter(t => t.category === 'Featured')
    : activeCategory === 'Discover'
    ? templates
    : templates.filter(t => t.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-50 to-fuchsia-50 border border-pink-200 mb-8">
            <svg className="w-4 h-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
            <span className="text-sm font-medium text-pink-700">200+ Ready-to-use Templates</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Start with a
            <span className="block bg-clip-text text-transparent" style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)', WebkitBackgroundClip: 'text' }}>
              Template
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Choose from our collection of professionally designed templates. 
            Customize them to your needs and launch in minutes, not weeks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-4 text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg"
              style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)' }}
            >
              Browse All Templates
            </Link>
            <Link
              href="/learn"
              className="px-8 py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-pink-300 hover:text-pink-600 transition-all duration-300"
            >
              Learn How to Customize
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-pink-50 to-fuchsia-50 border-y border-pink-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">200+</div>
              <div className="text-gray-600 mt-1">Templates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">27</div>
              <div className="text-gray-600 mt-1">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">50K+</div>
              <div className="text-gray-600 mt-1">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">Free</div>
              <div className="text-gray-600 mt-1">To Use</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.name
                    ? 'text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-pink-50 hover:text-pink-600 border border-gray-200 hover:border-pink-200'
                }`}
                style={activeCategory === category.name ? { background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)' } : {}}
              >
                {category.name}
                <span className={`ml-2 text-xs ${activeCategory === category.name ? 'text-pink-200' : 'text-gray-400'}`}>
                  ({category.count})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-pink-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                  <Image 
                    src={template.image} 
                    alt={template.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6">
                    <button className="px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold text-sm hover:bg-pink-50 transition-colors shadow-lg">
                      Use Template
                    </button>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full text-xs font-medium shadow-sm">
                      {template.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 text-lg group-hover:text-pink-600 transition-colors">
                      {template.name}
                    </h3>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {template.uses}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{template.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-pink-300 hover:text-pink-600 transition-all duration-300">
              Load More Templates
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Use Our Templates?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Save time and launch faster with production-ready templates.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-pink-200 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-pink-100 to-fuchsia-100 rounded-2xl flex items-center justify-center text-pink-600 mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Launch Instantly</h3>
              <p className="text-gray-600">Skip weeks of development. Each template is ready to deploy and customize immediately.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-pink-200 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-pink-100 to-fuchsia-100 rounded-2xl flex items-center justify-center text-pink-600 mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fully Customizable</h3>
              <p className="text-gray-600">Every element can be modified. Change colors, layouts, and content with natural language.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-pink-200 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-pink-100 to-fuchsia-100 rounded-2xl flex items-center justify-center text-pink-600 mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Production Ready</h3>
              <p className="text-gray-600">Built with best practices. Responsive, accessible, and optimized for performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#ec4899] to-[#be185d]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-pink-100 mb-12 max-w-2xl mx-auto">
            Pick a template and start customizing. Your next project is just a few clicks away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-4 bg-white text-pink-600 font-semibold rounded-xl hover:bg-pink-50 transition-all duration-300 shadow-lg"
            >
              Get Started Free
            </Link>
            <Link
              href="/guides"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              View Guides
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
