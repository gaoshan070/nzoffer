import React from 'react';
import { RouteComponentProps } from 'react-router';
import { HeroSection } from './components/HeroSection/HeroSection';
import { Footer } from './components/HeroSection/components/Footer';
import { Box } from '../../styles';
import { createGlobalStyle } from 'styled-components';

const GlobalCSS2 = createGlobalStyle`
  body {
    overflow: auto;
  }
`;

const HomeScreen: React.FC<RouteComponentProps> = () => (
  <Box
    id="home-screen"
    width={1}
    direction="column"
    overflowX="hidden"
    height="100%"
  >
    <GlobalCSS2 />
    <HeroSection />
    <Footer />
  </Box>
);

export default HomeScreen;
