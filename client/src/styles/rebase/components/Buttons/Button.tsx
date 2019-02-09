import React from 'react';
import {
  DEFAULT_SPACE,
  getSafeCss,
  DEFAULT_FONT_SIZE,
} from '../../styles';
import { getRefProp } from '../../utils/utils';
import { BaseBox } from '../Box/BaseBox';
import { IBaseBoxWithTakeRef } from '../Box/BaseBox.type';
import {
  baseNonFlatButtonCSS,
  getBaseButtonCSS,
  INoDefaultHoverCSS,
} from './shared';

export interface IButton
  extends IBaseBoxWithTakeRef,
    INoDefaultHoverCSS {
  isLoading?: boolean;
}

export const Button: React.FC<IButton> = ({
  isLoading,
  noDefaultHoverCSS,
  children,
  css,
  takeRef,
  ...rest
}) => {
  const cssToAdd = `
    ${isLoading ? 'pointer-events: none' : ''};
    ${getBaseButtonCSS(noDefaultHoverCSS)};
    ${baseNonFlatButtonCSS};
    ${getSafeCss(css)};
  `;

  return (
    <BaseBox
      as="button"
      border={0}
      borderColor="transparent"
      borderRadius={0}
      fontSize={DEFAULT_FONT_SIZE.body}
      px={DEFAULT_SPACE.small}
      minHeight="44px"
      maxHeight="44px"
      bg="primary"
      color="white"
      css={cssToAdd}
      {...getRefProp(takeRef)}
      {...rest}
    >
      {children}
    </BaseBox>
  );
};
