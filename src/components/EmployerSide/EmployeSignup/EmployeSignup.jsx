import React, { useState } from "react";
import Modal from "./EmployeeModal/Modal";
import "./EmployeSignup.css";
import PersonIcon from "@mui/icons-material/Person";
import Header from "../../Home/Header/Header";

const EmployeSignup = () => {
  const [achievements, setAchievements] = useState([
    { description: "", year: "" },
  ]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null); // State for uploaded image
  const [industries, setIndustries] = useState(""); // State for industries
  const [functions, setFunctions] = useState(""); // State for functions
  const [industryError, setIndustryError] = useState(""); // Error state for industries
  const [functionError, setFunctionError] = useState(""); // Error state for functions

  // Achievement handling functions remain the same
  const handleAddAchievement = () => {
    setAchievements([...achievements, { description: "", year: "" }]);
  };

  const handleAchievementChange = (index, event) => {
    const newAchievements = [...achievements];
    newAchievements[index][event.target.name] = event.target.value;
    setAchievements(newAchievements);
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Handle image upload from modal
  const handleImageUpload = (imageUrl) => {
    setUploadedImage(imageUrl);
    closeModal();
  };

  // Handle input change for industries
  const handleIndustryChange = (e) => {
    const value = e.target.value;
    const industryList = value.split(",").map((item) => item.trim());

    if (industryList.length > 4) {
      setIndustryError("You can select a maximum of 4 industries.");
    } else {
      setIndustries(value);
      setIndustryError(""); // Clear the error when within limit
    }
  };

  // Handle input change for functions
  const handleFunctionChange = (e) => {
    const value = e.target.value;
    const functionList = value.split(",").map((item) => item.trim());

    if (functionList.length > 4) {
      setFunctionError("You can select a maximum of 4 functions.");
    } else {
      setFunctions(value);
      setFunctionError("");
    }
  };

  return (
    <>
      <Header />
      <div className="employee-signup-container">
        <h1 className="employee-signup-heading">Create Recruiter Profile</h1>
      </div>
      <div className="employee-signup-container">
        <div className="employee-signup-flex-container">
          {/* Personal Details Section */}
          <div className="personal-details-container">
            <h3 className="personal-details-header">Personal Details</h3>
            <div className="personal-details-form-name">
              <div className="personal-details-form-button">
                <button type="button" onClick={openModal}>
                  {uploadedImage ? (
                    <img
                      src={uploadedImage}
                      alt="Uploaded"
                      className="uploaded-image"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    <PersonIcon />
                  )}
                </button>
              </div>
              <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                onImageUpload={handleImageUpload}
              />
              <div className="personal-details-input-group">
                <label>First Name *</label>
                <input type="text" placeholder="First Name" required />
              </div>
              <div className="personal-details-input-group">
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>

            <div className="personal-details-form-group">
              <label>Email Address *</label>
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="personal-details-form-group">
              <label>Mobile Number *</label>
              <input
                type="tel"
                placeholder="Enter mobile number with country code"
                required
              />
            </div>
            <div className="personal-details-form-group">
              <label>Current Location *</label>
              <select required>
                <option value="">Select Location</option>
                {/* Add more location options here */}
              </select>
            </div>

            <h3 className="achievements-header">Achievements</h3>
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-form-group">
                <div className="personal-details-form-group">
                  <label>Description (250 Characters Remaining)</label>
                  <textarea
                    name="description"
                    placeholder="Description"
                    maxLength="250"
                    value={achievement.description}
                    onChange={(e) => handleAchievementChange(index, e)}
                    required
                  />
                </div>
                <div className="personal-details-form-group">
                  <label>Year of Achievement</label>
                  <select
                    name="year"
                    value={achievement.year}
                    onChange={(e) => handleAchievementChange(index, e)}
                    required
                  >
                    <option value="">Select</option>
                    {/* Add more year options here */}
                  </select>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddAchievement}
              className="add-more-button"
            >
              + Add more
            </button>
          </div>

          {/* Employee Signup Form Container */}
          <div className="employee-signup-form-container">
            <form className="employee-signup-form">
              {/* Professional Details */}
              <div className="employee-signup-section">
                <h3 className="employee-signup-section-header">
                  Professional Details
                </h3>
                <div className="employee-signup-form-group">
                  <input
                    className="employee-signup-input"
                    type="text"
                    placeholder="Current Company Name"
                    required
                  />
                  <input
                    className="employee-signup-input"
                    type="text"
                    placeholder="Current Designation"
                    required
                  />
                  <select className="employee-signup-select" required>
                    <option value="">From</option>
                    {/* Add more options for years */}
                  </select>
                  <select className="employee-signup-select" required>
                    <option value="">To</option>
                    {/* Add more options for years */}
                  </select>
                </div>
                <div className="employee-signup-form-group">
                  <input
                    className="employee-signup-input"
                    type="text"
                    placeholder="Address Line 1"
                  />
                  <input
                    className="employee-signup-input"
                    type="text"
                    placeholder="Address Line 2"
                  />
                </div>
                <div className="employee-signup-form-group">
                  <input
                    className="employee-signup-input"
                    type="text"
                    placeholder="City"
                  />
                  <input
                    className="employee-signup-input"
                    type="text"
                    placeholder="State/Province/Region"
                  />
                  <input
                    className="employee-signup-input"
                    type="text"
                    placeholder="Country"
                    required
                  />
                  <input
                    className="employee-signup-input"
                    type="text"
                    placeholder="Zip Code"
                  />
                </div>
              </div>

              {/* Hiring Preferences */}
              <div className="employee-signup-section">
                <h3 className="employee-signup-section-header">
                  Hiring Preferences
                </h3>
                <div className="employee-signup-form-group">
                  <select className="employee-signup-select" required>
                    <option value="">Total Experience in hiring</option>
                    {/* Add more options */}
                  </select>
                  <select className="employee-signup-select" required>
                    <label htmlFor="">Level I hire for</label>
                    <option value="">Level I hire for</option>
                    {/* Add more options */}
                  </select>
                  <input
                    className="employee-signup-input"
                    type="text"
                    placeholder="Referral Code"
                  />
                </div>

                {/* Industries and Functions Input */}
                <div className="employee-signup-form-group">
                  <input
                    className="employee-signup-input"
                    type="text"
                    placeholder="Industry (Max 4)"
                    value={industries}
                    onChange={handleIndustryChange}
                    required
                  />
                  {industryError && (
                    <p className="error-message">{industryError}</p>
                  )}

                  <input
                    className="employee-signup-input"
                    type="text"
                    placeholder="Function (Max 4)"
                    value={functions}
                    onChange={handleFunctionChange}
                    required
                  />
                  {functionError && (
                    <p className="error-message">{functionError}</p>
                  )}
                </div>

                <div className="employee-signup-form-group">
                  <input
                    className="employee-signup-input"
                    type="text"
                    placeholder="Skills I hire for"
                  />
                </div>
              </div>

              <div className="employee-signup-form-checkbox">
                <label className="employee-signup-checkbox-label">
                  <input type="checkbox" required /> I agree to use the
                  aforesaid details to create my Recruiter Profile & display it
                  on the Workisy site and also agree to be bound by the Terms of
                  Use & Privacy of Workisy
                </label>
              </div>

              <button className="employee-signup-submit-button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeSignup;
