import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend, LineChart, Line
} from 'recharts';
import { 
  DEPT_COLLABORATION_DATA, 
  POLICE_TYPE_FLOW, 
  FLOW_REMINDERS, 
  COLLABORATION_METRICS 
} from '../../constants';
import { StatCard } from '../../utils';
import { Bell, ArrowRight, Users, ShieldCheck, Clock, ClipboardList } from 'lucide-react';

const CollaborationDashboard: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Top Metrics */}
      <div className="grid grid-cols-4 gap-4">
        {COLLABORATION_METRICS.map((metric, index) => (
          <StatCard 
            key={index}
            label={metric.label}
            value={metric.value}
            trend={metric.trend}
            icon={metric.icon}
          />
        ))}
      </div>

      <div className="grid grid-cols-12 gap-4">
        {/* Departmental Collaboration */}
        <div className="col-span-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-800">部门协同分布</h3>
            <Users size={16} className="text-slate-400" />
          </div>
          <div className="h-[140px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DEPT_COLLABORATION_DATA} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  width={40} 
                  tick={{ fontSize: 10, fontWeight: 500 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  labelStyle={{ fontWeight: 'bold', fontSize: '12px' }}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={12}>
                  {DEPT_COLLABORATION_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Police Type Collaboration Flow */}
        <div className="col-span-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-800">警种协同流程</h3>
            <ShieldCheck size={16} className="text-slate-400" />
          </div>
          <div className="h-[140px] w-full flex items-center justify-around">
            {POLICE_TYPE_FLOW.map((item, index) => (
              <div key={index} className="flex flex-col items-center relative">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg mb-2"
                  style={{ backgroundColor: item.color }}
                >
                  {item.count}
                </div>
                <span className="text-[10px] font-bold text-slate-600">{item.stage}</span>
                {index < POLICE_TYPE_FLOW.length - 1 && (
                  <ArrowRight size={14} className="absolute -right-6 top-5 text-slate-300" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Flow Reminders */}
        <div className="col-span-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-slate-800">流转提醒</h3>
            <Bell size={16} className="text-amber-500 animate-pulse" />
          </div>
          <div className="space-y-2 max-h-[140px] overflow-y-auto pr-1 custom-scrollbar">
            {FLOW_REMINDERS.map((reminder) => (
              <div 
                key={reminder.id} 
                className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    reminder.type === 'special' ? 'bg-red-500' : 
                    reminder.type === 'population' ? 'bg-blue-500' : 'bg-amber-500'
                  }`} />
                  <span className="text-[10px] font-medium text-slate-700 truncate max-w-[140px]">
                    {reminder.title}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-slate-900 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                  {reminder.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Collaboration Trend (Optional addition for more depth) */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-slate-800">协同任务趋势分析</h3>
          <div className="flex gap-2">
            <span className="flex items-center gap-1 text-[10px] text-slate-500">
              <div className="w-2 h-2 rounded-full bg-blue-500" /> 发起任务
            </span>
            <span className="flex items-center gap-1 text-[10px] text-slate-500">
              <div className="w-2 h-2 rounded-full bg-emerald-500" /> 完成任务
            </span>
          </div>
        </div>
        <div className="h-[140px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={[
              { name: '周一', start: 45, end: 38 },
              { name: '周二', start: 52, end: 48 },
              { name: '周三', start: 48, end: 50 },
              { name: '周四', start: 61, end: 55 },
              { name: '周五', start: 55, end: 58 },
              { name: '周六', start: 32, end: 35 },
              { name: '周日', start: 28, end: 30 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fill: '#64748b' }} 
              />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Line type="monotone" dataKey="start" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="end" stroke="#10b981" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default CollaborationDashboard;
