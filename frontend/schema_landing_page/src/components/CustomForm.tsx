import { Box, Input, Button } from '@chakra-ui/react';

interface CustomFormProps {
  title: string;
  fields: string[];
}

const CustomForm: React.FC<CustomFormProps> = ({ title, fields }) => {
  return (
    <Box bg="gray.700" p={4} borderRadius="md" color="white">
      <h2>{title}</h2>
      {fields.map((field, index) => (
        <Input key={index} placeholder={field} mb={3} />
      ))}
      <Button colorScheme="teal">Enviar</Button>
    </Box>
  );
};

export default CustomForm;
