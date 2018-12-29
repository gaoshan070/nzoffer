import React from 'react';
import {
  Link,
  RouteComponentProps,
} from 'react-router-dom';
import { Box } from '../../components/Box/Box';
import { HeroSection } from './components/HeroSection/HeroSection';
import { Footer } from './components/HeroSection/components/Footer';

const HomeScreen: React.FC<
  RouteComponentProps
> = () => {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      overflowY="auto"
    >
      <HeroSection />
      <Footer />
    </Box>
  );
};

export default HomeScreen;
