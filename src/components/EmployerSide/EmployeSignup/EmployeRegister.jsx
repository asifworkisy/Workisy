import React, { useEffect, useState } from "react";
import EmployeeSignupModal from "./EmployeeModal/EmployeeSignupModal";
import { useNavigate } from "react-router-dom";
import "./EmployeeRegister.css";
import PersonIcon from "@mui/icons-material/Person";
import Header from "../../Home/Header/Header";

const EmployeeRegister = () => {
  const navigate = useNavigate();
  const [achievements, setAchievements] = useState([
    { description: "", year: "" },
  ]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [industries, setIndustries] = useState("");
  const [functions, setFunctions] = useState("");
  const [industryError, setIndustryError] = useState("");
  const [functionError, setFunctionError] = useState("");

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

  const handleImageUpload = (imageUrl) => {
    setUploadedImage(imageUrl);
    closeModal();
  };

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
  const years = Array.from({ length: 50 }, (_, i) => 2024 - i);

  return (
    <>
      <Header />
      <div className="employee-signup-container">
        <h1 className="employee-signup-heading">Create Recruiter Profile</h1>
        <h4 className="employee-signup-h4">
          Existing Employers/Recruiters?{" "}
          <span
            className="employee-signup-login"
            onClick={() => navigate("/employee-login")}
          >
            Login
          </span>
        </h4>
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
              <EmployeeSignupModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onImageUpload={handleImageUpload}
              />
              <div className="personal-details-input-group">
                <label className="employee-signup-label">First Name *</label>
                <input type="text" placeholder="First Name" required />
              </div>
              <div className="personal-details-input-group">
                <label className="employee-signup-label">Last Name</label>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>

            <div className="personal-details-form-group">
              <label className="employee-signup-label">Email Address *</label>
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="personal-details-form-group">
              <label className="employee-signup-label">Mobile Number *</label>
              <input
                type="tel"
                placeholder="Enter mobile number with country code"
                required
              />
            </div>
            <div className="personal-details-form-group">
              <label className="employee-signup-label">
                Current Location *
              </label>
              <input
                type="current location"
                placeholder="Enter you current location"
                required
              />
            </div>

            <h3 className="achievements-header">Achievements</h3>
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-form-group">
                <div className="personal-details-form-group">
                  <label className="employee-signup-label">
                    Description (250 Characters Remaining)
                  </label>
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
                  <label className="employee-signup-label">
                    Year of Achievement
                  </label>
                  <select className="employee-signup-select" required>
                    <option value="">From</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
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

          {/* {/*--------------- Employee Signup Form Container -------------/} */}

          <div className="employee-signup-form-container">
            <form className="employee-signup-form">
              {/* ------------Professional Details-------------*/}

              <div className="employee-signup-section">
                <h3 className="employee-signup-section-header">
                  Professional Details
                </h3>
                <div className="employee-signup-border">
                  <div className="employee-signup-form-group">
                    {/* <label className="employee-signup-label">
                    Current Company Name*
                  </label> */}
                    <input
                      className="employee-signup-input"
                      type="text"
                      placeholder="Current Company Name"
                      required
                    />
                    {/* <label className="employee-signup-label">
                    Current Designation*
                  </label> */}
                    <input
                      className="employee-signup-input"
                      type="text"
                      placeholder="Current Designation"
                      required
                    />
                    {/* <label className="employee-signup-label">From*</label> */}
                    <input
                      type="date"
                      className="employee-signup-select"
                      required
                      placeholder="From"
                    />

                    {/* <label className="employee-signup-label">To*</label> */}
                    <input
                      type="date"
                      className="employee-signup-select"
                      required
                      placeholder="From"
                    />
                  </div>
                  <div className="employee-signup-form-group">
                    {/* <label className="employee-signup-label">
                    Address Line 1*
                  </label> */}
                    <input
                      className="employee-signup-input"
                      type="text"
                      placeholder="Address Line 1"
                    />
                    {/* <label className="employee-signup-label">
                    Address Line 2
                  </label> */}
                    <input
                      className="employee-signup-input"
                      type="text"
                      placeholder="Address Line 2"
                    />
                  </div>
                  <div className="employee-signup-form-group">
                    {/* <label className="employee-signup-label">City*</label> */}
                    <input
                      className="employee-signup-input"
                      type="text"
                      placeholder="City"
                    />
                    {/* <label className="employee-signup-label">
                    State/ Province/ Region*
                  </label> */}
                    <input
                      className="employee-signup-input"
                      type="text"
                      placeholder="State/Province/Region"
                    />
                    {/* <label className="employee-signup-label">Country*</label> */}
                    <input
                      className="employee-signup-input"
                      type="text"
                      placeholder="Country"
                      required
                    />
                    {/* <label className="employee-signup-label">Zip Code*</label> */}
                    <input
                      className="employee-signup-input"
                      type="text"
                      placeholder="Zip Code"
                    />
                  </div>
                </div>
              </div>

              {/* Hiring Preferences */}
              <div className="employee-signup-section">
                <h3 className="employee-signup-section-header">
                  Hiring Preferences
                </h3>
                <div className="employee-signup-border">
                  <div className="employee-signup-form-group">
                    {/* <label className="employee-signup-label">
                    Total Experience in hiring*
                  </label> */}
                    <select className="employee-signup-select" required>
                      <option value="">Total Experience in hiring</option>
                      <option value="">less then 1 year</option>
                      <option value="">less then 2 year</option>
                      <option value="">less then 3 year</option>
                      <option value="">less then 4 year</option>
                      <option value="">less then 5 year</option>
                      <option value="">less then 6 year</option>
                      {/* Add more options */}
                    </select>
                    {/* <label className="employee-signup-label">
                    Level I hire for*
                  </label> */}
                    <select className="employee-signup-select" required>
                      <option value="">Level I hire for</option>
                      <option value="">Frehser</option>
                      <option value="">Experienced</option>
                      {/* Add more options */}
                    </select>
                    {/* <label className="employee-signup-label">Referral Code</label> */}
                    <input
                      className="employee-signup-input"
                      type="text"
                      placeholder="Referral Code"
                    />
                  </div>

                  {/* Industries and Functions Input */}
                  <div className="employee-signup-form-group">
                    {/* <label className="employee-signup-label">Industry*</label> */}
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
                    {/* <label className="employee-signup-label">Function*</label> */}
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
                    {/* <label className="employee-signup-label">
                    Skills I hire for*
                  </label> */}
                    <input
                      className="employee-signup-input"
                      type="text"
                      placeholder="Skills I hire for"
                    />
                  </div>
                </div>
              </div>

              <div className="employee-signup-form-checkbox">
                <label className="employee-signup-checkbox-label1">
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

export default EmployeeRegister;
