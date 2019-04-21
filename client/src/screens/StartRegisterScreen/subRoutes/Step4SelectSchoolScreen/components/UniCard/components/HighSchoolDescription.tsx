import React from 'react';
import { DescItem } from './DescItem';
import { observer } from 'mobx-react-lite';
import {
  entryDateTextToDate,
  getDateStr2,
} from '../../../../Step5SelectionInfoScreen/components/date.utils';

function getEntryDatesText(entryDates: string[]) {
  let entryDatesText = entryDates
    .map(
      (s, index) =>
        `${index === 0 ? '' : ' '}` + getDateStr2(entryDateTextToDate(s, 2019)),
    )
    .toString();

  if (entryDates.length === 1) {
    entryDatesText = entryDatesText.replace('，', '');
  }

  return entryDatesText + '月';
}

function addMonths(durationInMonths: number[]) {
  if (durationInMonths.length === 1) return `${durationInMonths[0]}月`;

  return (
    durationInMonths
      .map((duration, index) => `${index === 0 ? '' : ' '}${duration}`)
      .toString() + '月'
  );
}

export const HighSchoolDescription: React.FC<{
  location: string;
  entryDates: string[];
  tuitionFeeInNZD: number;
  durationInMonths: number[];
}> = observer(({ location, entryDates, tuitionFeeInNZD, durationInMonths }) => {
  return (
    <>
      <DescItem title="课程长度" text={addMonths(durationInMonths)} />
      <DescItem title="入学时间" text={getEntryDatesText(entryDates)} />
      <DescItem title="学费" text={`${tuitionFeeInNZD} NZD`} />
      <DescItem title="城市" text={location} my="8px" />
    </>
  );
});
