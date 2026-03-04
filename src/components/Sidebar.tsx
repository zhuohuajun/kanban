import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  LayoutDashboard, 
  BarChart3, 
  Zap, 
  ClipboardCheck, 
  Building2, 
  ShieldCheck, 
  Clock, 
  RefreshCcw,
  Handshake
} from 'lucide-react';
import { cn } from '../utils';

interface SidebarProps {
  activeTab: string;
  setActiveTab?: (tab: any) => void;
  isMPA?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, isMPA = false }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const tabs = [
    { id: 'yjyj', label: '预警研判', icon: LayoutDashboard, href: 'yjyj.html' },
    { id: 'zxpj', label: '质效评价', icon: BarChart3, href: 'zxpj.html' },
    { id: 'ydyy', label: '移动应用', icon: Zap, href: 'ydyy.html' },
    { id: 'bzyx', label: '标准运行', icon: ClipboardCheck, href: 'bzyx.html' },
    { id: 'zzgl', label: '组织管理', icon: Building2, href: 'zzgl.html' },
    { id: 'jcgk', label: '基础管控', icon: ShieldCheck, href: 'jcgk.html' },
    { id: 'rwxt', label: '任务协同', icon: Handshake, href: 'rwxt.html' },
  ];

  return (
    <aside className="w-56 bg-white border-r border-slate-200 flex flex-col p-4 shrink-0 h-full">
      <div className="mb-6">
        <h1 className="text-lg font-bold tracking-tight text-slate-900 flex items-center gap-2">
          <ShieldAlert className="text-blue-600" size={20} />
          智慧警情看板
        </h1>
        <p className="text-slate-400 text-[9px] mt-1 italic font-serif leading-tight">
          警情治理 · 数据模型 · 预警研判
        </p>
      </div>

      <nav className="flex flex-col gap-1 flex-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          if (isMPA) {
            return (
              <a 
                key={tab.id}
                href={tab.href}
                className={cn(
                  "flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-bold transition-all",
                  isActive ? "bg-blue-50 text-blue-600" : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                )}
              >
                <Icon size={16} />
                {tab.label}
              </a>
            );
          }

          return (
            <button 
              key={tab.id}
              onClick={() => setActiveTab && setActiveTab(tab.id as any)}
              className={cn(
                "flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-bold transition-all",
                isActive ? "bg-blue-50 text-blue-600" : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
              )}
            >
              <Icon size={16} />
              {tab.label}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto pt-4 border-t border-slate-100 space-y-3">
        <div className="flex items-center gap-2 px-1">
          <Clock size={14} className="text-slate-400" />
          <span className="text-[10px] font-mono font-medium text-slate-500">
            {currentTime.toLocaleTimeString('zh-CN', { hour12: false })}
          </span>
        </div>
        <button className="w-full bg-slate-900 hover:bg-slate-800 text-white px-3 py-2 rounded-lg text-[10px] font-bold transition-colors flex items-center justify-center gap-2 shadow-sm">
          <RefreshCcw size={14} />
          刷新数据
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
