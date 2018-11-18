import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../../utils';
import { FlexCard } from '../../../../components/buildingBlocks';
import {
  provinces,
  IProvince,
} from '../../../../miscellaneous/cityData/provinces';
import { ChatScreenStoreContext } from '../../../../store/ChatScreenStore.context';
import DropDown, {
  whenSelectItemType,
} from '../../../../components/DropDown/DropDown';

const ProvincesDropDown: React.FC<IBaseStepType> = ({
  callback,
}) => {
  const { setSelectedProvince } = useContext(
    ChatScreenStoreContext,
  );

  const whenSelectItem: whenSelectItemType = (
    eventTarget,
    setSelectedItem,
  ) => {
    const name = eventTarget.innerText;
    const id = eventTarget.attributes[0].value;
    const selectedLocation = { name, id };
    setSelectedItem(name);
    setSelectedProvince(selectedLocation);
    callback(selectedLocation);
  };

  const getItemProps = ({ id, name }: IProvince) => ({
    key: id,
    dataIds: { id },
    itemText: name,
  });

  return (
    <FlexCard boxShadow={2}>
      <DropDown
        defaultText="请选择 省"
        items={provinces}
        getItemProps={getItemProps}
        whenSelectItem={whenSelectItem}
      />
    </FlexCard>
  );
};

export default observer(ProvincesDropDown);
