import React, { useContext } from 'react';
import { cities } from '../../../../../miscellaneous/cityData/cities';
import {
  ILocation,
  ICity,
} from '../../../../../store/ChatScreenStore/ChatScreenStore.type';
import DropDown, {
  whenSelectItemType,
} from '../../../../../components/DropDown/DropDown';
import { StoreContext } from '../../../../../store/store.context';
import { runInAction } from 'mobx';
import { observer } from 'mobx-react-lite';
import { getSharedDropDownStyleAll } from '../../components/sharedDropDown';

const getItems = (selectedProvince: ILocation) =>
  selectedProvince ? cities[selectedProvince.id] : [{ name: '', id: '' }];

const getItemProps = ({ id, name }: ICity) => ({
  key: id,
  itemText: name,
});

export const CitiesDropDown: React.FC = observer(() => {
  const { province, city } = useContext(StoreContext).regStore;

  const whenSelectItem: whenSelectItemType = (selectedLocation: unknown) => {
    runInAction(() => {
      city.id = (selectedLocation as ICity).id;
      city.name = (selectedLocation as ICity).name;
      city.provinceId = province.id;
    });
  };

  const items = getItems(province);

  return (
    <DropDown<ICity>
      toDisplay={city.name}
      defaultText="请选择 市"
      items={items || []}
      getItemProps={getItemProps}
      whenSelectItem={whenSelectItem}
      {...getSharedDropDownStyleAll({
        itemStyle: {
          paddingLeft: '32px',
        },
      })}
    />
  );
});
