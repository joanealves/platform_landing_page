import React from 'react';
import { Box, VStack, Text, Icon, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { FiLayout, FiBox, FiCode, FiSettings, FiFileText, FiDownload, FiUpload } from 'react-icons/fi';

const SidebarItem = ({ icon, label, children }) => (
  <AccordionItem border="none">
    <h2>
      <AccordionButton py={4} _hover={{ bg: '#374151' }}>
        <Box flex="1" textAlign="left" display="flex" alignItems="center">
          <Icon as={icon} boxSize={6} mr={3} />
          <Text fontSize="sm" fontWeight="medium">{label}</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} pl={10}>
      {children}
    </AccordionPanel>
  </AccordionItem>
);

const Sidebar = () => {
  return (
    <Box width="250px" height="100%" bg="#1F2937" color="#E5E7EB" borderRight="1px solid #374151" display="flex" flexDirection="column">
      <Accordion allowMultiple defaultIndex={[0]} flex={1}>
        <SidebarItem icon={FiLayout} label="Frame">
          <VStack align="stretch" spacing={3}>
            <NavLink to="/board">
              <Text fontSize="sm" _hover={{ color: 'blue.300' }}>Board</Text>
            </NavLink>
          </VStack>
        </SidebarItem>
        <SidebarItem icon={FiFileText} label="Templates">
          <VStack align="stretch" spacing={3}>
            <NavLink to="/templates">
              <Text fontSize="sm" _hover={{ color: 'blue.300' }}>Browse Templates</Text>
            </NavLink>
          </VStack>
        </SidebarItem>
        <SidebarItem icon={FiBox} label="Components">
          <VStack align="stretch" spacing={3}>
            <NavLink to="/components">
              <Text fontSize="sm" _hover={{ color: 'blue.300' }}>All Components</Text>
            </NavLink>
          </VStack>
        </SidebarItem>
        <SidebarItem icon={FiCode} label="Code">
          <VStack align="stretch" spacing={3}>
            <NavLink to="/code/import">
              <Text fontSize="sm" _hover={{ color: 'blue.300' }}>
                <Icon as={FiUpload} mr={2} />
                Import Code
              </Text>
            </NavLink>
            <NavLink to="/code/export">
              <Text fontSize="sm" _hover={{ color: 'blue.300' }}>
                <Icon as={FiDownload} mr={2} />
                Export Code
              </Text>
            </NavLink>
          </VStack>
        </SidebarItem>
        <SidebarItem icon={FiSettings} label="Config">
          <VStack align="stretch" spacing={3}>
            <NavLink to="/config">
              <Text fontSize="sm" _hover={{ color: 'blue.300' }}>Settings</Text>
            </NavLink>
          </VStack>
        </SidebarItem>
      </Accordion>
    </Box>
  );
};

export default Sidebar;
