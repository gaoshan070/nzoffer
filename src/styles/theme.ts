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
  };
  space: string[];
  fonts: {};
  fontWeights: number[];
  lineHeights: number[];
  letterSpacings: number[];
  shadows: string[];
  borders: {};
  radii: string[];
  opacity: number[];
}

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
    '0.125em',
    '0.25em',
    '0.4em',
    '0.7em',
    '1em',
    '1.5em',
    '2em',
    '3em',
    '4em',
    '5em',
    '7em',
    '10em',
    '13em',
    '17em',
    '20em',
  ],
  fonts: {},
  fontWeights: [300, 400, 500, 600, 700],
  lineHeights: [],
  letterSpacings: [],
  shadows: [
    '0px 1px 1px 1px rgba(0, 0, 0, 0.15)',
    '0px 0px 5px 4px rgba(0, 0, 0, .15)',
    '0 4px 16px rgba(0, 0, 0.25, 0.4)', // for drop down
  ],
  borders: {
    primary: '1px solid #E75B41',
  },
  radii: [],
  opacity: [],
};

export default theme;
