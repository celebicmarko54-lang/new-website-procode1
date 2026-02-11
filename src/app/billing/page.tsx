'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/context/LanguageContext';

interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: string;
  company?: string;
  createdAt: string;
}

export default function BillingPage() {
  const router = useRouter();
  const { t } = useTranslation();
  const [user, setUser] = useState<User | null>(null);
  const [currentPlan, setCurrentPlan] = useState('free');
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  useEffect(() => {
    const currentUser = localStorage.getItem('AppNode_current_user');
    if (!currentUser) {
      router.push('/login');
      return;
    }
    setUser(JSON.parse(currentUser));
  }, [router]);

  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['3 projects', 'Basic AI features', 'Community support', 'Export to code'],
      current: currentPlan === 'free',
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$20',
      period: 'per month',
      features: ['Unlimited projects', 'Advanced AI features', 'Priority support', 'Custom domains', 'Team collaboration', 'Analytics dashboard'],
      popular: true,
      current: currentPlan === 'pro',
    },
    {
      id: 'team',
      name: 'Team',
      price: '$49',
      period: 'per month',
      features: ['Everything in Pro', 'Up to 10 team members', 'Admin controls', 'SSO integration', 'Dedicated support', 'Custom branding'],
      current: currentPlan === 'team',
    },
  ];

  const invoices = [
    { id: 1, date: 'Nov 1, 2025', amount: '$0.00', status: 'Paid', plan: 'Free' },
    { id: 2, date: 'Oct 1, 2025', amount: '$0.00', status: 'Paid', plan: 'Free' },
    { id: 3, date: 'Sep 1, 2025', amount: '$0.00', status: 'Paid', plan: 'Free' },
  ];

  const handleUpgrade = (planId: string) => {
    setSelectedPlan(planId);
    setShowUpgradeModal(true);
  };

  const confirmUpgrade = () => {
    setCurrentPlan(selectedPlan);
    setShowUpgradeModal(false);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-[#1A1A1A]">
        <div className="animate-spin w-8 h-8 border-4 border-gray-900 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#1A1A1A]">
      {/* Header */}
      <header className="bg-white dark:bg-[#1A1A1A] border-b border-gray-200 dark:border-b-2 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <h1 className="text-lg font-semibold text-gray-900">{t('billingPage.title')}</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Current Plan */}
        <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-200 dark:border-2 dark:border-gray-800 p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t('billingPage.currentPlan')}</p>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white capitalize">{currentPlan}</h2>
              <p className="text-gray-500 mt-1">
                {currentPlan === 'free' ? t('billingPage.upgradeToUnlock') : t('billingPage.planRenews')}
              </p>
            </div>
            <div className={`px-4 py-2 rounded-full text-sm font-medium ${
              currentPlan === 'free' ? 'bg-gray-100 text-gray-600' : 'bg-gray-100 text-gray-600'
            }`}>
              {currentPlan === 'free' ? t('billingPage.freePlan') : t('billingPage.active')}
            </div>
          </div>
        </div>

        {/* Plans */}
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('billingPage.availablePlans')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white dark:bg-[#1A1A1A] rounded-2xl border-2 p-6 relative ${
                plan.popular ? 'border-orange-500' : plan.current ? 'border-orange-300 bg-orange-50' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-orange-600 to-amber-600 text-white text-xs font-semibold rounded-full">
                  {t('billingPage.mostPopular')}
                </div>
              )}
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{plan.name}</h4>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-500">/{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              {plan.current ? (
                <button className="w-full py-3 px-4 bg-gray-100 text-gray-500 font-medium rounded-xl cursor-default">
                  {t('billingPage.currentPlanLabel')}
                </button>
              ) : (
                <button
                  onClick={() => handleUpgrade(plan.id)}
                  className={`w-full py-3 px-4 font-medium rounded-xl transition-colors ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white hover:from-orange-700 hover:to-amber-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.id === 'free' ? t('billingPage.downgrade') : t('billingPage.upgrade')}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Payment Method */}
        <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-200 dark:border-2 dark:border-gray-800 p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('billingPage.paymentMethod')}</h3>
          {currentPlan === 'free' ? (
            <p className="text-gray-500">{t('billingPage.noPaymentRequired')}</p>
          ) : (
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-7 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">VISA</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
                  <p className="text-sm text-gray-500">Expires 12/26</p>
                </div>
              </div>
              <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                {t('billingPage.edit')}
              </button>
            </div>
          )}
        </div>

        {/* Billing History */}
        <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-200 dark:border-2 dark:border-gray-800 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">{t('billingPage.billingHistory')}</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {invoices.map((invoice) => (
              <div key={invoice.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
                <div>
                  <p className="font-medium text-gray-900">{invoice.date}</p>
                  <p className="text-sm text-gray-500">{invoice.plan} Plan</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-900 font-medium">{invoice.amount}</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                    {invoice.status}
                  </span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Upgrade Modal */}
      {showUpgradeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
              {t('billingPage.upgradeToTitle')} {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)}?
            </h3>
            <p className="text-gray-500 text-center mb-6">
              {t('billingPage.upgradeAccessMessage')} {selectedPlan} {t('billingPage.featuresImmediately')}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowUpgradeModal(false)}
                className="flex-1 px-4 py-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
              >
                {t('common.cancel')}
              </button>
              <button
                onClick={confirmUpgrade}
                className="flex-1 px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl hover:from-orange-700 hover:to-amber-700 transition-colors"
              >
                {t('billingPage.confirmUpgrade')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
