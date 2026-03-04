import React from 'react';
import ReactDOM from 'react-dom/client';
import DashboardLayout from '../components/DashboardLayout';
import CollaborationDashboard from '../components/dashboards/CollaborationDashboard';
import '../index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DashboardLayout activeTab="collaboration" isMPA={true}>
      <CollaborationDashboard />
    </DashboardLayout>
  </React.StrictMode>
);
