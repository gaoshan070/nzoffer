import * as CSS from 'csstype';
import React from 'react';
import { CSSObject, ThemedCssFunction } from 'styled-components';
import {
  BoxShadowType,
  ColorType,
  FontSizeType,
  FontWeightType,
  SpaceType,
  ThemeType,
} from '../../styles';

export type NumberOrString = number | string | null;
export type Responsive = NumberOrString | NumberOrString[];
export type SingleOrArray<T> = T | T[];
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type Space = SingleOrArray<SpaceType>;

export interface ISpace {
  m?: Space;
  mt?: Space;
  mr?: Space;
  mb?: Space;
  ml?: Space;
  mx?: Space;
  my?: Space;
  p?: Space;
  pt?: Space;
  pr?: Space;
  pb?: Space;
  pl?: Space;
  px?: Space;
  py?: Space;
}

export interface IWidthAndHeight {
  width?: Responsive;
  height?: Responsive;
  maxHeight?: Responsive;
  minHeight?: Responsive;
  maxWidth?: Responsive;
  minWidth?: Responsive;
  zIndex?: CSS.ZIndexProperty;
}

type SimpleJustifyContentCSS =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around';

type SimpleAlignItemsCSS =
  | 'start'
  | 'end'
  | 'center'
  | 'baseline'
  | 'stretch';

export interface IFlex {
  direction?: SingleOrArray<CSS.FlexDirectionProperty>;
  justifyContent?: SingleOrArray<SimpleJustifyContentCSS>;
  alignItems?: SingleOrArray<SimpleAlignItemsCSS>;
  alignSelf?: SingleOrArray<SimpleAlignItemsCSS>;
  flexWrap?: SingleOrArray<CSS.FlexWrapProperty>;
  flexGrow?: number | number[];
  flex?: SingleOrArray<CSS.FlexProperty<number>>;
}

export interface IBorder {
  border?: Responsive;
  borderBottom?: Responsive;
  borderLeft?: Responsive;
  borderRight?: Responsive;
  borderTop?: Responsive;
  borderColor?: ColorType;
  borderRadius?: number | string;
}

export interface IColor {
  color?: ColorType;
  bg?: ColorType;
  boxShadow?: BoxShadowType;
  opacity?: number | number[];
}

// display has a string type which prevents intellisense
// but it's valid according the rules.
// but i feel like we don't need that, so I removed it.
// source: https://github.com/frenic/csstype/issues/64
type DisplayPropertyWithoutString =
  | CSS.Globals
  | CSS.DisplayOutside
  | CSS.DisplayInside
  | CSS.DisplayInternal
  | CSS.DisplayLegacy
  | 'contents'
  | 'list-item'
  | 'none';
export interface IPosition {
  display?: SingleOrArray<DisplayPropertyWithoutString>;
  position?: SingleOrArray<CSS.PositionProperty>;
  top?: SingleOrArray<CSS.TopProperty<string>>;
  bottom?: SingleOrArray<CSS.BottomProperty<string>>;
  left?: SingleOrArray<CSS.LeftProperty<string>>;
  right?: SingleOrArray<CSS.RightProperty<string>>;
}

export interface IOverflow {
  overflow?: SingleOrArray<CSS.OverflowProperty>;
  overflowX?: SingleOrArray<CSS.OverflowXProperty>;
  overflowY?: SingleOrArray<CSS.OverflowYProperty>;
}

export type CSSType =
  | CSSObject
  | ReturnType<ThemedCssFunction<ThemeType>>
  | string;

export interface IStyledComponentsProp {
  css?: CSSType;
  as?: keyof JSX.IntrinsicElements;
}

export interface ITextCSS {
  textAlign?: SingleOrArray<CSS.TextAlignProperty>;
  fontWeight?: SingleOrArray<FontWeightType>;
  fontSize?: SingleOrArray<FontSizeType | 'inherit'>;
}

export interface IAnimation {
  cursor?: CSS.CursorProperty;
  transform?: CSS.TransformProperty;
  transition?: CSS.TransitionProperty;
}

export interface IEvents {
  onClick?(e: React.MouseEvent): void;
}

export interface IBaseBox
  extends ISpace,
    IWidthAndHeight,
    IFlex,
    IBorder,
    IColor,
    IPosition,
    IOverflow,
    IStyledComponentsProp,
    ITextCSS,
    IAnimation,
    IEvents {}
