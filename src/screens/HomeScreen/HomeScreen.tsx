import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Box } from '../../components/Box/Box';
import { HeroSection } from './components/HeroSection/HeroSection';
import { Footer } from './components/HeroSection/components/Footer';

const HomeScreen: React.FC<
  RouteComponentProps
> = () => {
  return (
    <Box
      width={1}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      overflowY="hidden"
      overflowX="hidden"
    >
      <HeroSection />
      <Footer />
    </Box>
  );
};

export default HomeScreen;
