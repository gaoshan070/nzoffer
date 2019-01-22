import React from 'react';
import {
  Box,
  Text,
  Paragraph,
  Heading,
  CSSType,
  SPACE,
} from '../../../styles';

export const SectionWithTitle: React.FC<{
  title: string;
  innerBoxStyle?: CSSType;
}> = ({ title, innerBoxStyle, children }) => (
  <Box width={1} pt={SPACE.xSmall} direction="column">
    {title}
    <Box
      width={1}
      mt={SPACE.small}
      bg="white"
      direction="column"
      p={SPACE.medium}
      gap={SPACE.xxSmall}
      css={innerBoxStyle ? innerBoxStyle : ''}
    >
      {children}
    </Box>
  </Box>
);
