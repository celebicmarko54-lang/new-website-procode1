'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PlatformRulesPage() {
  const rules = [
    {
      title: 'Respect and Kindness',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      description: 'Treat all community members with respect. Harassment, hate speech, discrimination, or personal attacks of any kind are not tolerated.',
      examples: [
        'Be helpful and constructive in feedback',
        'Avoid inflammatory or hostile language',
        'Respect differences in opinion and experience',
      ],
    },
    {
      title: 'Original Content',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      description: 'Create and share original work. Respect intellectual property rights and give proper attribution when using others\' work.',
      examples: [
        'Only share content you have rights to',
        'Credit original creators when inspired by their work',
        'Don\'t copy or plagiarize other users\' projects',
      ],
    },
    {
      title: 'Safe Content',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description: 'Keep the platform safe for everyone. Do not create, share, or promote harmful, illegal, or inappropriate content.',
      examples: [
        'No explicit, violent, or disturbing content',
        'No promotion of illegal activities',
        'No content that could harm or endanger others',
      ],
    },
    {
      title: 'No Spam or Manipulation',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
      description: 'Don\'t engage in spam, manipulation, or deceptive practices. Keep the platform authentic and trustworthy.',
      examples: [
        'No automated or bulk actions to artificially boost visibility',
        'No fake accounts or impersonation',
        'No misleading or deceptive content',
      ],
    },
    {
      title: 'Secure Practices',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      description: 'Follow security best practices. Never attempt to exploit, hack, or compromise the platform or other users.',
      examples: [
        'Don\'t attempt to access others\' accounts',
        'Report security vulnerabilities responsibly',
        'Never share malicious code or phishing links',
      ],
    },
    {
      title: 'Fair Use',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      description: 'Use the platform fairly and as intended. Respect usage limits and don\'t abuse our services.',
      examples: [
        'Stay within your plan\'s usage limits',
        'Don\'t use the platform for unauthorized commercial purposes',
        'Don\'t circumvent platform restrictions',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-black">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="inline-block px-4 py-2 bg-gray-50 dark:bg-black text-gray-900 dark:text-white rounded-full text-sm font-medium mb-4 border border-transparent dark:border-gray-800">
              Community Guidelines
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">Platform Rules</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our community thrives when everyone follows these guidelines. 
              Together, we create a positive and productive environment.
            </p>
          </div>

          {/* Rules Grid */}
          <div className="space-y-8 mb-16">
            {rules.map((rule, index) => (
              <div
                key={index}
                className="bg-white dark:bg-black rounded-2xl border border-gray-100 dark:border-gray-800 p-8 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-gray-100 dark:bg-[#111] rounded-2xl flex items-center justify-center text-gray-900 dark:text-white flex-shrink-0">
                    {rule.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{rule.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{rule.description}</p>
                    <div className="bg-gray-50 dark:bg-[#111] rounded-xl p-4">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Examples:</p>
                      <ul className="space-y-2">
                        {rule.examples.map((example, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <svg className="w-4 h-4 text-gray-900 dark:text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enforcement Section */}
          <div className="bg-gray-50 dark:bg-black rounded-2xl border border-gray-100 dark:border-transparent p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Enforcement</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Violations of these rules may result in content removal, account warnings, temporary suspension, 
              or permanent ban depending on the severity and frequency of violations. We review all reports 
              and take appropriate action.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-black rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Warning</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">First minor violation</p>
              </div>
              <div className="bg-white dark:bg-black rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Suspension</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Repeated or serious violations</p>
              </div>
              <div className="bg-white dark:bg-black rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Ban</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Severe or persistent violations</p>
              </div>
            </div>
          </div>

          {/* Report Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">See Something Wrong?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
              If you encounter content or behavior that violates our platform rules, 
              please report it so we can take action.
            </p>
            <a
              href="/report"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Report Abuse
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
