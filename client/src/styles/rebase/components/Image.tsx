import React from 'react';
import { getSafeCss } from '../styles';
import { is } from '../utils/utils';
import { BaseBox } from './Box/BaseBox';
import { IBaseBox } from './Box/BaseBox.type';

export interface IImage extends IBaseBox {
  src: string;
  alt?: string;
}

export const Image: React.FC<IImage> = ({ height, css, ...rest }) => (
  <BaseBox
    as="img"
    maxWidth="100%"
    height={is.notExist(height) ? 'auto' : height}
    css={`
      object-fit: contain;
      ${getSafeCss(css)};
    `}
    {...rest}
  />
);
