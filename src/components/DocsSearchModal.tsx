'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface DocItem {
  name: string;
  href: string;
  section: string;
}

interface DocsSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const allDocItems: DocItem[] = [
  // Getting Started
  { name: 'Introduction', href: '/docs', section: 'Getting Started' },
  { name: 'Quickstart Guides', href: '/docs/quickstart', section: 'Getting Started' },
  { name: 'Create with AI', href: '/docs/create-with-ai', section: 'Getting Started' },
  { name: 'Build from Scratch', href: '/docs/build-from-scratch', section: 'Getting Started' },
  { name: 'Import from GitHub', href: '/docs/import-github', section: 'Getting Started' },
  // Trust & Safety
  { name: 'Content Policy', href: '/docs/content-policy', section: 'Trust & Safety' },
  { name: 'Community Guidelines', href: '/docs/community-guidelines', section: 'Trust & Safety' },
  // Legal
  { name: 'Terms of Service', href: '/terms', section: 'Legal' },
  { name: 'Privacy Policy', href: '/privacy', section: 'Legal' },
  { name: 'Cookie Policy', href: '/cookies', section: 'Legal' },
  // Security
  { name: 'Security Overview', href: '/security', section: 'Security' },
  { name: 'Data Protection', href: '/docs/data-protection', section: 'Security' },
  { name: 'Vulnerability Disclosure', href: '/security-report', section: 'Security' },
  // Tutorials
  { name: 'Building Your First App', href: '/docs/tutorials/first-app', section: 'Tutorials' },
  { name: 'Working with APIs', href: '/docs/tutorials/apis', section: 'Tutorials' },
  { name: 'Database Integration', href: '/docs/tutorials/databases', section: 'Tutorials' },
  { name: 'Authentication', href: '/docs/tutorials/auth', section: 'Tutorials' },
  // Teams & Enterprise
  { name: 'Team Management', href: '/docs/teams', section: 'Teams & Enterprise' },
  { name: 'SSO Setup', href: '/docs/sso', section: 'Teams & Enterprise' },
  { name: 'Enterprise Features', href: '/enterprise', section: 'Teams & Enterprise' },
  // Changelog
  { name: 'Latest Updates', href: '/changelog', section: 'Changelog' },
];

export default function DocsSearchModal({ isOpen, onClose }: DocsSearchModalProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const filteredItems = query.trim() === ''
    ? allDocItems.slice(0, 8) // Show first 8 items when no query
    : allDocItems.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.section.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelect = useCallback((item: DocItem) => {
    router.push(item.href);
    onClose();
    setQuery('');
    setSelectedIndex(0);
  }, [router, onClose]);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev < filteredItems.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => prev > 0 ? prev - 1 : 0);
          break;
        case 'Enter':
          e.preventDefault();
          if (filteredItems[selectedIndex]) {
            handleSelect(filteredItems[selectedIndex]);
          }
          break;
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, handleSelect, onClose]);

  // Scroll selected item into view
  useEffect(() => {
    if (resultsRef.current) {
      const selectedElement = resultsRef.current.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  // Reset selected index when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative min-h-screen flex items-start justify-center pt-[15vh] px-4">
        <div className="relative w-full max-w-xl bg-white dark:bg-[#1A1A1A] rounded-xl shadow-2xl border border-gray-200 dark:border-2 dark:border-gray-800 overflow-hidden">
          {/* Search Input */}
          <div className="flex items-center border-b border-gray-200 dark:border-b-2 dark:border-gray-800 px-4">
            <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search documentation..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 px-4 py-4 text-base bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none"
            />
            <kbd className="hidden sm:inline-flex items-center px-2 py-1 text-xs font-medium text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 rounded">
              ESC
            </kbd>
          </div>

          {/* Results */}
          <div ref={resultsRef} className="max-h-[60vh] overflow-y-auto p-2">
            {filteredItems.length === 0 ? (
              <div className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                <svg className="w-12 h-12 mx-auto mb-4 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-medium">No results found</p>
                <p className="text-sm mt-1">Try searching for something else</p>
              </div>
            ) : (
              filteredItems.map((item, index) => (
                <button
                  key={`${item.section}-${item.name}`}
                  onClick={() => handleSelect(item)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    index === selectedIndex
                      ? 'bg-gray-100 dark:bg-gray-800'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 dark:text-white truncate">
                      {item.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
                      {item.section}
                    </div>
                  </div>
                  {index === selectedIndex && (
                    <kbd className="hidden sm:inline-flex items-center px-2 py-1 text-xs font-medium text-gray-400 dark:text-gray-500 bg-gray-200 dark:bg-gray-700 rounded">
                      Enter
                    </kbd>
                  )}
                </button>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 dark:border-t-2 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">↑</kbd>
                <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">↓</kbd>
                <span className="ml-1">Navigate</span>
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">↵</kbd>
                <span className="ml-1">Select</span>
              </span>
            </div>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">ESC</kbd>
              <span className="ml-1">Close</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
