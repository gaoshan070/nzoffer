import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../utils';
import GeneralDropDown, {
  getSetTextFunc,
} from '../../../components/DropDown/GeneralDropDown';
import { ChatScreenStoreContext } from '../../../store/ChatScreenStore/ChatScreenStore.context';

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
    <GeneralDropDown
      text={store.overseaDegree}
      items={overseaDegreeData}
      setText={getSetTextFunc(store, 'overseaDegree')}
      callback={callback}
    />
  );
};

export default observer(OverseaDegree);
