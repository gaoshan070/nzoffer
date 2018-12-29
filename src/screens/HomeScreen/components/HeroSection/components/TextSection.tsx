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
    <Text
      //@ts-ignore
      fontSize={['0.8rem', 2]}
      color="primary"
    >
      ( 新西兰站 )
    </Text>
    <Text color="lightBlue" fontSize={[2, 4]}>
      留学在线通道
    </Text>
  </Box>
);
