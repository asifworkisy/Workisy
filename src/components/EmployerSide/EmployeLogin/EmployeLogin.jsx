import React, { useState } from "react";
import axios from "axios";
import "./EmployeLogin.css";
import Header from "../../Home/Header/Header";
import { useNavigate } from "react-router-dom";
import EmployeeModel from "./EmployeeModel/EmployeeModel";
import EmployeeSignup from "../EmployeSignup/Employee-Signup-Modal/EmployeeSignupModal1";
import JobPostingPage from "../EmployeJobPosting/EmployeJobPosting";
import ImageLeftContentRight from "../Search best/SearchBest";
import Testimonials from "./Recruiters Recommend/RecruitersRecommend";
import WhatsNew from "./what's New/whatsNew";
import LoginForm from "./LoginForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import TalkToSalesForm from "./TalkToSalesForm";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmployeLogin = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (userData) => {
    try {
      const response = await axios.post(
        "https://workisy-backend.onrender.com/api/v1/admin/auth/login",
        userData
      );
      console.log("Login successful:", response.data);


      toast.success("You have successfully logged in!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setTimeout(() => {
        navigate("/employer-profile");
      }, 1000);
    } catch (error) {
      console.error("Error logging in:", error.response?.data || error.message);


      setErrorMessage("Please enter correct credentials");


      toast.error("Kindly check and enter your credentials correctly.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    console.log("Forgot password form submitted");
  };

  const handleModalSubmit = (data) => {
    console.log("Sales Inquiry Data:", data);
  };

  return (
    <>
      <Header />
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
          <button
            className="employee-login-button"
            onClick={() => setIsModalOpen(true)}
          >
            Talk to Sales
          </button>
        </div>
        <div className="employee-login-form-container">
          <div className="h4-container">
            <h4
              className="employee-login-form-h4"
              onClick={() => {
                setShowLoginForm(true);
                setShowForgotPasswordForm(false);
                setErrorMessage("");
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
              <>
                <LoginForm
                  onLogin={handleLogin}
                  onShowForgotPassword={() => setShowForgotPasswordForm(true)}
                  onShowSignup={() => setIsSignupOpen(true)}
                />
              </>
            ) : showForgotPasswordForm ? (
              <ForgotPasswordForm
                onForgotPassword={handleForgotPasswordSubmit}
              />
            ) : (
              <TalkToSalesForm onSubmit={handleModalSubmit} />
            )}
          </div>

          {isModalOpen && (
            <EmployeeModel
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Talk to Sales"
              content={<TalkToSalesForm onSubmit={handleModalSubmit} />}
            />
          )}

          {isSignupOpen && (
            <EmployeeSignup
              isOpen={isSignupOpen}
              onClose={() => setIsSignupOpen(false)}
            />
          )}
        </div>
      </div>
      <JobPostingPage />
      <ImageLeftContentRight />
      <Testimonials />
      <WhatsNew />
    </>
  );
};

export default EmployeLogin;
