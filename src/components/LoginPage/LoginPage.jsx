import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./LoginPage.css";

const LoginPagee = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [scrollDownVisible, setScrollDownVisible] = useState(true);
  const navigate = useNavigate(); // Initialize navigate

  // Handle modal opening
  const openModal = () => {
    setIsOpened(true);
    document.body.style.overflow = "hidden";
  };

  // Handle modal closing
  const closeModal = () => {
    setIsOpened(false);
    document.body.style.overflow = "initial";
  };

  // Handle closing modal on 'Escape' key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Handle login button click
  const handleLogin = () => {

    navigate("/dashboard"); // Change this to your desired route
  };

  return (
    <div>
      <div className={`modal ${isOpened ? "is-open" : ""}`}>
        <div className="modal-container">
          <div className="modal-left">
            <h1 className="modal-title">Welcome!</h1>
            <p className="modal-desc">
              Fanny pack hexagon food truck, street art waistcoat kitsch.
            </p>
            <div className="input-block">
              <label htmlFor="email" className="input-label">
                Email
              </label>
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="input-block">
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="modal-buttons">
              <a href="/">Forgot your password?</a>
              <button className="input-button" onClick={handleLogin}>Login</button> {/* Add onClick */}
            </div>
            <p className="sign-up">
              Don't have an account? <a href="#">Sign up now</a>
            </p>
          </div>
          <div className="modal-right">
            <img
              src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
              alt=""
            />
          </div>
          <button className="icon-button close-button" onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <path d="M 25 3 C 12.86158 3 3 12.86158 3 25 C 3 37.13842 12.86158 47 25 47 C 37.13842 47 47 37.13842 47 25 C 47 12.86158 37.13842 3 25 3 z M 25 5 C 36.05754 5 45 13.94246 45 25 C 45 36.05754 36.05754 45 25 45 C 13.94246 45 5 36.05754 5 25 C 5 13.94246 13.94246 5 25 5 z M 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.980469 15.990234 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 z"></path>
            </svg>
          </button>
        </div>
        {/* Move the button to open modal inside the modal */}
        <button className="modal-button" onClick={openModal}>
          Click here to login
        </button>
      </div>

      {/* Background container */}
      <div className="container"></div>
    </div>
  );
};

export default LoginPagee;
