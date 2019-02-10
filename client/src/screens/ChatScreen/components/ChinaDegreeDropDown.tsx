import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../utils';
import { StoreContext } from '../../../store/store.context';
import DropDown from '../../../components/DropDown/DropDown';

export const chinaDegreeData = [
  '初中在读',
  '初中毕业',
  '初中肄业',
  '高中在读',
  '高中毕业',
  '高中肄业',
  '大专在读',
  '本科在读',
  '大学毕业',
  '大学肄业',
  '研究生',
];

const ChinaDegreeDropDown: React.FC<IBaseStepType> = ({ callback }) => {
  const store = useContext(StoreContext).chatStore;

  return (
    <DropDown
      toDisplay={store.chinaDegree}
      items={chinaDegreeData}
      whenSelectItem={(item: string) => {
        store.update('chinaDegree', item);
        callback();
      }}
    />
  );
};

export default observer(ChinaDegreeDropDown);
