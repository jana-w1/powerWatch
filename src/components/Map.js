import React from 'react';
import '../styles/Map.css';
import { GoogleMap, LoadScript} from '@react-google-maps/api';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const center = [33.8547, 35.8623]; // Coordinates for Lebanon

function Map() {
  return (
    <MapContainer center={center} zoom={10} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={center}>
        <Popup>Electricity availability reported here!</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
