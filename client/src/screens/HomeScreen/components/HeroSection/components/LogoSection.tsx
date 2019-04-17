import React from 'react';
import { TextSection } from './TextSection';
import { LOGO } from '../../../../../components/LOGO';
import { Box, SPACE } from '../../../../../styles';

// first one is for small screen, 2nd is for larger
const LOGO_HEIGHT = ['3.3rem', '5.5rem'];

export const LogoSection = () => (
  <Box
    width={1}
    alignItems="center"
    justifyContent="center"
    position="relative"
    height={LOGO_HEIGHT}
    zIndex={1}
  >
    <LOGO isChineseLogo height={LOGO_HEIGHT} />
    {/*<TextSection />*/}
  </Box>
);
