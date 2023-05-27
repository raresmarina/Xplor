import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./services/translations/en.json";
import siTranslations from "./services/translations/si.json";
import esTranslations from "./services/translations/es.json";
import { LANGUAGES } from "./services/consts";

const resources = {
  [LANGUAGES.ENGLISH]: {
    translations: enTranslations,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: JSON.parse(window.localStorage.getItem("travel-packing-list:language")) || LANGUAGES.ENGLISH,
    fallbackLng: LANGUAGES.ENGLISH,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
