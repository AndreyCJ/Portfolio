import { AppModule } from '@/types';
import { createI18n } from 'vue-i18n';

const messages = Object.fromEntries(
  Object.entries(import.meta.globEager('../../locales/*.yaml')).map(
    ([key, value]) => {
      const yaml = key.endsWith('.yaml');
      return [key.slice(14, yaml ? -5 : -4), value.default];
    }
  )
);

export const install: AppModule = (app) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages,
  });

  app.use(i18n);
};