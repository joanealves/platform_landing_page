import React from 'react';
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
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

interface Component {
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
    textAlign?: string;
  };
  zIndex?: number;
}

interface RightPanelProps {
  selectedComponent: Component | null;
  onUpdateComponent: (updatedComponent: Component) => void;
  onDuplicateComponent: (component: Component) => void;
  onDeleteComponent: (componentId: string) => void;
}

const RightPanel: React.FC<RightPanelProps> = ({
  selectedComponent,
  onUpdateComponent,
  onDuplicateComponent,
  onDeleteComponent,
}) => {
  if (!selectedComponent) {
    return (
      <Box width="250px" height="100%" bg="#1F2937" color="#E5E7EB" borderLeft="1px solid #374151" p={4}>
        <Text>Select a component to edit its properties</Text>
      </Box>
    );
  }

  const handleChange = (key: string, value: any) => {
    onUpdateComponent({
      ...selectedComponent,
      [key]: value,
    });
  };

  const handleStyleChange = (key: string, value: any) => {
    onUpdateComponent({
      ...selectedComponent,
      style: {
        ...selectedComponent.style,
        [key]: value,
      },
    });
  };

  return (
    <Box width="250px" height="100%" bg="#1F2937" color="#E5E7EB" borderLeft="1px solid #374151" p={4} overflowY="auto">
      <VStack spacing={4} align="stretch">
        <Text fontSize="lg" fontWeight="bold">Properties</Text>
        
        <Box>
          <Text mb={2}>Position</Text>
          <HStack>
            <NumberInput
              value={selectedComponent.position.x}
              onChange={(_, value) => handleChange('position', { ...selectedComponent.position, x: value })}
              size="sm"
            >
              <NumberInputField placeholder="X" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <NumberInput
              value={selectedComponent.position.y}
              onChange={(_, value) => handleChange('position', { ...selectedComponent.position, y: value })}
              size="sm"
            >
              <NumberInputField placeholder="Y" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </HStack>
        </Box>

        <Box>
          <Text mb={2}>Size</Text>
          <HStack>
            <NumberInput
              value={selectedComponent.size.width}
              onChange={(_, value) => handleChange('size', { ...selectedComponent.size, width: value })}
              size="sm"
            >
              <NumberInputField placeholder="Width" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <NumberInput
              value={selectedComponent.size.height}
              onChange={(_, value) => handleChange('size', { ...selectedComponent.size, height: value })}
              size="sm"
            >
              <NumberInputField placeholder="Height" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </HStack>
        </Box>

        {selectedComponent.type === 'text' && (
          <Box>
            <Text mb={2}>Content</Text>
            <Input
              value={selectedComponent.content || ''}
              onChange={(e) => handleChange('content', e.target.value)}
              size="sm"
            />
          </Box>
        )}

        <Box>
          <Text mb={2}>Z-Index</Text>
          <NumberInput
            value={selectedComponent.zIndex || 0}
            onChange={(_, value) => handleChange('zIndex', value)}
            size="sm"
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Box>

        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Style
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <VStack spacing={3} align="stretch">
                <Box>
                  <Text mb={2}>Font Size</Text>
                  <Slider
                    min={8}
                    max={72}
                    step={1}
                    value={selectedComponent.style?.fontSize || 16}
                    onChange={(value) => handleStyleChange('fontSize', value)}
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>
                </Box>
                <Box>
                  <Text mb={2}>Font Weight</Text>
                  <Select
                    value={selectedComponent.style?.fontWeight || 'normal'}
                    onChange={(e) => handleStyleChange('fontWeight', e.target.value)}
                    size="sm"
                  >
                    <option value="normal">Normal</option>
                    <option value="bold">Bold</option>
                  </Select>
                </Box>
                <Box>
                  <Text mb={2}>Color</Text>
                  <Input
                    type="color"
                    value={selectedComponent.style?.color || '#000000'}
                    onChange={(e) => handleStyleChange('color', e.target.value)}
                    size="sm"
                  />
                </Box>
                <Box>
                  <Text mb={2}>Background Color</Text>
                  <Input
                    type="color"
                    value={selectedComponent.style?.backgroundColor || '#FFFFFF'}
                    onChange={(e) => handleStyleChange('backgroundColor', e.target.value)}
                    size="sm"
                  />
                </Box>
                <Box>
                  <Text mb={2}>Border Radius</Text>
                  <Slider
                    min={0}
                    max={50}
                    step={1}
                    value={selectedComponent.style?.borderRadius || 0}
                    onChange={(value) => handleStyleChange('borderRadius', value)}
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>
                </Box>
                <Box>
                  <Text mb={2}>Padding</Text>
                  <Slider
                    min={0}
                    max={50}
                    step={1}
                    value={selectedComponent.style?.padding || 0}
                    onChange={(value) => handleStyleChange('padding', value)}
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>
                </Box>
                <Box>
                  <Text mb={2}>Text Align</Text>
                  <Select
                    value={selectedComponent.style?.textAlign || 'left'}
                    onChange={(e) => handleStyleChange('textAlign', e.target.value)}
                    size="sm"
                  >
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                    <option value="justify">Justify</option>
                  </Select>
                </Box>
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <HStack spacing={2}>
          <Button colorScheme="blue" onClick={() => onDuplicateComponent(selectedComponent)}>
            Duplicate
          </Button>
          <Button colorScheme="red" onClick={() => onDeleteComponent(selectedComponent.id)}>
            Delete
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default RightPanel;