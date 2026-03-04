import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import BaseControlDashboard from '../components/dashboards/BaseControlDashboard';
import DashboardLayout from '../components/DashboardLayout';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DashboardLayout activeTab="jcgk" isMPA={true}>
      <BaseControlDashboard />
    </DashboardLayout>
  </StrictMode>,
);
