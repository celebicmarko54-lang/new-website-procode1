'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from '@/context/LanguageContext';

export default function ChangelogPage() {
  const { t } = useTranslation();

  const releases = [
    {
      version: '2.5.0',
      date: 'November 28, 2025',
      title: 'Smart Styles & Auto Layouts',
      description: 'Introducing AI-powered styling that automatically creates beautiful, consistent designs for your applications.',
      type: 'major',
      changes: [
        { type: 'new', text: 'Smart Styles: AI automatically applies consistent styling across your app' },
        { type: 'new', text: 'Auto Layouts: Intelligent responsive layouts that adapt to content' },
        { type: 'new', text: 'Theme presets: Choose from 20+ professionally designed themes' },
        { type: 'improved', text: 'Faster code generation with optimized prompts' },
        { type: 'improved', text: 'Better TypeScript support in generated code' },
        { type: 'fixed', text: 'Fixed layout issues on mobile devices' },
      ],
    },
    {
      version: '2.4.2',
      date: 'November 15, 2025',
      title: 'Performance Improvements',
      description: 'Major performance optimizations and bug fixes.',
      type: 'patch',
      changes: [
        { type: 'improved', text: '50% faster project loading times' },
        { type: 'improved', text: 'Reduced memory usage in the editor' },
        { type: 'fixed', text: 'Fixed code export failing for large projects' },
        { type: 'fixed', text: 'Fixed authentication issues with third-party providers' },
      ],
    },
    {
      version: '2.4.0',
      date: 'November 1, 2025',
      title: 'Team Collaboration',
      description: 'Work together with your team in real-time.',
      type: 'minor',
      changes: [
        { type: 'new', text: 'Real-time collaboration: Multiple users can edit simultaneously' },
        { type: 'new', text: 'Team workspaces with role-based permissions' },
        { type: 'new', text: 'Comments and feedback on components' },
        { type: 'new', text: 'Version history with restore functionality' },
        { type: 'improved', text: 'Better conflict resolution for concurrent edits' },
      ],
    },
    {
      version: '2.3.0',
      date: 'October 15, 2025',
      title: 'Database Integration',
      description: 'Connect your apps to databases with ease.',
      type: 'minor',
      changes: [
        { type: 'new', text: 'Supabase integration for PostgreSQL databases' },
        { type: 'new', text: 'Visual database schema designer' },
        { type: 'new', text: 'Auto-generated CRUD operations' },
        { type: 'new', text: 'Real-time data subscriptions' },
        { type: 'improved', text: 'Better handling of database connections' },
        { type: 'fixed', text: 'Fixed data fetching issues in production builds' },
      ],
    },
    {
      version: '2.2.0',
      date: 'September 28, 2025',
      title: 'Component Library',
      description: 'Expanded component library with 100+ new components.',
      type: 'minor',
      changes: [
        { type: 'new', text: '100+ new pre-built components' },
        { type: 'new', text: 'Chart and data visualization components' },
        { type: 'new', text: 'Form builder with validation' },
        { type: 'new', text: 'Animation presets library' },
        { type: 'improved', text: 'Component search and filtering' },
      ],
    },
    {
      version: '2.1.0',
      date: 'September 10, 2025',
      title: 'Authentication Made Easy',
      description: 'Add user authentication to your apps in seconds.',
      type: 'minor',
      changes: [
        { type: 'new', text: 'One-click authentication setup' },
        { type: 'new', text: 'Social login providers (Google, GitHub, etc.)' },
        { type: 'new', text: 'User management dashboard' },
        { type: 'new', text: 'Password reset flows' },
        { type: 'improved', text: 'Security improvements for auth tokens' },
      ],
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'new': return 'bg-green-100 text-green-700';
      case 'improved': return 'bg-blue-100 text-blue-700';
      case 'fixed': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getVersionColor = (type: string) => {
    switch (type) {
      case 'major': return 'bg-gradient-to-r from-[#1f2937] to-[#374151]';
      case 'minor': return 'bg-gradient-to-r from-gray-700 to-gray-500';
      case 'patch': return 'bg-gradient-to-r from-gray-500 to-gray-600';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-6 mb-12">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-gray-50 text-gray-900 rounded-full text-sm font-medium mb-4">
              {t('changelogPage.badge')}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              {t('changelogPage.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('changelogPage.subtitle')}
            </p>
          </div>
        </div>

        {/* Subscribe to Updates */}
        <div className="max-w-4xl mx-auto px-6 mb-12">
          <div className="bg-gradient-to-r from-gray-50 to-gray-50 rounded-2xl border border-gray-100 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-gray-900">{t('changelogPage.stayUpToDate')}</h3>
              <p className="text-sm text-gray-600">{t('changelogPage.getNotified')}</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder={t('changelogPage.emailPlaceholder')}
                className="flex-1 sm:w-64 px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
              <button className="px-4 py-2 text-white rounded-xl hover:opacity-90 transition-all font-medium" style={{ background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)' }}>
                {t('changelogPage.subscribeButton')}
              </button>
            </div>
          </div>
        </div>

        {/* Releases Timeline */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {releases.map((release, index) => (
              <div key={release.version} className="relative">
                {/* Timeline line */}
                {index !== releases.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-200 -mb-8"></div>
                )}
                
                <div className="flex gap-6">
                  {/* Version badge */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full ${getVersionColor(release.type)} flex items-center justify-center text-white font-bold text-sm`}>
                    {release.version.split('.')[0]}.{release.version.split('.')[1]}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-sm font-mono text-gray-500">v{release.version}</span>
                      <span className="text-sm text-gray-400">{release.date}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{release.title}</h2>
                    <p className="text-gray-600 mb-4">{release.description}</p>
                    
                    <div className="space-y-2">
                      {release.changes.map((change, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className={`text-xs font-medium px-2 py-0.5 rounded ${getTypeColor(change.type)} capitalize`}>
                            {change.type}
                          </span>
                          <span className="text-sm text-gray-700">{change.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-6 py-3 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all font-medium">
              {t('changelogPage.viewOlder')}
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
