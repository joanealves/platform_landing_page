// src/components/ExportCodeModal.tsx

import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Textarea, Select } from '@chakra-ui/react';

interface ExportCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  code: string;
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

const ExportCodeModal: React.FC<ExportCodeModalProps> = ({ isOpen, onClose, code, selectedLanguage, onLanguageChange }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Exportar Código</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Select value={selectedLanguage} onChange={(e) => onLanguageChange(e.target.value)} mb={4}>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Angular">Angular</option>
          </Select>
          <Textarea value={code} readOnly height="300px" />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={() => navigator.clipboard.writeText(code)}>
            Copiar Código
          </Button>
          <Button variant="ghost" onClick={onClose}>Fechar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ExportCodeModal;
