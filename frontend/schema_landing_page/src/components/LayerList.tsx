import React from 'react';
import { Box, VStack, Text, Button, HStack } from '@chakra-ui/react';
import { PageComponent } from '../types/types';

interface LayerListProps {
  components: PageComponent[];
  onSelectComponent: (component: PageComponent) => void;
  onMoveUp: (componentId: string) => void;
  onMoveDown: (componentId: string) => void;
}

const LayerList: React.FC<LayerListProps> = ({
  components,
  onSelectComponent,
  onMoveUp,
  onMoveDown,
}) => {
  return (
    <Box>
      <Text fontSize="xl" mb={2}>Camadas</Text>
      <VStack spacing={2} align="stretch">
        {components.sort((a, b) => b.zIndex - a.zIndex).map((component) => (
          <HStack key={component.id} justify="space-between" bg="gray.100" p={2} borderRadius="md">
            <Text onClick={() => onSelectComponent(component)} cursor="pointer">
              {component.type} - {component.id}
            </Text>
            <HStack>
              <Button size="xs" onClick={() => onMoveUp(component.id)}>↑</Button>
              <Button size="xs" onClick={() => onMoveDown(component.id)}>↓</Button>
            </HStack>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default LayerList;