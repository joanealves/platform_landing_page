// src/pages/CRMPage.tsx
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const CRMPage = () => {
  return (
    <Box p={6} color="white">
      <Text fontSize="2xl">CRM Dashboard</Text>
      {/* Aqui você pode adicionar os componentes do seu CRM */}
      <Box mt={4}>
        <Text>Usuários: 1,230</Text>
        <Text>Vendas: $12,300</Text>
        <Text>Novos Leads: 120</Text>
      </Box>
    </Box>
  );
};

export default CRMPage;
