import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) localStorage.setItem("token", token);
  }, [token]);

  if (!token) return <Login setToken={setToken} />;

  return <Dashboard token={token} />;
}

export default App;
