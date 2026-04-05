import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import KPICards from './components/KPICards/KPICards';
import MapView from './components/MapView/MapView';
import DriverTable from './components/DriverTable/DriverTable';
import OrderTrendChart from './components/Charts/OrderTrendChart';
import VehicleTypeChart from './components/Charts/VehicleTypeChart';
import AlertPanel from './components/AlertPanel/AlertPanel';
import { Bell, Search, ChevronDown, ArrowLeft } from 'lucide-react';

const RideOpsDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="ml-[240px] min-h-screen">
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="flex items-center justify-between px-6 h-16">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/')}
                className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                title="返回入口"
              >
                <ArrowLeft className="w-5 h-5 text-gray-500" />
              </button>
              <div>
                <h1 className="text-lg font-bold text-gray-900">營運總覽</h1>
                <p className="text-xs text-gray-400">台北市即時運力監控中心</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜尋..."
                  className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-black/10"
                />
              </div>
              <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-2 pl-4 border-l border-gray-200">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-sm font-bold">
                  A
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Admin</p>
                  <p className="text-xs text-gray-400">營運經理</p>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-green-700">即時更新中</span>
            <span className="text-xs text-gray-400 ml-2">最後更新：剛剛</span>
          </div>

          <KPICards />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" style={{ height: 480 }}>
            <div className="lg:col-span-2 h-full">
              <MapView />
            </div>
            <div className="h-full overflow-auto">
              <AlertPanel />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <OrderTrendChart />
            </div>
            <div>
              <VehicleTypeChart />
            </div>
          </div>

          <DriverTable />
        </div>
      </main>
    </div>
  );
};

export default RideOpsDashboard;
