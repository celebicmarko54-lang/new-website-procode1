'use client';

import { useTranslation } from '@/context/LanguageContext';

// Feature icons without text
const featureIcons = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    titleKey: 'features.aiPowered.title',
    descriptionKey: 'features.aiPowered.description',
    gradient: 'from-gray-50 to-gray-100',
    iconBg: 'bg-gray-900',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    titleKey: 'features.instantDeploy.title',
    descriptionKey: 'features.instantDeploy.description',
    gradient: 'from-gray-50 to-gray-100',
    iconBg: 'bg-gray-900',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    titleKey: 'features.visualBuilder.title',
    descriptionKey: 'features.visualBuilder.description',
    gradient: 'from-gray-50 to-gray-100',
    iconBg: 'bg-gray-900',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    titleKey: 'features.api.title',
    descriptionKey: 'features.api.description',
    gradient: 'from-gray-50 to-gray-100',
    iconBg: 'bg-gray-900',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titleKey: 'features.responsive.title',
    descriptionKey: 'features.responsive.description',
    gradient: 'from-gray-50 to-gray-100',
    iconBg: 'bg-gray-900',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    titleKey: 'features.database.title',
    descriptionKey: 'features.database.description',
    gradient: 'from-gray-50 to-gray-100',
    iconBg: 'bg-gray-900',
  },
];

export default function FeaturesSection() {
  const { t } = useTranslation();
  
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm bg-gray-100 text-gray-700 rounded-full mb-3 sm:mb-4 inline-block font-medium">
            {t('nav.products')}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            {t('features.title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {featureIcons.map((feature, index) => (
            <div
              key={index}
              className={`group p-4 sm:p-6 bg-gradient-to-br ${feature.gradient} rounded-xl sm:rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl ${feature.iconBg} flex items-center justify-center text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {t(feature.titleKey)}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {t(feature.descriptionKey)}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-16 text-center">
          <button className="px-6 sm:px-8 py-3 sm:py-3.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all font-medium text-base sm:text-lg shadow-xl shadow-gray-900/20">
            {t('common.startBuilding')}
          </button>
        </div>
      </div>
    </section>
  );
}
