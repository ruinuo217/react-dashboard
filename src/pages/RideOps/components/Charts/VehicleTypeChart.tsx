import React from 'react';
import ReactECharts from 'echarts-for-react';
import { vehicleTypeData } from '../../data/mockData';

const VehicleTypeChart: React.FC = () => {
  const total = vehicleTypeData.reduce((sum, d) => sum + d.value, 0);

  const option = {
    tooltip: {
      trigger: 'item',
      backgroundColor: '#1a1a1a',
      borderColor: 'transparent',
      textStyle: { color: '#fff', fontSize: 12 },
      formatter: (params: any) => {
        return `<div style="font-weight:600">${params.name}</div>
                <div>${params.value.toLocaleString()} 輛 (${params.percent}%)</div>`;
      },
    },
    legend: {
      orient: 'vertical',
      right: '5%',
      top: 'center',
      textStyle: { fontSize: 12, color: '#666' },
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 14,
      formatter: (name: string) => {
        const item = vehicleTypeData.find((d) => d.name === name);
        if (!item) return name;
        const pct = ((item.value / total) * 100).toFixed(1);
        return `${name}  ${pct}%`;
      },
    },
    series: [
      {
        type: 'pie',
        radius: ['52%', '78%'],
        center: ['35%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 6,
          borderColor: '#fff',
          borderWidth: 3,
        },
        label: {
          show: true,
          position: 'center',
          formatter: () => `{a|${total.toLocaleString()}}\n{b|總車輛數}`,
          rich: {
            a: { fontSize: 22, fontWeight: 'bold', color: '#1a1a1a', lineHeight: 30 },
            b: { fontSize: 12, color: '#999', lineHeight: 20 },
          },
        },
        data: vehicleTypeData.map((d) => ({
          value: d.value,
          name: d.name,
          itemStyle: { color: d.color },
        })),
      },
    ],
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-900">車輛類型分佈</h3>
        <p className="text-xs text-gray-400 mt-0.5">各車型在線車輛數量佔比</p>
      </div>
      <ReactECharts option={option} style={{ height: 280 }} />
    </div>
  );
};

export default VehicleTypeChart;
