import React from 'react';
import { observer } from 'mobx-react-lite';
import { InputsBox } from '../../../../PortalScreen/components/InputsBox';
import { SelectDateText } from './SelectDateText';
import { SelectDatePool } from './SelectDatePool';
import {
  getDateStr,
  getValidDatesFromStartMonths,
  startMonthDateTextToDate,
} from './date.utils';

export const UniSelectDate: React.FC<{
  selected: string;
  setSelected: (v: string) => void;
  startMonth?: number[];
}> = observer(({ selected, setSelected, startMonth = [1] }) => {
  const selectedTxt = typeof selected === 'object' ? getDateStr(selected) : '';

  return (
    <InputsBox label={<SelectDateText date={selectedTxt} />} shouldOpen>
      <SelectDatePool
        selected={selected}
        setSelected={(v: string) => {
          setSelected(startMonthDateTextToDate(v));
        }}
        dates={getValidDatesFromStartMonths(startMonth)}
      />
    </InputsBox>
  );
});
