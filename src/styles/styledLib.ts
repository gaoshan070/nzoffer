import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import { prop, ifProp } from 'styled-tools';
import theme, { ThemeInterface } from './theme';
import { TCSS } from '../components/Box/Box.type';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<
  ThemeInterface
>;

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
