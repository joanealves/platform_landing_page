import React from 'react';
import { Box, Text, VStack, Input, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Button, HStack, Divider, Collapse } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const RightPanel = () => {
  const [isPositionOpen, setIsPositionOpen] = React.useState(true);
  const [isLayoutOpen, setIsLayoutOpen] = React.useState(false);
  const [isAppearanceOpen, setIsAppearanceOpen] = React.useState(false);
  const [isFillOpen, setIsFillOpen] = React.useState(false);

  return (
    <Box width="250px" bg="gray.700" p={4} borderRadius="lg" color="white">
      <VStack align="start" spacing={4}>

        {/* Position Section */}
        <Box width="100%">
          <HStack justify="space-between" onClick={() => setIsPositionOpen(!isPositionOpen)} cursor="pointer">
            <Text>Position</Text>
            {isPositionOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </HStack>
          <Collapse in={isPositionOpen}>
            <HStack mt={2}>
              <Input placeholder="X" size="sm" bg="gray.600" />
              <Input placeholder="Y" size="sm" bg="gray.600" />
            </HStack>
          </Collapse>
        </Box>
        
        <Divider />

        {/* Layout Section */}
        <Box width="100%">
          <HStack justify="space-between" onClick={() => setIsLayoutOpen(!isLayoutOpen)} cursor="pointer">
            <Text>Layout</Text>
            {isLayoutOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </HStack>
          <Collapse in={isLayoutOpen}>
            <HStack mt={2}>
              <Input placeholder="W" size="sm" bg="gray.600" />
              <Input placeholder="H" size="sm" bg="gray.600" />
            </HStack>
          </Collapse>
        </Box>

        <Divider />

        {/* Appearance Section */}
        <Box width="100%">
          <HStack justify="space-between" onClick={() => setIsAppearanceOpen(!isAppearanceOpen)} cursor="pointer">
            <Text>Appearance</Text>
            {isAppearanceOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </HStack>
          <Collapse in={isAppearanceOpen}>
            <Box mt={2}>
              <Text>Opacity</Text>
              <Slider aria-label="slider-ex-1" defaultValue={100}>
                <SliderTrack bg="gray.600">
                  <SliderFilledTrack bg="blue.400" />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Box>
          </Collapse>
        </Box>

        <Divider />

        {/* Fill Section */}
        <Box width="100%">
          <HStack justify="space-between" onClick={() => setIsFillOpen(!isFillOpen)} cursor="pointer">
            <Text>Fill</Text>
            {isFillOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </HStack>
          <Collapse in={isFillOpen}>
            <Box mt={2}>
              <Input type="color" size="sm" bg="gray.600" />
            </Box>
          </Collapse>
        </Box>

        <Divider />

        {/* Export Section */}
        <Box width="100%">
          <Text>Export</Text>
          <HStack mt={2}>
            <Button size="sm" colorScheme="blue">JPG</Button>
            <Button size="sm" colorScheme="blue">PNG</Button>
            <Button size="sm" colorScheme="blue">PDF</Button>
          </HStack>
        </Box>

      </VStack>
    </Box>
  );
};

export default RightPanel;
