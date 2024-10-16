import React from "react";
import "./EmployeeModal.css";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="employee-modal-overlay" onClick={onClose}>
      <div className="employee-modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="employee-modal-header">Upload Your Photograph</h2>
        <input className="employee-modal-file-input" type="file" accept=".jpg,.jpeg,.png" />
        <p className="employee-modal-file-message">No file chosen</p>
        <button className="employee-modal-upload-button" type="button">Upload</button>
        <p className="employee-modal-guidelines">
          By uploading this image you certify that this is your photograph and you have the right to distribute this image in accordance with Monster Guidelines.
        </p>
        <p className="employee-modal-guidelines">Max file upload size: 4 MB.</p>
        <p className="employee-modal-guidelines">You can upload pictures in ".jpg, .jpeg, .png" formats.</p>
        <p className="employee-modal-guidelines">
          Upload latest clear individual images only. Group images will get rejected during moderation.
        </p>
        <p className="employee-modal-guidelines">
          Images that could be perceived as violent, including hatred or cruelty to humans or animals, profanity, or obscenities will be rejected.
        </p>
        <p className="employee-modal-guidelines">Images of celebrities will be rejected.</p>
        <p className="employee-modal-guidelines">
          On the prior consent of the recruiter, job seekers can access recruiter profiles. Monster is not responsible for any dissemination of information including uploaded photographs outside its purview.
        </p>
        <p className="employee-modal-guidelines">
          Images demonstrating inappropriate or junk content will be rejected.
        </p>
        <p className="employee-modal-guidelines">
          The profile owner is responsible for the accuracy and reliability of any information uploaded. Exceptions to this include fraudulent information of any kind on the website should be reported by users to Monster website authorities.
        </p>
        <button className="employee-modal-close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
