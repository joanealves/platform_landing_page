import React, { useState } from 'react';
import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';

interface ImageGalleryProps {
  onSelectImage: (image: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ onSelectImage }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/250',
  ];

  const handleSelectImage = (image: string) => {
    setSelectedImage(image);
    onSelectImage(image); 
  };

  return (
    <Box>
      <Text mb={4}>Selecione uma Imagem</Text>
      <SimpleGrid columns={3} spacing={4}>
        {images.map((image) => (
          <Box
            key={image}
            border={selectedImage === image ? '2px solid teal' : '1px solid #ccc'}
            p={2}
          >
            <Image
              src={image}
              alt="Gallery Image"
              onClick={() => handleSelectImage(image)}
              cursor="pointer"
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ImageGallery;
