'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ConnectionsPage() {
  const connections = [
    {
      name: 'Supabase',
      description: 'Open source Firebase alternative with PostgreSQL database',
      icon: '🔥',
      category: 'Database',
      status: 'available',
    },
    {
      name: 'Stripe',
      description: 'Payment processing and subscription management',
      icon: '💳',
      category: 'Payments',
      status: 'available',
    },
    {
      name: 'OpenAI',
      description: 'Add AI capabilities to your applications',
      icon: '🤖',
      category: 'AI',
      status: 'available',
    },
    {
      name: 'Vercel',
      description: 'Deploy and host your applications globally',
      icon: '▲',
      category: 'Hosting',
      status: 'available',
    },
    {
      name: 'GitHub',
      description: 'Version control and code collaboration',
      icon: '🐙',
      category: 'Development',
      status: 'available',
    },
    {
      name: 'Resend',
      description: 'Email API for developers',
      icon: '✉️',
      category: 'Communication',
      status: 'available',
    },
    {
      name: 'Cloudflare',
      description: 'CDN, security, and performance optimization',
      icon: '☁️',
      category: 'Infrastructure',
      status: 'available',
    },
    {
      name: 'Twilio',
      description: 'SMS, voice, and messaging APIs',
      icon: '📱',
      category: 'Communication',
      status: 'available',
    },
    {
      name: 'Auth0',
      description: 'Authentication and authorization platform',
      icon: '🔐',
      category: 'Authentication',
      status: 'available',
    },
    {
      name: 'Algolia',
      description: 'Search and discovery platform',
      icon: '🔍',
      category: 'Search',
      status: 'coming-soon',
    },
    {
      name: 'Shopify',
      description: 'E-commerce platform integration',
      icon: '🛍️',
      category: 'E-commerce',
      status: 'coming-soon',
    },
    {
      name: 'Notion',
      description: 'Connect to Notion databases and pages',
      icon: '📝',
      category: 'Productivity',
      status: 'coming-soon',
    },
  ];

  const categories = ['All', 'Database', 'Payments', 'AI', 'Hosting', 'Development', 'Communication', 'Authentication'];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-gray-50 text-gray-900 rounded-full text-sm font-medium mb-4">
              Integrations
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Connections & Integrations
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Supercharge your apps by connecting to powerful third-party services
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-gray-200 transition-all"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Connections Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {connections.map((connection) => (
              <div
                key={connection.name}
                className={`bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all cursor-pointer group ${
                  connection.status === 'coming-soon' ? 'opacity-75' : 'hover:border-orange-200'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{connection.icon}</span>
                  {connection.status === 'coming-soon' && (
                    <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
                      Coming Soon
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-1 group-hover:text-orange-600 transition-colors">
                  {connection.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{connection.description}</p>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                  {connection.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Request Integration */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Need a different integration?</h2>
            <p className="text-gray-300 mb-6">
              Let us know what services you'd like to connect with Procode
            </p>
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-medium transition-colors">
              Request Integration
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
