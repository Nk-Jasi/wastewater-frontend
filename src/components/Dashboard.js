import { useEffect, useState } from "react";
import { getManholes, getPipes } from "../api/api";
import MapView from "./MapView";
import ManholeList from "./ManholeList";
import PipeList from "./PipeList";

export default function Dashboard({ token }) {
  const [manholes, setManholes] = useState([]);
  const [pipes, setPipes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setManholes(await getManholes(token));
      setPipes(await getPipes(token));
    }
    fetchData();
  }, [token]);

  return (
    <div>
      <h1>Wastewater Dashboard</h1>
      <MapView manholes={manholes} pipes={pipes} />
      <ManholeList manholes={manholes} />
      <PipeList pipes={pipes} />
    </div>
  );
}
