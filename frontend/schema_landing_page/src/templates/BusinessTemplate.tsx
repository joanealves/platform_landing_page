import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from './ServicesSection';
import TestimonialSection from './TestimonialSection';

const BusinessTemplate: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Bem-vindo ao Meu Negócio"
        subtitle="Oferecemos as melhores soluções para o seu negócio."
        buttonLabel="Saiba Mais"
        backgroundImage="url('/images/business-bg.jpg')"
      />
      <ServicesSection />
      <TestimonialSection />
    </>
  );
};

export default BusinessTemplate;
