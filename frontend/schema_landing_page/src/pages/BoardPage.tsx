import React, { useState } from 'react';
import { Box, Text, Select, Input } from '@chakra-ui/react';
import DroppableArea from '../components/DrappableArea';

const BoardPage = () => {
  const [frameSize, setFrameSize] = useState('web');
  const [frameColor, setFrameColor] = useState('#ffffff');
  const [customWidth, setCustomWidth] = useState('1000px');
  const [customHeight, setCustomHeight] = useState('800px');

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const componentType = event.dataTransfer.getData('componentType');
    console.log('Componente solto no board:', componentType);
    // Aqui você pode adicionar a lógica para criar um novo componente
  };

  const handleFrameSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFrameSize(e.target.value);
  };

  const getFrameDimensions = () => {
    switch (frameSize) {
      case 'mobile':
        return { width: '375px', height: '667px' };
      case 'tablet':
        return { width: '768px', height: '1024px' };
      case 'custom':
        return { width: customWidth, height: customHeight };
      default:
        return { width: '1000px', height: '800px' };
    }
  };

  return (
    <Box color="white">
      <Box mb={4}>
        <Text fontSize="lg">Escolha o Tamanho do Frame</Text>
        <Select onChange={handleFrameSizeChange} value={frameSize}>
          <option value="web">Web</option>
          <option value="tablet">Tablet</option>
          <option value="mobile">Mobile</option>
          <option value="custom">Custom</option>
        </Select>
        {frameSize === 'custom' && (
          <Box mt={2}>
            <Input
              placeholder="Largura (px)"
              value={customWidth}
              onChange={(e) => setCustomWidth(e.target.value)}
              mb={2}
            />
            <Input
              placeholder="Altura (px)"
              value={customHeight}
              onChange={(e) => setCustomHeight(e.target.value)}
            />
          </Box>
        )}
      </Box>

      <Box mb={4}>
        <Text fontSize="lg">Escolha a Cor do Frame</Text>
        <Input
          type="color"
          value={frameColor}
          onChange={(e) => setFrameColor(e.target.value)}
        />
      </Box>

      <Box
        bg={frameColor}
        width={getFrameDimensions().width}
        height={getFrameDimensions().height}
        border="2px solid #ccc"
        p={4}
        borderRadius="lg"
        overflow="hidden"
      >
        <DroppableArea onDrop={handleDrop}>
          <Text color="black">Área de Trabalho (Board)</Text>
        </DroppableArea>
      </Box>
    </Box>
  );
};

export default BoardPage;
