import React, { useState } from 'react';
import { Box, Button, VStack, Input, Text } from '@chakra-ui/react';
import { SketchPicker } from 'react-color';

const ColorPicker = ({ label, color, setColor }) => {
  return (
    <Box>
      <Text mb={2}>{label}</Text>
      <SketchPicker
        color={color}
        onChangeComplete={(newColor) => setColor(newColor.hex)}
      />
    </Box>
  );
};

const ColorCustomization = () => {
  const [primaryColor, setPrimaryColor] = useState('#3182ce');
  const [secondaryColor, setSecondaryColor] = useState('#e2e8f0');

  return (
    <VStack spacing={6} mt={6}>
      <ColorPicker label="Cor Primária" color={primaryColor} setColor={setPrimaryColor} />
      <ColorPicker label="Cor Secundária" color={secondaryColor} setColor={setSecondaryColor} />

      <Button colorScheme="teal">Aplicar Cores</Button>
      <Box mt={10} p={4} bg={primaryColor} color={secondaryColor} borderRadius="md">
        <Text>Aqui está uma amostra de suas cores aplicadas.</Text>
      </Box>
    </VStack>
  );
};

export default ColorCustomization;
