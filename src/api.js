const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";

export async function registerUser(formData) {
  const res = await fetch(`${API_BASE}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    throw new Error("Registration failed");
  }

  return res.json();
}
