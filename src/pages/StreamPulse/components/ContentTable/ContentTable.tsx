import React, { useState } from 'react';
import { Search, TrendingUp, Minus, TrendingDown, Star, MoreVertical } from 'lucide-react';
import { topContent } from '../../data/mockData';

const statusConfig: Record<string, { label: string; bg: string; text: string; icon: React.ReactNode }> = {
  trending: {
    label: '熱播中',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    icon: <TrendingUp className="w-3 h-3" />,
  },
  stable: {
    label: '穩定',
    bg: 'bg-indigo-500/10',
    text: 'text-indigo-400',
    icon: <Minus className="w-3 h-3" />,
  },
  declining: {
    label: '下滑',
    bg: 'bg-red-500/10',
    text: 'text-red-400',
    icon: <TrendingDown className="w-3 h-3" />,
  },
};

const ContentTable: React.FC = () => {
  const [search, setSearch] = useState('');

  const filtered = topContent.filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.genre.includes(search)
  );

  const formatHours = (h: number) => {
    if (h >= 1000000) return `${(h / 1000000).toFixed(1)}M`;
    if (h >= 1000) return `${(h / 1000).toFixed(0)}K`;
    return h.toString();
  };

  return (
    <div className="bg-[#1a1a1a] rounded-xl border border-white/5">
      <div className="px-5 py-4 border-b border-white/5">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-sm font-semibold text-white">熱門內容排行 / Top Content Performance</h3>
            <p className="text-xs text-gray-500 mt-0.5">追蹤影集觀看時數、完播留存率與觀眾評分</p>
          </div>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="搜尋劇名或類型..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/50"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/5">
              <th className="text-left text-xs font-medium text-gray-500 px-5 py-3">排名</th>
              <th className="text-left text-xs font-medium text-gray-500 px-5 py-3">劇名 / Title</th>
              <th className="text-left text-xs font-medium text-gray-500 px-5 py-3">類型 / Genre</th>
              <th className="text-left text-xs font-medium text-gray-500 px-5 py-3">狀態</th>
              <th className="text-right text-xs font-medium text-gray-500 px-5 py-3">觀看時數 / Watch Hours</th>
              <th className="text-right text-xs font-medium text-gray-500 px-5 py-3">完播率 / Retention</th>
              <th className="text-left text-xs font-medium text-gray-500 px-5 py-3">評分 / Rating</th>
              <th className="text-left text-xs font-medium text-gray-500 px-5 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((content, idx) => {
              const sc = statusConfig[content.status];
              return (
                <tr
                  key={content.id}
                  className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
                >
                  <td className="px-5 py-3">
                    <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                      idx === 0 ? 'bg-indigo-500 text-white' : 'bg-white/5 text-gray-400'
                    }`}>
                      {idx + 1}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <p className="text-sm font-medium text-white">{content.title}</p>
                    <p className="text-xs text-gray-500">{content.episodes} 集 · {content.releaseDate}</p>
                  </td>
                  <td className="px-5 py-3">
                    <span className="text-sm text-gray-300">{content.genre}</span>
                  </td>
                  <td className="px-5 py-3">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${sc.bg} ${sc.text}`}>
                      {sc.icon}
                      {sc.label}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-right">
                    <span className="text-sm font-medium text-white">{formatHours(content.totalHours)}</span>
                    <span className="text-xs text-gray-500 ml-1">hrs</span>
                  </td>
                  <td className="px-5 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-16 h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${content.retentionRate}%`,
                            background: content.retentionRate > 80
                              ? '#22c55e'
                              : content.retentionRate > 60
                              ? '#eab308'
                              : '#ef4444',
                          }}
                        />
                      </div>
                      <span className="text-sm font-medium text-white">{content.retentionRate}%</span>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm text-gray-300">{content.rating}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <button className="p-1 rounded-md hover:bg-white/5 transition-colors">
                      <MoreVertical className="w-4 h-4 text-gray-500" />
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

export default ContentTable;
