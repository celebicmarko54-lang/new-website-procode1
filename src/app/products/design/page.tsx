'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function DesignPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-black text-gray-900 dark:text-white transition-colors">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-black border border-gray-200 dark:border-gray-800 mb-6">
              <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Visual Development</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
              Design with <span className="text-gray-500 dark:text-gray-400">Precision</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Granular controls so your app matches your vision. Import your designs or integrate 
              your design system, refine in a live visual editor, and ship instantly.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/signup" className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:opacity-90 transition-all shadow-xl shadow-gray-900/20 dark:shadow-none">
                Try Design Tools
              </Link>
              <Link href="/docs" className="px-8 py-4 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] text-gray-700 dark:text-gray-300 font-medium rounded-full hover:bg-gray-50 dark:hover:bg-[#151515] transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Visual Editor Preview */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white dark:bg-[#0a0a0a] rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-xl">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-black border-b border-gray-200 dark:border-gray-800">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-sm text-gray-500 dark:text-gray-400">Visual Editor</span>
            </div>
            <div className="grid grid-cols-4 min-h-[400px]">
              {/* Left Panel - Components */}
              <div className="border-r border-gray-200 dark:border-gray-800 p-4">
                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase mb-3">Components</div>
                <div className="space-y-2">
                  {['Button', 'Card', 'Input', 'Modal', 'Table', 'Chart'].map((comp, i) => (
                    <div key={i} className="px-3 py-2 bg-gray-100 dark:bg-black rounded-lg text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-[#1a1a1a] transition-colors text-gray-700 dark:text-gray-300">
                      {comp}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Center - Canvas */}
              <div className="col-span-2 p-8 bg-gray-50 dark:bg-[#0a0a0a]">
                <div className="bg-white dark:bg-black rounded-xl shadow-lg p-6 border-2 border-gray-300 dark:border-gray-700 border-dashed">
                  <div className="h-8 w-32 bg-gray-200 dark:bg-gray-800 rounded mb-4"></div>
                  <div className="h-4 w-48 bg-gray-200 dark:bg-gray-800 rounded mb-2"></div>
                  <div className="h-4 w-40 bg-gray-200 dark:bg-gray-800 rounded mb-6"></div>
                  <div className="h-10 w-28 bg-black dark:bg-white rounded-full"></div>
                </div>
              </div>
              
              {/* Right Panel - Properties */}
              <div className="border-l border-gray-200 dark:border-gray-800 p-4">
                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase mb-3">Properties</div>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-gray-500 dark:text-gray-400">Width</label>
                    <input type="text" defaultValue="320px" className="w-full px-2 py-1 bg-gray-100 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg text-sm text-gray-700 dark:text-gray-300" readOnly />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 dark:text-gray-400">Background</label>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-black dark:bg-white rounded"></div>
                      <input type="text" defaultValue="#000000" className="flex-1 px-2 py-1 bg-gray-100 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg text-sm text-gray-700 dark:text-gray-300" readOnly />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 dark:text-gray-400">Border Radius</label>
                    <input type="text" defaultValue="9999px" className="w-full px-2 py-1 bg-gray-100 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg text-sm text-gray-700 dark:text-gray-300" readOnly />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Design Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🎨',
                title: 'Live Visual Editor',
                description: 'Edit components visually with real-time preview. What you see is exactly what users get.'
              },
              {
                icon: '📐',
                title: 'Design System Import',
                description: 'Import your existing Figma designs or brand guidelines and apply them instantly.'
              },
              {
                icon: '🧩',
                title: 'Component Library',
                description: 'Access a rich library of pre-built, customizable components that follow best practices.'
              },
              {
                icon: '📱',
                title: 'Responsive Controls',
                description: 'Design for all screen sizes with intuitive breakpoint controls and mobile preview.'
              },
              {
                icon: '🎯',
                title: 'Pixel-Perfect Editing',
                description: 'Fine-tune spacing, typography, and colors with precision controls.'
              },
              {
                icon: '⚡',
                title: 'Instant Deploy',
                description: 'Ship your designs immediately. No build steps, no deployment configuration needed.'
              }
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-white dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Design beautiful apps faster</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Turn your design vision into reality with AppNode&apos;s powerful visual tools.
          </p>
          <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:opacity-90 transition-all shadow-xl shadow-gray-900/20 dark:shadow-none text-lg">
            Start Designing
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
