import React, { useState } from 'react';
import "./loginpage.css"
import { Link } from 'react-router-dom';
export default function MailLogin({ setShowPage}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
  };

  return (
    <div className='mail' style={{borderRadius:"20px"}}>
    
      <form onSubmit={handleSubmit} className='form'>
      
        <div className='user'>
          <label htmlFor="username">Email ID / Username</label>
          <input type="text" id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder='Enter you active Email ID / Username'
            
      />
        </div>

        <div className='password'>
          <label htmlFor="password">Password</label>
          <div >
            <input
              type={showPassword ? 'text' : 'password'} 

              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='Enter your Password'
       />
      
            <button className='show'
              type="button"
              onClick={() => setShowPassword(!showPassword)} 
            
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
            <button className='forget'>Forget password?</button>
          </div>
        </div>
            <Link to="/adminProfile">
            <button className='login'> Login</button>
            </Link>

       
        <button className='login m' onClick={()=>setShowPage(false)}> Use OTP to login</button>
      </form>
    </div>
  );
}
