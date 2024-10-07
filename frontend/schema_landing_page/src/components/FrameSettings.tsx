import React, { useState } from 'react';
import { Box, Input, Text } from '@chakra-ui/react';

interface FrameSettingsProps {
  onFrameSizeChange: (width: number, height: number) => void;
  onFrameColorChange: (color: string) => void;
}

const FrameSettings: React.FC<FrameSettingsProps> = ({
  onFrameSizeChange,
  onFrameColorChange,
}) => {
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(600);
  const [color, setColor] = useState('#ffffff');

  const handleSizeChange = () => {
    onFrameSizeChange(width, height);
  };

  const handleColorChange = () => {
    onFrameColorChange(color);
  };

  return (
    <Box>
      <Text fontSize="lg" mb={2}>Configurações do Frame</Text>
      <Input
        placeholder="Largura"
        value={width}
        onChange={(e) => setWidth(parseInt(e.target.value))}
        onBlur={handleSizeChange}
        type="number"
        mb={2}
      />
      <Input
        placeholder="Altura"
        value={height}
        onChange={(e) => setHeight(parseInt(e.target.value))}
        onBlur={handleSizeChange}
        type="number"
        mb={2}
      />
      <Input
        placeholder="Cor"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        onBlur={handleColorChange}
        type="color"
        mb={2}
      />
    </Box>
  );
};

export default FrameSettings;
