import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import Illustration from "@kiwicom/orbit-components/lib/Illustration";
import useMediaQuery from "@kiwicom/orbit-components/lib/hooks/useMediaQuery";

import LanguagePicker from "../LanguagePicker";

const StyledHeading = styled.div`
  h1 {
    text-transform: uppercase;
    color: white; // Set the text color to white
  }
`;
const StyledIllustration = styled.div`
  img {
    max-height: 30px !important;
  }
`;

const StyledNavbarContent = styled.div`
  background-color: #3f51b5; // Set the background color to blue
  padding: 10px; // Adjust the padding as needed
`;

const NavbarContent = () => {
  const { t } = useTranslation();
  const { isLargeMobile } = useMediaQuery();

  return (
    <StyledNavbarContent>
      <Stack direction="row" align="center" justify="between">
        <Stack direction="row" align="center" spacing="XSmall" shrink>
          <StyledIllustration>
            <Illustration name="CabinBaggage" size="extraSmall" alt="" />
          </StyledIllustration>
          <StyledHeading>
            <Heading type="title2" as="h1">
              {t("Packing list")}
            </Heading>
          </StyledHeading>
        </Stack>
        {isLargeMobile && <LanguagePicker />}
      </Stack>
    </StyledNavbarContent>
  );
};

export default NavbarContent;
