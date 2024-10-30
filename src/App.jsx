import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adminprofile from "../src/components/Adminprofile/Home/home";
import Jobcontainer from './components/Jobdetailes/Jobcontainer';
import Homepage from './components/Home/Homepage/Home';
import "./App.css";
import EmployeLogin from './components/EmployerSide/EmployeLogin/EmployeLogin';
import EmployeeRegister from './components/EmployerSide/EmployeSignup/EmployeRegister';
// import EmployeeSignup from './components/EmployerSide/EmployeSignup/Employee-Signup-Modal/EmployeeSignupModal1';
import BuyOnline from "../src/components/BuyOnline/body"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/adminProfile" element={<Adminprofile />} />
        <Route path="/jobDetailes" element={<Jobcontainer />} />
        <Route path="/employee-login" element={<EmployeLogin />} />
        <Route path="/employer-profile" element={<EmployeeRegister />} />
        <Route path='/buy-online' element={<BuyOnline/>}/>
        {/* <Route path="/employee-signup" element={<EmployeeSignup />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
