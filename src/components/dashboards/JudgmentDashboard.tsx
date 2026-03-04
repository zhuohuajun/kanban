import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import { 
  Activity, 
  AlertTriangle, 
  Database, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  FileSearch, 
  MessageSquareQuote 
} from 'lucide-react';
import { cn, StatCard } from '../../utils';
import { TREND_DATA, CATEGORY_DATA, WORKFLOW_DATA, RECENT_ALERTS } from '../../constants';

const JudgmentDashboard: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <StatCard title="今日警情总数" value="35" icon={Activity} trend="+12.5%" colorClass="bg-blue-600" />
        <StatCard title="高风险预警" value="5" icon={AlertTriangle} trend="+5.2%" colorClass="bg-red-500" />
        <StatCard title="数据模型产出" value="42" icon={Database} trend="+8.1%" colorClass="bg-indigo-600" />
        <StatCard title="研判反馈率" value="92.5%" icon={CheckCircle2} colorClass="bg-emerald-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <TrendingUp size={16} className="text-blue-600" />
              警情趋势分析 (近7日)
            </h3>
          </div>
          <div className="h-[140px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={TREND_DATA}>
                <defs>
                  <linearGradient id="colorGov" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} dy={5} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: '10px' }} />
                <Area type="monotone" dataKey="governance" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorGov)" />
                <Area type="monotone" dataKey="models" stroke="#6366f1" strokeWidth={2} fillOpacity={1} fill="url(#colorMod)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Users size={16} className="text-blue-600" />
            重点人员类型分布
          </h3>
          <div className="h-[140px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={CATEGORY_DATA} cx="50%" cy="50%" innerRadius={40} outerRadius={60} paddingAngle={5} dataKey="value">
                  {CATEGORY_DATA.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-1 mt-2">
            {CATEGORY_DATA.map((item) => (
              <div key={item.name} className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-[10px] text-slate-600 font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
            <FileSearch size={16} className="text-blue-600" />
            预警研判全流程监控
          </h3>
          <div className="space-y-3 relative">
            <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-slate-100" />
            {WORKFLOW_DATA.map((step, idx) => (
              <div key={step.name} className="flex items-center gap-3 relative z-10">
                <div className={cn("w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border-2 bg-white", step.status === 'success' ? 'border-emerald-500 text-emerald-500' : 'border-slate-300 text-slate-400')}>
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-slate-700">{step.name}</span>
                    <span className="text-xs font-mono font-bold text-slate-900">{step.count}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
            <MessageSquareQuote size={16} className="text-blue-600" />
            实时预警动态
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="pb-2 text-[10px] font-bold text-slate-400 uppercase">编号</th>
                  <th className="pb-2 text-[10px] font-bold text-slate-400 uppercase">预警类型</th>
                  <th className="pb-2 text-[10px] font-bold text-slate-400 uppercase">等级</th>
                  <th className="pb-2 text-[10px] font-bold text-slate-400 uppercase">时间</th>
                  <th className="pb-2 text-[10px] font-bold text-slate-400 uppercase">状态</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {RECENT_ALERTS.map((alert) => (
                  <tr key={alert.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-2 text-xs font-mono text-slate-500">{alert.id}</td>
                    <td className="py-2 text-xs font-semibold text-slate-700">{alert.type}</td>
                    <td className="py-2 text-xs text-slate-600">{alert.level}</td>
                    <td className="py-2 text-xs text-slate-500">{alert.time}</td>
                    <td className="py-2">
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-blue-50 text-blue-600">
                        {alert.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default JudgmentDashboard;
