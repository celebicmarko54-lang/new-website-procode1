'use client';

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Chat-based Development',
    description: 'Simply describe what you want to build in natural language. Our AI understands your vision and brings it to life.',
    gradient: 'from-pink-100 to-rose-200',
    iconBg: 'bg-gradient-to-br from-pink-400 to-rose-500',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Lightning Fast',
    description: 'Go from idea to deployed app in minutes, not days. No coding experience required.',
    gradient: 'from-purple-100 to-violet-200',
    iconBg: 'bg-gradient-to-br from-purple-400 to-violet-500',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: 'Beautiful by Default',
    description: 'Every project comes with stunning, modern designs. Customize themes and styles with ease.',
    gradient: 'from-blue-100 to-cyan-200',
    iconBg: 'bg-gradient-to-br from-blue-400 to-cyan-500',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Full Code Access',
    description: 'Export your code anytime. Built with React, Next.js, and modern best practices.',
    gradient: 'from-amber-100 to-orange-200',
    iconBg: 'bg-gradient-to-br from-amber-400 to-orange-500',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'One-Click Deploy',
    description: 'Deploy your apps instantly with built-in hosting. Share your creations with the world.',
    gradient: 'from-emerald-100 to-teal-200',
    iconBg: 'bg-gradient-to-br from-emerald-400 to-teal-500',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: 'Powerful Integrations',
    description: 'Connect with Supabase, GitHub, and more. Build full-stack apps with ease.',
    gradient: 'from-indigo-100 to-purple-200',
    iconBg: 'bg-gradient-to-br from-indigo-400 to-purple-500',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 text-sm bg-purple-100 text-purple-700 rounded-full mb-4 inline-block font-medium">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything you need to build
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            lovecode.dev provides all the tools you need to turn your ideas into beautiful, functional applications.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-6 bg-gradient-to-br ${feature.gradient} rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl ${feature.iconBg} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all font-medium text-lg shadow-xl shadow-gray-900/20">
            Start Building for Free
          </button>
        </div>
      </div>
    </section>
  );
}
