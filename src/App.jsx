import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adminprofile from "../src/components/Adminprofile/Home/home";
import Jobcontainer from './components/Jobdetailes/Jobcontainer';
import Homepage from './components/Home/Homepage/Home';
import "./App.css";
import EmployeLogin from './components/EmployerSide/EmployeLogin/EmployeLogin';
import EmployeSignup from './components/EmployerSide/EmployeSignup/EmployeSignup';
import ImageUpload from './components/EmployerSide/ImageUpload/ImageUpload';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/adminProfile" element={<Adminprofile />} />
        <Route path="/jobDetailes" element={<Jobcontainer />} />
        <Route path="/employee-login" element={<EmployeLogin />} />
        <Route path="/employee-signup" element={<EmployeSignup />} />
        <Route path="/image-upload" element={<ImageUpload />} />
      </Routes>
    </BrowserRouter>
  );
}
