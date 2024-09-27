import React, { useState, useEffect } from 'react';
import { Box, Input, Text } from '@chakra-ui/react';

const CustomText = ({
  initialText,
  onUpdate,
}: {
  initialText: string;
  onUpdate: (text: string) => void;
}) => {
  const [text, setText] = useState(initialText);

  useEffect(() => {
    onUpdate(text);
  }, [text, onUpdate]);

  return (
    <Box>
      <Input value={text} onChange={(e) => setText(e.target.value)} placeholder="Texto personalizado" mb={2} />
      <Text fontSize="lg">{text}</Text>
    </Box>
  );
};

export default CustomText;
