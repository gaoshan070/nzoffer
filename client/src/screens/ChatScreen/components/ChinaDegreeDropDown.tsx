import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../utils';
import { StoreContext } from '../../../store/store.context';
import DropDown from '../../../components/DropDown/DropDown';
import { sharedData } from '../../../shared/sharedData';

const { chinaDegree } = sharedData;

const ChinaDegreeDropDown: React.FC<IBaseStepType> = ({ callback }) => {
  const store = useContext(StoreContext).chatStore;

  return (
    <DropDown
      toDisplay={store.chinaDegree}
      items={chinaDegree}
      whenSelectItem={(item: string) => {
        store.update('chinaDegree', item);
        callback();
      }}
      boxProps={{
        width: '178px',
      }}
    />
  );
};

export default observer(ChinaDegreeDropDown);
