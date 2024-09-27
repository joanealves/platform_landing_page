import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';  // Adicionando a importação de Box e Text do Chakra UI

interface CustomVideoProps {
  initialUrl: string;
  onUpdate: (url: string) => void;
}

const CustomVideo: React.FC<CustomVideoProps> = ({ initialUrl, onUpdate }) => {
  const [url, setUrl] = useState(initialUrl || ""); // Iniciar com string vazia se initialUrl não for fornecido

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value;
    setUrl(newUrl);
    onUpdate(newUrl);
  };

  return (
    <Box>
      {url ? (
        <iframe
          width="560"
          height="315"
          src={url}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      ) : (
        <Text>Por favor, insira um URL de vídeo válido</Text>
      )}
      <input
        type="text"
        value={url}
        onChange={handleChange}
        placeholder="Digite a URL do vídeo"
      />
    </Box>
  );
};

export default CustomVideo;
