import { Box } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Box bg="gray.900" p={4} width="250px" color="white" height="100vh">
      <NavLink to="/board" style={{ marginBottom: '20px', display: 'block' }}>Frame</NavLink>
      <NavLink to="/templates" style={{ marginBottom: '20px', display: 'block' }}>Templates</NavLink>
      <NavLink to="/components" style={{ marginBottom: '20px', display: 'block' }}>Components</NavLink>
      <NavLink to="/layouts" style={{ marginBottom: '20px', display: 'block' }}>Layouts</NavLink>
      <NavLink to="/code" style={{ marginBottom: '20px', display: 'block' }}>Code</NavLink>
      <NavLink to="/crm" style={{ marginBottom: '20px', display: 'block' }}>CRM</NavLink>
      <NavLink to="/configurations" style={{ marginBottom: '20px', display: 'block' }}>Configs</NavLink>
    </Box>
  );
};

export default Sidebar;
