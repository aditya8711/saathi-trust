import React from "react";
import "./admin.css";

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard-container">
      <h2>🔐 Admin Dashboard</h2>
      <p>Welcome Admin! Manage everything here.</p>

      <div className="admin-sections">
        <div className="admin-card">
          <h3>📄 Help Requests</h3>
          <p>View and manage user help requests.</p>
          <button>Manage Requests</button>
        </div>

        <div className="admin-card">
          <h3>👥 Members</h3>
          <p>View all registered members.</p>
          <button>View Members</button>
        </div>

        <div className="admin-card">
          <h3>💳 Payments</h3>
          <p>Track membership payments.</p>
          <button>Check Payments</button>
        </div>
      </div>
    </div>
  );
}
