import React, { useState } from 'react';
import { Box, Heading, Input, Button } from '@chakra-ui/react';

interface ContactSectionProps {
  initialTitle: string;
  initialNamePlaceholder: string;
  initialEmailPlaceholder: string;
  initialMessagePlaceholder: string;
  buttonColor: string;
  successMessage: string;
}

const ContactSection = ({
  initialTitle,
  initialNamePlaceholder,
  initialEmailPlaceholder,
  initialMessagePlaceholder,
  buttonColor,
  successMessage,
}: ContactSectionProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // Lógica de envio de formulário
    setSubmitted(true);
  };

  return (
    <Box mt={10} p={4} bg="gray.100" borderRadius="md">
      <Heading size="md">{initialTitle}</Heading>
      <Input
        placeholder={initialNamePlaceholder}
        value={name}
        onChange={(e) => setName(e.target.value)}
        mt={4}
      />
      <Input
        placeholder={initialEmailPlaceholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        mt={4}
      />
      <Input
        placeholder={initialMessagePlaceholder}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        mt={4}
      />
      <Button colorScheme={buttonColor} onClick={handleSubmit} mt={4}>
        Enviar
      </Button>
      {submitted && <Box mt={4}>{successMessage}</Box>}
    </Box>
  );
};

export default ContactSection;
