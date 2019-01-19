import { baseSpacing } from './base';

export const SPACES = {
  none: 0,
  xxsmall: 1, // 8
  xsmall: 2, // 16
  small: 3, // 24
  medium: 4, // 32
  large: 5, // 48
  xlarge: 6, // 64
  xxlarge: 7, // 96
  xxxlarge: 8, // 128
  xxxxlarge: 9, // 256
};

export const spaces = [
  0,
  baseSpacing, // xxsmall 8px
  baseSpacing * 2, // xsmall 16px
  baseSpacing * 3, // small 24px
  baseSpacing * 4, // medium 32px
  baseSpacing * 6, // large 48px
  baseSpacing * 8, // xlarge 64px
  baseSpacing * 12, // xxlarge 96px
  baseSpacing * 16, // xxxlarge 128px
  baseSpacing * 32, // xxxxlarge 256px
];
