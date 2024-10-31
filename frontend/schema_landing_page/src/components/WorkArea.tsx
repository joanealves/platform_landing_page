// src/components/WorkArea.tsx

import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Box, Button, HStack, VStack, Text, Flex, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react';
import { Rnd } from 'react-rnd';
import { useDrop } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';
import DraggableComponent from './DraggableComponent';
import { FiAlignLeft, FiAlignCenter, FiAlignRight, FiLayers, FiGrid } from 'react-icons/fi';
import { PageComponent, PageComponentButton, PageComponentTexto, PageComponentImagem, PageComponentMenu, PageComponentVideo, PageComponentForm, PageComponentCarousel, PageComponentMap } from '../types/types';

interface WorkAreaProps {
  components: PageComponent[];
  onUpdateComponents: (components: PageComponent[]) => void;
  onSelectComponent: (component: PageComponent | null) => void;
  frameSize: { width: number; height: number };
  setFrameSize: (size: { width: number; height: number }) => void;
  frameColor: string;
}

const WorkArea: React.FC<WorkAreaProps> = ({ components, onUpdateComponents, onSelectComponent, frameSize, setFrameSize, frameColor }) => {
  const workAreaRef = useRef<HTMLDivElement>(null);
  const [showGrid, setShowGrid] = useState(true);
  const [showLayers, setShowLayers] = useState(false);
  const [gridSize, setGridSize] = useState(20);
  const [showGuides, setShowGuides] = useState(true);

  const [, drop] = useDrop(() => ({
    accept: ['component', 'existingComponent'],
    drop: (item: { type: PageComponent['type']; id?: string }, monitor) => {
      const offset = monitor.getClientOffset();
      const workAreaRect = workAreaRef.current?.getBoundingClientRect();
      if (offset && workAreaRect) {
        const x = offset.x - workAreaRect.left;
        const y = offset.y - workAreaRect.top;
        if (item.id) {
          updateComponentPosition(item.id, x, y);
        } else {
          addComponent(item.type, x, y);
        }
      }
    },
  }));

  useEffect(() => {
    if (workAreaRef.current) {
      drop(workAreaRef.current);
    }
  }, [drop]);

  const addComponent = useCallback((type: PageComponent['type'], x: number, y: number) => {
    const newComponent: PageComponent = createNewComponent(type, x, y);
    onUpdateComponents([...components, newComponent]);
  }, [components, onUpdateComponents]);

  const createNewComponent = (type: PageComponent['type'], x: number, y: number): PageComponent => {
    const baseProps = {
      id: uuidv4(),
      position: { x, y },
      size: { width: 200, height: 100 },
      zIndex: 1
    };

    switch (type) {
      case 'button':
        return { ...baseProps, type: 'button', settings: { text: 'Click me', color: '#000' } } as PageComponentButton;
      case 'text':
        return { ...baseProps, type: 'text', settings: { text: 'New Text' } } as PageComponentTexto;
      case 'image':
        return { ...baseProps, type: 'image', settings: { src: '' } } as PageComponentImagem;
      case 'menu':
        return { ...baseProps, type: 'menu', settings: { links: [] } } as PageComponentMenu;
      case 'video':
        return { ...baseProps, type: 'video', settings: { url: '' } } as PageComponentVideo;
      case 'form':
        return { ...baseProps, type: 'form', settings: { fields: [], submitButtonText: 'Submit' } } as PageComponentForm;
      case 'carousel':
        return { ...baseProps, type: 'carousel', settings: { images: [], autoPlay: true, interval: 5000 } } as PageComponentCarousel;
      case 'map':
        return { ...baseProps, type: 'map', settings: { latitude: 0, longitude: 0, zoom: 1 } } as PageComponentMap;
      default:
        throw new Error(`Unknown component type: ${type}`);
    }
  };

  const snapToGrid = (x: number, y: number) => {
    const snappedX = Math.round(x / gridSize) * gridSize;
    const snappedY = Math.round(y / gridSize) * gridSize;
    return { x: snappedX, y: snappedY };
  };

  const updateComponentPosition = useCallback((id: string, x: number, y: number) => {
    const snappedPosition = snapToGrid(x, y);
    onUpdateComponents(components.map(c =>
      c.id === id ? { ...c, position: snappedPosition } : c
    ));
  }, [components, onUpdateComponents, gridSize]);

  const updateComponentSize = useCallback((id: string, size: { width: number; height: number }) => {
    onUpdateComponents(components.map(c =>
      c.id === id ? { ...c, size } : c
    ));
  }, [components, onUpdateComponents]);

  const alignComponents = (alignment: 'left' | 'center' | 'right') => {
    const workAreaWidth = workAreaRef.current?.clientWidth || 0;
    const updatedComponents = components.map(c => {
      let newX;
      switch (alignment) {
        case 'left':
          newX = 0;
          break;
        case 'center':
          newX = (workAreaWidth - c.size.width) / 2;
          break;
        case 'right':
          newX = workAreaWidth - c.size.width;
          break;
      }
      return { ...c, position: { ...c.position, x: newX } };
    });
    onUpdateComponents(updatedComponents);
  };

  const moveComponentLayer = (id: string, direction: 'up' | 'down') => {
    const index = components.findIndex(c => c.id === id);
    if (index === -1) return;

    const newComponents = [...components];
    const component = newComponents[index];

    if (direction === 'up' && index < components.length - 1) {
      newComponents[index] = newComponents[index + 1];
      newComponents[index + 1] = component;
    } else if (direction === 'down' && index > 0) {
      newComponents[index] = newComponents[index - 1];
      newComponents[index - 1] = component;
    }

    onUpdateComponents(newComponents);
  };

  return (
    <Flex flex={1}>
      <Box flex={1} display="flex" flexDirection="column">
        <HStack mb={4} p={2} bg="gray.100">
          <Button onClick={() => alignComponents('left')}><FiAlignLeft /></Button>
          <Button onClick={() => alignComponents('center')}><FiAlignCenter /></Button>
          <Button onClick={() => alignComponents('right')}><FiAlignRight /></Button>
          <Button onClick={() => setShowGrid(!showGrid)}><FiGrid /></Button>
          <Button onClick={() => setShowLayers(!showLayers)}><FiLayers /></Button>
          <Button onClick={() => setShowGuides(!showGuides)}>Guides</Button>
          <NumberInput
            value={gridSize}
            onChange={(_, value) => setGridSize(value)}
            min={5}
            max={50}
            step={5}
            width="100px"
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </HStack>
        <Rnd
          size={{ width: frameSize.width, height: frameSize.height }}
          onResizeStop={(e, direction, ref) => {
            setFrameSize({
              width: ref.offsetWidth,
              height: ref.offsetHeight,
            });
          }}
          minWidth={200}
          minHeight={200}
          bounds="parent"
          style={{
            background: frameColor,
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          {components.map((component) => (
            <DraggableComponent
              key={component.id}
              component={component}
              onSelect={() => onSelectComponent(component)}
              onMove={(x, y) => updateComponentPosition(component.id, x, y)}
              onResize={(size) => updateComponentSize(component.id, size)}
              workAreaRef={workAreaRef}
              showGuides={showGuides}
              gridSize={gridSize}
            />
          ))}
        </Rnd>
      </Box>
      {showLayers && (
        <VStack width="200px" bg="gray.100" p={4} overflowY="auto">
          <Text fontWeight="bold">Layers</Text>
          {components.map((component, index) => (
            <HStack key={component.id} width="100%" justifyContent="space-between">
              <Text>{component.type}</Text>
              <HStack>
                <Button size="xs" onClick={() => moveComponentLayer(component.id, 'up')} isDisabled={index === components.length - 1}>↑</Button>
                <Button size="xs" onClick={() => moveComponentLayer(component.id, 'down')} isDisabled={index === 0}>↓</Button>
              </HStack>
            </HStack>
          ))}
        </VStack>
      )}
    </Flex>
  );
};

export default WorkArea;
