import React from 'react';
import { Box, Flex, Button, Text, Image, HStack } from '@chakra-ui/react';

interface NavbarProps {
  onExportModalOpen: () => void;
  onImportModalOpen: () => void;
  onFrameSettingsToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onExportModalOpen,
  onImportModalOpen,
  onFrameSettingsToggle,
}) => {
  return (
    <Box bg="blue.600" color="white" p="4" width="100vw">
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        {/* Logo e Nome alinhados à esquerda */}
        <HStack spacing={3} align="center">
          <Image src="/assets/logo.png" alt="Logo" boxSize="40px" />
          <Text fontSize="xl">SCHEMA</Text>
        </HStack>

        {/* Botões alinhados à direita */}
        <HStack spacing={4}>
          <Button colorScheme="teal" onClick={onImportModalOpen}>
            Importar Código
          </Button>
          <Button colorScheme="blue" onClick={onExportModalOpen}>
            Exportar Código
          </Button>
          <Button colorScheme="blue" onClick={onFrameSettingsToggle}>
            Configurações do Frame
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
