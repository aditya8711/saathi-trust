import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api";
import "./form.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(form); 

     
      localStorage.setItem("token", data.token);

      alert("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      alert(err.message || "Something went wrong");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Welcome Back 👋</h2>
        <p className="login-subtitle">Login to continue to Saathi Trust</p>

        <form onSubmit={handleSubmit}>
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
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>

        <p className="register-link">
          New user? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </div>
  );
}
