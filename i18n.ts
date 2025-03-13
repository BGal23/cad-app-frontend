import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pl from "./src/locales/pl.json";
import en from "./src/locales/en.json";
import { store } from "./src/store/store";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pl: { translation: pl },
  },
  lng: "pl",
  fallbackLng: "pl",
  interpolation: { escapeValue: false },
});

store.subscribe(() => {
  const currentLanguage = store.getState().i18n.language;
  i18n.changeLanguage(currentLanguage);
});

export default i18n;
