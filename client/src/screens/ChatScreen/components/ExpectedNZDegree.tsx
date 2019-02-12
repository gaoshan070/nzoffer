import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../utils';
import { StoreContext } from '../../../store/store.context';
import DropDown from '../../../components/DropDown/DropDown';
import { sharedData } from '../../../shared/sharedData';

const ExpectedNZDegree: React.FC<IBaseStepType> = ({ callback }) => {
  const store = useContext(StoreContext).chatStore;

  return (
    <DropDown
      toDisplay={store.expectedNZDegree}
      items={sharedData.expectedNZDegree}
      whenSelectItem={(item: string) => {
        store.update('expectedNZDegree', item);
        callback();
      }}
    />
  );
};

export default observer(ExpectedNZDegree);
