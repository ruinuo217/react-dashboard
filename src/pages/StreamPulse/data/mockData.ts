// ============ KPI Data ============
export const kpiData = {
  totalSubscribers: 18420000,
  subscribersChange: 4.2,
  monthlyRevenue: 2847500000,
  revenueChange: 6.8,
  activeUsers: 12350000,
  activeUsersChange: 3.1,
  churnRate: 2.8,
  churnChange: -0.5,
};

// ============ Top Content ============
export interface Content {
  id: string;
  title: string;
  genre: string;
  totalHours: number;
  retentionRate: number;
  rating: number;
  episodes: number;
  releaseDate: string;
  status: 'trending' | 'stable' | 'declining';
}

export const topContent: Content[] = [
  {
    id: 'C001',
    title: '暗潮覺醒 Dark Tides',
    genre: '科幻驚悚',
    totalHours: 48200000,
    retentionRate: 92.3,
    rating: 4.8,
    episodes: 10,
    releaseDate: '2026-03-15',
    status: 'trending',
  },
  {
    id: 'C002',
    title: '廚神對決 Flame Wars',
    genre: '實境競賽',
    totalHours: 35600000,
    retentionRate: 87.1,
    rating: 4.5,
    episodes: 12,
    releaseDate: '2026-02-28',
    status: 'trending',
  },
  {
    id: 'C003',
    title: '灰鏡邊界 Grey Mirror',
    genre: '反烏托邦',
    totalHours: 29800000,
    retentionRate: 78.6,
    rating: 4.6,
    episodes: 8,
    releaseDate: '2026-01-20',
    status: 'stable',
  },
  {
    id: 'C004',
    title: '深淵密語 Abyssal Code',
    genre: '犯罪懸疑',
    totalHours: 22100000,
    retentionRate: 71.4,
    rating: 4.3,
    episodes: 6,
    releaseDate: '2026-03-01',
    status: 'stable',
  },
  {
    id: 'C005',
    title: '繁星孤島 Stellar Solitude',
    genre: '太空歌劇',
    totalHours: 18500000,
    retentionRate: 65.2,
    rating: 4.1,
    episodes: 10,
    releaseDate: '2025-12-10',
    status: 'declining',
  },
];

// ============ Subscription Trend (30 days) ============
export const subscriptionTrend = [
  { date: '03/08', newUsers: 12400, churnUsers: 3200, cumulative: 17850000 },
  { date: '03/09', newUsers: 11800, churnUsers: 2900, cumulative: 17859000 },
  { date: '03/10', newUsers: 13200, churnUsers: 3100, cumulative: 17869000 },
  { date: '03/11', newUsers: 14500, churnUsers: 3400, cumulative: 17880000 },
  { date: '03/12', newUsers: 12100, churnUsers: 2800, cumulative: 17889000 },
  { date: '03/13', newUsers: 15800, churnUsers: 3600, cumulative: 17901000 },
  { date: '03/14', newUsers: 16200, churnUsers: 3300, cumulative: 17914000 },
  { date: '03/15', newUsers: 28500, churnUsers: 2900, cumulative: 17940000 },
  { date: '03/16', newUsers: 32100, churnUsers: 2700, cumulative: 17969000 },
  { date: '03/17', newUsers: 25600, churnUsers: 3100, cumulative: 17992000 },
  { date: '03/18', newUsers: 19800, churnUsers: 3400, cumulative: 18008000 },
  { date: '03/19', newUsers: 17200, churnUsers: 3200, cumulative: 18022000 },
  { date: '03/20', newUsers: 15600, churnUsers: 3500, cumulative: 18034000 },
  { date: '03/21', newUsers: 14800, churnUsers: 3100, cumulative: 18046000 },
  { date: '03/22', newUsers: 13900, churnUsers: 3300, cumulative: 18057000 },
  { date: '03/23', newUsers: 14200, churnUsers: 3000, cumulative: 18068000 },
  { date: '03/24', newUsers: 13500, churnUsers: 2900, cumulative: 18079000 },
  { date: '03/25', newUsers: 15100, churnUsers: 3200, cumulative: 18091000 },
  { date: '03/26', newUsers: 14600, churnUsers: 3400, cumulative: 18102000 },
  { date: '03/27', newUsers: 16800, churnUsers: 2800, cumulative: 18116000 },
  { date: '03/28', newUsers: 18200, churnUsers: 3100, cumulative: 18131000 },
  { date: '03/29', newUsers: 19500, churnUsers: 3300, cumulative: 18147000 },
  { date: '03/30', newUsers: 21000, churnUsers: 2900, cumulative: 18165000 },
  { date: '03/31', newUsers: 22400, churnUsers: 3000, cumulative: 18184000 },
  { date: '04/01', newUsers: 24800, churnUsers: 3200, cumulative: 18206000 },
  { date: '04/02', newUsers: 26300, churnUsers: 2800, cumulative: 18229000 },
  { date: '04/03', newUsers: 28100, churnUsers: 3100, cumulative: 18254000 },
  { date: '04/04', newUsers: 31200, churnUsers: 2700, cumulative: 18283000 },
  { date: '04/05', newUsers: 35600, churnUsers: 2500, cumulative: 18316000 },
  { date: '04/06', newUsers: 38200, churnUsers: 2100, cumulative: 18352000 },
];

// ============ Device Distribution ============
export const deviceData = [
  { name: 'Smart TV', value: 55, color: '#6366f1' },
  { name: 'Mobile', value: 30, color: '#22d3ee' },
  { name: 'Web', value: 15, color: '#a78bfa' },
];

// ============ Alerts ============
export interface StreamAlert {
  id: number;
  type: 'warning' | 'danger' | 'info';
  title: string;
  message: string;
  time: string;
}

export const alerts: StreamAlert[] = [
  {
    id: 1,
    type: 'danger',
    title: '《暗潮覺醒》流量異常飆升',
    message: '過去 1 小時內同時在線觀看人數突破 420 萬，CDN 節點負載已達 87%，東亞區域回應延遲上升 320ms。建議啟動備援節點並通知 SRE 團隊待命。',
    time: '5 分鐘前',
  },
  {
    id: 2,
    type: 'warning',
    title: '東南亞地區退訂率突增',
    message: '泰國、越南、印尼三地過去 72 小時退訂率較上週上升 18.5%，主因為競品平台推出限時優惠方案。建議行銷團隊評估是否啟動區域性留客促銷。',
    time: '30 分鐘前',
  },
  {
    id: 3,
    type: 'info',
    title: '4K HDR 轉碼完成通知',
    message: '《深淵密語》全 6 集 4K HDR Dolby Vision 轉碼已完成並部署至全球 CDN，預計 2 小時內生效。',
    time: '1 小時前',
  },
];
