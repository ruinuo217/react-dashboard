import React, { useState } from 'react';
import { Search, Star, MoreVertical } from 'lucide-react';
import { drivers } from '../../data/mockData';

const statusConfig: Record<string, { label: string; bg: string; text: string }> = {
  online: { label: '在線', bg: 'bg-green-50', text: 'text-green-700' },
  on_trip: { label: '任務中', bg: 'bg-blue-50', text: 'text-blue-700' },
  offline: { label: '離線', bg: 'bg-gray-100', text: 'text-gray-500' },
};

const DriverTable: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState('');

  const filtered = drivers.filter((d) => {
    const matchStatus = filter === 'all' || d.status === filter;
    const matchSearch =
      d.name.includes(search) ||
      d.id.toLowerCase().includes(search.toLowerCase()) ||
      d.vehicleType.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  const counts = {
    all: drivers.length,
    online: drivers.filter((d) => d.status === 'online').length,
    on_trip: drivers.filter((d) => d.status === 'on_trip').length,
    offline: drivers.filter((d) => d.status === 'offline').length,
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100">
      <div className="px-5 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">司機狀態管理</h3>
            <p className="text-xs text-gray-400 mt-0.5">即時追蹤所有司機的在線狀態與績效</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="搜尋司機姓名、ID 或車型..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-300"
            />
          </div>
          {/* Filter tabs */}
          <div className="flex items-center bg-gray-50 rounded-lg p-0.5">
            {(['all', 'online', 'on_trip', 'offline'] as const).map((key) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  filter === key
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {key === 'all' ? '全部' : statusConfig[key].label} ({counts[key]})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-50">
              <th className="text-left text-xs font-medium text-gray-400 px-5 py-3">司機</th>
              <th className="text-left text-xs font-medium text-gray-400 px-5 py-3">車型</th>
              <th className="text-left text-xs font-medium text-gray-400 px-5 py-3">狀態</th>
              <th className="text-left text-xs font-medium text-gray-400 px-5 py-3">評分</th>
              <th className="text-left text-xs font-medium text-gray-400 px-5 py-3">今日趟數</th>
              <th className="text-left text-xs font-medium text-gray-400 px-5 py-3">今日收入</th>
              <th className="text-left text-xs font-medium text-gray-400 px-5 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((driver) => {
              const sc = statusConfig[driver.status];
              return (
                <tr
                  key={driver.id}
                  className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors"
                >
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-600">
                        {driver.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{driver.name}</p>
                        <p className="text-xs text-gray-400">{driver.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <span className="text-sm text-gray-700">{driver.vehicleType}</span>
                  </td>
                  <td className="px-5 py-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${sc.bg} ${sc.text}`}>
                      {sc.label}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm text-gray-700">{driver.rating}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <span className="text-sm text-gray-700">{driver.trips_today}</span>
                  </td>
                  <td className="px-5 py-3">
                    <span className="text-sm font-medium text-gray-900">
                      NT${driver.earnings_today.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <button className="p-1 rounded-md hover:bg-gray-100 transition-colors">
                      <MoreVertical className="w-4 h-4 text-gray-400" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DriverTable;
