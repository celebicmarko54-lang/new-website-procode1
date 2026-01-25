'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PublishPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-black text-gray-900 dark:text-white transition-colors">
      <Header />
      <main className="pt-24 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-black border border-gray-200 dark:border-gray-800 mb-6">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Deployment</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
              <span className="text-gray-500 dark:text-gray-400">Publish</span> Instantly
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Deploy your apps with one click. Get a custom domain, SSL certificates, and global CDN automatically.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/signup" className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:opacity-90 transition-all shadow-xl shadow-gray-900/20 dark:shadow-none">Deploy Now</Link>
              <Link href="/docs" className="px-8 py-4 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] text-gray-700 dark:text-gray-300 font-medium rounded-full hover:bg-gray-50 dark:hover:bg-[#151515] transition-colors">Learn More</Link>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Everything You Need to Ship</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🚀', title: 'One-Click Deploy', description: 'Deploy directly from your editor.' },
              { icon: '🌐', title: 'Custom Domains', description: 'Connect your own domain or use our subdomain.' },
              { icon: '🔒', title: 'Automatic SSL', description: 'Every deployment gets a free SSL certificate.' },
              { icon: '⚡', title: 'Global CDN', description: 'Your app is served from 34+ edge locations.' },
              { icon: '📊', title: 'Analytics Built-in', description: 'Track visitors and performance metrics.' },
              { icon: '🔄', title: 'Instant Rollbacks', description: 'Roll back to any previous deployment.' }
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-white dark:bg-[#0a0a0a] rounded-2xl border border-gray-200 dark:border-gray-800">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Ship your app today</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Go from idea to production in minutes, not days.</p>
          <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:opacity-90 transition-all shadow-xl shadow-gray-900/20 dark:shadow-none text-lg">Start Deploying</Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
