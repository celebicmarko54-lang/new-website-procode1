'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const featuredPost = {
    title: 'The Future of AI-Powered Development',
    excerpt: 'How artificial intelligence is transforming the way we build software and what it means for developers worldwide.',
    author: 'Sarah Chen',
    date: 'Nov 28, 2025',
    readTime: '8 min read',
    category: 'AI & Future',
  };

  const posts = [
    {
      title: 'Introducing Smart Styles: AI-Powered Design',
      excerpt: 'Our latest feature automatically creates beautiful, consistent styling for your apps.',
      author: 'Mike Johnson',
      date: 'Nov 25, 2025',
      readTime: '5 min read',
      category: 'Product',
    },
    {
      title: '10 Tips for Better AI Prompts',
      excerpt: 'Learn how to write prompts that get you exactly what you want, every time.',
      author: 'Emily Davis',
      date: 'Nov 22, 2025',
      readTime: '6 min read',
      category: 'Tips',
    },
    {
      title: 'Building for Scale: Performance Best Practices',
      excerpt: 'Optimize your AppNode projects for speed and reliability.',
      author: 'David Kim',
      date: 'Nov 20, 2025',
      readTime: '7 min read',
      category: 'Engineering',
    },
    {
      title: 'Community Spotlight: Amazing Projects',
      excerpt: 'Showcasing incredible applications built by our community members.',
      author: 'Lisa Wang',
      date: 'Nov 18, 2025',
      readTime: '4 min read',
      category: 'Community',
    },
    {
      title: 'Security Best Practices for Your Apps',
      excerpt: 'Keep your applications and user data safe with these essential tips.',
      author: 'Alex Rivera',
      date: 'Nov 15, 2025',
      readTime: '9 min read',
      category: 'Security',
    },
    {
      title: 'From Idea to Launch in One Day',
      excerpt: 'A step-by-step guide to shipping your first app in record time.',
      author: 'Jordan Lee',
      date: 'Nov 12, 2025',
      readTime: '6 min read',
      category: 'Tutorial',
    },
  ];

  const categories = [
    { name: 'All', count: 7 },
    { name: 'Product', count: 1 },
    { name: 'Engineering', count: 1 },
    { name: 'Tutorial', count: 1 },
    { name: 'Tips', count: 1 },
    { name: 'Community', count: 1 },
    { name: 'AI & Future', count: 1 },
  ];

  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-50 to-gray-50 border border-gray-300 mb-8">
            <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <span className="text-sm font-medium text-gray-700">Insights & Updates</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            AppNode
            <span className="block bg-clip-text text-transparent" style={{ background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)', WebkitBackgroundClip: 'text' }}>
              Blog
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Insights, tutorials, and updates from the AppNode team. 
            Stay ahead with the latest in AI-powered development.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 pb-12">
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
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <div className="grid md:grid-cols-2">
              <div className="aspect-square md:aspect-auto bg-gradient-to-br from-gray-100 to-gray-100 flex items-center justify-center p-12">
                <div className="w-32 h-32 bg-white/80 backdrop-blur rounded-3xl flex items-center justify-center text-gray-900 group-hover:scale-110 transition-transform">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-sm font-medium text-gray-900 mb-3">{featuredPost.category}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-gray-900 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#1f2937] to-[#374151] rounded-full flex items-center justify-center text-white text-xs font-semibold">
                      {featuredPost.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="font-medium text-gray-700">{featuredPost.author}</span>
                  </div>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={index}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[2/1] bg-gradient-to-br from-gray-50 to-gray-50 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/80 backdrop-blur rounded-2xl flex items-center justify-center text-gray-900 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-gray-900 bg-gray-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h3 className="font-semibold text-gray-900 mt-4 mb-2 group-hover:text-gray-900 transition-colors text-lg">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="font-medium text-gray-700">{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:text-gray-900 transition-all duration-300">
              Load More Posts
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-50 to-gray-50 border-y border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Get the latest articles, tutorials, and product updates delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
            />
            <button className="px-6 py-3 text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg" style={{ background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)' }}>
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#1f2937] to-[#374151]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Something?
          </h2>
          <p className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto">
            Turn your ideas into reality with AppNode. Start building today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg"
            >
              Get Started Free
            </Link>
            <Link
              href="/learn"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
