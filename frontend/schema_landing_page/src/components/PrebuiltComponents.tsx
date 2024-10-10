import React from 'react';
import { Box, Button, Heading, Text, Image, Flex } from '@chakra-ui/react';

export const ButtonComponent: React.FC = () => (
  <Button colorScheme="blue">Click me</Button>
);

export const HeadingComponent: React.FC = () => (
  <Heading as="h2" size="xl">Sample Heading</Heading>
);

export const TextComponent: React.FC = () => (
  <Text>This is a sample text paragraph.</Text>
);

export const ImageComponent: React.FC = () => (
  <Image src="https://via.placeholder.com/150" alt="Placeholder" />
);

export const CardComponent: React.FC = () => (
  <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
    <Image src="https://via.placeholder.com/300" alt="Card image" />
    <Box p="6">
      <Heading as="h4" size="md" mb={2}>Card Title</Heading>
      <Text>This is a sample card component with some text content.</Text>
    </Box>
  </Box>
);

export const HeroComponent: React.FC = () => (
  <Flex
    bgImage="url('https://via.placeholder.com/1200x400')"
    bgPosition="center"
    bgRepeat="no-repeat"
    bgSize="cover"
    height="400px"
    align="center"
    justify="center"
    direction="column"
  >
    <Heading as="h1" size="2xl" color="white" mb={4}>Welcome to Our Site</Heading>
    <Button colorScheme="blue" size="lg">Get Started</Button>
  </Flex>
);