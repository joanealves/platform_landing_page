import React, { useState, useCallback } from 'react';
import { Box, Flex, useToast } from '@chakra-ui/react';
import WorkArea from '../components/WorkArea';
import ComponentSettingsPanel from '../components/ComponentSettingsPanel';
import ExportCodeModal from '../components/ExportCodeModal';
import ImportCodeModal from '../components/ImportCodeModal';
import LayerList from '../components/LayerList';
import { PageComponent } from '../types/types';
import CodeExporter from '../components/CodeExporter';
import FrameSettings from '../components/FrameSettings';

interface DashboardPageProps {
  isExportModalOpen: boolean;
  setIsExportModalOpen: (isOpen: boolean) => void;
  isImportModalOpen: boolean;
  setIsImportModalOpen: (isOpen: boolean) => void;
  isFrameSettingsOpen: boolean;
  pageComponents: PageComponent[];
  setPageComponents: React.Dispatch<React.SetStateAction<PageComponent[]>>;
}

const DashboardPage: React.FC<DashboardPageProps> = ({
  isExportModalOpen,
  setIsExportModalOpen,
  isImportModalOpen,
  setIsImportModalOpen,
  isFrameSettingsOpen,
  pageComponents,
  setPageComponents
}) => {
  const [selectedComponent, setSelectedComponent] = useState<PageComponent | null>(null);
  const [frameSize, setFrameSize] = useState({ width: 800, height: 600 });
  const [frameColor, setFrameColor] = useState('#ffffff');
  const [selectedLanguage, setSelectedLanguage] = useState('React');
  const [copiedComponent, setCopiedComponent] = useState<PageComponent | null>(null);
  const toast = useToast();

  const handleFrameSizeChange = (width: number, height: number) => {
    setFrameSize({ width, height });
  };

  const handleFrameColorChange = (color: string) => {
    setFrameColor(color);
  };

  const handleDrop = (componentData: { id: string; type: string; position: { x: number; y: number } }) => {
    const maxZIndex = Math.max(0, ...pageComponents.map(c => c.zIndex));
    let newComponent: PageComponent;

    switch (componentData.type) {
      case 'button':
        newComponent = {
          id: Date.now().toString(),
          type: 'button',
          position: componentData.position,
          size: { width: 100, height: 50 },
          zIndex: maxZIndex + 1,
          settings: {
            text: 'Novo Botão',
            color: '#000000'
          }
        };
        break;
      // ... (outros casos permanecem os mesmos, apenas adicionando zIndex: maxZIndex + 1)
    }

    setPageComponents((prevComponents) => [...prevComponents, newComponent]);
  };

  const handleComponentUpdate = (updatedComponent: PageComponent) => {
    setPageComponents((prevComponents) =>
      prevComponents.map((comp) =>
        comp.id === updatedComponent.id ? updatedComponent : comp
      )
    );
    setSelectedComponent(updatedComponent);
  };

  const handleUpdateComponent = (updatedComponent: PageComponent) => {
    setPageComponents((prevComponents) =>
      prevComponents.map((comp) =>
        comp.id === updatedComponent.id ? updatedComponent : comp
      )
    );
  };

  const handleMoveUp = (componentId: string) => {
    setPageComponents((prevComponents) => {
      const index = prevComponents.findIndex((c) => c.id === componentId);
      if (index > 0) {
        const newComponents = [...prevComponents];
        const temp = newComponents[index - 1].zIndex;
        newComponents[index - 1].zIndex = newComponents[index].zIndex;
        newComponents[index].zIndex = temp;
        return newComponents;
      }
      return prevComponents;
    });
  };

  const handleMoveDown = (componentId: string) => {
    setPageComponents((prevComponents) => {
      const index = prevComponents.findIndex((c) => c.id === componentId);
      if (index < prevComponents.length - 1) {
        const newComponents = [...prevComponents];
        const temp = newComponents[index + 1].zIndex;
        newComponents[index + 1].zIndex = newComponents[index].zIndex;
        newComponents[index].zIndex = temp;
        return newComponents;
      }
      return prevComponents;
    });
  };

  const handleCopyComponent = useCallback((component: PageComponent) => {
    setCopiedComponent(component);
    toast({
      title: "Componente copiado",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  }, [toast]);

  const handlePasteComponent = useCallback(() => {
    if (copiedComponent) {
      const newComponent: PageComponent = {
        ...copiedComponent,
        id: Date.now().toString(),
        position: {
          x: copiedComponent.position.x + 20,
          y: copiedComponent.position.y + 20,
        },
        zIndex: Math.max(...pageComponents.map(c => c.zIndex)) + 1,
      };
      setPageComponents(prev => [...prev, newComponent]);
      toast({
        title: "Componente colado",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  }, [copiedComponent, pageComponents, toast]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.ctrlKey || event.metaKey) {
      switch (event.key) {
        case 'c':
          if (selectedComponent) {
            handleCopyComponent(selectedComponent);
          }
          break;
        case 'v':
          handlePasteComponent();
          break;
      }
    }
  }, [selectedComponent, handleCopyComponent, handlePasteComponent]);

  // Remova a função handleLoadTemplate se não estiver sendo usada

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <Flex height="100%">
      <Box flex="1">
        <WorkArea
          frameSize={frameSize}
          frameColor={frameColor}
          pageComponents={pageComponents}
          setSelectedComponent={setSelectedComponent}
          onDrop={handleDrop}
          onUpdateComponent={handleUpdateComponent}
          onCopyComponent={handleCopyComponent}
          onPasteComponent={handlePasteComponent}
        />
      </Box>
      <Box width="300px" bg="gray.100" p={4} overflowY="auto">
        {isFrameSettingsOpen && (
          <FrameSettings
            onFrameSizeChange={handleFrameSizeChange}
            onFrameColorChange={handleFrameColorChange}
          />
        )}
        {selectedComponent && (
          <ComponentSettingsPanel
            component={selectedComponent}
            onUpdate={handleComponentUpdate}
          />
        )}
        <LayerList
          components={pageComponents}
          onSelectComponent={setSelectedComponent}
          onMoveUp={handleMoveUp}
          onMoveDown={handleMoveDown}
        />
        <CodeExporter components={pageComponents} />
      </Box>
      <ExportCodeModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        code={JSON.stringify(pageComponents, null, 2)}
        selectedLanguage={selectedLanguage}
        onLanguageChange={setSelectedLanguage}
      />
      <ImportCodeModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        onImport={(importedComponents) => {
          if (Array.isArray(importedComponents)) {
            setPageComponents(importedComponents);
          } else {
            console.error('Imported data is not an array:', importedComponents);
          }
        }}
      />
    </Flex>
  );
};

export default DashboardPage;