import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources, Language } from './resources';

void i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
export const languages = Object.keys(resources) as Language[];
