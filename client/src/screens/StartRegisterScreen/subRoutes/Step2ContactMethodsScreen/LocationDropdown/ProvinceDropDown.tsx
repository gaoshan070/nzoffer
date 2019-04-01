import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import {
  provinces,
  IProvince,
} from '../../../../../miscellaneous/cityData/provinces';
import { StoreContext } from '../../../../../store/store.context';
import DropDown, {
  whenSelectItemType,
} from '../../../../../components/DropDown/DropDown';
import { ILocation } from '../../../../../store/ChatScreenStore/ChatScreenStore.type';
import { sharedDropDownStyleAll } from '../../components/sharedDropDown';

const getItemProps = ({ id, name }: IProvince) => ({
  key: id,
  itemText: name,
});

export const ProvinceDropDown: React.FC = observer(() => {
  const { regStore } = useContext(StoreContext);

  const whenSelectItem: whenSelectItemType<IProvince> = (
    selectedLocation: ILocation,
  ) => {
    regStore.update('province', selectedLocation);
  };

  return (
    <DropDown<IProvince>
      toDisplay={regStore.province.name}
      defaultText="请选择 省"
      items={provinces}
      getItemProps={getItemProps}
      whenSelectItem={whenSelectItem}
      {...sharedDropDownStyleAll}
    />
  );
});
