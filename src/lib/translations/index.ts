import { en } from './en';
import { es } from './es';
import { pt } from './pt';

export const translations = {
  en,
  es,
  pt,
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof en;

export { en, es, pt };