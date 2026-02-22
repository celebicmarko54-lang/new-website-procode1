'use client';

import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import translations, { TranslationKeys } from '@/translations';

// Debug: Check if translations loaded
if (typeof window !== 'undefined') {
  console.log('[LanguageContext Module Load]', {
    translationsType: typeof translations,
    translationsKeys: translations ? Object.keys(translations) : 'N/A',
    hasEn: translations ? !!translations.en : false,
    hasKo: translations ? !!translations.ko : false
  });
  (window as any).__translations = translations;
  (window as any).__debug_loaded = true;
}

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
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper function to get nested value from object (supports array indices)
function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split('.');
  let result: unknown = obj;
  
  // DEBUG: Write to DOM for specific problematic keys
  const shouldDebug = path.includes('videoSection') || path.includes('switchToDarkMode');
  if (shouldDebug && typeof window !== 'undefined') {
    let debugDiv = document.getElementById('__translation_debug');
    if (!debugDiv) {
      debugDiv = document.createElement('div');
      debugDiv.id = '__translation_debug';
      debugDiv.style.cssText = 'position:fixed;top:0;left:0;background:red;color:white;z-index:99999;padding:10px;max-height:200px;overflow:auto;font-family:monospace;font-size:12px;';
      document.body.appendChild(debugDiv);
    }
    debugDiv.innerHTML += `<div>[${path}] objKeys: ${obj ? Object.keys(obj).slice(0, 5).join(',') : 'null'}</div>`;
  }
  
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
        if (shouldDebug && typeof window !== 'undefined') {
          const debugDiv = document.getElementById('__translation_debug');
          if (debugDiv) debugDiv.innerHTML += `<div>KEY NOT FOUND: ${key}</div>`;
        }
        return path;
      }
    } else {
      return path;
    }
  }
  
  return typeof result === 'string' ? result : path;
}

// Helper function to get array value from translations
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
    console.log('[LanguageProvider] Loading from localStorage...');
    console.log('[LanguageProvider] translations:', typeof translations, Object.keys(translations || {}).slice(0, 5));
    
    const savedLang = localStorage.getItem('appnode_language');
    console.log('[LanguageProvider] savedLang:', savedLang);
    
    if (savedLang) {
      const found = languages.find(l => l.code === savedLang);
      console.log('[LanguageProvider] found language:', found);
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
      // Expose translations for debugging
      if (typeof window !== 'undefined') {
        (window as any).__translations = translations;
        (window as any).__debug_loaded = true;
        console.log('[LanguageProvider] Mounted, exposing translations');
      }
    }
  }, [languageReady]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    languageRef.current = lang;
    localStorage.setItem('appnode_language', lang.code);
  };

  // Translation function - uses ref to get the most current language
  const t = (key: string): string => {
    if (!key || typeof key !== 'string') {
      return '';
    }
    
    const langCode = languageRef.current.code;
    const currentTranslations = translations[langCode] || translations.en;
    
    // DEBUG: Log every translation call on client
    if (typeof window !== 'undefined') {
      console.log('[t()]', key, '→', langCode);
    }
    
    if (!currentTranslations) {
      console.warn('[t()] No translations for:', langCode);
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
    const langCode = languageRef.current.code;
    const currentTranslations = translations[langCode] || translations.en;
    
    const result = getNestedArrayValue(currentTranslations as Record<string, unknown>, key);
    
    if (result.length === 0 && langCode !== 'en') {
      return getNestedArrayValue(translations.en as Record<string, unknown>, key);
    }
    
    return result;
  };


  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tArray, mounted }}>
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
  const { t, tArray, language, mounted } = useLanguage();
  return { t, tArray, language, mounted };
}
