import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'; // Alterado de SidebarMenu para Sidebar
import RightPanel from '../components/RightPanel';
import { PageComponent } from '../types/types';

interface DashboardLayoutProps {
  children: React.ReactNode;
  onExportModalOpen: () => void;
  onImportModalOpen: () => void;
  onFrameSettingsToggle: () => void;
  pageComponents: PageComponent[];
  selectedComponent: PageComponent | null;
  onUpdateComponent: (updatedComponent: PageComponent) => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  onExportModalOpen,
  onImportModalOpen,
  onFrameSettingsToggle,
  pageComponents,
  selectedComponent,
  onUpdateComponent
}) => {
  return (
    <Box height="100vh" width="100vw" overflow="hidden">
      <Navbar 
        onExportModalOpen={onExportModalOpen}
        onImportModalOpen={onImportModalOpen}
        onFrameSettingsToggle={onFrameSettingsToggle}
      />
      <Flex height="calc(100vh - 60px)">
        <Sidebar />
        <Box flex="1" overflow="auto">
          {children}
        </Box>
        <RightPanel 
          selectedComponent={selectedComponent}
          onUpdateComponent={onUpdateComponent}
        />
      </Flex>
    </Box>
  );
};

export default DashboardLayout;
