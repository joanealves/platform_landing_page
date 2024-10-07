import React from 'react';
import { Box, Text, VStack, HStack } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaFileAlt,
  FaCogs,
  FaChartBar,
  FaCode,
  FaLayerGroup,
} from 'react-icons/fa';

const SidebarMenu = () => {
  return (
    <Box bg="gray.900" p={4} width="200px" color="white" height="100vh" borderRadius="lg">
      <VStack align="start" spacing={4}>
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <HStack>
            <FaHome />
            <Text>Área de Trabalho</Text>
          </HStack>
        </NavLink>
        <NavLink to="/templates" style={{ textDecoration: 'none' }}>
          <HStack>
            <FaFileAlt />
            <Text>Templates</Text>
          </HStack>
        </NavLink>
        <NavLink to="/components" style={{ textDecoration: 'none' }}>
          <HStack>
            <FaLayerGroup />
            <Text>Componentes</Text>
          </HStack>
        </NavLink>
        <NavLink to="/layouts" style={{ textDecoration: 'none' }}>
          <HStack>
            <FaLayerGroup />
            <Text>Layouts</Text>
          </HStack>
        </NavLink>
        <NavLink to="/code" style={{ textDecoration: 'none' }}>
          <HStack>
            <FaCode />
            <Text>Código</Text>
          </HStack>
        </NavLink>
        <NavLink to="/crm" style={{ textDecoration: 'none' }}>
          <HStack>
            <FaChartBar />
            <Text>CRM</Text>
          </HStack>
        </NavLink>
        <NavLink to="/configs" style={{ textDecoration: 'none' }}>
          <HStack>
            <FaCogs />
            <Text>Configurações</Text>
          </HStack>
        </NavLink>
      </VStack>
    </Box>
  );
};

export default SidebarMenu;
