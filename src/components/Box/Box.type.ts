import * as CSS from 'csstype';
import { MouseEvent } from 'react';
import {
  FlattenInterpolation,
  ThemedStyledProps,
} from 'styled-components';
import {
  ITextProps,
  ITextRelatedTheme,
} from '../Text/Text.type';
import { ThemeInterface } from '../../styles/theme';

/* Theme Interface Start */
export interface IColors {
  colors: { [name: string]: string };
}

export interface IFontWeights {
  fontWeights: { [name: string]: number };
}

export interface IFontSize {
  fontSizes: string[];
}

export interface IBoxShadow {
  shadows: string[];
}
/* Theme Interface End */

export type NumberOrString = number | string | null;
export type Responsive =
  | NumberOrString
  | NumberOrString[];

export type IEventHandler = (
  event: MouseEvent<HTMLElement>,
) => void;

export interface InteractiveProps {
  onClick?: IEventHandler;
  onMouseOver?: IEventHandler;
  onMouseOut?: IEventHandler;
}

interface ISpace {
  m?: Responsive;
  mt?: Responsive;
  mr?: Responsive;
  mb?: Responsive;
  ml?: Responsive;
  mx?: Responsive;
  my?: Responsive;
  p?: Responsive;
  pt?: Responsive;
  pr?: Responsive;
  pb?: Responsive;
  pl?: Responsive;
  px?: Responsive;
  py?: Responsive;
}

interface IWidthAndHeight {
  width?: Responsive;
  height?: Responsive;
  maxHeight?: Responsive;
  minHeight?: Responsive;
  maxWidth?: Responsive;
  minWidth?: Responsive;
}

interface IFlex {
  alignItems?:
    | CSS.AlignItemsProperty
    | CSS.AlignItemsProperty[];
  justifyContent?:
    | CSS.JustifyContentProperty
    | CSS.JustifyContentProperty[];
  alignSelf?:
    | CSS.AlignSelfProperty
    | CSS.AlignSelfProperty[];
  flexDirection?:
    | CSS.FlexDirectionProperty
    | CSS.FlexDirectionProperty[];
  flexWrap?:
    | CSS.FlexWrapProperty
    | CSS.FlexWrapProperty[];
  flexGrow?: number;
}

export type TColor<
  T extends IColors
> = keyof T['colors'];

interface IBorders<T extends IColors> {
  border?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  borderRadius?: string | number;
  borderColor?: TColor<T>;
}

export interface IBoxProps<
  T extends ITextRelatedTheme
>
  extends ISpace,
    IWidthAndHeight,
    ITextProps<T>,
    IFlex,
    IBorders<T>,
    InteractiveProps {
  css?: TStyledCSS;
}

export type TStyledCSS = FlattenInterpolation<
  ThemedStyledProps<ThemeInterface, any>
>;

export interface IBox<T extends ITextRelatedTheme>
  extends IBoxProps<T> {
  zIndex?: CSS.ZIndexProperty;
  display?:
    | CSS.DisplayProperty
    | CSS.DisplayProperty[];

  bg?: TColor<T> | 'inherit' | CSS.ColorProperty;
  boxShadow?: NumberOrString;
  opacity?: NumberOrString;

  position?: CSS.PositionProperty;
  top?: NumberOrString;
  bottom?: NumberOrString;
  left?: NumberOrString;
  right?: NumberOrString;

  overflow?: CSS.OverflowProperty;

  cursor?: CSS.CursorProperty;
  transition?: CSS.TransitionProperty;
  transform?: CSS.TransformProperty;

  css?: TStyledCSS;
  as?: keyof JSX.IntrinsicElements;

  overflowX?: CSS.OverflowXProperty;
  overflowY?: CSS.OverflowYProperty;
}
