import React from 'react';
import { Image } from '../../../../../../../styles';
export const UniLogo: React.FC<{
  src: string;
  width?: number | string;
}> = ({ src, width }) => <Image src={src} width={width || '5rem'} />;
