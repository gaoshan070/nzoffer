import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { addYears, addMonths, getYear, getMonth, isThisYear } from 'date-fns';
import { History } from 'history';
import { IBaseStepType } from '../utils';
import DropDown from '../../../components/DropDown/DropDown';
import { StoreContext } from '../../../store/store.context';
import { withRouter } from 'react-router';
import { ROUTES } from '../../../routes/routesConfig';
import { Box } from '../../../styles';
import { runInAction } from 'mobx';

const currentDate = new Date();
const getMonthText = (from: number) => {
  const result = [];

  let i = from;
  while (i < 13) {
    result.push(`${i} 月`);
    i += 1;
  }
  return result;
};

const getRealMonth = (date: Date) => getMonth(date) + 1;

function getYearMonth() {
  const startDate = addMonths(currentDate, 3);
  const shouldStartAtThisYear = isThisYear(startDate);
  const monthTextFor1stYear = getMonthText(getRealMonth(startDate));
  const monthTextForFullYear = getMonthText(1);

  return shouldStartAtThisYear
    ? {
        [getYear(currentDate)]: monthTextFor1stYear,
        [getYear(addYears(currentDate, 1))]: monthTextForFullYear,
        [getYear(addYears(currentDate, 2))]: monthTextForFullYear,
      }
    : {
        [getYear(addYears(currentDate, 1))]: monthTextFor1stYear,
        [getYear(addYears(currentDate, 2))]: monthTextForFullYear,
        [getYear(addYears(currentDate, 3))]: monthTextForFullYear,
      };
}

const YEAR_MONTH = getYearMonth();

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
    <div>
      <Box>
        <DropDown
          defaultText={defaultYear}
          toDisplay={yearStr}
          items={Object.keys(YEAR_MONTH)}
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
          css={{
            borderRight: 'none',
          }}
        />
        <DropDown
          defaultText={defaultMonth}
          toDisplay={monthStr}
          items={yearStr !== defaultYear ? YEAR_MONTH[yearStr] : ['']}
          whenSelectItem={(item: string) => {
            finalize(item, false);
          }}
          boxProps={{
            width: '128px',
          }}
        />
      </Box>
    </div>
  );
};

// @ts-ignore
export default withRouter(observer(WhenComeNZ));
