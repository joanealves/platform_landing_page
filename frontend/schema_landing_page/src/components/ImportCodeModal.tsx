// src/components/ImportCodeModal.tsx

import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Textarea } from '@chakra-ui/react';

interface ImportCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImport: (code: string) => void;
}

const ImportCodeModal: React.FC<ImportCodeModalProps> = ({ isOpen, onClose, onImport }) => {
  const [code, setCode] = useState('');

  const handleImport = () => {
    onImport(code);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Importar Código</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Textarea
            placeholder="Cole o código JSON aqui"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            height="300px"
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleImport}>
            Importar
          </Button>
          <Button variant="ghost" onClick={onClose}>Fechar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ImportCodeModal;
