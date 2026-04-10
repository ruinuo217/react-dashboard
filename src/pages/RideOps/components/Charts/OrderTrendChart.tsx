import React from 'react';
import {
  ComposedChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { hourlyOrderData } from '../../data/mockData';

const OrderTrendChart: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-900">24H 訂單趨勢</h3>
        <p className="text-xs text-gray-400 mt-0.5">過去 24 小時的訂單量與營收變化</p>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <ComposedChart data={hourlyOrderData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="rideOpsOrderGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#276EF1" stopOpacity={0.15} />
              <stop offset="100%" stopColor="#276EF1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" vertical={false} />
          <XAxis dataKey="hour" tick={{ fontSize: 11, fill: '#999' }} axisLine={{ stroke: '#eee' }} tickLine={false} />
          <YAxis yAxisId="left" tick={{ fontSize: 11, fill: '#999' }} axisLine={false} tickLine={false} label={{ value: '訂單', position: 'insideTopLeft', offset: -5, style: { fontSize: 11, fill: '#999' } }} />
          <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, fill: '#999' }} axisLine={false} tickLine={false} tickFormatter={(v: number) => `${(v / 1000).toFixed(0)}K`} label={{ value: '營收', position: 'insideTopRight', offset: -5, style: { fontSize: 11, fill: '#999' } }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: 8, color: '#fff', fontSize: 12 }}
            formatter={(value: any, name: any) => {
              if (name === '訂單數') return [`${value} 筆`, name];
              return [`NT$${Number(value).toLocaleString()}`, name];
            }}
          />
          <Legend iconSize={12} wrapperStyle={{ fontSize: 12, color: '#999' }} />
          <Area yAxisId="left" type="monotone" dataKey="orders" name="訂單數" stroke="#276EF1" strokeWidth={2.5} fill="url(#rideOpsOrderGradient)" dot={false} />
          <Bar yAxisId="right" dataKey="revenue" name="營收" fill="rgba(5,163,87,0.2)" barSize={8} radius={[3, 3, 0, 0]} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrderTrendChart;
