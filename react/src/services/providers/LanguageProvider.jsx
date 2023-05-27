import React, { createContext, useContext } from "react";
import { useTranslation } from "react-i18next";

import useLocalStorage from "../hooks/useLocalStorage";
import { LANGUAGES } from "../consts";

const LanguageContext = createContext(null);

const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useLocalStorage(
    "travel-packing-list:language",
    LANGUAGES.ENGLISH
  );
  const { i18n } = useTranslation();

  const handleSetLanguage = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <LanguageContext.Provider
      value={{
        language: selectedLanguage,
        setLanguage: handleSetLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within the LanguageProvider.");
  }

  return context;
};

export default LanguageProvider;
