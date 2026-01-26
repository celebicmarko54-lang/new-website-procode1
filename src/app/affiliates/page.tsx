'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AffiliatesPage() {
  const [email, setEmail] = useState('');

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '30% Commission',
      description: 'Earn 30% recurring commission on every customer you refer for their first 12 months.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '90-Day Cookie',
      description: 'Extended cookie window means you get credit even if they sign up later.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Real-Time Dashboard',
      description: 'Track clicks, conversions, and earnings in real-time with our affiliate dashboard.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Monthly Payouts',
      description: 'Get paid every month via PayPal or bank transfer. $50 minimum threshold.',
    },
  ];

  const tiers = [
    {
      name: 'Starter',
      referrals: '1-10',
      commission: '30%',
      perks: ['Basic dashboard', 'Email support', 'Standard links'],
    },
    {
      name: 'Pro',
      referrals: '11-50',
      commission: '35%',
      perks: ['Advanced analytics', 'Priority support', 'Custom links', 'Promotional assets'],
      featured: true,
    },
    {
      name: 'Elite',
      referrals: '50+',
      commission: '40%',
      perks: ['Dedicated manager', 'Co-marketing', 'Early access', 'Custom campaigns'],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Application submitted! Check your email for next steps.');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-6 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-gray-50 text-gray-900 rounded-full text-sm font-medium mb-4">
              Affiliate Program
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Earn Money Sharing AppNode
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Join our affiliate program and earn up to 40% recurring commission for every customer you refer.
            </p>
            
            {/* Quick Signup Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-4 focus:ring-gray-100 outline-none transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3 text-white font-semibold rounded-xl hover:opacity-90 transition-all whitespace-nowrap"
                style={{ background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)' }}
              >
                Join Now
              </button>
            </form>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="px-6 mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Join Our Program?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-gray-300 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-100 to-gray-100 rounded-xl flex items-center justify-center text-gray-900 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commission Tiers */}
        <section className="px-6 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Commission Tiers</h2>
            <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
              The more you refer, the more you earn. Unlock higher commission rates as you grow.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {tiers.map((tier, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-6 ${
                    tier.featured
                      ? 'bg-gradient-to-br from-[#1f2937] to-[#374151] text-white ring-4 ring-gray-300'
                      : 'bg-white border border-gray-100'
                  }`}
                >
                  <div className="text-center mb-6">
                    <h3 className={`font-semibold text-lg mb-1 ${tier.featured ? 'text-white' : 'text-gray-900'}`}>
                      {tier.name}
                    </h3>
                    <p className={`text-sm ${tier.featured ? 'text-gray-100' : 'text-gray-500'}`}>
                      {tier.referrals} referrals/month
                    </p>
                    <div className={`text-4xl font-bold mt-4 ${tier.featured ? 'text-white' : 'text-gray-900'}`}>
                      {tier.commission}
                    </div>
                    <p className={`text-sm ${tier.featured ? 'text-gray-100' : 'text-gray-500'}`}>
                      recurring commission
                    </p>
                  </div>
                  
                  <ul className="space-y-3">
                    {tier.perks.map((perk, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <svg className={`w-5 h-5 ${tier.featured ? 'text-gray-300' : 'text-gray-900'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className={`text-sm ${tier.featured ? 'text-white' : 'text-gray-600'}`}>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="px-6 mb-20">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-50 to-gray-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-gray-900 mx-auto mb-4 shadow-sm">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Sign Up</h3>
                <p className="text-gray-600 text-sm">
                  Create your free affiliate account and get your unique referral link.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-gray-900 mx-auto mb-4 shadow-sm">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Share</h3>
                <p className="text-gray-600 text-sm">
                  Share your link with your audience, followers, or community.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-gray-900 mx-auto mb-4 shadow-sm">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Earn</h3>
                <p className="text-gray-600 text-sm">
                  Earn recurring commission every month for each paying customer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl font-bold text-white text-center mb-8">Affiliate Success</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">$500K+</div>
                  <div className="text-gray-400">Paid to Affiliates</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">2,000+</div>
                  <div className="text-gray-400">Active Affiliates</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">$250</div>
                  <div className="text-gray-400">Avg. Monthly Earnings</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">48hrs</div>
                  <div className="text-gray-400">Avg. Payout Time</div>
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
