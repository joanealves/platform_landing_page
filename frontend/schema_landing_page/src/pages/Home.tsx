import React, { useState } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import TopNavbar from '../components/TopNavbar';
import SidebarMenu from '../components/SidebarMenu';
import WorkArea from '../components/WorkArea';
import { PageComponent } from '../types/types';

const Home: React.FC = () => {
  const [pageComponents, setPageComponents] = useState<PageComponent[]>([]);
  const [frameSize, setFrameSize] = useState({ width: 1200, height: 800 });
  const [frameColor, setFrameColor] = useState('#FFFFFF');

  const handleFrameSizeChange = (width: number, height: number) => {
    setFrameSize({ width, height });
  };

  const handleFrameColorChange = (color: string) => {
    setFrameColor(color);
  };

  return (
    <Flex flexDirection="column" height="100vh" width="100vw" overflow="hidden">
      <TopNavbar />
      <Flex flex={1} overflow="hidden">
        <SidebarMenu
          pageComponents={pageComponents}
          onFrameSizeChange={handleFrameSizeChange}
          onFrameColorChange={handleFrameColorChange}
        />
        <Flex flex={1} flexDirection="column" overflow="hidden">
          <Box flex={1} overflow="auto" bg="#1F2937" p={4}>
            <WorkArea
              frameSize={frameSize}
              frameColor={frameColor}
              pageComponents={pageComponents}
              setPageComponents={setPageComponents}
              setSelectedComponent={() => {}}
            />
          </Box>
          <Box bg="#374151" height="40px" width="100%">
            {/* Adicione aqui os controles de zoom, etc. */}
          </Box>
        </Flex>
        <Box width="240px" bg="#1F2937" p={4}>
          <Box bg="#374151" p={4} borderRadius="md">
            <Text color="white" fontSize="sm">Properties</Text>
            <Text color="gray.400" fontSize="xs" mt={2}>
              Select a component to edit its properties
            </Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
