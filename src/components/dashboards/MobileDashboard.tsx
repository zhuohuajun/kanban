import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line
} from 'recharts';
import { 
  Users, 
  Activity, 
  Zap, 
  CheckCircle2, 
  TrendingUp, 
  BarChart3, 
  ClipboardCheck, 
  ChevronRight 
} from 'lucide-react';
import { cn, StatCard } from '../../utils';
import { MOBILE_ONLINE_DATA, MOBILE_BUSINESS_DATA, MOBILE_UNIT_STATS } from '../../constants';

const MobileDashboard: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <StatCard title="终端总数" value="150" icon={Users} trend="+2.4%" colorClass="bg-blue-600" />
        <StatCard title="终端在线率" value="97.2%" icon={Activity} trend="+1.1%" colorClass="bg-emerald-500" />
        <StatCard title="今日办理量" value="180" icon={Zap} trend="+15.2%" colorClass="bg-amber-500" />
        <StatCard title="任务完成率" value="96.8%" icon={CheckCircle2} colorClass="bg-indigo-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
            <TrendingUp size={16} className="text-blue-600" />
            移动 App 在线率趋势 (按月)
          </h3>
          <div className="h-[140px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={MOBILE_ONLINE_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                <YAxis domain={[90, 100]} axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: '10px' }} />
                <Line type="monotone" dataKey="rate" name="在线率 (%)" stroke="#10b981" strokeWidth={3} dot={{ r: 4, fill: '#10b981' }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
            <BarChart3 size={16} className="text-blue-600" />
            业务办理量趋势 (按月)
          </h3>
          <div className="h-[140px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MOBILE_BUSINESS_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: '10px' }} />
                <Bar dataKey="volume" name="办理量" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
            <ClipboardCheck size={16} className="text-blue-600" />
            各单位移动应用使用统计
          </h3>
          <div className="flex gap-2">
            <input type="date" className="text-[10px] border border-slate-200 rounded px-1.5 py-0.5" defaultValue="2025-10-01" />
            <span className="text-slate-300 text-[10px]">至</span>
            <input type="date" className="text-[10px] border border-slate-200 rounded px-1.5 py-0.5" defaultValue="2026-03-01" />
            <button className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded">搜索</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-y border-slate-100">
                <th className="py-2 px-3 text-[10px] font-bold text-slate-500 uppercase">单位</th>
                <th className="py-2 px-3 text-[10px] font-bold text-slate-500 uppercase">终端总数</th>
                <th className="py-2 px-3 text-[10px] font-bold text-slate-500 uppercase">在线终端</th>
                <th className="py-2 px-3 text-[10px] font-bold text-slate-500 uppercase">任务派发总数</th>
                <th className="py-2 px-3 text-[10px] font-bold text-slate-500 uppercase">任务完成数</th>
                <th className="py-2 px-3 text-[10px] font-bold text-slate-500 uppercase">任务未完成数</th>
                <th className="py-2 px-3 text-[10px] font-bold text-slate-500 uppercase">任务完成率</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {MOBILE_UNIT_STATS.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-2 px-3 text-xs font-semibold text-slate-700">{item.unit}</td>
                  <td className="py-2 px-3 text-xs font-mono text-slate-500">{item.totalTerminals}</td>
                  <td className="py-2 px-3 text-xs font-mono text-slate-500">{item.onlineTerminals}</td>
                  <td className="py-2 px-3 text-xs font-mono text-slate-500">{item.totalTasks}</td>
                  <td className="py-2 px-3 text-xs font-mono text-slate-500">{item.completedTasks}</td>
                  <td className="py-2 px-3 text-xs font-mono text-slate-500">{item.uncompletedTasks}</td>
                  <td className="py-2 px-3">
                    <span className="text-xs font-bold text-blue-600">{item.completionRate}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MobileDashboard;
