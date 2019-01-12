import React from 'react';
import {
  space,
  width,
  fontSize,
  color,
  textAlign,
  fontWeight,
  maxHeight,
  minHeight,
  maxWidth,
  minWidth,
  display,
  alignItems,
  justifyContent,
  alignSelf,
  flexDirection,
  border,
  borderBottom,
  borderLeft,
  borderRight,
  borderTop,
  borderRadius,
  borderColor,
  bgColor,
  position,
  top,
  bottom,
  left,
  right,
  boxShadow,
  height,
  overflow,
  zIndex,
  opacity,
  flexWrap,
  style,
} from 'styled-system';
import { styled } from '../../styles/styled';
import { IBox } from './Box.type';
import { getTransitionValue } from '../../styles/constants';

const cursor = style({ prop: 'cursor' });
const transition = style({ prop: 'transition' });
const transform = style({ prop: 'transform' });
const flexGrow = style({ prop: 'flexGrow' });
const overflowX = style({ prop: 'overflowX' });
const overflowY = style({ prop: 'overflowY' });

export const Box = styled.div<IBox>`
  display: flex;
  box-sizing: border-box;
  ${space}
  ${width}
  ${height}
  ${maxHeight}
  ${minHeight}
  ${maxWidth}
  ${minWidth}
  ${zIndex}

  ${display}
  ${alignItems}
  ${justifyContent}
  ${alignSelf}
  ${flexDirection}
  ${flexWrap}

  ${color}
  ${textAlign}
  ${fontWeight}
  ${fontSize}

  ${border}
  ${borderBottom}
  ${borderLeft}
  ${borderRight}
  ${borderTop}
  ${borderRadius}
  ${borderColor}

  ${bgColor}
  ${boxShadow}
  ${opacity}

  ${position}
  ${top}
  ${bottom}
  ${left}
  ${right}

  ${overflow}
  ${overflowX}
  ${overflowY}

  ${cursor}
  transition: ${`${getTransitionValue('all')}`};
  ${transition}
  ${transform}
  ${flexGrow}

  ${
    // @ts-ignore
    ({ css }) => (css ? css : '')
  }
` as React.FC<IBox>;

export default Box;
