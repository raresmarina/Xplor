import { EDIT_MODE, LANGUAGES, LIST_CATEGORIES } from "./consts";

export const ListCategory = Object.values(LIST_CATEGORIES);

export const Language = Object.values(LANGUAGES);

export const EditMode = Object.values(EDIT_MODE);

export const LanguageData = {
  gb: "English",
  es: "Español",
  si: "Slovenščina",
};

export const LanguagesData = {
  [LANGUAGES.ENGLISH]: {
    value: LANGUAGES.ENGLISH,
    flagCode: "gb",
    title: LanguageData["gb"],
  },
  [LANGUAGES.SPANISH]: {
    value: LANGUAGES.SPANISH,
    flagCode: "es",
    title: LanguageData["es"],
  },
  [LANGUAGES.SLOVENIAN]: {
    value: LANGUAGES.SLOVENIAN,
    flagCode: "si",
    title: LanguageData["si"],
  },
};

export const CardItem = {
  tKey: "",
  isChecked: false,
};

export const CardItems = [];
