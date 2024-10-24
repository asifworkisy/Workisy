import React, { useEffect } from "react";
import "./EmployeeModel.css";

const EmployeeModel = ({ isOpen, onClose, onSubmit }) => {
  const [fullName, setFullName] = React.useState("");
  const [contactNumber, setContactNumber] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [emailId, setEmailId] = React.useState("");
  const [formError, setFormError] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !contactNumber || !companyName || !emailId) {
      setFormError(true);
    } else {
      setFormError(false);
      onSubmit({ fullName, contactNumber, companyName, emailId });
      setFullName("");
      setContactNumber("");
      setCompanyName("");
      setEmailId("");
      onClose(); // Close the modal after submission
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <span className="employee-modal-close-icon" onClick={onClose}>
          &times;
        </span>

        <h2>Talk to Sales</h2>
        {formError && (
          <p className="error-message">Please fill in all fields</p>
        )}
        <form className="talk-to-sales-form" onSubmit={handleSubmit}>
          <label htmlFor="full-name">Full Name*</label>
          <input
            type="text"
            id="full-name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <label htmlFor="contact-number">Contact Number*</label>
          <input
            type="text"
            id="contact-number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
          <label htmlFor="company-name">Company Name*</label>
          <input
            type="text"
            id="company-name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
          <label htmlFor="email-id">Email ID*</label>
          <input
            type="email"
            id="email-id"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            required
          />
          <button type="submit">Get in touch</button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeModel;
