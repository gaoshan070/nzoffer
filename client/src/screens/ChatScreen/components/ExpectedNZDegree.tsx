import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../utils';
import GeneralDropDown from '../../../components/DropDown/GeneralDropDown';
import { ChatScreenStoreContext } from '../../../store/ChatScreenStore/ChatScreenStore.context';

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
  const {
    expectedNZDegree,
    setExpectedNZDegree,
  } = useContext(ChatScreenStoreContext);

  return (
    <GeneralDropDown
      text={expectedNZDegree}
      items={NZDegreeData}
      setText={setExpectedNZDegree}
      callback={callback}
    />
  );
};

export default observer(ExpectedNZDegree);
