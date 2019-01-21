import React from 'react';
import { getSafeCss, SPACE } from '../../styles';
import { BaseBox } from '../Box/BaseBox';
import { IBaseBox } from '../Box/BaseBox.type';
import { getBaseButtonCSS } from './baseButtonCSS';
import { INoDefaultHoverCSS } from './Button';

interface IFlatButton extends IBaseBox, INoDefaultHoverCSS {}

export const FlatButton: React.FC<IFlatButton> = ({
  noDefaultHoverCSS,
  children,
  css,
  ...rest
}) => (
  <BaseBox
    as="a"
    fontSize="inherit"
    px={SPACE.xxSmall}
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
