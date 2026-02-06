'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SecurityReportPage() {
  const [severity, setSeverity] = useState('');
  const [description, setDescription] = useState('');
  const [steps, setSteps] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const severityLevels = [
    { 
      value: 'critical', 
      label: 'Critical', 
      description: 'Complete system compromise, data breach',
      color: 'bg-red-100 text-red-700 border-red-200'
    },
    { 
      value: 'high', 
      label: 'High', 
      description: 'Significant security impact',
      color: 'bg-orange-100 text-orange-700 border-orange-200'
    },
    { 
      value: 'medium', 
      label: 'Medium', 
      description: 'Limited security impact',
      color: 'bg-yellow-100 text-yellow-700 border-yellow-200'
    },
    { 
      value: 'low', 
      label: 'Low', 
      description: 'Minimal security impact',
      color: 'bg-green-100 text-green-700 border-green-200'
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-32 pb-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-gray-100 to-gray-100 rounded-full flex items-center justify-center text-gray-900 mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Report Received</h1>
            <p className="text-gray-600 mb-4">
              Thank you for responsibly disclosing this security concern. Our security team 
              has been notified and will review your report promptly.
            </p>
            <div className="bg-gray-50 rounded-xl p-4 mb-8 text-left">
              <p className="text-gray-700 text-sm">
                <strong>Expected Response Time:</strong><br/>
                Critical: Within 24 hours<br/>
                High: Within 48 hours<br/>
                Medium/Low: Within 5 business days
              </p>
            </div>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
              style={{ background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)' }}
            >
              Return Home
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-block px-4 py-2 bg-gray-50 text-gray-900 rounded-full text-sm font-medium mb-4">
              Security
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Report Security Concerns</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Found a security vulnerability? We appreciate responsible disclosure and 
              will work with you to address the issue.
            </p>
          </div>

          {/* Bug Bounty Info */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-black dark:to-black rounded-2xl p-8 text-white mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-800 dark:bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Bug Bounty Program</h2>
                <p className="text-gray-300 leading-relaxed">
                  We offer rewards for valid security reports. Bounty amounts depend on 
                  severity and impact. Critical vulnerabilities may qualify for rewards 
                  up to $5,000.
                </p>
              </div>
            </div>
          </div>

          {/* Report Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Severity Selection */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Severity Level
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {severityLevels.map((level) => (
                  <button
                    key={level.value}
                    type="button"
                    onClick={() => setSeverity(level.value)}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      severity === level.value
                        ? 'border-gray-900 bg-gray-50'
                        : 'border-gray-100 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2 py-0.5 rounded text-xs font-bold ${level.color}`}>
                        {level.label}
                      </span>
                    </div>
                    <span className="text-sm text-gray-600">{level.description}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Description Field */}
            <div>
              <label htmlFor="description" className="block text-lg font-semibold text-gray-900 mb-2">
                Vulnerability Description
              </label>
              <p className="text-sm text-gray-500 mb-3">
                Describe the vulnerability in detail. Include the affected component or feature.
              </p>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows={4}
                placeholder="Describe the security vulnerability..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-4 focus:ring-gray-100 outline-none transition-all resize-none"
              />
            </div>

            {/* Steps to Reproduce */}
            <div>
              <label htmlFor="steps" className="block text-lg font-semibold text-gray-900 mb-2">
                Steps to Reproduce
              </label>
              <p className="text-sm text-gray-500 mb-3">
                Provide clear steps to reproduce the vulnerability.
              </p>
              <textarea
                id="steps"
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
                required
                rows={5}
                placeholder="1. Go to...&#10;2. Click on...&#10;3. Observe that..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-4 focus:ring-gray-100 outline-none transition-all resize-none font-mono text-sm"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-gray-900 mb-2">
                Your Email
              </label>
              <p className="text-sm text-gray-500 mb-3">
                Required for us to follow up and coordinate disclosure.
              </p>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="security-researcher@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-4 focus:ring-gray-100 outline-none transition-all"
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                disabled={!severity || !description || !steps || !email}
                className="flex-1 px-8 py-4 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Submit Security Report
              </button>
            </div>
          </form>

          {/* Guidelines */}
          <div className="mt-12 bg-gradient-to-r from-gray-50 to-gray-50 rounded-2xl p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Responsible Disclosure Guidelines</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Do not access, modify, or delete data belonging to other users.
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Do not perform denial of service attacks or degrade our services.
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Allow us reasonable time to fix the issue before public disclosure.
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Only test against accounts you own or have permission to access.
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="mt-8 text-center text-gray-600">
            <p>
              For urgent security matters, you can also reach us at{' '}
              <a href="mailto:contact@appnode.ai" className="text-gray-900 hover:text-gray-700 font-medium">
                contact@appnode.ai
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
