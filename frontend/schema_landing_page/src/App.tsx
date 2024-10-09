import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardPage from './pages/DashboardPage';
import { PageComponent } from './types/types';

const App = () => {
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [isFrameSettingsOpen, setIsFrameSettingsOpen] = useState(false);
  const [pageComponents, setPageComponents] = useState<PageComponent[]>([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <DashboardLayout
            onExportModalOpen={() => setIsExportModalOpen(true)}
            onImportModalOpen={() => setIsImportModalOpen(true)}
            onFrameSettingsToggle={() => setIsFrameSettingsOpen(!isFrameSettingsOpen)}
            pageComponents={pageComponents}
          >
            <DashboardPage
              isExportModalOpen={isExportModalOpen}
              setIsExportModalOpen={setIsExportModalOpen}
              isImportModalOpen={isImportModalOpen}
              setIsImportModalOpen={setIsImportModalOpen}
              isFrameSettingsOpen={isFrameSettingsOpen}
              pageComponents={pageComponents}
              setPageComponents={setPageComponents}
            />
          </DashboardLayout>
        } />
        {/* ... (outras rotas) */}
      </Routes>
    </Router>
  );
};

export default App;
