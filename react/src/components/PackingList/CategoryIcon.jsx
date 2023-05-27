import React from "react";
import { Spa, Suitcase, Wallet, TermsAndConditions } from "@kiwicom/orbit-components/lib/icons";

import { LIST_CATEGORIES } from "../../services/consts";

const CategoryIcon = ({ category }) => {
  switch (category) {
    case LIST_CATEGORIES.ESSENTIALS:
      return <Wallet ariaHidden />;
    case LIST_CATEGORIES.TOILETRIES:
      return <Spa ariaHidden />;
    case LIST_CATEGORIES.OTHER:
      return <TermsAndConditions ariaHidden />;
    case LIST_CATEGORIES.CLOTHES:
    default:
      return <Suitcase ariaHidden />;
  }
};

export default CategoryIcon;
