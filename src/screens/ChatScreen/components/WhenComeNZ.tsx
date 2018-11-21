import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import addYears from 'date-fns/add_years';
import { IBaseStepType } from '../utils';
import DropDown from '../../../components/DropDown/DropDown';
import { FlexCard } from '../../../components/buildingBlocks';
import { ChatScreenStoreContext } from '../../../store/ChatScreenStore/ChatScreenStore.context';

const getFullYearString = (date: Date) =>
  date.getFullYear().toString() + '年';
const currentDate = new Date();
const yearData = [
  getFullYearString(currentDate),
  getFullYearString(addYears(currentDate, 1)),
  getFullYearString(addYears(currentDate, 2)),
];

const WhenComeNZ: React.FC<IBaseStepType> = ({
  callback,
}) => {
  const { whenComeNZ, setWhenComeNZ } = useContext(
    ChatScreenStoreContext,
  );

  const whenSelectItem = (
    eventTarget: HTMLElement,
  ) => {
    setWhenComeNZ(eventTarget.textContent || '');
    callback();
  };

  return (
    <FlexCard boxShadow={2}>
      <DropDown<string>
        toDisplay={whenComeNZ}
        items={yearData}
        whenSelectItem={whenSelectItem}
      />
    </FlexCard>
  );
};

export default observer(WhenComeNZ);
