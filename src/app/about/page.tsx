'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  const stats = [
    { number: '100K+', label: 'Developers' },
    { number: '500K+', label: 'Apps Built' },
    { number: '50+', label: 'Countries' },
    { number: '99.9%', label: 'Uptime' },
  ];

  const team = [
    { name: 'Alex Chen', role: 'CEO & Co-founder', image: '👨‍💼', bio: 'Former Google engineer, passionate about democratizing software development.' },
    { name: 'Sarah Kim', role: 'CTO & Co-founder', image: '👩‍💻', bio: 'PhD in Machine Learning, previously led AI research at OpenAI.' },
    { name: 'Marcus Johnson', role: 'Head of Product', image: '👨‍🎨', bio: '10+ years building developer tools at Stripe and Figma.' },
    { name: 'Emma Wilson', role: 'Head of Engineering', image: '👩‍🔬', bio: 'Ex-Amazon, scaled systems serving millions of users.' },
  ];

  const values = [
    { icon: '🚀', title: 'Innovation First', description: 'We push boundaries and embrace cutting-edge technology to solve real problems.' },
    { icon: '👥', title: 'User Obsessed', description: 'Every decision we make starts with our users. Their success is our success.' },
    { icon: '🔒', title: 'Trust & Security', description: 'We take security seriously. Your data and code are protected by industry-leading practices.' },
    { icon: '🌍', title: 'Global Impact', description: 'We\'re building tools that empower creators everywhere, regardless of background.' },
    { icon: '💡', title: 'Transparency', description: 'We believe in open communication with our community and being honest about our roadmap.' },
    { icon: '🤝', title: 'Community Driven', description: 'Our community shapes our product. We listen, learn, and build together.' },
  ];

  const milestones = [
    { year: '2023', title: 'Founded', description: 'AppNode was born from a simple idea: make app development accessible to everyone.' },
    { year: '2024', title: 'Seed Funding', description: 'Raised $5M to accelerate development and grow our team.' },
    { year: '2024', title: '10K Users', description: 'Reached our first 10,000 users milestone in just 6 months.' },
    { year: '2025', title: 'Series A', description: 'Raised $25M to expand globally and launch new features.' },
    { year: '2025', title: '100K Users', description: 'Crossed 100,000 developers building on AppNode.' },
    { year: '2026', title: 'Today', description: 'Continuing to innovate and empower creators worldwide.' },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-black text-gray-900 dark:text-white transition-colors">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 mb-6">
              <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">About Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
              Empowering creators to <span className="text-gray-500 dark:text-gray-400">build anything</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              AppNode is on a mission to democratize software development. We believe everyone should have the power to bring their ideas to life, regardless of technical background.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-[#0a0a0a] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Story Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  AppNode started with a simple observation: building software is too hard. Too many great ideas never see the light of day because creating apps requires years of technical training.
                </p>
                <p>
                  We founded AppNode to change that. Using the latest advances in AI and intuitive design, we&apos;ve created a platform where anyone can build production-ready applications in minutes, not months.
                </p>
                <p>
                  Today, over 100,000 creators use AppNode to build everything from simple landing pages to complex enterprise applications. Our community spans 50+ countries and continues to grow every day.
                </p>
                <p>
                  We&apos;re just getting started. Our vision is a world where technology creation is as accessible as writing an email. Join us on this journey.
                </p>
              </div>
            </div>
            <div className="bg-black dark:bg-white rounded-3xl p-8 md:p-12 text-white dark:text-black">
              <div className="text-6xl mb-6">💡</div>
              <blockquote className="text-2xl md:text-3xl font-medium mb-6">
                "The best way to predict the future is to create it."
              </blockquote>
              <p className="text-white/70 dark:text-black/70">— Our founding principle</p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              These principles guide everything we do at AppNode.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-[#0a0a0a] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Journey</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From a small idea to a global platform.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-200 dark:bg-gray-800 hidden md:block"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white dark:bg-[#0a0a0a] rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                      <span className="inline-block px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold rounded-full mb-3">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 bg-black dark:bg-white rounded-full z-10 flex-shrink-0"></div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The passionate people behind AppNode.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-[#0a0a0a] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 text-center hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                <div className="w-20 h-20 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  {member.image}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Join us on our mission</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Whether you&apos;re a creator looking to build or someone who wants to help shape the future of software development.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup" className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:opacity-90 transition-all shadow-lg">
              Start Building Free
            </Link>
            <Link href="/careers" className="px-8 py-4 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-full hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
              View Open Positions
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
