import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
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
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      if (err.response?.status === 404) {
        alert("Account not found. Please register.");
        navigate("/register");
      } else if (err.response?.status === 401) {
        alert("Incorrect password!");
      } else {
        alert("Something went wrong. Try again later.");
      }
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
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
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
