import React from 'react';
import logoSVG from '../../../../../assets/logo.svg';
import { TextSection } from './TextSection';
import { Box } from '../../../../../components/Box/Box';
import { Image } from '../../../../../components/Image';

// first one is for small screen, 2nd is for larger
const LOGO_HEIGHT = ['2.5rem', '4.2rem'];

export const LogoSection = () => (
  <Box
    alignItems="center"
    justifyContent="center"
    height={LOGO_HEIGHT}
  >
    <Image src={logoSVG} height={LOGO_HEIGHT} />
    <TextSection />
  </Box>
);
