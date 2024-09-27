import React, { useState } from 'react';
import { Box, Button, Input, Image, VStack, Select } from '@chakra-ui/react';

interface ImageData {
  id: number;
  url: string;
}

const ImageGallery: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [newImageUrl, setNewImageUrl] = useState('');
  const [layout, setLayout] = useState<'grid' | 'slider'>('grid');

  const handleAddImage = () => {
    if (newImageUrl) {
      setImages([...images, { id: Date.now(), url: newImageUrl }]);
      setNewImageUrl('');
    }
  };

  const handleRemoveImage = (id: number) => {
    setImages(images.filter(image => image.id !== id));
  };

  return (
    <VStack>
      <Input
        placeholder="Insira a URL da imagem"
        value={newImageUrl}
        onChange={(e) => setNewImageUrl(e.target.value)}
      />
      <Button onClick={handleAddImage} colorScheme="teal">Adicionar Imagem</Button>

      {/* Opção para escolher o layout */}
      <Select mt={4} value={layout} onChange={(e) => setLayout(e.target.value as 'grid' | 'slider')}>
        <option value="grid">Grade</option>
        <option value="slider">Slider</option>
      </Select>

      {/* Exibição de imagens em layout de grade ou slider */}
      <Box display="flex" flexWrap={layout === 'grid' ? 'wrap' : 'nowrap'} overflowX={layout === 'slider' ? 'scroll' : 'visible'} mt={4}>
        {images.map((image) => (
          <Box key={image.id} m={2} position="relative">
            <Image src={image.url} alt="Imagem do portfólio" boxSize="200px" objectFit="cover" />
            <Button
              size="sm"
              colorScheme="red"
              position="absolute"
              top="0"
              right="0"
              onClick={() => handleRemoveImage(image.id)}
            >
              Remover
            </Button>
          </Box>
        ))}
      </Box>
    </VStack>
  );
};

export default ImageGallery;
