import React from "react";
import "./Help.css";

const Help = () => {
  return (
    <div className="help-container">
      <h2>Need Help?</h2>
      <p>We’re here to support you. Check out the FAQs below or reach out directly.</p>

      <div className="faq-section">
        <h3>Frequently Asked Questions</h3>
        <div className="faq">
          <h4>How do I become a member?</h4>
          <p>You can click on "Membership" in the navigation bar and proceed with the payment.</p>
        </div>
        <div className="faq">
          <h4>What is Saathi Trust?</h4>
          <p>Saathi Trust is a non-profit organization working towards social welfare and community support.</p>
        </div>
        <div className="faq">
          <h4>Can I cancel my membership?</h4>
          <p>Currently, we do not offer cancellations. Membership fees go toward community initiatives.</p>
        </div>
      </div>

      <div className="contact-section">
        <h3>Contact Us</h3>
        <p>If you didn't find your answer, feel free to email us at:</p>
        <a href="mailto:help@saathitrust.org" className="email-link">help@saathitrust.org</a>
        <p>Or call us at <strong>+91-9876543210</strong></p>
      </div>
    </div>
  );
};

export default Help;
