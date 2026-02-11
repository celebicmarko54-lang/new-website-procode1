'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from '@/context/LanguageContext';

const solutions = [
  {
    slug: 'founders',
    title: 'For Founders',
    subtitle: 'Launch faster, iterate smarter',
    description: 'Build your MVP in days, not months. Validate ideas quickly and get to market before your competition.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-50 to-red-50',
    features: [
      'Launch MVPs in days',
      'Rapid prototyping',
      'Easy investor demos',
      'Scalable architecture',
    ],
    testimonial: {
      quote: "We built our entire MVP in 2 weeks. AppNode saved us months of development time.",
      author: "Jason Park",
      role: "Founder, TechStartup"
    }
  },
  {
    slug: 'designers',
    title: 'For Designers',
    subtitle: 'Design to production in minutes',
    description: 'Transform your designs into real, functional applications without writing a single line of code.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    gradient: 'from-purple-500 to-gray-900',
    bgGradient: 'from-purple-50 to-gray-50',
    features: [
      'Pixel-perfect implementation',
      'Interactive prototypes',
      'Real user testing',
      'No coding required',
    ],
    testimonial: {
      quote: "Finally I can ship my designs without waiting for developers. Game changer!",
      author: "Emma Chen",
      role: "Lead Designer, DesignCo"
    }
  },
  {
    slug: 'marketers',
    title: 'For Marketers',
    subtitle: 'Launch campaigns instantly',
    description: 'Create landing pages, microsites, and marketing tools without engineering dependencies.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    features: [
      'Landing page builder',
      'A/B testing ready',
      'Analytics integration',
      'Lead capture forms',
    ],
    testimonial: {
      quote: "We launched 10 landing pages in one week. Our conversion rate doubled.",
      author: "Mike Torres",
      role: "Marketing Director, GrowthCo"
    }
  },
  {
    slug: 'prototyping',
    title: 'Prototyping',
    subtitle: 'Ideas to interactive demos',
    description: 'Build fully functional prototypes that look and feel like real products.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50',
    features: [
      'High-fidelity prototypes',
      'Real interactions',
      'User testing ready',
      'Shareable demos',
    ],
    testimonial: {
      quote: "Our prototypes are so good, users think they're using the real product.",
      author: "Lisa Wang",
      role: "Product Manager, ProductLab"
    }
  },
];

export default function SolutionsPage() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-white dark:bg-[#1A1A1A]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-gray-50 dark:bg-[#1A1A1A] text-gray-900 dark:text-white rounded-full text-sm font-medium mb-4 border border-transparent dark:border-2 dark:border-gray-800">
            {t('solutionsPage.badge')}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            {t('solutionsPage.titleStart')} {t('solutionsPage.titleHighlight')} {t('solutionsPage.titleEnd')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('solutionsPage.subtitle')}
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className={`group p-8 rounded-3xl bg-gradient-to-br ${solution.bgGradient} dark:from-[#1A1A1A] dark:to-[#222222] border border-gray-200 dark:border-2 dark:border-gray-800 hover:shadow-2xl transition-all hover:-translate-y-1`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {solution.icon}
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{solution.title}</h2>
                <p className={`text-lg font-medium bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent mb-3`}>
                  {solution.subtitle}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{solution.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-6 border-t border-gray-200/50 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-2">&ldquo;{solution.testimonial.quote}&rdquo;</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {solution.testimonial.author}, {solution.testimonial.role}
                  </p>
                </div>
                
                <div className="mt-6 flex items-center gap-2 text-gray-900 dark:text-white font-medium group-hover:gap-3 transition-all">
                  {t('common.learnMore')}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            {t('solutionsPage.ctaTitle')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('solutionsPage.ctaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-4 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg"
              style={{ background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)' }}
            >
              {t('solutionsPage.startBuildingFree')}
            </Link>
            <Link
              href="/enterprise"
              className="px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              {t('solutionsPage.talkToSales')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
