import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Checkbox from "@kiwicom/orbit-components/lib/Checkbox";
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";
import { Close } from "@kiwicom/orbit-components/lib/icons";

const StyledButtonLink = styled.div`
  button {
    height: ${({ theme }) => theme.orbit.heightCheckbox};
    width: ${({ theme }) => theme.orbit.widthCheckbox};
  }
`;

const TravelItem = ({
  item,
  shouldShowDeleteButton,
  toggleCheckedItem,
  handleDeleteItem,
}) => {
  const { t } = useTranslation();
  const { tKey, isChecked } = item;

  return (
    <Stack direction="row" align="start" justify="between" spacing="medium">
      <Checkbox
        label={t(tKey)}
        name={t(tKey)}
        checked={isChecked}
        onChange={() => toggleCheckedItem(tKey)}
        disabled={shouldShowDeleteButton}
      />
      {shouldShowDeleteButton && (
        <StyledButtonLink>
          <ButtonLink
            type="critical"
            size="small"
            iconLeft={<Close ariaHidden />}
            title={t("delete_item", { item: t(tKey) })}
            onClick={() => handleDeleteItem(tKey)}
          />
        </StyledButtonLink>
      )}
    </Stack>
  );
};

export default TravelItem;
