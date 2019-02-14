import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../utils';
import { StoreContext } from '../../../store/store.context';
import DropDown from '../../../components/DropDown/DropDown';
import { runInAction } from 'mobx';
import { overseaCountries } from '../../../shared/sharedData';

const WhichCountryDegree: React.FC<IBaseStepType> = ({ callback }) => {
  const store = useContext(StoreContext).chatStore;

  return (
    <DropDown
      toDisplay={store.overseaDegree.country}
      items={overseaCountries}
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
