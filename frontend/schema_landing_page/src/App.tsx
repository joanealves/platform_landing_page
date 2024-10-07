import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import TemplatePage from './pages/TemplatePage';
import ComponentsPage from './pages/ComponentsPage';
import LayoutsPage from './pages/LayoutsPage';
import CRMPage from './pages/CRMPage';
import ConfigurationsPage from './pages/ConfigurationsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />}>
          <Route path="templates" element={<TemplatePage />} />
          <Route path="components" element={<ComponentsPage />} />
          <Route path="layouts" element={<LayoutsPage />} />
          <Route path="code" element={<div>Código</div>} />
          <Route path="crm" element={<CRMPage />} />
          <Route path="configs" element={<ConfigurationsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
