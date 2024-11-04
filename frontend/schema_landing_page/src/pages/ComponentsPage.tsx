import React, { useState } from 'react';
import { Box, Text, Button, Input, VStack } from '@chakra-ui/react';
import { DndContext, useDraggable, useDroppable, DragEndEvent } from '@dnd-kit/core';

interface PageComponent {
  id: string;
  content: string;
  properties?: {
    [key: string]: string | number;
  };
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
  const [selectedComponent, setSelectedComponent] = useState<PageComponent | null>(null);

  const handleDrop = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && over.id === 'droppable') {
      const newComponent: PageComponent = {
        id: String(active.id),
        content: `Novo ${String(active.id)}`,
        properties: {},
      };
      setPageComponents((prevComponents) => [...prevComponents, newComponent]);
    }
  };

  const handleRemoveComponent = (id: string) => {
    setPageComponents((prevComponents) =>
      prevComponents.filter((component) => component.id !== id)
    );
    if (selectedComponent?.id === id) {
      setSelectedComponent(null);
    }
  };

  const handleSelectComponent = (component: PageComponent) => {
    setSelectedComponent(component);
  };

  const handleUpdateComponent = (property: string, value: string | number) => {
    if (!selectedComponent) return;

    setPageComponents((prevComponents) =>
      prevComponents.map((component) =>
        component.id === selectedComponent.id
          ? { ...component, properties: { ...component.properties, [property]: value } }
          : component
      )
    );

    setSelectedComponent((prev) =>
      prev ? { ...prev, properties: { ...prev.properties, [property]: value } } : null
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
              onClick={() => handleSelectComponent(comp)}
              cursor="pointer"
            >
              <Text>{comp.content}</Text>
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

      {selectedComponent && (
        <Box mt={8} p={4} border="1px solid #ccc" borderRadius="md">
          <Text fontSize="lg" mb={4}>Propriedades do Componente</Text>
          {selectedComponent.content === 'Botão' && (
            <VStack align="start">
              <Text>Texto do Botão:</Text>
              <Input
                value={(selectedComponent.properties?.text as string) || ''}
                onChange={(e) => handleUpdateComponent('text', e.target.value)}
                placeholder="Digite o texto do botão"
              />
            </VStack>
          )}
          {selectedComponent.content === 'Texto' && (
            <VStack align="start">
              <Text>Texto:</Text>
              <Input
                value={(selectedComponent.properties?.text as string) || ''}
                onChange={(e) => handleUpdateComponent('text', e.target.value)}
                placeholder="Digite o texto"
              />
            </VStack>
          )}
          {selectedComponent.content === 'Imagem' && (
            <VStack align="start">
              <Text>URL da Imagem:</Text>
              <Input
                value={(selectedComponent.properties?.src as string) || ''}
                onChange={(e) => handleUpdateComponent('src', e.target.value)}
                placeholder="Digite a URL da imagem"
              />
            </VStack>
          )}
        </Box>
      )}
    </Box>
  );
};

export default ComponentsPage;
