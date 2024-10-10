import React, { useState } from 'react';
import { Box, VStack, Textarea, Button, Select, useToast } from '@chakra-ui/react';
import { parseHTML } from '../utils/htmlParser';

const ImportCode: React.FC = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('html');
  const toast = useToast();

  const handleImport = () => {
    try {
      const components = parseHTML(code);
      // Aqui você deve implementar a lógica para adicionar os componentes ao template atual
      console.log('Parsed components:', components);
      toast({
        title: "Code imported",
        description: "Your code has been successfully imported and converted to components.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Import failed",
        description: "There was an error parsing your code. Please check and try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="html">HTML</option>
          {/* Adicione mais opções de linguagem no futuro */}
        </Select>
        <Textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Paste your HTML code here"
          height="300px"
        />
        <Button colorScheme="blue" onClick={handleImport}>
          Import and Convert
        </Button>
      </VStack>
    </Box>
  );
};

export default ImportCode;