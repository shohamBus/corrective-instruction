import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HEB from '../public/locales/he/translation.json'; 



i18n
  .use(initReactI18next) 
  .init({
    resources: {
      he: {
        translation: HEB,
      },
    },
    lng: 'he', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;