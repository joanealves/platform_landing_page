import React from 'react';

interface PageComponent {
  id: string;
  content: string;
  settings?: {
    [key: string]: string | number | boolean;
  };
}

interface ComponentSettingsPanelProps {
  component: PageComponent;
  onUpdate: (updatedComponent: PageComponent) => void;
}

const ComponentSettingsPanel: React.FC<ComponentSettingsPanelProps> = ({ component, onUpdate }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onUpdate({ ...component, settings: { ...component.settings, [name]: value } });
  };

  return (
    <div>
      <h3>Configurações: {component.content}</h3>
      {component.content === 'Menu' && (
        <>
          <label>Itens do Menu:</label>
          <input
            type="text"
            name="menuItems"
            value={String(component.settings?.menuItems || '')}
            onChange={handleInputChange}
          />
        </>
      )}
      {component.content === 'Formulário' && (
        <>
          <label>Título do Formulário:</label>
          <input
            type="text"
            name="formTitle"
            value={String(component.settings?.formTitle || '')}
            onChange={handleInputChange}
          />
        </>
      )}
      {component.content === 'Botão' && (
        <>
          <label>Texto do Botão:</label>
          <input
            type="text"
            name="buttonText"
            value={String(component.settings?.buttonText || '')}
            onChange={handleInputChange}
          />
          <label>Cor do Botão:</label>
          <input
            type="color"
            name="buttonColor"
            value={String(component.settings?.buttonColor || '#000000')}
            onChange={handleInputChange}
          />
        </>
      )}
      {component.content === 'Campo de Entrada' && (
        <>
          <label>Placeholder:</label>
          <input
            type="text"
            name="inputPlaceholder"
            value={String(component.settings?.inputPlaceholder || '')}
            onChange={handleInputChange}
          />
        </>
      )}
    </div>
  );
};

export default ComponentSettingsPanel;
