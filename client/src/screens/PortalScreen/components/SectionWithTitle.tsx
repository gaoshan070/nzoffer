import React from 'react';
import {
  Box,
  Text,
  Paragraph,
  Heading,
  CSSType,
} from '../../../rebase/components';

export const SectionWithTitle: React.FC<{
  title: string;
  innerBoxStyle?: CSSType;
}> = ({ title, innerBoxStyle, children }) => (
  <Box width={1} pt="xsmall" direction="column">
    {title}
    <Box
      width={1}
      mt="small"
      bg="white"
      direction="column"
      p="medium"
      gap="xxsmall"
      css={innerBoxStyle ? innerBoxStyle : ''}
    >
      {children}
    </Box>
  </Box>
);
