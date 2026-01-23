'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <span 
                className="text-xl font-black tracking-tight"
                style={{
                  background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 60%, #E74C3C 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                LOVECODE
              </span>
            </Link>

            {/* Main Navigation */}
            <nav className="hidden md:flex items-center gap-0.5">
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('solutions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-2 py-1.5 text-xs font-semibold text-black hover:text-gray-700 transition-colors flex items-center gap-1">
                  Solutions
                  <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'solutions' && (
                  <div className="absolute top-full left-0 mt-1 w-48 rounded-lg bg-white border border-gray-200 shadow-lg py-1 animate-fade-in">
                    <Link href="/solutions/founders" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900">Startups & MVPs</Link>
                    <Link href="/solutions/designers" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900">Creative Teams</Link>
                    <Link href="/solutions/marketers" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900">Growth & Marketing</Link>
                    <Link href="/solutions/prototyping" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900">Rapid Prototypes</Link>
                    <Link href="/solutions/web3" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900">Web3 & Blockchain</Link>
                  </div>
                )}
              </div>
              <Link href="/enterprise" className="px-2 py-1.5 text-xs font-semibold text-black hover:text-gray-700 transition-colors">
                Enterprise
              </Link>
              <Link href="/pricing" className="px-2 py-1.5 text-xs font-semibold text-black hover:text-gray-700 transition-colors">
                Pricing
              </Link>
              <Link href="/community" className="px-2 py-1.5 text-xs font-semibold text-black hover:text-gray-700 transition-colors">
                Community
              </Link>
            </nav>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Log in Button */}
            <Link 
              href="/login"
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Log in
            </Link>
            
            {/* Get Started Button */}
            <Link 
              href="/signup"
              className="px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors shadow-sm"
              style={{
                background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)',
              }}
            >
              Get started
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-gray-500 hover:text-gray-900"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {showMobileMenu ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <nav className="flex flex-col gap-2">
              <Link href="/solutions" className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg">Solutions</Link>
              <Link href="/enterprise" className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg">Enterprise</Link>
              <Link href="/pricing" className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg">Pricing</Link>
              <Link href="/community" className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg">Community</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
