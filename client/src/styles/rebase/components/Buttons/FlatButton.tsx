import React from 'react';
import { getSafeCss, DEFAULT_SPACE } from '../../styles';
import { BaseBox } from '../Box/BaseBox';
import { IBaseBox } from '../Box/BaseBox.type';
import { getBaseButtonCSS, INoDefaultHoverCSS } from './shared';

export interface IFlatButton extends IBaseBox, INoDefaultHoverCSS {}

export const FlatButton: React.FC<IFlatButton> = ({
  noDefaultHoverCSS,
  children,
  css,
  ...rest
}) => (
  <BaseBox
    as="a"
    fontSize="inherit"
    px={DEFAULT_SPACE.xxSmall}
    color="primary"
    css={`
      ${getBaseButtonCSS(noDefaultHoverCSS)};
      ${getSafeCss(css)};
    `}
    {...rest}
  >
    {children}
  </BaseBox>
);
