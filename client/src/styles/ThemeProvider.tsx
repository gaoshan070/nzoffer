import React from 'react';
import {
  createTheme,
  createColorIndex,
} from './rebase/styles';
import { colors } from './constants';

export const myTheme = createTheme({
  colors,
});

export const OCOLORS = createColorIndex(colors);
