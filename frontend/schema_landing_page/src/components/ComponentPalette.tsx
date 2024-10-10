import React from 'react';
import { Box, VStack, Text, Button, Icon } from '@chakra-ui/react';
import { useDrag } from 'react-dnd';
import { FiType, FiImage, FiSquare, FiBox, FiList, FiAlignLeft } from 'react-icons/fi';

const DraggableComponent = ({ type, label, icon }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'component',
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Button
      ref={drag}
      opacity={isDragging ? 0.5 : 1}
      cursor="move"
      width="100%"
      leftIcon={<Icon as={icon} />}
      justifyContent="flex-start"
    >
      {label}
    </Button>
  );
};

const ComponentPalette: React.FC = () => {
  const components = [
    { type: 'text', label: 'Text', icon: FiType },
    { type: 'image', label: 'Image', icon: FiImage },
    { type: 'button', label: 'Button', icon: FiSquare },
    { type: 'input', label: 'Input', icon: FiBox },
    { type: 'textarea', label: 'Textarea', icon: FiAlignLeft },
    { type: 'select', label: 'Select', icon: FiList },
  ];

  return (
    <Box width="200px" bg="gray.100" p={4} borderRadius="md">
      <Text fontSize="xl" fontWeight="bold" mb={4}>Components</Text>
      <VStack spacing={2}>
        {components.map((component) => (
          <DraggableComponent key={component.type} {...component} />
        ))}
      </VStack>
    </Box>
  );
};

export default ComponentPalette;