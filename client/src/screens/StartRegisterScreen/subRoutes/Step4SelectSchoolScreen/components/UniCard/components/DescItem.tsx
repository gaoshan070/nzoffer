import React from 'react';
import { Box, Text } from '../../../../../../../styles';
export const DescItem: React.FC<{
  title: string;
  text: string | number | JSX.Element;
  my?: string;
}> = ({ title, text, my }) => (
  <Box width={1} justifyContent="center" alignItems="center" my={my || '2px'}>
    <Text
      width={0.5}
      justifyContent="end"
      color="#34495e"
      textAlign="right"
      alignItems="center"
    >
      {`${title}：`}
    </Text>
    <Text
      display="flex"
      width={0.5}
      pl="8px"
      justifyContent="start"
      color="#34495e"
      alignItems="center"
    >
      &nbsp;&nbsp;
      {text}
    </Text>
  </Box>
);
