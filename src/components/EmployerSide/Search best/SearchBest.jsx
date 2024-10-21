// src/components/ImageLeftContentRight.jsx

import React from "react";
import "./Searchbest.css";

const ImageLeftContentRight = () => {
  return (
    <div className="image-content-section">
      <div className="image-section">
        <img src="/freePick.png" alt="Illustration" className="illustration" />
      </div>

      <div className="text-section">
        <h2 className="service-title">
          Search Best Talent with Naukri’s Resume Database Access - Resdex
        </h2>
        <p className="description">
          Source candidates from Resdex − India’s largest Talent Pool and find
          the perfect talent for your organisation.
        </p>

        <div className="features">
          <div className="feature">
            <i className="fa fa-clock-o"></i>
            <span>Over 10.33 crore Jobseekers</span>
          </div>
          <div className="feature">
            <i className="fa fa-infinity"></i>
            <span>Smart Talent Search</span>
          </div>
          <div className="feature">
            <i className="fa fa-bullseye"></i>
            <span>Contact Directly</span>
          </div>
          <div className="feature">
            <i className="fa fa-calendar"></i>
            <span>Verified Candidates</span>
          </div>
        </div>

        <button className="buy-now-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default ImageLeftContentRight;
