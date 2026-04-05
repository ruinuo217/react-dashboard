import React from 'react';
import ReactECharts from 'echarts-for-react';
import { hourlyOrderData } from '../../data/mockData';

const OrderTrendChart: React.FC = () => {
  const option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: '#1a1a1a',
      borderColor: 'transparent',
      textStyle: { color: '#fff', fontSize: 12 },
      formatter: (params: any) => {
        const d = params[0];
        const r = params[1];
        return `
          <div style="font-weight:600;margin-bottom:4px">${d.axisValue}</div>
          <div style="display:flex;align-items:center;gap:6px">
            <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${d.color}"></span>
            訂單數：${d.value} 筆
          </div>
          <div style="display:flex;align-items:center;gap:6px">
            <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${r.color}"></span>
            營收：NT$${r.value.toLocaleString()}
          </div>
        `;
      },
    },
    legend: {
      data: ['訂單數', '營收'],
      right: 0,
      top: 0,
      textStyle: { fontSize: 12, color: '#999' },
      itemWidth: 12,
      itemHeight: 3,
    },
    grid: {
      left: '3%',
      right: '3%',
      bottom: '3%',
      top: '15%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: hourlyOrderData.map((d) => d.hour),
      axisLine: { lineStyle: { color: '#eee' } },
      axisTick: { show: false },
      axisLabel: { color: '#999', fontSize: 11 },
    },
    yAxis: [
      {
        type: 'value',
        name: '訂單',
        nameTextStyle: { color: '#999', fontSize: 11 },
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { lineStyle: { color: '#f5f5f5' } },
        axisLabel: { color: '#999', fontSize: 11 },
      },
      {
        type: 'value',
        name: '營收',
        nameTextStyle: { color: '#999', fontSize: 11 },
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: {
          color: '#999',
          fontSize: 11,
          formatter: (v: number) => `${(v / 1000).toFixed(0)}K`,
        },
      },
    ],
    series: [
      {
        name: '訂單數',
        type: 'line',
        smooth: true,
        symbol: 'none',
        lineStyle: { width: 2.5, color: '#276EF1' },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(39,110,241,0.15)' },
              { offset: 1, color: 'rgba(39,110,241,0)' },
            ],
          },
        },
        data: hourlyOrderData.map((d) => d.orders),
      },
      {
        name: '營收',
        type: 'bar',
        yAxisIndex: 1,
        barWidth: 8,
        itemStyle: {
          color: 'rgba(5,163,87,0.2)',
          borderRadius: [3, 3, 0, 0],
        },
        data: hourlyOrderData.map((d) => d.revenue),
      },
    ],
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-900">24H 訂單趨勢</h3>
        <p className="text-xs text-gray-400 mt-0.5">過去 24 小時的訂單量與營收變化</p>
      </div>
      <ReactECharts option={option} style={{ height: 280 }} />
    </div>
  );
};

export default OrderTrendChart;
