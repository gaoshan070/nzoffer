import React from 'react';
import { Text } from 'rebass';
import DropDown from '../../../../../components/DropDown';
import {
  ICity,
  ILocation,
} from '../../../../../store/AppStore.type';

const initializeSelected = {
  name: '',
  id: '',
};

const displaySelected = (defaultText: string) => (
  selected: ILocation,
) => selected.name || defaultText;

const displayItem = (itemOnClick: Function) => ({
  name,
  id,
  province,
}: ICity) => (
  <Text
    key={id}
    onClick={itemOnClick}
    data-id={id}
    data-province={province}
    mb={3}
    css={{ cursor: 'pointer' }}
  >
    {name}
  </Text>
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
    hasBoxShadow={false}
    initializeSelected={initializeSelected}
    items={items}
    defaultText={defaultText}
    whenSelectItem={whenSelectItem}
    displaySelected={displaySelected(defaultText)}
    displayItems={displayItem}
    css={css}
  />
);
