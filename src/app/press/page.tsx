'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PressPage() {
  const pressReleases = [
    {
      date: 'November 28, 2025',
      title: 'lovecode.dev Launches Smart Styles: AI-Powered Design for Everyone',
      description: 'New feature automatically creates beautiful, consistent designs across applications.',
      type: 'Product Launch',
    },
    {
      date: 'October 15, 2025',
      title: 'lovecode.dev Raises $50M Series B to Accelerate AI Development',
      description: 'Funding led by top-tier investors to expand team and enhance AI capabilities.',
      type: 'Funding',
    },
    {
      date: 'September 1, 2025',
      title: 'lovecode.dev Surpasses 1 Million Users Worldwide',
      description: 'Platform reaches major milestone with users across 150 countries.',
      type: 'Milestone',
    },
    {
      date: 'July 20, 2025',
      title: 'lovecode.dev Partners with Leading Universities for AI Research',
      description: 'Collaboration to advance AI-assisted software development education.',
      type: 'Partnership',
    },
  ];

  const mediaFeatures = [
    { outlet: 'TechCrunch', logo: '📰', quote: '"lovecode.dev is revolutionizing how we build software"' },
    { outlet: 'The Verge', logo: '📱', quote: '"The future of app development is here"' },
    { outlet: 'Wired', logo: '💻', quote: '"AI-powered development made accessible to everyone"' },
    { outlet: 'Forbes', logo: '📊', quote: '"One of the most innovative startups of 2025"' },
  ];

  const stats = [
    { value: '1M+', label: 'Users' },
    { value: '150+', label: 'Countries' },
    { value: '5M+', label: 'Apps Created' },
    { value: '$75M', label: 'Total Funding' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Press & <span className="text-pink-500">Media</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              News, press releases, and media resources for lovecode.dev
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                <div className="text-3xl font-bold text-pink-500 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Features */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured In</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaFeatures.map((feature) => (
              <div key={feature.outlet} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{feature.logo}</span>
                  <span className="font-semibold text-gray-900">{feature.outlet}</span>
                </div>
                <p className="text-sm text-gray-600 italic">{feature.quote}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Press Releases */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Press Releases</h2>
          <div className="space-y-4">
            {pressReleases.map((release) => (
              <div
                key={release.title}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-pink-200 transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm text-gray-500">{release.date}</span>
                      <span className="text-xs font-medium bg-pink-100 text-pink-600 px-2 py-0.5 rounded">
                        {release.type}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg group-hover:text-pink-600 transition-colors mb-2">
                      {release.title}
                    </h3>
                    <p className="text-gray-600">{release.description}</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-hover:text-pink-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Kit */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-white mb-2">Media Kit</h2>
                <p className="text-gray-300">Download logos, screenshots, and brand guidelines</p>
              </div>
              <button className="px-6 py-3 text-white rounded-lg hover:opacity-90 transition-all font-medium flex items-center gap-2\" style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)' }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Media Kit
              </button>
            </div>
          </div>
        </div>

        {/* Press Contact */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Press Inquiries</h2>
            <p className="text-gray-600 mb-4">For press and media inquiries, please contact our communications team</p>
            <a href="mailto:press@lovecode.dev.dev" className="text-pink-500 hover:text-pink-600 font-medium">
              press@lovecode.dev.dev
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
