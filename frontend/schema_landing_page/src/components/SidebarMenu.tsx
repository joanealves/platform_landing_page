import React, { useState } from 'react';
import { VStack, Box, Text, Icon, Collapse, Button } from '@chakra-ui/react';
import { FaRegFileAlt, FaRegImage, FaRegObjectGroup, FaRegClone, FaCode, FaCog } from 'react-icons/fa';
import { PageComponent } from '../types/types';
import DraggableItem from './DraggableItem';
import CodeExporter from './CodeExporter';
import FrameSettings from './FrameSettings';

interface SidebarMenuProps {
  pageComponents: PageComponent[];
  onFrameSizeChange: (width: number, height: number) => void;
  onFrameColorChange: (color: string) => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ pageComponents, onFrameSizeChange, onFrameColorChange }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menuItems = [
    { icon: FaRegFileAlt, label: 'FRAME', content: <FrameSettings onFrameSizeChange={onFrameSizeChange} onFrameColorChange={onFrameColorChange} /> },
    { icon: FaRegImage, label: 'ASSETS', content: <Text>Assets content here</Text> },
    { icon: FaRegObjectGroup, label: 'COMPONENTS', content: (
      <>
        <DraggableItem id="button" type="button" label="Botão" icon={FaRegObjectGroup} />
        <DraggableItem id="text" type="text" label="Texto" icon={FaRegObjectGroup} />
        <DraggableItem id="image" type="image" label="Imagem" icon={FaRegObjectGroup} />
      </>
    ) },
    { icon: FaRegClone, label: 'LAYOUTS', content: <Text>Layouts content here</Text> },
    { icon: FaCode, label: 'CODE', content: <CodeExporter components={pageComponents} /> },
    { icon: FaCog, label: 'CONFIG', content: <Text>Config content here</Text> },
  ];

  const toggleMenu = (label: string) => {
    setActiveMenu(activeMenu === label ? null : label);
  };

  return (
    <Box display="flex" height="100%">
      <VStack
        spacing={0}
        align="stretch"
        bg="#111827"
        width="80px"
        height="100%"
        color="#E5E7EB"
        py={4}
      >
        {menuItems.map((item, index) => (
          <Box
            key={index}
            py={4}
            px={2}
            _hover={{ bg: '#1F2937' }}
            cursor="pointer"
            textAlign="center"
            onClick={() => toggleMenu(item.label)}
            bg={activeMenu === item.label ? '#1F2937' : 'transparent'}
          >
            <Icon as={item.icon} w={6} h={6} mb={2} />
            <Text fontSize="xs">{item.label}</Text>
          </Box>
        ))}
      </VStack>
      <Box width="200px" bg="#1F2937" p={4} overflowY="auto">
        {menuItems.map((item, index) => (
          <Collapse key={index} in={activeMenu === item.label}>
            {item.content}
          </Collapse>
        ))}
      </Box>
    </Box>
  );
};

export default SidebarMenu;
