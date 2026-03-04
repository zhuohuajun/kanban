import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import { 
  Building2, 
  Network, 
  Users, 
  Truck, 
  Activity 
} from 'lucide-react';
import { cn, StatCard } from '../../utils';
import { STATION_DISTRIBUTION, FENGQIAO_DATA, LEVEL_DATA, POLICE_FORCE_STATS, RANK_DATA, AGE_STRUCTURE } from '../../constants';

const OrgDashboard: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <StatCard title="派出所总数" value="145" icon={Building2} trend="+0.8%" colorClass="bg-blue-600" />
        <StatCard title="警务区总数" value="860" icon={Network} colorClass="bg-indigo-600" />
        <StatCard title="总警力数" value="4,250" icon={Users} trend="+1.2%" colorClass="bg-emerald-500" />
        <StatCard title="装备总数" value="1,284" icon={Truck} trend="+3.5%" colorClass="bg-amber-500" />
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm mb-4">
        <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
          <Building2 size={16} className="text-blue-600" />
          派出所信息概览
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-2">
            <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase">派出所分布统计</p>
            <div className="h-[140px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={STATION_DISTRIBUTION}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 9}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 9}} />
                  <Tooltip cursor={{fill: '#f8fafc'}} />
                  <Bar dataKey="value" fill="#3b82f6" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase text-center">枫桥式派出所</p>
            <div className="h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={FENGQIAO_DATA} innerRadius={35} outerRadius={50} paddingAngle={5} dataKey="value">
                    {FENGQIAO_DATA.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-3 mt-1">
              {FENGQIAO_DATA.map(item => (
                <div key={item.name} className="flex items-center gap-1 text-[9px] font-bold text-slate-500">
                  <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: item.color}} />
                  {item.name}: {item.value}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase text-center">派出所等级分布</p>
            <div className="h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={LEVEL_DATA} cx="50%" cy="50%" outerRadius={45} dataKey="value" label={{fontSize: 7}}>
                    {LEVEL_DATA.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Users size={16} className="text-blue-600" />
            警力配置统计 (民警/辅警/其他)
          </h3>
          <div className="h-[140px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={POLICE_FORCE_STATS}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                <Tooltip cursor={{fill: '#f8fafc'}} />
                <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{fontSize: '10px'}} />
                <Bar dataKey="police" name="民警" stackId="a" fill="#3b82f6" />
                <Bar dataKey="assistant" name="辅警" stackId="a" fill="#10b981" />
                <Bar dataKey="other" name="其他" stackId="a" fill="#fbbf24" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2 text-center justify-center">
            机构职级分布
          </h3>
          <div className="h-[140px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={RANK_DATA} cx="50%" cy="50%" innerRadius={35} outerRadius={55} dataKey="value" paddingAngle={2}>
                  {RANK_DATA.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {RANK_DATA.map(item => (
              <div key={item.name} className="flex items-center gap-1 text-[9px] font-bold text-slate-500">
                <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: item.color}} />
                {item.name}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Activity size={16} className="text-blue-600" />
            警力人员结构 (按年龄)
          </h3>
          <div className="h-[140px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" data={AGE_STRUCTURE}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                <XAxis type="number" hide />
                <YAxis dataKey="range" type="category" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                <Tooltip cursor={{fill: '#f8fafc'}} />
                <Bar dataKey="value" fill="#6366f1" radius={[0, 4, 4, 0]} barSize={15} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrgDashboard;
