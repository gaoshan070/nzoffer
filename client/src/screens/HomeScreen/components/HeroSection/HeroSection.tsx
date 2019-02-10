// @ts-ignore
import smoothscroll from 'smoothscroll-polyfill';
import React, { useLayoutEffect } from 'react';
import { LogoSection } from './components/LogoSection';
import { Buttons } from './components/Buttons';
import { DownArrow } from './components/DownArrow';
import { Box, SPACE } from '../../../../styles';
import { Video } from './components/Video';

// kick off the polyfill!
smoothscroll.polyfill();

export const HeroSection: React.FC = () => {
  const [fullHeight, setFullHeight] = React.useState(window.innerHeight);

  useLayoutEffect(() => {
    const handler = () => {
      setFullHeight(window.innerHeight);
    };

    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  });

  return (
    <Box
      width={1}
      height={fullHeight}
      display="flex"
      direction="column"
      justifyContent="around"
      alignItems="center"
      pt={SPACE.small}
    >
      <Video />
      <Box
        position="absolute"
        height="70%"
        direction="column"
        width={1}
        alignItems="center"
        justifyContent="around"
      >
        <LogoSection />
        <Buttons />
      </Box>
      <DownArrow />
    </Box>
  );
};
