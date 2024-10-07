// src/components/ComponentSettingsPanel.tsx
import React from 'react';
import { Box, Text, Input } from '@chakra-ui/react';
import {
  PageComponent,
  PageComponentButton,
  PageComponentTexto,
  PageComponentImagem,
  PageComponentMenu,
  PageComponentVideo,
} from '../types/types';

interface ComponentSettingsPanelProps {
  component: PageComponent;
  onUpdate: (updatedComponent: PageComponent) => void;
}

const ComponentSettingsPanel: React.FC<ComponentSettingsPanelProps> = ({
  component,
  onUpdate,
}) => {

  const renderSettings = () => {
    switch (component.content) {
      case 'Botão':
        {
          const buttonComponent = component as PageComponentButton;
          const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            onUpdate({
              ...buttonComponent,
              settings: {
                ...buttonComponent.settings,
                [name]: value,
              },
            });
          };
          return (
            <>
              <Text>Texto do Botão:</Text>
              <Input
                name="text"
                value={buttonComponent.settings.text}
                onChange={handleChange}
                mb={2}
              />
              <Text>Cor do Botão:</Text>
              <Input
                type="color"
                name="color"
                value={buttonComponent.settings.color}
                onChange={handleChange}
                mb={2}
              />
            </>
          );
        }
      case 'Texto':
        {
          const textComponent = component as PageComponentTexto;
          const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            onUpdate({
              ...textComponent,
              settings: {
                ...textComponent.settings,
                [name]: value,
              },
            });
          };
          return (
            <>
              <Text>Texto:</Text>
              <Input
                name="text"
                value={textComponent.settings.text}
                onChange={handleChange}
                mb={2}
              />
            </>
          );
        }
      case 'Imagem':
        {
          const imageComponent = component as PageComponentImagem;
          const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            onUpdate({
              ...imageComponent,
              settings: {
                ...imageComponent.settings,
                [name]: value,
              },
            });
          };
          return (
            <>
              <Text>URL da Imagem:</Text>
              <Input
                name="src"
                value={imageComponent.settings.src}
                onChange={handleChange}
                mb={2}
              />
            </>
          );
        }
      case 'Menu':
        {
          const menuComponent = component as PageComponentMenu;
          const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            onUpdate({
              ...menuComponent,
              settings: {
                ...menuComponent.settings,
                links: value.split(','),
              },
            });
          };
          return (
            <>
              <Text>Links (separados por vírgula):</Text>
              <Input
                name="links"
                value={menuComponent.settings.links.join(',')}
                onChange={handleChange}
                mb={2}
              />
            </>
          );
        }
      case 'Vídeo':
        {
          const videoComponent = component as PageComponentVideo;
          const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            onUpdate({
              ...videoComponent,
              settings: {
                ...videoComponent.settings,
                [name]: value,
              },
            });
          };
          return (
            <>
              <Text>URL do Vídeo:</Text>
              <Input
                name="url"
                value={videoComponent.settings.url}
                onChange={handleChange}
                mb={2}
              />
            </>
          );
        }
      default:
        return null;
    }
  };

  return (
    <Box mt={4}>
      <Text fontSize="lg" mb={2}>Configurações do Componente</Text>
      {renderSettings()}
    </Box>
  );
};

export default ComponentSettingsPanel;
