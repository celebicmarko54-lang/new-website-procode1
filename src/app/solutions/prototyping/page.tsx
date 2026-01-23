'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'High-Fidelity Prototypes',
    description: 'Create prototypes that look and feel like real products. Every interaction, every animation.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
    title: 'Real Interactions',
    description: 'Add clicks, hovers, scrolls, and form submissions. Users interact with real functionality.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: 'Real Data',
    description: 'Connect to APIs or use sample data. Show stakeholders how it works with actual content.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
    title: 'Easy Sharing',
    description: 'Share a link and anyone can test your prototype. No app downloads or accounts needed.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'User Testing Ready',
    description: 'Built-in tools for gathering feedback. Session recording and analytics included.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Instant Iterations',
    description: 'Make changes in seconds, not hours. Test new ideas immediately after feedback.',
  },
];

const comparisons = [
  { feature: 'Time to prototype', traditional: '2-4 weeks', lovecode: '2-4 hours' },
  { feature: 'Real interactions', traditional: 'Limited clicks', lovecode: 'Full functionality' },
  { feature: 'Data integration', traditional: 'Static mockups', lovecode: 'Live data' },
  { feature: 'User testing', traditional: 'Separate tools', lovecode: 'Built-in' },
  { feature: 'Iteration speed', traditional: 'Days', lovecode: 'Minutes' },
  { feature: 'Stakeholder sharing', traditional: 'Export/upload', lovecode: 'One-click link' },
];

const testimonials = [
  {
    quote: "Our prototypes are so good, users think they're using the real product.",
    author: "Lisa Wang",
    role: "Product Manager",
    company: "ProductLab",
    avatar: "LW",
  },
  {
    quote: "We cut our prototype-to-production time by 80%. Stakeholders are thrilled.",
    author: "James Miller",
    role: "UX Lead",
    company: "DesignFirst",
    avatar: "JM",
  },
  {
    quote: "Finally, I can test with real users before we write a single line of code.",
    author: "Rachel Green",
    role: "Product Designer",
    company: "TechVenture",
    avatar: "RG",
  },
];

export default function PrototypingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-pink-100 rounded-full mb-6">
              <span className="text-xs font-semibold text-pink-700">PROTOTYPING</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Prototypes that feel
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)', WebkitBackgroundClip: 'text' }}> real</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Build fully functional prototypes in hours, not weeks. 
              Test with real users, get real feedback, iterate instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/"
                className="px-8 py-4 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg text-center"
                style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)' }}
              >
                Start Prototyping
              </Link>
              <a
                href="#comparison"
                className="px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors text-center"
              >
                See the Difference
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
              <p className="text-sm text-gray-600 mt-1">Faster Prototyping</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900">100%</p>
              <p className="text-sm text-gray-600 mt-1">Interactive</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900">1 click</p>
              <p className="text-sm text-gray-600 mt-1">To Share</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900">Real</p>
              <p className="text-sm text-gray-600 mt-1">User Testing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Beyond mockups
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Create prototypes that demonstrate real value to stakeholders and users.
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

      {/* Comparison Table */}
      <section id="comparison" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Traditional vs lovecode.dev
            </h2>
            <p className="text-lg text-gray-600">
              See how lovecode.dev transforms your prototyping workflow.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-100 p-4 font-semibold text-gray-900">
              <div>Feature</div>
              <div className="text-center">Traditional Tools</div>
              <div className="text-center text-pink-600">lovecode.dev</div>
            </div>
            {comparisons.map((row, index) => (
              <div key={index} className="grid grid-cols-3 p-4 border-t border-gray-100">
                <div className="font-medium text-gray-700">{row.feature}</div>
                <div className="text-center text-gray-500">{row.traditional}</div>
                <div className="text-center text-pink-600 font-medium">{row.lovecode}</div>
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
              Teams trust lovecode.dev prototypes
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
            Ready to prototype smarter?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Turn your ideas into interactive prototypes in hours.
          </p>
          <Link
            href="/"
            className="inline-flex px-8 py-4 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg"
            style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)' }}
          >
            Start Prototyping Free
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
