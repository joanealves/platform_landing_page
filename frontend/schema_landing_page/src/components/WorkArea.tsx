// src/components/WorkArea.tsx

import React from 'react';
import { Box, Text } from '@chakra-ui/react';

interface WorkAreaProps {
  children: React.ReactNode;
}

const WorkArea: React.FC<WorkAreaProps> = ({ children }) => {
  return (
    <Box height="100%" width="100%" overflow="auto" bg="white" p={4} position="relative">
      <Text position="absolute" top={0} left={0} bg="green.500" color="white" p={2}>
        WorkArea
      </Text>
      {children}
    </Box>
  );
};

export default WorkArea;