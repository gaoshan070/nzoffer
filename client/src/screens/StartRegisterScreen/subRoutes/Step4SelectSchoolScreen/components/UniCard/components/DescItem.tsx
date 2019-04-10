import React from 'react';
import { Box, Text } from '../../../../../../../styles';
export const DescItem: React.FC<{
  title: string;
  text: string | number;
}> = ({ title, text }) => (
  <Box width={1} justifyContent="center" alignItems="center" my="2px">
    <Text width={0.5} justifyContent="end" color="black" textAlign="right">
      {`${title}：`}
    </Text>
    <Text width={0.5} pl="8px" justifyContent="start" color="#2d3436">
      {text}
    </Text>
  </Box>
);
