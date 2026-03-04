import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import MobileDashboard from '../components/dashboards/MobileDashboard';
import DashboardLayout from '../components/DashboardLayout';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DashboardLayout activeTab="mobile" isMPA={true}>
      <MobileDashboard />
    </DashboardLayout>
  </StrictMode>,
);
