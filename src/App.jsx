import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adminprofile from "../src/components/Adminprofile/Home/home";
import Jobcontainer from './components/Jobdetailes/Jobcontainer';
import Homepage from './components/Home/Homepage/Home';
import "./App.css";

// Uncomment if you want to use LoginPagee
// import LoginPagee from './components/LoginPage/LoginPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/adminProfile" element={<Adminprofile />} />
        <Route path="/jobDetailes" element={<Jobcontainer />} />
        {/* Uncomment the following line if LoginPagee is needed */}
        {/* <Route path="/login" element={<LoginPagee />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
