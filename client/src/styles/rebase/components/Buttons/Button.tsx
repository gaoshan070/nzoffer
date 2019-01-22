import React from 'react';
import { getSafeCss, DEFAULT_SPACE } from '../../styles';
import { BaseBox } from '../Box/BaseBox';
import { IBaseBox } from '../Box/BaseBox.type';
import {
  baseNonFlatButtonCSS,
  getBaseButtonCSS,
  INoDefaultHoverCSS,
} from './shared';

export interface IButton extends IBaseBox, INoDefaultHoverCSS {
  isLoading?: boolean;
}

export const Button: React.FC<IButton> = ({
  isLoading,
  noDefaultHoverCSS,
  children,
  css,
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
      fontSize="bodyHeading"
      px={DEFAULT_SPACE.small}
      minHeight="44px"
      maxHeight="44px"
      bg="primary"
      color="white"
      css={cssToAdd}
      {...rest}
    >
      {children}
    </BaseBox>
  );
};
