import React, {useState } from "react";

import { useNavigate } from "react-router-dom";
import "./EmployeeRegister.css";
import axios from "axios";
import Header from "../../Home/Header/Header";

const EmployeeRegister = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [currentCompanyName, setCurrentCompanyName] = useState("");
  const [currentDesignation, setCurrentDesignation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [stateProvinceRegion, setStateProvinceRegion] = useState("");
  const [zipCode, setZipCode] = useState("");


  

  const formData={
      firstName,
      lastName,
      email,
      mobileNumber,
      currentLocation,
      currentCompanyName,
      currentDesignation,
      startDate,
      endDate,
      addressLine1,
      addressLine2,
      city,
      stateProvinceRegion,
      zipCode
  }

  


  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzFmNjkwNWEzZWExZmVkMmQ1MTFkZDEiLCJpYXQiOjE3MzAxMTE3NDksImV4cCI6MTczMTgzOTc0OSwiaXNzIjoid29ya2lzeSJ9.NPsCXO6ORQIZsv2pCQz2MuW_GPR_UWB1cNylnyz2hJY"; 
 
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevents the page from refreshing

  try {
    const response = await axios.post(
      "https://workisy-backend.onrender.com/api/v1/employer/profile/employerprofile",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Use backticks here for template literals
        },
      }
    );
    console.log("Profile created:", response.data);
    navigate("/employee-login");
  } catch (error) {
    console.error("Error submitting data:", error);
  }
}
  

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
             
             
              <div className="personal-details-input-group">
                <label className="employee-signup-label">First Name *</label>
                <input type="text" placeholder="First Name" required  value={firstName} onChange={(i)=>setFirstName(i.target.value)}/>
              </div>
              <div className="personal-details-input-group">
                <label className="employee-signup-label">Last Name</label>
                <input type="text" placeholder="Last Name" value={lastName} onChange={(i)=>setLastName(i.target.value)} />
              </div>
            </div>

            <div className="personal-details-form-group">
              <label className="employee-signup-label">Email Address *</label>
              <input type="email" placeholder="Email Address" required  value={email} onChange={(i)=>setEmail(i.target.value)} />
            </div>
            <div className="personal-details-form-group">
              <label className="employee-signup-label">Mobile Number *</label>
              <input
                type="tel"
                placeholder="Enter mobile number with country code"
                required
                value={mobileNumber}
                onChange={(i)=>setMobileNumber(i.target.value)}

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
                value={currentLocation}
                onChange={(i)=>setCurrentLocation(i.target.value)}
              />
            </div>

           
          
           
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
                      placeholder="Current Company"
                      required

                      value={currentCompanyName}
                      onChange={(i)=>setCurrentCompanyName(i.target.value)}
                    />
                    {/* <label className="employee-signup-label">
                    Current Designation*
                  </label> */}
                    <input
                      className="employee-signup-input"
                      type="text"
                      placeholder="Current Designation"
                      required
                      value={currentDesignation}
                      onChange={(i)=>setCurrentDesignation(i.target.value)}
                    />
                    {/* <label className="employee-signup-label">From*</label> */}
                    <input
                      type="date"
                      className="employee-signup-select"
                      required
                      placeholder="From"
                      value={startDate}
                      onChange={(i)=>setStartDate(i.target.value)}
                    />

                    {/* <label className="employee-signup-label">To*</label> */}
                    <input
                      type="date"
                      className="employee-signup-select"
                      required
                      placeholder="From"
                      value={endDate}
                      onChange={(i)=>setEndDate(i.target.value)}
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
                      value={addressLine1}
                      onChange={(i)=>setAddressLine1(i.target.value)}
                    />
                    {/* <label className="employee-signup-label">
                    Address Line 2
                  </label> */}
                    <input
                      className="employee-signup-input"
                      type="text"
                      placeholder="Address Line 2"
                      value={addressLine2}
                      onChange={(i)=>setAddressLine2(i.target.value)}
                    />
                  </div>
                  <div className="employee-signup-form-group">
                    {/* <label className="employee-signup-label">City*</label> */}
                    <input
                      className="employee-signup-input"
                      type="text"
                      placeholder="City"
                      value={city}
                      onChange={(i)=>setCity(i.target.value)}
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

                      value={stateProvinceRegion}
                      onChange={(i)=>setStateProvinceRegion(i.target.value)}
                    />
                    {/* <label className="employee-signup-label">Zip Code*</label> */}
                    <input
                      className="employee-signup-input"
                      type="text"
                      placeholder="Zip Code"
                      value={zipCode}
                      onChange={(i)=>setZipCode(i.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Hiring Preferences */}
          

              <div className="employee-signup-form-checkbox">
                <label className="employee-signup-checkbox-label1">
                  <input type="checkbox" required /> I agree to use the
                  aforesaid details to create my Recruiter Profile & display it
                  on the Workisy site and also agree to be bound by the Terms of
                  Use & Privacy of Workisy
                </label>
              </div>

              <button className="employee-signup-submit-button" type="submit" onClick={handleSubmit} >
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
