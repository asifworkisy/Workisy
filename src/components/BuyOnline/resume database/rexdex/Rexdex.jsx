// NaukriResdexPage.js
import React from "react";
import { FaFileAlt, FaPhoneAlt, FaComments } from "react-icons/fa";
import "./Resdex.css";

const NaukriResdexPage = () => {
  return (
    <div className="resdex-page">
      <h2 className="title">NAUKRI RESDEX</h2>
      <h3 className="subtitle">Why businesses trust Naukri Resdex</h3>
      <div className="features">
        <div className="feature-card">
          <FaFileAlt size={40} />
          <h4>10.36 crore resumes</h4>
          <p>Access India's largest resume database for your hiring needs</p>
        </div>
        <div className="feature-card">
          <FaPhoneAlt size={40} />
          <h4>Contact instantly</h4>
          <p>
            Connect instantly with candidates via phone, email, and instant
            messaging
          </p>
        </div>
        <div className="feature-card">
          <FaComments size={40} />
          <h4>Amplify productivity</h4>
          <p>
            Work smarter with advanced filters, boolean search, mass emailing
            and more
          </p>
        </div>
      </div>
    </div>
  );
};

export default NaukriResdexPage;
