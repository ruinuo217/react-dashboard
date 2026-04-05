import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Portal from './pages/Portal/Portal';
import RideOpsDashboard from './pages/RideOps';
import StreamPulseDashboard from './pages/StreamPulse';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="/rideops" element={<RideOpsDashboard />} />
        <Route path="/streampulse" element={<StreamPulseDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
