-- ============================================================
-- Uber-like Dashboard Database Schema (PostgreSQL + PostGIS)
-- ============================================================

-- Enable PostGIS extension for geospatial queries
CREATE EXTENSION IF NOT EXISTS postgis;

-- ============ Drivers Table ============
CREATE TABLE drivers (
    id            VARCHAR(10) PRIMARY KEY,
    name          VARCHAR(50)   NOT NULL,
    phone         VARCHAR(20)   NOT NULL,
    location      GEOGRAPHY(POINT, 4326),  -- PostGIS point (lat/lng)
    status        VARCHAR(10)   NOT NULL CHECK (status IN ('online', 'offline', 'on_trip')),
    rating        DECIMAL(3,2)  NOT NULL DEFAULT 5.00,
    vehicle_type  VARCHAR(20)   NOT NULL CHECK (vehicle_type IN ('UberX', 'UberXL', 'UberBlack', 'UberComfort')),
    created_at    TIMESTAMP     DEFAULT NOW(),
    updated_at    TIMESTAMP     DEFAULT NOW()
);

-- Spatial index for driver location queries
CREATE INDEX idx_drivers_location ON drivers USING GIST (location);
CREATE INDEX idx_drivers_status ON drivers (status);

-- ============ Trips Table ============
CREATE TABLE trips (
    id            VARCHAR(10) PRIMARY KEY,
    driver_id     VARCHAR(10)   REFERENCES drivers(id),
    pickup_point  GEOGRAPHY(POINT, 4326),
    dropoff_point GEOGRAPHY(POINT, 4326),
    fare          DECIMAL(10,2) NOT NULL,
    status        VARCHAR(15)   NOT NULL CHECK (status IN ('completed', 'in_progress', 'cancelled')),
    created_at    TIMESTAMP     DEFAULT NOW(),
    completed_at  TIMESTAMP
);

CREATE INDEX idx_trips_driver ON trips (driver_id);
CREATE INDEX idx_trips_status ON trips (status);
CREATE INDEX idx_trips_created ON trips (created_at);

-- ============ KPI Metrics (Daily Snapshot) ============
CREATE TABLE kpi_metrics (
    id              SERIAL PRIMARY KEY,
    snapshot_date   DATE          NOT NULL UNIQUE,
    total_revenue   DECIMAL(12,2) NOT NULL,
    active_drivers  INTEGER       NOT NULL,
    completed_trips INTEGER       NOT NULL,
    cancel_rate     DECIMAL(5,2)  NOT NULL,
    created_at      TIMESTAMP     DEFAULT NOW()
);

CREATE INDEX idx_kpi_date ON kpi_metrics (snapshot_date);

-- ============================================================
-- Mock Data (20 drivers + 20 trips + 7 days KPI)
-- ============================================================

INSERT INTO drivers (id, name, phone, location, status, rating, vehicle_type) VALUES
('D001', '王大明', '0912-345-678', ST_MakePoint(121.5654, 25.0330)::geography, 'on_trip',  4.92, 'UberX'),
('D002', '李志偉', '0923-456-789', ST_MakePoint(121.5575, 25.0418)::geography, 'online',   4.88, 'UberBlack'),
('D003', '張美玲', '0934-567-890', ST_MakePoint(121.5170, 25.0478)::geography, 'on_trip',  4.95, 'UberComfort'),
('D004', '陳建宏', '0945-678-901', ST_MakePoint(121.5497, 25.0375)::geography, 'online',   4.73, 'UberX'),
('D005', '林淑芬', '0956-789-012', ST_MakePoint(121.5436, 25.0260)::geography, 'offline',  4.81, 'UberXL'),
('D006', '黃俊傑', '0967-890-123', ST_MakePoint(121.5440, 25.0520)::geography, 'on_trip',  4.67, 'UberX'),
('D007', '吳佳蓉', '0978-901-234', ST_MakePoint(121.5320, 25.0190)::geography, 'online',   4.90, 'UberBlack'),
('D008', '劉家豪', '0989-012-345', ST_MakePoint(121.5230, 25.0610)::geography, 'on_trip',  4.78, 'UberXL'),
('D009', '蔡依琳', '0910-123-456', ST_MakePoint(121.5680, 25.0340)::geography, 'offline',  4.85, 'UberComfort'),
('D010', '許文龍', '0921-234-567', ST_MakePoint(121.5350, 25.0450)::geography, 'online',   4.69, 'UberX'),
('D011', '鄭雅文', '0932-345-678', ST_MakePoint(121.5580, 25.0285)::geography, 'on_trip',  4.93, 'UberBlack'),
('D012', '周振宇', '0943-456-789', ST_MakePoint(121.5510, 25.0560)::geography, 'online',   4.71, 'UberX'),
('D013', '謝佩君', '0954-567-890', ST_MakePoint(121.5100, 25.0400)::geography, 'offline',  4.86, 'UberComfort'),
('D014', '楊宗翰', '0965-678-901', ST_MakePoint(121.5420, 25.0155)::geography, 'on_trip',  4.74, 'UberXL'),
('D015', '郭明珠', '0976-789-012', ST_MakePoint(121.5630, 25.0495)::geography, 'online',   4.91, 'UberX'),
('D016', '蘇偉成', '0987-890-123', ST_MakePoint(121.5270, 25.0220)::geography, 'on_trip',  4.65, 'UberBlack'),
('D017', '曾雅婷', '0918-901-234', ST_MakePoint(121.5380, 25.0580)::geography, 'online',   4.87, 'UberX'),
('D018', '呂建志', '0929-012-345', ST_MakePoint(121.5530, 25.0310)::geography, 'offline',  4.72, 'UberComfort'),
('D019', '趙心怡', '0940-123-456', ST_MakePoint(121.5200, 25.0440)::geography, 'on_trip',  4.96, 'UberXL'),
('D020', '何俊宏', '0951-234-567', ST_MakePoint(121.5460, 25.0365)::geography, 'online',   4.80, 'UberX');

