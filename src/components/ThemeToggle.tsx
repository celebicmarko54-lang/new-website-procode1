'use client';

import { useTheme } from '@/context/ThemeContext';
import { useTranslation } from '@/context/LanguageContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t, mounted, language } = useTranslation();
  
  // Calculate label directly - skip translation during SSR to avoid hydration issues
  let label: string | undefined = undefined;
  if (mounted) {
    label = theme === 'light' ? t('common.switchToDarkMode') : t('common.switchToLightMode');
    // Debug: log to browser console
    if (typeof window !== 'undefined') {
      console.log('[ThemeToggle] mounted=true, theme=', theme, 'language=', language.code, 'label=', label);
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-7 h-7 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-2 dark:border-gray-800 rounded-md hover:border-gray-300 dark:hover:border-gray-700 transition-all"
      aria-label={label}
      title={label}
      suppressHydrationWarning
    >
      {theme === 'light' ? (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
          />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
          />
        </svg>
      )}
    </button>
  );
}
