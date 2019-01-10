import React from 'react';
import {
  fontWeight,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
} from 'styled-system';
import { styled, css } from '../../styles/styledLib';
import Box from '../Box/Box';
import { IBox } from '../Box/Box.type';
import theme, {
  ThemeInterface,
} from '../../styles/theme';
import { getTransitionValue } from '../../styles/constants';
import { FlattenSimpleInterpolation } from 'styled-components';

export const BaseButton = styled(Box)(
  {
    appearance: 'none',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: 'inherit',
    textDecoration: 'none',
  },
  fontWeight,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
);

// @ts-ignore
BaseButton.defaultProps = {
  fontWeight: 'bold',
  m: 0,
  color: 'white',
  cursor: 'pointer',
  borderRadius: 3,
};

const shadowCSS = css`
  box-shadow: ${theme.shadows[0]};

  &:hover {
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14),
      0 1px 7px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -1px rgba(0, 0, 0, 0.2);
  }
`;

const ButtonHoverCSS = (
  shadowCSS: FlattenSimpleInterpolation,
) => css`
  ${shadowCSS};
  transition: all 0.3s;
  &:hover {
    opacity: 0.85;
  }

  &:active {
    transform: translate(2px, 2px);
  }

  &:active,
  &:focus {
    outline: none;
  }
`;

export const basePropsWithoutColor = (
  isNoShadow: boolean,
): Partial<IButton> => ({
  border: '0px',
  transition: getTransitionValue('all'),
  bg: 'primary',
  as: 'button',
  display: 'block',
  cursor: 'pointer',
  css: ButtonHoverCSS(isNoShadow ? css`` : shadowCSS),
});

export interface IButton extends IBox {
  text: string | React.ReactNode;
  isNoShadow?: boolean;
}

export const Button: React.FC<IButton> = ({
  text,
  css,
  isNoShadow,
  ...rest
}) => {
  const baseProps = basePropsWithoutColor(
    isNoShadow || false,
  );

  const newCSS = Object.assign({}, css, baseProps.css);

  return (
    <BaseButton
      {...baseProps}
      {...rest}
      {...newCSS}
      px="0.9rem"
      py={'1.2rem'}
    >
      {text}
    </BaseButton>
  );
};
