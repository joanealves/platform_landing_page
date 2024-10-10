// src/components/WorkArea.tsx

import React from 'react';
import { Box } from '@chakra-ui/react';
import { PageComponent } from '../types/types';
import Frame from './Frame';

interface WorkAreaProps {
  frameSize: { width: number; height: number };
  frameColor: string;
  pageComponents: PageComponent[];
  setSelectedComponent: (component: PageComponent | null) => void;
  onDrop: (componentData: { id: string; type: string; position: { x: number; y: number } }) => void;
  onUpdateComponent: (updatedComponent: PageComponent) => void;
}

const WorkArea: React.FC<WorkAreaProps> = ({
  frameSize,
  frameColor,
  pageComponents,
  setSelectedComponent,
  onDrop,
  onUpdateComponent
}) => {
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    onDrop({ id: Date.now().toString(), type: 'unknown', position: { x, y } });
  };

  return (
    <Box 
      width="100%" 
      height="100%" 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      bg="gray.100"
    >
      <Frame
        width={frameSize.width}
        height={frameSize.height}
        pageComponents={pageComponents}
        setSelectedComponent={setSelectedComponent}
        onUpdateComponent={onUpdateComponent}
        onDrop={handleDrop}
        backgroundColor={frameColor}
      />
    </Box>
  );
};

export default WorkArea;