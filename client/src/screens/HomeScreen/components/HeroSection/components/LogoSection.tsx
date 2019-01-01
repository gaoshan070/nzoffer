import React from 'react';
import { TextSection } from './TextSection';
import { Box } from '../../../../../components/Box/Box';
import { LOGO } from '../../../../../components/LOGO';

// first one is for small screen, 2nd is for larger
const LOGO_HEIGHT = ['2.5rem', '4.2rem'];

export const LogoSection = () => (
  <Box
    mt={[9, 3]}
    alignItems="center"
    justifyContent="center"
    height={LOGO_HEIGHT}
  >
    <LOGO height={LOGO_HEIGHT} />
    <TextSection />
  </Box>
);
