'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for trying out lovecode.dev',
    features: [
      '3 projects',
      'Basic AI assistance',
      'Community support',
      'Public projects only',
      '1GB storage',
    ],
    cta: 'Get Started',
    ctaStyle: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$20',
    period: 'per month',
    description: 'For individuals and small teams',
    features: [
      'Unlimited projects',
      'Advanced AI features',
      'Priority support',
      'Private projects',
      '10GB storage',
      'Custom domains',
      'Analytics dashboard',
      'Team collaboration (up to 5)',
    ],
    cta: 'Start Free Trial',
    ctaStyle: 'text-white hover:opacity-90 shadow-lg',
    ctaGradient: true,
    popular: true,
  },
  {
    name: 'Team',
    price: '$50',
    period: 'per month',
    description: 'For growing teams and businesses',
    features: [
      'Everything in Pro',
      'Unlimited team members',
      'Advanced permissions',
      '100GB storage',
      'SSO authentication',
      'Audit logs',
      'Priority queue',
      'Dedicated support',
    ],
    cta: 'Start Free Trial',
    ctaStyle: 'text-white hover:opacity-90',
    ctaGradient: true,
    popular: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For large organizations',
    features: [
      'Everything in Team',
      'Unlimited storage',
      'Custom integrations',
      'SLA guarantee',
      'Dedicated infrastructure',
      'On-premise deployment',
      'Custom training',
      '24/7 phone support',
    ],
    cta: 'Contact Sales',
    ctaStyle: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    popular: false,
  },
];

const faqs = [
  {
    question: 'Can I change plans later?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately and we\'ll prorate any differences.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. Enterprise customers can also pay via invoice.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! Pro and Team plans come with a 14-day free trial. No credit card required to start.',
  },
  {
    question: 'What happens when I reach my storage limit?',
    answer: 'You\'ll receive a notification when you\'re approaching your limit. You can upgrade your plan or remove unused projects to free up space.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied, contact us for a full refund.',
  },
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const getPrice = (plan: typeof plans[0]) => {
    if (plan.price === 'Custom') return plan.price;
    const monthlyPrice = parseInt(plan.price.replace('$', ''));
    if (billingPeriod === 'yearly') {
      const yearlyPrice = Math.floor(monthlyPrice * 12 * 0.8);
      return `$${yearlyPrice}`;
    }
    return plan.price;
  };

  const getPeriod = (plan: typeof plans[0]) => {
    if (plan.period === 'contact us' || plan.period === 'forever') return plan.period;
    return billingPeriod === 'yearly' ? 'per year' : 'per month';
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Simple, transparent
            <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)', WebkitBackgroundClip: 'text' }}> pricing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your needs. Start for free, upgrade when you&apos;re ready.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-14 h-7 bg-gray-200 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              style={{ backgroundColor: billingPeriod === 'yearly' ? '#ec4899' : '#e5e7eb' }}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                  billingPeriod === 'yearly' ? 'translate-x-7' : ''
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingPeriod === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
              <span className="ml-1.5 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Save 20%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-6 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-pink-50 to-fuchsia-50 border-2 border-pink-300 shadow-xl'
                    : 'bg-white border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-gradient-to-r from-[#ec4899] to-[#be185d] text-white text-xs font-semibold rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-600">{plan.description}</p>
                </div>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{getPrice(plan)}</span>
                  <span className="text-gray-500 ml-2">{getPeriod(plan)}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-xl font-semibold transition-all ${plan.ctaStyle}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Compare plans</h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Free</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Pro</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Team</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Projects', '3', 'Unlimited', 'Unlimited', 'Unlimited'],
                  ['Storage', '1GB', '10GB', '100GB', 'Unlimited'],
                  ['Team members', '1', '5', 'Unlimited', 'Unlimited'],
                  ['Private projects', '✗', '✓', '✓', '✓'],
                  ['Custom domains', '✗', '✓', '✓', '✓'],
                  ['Analytics', '✗', '✓', '✓', '✓'],
                  ['SSO', '✗', '✗', '✓', '✓'],
                  ['Audit logs', '✗', '✗', '✓', '✓'],
                  ['Priority support', '✗', '✓', '✓', '✓'],
                  ['SLA', '✗', '✗', '✗', '✓'],
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-4 text-gray-900">{row[0]}</td>
                    {row.slice(1).map((cell, cellIndex) => (
                      <td key={cellIndex} className="text-center py-4 px-4 text-gray-900">
                        {cell === '✓' ? (
                          <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : cell === '✗' ? (
                          <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        ) : (
                          <span className="text-gray-700">{cell}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently asked questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-gray-600 bg-gray-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of creators building with lovecode.dev.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="px-8 py-4 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg" style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)' }}>
              Start Building Free
            </Link>
            <Link href="/enterprise" className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-white/50 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
