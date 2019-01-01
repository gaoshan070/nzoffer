import React from 'react';
import Text from '../../../../../components/Text/Text';
import Box from '../../../../../components/Box/Box';

export const TextSection = () => (
  <Box
    flexDirection="column"
    ml={3}
    justifyContent="space-between"
    height="100%"
  >
    <Text fontSize={[1, 1]} color="primary">
      ( 新西兰站 )
    </Text>
    <Text color="lightBlue" fontSize={[3, 6]}>
      留学在线通道
    </Text>
  </Box>
);
