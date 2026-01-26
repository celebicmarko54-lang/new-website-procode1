'use client';

import { useState } from 'react';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-1/3 left-10 w-40 h-40 bg-gray-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-10 w-56 h-56 bg-gray-200/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gray-200/20 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-8 shadow-sm">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-gray-600 font-medium">New: Smart Styles & Auto Layouts</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Ready to build something
          <span className="block text-gray-900">amazing?</span>
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of creators who are already building the future with AppNode. 
          Start for free, no credit card required.
        </p>

        {/* CTA Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full sm:w-80 px-6 py-4 border border-gray-200 rounded-full focus:outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-100 transition-all"
            />
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all font-medium text-lg shadow-xl shadow-gray-900/20 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing up...
                </>
              ) : (
                'Start Building for Free'
              )}
            </button>
          </form>
        ) : (
          <div className="mb-6 px-6 py-4 bg-green-50 border border-green-200 rounded-2xl text-green-700 inline-flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Check your email to get started!
          </div>
        )}

        {/* Watch Demo Button */}
        <button 
          onClick={() => setShowVideo(true)}
          className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-full hover:border-gray-300 hover:bg-gray-50 transition-colors font-medium text-lg inline-flex items-center gap-2 shadow-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Watch Demo
        </button>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
          <span className="text-gray-400 text-sm">Trusted by teams at</span>
          <div className="flex items-center gap-8">
            {['Google', 'Microsoft', 'Meta', 'Amazon'].map((company) => (
              <span key={company} className="text-gray-400 font-semibold hover:text-gray-600 cursor-pointer transition-colors">{company}</span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setShowVideo(false)}>
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden animate-fade-in" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <svg className="w-20 h-20 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-white/70">Demo video would play here</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
