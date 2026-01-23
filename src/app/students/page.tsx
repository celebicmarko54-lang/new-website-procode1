'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function StudentsPage() {
  const benefits = [
    {
      icon: '🎓',
      title: '50% Off Pro Plan',
      description: 'Get full access to all Pro features at half the price while you study.',
    },
    {
      icon: '📚',
      title: 'Learning Resources',
      description: 'Access exclusive tutorials and courses designed for students.',
    },
    {
      icon: '🚀',
      title: 'Portfolio Builder',
      description: 'Create impressive portfolio projects to showcase to future employers.',
    },
    {
      icon: '👥',
      title: 'Student Community',
      description: 'Connect with other students building amazing projects.',
    },
    {
      icon: '🏆',
      title: 'Hackathon Support',
      description: 'Free upgraded accounts for hackathons and student competitions.',
    },
    {
      icon: '💼',
      title: 'Career Resources',
      description: 'Interview prep tools and job board access for graduating students.',
    },
  ];

  const eligibility = [
    'Currently enrolled in an accredited university or college',
    'High school students aged 16+',
    'Coding bootcamp participants',
    'Graduate students and PhD candidates',
    'Recent graduates (within 6 months)',
  ];

  const testimonials = [
    {
      quote: "I built my entire capstone project with lovecode.dev. My professors were impressed!",
      author: "Alex Kim",
      school: "Stanford University",
      avatar: "AK",
    },
    {
      quote: "The student discount made it affordable to learn and build real projects.",
      author: "Maria Garcia",
      school: "MIT",
      avatar: "MG",
    },
    {
      quote: "Won my first hackathon using lovecode.dev. The speed advantage is real.",
      author: "James Chen",
      school: "UC Berkeley",
      avatar: "JC",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-700 rounded-full mb-6">
              <span className="text-xl">🎓</span>
              <span className="font-medium">Student Program</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-pink-500">50% Off</span> for Students
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              We believe in empowering the next generation of builders. Get access to lovecode.dev Pro at half the price.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-xl hover:opacity-90 transition-all font-semibold shadow-lg"
              style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)' }}
            >
              Verify Student Status
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Pricing Comparison */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-500 mb-2">Regular Pro Price</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-gray-400 line-through">$20</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-gray-500">Standard pricing for professionals</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-fuchsia-50 rounded-2xl p-8 border-2 border-pink-300 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-3 py-1 bg-gradient-to-r from-[#ec4899] to-[#be185d] text-white text-xs font-semibold rounded-full">
                  STUDENT PRICE
                </span>
              </div>
              <h3 className="text-lg font-semibold text-pink-600 mb-2">Student Pro Price</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-gray-900">$10</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600">All Pro features at 50% off</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Student Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-pink-200 transition-all">
                <span className="text-3xl mb-4 block">{benefit.icon}</span>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility */}
        <div className="py-16 mb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Who's Eligible?</h2>
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <ul className="space-y-4">
                {eligibility.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-pink-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Students Love lovecode.dev</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="bg-gradient-to-br from-pink-50 to-fuchsia-50 rounded-xl border border-pink-100 p-6">
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
                    <p className="text-sm text-gray-500">{testimonial.school}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#ec4899] to-[#be185d] rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Building?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Verify your student status in under 2 minutes and start building amazing projects today.
            </p>
            <Link
              href="/signup"
              className="inline-flex px-8 py-4 bg-white text-pink-600 rounded-xl hover:bg-gray-100 transition-colors font-semibold"
            >
              Get Student Discount
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
