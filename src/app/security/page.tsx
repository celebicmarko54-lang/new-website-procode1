'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from '@/context/LanguageContext';

export default function SecurityPage() {
  const { t } = useTranslation();

  const securityFeatures = [
    {
      icon: '🔐',
      title: 'Encryption at Rest & Transit',
      description: 'All data is encrypted using AES-256 encryption at rest and TLS 1.3 for data in transit.',
    },
    {
      icon: '🛡️',
      title: 'SOC 2 Type II Certified',
      description: 'We maintain SOC 2 Type II compliance, verified by independent third-party auditors.',
    },
    {
      icon: '🔒',
      title: 'Two-Factor Authentication',
      description: 'Secure your account with 2FA using authenticator apps or hardware security keys.',
    },
    {
      icon: '🌐',
      title: 'SSO & SAML',
      description: 'Enterprise-grade single sign-on with support for SAML 2.0 and OAuth providers.',
    },
    {
      icon: '📝',
      title: 'Audit Logs',
      description: 'Comprehensive audit logs for all account activities and changes.',
    },
    {
      icon: '🔍',
      title: 'Vulnerability Scanning',
      description: 'Continuous automated security scanning and regular penetration testing.',
    },
    {
      icon: '💾',
      title: 'Data Backup',
      description: 'Automated daily backups with point-in-time recovery capabilities.',
    },
    {
      icon: '🚨',
      title: 'Incident Response',
      description: '24/7 security monitoring with rapid incident response procedures.',
    },
  ];

  const certifications = [
    { name: 'SOC 2 Type II', icon: '✓', description: 'Security, Availability & Confidentiality' },
    { name: 'GDPR', icon: '✓', description: 'EU Data Protection Compliance' },
    { name: 'CCPA', icon: '✓', description: 'California Privacy Rights Act' },
    { name: 'ISO 27001', icon: '✓', description: 'Information Security Management' },
  ];

  const practices = [
    {
      title: 'Secure Development',
      items: [
        'Code reviews for all changes',
        'Automated security testing in CI/CD',
        'Dependency vulnerability scanning',
        'Regular security training for developers',
      ],
    },
    {
      title: 'Infrastructure Security',
      items: [
        'Cloud infrastructure on AWS/GCP',
        'Network segmentation and firewalls',
        'DDoS protection and mitigation',
        'Intrusion detection systems',
      ],
    },
    {
      title: 'Access Control',
      items: [
        'Role-based access control (RBAC)',
        'Principle of least privilege',
        'Regular access reviews',
        'Secure credential management',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-black transition-colors">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 rounded-full mb-6">
              <span className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full"></span>
              <span className="font-medium">{t('securityPage.badge')}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="text-gray-900 dark:text-white">{t('securityPage.titleHighlight')}</span> {t('securityPage.titleSuffix')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('securityPage.subtitle')}
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-white dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-gray-800 p-6 text-center hover:shadow-lg dark:hover:border-gray-700 transition-all">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-900 dark:text-white text-xl font-bold">{cert.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{cert.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Features */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">{t('securityPage.featuresTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature) => (
              <div key={feature.title} className="bg-white dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700 transition-all">
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Practices */}
        <div className="bg-black dark:bg-black border-y border-gray-800 py-16 mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">{t('securityPage.practicesTitle')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {practices.map((practice) => (
                <div key={practice.title} className="bg-[#0a0a0a] dark:bg-[#0a0a0a] backdrop-blur rounded-xl p-6 border border-gray-800">
                  <h3 className="font-semibold text-white text-lg mb-4">{practice.title}</h3>
                  <ul className="space-y-3">
                    {practice.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                        <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bug Bounty */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gray-900 dark:bg-black rounded-2xl p-8 text-white border border-gray-700">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">{t('securityPage.bugBountyTitle')}</h2>
                <p className="text-white/90">
                  {t('securityPage.bugBountyDescription')}
                </p>
              </div>
              <button className="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium flex-shrink-0">
                {t('common.learnMore')}
              </button>
            </div>
          </div>
        </div>

        {/* Security Contact */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-gray-800 p-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">{t('securityPage.reportTitle')}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
              {t('securityPage.reportDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:security@appnode.dev" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                security@appnode.dev
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t('securityPage.whitepaper')}
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
