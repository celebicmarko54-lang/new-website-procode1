'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useTranslation } from '@/context/LanguageContext';

export default function TeamsPage() {
  const { t, language} = useTranslation();
  
  return (
    <div key={language.code} className="min-h-screen bg-[#f8fafc] dark:bg-[#1A1A1A] text-gray-900 dark:text-white">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {t('teamsPage.badge')}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              {t('teamsPage.titleStart')} <span className="text-violet-500">{t('teamsPage.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              {t('teamsPage.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/signup?plan=teams" className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-colors">
                {t('teamsPage.startTeamTrial')}
              </Link>
              <Link href="/enterprise" className="px-6 py-3 border border-gray-300 dark:border-2 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 font-medium rounded-lg transition-colors">
                {t('teamsPage.enterpriseOptions')}
              </Link>
            </div>
          </div>
        </section>

        {/* Collaboration Demo */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-2 dark:border-gray-800 overflow-hidden shadow-xl">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-b-2 dark:border-gray-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-sm text-gray-500">{t('teamsPage.teamWorkspace')}</span>
              <div className="ml-auto flex items-center gap-1">
                <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white dark:border-gray-900 flex items-center justify-center text-white text-xs">A</div>
                <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white dark:border-gray-900 -ml-2 flex items-center justify-center text-white text-xs">B</div>
                <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-white dark:border-gray-900 -ml-2 flex items-center justify-center text-white text-xs">C</div>
                <span className="ml-2 text-sm text-gray-500">3 {t('teamsPage.online')}</span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 min-h-[350px]">
              {/* Projects */}
              <div className="border-r border-gray-200 dark:border-r-2 dark:border-gray-700 p-4">
                <div className="text-xs font-medium text-gray-500 uppercase mb-3">{t('teamsPage.teamProjects')}</div>
                <div className="space-y-2">
                  {['marketing-site', 'customer-portal', 'analytics-dashboard', 'mobile-app'].map((project, i) => (
                    <div key={i} className={`px-3 py-2 rounded-lg text-sm flex items-center justify-between ${i === 0 ? 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300' : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'}`}>
                      <span>{project}</span>
                      {i < 2 && <span className="w-2 h-2 bg-green-500 rounded-full"></span>}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Editor */}
              <div className="p-4 bg-gray-900">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-xs text-gray-400">Alex is editing...</span>
                </div>
                <div className="font-mono text-sm text-gray-300 space-y-1">
                  <div><span className="text-purple-400">export</span> <span className="text-blue-400">function</span> Hero() {'{'}</div>
                  <div className="pl-4"><span className="text-purple-400">return</span> (</div>
                  <div className="pl-8 bg-blue-500/20 border-l-2 border-blue-500">&lt;section&gt;</div>
                  <div className="pl-12 text-gray-500">...</div>
                  <div className="pl-8">&lt;/section&gt;</div>
                  <div className="pl-4">);</div>
                  <div>{'}'}</div>
                </div>
              </div>
              
              {/* Activity */}
              <div className="border-l border-gray-200 dark:border-l-2 dark:border-gray-700 p-4">
                <div className="text-xs font-medium text-gray-500 uppercase mb-3">{t('teamsPage.activity')}</div>
                <div className="space-y-3">
                  {[
                    { user: 'Alex', action: 'pushed to main', time: '2m ago' },
                    { user: 'Blake', action: 'deployed to prod', time: '15m ago' },
                    { user: 'Casey', action: 'reviewed PR #42', time: '1h ago' },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs ${['bg-blue-500', 'bg-green-500', 'bg-purple-500'][i]}`}>
                        {activity.user[0]}
                      </div>
                      <div>
                        <span className="font-medium">{activity.user}</span>
                        <span className="text-gray-500"> {activity.action}</span>
                        <div className="text-xs text-gray-400">{activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">{t('teamsPage.teamFeatures')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '👥',
                title: 'Real-time Collaboration',
                description: 'Work on the same project simultaneously. See cursors, edits, and changes in real-time.'
              },
              {
                icon: '🔐',
                title: 'Role-based Access',
                description: 'Control who can view, edit, and deploy projects with granular permissions.'
              },
              {
                icon: '📁',
                title: 'Shared Workspaces',
                description: 'Organize projects into shared workspaces. Keep everything in one place.'
              },
              {
                icon: '💬',
                title: 'Built-in Chat',
                description: 'Discuss code, share feedback, and communicate without leaving the editor.'
              },
              {
                icon: '📊',
                title: 'Team Analytics',
                description: 'Track team productivity, deployment frequency, and project health.'
              },
              {
                icon: '💳',
                title: 'Centralized Billing',
                description: 'One invoice for your entire team. Easy expense tracking and management.'
              }
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-2 dark:border-gray-800">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">{t('teamsPage.pricing.title')}</h2>
              <p className="text-gray-600 dark:text-gray-400">{t('teamsPage.pricing.subtitle')}</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-5xl font-bold">$35</span>
                <span className="text-gray-500">per user/month</span>
              </div>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-6">{t('teamsPage.pricing.billedAnnually')}</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Everything in Core',
                  '$40/mo in usage credits included',
                  '50 Viewer seats',
                  'Centralized billing',
                  'Role-based access control',
                  'Private deployments',
                  'Priority support'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/signup?plan=teams" className="block w-full py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-colors text-center">
                {t('teamsPage.startTeamTrial')}
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{t('teamsPage.cta.title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            {t('teamsPage.cta.subtitle')}
          </p>
          <Link href="/signup?plan=teams" className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-colors text-lg">
            {t('teamsPage.startFreeTeamTrial')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
