import React from 'react';
import { Box } from '../../../../../styles';
import { observer } from 'mobx-react-lite';
import { InputsBox } from '../../../../PortalScreen/components/InputsBox';
import { SelectDateText } from './SelectDateText';
import { SelectDatePool } from './SelectDatePool';

export const UniSelectDate: React.FC<{
  startMonth?: number[];
}> = observer(({ startMonth = [1] }) => {
  return (
    <InputsBox
      label={<SelectDateText date={startMonth[0].toString()} />}
      shouldOpen
    >
      <SelectDatePool selected="1" dates={['1', '2', '3']} />
    </InputsBox>
  );
});
