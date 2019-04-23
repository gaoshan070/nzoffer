import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../utils';
import {
  provinces,
  IProvince,
} from '../../../miscellaneous/cityData/provinces';
import { StoreContext } from '../../../store/store.context';
import DropDown, {
  whenSelectItemType,
} from '../../../components/DropDown/DropDown';

const getItemProps = ({ id, name }: IProvince) => ({
  key: id,
  itemText: name,
});

const ProvincesDropDown: React.FC<IBaseStepType> = ({ callback }) => {
  const ChatScreenStore = useContext(StoreContext).chatStore;

  const whenSelectItem: whenSelectItemType = selectedLocation => {
    ChatScreenStore.update('province', selectedLocation);
    callback();
  };

  return (
    <DropDown<IProvince>
      toDisplay={ChatScreenStore.province.name}
      defaultText="请选择"
      items={provinces}
      getItemProps={getItemProps}
      whenSelectItem={whenSelectItem}
    />
  );
};

export default observer(ProvincesDropDown);
