import React from 'react';
import { AlertTriangle, AlertCircle, Info, X } from 'lucide-react';
import { alerts } from '../../data/mockData';

const iconMap = {
  danger: <AlertCircle className="w-5 h-5 text-red-500" />,
  warning: <AlertTriangle className="w-5 h-5 text-amber-500" />,
  info: <Info className="w-5 h-5 text-blue-500" />,
};

const bgMap = {
  danger: 'bg-red-50 border-red-100',
  warning: 'bg-amber-50 border-amber-100',
  info: 'bg-blue-50 border-blue-100',
};

const AlertPanel: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">營運警示</h3>
          <p className="text-xs text-gray-400 mt-0.5">即時異常事件通知與建議行動</p>
        </div>
        <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {alerts.length}
        </span>
      </div>
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`flex gap-3 p-3.5 rounded-lg border ${bgMap[alert.type]} transition-all hover:shadow-sm`}
          >
            <div className="shrink-0 mt-0.5">{iconMap[alert.type]}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-semibold text-gray-900">{alert.title}</p>
                <button className="shrink-0 p-0.5 rounded hover:bg-black/5 transition-colors">
                  <X className="w-3.5 h-3.5 text-gray-400" />
                </button>
              </div>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">{alert.message}</p>
              <p className="text-xs text-gray-400 mt-2">{alert.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertPanel;
