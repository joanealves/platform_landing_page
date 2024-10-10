// DraggableItem.tsx
import React from 'react';
import { Box, Text, Icon } from '@chakra-ui/react';
import { DragHandleIcon } from '@chakra-ui/icons';

interface DraggableItemProps {
  id: string;
  type: string;
  label: string;
  component: React.ReactNode;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ id, type, label, component }) => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('application/json', JSON.stringify({ id, type }));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <Box
      draggable
      onDragStart={handleDragStart}
      bg="white"
      p={2}
      borderRadius="md"
      boxShadow="md"
      display="flex"
      flexDirection="column"
      alignItems="center"
      cursor="move"
      _hover={{ bg: 'gray.100' }}
      transition="background-color 0.2s"
    >
      <Icon as={DragHandleIcon} mb={2} color="gray.500" />
      <Box mb={2}>{component}</Box>
      <Text fontSize="xs">{label}</Text>
    </Box>
  );
};

export default DraggableItem;
