import { CSSProperties } from 'react';

export const sharedDropDownStyle = {
  minHeight: '36px',
  maxHeight: '36px',
  width: '50%',
};

export const sharedDropDownStyleAll = {
  boxProps: {
    ...sharedDropDownStyle,
    width: '100%',
  },
  css: {
    ...sharedDropDownStyle,
    width: '100%',
  },
  itemStyle: {
    paddingLeft: '19px',
  },
};

export const getSharedDropDownStyleAll = ({
  boxProps,
  css,
  itemStyle,
  listStyle,
}: {
  boxProps?: CSSProperties;
  css?: CSSProperties;
  itemStyle?: CSSProperties;
  listStyle?: CSSProperties;
}) => ({
  boxProps: {
    ...sharedDropDownStyle,
    width: '100%',
    ...boxProps,
  },
  css: {
    ...sharedDropDownStyle,
    width: '100%',
    ...css,
  },
  itemStyle: {
    paddingLeft: '19px',
    ...itemStyle,
  },
  listStyle: listStyle ? listStyle : {},
});
