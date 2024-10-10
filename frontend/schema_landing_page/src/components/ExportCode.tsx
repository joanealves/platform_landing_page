import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Select,
  Textarea,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { generateCode } from '../utils/codeGenerator';

interface ExportCodeProps {
  isOpen: boolean;
  onClose: () => void;
  template: any; // Substitua 'any' pelo tipo correto do seu template
}

const ExportCode: React.FC<ExportCodeProps> = ({ isOpen, onClose, template }) => {
  const [exportedCode, setExportedCode] = useState('');
  const [language, setLanguage] = useState('react');
  const toast = useToast();

  const handleExport = () => {
    try {
      const code = generateCode(template, language);
      setExportedCode(code);
      toast({
        title: "Code exported",
        description: `Your layout has been exported to ${language.toUpperCase()} code.`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Export failed",
        description: "There was an error generating the code. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Export Code</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4} align="stretch">
            <Select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="react">React</option>
              <option value="vue">Vue</option>
              <option value="angular">Angular</option>
              <option value="html">HTML</option>
            </Select>
            <Button colorScheme="blue" onClick={handleExport}>
              Generate Code
            </Button>
            <Textarea
              value={exportedCode}
              readOnly
              placeholder="Exported code will appear here"
              height="300px"
              fontFamily="monospace"
            />
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={() => navigator.clipboard.writeText(exportedCode)}>
            Copy to Clipboard
          </Button>
          <Button variant="ghost" onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ExportCode;