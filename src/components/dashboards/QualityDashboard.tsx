import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { 
  Heart, 
  Activity, 
  AlertTriangle, 
  ClipboardCheck, 
  TrendingUp, 
  Zap, 
  FileText 
} from 'lucide-react';
import { cn, StatCard } from '../../utils';
import { SATISFACTION_DATA, INCIDENT_STATS, EXECUTION_ANALYSIS, REPORT_STATUS } from '../../constants';

const QualityDashboard: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <StatCard title="安全满意度" value="98.2%" icon={Heart} trend="+0.5%" colorClass="bg-rose-500" />
        <StatCard title="警情总数 (本月)" value="120" icon={Activity} trend="+4.2%" colorClass="bg-blue-600" />
        <StatCard title="发案数 (本月)" value="25" icon={AlertTriangle} trend="-2.1%" colorClass="bg-amber-500" />
        <StatCard title="标准件执行率" value="92.0%" icon={ClipboardCheck} colorClass="bg-emerald-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
            <TrendingUp size={16} className="text-blue-600" />
            警情与发案统计分析
          </h3>
          <div className="h-[140px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={INCIDENT_STATS}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="category" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: '10px' }} />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '10px', fontSize: '10px' }} />
                <Bar dataKey="count" name="发生数" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={30} />
                <Bar dataKey="solved" name="办结数" fill="#10b981" radius={[4, 4, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col items-center justify-center">
          <h3 className="text-sm font-bold text-slate-800 mb-4 self-start flex items-center gap-2">
            <Heart size={16} className="text-rose-500" />
            安全满意度统计
          </h3>
          <div className="h-[140px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={SATISFACTION_DATA}
                  cx="50%"
                  cy="100%"
                  startAngle={180}
                  endAngle={0}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={0}
                  dataKey="value"
                >
                  {SATISFACTION_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
              <span className="text-2xl font-bold text-slate-900">98.2</span>
              <span className="text-sm text-slate-400 ml-0.5">%</span>
              <p className="text-[10px] font-medium text-emerald-600 mt-0.5">满意度极高</p>
            </div>
          </div>
          <div className="mt-4 w-full space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-500">本月目标</span>
              <span className="font-bold text-slate-700">95.0%</span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-[98.2%]" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Zap size={16} className="text-amber-500" />
            标准件与一管三防分析
          </h3>
          <div className="h-[140px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={EXECUTION_ANALYSIS}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 9 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="执行评分"
                  dataKey="A"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.5}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <FileText size={16} className="text-blue-600" />
              周报、月报生成状态
            </h3>
            <button className="bg-slate-100 hover:bg-slate-200 text-slate-600 px-2 py-1 rounded-lg text-[10px] font-bold transition-colors">
              配置自动生成
            </button>
          </div>
          <div className="space-y-2">
            {REPORT_STATUS.map((report) => (
              <div key={report.type + report.cycle} className="flex items-center justify-between p-2 rounded-xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                    <FileText size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">{report.type} - {report.cycle}</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">生成时间: {report.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={cn(
                    "text-[10px] px-2 py-0.5 rounded-full font-bold",
                    report.status === '已生成' ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                  )}>
                    {report.status}
                  </span>
                  <button className="text-blue-600 text-[10px] font-bold hover:underline">下载 PDF</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default QualityDashboard;
