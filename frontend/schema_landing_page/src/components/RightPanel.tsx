import React, { useState } from 'react';
import {
  Box,
  VStack,
  Text,
  Input,
  Select,
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { PageComponent } from '../types/types';

interface RightPanelProps {
  selectedComponent: PageComponent | null;
  onUpdateComponent: (updatedComponent: PageComponent) => void;
}

const RightPanel: React.FC<RightPanelProps> = ({ selectedComponent, onUpdateComponent }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 1200, height: 1000 });
  const [fill, setFill] = useState('#FFFFFF');
  const [overflow, setOverflow] = useState('Hidden');

  const handlePositionChange = (axis: 'x' | 'y', value: string) => {
    const newPosition = { ...position, [axis]: parseInt(value) || 0 };
    setPosition(newPosition);
    if (selectedComponent) {
      onUpdateComponent({ ...selectedComponent, position: newPosition });
    }
  };

  const handleSizeChange = (dimension: 'width' | 'height', value: string) => {
    const newSize = { ...size, [dimension]: parseInt(value) || 0 };
    setSize(newSize);
    if (selectedComponent) {
      onUpdateComponent({ ...selectedComponent, size: newSize });
    }
  };

  return (
    <Box width="250px" height="100%" bg="#1F2937" color="#E5E7EB" borderLeft="1px solid #374151" p={4}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="lg" fontWeight="bold">Properties</Text>
        
        <Box>
          <Text mb={2}>Breakpoint</Text>
          <HStack>
            <Input
              placeholder="X"
              value={position.x}
              onChange={(e) => handlePositionChange('x', e.target.value)}
              size="sm"
            />
            <Input
              placeholder="Y"
              value={position.y}
              onChange={(e) => handlePositionChange('y', e.target.value)}
              size="sm"
            />
          </HStack>
        </Box>

        <Box>
          <Text mb={2}>Size</Text>
          <HStack>
            <Input
              placeholder="Width"
              value={size.width}
              onChange={(e) => handleSizeChange('width', e.target.value)}
              size="sm"
            />
            <Select size="sm" defaultValue="Fixed">
              <option value="Fixed">Fixed</option>
              <option value="Auto">Auto</option>
            </Select>
          </HStack>
          <HStack mt={2}>
            <Input
              placeholder="Height"
              value={size.height}
              onChange={(e) => handleSizeChange('height', e.target.value)}
              size="sm"
            />
            <Select size="sm" defaultValue="Fixed">
              <option value="Fixed">Fixed</option>
              <option value="Auto">Auto</option>
            </Select>
          </HStack>
        </Box>

        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Layout
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {/* Layout options */}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Cursor
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {/* Cursor options */}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Effects
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {/* Effects options */}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Styles
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text mb={2}>Fill</Text>
              <Input
                type="color"
                value={fill}
                onChange={(e) => setFill(e.target.value)}
                size="sm"
              />
              <Text mt={2} mb={2}>Overflow</Text>
              <Select
                value={overflow}
                onChange={(e) => setOverflow(e.target.value)}
                size="sm"
              >
                <option value="Hidden">Hidden</option>
                <option value="Visible">Visible</option>
                <option value="Scroll">Scroll</option>
              </Select>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Code Overrides
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {/* Code override options */}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </Box>
  );
};

export default RightPanel;
