'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AgentPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-black text-gray-900 dark:text-white">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              AI-Powered Development
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Meet AppNode <span className="text-purple-500">Agent</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Your AI coding companion that writes production-ready code, evolves it as you iterate, 
              and stays out of your way while you build. Describe what you want, and Agent delivers.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/signup" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors">
                Start Building Free
              </Link>
              <Link href="/docs" className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 font-medium rounded-lg transition-colors">
                View Documentation
              </Link>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="space-y-4 font-mono text-sm">
              <div className="flex gap-3">
                <span className="text-purple-400">You:</span>
                <span className="text-gray-300">Create a dashboard with user analytics, charts, and real-time data</span>
              </div>
              <div className="flex gap-3">
                <span className="text-green-400">Agent:</span>
                <span className="text-gray-300">I'll create a comprehensive analytics dashboard for you...</span>
              </div>
              <div className="mt-4 p-4 bg-gray-800 dark:bg-gray-700 rounded-lg">
                <span className="text-gray-500">// dashboard.tsx - Agent is writing code...</span>
                <div className="mt-2 flex items-center gap-2">
                  <div className="w-2 h-4 bg-purple-500 animate-pulse"></div>
                  <span className="text-purple-400">Creating components, setting up data fetching...</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">How Agent Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Describe Your Vision</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Tell Agent what you want to build in plain English. No need for technical jargon - 
                just describe your app like you would to a colleague.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Watch It Build</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Agent writes production-ready code in real-time. See files being created, 
                components being structured, and your app taking shape.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Iterate & Improve</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Not quite right? Just tell Agent what to change. It understands context and 
                makes smart adjustments while preserving what works.
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Autonomous Long Builds</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Agent doesn't just write snippets - it can build entire applications autonomously. 
                Set up a complex project structure, implement features across multiple files, and 
                handle dependencies automatically.
              </p>
              <ul className="space-y-3">
                {['Full-stack applications', 'Multi-file refactoring', 'Test generation', 'Documentation writing', 'Bug fixing & debugging'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-lg">
                  <div className="text-sm text-gray-500 mb-1">Files created</div>
                  <div className="text-2xl font-bold text-purple-600">24</div>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-lg">
                  <div className="text-sm text-gray-500 mb-1">Lines of code</div>
                  <div className="text-2xl font-bold text-blue-600">3,847</div>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-lg">
                  <div className="text-sm text-gray-500 mb-1">Build time</div>
                  <div className="text-2xl font-bold text-green-600">4m 32s</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to build with AI?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Start building your next project with AppNode Agent today. Free to start, no credit card required.
          </p>
          <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors text-lg">
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
