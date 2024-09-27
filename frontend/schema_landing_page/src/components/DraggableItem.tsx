// src/components/DraggableItem.tsx
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Box } from '@chakra-ui/react';

interface DraggableItemProps {
  id: string;
  content: string;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ id, content }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <Box
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      p={4}
      bg="gray.100"
      border="1px solid #ccc"
    >
      {content}
    </Box>
  );
};

export default DraggableItem;
