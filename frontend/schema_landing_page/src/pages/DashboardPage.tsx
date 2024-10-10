import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import WorkArea from '../components/WorkArea';
import ExportCodeModal from '../components/ExportCodeModal';
import ImportCodeModal from '../components/ImportCodeModal';
import { PageComponent } from '../types/types';

interface DashboardPageProps {
  isExportModalOpen: boolean;
  setIsExportModalOpen: (isOpen: boolean) => void;
  isImportModalOpen: boolean;
  setIsImportModalOpen: (isOpen: boolean) => void;
  pageComponents: PageComponent[];
  setPageComponents: React.Dispatch<React.SetStateAction<PageComponent[]>>;
  frameSize: { width: number; height: number };
  frameColor: string;
}

const DashboardPage: React.FC<DashboardPageProps> = ({
  isExportModalOpen,
  setIsExportModalOpen,
  isImportModalOpen,
  setIsImportModalOpen,
  pageComponents,
  setPageComponents,
  frameSize,
  frameColor
}) => {
  const [selectedComponent, setSelectedComponent] = useState<PageComponent | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState('React');

  const handleDrop = (componentData: { id: string; type: string; position: { x: number; y: number } }) => {
    // Implemente a lógica de drop aqui
  };

  const handleUpdateComponent = (updatedComponent: PageComponent) => {
    setPageComponents(prevComponents =>
      prevComponents.map(comp => comp.id === updatedComponent.id ? updatedComponent : comp)
    );
  };

  return (
    <Box height="100%" width="100%">
      <WorkArea
        frameSize={frameSize}
        frameColor={frameColor}
        pageComponents={pageComponents}
        setSelectedComponent={setSelectedComponent}
        onDrop={handleDrop}
        onUpdateComponent={handleUpdateComponent}
      />
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
    </Box>
  );
};

export default DashboardPage;