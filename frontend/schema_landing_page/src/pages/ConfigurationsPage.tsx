import React from 'react';
import { Box, Text, Button, Switch, useColorMode } from '@chakra-ui/react';

const ConfigurationsPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box p={6} color="white">
      <Text fontSize="2xl" mb={4}>
        Configurações
      </Text>
      <Box>
        <Text>Modo {colorMode === 'light' ? 'Claro' : 'Escuro'}</Text>
        <Switch
          isChecked={colorMode === 'dark'}
          onChange={toggleColorMode}
          colorScheme="teal"
        />
      </Box>
      <Button mt={4} colorScheme="blue">
        Salvar Configurações
      </Button>
    </Box>
  );
};

export default ConfigurationsPage;
