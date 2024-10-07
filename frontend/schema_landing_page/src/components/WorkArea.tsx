// src/components/WorkArea.tsx

import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import DroppableArea from './DrappableArea';
import { PageComponent } from '../types/types';
import {
  isPageComponentButton,
  isPageComponentTexto,
  isPageComponentImagem,
  isPageComponentMenu,
  isPageComponentVideo,
} from '../types/typesGuards';

interface WorkAreaProps {
  frameSize: { width: number; height: number };
  frameColor: string;
  pageComponents: PageComponent[];
  setSelectedComponent: (component: PageComponent) => void;
}

const WorkArea: React.FC<WorkAreaProps> = ({
  frameSize,
  frameColor,
  pageComponents,
  setSelectedComponent,
}) => {
  return (
    <Box
      flex="1"
      ml={4}
      bg="gray.900"
      p={4}
      borderRadius="lg"
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
    >
      <Box
        width={`${frameSize.width}px`}
        height={`${frameSize.height}px`}
        bg={frameColor}
        position="relative"
        overflow="auto"
        border="2px dashed #ccc"
      >
        <DroppableArea>
          <Text fontSize="xl" mb={4}>
            Área de Criação
          </Text>
          {pageComponents.map((comp) => (
            <Box
              key={comp.id}
              p={4}
              bg="white"
              border="1px solid #ccc"
              mb={4}
              onClick={() => setSelectedComponent(comp)}
            >
              {/* Renderização específica do componente */}
              {isPageComponentButton(comp) && (
                <Button style={{ backgroundColor: comp.settings.color }}>
                  {comp.settings.text}
                </Button>
              )}
              {isPageComponentTexto(comp) && <Text>{comp.settings.text}</Text>}
              {isPageComponentImagem(comp) && (
                <img src={comp.settings.src} alt="Imagem" style={{ maxWidth: '100%' }} />
              )}
              {isPageComponentMenu(comp) && (
                <nav>
                  {comp.settings.links.map((link: string, index: number) => (
                    <a key={index} href="#" style={{ marginRight: '10px' }}>
                      {link}
                    </a>
                  ))}
                </nav>
              )}
              {isPageComponentVideo(comp) && (
                <video controls src={comp.settings.url} style={{ maxWidth: '100%' }}></video>
              )}
            </Box>
          ))}
        </DroppableArea>
      </Box>
    </Box>
  );
};

export default WorkArea;
