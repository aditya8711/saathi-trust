import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../api"; // ✅ import api function
import "./form.css";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form); // ✅ call api.js function
      alert("Registered successfully");
      navigate("/");
    } catch (err) {
      alert(err.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Create Your Account ✨</h2>
        <p className="login-subtitle">Join Saathi Trust today</p>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Create Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>

        <p className="register-link">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}
