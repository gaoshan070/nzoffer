import React from 'react';
import {
  Box,
  Text,
} from '../../../../../rebase/components';

export const TextSection = () => (
  <Box
    direction="column"
    ml="small"
    justifyContent="around"
    height="100%"
  >
    <Box
      // @ts-ignore
      fontSize={['1rem', '1.7rem']}
      fontWeight="bold"
      // @ts-ignore
      color="#0abde3"
      // @ts-ignore
      pt={[0, 'xxsmall']}
    >
      ( 新西兰站 )
    </Box>
    <Box
      color="white"
      fontSize={[
        'bodyHeading',
        'sectionHeading',
        'pageHeading',
      ]}
    >
      留学在线通道
    </Box>
  </Box>
);
