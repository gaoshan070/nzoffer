import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../utils';
import DropDown from '../../../components/DropDown/DropDown';
import { FlexCard } from '../../../components/buildingBlocks';
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

  const whenSelectItem = (
    eventTarget: HTMLElement,
  ) => {
    setExpectedNZDegree(eventTarget.textContent || '');
    callback();
  };

  return (
    <FlexCard boxShadow={2}>
      <DropDown<string>
        toDisplay={expectedNZDegree}
        items={NZDegreeData}
        whenSelectItem={whenSelectItem}
      />
    </FlexCard>
  );
};

export default observer(ExpectedNZDegree);
