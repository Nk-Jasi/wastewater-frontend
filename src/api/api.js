const API_URL = "http://127.0.0.1:8000";

export async function login(username, password) {
  const formData = new URLSearchParams();
  formData.append("username", username);
  formData.append("password", password);

  const res = await fetch(`${API_URL}/token`, {
    method: "POST",
    body: formData
  });
  return res.json();
}

export async function getManholes(token) {
  const res = await fetch(`${API_URL}/manholes`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.json();
}

export async function getPipes(token) {
  const res = await fetch(`${API_URL}/pipes`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.json();
}

export async function getMaintenance(assetType, assetId, token) {
  const res = await fetch(`${API_URL}/maintenance/${assetType}/${assetId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.json();
}
