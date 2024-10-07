// src/components/HeroSection.tsx
import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, buttonLabel, backgroundImage }) => {
  return (
    <Box
      bgImage={backgroundImage}
      bgSize="cover"
      bgPosition="center"
      p={8}
      color="white"
      textAlign="center"
      minHeight="400px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading fontSize="4xl">{title}</Heading>
      <Text fontSize="xl" mt={4}>{subtitle}</Text>
      <Button mt={6} colorScheme="teal">{buttonLabel}</Button>
    </Box>
  );
};

export default HeroSection;
