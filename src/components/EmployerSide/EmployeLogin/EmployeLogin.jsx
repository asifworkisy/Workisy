import React, { useState } from "react";
import "./EmployeLogin.css";
import Header from "../../Home/Header/Header";
import { useNavigate } from "react-router-dom"; 

const EmployeLogin = () => {
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [formError, setFormError] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);

  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (!fullName || !contactNumber || !companyName || !emailId) {
      setFormError(true);
    } else {
      setFormError(false); 
      console.log({
        fullName,
        contactNumber,
        companyName,
        emailId,
      });
      setFullName("");
      setContactNumber("");
      setCompanyName("");
      setEmailId("");
    }
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    console.log("Forgot password form submitted");
  };

  return (
    <>
      <Header />
      <div className="employee-login-container">
        <div className="employee-login-heading">
          <hr className="custom-divider" />
          <h1 className="employee-login-h1">
            Ready to own your <br />
            hiring game
          </h1>
          <h3 className="employee-login-h3">
            We're revolutionising recruitment. Sign up now!
          </h3>
          <button className="employee-login-button">Talk to Sales</button>
        </div>
        <div className="employee-login-form-container">
          <div className="h4-container">
            <h4
              className="employee-login-form-h4"
              onClick={() => {
                setShowLoginForm(true);
                setShowForgotPasswordForm(false);
              }}
            >
              Login
            </h4>
            <h4
              className="employee-login-form-h4"
              onClick={() => setShowLoginForm(false)}
            >
              Talk to Sales
            </h4>
          </div>

          <div className="employee-login-form-div">
            {showLoginForm && !showForgotPasswordForm ? (
              <form className="employee-login-form">
                <label className="employee-login-form-label" htmlFor="name">
                  User Name
                </label>
                <input
                  className="employee-login-form-input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter username"
                  required
                />
                <label className="employee-login-form-label" htmlFor="password">
                  Password
                </label>
                <input
                  className="employee-login-form-input"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  required
                />
                <p
                  className="employee-login-form-p"
                  onClick={() => setShowForgotPasswordForm(true)}
                >
                  Forgot Password?
                </p>
                <button className="employee-login-form-button" type="submit">
                  Login
                </button>
                <hr className="form-divider" />
                <p className="employee-login-form-new-user">
                  New User?{" "}
                  <span
                    className="employee-login-form-new-user-link"
                    onClick={() => navigate("/employee-signup")}
                  >
                    Sign up
                  </span>
                </p>
              </form>
            ) : showForgotPasswordForm ? (
              <form className="forgot-password-form" onSubmit={handleForgotPasswordSubmit}>
                <h2 className="forgot-password-heading">Forgot Password</h2>
                <p className="forgot-password-description">
                  Please enter account username and registered email address for password recovery.
                </p>
                <label className="employee-login-form-label" htmlFor="username">
                  Username
                </label>
                <input
                  className="employee-login-form-input"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter Username"
                  required
                />
                <label className="employee-login-form-label" htmlFor="email">
                  Email ID
                </label>
                <input
                  className="employee-login-form-input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email ID"
                  required
                />
                <label className="employee-login-form-label" htmlFor="captcha">
                  Enter Captcha
                </label>
                <input
                  className="employee-login-form-input"
                  type="text"
                  id="captcha"
                  name="captcha"
                  placeholder="Enter Captcha"
                  required
                />
                <button type="submit" className="employee-login-form-button">
                  Submit
                </button>
                <p
                  className="forgot-password-back"
                  onClick={() => setShowForgotPasswordForm(false)}
                >
                  Back to Login
                </p>
              </form>
            ) : (
              <form className="talk-to-sales-form" onSubmit={handleSubmit}>
                {formError && (
                  <p className="error-message">Please fill in the mandatory fields</p>
                )}
                <label className="employee-login-form-label" htmlFor="full-name">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="full-name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your Full Name"
                  required
                />
                <label className="employee-login-form-label" htmlFor="talk-to-sales-number">
                  Contact Number*
                </label>
                <input
                  type="text"
                  id="talk-to-sales-number"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  placeholder="Enter your Contact Number"
                  required
                />
                <label className="employee-login-form-label" htmlFor="company-name">
                  Company Name*
                </label>
                <input
                  type="text"
                  id="company-name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Enter your Company Name"
                  required
                />
                <label className="employee-login-form-label" htmlFor="email-id">
                  Email ID*
                </label>
                <input
                  type="email"
                  id="email-id"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                  placeholder="Enter your Email ID"
                  required
                />
                <button type="submit">Get in touch</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeLogin;
