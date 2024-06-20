import resources from './default';

export const locales = [
  'ar',
  'bg-BG',
  'de-DE',
  'en-US',
  'es-ES',
  'fr-FR',
  'id-ID',
  'ja-JP',
  'ko-KR',
  'pt-BR',
  'ru-RU',
  'tr-TR',
  'zh-CN',
  'zh-TW',
  'vi-VN',
] as const;

export type DefaultResources = typeof resources;
export type NS = keyof DefaultResources;
export type Locales = (typeof locales)[number];

export const normalizeLocale = (locale?: string): string => {
  if (!locale) return 'id-ID';

  if (locale.startsWith('id-ID')) return 'id-ID';

  for (const l of locales) {
    if (l.startsWith(locale)) {
      return l;
    }
  }

  return 'id-ID';
};

type LocaleOptions = {
  label: string;
  value: Locales;
}[];

export const localeOptions: LocaleOptions = [
  {
    label: 'Indonesia',
    value: 'id-ID',
  },
  {
    label: 'English',
    value: 'en-US',
  },
] as LocaleOptions;

export const supportLocales: string[] = [...locales, 'en', 'id-ID'];
