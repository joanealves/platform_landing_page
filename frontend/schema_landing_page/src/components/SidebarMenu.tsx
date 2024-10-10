import React from 'react';
import { VStack, Box, Icon, Text } from '@chakra-ui/react';
import { FaRegFileAlt, FaRegImage, FaRegObjectGroup, FaRegClone, FaCode, FaCog } from 'react-icons/fa';
import { PageComponent } from '../types/types';

interface SidebarMenuProps {
  pageComponents: PageComponent[];
  onFrameSizeChange: (width: number, height: number) => void;
  onFrameColorChange: (color: string) => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = () => {
  const menuItems = [
    { icon: FaRegFileAlt, label: 'FRAME' },
    { icon: FaRegImage, label: 'ASSETS' },
    { icon: FaRegObjectGroup, label: 'COMPONENTS' },
    { icon: FaRegClone, label: 'LAYOUTS' },
    { icon: FaCode, label: 'CODE' },
    { icon: FaCog, label: 'CONFIG' },
  ];

  return (
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
        >
          <Icon as={item.icon} w={6} h={6} mb={2} />
          <Text fontSize="xs">{item.label}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default SidebarMenu;
