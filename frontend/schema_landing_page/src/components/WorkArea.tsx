// src/components/WorkArea.tsx

import React, { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { PageComponent } from '../types/types';
import Frame from './Frame';
import DroppableArea from './DrappableArea';

interface WorkAreaProps {
  frameSize: { width: number; height: number };
  frameColor: string;
  pageComponents: PageComponent[];
  setSelectedComponent: (component: PageComponent | null) => void;
  onDrop: (componentData: { id: string; type: string; position: { x: number; y: number } }) => void;
  onUpdateComponent: (updatedComponent: PageComponent) => void;
  onCopyComponent: (component: PageComponent) => void;
  onPasteComponent: () => void;
}

const WorkArea: React.FC<WorkAreaProps> = ({
  frameSize,
  frameColor,
  pageComponents,
  setSelectedComponent,
  onDrop,
  onUpdateComponent,
  onCopyComponent,
  onPasteComponent
}) => {
  const [frames, setFrames] = useState([{ id: 'default', width: frameSize.width, height: frameSize.height }]);

  const addFrame = () => {
    setFrames([...frames, { id: Date.now().toString(), width: frameSize.width, height: frameSize.height }]);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    onDrop({ id: Date.now().toString(), type: 'unknown', position: { x, y } });
  };

  return (
    <Box width="100%" height="100%" position="relative" overflow="auto">
      <DroppableArea onDrop={handleDrop}>
        {frames.map((frame) => (
          <Frame 
            key={frame.id} 
            width={frame.width} 
            height={frame.height} 
            pageComponents={pageComponents}
            setSelectedComponent={setSelectedComponent}
            onUpdateComponent={onUpdateComponent}
            onCopyComponent={onCopyComponent}
          />
        ))}
      </DroppableArea>
      <Button position="fixed" bottom="80px" right="20px" onClick={addFrame}>
        Add Frame
      </Button>
      <Button position="fixed" bottom="80px" right="150px" onClick={onPasteComponent}>
        Paste
      </Button>
    </Box>
  );
};

export default WorkArea;