import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Polyline, Popup } from "react-leaflet";
import { apiFetch } from "../api/api";
import "leaflet/dist/leaflet.css";

export default function PipesMap({ token }) {
  const [pipes, setPipes] = useState([]);

  useEffect(() => {
    // Fetch all pipes from backend
    apiFetch("/pipes", token)
      .then((data) => {
        setPipes(data.features || []);
      })
      .catch((err) => console.error("Error fetching pipes:", err));
  }, [token]);

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: "400px", marginBottom: "20px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {pipes.map((pipe) => {
        const coords = pipe.geometry.coordinates.map(([lon, lat]) => [lat, lon]);
        return (
          <Polyline
            key={pipe.properties.gid}
            positions={coords}
            color={pipe.properties.status === "Needs Maintenance" ? "red" : "lime"}
          >
            <Popup>
              Suburb: {pipe.properties.suburb} <br />
              Status: {pipe.properties.status} <br />
              Plus Code: {pipe.properties.plus_code}
            </Popup>
          </Polyline>
        );
      })}
    </MapContainer>
  );
}
