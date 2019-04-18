import { parse, getYear, getMonth, getDate, differenceInDays } from 'date-fns';

function startMonthToDate(startMonth: number, year: number) {
  return new Date(year, startMonth - 1, 1, 0, 0);
}

function getCurrentYear() {
  return getYear(new Date());
}

function getNextYear() {
  return getYear(new Date()) + 1;
}

export function getDateStr(date: Date | string) {
  if (!date) return '';
  return `${getYear(date)}年${getMonth(date) + 1}月`;
}

export function getDateStr2(date: Date | string) {
  if (!date) return '';
  return `${getMonth(date) + 1}月`;
}

function isLongerThan90Days(fromDate: Date, toDate: Date) {
  return differenceInDays(toDate, fromDate) > 90;
}

export function startMonthDateTextToDate(dateStr: string) {
  const result = dateStr.replace('年', '/').replace('月', '/');
  // @ts-ignore
  return parse(result + '/01', 'YYYY/MM/DD');
}

export function getValidDatesFromStartMonths(startMonths: number[]) {
  const result: string[] = [];
  if (!startMonths.length) {
    result.push(getDateStr(new Date()));
    return result;
  }

  const currentDate = new Date();
  startMonths.forEach(startMonth => {
    const startDate1 = startMonthToDate(startMonth, getCurrentYear());
    const startDate2 = startMonthToDate(startMonth, getNextYear());

    if (isLongerThan90Days(currentDate, startDate1)) {
      result.push(getDateStr(startDate1));
    } else if (isLongerThan90Days(currentDate, startDate2)) {
      result.push(getDateStr(startDate2));
    }
  });

  return result;
}

export function entryDateTextToDate(entryDate: string, year: number) {
  const [date, month] = entryDate.split('/');
  // @ts-ignore
  return new Date(year, month - 1, date, 0, 0);
}

export function getValidDatesFromEntryDates(entryDates: string[]) {
  const result: string[] = [];
  if (!entryDates.length) {
    result.push(getDateStr(new Date()));
    return result;
  }

  const currentDate = new Date();
  entryDates.forEach(startMonth => {
    const startDate1 = entryDateTextToDate(startMonth, getCurrentYear());
    const startDate2 = entryDateTextToDate(startMonth, getNextYear());

    if (isLongerThan90Days(currentDate, startDate1)) {
      result.push(getDateStr(startDate1));
    } else if (isLongerThan90Days(currentDate, startDate2)) {
      result.push(getDateStr(startDate2));
    }
  });

  return result;
}

export const isObjectDate = (check: any) =>
  check.getMonth && typeof check.getMonth === 'function';
