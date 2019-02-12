import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../utils';
import { StoreContext } from '../../../store/store.context';
import DropDown from '../../../components/DropDown/DropDown';
import { runInAction } from 'mobx';
import { sharedData } from '../../../shared/sharedData';

const WhichCountryDegree: React.FC<IBaseStepType> = ({ callback }) => {
  const store = useContext(StoreContext).chatStore;

  return (
    <DropDown
      toDisplay={store.overseaDegree.country}
      items={sharedData.overseaCountry}
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
