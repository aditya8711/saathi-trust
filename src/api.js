const API_BASE = process.env.REACT_APP_API_URL;


export async function getHello() {
  const res = await fetch(`${API_BASE}/api/hello`);
  return res.json();
}


export async function loginUser(credentials) {
  const res = await fetch(`${API_BASE}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) {
    throw new Error("Login failed");
  }
  return res.json();
}


export async function registerUser(data) {
  const res = await fetch(`${API_BASE}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Registration failed");
  }
  return res.json();
}
