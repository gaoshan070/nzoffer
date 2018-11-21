import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../utils';
import DropDown from '../../../components/DropDown/DropDown';
import { FlexCard } from '../../../components/buildingBlocks';
import { ChatScreenStoreContext } from '../../../store/ChatScreenStore/ChatScreenStore.context';

const ChinaDegreeData = [
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

  const whenSelectItem = (
    eventTarget: HTMLElement,
  ) => {
    setChinaDegree(eventTarget.textContent || '');
    callback();
  };

  return (
    <FlexCard boxShadow={2}>
      <DropDown<string>
        toDisplay={chinaDegree}
        items={ChinaDegreeData}
        whenSelectItem={whenSelectItem}
      />
    </FlexCard>
  );
};

export default observer(ChinaDegreeDropDown);
