'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CookieSettingsPage() {
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false,
    personalization: true,
  });

  const handleToggle = (key: keyof typeof preferences) => {
    if (key === 'essential') return; // Essential cookies can't be disabled
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSavePreferences = () => {
    // Save preferences logic here
    alert('Cookie preferences saved successfully!');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-block px-4 py-2 bg-gray-50 text-gray-600 rounded-full text-sm font-medium mb-4">
              Privacy
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Cookie Settings</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Manage your cookie preferences. We use cookies to enhance your browsing experience, 
              serve personalized content, and analyze our traffic.
            </p>
          </div>

          {/* Cookie Categories */}
          <div className="space-y-6 mb-12">
            {/* Essential Cookies */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-gray-300 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-gray-100 to-gray-100 rounded-xl flex items-center justify-center text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Essential Cookies</h3>
                    <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">Required</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    These cookies are necessary for the website to function properly. They enable core functionality 
                    such as security, network management, and accessibility. You cannot disable these cookies.
                  </p>
                </div>
                <div className="ml-6">
                  <button
                    disabled
                    className="w-14 h-8 bg-gray-900 rounded-full relative cursor-not-allowed opacity-75"
                  >
                    <span className="absolute right-1 top-1 w-6 h-6 bg-white rounded-full shadow-sm" />
                  </button>
                </div>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-gray-300 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-gray-100 to-gray-100 rounded-xl flex items-center justify-center text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Analytics Cookies</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    These cookies help us understand how visitors interact with our website by collecting 
                    and reporting information anonymously. This helps us improve our services.
                  </p>
                </div>
                <div className="ml-6">
                  <button
                    onClick={() => handleToggle('analytics')}
                    className={`w-14 h-8 rounded-full relative transition-colors ${
                      preferences.analytics ? 'bg-gray-900' : 'bg-gray-200'
                    }`}
                  >
                    <span 
                      className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-sm transition-all ${
                        preferences.analytics ? 'right-1' : 'left-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-gray-300 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-gray-100 to-gray-100 rounded-xl flex items-center justify-center text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Marketing Cookies</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    These cookies are used to track visitors across websites. They are used to display ads 
                    that are relevant and engaging for the individual user.
                  </p>
                </div>
                <div className="ml-6">
                  <button
                    onClick={() => handleToggle('marketing')}
                    className={`w-14 h-8 rounded-full relative transition-colors ${
                      preferences.marketing ? 'bg-gray-900' : 'bg-gray-200'
                    }`}
                  >
                    <span 
                      className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-sm transition-all ${
                        preferences.marketing ? 'right-1' : 'left-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Personalization Cookies */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-gray-300 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-gray-100 to-gray-100 rounded-xl flex items-center justify-center text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Personalization Cookies</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    These cookies allow us to remember your preferences and provide enhanced, personalized 
                    features. They may be set by us or by third-party providers.
                  </p>
                </div>
                <div className="ml-6">
                  <button
                    onClick={() => handleToggle('personalization')}
                    className={`w-14 h-8 rounded-full relative transition-colors ${
                      preferences.personalization ? 'bg-gray-900' : 'bg-gray-200'
                    }`}
                  >
                    <span 
                      className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-sm transition-all ${
                        preferences.personalization ? 'right-1' : 'left-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleSavePreferences}
              className="px-8 py-4 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg"
              style={{ background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)' }}
            >
              Save Preferences
            </button>
            <button
              onClick={() => setPreferences({ essential: true, analytics: true, marketing: true, personalization: true })}
              className="px-8 py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:text-gray-900 transition-all"
            >
              Accept All
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">About Our Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              understanding how you use our site.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For more information about how we use cookies and your personal data, please read our{' '}
              <a href="/privacy" className="text-gray-600 hover:text-gray-900 font-medium">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
