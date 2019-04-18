import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box, COLORS, Text } from '../../../../../styles';
import { startMonthDateTextToDate } from './date.utils';

export const SelectDatePool: React.FC<{
  selected: string;
  setSelected: (v: string) => void;
  dates: string[];
}> = observer(({ selected, setSelected, dates }) => (
  <Box width={1} direction="column" mt="16px" gap="8px">
    {dates.map(date => (
      <Box
        key={date}
        width={1}
        justifyContent="end"
        pr="39px"
        color={selected === date ? COLORS.primary : '#636e72'}
        css={{
          cursor: 'pointer',

          '&:hover': {
            color: COLORS.primary,
          },
        }}
        onClick={() => {
          setSelected(date);
        }}
      >
        {date}
      </Box>
    ))}
  </Box>
));
