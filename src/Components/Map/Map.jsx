import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./Map.css";

const stateCoordinates = [
  { name: "São Paulo", coords: [-23.5505, -46.6333] },
  { name: "Piauí", coords: [-5.0892, -42.8034] },
  { name: "Espírito Santo", coords: [-20.3155, -40.3128] },
  { name: "Bahia", coords: [-12.9714, -38.5014] },
  { name: "Minas Gerais", coords: [-19.8157, -43.9542] },
  { name: "Santa Catarina", coords: [-27.5954, -48.548] },
  { name: "Maranhão", coords: [-2.5391, -44.2828] },
  { name: "Paraná", coords: [-25.4284, -49.2733] },
  { name: "Pernambuco", coords: [-8.0476, -34.877] },
  { name: "Rio de Janeiro", coords: [-22.9068, -43.1729] },
  { name: "Paraíba", coords: [-7.115, -34.8641] },
  { name: "Goiás", coords: [-16.6864, -49.2643] },
  { name: "Mato Grosso do Sul", coords: [-20.442, -54.6478] },
  { name: "Acre", coords: [-9.9749, -67.8683] },
];

const MapComponent = () => {
  return (
    <div className="map-container">
      <MapContainer
        center={[-14.235, -51.9253]}
        zoom={4}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {stateCoordinates.map((state, index) => (
          <Marker
            key={index}
            position={state.coords}
            icon={L.icon({
              iconUrl:
                "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
            })}
          >
            <Popup>{state.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
