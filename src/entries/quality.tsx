import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import QualityDashboard from '../components/dashboards/QualityDashboard';
import DashboardLayout from '../components/DashboardLayout';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DashboardLayout activeTab="quality" isMPA={true}>
      <QualityDashboard />
    </DashboardLayout>
  </StrictMode>,
);
