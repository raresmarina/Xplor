import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import { Link } from 'react-router-dom'; 
import { FaHome } from 'react-icons/fa'; // import the house icon

const StyledHeading = styled.div`
  h1 {
    text-transform: uppercase;
    color: white; // Set the text color to white
  }
`;

const StyledNavbarContent = styled.div`
  background-color: #FF5A5F; // Set the background color to blue
  padding: 10px; // Adjust the padding as needed
`;

// Create a styled component for the Link element
const StyledLink = styled(Link)`
  font-size: 0.8em; // Decrease the font size
  margin-left: auto; // Push the link to the right
  color: white; // Set the link color to white
  display: flex; // Use flex to center the icon
  align-items: center; // Center the icon vertically
  justify-content: center; // Center the icon horizontally
`;

const NavbarContent = () => {
  const { t } = useTranslation();

  return (
    <StyledNavbarContent>
      <Stack direction="row" align="center" justify="between">
        <Stack direction="row" align="center" spacing="XSmall" shrink>
          <StyledHeading>
            <Heading type="title2" as="h1">
              {t("Packing list")}
            </Heading>
          </StyledHeading>
          <StyledLink to="/">
            <FaHome size={20} /> 
          </StyledLink> 
        </Stack>
      </Stack>
    </StyledNavbarContent>
  );
};

export default NavbarContent;
