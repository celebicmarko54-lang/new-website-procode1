'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function MobileAppsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-black text-gray-900 dark:text-white">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-6">
                Use Case
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Build Mobile Apps <span className="text-cyan-500">Without Code</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Create native-quality mobile experiences that work on iOS and Android. 
                No Swift, Kotlin, or React Native required.
              </p>
              <div className="flex items-center gap-4">
                <Link href="/signup" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors">
                  Start Building
                </Link>
                <Link href="/gallery" className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 font-medium rounded-lg transition-colors">
                  See Examples
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              {/* Phone Mockup */}
              <div className="w-64 h-[500px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-[2rem] overflow-hidden relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-xl"></div>
                  <div className="pt-8 p-4">
                    <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                    <div className="h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-12 bg-gray-100 dark:bg-gray-700 rounded-lg"></div>
                      <div className="h-12 bg-gray-100 dark:bg-gray-700 rounded-lg"></div>
                      <div className="h-12 bg-gray-100 dark:bg-gray-700 rounded-lg"></div>
                    </div>
                    <div className="absolute bottom-8 left-4 right-4">
                      <div className="h-12 bg-cyan-500 rounded-xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Mobile App Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '📱', title: 'Native Performance', description: 'Apps that feel fast and responsive on any device' },
              { icon: '🔔', title: 'Push Notifications', description: 'Engage users with timely push notifications' },
              { icon: '📍', title: 'Location Services', description: 'Build location-aware features with GPS' },
              { icon: '📷', title: 'Camera & Media', description: 'Access camera, photos, and media libraries' },
              { icon: '💾', title: 'Offline Support', description: 'Apps that work even without internet' },
              { icon: '🔄', title: 'Cross-Platform', description: 'One codebase for iOS and Android' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Build your mobile app today</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            From idea to App Store in record time.
          </p>
          <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors text-lg">
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
