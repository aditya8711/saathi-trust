// HARDCODED API_BASE - This will work immediately
const API_BASE = "https://backend-p9bx.onrender.com";

// Test API
export async function getHello() {
  console.log("🔍 Using API_BASE:", API_BASE);
  const res = await fetch(`${API_BASE}/api/hello`);
  return res.json();
}

// 🔑 Login API
export async function loginUser(form) {
  console.log("🚀 Login API URL:", `${API_BASE}/api/auth/login`);
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
  console.log("🚀 Registration API URL:", `${API_BASE}/api/auth/register`);
  console.log("🚀 Form data:", form);
  
  const res = await fetch(`${API_BASE}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  
  console.log("📡 Response status:", res.status);
  
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Registration failed");
  }
  return res.json();
}
