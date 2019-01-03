import * as CSS from 'csstype';
import React, { MouseEvent } from 'react';
import {
  Interpolation,
  CSSObject,
  ThemedStyledProps,
} from 'styled-components';
import { ITextProps } from '../Text/Text.type';
import {
  ThemeInterface,
  TColors,
} from '../../styles/theme';

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
  onMouseEnter?: IEventHandler;
  onMouseLeave?: IEventHandler;
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

type SingleOrArray<T> = T | T[];

interface IFlex {
  alignItems?: SingleOrArray<CSS.AlignItemsProperty>;
  justifyContent?: SingleOrArray<
    CSS.JustifyContentProperty
  >;
  alignSelf?: SingleOrArray<CSS.AlignSelfProperty>;
  flexDirection?: SingleOrArray<
    CSS.FlexDirectionProperty
  >;
  flexWrap?: SingleOrArray<CSS.FlexWrapProperty>;
  flexGrow?: number;
}

interface IBorders {
  border?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  borderRadius?: NumberOrString;
  borderColor?: TColors;
}

export interface IBoxProps
  extends ISpace,
    IWidthAndHeight,
    ITextProps,
    IFlex,
    IBorders,
    InteractiveProps {}

export type TCSS = Interpolation<
  ThemedStyledProps<ThemeInterface, ThemeInterface>
>;

export type TStyledCSS = TCSS | CSSObject;

export interface ICSSProp {
  css?: TStyledCSS;
}

export interface IBox extends IBoxProps, ICSSProp {
  zIndex?: CSS.ZIndexProperty;
  display?:
    | CSS.DisplayProperty
    | CSS.DisplayProperty[];

  bg?: TColors | 'inherit' | CSS.ColorProperty;
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

  as?: keyof JSX.IntrinsicElements;

  overflowX?: CSS.OverflowXProperty;
  overflowY?: CSS.OverflowYProperty;

  ref?: React.RefObject<any>;
  id?: string;
}
