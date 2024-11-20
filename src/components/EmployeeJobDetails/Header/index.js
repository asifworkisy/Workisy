import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import './index.css'; // Import the CSS file for styling

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [databaseOpen, setDatabaseOpen] = useState(false);
  const [report, setReport]=useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDatabase = () => setDatabaseOpen(!databaseOpen);
  const toggleReport=()=>setReport(!report)

  return (
    <nav className="navbar">
     <div className='left-nav-cnt'>
      <div className="logo">
        <Link to="/">
        <img src="https://workisy.com/uploaded-images/logo/pnyd1i5u2KOpKGk5XcajI6MShDnWHVkzU9PND19N.png" alt="Workisy Logo" className='nav-logo'/>
        </Link>
      </div>
      <ul className="nav-links-list">
      
        <li ><Link to="/postjob" className='nav-list-item'>Post a job</Link></li>
        <li onClick={toggleDatabase} className="nav-list-item">
          Candidate Database
          {databaseOpen && (
            <div className="database-dropdown">
              <ul>
                <li><Link to="/search-candidates" className='nav-list-item'> Search Candidates</Link></li>
                <li ><a  className='nav-list-item' href="https://saved-condidates.netlify.app/">Saved Candidates</a></li>
                <li className='nav-list-item'>Unlocked Candidates</li>
              </ul>
            </div>
          )}
        </li>
        <li onClick={toggleReport}><Link  className='nav-list-item'>Reports</Link></li>
        { report && (
             <div className="report-dropdown">
               <ul>
                 <li><Link to="/resodx" className='nav-list-item'>Resdox Report</Link></li>
                 <li><Link to="/job-report" className='nav-list-item'>Job Report</Link></li>
               </ul>
             </div>
        )}

      </ul>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className='profile-name'>
          A
        </div>

        {menuOpen && (
          <div className="menu-dropdown">
            <ul>
              <li className='nav-list-item'>Credits</li>
              <li className='nav-list-item'>Usage</li>
              <li className='nav-list-item'>Billing</li>
              <li className='nav-list-item'>Plans & Pricing</li>
             
              <li ><Link to="/login" className='nav-list-item'>Logout</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;