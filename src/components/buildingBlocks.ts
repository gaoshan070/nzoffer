import React from 'react';
import * as CSS from 'csstype';
import styled, {
  StyledComponent,
} from 'styled-components';
import theme, {
  ThemeInterface,
} from '../styles/theme';

import {
  // space,
  // color,
  width,
  height,
  // flex,
  // order,
  // alignSelf,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  // fontSize,
  // fontFamily,
  // fontWeight,
  // textAlign,
  // lineHeight,
  // letterSpacing,
  // borders,
  // borderColor,
  // borderRadius,
  // buttonStyle,
  // boxShadow,
  // backgroundImage,
  // backgroundSize,
  // backgroundPosition,
  // backgroundRepeat,
  // opacity,
  // variant,
} from 'styled-system';
import {
  Card,
  Box as RebassBox,
  FlexProps,
  BorderProps,
  Borders,
  CardProps,
  InterativeProps,
  Responsive,
} from 'rebass';

export const Box = styled(RebassBox)(height);
//@ts-ignore
Box.propTypes = {
  //@ts-ignore
  ...height.propTypes,
};

type ThemeColor = Extract<
  keyof ThemeInterface['colors'],
  string
>;

interface IFlexCardProp
  extends FlexProps,
    Borders,
    CardProps,
    BorderProps,
    InterativeProps {
  height?: Responsive;
  color?: ThemeColor;
  bg?: ThemeColor;
}

//@ts-ignore
export const FlexCard: StyledComponent<
  React.FC<IFlexCardProp>,
  any
> = styled(Card)(
  {
    display: 'flex',
  },
  width,
  height,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
);

//@ts-ignore
FlexCard.propTypes = {
  //@ts-ignore
  ...width.propTypes,
  //@ts-ignore
  ...height.protoTypes,
  //@ts-ignore
  ...flexWrap.propTypes,
  //@ts-ignore
  ...flexDirection.propTypes,
  //@ts-ignore
  ...alignItems.propTypes,
  //@ts-ignore
  ...justifyContent.propTypes,
};
