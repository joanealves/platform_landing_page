import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Navbar from '../components/Navbar';  
import Sidebar from '../components/Sidebar'; 
import RightPanel from '../components/RightPanel'; 

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box height="100vh" bg="gray.800" color="white">
      {/* Menu Superior */}
      <Navbar />

      <Flex height="calc(100% - 60px)" padding="20px" gap="20px">
        {/* Menu Lateral Esquerdo */}
        <Sidebar />

        {/* Área Principal (Board) */}
        <Box flex="1" bg="gray.900" p={4} borderRadius="lg" overflow="auto">
          {children}
        </Box>

        {/* Menu Lateral Direito (Painel de Configurações) */}
        <RightPanel />
      </Flex>
    </Box>
  );
};

export default DashboardLayout;
