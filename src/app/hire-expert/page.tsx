'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HireExpertPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Mobile Apps', 'E-commerce', 'SaaS', 'AI/ML', 'UI/UX'];

  const experts = [
    {
      name: 'Sarah Chen',
      avatar: 'SC',
      gradient: 'from-pink-500 to-rose-500',
      title: 'Full Stack Developer',
      specialties: ['Web Development', 'SaaS', 'E-commerce'],
      rating: 5.0,
      reviews: 48,
      hourlyRate: 150,
      projects: 67,
      bio: 'Senior developer with 8+ years experience building scalable web applications.',
    },
    {
      name: 'Marcus Johnson',
      avatar: 'MJ',
      gradient: 'from-blue-500 to-cyan-500',
      title: 'Mobile App Expert',
      specialties: ['Mobile Apps', 'UI/UX'],
      rating: 4.9,
      reviews: 35,
      hourlyRate: 175,
      projects: 42,
      bio: 'Specialized in React Native and Flutter. Built apps with 1M+ downloads.',
    },
    {
      name: 'Emily Rodriguez',
      avatar: 'ER',
      gradient: 'from-purple-500 to-violet-500',
      title: 'AI/ML Specialist',
      specialties: ['AI/ML', 'Web Development', 'SaaS'],
      rating: 5.0,
      reviews: 29,
      hourlyRate: 200,
      projects: 31,
      bio: 'Machine learning engineer helping businesses integrate AI into their products.',
    },
    {
      name: 'David Kim',
      avatar: 'DK',
      gradient: 'from-green-500 to-emerald-500',
      title: 'E-commerce Expert',
      specialties: ['E-commerce', 'Web Development'],
      rating: 4.8,
      reviews: 52,
      hourlyRate: 125,
      projects: 89,
      bio: 'Shopify and custom e-commerce solutions. Helped clients generate $10M+ in sales.',
    },
    {
      name: 'Anna Petrova',
      avatar: 'AP',
      gradient: 'from-orange-500 to-amber-500',
      title: 'UI/UX Designer',
      specialties: ['UI/UX', 'Web Development'],
      rating: 4.9,
      reviews: 41,
      hourlyRate: 135,
      projects: 55,
      bio: 'Design-focused developer creating beautiful, user-friendly interfaces.',
    },
    {
      name: 'James Wilson',
      avatar: 'JW',
      gradient: 'from-indigo-500 to-blue-500',
      title: 'SaaS Architect',
      specialties: ['SaaS', 'Web Development', 'AI/ML'],
      rating: 5.0,
      reviews: 38,
      hourlyRate: 185,
      projects: 28,
      bio: 'Building SaaS products from scratch. Expert in subscription and billing systems.',
    },
  ];

  const filteredExperts = selectedCategory === 'All'
    ? experts
    : experts.filter(expert => expert.specialties.includes(selectedCategory));

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-6 mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-pink-50 text-pink-600 rounded-full text-sm font-medium mb-4">
              Expert Marketplace
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Hire a lovecode.dev Expert
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Work with certified experts who know lovecode.dev inside and out. Get your project built faster with professional help.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="px-6 mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'text-white'
                      : 'bg-white text-gray-600 hover:bg-pink-50 hover:text-pink-600 border border-gray-200'
                  }`}
                  style={selectedCategory === category ? { background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)' } : {}}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Experts Grid */}
        <section className="px-6 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredExperts.map((expert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-pink-200 hover:shadow-xl transition-all group"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${expert.gradient} flex items-center justify-center text-white font-bold text-lg`}>
                      {expert.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                        {expert.name}
                      </h3>
                      <p className="text-sm text-gray-500">{expert.title}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-900">{expert.rating}</span>
                        <span className="text-sm text-gray-400">({expert.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-gray-600 mb-4">{expert.bio}</p>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {expert.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-2 py-1 bg-pink-50 text-pink-600 text-xs font-medium rounded-lg"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  {/* Stats & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-lg font-bold text-gray-900">${expert.hourlyRate}</span>
                      <span className="text-sm text-gray-500">/hour</span>
                    </div>
                    <button className="px-4 py-2 text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-all" style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)' }}>
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="px-6 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-fuchsia-100 rounded-full flex items-center justify-center text-pink-600 font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Browse Experts</h3>
                <p className="text-gray-600 text-sm">
                  Find the perfect expert for your project based on skills, reviews, and availability.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-fuchsia-100 rounded-full flex items-center justify-center text-pink-600 font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Share Your Project</h3>
                <p className="text-gray-600 text-sm">
                  Discuss your requirements, timeline, and budget with your chosen expert.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-fuchsia-100 rounded-full flex items-center justify-center text-pink-600 font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Get It Built</h3>
                <p className="text-gray-600 text-sm">
                  Collaborate with your expert and watch your project come to life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#ec4899] to-[#be185d] rounded-3xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Need Custom Help?</h2>
              <p className="text-pink-100 mb-8 max-w-xl mx-auto">
                Tell us about your project and we&apos;ll match you with the perfect expert.
              </p>
              <button className="px-8 py-4 bg-white text-pink-600 font-semibold rounded-xl hover:bg-pink-50 transition-all shadow-lg">
                Post a Project
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
