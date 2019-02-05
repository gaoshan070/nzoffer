import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../utils';
import { StoreContext } from '../../../store/store.context';
import DropDown from '../../../components/DropDown/DropDown';

const countryData = [
  '英国',
  '澳洲',
  '美国',
  '加拿大',
  '新西兰',
  '新加坡',
  '欧洲',
  '国家',
  '亚洲国家',
];

const WhichCountryDegree: React.FC<IBaseStepType> = ({
  callback,
}) => {
  const store = useContext(StoreContext);

  return (
    <DropDown
      toDisplay={store.whichCountryDegree}
      items={countryData}
      whenSelectItem={(item: string) => {
        store.update('whichCountryDegree', item);
        callback();
      }}
    />
  );
};

export default observer(WhichCountryDegree);
