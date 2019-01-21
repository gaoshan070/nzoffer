import React from 'react';
import { getSafeCss, SPACE } from '../../styles';
import { BaseBox } from '../Box/BaseBox';
import { IBaseBox } from '../Box/BaseBox.type';
import { getBaseButtonCSS } from './baseButtonCSS';

export interface INoDefaultHoverCSS {
  noDefaultHoverCSS?: boolean;
}

export interface IButton extends IBaseBox, INoDefaultHoverCSS {
  isLoading?: boolean;
}

const baseCSS = `
  text-transform: uppercase;
  overflow: hidden;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`;

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
    ${baseCSS};
    ${getSafeCss(css)};
  `;

  return (
    <BaseBox
      as="button"
      border={0}
      borderColor="transparent"
      borderRadius={0}
      fontSize="bodyHeading"
      px={SPACE.small}
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
