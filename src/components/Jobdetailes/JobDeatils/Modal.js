  


import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ show, onClose, skills }) => {
  const [activeTab, setActiveTab] = useState('personalDetails'); // Tracks the current active tab
  const [jobSkills, setJobSkills] = useState([]); // State for job skills
  const [selectedSkill, setSelectedSkill] = useState(''); // State for currently selected skill from dropdown

  // Function to switch tabs    
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Function to handle skill selection
  const handleSkillChange = (event) => {
    const skill = event.target.value;

    // Add the skill to jobSkills if it's not already present
    if (skill && !jobSkills.includes(skill)) {
      setJobSkills((prevSkills) => [...prevSkills, skill]);
    }

    setSelectedSkill(''); // Reset the dropdown selection
  };

  // Function to handle click outside the modal-box to close the modal
  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-box">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>

        <h2 className="modal-title">Apply Job</h2>

        {/* Tab navigation */}
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'personalDetails' ? 'active' : ''}`}
            onClick={() => handleTabClick('personalDetails')}
          >
            Personal Details
          </button>
          <button
            className={`tab ${activeTab === 'additionalInformation' ? 'active' : ''}`}
            onClick={() => handleTabClick('additionalInformation')}
          >
            Additional Information
          </button>
        </div>

        {/* Progress bar */}
        <div className="progress-bar">
          <div className={`progress ${activeTab === 'additionalInformation' ? 'progress-active' : ''}`} />
        </div>

        {/* Form content */}
        <div className="form-content">
          {activeTab === 'personalDetails' && (
            <form className="personal-details-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="e.g. johndoe" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="e.g. johndoe@example.com" />
              </div>
              <div className="form-group">
                <label>Mobile</label>
                <input type="text" placeholder="e.g. 9876543210" />
              </div>
              <div className="form-group">
                <label>Total Experience</label>
                <select>
                  <option>--</option>
                  <option>0-1 years</option>
                  <option>1-3 years</option>
                  <option>3-5 years</option>
                  <option>5+ years</option>
                </select>
              </div>

              <div className="form-group">
                <label>Job Skills</label>
                {/* Display selected job skills in one line */}
                <div className="selected-skills">
                  {jobSkills.length > 0 ? (
                    jobSkills.map((skill, index) => (
                      <span key={index} className="skill-badge">{skill}</span>
                    ))
                  ) : (
                    <p>No skills selected</p>
                  )}
                </div>

                {/* Dropdown to select new skills */}
                <select value={selectedSkill} onChange={handleSkillChange}>
                  <option value="">Select a skill</option>
                  {skills.map((skill, index) => (
                    <option key={index} value={skill}>
                      {skill}
                    </option>
                  ))}
                </select>
              </div>
            </form>
          )}
          {activeTab === 'additionalInformation' && (
            <div className="additional-info">
              {/* Add fields for additional information */}
              <p>Additional information goes here.</p>
            </div>
          )}
        </div>

        {/* Submit button */}
        <button className="apply-confirm-button">Submit Application</button>
      </div>
    </div>
  );
};

export default Modal;
