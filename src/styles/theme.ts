import { Theme as RebassTheme } from 'rebass';
import {
  IColors,
  IFontWeights,
  IFontSize,
} from '../components/Box/Box.type';

export interface ThemeInterface
  extends RebassTheme,
    IColors,
    IFontWeights,
    IFontSize {
  breakpoints: string[];
  fontSizes: string[];
  colors: {
    primary: string;
    background: string;
    white1: string;
    grey: string;
    lightBlue: string;
    green: string;
  };
  space: string[];
  fonts: {};
  fontWeights: {
    thin: number;
    light: number;
    regular: number;
    medium: number;
    bold: number;
    black: number;
  };
  lineHeights: number[];
  letterSpacings: number[];
  shadows: string[];
  borders: {};
  radii: string[];
  opacity: number[];
}

export type TColors = keyof ThemeInterface['colors'];

const theme: ThemeInterface = {
  breakpoints: ['769px', '1024px', '1216px'],
  fontSizes: [
    '0.75rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2rem',
    '2.5rem',
    '3rem',
  ],
  colors: {
    primary: '#E75B41',
    background: '#EDEEEF',
    white1: '#FEFFFF',
    grey: '#E0E1E2',
    lightBlue: '#3CB1C4',
    green: '#2ecc71',
  },
  space: [
    '0.125rem',
    '0.25rem',
    '0.4rem',
    '0.7rem',
    '1rem',
    '1.5rem',
    '2rem',
    '3rem',
    '4rem',
    '5rem',
    '7rem',
    '10rem',
    '13rem',
    '17rem',
    '20rem',
  ],
  fonts: {},
  fontWeights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
  lineHeights: [],
  letterSpacings: [],
  shadows: [
    '0px 1px 1px 1px rgba(0, 0, 0, 0.10)',
    '0px 0px 3px 3px rgba(0, 0, 0, .10)',
    '0 2px 2px rgba(0, 0, 0.1, 0.1)', // for drop down
  ],
  borders: {
    primary: '1px solid #E75B41',
  },
  radii: [],
  opacity: [],
};

export default theme;
