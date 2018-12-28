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
import { ThemeInterface } from '../../styles/theme';

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

BaseButton.defaultProps = {
  fontWeight: 'bold',
  m: 0,
  px: 4,
  py: 3,
  color: 'white',
  cursor: 'pointer',
  borderRadius: 3,
};

const ButtonHoverCSS = css`
  &:hover {
    opacity: 0.95;
  }

  &:active {
    transform: translate(2px, 2px);
  }

  &:active,
  &:focus {
    outline: none;
  }
`;

export const basePropsWithoutColor: Partial<
  IButton<ThemeInterface>
> = {
  border: '0px',
  transition: 'all 0.3s ease',
  bg: 'primary',
  as: 'button',
  display: 'block',
  css: ButtonHoverCSS,
};

export interface IButton<T extends ThemeInterface>
  extends IBox<T> {
  text: string | React.ReactNode;
}

export const Button: React.FC<
  IButton<ThemeInterface>
> = ({ text, css, ...rest }) => {
  const newCSS = Object.assign(
    {},
    css,
    basePropsWithoutColor.css,
  );

  return (
    <BaseButton
      {...basePropsWithoutColor}
      {...rest}
      {...newCSS}
    >
      {text}
    </BaseButton>
  );
};
