import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adminprofile from "../src/components/Adminprofile/Home/home"
import Jobcontainer from './components/Jobdetailes/Jobcontainer';
import Homepage from './components/Home/Homepage/Home';
import "./App.css"
<<<<<<< HEAD
// import LoginPagee from './components/LoginPage/LoginPage';
=======

>>>>>>> be8196f40458d3eb1890a5730eeddd88ede6c1b2

export default function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path='/adminProfile' element={<Adminprofile/>}/>
<<<<<<< HEAD
      <Route path='/jobDetailes' element={<Jobcontainer/>}/>
      {/* <Route path='/login' element={<LoginPagee/>}/> */}
=======
      <Route path='/jobDetailes' element={<Jobcontainer/>}/> 
>>>>>>> be8196f40458d3eb1890a5730eeddd88ede6c1b2
     
      
    </Routes>
  </BrowserRouter>
  )
}
