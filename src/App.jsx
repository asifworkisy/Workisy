// <<<<<<< HEAD
// import React from 'react';
// =======
// import React from 'react'
// import "./App.css"
// >>>>>>> d7b7e58534ed78dc6fac7874497b7c911368964c
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Adminprofile from "../src/components/Adminprofile/Home/home";
// import Jobcontainer from './components/Jobdetailes/Jobcontainer';
// import Homepage from './components/Home/Homepage/Home';
// <<<<<<< HEAD
// import "./App.css";

// // Uncomment if you want to use LoginPagee
// // import LoginPagee from './components/LoginPage/LoginPage';
// =======
// import EmployeLogin from './components/EmployerSide/EmployeLogin/EmployeLogin';
// import EmployeSignup from './components/EmployerSide/EmployeSignup/EmployeSignup';

// >>>>>>> d7b7e58534ed78dc6fac7874497b7c911368964c

// export default function App() {
//   return (
//     <BrowserRouter>
// <<<<<<< HEAD
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/adminProfile" element={<Adminprofile />} />
//         <Route path="/jobDetailes" element={<Jobcontainer />} />
//         {/* Uncomment the following line if LoginPagee is needed */}
//         {/* <Route path="/login" element={<LoginPagee />} /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// =======
//     <Routes>
//       <Route path="/" element={<Homepage />} />
//       <Route path='/adminProfile' element={<Adminprofile/>}/>
//       <Route path='/jobDetailes' element={<Jobcontainer/>}/> 
//       <Route path='/employee-login' element={<EmployeLogin/>}/> 
//       <Route path='/employee-signup' element={<EmployeSignup/>}/> 
     
      
//     </Routes>
//   </BrowserRouter>
//   )
// >>>>>>> d7b7e58534ed78dc6fac7874497b7c911368964c
// }
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adminprofile from "../src/components/Adminprofile/Home/home";
import Jobcontainer from './components/Jobdetailes/Jobcontainer';
import Homepage from './components/Home/Homepage/Home';
import "./App.css";
import EmployeLogin from './components/EmployerSide/EmployeLogin/EmployeLogin';
import EmployeSignup from './components/EmployerSide/EmployeSignup/EmployeSignup';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/adminProfile" element={<Adminprofile />} />
        <Route path="/jobDetailes" element={<Jobcontainer />} />
        <Route path="/employee-login" element={<EmployeLogin />} />
        <Route path="/employee-signup" element={<EmployeSignup />} />
      </Routes>
    </BrowserRouter>
  );
}
