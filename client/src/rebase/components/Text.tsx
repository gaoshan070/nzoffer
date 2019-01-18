import React from 'react';
import {
  css as styledCSS,
  FONT_SIZE,
  FontSizeType,
  getSafeCss,
  ThemeType,
} from '../styles';
import { IFontSpecType } from '../styles/theme/constants/fontSpecs';
import { BaseBox } from './Box/BaseBox';
import { IBaseBox } from './Box/BaseBox.type';

export interface IText extends IBaseBox {
  size?: FontSizeType;
}

export const getFontSpec = (key: keyof IFontSpecType) => ({
  size = 'body',
  theme,
}: IText & {
  theme: ThemeType;
}) => theme.fontSpecs[FONT_SIZE[size]][key];

export const Text: React.FC<IText> = ({ css, ...rest }) => (
  <BaseBox
    as="div"
    css={styledCSS`
      font-size: ${getFontSpec('size')};
      line-height: ${getFontSpec('lineHeight')};
      ${getSafeCss(css)};
    `}
    {...rest}
  />
);
