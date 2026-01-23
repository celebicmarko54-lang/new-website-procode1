'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CareersPage() {
  const openings = [
    {
      title: 'Senior Full Stack Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      description: 'Build and scale our AI-powered development platform.',
    },
    {
      title: 'Machine Learning Engineer',
      department: 'AI',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      description: 'Develop and improve our AI code generation models.',
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design intuitive experiences for our platform.',
    },
    {
      title: 'Developer Advocate',
      department: 'Developer Relations',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build community and create educational content.',
    },
    {
      title: 'Technical Writer',
      department: 'Documentation',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create world-class documentation and tutorials.',
    },
    {
      title: 'Growth Marketing Manager',
      department: 'Marketing',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      description: 'Drive user acquisition and growth initiatives.',
    },
  ];

  const benefits = [
    { icon: '💰', title: 'Competitive Salary', description: 'Top-of-market compensation packages' },
    { icon: '📈', title: 'Equity', description: 'Ownership stake in the company' },
    { icon: '🏥', title: 'Health & Wellness', description: 'Comprehensive medical, dental, and vision' },
    { icon: '🏠', title: 'Remote First', description: 'Work from anywhere in the world' },
    { icon: '🌴', title: 'Unlimited PTO', description: 'Take the time you need to recharge' },
    { icon: '📚', title: 'Learning Budget', description: '$2,000 annual learning stipend' },
    { icon: '💻', title: 'Equipment', description: 'Latest MacBook and gear of your choice' },
    { icon: '🎉', title: 'Team Retreats', description: 'Annual company-wide gatherings' },
  ];

  const values = [
    { emoji: '🚀', title: 'Move Fast', description: 'We ship quickly and iterate based on feedback' },
    { emoji: '🎯', title: 'User Obsessed', description: 'Every decision starts with the user' },
    { emoji: '🔓', title: 'Default Open', description: 'Transparency in everything we do' },
    { emoji: '🤝', title: 'One Team', description: 'We succeed and fail together' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Join the <span className="text-pink-500">lovecode.dev</span> Team
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Help us build the future of software development. We're looking for passionate people to join our mission.
            </p>
            <a href="#openings" className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg hover:opacity-90 transition-all font-medium" style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)' }}>
              View Open Positions
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Company Values */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition-all">
                <span className="text-4xl mb-4 block">{value.emoji}</span>
                <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="relative py-16 mb-16 overflow-hidden">
          {/* Background with grid */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(233, 30, 140, 0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(233, 30, 140, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }} />
          </div>
          
          {/* Glowing orbs */}
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-[#E91E8C]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-[#9B59B6]/5 rounded-full blur-[100px]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#E91E8C] animate-pulse" />
                <span className="text-sm font-medium text-pink-600">Why Join Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Benefits & Perks</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="group bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-xl hover:shadow-pink-100 hover:border-pink-200 transition-all duration-300">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-2xl">{benefit.icon}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div id="openings" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Open Positions</h2>
          <div className="space-y-4">
            {openings.map((job) => (
              <div
                key={job.title}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-pink-200 transition-all cursor-pointer group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg group-hover:text-pink-600 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{job.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{job.department}</span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{job.location}</span>
                      <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded">{job.type}</span>
                    </div>
                  </div>
                  <button className="flex-shrink-0 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Don't see a fit */}
          <div className="mt-12 text-center bg-pink-50 rounded-xl p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Don't see a perfect fit?</h3>
            <p className="text-gray-600 mb-4">We're always looking for talented people. Send us your resume and we'll keep you in mind.</p>
            <button className="px-6 py-3 text-white rounded-lg hover:opacity-90 transition-all font-medium" style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)' }}>
              Send General Application
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
