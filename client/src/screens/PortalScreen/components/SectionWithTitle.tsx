import React from 'react';
import {
  Box,
  Text,
  Paragraph,
  Heading,
  CSSType,
  SPACE,
  COLORS,
} from '../../../styles';
import { observer } from 'mobx-react-lite';

export const SectionWithTitle: React.FC<{
  title: string;
  innerBoxStyle?: CSSType;
}> = observer(({ title, innerBoxStyle, children }) => (
  <Box width={1} pt={SPACE.xSmall} direction="column">
    <span style={{ color: COLORS.primary, fontSize: '18px', marginTop: '8px' }}>
      {title}
    </span>
    <Box
      width={1}
      mt={SPACE.xxSmall}
      height="100%"
      bg="white"
      direction="column"
      p={SPACE.xSmall}
      gap={SPACE.xxxSmall}
      css={innerBoxStyle ? innerBoxStyle : ''}
    >
      {children}
    </Box>
  </Box>
));
