import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {}
    },
    en: {
      translation: {}
    }
  },
  lng: window.navigator.language ? window.navigator.language : "ru-RU",
  fallbackLng: "en-EN"
});

export default i18n;
