import React from 'react';
import { Flex, IconButton, Tooltip, Divider } from '@chakra-ui/react';
import { FiMove, FiZoomIn, FiZoomOut, FiCrop, FiRotateCcw, FiRotateCw, FiMaximize, FiMinimize } from 'react-icons/fi';

const ToolbarButton = ({ icon, label }) => (
  <Tooltip label={label} placement="top">
    <IconButton
      aria-label={label}
      icon={icon}
      variant="ghost"
      colorScheme="whiteAlpha"
      size="md"
      fontSize="20px"
      _hover={{ bg: 'whiteAlpha.200' }}
    />
  </Tooltip>
);

const BottomToolbar: React.FC = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="center"
      wrap="wrap"
      padding="0.75rem"
      bg="#1F2937"
      color="white"
      width="100%"
      position="sticky"
      bottom={0}
      boxShadow="0 -2px 10px rgba(0, 0, 0, 0.1)"
    >
      <Flex align="center" justify="center">
        <ToolbarButton icon={<FiMove />} label="Move" />
        <ToolbarButton icon={<FiZoomIn />} label="Zoom In" />
        <ToolbarButton icon={<FiZoomOut />} label="Zoom Out" />
        <Divider orientation="vertical" height="24px" mx={2} />
        <ToolbarButton icon={<FiCrop />} label="Crop" />
        <ToolbarButton icon={<FiRotateCcw />} label="Rotate Left" />
        <ToolbarButton icon={<FiRotateCw />} label="Rotate Right" />
        <Divider orientation="vertical" height="24px" mx={2} />
        <ToolbarButton icon={<FiMaximize />} label="Expand" />
        <ToolbarButton icon={<FiMinimize />} label="Collapse" />
      </Flex>
    </Flex>
  );
};

export default BottomToolbar;