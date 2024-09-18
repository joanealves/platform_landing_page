import React from 'react';
import { DndContext, useDraggable, useDroppable, DragEndEvent } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

// Definir a interface para os componentes da página
interface PageComponent {
  id: string;
  content: string;
}

const initialComponents: PageComponent[] = [
  { id: '1', content: 'Botão' },
  { id: '2', content: 'Texto' },
  { id: '3', content: 'Imagem' },
];

function DraggableItem({ id, content }: PageComponent) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  const style = { transform: CSS.Translate.toString(transform) };

  return (
    <Box ref={setNodeRef} {...listeners} {...attributes} style={style} mb={2} p={4} bg="gray.100" borderRadius="md" border="1px solid">
      {content}
    </Box>
  );
}

function DroppableArea({ children }: { children: React.ReactNode }) {
  const { setNodeRef } = useDroppable({ id: 'droppable' });

  return (
    <Box ref={setNodeRef} border="2px dashed #ccc" p={4} width="65%" height="500px">
      {children}
    </Box>
  );
}

function App() {
  const [components] = React.useState<PageComponent[]>(initialComponents);
  const [pageComponents, setPageComponents] = React.useState<PageComponent[]>([]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    if (over && over.id === 'droppable') {
      const draggedComponent = components.find(c => c.id === active.id);
      if (draggedComponent) {
        setPageComponents(prev => [...prev, draggedComponent]);
      }
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h1" size="2xl" mb={4}>
          Plataforma de Landing Pages
        </Heading>

        <Box display="flex" justifyContent="space-between">
          {/* Lista de Componentes */}
          <Box border="1px solid #ccc" p={4} width="30%" height="500px" overflowY="auto">
            <Heading size="md" mb={4}>Componentes</Heading>
            {components.map((comp) => (
              <DraggableItem key={comp.id} id={comp.id} content={comp.content} />
            ))}
          </Box>

          {/* Área de Construção da Página */}
          <DroppableArea>
            <Heading size="md" mb={4}>Área de Construção</Heading>
            {pageComponents.map((comp, index) => (
              <Box key={index} mb={4} p={4} bg="teal.100" borderRadius="md">
                {comp.content === 'Botão' ? (
                  <Button colorScheme="teal" size="md">{comp.content}</Button>
                ) : (
                  <Text>{comp.content}</Text>
                )}
              </Box>
            ))}
          </DroppableArea>
        </Box>
      </Box>
    </DndContext>
  );
}

export default App;
