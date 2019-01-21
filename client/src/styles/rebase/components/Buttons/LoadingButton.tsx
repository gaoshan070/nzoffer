import React from 'react';
import { getSafeCss, SPACE } from '../../styles';
import { BaseBox } from '../Box/BaseBox';
import { IBaseBox } from '../Box/BaseBox.type';
import { Image } from '../Image';
import { getBaseButtonCSS } from './baseButtonCSS';
import { INoDefaultHoverCSS } from './Button';
import threeDots from './threeDots.svg';

export interface ILoadingButton extends IBaseBox, INoDefaultHoverCSS {
  isLoading?: boolean;
}

const baseCSS = `
  text-transform: uppercase;
  overflow: hidden;
  position: relative;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`;

export const LoadingButton: React.FC<ILoadingButton> = ({
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
      <Image
        position="absolute"
        left="50%"
        top="50%"
        src={threeDots}
        alt="loading spinner"
        height="8px"
        opacity={isLoading ? 1 : 0}
        transform={
          isLoading
            ? 'translateX(-50%) translateY(-50%) scale(1)'
            : 'translateX(-50%) translateY(-50%) scale(3)'
        }
      />
      <BaseBox
        opacity={isLoading ? 0 : 1}
        transform={isLoading ? 'scale(0.3)' : 'scale(1)'}
      >
        {children}
      </BaseBox>
    </BaseBox>
  );
};
