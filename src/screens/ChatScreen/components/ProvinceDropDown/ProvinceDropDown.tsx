import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../../utils';
import Box from '../../../../components/Box/Box';
import {
  provinces,
  IProvince,
} from '../../../../miscellaneous/cityData/provinces';
import { ChatScreenStoreContext } from '../../../../store/ChatScreenStore/ChatScreenStore.context';
import DropDown, {
  whenSelectItemType,
} from '../../../../components/DropDown/DropDown';

const getItemProps = ({ id, name }: IProvince) => ({
  key: id,
  dataIds: { id },
  itemText: name,
});

const ProvincesDropDown: React.FC<IBaseStepType> = ({
  callback,
}) => {
  const {
    selectedProvince,
    setSelectedProvince,
  } = useContext(ChatScreenStoreContext);

  const whenSelectItem: whenSelectItemType = eventTarget => {
    const name = eventTarget.innerText;
    const id = eventTarget.attributes[0].value;
    const selectedLocation = { name, id };
    setSelectedProvince(selectedLocation);
    callback(selectedLocation);
  };

  return (
    <Box boxShadow={0}>
      <DropDown<IProvince>
        toDisplay={selectedProvince.name}
        defaultText="请选择 省"
        items={provinces}
        getItemProps={getItemProps}
        whenSelectItem={whenSelectItem}
      />
    </Box>
  );
};

export default observer(ProvincesDropDown);
