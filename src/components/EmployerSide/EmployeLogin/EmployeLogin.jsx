import React, { useState } from "react";
import "./EmployeLogin.css";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
import Header from "../../Home/Header/Header";
import { useNavigate } from "react-router-dom"; // Use the hook here

const EmployeLogin = () => {
  const [fullName, setFullName] = useState("");
  // const [contactNumber, setContactNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(true);

  const navigate = useNavigate(); // Use the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      fullName,
      // contactNumber,
      companyName,
      emailId,
    });
    setFullName("");
    // setContactNumber("");
    setCompanyName("");
    setEmailId("");
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
              onClick={() => setShowLoginForm(true)}
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
            {showLoginForm ? (
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
                  id="confirm-password"
                  name="confirm-password"
                  placeholder="Enter Password"
                  required
                />
                <p className="employee-login-form-p">Forgot Password?</p>
                <button className="employee-login-form-button" type="submit">
                  Login
                </button>
                <hr className="form-divider"></hr>
                <p className="employee-login-form-new-user">
                  New User?{" "}
                  <span
                    className="employee-login-form-new-user-link"
                    onClick={() => navigate("/employee-signup")} // Correct use of navigate
                  >
                    Sign up
                  </span>
                </p>
              </form>
            ) : (
              <form className="talk-to-sales-form" onSubmit={handleSubmit}>
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
                <label
                  className="employee-login-form-label"
                  htmlFor="talk-to-sales-number"
                >
                  Contact Number*
                </label>
                {/* <PhoneInput
                  className="employee-login-form-phone-input"
                  country={"in"}
                  value={contactNumber}
                  onChange={setContactNumber}
                  containerClass="phone-input-container"
                  inputProps={{
                    name: "phoneNumber",
                    required: true,
                  }}
                  inputStyle={{ width: "100%" }}
                /> */}
                <label
                  className="employee-login-form-label"
                  htmlFor="company-name"
                >
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
