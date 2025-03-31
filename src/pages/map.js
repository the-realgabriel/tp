import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon issue
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';


let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapView = () => {
  const [position, setPosition] = useState([7.8632005, 4.4569892]); // Default position

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error("Error getting location:", error);
          switch(error.code) {
            case error.PERMISSION_DENIED:
             //Alert user, but don't block map rendering
              alert("User denied the request for Geolocation. Using default location.");
              break;
            case error.POSITION_UNAVAILABLE:
              alert("Location information is unavailable. Using default location.");
              break;
            case error.TIMEOUT:
              alert("The request to get user location timed out. Using default location.");
              break;
            case error.UNKNOWN_ERROR:
              alert("An unknown error occurred.Using default location.");
              break;
          }
        }
      );
    } else {
      // Geolocation API not supported, use default position
      alert("Geolocation is not supported by this browser. Using default location.");
    }
  }, []);


  return (
    <div className="map-view">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '800px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Your Current Location
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;
