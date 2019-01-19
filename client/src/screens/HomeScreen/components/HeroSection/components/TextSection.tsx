import React from 'react';
import {
  Box,
  Text,
} from '../../../../../rebase/components';

export const TextSection = () => (
  <Box
    direction="column"
    ml="small"
    justifyContent="between"
    height="100%"
  >
    <Text fontSize={'body'} color="primary">
      ( 新西兰站 )
    </Text>
    <Text
      color="lightBlue"
      fontSize={['sectionHeading', 'bodyHeading']}
    >
      留学在线通道
    </Text>
  </Box>
);
