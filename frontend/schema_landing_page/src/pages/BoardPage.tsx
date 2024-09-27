import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
// import DraggableItem from '../components/DraggableItem';
import DroppableArea from '../components/DrappableArea'; 

// Definindo a interface para os componentes arrastáveis
interface PageComponent {
  id: string;
  content: string;
}

const BoardPage = () => {
  const [pageComponents, setPageComponents] = useState<PageComponent[]>([]);

  // Função para lidar com a adição de componentes na área de drop
  const handleDrop = (component: PageComponent) => {
    setPageComponents([...pageComponents, component]);
  };

  return (
    <Box p={6}>
      <Text fontSize="2xl" mb={4}>Construa sua Landing Page</Text>

      {/* Área de trabalho onde os componentes são soltos */}
      <DroppableArea onDrop={handleDrop}>
        {pageComponents.map((comp, index) => (
          <Box key={index} p={4} bg="gray.50" border="1px dashed #ccc" mb={4}>
            {comp.content}
          </Box>
        ))}
      </DroppableArea>
    </Box>
  );
};

export default BoardPage;
