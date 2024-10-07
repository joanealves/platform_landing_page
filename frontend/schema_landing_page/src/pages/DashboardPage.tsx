import React, { useState } from 'react';
import { Box, Text, Collapse } from '@chakra-ui/react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import Navbar from '../components/Navbar';
import SidebarMenu from '../components/SidebarMenu';
import WorkArea from '../components/WorkArea';
import FrameSettings from '../components/FrameSettings';
import ComponentSettingsPanel from '../components/ComponentSettingsPanel';
import ExportCodeModal from '../components/ExportCodeModal';
import ImportCodeModal from '../components/ImportCodeModal';

import {
  PageComponent,
  PageComponentButton,
  PageComponentTexto,
  PageComponentImagem,
  PageComponentMenu,
  PageComponentVideo,
} from '../types/types';

import {
  isPageComponentButton,
  isPageComponentTexto,
  isPageComponentImagem,
  isPageComponentMenu,
  isPageComponentVideo,
} from '../types/typesGuards'; 

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DashboardPage = () => {
  const [pageComponents, setPageComponents] = useState<PageComponent[]>([]);
  const [selectedComponent, setSelectedComponent] = useState<PageComponent | null>(null);
  const [frameSize, setFrameSize] = useState({ width: 800, height: 600 });
  const [frameColor, setFrameColor] = useState('#ffffff'); // Reintroduzido o estado frameColor
  const [isFrameSettingsOpen, setIsFrameSettingsOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('React');

  // Função para alterar o tamanho do frame
  const handleFrameSizeChange = (width: number, height: number) => {
    setFrameSize({ width, height });
  };

  // Função para alterar a cor do frame
  const handleFrameColorChange = (color: string) => {
    setFrameColor(color);
  };

  // Evento de drop
  const handleDrop = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && over.id === 'droppable') {
      const componentData = active.data.current?.component;
      if (componentData) {
        const newComponent: PageComponent = {
          ...componentData,
          id: Date.now().toString(),
        };
        setPageComponents([...pageComponents, newComponent]);
      }
    }
  };

  // Gerar código baseado na linguagem selecionada
  const generateCode = () => {
    return pageComponents
      .map((comp) => {
        switch (selectedLanguage) {
          case 'React':
            return generateReactCode(comp);
          case 'Vue':
            return generateVueCode(comp);
          case 'Angular':
            return generateAngularCode(comp);
          default:
            return '';
        }
      })
      .join('\n');
  };

  // Gerar código React
  const generateReactCode = (comp: PageComponent): string => {
    if (isPageComponentButton(comp)) {
      const buttonComp = comp as PageComponentButton;
      return `<button style={{ backgroundColor: '${buttonComp.settings.color}' }}>${buttonComp.settings.text}</button>`;
    }
    if (isPageComponentTexto(comp)) {
      const textComp = comp as PageComponentTexto;
      return `<p>${textComp.settings.text}</p>`;
    }
    if (isPageComponentImagem(comp)) {
      const imageComp = comp as PageComponentImagem;
      return `<img src="${imageComp.settings.src}" alt="Imagem" />`;
    }
    if (isPageComponentMenu(comp)) {
      const menuComp = comp as PageComponentMenu;
      return `<nav>\n  ${menuComp.settings.links
        .map((link: string) => `<a href="#">${link}</a>`)
        .join('\n  ')}\n</nav>`;
    }
    if (isPageComponentVideo(comp)) {
      const videoComp = comp as PageComponentVideo;
      return `<video controls src="${videoComp.settings.url}"></video>`;
    }
    return '';
  };

  // Gerar código Vue
  const generateVueCode = (comp: PageComponent): string => {
    if (isPageComponentButton(comp)) {
      const buttonComp = comp as PageComponentButton;
      return `<button :style="{ backgroundColor: '${buttonComp.settings.color}' }">${buttonComp.settings.text}</button>`;
    }
    if (isPageComponentTexto(comp)) {
      const textComp = comp as PageComponentTexto;
      return `<p>${textComp.settings.text}</p>`;
    }
    if (isPageComponentImagem(comp)) {
      const imageComp = comp as PageComponentImagem;
      return `<img :src="'${imageComp.settings.src}'" alt="Imagem" />`;
    }
    if (isPageComponentMenu(comp)) {
      const menuComp = comp as PageComponentMenu;
      return `<nav>\n  ${menuComp.settings.links
        .map((link: string) => `<a href="#">${link}</a>`)
        .join('\n  ')}\n</nav>`;
    }
    if (isPageComponentVideo(comp)) {
      const videoComp = comp as PageComponentVideo;
      return `<video controls :src="'${videoComp.settings.url}'"></video>`;
    }
    return '';
  };

  // Gerar código Angular
  const generateAngularCode = (comp: PageComponent): string => {
    if (isPageComponentButton(comp)) {
      const buttonComp = comp as PageComponentButton;
      return `<button [ngStyle]="{ 'background-color': '${buttonComp.settings.color}' }">${buttonComp.settings.text}</button>`;
    }
    if (isPageComponentTexto(comp)) {
      const textComp = comp as PageComponentTexto;
      return `<p>${textComp.settings.text}</p>`;
    }
    if (isPageComponentImagem(comp)) {
      const imageComp = comp as PageComponentImagem;
      return `<img [src]="'${imageComp.settings.src}'" alt="Imagem" />`;
    }
    if (isPageComponentMenu(comp)) {
      const menuComp = comp as PageComponentMenu;
      return `<nav>\n  ${menuComp.settings.links
        .map((link: string) => `<a href="#">${link}</a>`)
        .join('\n  ')}\n</nav>`;
    }
    if (isPageComponentVideo(comp)) {
      const videoComp = comp as PageComponentVideo;
      return `<video controls [src]="'${videoComp.settings.url}'"></video>`;
    }
    return '';
  };

  // Função para importar código
  const importCode = (code: string) => {
    try {
      const importedComponents = JSON.parse(code) as PageComponent[];
      setPageComponents(importedComponents);
    } catch (error) {
      console.error('Erro ao importar código:', error);
      alert('Código inválido');
    }
  };

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      {/* Navbar */}
      <Navbar
        onExportModalOpen={() => setIsExportModalOpen(true)}
        onImportModalOpen={() => setIsImportModalOpen(true)}
        onFrameSettingsToggle={() => setIsFrameSettingsOpen(!isFrameSettingsOpen)}
      />
      <Box display="flex" flex="1" overflow="hidden">
        {/* Sidebar */}
        <SidebarMenu />

        {/* Área Principal */}
        <DndContext onDragEnd={handleDrop}>
          <WorkArea
            frameSize={frameSize}
            frameColor={frameColor} // Passando frameColor para WorkArea
            pageComponents={pageComponents}
            setSelectedComponent={setSelectedComponent}
          />
        </DndContext>

        {/* Painel de Configurações */}
        <Box width="300px" bg="gray.700" p={4} color="white" borderRadius="lg" ml={4}>
          <Text mb={4} fontSize="xl">
            Configurações
          </Text>
          <Collapse in={isFrameSettingsOpen} animateOpacity>
            <FrameSettings
              onFrameSizeChange={handleFrameSizeChange}
              onFrameColorChange={handleFrameColorChange} // Passando o manipulador aqui
            />
          </Collapse>
          {selectedComponent && (
            <ComponentSettingsPanel
              component={selectedComponent}
              onUpdate={(updatedComponent) => {
                setPageComponents((prevComponents) =>
                  prevComponents.map((comp) =>
                    comp.id === updatedComponent.id ? updatedComponent : comp
                  )
                );
                setSelectedComponent(updatedComponent);
              }}
            />
          )}
        </Box>
      </Box>

      {/* Modais de Exportação/Importação */}
      <ExportCodeModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        code={generateCode()}
        selectedLanguage={selectedLanguage}
        onLanguageChange={setSelectedLanguage}
      />
      <ImportCodeModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        onImport={importCode}
      />
    </Box>
  );
};

export default DashboardPage;
