import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Text } from '../../../../../styles';

export const SelectDateText: React.FC<{ date: string }> = observer(
  ({ date }) => (
    <Box width={1} justifyContent="between">
      <Text>计划入读时间：</Text>
      <Text mr="8px">{date}</Text>
    </Box>
  ),
);
