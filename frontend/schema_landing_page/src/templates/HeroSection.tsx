import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Box 
      height="100vh"
      backgroundImage="url('https://via.placeholder.com/1500')"
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="white"
      textAlign="center"
    >
      <VStack spacing={6}>
        <Heading as="h1" size="2xl">
          Bem-vindo à Nossa Plataforma!
        </Heading>
        <Text fontSize="lg">
          Crie Designers incríveis.
        </Text>
        <Button 
          size="lg" 
          colorScheme="teal"
          onClick={() => alert("Botão clicado!")}
        >
          Comece Agora
        </Button>
      </VStack>
    </Box>
  );
};

export default HeroSection;
