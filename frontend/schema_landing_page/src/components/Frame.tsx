import React from 'react';
import { Box } from '@chakra-ui/react';
import { PageComponent } from '../types/types';
import DroppableArea from './DrappableArea';

interface FrameProps {
  width: number;
  height: number;
  pageComponents: PageComponent[];
  setSelectedComponent: (component: PageComponent | null) => void;
  onUpdateComponent: (updatedComponent: PageComponent) => void;
  onCopyComponent: (component: PageComponent) => void;
}

const Frame: React.FC<FrameProps> = ({ 
  width, 
  height, 
  pageComponents, 
  setSelectedComponent,
  onUpdateComponent,
  onCopyComponent
}) => {
  return (
    <Box
      width={`${width}px`}
      height={`${height}px`}
      border="1px solid"
      borderColor="gray.300"
      m={4}
      position="relative"
      bg="white"
    >
      <DroppableArea onDrop={(event) => {/* Handle drop */}}>
        {pageComponents.map((component) => (
          <Box
            key={component.id}
            position="absolute"
            left={`${component.position.x}px`}
            top={`${component.position.y}px`}
            width={`${component.size.width}px`}
            height={`${component.size.height}px`}
            zIndex={component.zIndex}
            onClick={() => setSelectedComponent(component)}
          >
            {/* Render component based on its type */}
            {component.type === 'button' && <button onClick={() => onCopyComponent(component)}>{component.settings.text}</button>}
            {component.type === 'text' && <p>{component.settings.text}</p>}
            {/* Add more component types as needed */}
          </Box>
        ))}
      </DroppableArea>
    </Box>
  );
};

export default Frame;