import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to Saathi Trust</h1>
        <p>Your trusted companion in times of need.</p>
        <div className="hero-buttons">
          <button onClick={() => navigate("/membership")} className="btn primary">
            💳 Become a Member
          </button>
          <button onClick={() => navigate("/request-help")} className="btn secondary">
            🆘 Request Help
          </button>
        </div>
      </section>

      <section className="info">
        <h2>About Saathi Trust</h2>
        <p>
          We are a non-profit organization dedicated to helping individuals and families through emergency financial support, community outreach, and empowerment programs.
        </p>
      </section>

      <section className="highlight">
        <h3>✨ Why Join Us?</h3>
        <ul>
          <li>✔ Verified support network</li>
          <li>✔ Transparent donation system</li>
          <li>✔ Community-first approach</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
