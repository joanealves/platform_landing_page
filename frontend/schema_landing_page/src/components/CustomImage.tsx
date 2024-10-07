// src/components/CustomImage.tsx
import React, { useState } from 'react';
import { Box, Input } from '@chakra-ui/react';

const CustomImage = ({ onUpdate }: { onUpdate: (src: string) => void }) => {
  const [imageUrl, setImageUrl] = useState('');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const src = URL.createObjectURL(file);
      setImageUrl(src);
      onUpdate(src);
    }
  };

  return (
    <Box>
      <Input type="file" accept="image/*" onChange={handleImageChange} mb={2} />
      {imageUrl && <img src={imageUrl} alt="Custom" style={{ maxWidth: '100%' }} />}
    </Box>
  );
};

export default CustomImage;
