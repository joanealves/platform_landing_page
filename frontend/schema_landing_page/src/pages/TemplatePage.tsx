import { Box, Button, Text } from '@chakra-ui/react';

const templates = [
  { id: '1', name: 'Template Negócios', color: 'blue' },
  { id: '2', name: 'Template Portfolio', color: 'green' },
];

const TemplatesPage = () => {
  return (
    <Box p={6}>
      <Text fontSize="2xl" mb={4}>Templates Disponíveis</Text>
      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={6}>
        {templates.map(template => (
          <Box key={template.id} textAlign="center" bg="gray.700" p={6} borderRadius="lg">
            <Text>{template.name}</Text>
            <Button mt={2} colorScheme={template.color}>Selecionar</Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TemplatesPage;
