import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area, Cell
} from 'recharts';
import { 
  FileText, 
  Zap, 
  ClipboardCheck, 
  LayoutGrid, 
  Activity, 
  ChevronRight 
} from 'lucide-react';
import { cn, StatCard } from '../../utils';
import { STANDARD_ITEM_LIFECYCLE, TASK_LIFECYCLE, STANDARD_ITEM_TYPES, MONITORING_ALERTS } from '../../constants';

const StandardDashboard: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <StatCard title="总数" value="30" icon={FileText} trend="+8.2%" colorClass="bg-indigo-600" />
        <StatCard title="正在制作中" value="8" icon={Zap} trend="+12%" colorClass="bg-amber-500" />
        <StatCard title="已发布任务" value="35" icon={ClipboardCheck} trend="+5.4%" colorClass="bg-blue-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
            <FileText size={16} className="text-blue-600" />
            标准件生命周期
          </h3>
          <div className="h-[140px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={STANDARD_ITEM_LIFECYCLE}>
                <XAxis dataKey="stage" hide />
                <YAxis hide />
                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: '10px' }} />
                <Bar dataKey="count" radius={[4, 4, 4, 4]} barSize={30}>
                  {STANDARD_ITEM_LIFECYCLE.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-1 mt-2">
            {STANDARD_ITEM_LIFECYCLE.map((item) => (
              <div key={item.stage} className="flex justify-between items-center text-[10px]">
                <span className="text-slate-500 flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                  {item.stage}
                </span>
                <span className="font-bold text-slate-700">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Zap size={16} className="text-amber-500" />
            任务生命周期 (基于标准件)
          </h3>
          <div className="h-[140px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={TASK_LIFECYCLE}>
                <defs>
                  <linearGradient id="colorTask" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="stage" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: '10px' }} />
                <Area type="monotone" dataKey="count" stroke="#f59e0b" strokeWidth={2} fillOpacity={1} fill="url(#colorTask)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            {TASK_LIFECYCLE.map((item) => (
              <div key={item.stage} className="text-center">
                <p className="text-[9px] text-slate-400 font-bold mb-0.5">{item.stage}</p>
                <p className="text-xs font-bold text-slate-800">{item.count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
            <LayoutGrid size={16} className="text-blue-600" />
            标准件分类体系
          </h3>
          <div className="space-y-3">
            {STANDARD_ITEM_TYPES.map((item) => (
              <div key={item.name} className="group p-3 bg-white border border-slate-100 rounded-xl hover:border-blue-200 transition-all">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                    {item.name}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-slate-900">{item.value}</span>
                </div>
                <p className="text-[9px] text-slate-400">{item.desc}</p>
                <div className="mt-2 w-full bg-slate-50 h-1 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full" 
                    style={{ width: `${(item.value / 600) * 100}%`, backgroundColor: item.color }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Activity size={16} className="text-blue-600" />
              任务运行实时监测
            </h3>
            <span className="text-[10px] text-slate-400">18:48:50</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="pb-2 text-[10px] font-bold text-slate-400 uppercase">编号</th>
                  <th className="pb-2 text-[10px] font-bold text-slate-400 uppercase">单位</th>
                  <th className="pb-2 text-[10px] font-bold text-slate-400 uppercase">任务</th>
                  <th className="pb-2 text-[10px] font-bold text-slate-400 uppercase">状态</th>
                  <th className="pb-2 text-[10px] font-bold text-slate-400 uppercase">等级</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {MONITORING_ALERTS.map((alert) => (
                  <tr key={alert.id} className="hover:bg-blue-50/30 transition-colors">
                    <td className="py-2 text-[10px] font-mono text-slate-500">{alert.id}</td>
                    <td className="py-2 text-[10px] font-semibold text-slate-700">{alert.unit}</td>
                    <td className="py-2 text-[10px] text-slate-600">{alert.task}</td>
                    <td className="py-2 text-[10px] text-blue-600 font-medium">{alert.status}</td>
                    <td className="py-2">
                      <span className={cn(
                        "text-[9px] px-1.5 py-0.5 rounded font-bold",
                        alert.level === '高' ? "bg-red-100 text-red-600" :
                        alert.level === '中' ? "bg-amber-100 text-amber-600" : "bg-blue-100 text-blue-600"
                      )}>
                        {alert.level}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-end">
            <button className="flex items-center gap-1 text-[10px] font-bold text-slate-500 hover:text-blue-600 transition-colors">
              查看全部监测记录 <ChevronRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StandardDashboard;