INSERT INTO trips (id, driver_id, pickup_point, dropoff_point, fare, status, created_at) VALUES
('T001', 'D001', ST_MakePoint(121.5654, 25.0330)::geography, ST_MakePoint(121.5170, 25.0478)::geography, 285, 'in_progress', '2026-04-06 14:32:00'),
('T002', 'D003', ST_MakePoint(121.5575, 25.0418)::geography, ST_MakePoint(121.5436, 25.0260)::geography, 195, 'in_progress', '2026-04-06 14:28:00'),
('T003', 'D006', ST_MakePoint(121.5440, 25.0520)::geography, ST_MakePoint(121.5420, 25.0155)::geography, 420, 'in_progress', '2026-04-06 14:15:00'),
('T004', 'D002', ST_MakePoint(121.5497, 25.0375)::geography, ST_MakePoint(121.5230, 25.0610)::geography, 310, 'completed',   '2026-04-06 13:45:00'),
('T005', 'D004', ST_MakePoint(121.5320, 25.0190)::geography, ST_MakePoint(121.5350, 25.0450)::geography, 245, 'completed',   '2026-04-06 13:20:00'),
('T006', 'D008', ST_MakePoint(121.5230, 25.0610)::geography, ST_MakePoint(121.5654, 25.0330)::geography, 355, 'in_progress', '2026-04-06 14:05:00'),
('T007', 'D011', ST_MakePoint(121.5580, 25.0285)::geography, ST_MakePoint(121.5100, 25.0400)::geography, 275, 'in_progress', '2026-04-06 14:20:00'),
('T008', 'D014', ST_MakePoint(121.5420, 25.0155)::geography, ST_MakePoint(121.5440, 25.0520)::geography, 390, 'in_progress', '2026-04-06 14:10:00'),
('T009', 'D016', ST_MakePoint(121.5270, 25.0220)::geography, ST_MakePoint(121.5575, 25.0418)::geography, 265, 'in_progress', '2026-04-06 14:25:00'),
('T010', 'D019', ST_MakePoint(121.5200, 25.0440)::geography, ST_MakePoint(121.5680, 25.0340)::geography, 330, 'in_progress', '2026-04-06 14:18:00'),
('T011', 'D007', ST_MakePoint(121.5320, 25.0190)::geography, ST_MakePoint(121.5497, 25.0375)::geography, 180, 'completed',   '2026-04-06 12:50:00'),
('T012', 'D010', ST_MakePoint(121.5350, 25.0450)::geography, ST_MakePoint(121.5530, 25.0310)::geography, 210, 'completed',   '2026-04-06 12:30:00'),
('T013', 'D015', ST_MakePoint(121.5630, 25.0495)::geography, ST_MakePoint(121.5270, 25.0220)::geography, 345, 'completed',   '2026-04-06 11:45:00'),
('T014', 'D012', ST_MakePoint(121.5510, 25.0560)::geography, ST_MakePoint(121.5436, 25.0260)::geography, 290, 'completed',   '2026-04-06 11:20:00'),
('T015', 'D017', ST_MakePoint(121.5380, 25.0580)::geography, ST_MakePoint(121.5654, 25.0330)::geography, 225, 'completed',   '2026-04-06 10:55:00'),
('T016', 'D020', ST_MakePoint(121.5460, 25.0365)::geography, ST_MakePoint(121.5170, 25.0478)::geography, 260, 'cancelled',   '2026-04-06 10:30:00'),
('T017', 'D005', ST_MakePoint(121.5436, 25.0260)::geography, ST_MakePoint(121.5510, 25.0560)::geography, 185, 'completed',   '2026-04-06 09:15:00'),
('T018', 'D009', ST_MakePoint(121.5680, 25.0340)::geography, ST_MakePoint(121.5320, 25.0190)::geography, 315, 'completed',   '2026-04-06 08:40:00'),
('T019', 'D013', ST_MakePoint(121.5100, 25.0400)::geography, ST_MakePoint(121.5580, 25.0285)::geography, 270, 'completed',   '2026-04-06 08:10:00'),
('T020', 'D018', ST_MakePoint(121.5530, 25.0310)::geography, ST_MakePoint(121.5440, 25.0520)::geography, 240, 'completed',   '2026-04-06 07:30:00');

INSERT INTO kpi_metrics (snapshot_date, total_revenue, active_drivers, completed_trips, cancel_rate) VALUES
('2026-03-31', 1125400, 7890, 21500, 5.1),
('2026-04-01', 1089200, 7650, 20800, 4.8),
('2026-04-02', 1156800, 8010, 22100, 4.5),
('2026-04-03', 1203500, 8120, 23000, 4.3),
('2026-04-04', 1178900, 7980, 22600, 4.6),
('2026-04-05', 1245100, 8250, 23800, 4.4),
('2026-04-06', 1284750, 8342, 24567, 4.2);

-- ============================================================
-- Useful Queries
-- ============================================================

-- Find all online drivers within 2km of a point (Xinyi District center)
-- SELECT id, name, vehicle_type,
--   ST_Distance(location, ST_MakePoint(121.5654, 25.0330)::geography) AS distance_m
-- FROM drivers
-- WHERE status = 'online'
--   AND ST_DWithin(location, ST_MakePoint(121.5654, 25.0330)::geography, 2000)
-- ORDER BY distance_m;
