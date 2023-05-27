import { useTranslation } from "react-i18next";

import { LIST_CATEGORIES } from "../consts";

const useTranslatedCategory = (category) => {
  const { t } = useTranslation();

  switch (category) {
    case LIST_CATEGORIES.ESSENTIALS:
      return t("essentials");
    case LIST_CATEGORIES.TOILETRIES:
      return t("toiletries");
    case LIST_CATEGORIES.OTHER:
      return t("other");
    case LIST_CATEGORIES.CLOTHES:
    default:
      return t("clothes");
  }
};

export default useTranslatedCategory;
