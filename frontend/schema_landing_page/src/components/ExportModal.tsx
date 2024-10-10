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
} from '@chakra-ui/react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  template: any; // Substitua 'any' pelo tipo correto do seu template
}

const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose, template }) => {
  const [exportFormat, setExportFormat] = useState<'html' | 'react' | 'vue'>('html');

  const generateCode = () => {
    switch (exportFormat) {
      case 'html':
        return generateHTMLCode(template);
      case 'react':
        return generateReactCode(template);
      case 'vue':
        return generateVueCode(template);
      default:
        return '';
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Export Template</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <Select value={exportFormat} onChange={(e) => setExportFormat(e.target.value as any)}>
              <option value="html">HTML</option>
              <option value="react">React</option>
              <option value="vue">Vue</option>
            </Select>
            <Textarea
              value={generateCode()}
              readOnly
              height="300px"
              fontFamily="monospace"
            />
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={() => navigator.clipboard.writeText(generateCode())}>
            Copy to Clipboard
          </Button>
          <Button variant="ghost" onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ExportModal;

// Funções auxiliares para gerar o código
function generateHTMLCode(template: any): string {
  // Implemente a lógica para gerar o código HTML
  return `<div>
  <!-- Generated HTML code for ${template.name} -->
  ${template.components.map((component: any) => `<div>${component.type}</div>`).join('\n  ')}
</div>`;
}

function generateReactCode(template: any): string {
  // Implemente a lógica para gerar o código React
  return `import React from 'react';

export const ${template.name.replace(/\s+/g, '')} = () => {
  return (
    <div>
      {/* Generated React code for ${template.name} */}
      ${template.components.map((component: any) => `<div>${component.type}</div>`).join('\n      ')}
    </div>
  );
};`;
}

function generateVueCode(template: any): string {
  // Implemente a lógica para gerar o código Vue
  return `<template>
  <div>
    <!-- Generated Vue code for ${template.name} -->
    ${template.components.map((component: any) => `<div>${component.type}</div>`).join('\n    ')}
  </div>
</template>

<script>
export default {
  name: '${template.name.replace(/\s+/g, '')}',
  // Add component logic here
}
</script>`;
}