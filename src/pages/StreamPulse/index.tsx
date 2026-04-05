import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import KPICards from './components/KPICards/KPICards';
import SubscriptionTrendChart from './components/Charts/SubscriptionTrendChart';
import DeviceDistributionChart from './components/Charts/DeviceDistributionChart';
import ContentTable from './components/ContentTable/ContentTable';
import AlertPanel from './components/AlertPanel/AlertPanel';
import { Bell, Search, ChevronDown, ArrowLeft } from 'lucide-react';

const StreamPulseDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#141414]">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="ml-[240px] min-h-screen">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 bg-[#141414]/80 backdrop-blur-md border-b border-white/5">
          <div className="flex items-center justify-between px-6 h-16">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/')}
                className="p-1.5 rounded-lg hover:bg-white/5 transition-colors"
                title="返回入口"
              >
                <ArrowLeft className="w-5 h-5 text-gray-400" />
              </button>
              <div>
                <h1 className="text-lg font-bold text-white">內容營運戰情室</h1>
                <p className="text-xs text-gray-500">串流平台即時數據監控中心</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="搜尋..."
                  className="pl-9 pr-4 py-2 text-sm bg-white/5 border border-white/10 rounded-lg w-64 text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                />
              </div>
              <button className="relative p-2 rounded-lg hover:bg-white/5 transition-colors">
                <Bell className="w-5 h-5 text-gray-400" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-2 pl-4 border-l border-white/10">
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-bold">
                  A
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Admin</p>
                  <p className="text-xs text-gray-500">內容總監</p>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          {/* Live Indicator */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
            </span>
            <span className="text-xs font-medium text-indigo-400">即時更新中</span>
            <span className="text-xs text-gray-600 ml-2">最後更新：剛剛</span>
          </div>

          {/* KPI Cards */}
          <KPICards />

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <SubscriptionTrendChart />
            </div>
            <div>
              <DeviceDistributionChart />
            </div>
          </div>

          {/* Content Table + Alerts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ContentTable />
            </div>
            <div>
              <AlertPanel />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StreamPulseDashboard;
