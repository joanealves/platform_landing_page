// src/components/DroppableArea.tsx
import { useDroppable } from '@dnd-kit/core';
import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface PageComponent {
  id: string;
  content: string;
}

interface DroppableAreaProps {
  children: ReactNode;
  onDrop: (component: PageComponent) => void;
}

const DroppableArea: React.FC<DroppableAreaProps> = ({ children, onDrop }) => {
  const { setNodeRef } = useDroppable({
    id: 'droppable',
  });

  const handleDrop = () => {
    const component: PageComponent = { id: 'new-id', content: 'new-content' };
    onDrop(component);
  };

  return (
    <Box
      ref={setNodeRef}
      p={4}
      bg="gray.50"
      border="2px dashed #ccc"
      onDrop={handleDrop}
    >
      {children}
    </Box>
  );
};

export default DroppableArea;
