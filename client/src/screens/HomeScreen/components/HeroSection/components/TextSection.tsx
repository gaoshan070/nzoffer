import React from 'react';
import {
  Box,
  FONT_SIZE,
  SPACE,
} from '../../../../../styles';

export const TextSection = () => (
  <Box
    direction="column"
    ml={SPACE.small}
    justifyContent="around"
    height="100%"
  >
    <Box
      fontSize={['1rem', '1.7rem']}
      fontWeight="bold"
      color="#0abde3"
      pt={[0, SPACE.xxSmall]}
    >
      ( 新西兰站 )
    </Box>
    <Box
      color="white"
      fontSize={[
        FONT_SIZE.bodyHeading,
        FONT_SIZE.sectionHeading,
        FONT_SIZE.pageHeading,
      ]}
    >
      留学在线通道
    </Box>
  </Box>
);
