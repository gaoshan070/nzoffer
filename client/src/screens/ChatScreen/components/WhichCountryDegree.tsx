import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../utils';
import { StoreContext } from '../../../store/store.context';
import DropDown from '../../../components/DropDown/DropDown';
import { runInAction } from 'mobx';

const countryData = [
  '英国',
  '澳洲',
  '美国',
  '加拿大',
  '新西兰',
  '新加坡',
  '欧洲国家',
  '亚洲国家',
];

const WhichCountryDegree: React.FC<IBaseStepType> = ({
  callback,
}) => {
  const store = useContext(StoreContext).chatStore;

  return (
    <DropDown
      toDisplay={store.overseaDegree.country}
      items={countryData}
      whenSelectItem={(item: string) => {
        runInAction(() => {
          store.overseaDegree.country = item;
        });
        callback();
      }}
    />
  );
};

export default observer(WhichCountryDegree);
