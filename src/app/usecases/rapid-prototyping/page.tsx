'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function RapidPrototypingPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-black text-gray-900 dark:text-white">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium mb-6">
              Use Case
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              From Idea to Prototype in <span className="text-gray-500 dark:text-gray-400">Minutes</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Validate ideas fast. Build working prototypes that look and feel like the real thing, 
              without writing a single line of code.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/signup" className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:opacity-90 transition-all shadow-xl shadow-gray-900/20 dark:shadow-none">
                Start Prototyping
              </Link>
              <Link href="/gallery" className="px-8 py-4 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-full hover:bg-gray-50 dark:hover:bg-[#151515] transition-colors">
                See Examples
              </Link>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Traditional vs AppNode</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl opacity-60">
              <h3 className="font-semibold mb-4 text-gray-500">Traditional Prototyping</h3>
              <div className="space-y-3">
                {[
                  { step: 'Wireframes', time: '2-3 days' },
                  { step: 'Design mockups', time: '1-2 weeks' },
                  { step: 'Developer handoff', time: '1-2 days' },
                  { step: 'Build prototype', time: '2-4 weeks' },
                  { step: 'Testing & iteration', time: '1-2 weeks' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                    <span>{item.step}</span>
                    <span className="text-sm text-gray-500">{item.time}</span>
                  </div>
                ))}
                <div className="pt-2 flex items-center justify-between font-semibold">
                  <span>Total time</span>
                  <span className="text-red-500">6-10 weeks</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black rounded-xl border-2 border-gray-300 dark:border-gray-700">
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">AppNode Prototyping</h3>
              <div className="space-y-3">
                {[
                  { step: 'Describe your idea', time: '5 minutes' },
                  { step: 'AI generates prototype', time: '2-10 minutes' },
                  { step: 'Customize & refine', time: '30-60 minutes' },
                  { step: 'Share with stakeholders', time: '1 minute' },
                  { step: 'Iterate based on feedback', time: '15-30 minutes' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-gray-300 dark:border-gray-700">
                    <span>{item.step}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{item.time}</span>
                  </div>
                ))}
                <div className="pt-2 flex items-center justify-between font-semibold">
                  <span>Total time</span>
                  <span className="text-green-500">1-2 hours</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Rapid Prototyping Matters</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '💰', title: 'Save Money', description: 'Validate ideas before investing in full development' },
              { icon: '⏱️', title: 'Save Time', description: 'Get feedback in hours, not weeks' },
              { icon: '🎯', title: 'Reduce Risk', description: 'Fail fast and pivot before it costs you' },
              { icon: '🤝', title: 'Align Teams', description: 'Show, don\'t tell. Get everyone on the same page' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Start prototyping today</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Turn your ideas into working prototypes in minutes, not months.
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
