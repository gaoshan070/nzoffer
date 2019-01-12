// @ts-ignore
import smoothscroll from 'smoothscroll-polyfill';
import React, { useLayoutEffect } from 'react';
import { Box } from '../../../../components/Box/Box';
import bg from '../../../../assets/homepage-bg.jpg';
import { css } from '../../../../styles/styled';
import { LogoSection } from './components/LogoSection';
import { Statistic } from './components/Statistic/Statistic';
import { Buttons } from './components/Buttons';
import { DownArrow } from './components/DownArrow';

// kick off the polyfill!
smoothscroll.polyfill();

export const HeroSection: React.FC = () => {
  const [fullHeight, setFullHeight] = React.useState(
    window.innerHeight,
  );

  useLayoutEffect(() => {
    const handler = () => {
      setFullHeight(window.innerHeight);
    };

    window.addEventListener('resize', handler);
    return () =>
      window.removeEventListener('resize', handler);
  });

  return (
    <Box
      width={1}
      height={fullHeight}
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
};
