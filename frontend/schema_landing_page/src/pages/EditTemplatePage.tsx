import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Text, VStack, Spinner, HStack, Button, useToast, useDisclosure, Flex, Input } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import WorkArea from '../components/WorkArea';
import ComponentPalette from '../components/ComponentPalette';
import RightPanel from '../components/RightPanel';
import ExportCode from '../components/ExportCode';
import TemplatePreview from '../components/TemplatePreview';
import { useHistory } from '../hooks/useHistory';
import { useAutoSave } from '../hooks/useAutoSave';
import { v4 as uuidv4 } from 'uuid';
import { templateService, Template } from '../services/templateService';

interface Component {
  id: string;
  type: string;
  position: { x: number; y: number };
  content?: string;
  style?: {
    fontSize?: number;
    fontWeight?: string;
    color?: string;
    backgroundColor?: string;
  };
  zIndex?: number;
}

interface Template {
  id: number;
  name: string;
  components: Component[];
}

const EditTemplatePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);
  const { state: template, setState: setTemplate, undo, redo, canUndo, canRedo } = useHistory<Template | null>(null);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showPreview, setShowPreview] = useState(false);

  const handleSave = useCallback(async (dataToSave: Template | null) => {
    if (dataToSave) {
      try {
        const savedTemplate = await templateService.saveTemplate(dataToSave);
        setTemplate(savedTemplate);
        toast({
          title: "Template saved",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        if (id === 'new') {
          navigate(`/edit-template/${savedTemplate.id}`);
        }
      } catch (error) {
        toast({
          title: "Error saving template",
          description: "An error occurred while saving the template. Please try again.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  }, [toast, setTemplate, navigate, id]);

  useAutoSave(template, handleSave);

  useEffect(() => {
    const fetchTemplate = async () => {
      if (id === 'new') {
        setTemplate({
          id: 0,
          name: 'New Template',
          components: []
        });
        setLoading(false);
      } else if (id) {
        try {
          const data = await templateService.getTemplate(parseInt(id));
          setTemplate(data);
          setLoading(false);
        } catch (error) {
          toast({
            title: "Error loading template",
            description: "An error occurred while loading the template. Please try again.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          navigate('/templates');
        }
      }
    };
    fetchTemplate();
  }, [id, setTemplate, toast, navigate]);

  const handleUpdateComponents = useCallback((newComponents: Component[]) => {
    if (template) {
      setTemplate(prevTemplate => ({
        ...prevTemplate,
        components: newComponents.map((c, index) => ({ ...c, zIndex: newComponents.length - index }))
      }));
    }
  }, [setTemplate]);

  const handleSelectComponent = (component: Component | null) => {
    setSelectedComponent(component);
  };

  const handleUpdateComponent = (updatedComponent: Component) => {
    if (template) {
      const updatedComponents = template.components.map(c =>
        c.id === updatedComponent.id ? updatedComponent : c
      );
      setTemplate({ ...template, components: updatedComponents });
      setSelectedComponent(updatedComponent);
    }
  };

  const handleDuplicateComponent = (component: Component) => {
    if (template) {
      const newComponent = {
        ...component,
        id: uuidv4(),
        position: {
          x: component.position.x + 20,
          y: component.position.y + 20,
        },
      };
      setTemplate({
        ...template,
        components: [...template.components, newComponent],
      });
    }
  };

  const handleDeleteComponent = (componentId: string) => {
    if (template) {
      setTemplate({
        ...template,
        components: template.components.filter(c => c.id !== componentId),
      });
      setSelectedComponent(null);
    }
  };

  const handleUndo = () => {
    undo();
    toast({
      title: "Action undone",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleRedo = () => {
    redo();
    toast({
      title: "Action redone",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100%" width="100%">
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Box height="100%" width="100%" display="flex" flexDirection="column">
        <HStack justifyContent="space-between" p={4} bg="gray.50">
          <Input 
            value={template?.name || ''}
            onChange={(e) => setTemplate({...template!, name: e.target.value})}
            fontSize="2xl"
            fontWeight="bold"
            variant="flushed"
            placeholder="Enter template name"
          />
          <HStack>
            <Button onClick={handleUndo} isDisabled={!canUndo}>Undo</Button>
            <Button onClick={handleRedo} isDisabled={!canRedo}>Redo</Button>
            <Button colorScheme="blue" onClick={() => handleSave(template)}>Save Template</Button>
            <Button colorScheme="green" onClick={onOpen}>Export Code</Button>
            <Button onClick={() => setShowPreview(!showPreview)}>
              {showPreview ? 'Hide Preview' : 'Show Preview'}
            </Button>
          </HStack>
        </HStack>
        <Flex flex={1} overflow="hidden">
          <ComponentPalette />
          {template && (
            showPreview ? (
              <Box flex={1} border="1px solid" borderColor="gray.200" borderRadius="md" overflow="hidden">
                <TemplatePreview components={template.components} />
              </Box>
            ) : (
              <WorkArea
                components={template.components}
                onUpdateComponents={handleUpdateComponents}
                onSelectComponent={handleSelectComponent}
              />
            )
          )}
          <RightPanel
            selectedComponent={selectedComponent}
            onUpdateComponent={handleUpdateComponent}
            onDuplicateComponent={handleDuplicateComponent}
            onDeleteComponent={handleDeleteComponent}
          />
        </Flex>
      </Box>
      {template && (
        <ExportCode
          isOpen={isOpen}
          onClose={onClose}
          template={template}
        />
      )}
    </DndProvider>
  );
};

export default EditTemplatePage;