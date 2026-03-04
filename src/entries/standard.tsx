import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import StandardDashboard from '../components/dashboards/StandardDashboard';
import DashboardLayout from '../components/DashboardLayout';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DashboardLayout activeTab="standard" isMPA={true}>
      <StandardDashboard />
    </DashboardLayout>
  </StrictMode>,
);
