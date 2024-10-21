// src/components/JobPostingPage.jsx

import React from "react";
import "./EmployeJobPosting.css"; // Import the CSS file for styling
import { MdDateRange, MdOutlineTimer, MdPeopleAlt } from "react-icons/md";
import { RiFileUserLine } from "react-icons/ri";

const JobPostingPage = () => {
  return (
    <div className="job-posting-page">
      <section className="job-posting-header">
        <h4 className="section-tag">PRODUCTS & SERVICES</h4>
        <h1 className="main-heading">
          Workisy is India’s No.1 Job Posting Site & Recruitment Platform
        </h1>
      </section>

      <section className="job-posting-info">
        <div className="text-section">
          <h2 className="service-title">
            Workisy Job Posting Services - Get Quality Applies
          </h2>
          <p className="description">
            Reach out to millions of job seekers and hire quickly with our fast
            and easy job posting services.
          </p>

          <div className="features">
            <div className="feature">
              <i className="fa fa-clock-o"></i>
              <span>
                <MdOutlineTimer /> 2 Minutes to Post
              </span>
            </div>
            <div className="feature">
              <i className="fa fa-infinity"></i>
              <span>
                <RiFileUserLine /> Unlimited Applies
              </span>
            </div>
            <div className="feature">
              <i className="fa fa-bullseye"></i>
              <span>
                <MdPeopleAlt /> Attract Audience
              </span>
            </div>
            <div className="feature">
              <i className="fa fa-calendar"></i>
              <span>
                <MdDateRange /> 30 Day Visibility
              </span>
            </div>
          </div>

          <button className="buy-now-btn">Buy Now</button>
        </div>

        <div className="image-section">
          <img
            src="/jobPostingSite.png"
            alt="Illustration"
            className="illustration"
          />
        </div>
      </section>
    </div>
  );
};

export default JobPostingPage;
