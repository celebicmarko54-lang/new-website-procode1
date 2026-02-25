'use client';

import translations from '@/translations';

/**
 * Get raw translation data (objects, arrays of objects, etc.) from translation files.
 * Unlike the `t()` function which only returns strings, this returns any data type.
 */
export function getTranslationArray(langCode: string, key: string): string[] {
  const data = getTranslationData(langCode, key);
  if (Array.isArray(data)) return data as string[];
  return [];
}

export function getTranslationData(langCode: string, key: string): unknown {
  const lang = (translations as Record<string, Record<string, unknown>>)[langCode] || translations.en;
  const keys = key.split('.');
  let result: unknown = lang;
  for (const k of keys) {
    if (result && typeof result === 'object' && k in (result as Record<string, unknown>)) {
      result = (result as Record<string, unknown>)[k];
    } else {
      // Fallback to English
      let fallback: unknown = translations.en;
      for (const fk of keys) {
        if (fallback && typeof fallback === 'object' && fk in (fallback as Record<string, unknown>)) {
          fallback = (fallback as Record<string, unknown>)[fk];
        } else return undefined;
      }
      return fallback;
    }
  }
  return result;
}
