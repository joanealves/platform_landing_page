import React from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';

const TemplatePreview = () => {
  return (
    <Box mt={10} p={4} bg="gray.800" borderRadius="md" color="white">
      <Heading size="lg" mb={4}>Templates Disponíveis</Heading>
      <Box display="flex" justifyContent="space-around" mt={4}>
        <Box width="30%" bg="gray.600" p={4} borderRadius="md">
          <Heading size="md">Template Negócios</Heading>
          <Button mt={4} colorScheme="blue">Selecionar</Button>
        </Box>
        <Box width="30%" bg="gray.600" p={4} borderRadius="md">
          <Heading size="md">Template Portfolio</Heading>
          <Button mt={4} colorScheme="green">Selecionar</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TemplatePreview;
