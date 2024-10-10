import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const BoardPage: React.FC = () => {
  return (
    <Box width="100%" height="100%" bg="blue.100" p={4} position="relative">
      <Text position="absolute" top={0} left={0} bg="blue.500" color="white" p={2}>
        BoardPage
      </Text>
      <Text fontSize="2xl" fontWeight="bold" mt={10}>Board Page Content</Text>
      {/* Adicione mais conteúdo aqui conforme necessário */}
    </Box>
  );
};

export default BoardPage;
