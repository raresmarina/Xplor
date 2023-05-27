import React from "react";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import CountryFlag from "@kiwicom/orbit-components/lib/CountryFlag";
import TextLink from "@kiwicom/orbit-components/lib/TextLink";

import { LANGUAGES_DATA } from "../../services/consts";

const LanguageLink = ({ language, onClick }) => (
  <TextLink
    onClick={(event) => {
      event.preventDefault();
      onClick();
    }}
    href="#" // for keyboard access
    type="secondary"
    title={LANGUAGES_DATA[language].title}
    standAlone
  >
    <Stack direction="row" align="center" spacing="XSmall">
      <CountryFlag code={LANGUAGES_DATA[language].flagCode} name="" />
      <span>{LANGUAGES_DATA[language].title}</span>
    </Stack>
  </TextLink>
);

export default LanguageLink;
