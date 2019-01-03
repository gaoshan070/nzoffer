import { styled } from '../styles/styledLib';
import { height, borderRadius } from 'styled-system';
import { IBox, TStyledCSS } from './Box/Box.type';
import Box from './Box/Box';
import { TColors } from '../styles/theme';

export interface ImageProps extends IBox {
  src: string;
  css?: TStyledCSS;
  bg?: TColors;
  as?: keyof JSX.IntrinsicElements;
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
