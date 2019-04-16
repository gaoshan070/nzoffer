import React from 'react';
import { Box } from '../../../../../styles';
import { observer } from 'mobx-react-lite';
import { InputsBox } from '../../../../PortalScreen/components/InputsBox';
import { SelectDateText } from './SelectDateText';
import { SelectDatePool } from './SelectDatePool';
import {
  getDateStr,
  getValidDatesFromEntryDates,
  startMonthDateTextToDate,
} from './date.utils';

// input data: ['31/12', '5/2']

export const HighSchoolSelectDate: React.FC<{
  selected: string;
  setSelected: (v: string) => void;
  entryDates: string[];
}> = observer(({ selected, setSelected, entryDates = ['31/12'] }) => {
  const selectedTxt = typeof selected === 'object' ? getDateStr(selected) : '';

  return (
    <InputsBox label={<SelectDateText date={selectedTxt} />} shouldOpen>
      <SelectDatePool
        selected={selected}
        setSelected={(v: string) => {
          setSelected(startMonthDateTextToDate(v));
        }}
        dates={getValidDatesFromEntryDates(entryDates)}
      />
    </InputsBox>
  );
});
