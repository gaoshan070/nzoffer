import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../utils';
import { ChatScreenStoreContext } from '../../../store/ChatScreenStore/ChatScreenStore.context';
import DropDown from '../../../components/DropDown/DropDown';
import { getWhenSelectItem } from '../../../components/DropDown/DropDown.utils';

const overseaDegreeData = [
  '本科毕业',
  '研究生',
  '专科毕业',
  '大学肄业',
];

const OverseaDegree: React.FC<IBaseStepType> = ({
  callback,
}) => {
  const store = useContext(ChatScreenStoreContext);

  return (
    <DropDown
      toDisplay={store.overseaDegree}
      items={overseaDegreeData}
      whenSelectItem={getWhenSelectItem(
        store,
        'overseaDegree',
        callback,
      )}
    />
  );
};

export default observer(OverseaDegree);
