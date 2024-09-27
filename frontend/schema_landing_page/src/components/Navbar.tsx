import { Box, HStack, Button, Text } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box bg="blue.600" color="white" p="4" mb="8">
      <HStack justify="space-between">
        <Text fontSize="xl">Dashboard</Text>
        <HStack>
          <Button colorScheme="teal">Invite</Button>
          <Button colorScheme="blue">Share</Button>
          <Button colorScheme="blue">Publish</Button>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
