import { Box, Text, VStack } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Box bg="gray.900" p={4} width="250px" color="white" height="100vh" borderRadius="lg">
      <VStack align="start" spacing={4}>
        <NavLink to="/board">
          <Text>Frame</Text>
        </NavLink>
        <NavLink to="/templates">
          <Text>Templates</Text>
        </NavLink>
        <NavLink to="/components">
          <Text>Components</Text>
        </NavLink>
        <NavLink to="/layouts">
          <Text>Layouts</Text>
        </NavLink>
        <NavLink to="/code">
          <Text>Code</Text>
        </NavLink>
        <NavLink to="/crm">
          <Text>CRM</Text>
        </NavLink>
        <NavLink to="/configurations">
          <Text>Configs</Text>
        </NavLink>
      </VStack>
    </Box>
  );
};

export default Sidebar;
