export async function apiFetch(url, token, options = {}) {
  const headers = options.headers || {};
  if (token) headers["Authorization"] = `Bearer ${token}`;
  const res = await fetch(url, { ...options, headers });
  if (!res.ok) throw new Error(`API Error: ${res.status}`);
  return await res.json();
}
