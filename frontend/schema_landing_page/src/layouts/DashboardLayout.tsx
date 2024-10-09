import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import SidebarMenu from '../components/SidebarMenu';
import RightPanel from '../components/RightPanel';
import { PageComponent } from '../types/types'; // Adicione esta linha

interface DashboardLayoutProps {
  children: React.ReactNode;
  onExportModalOpen: () => void;
  onImportModalOpen: () => void;
  onFrameSettingsToggle: () => void;
  pageComponents: PageComponent[]; // Agora PageComponent está definido
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  onExportModalOpen,
  onImportModalOpen,
  onFrameSettingsToggle,
  pageComponents
}) => {
  return (
    <Box height="100vh" bg="#1F2937">
      <Navbar 
        onExportModalOpen={onExportModalOpen}
        onImportModalOpen={onImportModalOpen}
        onFrameSettingsToggle={onFrameSettingsToggle}
      />
      <Flex height="calc(100% - 60px)">
        <SidebarMenu />
        <Box flex="1" position="relative" overflow="auto">
          {children}
        </Box>
        <RightPanel pageComponents={pageComponents} />
      </Flex>
    </Box>
  );
};

export default DashboardLayout;
