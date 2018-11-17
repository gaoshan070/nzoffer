import React, { useState } from 'react';
import posed, { PoseGroup } from 'react-pose';
import { Image, Text } from 'rebass';
import { FlexCard } from './buildingBlocks';
import arrowDown from '../assets/arrowDown.svg';

const ListBox = posed.div({
  enter: { opacity: 1, scaleY: 1, originX: 0 },
  exit: { opacity: 0, scaleY: 0, originX: 0 },
});

interface IDropDownProps {
  css?: React.CSSProperties;
  initializeSelected: any;
  items: any[];
  defaultText?: string;
  whenSelectItem: (
    event: React.MouseEvent<HTMLElement>,
    selectItemFromList: Function,
  ) => void;
  displaySelected?: (selected: any) => string;
  displayItems: (
    itemOnClick: Function,
  ) => (item: any) => React.ReactNode;
}

const getValueToDisplay = ({
  displaySelected,
  selectedItem,
  defaultText,
}: {
  displaySelected?: Function;
  selectedItem: any;
  defaultText?: string;
}) => {
  if (!selectedItem) return defaultText;

  if (typeof displaySelected === 'function') {
    return displaySelected(selectedItem);
  }

  return selectedItem;
};

const DropDown: React.FC<IDropDownProps> = ({
  initializeSelected,
  items,
  defaultText,
  whenSelectItem,
  displaySelected,
  displayItems,
  css,
}) => {
  const [isOpen, toggleOpen] = useState(false);
  const [selectedItem, selectItemFromList] = useState(
    initializeSelected,
  );

  function openListOnClick() {
    toggleOpen(!isOpen);
  }

  function itemOnClick(
    e: React.MouseEvent<HTMLElement>,
  ) {
    whenSelectItem(e, selectItemFromList);
    toggleOpen(false);
  }

  const boxShadowStyle =
    '0 4px 16px rgba(0, 0, 0.25, 0.4)';

  let toDisplay = getValueToDisplay({
    displaySelected,
    selectedItem,
    defaultText,
  });

  return (
    <FlexCard
      flexDirection="column"
      css={{
        position: 'relative',
      }}
    >
      <FlexCard
        width="160px"
        alignItems="center"
        justifyContent="space-around"
        bg="white1"
        color="white1"
        px={1}
        py={2}
        boxShadow={boxShadowStyle}
        borderColor="primary"
        border="1px solid"
        css={{
          cursor: 'pointer',
          ...css,
        }}
        onClick={openListOnClick}
      >
        <Text color="primary">{toDisplay}</Text>
        <Image
          css={{
            transform: isOpen
              ? 'rotate(180deg)'
              : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
          src={arrowDown}
          alt=""
        />
      </FlexCard>
      <PoseGroup
        style={{
          position: 'absolute',
          top: 44,
          width: '100%',
        }}
      >
        {isOpen && (
          <ListBox key="items" width="160px">
            <FlexCard
              style={{ position: 'relative' }}
              flexDirection="column"
              border="1px solid #E75B41"
              px={3}
              py={3}
              height="300px"
              bg="white1"
              css={{
                overflowY: 'auto',
                zIndex: '99',
              }}
            >
              {items.map(displayItems(itemOnClick))}
            </FlexCard>
          </ListBox>
        )}
      </PoseGroup>
    </FlexCard>
  );
};

export default DropDown;
