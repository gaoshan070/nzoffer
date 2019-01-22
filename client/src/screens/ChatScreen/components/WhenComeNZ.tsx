import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import addYears from 'date-fns/add_years';
import { History } from 'history';
import { IBaseStepType } from '../utils';
import GeneralDropDown, {
  getSetTextFunc,
} from '../../../components/DropDown/GeneralDropDown';
import { ChatScreenStoreContext } from '../../../store/ChatScreenStore/ChatScreenStore.context';
import { withRouter } from 'react-router-dom';
import { ROUTES } from '../../../routes/routesConfig';

const getFullYearString = (date: Date) =>
  date.getFullYear().toString() + '年';
const currentDate = new Date();
const yearData = [
  getFullYearString(currentDate),
  getFullYearString(addYears(currentDate, 1)),
  getFullYearString(addYears(currentDate, 2)),
];

interface IWhenComeNZ extends IBaseStepType {
  history?: History;
}

const WhenComeNZ: React.FC<IWhenComeNZ> = ({
  history,
  callback,
}) => {
  const store = useContext(ChatScreenStoreContext);
  const { whenComeNZ } = store;

  const finalize = () => {
    callback();
    if (history) {
      history.push(ROUTES.START_REGISTER);
    }
  };

  return (
    <GeneralDropDown
      text={whenComeNZ}
      items={yearData}
      setText={getSetTextFunc(store, 'whenComeNZ')}
      callback={finalize}
    />
  );
};

// @ts-ignore
export default observer(withRouter(WhenComeNZ));
