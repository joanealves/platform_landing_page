import { Box, Heading, Text, SimpleGrid, VStack } from '@chakra-ui/react';

interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  { title: 'Design', description: 'Criamos designs incríveis e responsivos.' },
  { title: 'Desenvolvimento', description: 'Desenvolvemos websites e aplicativos.' },
  { title: 'Marketing', description: 'Ajudamos você a promover seu negócio.' },
];

const ServicesSection = () => {
  return (
    <Box py={10} bg="gray.100">
      <VStack spacing={4} textAlign="center">
        <Heading as="h2" size="xl">
          Nossos Serviços
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Oferecemos uma ampla gama de serviços para impulsionar seu negócio.
        </Text>
      </VStack>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} mt={10}>
        {services.map((service, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" bg="white" borderRadius="md">
            <Heading fontSize="xl">{service.title}</Heading>
            <Text mt={4}>{service.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ServicesSection;
