import React from "react";
import { useTranslation } from "react-i18next";
import Main from "./components/PackingList/Main";
import Footer from "./components/PackingList/Footer";
import NavbarWithSidebar from "./components/PackingList/NavbarWithSidebar/NavbarWithSidebar";
import LanguageProvider from "./services/providers/LanguageProvider";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";
import { ThemeProvider } from "styled-components";

function Packing() {
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={defaultTheme}>
      <LanguageProvider>
        <>
          <NavbarWithSidebar />
          <Main />
          <Footer />
        </>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default Packing;
