const API_BASE = process.env.REACT_APP_API_URL;

// Test API
export async function getHello() {
  const res = await fetch(`${API_BASE}/api/hello`);
  return res.json();
}

// 🔑 Login API
export async function loginUser(form) {
  const res = await fetch(`${API_BASE}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Login failed");
  }
  return res.json();
}

// 📝 Register API
export async function registerUser(form) {
  const res = await fetch(`${API_BASE}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Registration failed");
  }
  return res.json();
}
