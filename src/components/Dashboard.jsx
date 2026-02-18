import React from "react";
import ManholesMap from "./ManholesMap";
import PipesMap from "./PipesMap";
import Favorites from "./Favorites";

export default function Dashboard({ token }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Wastewater Dashboard</h1>
      <ManholesMap token={token} />
      <PipesMap token={token} />
      <Favorites token={token} />
    </div>
  );
}
