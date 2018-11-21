import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../utils';
import GeneralDropDown from '../../../components/DropDown/GeneralDropDown';
import { ChatScreenStoreContext } from '../../../store/ChatScreenStore/ChatScreenStore.context';

const chinaDegreeData = [
  '初中在读',
  '初中毕业',
  '初中肄业',
  '高中在读',
  '高中毕业',
  '高中肄业',
  '大学在读',
  '大学毕业',
  '大学肄业',
  '研究生',
];

const ChinaDegreeDropDown: React.FC<IBaseStepType> = ({
  callback,
}) => {
  const { chinaDegree, setChinaDegree } = useContext(
    ChatScreenStoreContext,
  );

  return (
    <GeneralDropDown
      text={chinaDegree}
      items={chinaDegreeData}
      setText={setChinaDegree}
      callback={callback}
    />
  );
};

export default observer(ChinaDegreeDropDown);
