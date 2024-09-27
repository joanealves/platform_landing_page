import { Box, Heading, Text, SimpleGrid, VStack, Avatar } from '@chakra-ui/react';

interface Testimonial {
  name: string;
  feedback: string;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  { 
    name: 'Ana Silva', 
    feedback: 'O serviço foi excelente, superou minhas expectativas!', 
    imageUrl: 'https://via.placeholder.com/100' 
  },
  { 
    name: 'Carlos Souza', 
    feedback: 'Uma experiência fantástica, recomendo a todos.', 
    imageUrl: 'https://via.placeholder.com/100' 
  },
  { 
    name: 'Maria Oliveira', 
    feedback: 'Muito profissionalismo e agilidade no atendimento.', 
    imageUrl: 'https://via.placeholder.com/100' 
  },
];

const TestimonialSection = () => {
  return (
    <Box py={10} bg="gray.50">
      <VStack spacing={4} textAlign="center">
        <Heading as="h2" size="xl">
          O que nossos clientes dizem
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Veja alguns depoimentos de quem já trabalhou conosco.
        </Text>
      </VStack>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} mt={10}>
        {testimonials.map((testimonial, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" bg="white" borderRadius="md">
            <VStack spacing={4} textAlign="center">
              <Avatar src={testimonial.imageUrl} size="xl" />
              <Text fontSize="lg" fontWeight="bold">{testimonial.name}</Text>
              <Text color="gray.600">{testimonial.feedback}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TestimonialSection;
