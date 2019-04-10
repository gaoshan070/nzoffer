import React from 'react';
import { DescItem } from './DescItem';
import { observer } from 'mobx-react-lite';

export const HighSchoolDescription: React.FC<{
  location: string;
  entryDates: string[];
  tuitionFeeInNZD: number;
  durationInMonths: number[];
}> = observer(({ location, entryDates, tuitionFeeInNZD, durationInMonths }) => {
  const addMonth = durationInMonths.map(duration => `${duration}月`).join('/');

  return (
    <>
      <DescItem title="课程长度" text={addMonth} />
      <DescItem title="入学时间" text={entryDates.toString()} />
      <DescItem title="学费" text={`NZ $${tuitionFeeInNZD}`} />
      <DescItem title="城市" text={location} />
    </>
  );
});
