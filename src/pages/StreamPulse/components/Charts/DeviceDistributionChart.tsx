import React from 'react';
import ReactECharts from 'echarts-for-react';
import { deviceData } from '../../data/mockData';

const DeviceDistributionChart: React.FC = () => {
  const option = {
    tooltip: {
      trigger: 'item',
      backgroundColor: '#1a1a1a',
      borderColor: '#333',
      textStyle: { color: '#e5e5e5', fontSize: 12 },
      formatter: (params: any) => {
        return `<div style="font-weight:600;color:#fff">${params.name}</div>
                <div>${params.percent}% 的觀看流量</div>`;
      },
    },
    legend: {
      orient: 'vertical',
      right: '5%',
      top: 'center',
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 16,
      formatter: (name: string) => {
        const item = deviceData.find((d) => d.name === name);
        if (!item) return name;
        return `{a|${name}}  {b|${item.value}%}`;
      },
      textStyle: {
        rich: {
          a: { fontSize: 13, color: '#ccc', width: 80 },
          b: { fontSize: 13, color: '#fff', fontWeight: 'bold' as const },
        },
      },
    },
    series: [
      {
        type: 'pie',
        radius: ['50%', '75%'],
        center: ['35%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 8,
          borderColor: '#141414',
          borderWidth: 4,
        },
        label: {
          show: true,
          position: 'center',
          formatter: () => `{a|觀看裝置}\n{b|Device Split}`,
          rich: {
            a: { fontSize: 14, fontWeight: 'bold', color: '#fff', lineHeight: 24 },
            b: { fontSize: 11, color: '#666', lineHeight: 20 },
          },
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 20,
            shadowOffsetX: 0,
            shadowColor: 'rgba(99,102,241,0.4)',
          },
          scaleSize: 8,
        },
        data: deviceData.map((d) => ({
          value: d.value,
          name: d.name,
          itemStyle: { color: d.color },
        })),
      },
    ],
  };

  return (
    <div className="bg-[#1a1a1a] rounded-xl border border-white/5 p-5">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-white">觀看裝置分佈 / Device Breakdown</h3>
        <p className="text-xs text-gray-500 mt-0.5">用戶觀看內容的裝置類型比例</p>
      </div>
      <ReactECharts option={option} style={{ height: 320 }} />
    </div>
  );
};

export default DeviceDistributionChart;
