// src/components/CustomForm.tsx
import { Box, Input, Button, Heading } from '@chakra-ui/react';

interface CustomFormProps {
  title: string;
  fields: string[];
}

const CustomForm: React.FC<CustomFormProps> = ({ title, fields }) => {
  return (
    <Box bg="gray.700" p={4} borderRadius="md" color="white">
      <Heading size="md" mb={4}>{title}</Heading>
      {fields.map((field, index) => (
        <Input key={index} placeholder={field} mb={3} />
      ))}
      <Button colorScheme="teal">Enviar</Button>
    </Box>
  );
};

export default CustomForm;
