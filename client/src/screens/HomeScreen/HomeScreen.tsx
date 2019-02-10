import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { HeroSection } from './components/HeroSection/HeroSection';
import { Footer } from './components/HeroSection/components/Footer';
import { Box } from '../../styles';

const HomeScreen: React.FC<RouteComponentProps> = () => (
  <Box width={1} direction="column" overflowY="auto" overflowX="hidden">
    <HeroSection />
    <Footer />
  </Box>
);

export default HomeScreen;
