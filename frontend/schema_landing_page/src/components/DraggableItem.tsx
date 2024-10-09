// DraggableItem.tsx
import React from 'react';
import { Box, Text, Icon } from '@chakra-ui/react';
import { DragHandleIcon } from '@chakra-ui/icons';

interface DraggableItemProps {
  id: string;
  type: string;
  label: string;
  icon?: React.ElementType;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ id, type, label, icon }) => {
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
      alignItems="center"
      cursor="move"
      _hover={{ bg: 'gray.100' }}
      transition="background-color 0.2s"
    >
      <Icon as={DragHandleIcon} mr={2} color="gray.500" />
      {icon && <Icon as={icon} mr={2} />}
      <Text>{label}</Text>
    </Box>
  );
};

export default DraggableItem;
