import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { addYears, getYear, getMonth, isThisYear } from 'date-fns';
import { History } from 'history';
import { IBaseStepType } from '../utils';
import DropDown from '../../../components/DropDown/DropDown';
import { StoreContext } from '../../../store/store.context';
import { withRouter } from 'react-router';
import { ROUTES } from '../../../routes/routesConfig';
import { Box } from '../../../styles';
import { runInAction } from 'mobx';

const getFullYearString = (date: Date) => date.getFullYear().toString();
const currentDate = new Date();
const yearData = [
  getFullYearString(currentDate),
  getFullYearString(addYears(currentDate, 1)),
  getFullYearString(addYears(currentDate, 2)),
];

const getMonthData = (year: string, month: string): string[] => {
  const realYear = year;
  const realMonth = month.replace(' 月', '');
  // @ts-ignore
  const realYearMonth = new Date(realYear, realMonth);
  const result = [];
  let increaseMonth = getMonth(realYearMonth);

  // If not this year, we push 1 ~ 12
  if (!isThisYear(realYearMonth)) {
    let i = 1;
    while (i < 13) {
      result.push(`${i} 月`);
      i += 1;
    }
    return result;
  }

  // If this year, we push from next month
  while (increaseMonth < 13) {
    increaseMonth += 1;
    result.push(`${increaseMonth} 月`);
  }

  return result;
};

interface IWhenComeNZ extends IBaseStepType {
  history?: History;
}

const WhenComeNZ: React.FC<IWhenComeNZ> = ({ history, callback }) => {
  const store = useContext(StoreContext).chatStore;
  const { year, month } = store.whenComeNZ;

  const finalize = (value: string, isYear: boolean) => {
    runInAction(() => {
      if (isYear) {
        store.whenComeNZ.year = parseInt(value, 10);
      } else {
        store.whenComeNZ.month = parseInt(value.replace(' 月', ''), 10);
      }
    });

    if (!store.whenComeNZ.year || !store.whenComeNZ.month) {
      return;
    }

    callback();

    if (history) {
      history.push(ROUTES.START_REGISTER);
    }
  };

  const defaultYear = '请选择 年';
  const defaultMonth = '月';
  const yearStr = year ? year : defaultYear;
  const monthStr = month ? month + ' 月' : defaultMonth;

  const padding = yearStr.toString().startsWith('请选择') ? '22px' : '24px';

  return (
    <Box>
      <DropDown
        defaultText={defaultYear}
        toDisplay={yearStr}
        items={yearData}
        whenSelectItem={(item: string) => {
          finalize(item, true);
        }}
        boxProps={{
          width: '128px',
        }}
        itemStyle={{
          paddingLeft: padding,
          paddingRight: padding,
        }}
      />
      <DropDown
        defaultText={defaultMonth}
        toDisplay={monthStr}
        items={getMonthData(
          `${yearStr}` || `${getYear(new Date())}`,
          `${monthStr}` || `${getMonth(new Date())}月`,
        )}
        whenSelectItem={(item: string) => {
          finalize(item, false);
        }}
        boxProps={{
          width: '128px',
        }}
      />
    </Box>
  );
};

// @ts-ignore
export default withRouter(observer(WhenComeNZ));
