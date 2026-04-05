import React from 'react';
import { DollarSign, Users, CheckCircle, XCircle, TrendingUp, TrendingDown } from 'lucide-react';
import { kpiData } from '../../data/mockData';

interface KPICardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  tooltip: string;
}

const KPICard: React.FC<KPICardProps> = ({ title, value, change, icon, tooltip }) => {
  const isPositive = change >= 0;
  return (
    <div className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow group relative">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <div className={`flex items-center gap-1 mt-2 text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-500'}`}>
            {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            <span>{isPositive ? '+' : ''}{change}%</span>
            <span className="text-gray-400 font-normal">vs 昨日</span>
          </div>
        </div>
        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
          {icon}
        </div>
      </div>
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
        {tooltip}
      </div>
    </div>
  );
};

const KPICards: React.FC = () => {
  const cards: KPICardProps[] = [
    {
      title: '今日總營收',
      value: `NT$${kpiData.totalRevenue.toLocaleString()}`,
      change: kpiData.revenueChange,
      icon: <DollarSign className="w-6 h-6 text-green-600" />,
      tooltip: '今日所有完成訂單的累計營收金額（含動態加價）',
    },
    {
      title: '活躍司機',
      value: kpiData.activeDrivers.toLocaleString(),
      change: kpiData.driversChange,
      icon: <Users className="w-6 h-6 text-blue-600" />,
      tooltip: '目前在線或執行任務中的司機總數',
    },
    {
      title: '完成訂單',
      value: kpiData.completedTrips.toLocaleString(),
      change: kpiData.tripsChange,
      icon: <CheckCircle className="w-6 h-6 text-emerald-600" />,
      tooltip: '今日成功完成的訂單數量（不含取消）',
    },
    {
      title: '取消率',
      value: `${kpiData.cancelRate}%`,
      change: kpiData.cancelChange,
      icon: <XCircle className="w-6 h-6 text-red-500" />,
      tooltip: '今日訂單取消比例，低於 5% 為健康指標',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, i) => (
        <KPICard key={i} {...card} />
      ))}
    </div>
  );
};

export default KPICards;
