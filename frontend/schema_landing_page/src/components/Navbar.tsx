import React from 'react';
import { Flex, Button, Image } from '@chakra-ui/react';

interface NavbarProps {
  onExportModalOpen: () => void;
  onImportModalOpen: () => void;
  onFrameSettingsToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onExportModalOpen, onImportModalOpen, onFrameSettingsToggle }) => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1rem" bg="#374151" color="white">
      <Image src="/path-to-your-logo.png" alt="Logo" height="30px" />
      <Flex>
        <Button onClick={onExportModalOpen} variant="ghost" mr={2}>Exportar</Button>
        <Button onClick={onImportModalOpen} variant="ghost" mr={2}>Importar</Button>
        <Button onClick={onFrameSettingsToggle} variant="ghost">Configurações do Frame</Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
