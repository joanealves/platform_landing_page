import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import MainLayout from './layouts/MainLayout';
import BoardPage from './pages/BoardPage';
import LayoutsPage from './pages/LayoutsPage';
import ComponentsPage from './pages/ComponentsPage';
import TemplatesPage from './pages/TemplatesPage';
import EditTemplatePage from './pages/EditTemplatePage';
import ConfigPage from './pages/ConfigPage';
import ImportCode from './components/ImportCode';
import ExportCode from './components/ExportCode';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Navigate to="/board" replace />} />
            <Route path="/board" element={<BoardPage />} />
            <Route path="/layouts" element={<LayoutsPage />} />
            <Route path="/components" element={<ComponentsPage />} />
            <Route path="/templates" element={<TemplatesPage />} />
            <Route path="/edit-template/:id" element={<EditTemplatePage />} />
            <Route path="/config" element={<ConfigPage />} />
            <Route path="/code/import" element={<ImportCode />} />
            <Route path="/code/export" element={<ExportCode />} />
          </Routes>
        </MainLayout>
      </Router>
    </ChakraProvider>
  );
};

export default App;
