'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const featuredProjects = [
  { id: 1, title: 'contentfarm-video-agency', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80', category: 'Website', author: 'J', authorName: 'Jake M.', authorColor: 'bg-yellow-500', remixes: 3335 },
  { id: 2, title: 'mnagateway', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80', category: 'Website', author: 'S', authorName: 'Sarah K.', authorColor: 'bg-purple-500', remixes: 15 },
  { id: 3, title: 'trade-tune-journal-61', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80', category: 'Consumer App', author: 'T', authorName: 'Tom H.', authorColor: 'bg-green-500', remixes: 22 },
  { id: 4, title: 'sorare-basic', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80', category: 'Website', author: 'S', authorName: 'Steve R.', authorColor: 'bg-blue-500', remixes: 6980 },
  { id: 5, title: 'ai-spark-toolkit-guide', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80', category: 'Website', author: 'A', authorName: 'Alex R.', authorColor: 'bg-cyan-500', remixes: 11 },
  { id: 6, title: 'fphi', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80', category: 'Website', author: 'S', authorName: 'Sam L.', authorColor: 'bg-teal-500', remixes: 6 },
  { id: 7, title: 'micoach-lab', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80', category: 'Personal', author: 'M', authorName: 'Mike T.', authorColor: 'bg-indigo-500', remixes: 1044 },
  { id: 8, title: 'crm-growth-booster', image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&q=80', category: 'B2B App', author: 'C', authorName: 'Chris P.', authorColor: 'bg-orange-500', remixes: 10 },
  { id: 9, title: 'mamut-rebuild-project', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80', category: 'Website', author: 'B', authorName: 'Ben C.', authorColor: 'bg-blue-600', remixes: 1848 },
  { id: 10, title: 'two-way-talents', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80', category: 'Consumer App', author: 'T', authorName: 'Tyler J.', authorColor: 'bg-red-500', remixes: 0 },
  { id: 11, title: 'pgt-quote', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80', category: 'B2B App', author: 'P', authorName: 'Paul G.', authorColor: 'bg-gray-900', remixes: 2 },
  { id: 12, title: 'greek-lessons-eri-diou', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80', category: 'Website', author: 'E', authorName: 'Eri D.', authorColor: 'bg-emerald-500', remixes: 6 },
  { id: 13, title: 'restrecoverywellness', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80', category: 'Website', author: 'R', authorName: 'Rachel S.', authorColor: 'bg-green-600', remixes: 3051 },
  { id: 14, title: 'billbook-builder', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80', category: 'Internal Tools', author: 'I', authorName: 'Ivan K.', authorColor: 'bg-violet-500', remixes: 10285 },
  { id: 15, title: 'quasar-prestige-path', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80', category: 'Website', author: 'Q', authorName: 'Quinn M.', authorColor: 'bg-amber-500', remixes: 9 },
  { id: 16, title: 'rentguarantee-haven', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80', category: 'B2B App', author: 'S', authorName: 'Sophie W.', authorColor: 'bg-lime-600', remixes: 1899 },
  { id: 17, title: 'wanderlust-connect-tribe', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80', category: 'Consumer App', author: 'W', authorName: 'Will T.', authorColor: 'bg-sky-500', remixes: 4 },
  { id: 18, title: 'pawfect-gallery', image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80', category: 'Personal', author: 'P', authorName: 'Petra N.', authorColor: 'bg-rose-500', remixes: 2 },
  { id: 19, title: 'iv-therapy-website', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80', category: 'Website', author: 'I', authorName: 'Ivy L.', authorColor: 'bg-cyan-600', remixes: 6 },
  { id: 20, title: 'velocargopro', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80', category: 'Website', author: 'A', authorName: 'Adam F.', authorColor: 'bg-gray-500', remixes: 1941 },
  { id: 21, title: 'fitness-tracker-pro', image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&q=80', category: 'Consumer App', author: 'F', authorName: 'Felix B.', authorColor: 'bg-red-600', remixes: 2847 },
  { id: 22, title: 'crypto-dashboard', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80', category: 'Internal Tools', author: 'C', authorName: 'Carl D.', authorColor: 'bg-yellow-600', remixes: 5632 },
  { id: 23, title: 'recipe-sharing-app', image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&q=80', category: 'Consumer App', author: 'R', authorName: 'Rosa M.', authorColor: 'bg-orange-600', remixes: 1234 },
  { id: 24, title: 'music-streaming-ui', image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=600&q=80', category: 'Prototype', author: 'M', authorName: 'Marcus L.', authorColor: 'bg-purple-600', remixes: 892 },
  { id: 25, title: 'ecommerce-starter', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80', category: 'Website', author: 'E', authorName: 'Emma L.', authorColor: 'bg-gray-900', remixes: 7823 },
  { id: 26, title: 'social-media-dashboard', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80', category: 'Internal Tools', author: 'S', authorName: 'Stan K.', authorColor: 'bg-blue-700', remixes: 3456 },
  { id: 27, title: 'travel-booking-platform', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80', category: 'Consumer App', author: 'T', authorName: 'Tina R.', authorColor: 'bg-teal-600', remixes: 2198 },
  { id: 28, title: 'job-portal-template', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80', category: 'B2B App', author: 'J', authorName: 'John P.', authorColor: 'bg-indigo-600', remixes: 1567 },
  { id: 29, title: 'learning-management', image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80', category: 'Website', author: 'L', authorName: 'Lisa M.', authorColor: 'bg-emerald-600', remixes: 4521 },
  { id: 30, title: 'real-estate-listings', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80', category: 'Website', author: 'R', authorName: 'Rick B.', authorColor: 'bg-amber-600', remixes: 3892 },
  { id: 31, title: 'healthcare-portal', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80', category: 'B2B App', author: 'H', authorName: 'Helen C.', authorColor: 'bg-cyan-700', remixes: 1823 },
  { id: 32, title: 'event-management-app', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', category: 'Consumer App', author: 'E', authorName: 'Eric N.', authorColor: 'bg-violet-600', remixes: 2156 },
];

const categories = ['Featured', 'Discover', 'Internal Tools', 'Website', 'Personal', 'Consumer App', 'B2B App', 'Prototype'];

const discussions = [
  {
    id: 1,
    title: 'Best practices for building responsive layouts',
    author: 'David K.',
    replies: 24,
    lastActivity: '2 hours ago',
    category: 'Tips & Tricks',
  },
  {
    id: 2,
    title: 'How to integrate Stripe payments?',
    author: 'Anna M.',
    replies: 15,
    lastActivity: '5 hours ago',
    category: 'Help',
  },
  {
    id: 3,
    title: 'Share your latest project!',
    author: 'Community',
    replies: 89,
    lastActivity: '30 min ago',
    category: 'Showcase',
  },
  {
    id: 4,
    title: 'Feature request: Dark mode support',
    author: 'Tom H.',
    replies: 42,
    lastActivity: '1 day ago',
    category: 'Feature Requests',
  },
];

const topContributors = [
  { name: 'Sarah K.', projects: 45, avatar: 'SK', gradient: 'from-gray-900 to-rose-500' },
  { name: 'Mike T.', projects: 38, avatar: 'MT', gradient: 'from-blue-500 to-cyan-500' },
  { name: 'Emma L.', projects: 32, avatar: 'EL', gradient: 'from-purple-500 to-violet-500' },
  { name: 'Alex R.', projects: 29, avatar: 'AR', gradient: 'from-green-500 to-emerald-500' },
  { name: 'Chris P.', projects: 26, avatar: 'CP', gradient: 'from-orange-500 to-amber-500' },
];

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState('Featured');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = featuredProjects.filter(project => {
    const matchesCategory = selectedCategory === 'Featured' || selectedCategory === 'Discover' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.authorName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Explore the
            <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)', WebkitBackgroundClip: 'text' }}> Community</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Discover inspiring projects, connect with creators, and share your work with thousands of builders.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, templates, and creators..."
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent text-base bg-white/80 dark:bg-black/80 dark:text-white backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900 dark:text-white">50K+</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Projects Created</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900 dark:text-white">12K+</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active Builders</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900 dark:text-white">1M+</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Monthly Visitors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Projects Grid */}
            <div className="flex-1">
              {/* Category Filter */}
              <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      selectedCategory === category
                        ? 'text-white shadow-md'
                        : 'bg-gray-100 dark:bg-black text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-900'
                    }`}
                    style={selectedCategory === category ? { background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)' } : {}}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Projects */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="group bg-white dark:bg-black rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer"
                  >
                    {/* Project Preview */}
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        unoptimized
                      />
                    </div>
                    
                    {/* Project Info */}
                    <div className="p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`w-6 h-6 rounded-full ${project.authorColor} flex items-center justify-center text-[10px] font-medium text-white`}>
                          {project.author}
                        </div>
                        <h3 className="font-medium text-gray-900 dark:text-white text-sm truncate flex-1">
                          {project.title}
                        </h3>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${
                          project.category === 'Website' ? 'bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300' :
                          project.category === 'Personal' ? 'bg-gray-100 dark:bg-black text-gray-700 dark:text-gray-300' :
                          project.category === 'Internal Tools' ? 'bg-blue-100 dark:bg-black text-blue-700 dark:text-blue-300' :
                          project.category === 'Consumer App' ? 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300' :
                          project.category === 'B2B App' ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300' :
                          project.category === 'Prototype' ? 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300' :
                          'bg-gray-100 dark:bg-black text-gray-700 dark:text-gray-300'
                        }`}>
                          {project.category}
                        </span>
                      </div>
                      <p className="text-xs text-gray-900 dark:text-gray-300">{project.remixes.toLocaleString()} Remixes</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-10">
                <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  Load More Projects
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80 space-y-6">
              {/* Top Contributors */}
              <div className="bg-gray-50 dark:bg-black/50 rounded-2xl p-5">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">🏆 Top Contributors</h3>
                <div className="space-y-3">
                  {topContributors.map((contributor, index) => (
                    <div key={contributor.name} className="flex items-center gap-3">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400 w-4">{index + 1}</span>
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${contributor.gradient} flex items-center justify-center text-white text-xs font-medium`}>
                        {contributor.avatar}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{contributor.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{contributor.projects} projects</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 text-sm text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 font-medium">
                  View All →
                </button>
              </div>

              {/* Discussions */}
              <div className="bg-gray-50 dark:bg-black/50 rounded-2xl p-5">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">💬 Recent Discussions</h3>
                <div className="space-y-4">
                  {discussions.map((discussion) => (
                    <div key={discussion.id} className="border-b border-gray-200 dark:border-gray-700 pb-3 last:border-0 last:pb-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white hover:text-gray-900 cursor-pointer line-clamp-2">
                        {discussion.title}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-2 py-0.5 bg-gray-200 dark:bg-black text-gray-600 dark:text-gray-300 rounded">{discussion.category}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{discussion.replies} replies</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 text-sm text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 font-medium">
                  Join Discussion →
                </button>
              </div>

              {/* Discord CTA */}
              <div className="bg-gradient-to-br from-[#1f2937] to-[#374151] rounded-2xl p-5 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                  </svg>
                  <h3 className="font-semibold text-lg">Join our Discord</h3>
                </div>
                <p className="text-sm text-white/80 mb-4">
                  Connect with 5,000+ builders, get help, and share your projects.
                </p>
                <a
                  href="https://discord.gg/Procode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2.5 bg-white text-gray-900 font-semibold rounded-lg text-center hover:bg-gray-100 transition-colors"
                >
                  Join Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to share your creation?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Build something amazing and showcase it to the community.
          </p>
          <Link
            href="/"
            className="inline-flex px-8 py-4 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg"
            style={{ background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)' }}
          >
            Start Building
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
