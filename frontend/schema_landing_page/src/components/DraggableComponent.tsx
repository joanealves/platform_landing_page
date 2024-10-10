import React, { useRef, useEffect, useState } from 'react';
import { Box, Text, Image, Button, Input, Textarea, Select } from '@chakra-ui/react';
import { useDrag } from 'react-dnd';
import { Resizable, ResizeCallbackData } from 'react-resizable';
import 'react-resizable/css/styles.css';

interface DraggableComponentProps {
  component: {
    id: string;
    type: string;
    position: { x: number; y: number };
    size: { width: number; height: number };
    content?: string;
    style?: {
      fontSize?: number;
      fontWeight?: string;
      color?: string;
      backgroundColor?: string;
      borderRadius?: number;
      padding?: number;
    };
    zIndex?: number;
  };
  onSelect: () => void;
  onMove: (x: number, y: number) => void;
  onResize: (size: { width: number; height: number }) => void;
  workAreaRef: React.RefObject<HTMLDivElement>;
  showGuides: boolean;
  gridSize: number;
}

const DraggableComponent: React.FC<DraggableComponentProps> = ({
  component,
  onSelect,
  onMove,
  onResize,
  workAreaRef,
  showGuides,
  gridSize,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [showVerticalGuide, setShowVerticalGuide] = useState(false);
  const [showHorizontalGuide, setShowHorizontalGuide] = useState(false);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'existingComponent',
    item: { id: component.id, type: component.type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        const clientOffset = monitor.getClientOffset();
        if (clientOffset && workAreaRef.current) {
          const workAreaRect = workAreaRef.current.getBoundingClientRect();
          const x = clientOffset.x - workAreaRect.left;
          const y = clientOffset.y - workAreaRect.top;
          onMove(x, y);
        }
      }
    },
  }), [component.id, component.type, onMove, workAreaRef]);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translate(${component.position.x}px, ${component.position.y}px)`;
    }
  }, [component.position]);

  const handleResize = (e: React.SyntheticEvent, data: ResizeCallbackData) => {
    const newSize = {
      width: Math.round(data.size.width / gridSize) * gridSize,
      height: Math.round(data.size.height / gridSize) * gridSize,
    };
    onResize(newSize);
  };

  const checkAlignment = () => {
    if (!workAreaRef.current || !ref.current) return;

    const workAreaRect = workAreaRef.current.getBoundingClientRect();
    const componentRect = ref.current.getBoundingClientRect();

    const isAlignedVertically = Math.abs(componentRect.left - workAreaRect.left) < 5 ||
                                Math.abs(componentRect.right - workAreaRect.right) < 5;
    const isAlignedHorizontally = Math.abs(componentRect.top - workAreaRect.top) < 5 ||
                                  Math.abs(componentRect.bottom - workAreaRect.bottom) < 5;

    setShowVerticalGuide(isAlignedVertically);
    setShowHorizontalGuide(isAlignedHorizontally);
  };

  useEffect(() => {
    checkAlignment();
  }, [component.position]);

  const renderComponent = () => {
    const style = {
      ...component.style,
      width: '100%',
      height: '100%',
    };
    
    switch (component.type) {
      case 'text':
        return <Text style={style}>{component.content}</Text>;
      case 'image':
        return <Image src="https://via.placeholder.com/150" alt="Placeholder" style={style} />;
      case 'button':
        return <Button style={style}>Click me</Button>;
      case 'input':
        return <Input placeholder="Enter text" style={style} />;
      case 'textarea':
        return <Textarea placeholder="Enter long text" style={style} />;
      case 'select':
        return (
          <Select placeholder="Select option" style={style}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Resizable
        width={component.size.width}
        height={component.size.height}
        onResize={handleResize}
        draggableOpts={{ grid: [gridSize, gridSize] }}
      >
        <Box
          ref={(node) => {
            ref.current = node;
            drag(node);
          }}
          position="absolute"
          width={`${component.size.width}px`}
          height={`${component.size.height}px`}
          opacity={isDragging ? 0.5 : 1}
          cursor="move"
          onClick={onSelect}
          border="1px dashed gray"
          p={2}
          zIndex={component.zIndex || 0}
          borderRadius={`${component.style?.borderRadius || 0}px`}
          padding={`${component.style?.padding || 0}px`}
          backgroundColor={component.style?.backgroundColor || 'white'}
          style={{
            transform: `translate(${component.position.x}px, ${component.position.y}px)`,
          }}
        >
          {renderComponent()}
        </Box>
      </Resizable>
      {showGuides && showVerticalGuide && (
        <Box
          position="absolute"
          left={component.position.x}
          top={0}
          width="1px"
          height="100%"
          bg="red"
          zIndex={9999}
        />
      )}
      {showGuides && showHorizontalGuide && (
        <Box
          position="absolute"
          left={0}
          top={component.position.y}
          width="100%"
          height="1px"
          bg="red"
          zIndex={9999}
        />
      )}
    </>
  );
};

export default DraggableComponent;