import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import JudgmentDashboard from '../components/dashboards/JudgmentDashboard';
import DashboardLayout from '../components/DashboardLayout';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DashboardLayout activeTab="judgment" isMPA={true}>
      <JudgmentDashboard />
    </DashboardLayout>
  </StrictMode>,
);
