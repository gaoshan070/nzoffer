import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box, COLORS, Text } from '../../../../../styles';

export const SelectDatePool: React.FC<{
  selected: string;
  dates: string[];
}> = observer(({ selected, dates }) => (
  <Box width={1} direction="column" mt="-16px" gap="8px">
    {dates.map(date => (
      <Box
        key={date}
        width={1}
        justifyContent="end"
        pr="39px"
        color={selected === date ? COLORS.primary : '#636e72'}
        css={{
          '&:hover': {
            color: COLORS.primary,
            cursor: 'pointer',
          },
        }}
      >
        {date}
      </Box>
    ))}
  </Box>
));
