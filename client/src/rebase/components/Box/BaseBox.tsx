import { StyledComponent } from 'styled-components';
import {
  bgColor,
  border,
  borderBottom,
  borderColor,
  borderLeft,
  borderRadius,
  borderRight,
  borderTop,
  bottom,
  boxShadow,
  color,
  display,
  flexWrap,
  fontWeight,
  height,
  left,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  opacity,
  overflow,
  position,
  right,
  style,
  textAlign,
  top,
  width,
  zIndex,
} from 'styled-system';
import {
  FONT_SIZE,
  FontSizeType,
  fontSpecs,
  ThemeType,
} from '../../styles';
import { styled } from '../../styles/styled';
import { getTransitionValue } from '../../styles/utils';
import { is } from '../../utils/utils';
import { CSSType, IBaseBox } from './BaseBox.type';
import { space } from './BaseBox.utils';

const cursor = style({ prop: 'cursor' });
const transition = style({ prop: 'transition' });
const transform = style({ prop: 'transform' });
const flexGrow = style({ prop: 'flexGrow' });
const flex = style({ prop: 'flex' });
const overflowX = style({ prop: 'overflowX' });
const overflowY = style({ prop: 'overflowY' });

const fontSize = style({
  prop: 'fontSize',
  // @ts-ignore
  transformValue: (key: FontSizeType) => {
    const spec = fontSpecs[FONT_SIZE[key]];

    return typeof spec === 'object' ? spec.size : key;
  },
});

const flexDirection = style({
  prop: 'direction',
  cssProperty: 'flexDirection',
});

const justifyContent = style({
  prop: 'justifyContent',
  transformValue: (value: string | number) => {
    switch (value) {
      case 'start':
      case 'end':
        return `flex-${value}`;

      case 'between':
      case 'around':
        return `space-${value}`;

      default:
        return value;
    }
  },
});

const transformAlignCSS = (value: string | number) => {
  switch (value) {
    case 'start':
    case 'end':
      return `flex-${value}`;

    default:
      return value;
  }
};

const alignItems = style({
  prop: 'alignItems',
  transformValue: transformAlignCSS,
});

const alignSelf = style({
  prop: 'alignSelf',
  transformValue: transformAlignCSS,
});

function applyCSS() {
  return ({ css }: { css?: CSSType }) =>
    is.notExist(css) ? '' : css;
}

export const BaseBox = styled.div`
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
  ${flex};
  ${justifyContent}
  ${alignItems}
  ${alignSelf}
  ${flexDirection}
  ${flexWrap}
  ${flexGrow}

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

  ${color}
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
  ${transform}
  transition: ${`${getTransitionValue('all')}`};
  ${transition};

  ${applyCSS};
` as StyledComponent<'div', ThemeType, IBaseBox>;
