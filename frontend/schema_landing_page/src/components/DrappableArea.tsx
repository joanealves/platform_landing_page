// src/components/DroppableArea.tsx

import React from 'react';
import { useDroppable } from '@dnd-kit/core';

interface DroppableAreaProps {
  children: React.ReactNode;
}

const DroppableArea: React.FC<DroppableAreaProps> = ({ children }) => {
  const { setNodeRef } = useDroppable({
    id: 'droppable',
  });

  return (
    <div
      ref={setNodeRef}
      style={{ minHeight: '200px', border: '2px dashed #ccc', padding: '16px' }}
    >
      {children}
    </div>
  );
};

export default DroppableArea;
