import { Theme as RebassTheme } from 'rebass';

export interface ThemeInterface extends RebassTheme {
  breakpoints: string[];
  fontSizes: string[];
  colors: {
    primary: string;
    background: string;
    white1: string;
    grey: string;
    lightBlue: string;
    green: string;
    grey1: string;
    fontGrey: string;
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
    grey1: '#596275',
    fontGrey: '#88898A',
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
    '24rem',
    '28rem',
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
    '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)',
    '0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3)',
    '0 8px 17px 2px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.2)',
    '0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -7px rgba(0,0,0,0.2)',
    '0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2)',
  ],
  borders: {
    primary: '1px solid #E75B41',
  },
  radii: [],
  opacity: [],
};

export default theme;
