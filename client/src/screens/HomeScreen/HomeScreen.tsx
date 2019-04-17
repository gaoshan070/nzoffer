import React from 'react';
import { RouteComponentProps } from 'react-router';
import { HeroSection } from './components/HeroSection/HeroSection';
import { Footer } from './components/HeroSection/components/Footer';
import { Box } from '../../styles';
import { createGlobalStyle } from 'styled-components';

const GlobalCSS2 = createGlobalStyle`
  body {
    overflow: visible;
  }
`;
const HomeScreen: React.FC<RouteComponentProps> = () => (
  <Box
    width={1}
    direction="column"
    overflowY="auto"
    overflowX="hidden"
    height="100%"
  >
    <GlobalCSS2 />
    <HeroSection />
    <Footer />
  </Box>
);

export default HomeScreen;
