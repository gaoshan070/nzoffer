import React from 'react';
import logoSVG from '../assets/logo.svg';
import { Image, ImageProps } from './Image';
import { Omit } from 'react-router';

export const LOGO: React.FC<
  Omit<ImageProps, 'src'>
> = props => <Image src={logoSVG} {...props} />;
