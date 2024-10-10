import React from 'react';
import { Flex, Box, Button, Icon, Spacer, Avatar, useBreakpointValue } from '@chakra-ui/react';
import { FaPlus, FaRegFileAlt } from 'react-icons/fa';

const TopNavbar: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="#374151"
      color="white"
      width="100%"
    >
      <Flex align="center" mr={5}>
        <Icon as={FaRegFileAlt} w={6} h={6} mr={2} />
        <Box fontWeight="bold">Untitled</Box>
      </Flex>
      
      {!isMobile && (
        <Flex>
          <Button leftIcon={<FaPlus />} variant="outline" size="sm" mr={2}>
            Insert
          </Button>
          <Button variant="outline" size="sm" mr={2}>
            Templates
          </Button>
        </Flex>
      )}
      
      <Spacer />
      
      <Flex align="center">
        {!isMobile && (
          <>
            <Button variant="ghost" size="sm" mr={2}>
              Invite
            </Button>
            <Button variant="ghost" size="sm" mr={2}>
              Share
            </Button>
          </>
        )}
        <Button colorScheme="blue" size="sm" mr={4}>
          Publish
        </Button>
        <Avatar size="sm" name="User" src="https://bit.ly/broken-link" />
      </Flex>
    </Flex>
  );
};

export default TopNavbar;