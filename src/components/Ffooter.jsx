import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <p>Need help? <a href="/request-help">Click here</a> or email us at <a href="mailto:help@saathitrust.org">help@saathitrust.org</a></p>
      <p>&copy; {new Date().getFullYear()} Saathi Trust. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
