import { styled } from '../styles/styledLib';
import React from 'react';
import { height, borderRadius } from 'styled-system';
import { IBox, TStyledCSS } from './Box/Box.type';
import Box from './Box/Box';
import {
  ThemeInterface,
  TColors,
} from '../styles/theme';

interface ImageProps extends IBox<ThemeInterface> {
  src: string;
  css?: TStyledCSS;
  bg?: TColors;
  as?: HTMLElement['tagName'];
}

export const Image = styled(Box)<ImageProps>(
  {
    maxWidth: '100%',
    height: 'auto',
  },
  height,
  borderRadius,
);

Image.defaultProps = {
  as: 'img',
  m: 0,
};

export default Image;
