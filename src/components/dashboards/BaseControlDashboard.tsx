import React from 'react';
import { 
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis
} from 'recharts';
import { 
  Users, 
  Home, 
  Building2, 
  UserCheck, 
  MapPin, 
  MessageSquareQuote, 
  ShieldCheck, 
  Activity, 
  HeartHandshake, 
  Heart 
} from 'lucide-react';
import { cn, StatCard } from '../../utils';
import { POPULATION_DISTRIBUTION, REAL_ELEMENTS, OPINION_STATS, SECURITY_PREVENTION_STATS, COMMUNITY_ORDER_DATA, SERVICE_MEASURES_DATA } from '../../constants';

const BaseControlDashboard: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <StatCard title="实有人口总数" value="1,215" icon={Users} trend="+2.4%" colorClass="bg-blue-600" />
        <StatCard title="实有房屋数" value="8,420" icon={Home} trend="+1.1%" colorClass="bg-emerald-500" />
        <StatCard title="实有单位数" value="1,245" icon={Building2} trend="+0.5%" colorClass="bg-amber-500" />
        <StatCard title="特定对象数" value="45" icon={UserCheck} colorClass="bg-red-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
            <MapPin size={16} className="text-blue-600" />
            管理实有要素 (人、地、物、事)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase">实有人口结构</p>
              <div className="h-[140px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={POPULATION_DISTRIBUTION} innerRadius={40} outerRadius={60} paddingAngle={5} dataKey="value">
                      {POPULATION_DISTRIBUTION.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-3 mt-1">
                {POPULATION_DISTRIBUTION.map(item => (
                  <div key={item.name} className="flex items-center gap-1 text-[9px] font-bold text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: item.color}} />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {REAL_ELEMENTS.map((item, idx) => (
                <div key={idx} className="p-2 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center justify-center text-center">
                  <item.icon size={18} className={cn("mb-1", item.color)} />
                  <p className="text-[9px] text-slate-400 font-bold uppercase">{item.label}</p>
                  <p className="text-sm font-bold text-slate-800">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
            <MessageSquareQuote size={16} className="text-indigo-600" />
            掌握社情民意
          </h3>
          <div className="space-y-4">
            {OPINION_STATS.map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-bold text-slate-700">{item.name}</span>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 bg-slate-100 rounded text-slate-500">{item.label}</span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full" 
                    style={{ width: `${(item.value / item.total) * 100}%`, backgroundColor: item.color }} 
                  />
                </div>
                <div className="flex justify-between mt-0.5">
                  <span className="text-[9px] text-slate-400">进度: {item.value}</span>
                  <span className="text-[9px] text-slate-400">目标: {item.total}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
            <ShieldCheck size={16} className="text-emerald-600" />
            组织安全防范
          </h3>
          <div className="space-y-2">
            {SECURITY_PREVENTION_STATS.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 bg-white border border-slate-100 rounded-xl hover:border-emerald-200 transition-all">
                <div className="flex items-center gap-2">
                  <div className={cn("p-1.5 rounded-lg", item.color)}>
                    <item.icon size={16} />
                  </div>
                  <span className="text-xs font-bold text-slate-700">{item.name}</span>
                </div>
                <span className="text-sm font-mono font-bold text-slate-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Activity size={16} className="text-amber-600" />
            维护社区秩序
          </h3>
          <div className="h-[140px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={COMMUNITY_ORDER_DATA}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="name" tick={{fill: '#64748b', fontSize: 9}} />
                <Radar name="指标" dataKey="value" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.5} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {COMMUNITY_ORDER_DATA.map(item => (
              <div key={item.name} className="px-2 py-1 bg-slate-50 rounded-lg flex justify-between items-center">
                <span className="text-[9px] text-slate-500 font-bold">{item.name}</span>
                <span className="text-[10px] font-bold text-slate-800">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
            <HeartHandshake size={16} className="text-rose-500" />
            服务辖区群众
          </h3>
          <div className="space-y-3">
            {SERVICE_MEASURES_DATA.map((item, idx) => (
              <div key={idx} className="p-3 bg-slate-50 rounded-2xl border border-slate-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                  <item.icon size={32} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-1">
                    <item.icon size={16} className={item.color} />
                    <h4 className="text-xs font-bold text-slate-800">{item.name}</h4>
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="text-xl font-mono font-bold text-slate-900">{item.value}</span>
                    <span className="text-[9px] text-slate-400 mb-1 font-bold">项落地</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-2 bg-rose-50 rounded-xl border border-rose-100">
            <p className="text-[9px] text-rose-700 leading-relaxed font-medium">
              坚持以人民为中心，通过数字化手段提升便民利企服务效能。
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BaseControlDashboard;
