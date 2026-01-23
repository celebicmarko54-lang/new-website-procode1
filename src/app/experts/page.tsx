'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ExpertsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    portfolio: '',
    experience: '',
    specialties: [] as string[],
  });

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Earn More',
      description: 'Set your own rates and earn up to $200/hour helping clients build their projects.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Get Matched',
      description: 'We connect you with clients who need your specific skills and expertise.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Get Certified',
      description: 'Earn official lovecode.dev Expert certification and badge for your profile.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Grow Your Business',
      description: 'Access exclusive resources, training, and a community of fellow experts.',
    },
  ];

  const specialties = [
    'Web Development',
    'Mobile Apps',
    'E-commerce',
    'SaaS Applications',
    'AI/ML Integration',
    'Database Design',
    'UI/UX Design',
    'API Development',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Application submitted! We\'ll review your application and get back to you within 5 business days.');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-6 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-pink-50 text-pink-600 rounded-full text-sm font-medium mb-4">
              Expert Partner Program
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Become a lovecode.dev Expert
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our network of certified experts and help businesses build amazing applications while growing your freelance career.
            </p>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="px-6 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-pink-200 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-fuchsia-100 rounded-xl flex items-center justify-center text-pink-600 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="px-6 mb-20">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-pink-50 to-fuchsia-50 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Apply to Become an Expert</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-300 focus:ring-4 focus:ring-pink-100 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-300 focus:ring-4 focus:ring-pink-100 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-2">
                    Portfolio URL
                  </label>
                  <input
                    type="url"
                    id="portfolio"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-300 focus:ring-4 focus:ring-pink-100 outline-none transition-all"
                    placeholder="https://yourportfolio.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Areas of Expertise
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {specialties.map((specialty) => (
                      <button
                        key={specialty}
                        type="button"
                        onClick={() => {
                          const isSelected = formData.specialties.includes(specialty);
                          setFormData({
                            ...formData,
                            specialties: isSelected
                              ? formData.specialties.filter((s) => s !== specialty)
                              : [...formData.specialties, specialty],
                          });
                        }}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          formData.specialties.includes(specialty)
                            ? 'bg-pink-500 text-white'
                            : 'bg-white text-gray-600 hover:bg-pink-100'
                        }`}
                      >
                        {specialty}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your experience
                  </label>
                  <textarea
                    id="experience"
                    required
                    rows={4}
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-300 focus:ring-4 focus:ring-pink-100 outline-none transition-all resize-none"
                    placeholder="Share your development experience and why you'd make a great lovecode.dev expert..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)' }}
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
                  <div className="text-gray-400">Active Experts</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">$2M+</div>
                  <div className="text-gray-400">Earned by Experts</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">5,000+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">4.9/5</div>
                  <div className="text-gray-400">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
