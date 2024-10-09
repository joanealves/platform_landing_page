import React from 'react';

interface DroppableAreaProps {
  children: React.ReactNode;
  onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
}

const DroppableArea: React.FC<DroppableAreaProps> = ({ children, onDrop }) => {
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={onDrop}
      style={{ width: '100%', height: '100%', position: 'relative' }}
    >
      {children}
    </div>
  );
};

export default DroppableArea;
