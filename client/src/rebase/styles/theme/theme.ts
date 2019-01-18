// [Key]	        [Type]	          [Description]
// breakpoints	  Array	            Array of viewport widths to use for min-width media queries
// fontSizes	    Array	            Array of numbers to use as a typographic scale
// colors	        Object	          Color names that can be used in color, bg, and borderColor props
// space	        Array	            Array of numbers for use as margin and pixel values
// fonts	        Array or Object	  Values for the fontFamily prop
// fontWeights	  Array or Object	  Values for fontWeight prop
// lineHeights	  Array or Object	  Values for lineHeight prop
// letterSpacings	Array or Object	  Values for letterSpacing prop
// shadows	      Array or Object	  Values for boxShadow prop
// borders	      Array or Object	  Values for border props
// radii	        Array or Object	  Values for borderRadius props
// opacity	      Array or Object	  Values for opacity props
import { fontSpecs } from './constants/fontSpecs';
import { spaces } from './constants/spaces';

export const theme = {
  breakpoints: [768, 1024],
  fontSpecs: fontSpecs,
  fontSizes: fontSpecs.map(spec => spec.size),
  space: spaces,
  colors: {
    gunmetal: '#2E333A',
    mirage: '#191F28',
    cinder: '#222831',
    fiord: '#4A5762',
    riverbed: '#454E57',

    bali: '#8497A5',
    bayoux: '#5C707F',
    hoki: '#677886',
    iron: '#B5B7B9',
    concrete: '#D1CECE',

    athens: '#EDF0F2',
    statement: '#F4FBFC',
    white: '#FFFFFF',
    white50: 'rgba(255, 255, 255, 0.5)',
    white80: 'rgba(255, 255, 255, 0.8)',
    black50: 'rbga(0, 0, 0, 0.5)',
    colorBlack70: 'rgba(0, 0, 0, 0.7)',

    pacific: '#07A3C8',
    primary: '#2CAACA', //pelorous
    darkPelorous: '#279AB7',
    turquoise: '#33CCCC',
    carmine: '#F24C4C',
    fireengine: '#F24C4C',
    red: '#FC7B7B',
    orange: '#FF965D',
    green: '#23C373',

    gold: '#FAC052',

    grey5: '#585858',
    grey4: '#939393',
    grey3: '#AFAFAF',
    grey2: '#DADADA',
    grey1: '#F9F9F9',

    greyLine: '#F0F0F0',
    transparent: 'transparent',
  },
  fontWeights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
  borders: [0, '1px solid'],
  radii: ['4px'],
  shadows: [
    '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)',
    '0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3)',
    '0 8px 17px 2px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.2)',
    '0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -7px rgba(0,0,0,0.2)',
    '0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2)',

    '0px 1px 2px rgba(0,0,0,0.20)',
    '0px 2px 4px rgba(0,0,0,0.20)',
    '0px 4px 8px rgba(0,0,0,0.20)',
    '0px 8px 16px rgba(0,0,0,0.20)',
    '0px 12px 24px rgba(0,0,0,0.20)',
  ],
  gradients: {
    backgroundGradient:
      'linear-gradient(to bottom right, #33CCCC, #07A3C8)',
    buttonGradient: 'linear-gradient(to right, #FFB58D, #F58F8F)',
    adGradient: 'linear-gradient(to bottom, #FFC138, #FF9729)',
  },
};
