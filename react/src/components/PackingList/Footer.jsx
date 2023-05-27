import React from "react";
import styled, { css } from "styled-components";
import media from "@kiwicom/orbit-components/lib/utils/mediaQuery";
import Text from "@kiwicom/orbit-components/lib/Text";
import TextLink from "@kiwicom/orbit-components/lib/TextLink";
import { BOTTOM_NAVBAR_HEIGHT } from "./BottomNavbar";

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.orbit.borderColorCard};
  padding: ${({ theme }) => `0 ${theme.orbit.spaceXXLarge} ${theme.orbit.spaceSmall}`};
  margin-bottom: ${BOTTOM_NAVBAR_HEIGHT}px;
  user-select: none; // disable selecting text (Chrome was selecting it when you clicked bottom navbar button)

  ${media.largeMobile(css`
    padding: ${({ theme }) => `0 ${theme.orbit.spaceMedium} ${theme.orbit.spaceMedium}`};
    margin-bottom: 0;
  `)};
`;

const Footer = () => {
  return (
    <FooterWrapper>
      
    </FooterWrapper>
  );
};

export default Footer;
