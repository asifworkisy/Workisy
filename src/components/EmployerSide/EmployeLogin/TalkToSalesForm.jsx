import React, { useState } from "react";

const TalkToSalesForm = ({ onSubmit }) => {
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [formError, setFormError] = useState(false);

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
    }
  };

  return (
    <form className="talk-to-sales-form" onSubmit={handleSubmit}>
      {formError && (
        <p className="error-message">
          Please fill in the mandatory fields
        </p>
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
  );
};

export default TalkToSalesForm;
