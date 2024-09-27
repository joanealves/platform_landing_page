import React, { useState, useEffect } from 'react';
import { Box, Button, Input, Select } from '@chakra-ui/react';

interface CustomButtonProps {
  initialText: string;
  initialColor: string;
  onUpdate: (text: string, color: string) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ initialText, initialColor, onUpdate }) => {
  const [text, setText] = useState(initialText);
  const [color, setColor] = useState(initialColor);

  useEffect(() => {
    onUpdate(text, color); // Notifica o componente pai das mudanças
  }, [text, color, onUpdate]);

  return (
    <Box>
      <Input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Texto do botão" 
        mb={2} 
      />
      <Select 
        value={color} 
        onChange={(e) => setColor(e.target.value)} 
        mb={2}
      >
        <option value="teal">Teal</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
      </Select>
      <Button colorScheme={color} size="md">{text}</Button>
    </Box>
  );
};

export default CustomButton;
