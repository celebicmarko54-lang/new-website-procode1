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
    { name: 'Team Member', role: 'Position', image: '', bio: 'Bio coming soon.' },
    { name: 'Team Member', role: 'Position', image: '', bio: 'Bio coming soon.' },
    { name: 'Team Member', role: 'Position', image: '', bio: 'Bio coming soon.' },
    { name: 'Team Member', role: 'Position', image: '', bio: 'Bio coming soon.' },
  ];

  const values = [
    { 
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      title: 'Innovation First', 
      description: 'We push boundaries and embrace cutting-edge technology to solve real problems.' 
    },
    { 
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      title: 'User Obsessed', 
      description: 'Every decision we make starts with our users. Their success is our success.' 
    },
    { 
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
      title: 'Trust & Security', 
      description: 'We take security seriously. Your data and code are protected by industry-leading practices.' 
    },
    { 
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: 'Global Impact', 
      description: 'We\'re building tools that empower creators everywhere, regardless of background.' 
    },
    { 
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
      title: 'Transparency', 
      description: 'We believe in open communication with our community and being honest about our roadmap.' 
    },
    { 
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
      title: 'Community Driven', 
      description: 'Our community shapes our product. We listen, learn, and build together.' 
    },
  ];

  const milestones = [
    { year: '2025', title: 'Founded / Development Kickoff', description: 'AppNode officially started serious work in October 2025 (ideas brewing earlier). Built the core AI engine that combines Replit-style live coding + v0-style AI UI generation. Created X account to start sharing teasers and building early community.' },
    { year: '2026', title: 'Beta Launch & Seed Funding', description: 'Launched private/public beta with powerful AI for web apps. Raised seed funding ($2-5M range) to grow the team and speed up mobile features. Partnered with key AI providers and dev tools to boost credibility and hype.' },
    { year: '2026', title: '10K Users', description: 'Reached 10,000 users in just a few months after beta. Early adopters loving the speed – turn ideas into deployable apps in minutes. Started teasing iOS support and built-in App Store for sharing/publishing apps.' },
    { year: '2026', title: 'Continuing to Grow', description: 'Expanding features, growing our community, and staying updated with the latest AI advancements. Follow us on X for real-time updates on new releases and upcoming features.' },
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
              Empowering creators to build anything
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
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-2">
              From October 2025: Serious development begins
            </p>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-sm">
              AppNode was born from a simple idea: make app development accessible to everyone using AI – no complex setup, just describe what you want and get a working app.
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
                <div className="w-20 h-20 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 border-2 border-dashed border-gray-300 dark:border-gray-700">
                  {member.image || <span className="text-gray-400 text-sm">Photo</span>}
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
