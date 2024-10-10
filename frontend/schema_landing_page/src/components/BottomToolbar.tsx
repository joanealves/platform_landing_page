import React from 'react';
import { Flex, IconButton, Tooltip } from '@chakra-ui/react';
import { MdPanTool, MdZoomIn, MdZoomOut, MdCrop, MdUndo, MdRedo } from 'react-icons/md';

const BottomToolbar: React.FC = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="center"
      wrap="wrap"
      padding="0.5rem"
      bg="#1F2937"
      color="white"
      width="100%"
    >
      <Tooltip label="Pan">
        <IconButton
          aria-label="Pan"
          icon={<MdPanTool />}
          variant="ghost"
          colorScheme="whiteAlpha"
          size="sm"
          mr={2}
        />
      </Tooltip>
      <Tooltip label="Zoom In">
        <IconButton
          aria-label="Zoom In"
          icon={<MdZoomIn />}
          variant="ghost"
          colorScheme="whiteAlpha"
          size="sm"
          mr={2}
        />
      </Tooltip>
      <Tooltip label="Zoom Out">
        <IconButton
          aria-label="Zoom Out"
          icon={<MdZoomOut />}
          variant="ghost"
          colorScheme="whiteAlpha"
          size="sm"
          mr={2}
        />
      </Tooltip>
      <Tooltip label="Crop">
        <IconButton
          aria-label="Crop"
          icon={<MdCrop />}
          variant="ghost"
          colorScheme="whiteAlpha"
          size="sm"
          mr={2}
        />
      </Tooltip>
      <Tooltip label="Undo">
        <IconButton
          aria-label="Undo"
          icon={<MdUndo />}
          variant="ghost"
          colorScheme="whiteAlpha"
          size="sm"
          mr={2}
        />
      </Tooltip>
      <Tooltip label="Redo">
        <IconButton
          aria-label="Redo"
          icon={<MdRedo />}
          variant="ghost"
          colorScheme="whiteAlpha"
          size="sm"
        />
      </Tooltip>
    </Flex>
  );
};

export default BottomToolbar;