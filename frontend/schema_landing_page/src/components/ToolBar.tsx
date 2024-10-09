import React from 'react';
import { Flex, IconButton, Tooltip } from '@chakra-ui/react';
import { DragHandleIcon, AddIcon, MinusIcon, ViewIcon } from '@chakra-ui/icons';

const ToolBar: React.FC = () => {
  return (
    <Flex bg="gray.800" p={2} justifyContent="center" width="100%">
      <Tooltip label="Mover">
        <IconButton aria-label="Mover" icon={<DragHandleIcon />} mr={2} />
      </Tooltip>
      <Tooltip label="Zoom In">
        <IconButton aria-label="Zoom In" icon={<AddIcon />} mr={2} />
      </Tooltip>
      <Tooltip label="Zoom Out">
        <IconButton aria-label="Zoom Out" icon={<MinusIcon />} mr={2} />
      </Tooltip>
      <Tooltip label="Pan">
        <IconButton aria-label="Pan" icon={<ViewIcon />} />
      </Tooltip>
    </Flex>
  );
};

export default ToolBar;