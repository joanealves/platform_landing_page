import React from 'react';
import { Box, VStack, Input, Button, Textarea } from '@chakra-ui/react';
import { PageComponent } from '../types/types';

interface ComponentEditorProps {
  component: PageComponent | null;
  onUpdate: (updatedComponent: PageComponent) => void;
}

const ComponentEditor: React.FC<ComponentEditorProps> = ({ component, onUpdate }) => {
  if (!component) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onUpdate({
      ...component,
      [name]: name === 'position' || name === 'size'
        ? { ...component[name], [e.target.dataset.prop]: parseInt(value, 10) }
        : value,
    });
  };

  const renderComponentSpecificFields = () => {
    switch (component.type) {
      case 'button':
        return (
          <>
            <Input
              name="text"
              value={(component as any).text || ''}
              onChange={handleInputChange}
              placeholder="Button Text"
            />
            <Input
              name="color"
              type="color"
              value={(component as any).color || '#000000'}
              onChange={handleInputChange}
              placeholder="Button Color"
            />
          </>
        );
      case 'text':
      case 'heading':
        return (
          <Textarea
            name="text"
            value={(component as any).text || ''}
            onChange={handleInputChange}
            placeholder="Text Content"
          />
        );
      case 'image':
        return (
          <Input
            name="src"
            value={(component as any).src || ''}
            onChange={handleInputChange}
            placeholder="Image URL"
          />
        );
      default:
        return null;
    }
  };

  return (
    <Box>
      <VStack spacing={4} align="stretch">
        <Input
          name="position"
          data-prop="x"
          type="number"
          value={component.position.x}
          onChange={handleInputChange}
          placeholder="X Position"
        />
        <Input
          name="position"
          data-prop="y"
          type="number"
          value={component.position.y}
          onChange={handleInputChange}
          placeholder="Y Position"
        />
        <Input
          name="size"
          data-prop="width"
          type="number"
          value={component.size.width}
          onChange={handleInputChange}
          placeholder="Width"
        />
        <Input
          name="size"
          data-prop="height"
          type="number"
          value={component.size.height}
          onChange={handleInputChange}
          placeholder="Height"
        />
        {renderComponentSpecificFields()}
        <Button onClick={() => onUpdate(component)}>Update Component</Button>
      </VStack>
    </Box>
  );
};

export default ComponentEditor;