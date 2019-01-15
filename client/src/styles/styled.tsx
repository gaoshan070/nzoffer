import React from 'react';
import * as styledComponents from 'styled-components';
import { prop, ifProp } from 'styled-tools';
import theme, { ThemeInterface } from './theme';
import { TCSS } from '../components/Box/Box.type';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ThemeInterface
>;

const ThemeProvider: React.FC<{
  // tslint:disable-next-line:no-any
  children: React.ReactElement<any>;
}> = ({ children }) => (
  <styledComponents.ThemeProvider theme={theme}>
    {children}
  </styledComponents.ThemeProvider>
);

export const whenSmallScreen = (toCSS: TCSS) =>
  css`
    @media only screen and (max-width: ${theme
        .breakpoints[0]}) {
      ${toCSS};
    }
  `;

export {
  styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  prop,
  ifProp,
};
