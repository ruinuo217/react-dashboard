import React from 'react';
import { Users, DollarSign, Activity, UserMinus, TrendingUp, TrendingDown } from 'lucide-react';
import { kpiData } from '../../data/mockData';

interface KPICardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  iconBg: string;
  tooltip: string;
}

const KPICard: React.FC<KPICardProps> = ({ title, value, change, icon, iconBg, tooltip }) => {
  const isPositive = change >= 0;
  // For churn rate, negative change is good
  const isGood = title.includes('退訂') ? !isPositive : isPositive;

  return (
    <div className="bg-[#1a1a1a] rounded-xl p-5 border border-white/5 hover:border-white/10 transition-all group relative">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-400 mb-1">{title}</p>
          <p className="text-2xl font-bold text-white">{value}</p>
          <div className={`flex items-center gap-1 mt-2 text-sm font-medium ${isGood ? 'text-emerald-400' : 'text-red-400'}`}>
            {isGood ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            <span>{isPositive ? '+' : ''}{change}%</span>
            <span className="text-gray-500 font-normal">vs 上月</span>
          </div>
        </div>
        <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center`}>
          {icon}
        </div>
      </div>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-white text-gray-900 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 shadow-lg">
        {tooltip}
      </div>
    </div>
  );
};

const KPICards: React.FC = () => {
  const formatNumber = (n: number) => {
    if (n >= 100000000) return `${(n / 100000000).toFixed(1)} 億`;
    if (n >= 10000) return `${(n / 10000).toFixed(0)} 萬`;
    return n.toLocaleString();
  };

  const cards: KPICardProps[] = [
    {
      title: '總訂閱人數 / Total Subscribers',
      value: formatNumber(kpiData.totalSubscribers),
      change: kpiData.subscribersChange,
      icon: <Users className="w-6 h-6 text-indigo-400" />,
      iconBg: 'bg-indigo-500/10',
      tooltip: '全平台付費訂閱用戶總數（含所有方案等級）',
    },
    {
      title: '本月營收 / MRR',
      value: `NT$${formatNumber(kpiData.monthlyRevenue)}`,
      change: kpiData.revenueChange,
      icon: <DollarSign className="w-6 h-6 text-emerald-400" />,
      iconBg: 'bg-emerald-500/10',
      tooltip: '當月經常性收入（Monthly Recurring Revenue）',
    },
    {
      title: '活躍用戶 / Active Users',
      value: formatNumber(kpiData.activeUsers),
      change: kpiData.activeUsersChange,
      icon: <Activity className="w-6 h-6 text-cyan-400" />,
      iconBg: 'bg-cyan-500/10',
      tooltip: '過去 30 天內至少觀看一次內容的不重複用戶',
    },
    {
      title: '退訂率 / Churn Rate',
      value: `${kpiData.churnRate}%`,
      change: kpiData.churnChange,
      icon: <UserMinus className="w-6 h-6 text-red-400" />,
      iconBg: 'bg-red-500/10',
      tooltip: '本月取消訂閱用戶佔上月總訂閱用戶的比例',
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
