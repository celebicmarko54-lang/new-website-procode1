'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Landing Page Builder',
    description: 'Create high-converting landing pages in minutes. No templates needed - describe what you want.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'Lead Capture Forms',
    description: 'Build smart forms with validation, conditional logic, and direct CRM integration.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Analytics Dashboard',
    description: 'Track conversions, user behavior, and campaign performance all in one place.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>
    ),
    title: 'A/B Testing Ready',
    description: 'Create multiple variants and test what works. Data-driven decisions made easy.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    title: 'Custom Domains',
    description: 'Use your own domain for a professional look. SSL included automatically.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'SEO Optimized',
    description: 'Built-in SEO best practices. Meta tags, sitemaps, and structured data handled.',
  },
];

const useCases = [
  {
    title: 'Product Launches',
    description: 'Build launch pages that convert. Countdown timers, waitlists, and early access forms.',
    icon: '🚀',
  },
  {
    title: 'Event Registration',
    description: 'Create event pages with registration, ticketing, and attendee management.',
    icon: '🎟️',
  },
  {
    title: 'Lead Magnets',
    description: 'Offer ebooks, guides, or tools in exchange for email addresses.',
    icon: '🧲',
  },
  {
    title: 'Campaign Microsites',
    description: 'Dedicated sites for marketing campaigns with full brand control.',
    icon: '🎯',
  },
];

const testimonials = [
  {
    quote: "We launched 10 landing pages in one week. Our conversion rate doubled.",
    author: "Mike Torres",
    role: "Marketing Director",
    company: "GrowthCo",
    avatar: "MT",
  },
  {
    quote: "No more waiting for dev resources. I can test ideas the moment I have them.",
    author: "Jennifer Lee",
    role: "Growth Manager",
    company: "ScaleUp",
    avatar: "JL",
  },
  {
    quote: "Our landing page performance improved 40% since switching to lovecode.dev.",
    author: "David Chen",
    role: "CMO",
    company: "TechBrand",
    avatar: "DC",
  },
];

export default function MarketersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-pink-100 rounded-full mb-6">
              <span className="text-xs font-semibold text-pink-700">FOR MARKETERS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Launch campaigns
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)', WebkitBackgroundClip: 'text' }}> at the speed of ideas</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Create landing pages, microsites, and marketing tools instantly. 
              No developers needed, no delays, no limits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/"
                className="px-8 py-4 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg text-center"
                style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)' }}
              >
                Start Creating
              </Link>
              <a
                href="#use-cases"
                className="px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors text-center"
              >
                View Use Cases
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900">5 min</p>
              <p className="text-sm text-gray-600 mt-1">Avg. Build Time</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900">3x</p>
              <p className="text-sm text-gray-600 mt-1">More Campaigns</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900">40%</p>
              <p className="text-sm text-gray-600 mt-1">Higher Conversion</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900">$0</p>
              <p className="text-sm text-gray-600 mt-1">Dev Costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything marketers need
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built-in tools for landing pages, lead capture, analytics, and more.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-2xl border border-gray-200 hover:border-pink-200 hover:shadow-lg transition-all bg-white group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#be185d] text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Built for your campaigns
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-sm text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Marketing teams love lovecode.dev
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-fuchsia-50 border border-pink-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ec4899] to-[#be185d] flex items-center justify-center text-white font-medium text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to supercharge your marketing?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Launch your next campaign in minutes, not weeks.
          </p>
          <Link
            href="/"
            className="inline-flex px-8 py-4 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg"
            style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)' }}
          >
            Start Creating Free
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
