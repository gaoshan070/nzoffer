import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import addYears from 'date-fns/add_years';
import { IBaseStepType } from '../utils';
import GeneralDropDown from '../../../components/DropDown/GeneralDropDown';
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

  return (
    <GeneralDropDown
      text={whenComeNZ}
      items={yearData}
      setText={setWhenComeNZ}
      callback={callback}
    />
  );
};

export default observer(WhenComeNZ);
