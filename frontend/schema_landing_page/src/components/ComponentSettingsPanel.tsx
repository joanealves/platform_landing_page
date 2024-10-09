// src/components/ComponentSettingsPanel.tsx
import React from 'react';
import { Box, VStack, FormControl, FormLabel, Input, Switch } from '@chakra-ui/react';
import { PageComponent } from '../types/types';

interface ComponentSettingsPanelProps {
  component: PageComponent;
  onUpdate: (updatedComponent: PageComponent) => void;
}

const ComponentSettingsPanel: React.FC<ComponentSettingsPanelProps> = ({ component, onUpdate }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onUpdate({
      ...component,
      settings: {
        ...component.settings,
        [name]: value,
      },
    } as PageComponent);
  };

  const renderSettings = () => {
    switch (component.type) {
      case 'button':
        return (
          <>
            <FormControl>
              <FormLabel>Texto do Botão</FormLabel>
              <Input name="text" value={component.settings.text} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Cor do Botão</FormLabel>
              <Input name="color" type="color" value={component.settings.color} onChange={handleChange} />
            </FormControl>
          </>
        );
      case 'text':
        return (
          <FormControl>
            <FormLabel>Texto</FormLabel>
            <Input name="text" value={component.settings.text} onChange={handleChange} />
          </FormControl>
        );
      case 'image':
        return (
          <FormControl>
            <FormLabel>URL da Imagem</FormLabel>
            <Input name="src" value={component.settings.src} onChange={handleChange} />
          </FormControl>
        );
      case 'menu':
        return (
          <FormControl>
            <FormLabel>Links (separados por vírgula)</FormLabel>
            <Input
              name="links"
              value={(component.settings.links as string[]).join(',')}
              onChange={(e) => {
                const links = e.target.value.split(',').map((link) => link.trim());
                onUpdate({
                  ...component,
                  settings: {
                    ...component.settings,
                    links,
                  },
                } as PageComponent);
              }}
            />
          </FormControl>
        );
      case 'video':
        return (
          <FormControl>
            <FormLabel>URL do Vídeo</FormLabel>
            <Input name="url" value={component.settings.url} onChange={handleChange} />
          </FormControl>
        );
      case 'form':
        return (
          <>
            <FormControl>
              <FormLabel>Texto do Botão de Envio</FormLabel>
              <Input
                name="submitButtonText"
                value={component.settings.submitButtonText}
                onChange={handleChange}
              />
            </FormControl>
            {/* Adicione controles para adicionar/remover campos do formulário */}
          </>
        );
      case 'carousel':
        return (
          <>
            <FormControl>
              <FormLabel>Auto Play</FormLabel>
              <Switch
                isChecked={component.settings.autoPlay}
                onChange={(e) => handleChange({
                  target: { name: 'autoPlay', value: e.target.checked }
                } as any)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Intervalo (ms)</FormLabel>
              <Input
                type="number"
                name="interval"
                value={component.settings.interval}
                onChange={handleChange}
              />
            </FormControl>
            {/* Adicione controles para adicionar/remover imagens do carrossel */}
          </>
        );
      case 'map':
        return (
          <>
            <FormControl>
              <FormLabel>Latitude</FormLabel>
              <Input
                type="number"
                name="latitude"
                value={component.settings.latitude}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Longitude</FormLabel>
              <Input
                type="number"
                name="longitude"
                value={component.settings.longitude}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Zoom</FormLabel>
              <Input
                type="number"
                name="zoom"
                value={component.settings.zoom}
                onChange={handleChange}
              />
            </FormControl>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Box>
      <VStack spacing={4} align="stretch">
        {renderSettings()}
        <FormControl>
          <FormLabel>Posição X</FormLabel>
          <Input
            type="number"
            value={component.position.x}
            onChange={(e) => {
              onUpdate({
                ...component,
                position: {
                  ...component.position,
                  x: parseInt(e.target.value, 10),
                },
              });
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Posição Y</FormLabel>
          <Input
            type="number"
            value={component.position.y}
            onChange={(e) => {
              onUpdate({
                ...component,
                position: {
                  ...component.position,
                  y: parseInt(e.target.value, 10),
                },
              });
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Largura</FormLabel>
          <Input
            type="number"
            value={component.size.width}
            onChange={(e) => {
              onUpdate({
                ...component,
                size: {
                  ...component.size,
                  width: parseInt(e.target.value, 10),
                },
              });
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Altura</FormLabel>
          <Input
            type="number"
            value={component.size.height}
            onChange={(e) => {
              onUpdate({
                ...component,
                size: {
                  ...component.size,
                  height: parseInt(e.target.value, 10),
                },
              });
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Camada (Z-Index)</FormLabel>
          <Input
            type="number"
            value={component.zIndex}
            onChange={(e) => {
              onUpdate({
                ...component,
                zIndex: parseInt(e.target.value, 10),
              });
            }}
          />
        </FormControl>
      </VStack>
    </Box>
  );
};

export default ComponentSettingsPanel;
