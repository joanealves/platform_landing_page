import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import MainLayout from './layouts/MainLayout';
import BoardPage from './pages/BoardPage';
import LayoutsPage from './pages/LayoutsPage';
import ComponentsPage from './pages/ComponentsPage';
import TemplatePage from './pages/TemplatePage';
import ConfigPage from './pages/ConfigPage'; // Você precisará criar este componente

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
            <Route path="/templates" element={<TemplatePage />} />
            <Route path="/config" element={<ConfigPage />} /> {/* Nova rota */}
          </Routes>
        </MainLayout>
      </Router>
    </ChakraProvider>
  );
};

export default App;
