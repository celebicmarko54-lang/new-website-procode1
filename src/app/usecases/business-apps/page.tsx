'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BusinessAppsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-black text-gray-900 dark:text-white">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium mb-6">
                Use Case
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Build Business Apps <span className="text-gray-500 dark:text-gray-400">10x Faster</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                From dashboards to internal tools, build the business applications 
                your team needs without waiting for engineering resources.
              </p>
              <div className="flex items-center gap-4">
                <Link href="/signup" className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:opacity-90 transition-all shadow-xl shadow-gray-900/20 dark:shadow-none">
                  Start Building
                </Link>
                <Link href="/gallery" className="px-8 py-4 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-full hover:bg-gray-50 dark:hover:bg-[#151515] transition-colors">
                  See Examples
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-200/50 to-gray-300/50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-2xl p-8">
              <div className="bg-white dark:bg-[#0a0a0a] rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Sales Dashboard</h3>
                  <span className="text-sm text-green-500">↑ 24%</span>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 dark:bg-[#1a1a1a] rounded-lg border border-gray-100 dark:border-gray-800">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">$142K</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Revenue</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 dark:bg-[#1a1a1a] rounded-lg border border-gray-100 dark:border-gray-800">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">847</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Customers</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 dark:bg-[#1a1a1a] rounded-lg border border-gray-100 dark:border-gray-800">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">92%</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Retention</div>
                  </div>
                </div>
                <div className="h-24 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">What You Can Build</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '📊', title: 'Dashboards', description: 'KPI dashboards, analytics views, and reporting tools' },
              { icon: '🔄', title: 'Workflow Automation', description: 'Automate repetitive tasks and approval processes' },
              { icon: '📋', title: 'Admin Panels', description: 'Custom admin interfaces for your data and systems' },
              { icon: '👥', title: 'CRM Tools', description: 'Customer management and sales tracking systems' },
              { icon: '📦', title: 'Inventory Systems', description: 'Track stock, orders, and supply chain data' },
              { icon: '📝', title: 'Forms & Surveys', description: 'Data collection tools and feedback systems' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Build your business app today</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            No engineering team required. Start building in minutes.
          </p>
          <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:opacity-90 transition-all shadow-xl shadow-gray-900/20 dark:shadow-none text-lg">
            Get Started Free
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
