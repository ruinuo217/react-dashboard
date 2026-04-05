// ============ KPI Data ============
export const kpiData = {
  totalRevenue: 1284750,
  revenueChange: 12.5,
  activeDrivers: 8342,
  driversChange: 3.2,
  completedTrips: 24567,
  tripsChange: 8.7,
  cancelRate: 4.2,
  cancelChange: -1.3,
};

// ============ Drivers ============
export interface Driver {
  id: string;
  name: string;
  lat: number;
  lng: number;
  status: 'online' | 'offline' | 'on_trip';
  rating: number;
  vehicleType: 'UberX' | 'UberXL' | 'UberBlack' | 'UberComfort';
  trips_today: number;
  earnings_today: number;
  phone: string;
}

export const drivers: Driver[] = [
  { id: 'D001', name: '王大明', lat: 25.0330, lng: 121.5654, status: 'on_trip', rating: 4.92, vehicleType: 'UberX', trips_today: 18, earnings_today: 4520, phone: '0912-345-678' },
  { id: 'D002', name: '李志偉', lat: 25.0418, lng: 121.5575, status: 'online', rating: 4.88, vehicleType: 'UberBlack', trips_today: 12, earnings_today: 6890, phone: '0923-456-789' },
  { id: 'D003', name: '張美玲', lat: 25.0478, lng: 121.5170, status: 'on_trip', rating: 4.95, vehicleType: 'UberComfort', trips_today: 15, earnings_today: 5230, phone: '0934-567-890' },
  { id: 'D004', name: '陳建宏', lat: 25.0375, lng: 121.5497, status: 'online', rating: 4.73, vehicleType: 'UberX', trips_today: 22, earnings_today: 5670, phone: '0945-678-901' },
  { id: 'D005', name: '林淑芬', lat: 25.0260, lng: 121.5436, status: 'offline', rating: 4.81, vehicleType: 'UberXL', trips_today: 8, earnings_today: 3120, phone: '0956-789-012' },
  { id: 'D006', name: '黃俊傑', lat: 25.0520, lng: 121.5440, status: 'on_trip', rating: 4.67, vehicleType: 'UberX', trips_today: 25, earnings_today: 6100, phone: '0967-890-123' },
  { id: 'D007', name: '吳佳蓉', lat: 25.0190, lng: 121.5320, status: 'online', rating: 4.90, vehicleType: 'UberBlack', trips_today: 10, earnings_today: 7450, phone: '0978-901-234' },
  { id: 'D008', name: '劉家豪', lat: 25.0610, lng: 121.5230, status: 'on_trip', rating: 4.78, vehicleType: 'UberXL', trips_today: 14, earnings_today: 4890, phone: '0989-012-345' },
  { id: 'D009', name: '蔡依琳', lat: 25.0340, lng: 121.5680, status: 'offline', rating: 4.85, vehicleType: 'UberComfort', trips_today: 6, earnings_today: 2340, phone: '0910-123-456' },
  { id: 'D010', name: '許文龍', lat: 25.0450, lng: 121.5350, status: 'online', rating: 4.69, vehicleType: 'UberX', trips_today: 20, earnings_today: 5010, phone: '0921-234-567' },
  { id: 'D011', name: '鄭雅文', lat: 25.0285, lng: 121.5580, status: 'on_trip', rating: 4.93, vehicleType: 'UberBlack', trips_today: 9, earnings_today: 8200, phone: '0932-345-678' },
  { id: 'D012', name: '周振宇', lat: 25.0560, lng: 121.5510, status: 'online', rating: 4.71, vehicleType: 'UberX', trips_today: 17, earnings_today: 4230, phone: '0943-456-789' },
  { id: 'D013', name: '謝佩君', lat: 25.0400, lng: 121.5100, status: 'offline', rating: 4.86, vehicleType: 'UberComfort', trips_today: 11, earnings_today: 3980, phone: '0954-567-890' },
  { id: 'D014', name: '楊宗翰', lat: 25.0155, lng: 121.5420, status: 'on_trip', rating: 4.74, vehicleType: 'UberXL', trips_today: 19, earnings_today: 5560, phone: '0965-678-901' },
  { id: 'D015', name: '郭明珠', lat: 25.0495, lng: 121.5630, status: 'online', rating: 4.91, vehicleType: 'UberX', trips_today: 23, earnings_today: 5890, phone: '0976-789-012' },
  { id: 'D016', name: '蘇偉成', lat: 25.0220, lng: 121.5270, status: 'on_trip', rating: 4.65, vehicleType: 'UberBlack', trips_today: 7, earnings_today: 6720, phone: '0987-890-123' },
  { id: 'D017', name: '曾雅婷', lat: 25.0580, lng: 121.5380, status: 'online', rating: 4.87, vehicleType: 'UberX', trips_today: 16, earnings_today: 4100, phone: '0918-901-234' },
  { id: 'D018', name: '呂建志', lat: 25.0310, lng: 121.5530, status: 'offline', rating: 4.72, vehicleType: 'UberComfort', trips_today: 5, earnings_today: 1890, phone: '0929-012-345' },
  { id: 'D019', name: '趙心怡', lat: 25.0440, lng: 121.5200, status: 'on_trip', rating: 4.96, vehicleType: 'UberXL', trips_today: 13, earnings_today: 4670, phone: '0940-123-456' },
  { id: 'D020', name: '何俊宏', lat: 25.0365, lng: 121.5460, status: 'online', rating: 4.80, vehicleType: 'UberX', trips_today: 21, earnings_today: 5340, phone: '0951-234-567' },
];

