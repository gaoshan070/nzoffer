import React from 'react';
import { getSafeCss, SPACES } from '../../styles';
import { BaseBox } from '../Box/BaseBox';
import { IBaseBox } from '../Box/BaseBox.type';
import { baseButtonCSS } from './baseButtonCSS';

export const FlatButton: React.FC<IBaseBox> = ({
  children,
  css,
  ...rest
}) => (
  <BaseBox
    as="a"
    fontSize="inherit"
    px={SPACES.xxsmall}
    color="primary"
    css={`
      ${baseButtonCSS};
      ${getSafeCss(css)};
    `}
    {...rest}
  >
    {children}
  </BaseBox>
);
