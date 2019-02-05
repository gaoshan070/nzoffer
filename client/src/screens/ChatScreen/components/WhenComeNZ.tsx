import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import {
  addYears,
  getYear,
  getMonth,
  isThisYear,
} from 'date-fns';
import { History } from 'history';
import { IBaseStepType } from '../utils';
import DropDown from '../../../components/DropDown/DropDown';
import { StoreContext } from '../../../store/store.context';
import { withRouter } from 'react-router-dom';
import { ROUTES } from '../../../routes/routesConfig';
import { Box } from '../../../styles';
import { runInAction } from 'mobx';

const getFullYearString = (date: Date) =>
  date.getFullYear().toString() + '年';
const currentDate = new Date();
const yearData = [
  getFullYearString(currentDate),
  getFullYearString(addYears(currentDate, 1)),
  getFullYearString(addYears(currentDate, 2)),
];

const getMonthData = (
  year: string,
  month: string,
): string[] => {
  const realYear = year.replace('年', '');
  const realMonth = month.replace('年', '');
  // @ts-ignore
  const realYearMonth = new Date(realYear, realMonth);
  const result = [];
  let increaseMonth = getMonth(realYearMonth);

  // If not this year, we push 1 ~ 12
  if (!isThisYear(realYearMonth)) {
    let i = 1;
    while (i < 13) {
      result.push(`${i}月`);
      i += 1;
    }
    return result;
  }

  // If this year, we push from next month
  while (increaseMonth < 13) {
    increaseMonth += 1;
    result.push(`${increaseMonth}月`);
  }

  return result;
};

interface IWhenComeNZ extends IBaseStepType {
  history?: History;
}

const WhenComeNZ: React.FC<IWhenComeNZ> = ({
  history,
  callback,
}) => {
  const store = useContext(StoreContext);
  const { year, month } = store.whenComeNZ;

  const finalize = (
    value: string,
    isYear: boolean,
  ) => {
    runInAction(() => {
      if (isYear) {
        store.whenComeNZ.year = value;
      } else {
        store.whenComeNZ.month = value;
      }
    });

    if (!year || !month) {
      return;
    }

    callback();
    // if (history) {
    //   history.push(ROUTES.START_REGISTER);
    // }
  };

  return (
    <Box>
      <DropDown
        defaultText="请选择 年"
        toDisplay={year}
        items={yearData}
        whenSelectItem={(item: string) => {
          finalize(item, true);
        }}
      />
      <DropDown
        defaultText="请选择 月"
        toDisplay={month}
        items={getMonthData(
          year || `${getYear(new Date())}年`,
          month || `${getMonth(new Date())}月`,
        )}
        whenSelectItem={(item: string) => {
          finalize(item, false);
        }}
      />
    </Box>
  );
};

// @ts-ignore
export default withRouter(observer(WhenComeNZ));
