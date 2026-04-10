import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { deviceData } from '../../data/mockData';

const DeviceDistributionChart: React.FC = () => {
  return (
    <div className="bg-[#1a1a1a] rounded-xl border border-white/5 p-5">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-white">觀看裝置分佈 / Device Breakdown</h3>
        <p className="text-xs text-gray-500 mt-0.5">用戶觀看內容的裝置類型比例</p>
      </div>
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={deviceData}
            cx="35%"
            cy="50%"
            innerRadius="50%"
            outerRadius="75%"
            paddingAngle={4}
            dataKey="value"
            stroke="#141414"
            strokeWidth={4}
          >
            {deviceData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <text x="35%" y="45%" textAnchor="middle" dominantBaseline="central" style={{ fontSize: 14, fontWeight: 'bold', fill: '#fff' }}>
            觀看裝置
          </text>
          <text x="35%" y="56%" textAnchor="middle" dominantBaseline="central" style={{ fontSize: 11, fill: '#666' }}>
            Device Split
          </text>
          <Tooltip
            contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: 8, color: '#e5e5e5', fontSize: 12 }}
            formatter={(value: any, name: any) => [`${value}% 的觀看流量`, name]}
          />
          <Legend
            layout="vertical"
            align="right"
            verticalAlign="middle"
            iconSize={10}
            formatter={(value: string) => {
              const item = deviceData.find((d) => d.name === value);
              if (!item) return value;
              return `${value}  ${item.value}%`;
            }}
            wrapperStyle={{ fontSize: 13, color: '#ccc' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DeviceDistributionChart;
