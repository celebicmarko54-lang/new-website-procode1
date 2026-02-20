'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import translations, { TranslationKeys } from '@/translations';

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'sw', name: 'Kiswahili', flag: '🇰🇪' },
  { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
  { code: 'ur', name: 'اردو', flag: '🇵🇰' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'hr', name: 'Hrvatski', flag: '🇭🇷' },
  { code: 'bg', name: 'Български', flag: '🇧🇬' },
  { code: 'ro', name: 'Română', flag: '🇷🇴' },
  { code: 'el', name: 'Ελληνικά', flag: '🇬🇷' },
  { code: 'sr', name: 'Српски', flag: '🇷🇸' },
];

// Helper type to get nested keys
type NestedKeyOf<T> = T extends object
  ? { [K in keyof T]: K extends string
      ? T[K] extends object
        ? `${K}.${NestedKeyOf<T[K]>}` | K
        : K
      : never
    }[keyof T]
  : never;

export type TranslationKey = NestedKeyOf<TranslationKeys>;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  mounted: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper function to get nested value from object (supports array indices)
function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split('.');
  let result: unknown = obj;
  
  for (const key of keys) {
    if (result && typeof result === 'object') {
      // Handle array indices
      if (Array.isArray(result)) {
        const index = parseInt(key, 10);
        if (!isNaN(index) && index >= 0 && index < result.length) {
          result = result[index];
        } else {
          return path; // Invalid array index
        }
      } else if (key in result) {
        result = (result as Record<string, unknown>)[key];
      } else {
        return path; // Key not found
      }
    } else {
      return path; // Not an object
    }
  }
  
  return typeof result === 'string' ? result : path;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(languages[0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // First, check and set the language from localStorage
    const savedLang = localStorage.getItem('appnode_language');
    if (savedLang) {
      const found = languages.find(l => l.code === savedLang);
      if (found) {
        setLanguageState(found);
      }
    }
    // Then set mounted - this ensures language is updated before mounted is true
    // Use a microtask to ensure language state is committed first
    queueMicrotask(() => {
      setMounted(true);
    });
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('appnode_language', lang.code);
  };

  // Create translation function with useCallback to ensure proper re-renders
  const t = useCallback((key: string): string => {
    // Handle null/undefined keys
    if (!key || typeof key !== 'string') {
      return '';
    }
    // Always use the current language code
    const currentTranslations = translations[language.code] || translations.en;
    
    const result = getNestedValue(currentTranslations as Record<string, unknown>, key);
    
    // Fallback to English if key not found in current language
    if (result === key && language.code !== 'en') {
      const englishResult = getNestedValue(translations.en as Record<string, unknown>, key);
      if (englishResult !== key) {
        return englishResult;
      }
    }
    
    return result;
  }, [language.code]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Convenience hook for translations only
export function useTranslation() {
  const { t, language, mounted } = useLanguage();
  return { t, language, mounted };
}
