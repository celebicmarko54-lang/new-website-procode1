'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function DatabasePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-black text-gray-900 dark:text-white transition-colors">
      <Header />
      <main className="pt-24 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-black border border-gray-200 dark:border-gray-800 mb-6">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Data Management</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
              Built-in <span className="text-gray-500 dark:text-gray-400">Database</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Store and manage your data without any setup. AppNode provides a powerful, scalable database ready from day one.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/signup" className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:opacity-90 transition-all shadow-xl shadow-gray-900/20 dark:shadow-none">Get Started Free</Link>
              <Link href="/docs" className="px-8 py-4 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] text-gray-700 dark:text-gray-300 font-medium rounded-full hover:bg-gray-50 dark:hover:bg-[#151515] transition-colors">Read the Docs</Link>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{ value: '99.99%', label: 'Uptime SLA' }, { value: '<10ms', label: 'Query latency' }, { value: '∞', label: 'Scalability' }, { value: '0', label: 'Configuration' }].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white dark:bg-[#0a0a0a] rounded-2xl border border-gray-200 dark:border-gray-800">
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Start storing data today</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Build data-driven applications without the infrastructure headaches.</p>
          <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:opacity-90 transition-all shadow-xl shadow-gray-900/20 dark:shadow-none text-lg">Get Started Free</Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
