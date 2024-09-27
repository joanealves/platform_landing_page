import { Box, Button, Text } from '@chakra-ui/react';

const layouts = [
  { id: '1', name: 'Layout 1', color: 'blue' },
  { id: '2', name: 'Layout 2', color: 'green' },
];

const LayoutsPage = () => {
  return (
    <Box p={6}>
      <Text fontSize="2xl" mb={4}>Layouts Disponíveis</Text>
      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={6}>
        {layouts.map(layout => (
          <Box key={layout.id} textAlign="center" bg="gray.700" p={6} borderRadius="lg">
            <Text>{layout.name}</Text>
            <Button mt={2} colorScheme={layout.color}>Selecionar</Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default LayoutsPage;
