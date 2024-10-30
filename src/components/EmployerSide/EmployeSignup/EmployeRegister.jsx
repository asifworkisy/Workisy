import React, {useState } from "react";

import { useNavigate } from "react-router-dom";
import "./EmployeeRegister.css";

import Header from "../../Home/Header/Header";

const EmployeeRegister = () => {

 

  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    currentLoaction: '',
    currentCompanyName: '',
    currentDesignation: '',
    startDate: '',
    endtDate: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    stateProvinceRegion: '',
    zipCode: '',
    isActive: false,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://workisy-backend.onrender.com/api/v1/employer/profile/employerprofile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);

        alert('Profile created successfully!');
        // Handle success - you can show a message to the user or redirect
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error - you can show an error message to the user
      });
  };




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
        <form className="employee-signup-flex-container"  onSubmit={handleSubmit}>
          {/* Personal Details Section */}
                    <div className="personal-details-container">
                      <h3 className="personal-details-header">Personal Details</h3>
                      <div className="personal-details-form-name">
                      
                      
                        <div className="personal-details-input-group">
                          <label className="employee-signup-label">First Name *</label>
                          <input type="text" placeholder="First Name" required name="firstName" value={formData.firstName} onChange={handleChange}/>
                        </div>
                        <div className="personal-details-input-group">
                          <label className="employee-signup-label">Last Name</label>
                          <input type="text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
                        </div>
                      </div>

                      <div className="personal-details-form-group">
                        <label className="employee-signup-label">Email Address *</label>
                        <input type="email" placeholder="Email Address" required  name="email" value={formData.email} onChange={handleChange} />
                      </div>
                      <div className="personal-details-form-group">
                        <label className="employee-signup-label">Mobile Number *</label>
                        <input
                          type="tel"
                          placeholder="Enter mobile number with country code"
                          required
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleChange}

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
                          name="currentLoaction"
                          value={formData.currentLoaction}
                          onChange={handleChange}
                        />
                      </div>

                    
                    
                    
                    </div>

                    {/* {/*--------------- Employee Signup Form Container -------------/} */}

                    <div className="employee-signup-form-container">
                      <div className="employee-signup-form">
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
                                name="currentCompanyName"
                                value={formData.currentCompanyName}
                                onChange={handleChange}
                              />
                              {/* <label className="employee-signup-label">
                              Current Designation*
                            </label> */}
                              <input
                                className="employee-signup-input"
                                type="text"
                                placeholder="Current Designation"
                                required
                                name="currentDesignation"
                                value={formData.currentDesignation}
                                onChange={handleChange}
                              />
                              {/* <label className="employee-signup-label">From*</label> */}
                              <input
                                type="date"
                                className="employee-signup-select"
                                required
                                placeholder="From"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}
                              />

                              {/* <label className="employee-signup-label">To*</label> */}
                              <input
                                type="date"
                                className="employee-signup-select"
                                required
                                placeholder="From"
                                name="endtDate"
                                value={formData.endtDate}
                                onChange={handleChange}
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
                                name="addressLine1"
                                value={formData.addressLine1}
                                onChange={handleChange}
                              />
                              {/* <label className="employee-signup-label">
                              Address Line 2
                            </label> */}
                              <input
                                className="employee-signup-input"
                                type="text"
                                placeholder="Address Line 2"
                                name="addressLine2"
                                value={formData.addressLine2}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="employee-signup-form-group">
                              {/* <label className="employee-signup-label">City*</label> */}
                              <input
                                className="employee-signup-input"
                                type="text"
                                placeholder="City"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                              />
                              {/* <label className="employee-signup-label">
                              State/ Province/ Region*
                            </label> */}
                              <input
                                className="employee-signup-input"
                                type="text"
                                placeholder="State/Province/Region"
                                name="stateProvinceRegion"
                                value={formData.stateProvinceRegion}
                                onChange={handleChange}
                              />
                              {/* <label className="employee-signup-label">Country*</label> */}
                              {/* <input
                                className="employee-signup-input"
                                type="text"
                                placeholder="Country"
                                required

                                value={stateProvinceRegion}
                                onChange={(i)=>setStateProvinceRegion(i.target.value)}
                              /> */}
                              {/* <label className="employee-signup-label">Zip Code*</label> */}
                              <input
                                className="employee-signup-input"
                                type="text"
                                placeholder="Zip Code"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Hiring Preferences */}
                    

                        <div className="employee-signup-form-checkbox">
                          <label className="employee-signup-checkbox-label1">
                            <input type="checkbox" 
                              id="isActive" name="isActive" checked={formData.isActive} onChange={handleChange}
                             /> I agree to use the
                            aforesaid details to create my Recruiter Profile & display it
                            on the Workisy site and also agree to be bound by the Terms of
                            Use & Privacy of Workisy
                          </label>
                        </div>

                        <button className="employee-signup-submit-button" type="submit" >
                          Submit
                        </button>
                      </div>
                    </div>
        </form>
      </div>
    </>
  );
};

export default EmployeeRegister;
