import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <p>Need help? <a href="/request-help">Click here</a> or email us at <a href="mailto:help@saathitrust.org">help@saathitrust.org</a></p>
      <p>&copy; {new Date().getFullYear()} Saathi Trust. All rights reserved.</p>
      <h3>Developer : Aditya Agrahari & Rupendra Gangwar</h3>
    </footer>
  );
};

export default Footer;
