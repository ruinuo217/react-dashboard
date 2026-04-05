import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import { drivers } from '../../data/mockData';
import 'leaflet/dist/leaflet.css';

const statusColor: Record<string, string> = {
  online: '#05A357',
  on_trip: '#276EF1',
  offline: '#999999',
};

const statusLabel: Record<string, string> = {
  online: '在線待命',
  on_trip: '任務中',
  offline: '離線',
};

// Heatmap-like overlay using circle markers with varying opacity
const HeatmapLayer: React.FC = () => {
  const hotspots = [
    { lat: 25.0330, lng: 121.5654, intensity: 0.9 },
    { lat: 25.0418, lng: 121.5575, intensity: 0.7 },
    { lat: 25.0478, lng: 121.5170, intensity: 0.5 },
    { lat: 25.0520, lng: 121.5440, intensity: 0.8 },
    { lat: 25.0375, lng: 121.5497, intensity: 0.6 },
    { lat: 25.0285, lng: 121.5580, intensity: 0.85 },
  ];

  return (
    <>
      {hotspots.map((spot, i) => (
        <CircleMarker
          key={`heat-${i}`}
          center={[spot.lat, spot.lng]}
          radius={35}
          pathOptions={{
            fillColor: '#FF6937',
            fillOpacity: spot.intensity * 0.25,
            stroke: false,
          }}
        />
      ))}
    </>
  );
};

const MapView: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden" style={{ height: '100%' }}>
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">即時司機分佈地圖</h3>
          <p className="text-xs text-gray-400">橘色熱區為乘客高需求地帶</p>
        </div>
        <div className="flex items-center gap-3">
          {Object.entries(statusLabel).map(([key, label]) => (
            <div key={key} className="flex items-center gap-1.5">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: statusColor[key] }}
              />
              <span className="text-xs text-gray-500">{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ height: 'calc(100% - 52px)' }}>
        <MapContainer
          center={[25.038, 121.545]}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          <HeatmapLayer />
          {drivers.map((driver) => (
            <CircleMarker
              key={driver.id}
              center={[driver.lat, driver.lng]}
              radius={6}
              pathOptions={{
                fillColor: statusColor[driver.status],
                fillOpacity: 1,
                color: '#fff',
                weight: 2,
              }}
            >
              <Popup>
                <div className="text-sm">
                  <p className="font-bold">{driver.name}</p>
                  <p className="text-gray-500">{driver.vehicleType} | {statusLabel[driver.status]}</p>
                  <p className="text-gray-500">評分: {driver.rating} | 今日 {driver.trips_today} 趟</p>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapView;
