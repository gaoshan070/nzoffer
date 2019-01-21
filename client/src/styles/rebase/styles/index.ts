import { Responsive } from '../components';
import { theme } from './theme/theme';

export type ThemeType = typeof theme;
export type FontSizeType = Responsive;
export type GradientType = keyof ThemeType['gradients'];
export type ColorType = string | string[];
export type FontWeightType = keyof ThemeType['fontWeights'];
export type BoxShadowType = number | number[];

export { FONT_SIZE, fontSpecs } from './theme/constants/fontSpecs';
export { SPACE } from './theme/constants/spaces';
export { SIZE } from './theme/constants/sizes';
export { COLORS, createColorIndex } from './theme/constants/colors';
export { theme } from './theme/theme';
export * from './theme/theme.utils';

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
