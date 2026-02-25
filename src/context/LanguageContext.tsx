'use client';

import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
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
  tArray: (key: string) => string[];
  mounted: boolean;
  _langKey: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Simple nested value lookup by dot-separated path
function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split('.');
  let result: unknown = obj;

  for (const key of keys) {
    if (result && typeof result === 'object') {
      if (Array.isArray(result)) {
        const index = parseInt(key, 10);
        if (!isNaN(index) && index >= 0 && index < result.length) {
          result = result[index];
        } else {
          return path;
        }
      } else if (key in result) {
        result = (result as Record<string, unknown>)[key];
      } else {
        return path;
      }
    } else {
      return path;
    }
  }

  return typeof result === 'string' ? result : path;
}

// Simple nested array lookup by dot-separated path
function getNestedArrayValue(obj: Record<string, unknown>, path: string): string[] {
  const keys = path.split('.');
  let result: unknown = obj;

  for (const key of keys) {
    if (result && typeof result === 'object') {
      if (Array.isArray(result)) {
        const index = parseInt(key, 10);
        if (!isNaN(index) && index >= 0 && index < result.length) {
          result = result[index];
        } else {
          return [];
        }
      } else if (key in result) {
        result = (result as Record<string, unknown>)[key];
      } else {
        return [];
      }
    } else {
      return [];
    }
  }

  if (Array.isArray(result) && result.every(item => typeof item === 'string')) {
    return result as string[];
  }
  return [];
}

// Raw nested value lookup - returns any type (objects, arrays of objects, etc.)
function getNestedRawValue(obj: Record<string, unknown>, path: string): unknown {
  const keys = path.split('.');
  let result: unknown = obj;

  for (const key of keys) {
    if (result && typeof result === 'object') {
      if (Array.isArray(result)) {
        const index = parseInt(key, 10);
        if (!isNaN(index) && index >= 0 && index < result.length) {
          result = result[index];
        } else {
          return undefined;
        }
      } else if (key in (result as Record<string, unknown>)) {
        result = (result as Record<string, unknown>)[key];
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  }

  return result;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(languages[0]);
  const [mounted, setMounted] = useState(false);
  const [languageReady, setLanguageReady] = useState(false);
  const languageRef = useRef(language);

  // Keep ref in sync with state
  useEffect(() => {
    languageRef.current = language;
  }, [language]);

  // Load language from localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem('appnode_language');
    if (savedLang) {
      const found = languages.find(l => l.code === savedLang);
      if (found) {
        setLanguageState(found);
        languageRef.current = found;
      }
    }
    setLanguageReady(true);
  }, []);

  // Set mounted only after language is ready AND we're on client side
  useEffect(() => {
    if (languageReady) {
      setMounted(true);
    }
  }, [languageReady]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    languageRef.current = lang;
    localStorage.setItem('appnode_language', lang.code);
  };

  // Translation function - uses language state to trigger re-renders
  const t = (key: string): string => {
    if (!key || typeof key !== 'string') {
      return '';
    }

    const langCode = language.code;
    const currentTranslations = translations[langCode] || translations.en;

    if (!currentTranslations) {
      return key;
    }

    const result = getNestedValue(currentTranslations as Record<string, unknown>, key);

    // Fallback to English if key not found
    if (result === key && langCode !== 'en') {
      const englishResult = getNestedValue(translations.en as Record<string, unknown>, key);
      if (englishResult !== key) {
        return englishResult;
      }
    }

    return result;
  };

  // Translation function for arrays
  const tArray = (key: string): string[] => {
    if (!key || typeof key !== 'string') {
      return [];
    }

    const langCode = language.code;
    const currentTranslations = translations[langCode] || translations.en;

    const result = getNestedArrayValue(currentTranslations as Record<string, unknown>, key);

    if (result.length === 0 && langCode !== 'en') {
      return getNestedArrayValue(translations.en as Record<string, unknown>, key);
    }

    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tArray, mounted, _langKey: language.code }}>
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
  const { t, tArray, language, mounted, _langKey } = useLanguage();
  return { t, tArray, language, mounted, _langKey };
}
