import React from 'react';
import { Box } from '../../../../../styles';
import { observer } from 'mobx-react-lite';
import { InputsBox } from '../../../../PortalScreen/components/InputsBox';
import { SelectDateText } from './SelectDateText';

export const UniSelectDate: React.FC<{
  startMonth?: number[];
}> = observer(({ startMonth = [1] }) => {
  return (
    <InputsBox
      label={<SelectDateText date={startMonth[0].toString()} />}
      shouldOpen
    >
      <Box>a</Box>
    </InputsBox>
  );
});
