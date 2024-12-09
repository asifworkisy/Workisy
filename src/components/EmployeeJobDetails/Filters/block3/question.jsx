import React, { useState } from 'react';
import { AiOutlineQuestionCircle } from "react-icons/ai";
import"./question.css"
const Question = ({msg}) => {

  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="qContainer">
      <button 
        className="info-button"
        onMouseEnter={() => setShowMessage(true)} 
        onMouseLeave={() => setShowMessage(false)} 
      >
       <AiOutlineQuestionCircle/>
      </button>

      {showMessage && (
        <div className="message-box">
        <p >{msg}</p>
        </div>
      )}
    </div>
  );
};

export default Question;
