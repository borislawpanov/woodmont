import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

const initI18n = async () => {
  const config = {
    defaultLng: "de",
    supportedLngs: ["en", "de"],
  };

  i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: config.defaultLng,
      supportedLngs: config.supportedLngs,
      backend: {
        loadPath: "/locales/{{ns}}/{{lng}}.json",
      },
      detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
      },
      interpolation: {
        escapeValue: false,
      },
    });
};

export const langDisplayMap = {
  en: "English",
  de: "Deutsch",
};

export default initI18n;
