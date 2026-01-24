'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function VideosPage() {
  const featuredVideo = {
    title: 'Complete Lovecode Tutorial: From Zero to Deployed App',
    description: 'The ultimate guide to building and deploying your first application with Lovecode. Learn everything from account setup to live deployment on Cloudflare, Vercel, or GitHub Pages.',
    duration: '45:30',
    views: '156K',
  };

  // Getting Started Series
  const gettingStartedVideos = [
    {
      title: 'Welcome to Lovecode - Platform Overview',
      description: 'Introduction to the Lovecode interface and features',
      duration: '5:24',
      views: '245K',
      category: 'Beginner',
    },
    {
      title: 'Creating Your Account & First Project',
      description: 'Step-by-step account setup and project creation',
      duration: '8:15',
      views: '189K',
      category: 'Beginner',
    },
    {
      title: 'Understanding the AI Chat Interface',
      description: 'How to communicate effectively with the AI',
      duration: '12:30',
      views: '167K',
      category: 'Beginner',
    },
    {
      title: 'Your First App in 5 Minutes',
      description: 'Build a simple landing page from scratch',
      duration: '5:45',
      views: '198K',
      category: 'Speed Build',
    },
  ];

  // Prompting & AI Communication
  const promptingVideos = [
    {
      title: 'Writing Effective Prompts',
      description: 'Master the art of describing what you want to build',
      duration: '15:20',
      views: '134K',
      category: 'Tips',
    },
    {
      title: 'Advanced Prompting Techniques',
      description: 'Complex prompts for sophisticated applications',
      duration: '18:45',
      views: '98K',
      category: 'Advanced',
    },
    {
      title: 'Iterating & Refining Your App',
      description: 'How to request changes and improvements',
      duration: '11:30',
      views: '112K',
      category: 'Tips',
    },
    {
      title: 'Common Prompting Mistakes to Avoid',
      description: 'Learn from others\' mistakes',
      duration: '9:15',
      views: '145K',
      category: 'Tips',
    },
  ];

  // Building Different App Types
  const appTypeVideos = [
    {
      title: 'Building a Landing Page',
      description: 'Create stunning marketing pages with hero sections',
      duration: '14:30',
      views: '156K',
      category: 'Tutorial',
    },
    {
      title: 'Building an E-commerce Store',
      description: 'Complete online shop with cart and checkout',
      duration: '35:45',
      views: '89K',
      category: 'Tutorial',
    },
    {
      title: 'Building a Dashboard Application',
      description: 'Data visualization and admin panels',
      duration: '28:20',
      views: '76K',
      category: 'Tutorial',
    },
    {
      title: 'Building a Portfolio Website',
      description: 'Showcase your work professionally',
      duration: '18:15',
      views: '134K',
      category: 'Tutorial',
    },
    {
      title: 'Building a Blog Platform',
      description: 'Content management and article pages',
      duration: '25:40',
      views: '67K',
      category: 'Tutorial',
    },
    {
      title: 'Building a SaaS Application',
      description: 'Complete software-as-a-service template',
      duration: '42:30',
      views: '54K',
      category: 'Advanced',
    },
    {
      title: 'Building a Mobile App UI',
      description: 'Responsive mobile-first design patterns',
      duration: '22:15',
      views: '78K',
      category: 'Tutorial',
    },
    {
      title: 'Building a Social Media App',
      description: 'User profiles, feeds, and interactions',
      duration: '38:45',
      views: '45K',
      category: 'Advanced',
    },
  ];

  // Customization & Styling
  const stylingVideos = [
    {
      title: 'Customizing Colors & Themes',
      description: 'Brand your app with custom color palettes',
      duration: '12:30',
      views: '98K',
      category: 'Tutorial',
    },
    {
      title: 'Working with Typography',
      description: 'Choose and apply fonts effectively',
      duration: '10:15',
      views: '67K',
      category: 'Tutorial',
    },
    {
      title: 'Adding Animations & Transitions',
      description: 'Bring your app to life with motion',
      duration: '16:45',
      views: '89K',
      category: 'Tutorial',
    },
    {
      title: 'Responsive Design Mastery',
      description: 'Perfect layouts on all devices',
      duration: '20:30',
      views: '112K',
      category: 'Tutorial',
    },
    {
      title: 'Dark Mode Implementation',
      description: 'Add theme switching to your app',
      duration: '14:20',
      views: '78K',
      category: 'Tutorial',
    },
    {
      title: 'Custom Components & Styling',
      description: 'Create unique UI elements',
      duration: '18:55',
      views: '56K',
      category: 'Advanced',
    },
  ];

  // Features & Functionality
  const featureVideos = [
    {
      title: 'Adding User Authentication',
      description: 'Login, signup, and user management',
      duration: '24:30',
      views: '134K',
      category: 'Tutorial',
    },
    {
      title: 'Database Integration & CRUD',
      description: 'Store and manage data effectively',
      duration: '28:45',
      views: '98K',
      category: 'Tutorial',
    },
    {
      title: 'Payment Integration with Stripe',
      description: 'Accept payments in your app',
      duration: '32:15',
      views: '67K',
      category: 'Advanced',
    },
    {
      title: 'Adding Search Functionality',
      description: 'Implement search and filtering',
      duration: '15:40',
      views: '89K',
      category: 'Tutorial',
    },
    {
      title: 'Form Handling & Validation',
      description: 'Build robust forms with validation',
      duration: '18:25',
      views: '78K',
      category: 'Tutorial',
    },
    {
      title: 'Email Integration & Notifications',
      description: 'Send emails from your app',
      duration: '20:15',
      views: '56K',
      category: 'Tutorial',
    },
    {
      title: 'File Upload & Storage',
      description: 'Handle images and documents',
      duration: '16:30',
      views: '67K',
      category: 'Tutorial',
    },
    {
      title: 'Real-time Features & WebSockets',
      description: 'Build chat and live updates',
      duration: '35:45',
      views: '45K',
      category: 'Advanced',
    },
  ];

  // Deployment Videos
  const deploymentVideos = [
    {
      title: 'Deployment Overview & Options',
      description: 'Understanding your deployment choices',
      duration: '8:30',
      views: '156K',
      category: 'Deployment',
    },
    {
      title: 'Deploying to Cloudflare Pages',
      description: 'Step-by-step Cloudflare deployment guide',
      duration: '15:45',
      views: '134K',
      category: 'Deployment',
    },
    {
      title: 'Deploying to Vercel',
      description: 'Complete Vercel deployment tutorial',
      duration: '14:20',
      views: '145K',
      category: 'Deployment',
    },
    {
      title: 'Deploying to GitHub Pages',
      description: 'Free hosting with GitHub Pages',
      duration: '12:30',
      views: '123K',
      category: 'Deployment',
    },
    {
      title: 'Setting Up Custom Domains',
      description: 'Connect your own domain name',
      duration: '10:15',
      views: '98K',
      category: 'Deployment',
    },
    {
      title: 'SSL Certificates & Security',
      description: 'Secure your deployed app',
      duration: '11:45',
      views: '78K',
      category: 'Deployment',
    },
    {
      title: 'Environment Variables & Secrets',
      description: 'Manage sensitive configuration',
      duration: '9:30',
      views: '89K',
      category: 'Deployment',
    },
    {
      title: 'Continuous Deployment Setup',
      description: 'Auto-deploy on code changes',
      duration: '16:20',
      views: '67K',
      category: 'Deployment',
    },
  ];

  // GitHub Integration
  const githubVideos = [
    {
      title: 'Connecting GitHub to Lovecode',
      description: 'Link your GitHub account',
      duration: '6:15',
      views: '167K',
      category: 'GitHub',
    },
    {
      title: 'Pushing Code to GitHub',
      description: 'Export your project to a repository',
      duration: '10:30',
      views: '145K',
      category: 'GitHub',
    },
    {
      title: 'GitHub Actions for Auto-Deploy',
      description: 'Set up automated deployments',
      duration: '18:45',
      views: '89K',
      category: 'GitHub',
    },
    {
      title: 'Collaborating with Git',
      description: 'Work with team members on projects',
      duration: '14:20',
      views: '78K',
      category: 'GitHub',
    },
  ];

  // Advanced Topics
  const advancedVideos = [
    {
      title: 'API Integration & External Services',
      description: 'Connect to third-party APIs',
      duration: '25:30',
      views: '78K',
      category: 'Advanced',
    },
    {
      title: 'SEO Optimization Best Practices',
      description: 'Rank higher in search engines',
      duration: '18:45',
      views: '98K',
      category: 'Advanced',
    },
    {
      title: 'Performance Optimization',
      description: 'Make your app lightning fast',
      duration: '22:15',
      views: '67K',
      category: 'Advanced',
    },
    {
      title: 'Analytics & Tracking Setup',
      description: 'Monitor your app usage',
      duration: '14:30',
      views: '56K',
      category: 'Advanced',
    },
    {
      title: 'Accessibility Best Practices',
      description: 'Build inclusive applications',
      duration: '16:45',
      views: '45K',
      category: 'Advanced',
    },
    {
      title: 'Internationalization (i18n)',
      description: 'Support multiple languages',
      duration: '20:30',
      views: '34K',
      category: 'Advanced',
    },
  ];

  // Troubleshooting
  const troubleshootingVideos = [
    {
      title: 'Common Errors & How to Fix Them',
      description: 'Solutions to frequent issues',
      duration: '15:30',
      views: '189K',
      category: 'Help',
    },
    {
      title: 'Debugging Your Application',
      description: 'Find and fix problems',
      duration: '18:45',
      views: '134K',
      category: 'Help',
    },
    {
      title: 'When AI Doesn\'t Understand',
      description: 'How to rephrase and clarify',
      duration: '12:20',
      views: '156K',
      category: 'Help',
    },
    {
      title: 'Getting Help from Community',
      description: 'Use Discord and forums effectively',
      duration: '8:15',
      views: '98K',
      category: 'Help',
    },
  ];

  const playlists = [
    { name: 'Getting Started', videos: 4, icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )},
    { name: 'Prompting Mastery', videos: 4, icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )},
    { name: 'Build Any App', videos: 8, icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )},
    { name: 'Styling & Design', videos: 6, icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )},
    { name: 'Features & Functions', videos: 8, icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )},
    { name: 'Deployment', videos: 8, icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    )},
    { name: 'GitHub Integration', videos: 4, icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    )},
    { name: 'Troubleshooting', videos: 4, icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )},
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Beginner': 'bg-green-50 text-green-600',
      'Tutorial': 'bg-blue-50 text-blue-600',
      'Tips': 'bg-amber-50 text-amber-600',
      'Advanced': 'bg-purple-50 text-purple-600',
      'Speed Build': 'bg-gray-50 text-gray-900',
      'Deployment': 'bg-cyan-50 text-cyan-600',
      'GitHub': 'bg-gray-100 text-gray-700',
      'Help': 'bg-red-50 text-red-600',
    };
    return colors[category] || 'bg-gray-50 text-gray-600';
  };

  const VideoCard = ({ video }: { video: { title: string; description?: string; duration: string; views: string; category: string } }) => (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-300 hover:shadow-xl transition-all duration-300 cursor-pointer">
      <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-50 flex items-center justify-center relative">
        <div className="w-14 h-14 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-gray-900 group-hover:scale-110 transition-transform shadow-lg">
          <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 rounded text-white text-xs font-medium">
          {video.duration}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-gray-900 transition-colors line-clamp-2">
          {video.title}
        </h3>
        {video.description && (
          <p className="text-sm text-gray-500 mb-2 line-clamp-1">{video.description}</p>
        )}
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">{video.views} views</span>
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getCategoryColor(video.category)}`}>
            {video.category}
          </span>
        </div>
      </div>
    </div>
  );

  const VideoSection = ({ title, videos, showAll = false }: { title: string; videos: typeof gettingStartedVideos; showAll?: boolean }) => (
    <section className="px-6 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          {showAll && (
            <button className="text-gray-900 hover:text-gray-700 font-medium text-sm">
              View all →
            </button>
          )}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-50 to-gray-50 border border-gray-300 mb-8">
            <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium text-gray-700">Video Learning</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            How it
            <span className="block bg-clip-text text-transparent" style={{ background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)', WebkitBackgroundClip: 'text' }}>
              works
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Learn everything about Lovecode with our comprehensive video tutorials. 
            From your first project to deploying on Cloudflare, Vercel, or GitHub.
          </p>
        </div>
      </section>

      {/* Featured Video */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900 rounded-3xl overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-300">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-gray-500/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-r from-[#1f2937] to-[#374151] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl shadow-gray-900/50">
                  <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1.5 rounded-lg text-white text-sm font-medium">
                {featuredVideo.duration}
              </div>
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-gradient-to-r from-[#1f2937] to-[#374151] rounded-full text-white text-sm font-medium">
                Featured
              </div>
            </div>
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-gray-700 transition-colors">{featuredVideo.title}</h2>
              <p className="text-gray-400 mb-4 text-lg">{featuredVideo.description}</p>
              <span className="text-sm text-gray-500">{featuredVideo.views} views</span>
            </div>
          </div>
        </div>
      </section>

      {/* Playlists */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Playlists</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {playlists.map((playlist, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-100 p-6 hover:border-gray-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-gray-100 to-gray-100 rounded-xl flex items-center justify-center text-gray-900 mb-4 group-hover:scale-110 transition-transform">
                  {playlist.icon}
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-900 transition-colors">{playlist.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{playlist.videos} videos</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Sections */}
      <VideoSection title="🚀 Getting Started" videos={gettingStartedVideos} />
      <VideoSection title="💬 Prompting & AI Communication" videos={promptingVideos} />
      <VideoSection title="🏗️ Building Different App Types" videos={appTypeVideos} showAll />
      <VideoSection title="🎨 Customization & Styling" videos={stylingVideos} />
      <VideoSection title="⚙️ Features & Functionality" videos={featureVideos} showAll />
      <VideoSection title="☁️ Deployment (Cloudflare, Vercel, GitHub)" videos={deploymentVideos} />
      <VideoSection title="🐙 GitHub Integration" videos={githubVideos} />
      <VideoSection title="🔧 Advanced Topics" videos={advancedVideos} />
      <VideoSection title="❓ Troubleshooting & Help" videos={troubleshootingVideos} />

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#1f2937] to-[#374151]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto">
            Join thousands of creators who are building amazing applications with Lovecode.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2"
            >
              Start Building Free
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="https://youtube.com/@lovecode"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Subscribe on YouTube
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
