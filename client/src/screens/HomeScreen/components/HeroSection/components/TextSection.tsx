import React, { memo } from 'react';
import { Box, FONT_SIZE, SPACE } from '../../../../../styles';

export const TextSection: React.FC = memo(() => (
  <Box
    direction="column"
    ml={[SPACE.xxxSmall, SPACE.xSmall]}
    justifyContent="between"
    height="100%"
  >
    <Box
      mt={['4px', '8px']}
      fontSize={['1rem', '1.7rem']}
      fontWeight="bold"
      color="#0abde3"
    >
      ( 新西兰站 )
    </Box>
    <Box
      color="white"
      fontSize={['20px', FONT_SIZE.pageHeading]}
      fontWeight={['bold', 'bold', 'inherit']}
    >
      留学在线通道
    </Box>
  </Box>
));
