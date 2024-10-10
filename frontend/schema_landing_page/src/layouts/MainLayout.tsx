import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import RightPanel from '../components/RightPanel';
import TopNavbar from '../components/TopNavbar';
import BottomToolbar from '../components/BottomToolbar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Flex direction="column" height="100vh" width="100vw" overflow="hidden">
      <TopNavbar />
      <Flex flex={1} width="100%">
        <Sidebar />
        <Box flex={1} overflow="auto" bg="gray.100" display="flex" flexDirection="column">
          <Box flex={1} overflow="auto">
            {children}
          </Box>
          <BottomToolbar />
        </Box>
        <RightPanel selectedComponent={null} onUpdateComponent={() => {}} />
      </Flex>
    </Flex>
  );
};

export default MainLayout;
