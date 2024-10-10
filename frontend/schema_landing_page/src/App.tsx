import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Flex, VStack } from '@chakra-ui/react';
import DashboardPage from './pages/DashboardPage';
import SidebarMenu from './components/SidebarMenu';
import RightPanel from './components/RightPanel';
import TopNavbar from './components/TopNavbar';
import BottomToolbar from './components/BottomToolbar';
import { PageComponent } from './types/types';

const App = () => {
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [pageComponents, setPageComponents] = useState<PageComponent[]>([]);
  const [frameSize, setFrameSize] = useState({ width: 800, height: 600 });
  const [frameColor, setFrameColor] = useState('#ffffff');

  const handleFrameSizeChange = (width: number, height: number) => {
    setFrameSize({ width, height });
  };

  const handleFrameColorChange = (color: string) => {
    setFrameColor(color);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <VStack height="100vh" width="100vw" spacing={0}>
            <TopNavbar />
            <Flex flex={1} width="100%" overflow="hidden">
              <SidebarMenu
                pageComponents={pageComponents}
                onFrameSizeChange={handleFrameSizeChange}
                onFrameColorChange={handleFrameColorChange}
              />
              <Box flex={1} height="100%" overflowY="auto" bg="#1F2937" display="flex" flexDirection="column">
                <Box flex={1} overflowY="auto">
                  <DashboardPage
                    isExportModalOpen={isExportModalOpen}
                    setIsExportModalOpen={setIsExportModalOpen}
                    isImportModalOpen={isImportModalOpen}
                    setIsImportModalOpen={setIsImportModalOpen}
                    pageComponents={pageComponents}
                    setPageComponents={setPageComponents}
                    frameSize={frameSize}
                    frameColor={frameColor}
                  />
                </Box>
                <BottomToolbar />
              </Box>
              <RightPanel />
            </Flex>
          </VStack>
        } />
        {/* ... (outras rotas) */}
      </Routes>
    </Router>
  );
};

export default App;
