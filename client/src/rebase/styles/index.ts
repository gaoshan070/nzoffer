import { FONT_SIZE } from './theme/constants/fontSpecs';
import { SPACES } from './theme/constants/spaces';
import { theme } from './theme/theme';

export type ThemeType = typeof theme;
export type SpaceType = keyof typeof SPACES;
export type FontSizeType = keyof typeof FONT_SIZE;
export type GradientType = keyof ThemeType['gradients'];
export type ColorType =
  | keyof ThemeType['colors']
  | 'inherit';
export type FontWeightType = keyof ThemeType['fontWeights'];
export type BoxShadowType = number | number[];

export {
  FONT_SIZE,
  fontSpecs,
} from './theme/constants/fontSpecs';
export { SPACES } from './theme/constants/spaces';
export { SIZES } from './theme/constants/sizes';
export { theme } from './theme/theme';

export {
  styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} from './styled';

export {
  getTransitionValue,
  getSafeValue,
  getSafeCss,
} from './utils';
