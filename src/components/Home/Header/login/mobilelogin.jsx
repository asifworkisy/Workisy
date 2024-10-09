import React, { useState } from 'react';

export default function MobileLogin({setShowPage}) {
  const [mobileNumber, setMobileNumber] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleMobileNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, '');
    setMobileNumber(input.slice(0, 10)); 
    setIsValid(input.length === 10);
  };

  return (
    <div className='mobile'>

      <form >
        
        <div className='field'>
          <label htmlFor="mobileNumber">Mobile Number</label>
          <div>
        
            <input
              type="text"
              id="mobileNumber"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              required
              placeholder="Enter your 10-digit number" />
            <span>  +91 - </span>
          </div>
          <small>You will receive an OTP on this number</small>
          {/* <small style={{ color: isValid ? 'green' : 'red' }}>
            {isValid ? 'Valid mobile number' : 'Enter *'}
          </small> */}
        </div>

        <button
          type="submit"
          disabled={!isValid} 
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: isValid ?'#007BFF' :  'rgb(172, 167, 239)',
            color: 'white',
            border: 'none',
            fontFamily:"inter",
            fontSize:"1rem",
            borderRadius: '10px',
            cursor: isValid ? 'pointer' : 'not-allowed',
          }}
        >
          Get OTP
        </button>
        <p style={{color:"gray"}}>or</p>
        <button
             style={{
            width: '100%',
            padding: '10px',
            backgroundColor: 'white' ,
            color: '#007BFF',
            border: "1px solid #007BFF",
            borderRadius: '10px',
            fontFamily:"inter",
            fontWeight:"550",
            fontSize:"1rem"
            
          }}
         onClick={()=>setShowPage(true)}>Use email to login</button>

      </form>
    </div>
  );
}
