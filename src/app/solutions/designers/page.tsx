'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
    title: 'Pixel-Perfect Results',
    description: 'Your designs come to life exactly as you envisioned. Every spacing, color, and interaction preserved.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Responsive by Default',
    description: 'Every design automatically adapts to all screen sizes. Mobile, tablet, desktop - all covered.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Interactive Prototypes',
    description: 'Add real interactions, animations, and transitions. Test with actual users, not just stakeholders.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Design System Ready',
    description: 'Import your design tokens and components. Maintain consistency across all your projects.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
    title: 'One-Click Deploy',
    description: 'Ship your designs directly to production. No handoff delays, no lost-in-translation moments.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Real User Testing',
    description: 'Test with real users on real devices. Get authentic feedback before development starts.',
  },
];

const testimonials = [
  {
    quote: "I finally feel like I have superpowers. Design something, click deploy, it's live. Mind-blowing.",
    author: "Emma Chen",
    role: "Lead Designer",
    company: "DesignCo",
    avatar: "EC",
  },
  {
    quote: "The gap between design and development just... disappeared. This is the future.",
    author: "Alex Rivera",
    role: "Product Designer",
    company: "Startup.io",
    avatar: "AR",
  },
  {
    quote: "My portfolio went from Figma mockups to working sites. Game changer for job applications.",
    author: "Sarah Kim",
    role: "Freelance Designer",
    company: "Independent",
    avatar: "SK",
  },
];

export default function DesignersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-pink-100 rounded-full mb-6">
              <span className="text-xs font-semibold text-pink-700">FOR DESIGNERS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Ship your designs
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)', WebkitBackgroundClip: 'text' }}> without code</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your creative vision into production-ready applications. 
              No developer handoff, no compromises, no waiting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/"
                className="px-8 py-4 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg text-center"
                style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)' }}
              >
                Start Designing
              </Link>
              <a
                href="#features"
                className="px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors text-center"
              >
                Explore Features
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
              <p className="text-4xl font-bold text-gray-900">0</p>
              <p className="text-sm text-gray-600 mt-1">Lines of Code</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900">100%</p>
              <p className="text-sm text-gray-600 mt-1">Design Fidelity</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900">10K+</p>
              <p className="text-sm text-gray-600 mt-1">Designers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900">1 min</p>
              <p className="text-sm text-gray-600 mt-1">To Deploy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Design freedom, real results
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every tool a designer needs to go from concept to production.
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

      {/* Workflow */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Your new design workflow
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Describe or Import</h3>
              <p className="text-gray-600">Start from scratch with AI or import from Figma, Sketch, or any design tool.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-fuchsia-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-fuchsia-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Refine & Interact</h3>
              <p className="text-gray-600">Add interactions, animations, and real data. Perfect every detail.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-rose-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-rose-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Deploy & Share</h3>
              <p className="text-gray-600">One click to production. Share with anyone, anywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Designers love the freedom
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
            Ready to ship your designs?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of designers building real products with lovecode.dev.
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
