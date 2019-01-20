import React from 'react';
import { TextSection } from './TextSection';
import { LOGO } from '../../../../../components/LOGO';
import { Box } from '../../../../../rebase/components';

// first one is for small screen, 2nd is for larger
const LOGO_HEIGHT = ['2.5rem', '4.5rem'];

export const LogoSection = () => (
  <Box
    mt={['xxlarge', 'medium']}
    width={1}
    alignItems="center"
    justifyContent="center"
    height={LOGO_HEIGHT}
    zIndex={1}
  >
    <LOGO height={LOGO_HEIGHT} />
    <TextSection />
  </Box>
);
