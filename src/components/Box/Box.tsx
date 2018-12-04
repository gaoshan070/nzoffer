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
import { styled } from '../../styles/styledLib';
import { IBox } from './Box.type';
import { ThemeInterface } from '../../styles/theme';

const cursor = style({ prop: 'cursor' });
const transition = style({ prop: 'transition' });
const transform = style({ prop: 'transform' });
const flexGrow = style({ prop: 'flexGrow' });
const overflowX = style({ prop: 'overflowX' });
const overflowY = style({ prop: 'overflowY' });

const Box = styled.div<IBox<ThemeInterface>>`
  display: flex;

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
  ${transition}
  ${transform}
  ${flexGrow}

  ${({ css }) => (css ? css : '')}
`;

export default Box;
