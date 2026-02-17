import { useState } from "react";
import { login } from "../api/api";

export default function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await login(username, password);
    if (data.access_token) {
      setToken(data.access_token);
    } else {
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "300px", margin: "50px auto" }}>
      <h2>Login</h2>
      <input type="text" placeholder="Email" value={username} onChange={e => setUsername(e.target.value)} required/>
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required/>
      <button type="submit">Login</button>
    </form>
  );
}
