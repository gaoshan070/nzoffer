import React from 'react';
import { getFontSpecStyle, IText, Text } from './Text';

export const Paragraph: React.FC<IText> = ({
  size,
  noDefaultLineHeight = false,
  ...rest
}) => (
  <Text
    as="p"
    {...getFontSpecStyle(noDefaultLineHeight, true, size)}
    {...rest}
  />
);
