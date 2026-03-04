import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import DashboardLayout from './components/DashboardLayout';
import JudgmentDashboard from './components/dashboards/JudgmentDashboard';
import QualityDashboard from './components/dashboards/QualityDashboard';
import MobileDashboard from './components/dashboards/MobileDashboard';
import StandardDashboard from './components/dashboards/StandardDashboard';
import OrgDashboard from './components/dashboards/OrgDashboard';
import BaseControlDashboard from './components/dashboards/BaseControlDashboard';
import CollaborationDashboard from './components/dashboards/CollaborationDashboard';

export default function App() {
  const [activeTab, setActiveTab] = useState<'judgment' | 'quality' | 'mobile' | 'standard' | 'org' | 'baseControl' | 'collaboration'>('judgment');

  const renderDashboard = () => {
    switch (activeTab) {
      case 'judgment': return <JudgmentDashboard />;
      case 'quality': return <QualityDashboard />;
      case 'mobile': return <MobileDashboard />;
      case 'standard': return <StandardDashboard />;
      case 'org': return <OrgDashboard />;
      case 'baseControl': return <BaseControlDashboard />;
      case 'collaboration': return <CollaborationDashboard />;
      default: return <JudgmentDashboard />;
    }
  };

  return (
    <DashboardLayout activeTab={activeTab} setActiveTab={setActiveTab} isMPA={false}>
      {renderDashboard()}
    </DashboardLayout>
  );
}
