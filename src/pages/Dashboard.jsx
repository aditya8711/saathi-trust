import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

function decodeJWT(token) {
  if (!token) return null;
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );
  return JSON.parse(jsonPayload);
}

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      navigate("/");
      return;
    }

    try {
      const userInfo = decodeJWT(token);
      if (userInfo.exp * 1000 < Date.now()) {
        alert("Session expired. Please login again.");
        localStorage.removeItem("token");
        navigate("/");
        return;
      }
      setUser(userInfo);
    } catch (err) {
      alert("Invalid session. Please login again.");
      localStorage.removeItem("token");
      navigate("/");
    }
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="dashboard-container">
      <h2 className="welcome-title">
        Welcome, <span>{user.name}</span> 👋
      </h2>
      <p className="user-role">
        Role: <strong>{user.role}</strong>
      </p>
      <hr />

      {user.role === "admin" ? (
        <div className="panel admin-panel">
          <h3>🔐 Admin Panel</h3>
          <ul>
            <li>
              📄 View Help Requests <button onClick={() => navigate("/admin")}>Manage</button>
            </li>
            <li>
              👥 View Member List <button onClick={() => navigate("/admin")}>Members</button>
            </li>
            <li>
              💳 Payment Records <button onClick={() => navigate("/admin")}>Payments</button>
            </li>
          </ul>
          <p className="panel-note">
            💼 Full admin functionality is coming soon.
          </p>
        </div>
      ) : (
        <div className="panel member-panel">
          <h3>👤 Member Dashboard</h3>
          <ul>
            <li>
              <span>Become a verified member</span>
              <button className="btn primary-btn" onClick={() => navigate("/membership")}>
                💳 Become a Member
              </button>
            </li>
            <li>
              <span>Need urgent help?</span>
              <button className="btn secondary-btn" onClick={() => navigate("/request-help")}>
                📝 Request Financial Help
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
