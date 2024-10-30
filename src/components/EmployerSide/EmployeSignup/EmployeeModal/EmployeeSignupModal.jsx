// import React, { useState } from "react";
// import "./EmployeeSignupModal.css";

// const EmployeeSignupModal = ({ isOpen, onClose }) => {
//   const [fileName, setFileName] = useState("No file chosen");
//   const [fileError, setFileError] = useState("");

//   if (!isOpen) return null;

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       // Validate file type
//       const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
//       if (!allowedTypes.includes(file.type)) {
//         setFileError("Invalid file format. Only .jpg, .jpeg, and .png are allowed.");
//         setFileName("No file chosen");
//         return;
//       }

//       // Validate file size (4MB = 4 * 1024 * 1024 bytes)
//       const maxSize = 4 * 1024 * 1024; // 4MB
//       if (file.size > maxSize) {
//         setFileError("File is too large. Maximum size is 4 MB.");
//         setFileName("No file chosen");
//         return;
//       }

//       // If valid, set file name and clear errors
//       setFileName(file.name);
//       setFileError(""); // Clear any previous error
//     } else {
//       setFileName("No file chosen");
//     }
//   };

//   return (
//     <div className="employee-signup-modal-container" onClick={onClose}>
//       <div className="employee-signup-modal-container" onClick={onClose}>
//         <div
//           className="employee-modal-content"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="employee-modal-header-section">
//             <h2 className="employee-modal-header">Upload your photograph</h2>
//             <span className="modal-close-icon" onClick={onClose}>
//               ×
//             </span>
//           </div>
//           <div className="employee-modal-file-section">
//             <input
//               className="employee-modal-file-input"
//               type="file"
//               accept=".jpg,.jpeg,.png"
//               id="fileUpload"
//               onChange={handleFileChange}
//             />
//             <label htmlFor="fileUpload" className="employee-modal-file-button">
//               Choose File
//             </label>
//             <span className="employee-modal-file-name">{fileName}</span>
//           </div>
//           {fileError && <p className="file-error-message">{fileError}</p>}
//           <button className="employee-modal-upload-button" disabled={!!fileError}>
//             Upload
//           </button>
//           <div className="employee-modal-guidelines">
//             <p>
//               By uploading this image you certify that this is your photograph
//               and you have the right to distribute this image in accordance with
//               Monster Guidelines.
//             </p>
//             <ul>
//               <li>Max file upload size: 4 MB.</li>
//               <li>You can upload pictures in ".jpg, .jpeg, .png" formats.</li>
//               <li>
//                 Upload the latest clear individual images only. Group images
//                 will get rejected during moderation.
//               </li>
//               <li>
//                 Images that could be perceived as violent, including hatred or
//                 cruelty to humans or animals, profanity, or obscenities will be
//                 rejected.
//               </li>
//               <li>Images of celebrities will be rejected.</li>
//               <li>
//                 On the prior consent of the recruiter, job seekers can access
//                 recruiter profiles. Monster is not responsible for any
//                 dissemination of information including uploaded photographs
//                 outside its purview.
//               </li>
//               <li>
//                 Images demonstrating inappropriate or junk content will be
//                 rejected.
//               </li>
//               <li>
//                 The profile owner is responsible for the accuracy and
//                 reliability of any information uploaded. Exceptions to this
//                 include fraudulent information of any kind on the website should
//                 be reported by users to Monster website authorities.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployeeSignupModal;
