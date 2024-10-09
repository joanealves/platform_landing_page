import React, { useState } from 'react';
import { Box, Button, Input, VStack, Text, useToast } from '@chakra-ui/react';
import { PageComponent } from '../types/types';

interface TemplateManagerProps {
  currentComponents: PageComponent[];
  onLoadTemplate: (components: PageComponent[]) => void;
}

const TemplateManager: React.FC<TemplateManagerProps> = ({ currentComponents, onLoadTemplate }) => {
  const [templateName, setTemplateName] = useState('');
  const toast = useToast();

  const saveTemplate = () => {
    if (templateName.trim() === '') {
      toast({
        title: "Nome do template é obrigatório",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const templates = JSON.parse(localStorage.getItem('templates') || '{}');
    templates[templateName] = currentComponents;
    localStorage.setItem('templates', JSON.stringify(templates));

    toast({
      title: "Template salvo com sucesso",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    setTemplateName('');
  };

  const loadTemplate = (name: string) => {
    const templates = JSON.parse(localStorage.getItem('templates') || '{}');
    const template = templates[name];
    if (template) {
      onLoadTemplate(template);
      toast({
        title: "Template carregado com sucesso",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const templates = JSON.parse(localStorage.getItem('templates') || '{}');

  return (
    <Box>
      <Text fontSize="xl" mb={2}>Gerenciar Templates</Text>
      <VStack spacing={2} align="stretch">
        <Input
          placeholder="Nome do template"
          value={templateName}
          onChange={(e) => setTemplateName(e.target.value)}
        />
        <Button onClick={saveTemplate}>Salvar Template Atual</Button>
        <Text fontSize="lg" mt={4}>Templates Salvos:</Text>
        {Object.keys(templates).map((name) => (
          <Button key={name} onClick={() => loadTemplate(name)}>{name}</Button>
        ))}
      </VStack>
    </Box>
  );
};

export default TemplateManager;