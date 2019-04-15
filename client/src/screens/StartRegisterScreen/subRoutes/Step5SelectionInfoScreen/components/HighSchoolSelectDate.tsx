import React from 'react';
import { Box } from '../../../../../styles';
import { observer } from 'mobx-react-lite';
import { InputsBox } from '../../../../PortalScreen/components/InputsBox';
import { SelectDateText } from './SelectDateText';
import { SelectDatePool } from './SelectDatePool';

// input data: ['31/12', '5/2']

export const HighSchoolSelectDate: React.FC<{
  entryDates: string[];
}> = observer(({ entryDates }) => {
  return (
    <InputsBox label={<SelectDateText date={entryDates[0]} />} shouldOpen>
      <SelectDatePool
        selected="2019/1"
        dates={['2019/1', '2019/2', '2019/3']}
      />
    </InputsBox>
  );
});
