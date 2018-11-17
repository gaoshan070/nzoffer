import React, { useState } from 'react';
import { Box, Text } from 'rebass';
import DropDown from '../../../../../components/DropDown';
import {
  ICity,
  ILocation,
} from '../../../../../store/ChatScreenStore.type';

const initializeSelected = {
  name: '',
  id: '',
};

const displaySelected = (defaultText: string) => (
  selected: ILocation,
) => selected.name || defaultText;

const Item = ({
  id,
  itemOnClick,
  province,
  name,
}: {
  id: string;
  itemOnClick: Function;
  province: string;
  name: string;
}) => {
  const [isHover, setIsHover] = useState(false);

  function handleMouseOver() {
    setIsHover(true);
  }

  function handleMouseOut() {
    setIsHover(false);
  }

  return (
    <Box
      key={id}
      onClick={itemOnClick}
      data-id={id}
      data-province={province}
      px={3}
      py={3}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      bg={isHover ? 'primary' : 'inherit'}
      color={isHover ? 'white1' : 'black'}
      css={{
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
    >
      {name}
    </Box>
  );
};

const displayItem = (itemOnClick: Function) => ({
  name,
  id,
  province,
}: ICity) => (
  <Item
    id={id}
    itemOnClick={itemOnClick}
    province={province}
    name={name}
  />
);

export const getWhenSelectItem = (
  callback: (location: any) => void,
) => (
  e: React.MouseEvent<HTMLElement>,
  selectItemFromList: Function,
) => {
  const target = e.target as HTMLElement;
  const name = target.innerText;
  const id = target.attributes[0].value;
  const province = target.attributes[1].value;

  const selectedLocation: {
    [name: string]: string;
  } = { name, id };

  if (province) {
    selectedLocation.province = province;
  }

  selectItemFromList(selectedLocation);
  callback(selectedLocation);
};

interface ISharedDropDownProp {
  whenSelectItem: (
    event: React.MouseEvent<HTMLElement>,
    selectItemFromList: Function,
  ) => void;
  items: any[];
  defaultText: string;
  css?: React.CSSProperties;
}

export const SharedDropDown: React.FC<
  ISharedDropDownProp
> = ({ whenSelectItem, items, defaultText, css }) => (
  <DropDown
    initializeSelected={initializeSelected}
    items={items}
    defaultText={defaultText}
    whenSelectItem={whenSelectItem}
    displaySelected={displaySelected(defaultText)}
    displayItems={displayItem}
    css={css}
  />
);
