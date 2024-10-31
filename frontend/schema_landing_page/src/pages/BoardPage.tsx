// src/pages/BoardPage.tsx

import React, { useState } from 'react';
import { Box, Flex, VStack, Text, Input, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react';
import WorkArea from '../components/WorkArea';
import { PageComponent } from '../types/types';
import { DndProvider } from 'react-dnd'; // Importando DndProvider
import { HTML5Backend } from 'react-dnd-html5-backend'; // Importando HTML5Backend

const BoardPage: React.FC = () => {
  // Estado do tamanho do frame
  const [frameSize, setFrameSize] = useState({ width: 800, height: 600 });
  const [frameColor, setFrameColor] = useState("#FFFFFF"); // Cor do frame
  const [components, setComponents] = useState<PageComponent[]>([]); // Estado dos componentes

  const handleFrameWidthChange = (value: string) => {
    setFrameSize((prev) => ({ ...prev, width: parseInt(value) || prev.width }));
  };

  const handleFrameHeightChange = (value: string) => {
    setFrameSize((prev) => ({ ...prev, height: parseInt(value) || prev.height }));
  };

  return (
    <DndProvider backend={HTML5Backend}> {/* Envolvendo com DndProvider */}
      <Flex height="100vh" flexDirection="column" bg="#1F2937">
        <Box p={4} bg="#2D3748">
          <Text color="white" fontSize="2xl">Board Page</Text>
        </Box>
        <Flex flex="1" p={4} overflow="hidden">
          {/* Painel de Configuração */}
          <VStack width="200px" bg="#2D3748" p={4} spacing={4}>
            <Text color="white" fontWeight="bold">Configurações do Frame</Text>
            <Box>
              <Text color="white">Largura</Text>
              <NumberInput value={frameSize.width} onChange={handleFrameWidthChange} min={200} max={1200}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
            <Box>
              <Text color="white">Altura</Text>
              <NumberInput value={frameSize.height} onChange={handleFrameHeightChange} min={200} max={800}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
            <Box>
              <Text color="white">Cor do Frame</Text>
              <Input
                type="color"
                value={frameColor}
                onChange={(e) => setFrameColor(e.target.value)}
                width="100%"
              />
            </Box>
          </VStack>
          
          {/* Área de Trabalho */}
          <Box flex="1" bg="#F7FAFC" p={4} overflow="auto">
            <WorkArea
              components={components}
              onUpdateComponents={setComponents}
              onSelectComponent={() => {}} // Adicione uma função vazia se onSelectComponent não for necessário
              frameSize={frameSize}
              setFrameSize={setFrameSize}
              frameColor={frameColor} // Passando a cor do frame para o WorkArea
            />
          </Box>
        </Flex>
      </Flex>
    </DndProvider>
  );
};

export default BoardPage;
