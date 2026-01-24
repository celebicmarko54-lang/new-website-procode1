'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ReportAbusePage() {
  const [reportType, setReportType] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const reportTypes = [
    { value: 'harassment', label: 'Harassment or Bullying', icon: '👤' },
    { value: 'hate', label: 'Hate Speech or Discrimination', icon: '🚫' },
    { value: 'spam', label: 'Spam or Scam', icon: '📧' },
    { value: 'inappropriate', label: 'Inappropriate Content', icon: '⚠️' },
    { value: 'copyright', label: 'Copyright Violation', icon: '©️' },
    { value: 'impersonation', label: 'Impersonation', icon: '🎭' },
    { value: 'malware', label: 'Malware or Phishing', icon: '🔓' },
    { value: 'other', label: 'Other Violation', icon: '📋' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic here
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Report Submitted</h1>
            <p className="text-gray-600 mb-8">
              Thank you for helping keep our community safe. We&apos;ll review your report and take 
              appropriate action. You may receive a follow-up email if we need more information.
            </p>
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
              Safety
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Report Abuse</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Help us keep Procode safe. Report content or behavior that violates our 
              community guidelines.
            </p>
          </div>

          {/* Report Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Report Type Selection */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                What are you reporting?
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {reportTypes.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setReportType(type.value)}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left ${
                      reportType === type.value
                        ? 'border-gray-900 bg-gray-50'
                        : 'border-gray-100 hover:border-gray-300'
                    }`}
                  >
                    <span className="text-2xl">{type.icon}</span>
                    <span className={`font-medium ${reportType === type.value ? 'text-gray-700' : 'text-gray-700'}`}>
                      {type.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* URL Field */}
            <div>
              <label htmlFor="url" className="block text-lg font-semibold text-gray-900 mb-2">
                URL or Link (optional)
              </label>
              <p className="text-sm text-gray-500 mb-3">
                If applicable, provide the URL of the content you&apos;re reporting.
              </p>
              <input
                type="url"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://Procode/..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-4 focus:ring-gray-100 outline-none transition-all"
              />
            </div>

            {/* Description Field */}
            <div>
              <label htmlFor="description" className="block text-lg font-semibold text-gray-900 mb-2">
                Describe the Issue
              </label>
              <p className="text-sm text-gray-500 mb-3">
                Please provide as much detail as possible about what happened.
              </p>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows={5}
                placeholder="Tell us what happened..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-4 focus:ring-gray-100 outline-none transition-all resize-none"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-gray-900 mb-2">
                Your Email (optional)
              </label>
              <p className="text-sm text-gray-500 mb-3">
                If you&apos;d like updates on your report, provide your email.
              </p>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-4 focus:ring-gray-100 outline-none transition-all"
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                disabled={!reportType || !description}
                className="flex-1 px-8 py-4 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)' }}
              >
                Submit Report
              </button>
              <a
                href="/"
                className="px-8 py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:text-gray-900 transition-all text-center"
              >
                Cancel
              </a>
            </div>
          </form>

          {/* Info Box */}
          <div className="mt-12 bg-gradient-to-r from-gray-50 to-gray-50 rounded-2xl p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">What happens next?</h2>
            <div className="space-y-3 text-gray-600">
              <p className="flex items-start gap-3">
                <span className="w-6 h-6 bg-gray-300 text-gray-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                Our Trust &amp; Safety team reviews your report within 24-48 hours.
              </p>
              <p className="flex items-start gap-3">
                <span className="w-6 h-6 bg-gray-300 text-gray-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                We investigate the reported content or user.
              </p>
              <p className="flex items-start gap-3">
                <span className="w-6 h-6 bg-gray-300 text-gray-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                Appropriate action is taken based on our platform rules.
              </p>
              <p className="flex items-start gap-3">
                <span className="w-6 h-6 bg-gray-300 text-gray-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                If you provided an email, we&apos;ll notify you of the outcome.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
