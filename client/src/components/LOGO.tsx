import React from 'react';
import logoSVG from '../assets/logo.svg';
import { Omit } from 'react-router';
import { Image, IImage } from '../rebase/components';

export const LOGO: React.FC<
  Omit<IImage, 'src'>
> = props => <Image src={logoSVG} {...props} />;
