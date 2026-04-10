import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { vehicleTypeData } from '../../data/mockData';

const VehicleTypeChart: React.FC = () => {
  const total = vehicleTypeData.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-900">車輛類型分佈</h3>
        <p className="text-xs text-gray-400 mt-0.5">各車型在線車輛數量佔比</p>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={vehicleTypeData}
            cx="35%"
            cy="50%"
            innerRadius="52%"
            outerRadius="78%"
            paddingAngle={3}
            dataKey="value"
            stroke="#fff"
            strokeWidth={3}
          >
            {vehicleTypeData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <text x="35%" y="47%" textAnchor="middle" dominantBaseline="central" style={{ fontSize: 22, fontWeight: 'bold', fill: '#1a1a1a' }}>
            {total.toLocaleString()}
          </text>
          <text x="35%" y="57%" textAnchor="middle" dominantBaseline="central" style={{ fontSize: 12, fill: '#999' }}>
            總車輛數
          </text>
          <Tooltip
            contentStyle={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: 8, color: '#fff', fontSize: 12 }}
            formatter={(value: any, name: any) => [`${Number(value).toLocaleString()} 輛 (${((Number(value) / total) * 100).toFixed(1)}%)`, name]}
          />
          <Legend
            layout="vertical"
            align="right"
            verticalAlign="middle"
            iconSize={10}
            formatter={(value: string) => {
              const item = vehicleTypeData.find((d) => d.name === value);
              if (!item) return value;
              return `${value}  ${((item.value / total) * 100).toFixed(1)}%`;
            }}
            wrapperStyle={{ fontSize: 12, color: '#666' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VehicleTypeChart;
