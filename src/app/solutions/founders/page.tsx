'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Launch in Days, Not Months',
    description: 'Go from idea to working product in record time. Our AI-powered builder handles the heavy lifting.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Iterate Rapidly',
    description: 'Test ideas, gather feedback, and pivot quickly. Make changes in minutes, not sprints.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Impress Investors',
    description: 'Create polished demos that look production-ready. Stand out in your next pitch meeting.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Save Your Runway',
    description: 'Cut development costs by up to 90%. Spend your capital on growth, not engineering.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Scale When Ready',
    description: 'Built on modern architecture that grows with you. From MVP to enterprise scale.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Build Your Team Later',
    description: 'Start solo and add team members when you\'re ready. No engineering hire needed to launch.',
  },
];

const testimonials = [
  {
    quote: "We went from napkin sketch to 500 paying customers in 6 weeks. lovecode.dev made it possible.",
    author: "Jason Park",
    role: "Founder & CEO",
    company: "RapidLaunch",
    avatar: "JP",
  },
  {
    quote: "Our investors were blown away by the demo. They thought we had a full engineering team.",
    author: "Maria Santos",
    role: "Co-founder",
    company: "FinFlow",
    avatar: "MS",
  },
  {
    quote: "I built 3 MVPs last month. Two failed fast, one is now funded. That's the power of speed.",
    author: "Tom Chen",
    role: "Serial Entrepreneur",
    company: "Stealth Startup",
    avatar: "TC",
  },
];

const steps = [
  {
    step: '01',
    title: 'Describe Your Vision',
    description: 'Tell lovecode.dev what you want to build in plain English. Be as detailed or high-level as you like.',
  },
  {
    step: '02',
    title: 'Watch It Come to Life',
    description: 'Our AI generates a fully functional app based on your description. Review and refine instantly.',
  },
  {
    step: '03',
    title: 'Launch & Iterate',
    description: 'Deploy with one click, share with users, and iterate based on real feedback.',
  },
];

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-pink-100 rounded-full mb-6">
              <span className="text-xs font-semibold text-pink-700">FOR FOUNDERS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Launch your startup
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)', WebkitBackgroundClip: 'text' }}> 10x faster</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Stop waiting for engineers. Build your MVP in days, validate with real users, 
              and iterate until you find product-market fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/"
                className="px-8 py-4 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg text-center"
                style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)' }}
              >
                Start Building Free
              </Link>
              <a
                href="#how-it-works"
                className="px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors text-center"
              >
                See How It Works
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
              <p className="text-4xl font-bold text-gray-900">10x</p>
              <p className="text-sm text-gray-600 mt-1">Faster to Launch</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900">90%</p>
              <p className="text-sm text-gray-600 mt-1">Cost Savings</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900">5K+</p>
              <p className="text-sm text-gray-600 mt-1">Startups Launched</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900">$50M+</p>
              <p className="text-sm text-gray-600 mt-1">Raised by Users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Built for founder speed
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every feature designed to help you move fast, stay lean, and find product-market fit.
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

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How it works
            </h2>
            <p className="text-lg text-gray-600">
              From idea to launch in three simple steps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-pink-100 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 transform translate-x-1/2">
                    <svg className="w-8 h-8 text-pink-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
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
              Founders love lovecode.dev
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
            Your next big idea is waiting
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of founders who launched their startups with lovecode.dev.
          </p>
          <Link
            href="/"
            className="inline-flex px-8 py-4 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg"
            style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)' }}
          >
            Start Building Free
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
