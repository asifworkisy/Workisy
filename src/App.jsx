import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adminprofile from "../src/components/Adminprofile/Home/home";
import Jobcontainer from "./components/Jobdetailes/Jobcontainer";
import Homepage from "./components/Home/Homepage/Home";
import "./App.css";
import EmployeLogin from "./components/EmployerSide/EmployeLogin/EmployeLogin";
import EmployeeRegister from "./components/EmployerSide/EmployeSignup/EmployeRegister";
import BuyOnline from "../src/components/BuyOnline/body";
import EmployeeHome from "./components/EmployeeJobDetails/Home";
import Jobreport from "./components/EmployeeJobDetails/JobReport";
import ResdoxReport from "./components/EmployeeJobDetails/ResdoxReport";
import LoginPage from "./components/EmployeeJobDetails/Login";
import PostJob from "./components/EmployeeJobDetails/Postjob";
import SearchForm from "./components/EmployeeJobDetails/Searchcandi";
import Profile from "./components/EmployeeJobDetails/Filters/Resume/profile";
import Resume from "./components/EmployeeJobDetails/Filters/Resume/resume";
import CV from "./components/EmployeeJobDetails/Filters/Resume/cv";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin-profile" element={<Adminprofile />} />
        <Route path="/job-details" element={<Jobcontainer />} />
        <Route path="/employee-login" element={<EmployeLogin />} />
        <Route path="/employer-profile" element={<EmployeeRegister />} />
        <Route path="/buy-online" element={<BuyOnline />} />
        <Route path="/employee-home" element={<EmployeeHome />} />
        <Route exact path="/postjob" element={<PostJob />} />
        <Route path="/search-candidates" element={<SearchForm />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/resodx" element={<ResdoxReport />} />
        <Route exact path="/job-report" element={<Jobreport />} />

        <Route path="/resume" element={<Resume />}>
          <Route path="profile" element={<Profile />} />
          <Route path="cv" element={<CV />} />
        </Route>
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
