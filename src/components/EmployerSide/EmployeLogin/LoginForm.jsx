import React, { useState } from "react";

const LoginForm = ({ onLogin, onShowForgotPassword, onShowSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <form className="employee-login-form" onSubmit={handleSubmit}>
      <label className="employee-login-form-label" htmlFor="email">
        Email
      </label>
      <input
        className="employee-login-form-input"
        type="email"
        id="email"
        name="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
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
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
      />
      <p className="employee-login-form-p" onClick={onShowForgotPassword}>
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
          onClick={onShowSignup}
        >
          Sign up
        </span>
      </p>
    </form>
  );
};

export default LoginForm;
