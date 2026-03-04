import React from 'react';
import Sidebar from './Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab?: (tab: any) => void;
  isMPA?: boolean;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, activeTab, setActiveTab, isMPA = true }) => {
  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} isMPA={isMPA} />
      <main className="flex-1 overflow-y-auto p-4 scrollbar-hide">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
