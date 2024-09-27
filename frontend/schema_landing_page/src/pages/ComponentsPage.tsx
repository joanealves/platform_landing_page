import { Box, Text } from '@chakra-ui/react';
import DraggableItem from '../components/DraggableItem';
import DroppableArea from '../components/DrappableArea';

const ComponentsPage = () => {
  return (
    <Box p={6}>
      <Text fontSize="2xl" mb={4}>Componentes Disponíveis</Text>
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={6}>
        <DraggableItem id="button" content="Botão" />
        <DraggableItem id="text" content="Texto" />
        <DraggableItem id="image" content="Imagem" />
      </Box>

      <DroppableArea>
        <Text>Arraste os componentes aqui</Text>
      </DroppableArea>
    </Box>
  );
};

export default ComponentsPage;
