import { baseSpacing } from './base';

export const SPACES = {
  xxsmall: 0, // 8
  xsmall: 1, // 16
  small: 2, // 24
  medium: 3, // 32
  large: 4, // 48
  xlarge: 5, // 64
  xxlarge: 6, // 96
  xxxlarge: 7, // 128
  xxxxlarge: 8, // 256
};

export const spaces = [
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
