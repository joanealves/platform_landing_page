import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Cliente 1',
      testimonial: 'Esse serviço mudou a minha vida! Recomendo a todos.',
    },
    {
      id: 2,
      name: 'Cliente 2',
      testimonial: 'O atendimento foi excelente e o resultado superou minhas expectativas.',
    },
    {
      id: 3,
      name: 'Cliente 3',
      testimonial: 'Altamente recomendado. Profissionalismo e qualidade.',
    },
  ];

  return (
    <VStack spacing={4} mt={8}>
      <Swiper spaceBetween={50} slidesPerView={1}>
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <Box p={6} border="1px solid #ccc" borderRadius="md" bg="gray.100">
              <Text fontSize="lg" fontStyle="italic">"{item.testimonial}"</Text>
              <Text fontWeight="bold" mt={4}>- {item.name}</Text>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </VStack>
  );
};

export default TestimonialsCarousel;
