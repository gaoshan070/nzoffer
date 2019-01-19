import {
  num,
  px,
  get,
  is,
  createMediaQuery,
  isArray,
  merge,
  propTypes,
} from 'styled-system';
import { SPACES } from '../../styles';

const isObject = n =>
  typeof n === 'object' && n !== null;

const defaultBreakpoints = [40, 52, 64].map(
  n => n + 'em',
);

const getStyles = ({ props, style, value }) => {
  if (!isObject(value)) {
    return style(value);
  }

  // how to hoist this up??
  const breakpoints =
    get(props.theme, 'breakpoints') ||
    defaultBreakpoints;

  if (isArray(value)) {
    const styles = style(value[0]) || {};
    for (let i = 1; i < value.length; i++) {
      const rule = style(value[i]);
      if (rule) {
        const media = createMediaQuery(
          breakpoints[i - 1],
        );
        styles[media] = rule;
      }
    }
    return styles;
  }

  const styles = {};
  for (let breakpoint in value) {
    const minWidth = breakpoints[breakpoint];
    if (!minWidth) {
      Object.assign(styles, style(value[breakpoint]));
    } else {
      const rule = style(value[breakpoint]);
      const media = createMediaQuery(minWidth);
      styles[media] = rule;
    }
  }

  return styles;
};

const getValue = scale => n => {
  if (!num(n)) {
    return px(get(scale, n) || n);
  }
  const abs = Math.abs(n);
  const neg = n < 0;
  const value = scale[abs] || abs;
  if (!num(value)) {
    return neg ? '-' + value : value;
  }
  return px(value * (neg ? -1 : 1));
};

const defaultScale = [
  0,
  4,
  8,
  16,
  32,
  64,
  128,
  256,
  512,
];

const properties = {
  m: 'margin',
  p: 'padding',
};
const directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom'],
};

const REG = /^[mp][trblxy]?$/;

const getProperties = key => {
  const [a, b] = key.split('');
  const property = properties[a];
  const direction = directions[b] || '';
  return Array.isArray(direction)
    ? direction.map(dir => property + dir)
    : [property + direction];
};

export const space = props => {
  const keys = Object.keys(props)
    .filter(key => REG.test(key))
    .sort();
  const scale =
    get(props.theme, 'space') || defaultScale;
  const getStyle = getValue(scale);

  return keys
    .map(key => {
      const value = props[key];

      const properties = getProperties(key);

      const style = n =>
        is(n)
          ? properties.reduce(
              (a, prop) => ({
                ...a,
                [prop]: getStyle(n),
              }),
              {},
            )
          : null;

      let newValue = value;
      const isValidSpaceIndex = v =>
        typeof SPACES[v] === 'number';
      if (isArray(value)) {
        value.forEach((key, index) => {
          if (isValidSpaceIndex(key)) {
            newValue[index] =
              props.theme.space[SPACES[key]] + 'px';
          }
        });
      } else if (isValidSpaceIndex(value)) {
        newValue =
          props.theme.space[SPACES[value]] + 'px';
      }

      const result = getStyles({
        props,
        style,
        value: newValue,
      });

      return result;
    })
    .reduce(merge, {});
};

const cloneFunc = fn => (...args) => fn(...args);

space.propTypes = {
  m: cloneFunc(propTypes.responsive),
  mt: cloneFunc(propTypes.responsive),
  mr: cloneFunc(propTypes.responsive),
  mb: cloneFunc(propTypes.responsive),
  ml: cloneFunc(propTypes.responsive),
  mx: cloneFunc(propTypes.responsive),
  my: cloneFunc(propTypes.responsive),
  p: cloneFunc(propTypes.responsive),
  pt: cloneFunc(propTypes.responsive),
  pr: cloneFunc(propTypes.responsive),
  pb: cloneFunc(propTypes.responsive),
  pl: cloneFunc(propTypes.responsive),
  px: cloneFunc(propTypes.responsive),
  py: cloneFunc(propTypes.responsive),
};
