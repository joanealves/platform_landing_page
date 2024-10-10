import React from 'react';
import { Flex, Button, Image, HStack, IconButton } from '@chakra-ui/react';
import { FiPlus, FiLayout } from 'react-icons/fi';
import { FaRegUserCircle } from 'react-icons/fa';

const TopNavbar: React.FC = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="0.5rem 1rem" bg="#374151" color="white">
      <HStack spacing={4}>
        <Image src="/path-to-your-logo.png" alt="Logo" height="30px" />
        <Button leftIcon={<FiPlus />} variant="ghost" size="sm">
          Insert
        </Button>
        <Button leftIcon={<FiLayout />} variant="ghost" size="sm">
          Templates
        </Button>
      </HStack>
      <HStack spacing={4}>
        <Button variant="ghost" size="sm">Invite</Button>
        <Button variant="ghost" size="sm">Share</Button>
        <Button colorScheme="blue" size="sm">Publish</Button>
        <IconButton
          icon={<FaRegUserCircle />}
          variant="ghost"
          aria-label="User profile"
          size="sm"
        />
      </HStack>
    </Flex>
  );
};

export default TopNavbar;