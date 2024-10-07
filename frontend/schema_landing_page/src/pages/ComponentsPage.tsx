import React, { useState } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { DndContext, useDraggable, useDroppable, DragEndEvent } from '@dnd-kit/core';

interface PageComponent {
  id: string;
  content: string;
}

const DraggableItem = ({ id, content }: PageComponent) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id,
  });

  return (
    <Box
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      p={4}
      bg="gray.200"
      border="1px solid #ccc"
      mb={2}
      cursor="grab"
    >
      {content}
    </Box>
  );
};

const DroppableArea = ({ children }: { children: React.ReactNode }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  });

  return (
    <Box
      ref={setNodeRef}
      p={4}
      minHeight="200px"
      bg={isOver ? 'gray.100' : 'gray.50'}
      border="2px dashed #ccc"
    >
      {children}
    </Box>
  );
};

const ComponentsPage = () => {
  const [pageComponents, setPageComponents] = useState<PageComponent[]>([]);

  // Função para adicionar componentes ao board quando soltos
  const handleDrop = (event: DragEndEvent) => {
    const { active, over } = event;

    // Verifica se o item foi solto na área correta
    if (over && over.id === 'droppable') {
      const newComponent = { id: String(active.id), content: String(active.id) };
      setPageComponents((prevComponents) => [...prevComponents, newComponent]);
    }
  };

  // Função para remover componentes do board
  const handleRemoveComponent = (id: string) => {
    setPageComponents((prevComponents) =>
      prevComponents.filter((component) => component.id !== id)
    );
  };

  return (
    <Box p={6}>
      <Text fontSize="2xl" mb={4}>Componentes Disponíveis</Text>
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={6}>
        <DraggableItem id="button" content="Botão" />
        <DraggableItem id="text" content="Texto" />
        <DraggableItem id="image" content="Imagem" />
      </Box>

      <DndContext onDragEnd={handleDrop}>
        <DroppableArea>
          <Text>Arraste os componentes aqui</Text>
          {pageComponents.map((comp) => (
            <Box
              key={comp.id}
              p={4}
              bg="gray.50"
              border="1px dashed #ccc"
              mb={4}
              position="relative"
            >
              <Text>{comp.content}</Text>
              {/* Botão para remover o componente */}
              <Button
                size="xs"
                colorScheme="red"
                position="absolute"
                top="0"
                right="0"
                onClick={() => handleRemoveComponent(comp.id)}
              >
                Remover
              </Button>
            </Box>
          ))}
        </DroppableArea>
      </DndContext>
    </Box>
  );
};

export default ComponentsPage;
