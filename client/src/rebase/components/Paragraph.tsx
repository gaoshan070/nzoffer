import React from 'react';
import { css as styledCSS, getSafeCss } from '../styles';
import { getFontSpec, IText, Text } from './Text';

export const Paragraph: React.FC<IText> = ({ css, ...rest }) => (
  <Text
    as="p"
    css={styledCSS`
      max-width: ${getFontSpec('maxWidth')};
      ${getSafeCss(css)};
    `}
    {...rest}
  />
);
