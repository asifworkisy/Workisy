import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { toast, ToastContainer } from 'react-toastify'; // Import Toast components
import 'react-toastify/dist/ReactToastify.css'; // Import Toast styles
import "./EmployeeSignupModal1.css";

const EmployeeSignup = ({ isOpen, onClose, onSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      firstName,
      lastName,
      email,
      password,
    };

    const fetchUrl = `https://workisy-backend.onrender.com/api/v1/admin/auth/signup`;

    try {
      const response = await fetch(fetchUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Signup successful:", result);

        // Show success toast
        toast.success('Signup successful!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        // Reset form fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");

        if (onSubmit) onSubmit(result);

        // Redirect after a short delay to allow the user to see the success message
        setTimeout(() => {
          navigate('/employer-profile'); 
          onClose();
        }, 1000);
      } else {
        const errorMessage = await response.json(); // Parse the error response as JSON
        console.error("Error during signup:", response.statusText, errorMessage);
        
        // Show error toast with specific error message
        toast.error(`Signup failed: ${errorMessage.message || 'Please try again.'}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred during signup.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="employee-signup-modal1">
      <div className="employee-signup-modal1-content">
        <button className="employee-signup-close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="employee-signup-heading">Sign Up</h2>
        <form className="employee-signup-form" onSubmit={handleSubmit}>
          <label className="employee-signup-label" htmlFor="signup-first-name">
            First Name
          </label>
          <input
            className="employee-signup-input"
            type="text"
            id="signup-first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your First Name"
            required
          />
          <label className="employee-signup-label" htmlFor="signup-last-name">
            Last Name
          </label>
          <input
            className="employee-signup-input"
            type="text"
            id="signup-last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your Last Name"
            required
          />
          <label className="employee-signup-label" htmlFor="signup-email">
            Email
          </label>
          <input
            className="employee-signup-input"
            type="email"
            id="signup-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
            required
          />
          <label className="employee-signup-label" htmlFor="signup-password">
            Password
          </label>
          <input
            className="employee-signup-input"
            type="password"
            id="signup-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
            required
          />
          <button className="employee-signup-button" type="submit">
            Sign Up
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-right" 
        autoClose={5000} 
        hideProgressBar 
        newestOnTop 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
      />
    </div>
  );
};

export default EmployeeSignup;
