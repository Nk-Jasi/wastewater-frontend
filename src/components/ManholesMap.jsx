import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { apiFetch } from "../api/api";
import "leaflet/dist/leaflet.css";

export default function ManholesMap({ token }) {
  const [manholes, setManholes] = useState([]);

  useEffect(() => {
    apiFetch("/manholes", token).then((data) => {
      setManholes(data.features || []);
    });
  }, [token]);

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: "400px", marginBottom: "20px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {manholes.map((m) => (
        <Marker
          key={m.properties.gid}
          position={[m.geometry.coordinates[1], m.geometry.coordinates[0]]}
        >
          <Popup>
            {m.properties.suburb} <br /> Status: {m.properties.status}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
