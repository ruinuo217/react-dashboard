import React from 'react';
import {
  ComposedChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { subscriptionTrend } from '../../data/mockData';

const SubscriptionTrendChart: React.FC = () => {
  return (
    <div className="bg-[#1a1a1a] rounded-xl border border-white/5 p-5">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-white">訂閱趨勢 / Subscription Trend</h3>
        <p className="text-xs text-gray-500 mt-0.5">近 30 天新增訂閱 vs 退訂人數與累積訂閱走勢</p>
      </div>
      <ResponsiveContainer width="100%" height={320}>
        <ComposedChart data={subscriptionTrend} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="newSubsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity={1} />
              <stop offset="100%" stopColor="#6366f1" stopOpacity={0.3} />
            </linearGradient>
            <linearGradient id="cumulativeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.15} />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
          <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#666' }} axisLine={{ stroke: '#333' }} tickLine={false} />
          <YAxis
            yAxisId="left"
            tick={{ fontSize: 11, fill: '#666' }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v: number) => `${(v / 1000).toFixed(0)}K`}
            label={{ value: '人數', position: 'insideTopLeft', offset: -5, style: { fontSize: 11, fill: '#666' } }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tick={{ fontSize: 11, fill: '#666' }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v: number) => `${(v / 1000000).toFixed(1)}M`}
            label={{ value: '累積', position: 'insideTopRight', offset: -5, style: { fontSize: 11, fill: '#666' } }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: 8, color: '#e5e5e5', fontSize: 12 }}
            formatter={(value: any, name: any) => {
              const v = Number(value);
              if (name === '累積訂閱 / Cumulative') return [`${(v / 10000).toFixed(0)} 萬人`, name];
              return [`${v.toLocaleString()} 人`, name];
            }}
          />
          <Legend iconSize={12} wrapperStyle={{ fontSize: 11, color: '#888' }} />
          <Bar yAxisId="left" dataKey="newUsers" name="新增訂閱 / New Subs" fill="url(#newSubsGradient)" barSize={6} radius={[3, 3, 0, 0]} />
          <Bar yAxisId="left" dataKey="churnUsers" name="退訂 / Churn" fill="rgba(239,68,68,0.5)" barSize={6} radius={[3, 3, 0, 0]} />
          <Area yAxisId="right" type="monotone" dataKey="cumulative" name="累積訂閱 / Cumulative" stroke="#22d3ee" strokeWidth={2.5} fill="url(#cumulativeGradient)" dot={false} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SubscriptionTrendChart;
