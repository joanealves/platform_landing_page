import React from 'react';
import { Box, Text } from '@chakra-ui/react';

interface StatsWidgetProps {
  title: string;
  value: string | number;
}

const StatsWidget: React.FC<StatsWidgetProps> = ({ title, value }) => {
  return (
    <Box bg="gray.700" p={6} borderRadius="lg" textAlign="center" color="white">
      <Text fontSize="xl">{title}</Text>
      <Text fontSize="4xl" mt={4}>{value}</Text>
    </Box>
  );
};

export default StatsWidget;
