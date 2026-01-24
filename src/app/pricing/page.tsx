'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const plans = [
  {
    name: 'Starter',
    description: 'Build anything, right in λforge.',
    price: '$0',
    period: 'forever',
    cta: 'Start Building Free',
    ctaStyle: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    features: [
      'Free daily AI credits',
      'Free credits for integrations',
      'Publish 1 app',
      'Community support',
      'Public projects only',
    ],
    popular: false,
  },
  {
    name: 'Core',
    description: 'Create, launch, and share your apps.',
    price: '$25',
    period: 'per month',
    cta: 'Join λforge Core',
    ctaStyle: 'bg-gray-900 text-white hover:bg-gray-800',
    features: [
      '$25 of monthly credits',
      'Access to latest AI models',
      'Publish and host live apps',
      'Autonomous long builds',
      'Remove "Made with λforge" badge',
      'Pay-as-you-go for additional usage',
    ],
    popular: true,
  },
  {
    name: 'Teams',
    description: 'Bring the power of λforge to your entire team.',
    price: '$40',
    period: 'per user, per month',
    cta: 'Join λforge Teams',
    ctaStyle: 'bg-gray-900 text-white hover:bg-gray-800',
    features: [
      'Everything in Core',
      '$40/mo in usage credits included',
      'Upfront credits on annual plan',
      '50 Viewer seats',
      'Centralized billing',
      'Role-based access control',
      'Private deployments',
    ],
    popular: false,
  },
  {
    name: 'Enterprise',
    description: 'Meet your security and performance needs.',
    price: 'Custom',
    period: 'pricing',
    cta: 'Contact Sales',
    ctaStyle: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    features: [
      'Everything in Teams',
      'Custom Viewer Seats',
      'SSO & SAML',
      'SCIM provisioning',
      'Custom data retention',
      'Dedicated infrastructure',
      'Priority support & SLA',
      'Custom training',
    ],
    popular: false,
  },
];

const faqs = [
  {
    question: 'What are AI credits and how do they work?',
    answer: 'AI credits are used to power the AI features in λforge. Each action like generating code, making edits, or running builds uses credits. Free users get daily credits that reset, while paid plans include monthly credit allowances.',
  },
  {
    question: 'Can I change plans later?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately and we\'ll prorate any differences.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. Enterprise customers can also pay via invoice.',
  },
  {
    question: 'Is there a free trial for paid plans?',
    answer: 'The Starter plan is free forever with daily AI credits. This allows you to fully experience λforge before upgrading to a paid plan.',
  },
  {
    question: 'What happens when I run out of credits?',
    answer: 'On paid plans, you can continue using λforge with pay-as-you-go pricing. On the free plan, your credits reset daily so you can continue building the next day.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes, we offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied, contact us for a full refund.',
  },
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const getPrice = (plan: typeof plans[0]) => {
    if (plan.price === 'Custom' || plan.price === '$0') return plan.price;
    const monthlyPrice = parseInt(plan.price.replace('$', ''));
    if (billingPeriod === 'yearly') {
      const yearlyPrice = Math.floor(monthlyPrice * 12 * 0.8);
      return `$${Math.floor(yearlyPrice / 12)}`;
    }
    return plan.price;
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0a0a0a] transition-colors">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 mb-6">
            <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Pricing</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            A fraction of the cost of hiring developers
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Why spend $100k+ on developers when you can build everything yourself? Start free, upgrade when you&apos;re ready.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative w-14 h-7 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-[#0a0a0a] ${
                billingPeriod === 'yearly' ? 'bg-gray-900 dark:bg-white' : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow transition-transform ${
                  billingPeriod === 'yearly' ? 'translate-x-7' : ''
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingPeriod === 'yearly' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Yearly
              <span className="ml-1.5 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Save $60</span>
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
                    ? 'bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-white shadow-xl'
                    : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{plan.description}</p>
                </div>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">{getPrice(plan)}</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">{plan.period}</span>
                </div>
                
                <button className={`w-full py-3 rounded-xl font-semibold transition-all mb-6 ${plan.ctaStyle}`}>
                  {plan.cta}
                </button>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Compare Plans</h2>
            <p className="text-gray-600 dark:text-gray-400">Find the perfect plan for your needs</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900 dark:text-white">Starter</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900 dark:text-white">Core</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900 dark:text-white">Teams</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900 dark:text-white">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'AI Credits', starter: 'Daily free', core: '$25/mo', teams: '$40/mo', enterprise: 'Custom' },
                  { name: 'Published Apps', starter: '1', core: 'Unlimited', teams: 'Unlimited', enterprise: 'Unlimited' },
                  { name: 'Team Members', starter: '1', core: '1', teams: 'Unlimited', enterprise: 'Unlimited' },
                  { name: 'Viewer Seats', starter: '-', core: '-', teams: '50', enterprise: 'Custom' },
                  { name: 'Private Projects', starter: false, core: true, teams: true, enterprise: true },
                  { name: 'Custom Domains', starter: false, core: true, teams: true, enterprise: true },
                  { name: 'Remove Branding', starter: false, core: true, teams: true, enterprise: true },
                  { name: 'Private Deployments', starter: false, core: false, teams: true, enterprise: true },
                  { name: 'SSO & SAML', starter: false, core: false, teams: false, enterprise: true },
                  { name: 'Dedicated Infrastructure', starter: false, core: false, teams: false, enterprise: true },
                  { name: 'Priority Support', starter: false, core: false, teams: false, enterprise: true },
                  { name: 'SLA Guarantee', starter: false, core: false, teams: false, enterprise: true },
                ].map((feature, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-4 text-gray-700">{feature.name}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof feature.starter === 'boolean' ? (
                        feature.starter ? (
                          <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )
                      ) : (
                        <span className="text-gray-600">{feature.starter}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof feature.core === 'boolean' ? (
                        feature.core ? (
                          <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )
                      ) : (
                        <span className="text-gray-600">{feature.core}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof feature.teams === 'boolean' ? (
                        feature.teams ? (
                          <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )
                      ) : (
                        <span className="text-gray-600">{feature.teams}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof feature.enterprise === 'boolean' ? (
                        feature.enterprise ? (
                          <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )
                      ) : (
                        <span className="text-gray-600">{feature.enterprise}</span>
                      )}
                    </td>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Everything you need to know about our pricing</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
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
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] dark:bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to get started?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Join thousands of creators building with λforge.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/signup"
              className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
            >
              Start Building Free
            </Link>
            <Link 
              href="/contact"
              className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-white transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
