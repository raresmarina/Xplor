import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import MenuHamburger from "@kiwicom/orbit-components/lib/icons/MenuHamburger";

// Import the consts directly instead of "../services/consts"
const { ESSENTIALS, CLOTHES, TOILETRIES, OTHER } = {
  ESSENTIALS: "essentials",
  CLOTHES: "clothes",
  TOILETRIES: "toiletries",
  OTHER: "other",
};

import useTranslatedCategory from "../../services/hooks/useTranslatedCategory";
import CategoryIcon from "./CategoryIcon";

export const BOTTOM_NAVBAR_HEIGHT = 50; // px

const StyledBottomNavbar = styled.nav`
  height: ${BOTTOM_NAVBAR_HEIGHT}px;
  width: 100%;
  background: ${({ theme }) => theme.orbit.paletteWhite};
  box-shadow: ${({ theme }) => theme.orbit.boxShadowFixedReverse};
  position: fixed;
  bottom: 0;
  display: flex;
  align-content: center;
  flex-direction: row;
  justify-content: space-around;
  z-index: 700;
`;

const StyledButton = styled.button`
  width: 60px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0;
  background: ${({ theme }) => theme.orbit.backgroundButtonLinkPrimary};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusLarge};
  outline: 0;

  @media (hover: hover) {
    &:hover,
    &:focus {
      background: ${({ theme }) => theme.orbit.backgroundButtonLinkPrimaryHover};
    }
  }

  span {
    font-size: 8px;
    letter-spacing: 0.5px;
    text-align: center;
    color: ${({ theme }) => theme.orbit.colorIconPrimary};
    user-select: none;
  }
`;

const HamburgerButton = ({ toggleSidebar }) => {
  const { t } = useTranslation();

  return (
    <StyledButton onClick={toggleSidebar}>
      <MenuHamburger ariaHidden />
      <span>{t("more")}</span>
    </StyledButton>
  );
};

const CategoryButton = ({ category }) => {
  const { t } = useTranslation();
  const translatedCategory = useTranslatedCategory(category);

  return (
    <StyledButton
      key={category}
      onClick={() => {
        const element = document.getElementById(category);
        return element && element.scrollIntoView({ behavior: "smooth" });
      }}
      aria-label={t("scroll_to_list", { category: translatedCategory })}
    >
      <CategoryIcon category={category} />
      <span>{translatedCategory}</span>
    </StyledButton>
  );
};

const BottomNavbar = ({ toggleSidebar }) => {
  return (
    <StyledBottomNavbar aria-label="Category navigation bar">
      {[ESSENTIALS, CLOTHES, TOILETRIES, OTHER].map((category) => (
        <CategoryButton key={category} category={category} />
      ))}
      <HamburgerButton toggleSidebar={toggleSidebar} />
    </StyledBottomNavbar>
  );
};

export default BottomNavbar;
