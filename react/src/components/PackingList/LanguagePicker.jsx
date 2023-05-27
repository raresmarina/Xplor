import React, { useState } from "react";
import CountryFlag from "@kiwicom/orbit-components/lib/CountryFlag";
import LinkList from "@kiwicom/orbit-components/lib/LinkList";
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";
import Popover from "@kiwicom/orbit-components/lib/Popover";

import { LANGUAGES_DATA } from "../../services/consts";
import { useLanguage } from "../../services/providers/LanguageProvider";
import LanguageLink from "./LanguageLink";

const LanguagePicker = () => {
  const { language, setLanguage } = useLanguage();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
    setIsPopoverOpen(false);
  };

  return (
    <Popover
      opened={isPopoverOpen}
      onOpen={() => setIsPopoverOpen(true)}
      onClose={() => setIsPopoverOpen(false)}
      content={
        <LinkList spacing="none">
          {Object.keys(LANGUAGES_DATA).map((lang) => (
            <LanguageLink key={lang} language={lang} onClick={() => handleChangeLanguage(lang)} />
          ))}
        </LinkList>
      }
      preferredAlign="end"
      fixed
    >
    </Popover>
  );
};

export default LanguagePicker;
