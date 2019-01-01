import React from 'react';
import { Box } from '../../../../components/Box/Box';
import bg from '../../../../assets/homepage-bg.jpg';
import { css } from '../../../../styles/styledLib';
import { LogoSection } from './components/LogoSection';
import { Statistic } from './components/Statistic/Statistic';
import { Buttons } from './components/Buttons';
import { DownArrow } from './components/DownArrow';

export const HeroSection: React.FC = () => (
  <Box
    width={1}
    height="100vh"
    display="flex"
    position="relative"
    flexDirection="column"
    justifyContent="space-around"
    alignItems="center"
    css={css`
      background: url(${bg});
      background-size: cover;
    `}
  >
    <LogoSection />
    <Statistic />
    <Buttons />
    <DownArrow />
  </Box>
);