// ============ 24H Order Trend ============
export const hourlyOrderData = [
  { hour: '00:00', orders: 120, revenue: 15600 },
  { hour: '01:00', orders: 85, revenue: 11050 },
  { hour: '02:00', orders: 60, revenue: 7800 },
  { hour: '03:00', orders: 45, revenue: 5850 },
  { hour: '04:00', orders: 35, revenue: 4550 },
  { hour: '05:00', orders: 55, revenue: 7150 },
  { hour: '06:00', orders: 180, revenue: 23400 },
  { hour: '07:00', orders: 420, revenue: 54600 },
  { hour: '08:00', orders: 680, revenue: 88400 },
  { hour: '09:00', orders: 520, revenue: 67600 },
  { hour: '10:00', orders: 380, revenue: 49400 },
  { hour: '11:00', orders: 450, revenue: 58500 },
  { hour: '12:00', orders: 620, revenue: 80600 },
  { hour: '13:00', orders: 480, revenue: 62400 },
  { hour: '14:00', orders: 390, revenue: 50700 },
  { hour: '15:00', orders: 410, revenue: 53300 },
  { hour: '16:00', orders: 520, revenue: 67600 },
  { hour: '17:00', orders: 750, revenue: 97500 },
  { hour: '18:00', orders: 890, revenue: 115700 },
  { hour: '19:00', orders: 820, revenue: 106600 },
  { hour: '20:00', orders: 650, revenue: 84500 },
  { hour: '21:00', orders: 480, revenue: 62400 },
  { hour: '22:00', orders: 320, revenue: 41600 },
  { hour: '23:00', orders: 200, revenue: 26000 },
];

// ============ Vehicle Type Distribution ============
export const vehicleTypeData = [
  { name: 'UberX', value: 4520, color: '#276EF1' },
  { name: 'UberXL', value: 1680, color: '#05A357' },
  { name: 'UberBlack', value: 1240, color: '#000000' },
  { name: 'UberComfort', value: 902, color: '#FF6937' },
];

// ============ Alerts ============
export interface Alert {
  id: number;
  type: 'warning' | 'danger' | 'info';
  title: string;
  message: string;
  time: string;
  region?: string;
}

export const alerts: Alert[] = [
  {
    id: 1,
    type: 'danger',
    title: '信義區供需嚴重失衡',
    message: '信義區目前乘客等候人數達 342 人，可用司機僅 28 位，預計平均等候時間超過 15 分鐘。建議立即啟動動態調價並推送周邊司機前往支援。',
    time: '2 分鐘前',
    region: '信義區',
  },
  {
    id: 2,
    type: 'warning',
    title: '司機註冊審核積壓通知',
    message: '目前有 156 位新司機完成報名但尚未通過背景審核（積壓超過 48 小時），建議增派審核人力以加速上線流程。',
    time: '15 分鐘前',
  },
  {
    id: 3,
    type: 'info',
    title: '系統版本更新排程',
    message: '司機端 App v4.12.0 將於今晚 02:00 強制更新，預計影響約 1,200 位夜間活躍司機，已排程推播提醒通知。',
    time: '1 小時前',
  },
];

// ============ Trips (for DB reference) ============
export interface Trip {
  id: string;
  driver_id: string;
  pickup_lat: number;
  pickup_lng: number;
  dropoff_lat: number;
  dropoff_lng: number;
  fare: number;
  status: 'completed' | 'in_progress' | 'cancelled';
  created_at: string;
}

export const trips: Trip[] = [
  { id: 'T001', driver_id: 'D001', pickup_lat: 25.0330, pickup_lng: 121.5654, dropoff_lat: 25.0478, dropoff_lng: 121.5170, fare: 285, status: 'in_progress', created_at: '2026-04-06T14:32:00' },
  { id: 'T002', driver_id: 'D003', pickup_lat: 25.0418, pickup_lng: 121.5575, dropoff_lat: 25.0260, dropoff_lng: 121.5436, fare: 195, status: 'in_progress', created_at: '2026-04-06T14:28:00' },
  { id: 'T003', driver_id: 'D006', pickup_lat: 25.0520, pickup_lng: 121.5440, dropoff_lat: 25.0155, dropoff_lng: 121.5420, fare: 420, status: 'in_progress', created_at: '2026-04-06T14:15:00' },
  { id: 'T004', driver_id: 'D002', pickup_lat: 25.0375, pickup_lng: 121.5497, dropoff_lat: 25.0610, dropoff_lng: 121.5230, fare: 310, status: 'completed', created_at: '2026-04-06T13:45:00' },
  { id: 'T005', driver_id: 'D004', pickup_lat: 25.0190, pickup_lng: 121.5320, dropoff_lat: 25.0450, dropoff_lng: 121.5350, fare: 245, status: 'completed', created_at: '2026-04-06T13:20:00' },
];
