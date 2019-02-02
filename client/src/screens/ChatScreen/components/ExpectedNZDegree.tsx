import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../utils';
import { StoreContext } from '../../../store/store.context';
import DropDown from '../../../components/DropDown/DropDown';

const NZDegreeData = [
  '语言课程',
  '学士学位',
  '硕士学位',
  '研究生课程',
  '学士后课程',
];

const ExpectedNZDegree: React.FC<IBaseStepType> = ({
  callback,
}) => {
  const store = useContext(StoreContext);

  return (
    <DropDown
      toDisplay={store.expectedNZDegree}
      items={NZDegreeData}
      whenSelectItem={(item: string) => {
        store.expectedNZDegree = item;
        callback();
      }}
    />
  );
};

export default observer(ExpectedNZDegree);
