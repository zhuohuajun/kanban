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
  const [activeTab, setActiveTab] = useState<'yjyj' | 'zxpj' | 'ydyy' | 'bzyx' | 'zzgl' | 'jcgk' | 'rwxt'>('yjyj');

  const renderDashboard = () => {
    switch (activeTab) {
      case 'yjyj': return <JudgmentDashboard />;
      case 'zxpj': return <QualityDashboard />;
      case 'ydyy': return <MobileDashboard />;
      case 'bzyx': return <StandardDashboard />;
      case 'zzgl': return <OrgDashboard />;
      case 'jcgk': return <BaseControlDashboard />;
      case 'rwxt': return <CollaborationDashboard />;
      default: return <JudgmentDashboard />;
    }
  };

  return (
    <DashboardLayout activeTab={activeTab} setActiveTab={setActiveTab} isMPA={false}>
      {renderDashboard()}
    </DashboardLayout>
  );
}
