import React from 'react';
import './App.css';
import Header from './components/Header';
import Map from './components/Map';
import ReportStatus from './components/ReportStatus';
import Schedule from './components/Schedule';


function App() {
  return (
    <div className="app">
      <Header />
      <Map />
      <div className="bottom-section">
        <ReportStatus />
        <Schedule />
      </div>
    </div>
  );
}

export default App;

