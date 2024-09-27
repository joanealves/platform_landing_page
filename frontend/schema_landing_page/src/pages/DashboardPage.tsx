import React, { useState } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import DraggableItem from '../components/DraggableItem';
import DroppableArea from '../components/DrappableArea';
import CustomMenu from '../components/CustomMenu';
import CustomForm from '../components/CustomForm';
import CustomSlider from '../components/CustomSlider';
import ComponentSettingsPanel from '../components/ComponentSettingsPanel';

interface PageComponent {
  id: string;
  content: string;
  settings?: {
    [key: string]: string | number | boolean;
  };
}

const DashboardPage = () => {
  const [pageComponents, setPageComponents] = useState<PageComponent[]>([]);
  const [selectedComponent, setSelectedComponent] = useState<PageComponent | null>(null);

  const handleDrop = (component: PageComponent) => {
    const newComponent = { ...component, id: Date.now().toString() }; 
    setPageComponents([...pageComponents, newComponent]);
  };

  const handleUpdateComponent = (updatedComponent: PageComponent) => {
    setPageComponents((prevComponents) =>
      prevComponents.map((comp) =>
        comp.id === updatedComponent.id ? updatedComponent : comp
      )
    );
    setSelectedComponent(updatedComponent); 
  };

  const saveProject = () => {
    localStorage.setItem('pageComponents', JSON.stringify(pageComponents));
  };

  const loadProject = () => {
    const savedComponents = localStorage.getItem('pageComponents');
    if (savedComponents) {
      setPageComponents(JSON.parse(savedComponents));
    }
  };

  const [deviceView, setDeviceView] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  const deviceStyles = {
    mobile: { width: '375px', height: '667px' },
    tablet: { width: '768px', height: '1024px' },
    desktop: { width: '1440px', height: '900px' },
  };

  return (
    <Box display="flex" p={6}>
      {/* Menu lateral */}
      <Box width="200px" bg="gray.700" p={4} color="white" borderRadius="lg">
        <Text mb={4} fontSize="xl">Componentes</Text>
        <DraggableItem id="button" content="Botão" />
        <DraggableItem id="text" content="Texto" />
        <DraggableItem id="menu" content="Menu" />
        <DraggableItem id="form" content="Formulário" />
        <DraggableItem id="slider" content="Slider" />
        <DraggableItem id="input" content="Campo de Entrada" />
        <DraggableItem id="select" content="Seleção" />
      </Box>

      {/* Área de criação (board) */}
      <Box
        flex="1"
        ml={4}
        bg="gray.50"
        p={4}
        borderRadius="lg"
        position="relative"
        width={deviceStyles[deviceView].width}
        height={deviceStyles[deviceView].height}
      >
        <DroppableArea onDrop={handleDrop}>
          <Text fontSize="xl" mb={4}>Área de Criação</Text>
          {pageComponents.map((comp, index) => (
            <Box
              key={index}
              p={4}
              bg="white"
              border="1px solid #ccc"
              mb={4}
              onClick={() => setSelectedComponent(comp)}
            >
              {comp.content === 'Menu' && <CustomMenu items={['Home', 'Sobre', 'Contato']} />}
              {comp.content === 'Formulário' && <CustomForm title="Contato" fields={['Nome', 'Email', 'Mensagem']} />}
              {comp.content === 'Slider' && <CustomSlider images={['https://via.placeholder.com/400', 'https://via.placeholder.com/450']} />}
              {comp.content}
            </Box>
          ))}
        </DroppableArea>
      </Box>

      {/* Painel de Configurações */}
      <Box width="300px" bg="gray.700" p={4} color="white" borderRadius="lg" ml={4}>
        {selectedComponent && (
          <ComponentSettingsPanel
            component={selectedComponent}
            onUpdate={handleUpdateComponent}
          />
        )}
      </Box>

      {/* Botões para salvar e carregar o projeto */}
      <Box display="flex" p={6}>
        <Button onClick={saveProject} colorScheme="blue" mr={2}>Salvar Projeto</Button>
        <Button onClick={loadProject} colorScheme="green">Carregar Projeto</Button>
      </Box>

      {/* Botões para mudar visualização */}
      <Box display="flex" p={6}>
        <Button onClick={() => setDeviceView('mobile')}>Mobile</Button>
        <Button onClick={() => setDeviceView('tablet')}>Tablet</Button>
        <Button onClick={() => setDeviceView('desktop')}>Desktop</Button>
      </Box>
    </Box>
  );
};

export default DashboardPage;
