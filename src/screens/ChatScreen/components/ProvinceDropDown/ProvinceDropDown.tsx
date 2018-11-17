import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../../utils';
import { FlexCard } from '../../../../components/buildingBlocks';
import { provinces } from '../../../../miscellaneous/cityData/provinces';
import {
  SharedDropDown,
  getWhenSelectItem,
} from './components/shared';
import { AppStoreContext } from '../../../../store/store';

const ProvincesDropDown: React.FC<IBaseStepType> = ({
  callback,
}) => {
  const {
    setSelectedProvince,
    selectedProvince,
  } = useContext(AppStoreContext);

  const whenSelectItem = getWhenSelectItem(
    selected => {
      setSelectedProvince(selected);
      callback();
    },
  );

  return (
    <FlexCard boxShadow={2}>
      <SharedDropDown
        items={provinces}
        whenSelectItem={whenSelectItem}
        defaultText="请选择 省"
      />
    </FlexCard>
  );
};

export default observer(ProvincesDropDown);
