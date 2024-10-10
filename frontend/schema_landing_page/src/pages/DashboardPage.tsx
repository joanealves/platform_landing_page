import React from 'react';
import { Box } from '@chakra-ui/react';
import WorkArea from '../components/WorkArea';
import ExportCodeModal from '../components/ExportCodeModal';
import ImportCodeModal from '../components/ImportCodeModal';
import ToolBar from '../components/ToolBar';
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
  setSelectedComponent: (component: PageComponent | null) => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({
  isExportModalOpen,
  setIsExportModalOpen,
  isImportModalOpen,
  setIsImportModalOpen,
  pageComponents,
  setPageComponents,
  frameSize,
  frameColor,
  setSelectedComponent
}) => {
  return (
    <Box height="100%" width="100%" display="flex" flexDirection="column">
      <ToolBar />
      <Box flex="1" overflow="auto" bg="#1F2937" p={4}>
        <WorkArea
          frameSize={frameSize}
          frameColor={frameColor}
          pageComponents={pageComponents}
          setPageComponents={setPageComponents}
          setSelectedComponent={setSelectedComponent}
        />
      </Box>
      <ExportCodeModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        code={JSON.stringify(pageComponents, null, 2)}
      />
      <ImportCodeModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        onImport={(importedComponents) => setPageComponents(importedComponents)}
      />
    </Box>
  );
};

export default DashboardPage;