import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../utils';
import {
  provinces,
  IProvince,
} from '../../../miscellaneous/cityData/provinces';
import { ChatScreenStoreContext } from '../../../store/ChatScreenStore/ChatScreenStore.context';
import DropDown, {
  whenSelectItemType,
} from '../../../components/DropDown/DropDown';

const getItemProps = ({ id, name }: IProvince) => ({
  key: id,
  itemText: name,
});

const ProvincesDropDown: React.FC<IBaseStepType> = ({
  callback,
}) => {
  const ChatScreenStore = useContext(
    ChatScreenStoreContext,
  );

  const whenSelectItem: whenSelectItemType<
    IProvince
  > = selectedLocation => {
    ChatScreenStore.selectedProvince = selectedLocation;
    callback();
  };

  return (
    <DropDown<IProvince>
      toDisplay={ChatScreenStore.selectedProvince.name}
      defaultText="请选择"
      items={provinces}
      getItemProps={getItemProps}
      whenSelectItem={whenSelectItem}
    />
  );
};

export default observer(ProvincesDropDown);
