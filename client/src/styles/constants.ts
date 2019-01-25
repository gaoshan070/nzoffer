export const fullscreenCSS = `
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const getTransitionValue = (
  propertyNames: string = 'transform',
) =>
  `${propertyNames} 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63)`;

export const colors = {
  primary: '#E75B41',
  background: '#EDEEEF',
  white1: '#FEFFFF',
  grey: '#E0E1E2',
  lightBlue: '#3CB1C4',
  green: '#2ecc71',
  grey1: '#596275',
  fontGrey: '#88898A',

  red: 'red',
  greyLine: '#DCDDDE',
  transparent: 'transparent',
};

export const COLORS = { ...colors };
