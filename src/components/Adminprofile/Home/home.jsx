import React from 'react'
import Profile from '../Profilebar/profile'
import Quick from '../Quicklinks/quick'
import Resume from '../Resume'
import Skills from '../Keyskills/skills'
import Employment from '../Employment/employment'
import Education from '../Education/education'
import ItSkills from '../Itskills/itskills'
import Project from '../Project/project'
import ProfileSummary from '../ProfileSummary/summary'
import Awards from '../Awards/awards'
import Certification from '../Certification/certifiaction'
import './home.css'
const Home=()=>{
  return (
    <div className='side-cnt'>
        <div className='profile-left-cnt'>
          <Profile/>
          <Quick/>
        </div>
        <div className='profile-right-cnt'>
          <Resume/>
          <Skills/>
          <Employment/>
          <Education/>
          <ItSkills/>
          <Project/>
          <ProfileSummary/>
          <Awards/>
          <Certification/>
        </div>
    </div>
  )
}

export default Home