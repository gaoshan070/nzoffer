import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../utils';
import Box from '../../../components/Box/Box';
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
  const [isCalled, setIsCalled] = useState(false);

  const whenSelectItem: whenSelectItemType<
    IProvince
  > = ({ name, id }) => {
    const selectedLocation = { name, id };
    ChatScreenStore.selectedProvince = selectedLocation;
    if (!isCalled) {
      callback();
      setIsCalled(true);
    }
  };

  return (
    <DropDown<IProvince>
      toDisplay={ChatScreenStore.selectedProvince.name}
      defaultText="请选择 省"
      items={provinces}
      getItemProps={getItemProps}
      whenSelectItem={whenSelectItem}
    />
  );
};

export default observer(ProvincesDropDown);
