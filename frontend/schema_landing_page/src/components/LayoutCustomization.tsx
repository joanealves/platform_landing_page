import React, { useState } from 'react';
import { Box, Button, VStack, Input, Text, Select } from '@chakra-ui/react';
import { SketchPicker, ColorResult } from 'react-color';



interface FontCustomizationProps {
    label: string;
    font: string;
    setFont: (value: string) => void;
  }
  
  const FontCustomization = ({ label, font, setFont }: FontCustomizationProps) => {
    return (
      <Box>
        <Text mb={2}>{label}</Text>
        <Select value={font} onChange={(e) => setFont(e.target.value)}>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
        </Select>
      </Box>
    );
  };
  
  interface SpacingCustomizationProps {
    label: string;
    spacing: number;
    setSpacing: (value: number) => void;
  }
  
  const SpacingCustomization = ({ label, spacing, setSpacing }: SpacingCustomizationProps) => {
    return (
      <Box>
        <Text mb={2}>{label}</Text>
        <Input
          type="number"
          value={spacing}
          onChange={(e) => setSpacing(Number(e.target.value))}
          placeholder="Espaçamento (px)"
        />
      </Box>
    );
  };
  

  interface ColorPickerProps {
    label: string;
    color: string;
    setColor: (color: string) => void;
  }
  
  const ColorPicker = ({ label, color, setColor }: ColorPickerProps) => {
    return (
      <Box>
        <Text mb={2}>{label}</Text>
        <SketchPicker
          color={color}
          onChangeComplete={(newColor: ColorResult) => setColor(newColor.hex)}
        />
      </Box>
    );
  };
  
const LayoutCustomization = () => {
  const [primaryColor, setPrimaryColor] = useState('#3182ce');
  const [secondaryColor, setSecondaryColor] = useState('#e2e8f0');
  const [font, setFont] = useState('Arial');
  const [spacing, setSpacing] = useState(10); 

  return (
    <VStack spacing={6} mt={6}>
      <ColorPicker label="Cor Primária" color={primaryColor} setColor={setPrimaryColor} />
      <ColorPicker label="Cor Secundária" color={secondaryColor} setColor={setSecondaryColor} />
      <FontCustomization label="Fonte" font={font} setFont={setFont} />
      <SpacingCustomization label="Espaçamento" spacing={spacing} setSpacing={setSpacing} />

      <Button colorScheme="teal">Aplicar Customizações</Button>
      <Box mt={10} p={4} bg={primaryColor} color={secondaryColor} fontFamily={font} style={{ margin: `${spacing}px` }}>
        <Text>Aqui está uma amostra de suas customizações aplicadas.</Text>
      </Box>
    </VStack>
  );
};

export default LayoutCustomization;
