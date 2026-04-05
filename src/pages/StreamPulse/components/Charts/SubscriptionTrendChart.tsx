import React from 'react';
import ReactECharts from 'echarts-for-react';
import { subscriptionTrend } from '../../data/mockData';

const SubscriptionTrendChart: React.FC = () => {
  const option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: '#1a1a1a',
      borderColor: '#333',
      textStyle: { color: '#e5e5e5', fontSize: 12 },
      formatter: (params: any) => {
        const newU = params[0];
        const churn = params[1];
        const cum = params[2];
        return `
          <div style="font-weight:600;margin-bottom:6px;color:#fff">${newU.axisValue}</div>
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
            <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${newU.color}"></span>
            新增訂閱：${newU.value.toLocaleString()} 人
          </div>
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
            <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${churn.color}"></span>
            退訂人數：${churn.value.toLocaleString()} 人
          </div>
          <div style="display:flex;align-items:center;gap:6px">
            <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${cum.color}"></span>
            累積訂閱：${(cum.value / 10000).toFixed(0)} 萬人
          </div>
        `;
      },
    },
    legend: {
      data: ['新增訂閱 / New Subs', '退訂 / Churn', '累積訂閱 / Cumulative'],
      right: 0,
      top: 0,
      textStyle: { fontSize: 11, color: '#888' },
      itemWidth: 12,
      itemHeight: 3,
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '15%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: subscriptionTrend.map((d) => d.date),
      axisLine: { lineStyle: { color: '#333' } },
      axisTick: { show: false },
      axisLabel: { color: '#666', fontSize: 11 },
    },
    yAxis: [
      {
        type: 'value',
        name: '人數',
        nameTextStyle: { color: '#666', fontSize: 11 },
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { lineStyle: { color: '#222' } },
        axisLabel: {
          color: '#666',
          fontSize: 11,
          formatter: (v: number) => `${(v / 1000).toFixed(0)}K`,
        },
      },
      {
        type: 'value',
        name: '累積',
        nameTextStyle: { color: '#666', fontSize: 11 },
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: {
          color: '#666',
          fontSize: 11,
          formatter: (v: number) => `${(v / 1000000).toFixed(1)}M`,
        },
      },
    ],
    series: [
      {
        name: '新增訂閱 / New Subs',
        type: 'bar',
        barWidth: 6,
        itemStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: '#6366f1' },
              { offset: 1, color: 'rgba(99,102,241,0.3)' },
            ],
          },
          borderRadius: [3, 3, 0, 0],
        },
        data: subscriptionTrend.map((d) => d.newUsers),
      },
      {
        name: '退訂 / Churn',
        type: 'bar',
        barWidth: 6,
        itemStyle: {
          color: 'rgba(239,68,68,0.5)',
          borderRadius: [3, 3, 0, 0],
        },
        data: subscriptionTrend.map((d) => d.churnUsers),
      },
      {
        name: '累積訂閱 / Cumulative',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        symbol: 'none',
        lineStyle: { width: 2.5, color: '#22d3ee' },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(34,211,238,0.15)' },
              { offset: 1, color: 'rgba(34,211,238,0)' },
            ],
          },
        },
        data: subscriptionTrend.map((d) => d.cumulative),
      },
    ],
  };

  return (
    <div className="bg-[#1a1a1a] rounded-xl border border-white/5 p-5">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-white">訂閱趨勢 / Subscription Trend</h3>
        <p className="text-xs text-gray-500 mt-0.5">近 30 天新增訂閱 vs 退訂人數與累積訂閱走勢</p>
      </div>
      <ReactECharts option={option} style={{ height: 320 }} />
    </div>
  );
};

export default SubscriptionTrendChart;
