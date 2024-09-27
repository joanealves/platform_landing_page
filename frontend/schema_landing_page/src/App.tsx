import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardPage from './pages/DashboardPage';
import BoardPage from './pages/BoardPage'; 
import TemplatesPage from './pages/TemplatePage';
import ComponentsPage from './pages/ComponentsPage';
import LayoutsPage from './pages/LayoutsPage';
import ConfigurationsPage from './pages/ConfigurationsPage';
import CRMPage from './pages/CRMPage'; 
function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/board" />} />  
          <Route path="/board" element={<BoardPage />} />  
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/layouts" element={<LayoutsPage />} />
          <Route path="/configurations" element={<ConfigurationsPage />} />
          <Route path="/crm" element={<CRMPage />} />  
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
