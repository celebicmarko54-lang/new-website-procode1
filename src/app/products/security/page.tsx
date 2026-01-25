'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-black text-gray-900 dark:text-white transition-colors">
      <Header />
      
      <main className="pt-24 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-black border border-gray-200 dark:border-gray-800 mb-6">
              <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Enterprise Security</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
              Security <span className="text-gray-500 dark:text-gray-400">First</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Build with confidence. AppNode provides enterprise-grade security, pre-deployment screening, and secure defaults to keep your apps protected.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/enterprise" className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:opacity-90 transition-all shadow-xl shadow-gray-900/20 dark:shadow-none">
                Enterprise Solutions
              </Link>
              <Link href="/security-report" className="px-8 py-4 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] text-gray-700 dark:text-gray-300 font-medium rounded-full hover:bg-gray-50 dark:hover:bg-[#151515] transition-colors">
                Security Report
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'SOC 2 Type II', icon: '🛡️' },
              { name: 'GDPR Compliant', icon: '🇪🇺' },
              { name: 'ISO 27001', icon: '📋' },
              { name: 'HIPAA Ready', icon: '🏥' }
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-3 bg-white dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-gray-800">
                <span className="text-2xl">{badge.icon}</span>
                <span className="font-medium text-gray-900 dark:text-white">{badge.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Security Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: '🔐', title: 'SSO & SAML', description: 'Integrate with your existing identity provider. Support for SAML, OIDC, and all major SSO providers.', features: ['SAML 2.0 support', 'Just-in-time provisioning', 'Multi-factor authentication'] },
              { icon: '🔍', title: 'Pre-deployment Scanning', description: 'Every deployment is automatically scanned for vulnerabilities, secrets, and security issues.', features: ['Dependency vulnerability scanning', 'Secret detection', 'OWASP compliance checks'] },
              { icon: '🔒', title: 'Data Encryption', description: 'All data is encrypted at rest and in transit using industry-standard encryption protocols.', features: ['AES-256 encryption at rest', 'TLS 1.3 in transit', 'Customer-managed keys available'] },
              { icon: '📋', title: 'Audit Logs', description: 'Complete visibility into all actions taken on your account with detailed audit logs.', features: ['90-day log retention', 'Export to SIEM', 'Real-time alerts'] }
            ].map((feature, i) => (
              <div key={i} className="p-8 bg-white dark:bg-[#0a0a0a] rounded-2xl border border-gray-200 dark:border-gray-800">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Need enterprise security?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Talk to our team about custom security requirements and compliance needs.</p>
          <Link href="/enterprise" className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:opacity-90 transition-all shadow-xl shadow-gray-900/20 dark:shadow-none text-lg">
            Contact Sales
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
