import * as CSS from 'csstype';
import React from 'react';
import {
  IColors,
  IFontWeights,
  IFontSize,
  TColor,
  TStyledCSS,
  NumberOrString,
} from '../Box/Box.type';

export interface ITextRelatedTheme
  extends IColors,
    IFontWeights,
    IFontSize {}

export interface ITextProps<
  T extends ITextRelatedTheme
> {
  color?: CSS.ColorProperty | TColor<T>;
  textAlign?: CSS.TextAlignProperty;
  fontWeight?:
    | keyof T['fontWeights']
    | keyof T['fontWeights'][];
  fontSize?: NumberOrString | NumberOrString[];
}

export interface IText<T extends ITextRelatedTheme>
  extends ITextProps<T> {
  css?: TStyledCSS;
}
