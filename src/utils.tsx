import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const StatCard = ({ title, value, icon: Icon, trend, colorClass }: any) => (
  <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-2">
      <div className={cn("p-1.5 rounded-lg", colorClass)}>
        <Icon size={16} className="text-white" />
      </div>
      {trend && (
        <span className="flex items-center text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
          <ArrowUpRight size={10} className="mr-0.5" />
          {trend}
        </span>
      )}
    </div>
    <div>
      <p className="text-slate-500 text-xs font-medium">{title}</p>
      <h3 className="text-xl font-bold text-slate-900 mt-0.5 font-mono">{value}</h3>
    </div>
  </div>
);
