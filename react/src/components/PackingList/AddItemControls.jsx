import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "@kiwicom/orbit-components/lib/Button";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import InputField from "@kiwicom/orbit-components/lib/InputField";
import { capitalize } from "../../services/helpers";

const AddItemControls = ({ handleSubmitNewItem, doesAlreadyExistInItems }) => {
  const { t } = useTranslation();
  const [newItem, setNewItem] = useState({ value: "", error: null });

  const handleInputChange = (e) => {
    setNewItem({ error: null, value: capitalize(e.target.value) });
  };

  const handleValidateAndSubmit = (e) => {
    if (!newItem.value) {
      setNewItem({ ...newItem, error: t("enter_item") });
    } else if (doesAlreadyExistInItems(newItem.value)) {
      setNewItem({ ...newItem, error: t("already_exist") });
    } else {
      e.preventDefault();
      handleSubmitNewItem(newItem.value);
    }
  };

  return (
    <Stack direction="row" spacing="XSmall">
      <InputField
        name="New item"
        size="small"
        placeholder={t("item")}
        value={newItem.value}
        onChange={handleInputChange}
        error={newItem.error}
        ref={(input) => input && input.focus()}
      />
      <Button size="small" onClick={handleValidateAndSubmit}>
        {t("save")}
      </Button>
    </Stack>
  );
};

export default AddItemControls;
