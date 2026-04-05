import React from 'react';
import { AlertTriangle, AlertCircle, Info, X } from 'lucide-react';
import { alerts } from '../../data/mockData';

const iconMap = {
  danger: <AlertCircle className="w-5 h-5 text-red-400" />,
  warning: <AlertTriangle className="w-5 h-5 text-amber-400" />,
  info: <Info className="w-5 h-5 text-indigo-400" />,
};

const bgMap = {
  danger: 'bg-red-500/5 border-red-500/10',
  warning: 'bg-amber-500/5 border-amber-500/10',
  info: 'bg-indigo-500/5 border-indigo-500/10',
};

const AlertPanel: React.FC = () => {
  return (
    <div className="bg-[#1a1a1a] rounded-xl border border-white/5 p-5 h-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-semibold text-white">營運警示 / Alerts</h3>
          <p className="text-xs text-gray-500 mt-0.5">即時異常事件通知</p>
        </div>
        <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {alerts.length}
        </span>
      </div>
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`flex gap-3 p-3.5 rounded-lg border ${bgMap[alert.type]} transition-all hover:border-white/10`}
          >
            <div className="shrink-0 mt-0.5">{iconMap[alert.type]}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-semibold text-white">{alert.title}</p>
                <button className="shrink-0 p-0.5 rounded hover:bg-white/5 transition-colors">
                  <X className="w-3.5 h-3.5 text-gray-500" />
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">{alert.message}</p>
              <p className="text-xs text-gray-600 mt-2">{alert.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertPanel;
