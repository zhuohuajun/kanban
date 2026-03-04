import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import OrgDashboard from '../components/dashboards/OrgDashboard';
import DashboardLayout from '../components/DashboardLayout';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DashboardLayout activeTab="zzgl" isMPA={true}>
      <OrgDashboard />
    </DashboardLayout>
  </StrictMode>,
);
