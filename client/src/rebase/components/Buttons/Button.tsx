import React from 'react';
import { getSafeCss } from '../../styles';
import { BaseBox } from '../Box/BaseBox';
import { IBaseBox } from '../Box/BaseBox.type';
import { Image } from '../Image';
import { baseButtonCSS } from './baseButtonCSS';
import threeDots from './threeDots.svg';

export interface IButton extends IBaseBox {
  isLoading?: boolean;
}

const baseCSS = `
  text-transform: uppercase;
  overflow: hidden;
  position: relative;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`;

export const Button: React.FC<IButton> = ({
  isLoading,
  children,
  css,
  ...rest
}) => {
  const cssToAdd = `
    ${isLoading ? 'pointer-events: none' : ''};
    ${baseButtonCSS};
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
      px="small"
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
