const API_BASE = process.env.REACT_APP_API_URL;
export async function getHello() {
  const res = await fetch(`${API_BASE}/api/hello`);
  return res.json();
}


export async function loginUser(credentials) {
  const res = await fetch(`${API_BASE}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) {
    if (res.status === 404) throw new Error("Account not found. Please register.");
    if (res.status === 401) throw new Error("Incorrect password.");
    throw new Error("Login failed. Try again later.");
  }

  return res.json();
}
