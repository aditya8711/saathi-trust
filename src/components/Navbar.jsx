import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  // ✅ Naya function jo menu close karega jab link pe click ho
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="dashboard-nav">
      <div className="nav-left">
        <span className="nav-title">Saathi Trust</span>
      </div>

      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        {/* Har Link me onClick add kiya hai taaki menu close ho jaye */}
        <li>
          <Link to="/home" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/dashboard" onClick={handleLinkClick}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/membership" onClick={handleLinkClick}>
            Membership
          </Link>
        </li>
        <li>
          <Link to="/request-help" onClick={handleLinkClick}>
            Help
          </Link>
        </li>
        <li>
          <button className="logout-btn" onClick={() => {
            handleLogout();
            setIsOpen(false); // logout pe bhi menu close kar do
          }}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
