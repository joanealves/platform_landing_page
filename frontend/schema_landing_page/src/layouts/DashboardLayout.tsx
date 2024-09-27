import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '250px', padding: '20px', flexGrow: 1 }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
