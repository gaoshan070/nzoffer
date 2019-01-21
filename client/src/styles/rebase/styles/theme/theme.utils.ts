import { ITheme, theme } from './theme';

export const createTheme = ({
  breakpoints,
  fontSpecs,
  fontSizes,
  space,
  colors,
  fontWeights,
  borders,
  radii,
  shadows,
  gradients,
}: Partial<ITheme>): ITheme => ({
  breakpoints: breakpoints || theme.breakpoints,
  fontSpecs: fontSpecs || theme.fontSpecs,
  fontSizes: fontSizes || theme.fontSizes,
  space: space || theme.space,
  colors: colors || theme.colors,
  fontWeights: fontWeights || theme.fontWeights,
  borders: borders || theme.borders,
  radii: radii || theme.radii,
  shadows: shadows || theme.shadows,
  gradients: gradients || theme.gradients,
});
