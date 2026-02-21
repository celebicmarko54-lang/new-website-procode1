'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from '@/context/LanguageContext';

export default function BlogPage() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const featuredPost = {
    title: t('blogPage.posts.featured.title'),
    excerpt: t('blogPage.posts.featured.excerpt'),
    date: 'Mon, Feb 3, 2026',
    category: t('blogPage.categories.featured'),
  };

  const posts = [
    {
      title: t('blogPage.posts.supabase.title'),
      excerpt: t('blogPage.posts.supabase.excerpt'),
      date: 'Fri, Jan 31, 2026',
      category: 'Product',
      categoryKey: 'product',
    },
    {
      title: t('blogPage.posts.smartStyles.title'),
      excerpt: t('blogPage.posts.smartStyles.excerpt'),
      date: 'Wed, Jan 22, 2026',
      category: 'Product',
      categoryKey: 'product',
    },
    {
      title: t('blogPage.posts.security.title'),
      excerpt: t('blogPage.posts.security.excerpt'),
      date: 'Mon, Jan 13, 2026',
      category: 'Engineering',
      categoryKey: 'engineering',
    },
    {
      title: t('blogPage.posts.prompting.title'),
      excerpt: t('blogPage.posts.prompting.excerpt'),
      date: 'Fri, Jan 3, 2026',
      category: 'Tips',
      categoryKey: 'tips',
    },
    {
      title: t('blogPage.posts.spotlight.title'),
      excerpt: t('blogPage.posts.spotlight.excerpt'),
      date: 'Wed, Dec 25, 2025',
      category: 'Community',
      categoryKey: 'community',
    },
    {
      title: t('blogPage.posts.collaboration.title'),
      excerpt: t('blogPage.posts.collaboration.excerpt'),
      date: 'Mon, Dec 15, 2025',
      category: 'Product',
      categoryKey: 'product',
    },
    {
      title: t('blogPage.posts.caseStudy.title'),
      excerpt: t('blogPage.posts.caseStudy.excerpt'),
      date: 'Fri, Dec 5, 2025',
      category: 'Community',
      categoryKey: 'community',
    },
    {
      title: t('blogPage.posts.architecture.title'),
      excerpt: t('blogPage.posts.architecture.excerpt'),
      date: 'Wed, Nov 26, 2025',
      category: 'Engineering',
      categoryKey: 'engineering',
    },
    {
      title: t('blogPage.posts.mobile.title'),
      excerpt: t('blogPage.posts.mobile.excerpt'),
      date: 'Mon, Nov 17, 2025',
      category: 'Product',
      categoryKey: 'product',
    },
    {
      title: t('blogPage.posts.enterprise.title'),
      excerpt: t('blogPage.posts.enterprise.excerpt'),
      date: 'Fri, Nov 7, 2025',
      category: 'News',
      categoryKey: 'news',
    },
    {
      title: t('blogPage.posts.future.title'),
      excerpt: t('blogPage.posts.future.excerpt'),
      date: 'Wed, Oct 29, 2025',
      category: 'AI',
      categoryKey: 'ai',
    },
    {
      title: t('blogPage.posts.performance.title'),
      excerpt: t('blogPage.posts.performance.excerpt'),
      date: 'Mon, Oct 20, 2025',
      category: 'Engineering',
      categoryKey: 'engineering',
    },
  ];

  const categories = [
    { name: t('blogPage.categories.all'), slug: 'all', key: 'All' },
    { name: t('blogPage.categories.ai'), slug: 'ai', key: 'AI' },
    { name: t('blogPage.categories.product'), slug: 'product', key: 'Product' },
    { name: t('blogPage.categories.engineering'), slug: 'engineering', key: 'Engineering' },
    { name: t('blogPage.categories.community'), slug: 'community', key: 'Community' },
    { name: t('blogPage.categories.tips'), slug: 'tips', key: 'Tips' },
    { name: t('blogPage.categories.news'), slug: 'news', key: 'News' },
  ];

  // Filter posts by category and search
  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="min-h-screen bg-white dark:bg-[#1A1A1A]">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Featured Post */}
        <section className="max-w-5xl mx-auto px-6 mb-12">
          <Link href="#" className="group block">
            <article className="py-8 border-b-2 border-gray-200 dark:border-b-2 dark:border-gray-800">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span className="text-orange-500 dark:text-orange-400 font-medium">{featuredPost.category}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                {featuredPost.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl">
                {featuredPost.excerpt}
              </p>
            </article>
          </Link>
        </section>

        {/* Search and Categories */}
        <section className="max-w-5xl mx-auto px-6 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Search */}
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder={t('blogPage.searchPlaceholder') || 'Search the blog...'}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full sm:w-72 px-4 py-2.5 pl-10 bg-gray-50 dark:bg-[#161b22] border border-gray-200 dark:border-2 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 focus:border-transparent transition-all"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Category Filter */}
            <nav className="flex flex-wrap items-center gap-1 overflow-x-auto pb-2 sm:pb-0">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => {
                    setActiveCategory(category.key);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-all ${
                    activeCategory === category.key
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </nav>
          </div>
        </section>

        {/* Posts List */}
        <section className="max-w-5xl mx-auto px-6">
          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {paginatedPosts.map((post, index) => (
              <Link href="#" key={index} className="group block">
                <article className="py-8">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </article>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {paginatedPosts.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                {t('blogPage.noPostsFound') || 'No posts found matching your criteria.'}
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="flex items-center justify-center gap-2 pt-12 pb-8">
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium transition-all ${
                    currentPage === page
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {page}
                </button>
              ))}
              {totalPages > 1 && currentPage < totalPages && (
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </nav>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
