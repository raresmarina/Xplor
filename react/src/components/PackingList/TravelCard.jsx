import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Card, { CardSection } from "@kiwicom/orbit-components/lib/Card";
import Button from "@kiwicom/orbit-components/lib/Button";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import { Plus } from "@kiwicom/orbit-components/lib/icons";

import TravelItem from "./TravelItem";
import SettingsPopover from "./SettingsPopover";
import useLocalStorage from "../../services/hooks/useLocalStorage";
import { EDIT_MODE } from "../../services/consts";
import CategoryIcon from "./CategoryIcon";
import useTranslatedCategory from "../../services/hooks/useTranslatedCategory";
import AddItemControls from "./AddItemControls";

const TravelCard = ({ category, initialCardItems }) => {
  const { t } = useTranslation();
  const translatedCategory = useTranslatedCategory(category);
  const [cardItems, setCardItems] = useLocalStorage(
    `travel-packing-list:list-${category}`,
    initialCardItems
  );
  const [editMode, setEditMode] = useState(EDIT_MODE.DEFAULT);

  const isRemoveItemsMode = editMode === EDIT_MODE.REMOVE_ITEMS;

  const toggleSettings = () => {
    if (editMode === EDIT_MODE.OPEN_SETTINGS) {
      setEditMode(EDIT_MODE.DEFAULT);
    } else {
      setEditMode(EDIT_MODE.OPEN_SETTINGS);
    }
  };

  const handleDeleteItem = (itemTKey) => {
    setCardItems(cardItems.filter(item => item.tKey !== itemTKey));
  };

  const toggleCheckedItem = (itemTKey) => {
    setCardItems(
      cardItems.map(item =>
        item.tKey === itemTKey ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const handleResetCard = () => {
    setCardItems(initialCardItems);
    setEditMode(EDIT_MODE.DEFAULT);
  };

  const handleDeselectAll = () => {
    setCardItems(cardItems.map(item => ({ ...item, isChecked: false })));
    setEditMode(EDIT_MODE.DEFAULT);
  };

  const handleSelectAll = () => {
    setCardItems(cardItems.map(item => ({ ...item, isChecked: true })));
    setEditMode(EDIT_MODE.DEFAULT);
  };

  const handleSubmitNewItem = (newItemValue) => {
    setCardItems([...cardItems, { tKey: newItemValue, isChecked: false }]);
    setEditMode(EDIT_MODE.DEFAULT);
  };

  return (
    <Card
      title={
        <span id={category} style={{ scrollMarginTop: "65px" }}>
          {translatedCategory}
        </span>
      }
      titleAs="h2"
      icon={<CategoryIcon category={category} />}
      actions={
        <SettingsPopover
          translatedCategory={translatedCategory}
          toggleSettings={toggleSettings}
          handleShowDelete={() => setEditMode(EDIT_MODE.REMOVE_ITEMS)}
          handleResetCard={handleResetCard}
          handleDeselectAll={handleDeselectAll}
          handleSelectAll={handleSelectAll}
          isSettingsOpened={editMode === EDIT_MODE.OPEN_SETTINGS}
        />
      }
    >
      <CardSection>
        <Stack direction="column" spacing="medium" desktop={{ spacing: "XSmall" }}>
          {cardItems.map(item => (
            <TravelItem
              key={item.tKey}
              item={item}
              shouldShowDeleteButton={isRemoveItemsMode}
              toggleCheckedItem={toggleCheckedItem}
              handleDeleteItem={handleDeleteItem}
            />
          ))}
          {editMode === EDIT_MODE.ADD_ITEM ? (
            <AddItemControls
              handleSubmitNewItem={handleSubmitNewItem}
              doesAlreadyExistInItems={newItemValue =>
                Boolean(cardItems.find(item => newItemValue === t(item.tKey)))
              }
            />
          ) : (
            <Stack direction="row" justify="between">
              <Button
                type="secondary"
                iconLeft={<Plus ariaHidden />}
                size="small"
                onClick={() => setEditMode(EDIT_MODE.ADD_ITEM)}
                disabled={isRemoveItemsMode}
              >
                {t("add_item")}
              </Button>
              {isRemoveItemsMode && (
                <Button type="critical" size="small" onClick={() => setEditMode(EDIT_MODE.DEFAULT)}>
                  {t("done")}
                </Button>
              )}
            </Stack>
          )}
        </Stack>
      </CardSection>
    </Card>
  );
};

export default TravelCard;
