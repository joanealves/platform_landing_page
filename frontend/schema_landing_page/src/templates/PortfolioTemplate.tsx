import React from 'react';
import { Box } from '@chakra-ui/react';
import HeroSection from './HeroSection';
import GallerySection from './GallerySection';
import TestimonialSection from './TestimonialSection';


const PortfolioTemplate = () => {
  return (
    <Box>
      <HeroSection />
      <TestimonialSection />
      <GallerySection />
    </Box>
  );
};

export default PortfolioTemplate;
