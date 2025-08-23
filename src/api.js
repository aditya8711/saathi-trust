const API_BASE = process.env.REACT_APP_API_URL;

export async function getHello(){
  const res = await fetch(`${API_BASE}/api/hello`);
  return res.json();
}
