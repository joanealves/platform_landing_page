import React from 'react';
import { Box } from '@chakra-ui/react';

interface Component {
  id: string;
  type: string;
  content?: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  style?: {
    [key: string]: string | number;
  };
}

interface TemplatePreviewProps {
  components: Component[];
}

const TemplatePreview: React.FC<TemplatePreviewProps> = ({ components }) => {
  const renderComponent = (component: Component) => {
    const style = {
      position: 'absolute' as const,
      left: `${component.position.x}px`,
      top: `${component.position.y}px`,
      width: `${component.size.width}px`,
      height: `${component.size.height}px`,
      ...component.style,
    };

    switch (component.type) {
      case 'text':
        return <p style={style}>{component.content}</p>;
      case 'image':
        return <img src={component.content} alt="" style={style} />;
      case 'button':
        return <button style={style}>{component.content}</button>;
      case 'input':
        return <input type="text" placeholder={component.content} style={style} />;
      case 'textarea':
        return <textarea placeholder={component.content} style={style}></textarea>;
      case 'select':
        return (
          <select style={style}>
            <option value="">Select an option</option>
            {component.content?.split(',').map((option, index) => (
              <option key={index} value={option.trim()}>{option.trim()}</option>
            ))}
          </select>
        );
      default:
        return <div style={style}>{component.content}</div>;
    }
  };

  return (
    <Box width="100%" height="100%" position="relative" bg="white">
      {components.map(component => renderComponent(component))}
    </Box>
  );
};

export default TemplatePreview;
