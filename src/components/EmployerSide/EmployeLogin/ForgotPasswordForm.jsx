import React from "react";

const ForgotPasswordForm = ({ onForgotPassword }) => {
  return (
    <form className="forgot-password-form" onSubmit={onForgotPassword}>
      <h2 className="forgot-password-heading">Forgot Password</h2>
      <p className="forgot-password-description">
        Please enter your account username and registered email address for password recovery.
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
    </form>
  );
};

export default ForgotPasswordForm;
