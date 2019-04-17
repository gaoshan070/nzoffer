import React from 'react';
import logoSVG from '../assets/logo.svg';
import { Omit } from 'react-router';
import { Image, IImage } from '../styles';
import logoSVG1 from '../assets/new-logo.svg';

export const LOGO: React.FC<
  Omit<IImage, 'src'> & { isChineseLogo?: boolean }
> = props => (
  <Image src={props.isChineseLogo ? logoSVG1 : logoSVG} {...props} />
);
